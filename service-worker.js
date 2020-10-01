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
    "revision": "8b2a0609a11739d5ad9517b23297cf41"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "Aftersoil/index.html",
    "revision": "4d7a9c78076fb8f6c3fe85c3a464749b"
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
    "url": "assets/js/28.d00f916c.js",
    "revision": "f77c7424ba875250a57ea68bb20c3315"
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
    "url": "assets/js/30.ca5425f7.js",
    "revision": "f25c846f4bae8f14968a3f5c400382e8"
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
    "url": "assets/js/44.b02e381e.js",
    "revision": "8c962c87d68b0b278853c54dd6791392"
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
    "url": "assets/js/64.26658b94.js",
    "revision": "589b32ba86f98c1b0388ce98c482666e"
  },
  {
    "url": "assets/js/65.473738df.js",
    "revision": "823b214e0ceb36ef11f9ffb2c7971bac"
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
    "url": "assets/js/72.eeb7f980.js",
    "revision": "c51378fb278d1ee6ee2100acad2eeaa3"
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
    "url": "assets/js/79.b5f25cce.js",
    "revision": "ed3fb4e32a7c65c6dd4a08ce3c0a76e4"
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
    "url": "assets/js/81.d1269fe1.js",
    "revision": "e8d0e331709cd172a7d9a6d9f1974f86"
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
    "url": "assets/js/app.a8b02a64.js",
    "revision": "e1e93d615ce041a221298f9720dc93e7"
  },
  {
    "url": "basics/code.html",
    "revision": "833fb8f0d6002cffe85569ebf5e2316d"
  },
  {
    "url": "basics/index.html",
    "revision": "e5ee341710ea717323c0427820f335e3"
  },
  {
    "url": "basics/Interviewquestions.html",
    "revision": "2f5ecbc4b8de8bccf895f1e204665d15"
  },
  {
    "url": "basics/other.html",
    "revision": "7a46560a38c661d3c174cecdeab5aeb5"
  },
  {
    "url": "basics/rearend.html",
    "revision": "f4b7b3c304ff9b33f28b2ec04936df48"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "f34bbf0c68b230ee8dc9fb711bbe1d24"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "3b8eeb36c462df700bd824e1863acbf7"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "4b3274cd0514f18d00857248fe959802"
  },
  {
    "url": "frontend/css/box.html",
    "revision": "856edaf4284804393f915882f8e17b59"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "109f0cfdb0add16f17898f4e374902f9"
  },
  {
    "url": "frontend/css/selector.html",
    "revision": "6ad553cdb05299e8037157fb2fc56e62"
  },
  {
    "url": "frontend/css/size.html",
    "revision": "049fd76c5e55b319379a84ed05b0f82a"
  },
  {
    "url": "frontend/css/TextFormatting.html",
    "revision": "27aa5e3037f3fe08c3c43eb35845781e"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "84e149732e4b2fdb9a06db3d4b068c11"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "ee7eb9820bbdb423c2c9bb5e47528466"
  },
  {
    "url": "frontend/domBom/index.html",
    "revision": "d87a7972876cb42169a2d7e97a4cc1f9"
  },
  {
    "url": "frontend/HTML/form.html",
    "revision": "a0a9ce86bffedc519c799083b27b3556"
  },
  {
    "url": "frontend/HTML/HTML.html",
    "revision": "0399b94bce25547d9bcc895f8e6bbdc6"
  },
  {
    "url": "frontend/HTML/index.html",
    "revision": "ee2dbcc6b6e967d8bae5b46c4fbf92c8"
  },
  {
    "url": "frontend/HTML/table.html",
    "revision": "97d84c52e5bacf1ea4aa66d25686e74c"
  },
  {
    "url": "frontend/javaScript/api.html",
    "revision": "a6eb039c2dc6fae14c100fd31fc342c6"
  },
  {
    "url": "frontend/javaScript/array.html",
    "revision": "b5c657183c6e1641bd053d36244662e6"
  },
  {
    "url": "frontend/javaScript/function.html",
    "revision": "74df2df86f2fc475d6658b9c6ac8cdf3"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "bcc1a41f04718638324dff577b6f1f43"
  },
  {
    "url": "frontend/javaScript/process-control.html",
    "revision": "46c896dc228a7791956f29c83ffb07bf"
  },
  {
    "url": "frontend/javaScript/typeof-data.html",
    "revision": "2206c495614b972242fa839fddade671"
  },
  {
    "url": "frontend/javaScriptTop/index.html",
    "revision": "d1dbd5350e50bcca459424c152b0ce5c"
  },
  {
    "url": "frontend/jQuery/customize.html",
    "revision": "b5f19c1e822b1fd50203fe342e1cbc48"
  },
  {
    "url": "frontend/jQuery/event.html",
    "revision": "565b9eb17292b342783af6344413214d"
  },
  {
    "url": "frontend/jQuery/index.html",
    "revision": "8d74f169de673388c96cc00d4e3f889e"
  },
  {
    "url": "frontend/jQuery/method.html",
    "revision": "761b7e7de36f7de25e45bac52df26daf"
  },
  {
    "url": "frontend/node/index.html",
    "revision": "f8e54ca3a27e67e52990f69948bf1e72"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "8b067628ecea91d275ce66757db66e7d"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "13ae3ce2a0a0c025df299c6da03c564d"
  },
  {
    "url": "frontend/vuex/index.html",
    "revision": "5f2c4bc0978f93cb3e5bc067f49899f9"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "0124d11ef25a723e44e93357ae33052e"
  },
  {
    "url": "frontend/webpack/install.html",
    "revision": "da75da4f2b8ac7d1089e15075cdf3887"
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
    "revision": "1a1e0c1858ee1cc5db37d2f2dc1a2062"
  },
  {
    "url": "other/git/index.html",
    "revision": "ff35939aa48a0986a2a7b79ab7562ebb"
  },
  {
    "url": "other/index.html",
    "revision": "f9fb665320abd749fb005de91c0d8dc0"
  },
  {
    "url": "other/pwa/index.html",
    "revision": "e353b5877ead2a191c4f7eaf73fd48b1"
  },
  {
    "url": "sitio/index.html",
    "revision": "f8edcbbe2e03905493dda5b2186b8569"
  },
  {
    "url": "zh/Aftersoil/index.html",
    "revision": "b7864b982e1ebec91b946444713b6380"
  },
  {
    "url": "zh/basics/code.html",
    "revision": "a54453719f92431f1d3401ea49178b51"
  },
  {
    "url": "zh/basics/index.html",
    "revision": "2bae2ffc0c370f1c0367be16d1a7c62e"
  },
  {
    "url": "zh/basics/Interviewquestions.html",
    "revision": "a2b0bae57f00c0a56a2deb7f74fe3d61"
  },
  {
    "url": "zh/basics/other.html",
    "revision": "d25e601ad5de7680630cdbb783796ad1"
  },
  {
    "url": "zh/basics/rearend.html",
    "revision": "29fc8dc956d229d130dca5139e8d657d"
  },
  {
    "url": "zh/frontend/BootStrap/index.html",
    "revision": "3951e9db52a1de6343c6fdb30b79e5ed"
  },
  {
    "url": "zh/frontend/BootStrap/OtherComponents.html",
    "revision": "7445b24a0b39dcf21305367a5190ffef"
  },
  {
    "url": "zh/frontend/BootStrap/SCSS.html",
    "revision": "6e00199dd2fc0f4f1961ddd5fc92bb49"
  },
  {
    "url": "zh/frontend/css/box.html",
    "revision": "db5c1496edb18fe2d863f37b85a5ba6c"
  },
  {
    "url": "zh/frontend/css/index.html",
    "revision": "6b5524f10d08fe508beac6a158957fde"
  },
  {
    "url": "zh/frontend/css/selector.html",
    "revision": "d610873ad5fd888464d5a8ca6c0729de"
  },
  {
    "url": "zh/frontend/css/size.html",
    "revision": "1b4f3aa6eff0524cb8fe620a741217cc"
  },
  {
    "url": "zh/frontend/css/TextFormatting.html",
    "revision": "05143a3ab0bc463dd97541447fd37267"
  },
  {
    "url": "zh/frontend/docsCss/index.html",
    "revision": "ed6d873b1e8a1caef1139598b20f003d"
  },
  {
    "url": "zh/frontend/docsH5C3/index.html",
    "revision": "27247780ed118100944613feed2aef20"
  },
  {
    "url": "zh/frontend/domBom/index.html",
    "revision": "cfb7eba92905fcd904073ee3b850f358"
  },
  {
    "url": "zh/frontend/HTML/form.html",
    "revision": "0008ee7186eedaeab4add3abd268cdc9"
  },
  {
    "url": "zh/frontend/HTML/HTML.html",
    "revision": "09a1622f0a1eb53344a524a0e2653874"
  },
  {
    "url": "zh/frontend/HTML/index.html",
    "revision": "44be331f9e600bd1fd6bebf0ece0983c"
  },
  {
    "url": "zh/frontend/HTML/table.html",
    "revision": "a6ea7525a962fba76a246908780403d7"
  },
  {
    "url": "zh/frontend/javaScript/index.html",
    "revision": "e90608ab82be45bbce85d5f09f7f430e"
  },
  {
    "url": "zh/frontend/javaScriptTop/index.html",
    "revision": "979a9175a100497926c6baa1380a4db5"
  },
  {
    "url": "zh/frontend/jQuery/customize.html",
    "revision": "27a49d5e8504386ee5b9943dacfbfeca"
  },
  {
    "url": "zh/frontend/jQuery/event.html",
    "revision": "ce4b2e4c5e121d80a25b2efe2c0e762d"
  },
  {
    "url": "zh/frontend/jQuery/index.html",
    "revision": "ca3f7f3e6d84bf5ebd177cba2523741f"
  },
  {
    "url": "zh/frontend/jQuery/method.html",
    "revision": "653e6c6b212a44cd5d2b30fe2eda820a"
  },
  {
    "url": "zh/frontend/node/index.html",
    "revision": "affcf800270f1447e280e4d6ab8bdef4"
  },
  {
    "url": "zh/frontend/nuxt/index.html",
    "revision": "ec8d2861ebd0f4884233bc90bcfb10ae"
  },
  {
    "url": "zh/frontend/vue/index.html",
    "revision": "791c29844cbdc1b8a79aa06ff48c0b6b"
  },
  {
    "url": "zh/frontend/vuex/index.html",
    "revision": "c521790f5015a9108b78074cd5883025"
  },
  {
    "url": "zh/frontend/webpack/index.html",
    "revision": "4876d057b10051b8b150144239d91faf"
  },
  {
    "url": "zh/frontend/webpack/install.html",
    "revision": "7c2673dca2ce5592a1b4cce3b0f57e45"
  },
  {
    "url": "zh/index.html",
    "revision": "e90e7738fa39b14b5f84ffbeed3f5333"
  },
  {
    "url": "zh/other/git/index.html",
    "revision": "6f09fb566e4447e897150131296e3d32"
  },
  {
    "url": "zh/other/index.html",
    "revision": "01543ddba8725d38849ffca4ad679115"
  },
  {
    "url": "zh/other/pwa/index.html",
    "revision": "d46959f9b2576b0b361644e28d200de1"
  },
  {
    "url": "zh/sitio/index.html",
    "revision": "a2547140e4f8b20743077923e717c6ef"
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
