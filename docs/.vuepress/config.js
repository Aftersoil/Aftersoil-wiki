const moment = require('moment');

module.exports = {
  /**
   * 头部自定义
   */
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon/chrome-192x192.png' }],
    ['meta', { name: 'theme-color', content: '#663403' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-6uTgqJ41VJ' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' }],
    ['meta', { "HTTP-EQUIV": 'pragma', content: 'no-cache' }],
    ['meta', { "HTTP-EQUIV": 'Cache-Control', content: 'no-store, must-revalidate' }],
    ['meta', { "HTTP-EQUIV": 'expires', content: 'Wed, 26 Feb 1997 08:21:57 GMT' }],
    ['meta', { "HTTP-EQUIV": 'expires', content: '0' }],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?69622073a8649e8a707a918060cc1abc";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ],
  ],

  /**
   * 外部插件
   */
  plugins: {
    '@vuepress/pwa': {
      updatePopup: {
        "/": {
          message: 'New content is available',
          buttonText: 'Refresh',
        },
        "/zh/": {
          message: '发现新内容可用',
          buttonText: '刷新',
        }
      }
    },
    // '@vuepress/last-updated': {
    //   transformer: (timestamp, lang) => {
    //     moment.locale(lang);
    //     return moment(timestamp).format('YYYY/MM/DD HH:mm:ss')
    //   }
    // },
    '@vuepress-something/vuepress-plugin-dplayer': true,
    '@vuepress/back-to-top': true,
    'vuepress-plugin-smooth-scroll': true
  },

  /**
   * 默认语言英文
   */
  locales: {
    // 英文
    "/": {
      lang: "en-US",
      title: "Aftersoil-wiki",
      description: "后土维基 | 后土文档 | Aftersoil | Aftersoil-wiki",
    },

    // 中文
    "/zh/": {
      lang: "zh-CN",
      title: "后土维基",
      description: "后土维基 | 后土文档 | Aftersoil | Aftersoil-wiki",
    },
  },

  /**
   * 导航
   */
  themeConfig: {
    locales: {
      // 英文
      "/": {
        selectText: 'Languages',
        label: 'English',
        editLinkText: '在 GitHub 上编辑此页',
        // 英文导航
        nav: [
          { text: "Home", link: "/" },
          {
            text: "Documents", link: "/doc",
            items: [
              // { text: "Hexo-theme-sitio", link: "/sitio/" },
            ]
          },
          { text: "Docs", link: "/basics/"},
          { text: "Github", link: "https://github.com/Aftersoil/Aftersoil-wiki" },
        ],
        // 导航
        sidebar: {
          // ===================================================
          "/Aftersoil/": [""],
          "/basics/": ["", "rearend", "other", "Interviewquestions", "code"],
          // ===================================================
          "/frontend/node/": [""],
          "/frontend/HTML/":["", "HTML", "table", "form"],
          "/frontend/css/": ["", "size", "box", "TextFormatting", "selector"],
          "/frontend/BootStrap/": ["", "OtherComponents", "SCSS"],
          "/frontend/jQuery/": ["", "method", "event", "customize"],
          // "/frontend/docsH5C3/":[""],
          "/frontend/javaScript/":["", "typeof-data", "process-control", "function", "array", "api"],
          // "/frontend/javaScriptTop/":[""],
          // "/frontend/vue/":[""],
          // "/frontend/vuex/":[""],
          // "/frontend/nuxt/": [""],
          "/frontend/webpack/": ["", "install"],
          // ====================================================
          "/other/git/": [""],
          "/other/pwa/": [""],
          // ====================================================
        }
      },
  
      // 中文
      "/zh/": {
        selectText: '选择语言',
        label: ' 简体中文',
        editLinkText: 'Edit this page on GitHub',
        // 中文导航
        nav: [
          { text: "首页", link: "/zh/" },
          {
            text: "文档", link: "/doc",
            items: [
              // { text: "Hexo-theme-sitio", link: "/zh/sitio/" }
            ]
          },
          { text: "笔记", link: "/zh/basics/"},
          { text: "Github", link: "https://github.com/Aftersoil/Aftersoil-wiki" },
        ],
        // 导航
        sidebar: {
          "/zh/Aftersoil/": [""],
          "/zh/Aftersoil/": [""],
          "/zh/basics/": ["", "rearend", "other", "Interviewquestions", "code"],
          "/zh/frontend/node/": [""],
          "/zh/frontend/HTML/":["", "HTML", "table", "form"],
          "/zh/frontend/css/": ["", "size", "box", "TextFormatting", "selector"],
          "/zh/frontend/BootStrap/": ["", "OtherComponents", "SCSS"],
          "/zh/frontend/jQuery/": ["", "method", "event", "customize"],
          // "/zh/frontend/docsH5C3/":[""],
          // "/zh/frontend/javaScript/":[""],
          // "/zh/frontend/javaScriptTop/":[""],
          // "/zh/frontend/vue/":[""],
          // "/zh/frontend/vuex/":[""],
          // "/zh/frontend/nuxt/": [""],
          "/zh/frontend/webpack/": ["", "install"],
          // ====================================================
          "/zh/other/git/": [""],
          "/zh/other/pwa/": [""],
        }
      },
    },

  },

}
