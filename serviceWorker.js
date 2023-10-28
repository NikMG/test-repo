/* eslint-disable no-restricted-globals */
// Название кэша
const cacheName = 'app-name-cache';

// Список ресурсов для кэширования
const resourcesToCache = [
  '/',
  'index.html',
  'favicon.ico',
  'logo512.png',
  'logo192.png',
];

// Установка
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToCache);
    })
  );
});

// Запрос ресурсов
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});