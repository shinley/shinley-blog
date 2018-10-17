module.exports = {
  title: '陈新磊的读书笔记',
  description: 'Just playing around',
  base: '/',
  themeConfig: {
    sidebarDepth: 2,
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
          '/mysql/2.MySQL-User-Manager',
          '/mysql/3.MySQL备份与还原',
          '/mysql/4.七种连接方式',
          '/mysql/5.MySQL索引01',
          '/mysql/6.MySQL索引02',
          '/mysql/7.单表优化案例',
          '/mysql/8.两表和三表优化案例',
          '/mysql/9.索引优化01',
          '/mysql/10.索引优化02',
          
        ]
      }
    ]
  }
}
