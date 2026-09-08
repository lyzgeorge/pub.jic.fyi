import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'pub.jic.fyi',
  description: 'A public knowledge notebook.',
  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/'
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/'
    }
  },
  themeConfig: {
    locales: {
      root: {
        nav: [{ text: 'Home', link: '/' }]
      },
      zh: {
        nav: [{ text: '首页', link: '/zh/' }]
      },
      es: {
        nav: [{ text: 'Inicio', link: '/es/' }]
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyzgeorge/pub.jic.fyi' }
    ]
  }
})
