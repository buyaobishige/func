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
    "revision": "40ee96efa82ef01a924dac28d94d4eb5"
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
    "url": "assets/js/23.3ebb0e0e.js",
    "revision": "b4b04ab443397098c0bc2b54ec727cdc"
  },
  {
    "url": "assets/js/24.bd1ae17d.js",
    "revision": "81a2fe31414eea5ea9972032c9a50abf"
  },
  {
    "url": "assets/js/25.a077aa68.js",
    "revision": "cc65756f04d4552e3bc94c7b1029a00e"
  },
  {
    "url": "assets/js/26.78277bc2.js",
    "revision": "4a662666c6623db798b6285c83dad717"
  },
  {
    "url": "assets/js/27.d09bec49.js",
    "revision": "0ad79613baa04a2ef8b6a4e1f73b279f"
  },
  {
    "url": "assets/js/28.0f33beeb.js",
    "revision": "0b7d06d01b4dddafc6609d324ace0a72"
  },
  {
    "url": "assets/js/29.77c9c88a.js",
    "revision": "76e70cdd1aa992eb70f4d43f300bf090"
  },
  {
    "url": "assets/js/3.799f8d22.js",
    "revision": "da69a2dbef0b863b9c67e4a40f9723d6"
  },
  {
    "url": "assets/js/30.245ad920.js",
    "revision": "bb8eb217883c36205c004a992234851f"
  },
  {
    "url": "assets/js/31.83e8fb1f.js",
    "revision": "c77a0f4ee322c7f7b498adfa31d3a339"
  },
  {
    "url": "assets/js/32.2270580d.js",
    "revision": "3c74bf36705464b487f56caaa60bf065"
  },
  {
    "url": "assets/js/33.07bcea02.js",
    "revision": "d6500ed45c5f26c6fc008f4848e8105d"
  },
  {
    "url": "assets/js/34.db9b1715.js",
    "revision": "6d0f80b0d24d7d2dd6352ca5d4512f66"
  },
  {
    "url": "assets/js/35.3b8ad44f.js",
    "revision": "2dd90a59c454aa1d2b96af602887e276"
  },
  {
    "url": "assets/js/36.483b1629.js",
    "revision": "4aad2e58a3a13ef35ccf56a797dad7c8"
  },
  {
    "url": "assets/js/37.1918c11b.js",
    "revision": "dc521ba4cb569407ff0123bc205609a5"
  },
  {
    "url": "assets/js/38.fd3cd19b.js",
    "revision": "0186f0b292c84a936e7fb60db9e9377b"
  },
  {
    "url": "assets/js/39.fe3c34ea.js",
    "revision": "91999d82b7ce23b0f2f4f94156457c48"
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
    "url": "assets/js/41.3790e986.js",
    "revision": "6d5380b3229cdae0f54a38e49ceecce8"
  },
  {
    "url": "assets/js/42.c7c2e543.js",
    "revision": "b49246fafb08abba35a0bd70efcdf320"
  },
  {
    "url": "assets/js/43.392eca6a.js",
    "revision": "a16f7bfd186fd2975ddb747ce3692498"
  },
  {
    "url": "assets/js/44.40fd4348.js",
    "revision": "a8b41f35da30b7e67178aa6878b833d4"
  },
  {
    "url": "assets/js/45.01f80dfe.js",
    "revision": "4c1d5feb7cc29dca946c07c430350b76"
  },
  {
    "url": "assets/js/46.9121ea0c.js",
    "revision": "70d276995626498472afa66ed3574132"
  },
  {
    "url": "assets/js/47.fcc34d9c.js",
    "revision": "05d8337b29db9b041d90db50fb36f46d"
  },
  {
    "url": "assets/js/48.d8a5141d.js",
    "revision": "281c93d10bff4c7bf5c454daab61326e"
  },
  {
    "url": "assets/js/49.e6441d80.js",
    "revision": "eb97f02a5a4b9ebc3a62f5b7c8779ebb"
  },
  {
    "url": "assets/js/5.87edd7a2.js",
    "revision": "43e4bfaf97147652c6efb111c050044c"
  },
  {
    "url": "assets/js/50.b86f111e.js",
    "revision": "99d1451a9e4624e9e067d5410c9e30ab"
  },
  {
    "url": "assets/js/51.ca943321.js",
    "revision": "fd9925984706a843f5866d29aa7e8cac"
  },
  {
    "url": "assets/js/52.a47e3940.js",
    "revision": "2db533934a66cd3f5819e9e4a53060bc"
  },
  {
    "url": "assets/js/53.467f2022.js",
    "revision": "94dd65c9a49ccc1d9f0641687a6ec7b9"
  },
  {
    "url": "assets/js/54.73bf5b86.js",
    "revision": "3342bebcd713e52aa4eccf3867375f79"
  },
  {
    "url": "assets/js/55.3aaee055.js",
    "revision": "2257d6fab1f5030646f068e9b1b58c2b"
  },
  {
    "url": "assets/js/56.7bb7cb6a.js",
    "revision": "589ccaa914705908a643197dded373b8"
  },
  {
    "url": "assets/js/57.a87e9f48.js",
    "revision": "8c9ad559a97d5c54de9687866bc5fdaa"
  },
  {
    "url": "assets/js/58.c997bd01.js",
    "revision": "c657ccbc71060708db72c26ef81289a9"
  },
  {
    "url": "assets/js/59.26e5814c.js",
    "revision": "b14a4d1869d6a999dd62d73c12abe8f6"
  },
  {
    "url": "assets/js/60.3667b8ff.js",
    "revision": "288fa1c52f47fe477094a1946e267bf1"
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
    "url": "assets/js/app.0d186669.js",
    "revision": "263e8d5860f48bd76847eb12fb6ad01f"
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
    "revision": "83ad172af46410d6259492fdf22c5160"
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
    "revision": "e97f60b6f1369e40607800cd6a69d3ca"
  },
  {
    "url": "lin/4thweek.html",
    "revision": "046c9350d683c276940cca3585eae438"
  },
  {
    "url": "lin/cocos1.html",
    "revision": "c9d91f97543b012b02e200c8fe05d888"
  },
  {
    "url": "lin/dbchart.html",
    "revision": "98e4acae8e723d6c33432c054f9ee69a"
  },
  {
    "url": "lin/DBdoc.html",
    "revision": "a9c426cd43c0aa93ffff1a29baacb347"
  },
  {
    "url": "lin/IT1.html",
    "revision": "a51f4f825b1b0087d3f2a4f43edabff0"
  },
  {
    "url": "lin/js1mod.html",
    "revision": "6a9f83527a0e06fa150416f501fb07e9"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "36dbf596d37f53847180147f58f17a0e"
  },
  {
    "url": "lin/lxl1.html",
    "revision": "bf0234c80e145b1db095e74cb0074555"
  },
  {
    "url": "lin/mode.html",
    "revision": "ece017281a88be0a4c809819c2490682"
  },
  {
    "url": "lin/path.html",
    "revision": "fb9ea086d9fd73d5b6dcea13f623b95e"
  },
  {
    "url": "lin/readingActivity.html",
    "revision": "2d86ef3f193cb238af45f21010fb3c74"
  },
  {
    "url": "lin/readmeBackup.html",
    "revision": "f78028099a6e908d6ecfbe3c095878fd"
  },
  {
    "url": "lin/reportDevDoc.html",
    "revision": "d82d5fe54bf82508c41684f60bdec7c5"
  },
  {
    "url": "lin/rhj1.html",
    "revision": "eb9e3fb85551be89ac9cefe2b5860b62"
  },
  {
    "url": "lin/rhj2.html",
    "revision": "0928469dde974718645a4d057d6baa41"
  },
  {
    "url": "lin/Russia.html",
    "revision": "ff7e5f93b37d242ea404da765ded5871"
  },
  {
    "url": "lin/session1.html",
    "revision": "4b9b3be2604b433eee0412b74717e48a"
  },
  {
    "url": "lin/session2.html",
    "revision": "15fae0b52ee6bc2f11e4e11597456a9b"
  },
  {
    "url": "lin/session3.html",
    "revision": "53446e48a5e3b8cab3859fc832fe5917"
  },
  {
    "url": "lin/session4.html",
    "revision": "949113eef297d4849c43db63c218b76f"
  },
  {
    "url": "lin/session5.html",
    "revision": "f897addd1fb01bff31c53dd8ac4fb8e5"
  },
  {
    "url": "lin/session6.html",
    "revision": "be5633082a0d71e98701d2829a92e9c2"
  },
  {
    "url": "lin/session7.html",
    "revision": "9cc36acb48562bd7ded67cbbb68e5799"
  },
  {
    "url": "lin/spssD1.html",
    "revision": "93ad0ce93da8a0921ffc4f03de677d74"
  },
  {
    "url": "lin/spssD10.html",
    "revision": "a7f55af9e9ca83edddfa145f74bd2a31"
  },
  {
    "url": "lin/spssD13.html",
    "revision": "6c0ed01381dd5982230439ea4dc0b34b"
  },
  {
    "url": "lin/spssD17.html",
    "revision": "62ca10bf4fdd572712c6e0701b90210d"
  },
  {
    "url": "lin/spssD18.html",
    "revision": "27ebdc3f4297ac528266b9be15002065"
  },
  {
    "url": "lin/spssD18plus.html",
    "revision": "e633d6190cc5317199399a78ea61940f"
  },
  {
    "url": "lin/spssD2.html",
    "revision": "31289e716def9060c85a0de403e3f89b"
  },
  {
    "url": "lin/spssMaps.html",
    "revision": "5b4d8ff655f796d211b2c11c282c49a6"
  },
  {
    "url": "lin/virtualBoxDoc.html",
    "revision": "176261db4fb860f876db6c4fd690d291"
  },
  {
    "url": "lin/writingActivity.html",
    "revision": "25f96587c07f4625357e1d4a23419f01"
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
