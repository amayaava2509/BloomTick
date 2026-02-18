const CACHE_NAME = "bloomtick-v1";

const FILES_TO_CACHE = [
  "./",
  "./bloomTick.html",
  "./manifest.json",
  "icon_96.png"
  "icon_128.png"
  "icon_192.png"
  "icon_384.png"
  "icon_512.png"
  "icon_1024.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


