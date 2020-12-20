const cacheName = 'site-static-v2';
const assets = [
    '/',
    '/favicon.ico',
    '/logo192.png',
];

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(assets);
        })
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", function(e) {
    console.log("[ServiceWorker] Activate");
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', event => {
    //console.log('fetch event', event);
    event.respondWith(
        caches.match(event.request).then(cacheResponse => {
            return cacheResponse || fetch(event.request).then(async fetchResponse => {
                const cache = await caches.open(cacheName);
                cache.put(event.request.url, fetchResponse.clone());
                return fetchResponse;
            });
        })
    );
});