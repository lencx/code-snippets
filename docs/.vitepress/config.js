module.exports = {
  title: '✍️ </>',
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    // https://stackoverflow.com/questions/49568333/pwa-icons-are-not-used-in-ios-11-3
    ['link', { rel: 'apple-touch-icon', size: '180x180', href: '/ios-180x180.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover' }],
    ['meta', { name: 'author', content: 'lencx' }],
    ['meta', { property: 'og:title', content: 'Code Snippets' }],
    ['meta', { property: 'og:image', content: 'https://code.lencx.tech/logo.png' }],
    ['meta', { property: 'og:description', content: '✍️ code snippets - 手写系列' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://code.lencx.tech/logo.png' }],
  ],

  themeConfig: {
		docsDir: 'docs',
    repo: 'lencx/code-snippets',
    repoLabel: '点 ⭐️ 不迷路',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Article', link: '/posts/guide/', activeMatch: '^/posts/' },
      { text: 'JavaScript', link: '/js/array/forEach/', activeMatch: '^/js/' },
      { text: 'React', link: '/react/send_code/', activeMatch: '^/react/' },
      { text: 'Vue', link: '/vue/scroll_progress_bar/', activeMatch: '^/vue/' },
      { text: 'CSS', link: '/scss/mixin/', activeMatch: '^/s?css/' },
    ],

    sidebar: {
      '/posts/': getPosts(),
      '/js/': getJS(),
      '/react/': getReact(),
      '/vue/': getVue(),
      '/css/': getCss(),
      '/scss/': getCss(),
    }
  }
}

function getPosts() {
  return [
    { text: 'Guide', link: '/posts/guide/' },
    {
      text: 'Article',
      // collapsable: true,
      children: [
        { text: 'This 关键字详解', link: '/posts/this/' },
      ],
    }
  ]
}

function getJS() {
  return [
    {
      text: 'Array',
      children: [
        { text: 'forEach', link: '/js/array/forEach/' },
        { text: 'map', link: '/js/array/map/' },
        { text: 'filter', link: '/js/array/filter/' },
        { text: 'reduce', link: '/js/array/reduce/' },
      ],
    },
    {
      text: 'Function',
      children: [
        { text: 'call', link: '/js/func/call/' },
        { text: 'apply', link: '/js/func/apply/' },
      ],
    },
    {
      text: 'Node.js',
      children: [
        { text: 'Event Emitter', link: '/js/node/eventemitter/' },
      ],
    },
    {
      text: 'Utils',
      children: [
        { text: 'curry', link: '/js/utils/curry/' },
        { text: 'sleep', link: '/js/utils/sleep/' },
      ],
    },
    {
      text: 'Browser',
      children: [
        { text: 'getURLParameters', link: '/js/browser/getURLParameters/' },
      ],
    }
  ]
}

function getReact() {
  return [
    {
      text: 'React',
      children: [
        { text: 'SendCode', link: '/react/send_code/' },
      ],
    },
  ]
}

function getVue() {
  return [
    {
      text: 'Vue3',
      children: [
        { text: 'ScrollProgress', link: '/vue/scroll_progress_bar/' },
      ],
    },
  ]
}

function getCss() {
  return [
    // {
    //   text: 'CSS',
    //   children: [],
    // },
    {
      text: 'SCSS',
      children: [
        { text: 'Mixin', link: '/scss/mixin/' },
      ],
    },
  ]
}