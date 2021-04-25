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
    "revision": "67d8918134724760aea4b891d4387891"
  },
  {
    "url": "Aftersoil.svg",
    "revision": "55e561e8bbba7806df75595918eae2d2"
  },
  {
    "url": "assets/css/0.styles.68ca95aa.css",
    "revision": "67bfc9f19734069d2a911a616404b778"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6408eb72.js",
    "revision": "0ba2c11575f708b4e5b9728c732f0928"
  },
  {
    "url": "assets/js/100.ba3e3155.js",
    "revision": "21c444b73bb3b5695825ff928209ca34"
  },
  {
    "url": "assets/js/101.c66ddb8e.js",
    "revision": "4beb274eff32913e769495c2fd611385"
  },
  {
    "url": "assets/js/11.742d475c.js",
    "revision": "7370d01c5644cb5b82b1b06a70a0a110"
  },
  {
    "url": "assets/js/12.9da5499c.js",
    "revision": "c812f4768ae7a91ea2edcf19434652e4"
  },
  {
    "url": "assets/js/13.43ce9b44.js",
    "revision": "87c53ec3202d581c87e4d8ef802b853c"
  },
  {
    "url": "assets/js/14.e4fd087f.js",
    "revision": "c94021370bc024d39c60b339489e60ed"
  },
  {
    "url": "assets/js/15.1cf46f77.js",
    "revision": "d492ea6066ffb1aece081c9e9ca56e84"
  },
  {
    "url": "assets/js/16.a98dfc52.js",
    "revision": "b87dc688cdbe444bdfb8d940caa57e23"
  },
  {
    "url": "assets/js/17.5fc85eb3.js",
    "revision": "2a455b8046ac28830d630cef7ed3c661"
  },
  {
    "url": "assets/js/18.933d9cfa.js",
    "revision": "aaa74a5a63cb4f4710377c55dd242bb1"
  },
  {
    "url": "assets/js/19.930b50ac.js",
    "revision": "ad2f7c9b121ab66f29f120d2537d8d94"
  },
  {
    "url": "assets/js/20.d6e8ca7f.js",
    "revision": "87264ba6db1412468739fee49d9bc3bd"
  },
  {
    "url": "assets/js/21.78dfc0a9.js",
    "revision": "c7c90ac6a52828a036ae5572deb08350"
  },
  {
    "url": "assets/js/22.2d8ad18e.js",
    "revision": "e14666e7a49d2deef7cf85d41b5fd17e"
  },
  {
    "url": "assets/js/23.66aadc63.js",
    "revision": "818b52057f28c9ef17d05a5a0a5b9e67"
  },
  {
    "url": "assets/js/24.8de1eda2.js",
    "revision": "156f8f050c6d39c9c9e8a345c4dd4b3c"
  },
  {
    "url": "assets/js/25.09bb309e.js",
    "revision": "36a4e635185fa054dafd04cccfda97a8"
  },
  {
    "url": "assets/js/26.7e4493f2.js",
    "revision": "5df3f13a5d500fcdca5be90b167ac64a"
  },
  {
    "url": "assets/js/27.a296d407.js",
    "revision": "579d7ca0ffc3fd7ac71c269130736691"
  },
  {
    "url": "assets/js/28.78f16e21.js",
    "revision": "5973dc3560d26087c343955cded479db"
  },
  {
    "url": "assets/js/29.63a0e5f3.js",
    "revision": "d223118c8bfc954a740afd4dc5375410"
  },
  {
    "url": "assets/js/3.6e46e2bd.js",
    "revision": "8728011179a272d603b9872e9be25e6f"
  },
  {
    "url": "assets/js/30.eae2dc29.js",
    "revision": "7ba8fd6787769eaaeaf6f94b945bb503"
  },
  {
    "url": "assets/js/31.9ef5f0da.js",
    "revision": "3b613fc4db49bb45e8732947fffde85f"
  },
  {
    "url": "assets/js/32.03c64669.js",
    "revision": "267f5dd77ba3ad9b611cddb26b07ef0a"
  },
  {
    "url": "assets/js/33.12c1f42c.js",
    "revision": "741e33110044492bd33f2fba342ac0e4"
  },
  {
    "url": "assets/js/34.56bbd39b.js",
    "revision": "6587f4416a8c4a7a7c54d97bf30b249a"
  },
  {
    "url": "assets/js/35.2e7b4401.js",
    "revision": "e0b30b4622f7ab36fd375dd37fd5d7ca"
  },
  {
    "url": "assets/js/36.92b2f46a.js",
    "revision": "b858a77542ce53d17a7127c9eb68a3f5"
  },
  {
    "url": "assets/js/37.6ba8d032.js",
    "revision": "574f7e5ce5216403a7f347e6c1f5e7e9"
  },
  {
    "url": "assets/js/38.ba388248.js",
    "revision": "c6c1474f27eaeae7ba6ba42eaa01ac74"
  },
  {
    "url": "assets/js/39.9e9469a2.js",
    "revision": "515c0526a73f7fb8caa3e34c63b15f2d"
  },
  {
    "url": "assets/js/4.8ed1f94e.js",
    "revision": "673d361b784c3e950f0b5c946d88514f"
  },
  {
    "url": "assets/js/40.5d24f54b.js",
    "revision": "57e22a9c6e80018841e4f008d2996281"
  },
  {
    "url": "assets/js/41.165d5968.js",
    "revision": "0d691ccdc3ce16dc44dbcb38d323a9e1"
  },
  {
    "url": "assets/js/42.4ac522a0.js",
    "revision": "2a97ab70a4e8f2bbc98bba9c8f27ac90"
  },
  {
    "url": "assets/js/43.2783592c.js",
    "revision": "423f78db7872207e56c8d8533486c5ee"
  },
  {
    "url": "assets/js/44.a1740725.js",
    "revision": "1a73a594b9dacaf60ca3d67d56f54b14"
  },
  {
    "url": "assets/js/45.0977e510.js",
    "revision": "53efdccaeb275f5977cb652496085801"
  },
  {
    "url": "assets/js/46.73e2bebc.js",
    "revision": "690fecc99ddfd0653dbbe0076656e36e"
  },
  {
    "url": "assets/js/47.f725f567.js",
    "revision": "67e74c8e3098fc7da6731058f102d647"
  },
  {
    "url": "assets/js/48.ddd53dfa.js",
    "revision": "ea1eb105aa139e423458c37f282301ac"
  },
  {
    "url": "assets/js/49.94d3d703.js",
    "revision": "78feb4a4dec7dd0f87bc5203233e9335"
  },
  {
    "url": "assets/js/5.8c85f5ed.js",
    "revision": "0334d67e76ac3d8a1d9b79fc0923fb9d"
  },
  {
    "url": "assets/js/50.36481cac.js",
    "revision": "cd17ba45677caa537efcee01928c6658"
  },
  {
    "url": "assets/js/51.4286751a.js",
    "revision": "e67b73b057961a30a6e93127cd7fa277"
  },
  {
    "url": "assets/js/52.8cce7816.js",
    "revision": "a0de6cbe0608cf347bba802c6fcf7a67"
  },
  {
    "url": "assets/js/53.d12362b9.js",
    "revision": "290858386db9761dc15a448f696b6a05"
  },
  {
    "url": "assets/js/54.00a1ad5b.js",
    "revision": "48d4eaf8d2a0d2e4de24ce4452592aa6"
  },
  {
    "url": "assets/js/55.4d4fd95e.js",
    "revision": "d04fc08d0574e77982e30430637bceb6"
  },
  {
    "url": "assets/js/56.e21a4cd0.js",
    "revision": "d9cb30485420cb468bbeb20139b3511d"
  },
  {
    "url": "assets/js/57.335c9cb9.js",
    "revision": "7e20c9fa4c5f2e3b1e342754eabb563e"
  },
  {
    "url": "assets/js/58.1e4c0d66.js",
    "revision": "57e6cc25dea0bc038b890e4404dc2df5"
  },
  {
    "url": "assets/js/59.9b46f6ca.js",
    "revision": "f397903d22a7fec1a638e2196b6d63de"
  },
  {
    "url": "assets/js/6.5904242e.js",
    "revision": "4eb1006ea4ebe06aec9a589b9efaae6f"
  },
  {
    "url": "assets/js/60.57f9db82.js",
    "revision": "72a245a5b014c891552f5841d7deba9a"
  },
  {
    "url": "assets/js/61.c222736e.js",
    "revision": "e80b635cce0b85d2842bf576b3ee385d"
  },
  {
    "url": "assets/js/62.d3e87138.js",
    "revision": "15224843df85b6a958f56639410d5439"
  },
  {
    "url": "assets/js/63.abffbb22.js",
    "revision": "91c8cfbf8be1b075ddfc98021df5c949"
  },
  {
    "url": "assets/js/64.5a818a1c.js",
    "revision": "2b2670f062f9f89f9ed1d051074d3efe"
  },
  {
    "url": "assets/js/65.b1691990.js",
    "revision": "06ac5aa127db7799f5003acde1b99109"
  },
  {
    "url": "assets/js/66.477bb9dc.js",
    "revision": "0eacbbe3fc02476537f1bbb5bf0bfa8d"
  },
  {
    "url": "assets/js/67.577c5d05.js",
    "revision": "eb07c0515fcb50450e7aaa268edb717b"
  },
  {
    "url": "assets/js/68.94323341.js",
    "revision": "068d8be8551f60de8366934cf5771b0f"
  },
  {
    "url": "assets/js/69.39cad770.js",
    "revision": "c195c5adf18e2bba8b75a43402067705"
  },
  {
    "url": "assets/js/7.de024ed2.js",
    "revision": "3c8dda7395be2aa748bf37879d447293"
  },
  {
    "url": "assets/js/70.9a2706e1.js",
    "revision": "d35b2dbf0567af28d29c56c1e461e463"
  },
  {
    "url": "assets/js/71.bd9515e5.js",
    "revision": "6de6109099ce5ac907e7cd1ff13df20a"
  },
  {
    "url": "assets/js/72.50a2d190.js",
    "revision": "14526722381a5c3c87af9f33cc826838"
  },
  {
    "url": "assets/js/73.9a8fad75.js",
    "revision": "70db641f58a042ef3dd46d01378e3f4e"
  },
  {
    "url": "assets/js/74.2e5cf547.js",
    "revision": "aa26dab21df57aabbdc2d504723a6602"
  },
  {
    "url": "assets/js/75.ff694866.js",
    "revision": "8299ca2296c29e660c8dbf634d85c647"
  },
  {
    "url": "assets/js/76.c38ce5d0.js",
    "revision": "303579c5295ec98bf1159c507e53f511"
  },
  {
    "url": "assets/js/77.b3e1f57c.js",
    "revision": "db2fb38de5cc1286cb3e82713f507bf9"
  },
  {
    "url": "assets/js/78.61ac9b33.js",
    "revision": "5c9aaede402946d63be67773f7966683"
  },
  {
    "url": "assets/js/79.950da01e.js",
    "revision": "2409b498c2f6749bc7fa0cdaaa444fcd"
  },
  {
    "url": "assets/js/8.7b692f5b.js",
    "revision": "323ca629bfd223e224b90ca6ca2bd058"
  },
  {
    "url": "assets/js/80.10ee61bc.js",
    "revision": "4197c5c237a4bd40971b3ab2c7af9ff0"
  },
  {
    "url": "assets/js/81.be401aaf.js",
    "revision": "efdc40c435ee44e4b1762a686d45179b"
  },
  {
    "url": "assets/js/82.2d593aa1.js",
    "revision": "53d500e1d34e7d79fa5b506415b74063"
  },
  {
    "url": "assets/js/83.c74f6318.js",
    "revision": "5c866a1a961d61d83a2829d289156997"
  },
  {
    "url": "assets/js/84.d7427987.js",
    "revision": "5129f932273bd7c4393695cdddfe9c67"
  },
  {
    "url": "assets/js/85.9b4c5193.js",
    "revision": "06c418e1e08a2ea7c9fbd234c0aa8534"
  },
  {
    "url": "assets/js/86.f03df9ce.js",
    "revision": "218f4616a3b9c6a2d9c37a255db8d73a"
  },
  {
    "url": "assets/js/87.48213419.js",
    "revision": "a2e28de0f1b499de2cf2a9d8880e6525"
  },
  {
    "url": "assets/js/88.b5812d09.js",
    "revision": "5dbc8b197044cbcbd04530850979ab66"
  },
  {
    "url": "assets/js/89.f97c223b.js",
    "revision": "deec348bd0bb51d36be6d8a8d0f45153"
  },
  {
    "url": "assets/js/9.88fbcd6c.js",
    "revision": "b30abfa0d2811ad61a2843c4fda64524"
  },
  {
    "url": "assets/js/90.b45f9aea.js",
    "revision": "c28324c2b8beb8dcf13dc51fd53df806"
  },
  {
    "url": "assets/js/91.e85f963a.js",
    "revision": "2016ed5b07ea55ed4fcdd9ddd84915d5"
  },
  {
    "url": "assets/js/92.139ac549.js",
    "revision": "05a6a9cea09954693a619c0a3a825c55"
  },
  {
    "url": "assets/js/93.f6495e0d.js",
    "revision": "6be543cb60ffc3dcc955795118e1fde3"
  },
  {
    "url": "assets/js/94.6bd624fd.js",
    "revision": "42a2e030fa1a2139d7ad2610d1b5a7d7"
  },
  {
    "url": "assets/js/95.8f7106c8.js",
    "revision": "2e351ff444ebb31ab0542965d4e3e7a0"
  },
  {
    "url": "assets/js/96.b0be2bee.js",
    "revision": "5cc5a8bb49782011604c03f75d7ca612"
  },
  {
    "url": "assets/js/97.c5fb825a.js",
    "revision": "317ac4d9223cb651b7361572fd43e729"
  },
  {
    "url": "assets/js/98.b094bda5.js",
    "revision": "5fa20609af7e53324051230644059a73"
  },
  {
    "url": "assets/js/99.f56b193f.js",
    "revision": "33f730cb0a00f2b0d7fc15fa4b4e40a2"
  },
  {
    "url": "assets/js/app.0feae0ac.js",
    "revision": "692e53ad3e817c9d8dae5b64721f804c"
  },
  {
    "url": "assets/js/vendors~docsearch.cf5af5f2.js",
    "revision": "cf523ee535541b31219c46e63dc05e25"
  },
  {
    "url": "basics/code.html",
    "revision": "8f3598d704ddb8e3552821013252673e"
  },
  {
    "url": "basics/index.html",
    "revision": "210d6fbf86cd4a8b5c554ec667f708e1"
  },
  {
    "url": "basics/Interviewquestions.html",
    "revision": "6c2885fbe8246c0afabf999d91fe95ea"
  },
  {
    "url": "basics/other.html",
    "revision": "87f73d55a049ea6640406938f3eb15b8"
  },
  {
    "url": "basics/rearend.html",
    "revision": "58ae6190ba774f553cb5cdf618055689"
  },
  {
    "url": "frontend/ajax/Ajax-advanced.html",
    "revision": "8fec520f489c08fb28430517eddf88b1"
  },
  {
    "url": "frontend/ajax/AJAX-XHR.html",
    "revision": "635b709efd75e6093a86472e6ce31ddd"
  },
  {
    "url": "frontend/ajax/index.html",
    "revision": "55204b83630c0e0da0909993998688c5"
  },
  {
    "url": "frontend/ajax/summary.html",
    "revision": "e56a5ed57a443dc551c16575539b00aa"
  },
  {
    "url": "frontend/BootStrap/index.html",
    "revision": "6482a88a537607487bbdb105fdb8ab97"
  },
  {
    "url": "frontend/BootStrap/OtherComponents.html",
    "revision": "7235d10aba1f16be508d8ddcdedb5145"
  },
  {
    "url": "frontend/BootStrap/SCSS.html",
    "revision": "2c91679db6579019ae112ee94e98ca2b"
  },
  {
    "url": "frontend/css/box-sizing.html",
    "revision": "39edd29ce3e147936342772e46d8293c"
  },
  {
    "url": "frontend/css/Dimensions-and-borders.html",
    "revision": "bec705637c04eccfc2dedbb0bc433c88"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "134b53fdb189d369466ee12de72194a2"
  },
  {
    "url": "frontend/css/text.html",
    "revision": "e73e9b26f207ad7f7a4045624f2a2e8a"
  },
  {
    "url": "frontend/docsCss/index.html",
    "revision": "6eec5c4422e3589e75379e17cb95a84b"
  },
  {
    "url": "frontend/docsH5C3/index.html",
    "revision": "fa705afe119f3429bf24cfe0db25cdcb"
  },
  {
    "url": "frontend/Express/index.html",
    "revision": "f6d5dd918dbe6387e40d44a7f49d4848"
  },
  {
    "url": "frontend/Express/middleware.html",
    "revision": "2b3942a09f5fcd2e16e6b0afd728a383"
  },
  {
    "url": "frontend/Express/xz.html",
    "revision": "8b4f3c8319fe71d05b26f67622332e03"
  },
  {
    "url": "frontend/HTML/form.html",
    "revision": "61b0d7fe25da45ed6b1e9b7746a3e1eb"
  },
  {
    "url": "frontend/HTML/HTML.html",
    "revision": "9318108e540e00186b493cec8a69ba9d"
  },
  {
    "url": "frontend/HTML/index.html",
    "revision": "5f5d7b686a4b2bfd89164ca3359d3604"
  },
  {
    "url": "frontend/HTML/table.html",
    "revision": "c202c3605d4c5cdd74c953ef27bde190"
  },
  {
    "url": "frontend/HTML5/canvas.html",
    "revision": "340336dafe2400a9db056120d74cdaff"
  },
  {
    "url": "frontend/HTML5/index.html",
    "revision": "8f724076b39c234ee624930580b205e9"
  },
  {
    "url": "frontend/javaScript/api.html",
    "revision": "4edb43b795aed6a9d1dc0e9d229dda9e"
  },
  {
    "url": "frontend/javaScript/array.html",
    "revision": "c67ec6bd8d1d774e5cc49889360e0cfb"
  },
  {
    "url": "frontend/javaScript/date.html",
    "revision": "0d75cd847923c6e72e0a85a24b0c3d72"
  },
  {
    "url": "frontend/javaScript/function.html",
    "revision": "7dd55e95ba6600e9f946b78975bfb972"
  },
  {
    "url": "frontend/javaScript/index.html",
    "revision": "f40d1e1776b3ef444f4e6f13376539ce"
  },
  {
    "url": "frontend/javaScript/process-control.html",
    "revision": "33b6cdad0d4ef43a748e9b52afda952e"
  },
  {
    "url": "frontend/javaScript/typeof-data.html",
    "revision": "049dece7278fc7ce08e7f52f0b7ebf82"
  },
  {
    "url": "frontend/jQuery/customize.html",
    "revision": "4d93faf4778181858cbf9ef4996ea018"
  },
  {
    "url": "frontend/jQuery/event.html",
    "revision": "559faf2c45b40b40e44fe234b82f77c0"
  },
  {
    "url": "frontend/jQuery/index.html",
    "revision": "74e8f9fd08721fc908e5a79b688a4605"
  },
  {
    "url": "frontend/jQuery/method.html",
    "revision": "1a8f370493792e0565fbdbb6bcd6854a"
  },
  {
    "url": "frontend/NodeJS/http.html",
    "revision": "dbd6dd815c7fc89408424ef953fac7ce"
  },
  {
    "url": "frontend/NodeJS/index.html",
    "revision": "a866fd36e7e7b8b947a182755b3b1ada"
  },
  {
    "url": "frontend/NodeJS/module.html",
    "revision": "94980c63b9a1ddff71229d52c92f98a0"
  },
  {
    "url": "frontend/nuxt/index.html",
    "revision": "34da311fde56e8910e36f74f3bd7003d"
  },
  {
    "url": "frontend/typeScript/index.html",
    "revision": "891e147667ff608f29e9b2821de7e592"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "19a7eea5ee2ac31085dd450189684e8c"
  },
  {
    "url": "frontend/webpack/install.html",
    "revision": "3971efe5addaa01557b39f1897fa1644"
  },
  {
    "url": "frontend/weChat/index.html",
    "revision": "bd7528f786ec736b6357b0f7092526d6"
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
    "revision": "d5dbbc203f68820b207fcb94ad9c5921"
  },
  {
    "url": "learn/About/index.html",
    "revision": "8959e119b5798773dfec45d1c0eb095d"
  },
  {
    "url": "learn/index.html",
    "revision": "b8d2abb8704fb947574dbd37e5a9a99a"
  },
  {
    "url": "npm-api/index.html",
    "revision": "80595f2123019ecf94f54fc0650c0968"
  },
  {
    "url": "other/download/index.html",
    "revision": "352c7b9a84f539ff247f0e3dd74c8b81"
  },
  {
    "url": "other/download/Other.html",
    "revision": "dd157bbc0d0719b30b8fdec53d9bee79"
  },
  {
    "url": "other/download/Rear-end.html",
    "revision": "8db447851590028d285ba802df62e8eb"
  },
  {
    "url": "other/download/statement.html",
    "revision": "4ba9024b49787741557dad92b43a16f6"
  },
  {
    "url": "other/git/git-Alias.html",
    "revision": "58bda0bec90321441899f4b4dcd43824"
  },
  {
    "url": "other/git/git-branch-Introduction.html",
    "revision": "a86a95760a44fd67b97328f9817039a4"
  },
  {
    "url": "other/git/git-branch-managemen.html",
    "revision": "33027a16a32f1c1e4d4bbe5dfa0a1a90"
  },
  {
    "url": "other/git/git-branch-merge.html",
    "revision": "89da82d85f01909fe7ac9d00ee94c9d0"
  },
  {
    "url": "other/git/git-branch-process.html",
    "revision": "088d316c48609e1edb40a5abb7ece63d"
  },
  {
    "url": "other/git/git-branch-rebase.html",
    "revision": "aadf039bc3350e98de04c181b3b4f3c5"
  },
  {
    "url": "other/git/git-branch-remotely.html",
    "revision": "263bb0e3d1a8c3ff27c90487f4d944c6"
  },
  {
    "url": "other/git/git-branch.html",
    "revision": "0a8cc3fd30da8c3d8f0e216886dfc488"
  },
  {
    "url": "other/git/git-history.html",
    "revision": "85a6f6114bfc7af3bf2d4727ce93acba"
  },
  {
    "url": "other/git/git-label.html",
    "revision": "1e3c8bf22a49d95d3ef87a68ea99111b"
  },
  {
    "url": "other/git/git-recording.html",
    "revision": "2a8ecbb3dc52c8f3001f3241a474d6a7"
  },
  {
    "url": "other/git/git-Remotely.html",
    "revision": "a052474b4905f13f4134edcc5609389b"
  },
  {
    "url": "other/git/git-Revoke.html",
    "revision": "f1d10b0a6aff322dabdf007aae9d2781"
  },
  {
    "url": "other/git/git-warehouse.html",
    "revision": "a3971a309bf493ed4d94d8a22b9c51db"
  },
  {
    "url": "other/git/index.html",
    "revision": "40d09889bc1750bf4854e3a2d7f3e221"
  },
  {
    "url": "other/MarkDown/index.html",
    "revision": "346f4b41d27b63d75002df356c6753b5"
  },
  {
    "url": "other/MarkDown/md-advance.html",
    "revision": "d62fdc798058b3f69a9533e2e553e713"
  },
  {
    "url": "other/MarkDown/md-block.html",
    "revision": "e213f88f75d4436ad63c27ef7b5e067c"
  },
  {
    "url": "other/MarkDown/md-code.html",
    "revision": "e03fc543d9d4853cabe4adde02e47bb1"
  },
  {
    "url": "other/MarkDown/md-image.html",
    "revision": "ba27e2f96d8e57894909fca3ae4864bd"
  },
  {
    "url": "other/MarkDown/md-link.html",
    "revision": "f43eb1b37c0a75eb76a2059bdee718f2"
  },
  {
    "url": "other/MarkDown/md-lists.html",
    "revision": "a697ebbb84e0a3bbdaff528f8e0e8228"
  },
  {
    "url": "other/MarkDown/md-paragraph.html",
    "revision": "8ae0c105efee83fff22cbbe97b8b36b2"
  },
  {
    "url": "other/MarkDown/md-table.html",
    "revision": "d881b1c715b7f7875373fc883483c1ab"
  },
  {
    "url": "other/MarkDown/md-title.html",
    "revision": "334343122b67790f82919e7fa0cefdff"
  },
  {
    "url": "other/pwa/index.html",
    "revision": "d1fd6d5e654216a2cf43be42ebf90543"
  },
  {
    "url": "other/VScode/index.html",
    "revision": "d63bdee20307ea7e05c3e58378615d39"
  },
  {
    "url": "rearend/MySQL/Attributes.html",
    "revision": "af1c29f8ffb5bd6b6642b087c4fcd734"
  },
  {
    "url": "rearend/MySQL/data-storage.html",
    "revision": "a929339c9378c783f007a097509c8c11"
  },
  {
    "url": "rearend/MySQL/index.html",
    "revision": "72258b19b05125b85314980dbb33a6c1"
  },
  {
    "url": "rearend/MySQL/SQL-commands.html",
    "revision": "e2614a67c1dae93189b67e6bbbfd8502"
  },
  {
    "url": "sitio/Development.html",
    "revision": "88a1b6ccbfe704e393b636fc6514a553"
  },
  {
    "url": "sitio/guide.html",
    "revision": "998600af5b29ed47c2d13c844f9c2a2f"
  },
  {
    "url": "sitio/index.html",
    "revision": "5349b18993ed6471f1c40532a88a1df8"
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
