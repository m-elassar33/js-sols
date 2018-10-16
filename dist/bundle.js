/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_solutions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/solutions */ \"./src/modules/solutions.js\");\n\n\n// Test 1\nconsole.log(Object(_modules_solutions__WEBPACK_IMPORTED_MODULE_0__[\"f1\"])('bacdc', 'dcbac'));\nconsole.log(Object(_modules_solutions__WEBPACK_IMPORTED_MODULE_0__[\"f1\"])('bacdc', 'dcbad'));\n\n// Test 2\nconsole.log(Object(_modules_solutions__WEBPACK_IMPORTED_MODULE_0__[\"f2\"])(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGYxLCBmMiB9IGZyb20gJy4vbW9kdWxlcy9zb2x1dGlvbnMnO1xuXG4vLyBUZXN0IDFcbmNvbnNvbGUubG9nKGYxKCdiYWNkYycsICdkY2JhYycpKTtcbmNvbnNvbGUubG9nKGYxKCdiYWNkYycsICdkY2JhZCcpKTtcblxuLy8gVGVzdCAyXG5jb25zb2xlLmxvZyhmMihbJ2FiYScsICdiYWJhJywgJ2FiYScsICd4enhiJ10sIFsnYWJhJywgJ3h6eGInLCAnYWInXSkpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/modules/solutions.js":
/*!**********************************!*\
  !*** ./src/modules/solutions.js ***!
  \**********************************/
/*! exports provided: f1, f2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f1\", function() { return f1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f2\", function() { return f2; });\n// Test 1\nconst f1 = (a, b) => {\n  const freqs = {\n    a: { a: 0, b: 0 },\n    b: { a: 0, b: 0 },\n    c: { a: 0, b: 0 },\n    d: { a: 0, b: 0 },\n    e: { a: 0, b: 0 },\n    f: { a: 0, b: 0 },\n    g: { a: 0, b: 0 },\n    h: { a: 0, b: 0 },\n    i: { a: 0, b: 0 },\n    j: { a: 0, b: 0 },\n    k: { a: 0, b: 0 },\n    l: { a: 0, b: 0 },\n    m: { a: 0, b: 0 },\n    n: { a: 0, b: 0 },\n    o: { a: 0, b: 0 },\n    p: { a: 0, b: 0 },\n    q: { a: 0, b: 0 },\n    r: { a: 0, b: 0 },\n    s: { a: 0, b: 0 },\n    t: { a: 0, b: 0 },\n    u: { a: 0, b: 0 },\n    v: { a: 0, b: 0 },\n    w: { a: 0, b: 0 },\n    x: { a: 0, b: 0 },\n    y: { a: 0, b: 0 },\n    z: { a: 0, b: 0 }\n  };\n  for (let i = 0; i < a.length; i++) {\n    freqs[a[i].toLowerCase()].a++;\n  }\n  for (let j = 0; j < b.length; j++) {\n    freqs[b[j].toLowerCase()].b++;\n  }\n  let noOfDeletionsNeeded = 0;\n  for (const letter in freqs) {\n    if (freqs[letter].a !== freqs[letter].b) {\n      noOfDeletionsNeeded += Math.abs(freqs[letter].a - freqs[letter].b);\n    }\n  }\n  return noOfDeletionsNeeded;\n};\n\n// Test 2\nconst f2 = (a, b) => {\n  return b.map(str => {\n    let occurs = 0;\n    for (let i = 0; i < a.length; i++) {\n      if (a[i] === str) {\n        occurs++;\n      }\n    }\n    return occurs;\n  });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zb2x1dGlvbnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb2x1dGlvbnMuanM/N2RiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUZXN0IDFcbmV4cG9ydCBjb25zdCBmMSA9IChhLCBiKSA9PiB7XG4gIGNvbnN0IGZyZXFzID0ge1xuICAgIGE6IHsgYTogMCwgYjogMCB9LFxuICAgIGI6IHsgYTogMCwgYjogMCB9LFxuICAgIGM6IHsgYTogMCwgYjogMCB9LFxuICAgIGQ6IHsgYTogMCwgYjogMCB9LFxuICAgIGU6IHsgYTogMCwgYjogMCB9LFxuICAgIGY6IHsgYTogMCwgYjogMCB9LFxuICAgIGc6IHsgYTogMCwgYjogMCB9LFxuICAgIGg6IHsgYTogMCwgYjogMCB9LFxuICAgIGk6IHsgYTogMCwgYjogMCB9LFxuICAgIGo6IHsgYTogMCwgYjogMCB9LFxuICAgIGs6IHsgYTogMCwgYjogMCB9LFxuICAgIGw6IHsgYTogMCwgYjogMCB9LFxuICAgIG06IHsgYTogMCwgYjogMCB9LFxuICAgIG46IHsgYTogMCwgYjogMCB9LFxuICAgIG86IHsgYTogMCwgYjogMCB9LFxuICAgIHA6IHsgYTogMCwgYjogMCB9LFxuICAgIHE6IHsgYTogMCwgYjogMCB9LFxuICAgIHI6IHsgYTogMCwgYjogMCB9LFxuICAgIHM6IHsgYTogMCwgYjogMCB9LFxuICAgIHQ6IHsgYTogMCwgYjogMCB9LFxuICAgIHU6IHsgYTogMCwgYjogMCB9LFxuICAgIHY6IHsgYTogMCwgYjogMCB9LFxuICAgIHc6IHsgYTogMCwgYjogMCB9LFxuICAgIHg6IHsgYTogMCwgYjogMCB9LFxuICAgIHk6IHsgYTogMCwgYjogMCB9LFxuICAgIHo6IHsgYTogMCwgYjogMCB9XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgIGZyZXFzW2FbaV0udG9Mb3dlckNhc2UoKV0uYSsrO1xuICB9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgYi5sZW5ndGg7IGorKykge1xuICAgIGZyZXFzW2Jbal0udG9Mb3dlckNhc2UoKV0uYisrO1xuICB9XG4gIGxldCBub09mRGVsZXRpb25zTmVlZGVkID0gMDtcbiAgZm9yIChjb25zdCBsZXR0ZXIgaW4gZnJlcXMpIHtcbiAgICBpZiAoZnJlcXNbbGV0dGVyXS5hICE9PSBmcmVxc1tsZXR0ZXJdLmIpIHtcbiAgICAgIG5vT2ZEZWxldGlvbnNOZWVkZWQgKz0gTWF0aC5hYnMoZnJlcXNbbGV0dGVyXS5hIC0gZnJlcXNbbGV0dGVyXS5iKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vT2ZEZWxldGlvbnNOZWVkZWQ7XG59O1xuXG4vLyBUZXN0IDJcbmV4cG9ydCBjb25zdCBmMiA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBiLm1hcChzdHIgPT4ge1xuICAgIGxldCBvY2N1cnMgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFbaV0gPT09IHN0cikge1xuICAgICAgICBvY2N1cnMrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9jY3VycztcbiAgfSk7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/solutions.js\n");

/***/ })

/******/ });