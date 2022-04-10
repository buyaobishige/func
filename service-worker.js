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
    "revision": "ea5ab698d379f54447a3784f31fa85ff"
  },
  {
    "url": "assets/css/0.styles.7737821a.css",
    "revision": "efdbd2e7cd4acf14df2befedfe3c6b7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.228610ae.js",
    "revision": "b7b02dfc53894b39286a66e36cc77803"
  },
  {
    "url": "assets/js/11.9f7489da.js",
    "revision": "97c2ffec2ffa6f115be842c9d52a3230"
  },
  {
    "url": "assets/js/12.86836040.js",
    "revision": "55ad94dbe757a450a42e07309715b30c"
  },
  {
    "url": "assets/js/13.ff41dd5d.js",
    "revision": "0c91b5e826838ffd0b1f7992ac676880"
  },
  {
    "url": "assets/js/14.0e5781c6.js",
    "revision": "84ef73d7f4d14614a3f79cbf14885475"
  },
  {
    "url": "assets/js/15.7d7afda7.js",
    "revision": "5c6b53e98e1f407d768b3c7173e5dd33"
  },
  {
    "url": "assets/js/16.14de28cf.js",
    "revision": "7713bb3a11a2d7ef5d1a918d252a37fd"
  },
  {
    "url": "assets/js/17.b07f39af.js",
    "revision": "9d122ce8a75b31d36dcb06b7ed4c97e6"
  },
  {
    "url": "assets/js/18.d153c2d7.js",
    "revision": "10cdb2018ce6b0318fb70f639c390ee2"
  },
  {
    "url": "assets/js/19.a08819f6.js",
    "revision": "9b625fb7bd2ee5a639f0903c61545bab"
  },
  {
    "url": "assets/js/2.d5772de4.js",
    "revision": "88d5b0e57b7794a51d267d573f4e13df"
  },
  {
    "url": "assets/js/20.6037ab27.js",
    "revision": "133c320e6879523f9f0d32d7ed4c6c3f"
  },
  {
    "url": "assets/js/21.9bf85588.js",
    "revision": "6288f43de08061edd9f05b71cc302f03"
  },
  {
    "url": "assets/js/22.86e40d1c.js",
    "revision": "fae014a92e9d29ab9fa68df887ecc030"
  },
  {
    "url": "assets/js/23.048d6a8f.js",
    "revision": "596b48e16b393efb63944f63bee18bcc"
  },
  {
    "url": "assets/js/24.a7e214e1.js",
    "revision": "8d6ec73b1c7900371a0dd3c0da7459b3"
  },
  {
    "url": "assets/js/25.371f6e9b.js",
    "revision": "b31eba6ea6c4cb9d1f910873d5a848f9"
  },
  {
    "url": "assets/js/26.c3b43206.js",
    "revision": "2d442c25e430e5d8277061d314f54acd"
  },
  {
    "url": "assets/js/27.56459361.js",
    "revision": "8152e28821ee868e1798ee308ab2beda"
  },
  {
    "url": "assets/js/28.6aacc1cd.js",
    "revision": "1dd687cef50c42f0f52f90b9429b1b7e"
  },
  {
    "url": "assets/js/29.fa370a85.js",
    "revision": "bf5ce1ee9b45c683f61d99ba0389889c"
  },
  {
    "url": "assets/js/3.0911aeda.js",
    "revision": "d518275783837311ea532d3906e4a2e0"
  },
  {
    "url": "assets/js/30.4986a220.js",
    "revision": "311013f7a1021fd289731bfceb339984"
  },
  {
    "url": "assets/js/31.eeb5cd6a.js",
    "revision": "abab81c207b452e5af828f41a9ff751e"
  },
  {
    "url": "assets/js/32.d95208ed.js",
    "revision": "13ae79ff6c71de2722dbe7bdbe3e689e"
  },
  {
    "url": "assets/js/33.77eda020.js",
    "revision": "fa72e08b1bf755f0e878b1eed1f917e5"
  },
  {
    "url": "assets/js/34.159f5ec2.js",
    "revision": "a81d3a5ab8ed9b708fc4aaa26d8ae6d1"
  },
  {
    "url": "assets/js/35.48e56114.js",
    "revision": "56fddab4d9f2d3966cfa995a6c4c1af3"
  },
  {
    "url": "assets/js/36.eda1ea63.js",
    "revision": "7551c94f25430204437fb51fcd3c831f"
  },
  {
    "url": "assets/js/37.52d2aedb.js",
    "revision": "9634afd8bbe839d37d67a6c4792c2489"
  },
  {
    "url": "assets/js/38.f7589ac0.js",
    "revision": "c19766604c0e4da217a8119a727308eb"
  },
  {
    "url": "assets/js/39.3b3ffcb1.js",
    "revision": "2df8e34ecfdc1bfc6a42728b34ed3a8d"
  },
  {
    "url": "assets/js/4.53eea2da.js",
    "revision": "f4ccb26e6caa521253839ba615457e89"
  },
  {
    "url": "assets/js/40.8af4b659.js",
    "revision": "1150c5ca4a5084b6061d9ce4264699f1"
  },
  {
    "url": "assets/js/41.00b44927.js",
    "revision": "019bca2d8b0cda38c7c79c46ad775426"
  },
  {
    "url": "assets/js/42.5207a97e.js",
    "revision": "d088fc97f1eaf20c2dcaced5fb058d01"
  },
  {
    "url": "assets/js/5.6cca765f.js",
    "revision": "0516b26e1312373dd91824aa4d4848c0"
  },
  {
    "url": "assets/js/6.207801fc.js",
    "revision": "250bc79b0b524bae7a24a500b415a918"
  },
  {
    "url": "assets/js/7.8c47833e.js",
    "revision": "6eb9eea58e3a15022c40155eb077d160"
  },
  {
    "url": "assets/js/8.5f80a021.js",
    "revision": "8262495d349489af9bb13902ca291180"
  },
  {
    "url": "assets/js/9.3b62ce16.js",
    "revision": "fa19a7f9d595f07df6583f4c69609fdc"
  },
  {
    "url": "assets/js/app.6245414a.js",
    "revision": "eaa110b3362ef406f6e5a4378012d30a"
  },
  {
    "url": "author.png",
    "revision": "0bc4cf8823e3c83862ef5907dd58fe13"
  },
  {
    "url": "index.html",
    "revision": "b0a67ac3fb20c2d6e33d5a504e185bcd"
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
    "revision": "6b0425542a2fff10d31d5de6cbbfbe3c"
  },
  {
    "url": "lin/4thweek.html",
    "revision": "b4db672fc964f3acad020154707ac37b"
  },
  {
    "url": "lin/cocos1.html",
    "revision": "9373fae25b771887d794aab89eff342a"
  },
  {
    "url": "lin/IT1.html",
    "revision": "bcca4be73fac6da4b3ae897188556389"
  },
  {
    "url": "lin/js1mod.html",
    "revision": "a091635c8f64feee91c3ce2128fe843d"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "13cbed5a3adde4876cbed94b315a76eb"
  },
  {
    "url": "lin/lxl1.html",
    "revision": "467fae985dafe6a39bd63955aa3e910e"
  },
  {
    "url": "lin/mode.html",
    "revision": "7be8c5b81aeeea6fcc327990e7927f6d"
  },
  {
    "url": "lin/path.html",
    "revision": "306306a413bc0ae0825aa3a0c0732331"
  },
  {
    "url": "lin/readingActivity.html",
    "revision": "ecbe2b64f362dcd79ae1d41db7a979f2"
  },
  {
    "url": "lin/readmeBackup.html",
    "revision": "94ded495425a2c481ca3c489107aeb90"
  },
  {
    "url": "lin/rhj1.html",
    "revision": "2915da426536f5ba98ad45685a7a0283"
  },
  {
    "url": "lin/rhj2.html",
    "revision": "c155c5d1b37751f09d891ed7e96e713c"
  },
  {
    "url": "lin/Russia.html",
    "revision": "5372e8983f43aa9936e2f3d9ae45cafa"
  },
  {
    "url": "lin/session1.html",
    "revision": "a42afe95c876d0e5ba908309932f8b2e"
  },
  {
    "url": "lin/session2.html",
    "revision": "b9a39452dcb8c593b25c4d6cf8737c23"
  },
  {
    "url": "lin/session3.html",
    "revision": "1d6f97c7bbbba494a7221604b06d189e"
  },
  {
    "url": "lin/session4.html",
    "revision": "ff67b0187802932d3c484957a704a23d"
  },
  {
    "url": "lin/session5.html",
    "revision": "ae6725a50c15001c658345f8cab3b9fd"
  },
  {
    "url": "lin/session6.html",
    "revision": "92ef326e2dfb83372092b878c5dec961"
  },
  {
    "url": "lin/session7.html",
    "revision": "be82c47c2694df69a2b8ce91dd818702"
  },
  {
    "url": "lin/spssD1.html",
    "revision": "1a23de4cac69d6b422d70cfffb223892"
  },
  {
    "url": "lin/spssD10.html",
    "revision": "0080645dcac2edda847a1b488949f24e"
  },
  {
    "url": "lin/spssD13.html",
    "revision": "371021352740efb1e355cc2bb1269d83"
  },
  {
    "url": "lin/spssD17.html",
    "revision": "dc72f10018c60cbdf89c82f6654eddf6"
  },
  {
    "url": "lin/spssD18.html",
    "revision": "99e4871d37ffad9aea6c04e64ef56906"
  },
  {
    "url": "lin/spssD18plus.html",
    "revision": "ec589441d5ff6b334b8ee59fa6cae7a0"
  },
  {
    "url": "lin/spssD2.html",
    "revision": "fa8f6d1086490c7bdc4b8e86c84c8eda"
  },
  {
    "url": "lin/writingActivity.html",
    "revision": "c2c12c37cc0d8dedf9bc1ffbcd041ae2"
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
