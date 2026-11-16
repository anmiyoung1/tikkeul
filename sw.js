// 예전 주소의 앱 저장본(캐시)을 지우고 스스로 물러남. 기기 안의 할 일 데이터(localStorage)는 건드리지 않음.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).then(()=>self.registration.unregister())));
