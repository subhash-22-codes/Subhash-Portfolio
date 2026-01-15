// public/service-worker.js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("portfolio-cache").then((cache) => {
      return cache.addAll([
        "/",            // your homepage
        "/index.html",  // main file
        "/manifest.json",
        "/favicon.png",
        "/logo192.png", // icons (replace with yours)
        "/logo512.png",
      ]);
    })
  );
  console.log("Service Worker installed!");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
