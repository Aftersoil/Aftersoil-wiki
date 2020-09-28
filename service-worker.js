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
    "revision": "211f0a0da6302ee8fa55e7e83f8bbaa5"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "6ec5cbef01fe6786281947b2c0573519"
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
    "url": "assets/js/14.ab56160a.js",
    "revision": "24e357d5a00ddf374d63b31c36f78e12"
  },
  {
    "url": "assets/js/15.f0cdbd57.js",
    "revision": "eec9f707c127f70503cdd4dfb8248aba"
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
    "url": "assets/js/32.65727e6e.js",
    "revision": "09c68dc66ea96493cbbe5dd5bc2aa613"
  },
  {
    "url": "assets/js/33.d14c431b.js",
    "revision": "04e45c3148bea08567a1563fe59844ce"
  },
  {
    "url": "assets/js/34.bbb2dcd6.js",
    "revision": "ee5f40f422d5c37149013ff313248a35"
  },
  {
    "url": "assets/js/35.68d41b56.js",
    "revision": "9117525c6b768f1190b207f9537068c5"
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
    "url": "assets/js/55.5808b7eb.js",
    "revision": "a31cb5ba4ae4384292866f4d4518f4ac"
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
    "url": "assets/js/62.6cb15756.js",
    "revision": "1e96195e4dc787af20e4f73fd3d4149b"
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
    "url": "assets/js/app.59cec30b.js",
    "revision": "3c472426e5eb12aef5563b42b970af0e"
  },
  {
    "url": "basics/index.html",
    "revision": "77254837764b941402cafd8479a1074e"
  },
  {
    "url": "basics/other.html",
    "revision": "914df68633db80e67d69bf3ca6c7cdff"
  },
  {
    "url": "basics/rearend.html",
    "revision": "4758a4949f3d18f8372375755850c472"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "8eec6d70dc7d3f53a79220a261b989d0"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "e9315c1a70316cd9bc85c09e9ff13626"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "9dbf0bc22d0904b60b001d13d006f61d"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "7dcd05df9a1671a1dd09117b60b29a44"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "df21d7a44857883be8712f564169ae90"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "a8b177456af42e290b416548e7200457"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "c23eddcba915a30ef41127f832bc6d55"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "dec666f03c55ed504f8f6d6f69702164"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "bda14b544f94b2ae30b1052749815eb7"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "4b91c358ad4ac9441e95021fed3a853c"
  },
  {
    "url": "frontend/docsHtml/index.html",
    "revision": "c8a98bea7da37e7e49bdba959f9a9ca8"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "18b0f2e977f640e48a75d120eda44ce8"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "6db54fad1633ed843af9b3eba34a74c2"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "dc93f1997bfed61d4417c2007c3adf0b"
  },
  {
    "url": "frontend/jQuery/customize.html",
    "revision": "2b8ba23732e502273615fcb64b3197c1"
  },
  {
    "url": "frontend/jQuery/event.html",
    "revision": "b8efff377f6c5fc11e5821d6f0b3c500"
  },
  {
    "url": "frontend/jQuery/index.html",
    "revision": "acae52f4e0b31de053dcf612f5221ef9"
  },
  {
    "url": "frontend/jQuery/method.html",
    "revision": "d11ab9a8ee51b0130a0d7ab113b81077"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "e74a6d30340ff3aa7716adfa406dd4d6"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "b9896758f0484017dfa4638be079bb2c"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "c746189aaf93ff18c55644721b343f03"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "13d0f718e4b3165dab77ae31b6d265ff"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "1d9c60dd59c78dacbb128e92644df4e0"
  },
  {
    "url": "frontend/webpack/install.html",
    "revision": "e14d01b80cd07f1176dc1216b9dac5b1"
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
    "revision": "df7688f254ad40a0c83039ddc9344fa2"
  },
  {
    "url": "other/git/index.html",
    "revision": "d2a44f79e7de4515e0f10a4836236571"
  },
  {
    "url": "other/index.html",
    "revision": "4dc480bcdf39c4418c50df31b240a4a2"
  },
  {
    "url": "other/pwa/index.html",
    "revision": "89404e9357f61ac3d648421e633adbac"
  },
  {
    "url": "sitio/index.html",
    "revision": "a3267bf4a9dca47e572ec8d618a70302"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "21691aa9203750260a07db5597f62f78"
  },
  {
    "url": "zh/basics/index.html",
    "revision": "0623237f72adc9d8774229d44282de4c"
  },
  {
    "url": "zh/basics/other.html",
    "revision": "ac1e5281c761baa290cf4a3ed7efebbd"
  },
  {
    "url": "zh/basics/rearend.html",
    "revision": "fb54cca9d826c40180dd54c9c5d17a43"
  },
  {
    "url": "zh/frontend/BootStrap/index.html",
    "revision": "7ed7c543cad869515f0f648012783944"
  },
  {
    "url": "zh/frontend/BootStrap/OtherComponents.html",
    "revision": "5139818ee0f5b2d7a174cee557596135"
  },
  {
    "url": "zh/frontend/BootStrap/SCSS.html",
    "revision": "cb9e02e19710e275c4e664ba3ce91041"
  },
  {
    "url": "zh/frontend/css/box.html",
    "revision": "1e64da26c29847d7b778f2458b39f66d"
  },
  {
    "url": "zh/frontend/css/index.html",
    "revision": "f7f8f6ba8c0c9044ee9474b95855124d"
  },
  {
    "url": "zh/frontend/css/selector.html",
    "revision": "f1bd5a3a85cfc96730ec040fbe712fea"
  },
  {
    "url": "zh/frontend/css/size.html",
    "revision": "cfa89258a322ca59ca6c395098df2bdf"
  },
  {
    "url": "zh/frontend/css/TextFormatting.html",
    "revision": "15e9c3c3854219e9e60e95eb7ed65b80"
  },
  {
    "url": "zh/frontend/docsCss/index.html",
    "revision": "8f88470a1d9c3a2d6fb66346271d2f35"
  },
  {
    "url": "zh/frontend/docsH5C3/index.html",
    "revision": "c6d0c2aa48159a4af6db05135c29ab23"
  },
  {
    "url": "zh/frontend/docsHtml/index.html",
    "revision": "b71e8ce98ad1d57dabec827dcb281565"
  },
  {
    "url": "zh/frontend/domBom/index.html",
    "revision": "ce74c08ed597c427093039de8c699332"
  },
  {
    "url": "zh/frontend/javaScript/index.html",
    "revision": "5f94942a28794b6cf670b500e6f52bc3"
  },
  {
    "url": "zh/frontend/javaScriptTop/index.html",
    "revision": "5c537404341d38a06c8f8159e878e2da"
  },
  {
    "url": "zh/frontend/jQuery/customize.html",
    "revision": "0f5401856c9807c83a17d5daac83f40b"
  },
  {
    "url": "zh/frontend/jQuery/event.html",
    "revision": "8fedc3cb4eaadb65568312ef60487642"
  },
  {
    "url": "zh/frontend/jQuery/index.html",
    "revision": "97aedadd5641248fa7de4e262394154f"
  },
  {
    "url": "zh/frontend/jQuery/method.html",
    "revision": "70bcba42759e403172d18e46b4eee2c1"
  },
  {
    "url": "zh/frontend/node/index.html",
    "revision": "afdc6e58308f66bf527b8cdc3eed2304"
  },
  {
    "url": "zh/frontend/nuxt/index.html",
    "revision": "88d18693327cf9bf1ae1da7fc67ae375"
  },
  {
    "url": "zh/frontend/vue/index.html",
    "revision": "cbbab016c61f21a5bcdd1f8042af7cee"
  },
  {
    "url": "zh/frontend/vuex/index.html",
    "revision": "2cc8057c623d6966def59b6aeb9cb18d"
  },
  {
    "url": "zh/frontend/webpack/index.html",
    "revision": "c822263fb10335d5f25a41115e2c5d44"
  },
  {
    "url": "zh/frontend/webpack/install.html",
    "revision": "f519dac5b5d586cbd45886625b4760a0"
  },
  {
    "url": "zh/index.html",
    "revision": "0620101d9de5fcd09954673bbead6c2d"
  },
  {
    "url": "zh/other/git/index.html",
    "revision": "a66de03439069c610323d1b72388de35"
  },
  {
    "url": "zh/other/index.html",
    "revision": "1f0ec3e48f543657d565d3a319a4da90"
  },
  {
    "url": "zh/other/pwa/index.html",
    "revision": "c4a6d79f8af8225c36c24f70909c1efc"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "7370c966fc3ac13f497c767c7c121ef4"
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
