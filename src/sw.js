workbox.core.setCacheNameDetails({ prefix: "person-show" });

console.log(self.__precacheManifest)

workbox.routing.registerRoute(
  ({url})=>{
    return url.host == 'fenyu-media.oss-accelerate.aliyuncs.com'
  },
  workbox.strategies.cacheFirst({
    cacheName: 'oss-cdn',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60
      }),
    ],
  })
)

workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  workbox.strategies.cacheFirst({
    cacheName: 'js-cdn',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60
      }),
    ],
  })
)

workbox.precaching.precacheAndRoute([].concat(self.__precacheManifest))