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
    "revision": "8be43de9bb877052e4a526a91a29ad37"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "6829bfaeadb95ffe2d624fc58b0a3b78"
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
    "url": "assets/js/10.9f4d8c19.js",
    "revision": "72f037d0565765b864b183b04b521ff8"
  },
  {
    "url": "assets/js/11.a923d58d.js",
    "revision": "0af95acd8edacf35d0b9eb967c309d24"
  },
  {
    "url": "assets/js/12.b1cd4eb1.js",
    "revision": "07b1d69fd9a483e261430eb1220b510a"
  },
  {
    "url": "assets/js/13.35d174dc.js",
    "revision": "b3cf40965816becf73376129bac0e2f7"
  },
  {
    "url": "assets/js/14.98526a9c.js",
    "revision": "d9a44afeb2a9a881f05b75153c1ff153"
  },
  {
    "url": "assets/js/15.9080da49.js",
    "revision": "20491b02bdc3f099ebdc8157b8d027e8"
  },
  {
    "url": "assets/js/16.1abf796a.js",
    "revision": "2f2ec3de28b1067a07771141f62eb2b8"
  },
  {
    "url": "assets/js/17.f6a68995.js",
    "revision": "411b733f9ef50105a262711842898435"
  },
  {
    "url": "assets/js/18.eba0b258.js",
    "revision": "b2c04baf6cc878ac8292af3afde91050"
  },
  {
    "url": "assets/js/19.da62515b.js",
    "revision": "fa9acfb21c42c32b284c85ef8aea1943"
  },
  {
    "url": "assets/js/2.c8de306c.js",
    "revision": "d12130bf5d2d01ac3b07788e511b6e7f"
  },
  {
    "url": "assets/js/20.405b5abd.js",
    "revision": "cc9dc6b5f4ab5e674c9caa93afccb94c"
  },
  {
    "url": "assets/js/21.776ff81a.js",
    "revision": "fbbb28a3b79c12c2416db5bc6909e0da"
  },
  {
    "url": "assets/js/22.a6d662ea.js",
    "revision": "e254590856c857ab5a11e98b4948633b"
  },
  {
    "url": "assets/js/23.24760e46.js",
    "revision": "2ffa99af82b529d869352b5d34a6a4ce"
  },
  {
    "url": "assets/js/24.78a8a7e2.js",
    "revision": "38e634b613d4defb9ffb501c21693372"
  },
  {
    "url": "assets/js/25.3f8e27ad.js",
    "revision": "36c3512a355712f7848fd36086a6465d"
  },
  {
    "url": "assets/js/26.6a096be3.js",
    "revision": "ea4eda21d06e555dc7b4bbd332da4d6b"
  },
  {
    "url": "assets/js/27.e6337261.js",
    "revision": "f525222598794f5967f8fc8ac8f2d0ba"
  },
  {
    "url": "assets/js/28.f71752e1.js",
    "revision": "714d5ce97ad653a3aa98c22f5183a6f8"
  },
  {
    "url": "assets/js/29.576aa366.js",
    "revision": "936f04012722b45cbf3bf8450752cfd0"
  },
  {
    "url": "assets/js/3.627f4731.js",
    "revision": "f432f1224ce43f263443f348e37e2d7a"
  },
  {
    "url": "assets/js/30.34db7a4a.js",
    "revision": "0f5ffe7fc3e959f82f9adadaca1b420c"
  },
  {
    "url": "assets/js/31.39c051b8.js",
    "revision": "c2f04d2b8a0d6fb7ce74ba9d6d843316"
  },
  {
    "url": "assets/js/32.3ec6be7d.js",
    "revision": "822c5fec7d1f9a03cee20ebf08ce2c98"
  },
  {
    "url": "assets/js/33.88d1e2f3.js",
    "revision": "c8c56e807f9eff00355ff7bd574e4e2b"
  },
  {
    "url": "assets/js/34.9e412840.js",
    "revision": "937d2aea33fb92b50fd462d1c762493c"
  },
  {
    "url": "assets/js/35.16467131.js",
    "revision": "40f0f412bbc9099ad443e5fafaff5fcf"
  },
  {
    "url": "assets/js/36.2617cb5b.js",
    "revision": "f2f52474a27f429d73f154ad3640b1a2"
  },
  {
    "url": "assets/js/37.e8e3589f.js",
    "revision": "9d3c37aaa96de6c2752fddc66e396375"
  },
  {
    "url": "assets/js/38.84654e6b.js",
    "revision": "1936e392aa1b3e03be0445ece9a08074"
  },
  {
    "url": "assets/js/4.125eb9a0.js",
    "revision": "0b9819674a0c11c9000319c3881a476f"
  },
  {
    "url": "assets/js/5.07bf589a.js",
    "revision": "2092c303b4670ad7cc9825eb9da782f1"
  },
  {
    "url": "assets/js/6.873fe282.js",
    "revision": "1bc506db150dc86721d03f6886fa0f4d"
  },
  {
    "url": "assets/js/7.e8a3b85e.js",
    "revision": "14adaf88a155101246743d47239b2158"
  },
  {
    "url": "assets/js/8.b4580296.js",
    "revision": "0712d09203f0266131ef1bd530152466"
  },
  {
    "url": "assets/js/9.5b3a480a.js",
    "revision": "0928a558065c1d6b8131130102f26db2"
  },
  {
    "url": "assets/js/app.13bc553a.js",
    "revision": "2c00a67d36d6a610cdb7327256d9c080"
  },
  {
    "url": "basics/index.html",
    "revision": "c9af144bc8a8df4509977ba8feac703d"
  },
  {
    "url": "basics/other.html",
    "revision": "314cd2ba8158ec5db7394f988941c5dc"
  },
  {
    "url": "basics/rearend.html",
    "revision": "05303c50e0f3b93cd00e2b55c4c05913"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "70e89d9f7ecc93cc0a3cf36e548e4e34"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "e704487fe34dab1eb9989cfa977bdcef"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "35c14b54b9ceda9f15c2ebe518ddb2a4"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "d6114ed6f7cb3e33f41190ebf3d4d8c9"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "4d94c1897d75666df0fe0cd789629321"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "005b6b8f4b54c420b610763956f064ee"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "14fdc091d51dd40719068e372503ff47"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "11dad5775a534e64b9386254690525b3"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "f582da41b3c60ec1e6e79523bfc4956b"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "e9b4b64d8bf12ff3954cb02ddd013216"
  },
  {
    "url": "frontend/docsHtml/index.html",
    "revision": "9275e9d18ecb4a54231188a756219c83"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "78e28c6d088648772f32afacb3a47a5b"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "85757710fd395c46e6cac8fd30ab1199"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "7bcb3492d7d9249cc46a149e552f8708"
  },
  {
    "url": "frontend/jQuery/customize.html",
    "revision": "ea40e11049b2a8ab49887c317924fa0e"
  },
  {
    "url": "frontend/jQuery/event.html",
    "revision": "be3c49c4206a2e2175c5cbfcc56010b4"
  },
  {
    "url": "frontend/jQuery/index.html",
    "revision": "2730a726e2fb3d66ec546836b87cbd03"
  },
  {
    "url": "frontend/jQuery/method.html",
    "revision": "ff73a58b5ac373f7707ee4328c6eb845"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "53ba6b2b389320d3112fb07d0ec53d62"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "cdea61804fd1476e3cc353803eff4e73"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "ad5fe9ede2522f80c73da5badad23418"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "8ccf1ba62d81fefafa6e2d6c5f371588"
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
    "revision": "11bfd6e3fe1d398d11b2a889f6bb4c20"
  },
  {
    "url": "other/git/index.html",
    "revision": "60612ab386e26cc7839cd2d05aae4376"
  },
  {
    "url": "other/index.html",
    "revision": "e4e4a063edb2ff1a283bb15bcf5bea7b"
  },
  {
    "url": "sitio/index.html",
    "revision": "9ca181eebd3ef94f4c190fc9b2d38069"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "630369ead9fbde1382df9a72002c500d"
  },
  {
    "url": "zh/index.html",
    "revision": "c4ecb50d832ccb722423c753957cdbf8"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "71fa0662dfec6d3e955d776e275e3843"
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
