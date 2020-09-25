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
    "revision": "464d5ec0abd331ba2bfb32ca9c48897c"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "b7b2bc434e3da255523965920c396e20"
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
    "url": "assets/js/10.780e029a.js",
    "revision": "7b86393438b57c6ef2189a476fa41c2b"
  },
  {
    "url": "assets/js/11.54595b3e.js",
    "revision": "cadf0bf7c069f368b22c65426c56277e"
  },
  {
    "url": "assets/js/12.f3c41664.js",
    "revision": "6069da26cd9a6b5a0b315741785407d7"
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
    "url": "assets/js/18.43680695.js",
    "revision": "00123a29c6a2bb7f66e6014d2dd1283b"
  },
  {
    "url": "assets/js/19.7ac9ee12.js",
    "revision": "6d34804ba628c1817318e9b9d836c07b"
  },
  {
    "url": "assets/js/2.ae4733c6.js",
    "revision": "d12130bf5d2d01ac3b07788e511b6e7f"
  },
  {
    "url": "assets/js/20.19074d09.js",
    "revision": "ee42d60c212bbe97e43460c4cfde944f"
  },
  {
    "url": "assets/js/21.a42669a2.js",
    "revision": "550a2294728e78cc309ed4879c8de688"
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
    "url": "assets/js/24.2bed0f33.js",
    "revision": "a6478afbd49963bcb8b054a1a2579d02"
  },
  {
    "url": "assets/js/25.778c5f34.js",
    "revision": "7d67bd007724894043cec42fb6e2f305"
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
    "url": "assets/js/30.915abbcf.js",
    "revision": "f52681b8315bb7f04657c36d5b606a93"
  },
  {
    "url": "assets/js/31.0d0c3d21.js",
    "revision": "3a89623754d7e35a5df416604ca7dcde"
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
    "url": "assets/js/7.eb25a334.js",
    "revision": "9075ec6affc1530d09fdb608e224f0a1"
  },
  {
    "url": "assets/js/8.4e81eed3.js",
    "revision": "2e5936d4b749d7a3bc42ab711ddc6791"
  },
  {
    "url": "assets/js/9.72188191.js",
    "revision": "2deefb8c9dacc41745aea0a3562f5fdc"
  },
  {
    "url": "assets/js/app.70b5bd26.js",
    "revision": "29aac91f1e306afc3977e1788f0c455b"
  },
  {
    "url": "basics/index.html",
    "revision": "eb71ba4e5b5c7c3f4ee92a9aa32ad92d"
  },
  {
    "url": "basics/other.html",
    "revision": "dad988a3b6842280506e82a3c4208714"
  },
  {
    "url": "basics/rearend.html",
    "revision": "922e8ff045c5d47b9ed34c60c3544fd3"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "d0f8788a92205b30f7e4f94e2bac9c07"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "13959bf3f251d374fa8812ea1d59652b"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "7a2a7f110a9cf97773f6ac91c74677bb"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "791c2eb3c2deb524882d814eba2d580b"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "9f61174e2ec95ca72c3461e4d431619c"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "c521b4378d2ec04e83d7b4b377ecace4"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "bf9490587a82ac07012690dbb473760c"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "bf610c182f4db747e76c9161686c750c"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "5cc79327430e31990010bc14cbf010b6"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "1b2a7241328114293f6842dc78111adb"
  },
  {
    "url": "frontend/docsHtml/index.html",
    "revision": "a3e43a032a5945f2ae665e0e0c12b05a"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "e9b8ddc8aa43414aea1c51e5cf03263e"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "f552dd2c86b2af63b72c90edda38f5d4"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "9a369be2739d635ca4624144b7c0bf04"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "1bda888156ea064f488cfc064bc33b91"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "50dca036c38cca3b9e992c721b6e8036"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "2b7795f8f37b6a5cbf592fd1eb652e66"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "0c85035a8ab2c726539d418dee8eff85"
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
    "revision": "dffb14dbf313c412f8f806ed23a88050"
  },
  {
    "url": "sitio/index.html",
    "revision": "fce78efe974c53b03d29ef2833e7dba7"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "289388451fdfc8c05670720a88bf1861"
  },
  {
    "url": "zh/index.html",
    "revision": "f145b946c3c61e957698f455ab115884"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "55aac89a118511f833bbefdb55dd276f"
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
