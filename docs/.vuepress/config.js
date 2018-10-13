module.exports = {
  title: '陈新磊技术博客',
  description: 'Just playing around',
  base: '/shinley-blog/',
  themeConfig: {
    sidebarDepth: 2,
    displayAllHeaders: true,
    sidebar: [
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
