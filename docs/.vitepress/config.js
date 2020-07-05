module.exports = {
  title: 'VitePress Playground',

  themeConfig: {
    repo: 'vuejs/vuex',
    docsDir: 'docs',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Nested', link: '/guide/nested/', },
      { text: 'API Reference', link: '/api/' },
      { text: 'Release Notes', link: 'https://github.com/vuejs/vuex/releases' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Prologue',
          children: [
            { text: 'Index', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Guide Content', link: '/guide/guide-content' },
            { text: 'Content', link: '/guide/content' }
          ]
        },
        {
          text: 'Contents',
          children: [
            { text: 'Content', link: '/guide/content' }
          ]
        }
      ],

      '/guide/nested/': [
        {
          text: 'Nested',
          children: [
            { text: 'Nested Index', link: '/guide/nested/index.md' },
            { text: 'Nested Something', link: '/guide/nested/something.md' }
          ]
        }
      ],

      '/api/': [
        {
          text: 'Models',
          children: [
            { text: 'Model', link: '/api/model' }
          ]
        }
      ]
    }
  }
}
