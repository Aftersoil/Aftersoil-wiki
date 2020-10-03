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
    "revision": "fc16b33605d4f425656e50adfb5630c1"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "c821d38bad0418f6975c4295188ecc2f"
  },
  {
    "url": "assets/css/0.styles.5dc1cf24.css",
    "revision": "19220843ecde5541032fafbf7f5976f3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9d78825f.js",
    "revision": "54c97c3cd38d07565c41e8489e378d5a"
  },
  {
    "url": "assets/js/100.2dcd0e19.js",
    "revision": "b0f0ffb56f93b889b979648d136806ec"
  },
  {
    "url": "assets/js/101.c4e1dcfc.js",
    "revision": "bbae97be8e6bb5d5322cfe90657df3e8"
  },
  {
    "url": "assets/js/102.599051b8.js",
    "revision": "6d1ab6c8e1c776bc6068e8e48b38f3d6"
  },
  {
    "url": "assets/js/103.ff75dceb.js",
    "revision": "d1df24a564e166aef9f4e4420f3d98b0"
  },
  {
    "url": "assets/js/104.b6953289.js",
    "revision": "4cceeb57f84bd58d556591a07e0c6a67"
  },
  {
    "url": "assets/js/105.d9b91060.js",
    "revision": "2547fb661ebbb287e81d64fee4f041b7"
  },
  {
    "url": "assets/js/106.81b7e922.js",
    "revision": "3c33e3afa5f3fd7b606fd8a859b18805"
  },
  {
    "url": "assets/js/107.c57402f3.js",
    "revision": "42289a00ce7acd2136d691c526f23949"
  },
  {
    "url": "assets/js/108.c0afb346.js",
    "revision": "9fd6aa0fb4ef4571227f4371f970fc02"
  },
  {
    "url": "assets/js/109.329c9b02.js",
    "revision": "7345ba5c758157ec3a860b2749907cc8"
  },
  {
    "url": "assets/js/11.87313a1f.js",
    "revision": "35983903fcb4e169a33b278a512bb238"
  },
  {
    "url": "assets/js/110.0a7e1b41.js",
    "revision": "9834e56b199345cca7587d0ac6e043ec"
  },
  {
    "url": "assets/js/111.8ff38f4b.js",
    "revision": "b0480330f763d8e38e3aba12bf63eb8a"
  },
  {
    "url": "assets/js/112.1a22e481.js",
    "revision": "99656c59c118390d17f6aedfba054913"
  },
  {
    "url": "assets/js/113.a22efe77.js",
    "revision": "8726ff5fd323c98dae84e76c2a3fbf13"
  },
  {
    "url": "assets/js/114.7503d56b.js",
    "revision": "b2399e9fca0662b2b7a86b58abb70adb"
  },
  {
    "url": "assets/js/115.e2c3688b.js",
    "revision": "5eabe5cb6c1e95865609a2522b096f6b"
  },
  {
    "url": "assets/js/116.9f0993d7.js",
    "revision": "850171d7534fa06b3c6f9e6b8812c965"
  },
  {
    "url": "assets/js/117.e803f7c7.js",
    "revision": "3b016b2dd3dbaac7cab7370c2c3dcb6c"
  },
  {
    "url": "assets/js/118.479b05d9.js",
    "revision": "4513a9bef55d6fd58c63f931d4fa7c28"
  },
  {
    "url": "assets/js/12.67fec613.js",
    "revision": "961a5de0a67d016923668a1dd8e2b881"
  },
  {
    "url": "assets/js/13.5eddee4b.js",
    "revision": "5f9596f17ab2b75301f16b758320b335"
  },
  {
    "url": "assets/js/14.63c5afc6.js",
    "revision": "71a84acc3b9a7b7a02fcb564e16c5701"
  },
  {
    "url": "assets/js/15.9e1d8cc1.js",
    "revision": "8332213d709228e1ae65fcf1dba3ff59"
  },
  {
    "url": "assets/js/16.4739bf22.js",
    "revision": "1372b79ec50dcc89621053ac53f9c317"
  },
  {
    "url": "assets/js/17.69b5b435.js",
    "revision": "29fd7552218bb125ec8c7a07bf9ad2c1"
  },
  {
    "url": "assets/js/18.8e235b92.js",
    "revision": "9b215d68b7db702296557182bb344e58"
  },
  {
    "url": "assets/js/19.40f29e2c.js",
    "revision": "9ef3e322e3311aa612d1eba31fb54099"
  },
  {
    "url": "assets/js/2.cfe6598b.js",
    "revision": "adf3687716e2dbf5ba56870e851ec691"
  },
  {
    "url": "assets/js/20.f89a4a51.js",
    "revision": "e1ac046f99bd7dc655fadfa95f716ca7"
  },
  {
    "url": "assets/js/21.f89c907b.js",
    "revision": "d3d6cccf5d9307fac90777ac18f42094"
  },
  {
    "url": "assets/js/22.642684cd.js",
    "revision": "01dd5025a13f9a0e82a51b327886fc88"
  },
  {
    "url": "assets/js/23.3339b32b.js",
    "revision": "10cee5885dd64244dc6fddf5cf87df23"
  },
  {
    "url": "assets/js/24.868d3bb5.js",
    "revision": "01bd1da4e211cb5dfc0addcfdac9f004"
  },
  {
    "url": "assets/js/25.b336819f.js",
    "revision": "e19266610fb1f1ce6c6fcd30a7f92634"
  },
  {
    "url": "assets/js/26.3f5619aa.js",
    "revision": "6efcbdceeb61bd636545452f1e442e66"
  },
  {
    "url": "assets/js/27.f0d67c91.js",
    "revision": "3c7f6f32416f662ca997547ddc246a2b"
  },
  {
    "url": "assets/js/28.0ef83cb0.js",
    "revision": "553aa042e3205fd9f23dfb1ca4c72692"
  },
  {
    "url": "assets/js/29.93245bfa.js",
    "revision": "5433aa52dca54968f21db4bfba4870b0"
  },
  {
    "url": "assets/js/3.fb60532c.js",
    "revision": "38291d29ce8442857d04330833390049"
  },
  {
    "url": "assets/js/30.ee961c21.js",
    "revision": "3240db991d11b51b959b93e5252d719e"
  },
  {
    "url": "assets/js/31.5ee80dfe.js",
    "revision": "ab56f1f0e899b742290d4c3dd783a5c2"
  },
  {
    "url": "assets/js/32.c467bf37.js",
    "revision": "491224c5a0f833768f3c26ac7c112e18"
  },
  {
    "url": "assets/js/33.6957ba92.js",
    "revision": "4c6d328fb8155f09115b1e0055de9e85"
  },
  {
    "url": "assets/js/34.27eb2780.js",
    "revision": "5828e3d6d84a68ce391849fe604877e0"
  },
  {
    "url": "assets/js/35.6041b448.js",
    "revision": "b0ba321ec021a57ca9d6b1c37f1d13d7"
  },
  {
    "url": "assets/js/36.32467a0a.js",
    "revision": "17369b487f281bf4bb783cd5e8888fb0"
  },
  {
    "url": "assets/js/37.2b2165cb.js",
    "revision": "0a2a5dafe6cf05141c958589f418955a"
  },
  {
    "url": "assets/js/38.e5508670.js",
    "revision": "bcf836ea2cd695483f9fec7adeb0344b"
  },
  {
    "url": "assets/js/39.44464932.js",
    "revision": "9168f44e99662b1d2c82bad8ba1993c9"
  },
  {
    "url": "assets/js/4.d29ba165.js",
    "revision": "f59def36dc168f7bdcfa085cb2829243"
  },
  {
    "url": "assets/js/40.d5c9459e.js",
    "revision": "706d6f620b2c278183d9864337ac21ab"
  },
  {
    "url": "assets/js/41.bc2824da.js",
    "revision": "b30b7b4bb2d3d9d05c3e6b5edb271f8c"
  },
  {
    "url": "assets/js/42.e82c7faf.js",
    "revision": "99145a6d31154e35dfe212505d91588e"
  },
  {
    "url": "assets/js/43.9019a25c.js",
    "revision": "676f82399110a18cdb27504f3663cb27"
  },
  {
    "url": "assets/js/44.20b0492e.js",
    "revision": "e5e53741c73527ab47bb1da6e02c36b2"
  },
  {
    "url": "assets/js/45.ae91cc15.js",
    "revision": "319d0928773290ed0131dd1812c3f58d"
  },
  {
    "url": "assets/js/46.6b3407a2.js",
    "revision": "9d23d56867138cd683df555a67860ed5"
  },
  {
    "url": "assets/js/47.6ce5c087.js",
    "revision": "0d0e338358dae0daa404e63fd7af00a2"
  },
  {
    "url": "assets/js/48.001ae594.js",
    "revision": "4c43d9964a9f5f297541cd95dbe654d2"
  },
  {
    "url": "assets/js/49.6ba6d8be.js",
    "revision": "1194d39ff8795934698793b221d058af"
  },
  {
    "url": "assets/js/5.597b3655.js",
    "revision": "18d93bc380caddb78cdc83e19d7de0c1"
  },
  {
    "url": "assets/js/50.44b315ea.js",
    "revision": "ee76a3b81a71315ccbc6778e1d0f17aa"
  },
  {
    "url": "assets/js/51.41f08624.js",
    "revision": "a0b31a8821bb2717906bf8ab9bbc219b"
  },
  {
    "url": "assets/js/52.ddec54b1.js",
    "revision": "703474a2f4ff2e14950248edfbb6a1cd"
  },
  {
    "url": "assets/js/53.ed3b1005.js",
    "revision": "c19d9f1826d64e3599aa59b707762221"
  },
  {
    "url": "assets/js/54.62bd16dd.js",
    "revision": "fa6ab466cfe86eb3e7b2484a82a9d887"
  },
  {
    "url": "assets/js/55.81bec7d3.js",
    "revision": "42afa4d588baa95463cc1a381234e829"
  },
  {
    "url": "assets/js/56.45901623.js",
    "revision": "7014074cd18f745da1e4220b36c101bb"
  },
  {
    "url": "assets/js/57.1556339b.js",
    "revision": "26fb88c67fefbe291479c578c5bf7d56"
  },
  {
    "url": "assets/js/58.59742092.js",
    "revision": "2d61c99869ef54c99b86fd14867f3f36"
  },
  {
    "url": "assets/js/59.92c3cfe8.js",
    "revision": "d73782f025e233a9d592c3d83e14a1c6"
  },
  {
    "url": "assets/js/6.716bb8d3.js",
    "revision": "a0b453f7f5de0f94ddd20f14ac8894e9"
  },
  {
    "url": "assets/js/60.613c6b09.js",
    "revision": "408f2bdf59a386feef3ce810af9b8a20"
  },
  {
    "url": "assets/js/61.876d8e70.js",
    "revision": "326e74383317335a2a6a0c4e11c64db7"
  },
  {
    "url": "assets/js/62.b3b788e2.js",
    "revision": "404ed145cadb71698e0826e40f3fc19f"
  },
  {
    "url": "assets/js/63.c895fa16.js",
    "revision": "534d6dc859ed8247b4c8d472a809ed42"
  },
  {
    "url": "assets/js/64.3e66b32f.js",
    "revision": "bb7842f33fdbdd8bd23de644cf2fdde5"
  },
  {
    "url": "assets/js/65.d965a3a2.js",
    "revision": "dd48940b9dbe12952cd33d42894806ab"
  },
  {
    "url": "assets/js/66.4782319c.js",
    "revision": "bcdb6cd764bdde510e3775a5bc186785"
  },
  {
    "url": "assets/js/67.4b440b2f.js",
    "revision": "c9bf82dcbced41a5e0279eba276168f6"
  },
  {
    "url": "assets/js/68.11b7ce90.js",
    "revision": "1162bd0b3bd8cfb9c965ddb26432066a"
  },
  {
    "url": "assets/js/69.6787991e.js",
    "revision": "276a9da586c16c997dad4071a33eedee"
  },
  {
    "url": "assets/js/7.36f0e6f9.js",
    "revision": "d71751edb20f4896212483b881b9774e"
  },
  {
    "url": "assets/js/70.27492ebc.js",
    "revision": "79419c3bc47668304b13e1753f6d8d2d"
  },
  {
    "url": "assets/js/71.79a26b04.js",
    "revision": "f61f0635ece15954ac1ccf74795402c3"
  },
  {
    "url": "assets/js/72.8ee46cf3.js",
    "revision": "7dd19bc59e9cdd92d88081a4d4765399"
  },
  {
    "url": "assets/js/73.8a93ca61.js",
    "revision": "78c8daac2cdd7a745d3cd520a55ff104"
  },
  {
    "url": "assets/js/74.17876584.js",
    "revision": "5d4bef6f6873eeb682e47d8271ad1f7b"
  },
  {
    "url": "assets/js/75.5d51bc08.js",
    "revision": "2fad003eafd3843229c5c8c97d526bb3"
  },
  {
    "url": "assets/js/76.8207ae79.js",
    "revision": "93ca9bae6bd56d3197f906b0b07b397e"
  },
  {
    "url": "assets/js/77.66f8fb4c.js",
    "revision": "211f1a3579bf2920d49cae5ec5647351"
  },
  {
    "url": "assets/js/78.c71b7124.js",
    "revision": "5d0ec0513e79954042696f8eb84badba"
  },
  {
    "url": "assets/js/79.f7d0b177.js",
    "revision": "f36bd118541ee44f651385b0ca76ae5f"
  },
  {
    "url": "assets/js/8.517eae3e.js",
    "revision": "94c544c5c9a10e130a8f7705dd1d6ce6"
  },
  {
    "url": "assets/js/80.bd0f927b.js",
    "revision": "8e7a972ca2658ee5b9202c9e04dd9f0f"
  },
  {
    "url": "assets/js/81.12342b47.js",
    "revision": "e53bf09ddc791be89766c0a25e0056e3"
  },
  {
    "url": "assets/js/82.1b652633.js",
    "revision": "212efd71f2c9f7873a32396a2029ffdd"
  },
  {
    "url": "assets/js/83.bb575180.js",
    "revision": "d4d2df5cab08025b111aa1edc46e63d3"
  },
  {
    "url": "assets/js/84.49649021.js",
    "revision": "e0cd68357d4dbb985881b09f70c1f7dd"
  },
  {
    "url": "assets/js/85.b4b7d634.js",
    "revision": "85cf13ee4c12d6a4c7f531fab6043575"
  },
  {
    "url": "assets/js/86.11a71a44.js",
    "revision": "b20621a64b1826293e37ca2e6fcb0445"
  },
  {
    "url": "assets/js/87.9bc7fd5b.js",
    "revision": "2490e2c9ce48a15390f8b391945cfadd"
  },
  {
    "url": "assets/js/88.f094cb3d.js",
    "revision": "f1c7a33a6b6f984f849b9e349de59ffe"
  },
  {
    "url": "assets/js/89.b767358b.js",
    "revision": "c301bca0aa96333e10a1387a96dcc9fb"
  },
  {
    "url": "assets/js/9.4060c407.js",
    "revision": "d01718c0127161d710aeeed680e84a8e"
  },
  {
    "url": "assets/js/90.08b8c19b.js",
    "revision": "d24a35f43b68efb3b79722d380739f43"
  },
  {
    "url": "assets/js/91.0c093d74.js",
    "revision": "2f5182e0fd1884507e344d8bc85aae3e"
  },
  {
    "url": "assets/js/92.947c0d21.js",
    "revision": "e2d0af7194380e52fc38288470bd45e6"
  },
  {
    "url": "assets/js/93.fd96a043.js",
    "revision": "e2cfa6e36983214210a7cf11ccb5f9d8"
  },
  {
    "url": "assets/js/94.feb28de0.js",
    "revision": "29e1c0df608280a8adf0106e0a9f747f"
  },
  {
    "url": "assets/js/95.b8fc0e1f.js",
    "revision": "6f00ddf060910e0d9b29f390195456aa"
  },
  {
    "url": "assets/js/96.c8ee0c22.js",
    "revision": "057c5e61d288578342c36e468648d1ba"
  },
  {
    "url": "assets/js/97.60cd6d61.js",
    "revision": "58f5edba0f84310a10e292d9bf767bf2"
  },
  {
    "url": "assets/js/98.31e0775f.js",
    "revision": "13171cccb01e9524f1a5524784e03263"
  },
  {
    "url": "assets/js/99.87d3c5ac.js",
    "revision": "9a22b99deda6d7c7147dd204f398e185"
  },
  {
    "url": "assets/js/app.30c7f71b.js",
    "revision": "0f8fc114ad1408f6539007885a5a3f44"
  },
  {
    "url": "basics/code.html",
    "revision": "bc91b55a7e9a1e72c7f3c718d442efad"
  },
  {
    "url": "basics/index.html",
    "revision": "5a6f70a760ba2606734ffcec9bfa0d31"
  },
  {
    "url": "basics/Interviewquestions.html",
    "revision": "7dc29fd5018dbdc892e02de7d358eb17"
  },
  {
    "url": "basics/other.html",
    "revision": "8225db7dc25b861fd9d57fd7dcfa8de4"
  },
  {
    "url": "basics/rearend.html",
    "revision": "04ce889a7b478979b1f909a54b5d6a60"
  },
  {
    "url": "frontend/ajax/Ajax-advanced.html",
    "revision": "9bc8f7a6d52397e6a9318fd939a91195"
  },
  {
    "url": "frontend/ajax/AJAX-XHR.html",
    "revision": "d0bf6cf4a18b94d2f050d3ed2c41129f"
  },
  {
    "url": "frontend/ajax/index.html",
    "revision": "e2052fdd3003bff4e4393e41b3301a2a"
  },
  {
    "url": "frontend/ajax/summary.html",
    "revision": "418a3fa927dafba739be6cfb33a50c85"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "5676206499abb9e4d75f597f6871b28e"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "753e49926310d665e4e7ae5e6974dbf5"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "cc3ef60027aca8d467b209b92c124773"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "4eee4417127b5d8d62a95d7b4d410d87"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "336989bef1bbdc199c9b007e4b7fb2a7"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "ef8815e8af9d20e89bb59dfb2385d465"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "0c35613a1e42a45f69a0a78300568eb6"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "1f32e1e309475d6276a97651817e7c96"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "1c9659c8349841bf811d7618b81be288"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "e8c50f9a2a61797d0fd9d6b67bfde616"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "f2f2d0e2d9c925f38eebc8cd41c2ba69"
  },
  {
    "url": "frontend/HTML/form.html",
    "revision": "65ef5a8680a77458b68ea2ed9de50204"
  },
  {
    "url": "frontend/HTML/HTML.html",
    "revision": "07af337c218bd93e8db1ef0ef371a34a"
  },
  {
    "url": "frontend/HTML/index.html",
    "revision": "c34905bda49855f74be7d966ae3fb68b"
  },
  {
    "url": "frontend/HTML/table.html",
    "revision": "323bb5e265c2984064b5602565365172"
  },
  {
    "url": "frontend/javaScript/api.html",
    "revision": "5087be3f57c75df3e26ad1e2c01b4b2f"
  },
  {
    "url": "frontend/javaScript/array.html",
    "revision": "7ab7d1d58d5c7b0b24867ca9f35cf87a"
  },
  {
    "url": "frontend/javaScript/date.html",
    "revision": "4fe2b0dc79f8f7c69080868f8089de46"
  },
  {
    "url": "frontend/javaScript/function.html",
    "revision": "dd1157f5aa06ac11a082e05ece0a7bf9"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "66c3c9d642421f18e17e30cb579ef9e7"
  },
  {
    "url": "frontend/javaScript/process-control.html",
    "revision": "72464f3737e09541dc6bde1730cd3fb0"
  },
  {
    "url": "frontend/javaScript/typeof-data.html",
    "revision": "dd24172388aed856bdf05a14acea5991"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "0c38ecf0b1e38cb431c94d0fdf914ecc"
  },
  {
    "url": "frontend/jQuery/customize.html",
    "revision": "3c3bea75cc2beb010b89119d37ca87f4"
  },
  {
    "url": "frontend/jQuery/event.html",
    "revision": "87323a205ab6157ddc64adae17591a3e"
  },
  {
    "url": "frontend/jQuery/index.html",
    "revision": "851a315524d8cd38b342fdca40cf30ec"
  },
  {
    "url": "frontend/jQuery/method.html",
    "revision": "278eba62943ee4d6df39116b62231c0b"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "eb3c946a7d1d5888eee0997ec1bc6fc1"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "93077cb3299c8a200fc218a66550f795"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "e3f3932730d5e8cad1cc2143e2bf3c67"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "0eca5e745434f3a3d0b98fd3caf4765d"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "97bdae5007899c6f154555d229bc26c4"
  },
  {
    "url": "frontend/webpack/install.html",
    "revision": "f5dedfcf7939f5d71981614d8980a6b7"
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
    "revision": "10bf9b19c01bc32279220c59708ebfce"
  },
  {
    "url": "other/download/index.html",
    "revision": "7811f48b2d45862d950414fac597f6e6"
  },
  {
    "url": "other/download/Other.html",
    "revision": "d89d62b268ff1755da8ea029aa314edd"
  },
  {
    "url": "other/download/Rear-end.html",
    "revision": "c9fe742946a8f6d14274f2620de4860d"
  },
  {
    "url": "other/git/index.html",
    "revision": "05297cba0c6317cd6f1a22fd9adae3ed"
  },
  {
    "url": "other/pwa/index.html",
    "revision": "c8746634458197d40088b18ce8107273"
  },
  {
    "url": "rearend/MySQL/Attributes.html",
    "revision": "808ab5dd9d43ae828ce9a5293f1a728e"
  },
  {
    "url": "rearend/MySQL/data-storage.html",
    "revision": "17810a00cd28e84807db2a3b7671ab18"
  },
  {
    "url": "rearend/MySQL/index.html",
    "revision": "57de5a0c6857b49a071446c9c11e88c4"
  },
  {
    "url": "rearend/MySQL/SQL-commands.html",
    "revision": "5e63233c4082c73b61229ffc96af983c"
  },
  {
    "url": "sitio/index.html",
    "revision": "b49c88657106b8ca2ffa52c07e94d506"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "1bf8f57eb21f2ebe20c1deb71f0c9413"
  },
  {
    "url": "zh/basics/code.html",
    "revision": "12a18bad0505b4c2c51ae90a1b5d513d"
  },
  {
    "url": "zh/basics/index.html",
    "revision": "6b541f98cb281b108a891e8df9eedb90"
  },
  {
    "url": "zh/basics/Interviewquestions.html",
    "revision": "9ad441067a58ba7d85072232e0a212d4"
  },
  {
    "url": "zh/basics/other.html",
    "revision": "dbcb4b72187b601972d31450f1b318e6"
  },
  {
    "url": "zh/basics/rearend.html",
    "revision": "c4c2aea55cc738c32c96496a4c75ac46"
  },
  {
    "url": "zh/frontend/ajax/Ajax-advanced.html",
    "revision": "53a5cacfc49cf4b8870534564b797892"
  },
  {
    "url": "zh/frontend/ajax/AJAX-XHR.html",
    "revision": "60df0de9733c602d32410d8b2653e8ce"
  },
  {
    "url": "zh/frontend/ajax/index.html",
    "revision": "b6aa4e888500890f4ae4358165f95186"
  },
  {
    "url": "zh/frontend/ajax/summary.html",
    "revision": "0ae7911df224297c9bcdebaa484a20a3"
  },
  {
    "url": "zh/frontend/BootStrap/index.html",
    "revision": "a20bb9938ae5b8e23d73ac546a628633"
  },
  {
    "url": "zh/frontend/BootStrap/OtherComponents.html",
    "revision": "bdb6b510190b63058422e178379eb828"
  },
  {
    "url": "zh/frontend/BootStrap/SCSS.html",
    "revision": "6eb887a123e9ab1304e6aa70a2c0a983"
  },
  {
    "url": "zh/frontend/css/box.html",
    "revision": "adfacecb10f533c3f124b728b6e1cb71"
  },
  {
    "url": "zh/frontend/css/index.html",
    "revision": "369cd25bdcde63d171becaa546b7c9f1"
  },
  {
    "url": "zh/frontend/css/selector.html",
    "revision": "4fa5099960f097df15925bbd2e414c45"
  },
  {
    "url": "zh/frontend/css/size.html",
    "revision": "a38e53c7d703812f0e729751b61dee12"
  },
  {
    "url": "zh/frontend/css/TextFormatting.html",
    "revision": "d5a9ae360740930db8d2852ebb15696b"
  },
  {
    "url": "zh/frontend/docsCss/index.html",
    "revision": "8e0ce63b1160f491e0113ec044fcc5eb"
  },
  {
    "url": "zh/frontend/docsH5C3/index.html",
    "revision": "25fd10ed7115ac030d74f107317d696d"
  },
  {
    "url": "zh/frontend/domBom/index.html",
    "revision": "8b59ca495f952626c802e182865598f0"
  },
  {
    "url": "zh/frontend/HTML/form.html",
    "revision": "4daa9cace7f0f84dfbd2f9cdb6a90d46"
  },
  {
    "url": "zh/frontend/HTML/HTML.html",
    "revision": "cf3c408b5312790b4cdad89feb117203"
  },
  {
    "url": "zh/frontend/HTML/index.html",
    "revision": "fbece9d4333f12b2bec68a9345834c09"
  },
  {
    "url": "zh/frontend/HTML/table.html",
    "revision": "f2aa5add9b456400ff64ff2667d844ee"
  },
  {
    "url": "zh/frontend/javaScript/api.html",
    "revision": "1e31d9e464c3cdb38e7dd64f69d9089e"
  },
  {
    "url": "zh/frontend/javaScript/array.html",
    "revision": "d1d5ea4863d93bc1c7cb6a8b75f31f18"
  },
  {
    "url": "zh/frontend/javaScript/date.html",
    "revision": "554f72b05d39075d834d5cc97951add4"
  },
  {
    "url": "zh/frontend/javaScript/function.html",
    "revision": "a18f2c6d6a3dcd5418aeebab5ea1a46c"
  },
  {
    "url": "zh/frontend/javaScript/index.html",
    "revision": "2f9cac3b6494c9519813db0f85e7c2da"
  },
  {
    "url": "zh/frontend/javaScript/process-control.html",
    "revision": "0f0ebe27025d3d715f9dbae5c5caed5b"
  },
  {
    "url": "zh/frontend/javaScript/typeof-data.html",
    "revision": "e402b97b5ffc2b6426c543341212959c"
  },
  {
    "url": "zh/frontend/javaScriptTop/index.html",
    "revision": "8c51117fa47b156b60760af79c6eb406"
  },
  {
    "url": "zh/frontend/jQuery/customize.html",
    "revision": "4fe7ec8b1710aa73c02492de27f27a31"
  },
  {
    "url": "zh/frontend/jQuery/event.html",
    "revision": "9e49dd995ffb11d602b16499ed5789d8"
  },
  {
    "url": "zh/frontend/jQuery/index.html",
    "revision": "4f094dfd2ca142dd66abda9395b5b598"
  },
  {
    "url": "zh/frontend/jQuery/method.html",
    "revision": "f5b09b98f8e78893a2d43d712cc70fcc"
  },
  {
    "url": "zh/frontend/node/index.html",
    "revision": "e0c5efba8641b18ab221f2d83baff958"
  },
  {
    "url": "zh/frontend/nuxt/index.html",
    "revision": "3bfa5029c8640486cfed40c044678bf2"
  },
  {
    "url": "zh/frontend/vue/index.html",
    "revision": "dedc6db2a895278876da3953661e8358"
  },
  {
    "url": "zh/frontend/vuex/index.html",
    "revision": "bd84f4ac398ff25afb3239e04fe35c64"
  },
  {
    "url": "zh/frontend/webpack/index.html",
    "revision": "0c4595182e28165f8f037b9e6251d204"
  },
  {
    "url": "zh/frontend/webpack/install.html",
    "revision": "38d1ca070f83cc839c117d07572d4df4"
  },
  {
    "url": "zh/index.html",
    "revision": "7799a4688669e129805acbe7e07c1730"
  },
  {
    "url": "zh/other/download/index.html",
    "revision": "a0c2524b39d33b197703960fed22aa92"
  },
  {
    "url": "zh/other/download/Other.html",
    "revision": "26d7f434f7ebdb20c8389c84b157bb34"
  },
  {
    "url": "zh/other/download/Rear-end.html",
    "revision": "120e1db92fc9c5e67f27bab31cc93b10"
  },
  {
    "url": "zh/other/git/index.html",
    "revision": "9e265c8d6db18e3fcdc7da665d793d3e"
  },
  {
    "url": "zh/other/index.html",
    "revision": "2a4221cdf5366d94fb9b898f18b0cc12"
  },
  {
    "url": "zh/other/pwa/index.html",
    "revision": "d4f2e151b92b12a9f0c77c95b4d12103"
  },
  {
    "url": "zh/rearend/MySQL/Attributes.html",
    "revision": "9a45c55e2c70040cab45c597063ce71c"
  },
  {
    "url": "zh/rearend/MySQL/data-storage.html",
    "revision": "b5dcb304ba7d9f4099570e2be2588c23"
  },
  {
    "url": "zh/rearend/MySQL/index.html",
    "revision": "dd00f45abb778b722f57985c8917bceb"
  },
  {
    "url": "zh/rearend/MySQL/SQL-commands.html",
    "revision": "4774c5bc6d677684386dab2f0f92e50c"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "8b821a3a94fc1692a1005991536e80b0"
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
