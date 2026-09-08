import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'JIC',
  description: '公开知识笔记',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'TCD Orientation 2026', link: '/tcd/orientation-2026/' }
    ],
    sidebar: {
      '/tcd/orientation-2026/': [
        {
          text: 'TCD Orientation 2026',
          items: [
            { text: '概览', link: '/tcd/orientation-2026/' },
            { text: '研究生通用迎新', link: '/tcd/orientation-2026/postgraduate-general' },
            { text: '国际学生迎新', link: '/tcd/orientation-2026/international-students' },
            { text: '在 Trinity 工作', link: '/tcd/orientation-2026/working-in-trinity' },
            { text: '同意、边界与支持', link: '/tcd/orientation-2026/positive-sexual-experiences' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyzgeorge/pub.jic.fyi' }
    ]
  }
})
