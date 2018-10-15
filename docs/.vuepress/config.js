module.exports = {
  title: '陈新磊的读书笔记',
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
          '/python/subprocess',
          '/python/pexpect',
          '/python/crashzip'
        ]
      },
      {
        title: 'JAVA',
        collapsable: false,
        children: [
          '/java/jvm',
          '/java/thread'
        ]
      },
      {
        title: 'MySQL',
        collapsable: false,
        children: [ 
          '/mysql/1.Install-MySQL5.7.22',
          '/mysql/2.MySQL-User-Manager'
        ]
      }
    ]
  }
}
