const CACHE_NAME = 'turnosapp-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js'
  // Puedes agregar otros archivos CSS, imágenes o JS aquí si los tienes aparte
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
