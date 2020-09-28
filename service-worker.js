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
    "revision": "a6a631b140d48de4e6f7bb7b2c44499a"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "92ecefd2dc123cb6e64c548ed1a0a221"
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
    "url": "assets/js/10.6e842931.js",
    "revision": "3eabe4c7422124b91f2c5bbc1c643baf"
  },
  {
    "url": "assets/js/11.b8e35648.js",
    "revision": "7ba6f6d1f9866b4c29be1fda3d0cd692"
  },
  {
    "url": "assets/js/12.7232dbd2.js",
    "revision": "b050415b7abf930beb12c1283e6b47c1"
  },
  {
    "url": "assets/js/13.a7297154.js",
    "revision": "37abbcee8cef4e65e75bdf6579f1c56f"
  },
  {
    "url": "assets/js/14.75579b5d.js",
    "revision": "2078cbe4930f00f27ec358c2cb3a574a"
  },
  {
    "url": "assets/js/15.f1b80f78.js",
    "revision": "5a05ced631c36def2467d1c5207582ff"
  },
  {
    "url": "assets/js/16.540573ad.js",
    "revision": "b3daa29758bce3767ba27fcc350f331e"
  },
  {
    "url": "assets/js/17.bdf24701.js",
    "revision": "7a69d0107ed77d7eadaf454ef729be39"
  },
  {
    "url": "assets/js/18.cc0f0aaa.js",
    "revision": "b5ebbcf7b314a817a1c1bd7f35626713"
  },
  {
    "url": "assets/js/19.731c8c92.js",
    "revision": "d743154de937788fea97b29952ff0b96"
  },
  {
    "url": "assets/js/2.33a04a9d.js",
    "revision": "c61dd6cfeeae2b6a360d36177421a181"
  },
  {
    "url": "assets/js/20.faa5bb6b.js",
    "revision": "3cda3c3e0b6aee7a0c4c045e88bab792"
  },
  {
    "url": "assets/js/21.3d8e9dbd.js",
    "revision": "268daeb5075154b9ac2f19a422f27b69"
  },
  {
    "url": "assets/js/22.a3bdf4e1.js",
    "revision": "24d9cb335a08d520e63a02dea4acf194"
  },
  {
    "url": "assets/js/23.256285f2.js",
    "revision": "52d923bb0512076eba6d50eb6e93633f"
  },
  {
    "url": "assets/js/24.e37aa0c0.js",
    "revision": "326ecd64096acde08ac6c7a9f30c5a42"
  },
  {
    "url": "assets/js/25.ac03dd95.js",
    "revision": "b7039c3fb83dc285c783b18b5d67bc96"
  },
  {
    "url": "assets/js/26.4b42b430.js",
    "revision": "02dc82305e35135dd3bd3dc2d15615e4"
  },
  {
    "url": "assets/js/27.32c2d91c.js",
    "revision": "a7b17c88fdf3eed852afc03e1f74db2c"
  },
  {
    "url": "assets/js/28.61aef7e7.js",
    "revision": "921f8de401b75e912aff799770b17d0b"
  },
  {
    "url": "assets/js/29.b90e2275.js",
    "revision": "d5baf46fcc301bb158cf87096261817c"
  },
  {
    "url": "assets/js/3.28198cb7.js",
    "revision": "0f1dd5ed3bacf6f276f05f8ac53542d8"
  },
  {
    "url": "assets/js/30.970001c7.js",
    "revision": "a60668e26156f4f6d11ca687e3da574d"
  },
  {
    "url": "assets/js/31.16d0fd1a.js",
    "revision": "9410f9626b236b6180fef2625a64740b"
  },
  {
    "url": "assets/js/32.2aaab747.js",
    "revision": "00f16d30138d52ea606b657f1fee29e0"
  },
  {
    "url": "assets/js/33.d14c431b.js",
    "revision": "04e45c3148bea08567a1563fe59844ce"
  },
  {
    "url": "assets/js/34.551597bd.js",
    "revision": "e558fd34e520a3ab88ace7f442c78c0a"
  },
  {
    "url": "assets/js/35.e9ef0520.js",
    "revision": "0915f857a1c4a682d95573588d9b94d9"
  },
  {
    "url": "assets/js/36.795b217b.js",
    "revision": "21cf798ff68db32480b409c16de768d6"
  },
  {
    "url": "assets/js/37.9885d583.js",
    "revision": "1b6159536c7bcc81fa25ce7f55483ede"
  },
  {
    "url": "assets/js/38.221dce35.js",
    "revision": "6a5764553f544bef30ea210b9be8c662"
  },
  {
    "url": "assets/js/39.7fca3ad2.js",
    "revision": "080d0ae971e1356b73b991d04c4b49b4"
  },
  {
    "url": "assets/js/4.70a40a05.js",
    "revision": "5993e95147563029f26eb67d1c65400f"
  },
  {
    "url": "assets/js/40.fc785769.js",
    "revision": "89ce0d4a101217f9e5dd22c4ba050770"
  },
  {
    "url": "assets/js/41.2e0a4936.js",
    "revision": "72ac6c576b8ae5c228e0e506407c221b"
  },
  {
    "url": "assets/js/42.a424e269.js",
    "revision": "0f5576f0c543b00ddb80d1f813fb468d"
  },
  {
    "url": "assets/js/43.12401e1b.js",
    "revision": "e375b1658c97334d8e4b004a6eacdb21"
  },
  {
    "url": "assets/js/44.1f6c323c.js",
    "revision": "9e112156ce5eb8a359f4cc34f0b6eb5b"
  },
  {
    "url": "assets/js/45.f0339ff6.js",
    "revision": "a504ab8ed16824a65609be64e196c785"
  },
  {
    "url": "assets/js/46.7c4bbfff.js",
    "revision": "fd2b124385a644a3c3a5be8598280919"
  },
  {
    "url": "assets/js/47.6a806d85.js",
    "revision": "25226b9e1eb52be93b8b20723f48421d"
  },
  {
    "url": "assets/js/48.f2c23368.js",
    "revision": "ebc59b6a06320eb8eb70f817ebff4621"
  },
  {
    "url": "assets/js/49.086a1bd5.js",
    "revision": "6c40ec3e38b45ec651224ec8a14fed1c"
  },
  {
    "url": "assets/js/5.1f4ccad5.js",
    "revision": "8e7f348387ba66920e97d7087497f6d7"
  },
  {
    "url": "assets/js/50.429d0417.js",
    "revision": "5eddaa8ff3052b39a66aa0d2cdd5e22d"
  },
  {
    "url": "assets/js/51.d0902834.js",
    "revision": "de4f76ba942942fc26b390d6bbdbe7b7"
  },
  {
    "url": "assets/js/52.32afe6b1.js",
    "revision": "598ed17f604be84c716009a715800bac"
  },
  {
    "url": "assets/js/53.16a44154.js",
    "revision": "af9e1f4b90f4839e5844c10c11bf1658"
  },
  {
    "url": "assets/js/54.ae054b89.js",
    "revision": "61f20e60d29c37ac135c339170d2f648"
  },
  {
    "url": "assets/js/55.971774d7.js",
    "revision": "f3c6f59d451653dde11e77920b7aa2a1"
  },
  {
    "url": "assets/js/56.2994eefd.js",
    "revision": "d277578c74ca56dc733d32e3af003689"
  },
  {
    "url": "assets/js/57.9cf62707.js",
    "revision": "59aeaef95391406ed81842cfd92c4bbd"
  },
  {
    "url": "assets/js/58.9e75af6e.js",
    "revision": "bdc6eff51e2ae4569d9d818e2baa4bd6"
  },
  {
    "url": "assets/js/59.747e58a7.js",
    "revision": "4ec9e7be9bf1ae7d77c26b3d9f16035c"
  },
  {
    "url": "assets/js/6.9ad1ff30.js",
    "revision": "75625823a051aefe15425460038f6595"
  },
  {
    "url": "assets/js/60.1dce5534.js",
    "revision": "fdd385f12064b9c330b074ce9f5d6a2f"
  },
  {
    "url": "assets/js/61.eff25799.js",
    "revision": "63679b57e87b75103369f7b1d6c4ade1"
  },
  {
    "url": "assets/js/62.8a5d5c3a.js",
    "revision": "48fae472fef473dd9dd73bfe60301745"
  },
  {
    "url": "assets/js/63.c997d5c6.js",
    "revision": "f04f6f844ca5b43146ae1a221b15bd16"
  },
  {
    "url": "assets/js/64.37c51a68.js",
    "revision": "e9565f8d374a209403d88f22d66ef639"
  },
  {
    "url": "assets/js/65.f9c20fc8.js",
    "revision": "6f3e6aa2a8f18c450c566b4f2a3347d4"
  },
  {
    "url": "assets/js/66.198f6fbf.js",
    "revision": "55e95588e00ad0e91c382577b4521e92"
  },
  {
    "url": "assets/js/67.631658fa.js",
    "revision": "609e5c8482de5cc3d24fd809b4c96dc2"
  },
  {
    "url": "assets/js/68.b4f984cd.js",
    "revision": "af4430c134efaf322fd587ff3cd9f9c9"
  },
  {
    "url": "assets/js/69.e28541ed.js",
    "revision": "88f6f3bd22ac58527af2b0961c647ac7"
  },
  {
    "url": "assets/js/7.144cda08.js",
    "revision": "4ef72f596c77606ab33dda77cd7ab67c"
  },
  {
    "url": "assets/js/70.777dd83d.js",
    "revision": "aae7fd363acebedf0abfdad70b093c2a"
  },
  {
    "url": "assets/js/71.cdb66c54.js",
    "revision": "f738d00bbfd0dca5a99791e155ed9710"
  },
  {
    "url": "assets/js/72.f1e0d161.js",
    "revision": "830ed603aecb84837322fe59b8151498"
  },
  {
    "url": "assets/js/8.ac3779eb.js",
    "revision": "6945c41bcc8a85c64893dc4bcb21e6a3"
  },
  {
    "url": "assets/js/9.1a32ba0e.js",
    "revision": "ff20e0838346c110d0ffc9af4c6fc23b"
  },
  {
    "url": "assets/js/app.f01ab0f0.js",
    "revision": "1c54a06c2a48c198f831a1b5f7842509"
  },
  {
    "url": "basics/index.html",
    "revision": "a52a71980adf7ed4511a1be5ba16e0bb"
  },
  {
    "url": "basics/other.html",
    "revision": "1966dedfcca52a09ffefa700cd8e88df"
  },
  {
    "url": "basics/rearend.html",
    "revision": "fecfa0d774742bc2d88bd631acafc32e"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "952a9b6865154c5e12ea1f552c5140e9"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "22518b17f43abd09b040c73c48f50fb7"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "3c9b96e30baaa5fb6bacfa3664c57a52"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "dd59598fb28af5dccd78c50846479de7"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "0a62c6909e8e630472d9278ea92c9ac5"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "d77dd8adc719265e31550a1041a71c9e"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "84fb68f7af6691b478a86fad9e81d17f"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "6ee65d023c5eb46b5384be79fd65d54f"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "ca532abfb8da98ccabec009e8d891192"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "1cfe275724e22e60fa807c8406e50b53"
  },
  {
    "url": "frontend/docsHtml/index.html",
    "revision": "e28d60cf67574b0166263be030a32711"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "33783b2c9a87f47a5a433cdf00ce717d"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "2d433a165138ce21b55c2cf253f0e180"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "87884ecdc5125c1cb4a2debe0ebd3294"
  },
  {
    "url": "frontend/jQuery/customize.html",
    "revision": "7f9a99471859b0c353aa12388fdd8669"
  },
  {
    "url": "frontend/jQuery/event.html",
    "revision": "36cb4560c3fe3f2b7e6c644382575ed9"
  },
  {
    "url": "frontend/jQuery/index.html",
    "revision": "4411cbf8e4f9a5ac3150c99b4e61ac3d"
  },
  {
    "url": "frontend/jQuery/method.html",
    "revision": "2ef7e541c6f9a00590a985a9649bb80b"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "da4cb41ff34d19527c708b34bd4b83d8"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "0b066cf2a8f2d15db0c5e2d6038ea091"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "43352b0aedf3640d4644cf6258117659"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "6826aba5bc48cc38123efc13d7929122"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "1575c9c45b4068a712bce95ede0d92fe"
  },
  {
    "url": "frontend/webpack/install.html",
    "revision": "69df220f875f3fccfe3c971739abb7fc"
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
    "revision": "5e2fc68894a70a833f3131f076be2dcb"
  },
  {
    "url": "other/git/index.html",
    "revision": "2d7eb4a8593947fbb33305e2ab50aed8"
  },
  {
    "url": "other/index.html",
    "revision": "0697bac5e42992ccd06b7e9e06f0e3be"
  },
  {
    "url": "other/pwa/index.html",
    "revision": "d03b1fb1135f10864fd243be0ad131bc"
  },
  {
    "url": "sitio/index.html",
    "revision": "48fcbf1acc71e212828afabd81911cdb"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "c1d89fbefda5ade9f0a179f84757f36b"
  },
  {
    "url": "zh/basics/index.html",
    "revision": "01361615b3d9736d0e40cdf6d25a6b3c"
  },
  {
    "url": "zh/basics/other.html",
    "revision": "f8b81b1336171be47ce6ce552916c16f"
  },
  {
    "url": "zh/basics/rearend.html",
    "revision": "eb54cae252e26e18acdf5519a35ef723"
  },
  {
    "url": "zh/frontend/BootStrap/index.html",
    "revision": "453e2f87cd0638259cf2bbd4d3584e90"
  },
  {
    "url": "zh/frontend/BootStrap/OtherComponents.html",
    "revision": "a21056fda101ba9777c7c351b5d99773"
  },
  {
    "url": "zh/frontend/BootStrap/SCSS.html",
    "revision": "493299e5348f243ce48b5db0da07c1c9"
  },
  {
    "url": "zh/frontend/css/box.html",
    "revision": "64d464f1fc2443e3848259bb24c9430f"
  },
  {
    "url": "zh/frontend/css/index.html",
    "revision": "d54d0d4ab95a985beb80b1eba7ebf974"
  },
  {
    "url": "zh/frontend/css/selector.html",
    "revision": "e5445fa970ae0a869d5c4485ffc97d41"
  },
  {
    "url": "zh/frontend/css/size.html",
    "revision": "1018d7df92df31e18c7fb5c7ec3e6524"
  },
  {
    "url": "zh/frontend/css/TextFormatting.html",
    "revision": "475a37a01b1bac7b1b0eabbfb3cd9f4b"
  },
  {
    "url": "zh/frontend/docsCss/index.html",
    "revision": "b87c5b01cf8a265d4941f309f2188a8d"
  },
  {
    "url": "zh/frontend/docsH5C3/index.html",
    "revision": "4f5aaf85e732dd4cb1ff39baf2d0573a"
  },
  {
    "url": "zh/frontend/docsHtml/index.html",
    "revision": "611e0de07c74f8c707f36254700f2877"
  },
  {
    "url": "zh/frontend/domBom/index.html",
    "revision": "e16c8b1fce76d4e28abeecbfb05f3dbb"
  },
  {
    "url": "zh/frontend/javaScript/index.html",
    "revision": "ddd0d71f80f2651c0af6506e592d1194"
  },
  {
    "url": "zh/frontend/javaScriptTop/index.html",
    "revision": "f823750bd84e36ae027900533c9d3f0d"
  },
  {
    "url": "zh/frontend/jQuery/customize.html",
    "revision": "e4c40e85a8bdc74f70ab09cdad59cd45"
  },
  {
    "url": "zh/frontend/jQuery/event.html",
    "revision": "2c99e2e6c3a31079683c39dbe4a6dcdb"
  },
  {
    "url": "zh/frontend/jQuery/index.html",
    "revision": "adcf426b125e0e087d8bb53763582090"
  },
  {
    "url": "zh/frontend/jQuery/method.html",
    "revision": "30d9ad8d539a125b7c9e08080a2f923b"
  },
  {
    "url": "zh/frontend/node/index.html",
    "revision": "b00275fbd21860ed6051ea440aba0000"
  },
  {
    "url": "zh/frontend/nuxt/index.html",
    "revision": "58ade808a6fa3e7b576075ac37844fd8"
  },
  {
    "url": "zh/frontend/vue/index.html",
    "revision": "e9b962bcc36214a1e02e238977a1e2ad"
  },
  {
    "url": "zh/frontend/vuex/index.html",
    "revision": "6c8a2dea1ad49b7c446b9b7bf319b2d9"
  },
  {
    "url": "zh/frontend/webpack/index.html",
    "revision": "270251c65658f247ed258b6e35d7f04e"
  },
  {
    "url": "zh/frontend/webpack/install.html",
    "revision": "9d16d036ee1ae6e45410e079ae1b850e"
  },
  {
    "url": "zh/index.html",
    "revision": "f207e9a84b79bf8f6c0905f92b570821"
  },
  {
    "url": "zh/other/git/index.html",
    "revision": "3cd2e42c18a4196ad03da9226d85fc4b"
  },
  {
    "url": "zh/other/index.html",
    "revision": "8937142fef8f80c7b268056209757ff7"
  },
  {
    "url": "zh/other/pwa/index.html",
    "revision": "b58e62d9b4e24be74c84c47cf351d7aa"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "c315101f0705b7359f0e5ac3ca8f7bad"
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
