self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('rddl-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './script.js',
        './images/Banner.png',
        './images/cutout.png',
        './images/banner-gemini.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
