module.exports = {
  title: '陈新磊技术博客',
  description: 'Just playing around',
  base: '/',
  themeConfig: {
    sidebarDepth: 2,
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Python',
        collapsable: false,
        children: [
          '/python/fabric',
          '/python/subprocess'
        ]
      },
      {
        title: 'JAVA',
        collapsable: false,
        children: [
          '/java/jvm',
          '/java/spring'
        ]
      },
      {
        title: 'MySQL',
        collapsable: false,
        children: [ 
          '/mysql/suoyin'
        ]
      }
    ]
  }
}
