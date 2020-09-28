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
    "revision": "1a2bc3d86b71af98fc3cbbbf2471dd1f"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "308a3bcaa8e7c92b7d97736bc52b70c1"
  },
  {
    "url": "assets/css/0.styles.f412e999.css",
    "revision": "72ab80037c551f65e69b3af593139691"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.61827b72.js",
    "revision": "8cd72771a4b3daf0c2c367ae6597cdea"
  },
  {
    "url": "assets/js/11.fcaba061.js",
    "revision": "d9621b03275c9c687458acb3cc40fb30"
  },
  {
    "url": "assets/js/12.4cba493c.js",
    "revision": "15c4eb0100b142bf3339aac82f29874a"
  },
  {
    "url": "assets/js/13.595f8c74.js",
    "revision": "2faf394fe1d1399f637a1647c5388246"
  },
  {
    "url": "assets/js/14.ab56160a.js",
    "revision": "24e357d5a00ddf374d63b31c36f78e12"
  },
  {
    "url": "assets/js/15.a3491554.js",
    "revision": "eaad08152bffb6ec224d67c270a7ade0"
  },
  {
    "url": "assets/js/16.51a9b588.js",
    "revision": "b60c2cb36aa792c35edc79782e7e38de"
  },
  {
    "url": "assets/js/17.86e571a0.js",
    "revision": "7147e5a8f80a218472ce2ca678a74284"
  },
  {
    "url": "assets/js/18.3c1d4e98.js",
    "revision": "188886a352a9be48d56ea3ecdda39b04"
  },
  {
    "url": "assets/js/19.6e19e700.js",
    "revision": "9c30a76c6406406d6373e3a22cbc8702"
  },
  {
    "url": "assets/js/2.33a04a9d.js",
    "revision": "c61dd6cfeeae2b6a360d36177421a181"
  },
  {
    "url": "assets/js/20.aae82fb2.js",
    "revision": "ec5120f69791cb1dc5ba06d8055c0d86"
  },
  {
    "url": "assets/js/21.fe703653.js",
    "revision": "7f4efd14cf91cb3bf63b7e3904a57dc0"
  },
  {
    "url": "assets/js/22.3c21baa9.js",
    "revision": "b03af7ba3c50c5aa2ed6fc2c27921944"
  },
  {
    "url": "assets/js/23.98721980.js",
    "revision": "b8c3d3537e91af5b44365cbacca8250f"
  },
  {
    "url": "assets/js/24.61151112.js",
    "revision": "543987b9823ba6559128607639e2a74d"
  },
  {
    "url": "assets/js/25.fdcf6864.js",
    "revision": "017be54670222794bc29eb7c1c0702e5"
  },
  {
    "url": "assets/js/26.c3285bc6.js",
    "revision": "766ae64da07875f389ad9ca34c129b53"
  },
  {
    "url": "assets/js/27.04f258d7.js",
    "revision": "ef325f7930688c569a0cb55208457b59"
  },
  {
    "url": "assets/js/28.3b62c91c.js",
    "revision": "e881c503a2d8f6dbed23168f03be3405"
  },
  {
    "url": "assets/js/29.05908aab.js",
    "revision": "3634f48abb91d47795844105172ca1c7"
  },
  {
    "url": "assets/js/3.28198cb7.js",
    "revision": "0f1dd5ed3bacf6f276f05f8ac53542d8"
  },
  {
    "url": "assets/js/30.5e4be409.js",
    "revision": "f332762159affbcf81c8dab6e637a0ae"
  },
  {
    "url": "assets/js/31.e156f8a9.js",
    "revision": "4babf549066dab7dc817a90074ec8b07"
  },
  {
    "url": "assets/js/32.90684298.js",
    "revision": "cdc7d71b3d2a6d4af8f99bd04a799c46"
  },
  {
    "url": "assets/js/33.9a683718.js",
    "revision": "2be148cffcdeda7b1881163c72755721"
  },
  {
    "url": "assets/js/34.86ac9a40.js",
    "revision": "7b6eca2ce889aba5ccf78bd362a7a821"
  },
  {
    "url": "assets/js/35.427bf036.js",
    "revision": "d5c67aa9b51eb07bd8c1231398ee7881"
  },
  {
    "url": "assets/js/36.afea6057.js",
    "revision": "656d2d2142f8cba725eae4e73ce37939"
  },
  {
    "url": "assets/js/37.5cdac185.js",
    "revision": "257b49878903b2b89de07f9a30bb4ca3"
  },
  {
    "url": "assets/js/38.b7da932d.js",
    "revision": "ce8eda27f5feb704efa72ceb320718db"
  },
  {
    "url": "assets/js/39.0a4df246.js",
    "revision": "c4c1905e37ad1736f3df223272ab2874"
  },
  {
    "url": "assets/js/4.70ddf7d1.js",
    "revision": "01f811b11e260aa0dc91dcb35c58bb73"
  },
  {
    "url": "assets/js/40.bddb1bd9.js",
    "revision": "590230cfd1068a1658c4c4e4fdc059eb"
  },
  {
    "url": "assets/js/41.615c884f.js",
    "revision": "da3655545be36c28ddc9f44215cb1868"
  },
  {
    "url": "assets/js/42.88d2c67c.js",
    "revision": "f2023be3ce72b3fe873b4d0be502f32c"
  },
  {
    "url": "assets/js/43.9d7793aa.js",
    "revision": "02269f0b9e13413d0d3c3380a35aa54d"
  },
  {
    "url": "assets/js/44.16c711a1.js",
    "revision": "22dfad6c0aae47cbb7d11409be6a8791"
  },
  {
    "url": "assets/js/45.20b93e26.js",
    "revision": "6ba3751d8efc02970c82adc94aa12793"
  },
  {
    "url": "assets/js/46.ffa11604.js",
    "revision": "fa8c573b02d5ef758c97661d0767fff1"
  },
  {
    "url": "assets/js/47.afbef65b.js",
    "revision": "93584bc106608dbed4b9cc7880991793"
  },
  {
    "url": "assets/js/48.7555ef30.js",
    "revision": "e09a5cb49865b6590e7bd1d163aa21d6"
  },
  {
    "url": "assets/js/49.7be44282.js",
    "revision": "f1a6a00b8b56091a96fa62213979df6f"
  },
  {
    "url": "assets/js/5.1f4ccad5.js",
    "revision": "8e7f348387ba66920e97d7087497f6d7"
  },
  {
    "url": "assets/js/50.4e6c2c1e.js",
    "revision": "5b6766f0506a7b615a9812c8fcca423c"
  },
  {
    "url": "assets/js/51.b11d3d9f.js",
    "revision": "a51d47b7999fcc4c61f448b91dcd30de"
  },
  {
    "url": "assets/js/52.6f1d2e23.js",
    "revision": "c976b0047eb7379dc04b0e6e6418bb89"
  },
  {
    "url": "assets/js/53.f4b15776.js",
    "revision": "456dbc7b97d26e6cf8266180883b6263"
  },
  {
    "url": "assets/js/54.b1d8f2a5.js",
    "revision": "074c92d4f6d1c51df0752897a99a9304"
  },
  {
    "url": "assets/js/55.6d7acc53.js",
    "revision": "128a0d9f678d6536fa28a156e41ed927"
  },
  {
    "url": "assets/js/56.7bdca520.js",
    "revision": "d2776a8f08243f8604d7f3f1d700f0ca"
  },
  {
    "url": "assets/js/57.e1c9bc76.js",
    "revision": "989f8bebbf5b7e8732562ad8ea134248"
  },
  {
    "url": "assets/js/58.9f01bddc.js",
    "revision": "91382701fa0d93b728e1976e5c6f15ed"
  },
  {
    "url": "assets/js/59.3584c7c6.js",
    "revision": "00239a9c685c20440ef610ffca586a61"
  },
  {
    "url": "assets/js/6.d3545c47.js",
    "revision": "6a72a069175ec7af3581c3c67113046f"
  },
  {
    "url": "assets/js/60.5d49f1e5.js",
    "revision": "d3d1eb858b13101dfc4d0248db77ffd0"
  },
  {
    "url": "assets/js/61.948d4393.js",
    "revision": "a0cf481273dd5412d9c360ee43f6bd85"
  },
  {
    "url": "assets/js/62.125613d0.js",
    "revision": "bab739ccb004f170e3aeebf6d3443ed9"
  },
  {
    "url": "assets/js/63.937476af.js",
    "revision": "7706c17b27d5a530aa95d93bd04d2467"
  },
  {
    "url": "assets/js/64.47ced4bc.js",
    "revision": "236fa06dcd38f8eb3a498bd8154e91c4"
  },
  {
    "url": "assets/js/65.899f32da.js",
    "revision": "9f95c808661cfaadc9d86e31cb23a9dc"
  },
  {
    "url": "assets/js/66.5050403a.js",
    "revision": "fa4a6b6cae71796114fb374f31d531dd"
  },
  {
    "url": "assets/js/67.c85e8af2.js",
    "revision": "55f6c87b79c1cb51bc52c37fc8d0d7ed"
  },
  {
    "url": "assets/js/68.c0f56c0a.js",
    "revision": "b193702e7b358e2504f14d85fb728a7f"
  },
  {
    "url": "assets/js/69.3b4caa6f.js",
    "revision": "a4c9f6be2d57a0533fdaa77fcfd443b7"
  },
  {
    "url": "assets/js/7.144cda08.js",
    "revision": "4ef72f596c77606ab33dda77cd7ab67c"
  },
  {
    "url": "assets/js/70.cfb38ba2.js",
    "revision": "d42b140413788a57be50f81b3f226b61"
  },
  {
    "url": "assets/js/71.ba3554d6.js",
    "revision": "3db80c620f26b6e93096f17930cc5ab5"
  },
  {
    "url": "assets/js/72.1884fa97.js",
    "revision": "692050ee48209bcf73791310996856b8"
  },
  {
    "url": "assets/js/73.94f1dd7c.js",
    "revision": "2a5119de4f350146f92803aed601a757"
  },
  {
    "url": "assets/js/74.b9890c91.js",
    "revision": "c537fdae766863f44b8e3a6cd6fbc4e6"
  },
  {
    "url": "assets/js/75.49253bfe.js",
    "revision": "0cae39de88b6fd5050bfbff7812728d9"
  },
  {
    "url": "assets/js/76.e1eb5301.js",
    "revision": "34856d7c782dfc2372b3584da7df25bd"
  },
  {
    "url": "assets/js/77.f35fdb8a.js",
    "revision": "731050dba78797a5d633186642e54bc4"
  },
  {
    "url": "assets/js/78.cc5580ce.js",
    "revision": "a0495a35311d8ced63cfd2eefa05ecd4"
  },
  {
    "url": "assets/js/8.fc4034f7.js",
    "revision": "6df32869255e19c998d28f01b5492d6b"
  },
  {
    "url": "assets/js/9.dbf02af4.js",
    "revision": "11df4f5b85a64b9e4a78a2c0e3918ea4"
  },
  {
    "url": "assets/js/app.84f078af.js",
    "revision": "af773d91d95e6d027de633fc9bad211b"
  },
  {
    "url": "basics/index.html",
    "revision": "9a6efb27dffa39648fdc88dc36791f7d"
  },
  {
    "url": "basics/other.html",
    "revision": "83894e0d233d5222a413adc2257c3e55"
  },
  {
    "url": "basics/rearend.html",
    "revision": "8ed832f79052b40536850eddb0114fe8"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "551e788d7fc07bcbf677ac7b0c655856"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "376c3ee068f6c85ebf76281389b5b8ea"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "66275ff25f04dac0cd51ad03feabd818"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "66d1f1a405e423e67e67886d00180a94"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "a11c09b8c722007fc1abae153e03e552"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "356409f8fa136dab77dd009c4e229744"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "a5411567d6a8ff58a695b57da24044cc"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "f0ad47d916223c16be956b02b144f5a4"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "297f8e6ac99781dc77eec8aad241d887"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "cd8fc70223c6925b29310cc0c6060656"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "a0cd4831b438c07672a114b0fbe510fb"
  },
  {
    "url": "frontend/HTML/form.html",
    "revision": "7a041fe7502e22d88abd3c55e3f8d2c3"
  },
  {
    "url": "frontend/HTML/HTML.html",
    "revision": "2b9864949d2c72c74c74d1f6238566c5"
  },
  {
    "url": "frontend/HTML/index.html",
    "revision": "f8be11e7f21d23b7160e3be4486465ae"
  },
  {
    "url": "frontend/HTML/table.html",
    "revision": "bb0b12063327793e99cb39814ef86516"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "6d0135ca240a9d14b39eb8c452c82adf"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "b07d0798d20f760f1ee44ccc93debe83"
  },
  {
    "url": "frontend/jQuery/customize.html",
    "revision": "89285d4835379dc4a11baf17de31f9c6"
  },
  {
    "url": "frontend/jQuery/event.html",
    "revision": "195c76146cd0b63767fab97711246d49"
  },
  {
    "url": "frontend/jQuery/index.html",
    "revision": "a0d80e714a145705c3e333950aa62482"
  },
  {
    "url": "frontend/jQuery/method.html",
    "revision": "4c239550d29de694a00cac518e9f038d"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "b883ba40d2e3e62490e848657aec6f06"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "544a4f234df9c5357d50b05cdd54d7db"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "bc2ffab722ee418cde1c9aec207ca5d3"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "b55fb51bdcb9a6986520b5cf523453ed"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "32ce3517c30e41ee991e0865c1c742a6"
  },
  {
    "url": "frontend/webpack/install.html",
    "revision": "f32b9fc3fd1a0ed7e626105cae4c5745"
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
    "revision": "c762f6b443ac991f62eaf40ba23a1ad5"
  },
  {
    "url": "other/git/index.html",
    "revision": "81ee4571ac4c5b2469026f5608a87d0e"
  },
  {
    "url": "other/index.html",
    "revision": "5059d9a17a5e460e72a44259924ade56"
  },
  {
    "url": "other/pwa/index.html",
    "revision": "9deca3ce8deea984ce98a6fa7500dbf0"
  },
  {
    "url": "sitio/index.html",
    "revision": "4eea4f02b45b44ba13f4d6eb773567a5"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "f4e58da90a7a63f339eb0f363099d970"
  },
  {
    "url": "zh/basics/index.html",
    "revision": "202eb56c2628179819605b9669ec1488"
  },
  {
    "url": "zh/basics/other.html",
    "revision": "6b8fac3255c50a53da0b21f873a5cb20"
  },
  {
    "url": "zh/basics/rearend.html",
    "revision": "6978ad62205f1aa9e889589c92f91c33"
  },
  {
    "url": "zh/frontend/BootStrap/index.html",
    "revision": "31a1d23a089774a11c5eb23c678f92c6"
  },
  {
    "url": "zh/frontend/BootStrap/OtherComponents.html",
    "revision": "a510862bf0c846b34234ae56ad87b218"
  },
  {
    "url": "zh/frontend/BootStrap/SCSS.html",
    "revision": "e07c03f08f15c8a929c0462a390951db"
  },
  {
    "url": "zh/frontend/css/box.html",
    "revision": "cb84bcbbda281c4fba919abac034605f"
  },
  {
    "url": "zh/frontend/css/index.html",
    "revision": "9ff2b5ce44b62fb2b2a681f526bfebbf"
  },
  {
    "url": "zh/frontend/css/selector.html",
    "revision": "117bf902a6923b89fff2f87ab8759a11"
  },
  {
    "url": "zh/frontend/css/size.html",
    "revision": "1ed479a9a9000368adc4c27fab8eb920"
  },
  {
    "url": "zh/frontend/css/TextFormatting.html",
    "revision": "f9221079088f7bb5ba0cdda40b140dee"
  },
  {
    "url": "zh/frontend/docsCss/index.html",
    "revision": "d90696596c878b08ae26158a2c2dc7a9"
  },
  {
    "url": "zh/frontend/docsH5C3/index.html",
    "revision": "aacdfa12ec9319d17161fc9185d994de"
  },
  {
    "url": "zh/frontend/domBom/index.html",
    "revision": "22e1703c1f85e6811a6ac98292b6a078"
  },
  {
    "url": "zh/frontend/HTML/form.html",
    "revision": "e03cb114f3e3eb30066b0c8b557e13ee"
  },
  {
    "url": "zh/frontend/HTML/HTML.html",
    "revision": "73ec74a7923f0b269c1f3d069d94cda7"
  },
  {
    "url": "zh/frontend/HTML/index.html",
    "revision": "76b9eb32968245f31545facb8598f3a1"
  },
  {
    "url": "zh/frontend/HTML/table.html",
    "revision": "65f4e3bb17007bda6b143e9272b03d16"
  },
  {
    "url": "zh/frontend/javaScript/index.html",
    "revision": "8c60a6582c7be16c4864d5a47ef448c2"
  },
  {
    "url": "zh/frontend/javaScriptTop/index.html",
    "revision": "1df223cf0f9076e84e0d53808a41e441"
  },
  {
    "url": "zh/frontend/jQuery/customize.html",
    "revision": "a5c9367c740c9a44fefe206e5d5154ed"
  },
  {
    "url": "zh/frontend/jQuery/event.html",
    "revision": "76c799eea7966df18271590e36cd4ed9"
  },
  {
    "url": "zh/frontend/jQuery/index.html",
    "revision": "8a66b3391ac3c2f7b983279a338b1a3c"
  },
  {
    "url": "zh/frontend/jQuery/method.html",
    "revision": "fed46cb63042e4dc9ea36cba882aaca8"
  },
  {
    "url": "zh/frontend/node/index.html",
    "revision": "514aa4ca34575d61b3c64ab51ff09d54"
  },
  {
    "url": "zh/frontend/nuxt/index.html",
    "revision": "b170bf453a6a7793ed98593e7bfa1fab"
  },
  {
    "url": "zh/frontend/vue/index.html",
    "revision": "d83ce887e233e6ddd2a122e3c74163ac"
  },
  {
    "url": "zh/frontend/vuex/index.html",
    "revision": "d674ecb446cca312ccc6b6f918baa82d"
  },
  {
    "url": "zh/frontend/webpack/index.html",
    "revision": "01e15a81bbbeb058234b49df48088f16"
  },
  {
    "url": "zh/frontend/webpack/install.html",
    "revision": "f6d346e44b0584ed6dec3f29c4435fe7"
  },
  {
    "url": "zh/index.html",
    "revision": "7e0f0bd9d85593ac24736f8623dc9e29"
  },
  {
    "url": "zh/other/git/index.html",
    "revision": "cc8bb25b0e3ccea5574bab2f50ddc56c"
  },
  {
    "url": "zh/other/index.html",
    "revision": "9cd1b162c5c3beacf34bbcd6e7094de5"
  },
  {
    "url": "zh/other/pwa/index.html",
    "revision": "8d1bf4abadb95cf7d70f259b14a7bd8b"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "909ea288be3ebe7bbb92a391f7e89044"
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
