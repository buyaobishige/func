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
    "revision": "06cf2ce414a82d7fd91fb030d1980373"
  },
  {
    "url": "assets/css/0.styles.94edebd6.css",
    "revision": "e3ce6f87dbc76bd5ec6bf117041eebeb"
  },
  {
    "url": "assets/img/DBstructure.21b5aba1.jpg",
    "revision": "21b5aba1b5e5678b13da3ab2200c89fb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a9f7af1d.js",
    "revision": "543cfdb644ea3aa96fce2582c022166a"
  },
  {
    "url": "assets/js/10.d1f8a545.js",
    "revision": "bbbe1ecb5aa09721c1758701944fe43a"
  },
  {
    "url": "assets/js/11.078d8202.js",
    "revision": "8a33f307fdabe3b6b67c3ddb4426378f"
  },
  {
    "url": "assets/js/12.5aa091df.js",
    "revision": "81980130c25d61ba8b5802b606560b95"
  },
  {
    "url": "assets/js/13.61f6c833.js",
    "revision": "405654945a4d05bf4a7773a74a13262a"
  },
  {
    "url": "assets/js/14.3e2891a9.js",
    "revision": "beaa3d7f6cfecd15599596119d0fa412"
  },
  {
    "url": "assets/js/15.a889dc1b.js",
    "revision": "133e8279073481fb2b0b55a94f11cbf6"
  },
  {
    "url": "assets/js/16.291ac9d9.js",
    "revision": "c18c2f407a9ac779d81c50664f577d1b"
  },
  {
    "url": "assets/js/17.d6183440.js",
    "revision": "6a41a172fc02ac3925ae10660279d1ba"
  },
  {
    "url": "assets/js/18.eb871ec0.js",
    "revision": "68bdf5c3d60f9e12d7889b5837a709a1"
  },
  {
    "url": "assets/js/19.95cdd93b.js",
    "revision": "21bfe5b266718e635f25000454d59fc2"
  },
  {
    "url": "assets/js/2.c380f228.js",
    "revision": "6e9550a930344bd7b38ec075592674b5"
  },
  {
    "url": "assets/js/20.c7157ec1.js",
    "revision": "44006e9507d2e4353515160873dbd230"
  },
  {
    "url": "assets/js/21.974e2450.js",
    "revision": "91760822049d9cbe9abcade5efb5f0dd"
  },
  {
    "url": "assets/js/22.7a8b72fa.js",
    "revision": "9bfba1892bb3b92d76dd3b510bdf5f98"
  },
  {
    "url": "assets/js/23.82332a2a.js",
    "revision": "2f6b8dd8f0e54a2b2c477c8d1b74a557"
  },
  {
    "url": "assets/js/24.9f6cb8ea.js",
    "revision": "d97c44f7e340daf675e05486ee036eb9"
  },
  {
    "url": "assets/js/25.3ec85ecd.js",
    "revision": "5c583539740221561bce38371b07eb85"
  },
  {
    "url": "assets/js/26.88baf5d5.js",
    "revision": "69a49cd8cbd46c48a4c448f9eeab7b3c"
  },
  {
    "url": "assets/js/27.98f807d5.js",
    "revision": "eb7a7d79e0533310c2cfcad23318da44"
  },
  {
    "url": "assets/js/28.0f33beeb.js",
    "revision": "0b7d06d01b4dddafc6609d324ace0a72"
  },
  {
    "url": "assets/js/29.2036486b.js",
    "revision": "2f54b0ab679613364d83feffb2e936c0"
  },
  {
    "url": "assets/js/3.799f8d22.js",
    "revision": "da69a2dbef0b863b9c67e4a40f9723d6"
  },
  {
    "url": "assets/js/30.14658768.js",
    "revision": "98303e2168704c8ecfdd210469260cc5"
  },
  {
    "url": "assets/js/31.2a5c59e1.js",
    "revision": "29fbe88df7b5ddeb2983febd46b01213"
  },
  {
    "url": "assets/js/32.4fea6c8b.js",
    "revision": "24c68200f87e40f627e991b3cc0fd1f0"
  },
  {
    "url": "assets/js/33.22806e6c.js",
    "revision": "e3f2c240bca4cee21490e41006c5e6a6"
  },
  {
    "url": "assets/js/34.c03e8a1d.js",
    "revision": "99857e48415198c8046ba1c2af4fd0ce"
  },
  {
    "url": "assets/js/35.14b3adff.js",
    "revision": "0d137498d37ad1eda7e005ba847ceab9"
  },
  {
    "url": "assets/js/36.08aef44a.js",
    "revision": "d0895302cfb9e45abef10358930257fe"
  },
  {
    "url": "assets/js/37.93888716.js",
    "revision": "0134aad242d5f10084809f5f9f747712"
  },
  {
    "url": "assets/js/38.c732efb3.js",
    "revision": "64166b369790be5cac91e3bbc1483cd3"
  },
  {
    "url": "assets/js/39.c687a350.js",
    "revision": "47485c4e1220cd009d238dd67e5ad7da"
  },
  {
    "url": "assets/js/4.7363cd12.js",
    "revision": "bc8db87513de6d6a9400cc1c6684020a"
  },
  {
    "url": "assets/js/40.8ff9390c.js",
    "revision": "cfdf799946b79752ff138dd9f84b772d"
  },
  {
    "url": "assets/js/41.0f29434e.js",
    "revision": "7fe0c805d7768eca7a258bb17c8e4f9a"
  },
  {
    "url": "assets/js/42.c21faaff.js",
    "revision": "5528b98687e189e2fbe56c5b1936a6b6"
  },
  {
    "url": "assets/js/43.5c1a2f52.js",
    "revision": "03dde20f2f34c89c5cf97e479a269925"
  },
  {
    "url": "assets/js/44.aa413be3.js",
    "revision": "81735b0fd779eafa70d80daea460f1be"
  },
  {
    "url": "assets/js/45.a07c7a2c.js",
    "revision": "925d476569bdcdcf8a15dadfb7257b43"
  },
  {
    "url": "assets/js/46.d9134ced.js",
    "revision": "4f63ee13e5fbbf669c6b62e09f04e88c"
  },
  {
    "url": "assets/js/47.71d801e7.js",
    "revision": "2f3749adbfdb75b47a97aabe3ea6364b"
  },
  {
    "url": "assets/js/48.3f9bd075.js",
    "revision": "5913c8307c2a8f8f16364c55386af0b1"
  },
  {
    "url": "assets/js/49.6a3947d3.js",
    "revision": "7203ee34e3267cad0e7b05d996edc474"
  },
  {
    "url": "assets/js/5.87edd7a2.js",
    "revision": "43e4bfaf97147652c6efb111c050044c"
  },
  {
    "url": "assets/js/50.26216a5e.js",
    "revision": "d362b3c4bded9374f01955752c50e95a"
  },
  {
    "url": "assets/js/51.fd0ef651.js",
    "revision": "2a4b93807801e96cb8765693a89f843d"
  },
  {
    "url": "assets/js/52.0c7aa178.js",
    "revision": "049f490f60c2b8f9ed466b338bf5812a"
  },
  {
    "url": "assets/js/53.382cbffa.js",
    "revision": "542f5ef3d2384a4ee9a0f838c4007ac3"
  },
  {
    "url": "assets/js/54.31b4bdb8.js",
    "revision": "6cc89ef39b539162eeaed92da3d3b67a"
  },
  {
    "url": "assets/js/55.5c404e11.js",
    "revision": "6a7e94b02686a1daca5f5cb8e2e58565"
  },
  {
    "url": "assets/js/56.59377cad.js",
    "revision": "3b2f5a05be2e21702a364fe9ea895065"
  },
  {
    "url": "assets/js/57.1885e356.js",
    "revision": "3dcbaac1c999203a982fe20b63c888ed"
  },
  {
    "url": "assets/js/58.42707652.js",
    "revision": "45f047a280dafbf54e63eaeb25d017a9"
  },
  {
    "url": "assets/js/59.c1778a39.js",
    "revision": "127b170ad7495f81604dd3b7966fe7fd"
  },
  {
    "url": "assets/js/60.4bb5d588.js",
    "revision": "7fe0b074bbe70303c6dfe78a1b292892"
  },
  {
    "url": "assets/js/61.6a4faa0d.js",
    "revision": "3425f0fc21fc2aab5c6dd967af19f46c"
  },
  {
    "url": "assets/js/63.31f37935.js",
    "revision": "f067b531b2fa2d01e0dff47b53a57191"
  },
  {
    "url": "assets/js/8.bcd7b08f.js",
    "revision": "38b613e613a75c0c67658b1e7449920e"
  },
  {
    "url": "assets/js/9.fb5567ee.js",
    "revision": "749c84d53691c1b73015ebd9e0077249"
  },
  {
    "url": "assets/js/app.7ff5feb5.js",
    "revision": "aa5b389fc7335526ad495242e26c1c68"
  },
  {
    "url": "assets/js/vendors~docsearch.19f3eaf9.js",
    "revision": "33c795b96edabcd150776634e6cc28e2"
  },
  {
    "url": "author.png",
    "revision": "0bc4cf8823e3c83862ef5907dd58fe13"
  },
  {
    "url": "index.html",
    "revision": "2e554d7c541f4de64722e7acc17d4335"
  },
  {
    "url": "IRT/1.jpg",
    "revision": "55adf3144cd07d4048110e795aeeef9f"
  },
  {
    "url": "IRT/1.png",
    "revision": "9fc2315ff4648ae56ac057bfcaa82371"
  },
  {
    "url": "IRT/2.jpg",
    "revision": "89c316f92d15216b9e477707d53673fc"
  },
  {
    "url": "IRT/3.jpg",
    "revision": "e3a58ed99953175951b174daebcb7edf"
  },
  {
    "url": "IRT/4.jpg",
    "revision": "e69f7d8f337e49a189414c056eeb0507"
  },
  {
    "url": "IRT/5.jpg",
    "revision": "a3b80b4e88a9e8d689024a783df95a8e"
  },
  {
    "url": "lin/×JavaScript-1.html",
    "revision": "b73839282b36d82fe04e1957a9b5e4b6"
  },
  {
    "url": "lin/4thweek.html",
    "revision": "6176d41b9ba7682f40a061bf6e12321b"
  },
  {
    "url": "lin/apiDoc.html",
    "revision": "f38a72b7a04b7f7b37b6751abbe48f5d"
  },
  {
    "url": "lin/cocos1.html",
    "revision": "18a813c9c833373bb0c35298ff5224b4"
  },
  {
    "url": "lin/dbchart.html",
    "revision": "350e0d21a2f68b5fa85523b2b2ec9cb7"
  },
  {
    "url": "lin/DBdoc.html",
    "revision": "cbf4fc5e01ec163c49e940a0a7c88a08"
  },
  {
    "url": "lin/IT1.html",
    "revision": "de812fcdd6f4d84bd25075299f46fd63"
  },
  {
    "url": "lin/js1mod.html",
    "revision": "ee7c2775c2cca457c81527ff18c17b39"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "2c1f79506263ea1b5d1e4e03f3ba2208"
  },
  {
    "url": "lin/lxl1.html",
    "revision": "2d1785dabaef37cbbca9bbca9c6a75c0"
  },
  {
    "url": "lin/mode.html",
    "revision": "44f074098329a6a1d212e09c02e7e4d5"
  },
  {
    "url": "lin/path.html",
    "revision": "30ba0c83a6b8509de8a0bfe59d467f5e"
  },
  {
    "url": "lin/readingActivity.html",
    "revision": "3bcb686b4de2b73161d73c29b067c31c"
  },
  {
    "url": "lin/readmeBackup.html",
    "revision": "b1c545d965dc1c7ef49e46a676837232"
  },
  {
    "url": "lin/reportDevDoc.html",
    "revision": "e8a78e1b3998ee3291970523771006d7"
  },
  {
    "url": "lin/rhj1.html",
    "revision": "81854a6b786811a75107e79ba50d74f9"
  },
  {
    "url": "lin/rhj2.html",
    "revision": "aa43171fc3c99aaa6c2590323d1f3807"
  },
  {
    "url": "lin/Russia.html",
    "revision": "4f8d359b44e683b296d524bdbf68c492"
  },
  {
    "url": "lin/session1.html",
    "revision": "78fd88c13fdc8742a12c79163a97890f"
  },
  {
    "url": "lin/session2.html",
    "revision": "0eab23225e0a72a875cd8d284d10c924"
  },
  {
    "url": "lin/session3.html",
    "revision": "572b3a56f1da0dcb19cbc2ccbcfd70c2"
  },
  {
    "url": "lin/session4.html",
    "revision": "444e44a14efdaad0833b29d899eb191d"
  },
  {
    "url": "lin/session5.html",
    "revision": "4860ebd09c8681c79054588cc222a12e"
  },
  {
    "url": "lin/session6.html",
    "revision": "8de4e5836ea889864c008146f17b1968"
  },
  {
    "url": "lin/session7.html",
    "revision": "14350887354414941fc8241247b34b19"
  },
  {
    "url": "lin/spssD1.html",
    "revision": "b4d8caaa076dbd01defb2e0355c2bc03"
  },
  {
    "url": "lin/spssD10.html",
    "revision": "4f5e33b069058a0a30c2e20680b9d1b6"
  },
  {
    "url": "lin/spssD13.html",
    "revision": "53d138a768e7081115f8486351e4a3d5"
  },
  {
    "url": "lin/spssD17.html",
    "revision": "59eedb8493262954992f16106dbbc6ff"
  },
  {
    "url": "lin/spssD18.html",
    "revision": "336bd17ac73e913ccf96359cbd27f70b"
  },
  {
    "url": "lin/spssD18plus.html",
    "revision": "9382bafc784e60500c736dfff8224a6b"
  },
  {
    "url": "lin/spssD2.html",
    "revision": "afaeb11c8f31d26b3839ae2bd5df139f"
  },
  {
    "url": "lin/spssMaps.html",
    "revision": "0d5b39b875612ee1a4fa03a09760f029"
  },
  {
    "url": "lin/virtualBoxDoc.html",
    "revision": "9c61351c7f0bf03ff064f76019424fba"
  },
  {
    "url": "lin/writingActivity.html",
    "revision": "d3709ebc7b373325530e8f37e5b51af1"
  },
  {
    "url": "logo.svg",
    "revision": "11c23c586d82dcecf339b9ad33129dda"
  },
  {
    "url": "logo32.svg",
    "revision": "4f3a9c4ab1b77af57b5aa064dcf161e7"
  },
  {
    "url": "logo48.svg",
    "revision": "37ae29d822cb94b25e96aecfe6bc9d41"
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
