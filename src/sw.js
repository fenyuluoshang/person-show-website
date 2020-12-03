workbox.core.setCacheNameDetails({ prefix: "person-show" });

console.log(self.__precacheManifest)

workbox.routing.registerRoute(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js',
  workbox.strategies.cacheFirst()
)

workbox.routing.registerRoute(
  /^(https:)?\/\/fenyu-media\.oss-accelerate\.aliyuncs\.com\//,
  workbox.strategies.cacheFirst({
    cacheName: 'cdn',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60, // 这只最长缓存时间为 7 天
      }),
    ],
  })
)

workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  workbox.strategies.cacheFirst({
    cacheName: 'cdn',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60, // 这只最长缓存时间为 7 天
      }),
    ],
  })
)

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/g,
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
  })
)

workbox.precaching.precacheAndRoute([].concat(self.__precacheManifest))