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
    // nav: [
    //   { text: '首頁', link: '/' },
    //   { text: '作業系統', link: '/D01_OS/' },
    //   { text: '終端機', link: '/D02_Terminal/' },
    //   { text: '開發環境', link: '/D03_DevEnvironments/' },
    //   { text: '開發工具', link: '/D04_DevTools/' },
    // ],
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/',
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org',
      },
    ],
    sidebar: [
      {
        title: '作業指引',
        collapsable: false,
        children: [
          {
            title: '使用者需求',
            path: '/d100_URS/',
          },
          {
            title: '系統需求',
            path: '/d200_SRS/',
          },
          {
            title: '系統設計',
            path: '/d300_SDD/',
          },
          {
            title: '開發與測試',
            path: '/d400_DEV/',
          },
          {
            title: '系統維運',
            path: '/d500_OP/',
          },
          {
            title: '其它⋯⋯',
            path: '/d900_REF/',
          },
        ],
      },
      {
        title: '電腦硬體',
        collapsable: true,
        children: [
          {
            title: 'SRV-2020',
            path: '/srv-2020/',
            collapsable: true,
            sidebarDepth: 2,
          },
          {
            title: 'MBP-2018',
            path: '/MBP-2018/',
            collapsable: true,
            sidebarDepth: 2,
          },
        ],
      },
      {
        title: '開發環境',
        collapsable: true,
        children: [
          {
            title: 'Django',
            path: '/django/',
          },
          {
            title: 'Node.js',
            path: '/nodejs/',
          },
          {
            title: 'Lua',
            path: '/lua/',
          },
        ],
      },
      {
        title: '參考資料',
        collapsable: true,
        children: [
          {
            title: '快速參考',
            path: '/QuickRef/',
          },
          {
            title: 'Python',
            path: '/python/',
          },
          {
            title: 'Django',
            path: '/django/',
          },
          {
            title: 'Docker',
            path: '/docker/',
          },
          {
            title: '其它⋯⋯',
            path: '/misc/',
          },
        ],
      },
      {
        title: '常用工具',
        collapsable: true,
        children: [
          {
            title: 'VirtualBox',
            path: '/VirtualBox/',
          },
          {
            title: 'PostgreSQL',
            path: '/postgres/',
          },
          {
            title: 'Git',
            path: '/git/',
          },
          {
            title: 'Yabai',
            path: '/yabai/',
          },
          {
            title: 'Vim',
            path: '/vim/',
          },
          {
            title: 'Neovim',
            path: '/nvim/',
          },
          {
            title: 'VS Code',
            path: '/VSCode/',
          },
          {
            title: 'NVCode',
            path: '/NVCode/',
          },
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      // md.use(require('markdown-it-prism'))
      // 使用 markdown-it-mermaid 插件
      md.use(require('markdown-it-mermaid').default)
      // 控制圖片縮放
      md.use(require('markdown-it-imsize'))
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-palette',
    {
      preset: 'sass', // 使用 Sass 預設顏色方案
    },
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
}
