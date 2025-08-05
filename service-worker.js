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
    "revision": "c95a46a482f2530e4879738e2830127a"
  },
  {
    "url": "assets/css/0.styles.94edebd6.css",
    "revision": "e3ce6f87dbc76bd5ec6bf117041eebeb"
  },
  {
    "url": "assets/img/db_v2.acd34e13.png",
    "revision": "acd34e13e758be5d08471913866cf00f"
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
    "url": "assets/js/1.959a7dda.js",
    "revision": "5e3ad8a1ab7a74fd9ca0c6c8dc003098"
  },
  {
    "url": "assets/js/10.d1f8a545.js",
    "revision": "bbbe1ecb5aa09721c1758701944fe43a"
  },
  {
    "url": "assets/js/11.83ee45e6.js",
    "revision": "91cee41f79b9b20b7a40a721592db981"
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
    "url": "assets/js/14.d8e1b48e.js",
    "revision": "f36d4068d557c401be6d00907ee0fab1"
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
    "url": "assets/js/18.8d0a14c5.js",
    "revision": "0ad418fac8aca16ca5fdceb62545e49d"
  },
  {
    "url": "assets/js/19.f098136a.js",
    "revision": "33621d71691dc1124b5fa21a680350f3"
  },
  {
    "url": "assets/js/2.cfd2aafd.js",
    "revision": "85402157cfe783c8609918253c084f76"
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
    "url": "assets/js/24.d3d3c175.js",
    "revision": "af1236e626fb73e97006f4719c0a962d"
  },
  {
    "url": "assets/js/25.3b0d5f0d.js",
    "revision": "908ae88d1619696472ee3259a9716ddc"
  },
  {
    "url": "assets/js/26.5696957f.js",
    "revision": "2d9ee3c868d9a9817e6517ba98979232"
  },
  {
    "url": "assets/js/27.aef0f6ec.js",
    "revision": "2729805ae7e0925c6ab29abe5e52da28"
  },
  {
    "url": "assets/js/28.3bddc70c.js",
    "revision": "94dab2d69d56f485f8d14b46f5edcc7c"
  },
  {
    "url": "assets/js/29.d384c07a.js",
    "revision": "f5a443b6ff17f31af21609e7c2af52f4"
  },
  {
    "url": "assets/js/3.799f8d22.js",
    "revision": "da69a2dbef0b863b9c67e4a40f9723d6"
  },
  {
    "url": "assets/js/30.69c0d040.js",
    "revision": "1e95e3f5227660c496b2c4b78f5ca3bc"
  },
  {
    "url": "assets/js/31.fb2b3451.js",
    "revision": "c173b0d74f2c939b8e18ca18fde98872"
  },
  {
    "url": "assets/js/32.e75403f7.js",
    "revision": "c11ecaf8e30293a558bf95db29dadb66"
  },
  {
    "url": "assets/js/33.cbb42dbf.js",
    "revision": "339061d706698a6cc4cb57cba8fc1ced"
  },
  {
    "url": "assets/js/34.06d3621c.js",
    "revision": "bb2e9c10e2e800d0e5c61c6e5f55f0ad"
  },
  {
    "url": "assets/js/35.340600fa.js",
    "revision": "ab7326cc3b52d98c7398e72c3ea4a71b"
  },
  {
    "url": "assets/js/36.2dd16318.js",
    "revision": "c829d76d00bb47291aa5b0c81f33ba48"
  },
  {
    "url": "assets/js/37.65d1c612.js",
    "revision": "1f41f6e16e869bfacc5fd2f25b153a4f"
  },
  {
    "url": "assets/js/38.a6667f32.js",
    "revision": "7362609e6ce2e4c58ce6afc6b6e2b69c"
  },
  {
    "url": "assets/js/39.91718eec.js",
    "revision": "b3d180d3ce6e9713c410686bd0326b3a"
  },
  {
    "url": "assets/js/4.4f3ff79f.js",
    "revision": "7f865ae9d9bfbefd13fcffa0825c9cd5"
  },
  {
    "url": "assets/js/40.f40ff10b.js",
    "revision": "7aa81b324de7339576a1781a52e6cab7"
  },
  {
    "url": "assets/js/41.36a8e38b.js",
    "revision": "4ff4d86a0f500483f77d7e467f73f400"
  },
  {
    "url": "assets/js/42.db11803e.js",
    "revision": "3cd4a11262978596ee5f706941070cc3"
  },
  {
    "url": "assets/js/43.516090da.js",
    "revision": "761c269dd3abcaa12469e4176b973e8f"
  },
  {
    "url": "assets/js/44.9470a868.js",
    "revision": "30f49f38038b1716648004fc645f78c1"
  },
  {
    "url": "assets/js/45.fd60a124.js",
    "revision": "b6ea782c44cde23444a12480da447b81"
  },
  {
    "url": "assets/js/46.9b7d7cc2.js",
    "revision": "ed2a39fc05e27353bb39660eb8821828"
  },
  {
    "url": "assets/js/47.69dd2a8d.js",
    "revision": "b7826a3cdb4a22b52461b0004e6c84b0"
  },
  {
    "url": "assets/js/48.d6f4eaad.js",
    "revision": "8d054c07275eec52b863c7c3b0f45207"
  },
  {
    "url": "assets/js/49.18b4f8ea.js",
    "revision": "34cd308e653989938683273de79169db"
  },
  {
    "url": "assets/js/5.b4cb2a6c.js",
    "revision": "1d76fccb80c9517893d9941d6e658f8d"
  },
  {
    "url": "assets/js/50.874af25a.js",
    "revision": "2d0df5ed12750d682156a5cccc83cbcb"
  },
  {
    "url": "assets/js/51.9b99ccc6.js",
    "revision": "bb290f8e4656b91d54a347fab30752be"
  },
  {
    "url": "assets/js/52.aa933f9d.js",
    "revision": "2f0bc5a56d221df1872c12f212483e74"
  },
  {
    "url": "assets/js/53.1495fec9.js",
    "revision": "852bd5781f6f663402f9147595d37226"
  },
  {
    "url": "assets/js/54.dd66def3.js",
    "revision": "1fc4c5e8b090065b364ec4b383a7dc78"
  },
  {
    "url": "assets/js/55.bfcf65ed.js",
    "revision": "2284f6c01a3061fcdff33054913d2de1"
  },
  {
    "url": "assets/js/56.1515f411.js",
    "revision": "b63bc03612e8db871fe315beed49689c"
  },
  {
    "url": "assets/js/57.5aa62846.js",
    "revision": "cbb594fe7928cb9df8c37271810b54a4"
  },
  {
    "url": "assets/js/58.db55929e.js",
    "revision": "0ce563b861e95c27fbb21bc19419d596"
  },
  {
    "url": "assets/js/59.8f6f45a4.js",
    "revision": "d13c4d1461babe03dd2b1bca9f84b309"
  },
  {
    "url": "assets/js/60.bb6f054d.js",
    "revision": "6d0f9a83d8593c49436ce2ac6c23a6d1"
  },
  {
    "url": "assets/js/61.c8602e95.js",
    "revision": "7c66a0ce3d22c95d4c35adf91a98e09d"
  },
  {
    "url": "assets/js/62.94ac2c96.js",
    "revision": "aae5f3f1bcdca5de0a19f6d36c6b2b38"
  },
  {
    "url": "assets/js/64.c33bc1e9.js",
    "revision": "706bced7368b34999a3c649f96f04236"
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
    "url": "assets/js/app.25566812.js",
    "revision": "9291e8cd0007989e55fe4dd2ca8bcc17"
  },
  {
    "url": "assets/js/vendors~docsearch.992c13e1.js",
    "revision": "e3f6a35ad9d78a6678af8afb901dcc00"
  },
  {
    "url": "author.png",
    "revision": "0bc4cf8823e3c83862ef5907dd58fe13"
  },
  {
    "url": "index.html",
    "revision": "0079dc47869a9b24c0f4567959d834a4"
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
    "revision": "4856cf0b755a07ce34c92b2b4b269b0b"
  },
  {
    "url": "lin/4thweek.html",
    "revision": "1974ac937272b5980bf7946552b9aa67"
  },
  {
    "url": "lin/apiDoc.html",
    "revision": "d918f6e742ab1cfe793cceaf25056701"
  },
  {
    "url": "lin/cocos1.html",
    "revision": "de0d2438c9a1bee1f1ebd293c47c7983"
  },
  {
    "url": "lin/dbchart.html",
    "revision": "3bd0505bbf8c0207c3c5724e96979570"
  },
  {
    "url": "lin/DBdoc_v2.html",
    "revision": "9cc3c90cb88e242123266020c933710d"
  },
  {
    "url": "lin/DBdoc.html",
    "revision": "cbbefa74d1cd2ccb6dc6a9705ac10f44"
  },
  {
    "url": "lin/IT1.html",
    "revision": "b9c0ee50aeaf34e1835b47e26cec5d89"
  },
  {
    "url": "lin/js1mod.html",
    "revision": "80bc0e22326991f4a69e63998ceafdf2"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "a384b1f9fdb47e85fc6b459f55be7249"
  },
  {
    "url": "lin/lxl1.html",
    "revision": "d59a713caeb3ebd0b8eb90412bf8aaa5"
  },
  {
    "url": "lin/mode.html",
    "revision": "b80e5bb45defc1bb8bd4f1ac5072690d"
  },
  {
    "url": "lin/path.html",
    "revision": "eafb55399b1462bc210a0ac621a5bc8b"
  },
  {
    "url": "lin/readingActivity.html",
    "revision": "1a26a9ad9eb33d55de03c52eec330abd"
  },
  {
    "url": "lin/readmeBackup.html",
    "revision": "b2050b0ef21a085df86d4f329e8b9133"
  },
  {
    "url": "lin/reportDevDoc.html",
    "revision": "b9caa04118bd37c3817109ceb010abbf"
  },
  {
    "url": "lin/rhj1.html",
    "revision": "dd360dc935326edb71f55787418e8c93"
  },
  {
    "url": "lin/rhj2.html",
    "revision": "b5ba0b4597c76b1fc3f4d58253b1e00a"
  },
  {
    "url": "lin/Russia.html",
    "revision": "4c7fffef2234a01c0e107f301dea8c06"
  },
  {
    "url": "lin/session1.html",
    "revision": "6461b76f476c00499120bb59b4842b6c"
  },
  {
    "url": "lin/session2.html",
    "revision": "60f3ea29f87d703583640fa37b2aa641"
  },
  {
    "url": "lin/session3.html",
    "revision": "828a2c4b392b2e6fc86a85b058c763da"
  },
  {
    "url": "lin/session4.html",
    "revision": "c1534c6452cfc232d78babe5c2e0de53"
  },
  {
    "url": "lin/session5.html",
    "revision": "605cfd9a39b5a139a6f912ac84d338d1"
  },
  {
    "url": "lin/session6.html",
    "revision": "95cb370e343a4876753ac43f8dbb05a4"
  },
  {
    "url": "lin/session7.html",
    "revision": "c4860272b8bb9c0a072691c6c866c084"
  },
  {
    "url": "lin/spssD1.html",
    "revision": "4b9084f75b477c1cf08ba65fc24d3c0e"
  },
  {
    "url": "lin/spssD10.html",
    "revision": "8ad419a725affeba0fd3ddc3c1a8ee1c"
  },
  {
    "url": "lin/spssD13.html",
    "revision": "5696f8b3f814fa37cf870d986e1caae4"
  },
  {
    "url": "lin/spssD17.html",
    "revision": "decfc91a67f8a4a095aed597526d4f36"
  },
  {
    "url": "lin/spssD18.html",
    "revision": "3460cdfc165b126c5c65598de6179a2c"
  },
  {
    "url": "lin/spssD18plus.html",
    "revision": "8279c401d46c3d6e35e88ac591d756fb"
  },
  {
    "url": "lin/spssD2.html",
    "revision": "0d25b05c904935a9a46dbe877b8ef0fc"
  },
  {
    "url": "lin/spssMaps.html",
    "revision": "5dd01dab03ee468ef13e7c076a18a618"
  },
  {
    "url": "lin/virtualBoxDoc.html",
    "revision": "b04912234d4cadd97138380838384dc2"
  },
  {
    "url": "lin/writingActivity.html",
    "revision": "a23156f49ee7454d8925da509d329778"
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
