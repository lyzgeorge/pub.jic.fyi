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
        nav: [
          { text: 'Home', link: '/' },
          { text: 'TCD', link: '/tcd/postgraduate/orientation-2026/' }
        ],
        sidebar: {
          '/tcd/postgraduate/orientation-2026/': [
            {
              text: 'Postgraduate Orientation 2026',
              items: [
                { text: 'Overview', link: '/tcd/postgraduate/orientation-2026/' },
                {
                  text: 'Postgraduate General Orientation',
                  link: '/tcd/postgraduate/orientation-2026/postgraduate-general-orientation'
                },
                {
                  text: 'International Student Orientation',
                  link: '/tcd/postgraduate/orientation-2026/international-student-orientation'
                },
                {
                  text: 'Positive Sexual Experiences',
                  link: '/tcd/postgraduate/orientation-2026/positive-sexual-experiences'
                }
              ]
            }
          ]
        }
      },
      zh: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: 'TCD', link: '/zh/tcd/postgraduate/orientation-2026/' }
        ],
        sidebar: {
          '/zh/tcd/postgraduate/orientation-2026/': [
            {
              text: '2026 研究生迎新',
              items: [
                { text: '概览', link: '/zh/tcd/postgraduate/orientation-2026/' },
                {
                  text: '研究生综合迎新指南',
                  link: '/zh/tcd/postgraduate/orientation-2026/postgraduate-general-orientation'
                },
                {
                  text: '国际学生迎新',
                  link: '/zh/tcd/postgraduate/orientation-2026/international-student-orientation'
                },
                {
                  text: '积极的性体验与同意',
                  link: '/zh/tcd/postgraduate/orientation-2026/positive-sexual-experiences'
                }
              ]
            }
          ]
        }
      },
      es: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'TCD', link: '/es/tcd/postgraduate/orientation-2026/' }
        ],
        sidebar: {
          '/es/tcd/postgraduate/orientation-2026/': [
            {
              text: 'Orientación de posgrado 2026',
              items: [
                { text: 'Resumen', link: '/es/tcd/postgraduate/orientation-2026/' },
                {
                  text: 'Orientación general de posgrado',
                  link: '/es/tcd/postgraduate/orientation-2026/postgraduate-general-orientation'
                },
                {
                  text: 'Estudiantes internacionales',
                  link: '/es/tcd/postgraduate/orientation-2026/international-student-orientation'
                },
                {
                  text: 'Experiencias sexuales positivas',
                  link: '/es/tcd/postgraduate/orientation-2026/positive-sexual-experiences'
                }
              ]
            }
          ]
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyzgeorge/pub.jic.fyi' }
    ]
  }
})
