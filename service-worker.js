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
    "revision": "8d8d8fb1f2711a3b1a841743cb486391"
  },
  {
    "url": "assets/css/0.styles.0474e23b.css",
    "revision": "a93d505ad1c4acc7d0a0eca16bef4b52"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/1.01fdc3a7.png",
    "revision": "01fdc3a71135a1ab39ce53b6958d1abf"
  },
  {
    "url": "assets/img/1.1aa5da15.png",
    "revision": "1aa5da1529b0118493ba37c7963fbdc2"
  },
  {
    "url": "assets/img/1.af0533b0.png",
    "revision": "af0533b0f96b5ac14ac9066de29b3b89"
  },
  {
    "url": "assets/img/10.9c1bacfc.png",
    "revision": "9c1bacfcf65fccb31fa3b82e921f6430"
  },
  {
    "url": "assets/img/12.b82e860a.png",
    "revision": "b82e860a46a7cabfa36510e7d2118cd9"
  },
  {
    "url": "assets/img/13.95ffe2b1.png",
    "revision": "95ffe2b1033f445399dc4a56e35f8bca"
  },
  {
    "url": "assets/img/14.77347379.png",
    "revision": "77347379736c0d0bccf9ecb908c3998f"
  },
  {
    "url": "assets/img/15.59491412.png",
    "revision": "59491412be92c1566b68ef06cda7498e"
  },
  {
    "url": "assets/img/16.3a902d26.png",
    "revision": "3a902d262182a0df894d675e49d3bc57"
  },
  {
    "url": "assets/img/17.8d00b87b.png",
    "revision": "8d00b87b0e896327a7e4ff8e2f77dfe7"
  },
  {
    "url": "assets/img/18.1ca0253e.png",
    "revision": "1ca0253e91fcebb83854b3fd38d212ba"
  },
  {
    "url": "assets/img/2.1307b1f1.png",
    "revision": "1307b1f1aa7c69eaf98eb31cea936e07"
  },
  {
    "url": "assets/img/2.c4463e5d.png",
    "revision": "c4463e5d057e087e9721726634cf5898"
  },
  {
    "url": "assets/img/2.d2ce85df.png",
    "revision": "d2ce85df58bd1ade6d0e344f93c129c1"
  },
  {
    "url": "assets/img/21.d8b7cd12.png",
    "revision": "d8b7cd12d1137897b262a3554f5e5467"
  },
  {
    "url": "assets/img/3.21d60f13.png",
    "revision": "21d60f13ddf87662415ad2bdfc7bf49c"
  },
  {
    "url": "assets/img/3.aa2300f5.jpg",
    "revision": "aa2300f597b339d8a1ec79d4ad4aaa50"
  },
  {
    "url": "assets/img/4-2.c9e18d77.png",
    "revision": "c9e18d77145c0c1ad94fe4d551767105"
  },
  {
    "url": "assets/img/4.2c969b6a.jpg",
    "revision": "2c969b6a23e934ee2a5dc5435f3830b0"
  },
  {
    "url": "assets/img/4.9efab78f.png",
    "revision": "9efab78f6cf5208ce066a72a3bcdea59"
  },
  {
    "url": "assets/img/5.88ebde62.png",
    "revision": "88ebde62d2b8a6dd046739fbc2a86172"
  },
  {
    "url": "assets/img/6.bb482780.png",
    "revision": "bb482780bc25fe56bba868586b386c5f"
  },
  {
    "url": "assets/img/7.065ec223.png",
    "revision": "065ec223996c96547a091750e01e0bc5"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/devServer-16500694432232.51714a9e.png",
    "revision": "51714a9e512c85e133daa988e5bdec2a"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/image-20220302231131808.bd6ed003.png",
    "revision": "bd6ed00340006144b7452c006321f2a7"
  },
  {
    "url": "assets/img/image-20220303002743270.c691495a.png",
    "revision": "c691495a2f2298df10fcaf81a1260b4b"
  },
  {
    "url": "assets/img/image-20220303003331804.679879b4.png",
    "revision": "679879b447d77aaf5a138dd81be62f20"
  },
  {
    "url": "assets/img/image-20220319200410175.5ea25f69.png",
    "revision": "5ea25f69e5f8b1cb84a40c0e28c93e2d"
  },
  {
    "url": "assets/img/image-20220325124424285.2d1ff62e.png",
    "revision": "2d1ff62edf913220ade78fd5d6310ca4"
  },
  {
    "url": "assets/img/image-20220325141047672.d922de47.png",
    "revision": "d922de4780ecf14b715d5bd2e60a05f2"
  },
  {
    "url": "assets/img/image-20220328170551802.e99720d5.png",
    "revision": "e99720d5da547d48f45d6a91c3ec5ca1"
  },
  {
    "url": "assets/img/image-20220328170843555.96619ef0.png",
    "revision": "96619ef0ba3c49d1c8de8cc8dde5cd58"
  },
  {
    "url": "assets/img/image-20220329233530994.03c24e25.png",
    "revision": "03c24e25fc3943812857c59c11be5dc5"
  },
  {
    "url": "assets/img/image-20220329234029722.c2f41de8.png",
    "revision": "c2f41de828bb0455a8251e553c8b2812"
  },
  {
    "url": "assets/img/image-20220330220345733.a2601e1a.png",
    "revision": "a2601e1a7385bb9963b4a0af02ae6fc3"
  },
  {
    "url": "assets/img/image-20220330221404862.8b6ca36a.png",
    "revision": "8b6ca36a86741b9e9705abc2669963de"
  },
  {
    "url": "assets/img/image-20220330234708893.c5c82b01.png",
    "revision": "c5c82b012696af6b4a4dcf38e6774cb1"
  },
  {
    "url": "assets/img/image-20220330235756181.eb00a442.png",
    "revision": "eb00a4422a552c721eddcd78988b3623"
  },
  {
    "url": "assets/img/image-20220331160538050.f76d6055.png",
    "revision": "f76d605529f8396240bcb7b274deaf8d"
  },
  {
    "url": "assets/img/image-20220331233935662.9111a16c.png",
    "revision": "9111a16c7aaad8e3b1e5ff764d94a023"
  },
  {
    "url": "assets/img/image-20220401220329631.85014d07.png",
    "revision": "85014d07bedef744a5628fedf99c1267"
  },
  {
    "url": "assets/img/image-20220403032807127.f5e832ce.png",
    "revision": "f5e832ce7e4473804511a69dda2677b5"
  },
  {
    "url": "assets/img/image-20220415221413316.9af5fbe9.png",
    "revision": "9af5fbe941495ce5e3133aa0bee7cbc0"
  },
  {
    "url": "assets/img/image-20220416162449213.af9bdd5c.png",
    "revision": "af9bdd5cde7739dfc8ec6a3d494557f4"
  },
  {
    "url": "assets/img/image-20220416162625960.e81891bb.png",
    "revision": "e81891bbaf978383c095d8f85ef61d71"
  },
  {
    "url": "assets/img/image-20220416164247637.1016cc41.png",
    "revision": "1016cc41cbacedbe29943a8da5abcb05"
  },
  {
    "url": "assets/img/image-20220417213332969.61dfb20e.png",
    "revision": "61dfb20ec875ae2d30531f18b85d20b4"
  },
  {
    "url": "assets/img/image-20220417215132373.1f8f408a.png",
    "revision": "1f8f408ab6d1a5ed3a9dfb3b1fb5708d"
  },
  {
    "url": "assets/img/router.45cd1399.png",
    "revision": "45cd139986daf827a34cff490feca2c1"
  },
  {
    "url": "assets/img/shengming.6eba8c66.png",
    "revision": "6eba8c66dc16b2a1ec024aad49e20600"
  },
  {
    "url": "assets/img/vuex-16501029757415.954bc6eb.png",
    "revision": "954bc6eb33ec0be285a80a827c35e4e6"
  },
  {
    "url": "assets/img/vuex.6007da7c.png",
    "revision": "6007da7c95eb5804af1fb1c12b845669"
  },
  {
    "url": "assets/js/1.37c29b95.js",
    "revision": "f225b5e336fe0281763083a925fe4394"
  },
  {
    "url": "assets/js/10.023ac5e0.js",
    "revision": "fe2c9e4c8b9bbc25ccbfa2a9ddf1d076"
  },
  {
    "url": "assets/js/11.db329df4.js",
    "revision": "ac0ec9a26bef6563fb076183ccf741b8"
  },
  {
    "url": "assets/js/12.81218ff5.js",
    "revision": "a2ac627d9bf6a239194ee1b8fed69521"
  },
  {
    "url": "assets/js/13.9fa48958.js",
    "revision": "af46a7da989b313ff3d887768a598a89"
  },
  {
    "url": "assets/js/14.63184c91.js",
    "revision": "13338f232cea91c9b22c5cc63bb8cfc3"
  },
  {
    "url": "assets/js/15.88b47c89.js",
    "revision": "27a8299a5c5c135d5300e7d65b698c60"
  },
  {
    "url": "assets/js/16.170be8d2.js",
    "revision": "59c70ed78584e6bef65ee9043574de58"
  },
  {
    "url": "assets/js/17.d0f22d22.js",
    "revision": "68677342cce7efc3df594a9c68f93475"
  },
  {
    "url": "assets/js/18.5fe890ec.js",
    "revision": "1a921f85462451fbe5c9c22387176416"
  },
  {
    "url": "assets/js/19.900f91d0.js",
    "revision": "b65078e9ca69c7141baae736930c9d53"
  },
  {
    "url": "assets/js/20.36b5239f.js",
    "revision": "15ab7f509d425e6e7d37efd5548d7bf1"
  },
  {
    "url": "assets/js/21.2f8b3162.js",
    "revision": "e67e5efb3999b79e40496b958b9a921d"
  },
  {
    "url": "assets/js/22.5c435efd.js",
    "revision": "4d10cb3051b2fe3d7a35313dc22862e4"
  },
  {
    "url": "assets/js/23.92de4ab3.js",
    "revision": "acbf3e810d7983f6f556efcaa1bb51ca"
  },
  {
    "url": "assets/js/24.0e85461f.js",
    "revision": "c7e60e1c4c155ba5f893609d1ff4fff6"
  },
  {
    "url": "assets/js/25.845e0357.js",
    "revision": "6a9d9ba9ebbd263ab1be64f3fe7c5951"
  },
  {
    "url": "assets/js/26.de966fad.js",
    "revision": "745cdcbbb85830cff033891fa5266486"
  },
  {
    "url": "assets/js/27.95b0c99d.js",
    "revision": "7dce444ebd3d82551711359a8901b1a3"
  },
  {
    "url": "assets/js/28.f5a033a8.js",
    "revision": "f7e9526cfa0e58a05a7e0c6d30730c2b"
  },
  {
    "url": "assets/js/29.90608871.js",
    "revision": "d9435a3c85ee1d1a9a1fec6793c5b3a4"
  },
  {
    "url": "assets/js/3.9f83703d.js",
    "revision": "bed9901b3d28549d231c99a0d175630e"
  },
  {
    "url": "assets/js/30.cb3e9f42.js",
    "revision": "e0cfba5bce071451057c5d0dd5968e1d"
  },
  {
    "url": "assets/js/31.a6a91589.js",
    "revision": "fa3cebf265b0c34bf1fad2d504c7cc86"
  },
  {
    "url": "assets/js/32.c2f9fda0.js",
    "revision": "4614b92b5426cc2539fa7025b424e6b5"
  },
  {
    "url": "assets/js/33.f85f7981.js",
    "revision": "37a75a035e55335037d2991067f2a494"
  },
  {
    "url": "assets/js/34.bd614d76.js",
    "revision": "36db49130864e25aa5d60e38961a399e"
  },
  {
    "url": "assets/js/35.10054677.js",
    "revision": "4b913d32e3053f85518055a8d26486dd"
  },
  {
    "url": "assets/js/36.d60dfc50.js",
    "revision": "b61d1416d09007c69a09a69f2993d970"
  },
  {
    "url": "assets/js/37.54c0dd3c.js",
    "revision": "8635a553b0f7b306a06487dd84e5c412"
  },
  {
    "url": "assets/js/38.a111b9a8.js",
    "revision": "685b44a756ae5ea021748d6f410747af"
  },
  {
    "url": "assets/js/39.979cf0fc.js",
    "revision": "8d3226d08ae355d69b9b4383b1ff5ebc"
  },
  {
    "url": "assets/js/4.6e27e86e.js",
    "revision": "9b3dcc299679051795ba67a9dff71a97"
  },
  {
    "url": "assets/js/40.ba0a7154.js",
    "revision": "703824ac01dc7ca8dcc9e7e3caac52da"
  },
  {
    "url": "assets/js/41.1e63b29e.js",
    "revision": "eefbdb8b9a20a67d630ab1e4995b9c7e"
  },
  {
    "url": "assets/js/42.f8a90803.js",
    "revision": "110258e552b1a7bd46c9ff74b1a4d177"
  },
  {
    "url": "assets/js/43.11adf18f.js",
    "revision": "6d3918a1b673ca0b82e824bd26b39b5c"
  },
  {
    "url": "assets/js/44.1d3e67c6.js",
    "revision": "10bdb40645eb07c74ea8fc839a831b41"
  },
  {
    "url": "assets/js/45.a0ebcb9c.js",
    "revision": "c03ece9a7ce66d490deecd690a050c36"
  },
  {
    "url": "assets/js/46.9bbca23c.js",
    "revision": "50467046564124bdd2b8fe49a802b946"
  },
  {
    "url": "assets/js/5.d7d66890.js",
    "revision": "9b61afc7a8e25681c84a0117b175295f"
  },
  {
    "url": "assets/js/6.6e69b93a.js",
    "revision": "fb9e805387a96707ecc4132154f7e2be"
  },
  {
    "url": "assets/js/7.8b4bf124.js",
    "revision": "df783c45e7e1b001314ac2928eaa33f6"
  },
  {
    "url": "assets/js/8.60ee857e.js",
    "revision": "57c7b67fecefe64da038bb291e0251c4"
  },
  {
    "url": "assets/js/9.ee70221a.js",
    "revision": "c638942d21241bbae40adeaca21e1939"
  },
  {
    "url": "assets/js/app.7562fe1d.js",
    "revision": "a3c138d218b5a7e3e6e7aa96ead258a9"
  },
  {
    "url": "avatar.jpg",
    "revision": "b820cfda200d881097ac62e56043e03e"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "blogs/deploy.html",
    "revision": "ebf9d284a6e587554ade6d4259bf4528"
  },
  {
    "url": "blogs/PWA.html",
    "revision": "0cc456ac295d527ba29c97ba24807e92"
  },
  {
    "url": "categories/index.html",
    "revision": "fb273f54d2681371e82ea089f528db70"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "9c1f73c1578e8ef528acae1f437cc3be"
  },
  {
    "url": "categories/前端笔记/index.html",
    "revision": "900d167022495e821795c167be8cddf7"
  },
  {
    "url": "categories/前端笔记/page/2/index.html",
    "revision": "ece936d1f151559c12c6157833e430d9"
  },
  {
    "url": "categories/博客搭建/index.html",
    "revision": "834e0fccaa1e13c3ccf6c9a907ca741d"
  },
  {
    "url": "categories/后端笔记/index.html",
    "revision": "9357a246e6ad3e2174f5a1bb9f4ef2dc"
  },
  {
    "url": "categories/学习文档/index.html",
    "revision": "8014cc4f997be3954b73c4d2ea6825be"
  },
  {
    "url": "categories/学习路线/index.html",
    "revision": "90379bbb866705ac2f168386404eae76"
  },
  {
    "url": "categories/控制/index.html",
    "revision": "c104f196475b94eea42b6b02b84eccb3"
  },
  {
    "url": "documents/backend.html",
    "revision": "424f561fd3dc48400df21fcc574cd261"
  },
  {
    "url": "documents/frontend.html",
    "revision": "bf0b570627030538647588c0859681a0"
  },
  {
    "url": "egg.png",
    "revision": "4cd1b7550f33f26665b50fd241bc4ff8"
  },
  {
    "url": "index.html",
    "revision": "09a90c8ed1fedc7989788922db3d1a3a"
  },
  {
    "url": "install.png",
    "revision": "543e0b2faa360f8129385e49f0925244"
  },
  {
    "url": "notes/backend/javase.html",
    "revision": "c8943394599241c1ee615b0a4128da31"
  },
  {
    "url": "notes/frontend/AJAX.html",
    "revision": "8b87268fdcb4e593b5f0b11532c76723"
  },
  {
    "url": "notes/frontend/bootstrap.html",
    "revision": "e10c9c331c69ed19ebb142dc6b632d1b"
  },
  {
    "url": "notes/frontend/CSS.html",
    "revision": "d5dd0686fc0fd10ffa2ff0e3a43d2b3e"
  },
  {
    "url": "notes/frontend/ES6.html",
    "revision": "21e5af405275de340cf5256e0b6ed8c7"
  },
  {
    "url": "notes/frontend/fe-load-1.html",
    "revision": "dbf47cb20979ff39fd3cc840f6a34d1f"
  },
  {
    "url": "notes/frontend/fe-load-2.html",
    "revision": "d426944841599b171102bde731d6f90b"
  },
  {
    "url": "notes/frontend/Git.html",
    "revision": "ffbc53e32cbaecf824b390bf3e890039"
  },
  {
    "url": "notes/frontend/Grunt.html",
    "revision": "93988ab67f74ab9eafd1894e01995d63"
  },
  {
    "url": "notes/frontend/Gulp.html",
    "revision": "e5ce8d3d26fad0a8bfd524c19d32a31d"
  },
  {
    "url": "notes/frontend/h5.html",
    "revision": "31697a8ed5ff0b59c8fe36882c11b10c"
  },
  {
    "url": "notes/frontend/HTML.html",
    "revision": "5737ea0cb3195e074e0593d795cb6bed"
  },
  {
    "url": "notes/frontend/JS-advance.html",
    "revision": "cf94e8b6a6829df58527f45bca6b2f8c"
  },
  {
    "url": "notes/frontend/JS-base.html",
    "revision": "9c0d74546a068f15815099a366aab774"
  },
  {
    "url": "notes/frontend/MongoDB.html",
    "revision": "199fd7f9356eba5c710d6986159170e4"
  },
  {
    "url": "notes/frontend/NodeJS.html",
    "revision": "9f7b202e23f2c7ceefb62dc37e2ed58c"
  },
  {
    "url": "notes/frontend/Vue.html",
    "revision": "c48e945675ab5cbffcf2caf119e1d939"
  },
  {
    "url": "notes/frontend/Webpack.html",
    "revision": "56b855c25441a9deca577e7644d0683a"
  },
  {
    "url": "notes/other/Emoji.html",
    "revision": "e8f221b4434d240be55fe28b51907fd6"
  },
  {
    "url": "notes/other/PID.html",
    "revision": "70d027a7e1aa615075356b87777a187f"
  },
  {
    "url": "notes/other/tool-1.html",
    "revision": "3d16c897c35c4cfb25902be1d06ead2d"
  },
  {
    "url": "notes/other/tool-2.html",
    "revision": "906dd7216d56a14860cc994f8c0bfda2"
  },
  {
    "url": "notes/other/tool-3.html",
    "revision": "8c0246355c66823e88fd80c6a26967df"
  },
  {
    "url": "notes/other/website.html",
    "revision": "41306e316833c762fcd2fee9cad45e25"
  },
  {
    "url": "pages/about.html",
    "revision": "ebdabe29a17761aea9623455dd2c6400"
  },
  {
    "url": "pages/msg.html",
    "revision": "286a02a761c20727b3774b6fd04cb285"
  },
  {
    "url": "pages/test.html",
    "revision": "db639b6d8975814acca120740139fe3d"
  },
  {
    "url": "tag/Ajax/index.html",
    "revision": "80403f940cf2eca35869d8554668d86a"
  },
  {
    "url": "tag/bootstrap/index.html",
    "revision": "324878ff002e0545e607b8050cd162ec"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "ff7e55f4216c8f83012dbc1937738d4e"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "f6c105f7884a23188823c665de986403"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "4e47e2d5dd439f8fcbdeb1f14d4f8f23"
  },
  {
    "url": "tag/Grunt/index.html",
    "revision": "55a35d44e996d70a40087056c44d6bd3"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "4b2a49798004c9bca30c32053f927c3d"
  },
  {
    "url": "tag/H5/index.html",
    "revision": "76ee02f059644444b1ad8527d913f985"
  },
  {
    "url": "tag/Html/index.html",
    "revision": "847c89acf4bcad97e5c9ea71d9a3f91e"
  },
  {
    "url": "tag/index.html",
    "revision": "9eb98fe9dbc3141e4b6d17988021dd87"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "909478544964bae5462ca01695b3ba98"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ebb8aebd7fc19f8c2dc0f02abc97a0d4"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "5dc14c3190b34cc4857e82ca2822eaaa"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "65094f8f7497ab0aae8d1a69dc767502"
  },
  {
    "url": "tag/test/index.html",
    "revision": "65a606157a5b73576d6e8332e4a325d5"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "008faeba3813a46fced1bd97c66e40ed"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "2c89b84a9056cb513166a823b401d9fc"
  },
  {
    "url": "tag/其他工具/index.html",
    "revision": "e06da95c17bd25a74babc2519b21471d"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "324ff1c8f5b4f4df0d4018f4f1370754"
  },
  {
    "url": "tag/前端文档/index.html",
    "revision": "4e7b5a59b1f9e055b63516dcbf31c836"
  },
  {
    "url": "tag/前端路线/index.html",
    "revision": "e3f3e91980698bab00aa51c205e0574f"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "7b8dc8abd46abba827e9afca4ca2fe29"
  },
  {
    "url": "tag/博客部署/index.html",
    "revision": "90200347ba6d9cdc9e4fafd901a44bd4"
  },
  {
    "url": "tag/后端文档/index.html",
    "revision": "6104e27dfc523c9f0debb5a76bbc4152"
  },
  {
    "url": "tag/图片工具/index.html",
    "revision": "3f29e867fac3e3822396c7ff7e80de72"
  },
  {
    "url": "tag/学习网站/index.html",
    "revision": "6c536e035f114e5d4ed28fd06d75f2bb"
  },
  {
    "url": "tag/摸鱼网站/index.html",
    "revision": "36bb5ab30da61e0b6abca38cfad1414e"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "ac1a7a30e9dbce8851313a085291506e"
  },
  {
    "url": "tag/留言板/index.html",
    "revision": "3e7e85ec1bf8aab0e081e1962b5a42bd"
  },
  {
    "url": "tag/神经元/index.html",
    "revision": "33c43270c206dd86953c59e3df806e51"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "662a225c197b42575e922679d623a486"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a53fabad8206158e83454f41f334bac"
  },
  {
    "url": "wechat.jpg",
    "revision": "41bcfdad5c076de48153383a21d80f51"
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
