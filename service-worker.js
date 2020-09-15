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
    "revision": "538f1864b46ae06ac4ed14fd2edeef8b"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "7ec2e453f1cad733a6c486f0621c7da4"
  },
  {
    "url": "assets/css/0.styles.3aa4e869.css",
    "revision": "00e0140b31013fada018cd3a04810978"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.25742aa1.js",
    "revision": "3e3d553bf2fa06cda93a952d1c08d63c"
  },
  {
    "url": "assets/js/11.cbb802a4.js",
    "revision": "0131e08d00f0be111c5037435ff22e2b"
  },
  {
    "url": "assets/js/12.3e3d5b1e.js",
    "revision": "725b07e83c8e51fda6e655b3a8fcecef"
  },
  {
    "url": "assets/js/13.2c51b95a.js",
    "revision": "c168e3bf1d414e088da9df5507652c7f"
  },
  {
    "url": "assets/js/2.16d5b87a.js",
    "revision": "89a502a21a8996f08eacd3b601c8d608"
  },
  {
    "url": "assets/js/3.b6c7162a.js",
    "revision": "6e12683772dc303e90ec284ca214b25e"
  },
  {
    "url": "assets/js/4.4ce39279.js",
    "revision": "5cea8e3ffadfb04531b99e67f2db8e0e"
  },
  {
    "url": "assets/js/5.2a1a27ea.js",
    "revision": "fa84bcd193acf2ba9bd4431f879b3363"
  },
  {
    "url": "assets/js/6.dd9741b0.js",
    "revision": "b30699486782b2522290ec6703e04d5b"
  },
  {
    "url": "assets/js/7.48aa94e3.js",
    "revision": "b3a483ebd460e53d9df775db9e3eb22a"
  },
  {
    "url": "assets/js/8.03b1f650.js",
    "revision": "6d63d20f6afd23d5d313604ede29df42"
  },
  {
    "url": "assets/js/9.a2b552e1.js",
    "revision": "b6a29235cc5717d6fc57126658f6f021"
  },
  {
    "url": "assets/js/app.60bfd53c.js",
    "revision": "fae4c4d4643a29ae0a13778c30ad94d3"
  },
  {
    "url": "en/index.html",
    "revision": "da192cf836cad007c0082e3e60854b4e"
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
    "revision": "016e9071116550a07c7a1c023dc78edb"
  },
  {
    "url": "sitio/index.html",
    "revision": "440f39cebb6e2fe078686923c0bc68de"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "c92c7df85d68027a9842ebe6840ea0a7"
  },
  {
    "url": "zh/index.html",
    "revision": "555b7340259deda41ec407a540af04e6"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "4db605c518b48fc7981ae9ec1ebd6aaa"
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
