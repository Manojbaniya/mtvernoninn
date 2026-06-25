// Minimal service worker — makes the app installable ("Add to Home Screen")
const CACHE = "midtown-inn-v1";
const ASSETS = ["/", "/index.html", "/manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  // network-first so booking/availability stays fresh, cache as fallback
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
