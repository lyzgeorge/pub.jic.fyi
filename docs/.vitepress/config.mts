import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Just In Case',
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
          { text: 'TCD', link: '/tcd/postgraduate/orientation-2026/' },
          { text: 'Career Playbook', link: '/career/day-day-up-playbook/' }
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
                },
                {
                  text: 'Trinity Sport',
                  link: '/tcd/postgraduate/orientation-2026/trinity-sport'
                }
              ]
            }
          ],
          '/career/day-day-up-playbook/': [
            {
              text: 'The Day Day Up Career Playbook in Action',
              items: [
                { text: 'Overview', link: '/career/day-day-up-playbook/' },
                { text: '1. Resume & Application Materials', link: '/career/day-day-up-playbook/chapter-1-resume-application-materials' },
                { text: '2. Interview Preparation', link: '/career/day-day-up-playbook/chapter-2-interview-preparation' },
                { text: '3. Answering Interview Questions', link: '/career/day-day-up-playbook/chapter-3-answering-interview-questions' },
                { text: '4. Interview Dynamics & Follow-up', link: '/career/day-day-up-playbook/chapter-4-interview-dynamics-follow-up' },
                { text: '5. Offers, Salary & Career Decisions', link: '/career/day-day-up-playbook/chapter-5-offers-salary-career-decisions' },
                { text: '6. Clear Workplace Communication', link: '/career/day-day-up-playbook/chapter-6-clear-workplace-communication' },
                { text: '7. Managing Your Boss', link: '/career/day-day-up-playbook/chapter-7-managing-your-boss' },
                { text: '8. Influence, Conflict & Promotion', link: '/career/day-day-up-playbook/chapter-8-influence-conflict-promotion' },
                { text: '9. Career Strategy & Mindset', link: '/career/day-day-up-playbook/chapter-9-career-strategy-mindset' }
              ]
            },
            {
              text: 'Original Edition',
              items: [
                { text: 'Overview', link: '/career/day-day-up-playbook/original/' },
                { text: '1. Resume & Application Materials', link: '/career/day-day-up-playbook/original/chapter-1-resume-application-materials' },
                { text: '2. Interview Mindset & Preparation', link: '/career/day-day-up-playbook/original/chapter-2-interview-mindset-preparation' },
                { text: '3. Answering Interview Questions', link: '/career/day-day-up-playbook/original/chapter-3-answering-interview-questions' },
                { text: "4. Interview Dynamics & the Interviewer's Mind", link: '/career/day-day-up-playbook/original/chapter-4-interview-dynamics-interviewer-mind' },
                { text: '5. Offers, Salary & Career Decisions', link: '/career/day-day-up-playbook/original/chapter-5-offers-salary-career-decisions' },
                { text: '6. Communication for Non-Native & Chinese Professionals', link: '/career/day-day-up-playbook/original/chapter-6-communication-non-native-chinese-professionals' },
                { text: '7. Managing Your Boss & Upward Communication', link: '/career/day-day-up-playbook/original/chapter-7-managing-your-boss-upward-communication' },
                { text: '8. Workplace Influence, Conflict & Promotion', link: '/career/day-day-up-playbook/original/chapter-8-workplace-influence-conflict-promotion' },
                { text: '9. Career Strategy & Mindset', link: '/career/day-day-up-playbook/original/chapter-9-career-strategy-mindset' }
              ]
            }
          ]
        }
      },
      zh: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: 'TCD', link: '/zh/tcd/postgraduate/orientation-2026/' },
          { text: '职场指南', link: '/zh/career/day-day-up-playbook/' }
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
                },
                {
                  text: 'Trinity Sport',
                  link: '/zh/tcd/postgraduate/orientation-2026/trinity-sport'
                }
              ]
            }
          ],
          '/zh/career/day-day-up-playbook/': [
            {
              text: '每天向上职场指南实战',
              items: [
                { text: '概览', link: '/zh/career/day-day-up-playbook/' },
                { text: '第一章 简历与求职材料', link: '/zh/career/day-day-up-playbook/chapter-1-resume-application-materials' },
                { text: '第二章 面试准备', link: '/zh/career/day-day-up-playbook/chapter-2-interview-preparation' },
                { text: '第三章 回答面试问题', link: '/zh/career/day-day-up-playbook/chapter-3-answering-interview-questions' },
                { text: '第四章 面试互动与后续跟进', link: '/zh/career/day-day-up-playbook/chapter-4-interview-dynamics-follow-up' },
                { text: '第五章 Offer、薪资与职业决策', link: '/zh/career/day-day-up-playbook/chapter-5-offers-salary-career-decisions' },
                { text: '第六章 清晰的职场沟通', link: '/zh/career/day-day-up-playbook/chapter-6-clear-workplace-communication' },
                { text: '第七章 管理你的上级', link: '/zh/career/day-day-up-playbook/chapter-7-managing-your-boss' },
                { text: '第八章 影响力、冲突与晋升', link: '/zh/career/day-day-up-playbook/chapter-8-influence-conflict-promotion' },
                { text: '第九章 职业策略与心态', link: '/zh/career/day-day-up-playbook/chapter-9-career-strategy-mindset' }
              ]
            },
            {
              text: '原版全文',
              items: [
                { text: '概览', link: '/zh/career/day-day-up-playbook/original/' },
                { text: '第一章 简历与求职材料', link: '/zh/career/day-day-up-playbook/original/chapter-1-resume-application-materials' },
                { text: '第二章 面试心态与准备', link: '/zh/career/day-day-up-playbook/original/chapter-2-interview-mindset-preparation' },
                { text: '第三章 回答面试问题', link: '/zh/career/day-day-up-playbook/original/chapter-3-answering-interview-questions' },
                { text: '第四章 面试互动与面试官心理', link: '/zh/career/day-day-up-playbook/original/chapter-4-interview-dynamics-interviewer-mind' },
                { text: '第五章 Offer、薪资与职业决策', link: '/zh/career/day-day-up-playbook/original/chapter-5-offers-salary-career-decisions' },
                { text: '第六章 非母语者与华人职场沟通', link: '/zh/career/day-day-up-playbook/original/chapter-6-communication-non-native-chinese-professionals' },
                { text: '第七章 管理你的上级与向上沟通', link: '/zh/career/day-day-up-playbook/original/chapter-7-managing-your-boss-upward-communication' },
                { text: '第八章 职场影响力、冲突与晋升', link: '/zh/career/day-day-up-playbook/original/chapter-8-workplace-influence-conflict-promotion' },
                { text: '第九章 职业策略与心态', link: '/zh/career/day-day-up-playbook/original/chapter-9-career-strategy-mindset' }
              ]
            }
          ]
        }
      },
      es: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'TCD', link: '/es/tcd/postgraduate/orientation-2026/' },
          { text: 'Guía de carrera', link: '/es/career/day-day-up-playbook/' }
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
                },
                {
                  text: 'Trinity Sport',
                  link: '/es/tcd/postgraduate/orientation-2026/trinity-sport'
                }
              ]
            }
          ],
          '/es/career/day-day-up-playbook/': [
            {
              text: 'Guía de carrera Day Day Up en Acción',
              items: [
                { text: 'Resumen', link: '/es/career/day-day-up-playbook/' },
                { text: 'Cap. 1 Currículum y materiales de postulación', link: '/es/career/day-day-up-playbook/chapter-1-resume-application-materials' },
                { text: 'Cap. 2 Preparación para la entrevista', link: '/es/career/day-day-up-playbook/chapter-2-interview-preparation' },
                { text: 'Cap. 3 Cómo responder preguntas de entrevista', link: '/es/career/day-day-up-playbook/chapter-3-answering-interview-questions' },
                { text: 'Cap. 4 Dinámica de la entrevista y seguimiento', link: '/es/career/day-day-up-playbook/chapter-4-interview-dynamics-follow-up' },
                { text: 'Cap. 5 Ofertas, salario y decisiones de carrera', link: '/es/career/day-day-up-playbook/chapter-5-offers-salary-career-decisions' },
                { text: 'Cap. 6 Comunicación clara en el trabajo', link: '/es/career/day-day-up-playbook/chapter-6-clear-workplace-communication' },
                { text: 'Cap. 7 Cómo gestionar a tu jefe', link: '/es/career/day-day-up-playbook/chapter-7-managing-your-boss' },
                { text: 'Cap. 8 Influencia, conflicto y promoción', link: '/es/career/day-day-up-playbook/chapter-8-influence-conflict-promotion' },
                { text: 'Cap. 9 Estrategia de carrera y mentalidad', link: '/es/career/day-day-up-playbook/chapter-9-career-strategy-mindset' }
              ]
            },
            {
              text: 'Edición Original',
              items: [
                { text: 'Resumen', link: '/es/career/day-day-up-playbook/original/' },
                { text: 'Cap. 1 Currículum y materiales de postulación', link: '/es/career/day-day-up-playbook/original/chapter-1-resume-application-materials' },
                { text: 'Cap. 2 Mentalidad y preparación para la entrevista', link: '/es/career/day-day-up-playbook/original/chapter-2-interview-mindset-preparation' },
                { text: 'Cap. 3 Cómo responder preguntas de entrevista', link: '/es/career/day-day-up-playbook/original/chapter-3-answering-interview-questions' },
                { text: 'Cap. 4 Dinámica de la entrevista y la mente del entrevistador', link: '/es/career/day-day-up-playbook/original/chapter-4-interview-dynamics-interviewer-mind' },
                { text: 'Cap. 5 Ofertas, salario y decisiones de carrera', link: '/es/career/day-day-up-playbook/original/chapter-5-offers-salary-career-decisions' },
                { text: 'Cap. 6 Comunicación para profesionales no nativos y chinos', link: '/es/career/day-day-up-playbook/original/chapter-6-communication-non-native-chinese-professionals' },
                { text: 'Cap. 7 Cómo gestionar a tu jefe y la comunicación ascendente', link: '/es/career/day-day-up-playbook/original/chapter-7-managing-your-boss-upward-communication' },
                { text: 'Cap. 8 Influencia, conflicto y promoción en el trabajo', link: '/es/career/day-day-up-playbook/original/chapter-8-workplace-influence-conflict-promotion' },
                { text: 'Cap. 9 Estrategia de carrera y mentalidad', link: '/es/career/day-day-up-playbook/original/chapter-9-career-strategy-mindset' }
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
