import { defineConfig } from 'vitepress'
import cjkFriendly from 'markdown-it-cjk-friendly'
import { autoSidebar } from './sidebar.mts'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { SITE_NAME, SITE_URL, seoHead, sitemapItems } from './seo.mts'
import { generateLlms } from './llms.mts'

export default defineConfig({
  lang: 'en-US',
  title: 'Just In Case',
  description: 'A public knowledge notebook.',
  titleTemplate: ':title | Just In Case',
  lastUpdated: true,
  cleanUrls: true,
  // Ship the page hash map/site data as one cached JS chunk instead of inlining ~40 KB into every HTML page.
  metaChunk: true,
  // Prompt snippets under public/ are raw attachments, not pages.
  srcExclude: ['public/**'],
  sitemap: { hostname: SITE_URL, transformItems: sitemapItems },
  head: [
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'theme-color', content: '#3451b8' }]
  ],
  // Canonical, hreflang, Open Graph and JSON-LD per page; see seo.mts.
  transformHead: seoHead,
  buildEnd: generateLlms,
  // Let **粗体：**正文 close after CJK punctuation, as Obsidian does.
  markdown: {
    config: (md) => md.use(cjkFriendly),
    image: { lazyLoading: true }
  },
  // Compress images (including Obsidian attachments in public/) at build time; formats are unchanged.
  vite: {
    plugins: [ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 78 },
      jpg: { quality: 78 },
      webp: { quality: 80 },
      // Reuse already-compressed images across builds (docs/.vitepress/cache is gitignored).
      cache: true,
      cacheLocation: 'docs/.vitepress/cache/images'
    })],
    // The per-locale local search indexes are ~1.3 MB and lazy-loaded; don't warn about them.
    build: { chunkSizeWarningLimit: 1600 }
  },
  // Per-locale theme settings must live in locales.<key>.themeConfig; VitePress ignores themeConfig.locales.
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'TCD', link: '/tcd/postgraduate/orientation-2026/' },
          { text: 'Career Playbooks', link: '/career/' }
        ],
        sidebar: autoSidebar('', ['zh', 'es'])
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        outline: { level: [2, 3], label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '最后更新于' },
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        darkModeSwitchLabel: '外观',
        langMenuLabel: '切换语言',
        nav: [
          { text: '首页', link: '/zh/' },
          { text: 'TCD', link: '/zh/tcd/postgraduate/orientation-2026/' },
          { text: '职场指南', link: '/zh/career/' }
        ],
        sidebar: autoSidebar('zh')
      }
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/',
      themeConfig: {
        outline: { level: [2, 3], label: 'En esta página' },
        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        lastUpdated: { text: 'Última actualización' },
        sidebarMenuLabel: 'Menú',
        returnToTopLabel: 'Volver arriba',
        darkModeSwitchLabel: 'Apariencia',
        langMenuLabel: 'Cambiar idioma',
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'TCD', link: '/es/tcd/postgraduate/orientation-2026/' },
          { text: 'Guías de carrera', link: '/es/career/' }
        ],
        sidebar: autoSidebar('es')
      }
    }
  },
  themeConfig: {
    outline: { level: [2, 3] },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: { translations: { button: { buttonText: '搜索', buttonAriaLabel: '搜索' } } },
          es: { translations: { button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' } } }
        }
      }
    },
    footer: {
      message: 'Just in case - for your information.',
      copyright: '© 2026 pub.jic.fyi'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyzgeorge/pub.jic.fyi' }
    ]
  }
})
