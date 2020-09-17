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
    "revision": "24ef7832a3a8a044819488290e0a2bcb"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "9a450f0981deec34d960872307bb5e4d"
  },
  {
    "url": "assets/css/0.styles.54270a80.css",
    "revision": "715167d1cd950662f4b23100ae54873b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e0adab5e.js",
    "revision": "c14b7d16fa3baf9a96b0e9f0f1ba499e"
  },
  {
    "url": "assets/js/11.2e8368ca.js",
    "revision": "d9c34dd9267281995bac42ddb1f6b3d8"
  },
  {
    "url": "assets/js/12.6ebb273f.js",
    "revision": "209115a3705e444b9bc2a89a92ffa557"
  },
  {
    "url": "assets/js/13.9319f00b.js",
    "revision": "b1168e121691c8cecbb4482ce7dc6d5d"
  },
  {
    "url": "assets/js/14.c4c1019f.js",
    "revision": "242784ecc8849a1b1714a46b018c2278"
  },
  {
    "url": "assets/js/15.7695034f.js",
    "revision": "9d6ed2f17caa66e552d33f1898b53cb9"
  },
  {
    "url": "assets/js/2.c8de306c.js",
    "revision": "d12130bf5d2d01ac3b07788e511b6e7f"
  },
  {
    "url": "assets/js/3.4d5afdf9.js",
    "revision": "b6fa76e34c2af4f1aa707e3f49307fd8"
  },
  {
    "url": "assets/js/4.6815508a.js",
    "revision": "20a969b0b1ec7167dca59f57f220cf3a"
  },
  {
    "url": "assets/js/5.07bf589a.js",
    "revision": "2092c303b4670ad7cc9825eb9da782f1"
  },
  {
    "url": "assets/js/6.2e633cce.js",
    "revision": "1addbbaa1dce944568ea527c8be644cc"
  },
  {
    "url": "assets/js/7.7c53a4f1.js",
    "revision": "a9f0caf12dede414a85a1d03214c85ad"
  },
  {
    "url": "assets/js/8.b02e85d1.js",
    "revision": "bdb2c38da4c80d243e8ad8f2328677fd"
  },
  {
    "url": "assets/js/9.6645f48a.js",
    "revision": "7d4b64400ebd947101dbdd191ba14df8"
  },
  {
    "url": "assets/js/app.73acae86.js",
    "revision": "d726f0663c4c0f598d8aabebefb3e3aa"
  },
  {
    "url": "basics/index.html",
    "revision": "6ffa54cfe77fc62f3a6966ca067a6bd6"
  },
  {
    "url": "basics/other.html",
    "revision": "7dac75d6a5dcc4257fed509f6c13afa6"
  },
  {
    "url": "basics/rearend.html",
    "revision": "729dca3c29179eacf87465ac037b8c93"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "21cc14b03d09d06f38b82fc9ba4520b7"
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
    "revision": "dea9205f80d63f5f16699c7965a1d520"
  },
  {
    "url": "sitio/index.html",
    "revision": "9a8e9efeac1c12779abd00c429b0515d"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "f105fa4b25da49037f119bd8808e4e9a"
  },
  {
    "url": "zh/index.html",
    "revision": "23b8ccaeafc9797bab5aa9ba24f9809c"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "e2efae13df19996fc6d325142aeea8a1"
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
