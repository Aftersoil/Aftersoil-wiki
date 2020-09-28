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
    "revision": "3eecbfec48a5c385208cf84b1de696dd"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "d41b23fee4e0ce78d85dcb1c1b0bc528"
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
    "url": "assets/js/11.fcaba061.js",
    "revision": "d9621b03275c9c687458acb3cc40fb30"
  },
  {
    "url": "assets/js/12.4cba493c.js",
    "revision": "15c4eb0100b142bf3339aac82f29874a"
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
    "url": "assets/js/20.e334f6c1.js",
    "revision": "a55397285f11ba73e89827676f47623d"
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
    "url": "assets/js/23.4795afd4.js",
    "revision": "d4acfbb760be47b9e242bf723763c57b"
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
    "url": "assets/js/28.26323f4b.js",
    "revision": "4599786456a55a0d4e29737aa098a1b5"
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
    "url": "assets/js/30.6e394a82.js",
    "revision": "e8c11872a9b19f02207244bbff2bbea4"
  },
  {
    "url": "assets/js/31.16d0fd1a.js",
    "revision": "9410f9626b236b6180fef2625a64740b"
  },
  {
    "url": "assets/js/32.65727e6e.js",
    "revision": "09c68dc66ea96493cbbe5dd5bc2aa613"
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
    "url": "assets/js/35.cb91fac5.js",
    "revision": "802fd09d9efe5700e209bc8b3972870f"
  },
  {
    "url": "assets/js/36.625d28d4.js",
    "revision": "2b31833b0e165d1b89fd1f621e728686"
  },
  {
    "url": "assets/js/37.4104dc92.js",
    "revision": "e7ded0750ea1516f42c6fa9cae70e5c2"
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
    "url": "assets/js/60.07f0d1e5.js",
    "revision": "0cc42f2150d5dcd5929115f6a9ec19f2"
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
    "url": "assets/js/64.e769d1b3.js",
    "revision": "ca1ecddc5056255004326b19b8c8c033"
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
    "url": "assets/js/8.fc4034f7.js",
    "revision": "6df32869255e19c998d28f01b5492d6b"
  },
  {
    "url": "assets/js/9.7d55478b.js",
    "revision": "f584d2c474d5895ad6c35dcff85c1c20"
  },
  {
    "url": "assets/js/app.b9eed91c.js",
    "revision": "df085a90f6e33a3a5b6dd4a7a17dbe50"
  },
  {
    "url": "basics/index.html",
    "revision": "76cccda6f6c99d0b2569db85ac590490"
  },
  {
    "url": "basics/other.html",
    "revision": "2aeed9e8ca1002e4e0c4a157e5922960"
  },
  {
    "url": "basics/rearend.html",
    "revision": "2b27cbdd1872921ae9e7af819c9dbdf6"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "8afda7c83551f5f84f2f76a55da490e4"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "2b4461f07cb64805c7463382f6ee08d2"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "06adca1c5e16870dc5c5e235b2de7588"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "ffe93e072504d42edcdae468585c91bd"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "08bbfa21f126ad1f3340080cffe96812"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "81456fa8c5801bbbac944b15efab804d"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "974a612cdd8aa8ff5cb4117169da1200"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "871d618b833066a22bcffc9479d5340a"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "ba9ee57f9b55fcbe39a6b866d904c38d"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "c09fb4a1ccf08ad95c8e4e180fe1a609"
  },
  {
    "url": "frontend/docsHtml/index.html",
    "revision": "b7b5bf78f54489d68071774195a8311d"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "5efb784fbfb831633dc32c9b934af438"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "93568d5b9eef992eb3f322c908b27aaf"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "483adfb5d4512c1ce4fc233a624c80f5"
  },
  {
    "url": "frontend/jQuery/customize.html",
    "revision": "17cecc91113868bad4b974291e0fec36"
  },
  {
    "url": "frontend/jQuery/event.html",
    "revision": "567a811e6755888a45cb27f9923ee706"
  },
  {
    "url": "frontend/jQuery/index.html",
    "revision": "cabeb76307101f9f6421a57dcc924194"
  },
  {
    "url": "frontend/jQuery/method.html",
    "revision": "65b21f0d129d08c308366af98192f0e5"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "a79e3c57a30b1c371dc632a26997f97a"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "406132009efa9a78355cba8fc57eba1d"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "fee44bccc51974043eeff8705f18bee6"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "251c83b05e5279018d884884e5aa6d27"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "b5a8c82d3418fc4be0f403f440116aaf"
  },
  {
    "url": "frontend/webpack/install.html",
    "revision": "54acf6dbfbee1f56502cb68932e3996a"
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
    "revision": "640fc70534f35930bc49a0a01ab21125"
  },
  {
    "url": "other/git/index.html",
    "revision": "2249132e0d245112d666df9a63b9908c"
  },
  {
    "url": "other/index.html",
    "revision": "3aa10aa605355e6e0f5aaa94663988e3"
  },
  {
    "url": "other/pwa/index.html",
    "revision": "8ec965078c993ace6f23ea59b70f4b70"
  },
  {
    "url": "sitio/index.html",
    "revision": "4d05181a274c475a603b82e47a4cb12d"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "12a3c94e73a9d8ff3b8d895310f305d8"
  },
  {
    "url": "zh/basics/index.html",
    "revision": "f6a32ac9ccb2b306faa33d051df16dff"
  },
  {
    "url": "zh/basics/other.html",
    "revision": "5097ba596f8cffe4e9d188836596a767"
  },
  {
    "url": "zh/basics/rearend.html",
    "revision": "f736d8f1def57222ffc9e583170b7a42"
  },
  {
    "url": "zh/frontend/BootStrap/index.html",
    "revision": "82fe364ac6676309eff9992aa03b79c7"
  },
  {
    "url": "zh/frontend/BootStrap/OtherComponents.html",
    "revision": "4c059bd7f3022123982bd5ace42ba9d9"
  },
  {
    "url": "zh/frontend/BootStrap/SCSS.html",
    "revision": "cc8d60f04d477f5f72d6c2744e11670e"
  },
  {
    "url": "zh/frontend/css/box.html",
    "revision": "ce6979d217072f9cd6c5b38c1d5870b2"
  },
  {
    "url": "zh/frontend/css/index.html",
    "revision": "e3dbcb7dddd3bb2dc0611869eb959205"
  },
  {
    "url": "zh/frontend/css/selector.html",
    "revision": "96523abd45572639149886e968d97289"
  },
  {
    "url": "zh/frontend/css/size.html",
    "revision": "3f76bc48048b99bad775c33f869b13c8"
  },
  {
    "url": "zh/frontend/css/TextFormatting.html",
    "revision": "c7e10f19af50069220890f392b1a68ed"
  },
  {
    "url": "zh/frontend/docsCss/index.html",
    "revision": "37c04637c470cafa4cb9deda0536c960"
  },
  {
    "url": "zh/frontend/docsH5C3/index.html",
    "revision": "7a31bdfe97178755b2c8c5d30e617fd1"
  },
  {
    "url": "zh/frontend/docsHtml/index.html",
    "revision": "f8ab1e1426005166728e0ec12cb5805c"
  },
  {
    "url": "zh/frontend/domBom/index.html",
    "revision": "bb24e5187163bce8010e5c16172c1907"
  },
  {
    "url": "zh/frontend/javaScript/index.html",
    "revision": "a831a47dcd9791f66279edb46cf646b0"
  },
  {
    "url": "zh/frontend/javaScriptTop/index.html",
    "revision": "1838ebdde64912959ac1ca3a84b68ebe"
  },
  {
    "url": "zh/frontend/jQuery/customize.html",
    "revision": "c8cd4b1304baa881728c611fbcb59701"
  },
  {
    "url": "zh/frontend/jQuery/event.html",
    "revision": "4ef04d54126c2e649aab9a082db81920"
  },
  {
    "url": "zh/frontend/jQuery/index.html",
    "revision": "f9c8c948bf56e2772e4e13a3c1073c2d"
  },
  {
    "url": "zh/frontend/jQuery/method.html",
    "revision": "acd29680145e36e931ea97f332f03770"
  },
  {
    "url": "zh/frontend/node/index.html",
    "revision": "e0954ed5a53e589da60ee1a11a2a44f2"
  },
  {
    "url": "zh/frontend/nuxt/index.html",
    "revision": "e6e6c27f8b0f2626504dbe20fece0b50"
  },
  {
    "url": "zh/frontend/vue/index.html",
    "revision": "f5951f3df7b2d7b3292db407c2d1994c"
  },
  {
    "url": "zh/frontend/vuex/index.html",
    "revision": "f6dad3735ccf74cb54181aa406c1b936"
  },
  {
    "url": "zh/frontend/webpack/index.html",
    "revision": "514ee6757d1a21d17398d8fc6feb8f06"
  },
  {
    "url": "zh/frontend/webpack/install.html",
    "revision": "a4a5cf66604fdfb1d1759967a8b744fe"
  },
  {
    "url": "zh/index.html",
    "revision": "5d18b253a898fcc2e9224b29a6f365f1"
  },
  {
    "url": "zh/other/git/index.html",
    "revision": "575a292fe475f42b750874ff85dec75b"
  },
  {
    "url": "zh/other/index.html",
    "revision": "0557c00ade249461904db817587a455b"
  },
  {
    "url": "zh/other/pwa/index.html",
    "revision": "6236117f1537d722cdcac20b84d18737"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "073dc4944b7d17875a9747bbab574b42"
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
