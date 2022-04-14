/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//#! /usr/bin/env node\n__webpack_require__(/*! ../src/index */ \"./src/index.js\")\n\n//# sourceURL=webpack://node-to-esmodule/./bin/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/utils */ \"./src/utils.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n(0,_src_utils__WEBPACK_IMPORTED_MODULE_0__.log)()\r\nconst url = (0,_src_utils__WEBPACK_IMPORTED_MODULE_0__.exists)(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.'))\r\nconsole.log('url', url)\n\n//# sourceURL=webpack://node-to-esmodule/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exists\": () => (/* binding */ exists),\n/* harmony export */   \"log\": () => (/* binding */ log)\n/* harmony export */ });\n/* harmony import */ var path_exists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-exists */ \"./node_modules/path-exists/index.js\");\n\r\nfunction exists(p) {\r\n  return path_exists__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sync(p)\r\n}\r\nfunction log() {\r\n  console.log('utils')\r\n}\r\n\n\n//# sourceURL=webpack://node-to-esmodule/./src/utils.js?");

/***/ }),

/***/ "./node_modules/path-exists/index.js":
/*!*******************************************!*\
  !*** ./node_modules/path-exists/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pathExists\": () => (/* binding */ pathExists),\n/* harmony export */   \"pathExistsSync\": () => (/* binding */ pathExistsSync)\n/* harmony export */ });\n/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:fs */ \"node:fs\");\n\n\nasync function pathExists(path) {\n\ttry {\n\t\tawait node_fs__WEBPACK_IMPORTED_MODULE_0__.promises.access(path);\n\t\treturn true;\n\t} catch {\n\t\treturn false;\n\t}\n}\n\nfunction pathExistsSync(path) {\n\ttry {\n\t\tnode_fs__WEBPACK_IMPORTED_MODULE_0__.accessSync(path);\n\t\treturn true;\n\t} catch {\n\t\treturn false;\n\t}\n}\n\n\n//# sourceURL=webpack://node-to-esmodule/./node_modules/path-exists/index.js?");

/***/ }),

/***/ "node:fs":
/*!***************!*\
  !*** node:fs ***!
  \***************/
/***/ (() => {

eval("throw new Error(\"Module build failed: UnhandledSchemeError: Reading from \\\"node:fs\\\" is not handled by plugins (Unhandled scheme).\\nWebpack supports \\\"data:\\\" and \\\"file:\\\" URIs by default.\\nYou may need an additional plugin to handle \\\"node:\\\" URIs.\\n    at E:\\\\chenlei\\\\2022\\\\demo\\\\node支持esmodule\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:832:25\\n    at Hook.eval [as callAsync] (eval at create (E:\\\\chenlei\\\\2022\\\\demo\\\\node支持esmodule\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (E:\\\\chenlei\\\\2022\\\\demo\\\\node支持esmodule\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:18:14)\\n    at Object.processResource (E:\\\\chenlei\\\\2022\\\\demo\\\\node支持esmodule\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:829:8)\\n    at processResource (E:\\\\chenlei\\\\2022\\\\demo\\\\node支持esmodule\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:220:11)\\n    at iteratePitchingLoaders (E:\\\\chenlei\\\\2022\\\\demo\\\\node支持esmodule\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:171:10)\\n    at runLoaders (E:\\\\chenlei\\\\2022\\\\demo\\\\node支持esmodule\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:398:2)\\n    at NormalModule._doBuild (E:\\\\chenlei\\\\2022\\\\demo\\\\node支持esmodule\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:819:3)\\n    at NormalModule.build (E:\\\\chenlei\\\\2022\\\\demo\\\\node支持esmodule\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:963:15)\\n    at E:\\\\chenlei\\\\2022\\\\demo\\\\node支持esmodule\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1371:12\");\n\n//# sourceURL=webpack://node-to-esmodule/node:fs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./bin/index.js");
/******/ 	
/******/ })()
;