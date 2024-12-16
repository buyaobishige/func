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
    "revision": "9bd5e536149193b50c8ccd49fd408d5a"
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
    "url": "assets/js/14.58ed5166.js",
    "revision": "ed1c64285d55b96c70a3fd92ae56cb7f"
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
    "url": "assets/js/19.67ef6496.js",
    "revision": "682ccff0121cab98fedc6b8e405d3374"
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
    "url": "assets/js/23.b704adc3.js",
    "revision": "32e09f9ada1401b4d77f4030eac43f14"
  },
  {
    "url": "assets/js/24.515d142c.js",
    "revision": "2acc6c6ecf69e0f4b4bd168ef1176241"
  },
  {
    "url": "assets/js/25.2b155bc6.js",
    "revision": "e4b79a3937d821ff82a4d7e6201ac2e5"
  },
  {
    "url": "assets/js/26.8d2c317e.js",
    "revision": "9671b75acaadf72eeb2c4f60c0ee2c35"
  },
  {
    "url": "assets/js/27.fad01a11.js",
    "revision": "c2b159d860d6b7b7e2b36ca0582d4101"
  },
  {
    "url": "assets/js/28.36585480.js",
    "revision": "af54bd7f11ae4a04b09c899563a80b9c"
  },
  {
    "url": "assets/js/29.cd2efffa.js",
    "revision": "ecc4b462db53958db5b5ee5085219b64"
  },
  {
    "url": "assets/js/3.799f8d22.js",
    "revision": "da69a2dbef0b863b9c67e4a40f9723d6"
  },
  {
    "url": "assets/js/30.2341ac78.js",
    "revision": "ac6296b74ea0ac667359565b5130ad7a"
  },
  {
    "url": "assets/js/31.45b6903a.js",
    "revision": "cdde1844ed9c7e66e1b9156f106a8905"
  },
  {
    "url": "assets/js/32.0e20d0f5.js",
    "revision": "69ec9735de9bd361ef11c278a37bcfb6"
  },
  {
    "url": "assets/js/33.55f7718a.js",
    "revision": "484e50be20fcdde914b4b7d25c469f67"
  },
  {
    "url": "assets/js/34.7fda71aa.js",
    "revision": "df09bc6e1bc6aa397fb42077af304a43"
  },
  {
    "url": "assets/js/35.06dde679.js",
    "revision": "8e40999e8fd0321525a1111e57e37c8f"
  },
  {
    "url": "assets/js/36.e0d6b238.js",
    "revision": "5b8f1c4722b04a29257c5601c73542cd"
  },
  {
    "url": "assets/js/37.1918c11b.js",
    "revision": "dc521ba4cb569407ff0123bc205609a5"
  },
  {
    "url": "assets/js/38.a0b48add.js",
    "revision": "61bb9866c73075e42dd42d637bfff4c2"
  },
  {
    "url": "assets/js/39.ef65c0c2.js",
    "revision": "35958115a0c7d7fdf777593e03428f89"
  },
  {
    "url": "assets/js/4.7363cd12.js",
    "revision": "bc8db87513de6d6a9400cc1c6684020a"
  },
  {
    "url": "assets/js/40.d2770d55.js",
    "revision": "c594b0eec69c3220211505927208deab"
  },
  {
    "url": "assets/js/41.bef886ac.js",
    "revision": "890bd7d935de32270f9725a8dabf3822"
  },
  {
    "url": "assets/js/42.65f85996.js",
    "revision": "06f4e2e7795a134c7676b3ff28f870e7"
  },
  {
    "url": "assets/js/43.51896316.js",
    "revision": "710ca1e7a404be5ba6ee3bc302305ff2"
  },
  {
    "url": "assets/js/44.235f0c25.js",
    "revision": "62667fc4b4b4030d961687626cda0131"
  },
  {
    "url": "assets/js/45.81636bf5.js",
    "revision": "aafd7f79875e97cbed294546d2166383"
  },
  {
    "url": "assets/js/46.9121ea0c.js",
    "revision": "70d276995626498472afa66ed3574132"
  },
  {
    "url": "assets/js/47.7f1df1aa.js",
    "revision": "138a0d9ddaa0bc5a359373238d56d2b6"
  },
  {
    "url": "assets/js/48.954b27e0.js",
    "revision": "a3e6b71046b0b87fb4366a6c0a7666c6"
  },
  {
    "url": "assets/js/49.1f8a90fb.js",
    "revision": "a2a070a5bf9ec40fd71bed1b073ba011"
  },
  {
    "url": "assets/js/5.87edd7a2.js",
    "revision": "43e4bfaf97147652c6efb111c050044c"
  },
  {
    "url": "assets/js/50.eab81835.js",
    "revision": "b946f3293c34e8a71ff58c9d85ea8eff"
  },
  {
    "url": "assets/js/51.cbbafa9b.js",
    "revision": "738a7d639da0f0a76fb3e995d991d12e"
  },
  {
    "url": "assets/js/52.a8778055.js",
    "revision": "264785bdd5ee8bf8cb2852a019e1ebf5"
  },
  {
    "url": "assets/js/53.1e4f6b1e.js",
    "revision": "d446e4e1f10d5c8757d68e09fedbe7de"
  },
  {
    "url": "assets/js/54.73bf5b86.js",
    "revision": "3342bebcd713e52aa4eccf3867375f79"
  },
  {
    "url": "assets/js/55.e6863e02.js",
    "revision": "a1f6bedbd84a1f6ec5a5d299c0abeb2a"
  },
  {
    "url": "assets/js/56.42ac17db.js",
    "revision": "0c511e019c64966c14f9a6631bd85d59"
  },
  {
    "url": "assets/js/57.4cdfd10b.js",
    "revision": "423128ec7b70143f19783bea86e7be04"
  },
  {
    "url": "assets/js/58.235a0951.js",
    "revision": "5b0dd4a74994ca1ac7c7bdd3396ac74a"
  },
  {
    "url": "assets/js/59.1716bfcd.js",
    "revision": "09bf88b0d8aca57c2d58f2892caedf51"
  },
  {
    "url": "assets/js/60.8330aabc.js",
    "revision": "19e87f558ae1226a325782b491e21c73"
  },
  {
    "url": "assets/js/62.50d2d4d0.js",
    "revision": "d5d23bdbf1a9d23b0b72ad52d7c88263"
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
    "url": "assets/js/app.0c4153f0.js",
    "revision": "ca9f31d5a6e12860878d0b681e51f7e8"
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
    "revision": "e35c4b4320cf904788bba89ead9aec5c"
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
    "revision": "8365885689eab735743adcdb8320dfba"
  },
  {
    "url": "lin/4thweek.html",
    "revision": "6e2337d36ddc9d89a8edc8daa46ed8ef"
  },
  {
    "url": "lin/cocos1.html",
    "revision": "1035659f619fef6d919caf4f640a3355"
  },
  {
    "url": "lin/dbchart.html",
    "revision": "acef395842655233b445b51a9cfe64f2"
  },
  {
    "url": "lin/DBdoc.html",
    "revision": "a4d4f7946e8e0703615b898d70a52a76"
  },
  {
    "url": "lin/IT1.html",
    "revision": "68360f645cd9a45981f849986b114448"
  },
  {
    "url": "lin/js1mod.html",
    "revision": "e3137953b0dd4c09ae04b83fd3f9a456"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "36a088f33edf9b2bb8deb69de838a6d7"
  },
  {
    "url": "lin/lxl1.html",
    "revision": "a92b20b45adc06389d13c570dc809bc0"
  },
  {
    "url": "lin/mode.html",
    "revision": "05a76eb04c2d1c43a5ae5a18c13080e6"
  },
  {
    "url": "lin/path.html",
    "revision": "2f90a46d4d215d796e3395e9bffe8332"
  },
  {
    "url": "lin/readingActivity.html",
    "revision": "e03fe38e141e441857f37b39b0e60b8d"
  },
  {
    "url": "lin/readmeBackup.html",
    "revision": "29d1e897732c06b085b9683c4a86a201"
  },
  {
    "url": "lin/reportDevDoc.html",
    "revision": "88dd325f1a6c34bd5a1b5bcf6d1dbac0"
  },
  {
    "url": "lin/rhj1.html",
    "revision": "f530e3faa04b85aedbd6f3df5d5bdf28"
  },
  {
    "url": "lin/rhj2.html",
    "revision": "b791c3efca1d3743ad083caed8fa5162"
  },
  {
    "url": "lin/Russia.html",
    "revision": "b2845ab619212d4d64847b69be56cfdc"
  },
  {
    "url": "lin/session1.html",
    "revision": "112c8d15536569d04648e1090aff23a8"
  },
  {
    "url": "lin/session2.html",
    "revision": "d9c149db6a9636279a9c28edbd7b5d51"
  },
  {
    "url": "lin/session3.html",
    "revision": "41f7480450abc4f0f4777606b1a20e49"
  },
  {
    "url": "lin/session4.html",
    "revision": "cdda2e20fcd9c60f32ac65717bdc9cce"
  },
  {
    "url": "lin/session5.html",
    "revision": "5442b55bf0f2fb917df34eef56f9ce54"
  },
  {
    "url": "lin/session6.html",
    "revision": "943fd48771cc9536b6a56948f43d8797"
  },
  {
    "url": "lin/session7.html",
    "revision": "e961b608b2223caa662943ea8c6b41e8"
  },
  {
    "url": "lin/spssD1.html",
    "revision": "612a201823178e2bdca55f35aefb421f"
  },
  {
    "url": "lin/spssD10.html",
    "revision": "778068c37eaf239559b1ed83e79b4a71"
  },
  {
    "url": "lin/spssD13.html",
    "revision": "4b35954a2e8907b3e13304da43987a3d"
  },
  {
    "url": "lin/spssD17.html",
    "revision": "74f23c0486c76283d3a303abd92f1393"
  },
  {
    "url": "lin/spssD18.html",
    "revision": "ca9fb5ec9b83e8b56c335be7ebb1d831"
  },
  {
    "url": "lin/spssD18plus.html",
    "revision": "c35a8e47398164da416ea9e3ac76639a"
  },
  {
    "url": "lin/spssD2.html",
    "revision": "ea71c51a5177cdaee242614cd857e06c"
  },
  {
    "url": "lin/spssMaps.html",
    "revision": "758500ea5ef03ed446033df74a6584a1"
  },
  {
    "url": "lin/virtualBoxDoc.html",
    "revision": "a72f3c64dbd1b2b3d7f252087e5d5fe5"
  },
  {
    "url": "lin/writingActivity.html",
    "revision": "8e2956d882ea4881ad8f2832ae8953a1"
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
