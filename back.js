(() => {
  var __webpack_modules__ = ({
    "./src/title.js":
      ((module) => {
        module.exports = 'title'
      })
  });
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  var __webpack_exports__ = {};
  (() => {
    let title = __webpack_require__(/*! ./title */ "./src/title.js")
    console.log(title)
  })();
})()
  ;

let installedChunks = {}
require.e = (chundId) => {
  let installedChunkData;
  let promise = new Promise((resolve, reject) => {
    installedChunkData = installedChunks[chundId] = [resolve, reject]
  })
  installedChunkData[2] = promise
  return promise
}

require.l = (url) => {
  let script = document.createElement('script')
  script.src = url
  document.head.appendChild(script)
}

function webpackJsonpCallback (data) {
  let [chundIds, moreModules] = data
  var moduleId, chundId, i = 0, resolves = []
  for (moduleId in moreModules) {
    modules[moduleId] = moreModules[moduleId]
  }
  for (; i < chundIds.length; i++) {
    chundId = chundIds[i]
    let resolve = installedChunks[chundId][0]
    installedChunks[chundId] = 0
    resolve()
    // resolves.push(installedChunks[chundId][0])
    // installedChunks[chundId] = 0
  }
  while (resolves.length) {
    resolves.shift()()
  }
}

var chunkLoadingGlobal = self["webpackChunkwebpack5"] = self["webpackChunkwebpack5"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

