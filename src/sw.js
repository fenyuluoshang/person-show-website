workbox.core.setCacheNameDetails({ prefix: "person-show" });

console.log(self.__precacheManifest)

workbox.routing.registerRoute(
  /^https:\/\/fenyu-media\.oss-accelerate\.aliyuncs\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'oss-cdn',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60
      }),
    ],
  })
)

workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  new workbox.strategies.CacheFirst({
    cacheName: 'js-cdn',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60
      }),
    ],
  })
)

workbox.precaching.precacheAndRoute([].concat(self.__precacheManifest))