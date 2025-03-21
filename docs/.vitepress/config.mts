import { defineConfig } from 'vitepress'
import markdownKatex from 'markdown-it-katex'
import markdownPlantuml from 'markdown-it-plantuml'
import markdownAdmonition from 'markdown-it-admonition'
import markdownTaskLists from 'markdown-it-task-lists'

export default defineConfig({
  title: 'PLIFFDAX',
  description: 'Лабораторні роботи з дисципліни "Організація баз даних"',
  lang: 'uk',
  base: '/IO-35_DB_gr4/',

  head: [
    ['link', { rel: 'icon', href: './project-icon.png' }],
  ],

  search: {
    provider: 'local'
  },

  themeConfig: {
    nav: [
      { text: '🏠 Початок', link: '/' },
      { text: '📄 Документація', link: '/intro/README' },
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Вступ',
            link: '/intro/README',
          },
          {
            text: 'Розроблення загальних вимог до системи',
            link: '/requirements/README',
            items: [
              { text: 'Аналіз предметної області', link: '/requirements/state-of-the-art' },
              { text: 'Потреби зацікавлених сторін', link: '/requirements/stakeholders-needs' },
            ],
          },
          {
            text: 'Розроблення вимог до функціональности системи',
            link: '/use cases/README',
            items:[
              '/requirements/state-of-the-art',
              '/requirements/stakeholders-needs',
            ]
          },
          {
            text: 'Проектування інформаційного забезпечення',
            link: '/design/README',
          },
          {
            text: 'Реалізація інформаційного та програмного забезпечення',
            link: '/software/README',
          },
          {
            text: 'Тестування працездатності системи',
            link: '/test/README',
          },
          {
            text: 'Висновки',
            link: '/conclusion/README',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/pliffdaxq' },
      { icon: 'github', link: 'https://github.com/luckyscammer/IO-35_DB_gr4' },
    ],

    footer: {
      copyright: 'MIT Licensed | Copyright © 2025 Pliffdax'
    },
  },

  markdown: {
    config: (md) => {
      md.set({ html: true })
      md.use(markdownKatex)
      md.use(markdownPlantuml)
      md.use(markdownAdmonition)
      md.use(markdownTaskLists)
    }
  }
})
