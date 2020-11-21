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
    "revision": "adffe3154e6ee9bf2a77ebaa06eee89d"
  },
  {
    "url": "assets/css/0.styles.31cef5b4.css",
    "revision": "17264605f7884985ab0fda1d44d7ee9b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.65650ae0.js",
    "revision": "421b95ce8da18a7b5c10b1b1bcef4b0d"
  },
  {
    "url": "assets/js/11.ca0675c8.js",
    "revision": "311328a2cfadc9b61f9055bb33c88d0f"
  },
  {
    "url": "assets/js/12.074ff100.js",
    "revision": "5634f206ad659433d067923aaff1932d"
  },
  {
    "url": "assets/js/13.40565fb9.js",
    "revision": "cbabe0a362a94c3d58db79db2b070602"
  },
  {
    "url": "assets/js/14.1c049f14.js",
    "revision": "4c96549e21688315b52459dbf7a8abac"
  },
  {
    "url": "assets/js/15.7276a98e.js",
    "revision": "5a798c9c9b5d7952a1b637e394b0bfa6"
  },
  {
    "url": "assets/js/16.6cd1c9e7.js",
    "revision": "389a23b283af835e838c83c1a30977f0"
  },
  {
    "url": "assets/js/17.91f900a1.js",
    "revision": "d294c3ebd9bccd610a500b6c27b5e67d"
  },
  {
    "url": "assets/js/18.5e509726.js",
    "revision": "3be751bf7c2e3f24bd38e45c5bb7c3c3"
  },
  {
    "url": "assets/js/19.c70a7985.js",
    "revision": "0e0205569d0c57876b1e4bdb45de444b"
  },
  {
    "url": "assets/js/2.d6c17d5e.js",
    "revision": "5faabaeef3f62383b52b21c511efb39b"
  },
  {
    "url": "assets/js/20.c8cb4bf3.js",
    "revision": "8803d805c865be0d3e4ee45caca76ce1"
  },
  {
    "url": "assets/js/21.24f2a33a.js",
    "revision": "dd303c526fca55e16e2f0162be3c8d17"
  },
  {
    "url": "assets/js/22.36534db5.js",
    "revision": "7a4a00de911ff16285146501a5e7d70f"
  },
  {
    "url": "assets/js/23.5c179f22.js",
    "revision": "029c33c44d15b5912ffdb08c0ecb952d"
  },
  {
    "url": "assets/js/24.f2f4691c.js",
    "revision": "c3ab215b7511632793ae5fcb1001e4e3"
  },
  {
    "url": "assets/js/25.d398dd2d.js",
    "revision": "7647d27acf84eab5ecd8bcbc88856630"
  },
  {
    "url": "assets/js/26.746c7072.js",
    "revision": "1371097072d4c29ae5b2a5b880f9512c"
  },
  {
    "url": "assets/js/27.d0592609.js",
    "revision": "330266de300e42f10d50450820baf54f"
  },
  {
    "url": "assets/js/28.cd696dbd.js",
    "revision": "5cfb048058a8e29a58f33a6423d1c974"
  },
  {
    "url": "assets/js/29.dd1db973.js",
    "revision": "45c8f8d6d2eb2cc95af6ea494ca90686"
  },
  {
    "url": "assets/js/3.63dd5920.js",
    "revision": "95fb26fdbcc5ba193d7c9dcc1abd3128"
  },
  {
    "url": "assets/js/30.f1fe9a3d.js",
    "revision": "36f438a7713bcf1888ea3fe6d519a072"
  },
  {
    "url": "assets/js/31.0535f3dd.js",
    "revision": "6c1cedd1a0f828e90f5e4957f6b4dfda"
  },
  {
    "url": "assets/js/32.c065b011.js",
    "revision": "32a0a51112334665f71be826bce94c82"
  },
  {
    "url": "assets/js/33.a1e0395a.js",
    "revision": "6196c527d1007025f27637b24019d440"
  },
  {
    "url": "assets/js/34.503c232e.js",
    "revision": "6582e4fe06206b36e97edc65be602a19"
  },
  {
    "url": "assets/js/35.f8c76e39.js",
    "revision": "322e53e07b37b5cbffaa39fcfdcf069a"
  },
  {
    "url": "assets/js/36.02bf21ba.js",
    "revision": "b987ed68cd6df992998157d54b8f48f4"
  },
  {
    "url": "assets/js/37.53034e95.js",
    "revision": "731db7e6dc7624aa895d11d5c36c16ef"
  },
  {
    "url": "assets/js/38.7ab7cad6.js",
    "revision": "bf89d71fb02531fd7a0d9f16d35a86ee"
  },
  {
    "url": "assets/js/39.f95857b0.js",
    "revision": "fffc51fb3ab1f2bc7a86a29af410c8d9"
  },
  {
    "url": "assets/js/4.59d6471d.js",
    "revision": "4aafd26391bd7d7d73a4cb3338a95e5d"
  },
  {
    "url": "assets/js/40.a12f2c4e.js",
    "revision": "a4f2c50d1a5a6d1643f508ee9c81b8a6"
  },
  {
    "url": "assets/js/5.d36e0fe6.js",
    "revision": "5e7a81bc644374c95d396adbfe021cf2"
  },
  {
    "url": "assets/js/6.d6b4bfa1.js",
    "revision": "a11415058d63f8850cb449f228b7bd10"
  },
  {
    "url": "assets/js/7.1cac5c7f.js",
    "revision": "07c25663c1d2e3753dd5be332233f790"
  },
  {
    "url": "assets/js/8.a358391b.js",
    "revision": "9639f9879128f4554b8cb37ced3cdb15"
  },
  {
    "url": "assets/js/9.0091dace.js",
    "revision": "5f139e25889a37106dd2cb537739698f"
  },
  {
    "url": "assets/js/app.a4c92369.js",
    "revision": "e84cfde1cec2e26749679768f84f1b77"
  },
  {
    "url": "author.png",
    "revision": "0bc4cf8823e3c83862ef5907dd58fe13"
  },
  {
    "url": "index.html",
    "revision": "53bcb9168453d793aa44e357282a9dda"
  },
  {
    "url": "ITpic/IT1/1.jpg",
    "revision": "843c9356e0daf31b4274b40b420799a9"
  },
  {
    "url": "ITpic/IT1/2.jpg",
    "revision": "b8a245e70caf84363d55a8fc7613e35c"
  },
  {
    "url": "ITpic/IT1/3.jpg",
    "revision": "a6320d55f58bf36705a12e3fa077b09f"
  },
  {
    "url": "ITpic/IT1/4.jpg",
    "revision": "7489d67651d2f60cbb191eb9fbd5ac4f"
  },
  {
    "url": "ITpic/IT1/5.jpg",
    "revision": "e69c2057cee1264a699f321a96fd80a8"
  },
  {
    "url": "lin/×JavaScript-1.html",
    "revision": "b548f8606ced258dbabc988b0c93aea4"
  },
  {
    "url": "lin/4thweek.html",
    "revision": "2a57ed7e5137ceb2fd144bd8a00debf0"
  },
  {
    "url": "lin/cocos1.html",
    "revision": "879610b314b9967f75b8c47233199a45"
  },
  {
    "url": "lin/IT1.html",
    "revision": "a8082a9c4e64ba52d96a18b7d441b271"
  },
  {
    "url": "lin/js1mod.html",
    "revision": "fd2853227f029d5791f0af7bc476a5ed"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "d1d53343bd5457bedb3a1261c0a7d0ca"
  },
  {
    "url": "lin/lxl1.html",
    "revision": "c7ddd628f174b338d78c034b0283a828"
  },
  {
    "url": "lin/mode.html",
    "revision": "3e87f1e45668147f38834217cb9e049d"
  },
  {
    "url": "lin/path.html",
    "revision": "e6a58c27086f9839ef50c428d0e98da7"
  },
  {
    "url": "lin/readingActivity.html",
    "revision": "0fddc49f80ef0a0ce05086bfb3844f44"
  },
  {
    "url": "lin/readmeBackup.html",
    "revision": "62484fd5056f6026e276adecd26f94b4"
  },
  {
    "url": "lin/rhj1.html",
    "revision": "792643199d3381c0feed559c03b4cc1a"
  },
  {
    "url": "lin/rhj2.html",
    "revision": "b7ccae3b22e51203dfc583e9caf80da8"
  },
  {
    "url": "lin/Russia.html",
    "revision": "c96e99aa76e5a46b1e477f0d7c0165a0"
  },
  {
    "url": "lin/session1.html",
    "revision": "203fecc68cf57bc72deaa5f88f856300"
  },
  {
    "url": "lin/session2.html",
    "revision": "9624658b493d3ba9959545fbf1f829bd"
  },
  {
    "url": "lin/session3.html",
    "revision": "15cef8c361532146476c8d88b7de6d65"
  },
  {
    "url": "lin/session4.html",
    "revision": "c25541373b541872eba023ca134ee5a4"
  },
  {
    "url": "lin/session5.html",
    "revision": "a79c55005d70e084283fcccff1865b41"
  },
  {
    "url": "lin/session6.html",
    "revision": "d1bbbefcda8ead7114789a7bdb28984f"
  },
  {
    "url": "lin/session7.html",
    "revision": "49465224f53f82ad55bf04321165ddc3"
  },
  {
    "url": "lin/spssD1.html",
    "revision": "a4a905b8d771d5c509e807e2b5936140"
  },
  {
    "url": "lin/spssD10.html",
    "revision": "0a1728f935764fc3fd841ced08feb2ca"
  },
  {
    "url": "lin/spssD13.html",
    "revision": "8adf6431a25038d029a22e150f1d8e36"
  },
  {
    "url": "lin/spssD17.html",
    "revision": "809dc2f40b67fab167bee3dbbfbdc453"
  },
  {
    "url": "lin/spssD18.html",
    "revision": "5546e3284ffb23d966ddf0139d8e5cdb"
  },
  {
    "url": "lin/spssD2.html",
    "revision": "cc128b4ac43f6af51552678ec3a64a6e"
  },
  {
    "url": "lin/writingActivity.html",
    "revision": "6fd436a1bb0af5d96396ce4f4b452c30"
  },
  {
    "url": "logo.svg",
    "revision": "e0bfcff34b1e9228ed5b4ecc778ddcae"
  },
  {
    "url": "logo32.svg",
    "revision": "262b72ea1283ea67d9bd2ffc939bd092"
  },
  {
    "url": "logo48.svg",
    "revision": "e0a5b4082581413ef0daa11bf005b0dc"
  },
  {
    "url": "pictureOff.svg",
    "revision": "c733e0e7032176114d4817e9b6c7fd18"
  },
  {
    "url": "pictureOn.svg",
    "revision": "7afaeaed0cf596f19a51120b0558c39b"
  },
  {
    "url": "spssPic/10/1.png",
    "revision": "314638d400de30d5b2b57ebbefda33c1"
  },
  {
    "url": "spssPic/10/2.jpg",
    "revision": "b769c59e5564650b2d4ab51509ce96ad"
  },
  {
    "url": "spssPic/10/2.png",
    "revision": "96eb23528fbe63bd116d2fcf92936570"
  },
  {
    "url": "spssPic/10/3.png",
    "revision": "4cacc51f1d1706d84c34ffa9cbb0fa50"
  },
  {
    "url": "spssPic/10/4.png",
    "revision": "1ba2b2a3e261717ae77281004320aa62"
  },
  {
    "url": "spssPic/10/5.png",
    "revision": "e713fbab8a2c02dd2e9fbd7d013e1c69"
  },
  {
    "url": "spssPic/10/6.png",
    "revision": "983412d179c6d64e06561857200b4894"
  },
  {
    "url": "spssPic/13/1.jpg",
    "revision": "8f7747142053ca045eb8e5641dd7465b"
  },
  {
    "url": "spssPic/13/10.jpg",
    "revision": "5f859dd54e5e62c2c83d5b022e0155fb"
  },
  {
    "url": "spssPic/13/11.jpg",
    "revision": "78b64b48045ac0d385c60b5aa2784228"
  },
  {
    "url": "spssPic/13/12.jpg",
    "revision": "04f48bb340cf024a90e4446361de539e"
  },
  {
    "url": "spssPic/13/13-1.jpg",
    "revision": "8f7747142053ca045eb8e5641dd7465b"
  },
  {
    "url": "spssPic/13/13.jpg",
    "revision": "1d4f2366a492dc265229604b5e688f2a"
  },
  {
    "url": "spssPic/13/14.jpg",
    "revision": "f3057dd5ef4a48381dacb64fae6248f5"
  },
  {
    "url": "spssPic/13/15.jpg",
    "revision": "428c316b109ca8a57ee5529f153231ee"
  },
  {
    "url": "spssPic/13/2.jpg",
    "revision": "748223bb03038be9d3e3db5585481954"
  },
  {
    "url": "spssPic/13/3.jpg",
    "revision": "71b0cc41e42718e8d04d7c564887d8f0"
  },
  {
    "url": "spssPic/13/4.jpg",
    "revision": "fd0d451d08ee309329114372d0061f38"
  },
  {
    "url": "spssPic/13/5.jpg",
    "revision": "2a757ea5d0073840d76b3a9e0663a9a7"
  },
  {
    "url": "spssPic/13/6.jpg",
    "revision": "8b15122e752d7a34d2c0e37a028aca84"
  },
  {
    "url": "spssPic/13/7.jpg",
    "revision": "68e583e344b4dc40bbea7946edfd168a"
  },
  {
    "url": "spssPic/13/8.jpg",
    "revision": "319a33816fe7aeaed627aad62aae4f72"
  },
  {
    "url": "spssPic/13/9.jpg",
    "revision": "e10922fdc8600000b0bfebbf0af10c4d"
  },
  {
    "url": "spssPic/17/1.jpg",
    "revision": "69fdd8680a0fe72437efd2d2ec8c83a3"
  },
  {
    "url": "spssPic/17/10.jpg",
    "revision": "bf57b7e94c94b1f59173a56cb4b2722e"
  },
  {
    "url": "spssPic/17/11.jpg",
    "revision": "e25e9723513ff6b48f6547586199e7e6"
  },
  {
    "url": "spssPic/17/12.jpg",
    "revision": "fea2cd022ca6e24cb95eeda46238e4a3"
  },
  {
    "url": "spssPic/17/13.jpg",
    "revision": "36183890b99a96e3795e3993a27dd600"
  },
  {
    "url": "spssPic/17/14.jpg",
    "revision": "36ac95837705d5ff07ee817d3e8c923d"
  },
  {
    "url": "spssPic/17/15.jpg",
    "revision": "7f1ae1ba5b55a05b4437c141a49699d9"
  },
  {
    "url": "spssPic/17/16.jpg",
    "revision": "1fc017471f855159dc3587cc48e20123"
  },
  {
    "url": "spssPic/17/17.jpg",
    "revision": "f6b7f474681ab370efd92a84febf07fa"
  },
  {
    "url": "spssPic/17/18.jpg",
    "revision": "027f81e85b0940fa88936b8bfd1f23e8"
  },
  {
    "url": "spssPic/17/19.png",
    "revision": "61e0f986960fa4ad16fd1ae69bf6cae7"
  },
  {
    "url": "spssPic/17/2.jpg",
    "revision": "ef0ddf18df515c1f58a7c7dab258db13"
  },
  {
    "url": "spssPic/17/20.jpg",
    "revision": "81cb4fa1b4e9270854feb3cf2c6e7ef5"
  },
  {
    "url": "spssPic/17/21.jpg",
    "revision": "49b0dd73a1ab6a2b4d0e14bf7f3b3cfe"
  },
  {
    "url": "spssPic/17/22.jpg",
    "revision": "edaf8e0e6feda93f50dc90338e3aea7c"
  },
  {
    "url": "spssPic/17/3.jpg",
    "revision": "2f94d6993d83e1b1d4d22fa62b63caa4"
  },
  {
    "url": "spssPic/17/4.jpg",
    "revision": "ea750021a97ecf1ff0213974c71dc6cd"
  },
  {
    "url": "spssPic/17/5.jpg",
    "revision": "6da53a81ffabf613679cdd54e94357c5"
  },
  {
    "url": "spssPic/17/6.jpg",
    "revision": "b5dc742b9f7e30a837db0f1be77927ba"
  },
  {
    "url": "spssPic/17/7.jpg",
    "revision": "fcdc62c2ec177da41cae56e5f74b4313"
  },
  {
    "url": "spssPic/17/8.jpg",
    "revision": "7d9d949a48f20f2a93656fc8ab1a8204"
  },
  {
    "url": "spssPic/17/9.jpg",
    "revision": "b725a49a8753cf4d870175ededc831e9"
  },
  {
    "url": "spssPic/18/1.jpg",
    "revision": "5ac2014cde9edf91f72a557ab63cc274"
  },
  {
    "url": "spssPic/18/10.jpg",
    "revision": "f1e20ed4236d4dfbe0bfe836ac0c67ac"
  },
  {
    "url": "spssPic/18/11.jpg",
    "revision": "a04117442fbeba8d64d69fd56e4707a0"
  },
  {
    "url": "spssPic/18/12.jpg",
    "revision": "772b7b1eaf1df75961a5f7f32c8bcb2e"
  },
  {
    "url": "spssPic/18/13.jpg",
    "revision": "528c756369be9dc5869586f32f13c0da"
  },
  {
    "url": "spssPic/18/2.jpg",
    "revision": "7939a2579a78832ca3ecb7c22468cf3f"
  },
  {
    "url": "spssPic/18/3.jpg",
    "revision": "c5e8a2e20be9d32f63a3ef6e9d12be2d"
  },
  {
    "url": "spssPic/18/4.jpg",
    "revision": "f60f5efca5aa35c8b3bcb6e97b63ef18"
  },
  {
    "url": "spssPic/18/5.jpg",
    "revision": "707a62edb9f630cfa9d7158540791de7"
  },
  {
    "url": "spssPic/18/6.jpg",
    "revision": "7484707a5fc047c28ef1e896e1f06122"
  },
  {
    "url": "spssPic/18/7.jpg",
    "revision": "fef98dab451d9841cc244b29960b6383"
  },
  {
    "url": "spssPic/18/8.jpg",
    "revision": "802b4ee6ef916fec6036e014cb59b950"
  },
  {
    "url": "spssPic/18/9.jpg",
    "revision": "3688d564d4715e17c76fd7325fa1274e"
  },
  {
    "url": "spssPic/2/1.jpg",
    "revision": "cdfb00bece4a646627c2b6bace5aed33"
  },
  {
    "url": "spssPic/2/2.jpg",
    "revision": "9cd3f67fd21fdf1f991d894296326260"
  },
  {
    "url": "spssPic/2/3.gif",
    "revision": "a2100e2942f3f7e08ff1867e55e163eb"
  },
  {
    "url": "spssPic/2/4.png",
    "revision": "a693355c6ef99b0d988bece97571dab7"
  },
  {
    "url": "spssPic/2/5.gif",
    "revision": "ecef110c5bf2f3b90a126220a4fe518d"
  },
  {
    "url": "spssPic/2/6.png",
    "revision": "089fc06c00cd38fb5f639419e6eba581"
  },
  {
    "url": "spssPic/2/7.jpg",
    "revision": "15b9ca38ab99a575e1de35c443d8cfbf"
  },
  {
    "url": "spssPic/2/8.png",
    "revision": "a96ddcf501376e212aea92bbd0e78a11"
  },
  {
    "url": "view.png",
    "revision": "da8443885965a32bc2537b3a24d62bca"
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
