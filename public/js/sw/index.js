self.addEventListener('install', function(event) {
    var urlsToCache = [
      '/',
      'js/main.js',
      'css/main.css',
      'imgs/icon.png',
      'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
      'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
    ];
  
    event.waitUntil(
      caches.open('wittr-static-v2').then(function(cache) {
        return cache.addAll(urlsToCache);
      })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.delete('wittr-static-v1')
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(req) {
            if (req) return req;
            else return fetch(event.request);
        })
    );
});