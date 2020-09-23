/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f2c04eca468a9bbe4f72336ff4748104"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "62396a515e1cfd477e51c1fca87faa33"
  },
  {
    "url": "assets/css/0.styles.3f9474d2.css",
    "revision": "10d7dcc31d26915c67c495f42d8c7a91"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fab4b5bf.js",
    "revision": "8404502d67c9401df74eacba2e4647fb"
  },
  {
    "url": "assets/js/11.54595b3e.js",
    "revision": "cadf0bf7c069f368b22c65426c56277e"
  },
  {
    "url": "assets/js/12.5fa9a672.js",
    "revision": "ad0cc5f84d51b77be7c2f3274e29f836"
  },
  {
    "url": "assets/js/13.86022034.js",
    "revision": "d7ef5544d542f34103cac2367d408d1b"
  },
  {
    "url": "assets/js/14.41afeb54.js",
    "revision": "f570ccc0a26701c90909dca14847c08d"
  },
  {
    "url": "assets/js/15.bffa1f7d.js",
    "revision": "3c3076f876f9a5a85f049dd09cd9d3cb"
  },
  {
    "url": "assets/js/16.130ecf42.js",
    "revision": "92580131f619ce2d784af6aa670faa02"
  },
  {
    "url": "assets/js/17.44729f4f.js",
    "revision": "b0e7387b54db73afe486fc118b9d778a"
  },
  {
    "url": "assets/js/18.2361356e.js",
    "revision": "5014a249939514b44841485a41cd3a30"
  },
  {
    "url": "assets/js/19.7ac9ee12.js",
    "revision": "6d34804ba628c1817318e9b9d836c07b"
  },
  {
    "url": "assets/js/2.c8de306c.js",
    "revision": "d12130bf5d2d01ac3b07788e511b6e7f"
  },
  {
    "url": "assets/js/20.a2d86ce4.js",
    "revision": "169cf45bb135df78e6b17a37844a85e3"
  },
  {
    "url": "assets/js/21.8bf1b53d.js",
    "revision": "edc567c8bda13088080d420848ceeeed"
  },
  {
    "url": "assets/js/22.9a99d4b8.js",
    "revision": "8c877cc93e0763a1f889e7427031b5d1"
  },
  {
    "url": "assets/js/23.061b926e.js",
    "revision": "aad2b27149e9eba2146e15beb179b248"
  },
  {
    "url": "assets/js/24.a7b3db35.js",
    "revision": "302ab720f9f25d36704c07d3d69976ab"
  },
  {
    "url": "assets/js/25.e683dfe1.js",
    "revision": "277922cccb8bbded2aa41238cd0ccaf2"
  },
  {
    "url": "assets/js/26.286a4a7d.js",
    "revision": "4240903868c9f50c14bdaab998f9dd6f"
  },
  {
    "url": "assets/js/27.59df53bd.js",
    "revision": "2ff6be851a3e170a1e52849467301e19"
  },
  {
    "url": "assets/js/28.3f43e0c3.js",
    "revision": "4c0f34b4779acea9cc1d574b3e411b9f"
  },
  {
    "url": "assets/js/29.a7d01df0.js",
    "revision": "ee03adee04802ca7d6d070b6833fb3d6"
  },
  {
    "url": "assets/js/3.a2dcdf2b.js",
    "revision": "1fd3b899cd97d1b4f13f9e4220ca74d6"
  },
  {
    "url": "assets/js/30.a53a4aac.js",
    "revision": "3157d1abdab8bfa3681a4f2c6fa58c98"
  },
  {
    "url": "assets/js/31.31608ae8.js",
    "revision": "3d0413899429479c39c267b17357bb92"
  },
  {
    "url": "assets/js/32.03f97b4f.js",
    "revision": "670654a4016f46cae4d32efc3d5e60f3"
  },
  {
    "url": "assets/js/4.70359b06.js",
    "revision": "b6774e028090bad9cba0bbac358f6eba"
  },
  {
    "url": "assets/js/5.07bf589a.js",
    "revision": "2092c303b4670ad7cc9825eb9da782f1"
  },
  {
    "url": "assets/js/6.1d8a3054.js",
    "revision": "8fd5dd66d4944569dee7c1089ac5f4ce"
  },
  {
    "url": "assets/js/7.cc921041.js",
    "revision": "b68ac390212c7b683fe62eec71eccc25"
  },
  {
    "url": "assets/js/8.80e0a917.js",
    "revision": "5e8cb1751d94a1ff4094139f7dff4949"
  },
  {
    "url": "assets/js/9.5775194f.js",
    "revision": "e19d47ba1fec974aab2207b687d134b6"
  },
  {
    "url": "assets/js/app.ff4af873.js",
    "revision": "b19e318b4e25dc5226a61eee268a6889"
  },
  {
    "url": "basics/index.html",
    "revision": "da072b162440c24e2cdaa479945f5822"
  },
  {
    "url": "basics/other.html",
    "revision": "2cb61111437d3da9c529b02c5f8befce"
  },
  {
    "url": "basics/rearend.html",
    "revision": "8411005045da3203a46ed50ea1136f1c"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "72feb0050413207b3f5105e5f871ceb7"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "9586b355a13d232620dcf9f0e7405797"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "27385e7304532ee697de8aeaeaa514a7"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "aebaaafe12e02df156dad2e09f283a6e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "7675ffa6b54bb545a01133f7f0cfe406"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "ee6e461ce1990af3fbfd51b5e05afe51"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "da76481bd7c1cf5be99c395063cff72e"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "9b2c772ec3a318266f1834aad3c35b72"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "61d71ab551c364b542b5192efb7e2eb8"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "a717782e65b40df44816da14678bb38d"
  },
  {
    "url": "frontend/docsHtml/index.html",
    "revision": "a39c876317a9a85357e62ae2f6900fe2"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "e1d2f03e9a5e8550266976ad090a500a"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "944f5085634cee6d89e4671c06b932e7"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "21712ee3ae74fdc24382e15f0b11f700"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "1a6df73399c9a67a541e629c11cf4d0a"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "3fb19536000b3217ce57edf2f6d2ff4f"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "6ec1161102411b257763beb8067cb456"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "2048772ed07c628ae3ecdc39773acea7"
  },
  {
    "url": "icon/chrome-192x192.png",
    "revision": "a969f3640e466d21f688891f45515075"
  },
  {
    "url": "icon/chrome-256x256.png",
    "revision": "98ae30e488646725dcaf0938162b10b8"
  },
  {
    "url": "index.html",
    "revision": "66f8a6a9dacb5b8b95d7dc50d85cbf17"
  },
  {
    "url": "sitio/index.html",
    "revision": "d481df038ee9e80647e678e9ec9b4864"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "cb9ed69d8f87b88071566af2d20cb355"
  },
  {
    "url": "zh/index.html",
    "revision": "9ef4db46b004e4d52d1c4aa722a9e29e"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "03220bf67c979b5f335907988019e9a6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
