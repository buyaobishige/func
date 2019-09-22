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
    "revision": "d7ff4fff55eca92afacd29c7e98a7a8a"
  },
  {
    "url": "assets/css/0.styles.d407fb60.css",
    "revision": "9613359153c135e4c47f662d2694b456"
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
    "url": "assets/js/app.841b9a3b.js",
    "revision": "561ccf41b8bb3dea6ba74b44e6159def"
  },
  {
    "url": "index.html",
    "revision": "ee69968132d81f857a05ac5e096ac34e"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "427b2634e1f2a8797996b3335bc5ef86"
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
