const moment = require('moment');

module.exports = {
  /**
   * 头部自定义
   */
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon/chrome-192x192.png' }],
    ['meta', { name: 'theme-color', content: '#fb6b8f' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-6uTgqJ41VJ' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' }],
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
    'vuepress-plugin-comment': {
      choosen: 'valine',
      options: {
        el: '#valine-vuepress-comment',
        appId: 'qtvehzmgLmfoJlKJ566S7zFQ-gzGzoHsz',
        appKey: 'XV1dedI3jtAx69IqDICIziMs'
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
    '@vuepress/medium-zoom': true,
    'vuepress-plugin-smooth-scroll': true,
      'vuepress-plugin-code-copy': true,
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
              { text: "Hexo-theme-sitio", link: "/sitio/" },
            ]
          },
          { text: "Docs", link: "/basics/"},
          {
            text: "Learn more", link: "/learn/",
            items: [
              {
                text: 'About us',
                items: [
                  { text: 'About us', link: '/learn/About/' },
                ]
              },
            ]
          },
          { text: "Github", link: "https://github.com/Aftersoil/Aftersoil-wiki" },
        ],
        // 导航
        sidebar: {
          // =========================== 首页配置 ==========================
          // "/Aftersoil/": [""],
          // =========================== 前端文档配置 ========================
          "/basics/": ["", "rearend", "other", "Interviewquestions", "code"],
          "/frontend/node/": [""],
          "/frontend/HTML/":["", "HTML", "table", "form"],
          "/frontend/HTML5/":["", "canvas"],
          "/frontend/css/": ["", "Dimensions-and-borders", "box-sizing", "text"],
          "/frontend/BootStrap/": ["", "OtherComponents", "SCSS"],
          "/frontend/jQuery/": ["", "method", "event", "customize"],
          // "/frontend/docsH5C3/":[""],
          "/frontend/javaScript/":["", "typeof-data", "process-control", "function", "array", "api", "date"],
          "/frontend/NodeJS/":["", "module", "http"],
          "/frontend/Express/":["", "middleware", "xz"],
          "/frontend/ajax/":["", "AJAX-XHR", "Ajax-advanced", "summary"],
          // "/frontend/vue/":[""],
          // "/frontend/vuex/":[""],
          // "/frontend/nuxt/": [""],
          "/frontend/webpack/": ["", "install"],
          "/frontend/weChat/":[""],
          // =========================== 后端文档配置 ========================
          "/rearend/MySQL/": ["", "data-storage", "SQL-commands", "Attributes"],
          // =========================== 其它文档配置 ===========================
          "/other/git/": ["", "git-warehouse", "git-recording", "git-history", "git-Revoke", "git-Remotely", "git-label", "git-Alias"],
          "/other/pwa/": [""],
          "/other/download/": ["", "Rear-end", "Other", "statement"],
          "/other/MarkDown/": ["", "md-title", "md-paragraph", "md-lists", "md-block", "md-code", "md-link", "md-image", "md-table", "md-advance"],
          "/other/VScode/": ["",],
          // =========================== 了解更多配置 ===========================
          "/learn/About/": ["",],
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
              { text: "Hexo-theme-sitio", link: "/zh/sitio/" }
            ]
          },
          { text: "笔记", link: "/zh/basics/"},
          {
            text: "了解更多", link: "/zh/learn/",
            items: [
              {
                text: '关于我们',
                items: [
                  { text: '关于我们', link: '/zh/learn/About/' },
                ]
              },
            ]
          },
          { text: "Github", link: "https://github.com/Aftersoil/Aftersoil-wiki" },
        ],
        // 导航
        sidebar: {
          // =========================== 首页配置 ==========================
          // "/zh/Aftersoil/": [""],
          // =========================== 前端文档配置 ========================
          "/zh/basics/": ["", "rearend", "other", "Interviewquestions", "code"],
          "/zh/frontend/node/": [""],
          "/zh/frontend/HTML/":["", "HTML", "table", "form"],
          "/zh/frontend/HTML5/":["",],
          "/zh/frontend/css/": ["", "Dimensions-and-borders", "box-sizing", "text"],
          "/zh/frontend/BootStrap/": ["", "OtherComponents", "SCSS"],
          "/zh/frontend/jQuery/": ["", "method", "event", "customize"],
          // "/zh/frontend/docsH5C3/":[""],
          "/zh/frontend/javaScript/":["", "typeof-data", "process-control", "function", "array", "api", "date"],
          "/zh/frontend/NodeJS/": ["", "module", "http"],
          "/zh/frontend/Express/":["", "middleware", "xz"],
          "/zh/frontend/ajax/": ["", "AJAX-XHR", "Ajax-advanced", "summary"],
          "/zh/frontend/weChat/":[""],
          // "/zh/frontend/javaScriptTop/":[""],
          // "/zh/frontend/vue/":[""],
          // "/zh/frontend/vuex/":[""],
          // "/zh/frontend/nuxt/": [""],
          "/zh/frontend/webpack/": ["", "install"],
          // =========================== 后端文档配置 ========================
          "/zh/rearend/MySQL/": ["", "data-storage", "SQL-commands", "Attributes"],
          // =========================== 其它文档配置 ===========================
          "/zh/other/git/": ["", "git-warehouse", "git-recording", "git-history", "git-Revoke", "git-Remotely", "git-label", "git-Alias"],
          "/zh/other/pwa/": [""],
          "/zh/other/download/": ["", "Rear-end", "Other", "statement"],
          "/zh/other/MarkDown/": ["", "md-title", "md-paragraph", "md-lists", "md-block", "md-code", "md-link", "md-image", "md-table", "md-advance"],
          "/zh/other/VScode/": ["",],
          // =========================== 了解更多配置 ===========================
          "/zh/learn/About/": ["",],
        }
      },
    },

  },

}
