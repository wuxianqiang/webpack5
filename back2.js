__webpack_require__.f = {}
__webpack_require__.e = (chunkId) => {
  return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
    // promises = [], key = "j"
    // chunkId = src_title_js, promises = []
    __webpack_require__.f[key](chunkId, promises);
    return promises;
  }, []));
};

var installedChunks = {
  "main": 0
};
__webpack_require__.f.j = (chunkId, promises) => {
  var installedChunkData = installedChunks[chunkId]
  if(installedChunkData) {
    promises.push(installedChunkData[2]);
  } else {
    var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
		promises.push(installedChunkData[2] = promise);
    __webpack_require__.l(url);
  }
}

__webpack_require__.l = (url) => {
  var script;
  script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
}

// install a JSONP callback for chunk loading
var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
  var [chunkIds, moreModules, runtime] = data;
  // add "moreModules" to the modules object,
  // then flag all "chunkIds" as loaded and fire callback
  var moduleId, chunkId, i = 0;
  for(moduleId in moreModules) {
    if(__webpack_require__.o(moreModules, moduleId)) {
      // 把返回的模块定义合并到当前的模块定义里面
      __webpack_require__.m[moduleId] = moreModules[moduleId];
    }
  }
  if(runtime) var result = runtime(__webpack_require__);
  if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
  for(;i < chunkIds.length; i++) {
    chunkId = chunkIds[i];
    if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
      // installedChunks[chunkId][0] 是 resolve 方法
      installedChunks[chunkId][0]();
    }
    installedChunks[chunkIds[i]] = 0;
  }

}

var chunkLoadingGlobal = self["webpackChunkwebpack5"] = self["webpackChunkwebpack5"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

console.log(Promise.all([() => {console.log('hello')}, () => {console.log('hello')}]))