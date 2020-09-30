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
    "revision": "c541afa3418cd2a15a49beb4dc8468ec"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "ed1fceb8899b2809cd312d96aa9d35dd"
  },
  {
    "url": "assets/css/0.styles.4a769380.css",
    "revision": "f24fd137592de1796e51ec52841e43d8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.02805980.js",
    "revision": "5a2441014c63e682caf0794204ad5c62"
  },
  {
    "url": "assets/js/11.c20ee6d1.js",
    "revision": "ad76f52f60def0f8b7683df9840971a8"
  },
  {
    "url": "assets/js/12.ac14fd35.js",
    "revision": "ca0014a9822da7f23a0a54947adeef52"
  },
  {
    "url": "assets/js/13.397cd5f3.js",
    "revision": "51099df3db717fa39560c7c6f3f45a2c"
  },
  {
    "url": "assets/js/14.018d5834.js",
    "revision": "97df1a76739f2d82910f1fd89c0ef59b"
  },
  {
    "url": "assets/js/15.6de18031.js",
    "revision": "53db7885bb4fa058a7cb7de16604befd"
  },
  {
    "url": "assets/js/16.181ba6ff.js",
    "revision": "1af339cd0512577e087b43ccdedc9e78"
  },
  {
    "url": "assets/js/17.69b5b435.js",
    "revision": "29fd7552218bb125ec8c7a07bf9ad2c1"
  },
  {
    "url": "assets/js/18.e5092e77.js",
    "revision": "03ef29d7fc99ccac72ac704254732415"
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
    "url": "assets/js/21.9c41aff3.js",
    "revision": "8cbf7f80dac716b580e299e38d69d3e8"
  },
  {
    "url": "assets/js/22.642684cd.js",
    "revision": "01dd5025a13f9a0e82a51b327886fc88"
  },
  {
    "url": "assets/js/23.1b5147ba.js",
    "revision": "089e5da9db7bfcd78141f98112705a66"
  },
  {
    "url": "assets/js/24.1664e18a.js",
    "revision": "fdf10f70699b148665748207b299249a"
  },
  {
    "url": "assets/js/25.7ca8fd9a.js",
    "revision": "3c9bdbc78ae49e54da659ee596c4113a"
  },
  {
    "url": "assets/js/26.70bc6223.js",
    "revision": "1aeaa603994c410d8fe931fbd8dd6965"
  },
  {
    "url": "assets/js/27.a1091949.js",
    "revision": "cbbb08fc4f5a0b0535430a87cf4faf87"
  },
  {
    "url": "assets/js/28.820d16af.js",
    "revision": "ef8f43bbcd2b5e1dcc437f497fd04887"
  },
  {
    "url": "assets/js/29.c6fbbafc.js",
    "revision": "fe67d9dbbee045932890bf66466e2323"
  },
  {
    "url": "assets/js/3.fb60532c.js",
    "revision": "38291d29ce8442857d04330833390049"
  },
  {
    "url": "assets/js/30.ccbdef88.js",
    "revision": "c3e3fbdbeb9b656fc32bdb7fe084391d"
  },
  {
    "url": "assets/js/31.f09e668a.js",
    "revision": "f24533ac0edefb40040960209fb06284"
  },
  {
    "url": "assets/js/32.4e8f24dd.js",
    "revision": "29d4bcbaa3717376390db949276877f1"
  },
  {
    "url": "assets/js/33.586c0da7.js",
    "revision": "3a005b8f0848d40bfd5073b24ffc72fd"
  },
  {
    "url": "assets/js/34.a4c649d8.js",
    "revision": "4c5f231e6e6cd9f68303f35721cfdac6"
  },
  {
    "url": "assets/js/35.15eb8085.js",
    "revision": "944292348eaf67b35d67c642394364b2"
  },
  {
    "url": "assets/js/36.61a24a76.js",
    "revision": "4b5c437370b56a72f8a6624fca14428b"
  },
  {
    "url": "assets/js/37.b38c905a.js",
    "revision": "08ce7d7807661c74cf3371bb1bcfa1b2"
  },
  {
    "url": "assets/js/38.37705383.js",
    "revision": "0cbeec9e94bf179355c48cddd4f3fd31"
  },
  {
    "url": "assets/js/39.9794566f.js",
    "revision": "28134eb497a56ee4e2b0215012c35b74"
  },
  {
    "url": "assets/js/4.5fc5b231.js",
    "revision": "a96cc2b839f5e8d31eccce1ca66797a9"
  },
  {
    "url": "assets/js/40.aba83e3b.js",
    "revision": "372e1da74c3ad5152340716fd1519b69"
  },
  {
    "url": "assets/js/41.f24132e5.js",
    "revision": "926d7285e53c5019552172c3466dfb2f"
  },
  {
    "url": "assets/js/42.d674d138.js",
    "revision": "e3ad4b8c58e12dd77a5d748291b17c03"
  },
  {
    "url": "assets/js/43.528a8120.js",
    "revision": "2dbc20f100b649ad0f9a9da65a25e547"
  },
  {
    "url": "assets/js/44.db69b896.js",
    "revision": "573b212a24472714b27c783d648c354a"
  },
  {
    "url": "assets/js/45.422d7d65.js",
    "revision": "c240a49bfe9c7a7a1d7459762163f7c4"
  },
  {
    "url": "assets/js/46.c4164dcc.js",
    "revision": "83096a3b268828a1b52848629b178af4"
  },
  {
    "url": "assets/js/47.4e01d86a.js",
    "revision": "b5bc89a033fb9e172c232f164e8a417f"
  },
  {
    "url": "assets/js/48.918622b9.js",
    "revision": "e18d0126db1f02479c25e88ef55a1c09"
  },
  {
    "url": "assets/js/49.f5091543.js",
    "revision": "7e9b8a8de552b60fd103d9dd70f09a62"
  },
  {
    "url": "assets/js/5.597b3655.js",
    "revision": "18d93bc380caddb78cdc83e19d7de0c1"
  },
  {
    "url": "assets/js/50.50d150a4.js",
    "revision": "59758cd1e17e6905dee418f479f847c2"
  },
  {
    "url": "assets/js/51.40be2533.js",
    "revision": "41f35e26a033b5302a4e26007b47a7eb"
  },
  {
    "url": "assets/js/52.2364a51e.js",
    "revision": "dbc52356ed81c42401945eeada709b72"
  },
  {
    "url": "assets/js/53.993db064.js",
    "revision": "128bbc1cff6b2275036d863106d86b72"
  },
  {
    "url": "assets/js/54.f6b78fcb.js",
    "revision": "b18e72667c50a6ca28e94fb43a86ef17"
  },
  {
    "url": "assets/js/55.70cc075d.js",
    "revision": "0022ba8e03286efb8d64a5e7dbcbe731"
  },
  {
    "url": "assets/js/56.8e6bcaa5.js",
    "revision": "f96c8ccec12aa47a7ccc23bfce422f0f"
  },
  {
    "url": "assets/js/57.2fc94f73.js",
    "revision": "9c774179e6ee59d8c735f0573188bdbe"
  },
  {
    "url": "assets/js/58.2f9d4267.js",
    "revision": "144b4ea11fd051a5dd32e95f96448292"
  },
  {
    "url": "assets/js/59.0ce029e0.js",
    "revision": "20cef3f5a819bb1baddd843dd45ffd8a"
  },
  {
    "url": "assets/js/6.716bb8d3.js",
    "revision": "a0b453f7f5de0f94ddd20f14ac8894e9"
  },
  {
    "url": "assets/js/60.135718b3.js",
    "revision": "e40a4cf21a0cb0fa185c3d8d9c4e77bc"
  },
  {
    "url": "assets/js/61.007a7288.js",
    "revision": "63a5f090a24ac150ae328b86530717ae"
  },
  {
    "url": "assets/js/62.e7483053.js",
    "revision": "585d2f06c9f2a9eb1aa8cf815a204eb9"
  },
  {
    "url": "assets/js/63.371e4e18.js",
    "revision": "affb4b2919b8e31712422de9d73b64f0"
  },
  {
    "url": "assets/js/64.28a966d4.js",
    "revision": "7e507013d4c2ab7875a077687dce2ff2"
  },
  {
    "url": "assets/js/65.4493bf31.js",
    "revision": "1bd26878fb98c64242d963f96d63a552"
  },
  {
    "url": "assets/js/66.5f302fd9.js",
    "revision": "9c20593a3818de814ae9607967f945eb"
  },
  {
    "url": "assets/js/67.fe7c9924.js",
    "revision": "3a1cf5b10579e5ca99c07b451af669b9"
  },
  {
    "url": "assets/js/68.aeb2cdfa.js",
    "revision": "ac60b6cde19319ae056e02c5bcf711e0"
  },
  {
    "url": "assets/js/69.158209a4.js",
    "revision": "05b19e03f932b38440a9acabbce0bc70"
  },
  {
    "url": "assets/js/7.b006bfeb.js",
    "revision": "d2403c502b8d243f0f84613abc79328e"
  },
  {
    "url": "assets/js/70.158a65b7.js",
    "revision": "de197a59b3790ea22f4b0b86269549a2"
  },
  {
    "url": "assets/js/71.767c2708.js",
    "revision": "a3a6c5ee98ca876dd95d90211ea90f3d"
  },
  {
    "url": "assets/js/72.9bc9d423.js",
    "revision": "0a860662e06748467898ec8201f2c1e3"
  },
  {
    "url": "assets/js/73.f668821f.js",
    "revision": "cf14da9b0cea543a8e83d836ee1f4b87"
  },
  {
    "url": "assets/js/74.d5990b68.js",
    "revision": "e57bacf3ca6b6de4c2c4d5a47ae91c9b"
  },
  {
    "url": "assets/js/75.0ebc4824.js",
    "revision": "cd726f6559155dd7c45e72ad8072b333"
  },
  {
    "url": "assets/js/76.bfc35a45.js",
    "revision": "9a18711602e81819f1359e3c61600053"
  },
  {
    "url": "assets/js/77.9f74cd6f.js",
    "revision": "8265f0a4b98cd3614359818058654e92"
  },
  {
    "url": "assets/js/78.64b18919.js",
    "revision": "2150dac16f4c4f699e08a8114477d664"
  },
  {
    "url": "assets/js/79.f2e1cd02.js",
    "revision": "3381e8b06d60615c37964351159a6129"
  },
  {
    "url": "assets/js/8.4d1dc7c3.js",
    "revision": "f91a6de0689b0d9459c4735e21f29dd3"
  },
  {
    "url": "assets/js/80.390f47ce.js",
    "revision": "70887593dc1d1862865cdc6f5a1cd9e2"
  },
  {
    "url": "assets/js/81.ddbad990.js",
    "revision": "b11458ba3323753602211563b5faa7e5"
  },
  {
    "url": "assets/js/82.b64aaf53.js",
    "revision": "f66b3ae8883bbc54ff1d191f6542c993"
  },
  {
    "url": "assets/js/83.3e4562f5.js",
    "revision": "0d6d05b73d7bffad328a3424e450ca8d"
  },
  {
    "url": "assets/js/84.f9406bbf.js",
    "revision": "ca4d7dfba650ecc0cd6a5d7a0473fe55"
  },
  {
    "url": "assets/js/85.eced4493.js",
    "revision": "596ec143bc877bae8e94bb2f74186d1c"
  },
  {
    "url": "assets/js/86.11ac09e4.js",
    "revision": "4d4ac484dd1250c0fdab7a73a1ff71a0"
  },
  {
    "url": "assets/js/87.3cb628b9.js",
    "revision": "66dbddc0c27d5ab87700e7c4f8cf6b91"
  },
  {
    "url": "assets/js/88.5a4781a0.js",
    "revision": "842dd3bd444799d143084beed2f25943"
  },
  {
    "url": "assets/js/89.1e40a437.js",
    "revision": "bc76a50671fdaf4b4b7a95747799d227"
  },
  {
    "url": "assets/js/9.4060c407.js",
    "revision": "d01718c0127161d710aeeed680e84a8e"
  },
  {
    "url": "assets/js/90.1354ce28.js",
    "revision": "98db495f5496fbfa99842093e9484e7c"
  },
  {
    "url": "assets/js/app.e0678fce.js",
    "revision": "fe8a05a014e516cfae1f2069c0ae1f6f"
  },
  {
    "url": "basics/code.html",
    "revision": "14fccc8e5e65dcc4b5a161b0f6ca063d"
  },
  {
    "url": "basics/index.html",
    "revision": "09073e9dc52ff888c894231642afe89d"
  },
  {
    "url": "basics/Interviewquestions.html",
    "revision": "5b6c19b6d84523275176d8a14bd4ff87"
  },
  {
    "url": "basics/other.html",
    "revision": "734d15c58c491b6ccb7fd5e9b389fe6b"
  },
  {
    "url": "basics/rearend.html",
    "revision": "45aba594336ba0aca40acd055339264d"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "992f202d94a1d8b57105311bdf42205a"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "887e3944eb51ec78a2939006bb38ebde"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "8e9234024c71552f95c1afd8ccdc7fc1"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "852ed603f59d3ec77f33ea4ae6746e9d"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "e35884f086b564cc0685933a2c75ea78"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "9a8a814aa00e6c4cc190217b3fa05efb"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "bfe012343152328086d1f0c8a33b9eba"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "2354922aa803d3bf54b6f696fb24c006"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "3d0e78dc8b8682710d5f4b9c2a7816f8"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "2ad4a87fbfe2b6cb88104250bc0a42ff"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "77247f264bb5ed0cf05feda30cf28a39"
  },
  {
    "url": "frontend/HTML/form.html",
    "revision": "e364a4d8f366b426d45793caaa48b1a1"
  },
  {
    "url": "frontend/HTML/HTML.html",
    "revision": "6ea7b3ec4ec4932f434fcd6115a1779e"
  },
  {
    "url": "frontend/HTML/index.html",
    "revision": "9c58c3e701373be3553d2cb99cf969c9"
  },
  {
    "url": "frontend/HTML/table.html",
    "revision": "ccbd1ad7bcdd1e11c1f5d54115f22116"
  },
  {
    "url": "frontend/javaScript/api.html",
    "revision": "b812b179abbd1470a8d113a2b6c1dcb6"
  },
  {
    "url": "frontend/javaScript/array.html",
    "revision": "60878f623544cb98447c91f981b15329"
  },
  {
    "url": "frontend/javaScript/function.html",
    "revision": "c7062b2210f9a0c9916d520e7768ad31"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "5ecc29a23e5fee6d2a33116345b8ee0c"
  },
  {
    "url": "frontend/javaScript/process-control.html",
    "revision": "65f7b40e226cfd487eb03ea342684a56"
  },
  {
    "url": "frontend/javaScript/typeof-data.html",
    "revision": "fa35deda1a1dae6f27d44168aae81da2"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "212ca07a93959523f1b18d4740700f0c"
  },
  {
    "url": "frontend/jQuery/customize.html",
    "revision": "227026a9163c71e11b957bdf926b8cc3"
  },
  {
    "url": "frontend/jQuery/event.html",
    "revision": "07f2a12700d2dbc2c494af83d16aef16"
  },
  {
    "url": "frontend/jQuery/index.html",
    "revision": "1f8146a24a07167a1558b2c7034d93e3"
  },
  {
    "url": "frontend/jQuery/method.html",
    "revision": "ada353042091172257346b7d8786ae9a"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "636a566bd98efc9adb3e5b880128cd1b"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "7212a80285cc6504df96f99aeb70ab3c"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "4305203abcdaaef33cc6010c4c5bbc4e"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "883b3084655daf6498377405b0b31108"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "f30f4f3915a73c59cbd148f47d339250"
  },
  {
    "url": "frontend/webpack/install.html",
    "revision": "f85398d1065c07fc8e0a4ed84a4adf16"
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
    "revision": "2207dd490916e38c4111b5726c4e9df6"
  },
  {
    "url": "other/git/index.html",
    "revision": "c1c9a877a84487f357e6b55f8d379ad1"
  },
  {
    "url": "other/index.html",
    "revision": "b510fbe573af342988170e7254b8e42f"
  },
  {
    "url": "other/pwa/index.html",
    "revision": "dea4f7f8f0b0ff1d93fc41b21f7e977e"
  },
  {
    "url": "sitio/index.html",
    "revision": "124d2ed7257cd69ae36e7a79646e5266"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "0d3cb7822367ce51c8cb235695aec024"
  },
  {
    "url": "zh/basics/code.html",
    "revision": "85f8a37432f34480b0c76f422f5d4fd7"
  },
  {
    "url": "zh/basics/index.html",
    "revision": "6663eca2af1034358338415c3ec8602a"
  },
  {
    "url": "zh/basics/Interviewquestions.html",
    "revision": "4de3d16f83c74a9e56f6d43d0f73b8d1"
  },
  {
    "url": "zh/basics/other.html",
    "revision": "e4542af26d8e5285138fb7eec2d8410e"
  },
  {
    "url": "zh/basics/rearend.html",
    "revision": "3ffbfee6ed04f8c2f431a4834f90319c"
  },
  {
    "url": "zh/frontend/BootStrap/index.html",
    "revision": "50d8a7a09ddb60e77f9e5b6b04272db3"
  },
  {
    "url": "zh/frontend/BootStrap/OtherComponents.html",
    "revision": "a68d2d8121bc8bd2c2b55a3be5c40ce3"
  },
  {
    "url": "zh/frontend/BootStrap/SCSS.html",
    "revision": "b0ead9b0141ea5e0878b23efa52b9c6c"
  },
  {
    "url": "zh/frontend/css/box.html",
    "revision": "9bc28ebaec24afd379f6f3492111f523"
  },
  {
    "url": "zh/frontend/css/index.html",
    "revision": "4925c8db39ce177fd4e7b139728f18fc"
  },
  {
    "url": "zh/frontend/css/selector.html",
    "revision": "0adaed4b9ae7866064786ac3d6a3c07f"
  },
  {
    "url": "zh/frontend/css/size.html",
    "revision": "50f2f29fb89950423bdc33be99d92c12"
  },
  {
    "url": "zh/frontend/css/TextFormatting.html",
    "revision": "537c4ffe39976e5d70d0b240e580d152"
  },
  {
    "url": "zh/frontend/docsCss/index.html",
    "revision": "008380a993d9c4f6a24c6a9686327b28"
  },
  {
    "url": "zh/frontend/docsH5C3/index.html",
    "revision": "f608ee4f1495820df3174427a7393067"
  },
  {
    "url": "zh/frontend/domBom/index.html",
    "revision": "3f3c088fccf364fcacacdcf0ed9f6fe2"
  },
  {
    "url": "zh/frontend/HTML/form.html",
    "revision": "26cab576b117984b2422a6d02ddab0a9"
  },
  {
    "url": "zh/frontend/HTML/HTML.html",
    "revision": "812866d833b27daf0b605f1c83d3c517"
  },
  {
    "url": "zh/frontend/HTML/index.html",
    "revision": "ef61418e2d415631db8a6fc7fbb0b5ed"
  },
  {
    "url": "zh/frontend/HTML/table.html",
    "revision": "9516e707fb6a92ce10f8fc289530382d"
  },
  {
    "url": "zh/frontend/javaScript/index.html",
    "revision": "b1e22376b29ef5ebd50cb3dec8387f22"
  },
  {
    "url": "zh/frontend/javaScriptTop/index.html",
    "revision": "1c029e7884b2fa54d18d7a2c224d8c2d"
  },
  {
    "url": "zh/frontend/jQuery/customize.html",
    "revision": "3636521f9475f09aa40437a6b948e842"
  },
  {
    "url": "zh/frontend/jQuery/event.html",
    "revision": "4ba364e6f2ca76ce74fd5bbe3f3ee071"
  },
  {
    "url": "zh/frontend/jQuery/index.html",
    "revision": "3bbf89f4594e065de3185e6352169790"
  },
  {
    "url": "zh/frontend/jQuery/method.html",
    "revision": "39b1c5d6a92624c118093241c7c25e4d"
  },
  {
    "url": "zh/frontend/node/index.html",
    "revision": "bd086a5ba6f731f628f28b1bec86240d"
  },
  {
    "url": "zh/frontend/nuxt/index.html",
    "revision": "5f05b29b4de2cfff9ccf6e931a3bf96d"
  },
  {
    "url": "zh/frontend/vue/index.html",
    "revision": "7e357174aa64f8b053ea24d0454829c4"
  },
  {
    "url": "zh/frontend/vuex/index.html",
    "revision": "04444cb4749a60c8f1c191a8b36e65de"
  },
  {
    "url": "zh/frontend/webpack/index.html",
    "revision": "1fa1f3fdd4dec157594b95e01bb843cf"
  },
  {
    "url": "zh/frontend/webpack/install.html",
    "revision": "2174bee4808fb3f234c2b9415ea9a2fd"
  },
  {
    "url": "zh/index.html",
    "revision": "f92d7c8a423caeb08861941bafd4d792"
  },
  {
    "url": "zh/other/git/index.html",
    "revision": "db6a1c849ba1728f6d2888c0391f8d01"
  },
  {
    "url": "zh/other/index.html",
    "revision": "5b9a304470ccb6d8a151c001d136b31b"
  },
  {
    "url": "zh/other/pwa/index.html",
    "revision": "f546f16e9c53fe6e51c9edf1c5808c85"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "3b8f6a74ad1605adb5a4370d81e94882"
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
