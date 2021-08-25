module.exports = {
  title: '✍️ JS',
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover' }],
  ],
  themeConfig: {
		docsDir: 'docs',
    repo: 'lencx/js-wheel',
    repoLabel: '点 ⭐️ 不迷路',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '编辑此页面',
    lastUpdated: '最后更新时间',

    sidebar: {
      '/': [
        ...getArray(),
        ...getUtils(),
      ],
    }
  }
}

function getArray() {
  return [
    {
      text: 'Array',
      children: [
        { text: 'forEach', link: '/js/array/forEach/' },
        { text: 'map', link: '/js/array/map/' },
      ],
    }
  ]
}
function getUtils() {
  return [
    {
      text: 'Utils',
      children: [
        { text: 'curry', link: '/js/utils/curry/' },
        { text: 'sleep', link: '/js/utils/sleep/' },
      ],
    }
  ]
}