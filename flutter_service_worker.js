'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a8d4c35f5d387e69ff5d11f572bad553",
"index.html": "1f0080cfd3831bfd227557a3753d022a",
"/": "1f0080cfd3831bfd227557a3753d022a",
"main.dart.js": "eea44715879cbdcb37ac153f12303f23",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eba1c437c43eca9f12b80cce0f0a9943",
"assets/AssetManifest.json": "8cb274209df417a05da35a470aace4d4",
"assets/NOTICES": "dc00e895f8c4aad661843c32441a15c4",
"assets/FontManifest.json": "2451add22d0732b11a7ed3608cb90adf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/attributes/victory.png": "d463c3ac818e5a20cfaa4f2ba351d37d",
"assets/assets/images/attributes/piercing.png": "bd07136b20033e6f83f15cd4256e820c",
"assets/assets/images/attributes/cards.png": "13e5ebeb54e1893561a1694612ceadfb",
"assets/assets/images/attributes/recruit.png": "95d708f2354c3b32c82074918a2b2063",
"assets/assets/images/attributes/attack.png": "eac39387ded99845b22c8716cc23af52",
"assets/assets/images/attributes/cost.png": "84ccf3d5746a4fc036b155f6f6a12e31",
"assets/assets/images/logo.jpg": "a0433a2a81f41bdc83f33e15b90c2260",
"assets/assets/images/teams/marvel_knights.png": "fc051bfd61cb80f1afaa2799f36fd01f",
"assets/assets/images/teams/sinister6.png": "db8e9262953635419086869eed9f24f1",
"assets/assets/images/teams/Foes_of_Asgard.png": "dd895964b801de6692b0500d37b267c9",
"assets/assets/images/teams/runaways.png": "79d72f3cab46ea3372a158616e3dd16a",
"assets/assets/images/teams/brotherhood.png": "0e9c5cbfc382ffc0111af77984434bf1",
"assets/assets/images/teams/a_force.png": "22f6c506577dcae4463bdf18b8d5bbc3",
"assets/assets/images/teams/shield.png": "72ccc003fac1681b98f49c3041b61340",
"assets/assets/images/teams/Crime_Syndicate.png": "a89cd9ce695709ad225247fae80844ff",
"assets/assets/images/teams/mutants.png": "72716ad925221678428ec2e3e458f1dc",
"assets/assets/images/teams/avengers.png": "b1a523b05e849166a75f1c55efa32477",
"assets/assets/images/teams/champions.png": "f9f5de05f1fb94861badfb63b155a649",
"assets/assets/images/teams/cabal.png": "a21982fbe52b0d504de8178451bce91b",
"assets/assets/images/teams/us_army.png": "79f8d2e6fd833c1b2b85cff574a21a30",
"assets/assets/images/teams/illuminati.png": "df57e284aede6b8ca90511cd727d8147",
"assets/assets/images/teams/x_force.png": "5ff0a336157672634f5bf05f7b6ce7fc",
"assets/assets/images/teams/hydra.png": "b0bb60dfbfc81daa1181eff171328b26",
"assets/assets/images/teams/spider_friends.png": "6296ac27c5d90ba59ffb5a346af61175",
"assets/assets/images/teams/thunderbolts.png": "c22573dc99ddfbbc6bdae65b7fdde82d",
"assets/assets/images/teams/heroes_for_hire.png": "ea563b80981949aea92748c4325a5932",
"assets/assets/images/teams/Cinema_Spiderman.png": "17c8554605d585b4d1c9074fd58336db",
"assets/assets/images/teams/footclan.png": "235105819e57a4909bb23a3f3c03c2bf",
"assets/assets/images/teams/mercs_4_money.png": "1dc75541bddfd112a4bda572c1770af6",
"assets/assets/images/teams/guardians.png": "fb988c84e596b372d149d15884d3ad12",
"assets/assets/images/teams/defenders.png": "c78e838080cd06698eeff6bb9b1be962",
"assets/assets/images/teams/fantastic_four.png": "5a003faebdf25658e3de961ccd3c97e0",
"assets/assets/images/teams/Quintesson.png": "f70cd127c454b79e85e4a1f485e28a16",
"assets/assets/images/teams/Monsters_Unleashed.png": "01afdb07ccafde996dff4a71a893dc2b",
"assets/assets/images/teams/x_men.png": "544723cbdcbd8278a23d6a7292cca3a5",
"assets/assets/images/teams/legion_of_monsters.png": "546e655391b1e048c6a63f6f684b56c5",
"assets/assets/images/marvel_legendary_deck_building_game.jpg": "2ca330064a69ee6bb5abc9d6617f5136",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/search_icon.svg": "531bd87652ef494fc2394aaace6b5491",
"assets/assets/icons/arrow_back_icon.svg": "2a5ac11f716af8a1b9e4e9cce5ba2b8a",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/help_icon.svg": "1cebdbf226d5e4d5665d531c846501bf",
"assets/assets/icons/home_icon.svg": "b82164ab163ac2ccd6d922c8993fcbfa",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/promotion_icon.svg": "cb98e814122cb6c964d8dc32a94da62e",
"assets/assets/icons/about_icon.svg": "39dfa1f526b48791eaaf8202d9dc997c",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/profile_icon.svg": "8723e966bbb1bbbbd2657642ccdbb60b",
"assets/assets/icons/shield_marvel.svg": "3b58d0d946d3dfaa52f8e25f92db8d70",
"assets/assets/icons/arrow_right_icon.svg": "490f494fede341f180ba3260174117b4",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/heart_icon.svg": "2ecf75816eba6c831d64168f78b73afb",
"assets/assets/icons/phone_icon.svg": "15e06f7936132e7e85762428b89578af",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/clock_icon.svg": "187262167672b360c6f5b0a790cb98fc",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/email_icon.svg": "885a11915bd0e41586d167d745965f55",
"assets/assets/icons/arrow_forward_icon.svg": "3a1adefb0bbf2b04bbe3351f192d1130",
"assets/assets/icons/filter_icon.svg": "e5604e78e3244f41d41fc0e8cacadab3",
"assets/assets/icons/bell_icon.svg": "32ee6b9e1c4b3384cb50419567c2bb12",
"assets/assets/icons/icons8-avengers.svg": "5bfcca77801e42aa7b3b5ce87173b97a",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/logout_icon.svg": "d4b44d0eddf18ca2c0b9be8fb777bf1a",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/fonts/NotoSans-Regular.ttf": "2fd9c16b805724d590c0cff96da070a4",
"assets/assets/fonts/NotoSans-Bold.ttf": "a165a42685795361b25593effb32fdb1",
"assets/assets/fonts/NotoSans-BoldItalic.ttf": "4f6ff3639c1e5728b905b650c1a06e75",
"assets/assets/fonts/NotoSans-Italic.ttf": "154da4697acc779b55af0a67f1241e4e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
