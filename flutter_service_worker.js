'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "49855b94c11f434b0a70c36788077f41",
".git/config": "1dd1b48f7f5d6999d5da3a063543eaa1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5084763286d165b008859d3a410dcc5e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "3ba0fcf36933069c10d18e6ceea4ae17",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "785ee69aa989f3fb2be4823283e4472b",
".git/logs/refs/heads/master": "785ee69aa989f3fb2be4823283e4472b",
".git/logs/refs/remotes/origin/HEAD": "ce51d660fd305f0da4a47fe308171af6",
".git/logs/refs/remotes/origin/master": "c013debbc2a02a54c19e42fb230b427e",
".git/objects/00/31aa230158e6216d8e6e993a87c07b380a26d2": "7ada1ae2d785e020e95e160e68eb4368",
".git/objects/00/7a688c7c967b0a8f1d6b936861bd308dce503c": "e6759e88f111bb69d8e497304e8128f9",
".git/objects/00/d8e2a190138edd565e0f58159ddb4f6c07203a": "2218e7b6cb5014d8215bb68034d183a6",
".git/objects/01/1172c1448872fc968b33e96026a4d967f76e35": "b6114a8994588528c6559f27502ead9b",
".git/objects/01/92e77ad121b5379f1beaa153d955d43d90f26d": "a6909e7312ac8f81185afd4bac57e857",
".git/objects/01/b8e53f0d6a11ae22c3077476b224e546ab064b": "4bb1f5f03d838fa748a31cc5a6432790",
".git/objects/02/d3e2a11a87b34e8f285d3399a9fd208bdf1c9b": "d5d0f495ad9484a2c3a9d8a4574da71f",
".git/objects/04/f3572eb57ce5df45773a665c1abdb030b9ae45": "5ff8e7bcf7a1093fab60dda868094266",
".git/objects/07/a159add948ebdcc5b870b5de2ef79b078b7726": "a0e773e00516f8980942f62e666ca0c6",
".git/objects/0a/75a87b21505e03e5e47e7e9e29b1f7205af147": "ce7d4a299550edb82376e5110baf5f08",
".git/objects/0a/e429401f991b97a6109a75c7008ead733e2402": "691226394ea838fb390b1f2527a4588c",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/348863dc3f3ea12a228bf738bee46708f0c94d": "4882d0c521279f0b4be70f7eaf980e67",
".git/objects/18/8a84a6632613e4e2c0e78021216d4fcd852568": "8193d2f82712760c1170152736494b54",
".git/objects/18/8e257ae9028acb57bcba8a1a39e91e2fe2f639": "0feadac5e3f5fdd9e43bee4877711338",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/5629ad9e756b72e4bb590f5972fb21da8b0042": "da08578e169142faf3fb8b2babd54b27",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/18d10685a6ac7f5a376ba492696ac835c844be": "ae7086fc2b669b240007a599e62ede0f",
".git/objects/23/22bfea643392aedd83644ea950f3e043c892a9": "40a9e41f09ac09b22c29df6a59f6106e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/bd1ba51b3c4c617b753374411aaef7b2597b89": "b9474534c0646a29113de5ab69d5ccd6",
".git/objects/2c/b77e009d42e28dc645bdaa96eb4764926de364": "6de9022cba4501ecfc9d5a0118f7e87d",
".git/objects/2c/f7e080f5d31ef4f4d9e4ad51eea3d339e7dc35": "241c22090e94062bc1cb6008c768fbdc",
".git/objects/2f/7cd3108096e068518f0230fc1090f2de028f3a": "22e1c5bfded6289790e8e91b4a9080e5",
".git/objects/30/7d67fd6891d8c321c946f5eaac6d5738e179bf": "e9a0deeaf4d7e76394fc05d8344157c9",
".git/objects/30/c3ad4a75f4650cd409ce46d9636c1c177243a4": "2633c7a6d869417046b0666efc6041cc",
".git/objects/31/f676d1f581004eb18d3dfe452d244d269290f6": "3e81cd9c044e8775e93a5c7cefcf6f77",
".git/objects/34/082f8f6eab9d8ed0fd60b802fe0ef778559cbd": "03d4cc686a40b45d08e64206b08083a1",
".git/objects/38/2241640314b4bdb999968740e68174cde9423f": "546f2b849fa65a9fa0c044340c0f0fc7",
".git/objects/38/d09fb7bc698342a01f7fbfe9c84d9ae8cd5808": "3022421c1134b546a5cd7818109511ab",
".git/objects/3b/4fe576396a8cd9bc8b3a7853a8f4285c7c8223": "7c96c0a8b217d80756c6e40d45568324",
".git/objects/3c/908367e5f13c972dd8a47c015431174eb88995": "fa7fdcd91c150ed73362f2bd79b25551",
".git/objects/3f/0a84ec28053d85b68b3034b14bdba6291f605f": "25116329473b0d8b24fe37efd472074d",
".git/objects/3f/da69dd9f998b81752118f57919c737f0e269cf": "348ec4f16463a4022fc4aa578f7cd5da",
".git/objects/47/3ac9643ac00d46ff6e361aa24061827f8dcbc8": "a7df189c907974502d86f399caefad9b",
".git/objects/48/6ba18121f364d0911146df7ed94a2026459b73": "2778d645afc521859fffdb4971ef78d8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/087156c9381a2b0289b4892c902fd18f049555": "597b12a45ca2897613721f45af769a90",
".git/objects/54/7d80db58a95d820e657d9ce26a95d9a0ef3ba7": "758a6a219bd461586f1e004304787af6",
".git/objects/55/c5b32dcfd407ba4525aaf7f9434b5aac8db7aa": "9dc54e8d4f6dec8f1a0914515b975425",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/dd88d3eeedc71aae77716588547ba19974c165": "45cef61625b1885944f597903fd1b9f1",
".git/objects/59/4598952cf534a65f437e90095cd5a83187b63a": "709ea500be9ae766b2c8d665c6682237",
".git/objects/59/8b07baa70dbaa10153c65918bd791a229f9cdd": "6089b376d0686816b359e6776ad72702",
".git/objects/59/df8d3d85c420cbe98fa00b27b0e0d41b7dac9c": "ff32847dffe26ec631d695d6b994231a",
".git/objects/5f/867020f72d9f3a7ff32e32e0d2cefeeb99160b": "2eb005cee6f1c98e049a33e42b140494",
".git/objects/61/5fb0b28895eb7ad2cbbce4ecc21472a67f0b8f": "ea2ea1dcf92f5423903dc26b31cbfd07",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/fb7f9ed176c6fb489fe1b13c6e29a963f43bd0": "ebb0149db809cf1722be74651a2baa80",
".git/objects/65/ccd048899000a4754e134ab70b1c4f653b5c56": "9290f2a68babda1cc250e56cbb1bdc99",
".git/objects/68/1453146a85a930407680394238e352c59ca38d": "1b269536cac7b107562db6b497b3c7e9",
".git/objects/68/d50ef7cd0c8d3a5410d9ae63eaf81209c86da8": "e9f1be0c95a75e0084e8be706a03c553",
".git/objects/6a/618a86d13d48442df1fb18d2f492c855a21f46": "f1ec160e0295e263ea3b353b4241e2bd",
".git/objects/6a/ab7b8d8a705e2cf387f643dc91d93ba1ca7bb9": "156767409aeba87f0c23bc07593ca2b1",
".git/objects/6a/c2ea2c8647eec312295ee1c1efb1187ad68e31": "a38fd0ce62e35a1bc1b9399acb310583",
".git/objects/6e/826e66155d097c236e4dc6009c6358c2e04b7a": "c467a6be2273b3d433151b140d1f5848",
".git/objects/6e/fe70148a8a8a4e863bc6e319bdcaf1b8f07aef": "65c24b810543186806b1dda04b4c4dbd",
".git/objects/6f/6a934cd7cc6f43ec232da28aec3747126f04d0": "9d12933ffc7add8c4e550115659eb28e",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/79/1390b823524dc6c2a31b94914aea4d4362bd03": "47dbeee5b29e44a7577987138f70611b",
".git/objects/7c/81e1937a96a7e619967f7fc5593e35823cb6ba": "bd8d5892ddfafb3386752ceeefb7442d",
".git/objects/7d/3c2850faa5c1e7d87f6177eee3e6a87dd96230": "db10a4408ce7c6bda279294b64cfcffb",
".git/objects/80/9afbbd85d0207e59fcf10c427828e94ffafb55": "d58be3d47522363f64c9bbcc039347dd",
".git/objects/82/f540d791a505cab200e7c033fe5c4a34c77278": "a38f4501070b03ed211dfaeac7c99aef",
".git/objects/85/44605c32e20c73ea579c7b0d5dcd057f402763": "8ed538e43e7998e49260a44595d1ec17",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/07ebd087278bf6ea3e00d7ab6d49d67f6001c1": "bd40d9c285cbe3600941e395a9972025",
".git/objects/86/8ad38aff199bcb2a85b82cf4783c98c8377a79": "659dc5390e44ff78a86456a4ea470871",
".git/objects/87/d80e4bca38fa6968d3a3f3f0462a8affd98a17": "11069b82b69ca0fd941b752816dfeede",
".git/objects/88/01c17f8d057501affbaadd13f1c921eb34b8f7": "eae8d2101ffb04d110e452eec17df8c2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/153e870760c6046114cef298aad67d4113f10f": "28a04711027b819bf3ccaeed91fe63c5",
".git/objects/8a/60c5b04503a85c34489fd1ebe5d17200a674bb": "24e57bcee72b85210c77fc412f7e31ef",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b307f15212e8147fca2bc886f3531c37fb8f88": "d6e98a130caf2660177930c3abb73b76",
".git/objects/8b/e8b33125778261500b9ba81381fa2d37cfc566": "cf6e273348c606317c07fab71771be5e",
".git/objects/8c/c3cd62491a4e938539cb7816267096330072d8": "320ed2aecdd40099e10dedf0025edf90",
".git/objects/8f/645fcbb1d76916b0ca2133c93f9971091bedb6": "bb617b605224ea86af3cf26490e6622a",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/b16da6e1775c232a9379e7ba101dacf3aa0db7": "cca82e850a18905f41a70a928f458d31",
".git/objects/95/b20744dc6a9ce94f8860b4aeff076e4c6d232b": "bcc3c4e2394568bd431b34fd4c0095d6",
".git/objects/95/d6b401e09b5a4f20b65d342512bd7acdb6c546": "868ee2486f680243ba4827ca0dc05583",
".git/objects/96/a257915e610e3d966d1adb318cd8c885ad1bee": "1bdac88f387665d4b6d49c82e2f273b2",
".git/objects/98/6fe4c404f465faaf536ef73598dda4a86f188a": "1cfa4bb6e2eb3435b626956fe5dd46b4",
".git/objects/9e/56de85f48bccf260daceeade69629b67175aa1": "bf239253d99ae5a967d2c05acc6cda90",
".git/objects/9f/ce844becdf9c53bdc0fd44be7eb9e8a7f4b73a": "4040839014ecd50231c1876df9c51db3",
".git/objects/a3/fa4c8f0f951df6ec7451c8bfe31f06d3ab3b83": "e7e9ef5856b38125bdf230b5bb691a89",
".git/objects/a5/2005c3d4f4d3da399dd01f9d4b165d437ce7ce": "0a36137f3838bc4f79769bb7692df261",
".git/objects/a6/19082298f2f37dff7730d3f405b947d8dc7e11": "cb5b6843191c73b980d6256c3606c1e2",
".git/objects/a7/94e62e0ae939ad328435e37bf02bf2866818fe": "1041c613d2339c8f6b2b4024a0d59646",
".git/objects/a9/1c91dbf7d6ea3f47cbba0ea9625bf9bc30ad1a": "3cd3d5d767234932fa2b9a2eccbb899d",
".git/objects/aa/03225ccb07c8be0c48d7801537bc15100b3f86": "5572d6663aaf50862549d16787ac344d",
".git/objects/ab/1c7ed1ee9aa5884dd3b65579029e8b72e4ace2": "e9554be51dd980a603e1b8d0f88a59a7",
".git/objects/ad/ad3df90a0cc32cbef7da9b0136569cd39b075c": "f1f06c37aac1b73a038f024598105b6e",
".git/objects/b0/53ed3afab0cc633b4399b39e56a921f3c39bab": "e082bc515633a81b23b1429d99d1e5d2",
".git/objects/b1/4563a4f8893195c39764ea1353bbd30ca80c03": "4f1228f25808a073508b50a970f7b65d",
".git/objects/b2/00e31afba263fbbabbaba83cd4c833ebe18823": "2089151124751cdc6385a32a192ccf2a",
".git/objects/b3/975977c4bd070b8e5d12b4405e565b5e92db5d": "71c299929fcd99cb1200be5a85fe20fb",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/fcb5ced287963919eb72b5220dbfa1702358f4": "632bf8369be8a11d978405004c5ec2d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8b0304edb0d49baab41387d9827f310140a242": "0ca8865248202e6fd4117b00372b5815",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/d4242a70015fb635dc6cf7f469550fceaad0ad": "4cad93b0cc7c6085d84c5454468e9278",
".git/objects/bf/8efffea8252bf245e0db320bfbe1d46453db47": "a3987f54768669349f624d7d563ee2e9",
".git/objects/c7/d74558de6454f0f5f095cbde5967aa9a7ac00d": "5d5f54bf01e6a4eeeab5f06770d9b7ae",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/42f07f7e8b2fa01e89424e402ea01bc5f991b0": "9419811d71e6d809d2c314646eb1cf0e",
".git/objects/cb/24231671199416013bdf7409c48cce93895d2b": "4e340563e818264d75528dc1d17490f4",
".git/objects/cb/86afb9406761c9da49a8d55c1b58be6b58504f": "13e645c83f8040eda2d2542f116a6b56",
".git/objects/cd/9b1e232c40e35f4585f2e5bd85d7c11fb91b18": "cd079512150584960b37aef483ae05e0",
".git/objects/cd/f635fef67ef81751f783067a8d23e38ed62bf1": "4679b21dce5751bc69ffb573996d1e40",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/4369f97af32263cc2c0407d99dea2262ba9f41": "05a4f1d23890c4f081525b74c57bb80a",
".git/objects/d3/f06c5730d984cc25320c240ca7e8162efc586e": "aa5ef87ff86fd350833e34f3be33ed1e",
".git/objects/d4/28788884ba70184eaaec0992582fe66f4688f5": "0d63885d463abd453f6a1e4635c69d8a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/e2811cb5ed76073572989b48ae0c2658fcf131": "591bafdbc82ccc96750a15c0d31b83cf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5a693782d4215fe2d5e2af6072b89bff4b6885": "04321ce085acd116a95d28febbc17a2e",
".git/objects/d9/8598d71cba1c46563cedec1b7c651b873d9183": "f4afd4b567f9f3e5f526e3a36550a07b",
".git/objects/de/056659d6cb4d6713fa7f7626eabb3950e81280": "f745cfb293910e409b11764f77bf7e2f",
".git/objects/e9/3e8fdd57cceda539200bbbb9c44f0064bbc90d": "ef3193998e77302693abf26666bf096e",
".git/objects/e9/bda1717a15cfe11eec38d175066f935bd206f6": "15a508dd5f4e538f0bc53aa2d615c8ff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/90707cafce49f361e28011f7837b30d05f22cc": "026581ed504ab601386888aca660377e",
".git/objects/f1/86eabc7470d3ca55810fe6b320e907a74cfbb9": "72f6f307f6cee243e88baec758d8ccc1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/afd71b0aaef15cf38bccf163d15e9449af9dd2": "944354e32ddda5f641cc8d979dd2ac69",
".git/objects/f4/85ddb9efc6c12d336dbb5c60048991191766c0": "1254899dc8a8595d2d51d43ceff73de8",
".git/objects/f4/fa4d6617b234d071976045ce8fdb762712de8a": "e5508adc8bc53cdb9afb68a1cc6f64b0",
".git/objects/f5/0cd1ae736f40a9502712d553d0b5c7db688991": "0f317bf7266321b7afea43d79c28d5b6",
".git/objects/fc/92b23a43448f2a808377af832f7870c31be5cb": "20d9a4bff07c928b32a257c92ef4cbb6",
".git/objects/fd/e6b069b2711b0b6cf793d7beb4b34db8b1e888": "87cba8e1b64a9a8112305d6b8d5ec561",
".git/refs/heads/master": "b086fd6da0c9923edc9d8b2e3d4c2647",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "b086fd6da0c9923edc9d8b2e3d4c2647",
"assets/AssetManifest.bin": "a5a71531cdf3714ff4e8b7d1c711cefc",
"assets/AssetManifest.bin.json": "5fc84e284beaf39a70d93de66ec57f57",
"assets/AssetManifest.json": "c3478c490b8103c782c4fe3aa470cc88",
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
"assets/flower/zechat.png": "343b5b4b1e5b8b7a510c6657cfab814f",
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
"flutter_bootstrap.js": "bc5b05a91f023d2f36ff1878590f39da",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2bf09b98eb2fa011a04ab532bd6b8e1e",
"/": "2bf09b98eb2fa011a04ab532bd6b8e1e",
"main.dart.js": "e649683507f30acde07bb5402685577e",
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
