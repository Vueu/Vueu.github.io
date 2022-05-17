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
    "revision": "e7c4c480815b6733e894ea20e02ae621"
  },
  {
    "url": "assets/css/0.styles.8c50b999.css",
    "revision": "2103b751f921d9dd809756947ccd8acc"
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
    "url": "assets/img/21.d8b7cd12.png",
    "revision": "d8b7cd12d1137897b262a3554f5e5467"
  },
  {
    "url": "assets/img/3.21d60f13.png",
    "revision": "21d60f13ddf87662415ad2bdfc7bf49c"
  },
  {
    "url": "assets/img/4-2.c9e18d77.png",
    "revision": "c9e18d77145c0c1ad94fe4d551767105"
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
    "url": "assets/js/1.f6a013fe.js",
    "revision": "f0616f8de68fa3b5a7d1306970fd59c7"
  },
  {
    "url": "assets/js/10.26703820.js",
    "revision": "6b104f96ed15d107f123adeb2b794013"
  },
  {
    "url": "assets/js/11.95da680e.js",
    "revision": "d9e955653e800c5a2fb84e93c451333e"
  },
  {
    "url": "assets/js/12.f8639a3e.js",
    "revision": "7a94c4310340bb28451d8c8ae796fe51"
  },
  {
    "url": "assets/js/13.348abf5f.js",
    "revision": "af7f729373ba84f4ed86c8400934a85c"
  },
  {
    "url": "assets/js/14.b9f9ec14.js",
    "revision": "9c1164ff27aa0d5968207673d080f534"
  },
  {
    "url": "assets/js/15.460fd9ed.js",
    "revision": "e2c3c5504f569ee281c98be6b4350f70"
  },
  {
    "url": "assets/js/16.db2d9771.js",
    "revision": "e9d261a655c627ab82d3124b06d7c663"
  },
  {
    "url": "assets/js/17.2833ea33.js",
    "revision": "251f17d806d9c9c71526cebef6958f15"
  },
  {
    "url": "assets/js/18.ed72d5fd.js",
    "revision": "36c78847b5bfef609c045ae7cb31429f"
  },
  {
    "url": "assets/js/19.4d6ab9e3.js",
    "revision": "30945ef534c166f26a997b9cc2ec87ce"
  },
  {
    "url": "assets/js/20.c988fe56.js",
    "revision": "1919dacabda90aa7680aea38a4e2a2fb"
  },
  {
    "url": "assets/js/21.e189586a.js",
    "revision": "588d714e497e4cacab9353dc4d7def70"
  },
  {
    "url": "assets/js/22.8db89aa5.js",
    "revision": "6c9f5afc63ef128e8d85ed3cab8ec75a"
  },
  {
    "url": "assets/js/23.b757e824.js",
    "revision": "d7cd2225bcfb336252896d1e73657f97"
  },
  {
    "url": "assets/js/24.56a8361f.js",
    "revision": "82a92d1c9495bcdb2aee320cc33cba0d"
  },
  {
    "url": "assets/js/25.c381c8ae.js",
    "revision": "40b531b650f4ecf9b5c5a8c072d0a3b4"
  },
  {
    "url": "assets/js/26.34d818df.js",
    "revision": "fb667fddc9dc8da23a658a73b6082ee9"
  },
  {
    "url": "assets/js/27.29d3cff0.js",
    "revision": "43459c957d7f4c7bd8d200d6b53fb7df"
  },
  {
    "url": "assets/js/28.735d210a.js",
    "revision": "b62b04410c6cc9b97a2374573ef655ae"
  },
  {
    "url": "assets/js/29.2d7c9286.js",
    "revision": "2f9cf30ff5efc4fdac11a48089e25cc8"
  },
  {
    "url": "assets/js/3.7c243b80.js",
    "revision": "86322292a2ee63acddaf92f43528248a"
  },
  {
    "url": "assets/js/30.ea204ac5.js",
    "revision": "11088f1fac15bb070deb05a34f17dc5f"
  },
  {
    "url": "assets/js/31.41a9f5af.js",
    "revision": "511e3cdc20cfee19ab7393c0bc735f22"
  },
  {
    "url": "assets/js/32.4cb97455.js",
    "revision": "cd03b311514495616f32eb86c0986b01"
  },
  {
    "url": "assets/js/33.e70e392b.js",
    "revision": "703431f1b3fd740e9d557574f7510b29"
  },
  {
    "url": "assets/js/34.b71d1b91.js",
    "revision": "786dc61ed4d4339d547f87758f5c814d"
  },
  {
    "url": "assets/js/35.c183eda6.js",
    "revision": "d8380a8283e1d6175fabba3c4b9f1942"
  },
  {
    "url": "assets/js/36.5d539046.js",
    "revision": "3052094c31cbefb160f00a90c075c7e4"
  },
  {
    "url": "assets/js/37.37d28601.js",
    "revision": "98260cf2a01a708271931b6f4162de61"
  },
  {
    "url": "assets/js/38.861d543e.js",
    "revision": "0ad42999576279ddc3ef6e053970d210"
  },
  {
    "url": "assets/js/39.ff7da73b.js",
    "revision": "7266e2c8c838142f636312cdad96de59"
  },
  {
    "url": "assets/js/4.70e20384.js",
    "revision": "338bf46f73f832bcea2a775e61273693"
  },
  {
    "url": "assets/js/40.fd5c186b.js",
    "revision": "75a33ce58a713ffa6f54bec4fe6afb12"
  },
  {
    "url": "assets/js/41.18114a1b.js",
    "revision": "534d0e33f9d6fdcee02aab4f7462e36b"
  },
  {
    "url": "assets/js/42.383a6ed0.js",
    "revision": "8f3f2020753b7c3d9a201825526628c7"
  },
  {
    "url": "assets/js/43.da7602dd.js",
    "revision": "7de0639bdccf037bd2f7285645e4a930"
  },
  {
    "url": "assets/js/44.92bd6c72.js",
    "revision": "25bbc06d45b4a6e2a8ef980590a6e0f4"
  },
  {
    "url": "assets/js/5.4575b401.js",
    "revision": "26c7284894a7a73b37c5d9150db7536a"
  },
  {
    "url": "assets/js/6.24f38b5a.js",
    "revision": "555593fa68eb18eddafe4370f5058a9b"
  },
  {
    "url": "assets/js/7.c882322f.js",
    "revision": "3541327c2e678f1f9fac4601e9fe3741"
  },
  {
    "url": "assets/js/8.aed83b94.js",
    "revision": "213b23884532342a4538b969d490be75"
  },
  {
    "url": "assets/js/9.06e0a401.js",
    "revision": "351246802095bb858d0a39a3de579687"
  },
  {
    "url": "assets/js/app.65471140.js",
    "revision": "83f4ea288cfc13daf226698f52e013e8"
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
    "revision": "c898b10a8bbb73c8e9a1c5c705d461cc"
  },
  {
    "url": "blogs/PWA.html",
    "revision": "743ea73912277719b3dd54a4850ce33c"
  },
  {
    "url": "categories/index.html",
    "revision": "03a02d6c8a768c060ea0ac799f70c633"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "0ba4fae0d32dbd8b46184d9588692689"
  },
  {
    "url": "categories/前端笔记/index.html",
    "revision": "b18c3f8fa2a809db4ca7c5b844013037"
  },
  {
    "url": "categories/前端笔记/page/2/index.html",
    "revision": "0da9cd20bbf0a306c39b02a10c1f8440"
  },
  {
    "url": "categories/博客搭建/index.html",
    "revision": "6267355414e2884bf9d30dcef0838a6f"
  },
  {
    "url": "categories/后端笔记/index.html",
    "revision": "ea5885e86753e7591195f6edd81c4277"
  },
  {
    "url": "categories/学习文档/index.html",
    "revision": "d7952d97b94a4505e6129584e679acc5"
  },
  {
    "url": "categories/学习路线/index.html",
    "revision": "9feba23370fe2907e823b764d7d5feb9"
  },
  {
    "url": "documents/backend.html",
    "revision": "c40d5dcc334e9eec1b9586021397fc4e"
  },
  {
    "url": "documents/frontend.html",
    "revision": "f52c95d06794508e44f845ca8add03e5"
  },
  {
    "url": "egg.png",
    "revision": "4cd1b7550f33f26665b50fd241bc4ff8"
  },
  {
    "url": "index.html",
    "revision": "5340560e56c888c79a662389f11b02ac"
  },
  {
    "url": "install.png",
    "revision": "543e0b2faa360f8129385e49f0925244"
  },
  {
    "url": "notes/backend/java.html",
    "revision": "5c40f0ebbcf01639786e602dfaf4dba7"
  },
  {
    "url": "notes/frontend/AJAX.html",
    "revision": "d320a396bd3097ef20492357f870cc0f"
  },
  {
    "url": "notes/frontend/bootstrap.html",
    "revision": "d34fe59fffc0e9443d925f44d0bc6c5e"
  },
  {
    "url": "notes/frontend/CSS.html",
    "revision": "76c385e8b548d1c798cbb0caf8b58c77"
  },
  {
    "url": "notes/frontend/ES6.html",
    "revision": "3279608e5cea4b4b9a319fad9e842d99"
  },
  {
    "url": "notes/frontend/fe-load-1.html",
    "revision": "a2e7be1d7e1fa21d8ffc9dc0c371c2da"
  },
  {
    "url": "notes/frontend/fe-load-2.html",
    "revision": "b7e89c06985a17465dc915f65f07e0c0"
  },
  {
    "url": "notes/frontend/Git.html",
    "revision": "e80228e011ea23373848db0e57a5722b"
  },
  {
    "url": "notes/frontend/Grunt.html",
    "revision": "8e3d162e460ae6907df727ea7b54bd8e"
  },
  {
    "url": "notes/frontend/Gulp.html",
    "revision": "50af0f68b5aeb84f7f38ef4acbb56d33"
  },
  {
    "url": "notes/frontend/h5.html",
    "revision": "662f00f5fd4da89cfab100b439c17d73"
  },
  {
    "url": "notes/frontend/HTML.html",
    "revision": "9aeb75d4444eaae85d2b9d5b9482904b"
  },
  {
    "url": "notes/frontend/JS-advance.html",
    "revision": "5c00993222a24cb8b11aec2ab87f88f4"
  },
  {
    "url": "notes/frontend/JS-base.html",
    "revision": "56f416dc5634504797042c00aa7fdc2d"
  },
  {
    "url": "notes/frontend/MongoDB.html",
    "revision": "fcac2cbb92ed3dfafbf8bcc25a1bda33"
  },
  {
    "url": "notes/frontend/NodeJS.html",
    "revision": "34011c7119103c45c5c26815a05e8752"
  },
  {
    "url": "notes/frontend/Vue.html",
    "revision": "df50a5a3f1ef1b778ea956bf9f7167b8"
  },
  {
    "url": "notes/frontend/Webpack.html",
    "revision": "267e36782d3e6a1f504b97e8ff374f12"
  },
  {
    "url": "notes/other/Emoji.html",
    "revision": "0b7ccf8ce83d7bd9d61f5151276fb4db"
  },
  {
    "url": "notes/other/tool-1.html",
    "revision": "f3ee6c9eeca31708a693c4dbdbd43cea"
  },
  {
    "url": "notes/other/tool-2.html",
    "revision": "000dfcecbebdc3bbb2cb2f3d96f03b2a"
  },
  {
    "url": "notes/other/tool-3.html",
    "revision": "cc29761f763ce69f9c42fa7e87b07c98"
  },
  {
    "url": "notes/other/website.html",
    "revision": "fdb5cacb6b48362c6556bf1a87b083c9"
  },
  {
    "url": "pages/about.html",
    "revision": "f6c22bcc0372f2b6bb3e1941c3a98440"
  },
  {
    "url": "pages/msg.html",
    "revision": "f0640dad4536e7c9cc2187bf55d0a721"
  },
  {
    "url": "pages/test.html",
    "revision": "947712b820c594b190367aab75ee0987"
  },
  {
    "url": "tag/Ajax/index.html",
    "revision": "a380825764bd25c97986b8105bf48f6f"
  },
  {
    "url": "tag/bootstrap/index.html",
    "revision": "117522dc39d278c7f69e4de2a0ca2ff9"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "4e6ed306fb36f39b32d7cccbe5d9758e"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "2936ea757791a46c32f9f234ee212285"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "9cdeb9cd62c150b635c7d51aa47aa609"
  },
  {
    "url": "tag/Grunt/index.html",
    "revision": "54b733d25ced1b3e520597a9508d7958"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "c6f689bcb4b32e5139cf07456f54b9ce"
  },
  {
    "url": "tag/H5/index.html",
    "revision": "d687ea5b0a49fa046445fb5478b79a69"
  },
  {
    "url": "tag/Html/index.html",
    "revision": "ebf9f0dec6a2d7e535a9ef641a61436d"
  },
  {
    "url": "tag/index.html",
    "revision": "ffb1f95a80374e78ac5c688c7b0f8c88"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "3ae753718718761a2d44e0bf81ef9257"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "f44ff5fd0fb7bfe17ad6a61b29529f97"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "04b1abd746f4bcf6b69c882028bea5fa"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "811b2b0cb5b18a0cbbc7cf66448039dc"
  },
  {
    "url": "tag/test/index.html",
    "revision": "f92e6b5dbacb933172ac8fabf90914ab"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "f942921cefba77c8dfd8dfdf002f1ddd"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "e3a4372b34e9257e3302c825b1b52ee8"
  },
  {
    "url": "tag/其他工具/index.html",
    "revision": "5fd3b94d08f85999c41314fbf7e44487"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "2580d86dbf084acfe72a93a3774991ae"
  },
  {
    "url": "tag/前端文档/index.html",
    "revision": "ce5c2b729be4b6e0956a58b05f38a2d6"
  },
  {
    "url": "tag/前端路线/index.html",
    "revision": "7c20fb416ce476085c758fe5bfe4bd42"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "bae32fed5a489b879c34995f02fe3909"
  },
  {
    "url": "tag/博客部署/index.html",
    "revision": "4e2568da62b32fe129ccf7839407f00f"
  },
  {
    "url": "tag/后端文档/index.html",
    "revision": "694bce8022556617721983e3eb2e713b"
  },
  {
    "url": "tag/图片工具/index.html",
    "revision": "30221eb95a415dd456c1bff971f63984"
  },
  {
    "url": "tag/学习网站/index.html",
    "revision": "b46c934df267253de143be5a0342fceb"
  },
  {
    "url": "tag/摸鱼网站/index.html",
    "revision": "0542fa9d74a6ae70b15eb67e93c33e79"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "5dea71fb7fd8067135ab3e6829131365"
  },
  {
    "url": "tag/留言板/index.html",
    "revision": "260301beae8f075ea11848d4f7f0d4d0"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "fdfd6cfbb4795e4b6572e59d9312552c"
  },
  {
    "url": "timeline/index.html",
    "revision": "513109a536a745857eca28885ec61849"
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
