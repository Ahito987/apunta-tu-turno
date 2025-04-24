const CACHE_NAME = "turnos-app-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener("install", e => {
  console.log("Service Worker instalado");
});

self.addEventListener("activate", e => {
  console.log("Service Worker activado");
});

self.addEventListener("fetch", event => {
  // Por ahora, solo dejamos que pase la petición
  return;
});
