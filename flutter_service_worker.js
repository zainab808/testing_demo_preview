'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "219091697d3786f6847c22acdca083f0",
"assets/AssetManifest.bin.json": "0448e276f8e57aaedf272529b9091584",
"assets/AssetManifest.json": "53b5e62e732294d2ead3ee17973cb9d8",
"assets/flower/1%2520prsn.jpg": "ad9d8086dbe97e5391388bbcdd4f173b",
"assets/flower/11.jpg": "2d2ad5666d047c41c968f3987c04478b",
"assets/flower/3%2520person.png": "063adb601acb64204d7a9100aa7fe627",
"assets/flower/app.jpg": "c297ed5b357237ba996bc47227ce997d",
"assets/flower/apple.png": "2a2c1feaca6cfb1c264c2fc8f0893ad2",
"assets/flower/cam.jpg": "7ff509808c72128c1cf7a80cc219cb24",
"assets/flower/client%25202.jpg": "68d598e7c8e79e7892626580cc4b66da",
"assets/flower/client%25203.jpg": "a100d0283c1691117b46861834e75f54",
"assets/flower/client%25204.jpg": "d1158dca2551c6999b01534ae2445d5e",
"assets/flower/client.jpg": "c83114ba22a2625525837d2e4075b257",
"assets/flower/cloud.png": "3711a8bc86645344cfe5a9f96edd9fe1",
"assets/flower/daraz.jpg": "5e02fd3af991e54513b5641c61963483",
"assets/flower/design%25201.png": "cb81c5ad5acdf8f849a29b956a0876cf",
"assets/flower/design%25202.png": "062688631ce1f22f67f844e221b4945c",
"assets/flower/design%25203.png": "0f084aca3226892532cd565647e991c7",
"assets/flower/design%25204.png": "f32ca4893463bf110743177a387ef2d2",
"assets/flower/design%25205.png": "9107a8b14d85f8cd18a66ce53fa90ef1",
"assets/flower/design%25206.png": "b32ad81074c5d9cdf609f111d31f123f",
"assets/flower/edit.jpg": "292557ab1251741ff433c1595ec095bc",
"assets/flower/f2.jpg": "25eee0c002e4c7b66ab4b3203b76cc5b",
"assets/flower/f3.jpg": "46fb78c4d00201e0c8752c35ea74c8a7",
"assets/flower/flo%25203.png": "3a17e323c562a4efd64c94ef2e2aa43f",
"assets/flower/flo.jpeg": "3204bb5f539ea36dc5b2e279a2b502e0",
"assets/flower/flo2.jpeg": "fb3078b6dd5a77e689781a9d228179ed",
"assets/flower/flower.jpg": "3366020ab1f8735b34af81e8ba270d1d",
"assets/flower/flutter%2520code.jpg": "9e5104aaf1a45e233053d80169ea431a",
"assets/flower/g1.png": "4239d05fac4674552cf3a62948dc75d8",
"assets/flower/girl.jpeg": "7ca94768096901743a6efdfc885818fd",
"assets/flower/google.png": "cd13dcf312857e8decfe72d86092ed13",
"assets/flower/icon%25202.png": "2debf835eb4777328cf6d11f8566d53a",
"assets/flower/icon.png": "cc9bc23dec16169a43307dd6b099546e",
"assets/flower/insta.jpg": "bcd086e346b5bd29b23688bb68f6596c",
"assets/flower/instaa.jpg": "028aa2748db3c46d494c137f2979b584",
"assets/flower/map.jpg": "23b06bc04009566baef40018e76f5683",
"assets/flower/mob.jpg": "f2d6e42edc8a359a45350206162c27ac",
"assets/flower/Moon%2520cloud%2520fast%2520wind.png": "d26eae9fea96d983aac525b0afbde0ed",
"assets/flower/Moon%2520cloud%2520mid%2520rain.png": "17c70c3ef029084c5b8adf205364d5e0",
"assets/flower/muzamil.jpg": "a6af338bf1481c9e877b5b2f1580a395",
"assets/flower/new%2520icon.jpg": "9952cd00b1d718672a914e13078fdc09",
"assets/flower/poject%252011.png": "fd63036f80639ecbbcd94a79ba7bd55c",
"assets/flower/poject%25203.png": "9e0b0019d203f5fff5d10de9e88bd425",
"assets/flower/pro%25201.jpg": "c3eac5703fb69467e10c05603bcc2079",
"assets/flower/pro%25202.jpg": "be1ba8cf45a658d87eb4dda8ce402675",
"assets/flower/pro%25203.jpg": "f14e14fe23a5d8f4d142c5b00ce62bd2",
"assets/flower/pro%25204.jpg": "e6e1dae4cec81ef3d1708d796648fed1",
"assets/flower/pro%25205.jpg": "a7436f9fbe0d43526c635b03fa5e9d6e",
"assets/flower/project%252010.png": "14f56278e1a19efbca3428200ad387d4",
"assets/flower/project%252012.png": "82f8a3602b513404c400a90967f6fabc",
"assets/flower/project%252013.png": "43fdeeef9fbcae93fce0cfe2ad0e4bea",
"assets/flower/project%252014.png": "851e8aaa40555b0ced397e97ca5c5dac",
"assets/flower/project%25202.png": "7b3161ef00a34cc85cf5b28f6006205d",
"assets/flower/project%25204.png": "f9621d9079c65f542dac7a47e6128d33",
"assets/flower/project%25205.png": "8e368692912bd761b7acad432fcc4e57",
"assets/flower/project%25206.png": "cbdacaf970541cc802c4b683c9374616",
"assets/flower/project%25207.png": "287796a9681c2747775056c062296f87",
"assets/flower/project%25208.png": "8c4fcaf9a0d75aef86de5fd32c781ab7",
"assets/flower/project%25209.png": "057cd091ead3c9ab40d9f6608a2ad581",
"assets/flower/project.jpg": "176f46a2561ca9848e4cb35a4e244e27",
"assets/flower/project1.png": "11aca27c3d3add2fb98a2ec35cf2b82f",
"assets/flower/prsonn.png": "7644b03706ae36cc51dcf922088e994f",
"assets/flower/quick.jpg": "920b569a0f3dba03aa328c602bdb8319",
"assets/flower/richard%2520.jpg": "6a457eddd3420a7007dd9d098808c9ae",
"assets/flower/richard%25202.jpg": "e5b6ebc512471f83f6b0387ee2a8669d",
"assets/flower/sajal.jfif": "6ab45e95f821696bd93059d6b99ecc57",
"assets/flower/Sun%2520cloud%2520mid%2520rain.png": "e0a87ffcc6e69bce0a389e12dd660393",
"assets/flower/sunrain.png": "274ded0f4819058350fac5fad7cccaa5",
"assets/flower/t1.jpg": "5560e264aaecb2040bee85de06c61c08",
"assets/flower/t2.jpg": "34589d9565ceaa1e7640150e89fa5910",
"assets/flower/teddy.jpg": "6324f06498f6cdd8b3375175ad2018d1",
"assets/flower/th%2520(1).jpg": "e00400a2b6386d37197038251829f08c",
"assets/flower/th.jpg": "baca7f1ba8a825cb3f1cc0fa1614a555",
"assets/flower/Tornado.png": "5f4457982eeec55418e7657a8ce67746",
"assets/flower/twitter%2520.png": "780b8ca3bb2b20c38fcd3a65f65f10da",
"assets/flower/twitter%25202.jpg": "8656bbd16546849663ce4aa458ab602a",
"assets/flower/web.jpg": "08248c6e622862e9c34079da519e6002",
"assets/flower/yahoo.jpg": "9a11d792b51c7e28d79db0e7f945e40e",
"assets/flower/youtube%25203.jpg": "6d051ce11ccfaac71f7c21782ab55e3f",
"assets/flower/youtube.jpg": "c78d0f811e349f9cb945ea78a11b6c69",
"assets/FontManifest.json": "4c221d3850e389cc36c879e2562d4207",
"assets/fonts/anton.ttf": "055c4df4e2f8c7a4d4675cdd8fa68da0",
"assets/fonts/baloo.ttf": "77fa01809501615f05339207ab9bad49",
"assets/fonts/MaterialIcons-Regular.otf": "b7e81a31904f376180aff2d100240f8f",
"assets/fonts/s.ttf": "ab79ea0152b4c8a85bceb66bc4c251d3",
"assets/fonts/static.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/fonts/voll.ttf": "b7784002b9d9d8b7ae63eecccfe71600",
"assets/NOTICES": "aa937f6f82e23b22b7954fb29649674c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "acd4769c3971795bb5bfda51cc8b2df0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2bf09b98eb2fa011a04ab532bd6b8e1e",
"/": "2bf09b98eb2fa011a04ab532bd6b8e1e",
"main.dart.js": "de76933d374ebe73f07ceeb0dcc166fa",
"manifest.json": "5098049b639d44cf59ffc289f1814623",
"version.json": "59e14226086d367145829d886b738abd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
