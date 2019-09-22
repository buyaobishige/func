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
    "revision": "da129c6287926679653c923ab7c27617"
  },
  {
    "url": "assets/css/0.styles.f5b8a49a.css",
    "revision": "4668c435117e6f0bf3425f4fbc557052"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7c7a8a31.js",
    "revision": "c49152441c57d322c704d71266ad68c0"
  },
  {
    "url": "assets/js/2.7ea7441f.js",
    "revision": "62fbd3ba2ec3a5858754bde5c797bbb9"
  },
  {
    "url": "assets/js/3.5c32ca78.js",
    "revision": "c210171ec3fa59cd28c27580e789f404"
  },
  {
    "url": "assets/js/4.06dee3a6.js",
    "revision": "1d9934654c4bae0f5c2755424f7009fc"
  },
  {
    "url": "assets/js/5.c765af45.js",
    "revision": "66bc96b18c1108d06ad2dea8d2e3b473"
  },
  {
    "url": "assets/js/6.1dc1608c.js",
    "revision": "3128e7931375ffdaef0cb24e90a3ef1e"
  },
  {
    "url": "assets/js/7.7cc6aeaa.js",
    "revision": "edc1a9b843cb541830192d8b25976950"
  },
  {
    "url": "assets/js/8.fecb1299.js",
    "revision": "2d6eb5b8c291da71f37f318179309eb8"
  },
  {
    "url": "assets/js/9.b9dc3678.js",
    "revision": "27d724350f8b688f38538f748505e0b1"
  },
  {
    "url": "assets/js/app.f4a50b5d.js",
    "revision": "c9af5f6d62597db657a63eadfc02ce62"
  },
  {
    "url": "index.html",
    "revision": "a0313c45c3175690a823f4826cdb3fb1"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "166021edf791bcbbf6495aa41c7c870d"
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
