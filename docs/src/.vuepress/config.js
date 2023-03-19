const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  base: '/Django4-Project-Template/',
  locales: {
    '/': {
      lang: 'zh-TW',
    },
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '《專案文件舘》',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: '彙集專案相關文件',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: '首頁', link: '/' },
      { text: '作業系統', link: '/D01_OS/' },
      { text: '終端機', link: '/D02_Terminal/' },
      { text: '開發環境', link: '/D03_DevEnvironments/' },
      { text: '開發工具', link: '/D04_DevTools/' },
    ],
    sidebar: ['/', '/d100_URS/', '/d200_SDD/', '/d300_SDD/', '/d400_VV/'],
  },
  markdown: {
    lineNumbers: true,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
}
