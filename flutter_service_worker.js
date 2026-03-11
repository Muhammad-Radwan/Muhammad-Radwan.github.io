'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "e15d550dbeba67509ea266cff1de5102",
".git/COMMIT_EDITMSG": "a2e23508329eaab980a0e36b914ca5a8",
".git/config": "74b569cf1022b9f52e362f8a728cdbed",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6e56a675908bbe7909b4dc102e7ed169",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5ed7fcd42394504f55f05ead410a44fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "730f8e2204c1dd2bf1f705089f310403",
".git/logs/refs/heads/main": "384f9223bc49786509c0a1cc6da46d81",
".git/logs/refs/remotes/origin/HEAD": "11b53de93ca6fc5f8b3932e030f21570",
".git/logs/refs/remotes/origin/main": "7dc2bd0682690761921f0adbb82ae7c5",
".git/MERGE_HEAD": "d545ee3340f1dff379474bf4fc68b1fb",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "fb30c3730d70131ee6ba15989f824115",
".git/objects/04/ed72485b1cc6960ce4547a547efc7804e48eab": "75b72ff415d557717788eccafc04a003",
".git/objects/06/2d85f7e9ccdd1e273c91a73cfdb1007b8fd6c6": "1f9f856a3a22bbc2b288ced8bd8e3bee",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/10/5d63accbb5c5aa9052d9f8d88c1769b6eda7ff": "5effa412865b1791c392a28ff22d8fa3",
".git/objects/15/1123e08cde6178575f2b24854281fbc60659ae": "050d06a1c0f30dda32f3848006de1b62",
".git/objects/1c/a986140d00afd38a9c75eafcd7b0d3cae28a73": "2660ed4b8fe9df74c6d25e1c19637441",
".git/objects/25/30310208a99dac9e83f2bad641593e98aff6c1": "0b8c03ce9809459b8fa0fcc78c7b7c94",
".git/objects/27/b6eb9f91caed896810aea43a1d630314c75d89": "497f4fa5e93cc69cdcf12d903a1ba5ce",
".git/objects/2c/8f2abd219112ca12c99479f6ed5b941e88dbad": "0b7f7f8a963d01468cf0b4681244624c",
".git/objects/31/f3cadf25d53e0a6c321985edaeaf5f8871b83a": "ab213bd65bbfa523638f14b6e7d91e89",
".git/objects/32/37312f04b7eb574f1cad88b2f118a2a9aa21bf": "cf0a2317162ab0fc2960834ceb479d29",
".git/objects/33/1475a063c6eeef57bd6d775705e4014ceb7ade": "3f52b9148a825a37db7e86b43c1fe3ef",
".git/objects/34/f1373be054717790619abe804cb3b07749c73b": "e71f1fe276c075e20deadde37d750ad9",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/40/e5b2626a50e1d7ecddb79aab69a17c151d66e3": "6ee0f13ad14bf4784035a36f3946dd47",
".git/objects/41/1b5263961f2fcfc5792ed9cb974643750e6ad5": "7ef8b697446bbd1aecea6cba4334f2b6",
".git/objects/43/7345bf4ad292f3ca4ec938deaf11cd6a9a9785": "d7fb34d8eff8bb050702e6a7182b7628",
".git/objects/43/b72965af4ac89e24665b1549a4925c39b52155": "bee5cb5cfa744366ddc3e1eba85d8483",
".git/objects/45/cfa1c42660e456f859e98a283008de826673ed": "f0944ab13c59cd22b412fdfeb98f5e25",
".git/objects/50/9f3b1bdb77fbdc7ebc0d9efad36478c3f188d5": "66b721e8b97c03ca5e3e42a36b64daf1",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/56/b98977738bdbaaa8432966f97c09ae25596905": "421ed98ac636f2aa548fa1aacaf6da87",
".git/objects/56/f7c6e0aa8afa1d2d00afcd74550f3f684a722d": "caece3d946a7156a6f02a0b743c7aa4a",
".git/objects/5b/d7055b33f65608c21f3ebad998e387927d4449": "8d70858da10af74868eab664cd65614c",
".git/objects/61/9566dde5a0c6cc0dee9b4b9295136c5cb976b4": "374d4acf835e34e689fd1cf284f17eb7",
".git/objects/62/78a7d8dc128b951aee824c94281f2dcf21babb": "c2d49af48fac1dfd046820d1ab800e70",
".git/objects/63/33deb4bd644a439af7281926f83e5aee3c3fbe": "e3e381e8f7564f7a5bee1e37fc2e1457",
".git/objects/64/8297794bbe4bcff069ab85ccbd00ac2806f0a4": "df75b27a4316368e8697aaff04847c77",
".git/objects/66/a6586ecdbea6b13ec67be9c57c183c137937c1": "99e8667ba702a5114a70474cd2669167",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/5ea2ebf2c012d60626e8f63437e6ba39070496": "b363fb1e591241e88cffaf057a1af7d3",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7f/2facaf4dadaf5c3df0ddf5356cd17352d31589": "e17e3f9d0aa555f23583b6cdd84064d8",
".git/objects/82/3a44d159aab27ae49116b3699da1338c8c0e1e": "dded09051e0f32fd7215b881d87b9b03",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/5a0f6163c7b2d6fe32f6d6295f1caeaa60a9b8": "700e3e02e06b1b0dcbb04d71570b2e94",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/7ff54a5761bacac1773ac2c4bd62e2f71ad9b3": "1a778c80740d6d984065543680af9a69",
".git/objects/8f/4a805352c94b76d4955c2a0ded98699de0d426": "a34cd32119f19526d924bc64e74e07f3",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/386f8ba5ee0fd07e0a98407096a9d8d2860ff7": "d076be17a5fa3a5897f550699bd59ea0",
".git/objects/9d/4c69eb15cedd75d08d4c392c7921c25ad1adbd": "613454e4b2d829021f3cff423cf771bb",
".git/objects/a7/22577713fb4766ac0b3a7e4552b8464dfd2606": "1a9cb52eb23cc4d0c55afd1c2807ba55",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/71d5609c7d98824edcec8fb32eea0cb1299aed": "122236cc4320981e5c69e9610b93ccc7",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b5/cc16eac9c8265b33b6b6fca1d3d088ba1ae56f": "a318266fdaf40c8d560568e11063fcf3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/929b38401c07dfc73dbe1984c4d6527b0d8635": "ac1869e6aed68ed4fdaf072cf452ac7f",
".git/objects/b9/10f2f497eac38368fb7467db7c33e1036c98d5": "c942404154f79e6734e90fd318da8580",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cd/f3b35b392c0bee80fc57a285ef47f3fae0aae2": "bb151092056c14ea5c50485bb4561878",
".git/objects/d0/06d4f863f91d4778a3a6914e6f05eac5309b48": "73623f4cc51f058e2335dec6a98dd4cf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/990214c7c6e6fbaaa817cc57b3b122f000adfb": "13cf01e18a928b9542d432b75fa5d854",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/55642ff0732712387b55bed43fdc5b09a1b9ce": "08a367f0e13d24a2fda795cfa98dc00c",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e0/b329411afa927465a8950c199ce63629d071bb": "44c1bfc40420b990c48b23d9c6ddd67f",
".git/objects/e2/7ad85cbde0b383b06bd281770ecce492a5b69f": "0aedc27a6746279d0f72076325366bcd",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/1f4f0d23a4826744f78723858eddf16dcccf85": "eff8d14a82148bf5bbc7088e7d0c4043",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/ORIG_HEAD": "6e3751b0ac92a8f186d81877fadabcf7",
".git/refs/heads/main": "6e3751b0ac92a8f186d81877fadabcf7",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d545ee3340f1dff379474bf4fc68b1fb",
"assets/AssetManifest.bin": "049955a6dea7ababed0a72af086b2fa2",
"assets/AssetManifest.bin.json": "dccc7d9efe339f012734f4707889bc2d",
"assets/FontManifest.json": "7eeb6724b2aa37f68d646ced040489bd",
"assets/fonts/Changa-Regular.ttf": "ef040a08af0e19fe799ea7115df0794f",
"assets/fonts/MaterialIcons-Regular.otf": "d831f43d3e7607426754cc776fda81c4",
"assets/NOTICES": "ffc93c1dc79b5ffd9ad27a2b26826af2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "11cb97423afccf47458fc18271711a2b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd7f81078a3681a4f289d19c4cc57aac",
"/": "fd7f81078a3681a4f289d19c4cc57aac",
"main.dart.js": "9310592cff76f7294ca44797a9afce0d",
"manifest.json": "6b8f3d4427a10f04a10577c7cad82bf8",
"version.json": "aba475b455c3e463040316737aeef86a"};
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
