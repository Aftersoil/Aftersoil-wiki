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
    "revision": "6d3eac5e5192e2b120bf8ca799b095f6"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "8f546bf0932fe7091714787106556ba5"
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
    "url": "assets/js/10.5fd36cd5.js",
    "revision": "6e2b02fff9797926ab4596f807d99929"
  },
  {
    "url": "assets/js/11.a58cdef0.js",
    "revision": "85ca9770100c3910d90d49878b03e0d2"
  },
  {
    "url": "assets/js/12.5a92426e.js",
    "revision": "1197dc2773b5e2c1583c9a001f2fe97a"
  },
  {
    "url": "assets/js/13.19f5c850.js",
    "revision": "eb2d9b547f019089fd4e55bfa00e5561"
  },
  {
    "url": "assets/js/14.3f1497da.js",
    "revision": "aaffcb07963330a43910dfc779a5cc19"
  },
  {
    "url": "assets/js/15.3c168238.js",
    "revision": "1a50a4406846c28f47fd4bc674fe4521"
  },
  {
    "url": "assets/js/16.a923d8e2.js",
    "revision": "90cc7c6d72e334993195107fdd7b77e6"
  },
  {
    "url": "assets/js/17.df1a44db.js",
    "revision": "af263e0f33bca0cfd52dc2bfe4a99649"
  },
  {
    "url": "assets/js/18.8f502239.js",
    "revision": "b2011ee9777449fccc436996255f4d50"
  },
  {
    "url": "assets/js/19.0b517048.js",
    "revision": "a3a9ebf3ebf2fa85335f58d7dd69e178"
  },
  {
    "url": "assets/js/2.33a04a9d.js",
    "revision": "c61dd6cfeeae2b6a360d36177421a181"
  },
  {
    "url": "assets/js/20.7765cbe6.js",
    "revision": "4b5c0a44faca348a196b1bff9b84529b"
  },
  {
    "url": "assets/js/21.09bb45a4.js",
    "revision": "e21740f539276088fecd205206d6f0d6"
  },
  {
    "url": "assets/js/22.f5b063cf.js",
    "revision": "c18a01526236119eec3ed42a72561983"
  },
  {
    "url": "assets/js/23.2a686539.js",
    "revision": "003f2c919a06386cf3c654816e45e196"
  },
  {
    "url": "assets/js/24.198ec1f6.js",
    "revision": "1b7d438bc600a3d6924bc20d10287343"
  },
  {
    "url": "assets/js/25.d59fa35e.js",
    "revision": "43379d9e639573c1bfcb8269ce11a73a"
  },
  {
    "url": "assets/js/26.8e92fee6.js",
    "revision": "0b02701f0841ec36ccbf16f68803730c"
  },
  {
    "url": "assets/js/27.7645b0df.js",
    "revision": "cdc4e43b41dce55a555c4446fd077919"
  },
  {
    "url": "assets/js/28.4847a78e.js",
    "revision": "9eb3eb141e053f9d36ebe0300163147e"
  },
  {
    "url": "assets/js/29.c9a6d003.js",
    "revision": "dfbf53720495f834b3d939ba1c0ae1bc"
  },
  {
    "url": "assets/js/3.28198cb7.js",
    "revision": "0f1dd5ed3bacf6f276f05f8ac53542d8"
  },
  {
    "url": "assets/js/30.c65d744b.js",
    "revision": "6900b4a5b0abc8250bd97edb8e254aec"
  },
  {
    "url": "assets/js/31.84fdcbad.js",
    "revision": "fa50ad08bc425ec2649ea2085ec42def"
  },
  {
    "url": "assets/js/32.79bbaee2.js",
    "revision": "b9cd081de437056506341005977282b6"
  },
  {
    "url": "assets/js/33.ebbc9c18.js",
    "revision": "4985029ef076689c285548c37eb8c5fd"
  },
  {
    "url": "assets/js/34.d26c05b8.js",
    "revision": "87da933456213dcd5d6e633def25af67"
  },
  {
    "url": "assets/js/35.c92d1c41.js",
    "revision": "02ce6e7f10547f7de6ee957c14e96527"
  },
  {
    "url": "assets/js/36.b4afc387.js",
    "revision": "de5dc2ac8985acaaf4f3d01692a2f043"
  },
  {
    "url": "assets/js/37.5f952423.js",
    "revision": "b603f6d5c026ffb6b43c0dd05edfae71"
  },
  {
    "url": "assets/js/38.195bcdbf.js",
    "revision": "f681fff5b2b8222d420e56aa6284fee6"
  },
  {
    "url": "assets/js/39.9ecd7bde.js",
    "revision": "f8a68f286d37b13e1eee0b384bc2412a"
  },
  {
    "url": "assets/js/4.3571b1fd.js",
    "revision": "6676813b46d1deceb656c37d74982acc"
  },
  {
    "url": "assets/js/40.b8e2f549.js",
    "revision": "12b32fdae4216a8ac8b87bb3cb565a7a"
  },
  {
    "url": "assets/js/41.d42021b2.js",
    "revision": "c9d161a5c8609c548a6ef096f2657a59"
  },
  {
    "url": "assets/js/42.34acb5d8.js",
    "revision": "9f2275db449001e5a10e5c16dca9f1da"
  },
  {
    "url": "assets/js/43.b4d74776.js",
    "revision": "aefc6cb9098143572a5e8c774e4a08c9"
  },
  {
    "url": "assets/js/44.57e4bc41.js",
    "revision": "a3eaf13f9fbd29e8a57d351aa1ca376c"
  },
  {
    "url": "assets/js/45.c293f38d.js",
    "revision": "8181bf948852bfe422b8076b16be0842"
  },
  {
    "url": "assets/js/46.c1d2b6ab.js",
    "revision": "2bd065cb168875ea85e4be263339188c"
  },
  {
    "url": "assets/js/47.28dcbecd.js",
    "revision": "f5801bb19241a822eaa083d9ff14fae9"
  },
  {
    "url": "assets/js/48.2385f926.js",
    "revision": "604bd1d7aaf09eb7ee48e47f9b1f45b1"
  },
  {
    "url": "assets/js/49.7bc331c1.js",
    "revision": "8d016a8d8948fe604d784e2ca1cd25db"
  },
  {
    "url": "assets/js/5.1f4ccad5.js",
    "revision": "8e7f348387ba66920e97d7087497f6d7"
  },
  {
    "url": "assets/js/50.64492c31.js",
    "revision": "9a56bde427f91a72247eb8aa1cc7ebf0"
  },
  {
    "url": "assets/js/51.3fa046f9.js",
    "revision": "c8bbb8d4ba1f54c25b37cb690cbafc92"
  },
  {
    "url": "assets/js/52.e1fd9b0c.js",
    "revision": "ec90c427ce69ade2e1bf21a088c9ec27"
  },
  {
    "url": "assets/js/53.05f3fe13.js",
    "revision": "d299b5409784e79a467a28cbd313d7e2"
  },
  {
    "url": "assets/js/54.ffb963ad.js",
    "revision": "f1b2b00f64088ffe5d620ba8b664dea1"
  },
  {
    "url": "assets/js/55.e68bbed6.js",
    "revision": "878b3a561e8dc91a02c69b02e25aa376"
  },
  {
    "url": "assets/js/56.5e4a40d8.js",
    "revision": "ab532bac6aaab6fc3d01570178e5e684"
  },
  {
    "url": "assets/js/57.cec08d57.js",
    "revision": "6e633767f43e5b25730bd475241e024b"
  },
  {
    "url": "assets/js/58.47eb63a8.js",
    "revision": "0c4780b6cc5dccb654079c71f5ca81d7"
  },
  {
    "url": "assets/js/59.379b0b03.js",
    "revision": "1347ebf3b5aaf62f3e64ca0fc724a28e"
  },
  {
    "url": "assets/js/6.2abd8e1d.js",
    "revision": "22a6e23baac5ec3c613227fea2bf8975"
  },
  {
    "url": "assets/js/60.849c3e95.js",
    "revision": "1a5dd95b6a91f2d5237efd570aacd94a"
  },
  {
    "url": "assets/js/61.aaf2ce04.js",
    "revision": "737eb3ddf19d12c7c19cdd06635f8aac"
  },
  {
    "url": "assets/js/62.e061a6b6.js",
    "revision": "36bf5276db77f5bbfea6633f11f9d5d5"
  },
  {
    "url": "assets/js/63.0f7498f9.js",
    "revision": "0c633196176f5deaeb7fd35441ebbadf"
  },
  {
    "url": "assets/js/64.4a37946a.js",
    "revision": "de8a13a5406dbd0881166aaa1b7a0797"
  },
  {
    "url": "assets/js/65.8ccd6f8e.js",
    "revision": "08b42d18708a5aa7f9ddd1df948e9ee8"
  },
  {
    "url": "assets/js/66.d23aa3aa.js",
    "revision": "05f119f65b5362219ee08f50fb5b022b"
  },
  {
    "url": "assets/js/67.29f6643d.js",
    "revision": "3deb287db6753ec8d63b7ef4fe00e8d5"
  },
  {
    "url": "assets/js/68.76ccbbdd.js",
    "revision": "6c1456f275178d5571b1ed0ca1a42d13"
  },
  {
    "url": "assets/js/69.5038db02.js",
    "revision": "85b2c0785aa371078952753125411a42"
  },
  {
    "url": "assets/js/7.144cda08.js",
    "revision": "4ef72f596c77606ab33dda77cd7ab67c"
  },
  {
    "url": "assets/js/70.d41eab38.js",
    "revision": "cff9128fb785a554c3bdb008fa77032e"
  },
  {
    "url": "assets/js/71.56d61dd6.js",
    "revision": "a4914ae0ebca3c0e9b90880880bce6b9"
  },
  {
    "url": "assets/js/72.d80f4f7a.js",
    "revision": "a46b83d82fd9e2d96de2750e2db88014"
  },
  {
    "url": "assets/js/73.0b7f019b.js",
    "revision": "985255ae85d89a8375c8d0cc406bc042"
  },
  {
    "url": "assets/js/74.a56151d7.js",
    "revision": "b2b0b0a5754b55f87043502dff270382"
  },
  {
    "url": "assets/js/75.c1cd7202.js",
    "revision": "6c2b9a0125832971eebfa1f0a4886b97"
  },
  {
    "url": "assets/js/76.738c13b4.js",
    "revision": "4e2079ef8563d623dc98d77ea55fba44"
  },
  {
    "url": "assets/js/77.1b415043.js",
    "revision": "e51245702373b6569379fbb66e93fbf8"
  },
  {
    "url": "assets/js/78.1c174a8d.js",
    "revision": "f5c150f2cac50eddf40d3fb1b40079c6"
  },
  {
    "url": "assets/js/79.2a338b5d.js",
    "revision": "a575c04f1b63c6ffac8cfcea4755d9c9"
  },
  {
    "url": "assets/js/8.fc4034f7.js",
    "revision": "6df32869255e19c998d28f01b5492d6b"
  },
  {
    "url": "assets/js/80.fe095a56.js",
    "revision": "3f7736786c7d369a3972b3b384a8adac"
  },
  {
    "url": "assets/js/81.bb4d9d12.js",
    "revision": "02b29738e9412463d4c221319d1e0f6c"
  },
  {
    "url": "assets/js/82.5321b0f3.js",
    "revision": "208520a7f2e5545e7e9168e8912a8051"
  },
  {
    "url": "assets/js/9.be667d3e.js",
    "revision": "50fb800411776c9491d5c87677e59899"
  },
  {
    "url": "assets/js/app.a1538d9e.js",
    "revision": "3fbd0315d0f6c9c7fbbed2c9d43eea1a"
  },
  {
    "url": "basics/code.html",
    "revision": "5efe98c212e4303005cf0a50e2fab9b5"
  },
  {
    "url": "basics/index.html",
    "revision": "024a1324fe08b26da030cd7d4259b293"
  },
  {
    "url": "basics/Interviewquestions.html",
    "revision": "589f1453f312250fd66530d47a0eec71"
  },
  {
    "url": "basics/other.html",
    "revision": "63b23746da493c0ac040392088aeccbf"
  },
  {
    "url": "basics/rearend.html",
    "revision": "57d5b46946fc7c38b8026bfbe2339d61"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "f7aac9535c54ddc917bd5d681923fa7e"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "c4fbf92f0beea4bdc36f84e41434ef8d"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "05cd2f36f719a09c426502d659ced7cf"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "19c482429e36988ae1b64a88b7b92012"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "a415721accf5243913ac79aec187e61e"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "31ed02afdec769ea966705408b97c563"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "65a3167291f7eb188343968f0306f5c7"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "f44e032cbb389488af2d304cf1d4b79d"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "8cfbb88137ffbff242137802f906e47a"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "e69481e7f33c0d177e9fa98ef18e0dd2"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "3e3566502ca42cc50d1e639370c78ae6"
  },
  {
    "url": "frontend/HTML/form.html",
    "revision": "c5ff008b85d279d4ecc2688078cd62c0"
  },
  {
    "url": "frontend/HTML/HTML.html",
    "revision": "70fc56c3c98222916c933bd19468e909"
  },
  {
    "url": "frontend/HTML/index.html",
    "revision": "0ed9f4d72af4f89b4546bad0f637bf9a"
  },
  {
    "url": "frontend/HTML/table.html",
    "revision": "a2366950b255048b126f87e0cb59c040"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "28c5c89fd9f3444c95bf7f549c9f92f9"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "515b29e9d0b2ee123b2b1b0d0e325b79"
  },
  {
    "url": "frontend/jQuery/customize.html",
    "revision": "50522778cf2adb30f0ed3ebcfae41242"
  },
  {
    "url": "frontend/jQuery/event.html",
    "revision": "6818f2ec40c6eb4f8cfe05b4479aa592"
  },
  {
    "url": "frontend/jQuery/index.html",
    "revision": "75f24e8dffecb3a764082c4a9586f01b"
  },
  {
    "url": "frontend/jQuery/method.html",
    "revision": "ec92fcde429a5f10d9204ce90c2290c2"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "f077c1fac4c1f20b85f9d0f006445a17"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "e47570716f299ecaf5ec4f1836be5624"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "f7731805f0d50c4e050e2ad6e61bbe0c"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "b90d8723372a0bcc7e8340123e1774d3"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "448d8ef172a2d3fdb9d702d2dac71a16"
  },
  {
    "url": "frontend/webpack/install.html",
    "revision": "474c0ad2221a342b5a75716be8644a8b"
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
    "revision": "8d15145aba13983003483a28306f26a8"
  },
  {
    "url": "other/git/index.html",
    "revision": "e947b12c1e114d3283fb4f50bc6f7ba9"
  },
  {
    "url": "other/index.html",
    "revision": "7e7bfa82b6f571b508b9775695b6b176"
  },
  {
    "url": "other/pwa/index.html",
    "revision": "14fa79c1c11bd471b34501ce868ef3e2"
  },
  {
    "url": "sitio/index.html",
    "revision": "455a1cb660ad9d83d94233f59e843f32"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "53c22ddde687adffe2b98bad549d1a62"
  },
  {
    "url": "zh/basics/code.html",
    "revision": "b73dacfe76fc0ff15eb703927890fda8"
  },
  {
    "url": "zh/basics/index.html",
    "revision": "6fa5d1d51ca5d8e14c8b0ced0c6552b7"
  },
  {
    "url": "zh/basics/Interviewquestions.html",
    "revision": "774b89ea758fe0724d65d378ad02e148"
  },
  {
    "url": "zh/basics/other.html",
    "revision": "ff39cfae462bc928a6f1e54333286885"
  },
  {
    "url": "zh/basics/rearend.html",
    "revision": "b28e50d54007ec088ece49b2ef40781d"
  },
  {
    "url": "zh/frontend/BootStrap/index.html",
    "revision": "446991a9461986ed24547651ea3d1bdb"
  },
  {
    "url": "zh/frontend/BootStrap/OtherComponents.html",
    "revision": "16ea900c3acd74c1f190b96c91a05934"
  },
  {
    "url": "zh/frontend/BootStrap/SCSS.html",
    "revision": "b1866512aa7fb1ead0e6f056543d8fc2"
  },
  {
    "url": "zh/frontend/css/box.html",
    "revision": "3b2f4de5dd5c88c16b71c30dae48c8c1"
  },
  {
    "url": "zh/frontend/css/index.html",
    "revision": "bff60a32ffc4ee0f54db7e307011cf5e"
  },
  {
    "url": "zh/frontend/css/selector.html",
    "revision": "4df543eb7bbe91392025cce58ef3a7a0"
  },
  {
    "url": "zh/frontend/css/size.html",
    "revision": "fa677d1b094b9a35194e048768d84384"
  },
  {
    "url": "zh/frontend/css/TextFormatting.html",
    "revision": "c58298291d1a63ebc37a0b74f1e82218"
  },
  {
    "url": "zh/frontend/docsCss/index.html",
    "revision": "24c53f25d5b5a134f6bdb872965d87ed"
  },
  {
    "url": "zh/frontend/docsH5C3/index.html",
    "revision": "75297afab8e6f676794eb030d84e3699"
  },
  {
    "url": "zh/frontend/domBom/index.html",
    "revision": "b10a4157603f9fd8ce5da23fa405cf6f"
  },
  {
    "url": "zh/frontend/HTML/form.html",
    "revision": "e40273b44c9108a89219c3cae286ad1a"
  },
  {
    "url": "zh/frontend/HTML/HTML.html",
    "revision": "22c869318c601351d812fe3e0a80475d"
  },
  {
    "url": "zh/frontend/HTML/index.html",
    "revision": "a34caaaba5638bf035e5daf8b3cfd695"
  },
  {
    "url": "zh/frontend/HTML/table.html",
    "revision": "c8c6dd4935c4fc613340497926a92217"
  },
  {
    "url": "zh/frontend/javaScript/index.html",
    "revision": "aff367e20ae376b2e318d596867d14a5"
  },
  {
    "url": "zh/frontend/javaScriptTop/index.html",
    "revision": "693a13a9fd25c4006209e5fedccbb680"
  },
  {
    "url": "zh/frontend/jQuery/customize.html",
    "revision": "8dc74764d89b921942f66f4cae229241"
  },
  {
    "url": "zh/frontend/jQuery/event.html",
    "revision": "64ab1cf2d1f621c064d990052e9bb0cb"
  },
  {
    "url": "zh/frontend/jQuery/index.html",
    "revision": "fd586764502b4ff7e8af1c0eeb37edb6"
  },
  {
    "url": "zh/frontend/jQuery/method.html",
    "revision": "61fcb58ea327639e4ff34dbebd361bbb"
  },
  {
    "url": "zh/frontend/node/index.html",
    "revision": "a7043c103191a996bd40b90884021997"
  },
  {
    "url": "zh/frontend/nuxt/index.html",
    "revision": "53faa1c297fd61931d2530db46014ebb"
  },
  {
    "url": "zh/frontend/vue/index.html",
    "revision": "57be5e1859a2bfbad5ae73f4ebf43227"
  },
  {
    "url": "zh/frontend/vuex/index.html",
    "revision": "2fac5971ad106f5e1add84215d091c54"
  },
  {
    "url": "zh/frontend/webpack/index.html",
    "revision": "93495b92bf69f0cd5e9bd85ce0fcf2f4"
  },
  {
    "url": "zh/frontend/webpack/install.html",
    "revision": "91ad8b196044cdb6da245149a02051c1"
  },
  {
    "url": "zh/index.html",
    "revision": "052610f463e2377825e5e8b4c8f87c67"
  },
  {
    "url": "zh/other/git/index.html",
    "revision": "169efc86c891e9dd5d6ee3e2737fbc67"
  },
  {
    "url": "zh/other/index.html",
    "revision": "b834d74f8b0258d4b70c7a7e16fd3568"
  },
  {
    "url": "zh/other/pwa/index.html",
    "revision": "0d7fdd7ec5d8893452388a8ababa45f0"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "06e64b399bb6b5556059833990508830"
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
