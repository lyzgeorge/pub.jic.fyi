import fs from 'node:fs'
import path from 'node:path'
import type { SiteConfig } from 'vitepress'

const SITE = 'https://pub.jic.fyi'
const LOCALES = [
  { key: '', label: '', home: 'Home' },
  { key: 'zh', label: '简体中文', home: '首页' },
  { key: 'es', label: 'Español', home: 'Inicio' }
]
const SKIP = new Set(['.vitepress', 'public', 'node_modules'])
const byName = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true })

interface Page { rel: string; locale: string; area: string; title: string; description: string; url: string; md: string; body: string }

function walk(dir: string, root: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || SKIP.has(e.name)) continue
    const file = path.join(dir, e.name)
    if (e.isDirectory()) walk(file, root, out)
    else if (e.name.endsWith('.md')) out.push(path.relative(root, file).split(path.sep).join('/'))
  }
  return out
}

const unquote = (s = '') => s.trim().replace(/^(['"])(.*)\1$/, '$2')
const cleanUrl = (rel: string) => '/' + rel.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')

// First prose paragraph, stripped of markdown, as a fallback description.
function firstParagraph(body: string): string {
  const para = body.split(/\n\s*\n/).map((p) => p.trim())
    .find((p) => p && !/^(#|!\[|<|[-*>|]|\d+\.|```|:::)/.test(p)) ?? ''
  const text = para.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '').replace(/\s+/g, ' ')
  return text.length > 200 ? text.slice(0, 197).replace(/\s+\S*$/, '') + '…' : text
}

// Make links and asset paths absolute so the markdown works outside the site.
function absolutize(body: string, rel: string): string {
  const base = new URL(rel, SITE + '/')
  const fix = (href: string) => {
    if (/^([a-z]+:|#)/i.test(href)) return href
    const u = new URL(href, base)
    if (!u.pathname.endsWith('.md') && !u.pathname.startsWith('/assets/') && !/\.[a-z0-9]+$/i.test(u.pathname)) {
      u.pathname = u.pathname.endsWith('/') ? u.pathname + 'index.md' : u.pathname + '.md'
    }
    return u.href
  }
  return body
    .replace(/(\]\()(<?)([^)\s>]+)/g, (_, a, lt, href) => a + lt + fix(href))
    .replace(/((?:src|href)=["'])([^"']+)/g, (_, a, href) => a + fix(href))
}

function readPage(srcDir: string, rel: string): Page {
  const src = fs.readFileSync(path.join(srcDir, rel), 'utf8')
  const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  const body = (fm ? src.slice(fm[0].length) : src).trim()
  const field = (k: string) => unquote(fm?.[1].match(new RegExp(`^${k}:\\s*(.+)$`, 'm'))?.[1])
  const parts = rel.split('/')
  const locale = LOCALES.some((l) => l.key && l.key === parts[0]) ? parts.shift()! : ''
  const url = cleanUrl(rel)
  return {
    rel, locale, url,
    area: parts.length > 1 ? parts[0] : '',
    title: field('title') || body.match(/^#\s+(.+)$/m)?.[1].trim() || path.basename(rel, '.md'),
    description: field('description') || firstParagraph(body.replace(/^#\s+.+$/m, '')),
    md: rel,
    body: absolutize(body, rel)
  }
}

// Section name for an area: title of its shallowest index.md (e.g. tcd -> "TCD Postgraduate Orientation 2026").
function areaTitle(pages: Page[]): string {
  const idx = pages.filter((p) => p.rel.endsWith('index.md')).sort((a, b) => a.rel.split('/').length - b.rel.split('/').length)
  return (idx[0] ?? pages[0]).title
}

const mirror = (p: Page) =>
  `---\ntitle: ${JSON.stringify(p.title)}\n` +
  (p.description ? `description: ${JSON.stringify(p.description)}\n` : '') +
  `source: ${SITE}${p.url}\n---\n\n${p.body}\n`

/** Write llms.txt, llms-full*.txt and a .md mirror of every page into outDir. Call from `buildEnd`. */
export async function generateLlms(siteConfig: Pick<SiteConfig, 'srcDir' | 'outDir'>) {
  const { srcDir, outDir } = siteConfig
  // Sort so a folder's index.md comes before its other pages.
  const pages = walk(srcDir, srcDir).sort((a, b) => byName(a.replace(/index\.md$/, ''), b.replace(/index\.md$/, '')))
    .map((rel) => readPage(srcDir, rel))

  for (const p of pages) {
    const dest = path.join(outDir, p.md)
    if (fs.existsSync(dest)) { console.warn(`[llms] skip mirror, ${p.md} already exists in outDir`); continue }
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.writeFileSync(dest, mirror(p))
  }

  const item = (p: Page) => `- [${p.title}](${SITE}/${p.md})${p.description ? ': ' + p.description : ''}`
  const sections: string[] = []
  for (const { key, label, home } of LOCALES) {
    const inLocale = pages.filter((p) => p.locale === key)
    const areas = [...new Set(inLocale.map((p) => p.area))]
    for (const area of areas) {
      const group = inLocale.filter((p) => p.area === area)
      const name = area ? areaTitle(group) : home
      sections.push(`## ${label ? `${label}: ${name}` : name}\n\n${group.map(item).join('\n')}`)
    }
  }
  fs.writeFileSync(path.join(outDir, 'llms.txt'), [
    '# Just In Case',
    '> A public knowledge notebook of practical references and carefully sourced notes: Trinity College Dublin postgraduate orientation guides and career playbooks.',
    'pub.jic.fyi is a knowledge notebook, not an authority. Pages are published in English, Simplified Chinese (/zh/) and Spanish (/es/); each link below points to a plain markdown copy of the page. For decisions involving schools, governments, employers, healthcare, immigration, law or finance, check the original sources cited on each page. Full-text bundles: ' +
      `${SITE}/llms-full.txt (English), ${SITE}/llms-full.zh.txt, ${SITE}/llms-full.es.txt.`,
    ...sections
  ].join('\n\n') + '\n')

  for (const { key } of LOCALES) {
    const docs = pages.filter((p) => p.locale === key)
      .map((p) => `# ${p.title}\n\nSource: ${SITE}${p.url}\n\n${p.body.replace(/^#\s+.+\n+/, '')}`)
    fs.writeFileSync(path.join(outDir, key ? `llms-full.${key}.txt` : 'llms-full.txt'), docs.join('\n\n---\n\n') + '\n')
  }
}
