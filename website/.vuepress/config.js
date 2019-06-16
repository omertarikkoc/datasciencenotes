module.exports = {
  title: "Data Science Notes",
  description: "Simple notes for Dr. Rizk's Data Science course",
  serviceWorker: {
    updatePopup: true
  },
  themeConfig: {
    repo: 'omertarik96/datasciencenotes',
    repoLabel: 'Contribute!',
    docsDir: 'website',
    editLinks: true,
    editLinkText: 'Help us improve this note!',
    lastUpdated: 'Last Updated',
    sidebar: 'auto',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Sections',
        link: '/sections/'
      },
    ]
  }
}
