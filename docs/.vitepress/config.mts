import { defineConfig } from 'vitepress'
import cjkFriendly from 'markdown-it-cjk-friendly'
import { autoSidebar } from './sidebar.mts'

export default defineConfig({
  lang: 'en-US',
  title: 'Just In Case',
  description: 'A public knowledge notebook.',
  lastUpdated: true,
  // Let **粗体：**正文 close after CJK punctuation, as Obsidian does.
  markdown: {
    config: (md) => md.use(cjkFriendly)
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
          { text: 'Career Playbook', link: '/career/day-day-up-playbook/' }
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
          { text: '职场指南', link: '/zh/career/day-day-up-playbook/' }
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
          { text: 'Guía de carrera', link: '/es/career/day-day-up-playbook/' }
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
