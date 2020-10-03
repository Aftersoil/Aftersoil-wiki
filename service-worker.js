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
    "revision": "0ff0b3d4ceb42ee4bb771038420e740c"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "65f7e09efeb2bacf0c9fe4de321f5137"
  },
  {
    "url": "assets/css/0.styles.7149c52c.css",
    "revision": "2c2a0c87c36387e63444914ef5430144"
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
    "url": "assets/js/102.d254a560.js",
    "revision": "806269b21ee8f9dee6e075bfd80c0bfe"
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
    "url": "assets/js/13.52c3d66c.js",
    "revision": "b84dbe19455128ef603214e51d59c7a6"
  },
  {
    "url": "assets/js/14.8c753a28.js",
    "revision": "5e4f335854c600a74e2fe2aae055c965"
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
    "url": "assets/js/18.749ee5d7.js",
    "revision": "dd278b60a6cc068c477bae601e031685"
  },
  {
    "url": "assets/js/19.6fddbd24.js",
    "revision": "ad8630e78de34ae49133fdee64572367"
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
    "url": "assets/js/23.1acf5236.js",
    "revision": "37e64a5e7301226b6fffc2e910b0dc51"
  },
  {
    "url": "assets/js/24.c9dfc68d.js",
    "revision": "a0e96f54044d7ba54b1801502abab391"
  },
  {
    "url": "assets/js/25.630f7143.js",
    "revision": "1c26c3b07f14fb48bc4c830636be87de"
  },
  {
    "url": "assets/js/26.041812b7.js",
    "revision": "2e7f9e21cbeb3c1c91a8eba1755cfd44"
  },
  {
    "url": "assets/js/27.c991a4b4.js",
    "revision": "11bc9f847bd9df780e5523e80218735a"
  },
  {
    "url": "assets/js/28.87f9cbf7.js",
    "revision": "84b3b22dad3f1fc7f2a04964d37dd713"
  },
  {
    "url": "assets/js/29.7a313fe8.js",
    "revision": "8a2e2f709f7d0078ee8b49344536635b"
  },
  {
    "url": "assets/js/3.fb60532c.js",
    "revision": "38291d29ce8442857d04330833390049"
  },
  {
    "url": "assets/js/30.db812a61.js",
    "revision": "ed6df9cd65d6876a45dcad09515017f6"
  },
  {
    "url": "assets/js/31.df29990f.js",
    "revision": "35c5e15d1ed6a0a4ba0ab23ec25fb075"
  },
  {
    "url": "assets/js/32.7372b519.js",
    "revision": "d4d018dfb0b4960d2a26bcdc03b34c6d"
  },
  {
    "url": "assets/js/33.43b80bbd.js",
    "revision": "ee6d9cc479444d50050ae213ac2e77fb"
  },
  {
    "url": "assets/js/34.ea32ae1f.js",
    "revision": "23f4928db0c512239d5d809a03bae64a"
  },
  {
    "url": "assets/js/35.f6e52e83.js",
    "revision": "98140ed35a3d754c0040993077532aea"
  },
  {
    "url": "assets/js/36.1fb75a12.js",
    "revision": "6f94b1b0b2c3ed0e4aadfa61a90711c2"
  },
  {
    "url": "assets/js/37.aaaea998.js",
    "revision": "7d2309ac79a8f90b5ee8e016ab876fc8"
  },
  {
    "url": "assets/js/38.ba55280f.js",
    "revision": "ebd2a995928eb50ee2e3a8573c6c1a3a"
  },
  {
    "url": "assets/js/39.7981c591.js",
    "revision": "53259d211d0347a4ab2082f56a7eb18f"
  },
  {
    "url": "assets/js/4.d29ba165.js",
    "revision": "f59def36dc168f7bdcfa085cb2829243"
  },
  {
    "url": "assets/js/40.01d84be2.js",
    "revision": "ca89e44b5b41fb8e38b9d789395121b1"
  },
  {
    "url": "assets/js/41.4e868d09.js",
    "revision": "fb92e19c2b6bb843dbd05d69a46d8a2b"
  },
  {
    "url": "assets/js/42.4d9f7ac9.js",
    "revision": "83e1e53dae7d559599f7641da0766ecb"
  },
  {
    "url": "assets/js/43.57771778.js",
    "revision": "a87141c2bcb1b81b8bd942fe8607f1c0"
  },
  {
    "url": "assets/js/44.2229dbef.js",
    "revision": "62cad1dc58b127f4844c1184e671c5b4"
  },
  {
    "url": "assets/js/45.ae351bdf.js",
    "revision": "c40ca162d77ab9cf9e2decf033a61928"
  },
  {
    "url": "assets/js/46.f2b0f5a8.js",
    "revision": "f3d22973481a3028c42baf691441ae36"
  },
  {
    "url": "assets/js/47.5bff38b2.js",
    "revision": "910781143df4023a84d667cff03a0dd4"
  },
  {
    "url": "assets/js/48.001ae594.js",
    "revision": "4c43d9964a9f5f297541cd95dbe654d2"
  },
  {
    "url": "assets/js/49.519ace68.js",
    "revision": "83da94fb05bd51d017ce34cc31f34321"
  },
  {
    "url": "assets/js/5.3388d3f9.js",
    "revision": "b6baf942b765d6f1f71a4542a3ed60f5"
  },
  {
    "url": "assets/js/50.44b315ea.js",
    "revision": "ee76a3b81a71315ccbc6778e1d0f17aa"
  },
  {
    "url": "assets/js/51.3009e195.js",
    "revision": "a114a30fd7bc175988cc336163b21976"
  },
  {
    "url": "assets/js/52.c3ce1e43.js",
    "revision": "0bbed1d39eef12d2d9ac45db918ff84d"
  },
  {
    "url": "assets/js/53.bcd49df0.js",
    "revision": "b83c132474acf895009996845d364e1f"
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
    "url": "assets/js/6.c82180a8.js",
    "revision": "212a0714672d34aeeec1630ac175919a"
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
    "url": "assets/js/76.cd5175a4.js",
    "revision": "8c6064a9475b214d77600a580aec542c"
  },
  {
    "url": "assets/js/77.321af19a.js",
    "revision": "a48adb84e20f0724f0b047a53c6417c1"
  },
  {
    "url": "assets/js/78.ed1a4038.js",
    "revision": "7e1eb62497a40c3e1ae3150b86cb60b5"
  },
  {
    "url": "assets/js/79.02d63d94.js",
    "revision": "88af6f451b5ca5d23dc8988132007912"
  },
  {
    "url": "assets/js/8.517eae3e.js",
    "revision": "94c544c5c9a10e130a8f7705dd1d6ce6"
  },
  {
    "url": "assets/js/80.7ca78238.js",
    "revision": "b42899e2e19dd1fd17c3c0862948f15c"
  },
  {
    "url": "assets/js/81.316eb885.js",
    "revision": "53b6d65b8d2b434a33389b89e8398608"
  },
  {
    "url": "assets/js/82.1baa7aa1.js",
    "revision": "ae56890a4334221b51b75d6d58159bf3"
  },
  {
    "url": "assets/js/83.793561f7.js",
    "revision": "bd7cb1aaf661a09f30ac0dfe3d1014d2"
  },
  {
    "url": "assets/js/84.b4a85b8f.js",
    "revision": "ac4ea4ebbc229acb846c8a1cd99c0eb7"
  },
  {
    "url": "assets/js/85.0a9487e1.js",
    "revision": "d00f785a6860cec4bdabf314815dd7ed"
  },
  {
    "url": "assets/js/86.b724d39a.js",
    "revision": "f20029b9323277adc825bd3762b299f0"
  },
  {
    "url": "assets/js/87.2d50ca71.js",
    "revision": "18782853a8aef401df4741b59138ce95"
  },
  {
    "url": "assets/js/88.1ed04cdf.js",
    "revision": "830e47fdae11ce5de1f970a9160f9cb7"
  },
  {
    "url": "assets/js/89.88141d25.js",
    "revision": "468b298453f711c511e35af7c2f3cd8b"
  },
  {
    "url": "assets/js/9.4060c407.js",
    "revision": "d01718c0127161d710aeeed680e84a8e"
  },
  {
    "url": "assets/js/90.254ecc00.js",
    "revision": "ef5ded50ddea4061d50d60eca27a26bd"
  },
  {
    "url": "assets/js/91.3d3e9ed4.js",
    "revision": "9cdc061e7d203ae64762bb192b1d41d7"
  },
  {
    "url": "assets/js/92.9756b8e5.js",
    "revision": "3fce70cfd0b740bcf1b0bd7e9c8861ac"
  },
  {
    "url": "assets/js/93.6d608c72.js",
    "revision": "7d9f87571959b0e92658c60a63f5a26b"
  },
  {
    "url": "assets/js/94.84f25409.js",
    "revision": "0f15a7c36211222ebc31db4ef3b63073"
  },
  {
    "url": "assets/js/95.5eb21d9b.js",
    "revision": "e8a216410dc2bb15963a694e3fb91524"
  },
  {
    "url": "assets/js/96.3868de65.js",
    "revision": "5dd561646cb4b8a8fc51add673284378"
  },
  {
    "url": "assets/js/97.156eafe5.js",
    "revision": "603c10ed4095c9b1e7eafb6bb2af1f9d"
  },
  {
    "url": "assets/js/98.fb4659f6.js",
    "revision": "2ffc1e1c3c577e00d5dd1cfeed5744f5"
  },
  {
    "url": "assets/js/99.727ddf16.js",
    "revision": "3fb59259fef40793ed73350af4636cea"
  },
  {
    "url": "assets/js/app.83482453.js",
    "revision": "5ac7f0f56ee8a51ec6b6fe0609047e0b"
  },
  {
    "url": "basics/code.html",
    "revision": "4e399f49359d7f37d06cdb65cef25033"
  },
  {
    "url": "basics/index.html",
    "revision": "c092c7d13e697e8e89564c02e64a1d30"
  },
  {
    "url": "basics/Interviewquestions.html",
    "revision": "10d0bd5f0fa33d3b2341048938b80f82"
  },
  {
    "url": "basics/other.html",
    "revision": "8083850fc2842161ba9d9aba6b7ba35f"
  },
  {
    "url": "basics/rearend.html",
    "revision": "1b13057da37af7ffbf7fba0d1a7903b4"
  },
  {
    "url": "frontend/ajax/Ajax-advanced.html",
    "revision": "d9e261196f2630c0242c88c665d56d24"
  },
  {
    "url": "frontend/ajax/AJAX-XHR.html",
    "revision": "dcf9010f737eb4e873acd12c492c872b"
  },
  {
    "url": "frontend/ajax/index.html",
    "revision": "4332dd036a4265d631038eae4c958b6c"
  },
  {
    "url": "frontend/ajax/summary.html",
    "revision": "08ff3197a28f91e6835d7dc6960aba6f"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "87cea644cab7f9088a2bdb95fe1ed713"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "e05a058e1c6d5b9eac39b316251bc5de"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "19364d82db910bacb3f94ef4c3cdda7e"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "163ebefb7ab0fad9a273d0c4c1088ddc"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "2fe18d37f34d8d79e74b61b61dfabc15"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "0a26d411aa6b45c2781cbfb303bf4378"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "e05b86afc1dc4ec9efac35a4d8cb7dee"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "71fcee3479418fe5eecf99b3b37f62d8"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "fa855e79185a8ec7ab55ac6e17c4c70d"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "065569dedaa96d9923ae2a76000d9e70"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "bfcebdc36762856c231e81bf03e5beb5"
  },
  {
    "url": "frontend/HTML/form.html",
    "revision": "cbaba878e6cd4ddd8015186a0baa18c9"
  },
  {
    "url": "frontend/HTML/HTML.html",
    "revision": "fd333a2bb823aa8c88f6af8e88b701dc"
  },
  {
    "url": "frontend/HTML/index.html",
    "revision": "c82fac4795681b34cf0fcb80e77ce688"
  },
  {
    "url": "frontend/HTML/table.html",
    "revision": "b2c1ea098c33275a67f1010a75031fcb"
  },
  {
    "url": "frontend/JavaScript/api.html",
    "revision": "d6f331a312af17e667b5398540c35704"
  },
  {
    "url": "frontend/JavaScript/array.html",
    "revision": "f1a56c447a47cf0dccc030ec44a470f5"
  },
  {
    "url": "frontend/JavaScript/date.html",
    "revision": "b79bdebe977c55ecbd1797c97016aede"
  },
  {
    "url": "frontend/JavaScript/function.html",
    "revision": "5f3dd1a087e717c5e28d874fb8e59bd1"
  },
  {
    "url": "frontend/JavaScript/index.html",
    "revision": "9beae3b62c29db08da578767690bfe6f"
  },
  {
    "url": "frontend/JavaScript/process-control.html",
    "revision": "b968fb1b0e6a8fb4f38c1735cee77d60"
  },
  {
    "url": "frontend/JavaScript/typeof-data.html",
    "revision": "0290c7276f8d659a3c49581ae8b433d2"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "14652b1a580fa01eb9f16714e751f1af"
  },
  {
    "url": "frontend/jQuery/customize.html",
    "revision": "d44a06628302b64b59b195fdd0943507"
  },
  {
    "url": "frontend/jQuery/event.html",
    "revision": "ef9e6b3a47cfbe3adb60bcb3f95a9b72"
  },
  {
    "url": "frontend/jQuery/index.html",
    "revision": "7272e5427dd8d821ee5b4fa3be91c03f"
  },
  {
    "url": "frontend/jQuery/method.html",
    "revision": "51e01531754365bdcd6742bdf6263865"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "60ef6a8cb8d6b28f4fafd3162b164249"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "b67addfeedc0afecae1b7b9ac5417114"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "a195f148b3a42807eee98685be87a6e3"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "09e424192722b9a0b29896d9fad0e466"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "12341f85f87ff0d18c1327d4ed032a86"
  },
  {
    "url": "frontend/webpack/install.html",
    "revision": "9a1476c4eb7b96001435d4cac13928d1"
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
    "revision": "9ee0fb25932ce4ec2ac1718d42c0fd22"
  },
  {
    "url": "other/download/index.html",
    "revision": "f74da4e06c559e5619c89471936b173a"
  },
  {
    "url": "other/download/Other.html",
    "revision": "d35466513395e66fb36619e96373bd8a"
  },
  {
    "url": "other/download/Rear-end.html",
    "revision": "31acf3dc8add254b87084577fa9ee8c8"
  },
  {
    "url": "other/git/index.html",
    "revision": "248af32aa203dce7335f079625b26611"
  },
  {
    "url": "other/pwa/index.html",
    "revision": "a943898b07e0da9de8927b65333664c8"
  },
  {
    "url": "rearend/MySQL/Attributes.html",
    "revision": "5b9f89103ba6581c3737804a43928d72"
  },
  {
    "url": "rearend/MySQL/data-storage.html",
    "revision": "512b1dfd2909393c114b9aec11011580"
  },
  {
    "url": "rearend/MySQL/index.html",
    "revision": "9d14549bd3f950135715b7b61f207a90"
  },
  {
    "url": "rearend/MySQL/SQL-commands.html",
    "revision": "b798bba1c57e096f04aec2c2d2c4cc8f"
  },
  {
    "url": "sitio/index.html",
    "revision": "33137c2c9f0aa426137cc36dc7269863"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "57ce29553020faf987d374c9a2bcd5d0"
  },
  {
    "url": "zh/basics/code.html",
    "revision": "f39df16732165f3287d6c06b1f3f7427"
  },
  {
    "url": "zh/basics/index.html",
    "revision": "d6311561d380cfd7e4ad89c553d44357"
  },
  {
    "url": "zh/basics/Interviewquestions.html",
    "revision": "34fa9b6add5e17dd6320e464f7882479"
  },
  {
    "url": "zh/basics/other.html",
    "revision": "8dba294ca6302c40727a9af72b439074"
  },
  {
    "url": "zh/basics/rearend.html",
    "revision": "aaf4c8c7871572b6c3d1e69448c9b118"
  },
  {
    "url": "zh/frontend/ajax/Ajax-advanced.html",
    "revision": "e31841bc20a8c90b65e3622a1f347039"
  },
  {
    "url": "zh/frontend/ajax/AJAX-XHR.html",
    "revision": "fd11996f6ea879d59e7f328dfbf73a8b"
  },
  {
    "url": "zh/frontend/ajax/index.html",
    "revision": "4664475f7af9a4f35a0dc48ddf656ff1"
  },
  {
    "url": "zh/frontend/ajax/summary.html",
    "revision": "94dc4463616ebf6e78db6e73e488c168"
  },
  {
    "url": "zh/frontend/BootStrap/index.html",
    "revision": "4d10f464d04fe028809aa8891f8e1526"
  },
  {
    "url": "zh/frontend/BootStrap/OtherComponents.html",
    "revision": "81fac8595391aff5763721170a1c82dc"
  },
  {
    "url": "zh/frontend/BootStrap/SCSS.html",
    "revision": "e7c3931e60d1627f4e7f36756468a174"
  },
  {
    "url": "zh/frontend/css/box.html",
    "revision": "1dcaa92e24b7a18e8b12eb53fbd020a3"
  },
  {
    "url": "zh/frontend/css/index.html",
    "revision": "155d9947fb4b63971aed97d570da1c53"
  },
  {
    "url": "zh/frontend/css/selector.html",
    "revision": "3e528396fe0371a98f52ed3c5778df41"
  },
  {
    "url": "zh/frontend/css/size.html",
    "revision": "4e21dfc9794ffed53ab32147f5463067"
  },
  {
    "url": "zh/frontend/css/TextFormatting.html",
    "revision": "9382a9bcc12da2b354421a32664aa89a"
  },
  {
    "url": "zh/frontend/docsCss/index.html",
    "revision": "f00d676981826ac21f9757466ef160b6"
  },
  {
    "url": "zh/frontend/docsH5C3/index.html",
    "revision": "06f3840fededa226e10683972ced2891"
  },
  {
    "url": "zh/frontend/domBom/index.html",
    "revision": "abff9c64856b7881e875ae836eca37ad"
  },
  {
    "url": "zh/frontend/HTML/form.html",
    "revision": "be51cb96012f56b8779ec43e1d9c885b"
  },
  {
    "url": "zh/frontend/HTML/HTML.html",
    "revision": "7780ab7ab8aa56bf82c7d81eb0ab5cd9"
  },
  {
    "url": "zh/frontend/HTML/index.html",
    "revision": "ea8960c2a137f4ed2fcf0ffa00b48214"
  },
  {
    "url": "zh/frontend/HTML/table.html",
    "revision": "75e00097134b6290b7b5099d9b2e684f"
  },
  {
    "url": "zh/frontend/JavaScript/api.html",
    "revision": "4003b3de390c634f9306bd1dc5c7b4c3"
  },
  {
    "url": "zh/frontend/JavaScript/array.html",
    "revision": "10f05fa1860fa7e9bf3b72353c8c2b7b"
  },
  {
    "url": "zh/frontend/JavaScript/date.html",
    "revision": "3e66dc14031c26c5b3d3b0707abe9478"
  },
  {
    "url": "zh/frontend/JavaScript/function.html",
    "revision": "8693383a3e56feaa6928a2659168fc9c"
  },
  {
    "url": "zh/frontend/JavaScript/index.html",
    "revision": "b11ee268c3ee807e2cdfd4d2dccf2de0"
  },
  {
    "url": "zh/frontend/JavaScript/process-control.html",
    "revision": "d970793217b11566f3c3e08d129d164a"
  },
  {
    "url": "zh/frontend/JavaScript/typeof-data.html",
    "revision": "82c1609e70085a99cb7180e598e1ff6d"
  },
  {
    "url": "zh/frontend/javaScriptTop/index.html",
    "revision": "4fef734928e7cc41a8a9bf5d0288e469"
  },
  {
    "url": "zh/frontend/jQuery/customize.html",
    "revision": "3b986022914a514080336df3bee4dd2f"
  },
  {
    "url": "zh/frontend/jQuery/event.html",
    "revision": "4851f28747408fa5865e3dc7c4c15b2d"
  },
  {
    "url": "zh/frontend/jQuery/index.html",
    "revision": "e8402f4438a8b314c3a6048fba21aeae"
  },
  {
    "url": "zh/frontend/jQuery/method.html",
    "revision": "e7a8abf7a7e9c11d264e2102f583c238"
  },
  {
    "url": "zh/frontend/node/index.html",
    "revision": "d418b2ac6de25725e08316b966b79193"
  },
  {
    "url": "zh/frontend/nuxt/index.html",
    "revision": "a27d778b9276d351cfa1bf8b488ee645"
  },
  {
    "url": "zh/frontend/vue/index.html",
    "revision": "8c5d44bfe45954d5e20ff4a9b0ef27f2"
  },
  {
    "url": "zh/frontend/vuex/index.html",
    "revision": "2b802c25ae6592d1da130cc095eb9939"
  },
  {
    "url": "zh/frontend/webpack/index.html",
    "revision": "6e1cb8fa2366d1e58166114410f5d13f"
  },
  {
    "url": "zh/frontend/webpack/install.html",
    "revision": "43355a8198f34035eb0474b4fcb50a18"
  },
  {
    "url": "zh/index.html",
    "revision": "18b4fda8cbd51a08f76814c844247743"
  },
  {
    "url": "zh/other/download/index.html",
    "revision": "a48a0358f2c11a3713d565edea03e5f1"
  },
  {
    "url": "zh/other/download/Other.html",
    "revision": "1d03f94fd1f8207e52402a8f651eeffe"
  },
  {
    "url": "zh/other/download/Rear-end.html",
    "revision": "40284162736bd568809f800fd5db611f"
  },
  {
    "url": "zh/other/git/index.html",
    "revision": "193dba60d4be21b43f36d68c6f7c24b7"
  },
  {
    "url": "zh/other/index.html",
    "revision": "87f6c00656f3e86c1465f52f0c639568"
  },
  {
    "url": "zh/other/pwa/index.html",
    "revision": "7dcbd5cd63d4aa1ae4e0d1fe3c6fc640"
  },
  {
    "url": "zh/rearend/MySQL/Attributes.html",
    "revision": "afe713ce03d74e06039712e57ee0ead8"
  },
  {
    "url": "zh/rearend/MySQL/data-storage.html",
    "revision": "9d405089f463afa5da24df44a170490e"
  },
  {
    "url": "zh/rearend/MySQL/index.html",
    "revision": "316bd3e058fa3460b459523e67f3ce08"
  },
  {
    "url": "zh/rearend/MySQL/SQL-commands.html",
    "revision": "e0c8d0e7da6e04d715af4ac59b3a73f2"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "f34056dc6aced388312d7571001c3a98"
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
