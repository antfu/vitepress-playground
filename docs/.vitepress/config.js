// @ts-check

/** @type {import('vitepress').UserConfig} */
const config = {
  title: 'VitePress Playground',

  themeConfig: {
    repo: 'vuejs/vuex',
    docsDir: 'docs',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Nested', link: '/guide/nested/' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Release Notes', link: 'https://github.com/vuejs/vuex/releases' },
    ],

    sidebar: [
      {
        text: 'Prologue',
        children: [
          { text: 'Index', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Guide Content', link: '/guide/guide-content' },
          { text: 'Content', link: '/guide/content' },
        ],
      },
      {
        text: 'Contents',
        children: [{ text: 'Content', link: '/guide/content' }],
      },
    ],
  },
}

module.exports = config
