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
    "revision": "f3160b203ec612dc77b0666bc09f028f"
  },
  {
    "url": "assets/css/0.styles.24e30ad9.css",
    "revision": "ce08411afe6242a6faaa8ed71b77d70b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.16359c7b.js",
    "revision": "067ea2ea38978d890977f05820f05bc2"
  },
  {
    "url": "assets/js/10.67e91ea3.js",
    "revision": "89b71ce84018538cb51977b1cd3f907b"
  },
  {
    "url": "assets/js/13.2c98450c.js",
    "revision": "a11fc5b5617837bccf3a606c0152ad65"
  },
  {
    "url": "assets/js/14.745a604f.js",
    "revision": "655e1b45759be291e424ea1be0086fe1"
  },
  {
    "url": "assets/js/15.04a5b500.js",
    "revision": "57ba85da218c41ac33a15c269c9f43d0"
  },
  {
    "url": "assets/js/16.71a41e40.js",
    "revision": "acc26294500103ca78d23a470cf4748d"
  },
  {
    "url": "assets/js/17.fc1260a2.js",
    "revision": "89fed22d14e1e20c39748e74b5c81797"
  },
  {
    "url": "assets/js/18.27fde912.js",
    "revision": "ea0b6f3dbd3bfb2527387e4b02d65fd7"
  },
  {
    "url": "assets/js/19.708f16e8.js",
    "revision": "e5d5fc14d95e46d08c9e276d4ec38772"
  },
  {
    "url": "assets/js/2.33d8cc68.js",
    "revision": "4fc469b09dec7def598c75fc78905fdf"
  },
  {
    "url": "assets/js/20.cb244e87.js",
    "revision": "ccfb04220f82e67a02b3026ea3406bfd"
  },
  {
    "url": "assets/js/21.27f1ca59.js",
    "revision": "92d45e6d128714c69ca80b7943726655"
  },
  {
    "url": "assets/js/22.79f4babe.js",
    "revision": "bb963272d3c674d1a316681a79e9c4cb"
  },
  {
    "url": "assets/js/23.1c0f72a6.js",
    "revision": "fd718b309bd5904f9e06d4eb7d3bc00b"
  },
  {
    "url": "assets/js/24.f09036e0.js",
    "revision": "3ae8ceaf46a01b790738a544e15bcb4f"
  },
  {
    "url": "assets/js/25.59019fd4.js",
    "revision": "1737fcd0a552941ddda25dc027d3f43e"
  },
  {
    "url": "assets/js/26.145fc257.js",
    "revision": "c34cc020c23ac01903541ca8dff7876c"
  },
  {
    "url": "assets/js/27.2870a607.js",
    "revision": "e2b6291a97873c427a124a6c3c75860a"
  },
  {
    "url": "assets/js/28.5a71915a.js",
    "revision": "1968843e3b3a794e14ab8051823f08af"
  },
  {
    "url": "assets/js/29.2bcd3ef5.js",
    "revision": "8c264471110b44afc5c9dd3c24fddce6"
  },
  {
    "url": "assets/js/3.04352af6.js",
    "revision": "c0bce7fcc174eb10a0e5eb6c7b557ea2"
  },
  {
    "url": "assets/js/30.2aa32715.js",
    "revision": "26d3d8691ea535cf4a2f8e8600428463"
  },
  {
    "url": "assets/js/31.75d9ddad.js",
    "revision": "f08f5a7fa70e1c4001370211c9642f26"
  },
  {
    "url": "assets/js/32.c9d23d65.js",
    "revision": "26f931e68760cc127defecd9172099b5"
  },
  {
    "url": "assets/js/33.c25127ad.js",
    "revision": "c9fac8cd1000de1827991815c88c4b6c"
  },
  {
    "url": "assets/js/34.33823658.js",
    "revision": "7c0fb1be84916ad06c56b3954bd7f73c"
  },
  {
    "url": "assets/js/35.9168741f.js",
    "revision": "b0d5519032a022f77299031c9353566e"
  },
  {
    "url": "assets/js/36.8700cc24.js",
    "revision": "d8c37d10270d77c81debfb09fc8d555c"
  },
  {
    "url": "assets/js/37.83e3ebee.js",
    "revision": "45e33c22008a7fb0034744b37f3d911a"
  },
  {
    "url": "assets/js/38.0640b31d.js",
    "revision": "78d64e768eb9d15c92414569965c71a1"
  },
  {
    "url": "assets/js/39.75fda8f3.js",
    "revision": "a15c0466ea73b85dd5b9eb958736da25"
  },
  {
    "url": "assets/js/4.9e34ee90.js",
    "revision": "77f3e2aaa80a2d172dc2cac178dfa98d"
  },
  {
    "url": "assets/js/41.fbbb4e3f.js",
    "revision": "544be7ece3f69cb2794d539b45e6bf4f"
  },
  {
    "url": "assets/js/5.14022c7f.js",
    "revision": "436b24a11aafd1bd4a2891b887ca3a3d"
  },
  {
    "url": "assets/js/6.06f47357.js",
    "revision": "9a6f9ee4ebfac4b09d327758c0483615"
  },
  {
    "url": "assets/js/7.ad434b72.js",
    "revision": "7b37278a35d8194a183cb4353061d4f2"
  },
  {
    "url": "assets/js/8.0ca91c7c.js",
    "revision": "6c410b803c9f3189735368f0b242b085"
  },
  {
    "url": "assets/js/9.dcf40924.js",
    "revision": "97a5ad12d39bbf309b99dd06c95e7b58"
  },
  {
    "url": "assets/js/app.2c96578d.js",
    "revision": "9441215ed3b2fe814625011e707f767d"
  },
  {
    "url": "assets/js/vendors~docsearch.2b3daa02.js",
    "revision": "3a14dad5b39f37935987b0dfa6665e54"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b293729284e89ff780f8f74049085aa9"
  },
  {
    "url": "design/index.html",
    "revision": "972f3dc4140e1420efba74ec7d862398"
  },
  {
    "url": "index.html",
    "revision": "edcbea3dd858facf7a0b1ca32c6ff2ed"
  },
  {
    "url": "intro/index.html",
    "revision": "809c7b618993d666f626d9fc2ff091e3"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "254ed82c54773e73a519d88ae49a09cd"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6e111694ed1d0dfc2b0581801f43861a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "e617721c50af1c710942bb87dc52a258"
  },
  {
    "url": "software/index.html",
    "revision": "e13b399d6eca67b7e89aa3b83799b365"
  },
  {
    "url": "test/index.html",
    "revision": "1cbdab9615028cbf2205c19afb78bf18"
  },
  {
    "url": "use cases/index.html",
    "revision": "2334d5854794f59bbee25bfc8316bfa8"
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
