import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { DefaultTheme } from 'vitepress'

const docsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const byName = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true })

// Title from frontmatter `title`, else the first `# ` heading, else the file/folder name.
function titleOf(file: string, fallback: string): string {
  const src = fs.readFileSync(file, 'utf8')
  const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const title = fm?.[1].match(/^title:\s*(.+)$/m)?.[1].trim().replace(/^(['"])(.*)\1$/, '$2')
  return title || src.match(/^#\s+(.+)$/m)?.[1].trim() || fallback
}

function linkOf(file: string): string {
  const rel = path.relative(docsDir, file).split(path.sep).join('/')
  return '/' + rel.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
}

function walk(dir: string, exclude: Set<string>): DefaultTheme.SidebarItem[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter((e) => !e.name.startsWith('.') && !exclude.has(path.join(dir, e.name)))
    .sort((a, b) => byName(a.name, b.name))

  const pages: DefaultTheme.SidebarItem[] = entries
    .filter((e) => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md')
    .map((e) => {
      const file = path.join(dir, e.name)
      return { text: titleOf(file, e.name.replace(/\.md$/, '')), link: linkOf(file) }
    })

  const groups = entries
    .filter((e) => e.isDirectory())
    .map((e) => group(path.join(dir, e.name), exclude))
    .filter((g): g is DefaultTheme.SidebarItem => g !== null)

  return [...pages, ...groups]
}

function group(dir: string, exclude: Set<string>): DefaultTheme.SidebarItem | null {
  const index = path.join(dir, 'index.md')
  const hasIndex = fs.existsSync(index)
  const items = walk(dir, exclude)
  if (!items.length && !hasIndex) return null
  // Skip wrapper folders like tcd/ -> postgraduate/ that only hold one subfolder.
  if (!hasIndex && items.length === 1 && items[0].items) return items[0]
  return {
    text: hasIndex ? titleOf(index, path.basename(dir)) : path.basename(dir),
    link: hasIndex ? linkOf(index) : undefined,
    collapsed: true,
    items
  }
}

/**
 * Build a sidebar from the folders under `docs/<base>`. Folders become collapsible
 * groups (the one holding the current page auto-expands); the base index.md is left out.
 */
export function autoSidebar(base = '', exclude: string[] = []): DefaultTheme.SidebarItem[] {
  const root = path.join(docsDir, base)
  const skip = new Set(['.vitepress', 'public', 'node_modules', ...exclude].map((p) => path.join(root, p)))
  return walk(root, skip)
}
