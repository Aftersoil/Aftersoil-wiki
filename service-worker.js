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
    "revision": "c198809a0328e6b8389f1de57bdaa284"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "54b38ea905dbe0e326c41f41197f5c75"
  },
  {
    "url": "assets/css/0.styles.9d4e4750.css",
    "revision": "08aba184f78098e0e8139bd244137a18"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0800ba12.js",
    "revision": "7c6087067c17bad2437ec9feb414c3da"
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
    "url": "assets/js/13.63c97d08.js",
    "revision": "d3f4844b6dd314591574837df1f9c894"
  },
  {
    "url": "assets/js/14.dc7063ce.js",
    "revision": "ef892270d6837db2952bb8d6b8e8f5bd"
  },
  {
    "url": "assets/js/15.b6704a36.js",
    "revision": "7ae8e927a73e7e2794099362d3b200e1"
  },
  {
    "url": "assets/js/16.03b0f2bf.js",
    "revision": "e9fdb0fc759b48cbfc7758e58825c75d"
  },
  {
    "url": "assets/js/17.b18768e3.js",
    "revision": "7ff2123d732114ce3ff8c37c495756e4"
  },
  {
    "url": "assets/js/18.eba0b258.js",
    "revision": "b2c04baf6cc878ac8292af3afde91050"
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
    "url": "assets/js/20.85abc99e.js",
    "revision": "260e12037e2c59b7826eb4c6f7b61e66"
  },
  {
    "url": "assets/js/21.776ff81a.js",
    "revision": "fbbb28a3b79c12c2416db5bc6909e0da"
  },
  {
    "url": "assets/js/22.6eb4d4a7.js",
    "revision": "79b14d4b12a5902ae8972cb2ce765e91"
  },
  {
    "url": "assets/js/23.62273672.js",
    "revision": "ac2ab60e1863a5ab898dad10af2cc7d8"
  },
  {
    "url": "assets/js/24.2695bea1.js",
    "revision": "d135352b6c590f81d51982d5c69b9dc4"
  },
  {
    "url": "assets/js/25.1d6f783c.js",
    "revision": "7fc081fe830db78d244637a2dfcee522"
  },
  {
    "url": "assets/js/26.469368a4.js",
    "revision": "bff75c670dfd3bec97f767f6e223ceee"
  },
  {
    "url": "assets/js/27.8914610c.js",
    "revision": "3da802ab08d40c145f824f51eb72c468"
  },
  {
    "url": "assets/js/28.7e74c7a3.js",
    "revision": "4fcd31d2802369c36f6a51302d1b1508"
  },
  {
    "url": "assets/js/29.7df95823.js",
    "revision": "bb036878164eb7ca3705a33d3a26f535"
  },
  {
    "url": "assets/js/3.627f4731.js",
    "revision": "f432f1224ce43f263443f348e37e2d7a"
  },
  {
    "url": "assets/js/30.4a39335e.js",
    "revision": "ea2268d930e7d537e23c0eb82d018b9e"
  },
  {
    "url": "assets/js/31.99da5b79.js",
    "revision": "6d078c14b3ca05c28799c1a95a29157b"
  },
  {
    "url": "assets/js/32.6873ffb5.js",
    "revision": "af113fd6736d578e029a8f3f12f05a11"
  },
  {
    "url": "assets/js/33.c695d92f.js",
    "revision": "ad95ee5f2be014fc732719718c02cf52"
  },
  {
    "url": "assets/js/34.86bf5a68.js",
    "revision": "b2566d998e2061044bed442462e8a71f"
  },
  {
    "url": "assets/js/4.ba493b66.js",
    "revision": "81e974eda90e20cda5d6024c538324df"
  },
  {
    "url": "assets/js/5.07bf589a.js",
    "revision": "2092c303b4670ad7cc9825eb9da782f1"
  },
  {
    "url": "assets/js/6.b9b55244.js",
    "revision": "16c6b272c8805cae09be3e30478ad1b1"
  },
  {
    "url": "assets/js/7.0aee01e6.js",
    "revision": "d8f82af5b87547983f51e232a4e6dae8"
  },
  {
    "url": "assets/js/8.160fe073.js",
    "revision": "92ddfbd1079a71dd15a817fe1c3e338b"
  },
  {
    "url": "assets/js/9.49c00ca6.js",
    "revision": "eb29fb2c72d0270329beb7162905166d"
  },
  {
    "url": "assets/js/app.9a304dd7.js",
    "revision": "367ada69fcb82cf5be603f4cb6e76278"
  },
  {
    "url": "basics/index.html",
    "revision": "5f8132ac64ae75f8968b44dc6fa8fbc3"
  },
  {
    "url": "basics/other.html",
    "revision": "7f93d60a7fb6d36ce310351eb8281425"
  },
  {
    "url": "basics/rearend.html",
    "revision": "4d14403b0117fa7ddaa224e25d7fdc4f"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "73202c0c8188a431fa7501e49baf1270"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "b9db9cc933e4e3f198d8afaf0d9adde9"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "68d188f40a12a99a4a9da8c48943cbb9"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "66e357a801707849c7c4d05048d703e0"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "006914b2d302041e79b189a1e5da49a1"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "a549b1767744dc6324e4a9bf21a98d01"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "22885f04cf90f2cebbdafba99070e5bc"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "afaa1402e961ca5bfbc3f66ea47178e6"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "81fd487ab3cdc7f6f97ad3b746952580"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "5d31fa1899ccc68713cdf6126cc7e2b7"
  },
  {
    "url": "frontend/docsHtml/index.html",
    "revision": "93cf178e74fbfa7d3e50765114d1f36a"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "dd7e8148e0deb015125214a9b1a29914"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "4a30e361de297ca3d5987404b6f0aed5"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "5377ed8d78b0a7e3ef24b15336643c88"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "f889b1138d99cae24ff8d3b99dacb577"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "20c4a66b27308fb2d32a8c2ffaece6f2"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "a845bab27de83cee5c90530849525885"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "b33c41354915c2396021bba46057bd80"
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
    "revision": "4878a2d408d91d35b4371cda7154fe7b"
  },
  {
    "url": "other/git/index.html",
    "revision": "f1a193e568eb927c8401c283301cf345"
  },
  {
    "url": "other/index.html",
    "revision": "a54eb792e9d34d4361b39cf31d502e82"
  },
  {
    "url": "sitio/index.html",
    "revision": "4d2f25cba2ee48aaa51954d4917504f9"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "1db6b8990972573dc17ba96510ee634d"
  },
  {
    "url": "zh/index.html",
    "revision": "ed2c77465269f11b670698ad7ef4fa35"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "977499bee99969c6a1ef65243d0706f1"
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
