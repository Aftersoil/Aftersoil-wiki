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
    '@vuepress/search': {
      searchMaxSuggestions: 10
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
  // locales: {
  //   // 英文
  //   "/": {
  //     lang: "en-US",
  //     title: "Aftersoil-wiki",
  //     description: "后土维基 | 后土文档 | Aftersoil | Aftersoil-wiki",
  //   },

  //   // 中文
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "后土维基",
  //     description: "后土维基 | 后土文档 | Aftersoil | Aftersoil-wiki",
  //   },
  // },

  locales: {
    // 英文
    "/": {
      lang: "en-US",
      title: "Aftersoil-wiki",
      description: "后土维基 | 后土文档 | Aftersoil | Aftersoil-wiki",
    },
  },

  /**
   * 导航
   */
   themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: "Home", link: "/" },
          { text: "Docs", link: "/basics/" },
          {
            text: "Documents", link: "/doc/",
            items: [
              { text: "Aftersoil-npm-api", link: "/npm-api/" },
              { text: "Hexo-theme-sitio", link: "/sitio/" },
            ]
          },
          {
            text: "Learn more", link: "/learn/",
            items: [
              { text: 'About us', link: '/learn/About/' },
            ]
          },
          { text: "Github", link: "https://github.com/Aftersoil/Aftersoil-wiki" }
          
          // { editLinkText: "在 GitHub 上编辑此页" },
        ],
        sidebar: {
          // =========================== 首页配置 ==========================
          "/Aftersoil/": [""],
          // =========================== 前端文档配置 ========================
          "/basics/": ["", "rearend", "other", "Interviewquestions", "code"],
          "/frontend/node/": [""],
          "/frontend/HTML/":["", "HTML", "table", "form"],
          "/frontend/HTML5/":["", "canvas"],
          "/frontend/css/": ["", "Dimensions-and-borders", "box-sizing", "text"],
          "/frontend/BootStrap/": ["", "OtherComponents", "SCSS"],
          "/frontend/jQuery/": ["", "method", "event", "customize"],
          "/frontend/javaScript/": ["", "typeof-data", "process-control", "function", "array", "api", "date"],
          "/frontend/typeScript/":[""],
          "/frontend/NodeJS/":["", "module", "http"],
          "/frontend/Express/":["", "middleware", "xz"],
          "/frontend/ajax/":["", "AJAX-XHR", "Ajax-advanced", "summary"],
          "/frontend/webpack/": ["", "install"],
          "/frontend/weChat/":[""],
          // =========================== 项目文档配置 ========================
          "/sitio/": [
            "",
            "guide",
            {
              title: '开发指南',
              collapsable: true,
              sidebarDepth: 3,
              children: ["Development",]
            }
          ],
          "/npm-api/":[""],
          // =========================== 后端文档配置 ========================
          "/rearend/MySQL/": ["", "data-storage", "SQL-commands", "Attributes"],
          // =========================== 其它文档配置 ===========================
          "/other/git/": ["", "git-warehouse", "git-recording", "git-history", "git-Revoke", "git-Remotely", "git-label", "git-Alias", "git-branch", "git-branch-Introduction", "git-branch-merge", "git-branch-managemen", "git-branch-process", "git-branch-remotely", "git-branch-rebase"],
          "/other/pwa/": [""],
          "/other/download/": ["", "Rear-end", "Other", "statement"],
          "/other/MarkDown/": ["", "md-title", "md-paragraph", "md-lists", "md-block", "md-code", "md-link", "md-image", "md-table", "md-advance"],
          "/other/VScode/": ["",],
          // =========================== 了解更多配置 ===========================
          "/learn/About/": ["",],
        }
      },
    }
  },
   
}
