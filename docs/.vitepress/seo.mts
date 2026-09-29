import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { HeadConfig, TransformContext } from 'vitepress'

export const SITE_URL = 'https://pub.jic.fyi'
export const SITE_NAME = 'Just In Case'

const docsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// Locale prefix -> hreflang / og:locale. '' is the English root.
const LOCALES = [
  { prefix: '', hreflang: 'en', og: 'en_US', lang: 'en-US' },
  { prefix: 'zh/', hreflang: 'zh-CN', og: 'zh_CN', lang: 'zh-CN' },
  { prefix: 'es/', hreflang: 'es', og: 'es_ES', lang: 'es-ES' }
]
const HREFLANG: Record<string, string> = Object.fromEntries(LOCALES.map((l) => [l.lang, l.hreflang]))

const read = (rel: string) => fs.readFileSync(path.join(docsDir, rel), 'utf8')
const exists = (rel: string) => fs.existsSync(path.join(docsDir, rel))

// Title from frontmatter `title`, else the first `# ` heading, else the fallback (same rule as sidebar.mts).
export function titleOf(rel: string, fallback: string): string {
  const src = read(rel)
  const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const title = fm?.[1].match(/^title:\s*(.+)$/m)?.[1].trim().replace(/^(['"])(.*)\1$/, '$2')
  return title || src.match(/^#\s+(.+)$/m)?.[1].trim() || fallback
}

// docs-relative .md path -> absolute clean URL (index.md -> dir/, foo.md -> /foo).
export function urlOf(rel: string): string {
  return SITE_URL + '/' + rel.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
}

const absolute = (src: string) => (/^https?:\/\//.test(src) ? src : SITE_URL + (src.startsWith('/') ? '' : '/') + src)

// Frontmatter `image`, else the first root-relative markdown image in the source.
function imageOf(rel: string, frontmatter: Record<string, any>): string | undefined {
  if (frontmatter.image) return absolute(String(frontmatter.image))
  const src = read(rel).match(/!\[[^\]]*\]\((\/[^)\s]+)/)?.[1]
  return src && absolute(src)
}

function localeOf(rel: string) {
  return LOCALES.find((l) => l.prefix && rel.startsWith(l.prefix)) ?? LOCALES[0]
}

// Same page in every locale whose source file exists.
function variantsOf(rel: string) {
  const base = rel.slice(localeOf(rel).prefix.length)
  return LOCALES.map((l) => ({ ...l, rel: l.prefix + base })).filter((v) => exists(v.rel))
}

// Home -> each ancestor folder's index.md (when present) -> the page itself.
function breadcrumbsOf(rel: string, title: string) {
  const { prefix } = localeOf(rel)
  const parts = rel.slice(prefix.length).split('/').slice(0, -1)
  const crumbs = [{ name: SITE_NAME, url: urlOf(prefix + 'index.md') }]
  parts.forEach((_, i) => {
    const index = prefix + parts.slice(0, i + 1).join('/') + '/index.md'
    if (index !== rel && exists(index)) crumbs.push({ name: titleOf(index, parts[i]), url: urlOf(index) })
  })
  crumbs.push({ name: title, url: urlOf(rel) })
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url }))
  }
}

const meta = (key: 'name' | 'property', id: string, content?: string): HeadConfig[] =>
  content ? [['meta', { [key]: id, content }]] : []

const jsonLd = (data: object): HeadConfig =>
  ['script', { type: 'application/ld+json' }, JSON.stringify(data).replace(/</g, '\\u003c')]

/** Per-page canonical, hreflang, Open Graph, Twitter and JSON-LD tags. */
export function seoHead({ pageData, siteData }: TransformContext): HeadConfig[] {
  const rel = pageData.relativePath
  if (!rel || rel === '404.md' || pageData.isNotFound) return []

  const locale = localeOf(rel)
  const isHome = rel === locale.prefix + 'index.md'
  const url = urlOf(rel)
  const title = pageData.title || siteData.title
  const description = pageData.description || siteData.description
  const image = imageOf(rel, pageData.frontmatter)
  const modified = pageData.lastUpdated ? new Date(pageData.lastUpdated).toISOString() : undefined
  const variants = variantsOf(rel)
  const publisher = { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }

  const head: HeadConfig[] = [['link', { rel: 'canonical', href: url }]]
  if (variants.length > 1) {
    for (const v of variants) head.push(['link', { rel: 'alternate', hreflang: v.hreflang, href: urlOf(v.rel) }])
    const en = variants.find((v) => v.prefix === '')
    if (en) head.push(['link', { rel: 'alternate', hreflang: 'x-default', href: urlOf(en.rel) }])
  }

  head.push(
    ...meta('property', 'og:title', title),
    ...meta('property', 'og:description', description),
    ...meta('property', 'og:url', url),
    ...meta('property', 'og:type', isHome ? 'website' : 'article'),
    ...meta('property', 'og:locale', locale.og),
    ...variants.filter((v) => v.prefix !== locale.prefix).flatMap((v) => meta('property', 'og:locale:alternate', v.og)),
    ...meta('property', 'og:image', image),
    ...meta('property', 'article:modified_time', isHome ? undefined : modified),
    ...meta('name', 'twitter:title', title),
    ...meta('name', 'twitter:description', description),
    ...meta('name', 'twitter:image', image)
  )

  head.push(jsonLd(isHome
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'WebSite', name: SITE_NAME, url, inLanguage: locale.lang, publisher },
          publisher
        ]
      }
    : {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article', headline: title, description, inLanguage: locale.lang,
            dateModified: modified, url, mainEntityOfPage: url,
            author: publisher, publisher, ...(image && { image })
          },
          breadcrumbsOf(rel, title)
        ]
      }))

  return head
}

/** Sitemap: short hreflang codes (en, zh-CN, es) plus an x-default pointing at English. */
export function sitemapItems(items: { url: string; links?: { url: string; lang: string }[] }[]) {
  return items.map((item) => {
    if (!item.links) return item
    const links = item.links.map((l) => ({ ...l, lang: HREFLANG[l.lang] ?? l.lang }))
    const en = links.find((l) => l.lang === 'en')
    return { ...item, links: en ? [...links, { url: en.url, lang: 'x-default' }] : links }
  })
}
