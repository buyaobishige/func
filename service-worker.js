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
    "revision": "008219b51b8aec9babc57d440b5fe8c6"
  },
  {
    "url": "assets/css/0.styles.94edebd6.css",
    "revision": "e3ce6f87dbc76bd5ec6bf117041eebeb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e77f6f47.js",
    "revision": "2e911e8624624f8f107260c2c8d956da"
  },
  {
    "url": "assets/js/10.d1f8a545.js",
    "revision": "bbbe1ecb5aa09721c1758701944fe43a"
  },
  {
    "url": "assets/js/11.d8623134.js",
    "revision": "e3150859510d80db06ee0521e114aff3"
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
    "url": "assets/js/14.b747bb05.js",
    "revision": "4a02fd9e81245b0efe69658f1f505231"
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
    "url": "assets/js/18.b35b7245.js",
    "revision": "36868ee6f2a5ea003f5109de61955043"
  },
  {
    "url": "assets/js/19.490fba7c.js",
    "revision": "0dd07f38f67ebc87762c9db17664aca5"
  },
  {
    "url": "assets/js/2.30a15f0a.js",
    "revision": "dedd18cb13cf8f9675d7e25799c298b3"
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
    "url": "assets/js/23.5c9c9cf2.js",
    "revision": "c5b6fa0126bb8a7f3b6b9b6d83a88ca9"
  },
  {
    "url": "assets/js/24.5ab80d09.js",
    "revision": "a3895466a20ad3cf297c52a79007d3bd"
  },
  {
    "url": "assets/js/25.40a43981.js",
    "revision": "fef31b00c544ffa95909b8e22ff37023"
  },
  {
    "url": "assets/js/26.7a6bb826.js",
    "revision": "912563da2a2ae75b8970d2c4b88897b7"
  },
  {
    "url": "assets/js/27.282604c5.js",
    "revision": "f5e2864976e0a948b66f1d20ad69df1f"
  },
  {
    "url": "assets/js/28.404f1918.js",
    "revision": "0baf996db4aacdb239d97a5ebf0d88af"
  },
  {
    "url": "assets/js/29.1cc0663d.js",
    "revision": "abea6d82323bd6e66242034b0e338a14"
  },
  {
    "url": "assets/js/3.799f8d22.js",
    "revision": "da69a2dbef0b863b9c67e4a40f9723d6"
  },
  {
    "url": "assets/js/30.49900668.js",
    "revision": "8efacd49c002e78c0964f661867282dc"
  },
  {
    "url": "assets/js/31.4d68dc57.js",
    "revision": "0249788da38d98c3d8ee7d3e89d5bef0"
  },
  {
    "url": "assets/js/32.bcb13dde.js",
    "revision": "711fc62af355aef373f58d81c8cf5779"
  },
  {
    "url": "assets/js/33.ec64a748.js",
    "revision": "4ecc18cb08085826fa1627dfcadf8cd7"
  },
  {
    "url": "assets/js/34.39f1b7f1.js",
    "revision": "7b6d545ad6171a165aff429ab9d185cc"
  },
  {
    "url": "assets/js/35.7aedbdd8.js",
    "revision": "08aba9163ca62e6f6a40a5aac5405e0d"
  },
  {
    "url": "assets/js/36.d31d9ba1.js",
    "revision": "e96205a6271689247322b9de589c4f27"
  },
  {
    "url": "assets/js/37.4f8597ca.js",
    "revision": "c1160eaec3b9bedc469622d634d0b685"
  },
  {
    "url": "assets/js/38.f4b72ae3.js",
    "revision": "e236aff7598fbca072b358039d2939ae"
  },
  {
    "url": "assets/js/39.022853ab.js",
    "revision": "6db38fa71a7e7351c7be175434b6e36d"
  },
  {
    "url": "assets/js/4.fae7ef79.js",
    "revision": "763934b9b038345ab77a8ca5a1e5404f"
  },
  {
    "url": "assets/js/40.d637613e.js",
    "revision": "628c3f60c05a3d44d84b32b0d4eee0af"
  },
  {
    "url": "assets/js/41.44226fb2.js",
    "revision": "4384e872a42ced6517c7aee0b74f07ae"
  },
  {
    "url": "assets/js/42.c6a252bc.js",
    "revision": "7314a432916aa0e5b6d94f6789f7b8df"
  },
  {
    "url": "assets/js/43.e6ae990f.js",
    "revision": "29187bf5cc7f821a5cd0841281b870d3"
  },
  {
    "url": "assets/js/44.6c8a1911.js",
    "revision": "f07aaf40937cc4a1f57d806c5f35604f"
  },
  {
    "url": "assets/js/45.b166ae79.js",
    "revision": "9470df577a34479b53848d016cb8cf17"
  },
  {
    "url": "assets/js/46.7d9b446b.js",
    "revision": "a525dc220da16c2f4fed7e09a2dfe180"
  },
  {
    "url": "assets/js/47.d974c795.js",
    "revision": "cdbd239027075f66cc8381e7400301e9"
  },
  {
    "url": "assets/js/48.897d960f.js",
    "revision": "882c6b7b6989dcba8d27f162ef0450fc"
  },
  {
    "url": "assets/js/49.cc5bc50f.js",
    "revision": "83c8e7fcc6016f66e92c9f04f0ad2a67"
  },
  {
    "url": "assets/js/5.cfdcb31b.js",
    "revision": "978390dfad5f6b3f013c2b5096a527a2"
  },
  {
    "url": "assets/js/50.2490b782.js",
    "revision": "cd51bb09c2e3ea53d77d6ef01af55da7"
  },
  {
    "url": "assets/js/51.c64fb46a.js",
    "revision": "beac5ef53560da62e4cd1edfee5d85c0"
  },
  {
    "url": "assets/js/52.3a868455.js",
    "revision": "c45388eb3cd0aedeea1c38e874c8e71f"
  },
  {
    "url": "assets/js/53.c9ebf989.js",
    "revision": "69035a72b211cb283e63852d73d55a3a"
  },
  {
    "url": "assets/js/54.cfb27ac8.js",
    "revision": "6ff3879ba22a3383ae2fe09f10d5e5e0"
  },
  {
    "url": "assets/js/55.c8bee3e3.js",
    "revision": "c2d7680eb09907c23e5b8e8831c4032f"
  },
  {
    "url": "assets/js/56.c242cde5.js",
    "revision": "3dc7f4d3845dc732b14f68e6d180d760"
  },
  {
    "url": "assets/js/57.245298c9.js",
    "revision": "99ca82fe7e2e73ea70429da662b7b895"
  },
  {
    "url": "assets/js/59.d833b1cc.js",
    "revision": "a0deed4edc3bed469ef86d0f3b7b9349"
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
    "url": "assets/js/app.5f98274e.js",
    "revision": "12d2014bae3b00cc7e3d4a3848c31099"
  },
  {
    "url": "assets/js/vendors~docsearch.8bd63369.js",
    "revision": "2e9df6393b16c83a5a53d276ab2b42dc"
  },
  {
    "url": "author.png",
    "revision": "0bc4cf8823e3c83862ef5907dd58fe13"
  },
  {
    "url": "index.html",
    "revision": "347fdd010afbb8745463438e1ae298c4"
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
    "revision": "bad1ca2dc5d673835859b84538d84267"
  },
  {
    "url": "lin/4thweek.html",
    "revision": "7d84fb10630ec6fb55dd62dcdd2cc4cc"
  },
  {
    "url": "lin/cocos1.html",
    "revision": "bdaee5048742ad3df4d704099f6a3b69"
  },
  {
    "url": "lin/IT1.html",
    "revision": "df13f2f598904cc65606c49ec74384f5"
  },
  {
    "url": "lin/js1mod.html",
    "revision": "a12c582a8c32ae1e1ee2c0c8933161f1"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "c4727d3b6337aac259be82e68c78898e"
  },
  {
    "url": "lin/lxl1.html",
    "revision": "52c1a7aadce571e3a941fb62a4767266"
  },
  {
    "url": "lin/mode.html",
    "revision": "dc8a1a67ad51936604c15d4fe52c83da"
  },
  {
    "url": "lin/path.html",
    "revision": "f632787c1c47a78ad70e8948bddd1c41"
  },
  {
    "url": "lin/readingActivity.html",
    "revision": "4dc1b2248d9b63a573d1a02de0161968"
  },
  {
    "url": "lin/readmeBackup.html",
    "revision": "167929dc3bd4959d3ff9be4d39414987"
  },
  {
    "url": "lin/reportDevDoc.html",
    "revision": "4b3e59287f4cb2776074895c68ed47c4"
  },
  {
    "url": "lin/rhj1.html",
    "revision": "0db8d214d5f0e91288de0dc8ea2c497a"
  },
  {
    "url": "lin/rhj2.html",
    "revision": "abd96e47bda8308288fd0c2970a8210d"
  },
  {
    "url": "lin/Russia.html",
    "revision": "4b873ea467a5d335d29b60c611a2ec49"
  },
  {
    "url": "lin/session1.html",
    "revision": "d274badbf0f82b76c089a018d469c81c"
  },
  {
    "url": "lin/session2.html",
    "revision": "a104b577d70201194ba967fc8ee43c24"
  },
  {
    "url": "lin/session3.html",
    "revision": "dd453710e650c3c9ba4cd2074696b05d"
  },
  {
    "url": "lin/session4.html",
    "revision": "82be2131968f8bd9a02c753f51fb5397"
  },
  {
    "url": "lin/session5.html",
    "revision": "61f95dd4a049499034d902db4276d113"
  },
  {
    "url": "lin/session6.html",
    "revision": "18ea470b0ca93eec0fcad3a179d7aea9"
  },
  {
    "url": "lin/session7.html",
    "revision": "09fe15419bc4caa4cad814aff12d981b"
  },
  {
    "url": "lin/spssD1.html",
    "revision": "927591dba25f805ca1c6ef3fd6edd059"
  },
  {
    "url": "lin/spssD10.html",
    "revision": "d59c862fda24717bc019ce3570296f5e"
  },
  {
    "url": "lin/spssD13.html",
    "revision": "784d8edca5de0a93cf1005a4ef5fd8b7"
  },
  {
    "url": "lin/spssD17.html",
    "revision": "0f401f2a338969ff4b42ef7f5129d28c"
  },
  {
    "url": "lin/spssD18.html",
    "revision": "e6850018baa736a43f0d8ae49eb7941c"
  },
  {
    "url": "lin/spssD18plus.html",
    "revision": "913a4bf5d388d4dc2b3f14d8af36a2fa"
  },
  {
    "url": "lin/spssD2.html",
    "revision": "379476245becc8466c63b8637512524d"
  },
  {
    "url": "lin/spssMaps.html",
    "revision": "b9e35a7cb2730539a3da717b7fd8e87c"
  },
  {
    "url": "lin/writingActivity.html",
    "revision": "c0006da69fb18f1d45226ac0b3289306"
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
