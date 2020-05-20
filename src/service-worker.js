/* eslint-disable no-undef */
self.__precacheManifest = [].concat(self.__precacheManifest || []);

// workbox.setConfig({
//   debug: true
// });

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  new RegExp("https://my-json-server.typicode.com/NatsuDzn/demo/(.*)"),
  new workbox.strategies.CacheFirst({
    cacheName: "jsonplaceholder",
    method: "GET",
    cacheableResponse: { statuses: [0, 200] },
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
);

workbox.routing.registerRoute(
  new RegExp("/img/icons/(.*)"),
  new workbox.strategies.CacheFirst({
    cacheName: "jsonplaceholder",
    method: "GET",
    cacheableResponse: { statuses: [0, 200] },
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
);

self.addEventListener("push", event => {
  let pushMessage = event.data.text();

  clickUrl = pushMessage;

  const options = {
    body: pushMessage,
    icon: "./img/apple-touch-icon-60x60.png",
    // Windows
    image: "./img/apple-touch-icon-60x60.png",
    vibrate: [200, 100, 200, 100],
    tag: "vibration-sample"
  };

  event.waitUntil(self.registration.showNotification(pushMessage, options));
});

self.addEventListener("notificationclick", event => {
  event.notification.close();

  const promiseChain = clients.openWindow("http://127.0.0.1:8887/#/");
  event.waitUntil(promiseChain);
});
