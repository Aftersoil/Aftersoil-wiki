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
      serviceWorker: true,
      updatePopup: true
    },
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
              { text: "Hexo-theme-sitio", link: "/sitio/" }
            ]
          },
          { text: "Docs", link: "/basics/" },
          { text: "Github", link: "https://github.com/Aftersoil/Aftersoil-wiki" },
        ],
        // 导航
        sidebar: {
          "/Aftersoil/": [""],
          "/basics/": ["", "other", "rearend"],
          "/frontend/node/": [""],
        }
      },
  
      // 中文
      "/zh/": {
        selectText: '选择语言',
        label: ' 简体中文',
        editLinkText: 'Edit this page on GitHub',
        // 中文导航
        nav: [
          { text: "首页", link: "/" },
          {
            text: "文档", link: "/doc",
            items: [
              { text: "Hexo-theme-sitio", link: "/zh/sitio/" }
            ]
          },
          { text: "Github", link: "https://github.com/Aftersoil/Aftersoil-wiki" },
        ],
        // 导航
        sidebar: {
          "/zh/Aftersoil/": [""]
        }
      },
    },
    
  },
  
}
