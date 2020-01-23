const VERSION = 'v1'

self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  const request = event.request
  //Get
  if (request.method !== 'GET') {
    return
  }

  //Buscar en caché
  event.respondWith(cachedResponse(request))

  //Actualizar el caché
  event.waitUntil(updateCache(request))
})

const precache = async () => {
  const cache = await caches.open(VERSION)
  cache.addAll([
    // '/',
    // '/index.html',
    // '/js/index.js',
    // '/js/MediaPlayer.js',
    // '/js/plugins/AutoPause.js',
    // '/js/plugins/AutoPlay.js',
    // '/css/normalize.css',
    // '/css/styles.css',
    // '/assets/video/BigBuckBunny.mp4'
  ])
}

const cachedResponse = async request => {
  const cache = await caches.open(VERSION)
  const response = await cache.match(request)
  return response || fetch(request)
}

const updateCache = async request => {
  const cache = await caches.open(VERSION)
  const response = await fetch(request)
  return cache.put(request, response)
}
