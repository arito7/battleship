/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/board/board-component.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/board/board-component.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".grid-container {\n  display: grid;\n  grid-template-columns: repeat(10, var(--cell-size));\n  grid-template-rows: repeat(10, var(--cell-size));\n  gap: 0.2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/components/board/board-component.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mDAAmD;EACnD,gDAAgD;EAChD,WAAW;AACb","sourcesContent":[".grid-container {\n  display: grid;\n  grid-template-columns: repeat(10, var(--cell-size));\n  grid-template-rows: repeat(10, var(--cell-size));\n  gap: 0.2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/cell.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/cell.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cell {\n  border-radius: 0.2rem;\n  cursor: pointer;\n  background-color: var(--cell-bgc);\n  transition-property: background-color, border-radius;\n  transition-duration: 1000ms;\n  animation-name: fadeIn;\n  animation-duration: 300ms;\n}\n\n.cell:hover:not(.missed):not(.hit) {\n  scale: 0.95;\n  background-color: #cdcdcd;\n}\n\n.cell.occupied {\n  background-color: var(--cell-occupied);\n}\n\n.cell.hit {\n  background-color: red;\n  border-radius: 50%;\n}\n\n.cell.missed {\n  background-color: #343434;\n}\n.cell.v-ship-start {\n  border-top-left-radius: 3rem;\n  border-top-right-radius: 3rem;\n}\n\n.cell.v-ship-end {\n  border-bottom-left-radius: 3rem;\n  border-bottom-right-radius: 3rem;\n}\n\n.cell.h-ship-start {\n  border-top-left-radius: 3rem;\n  border-bottom-left-radius: 3rem;\n}\n\n.cell.h-ship-end {\n  border-top-right-radius: 3rem;\n  border-bottom-right-radius: 3rem;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/components/cell.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,eAAe;EACf,iCAAiC;EACjC,oDAAoD;EACpD,2BAA2B;EAC3B,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;EAC/B,gCAAgC;AAClC;;AAEA;EACE,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":[".cell {\n  border-radius: 0.2rem;\n  cursor: pointer;\n  background-color: var(--cell-bgc);\n  transition-property: background-color, border-radius;\n  transition-duration: 1000ms;\n  animation-name: fadeIn;\n  animation-duration: 300ms;\n}\n\n.cell:hover:not(.missed):not(.hit) {\n  scale: 0.95;\n  background-color: #cdcdcd;\n}\n\n.cell.occupied {\n  background-color: var(--cell-occupied);\n}\n\n.cell.hit {\n  background-color: red;\n  border-radius: 50%;\n}\n\n.cell.missed {\n  background-color: #343434;\n}\n.cell.v-ship-start {\n  border-top-left-radius: 3rem;\n  border-top-right-radius: 3rem;\n}\n\n.cell.v-ship-end {\n  border-bottom-left-radius: 3rem;\n  border-bottom-right-radius: 3rem;\n}\n\n.cell.h-ship-start {\n  border-top-left-radius: 3rem;\n  border-bottom-left-radius: 3rem;\n}\n\n.cell.h-ship-end {\n  border-top-right-radius: 3rem;\n  border-bottom-right-radius: 3rem;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/modal/gameover-modal.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/modal/gameover-modal.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gameover-modal-content button {\n  font-size: 1.1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/components/modal/gameover-modal.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB","sourcesContent":[".gameover-modal-content button {\n  font-size: 1.1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/modal/modal.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/modal/modal.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\n  background-color: #34343477;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  padding: 20vh 2rem;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  align-content: center;\n  justify-items: center;\n}\n\n.modal-content {\n  background-color: var(--modal-bgc);\n  border-radius: 0.5rem;\n  padding: 2rem;\n  gap: 1rem;\n  display: grid;\n  max-width: var(--max-width);\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/components/modal/modal.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,uBAAuB;EACvB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,kCAAkC;EAClC,qBAAqB;EACrB,aAAa;EACb,SAAS;EACT,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":[".modal {\n  background-color: #34343477;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  padding: 20vh 2rem;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  align-content: center;\n  justify-items: center;\n}\n\n.modal-content {\n  background-color: var(--modal-bgc);\n  border-radius: 0.5rem;\n  padding: 2rem;\n  gap: 1rem;\n  display: grid;\n  max-width: var(--max-width);\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/modal/placeship-modal.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/modal/placeship-modal.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".psmodal-content-container .grid-container {\n  --cell-bgc: rgb(111, 162, 185);\n  --cell-size: min(100vw / 2 / 10 - 1rem, var(--max-width) / 1.5 / 10 - 1rem);\n  --cells-highlight: rgb(216, 137, 137);\n  --ship-color: rgb(83, 75, 75);\n  display: grid;\n  gap: 0.3rem;\n  grid-template-columns: repeat(10, var(--cell-size));\n  grid-template-rows: repeat(10, var(--cell-size));\n}\n\n.psmodal-content-container .ship-type {\n  color: white;\n  font-weight: bold;\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  margin: 0.5rem 0;\n  animation-name: slideIn;\n  animation-duration: 400ms;\n  overflow: hidden;\n}\n@keyframes slideIn {\n  0% {\n    margin-left: 50%;\n  }\n\n  100% {\n    margin-left: 0%;\n  }\n}\n.psmodal-content-container .cell {\n  transition-property: background-color, border-radius;\n  transition-duration: 300ms;\n}\n.psmodal-content-container .cell.occupied {\n  background-color: var(--ship-color);\n}\n\n.psmodal-content-container .hovered {\n  background-color: var(--cells-highlight);\n}\n\n.psmodal-content-container .cell.v-ship-start {\n  border-top-left-radius: 3rem;\n  border-top-right-radius: 3rem;\n}\n\n.psmodal-content-container .cell.v-ship-end {\n  border-bottom-left-radius: 3rem;\n  border-bottom-right-radius: 3rem;\n}\n\n.psmodal-content-container .cell.h-ship-start {\n  border-top-left-radius: 3rem;\n  border-bottom-left-radius: 3rem;\n}\n\n.psmodal-content-container .cell.h-ship-end {\n  border-top-right-radius: 3rem;\n  border-bottom-right-radius: 3rem;\n}\n", "",{"version":3,"sources":["webpack://./src/components/modal/placeship-modal.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,2EAA2E;EAC3E,qCAAqC;EACrC,6BAA6B;EAC7B,aAAa;EACb,WAAW;EACX,mDAAmD;EACnD,gDAAgD;AAClD;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB;AACA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;AACF;AACA;EACE,oDAAoD;EACpD,0BAA0B;AAC5B;AACA;EACE,mCAAmC;AACrC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;EAC/B,gCAAgC;AAClC;;AAEA;EACE,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC","sourcesContent":[".psmodal-content-container .grid-container {\n  --cell-bgc: rgb(111, 162, 185);\n  --cell-size: min(100vw / 2 / 10 - 1rem, var(--max-width) / 1.5 / 10 - 1rem);\n  --cells-highlight: rgb(216, 137, 137);\n  --ship-color: rgb(83, 75, 75);\n  display: grid;\n  gap: 0.3rem;\n  grid-template-columns: repeat(10, var(--cell-size));\n  grid-template-rows: repeat(10, var(--cell-size));\n}\n\n.psmodal-content-container .ship-type {\n  color: white;\n  font-weight: bold;\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  margin: 0.5rem 0;\n  animation-name: slideIn;\n  animation-duration: 400ms;\n  overflow: hidden;\n}\n@keyframes slideIn {\n  0% {\n    margin-left: 50%;\n  }\n\n  100% {\n    margin-left: 0%;\n  }\n}\n.psmodal-content-container .cell {\n  transition-property: background-color, border-radius;\n  transition-duration: 300ms;\n}\n.psmodal-content-container .cell.occupied {\n  background-color: var(--ship-color);\n}\n\n.psmodal-content-container .hovered {\n  background-color: var(--cells-highlight);\n}\n\n.psmodal-content-container .cell.v-ship-start {\n  border-top-left-radius: 3rem;\n  border-top-right-radius: 3rem;\n}\n\n.psmodal-content-container .cell.v-ship-end {\n  border-bottom-left-radius: 3rem;\n  border-bottom-right-radius: 3rem;\n}\n\n.psmodal-content-container .cell.h-ship-start {\n  border-top-left-radius: 3rem;\n  border-bottom-left-radius: 3rem;\n}\n\n.psmodal-content-container .cell.h-ship-end {\n  border-top-right-radius: 3rem;\n  border-bottom-right-radius: 3rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ship-status/ship-status-component.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ship-status/ship-status-component.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ships {\n  display: grid;\n  grid-template-columns: 1fr;\n  width: 100%;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem 0 1.5rem;\n}\n\n.ship {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n  width: 100%;\n}\n\n.ship-slots {\n  display: grid;\n  grid-template-columns: repeat(5, var(--cell-size));\n  grid-template-rows: var(--cell-size);\n  gap: 0.2rem;\n  justify-content: end;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ship-status/ship-status-component.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,0BAA0B;EAC1B,WAAW;EACX,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kDAAkD;EAClD,oCAAoC;EACpC,WAAW;EACX,oBAAoB;AACtB","sourcesContent":[".ships {\n  display: grid;\n  grid-template-columns: 1fr;\n  width: 100%;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem 0 1.5rem;\n}\n\n.ship {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n  width: 100%;\n}\n\n.ship-slots {\n  display: grid;\n  grid-template-columns: repeat(5, var(--cell-size));\n  grid-template-rows: var(--cell-size);\n  gap: 0.2rem;\n  justify-content: end;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/AlfaSlabOne-Regular.ttf */ "./src/fonts/AlfaSlabOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cell-size: min(100vw / 2 / 10 - 1rem, var(--max-width) / 1.5 / 10 - 1rem);\n  --enemy-bgc: #ae5656;\n  --player-bgc: #5656ae;\n  --main-bgc: rgb(70, 85, 92);\n  --header-bgc: var(--main-bgc);\n  --cell-bgc: rgb(111, 162, 185);\n  --modal-bgc: var(--player-bgc);\n  --cell-occupied: #ae9999;\n  --shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  --max-width: 900px;\n}\n\n@font-face {\n  font-family: AlfaSlab;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody,\nh2,\nh1 {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--main-bgc);\n  font-family: AlfaSlab, 'Courier New', Courier, monospace;\n  height: 100vh;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr 6fr 1fr;\n  grid-template-columns: 1fr;\n  justify-items: center;\n}\n\nbutton {\n  border-radius: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n  border: none;\n  font-weight: bold;\n  background-color: var(--enemy-bgc);\n  box-shadow: var(--shadow);\n}\nbutton:hover {\n  scale: 0.95;\n}\nbutton:active {\n  scale: 0.9;\n}\n\n.header {\n  background-color: var(--header-bgc);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  max-width: var(--max-width);\n  color: white;\n  justify-items: center;\n}\n\nh1 {\n  padding: 1rem;\n}\n\n.main {\n  background-color: var(--main-bgc);\n  height: 100%;\n  display: grid;\n  max-width: var(--max-width);\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  justify-content: center;\n}\n\n.enemyField,\n.playerField {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 6fr 4fr;\n  justify-items: center;\n  border-radius: 0.5rem;\n  margin: 0 1rem 1rem 1rem;\n  padding: 0 1rem 1rem 1rem;\n  align-items: center;\n}\n\n.playerField {\n  background-color: var(--player-bgc);\n}\n\n.enemyField {\n  background-color: var(--enemy-bgc);\n}\n\n.visible {\n  display: grid;\n}\n\n.shadow {\n  box-shadow: var(--shadow);\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,2EAA2E;EAC3E,oBAAoB;EACpB,qBAAqB;EACrB,2BAA2B;EAC3B,6BAA6B;EAC7B,8BAA8B;EAC9B,8BAA8B;EAC9B,wBAAwB;EACxB,yCAAyC;EACzC,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,4CAA0C;AAC5C;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iCAAiC;EACjC,wDAAwD;EACxD,aAAa;EACb,WAAW;EACX,aAAa;EACb,+BAA+B;EAC/B,0BAA0B;EAC1B,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,kCAAkC;EAClC,yBAAyB;AAC3B;AACA;EACE,WAAW;AACb;AACA;EACE,UAAU;AACZ;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,0BAA0B;EAC1B,uBAAuB;EACvB,2BAA2B;EAC3B,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,aAAa;EACb,2BAA2B;EAC3B,qCAAqC;EACrC,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;;EAEE,aAAa;EACb,0BAA0B;EAC1B,+BAA+B;EAC/B,qBAAqB;EACrB,qBAAqB;EACrB,wBAAwB;EACxB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[":root {\n  --cell-size: min(100vw / 2 / 10 - 1rem, var(--max-width) / 1.5 / 10 - 1rem);\n  --enemy-bgc: #ae5656;\n  --player-bgc: #5656ae;\n  --main-bgc: rgb(70, 85, 92);\n  --header-bgc: var(--main-bgc);\n  --cell-bgc: rgb(111, 162, 185);\n  --modal-bgc: var(--player-bgc);\n  --cell-occupied: #ae9999;\n  --shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  --max-width: 900px;\n}\n\n@font-face {\n  font-family: AlfaSlab;\n  src: url(../fonts/AlfaSlabOne-Regular.ttf);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody,\nh2,\nh1 {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--main-bgc);\n  font-family: AlfaSlab, 'Courier New', Courier, monospace;\n  height: 100vh;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr 6fr 1fr;\n  grid-template-columns: 1fr;\n  justify-items: center;\n}\n\nbutton {\n  border-radius: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n  border: none;\n  font-weight: bold;\n  background-color: var(--enemy-bgc);\n  box-shadow: var(--shadow);\n}\nbutton:hover {\n  scale: 0.95;\n}\nbutton:active {\n  scale: 0.9;\n}\n\n.header {\n  background-color: var(--header-bgc);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  max-width: var(--max-width);\n  color: white;\n  justify-items: center;\n}\n\nh1 {\n  padding: 1rem;\n}\n\n.main {\n  background-color: var(--main-bgc);\n  height: 100%;\n  display: grid;\n  max-width: var(--max-width);\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  justify-content: center;\n}\n\n.enemyField,\n.playerField {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 6fr 4fr;\n  justify-items: center;\n  border-radius: 0.5rem;\n  margin: 0 1rem 1rem 1rem;\n  padding: 0 1rem 1rem 1rem;\n  align-items: center;\n}\n\n.playerField {\n  background-color: var(--player-bgc);\n}\n\n.enemyField {\n  background-color: var(--enemy-bgc);\n}\n\n.visible {\n  display: grid;\n}\n\n.shadow {\n  box-shadow: var(--shadow);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/board/board-component.css":
/*!**************************************************!*\
  !*** ./src/components/board/board-component.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_board_component_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./board-component.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/board/board-component.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_board_component_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_board_component_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_board_component_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_board_component_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/cell.css":
/*!*********************************!*\
  !*** ./src/components/cell.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./cell.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/cell.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/modal/gameover-modal.css":
/*!*************************************************!*\
  !*** ./src/components/modal/gameover-modal.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameover_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./gameover-modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/modal/gameover-modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameover_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameover_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameover_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameover_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/modal/modal.css":
/*!****************************************!*\
  !*** ./src/components/modal/modal.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/modal/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/modal/placeship-modal.css":
/*!**************************************************!*\
  !*** ./src/components/modal/placeship-modal.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_placeship_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./placeship-modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/modal/placeship-modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_placeship_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_placeship_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_placeship_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_placeship_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ship-status/ship-status-component.css":
/*!**************************************************************!*\
  !*** ./src/components/ship-status/ship-status-component.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ship_status_component_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./ship-status-component.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ship-status/ship-status-component.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ship_status_component_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ship_status_component_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ship_status_component_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ship_status_component_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/board/board-component.js":
/*!*************************************************!*\
  !*** ./src/components/board/board-component.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _board_component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-component.css */ "./src/components/board/board-component.css");
/* harmony import */ var _cell_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cell.css */ "./src/components/cell.css");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  /**
   * Holds reference to cells in board [div elements]
   */
  const cells = [];
  const container = document.createElement('div');
  container.classList.add('grid-container');

  const mPopulate = () => {
    for (let y = 0; y < 10; y += 1) {
      cells.push(Array(10));
      for (let x = 0; x < 10; x += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.setAttribute('x', x);
        cell.setAttribute('y', y);
        cells[y][x] = cell;
      }
    }
  };

  /**
   * Added so board can be easily reset when starting a new game
   */
  const resetNode = () => {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
    mPopulate();
  };

  mPopulate();

  return { container, cells, resetNode };
});


/***/ }),

/***/ "./src/components/modal/gameover-modal.js":
/*!************************************************!*\
  !*** ./src/components/modal/gameover-modal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/components/modal/modal.js");
/* harmony import */ var _gameover_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameover-modal.css */ "./src/components/modal/gameover-modal.css");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const modal = (0,_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  modal.container.classList.add('gameover-modal-content');

  modal.setTitle('Game Over!');

  const eMsg = document.createElement('p');
  const playAgainBtn = document.createElement('button');
  playAgainBtn.textContent = 'Play Again';

  modal.content.appendChild(eMsg);
  modal.content.appendChild(playAgainBtn);

  return { ...modal, playAgainBtn, eMsg };
});


/***/ }),

/***/ "./src/components/modal/modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.css */ "./src/components/modal/modal.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const events = { close: [] };
  function emit(event, args) {
    events[event].forEach((fn) => {
      fn(...args);
    });
  }
  function on(event, fn) {
    if (events[event]) {
      events[event].push(fn);
    }
  }
  const container = document.createElement('div');
  container.classList.add('modal');

  const content = document.createElement('div');
  content.classList.add('modal-content', 'shadow');

  container.appendChild(content);

  function setTitle(title) {
    const mTitle = document.createElement('h2');
    mTitle.textContent = title;
    content.appendChild(mTitle);
  }

  function show() {
    container.style.display = 'grid';
  }

  function hide() {
    container.style.display = 'none';
  }

  return { container, content, setTitle, show, hide, emit, on };
});


/***/ }),

/***/ "./src/components/modal/placeship-modal.js":
/*!*************************************************!*\
  !*** ./src/components/modal/placeship-modal.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/components/modal/modal.js");
/* harmony import */ var _placeship_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeship-modal.css */ "./src/components/modal/placeship-modal.css");
/* harmony import */ var _js_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/player */ "./src/js/player.js");
/* harmony import */ var _js_gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/gameboard */ "./src/js/gameboard.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../board/board-component */ "./src/components/board/board-component.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const player = (0,_js_player__WEBPACK_IMPORTED_MODULE_2__["default"])(_js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].create());
  const modal = (0,_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let currentShipIndex = 0;
  let direction = _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].HORIZONTAL;
  function changeDirection() {
    direction =
      direction === _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].HORIZONTAL
        ? _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].VERTICAL
        : _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].HORIZONTAL;
  }

  const rotateBtn = document.createElement('button');
  const shipTypeContainer = document.createElement('div');
  const shipType = document.createElement('p');
  const boardComponent = (0,_board_board_component__WEBPACK_IMPORTED_MODULE_4__["default"])();

  modal.content.classList.add('psmodal-content-container');
  shipType.classList.add('ship-type');

  modal.setTitle('Place your ships');
  rotateBtn.textContent = 'Rotate';
  shipType.textContent = _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].SHIPS[currentShipIndex].type;

  modal.content.appendChild(rotateBtn);
  shipTypeContainer.appendChild(shipType);
  modal.content.appendChild(shipTypeContainer);

  rotateBtn.addEventListener('click', () => {
    changeDirection();
  });

  const { cellEnterListener, cellLeaveListener } = (() => {
    function listenerTemplate(y, x, size, addOrRemove) {
      let mY = y;
      let mX = x;
      const classStart =
        direction === _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].HORIZONTAL ? 'h-ship-start' : 'v-ship-start';
      const classEnd =
        direction === _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].HORIZONTAL ? 'h-ship-end' : 'v-ship-end';

      for (let i = 0; i < size; i += 1) {
        mX = direction === _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].HORIZONTAL ? x + i : x;
        mY = direction === _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].VERTICAL ? y + i : y;
        if (
          _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].isWithinBounds(mY, mX) &&
          player.board[mY][mX] === _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].EMPTY
        ) {
          if (addOrRemove === 'add') {
            if (i === 0) {
              boardComponent.cells[mY][mX].classList.add(classStart);
            } else if (i === size - 1) {
              boardComponent.cells[mY][mX].classList.add(classEnd);
            }
            boardComponent.cells[mY][mX].classList.add('hovered');
          } else if (addOrRemove === 'remove') {
            if (i === 0) {
              boardComponent.cells[mY][mX].classList.remove(classStart);
            } else if (i === size - 1) {
              boardComponent.cells[mY][mX].classList.remove(classEnd);
            }
            boardComponent.cells[mY][mX].classList.remove('hovered');
          }
        }
      }
    }
    function cellEnterListener(e) {
      const x = parseInt(e.target.getAttribute('x'), 10);
      const y = parseInt(e.target.getAttribute('y'), 10);
      listenerTemplate(y, x, _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].SHIPS[currentShipIndex].size, 'add');
    }

    function cellLeaveListener(e) {
      const x = parseInt(e.target.getAttribute('x'), 10);
      const y = parseInt(e.target.getAttribute('y'), 10);
      listenerTemplate(y, x, _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].SHIPS[currentShipIndex].size, 'remove');
    }

    return { cellEnterListener, cellLeaveListener };
  })();

  function cellClickListener(e) {
    const x = parseInt(e.target.getAttribute('x'), 10);
    const y = parseInt(e.target.getAttribute('y'), 10);
    if (
      player.placeShip(y, x, _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].SHIPS[currentShipIndex].size, direction)
    ) {
      currentShipIndex += 1;
      render();
    }
  }

  function render() {
    if (_js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].SHIPS[currentShipIndex]) {
      // removing and appending to trigger css animation
      shipTypeContainer.removeChild(shipType);
      shipType.textContent = _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].SHIPS[currentShipIndex].type;
      shipTypeContainer.appendChild(shipType);
    } else {
      modal.content.removeChild(shipTypeContainer);
      modal.emit('close', [player]);
      modal.hide();
    }
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        if (player.board[y][x] !== _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].EMPTY) {
          boardComponent.cells[y][x].classList.add('occupied');
        }
        if (
          JSON.stringify(player.board[y][x].head) ===
          JSON.stringify([y, x, _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].VERTICAL])
        ) {
          boardComponent.cells[y][x].classList.add('v-ship-start');
        } else if (
          JSON.stringify(player.board[y][x].tail) ===
          JSON.stringify([y, x, _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].VERTICAL])
        ) {
          boardComponent.cells[y][x].classList.add('v-ship-end');
        } else if (
          JSON.stringify(player.board[y][x].head) ===
          JSON.stringify([y, x, _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].HORIZONTAL])
        ) {
          boardComponent.cells[y][x].classList.add('h-ship-start');
        } else if (
          JSON.stringify(player.board[y][x].tail) ===
          JSON.stringify([y, x, _js_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"].HORIZONTAL])
        ) {
          boardComponent.cells[y][x].classList.add('h-ship-end');
        }
      }
    }
  }

  (() => {
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        boardComponent.cells[y][x].addEventListener(
          'mouseenter',
          cellEnterListener
        );
        boardComponent.cells[y][x].addEventListener(
          'mouseleave',
          cellLeaveListener
        );
        boardComponent.cells[y][x].addEventListener('click', cellClickListener);
      }
    }
  })();

  modal.content.appendChild(boardComponent.container);

  return { ...modal };
});


/***/ }),

/***/ "./src/components/ship-status/ship-status-component.js":
/*!*************************************************************!*\
  !*** ./src/components/ship-status/ship-status-component.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_status_component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-status-component.css */ "./src/components/ship-status/ship-status-component.css");
/* harmony import */ var _js_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/gameboard */ "./src/js/gameboard.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const container = document.createElement('div');
  container.classList.add('ships');
  const cells = [];
  const createNodes = (player) => {
    mResetContainer();
    _js_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].SHIPS.forEach((ship) => {
      const mship = document.createElement('div');
      const shipType = document.createElement('p');
      const shipHealthContainer = document.createElement('div');

      mship.classList.add('ship');
      shipHealthContainer.classList.add('ship-slots');

      shipType.textContent = ship.type;
      for (let i = 0; i < ship.size; i += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        shipHealthContainer.appendChild(cell);
        cells.push(cell);
      }

      mship.appendChild(shipType);
      mship.appendChild(shipHealthContainer);

      container.appendChild(mship);
    });
  };

  const render = (player) => {
    for (let i = 0; i < player.ships.length; i += 1) {
      if (player.ships[i].isSunk()) {
        cells[i].classList.add('hit');
      }
    }
  };

  const mResetContainer = () => {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
  };
  return { container, createNodes, render };
});


/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _components_modal_gameover_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modal/gameover-modal */ "./src/components/modal/gameover-modal.js");
/* harmony import */ var _components_modal_placeship_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modal/placeship-modal */ "./src/components/modal/placeship-modal.js");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/board/board-component */ "./src/components/board/board-component.js");
/* harmony import */ var _components_ship_status_ship_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ship-status/ship-status-component */ "./src/components/ship-status/ship-status-component.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mainContainer, playerField, enemyField) => {
  let mPlayer;
  let enemy;

  const gameoverModal = (0,_components_modal_gameover_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
  mainContainer.appendChild(gameoverModal.container);

  const playerGrid = (0,_components_board_board_component__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const enemyGrid = (0,_components_board_board_component__WEBPACK_IMPORTED_MODULE_4__["default"])();
  playerField.appendChild(playerGrid.container);
  enemyField.appendChild(enemyGrid.container);

  // const playerShipStatus = ShipStatusComponent();
  // const enemyShipStatus = ShipStatusComponent();
  // playerField.appendChild(playerShipStatus.container);
  // enemyField.appendChild(enemyShipStatus.container);

  gameoverModal.playAgainBtn.addEventListener(
    'click',
    playAgainHandler.bind(gameoverModal)
  );

  function resetNodes() {
    function resetNode(node) {
      if (node instanceof NodeList) {
        node.forEach((e) => {
          while (e.hasChildNodes()) {
            e.removeChild(e.firstChild);
          }
        });
      } else {
        while (node.hasChildNodes()) {
          node.removeChild(node.firstChild);
        }
      }
    }
    resetNode(playerField);
    resetNode(enemyField);
  }

  /**
   * Does not re-render, just adds CSS classes
   */
  function render() {
    // for gameboard grid
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        if (mPlayer.board[y][x]) {
          playerGrid.cells[y][x].classList.add('occupied');

          if (mPlayer.board[y][x] === _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].HIT) {
            playerGrid.cells[y][x].classList.add('hit');
          } else if (mPlayer.board[y][x] === _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].MISSED) {
            playerGrid.cells[y][x].classList.add('missed');
          }
        }

        if (enemy.board[y][x] === _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].HIT) {
          enemyGrid.cells[y][x].classList.add('hit');
        } else if (enemy.board[y][x] === _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].MISSED) {
          enemyGrid.cells[y][x].classList.add('missed');
        }

        if (
          JSON.stringify(mPlayer.board[y][x].head) ===
          JSON.stringify([y, x, _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL])
        ) {
          playerGrid.cells[y][x].classList.add('v-ship-start');
        } else if (
          JSON.stringify(mPlayer.board[y][x].tail) ===
          JSON.stringify([y, x, _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL])
        ) {
          playerGrid.cells[y][x].classList.add('v-ship-end');
        } else if (
          JSON.stringify(mPlayer.board[y][x].head) ===
          JSON.stringify([y, x, _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].HORIZONTAL])
        ) {
          playerGrid.cells[y][x].classList.add('h-ship-start');
        } else if (
          JSON.stringify(mPlayer.board[y][x].tail) ===
          JSON.stringify([y, x, _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].HORIZONTAL])
        ) {
          playerGrid.cells[y][x].classList.add('h-ship-end');
        }
      }
    }

    // for Boat states below grid
    //   for (let i = 0; i < mPlayer.ships.length; i += 1) {
    //     for (let j = 0; j < mPlayer.ships[i].length; j += 1) {
    //       if (mPlayer.ships[i].isSunk()) {
    //         playerGrid.cells[i][j].classList.add('hit');
    //       }
    //       if (enemy.ships[i].isSunk()) {
    //         [i][j].classList.add('hit');
    //       }
    //     }
    //   }
  }

  function playAgainHandler() {
    this.hide();
    startGame();
  }

  function startGame() {
    playerGrid.resetNode();
    enemyGrid.resetNode();
    enemy = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].create(), true);
    const placeShipModal = (0,_components_modal_placeship_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
    mainContainer.appendChild(placeShipModal.container);

    placeShipModal.on('close', (player) => {
      mPlayer = player;
      // playerShipStatus.createNodes(mPlayer);
      // enemyShipStatus.createNodes(enemy);
      placeShipModal.hide();
      render();
    });

    placeShipModal.show();

    function enemyCellListener(y, x) {
      mPlayer.attack(y, x, enemy);
      // enemyShipStatus.render(enemy);
      // playerShipStatus.render(mPlayer);
      render();
      checkGameState();
      aiMove();
    }

    (() => {
      for (let y = 0; y < 10; y += 1) {
        for (let x = 0; x < 10; x += 1) {
          enemyGrid.cells[y][x].addEventListener(
            'click',
            enemyCellListener.bind(enemyGrid.cells[y][x], y, x),
            { once: true }
          );
        }
      }
    })();

    function checkGameState() {
      if (mPlayer.allShipsSunk() || enemy.allShipsSunk()) {
        gameoverModal.eMsg.textContent = mPlayer.allShipsSunk()
          ? 'You Lost!'
          : 'You Won!';
        gameoverModal.show();
      }
    }

    function aiMove() {
      while (true) {
        const y = Math.round(Math.random() * 9);
        const x = Math.round(Math.random() * 9);
        if (enemy.attack(y, x, mPlayer)) {
          break;
        }
      }
      render();
      checkGameState();
    }
  }

  return { startGame };
});


/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
  const SIZE = 10;
  const EMPTY = 0;
  const MISSED = 1;
  const HIT = 2;
  const HORIZONTAL = 0;
  const VERTICAL = 1;

  const SHIPS = [
    { type: 'Carrier', size: 5 },
    { type: 'BattleShip', size: 4 },
    { type: 'Destroyer', size: 3 },
    { type: 'Submarine', size: 3 },
    { type: 'Patrol Boat', size: 2 },
  ];
  /**
   * @param {number} x x-coordinate
   * @param {number} y y-coordinate
   * @returns true if within bounds of gameboard, false otherwise
   */
  const isWithinBounds = (y, x) => y < SIZE && x < SIZE && y > -1 && x > -1;

  const create = () => {
    let board;
    let ships = [];

    const isAttackableCell = (y, x) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      board[y][x] !== HIT && board[y][x] !== MISSED;

    const isPlaceable = (y, x) => board[y][x] === EMPTY;

    const reset = () => {
      board = [
        Array(10).fill(EMPTY),
        Array(10).fill(EMPTY),
        Array(10).fill(EMPTY),
        Array(10).fill(EMPTY),
        Array(10).fill(EMPTY),
        Array(10).fill(EMPTY),
        Array(10).fill(EMPTY),
        Array(10).fill(EMPTY),
        Array(10).fill(EMPTY),
        Array(10).fill(EMPTY),
      ];
    };

    reset();

    /**
     * @param {number} y y-coordinate
     * @param {number} x x-coordinate
     * @param {number} size size of ship
     * @param {number} orientation 0 = horizontal , 1 = vertical
     * @returns true if ship is successfully placed, false otherwise
     */
    const placeShip = (y, x, size, orientation = HORIZONTAL) => {
      const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(size);
      let mX;
      let mY;

      for (let i = 0; i < size; i += 1) {
        mX = orientation === HORIZONTAL ? x + i : x;
        mY = orientation === VERTICAL ? y + i : y;
        if (!(isWithinBounds(mY, mX) && isPlaceable(mY, mX))) {
          return false;
        }
      }

      for (let i = 0; i < size; i += 1) {
        mX = orientation === HORIZONTAL ? x + i : x;
        mY = orientation === VERTICAL ? y + i : y;
        // properties to help with constructing ui
        if (i === 0) {
          ship.head = [mY, mX, orientation];
        } else if (i === size - 1) {
          ship.tail = [mY, mX, orientation];
        }
        board[mY][mX] = ship;
      }
      ships.push(ship);
      return true;
    };

    /**
     * @param {Number} y y-coordinate
     * @param {Number} x x-coordinate
     * @returns {Boolean} true if valid attack false otherwise
     */
    const receiveAttack = (y, x) => {
      if (isWithinBounds(y, x) && isAttackableCell(y, x)) {
        if (board[y][x].hit) {
          board[y][x].hit();
          board[y][x] = HIT;
          // eslint-disable-next-line no-else-return
        } else {
          board[y][x] = MISSED;
        }
        return true;
      }
      return false;
    };

    /**
     * @returns {[{x:number, y:number}]} Array of objects containing missed hits coordinates
     */
    const missedAttacks = () => {
      const temp = [];
      for (let y = 0; y < SIZE; y += 1) {
        for (let x = 0; x < SIZE; x += 1) {
          if (board[y][x] === MISSED) {
            temp.push({ y, x });
          }
        }
      }
      return temp;
    };

    const allShipsSunk = () => {
      for (let y = 0; y < SIZE; y += 1) {
        for (let x = 0; x < SIZE; x += 1) {
          if (board[y][x].length) {
            if (!board[y][x].isSunk()) {
              return false;
            }
          }
        }
      }
      return true;
    };

    /**
     * Instance
     */
    return {
      reset,
      allShipsSunk,
      missedAttacks,
      receiveAttack,
      placeShip,
      board,
    };
  };

  /**
   * Factory Static
   */
  return {
    create,
    SIZE,
    SHIPS,
    EMPTY,
    MISSED,
    HIT,
    HORIZONTAL,
    VERTICAL,
    isWithinBounds,
  };
})());


/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((gameboard, bot = false) => {
  if (bot) {
    _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].SHIPS.forEach((ship) => {
      while (true) {
        const x = Math.round(Math.random() * 9);
        const y = Math.round(Math.random() * 9);
        if (gameboard.placeShip(y, x, ship.size)) {
          break;
        }
      }
    });
  }

  const attack = (y, x, player) => player.receiveAttack(y, x);
  return { attack, ...gameboard };
});


/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((length) => {
  let mLife = length;
  const life = mLife;
  const hit = () => {
    if (mLife) {
      mLife -= 1;
      return true;
    }
    return false;
  };
  const isSunk = () => !mLife;

  return { life, length, hit, isSunk };
});


/***/ }),

/***/ "./src/fonts/AlfaSlabOne-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/AlfaSlabOne-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76486fb5cc170dab15a5.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/game */ "./src/js/game.js");
/* harmony import */ var _components_ship_status_ship_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ship-status/ship-status-component */ "./src/components/ship-status/ship-status-component.js");




(() => {
  const main = document.querySelector('.main');
  const playerField = document.querySelector('.playerField');
  const enemyField = document.querySelector('.enemyField');

  const game = (0,_js_game__WEBPACK_IMPORTED_MODULE_1__["default"])(main, playerField, enemyField);
  game.startGame();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckIwQjtBQUNHO0FBQ29EOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLG9EQUFJO0FBQ25CO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9ib2FyZC9ib2FyZC1jb21wb25lbnQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9jZWxsLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvZ2FtZW92ZXItbW9kYWwuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL21vZGFsL3BsYWNlc2hpcC1tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3NoaXAtc3RhdHVzL3NoaXAtc3RhdHVzLWNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2JvYXJkL2JvYXJkLWNvbXBvbmVudC5jc3M/MDA4OSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvY2VsbC5jc3M/ZjUzZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvZ2FtZW92ZXItbW9kYWwuY3NzPzAzOGQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNzcz8wMWRiIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9tb2RhbC9wbGFjZXNoaXAtbW9kYWwuY3NzPzYwMjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3NoaXAtc3RhdHVzL3NoaXAtc3RhdHVzLWNvbXBvbmVudC5jc3M/ODE3YSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQtY29tcG9uZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9tb2RhbC9nYW1lb3Zlci1tb2RhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL21vZGFsL3BsYWNlc2hpcC1tb2RhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvc2hpcC1zdGF0dXMvc2hpcC1zdGF0dXMtY29tcG9uZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1jZWxsLXNpemUpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCB2YXIoLS1jZWxsLXNpemUpKTtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9ib2FyZC9ib2FyZC1jb21wb25lbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1EQUFtRDtFQUNuRCxnREFBZ0Q7RUFDaEQsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLWNlbGwtc2l6ZSkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLWNlbGwtc2l6ZSkpO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jZWxsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtYmdjKTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1yYWRpdXM7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG59XFxuXFxuLmNlbGw6aG92ZXI6bm90KC5taXNzZWQpOm5vdCguaGl0KSB7XFxuICBzY2FsZTogMC45NTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGNkY2Q7XFxufVxcblxcbi5jZWxsLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtb2NjdXBpZWQpO1xcbn1cXG5cXG4uY2VsbC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uY2VsbC5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcXG59XFxuLmNlbGwudi1zaGlwLXN0YXJ0IHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNyZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3JlbTtcXG59XFxuXFxuLmNlbGwudi1zaGlwLWVuZCB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNyZW07XFxufVxcblxcbi5jZWxsLmgtc2hpcC1zdGFydCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3JlbTtcXG59XFxuXFxuLmNlbGwuaC1zaGlwLWVuZCB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3JlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY2VsbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxvREFBb0Q7RUFDcEQsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNlbGwge1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1iZ2MpO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLXJhZGl1cztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxuICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xcbn1cXG5cXG4uY2VsbDpob3Zlcjpub3QoLm1pc3NlZCk6bm90KC5oaXQpIHtcXG4gIHNjYWxlOiAwLjk1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkY2RjZDtcXG59XFxuXFxuLmNlbGwub2NjdXBpZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1vY2N1cGllZCk7XFxufVxcblxcbi5jZWxsLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jZWxsLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xcbn1cXG4uY2VsbC52LXNoaXAtc3RhcnQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3JlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcmVtO1xcbn1cXG5cXG4uY2VsbC52LXNoaXAtZW5kIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3JlbTtcXG59XFxuXFxuLmNlbGwuaC1zaGlwLXN0YXJ0IHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xcbn1cXG5cXG4uY2VsbC5oLXNoaXAtZW5kIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZW92ZXItbW9kYWwtY29udGVudCBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL21vZGFsL2dhbWVvdmVyLW1vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FtZW92ZXItbW9kYWwtY29udGVudCBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0Nzc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMjB2aCAycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtYmdjKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBnYXA6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0Nzc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMjB2aCAycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtYmdjKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBnYXA6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHNtb2RhbC1jb250ZW50LWNvbnRhaW5lciAuZ3JpZC1jb250YWluZXIge1xcbiAgLS1jZWxsLWJnYzogcmdiKDExMSwgMTYyLCAxODUpO1xcbiAgLS1jZWxsLXNpemU6IG1pbigxMDB2dyAvIDIgLyAxMCAtIDFyZW0sIHZhcigtLW1heC13aWR0aCkgLyAxLjUgLyAxMCAtIDFyZW0pO1xcbiAgLS1jZWxscy1oaWdobGlnaHQ6IHJnYigyMTYsIDEzNywgMTM3KTtcXG4gIC0tc2hpcC1jb2xvcjogcmdiKDgzLCA3NSwgNzUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC4zcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLWNlbGwtc2l6ZSkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLWNlbGwtc2l6ZSkpO1xcbn1cXG5cXG4ucHNtb2RhbC1jb250ZW50LWNvbnRhaW5lciAuc2hpcC10eXBlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XFxuICAwJSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xcbiAgfVxcbn1cXG4ucHNtb2RhbC1jb250ZW50LWNvbnRhaW5lciAuY2VsbCB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItcmFkaXVzO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxufVxcbi5wc21vZGFsLWNvbnRlbnQtY29udGFpbmVyIC5jZWxsLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4ucHNtb2RhbC1jb250ZW50LWNvbnRhaW5lciAuaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxscy1oaWdobGlnaHQpO1xcbn1cXG5cXG4ucHNtb2RhbC1jb250ZW50LWNvbnRhaW5lciAuY2VsbC52LXNoaXAtc3RhcnQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3JlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcmVtO1xcbn1cXG5cXG4ucHNtb2RhbC1jb250ZW50LWNvbnRhaW5lciAuY2VsbC52LXNoaXAtZW5kIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3JlbTtcXG59XFxuXFxuLnBzbW9kYWwtY29udGVudC1jb250YWluZXIgLmNlbGwuaC1zaGlwLXN0YXJ0IHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xcbn1cXG5cXG4ucHNtb2RhbC1jb250ZW50LWNvbnRhaW5lciAuY2VsbC5oLXNoaXAtZW5kIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL21vZGFsL3BsYWNlc2hpcC1tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsMkVBQTJFO0VBQzNFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLFdBQVc7RUFDWCxtREFBbUQ7RUFDbkQsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTtFQUNFLG9EQUFvRDtFQUNwRCwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBzbW9kYWwtY29udGVudC1jb250YWluZXIgLmdyaWQtY29udGFpbmVyIHtcXG4gIC0tY2VsbC1iZ2M6IHJnYigxMTEsIDE2MiwgMTg1KTtcXG4gIC0tY2VsbC1zaXplOiBtaW4oMTAwdncgLyAyIC8gMTAgLSAxcmVtLCB2YXIoLS1tYXgtd2lkdGgpIC8gMS41IC8gMTAgLSAxcmVtKTtcXG4gIC0tY2VsbHMtaGlnaGxpZ2h0OiByZ2IoMjE2LCAxMzcsIDEzNyk7XFxuICAtLXNoaXAtY29sb3I6IHJnYig4MywgNzUsIDc1KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuM3JlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1jZWxsLXNpemUpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCB2YXIoLS1jZWxsLXNpemUpKTtcXG59XFxuXFxuLnBzbW9kYWwtY29udGVudC1jb250YWluZXIgLnNoaXAtdHlwZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgMCUge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcXG4gIH1cXG59XFxuLnBzbW9kYWwtY29udGVudC1jb250YWluZXIgLmNlbGwge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLXJhZGl1cztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcbn1cXG4ucHNtb2RhbC1jb250ZW50LWNvbnRhaW5lciAuY2VsbC5vY2N1cGllZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLnBzbW9kYWwtY29udGVudC1jb250YWluZXIgLmhvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbHMtaGlnaGxpZ2h0KTtcXG59XFxuXFxuLnBzbW9kYWwtY29udGVudC1jb250YWluZXIgLmNlbGwudi1zaGlwLXN0YXJ0IHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNyZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3JlbTtcXG59XFxuXFxuLnBzbW9kYWwtY29udGVudC1jb250YWluZXIgLmNlbGwudi1zaGlwLWVuZCB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNyZW07XFxufVxcblxcbi5wc21vZGFsLWNvbnRlbnQtY29udGFpbmVyIC5jZWxsLmgtc2hpcC1zdGFydCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3JlbTtcXG59XFxuXFxuLnBzbW9kYWwtY29udGVudC1jb250YWluZXIgLmNlbGwuaC1zaGlwLWVuZCB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3JlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hpcHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtIDAgMS41cmVtO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaGlwLXNsb3RzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCB2YXIoLS1jZWxsLXNpemUpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGdhcDogMC4ycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3NoaXAtc3RhdHVzL3NoaXAtc3RhdHVzLWNvbXBvbmVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrREFBa0Q7RUFDbEQsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNoaXBzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbSAwIDEuNXJlbTtcXG59XFxuXFxuLnNoaXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hpcC1zbG90cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgdmFyKC0tY2VsbC1zaXplKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBnYXA6IDAuMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0FsZmFTbGFiT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jZWxsLXNpemU6IG1pbigxMDB2dyAvIDIgLyAxMCAtIDFyZW0sIHZhcigtLW1heC13aWR0aCkgLyAxLjUgLyAxMCAtIDFyZW0pO1xcbiAgLS1lbmVteS1iZ2M6ICNhZTU2NTY7XFxuICAtLXBsYXllci1iZ2M6ICM1NjU2YWU7XFxuICAtLW1haW4tYmdjOiByZ2IoNzAsIDg1LCA5Mik7XFxuICAtLWhlYWRlci1iZ2M6IHZhcigtLW1haW4tYmdjKTtcXG4gIC0tY2VsbC1iZ2M6IHJnYigxMTEsIDE2MiwgMTg1KTtcXG4gIC0tbW9kYWwtYmdjOiB2YXIoLS1wbGF5ZXItYmdjKTtcXG4gIC0tY2VsbC1vY2N1cGllZDogI2FlOTk5OTtcXG4gIC0tc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgLS1tYXgtd2lkdGg6IDkwMHB4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBBbGZhU2xhYjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmgyLFxcbmgxIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ2MpO1xcbiAgZm9udC1mYW1pbHk6IEFsZmFTbGFiLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVuZW15LWJnYyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgc2NhbGU6IDAuOTU7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgc2NhbGU6IDAuOTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmdjKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnYyk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5lbmVteUZpZWxkLFxcbi5wbGF5ZXJGaWVsZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgNGZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luOiAwIDFyZW0gMXJlbSAxcmVtO1xcbiAgcGFkZGluZzogMCAxcmVtIDFyZW0gMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXJGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGF5ZXItYmdjKTtcXG59XFxuXFxuLmVuZW15RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZW5lbXktYmdjKTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnNoYWRvdyB7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyRUFBMkU7RUFDM0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHdEQUF3RDtFQUN4RCxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IscUNBQXFDO0VBQ3JDLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWNlbGwtc2l6ZTogbWluKDEwMHZ3IC8gMiAvIDEwIC0gMXJlbSwgdmFyKC0tbWF4LXdpZHRoKSAvIDEuNSAvIDEwIC0gMXJlbSk7XFxuICAtLWVuZW15LWJnYzogI2FlNTY1NjtcXG4gIC0tcGxheWVyLWJnYzogIzU2NTZhZTtcXG4gIC0tbWFpbi1iZ2M6IHJnYig3MCwgODUsIDkyKTtcXG4gIC0taGVhZGVyLWJnYzogdmFyKC0tbWFpbi1iZ2MpO1xcbiAgLS1jZWxsLWJnYzogcmdiKDExMSwgMTYyLCAxODUpO1xcbiAgLS1tb2RhbC1iZ2M6IHZhcigtLXBsYXllci1iZ2MpO1xcbiAgLS1jZWxsLW9jY3VwaWVkOiAjYWU5OTk5O1xcbiAgLS1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAtLW1heC13aWR0aDogOTAwcHg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEFsZmFTbGFiO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvQWxmYVNsYWJPbmUtUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaDIsXFxuaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnYyk7XFxuICBmb250LWZhbWlseTogQWxmYVNsYWIsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZW5lbXktYmdjKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBzY2FsZTogMC45NTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBzY2FsZTogMC45O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZ2MpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdjKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmVuZW15RmllbGQsXFxuLnBsYXllckZpZWxkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmciA0ZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBtYXJnaW46IDAgMXJlbSAxcmVtIDFyZW07XFxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbSAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllckZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXllci1iZ2MpO1xcbn1cXG5cXG4uZW5lbXlGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lbmVteS1iZ2MpO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uc2hhZG93IHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC1jb21wb25lbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC1jb21wb25lbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NlbGwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jZWxsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lb3Zlci1tb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVvdmVyLW1vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGFjZXNoaXAtbW9kYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGFjZXNoaXAtbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXAtc3RhdHVzLWNvbXBvbmVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXAtc3RhdHVzLWNvbXBvbmVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vYm9hcmQtY29tcG9uZW50LmNzcyc7XG5pbXBvcnQgJy4uL2NlbGwuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogSG9sZHMgcmVmZXJlbmNlIHRvIGNlbGxzIGluIGJvYXJkIFtkaXYgZWxlbWVudHNdXG4gICAqL1xuICBjb25zdCBjZWxscyA9IFtdO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbVBvcHVsYXRlID0gKCkgPT4ge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgICAgY2VsbHMucHVzaChBcnJheSgxMCkpO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3gnLCB4KTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3knLCB5KTtcbiAgICAgICAgY2VsbHNbeV1beF0gPSBjZWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkZWQgc28gYm9hcmQgY2FuIGJlIGVhc2lseSByZXNldCB3aGVuIHN0YXJ0aW5nIGEgbmV3IGdhbWVcbiAgICovXG4gIGNvbnN0IHJlc2V0Tm9kZSA9ICgpID0+IHtcbiAgICB3aGlsZSAoY29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgbVBvcHVsYXRlKCk7XG4gIH07XG5cbiAgbVBvcHVsYXRlKCk7XG5cbiAgcmV0dXJuIHsgY29udGFpbmVyLCBjZWxscywgcmVzZXROb2RlIH07XG59O1xuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0ICcuL2dhbWVvdmVyLW1vZGFsLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBNb2RhbCgpO1xuICBtb2RhbC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZW92ZXItbW9kYWwtY29udGVudCcpO1xuXG4gIG1vZGFsLnNldFRpdGxlKCdHYW1lIE92ZXIhJyk7XG5cbiAgY29uc3QgZU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHBsYXlBZ2FpbkJ0bi50ZXh0Q29udGVudCA9ICdQbGF5IEFnYWluJztcblxuICBtb2RhbC5jb250ZW50LmFwcGVuZENoaWxkKGVNc2cpO1xuICBtb2RhbC5jb250ZW50LmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bik7XG5cbiAgcmV0dXJuIHsgLi4ubW9kYWwsIHBsYXlBZ2FpbkJ0biwgZU1zZyB9O1xufTtcbiIsImltcG9ydCAnLi9tb2RhbC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGV2ZW50cyA9IHsgY2xvc2U6IFtdIH07XG4gIGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGFyZ3MpIHtcbiAgICBldmVudHNbZXZlbnRdLmZvckVhY2goKGZuKSA9PiB7XG4gICAgICBmbiguLi5hcmdzKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBvbihldmVudCwgZm4pIHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50XSkge1xuICAgICAgZXZlbnRzW2V2ZW50XS5wdXNoKGZuKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50JywgJ3NoYWRvdycpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBmdW5jdGlvbiBzZXRUaXRsZSh0aXRsZSkge1xuICAgIGNvbnN0IG1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtVGl0bGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICByZXR1cm4geyBjb250YWluZXIsIGNvbnRlbnQsIHNldFRpdGxlLCBzaG93LCBoaWRlLCBlbWl0LCBvbiB9O1xufTtcbiIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcbmltcG9ydCAnLi9wbGFjZXNoaXAtbW9kYWwuY3NzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vLi4vanMvcGxheWVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vLi4vanMvZ2FtZWJvYXJkJztcbmltcG9ydCBCb2FyZENvbXBvbmVudCBmcm9tICcuLi9ib2FyZC9ib2FyZC1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IFBsYXllcihHYW1lYm9hcmQuY3JlYXRlKCkpO1xuICBjb25zdCBtb2RhbCA9IE1vZGFsKCk7XG4gIGxldCBjdXJyZW50U2hpcEluZGV4ID0gMDtcbiAgbGV0IGRpcmVjdGlvbiA9IEdhbWVib2FyZC5IT1JJWk9OVEFMO1xuICBmdW5jdGlvbiBjaGFuZ2VEaXJlY3Rpb24oKSB7XG4gICAgZGlyZWN0aW9uID1cbiAgICAgIGRpcmVjdGlvbiA9PT0gR2FtZWJvYXJkLkhPUklaT05UQUxcbiAgICAgICAgPyBHYW1lYm9hcmQuVkVSVElDQUxcbiAgICAgICAgOiBHYW1lYm9hcmQuSE9SSVpPTlRBTDtcbiAgfVxuXG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBzaGlwVHlwZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzaGlwVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgYm9hcmRDb21wb25lbnQgPSBCb2FyZENvbXBvbmVudCgpO1xuXG4gIG1vZGFsLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHNtb2RhbC1jb250ZW50LWNvbnRhaW5lcicpO1xuICBzaGlwVHlwZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXR5cGUnKTtcblxuICBtb2RhbC5zZXRUaXRsZSgnUGxhY2UgeW91ciBzaGlwcycpO1xuICByb3RhdGVCdG4udGV4dENvbnRlbnQgPSAnUm90YXRlJztcbiAgc2hpcFR5cGUudGV4dENvbnRlbnQgPSBHYW1lYm9hcmQuU0hJUFNbY3VycmVudFNoaXBJbmRleF0udHlwZTtcblxuICBtb2RhbC5jb250ZW50LmFwcGVuZENoaWxkKHJvdGF0ZUJ0bik7XG4gIHNoaXBUeXBlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBUeXBlKTtcbiAgbW9kYWwuY29udGVudC5hcHBlbmRDaGlsZChzaGlwVHlwZUNvbnRhaW5lcik7XG5cbiAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNoYW5nZURpcmVjdGlvbigpO1xuICB9KTtcblxuICBjb25zdCB7IGNlbGxFbnRlckxpc3RlbmVyLCBjZWxsTGVhdmVMaXN0ZW5lciB9ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBsaXN0ZW5lclRlbXBsYXRlKHksIHgsIHNpemUsIGFkZE9yUmVtb3ZlKSB7XG4gICAgICBsZXQgbVkgPSB5O1xuICAgICAgbGV0IG1YID0geDtcbiAgICAgIGNvbnN0IGNsYXNzU3RhcnQgPVxuICAgICAgICBkaXJlY3Rpb24gPT09IEdhbWVib2FyZC5IT1JJWk9OVEFMID8gJ2gtc2hpcC1zdGFydCcgOiAndi1zaGlwLXN0YXJ0JztcbiAgICAgIGNvbnN0IGNsYXNzRW5kID1cbiAgICAgICAgZGlyZWN0aW9uID09PSBHYW1lYm9hcmQuSE9SSVpPTlRBTCA/ICdoLXNoaXAtZW5kJyA6ICd2LXNoaXAtZW5kJztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICAgICAgbVggPSBkaXJlY3Rpb24gPT09IEdhbWVib2FyZC5IT1JJWk9OVEFMID8geCArIGkgOiB4O1xuICAgICAgICBtWSA9IGRpcmVjdGlvbiA9PT0gR2FtZWJvYXJkLlZFUlRJQ0FMID8geSArIGkgOiB5O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgR2FtZWJvYXJkLmlzV2l0aGluQm91bmRzKG1ZLCBtWCkgJiZcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRbbVldW21YXSA9PT0gR2FtZWJvYXJkLkVNUFRZXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChhZGRPclJlbW92ZSA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgIGJvYXJkQ29tcG9uZW50LmNlbGxzW21ZXVttWF0uY2xhc3NMaXN0LmFkZChjbGFzc1N0YXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc2l6ZSAtIDEpIHtcbiAgICAgICAgICAgICAgYm9hcmRDb21wb25lbnQuY2VsbHNbbVldW21YXS5jbGFzc0xpc3QuYWRkKGNsYXNzRW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkQ29tcG9uZW50LmNlbGxzW21ZXVttWF0uY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYWRkT3JSZW1vdmUgPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICBib2FyZENvbXBvbmVudC5jZWxsc1ttWV1bbVhdLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NTdGFydCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNpemUgLSAxKSB7XG4gICAgICAgICAgICAgIGJvYXJkQ29tcG9uZW50LmNlbGxzW21ZXVttWF0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc0VuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZENvbXBvbmVudC5jZWxsc1ttWV1bbVhdLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2VsbEVudGVyTGlzdGVuZXIoZSkge1xuICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpLCAxMCk7XG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd5JyksIDEwKTtcbiAgICAgIGxpc3RlbmVyVGVtcGxhdGUoeSwgeCwgR2FtZWJvYXJkLlNISVBTW2N1cnJlbnRTaGlwSW5kZXhdLnNpemUsICdhZGQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjZWxsTGVhdmVMaXN0ZW5lcihlKSB7XG4gICAgICBjb25zdCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd4JyksIDEwKTtcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSwgMTApO1xuICAgICAgbGlzdGVuZXJUZW1wbGF0ZSh5LCB4LCBHYW1lYm9hcmQuU0hJUFNbY3VycmVudFNoaXBJbmRleF0uc2l6ZSwgJ3JlbW92ZScpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNlbGxFbnRlckxpc3RlbmVyLCBjZWxsTGVhdmVMaXN0ZW5lciB9O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGNlbGxDbGlja0xpc3RlbmVyKGUpIHtcbiAgICBjb25zdCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd4JyksIDEwKTtcbiAgICBjb25zdCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd5JyksIDEwKTtcbiAgICBpZiAoXG4gICAgICBwbGF5ZXIucGxhY2VTaGlwKHksIHgsIEdhbWVib2FyZC5TSElQU1tjdXJyZW50U2hpcEluZGV4XS5zaXplLCBkaXJlY3Rpb24pXG4gICAgKSB7XG4gICAgICBjdXJyZW50U2hpcEluZGV4ICs9IDE7XG4gICAgICByZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKEdhbWVib2FyZC5TSElQU1tjdXJyZW50U2hpcEluZGV4XSkge1xuICAgICAgLy8gcmVtb3ZpbmcgYW5kIGFwcGVuZGluZyB0byB0cmlnZ2VyIGNzcyBhbmltYXRpb25cbiAgICAgIHNoaXBUeXBlQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNoaXBUeXBlKTtcbiAgICAgIHNoaXBUeXBlLnRleHRDb250ZW50ID0gR2FtZWJvYXJkLlNISVBTW2N1cnJlbnRTaGlwSW5kZXhdLnR5cGU7XG4gICAgICBzaGlwVHlwZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vZGFsLmNvbnRlbnQucmVtb3ZlQ2hpbGQoc2hpcFR5cGVDb250YWluZXIpO1xuICAgICAgbW9kYWwuZW1pdCgnY2xvc2UnLCBbcGxheWVyXSk7XG4gICAgICBtb2RhbC5oaWRlKCk7XG4gICAgfVxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmRbeV1beF0gIT09IEdhbWVib2FyZC5FTVBUWSkge1xuICAgICAgICAgIGJvYXJkQ29tcG9uZW50LmNlbGxzW3ldW3hdLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHBsYXllci5ib2FyZFt5XVt4XS5oZWFkKSA9PT1cbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShbeSwgeCwgR2FtZWJvYXJkLlZFUlRJQ0FMXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYm9hcmRDb21wb25lbnQuY2VsbHNbeV1beF0uY2xhc3NMaXN0LmFkZCgndi1zaGlwLXN0YXJ0Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkocGxheWVyLmJvYXJkW3ldW3hdLnRhaWwpID09PVxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFt5LCB4LCBHYW1lYm9hcmQuVkVSVElDQUxdKVxuICAgICAgICApIHtcbiAgICAgICAgICBib2FyZENvbXBvbmVudC5jZWxsc1t5XVt4XS5jbGFzc0xpc3QuYWRkKCd2LXNoaXAtZW5kJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkocGxheWVyLmJvYXJkW3ldW3hdLmhlYWQpID09PVxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFt5LCB4LCBHYW1lYm9hcmQuSE9SSVpPTlRBTF0pXG4gICAgICAgICkge1xuICAgICAgICAgIGJvYXJkQ29tcG9uZW50LmNlbGxzW3ldW3hdLmNsYXNzTGlzdC5hZGQoJ2gtc2hpcC1zdGFydCcpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHBsYXllci5ib2FyZFt5XVt4XS50YWlsKSA9PT1cbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShbeSwgeCwgR2FtZWJvYXJkLkhPUklaT05UQUxdKVxuICAgICAgICApIHtcbiAgICAgICAgICBib2FyZENvbXBvbmVudC5jZWxsc1t5XVt4XS5jbGFzc0xpc3QuYWRkKCdoLXNoaXAtZW5kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAoKCkgPT4ge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICAgIGJvYXJkQ29tcG9uZW50LmNlbGxzW3ldW3hdLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ21vdXNlZW50ZXInLFxuICAgICAgICAgIGNlbGxFbnRlckxpc3RlbmVyXG4gICAgICAgICk7XG4gICAgICAgIGJvYXJkQ29tcG9uZW50LmNlbGxzW3ldW3hdLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgICAgIGNlbGxMZWF2ZUxpc3RlbmVyXG4gICAgICAgICk7XG4gICAgICAgIGJvYXJkQ29tcG9uZW50LmNlbGxzW3ldW3hdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2VsbENsaWNrTGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICBtb2RhbC5jb250ZW50LmFwcGVuZENoaWxkKGJvYXJkQ29tcG9uZW50LmNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHsgLi4ubW9kYWwgfTtcbn07XG4iLCJpbXBvcnQgJy4vc2hpcC1zdGF0dXMtY29tcG9uZW50LmNzcyc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4uLy4uL2pzL2dhbWVib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwcycpO1xuICBjb25zdCBjZWxscyA9IFtdO1xuICBjb25zdCBjcmVhdGVOb2RlcyA9IChwbGF5ZXIpID0+IHtcbiAgICBtUmVzZXRDb250YWluZXIoKTtcbiAgICBHYW1lYm9hcmQuU0hJUFMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgbXNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IHNoaXBUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29uc3Qgc2hpcEhlYWx0aENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBtc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICBzaGlwSGVhbHRoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaXAtc2xvdHMnKTtcblxuICAgICAgc2hpcFR5cGUudGV4dENvbnRlbnQgPSBzaGlwLnR5cGU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIHNoaXBIZWFsdGhDb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIGNlbGxzLnB1c2goY2VsbCk7XG4gICAgICB9XG5cbiAgICAgIG1zaGlwLmFwcGVuZENoaWxkKHNoaXBUeXBlKTtcbiAgICAgIG1zaGlwLmFwcGVuZENoaWxkKHNoaXBIZWFsdGhDb250YWluZXIpO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobXNoaXApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9IChwbGF5ZXIpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5zaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHBsYXllci5zaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbVJlc2V0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgIHdoaWxlIChjb250YWluZXIuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgY29udGFpbmVyLCBjcmVhdGVOb2RlcywgcmVuZGVyIH07XG59O1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBHYW1lT3Zlck1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwvZ2FtZW92ZXItbW9kYWwnO1xuaW1wb3J0IFBsYWNlU2hpcE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwvcGxhY2VzaGlwLW1vZGFsJztcbmltcG9ydCBCb2FyZENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2JvYXJkL2JvYXJkLWNvbXBvbmVudCc7XG5pbXBvcnQgU2hpcFN0YXR1c0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3NoaXAtc3RhdHVzL3NoaXAtc3RhdHVzLWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IChtYWluQ29udGFpbmVyLCBwbGF5ZXJGaWVsZCwgZW5lbXlGaWVsZCkgPT4ge1xuICBsZXQgbVBsYXllcjtcbiAgbGV0IGVuZW15O1xuXG4gIGNvbnN0IGdhbWVvdmVyTW9kYWwgPSBHYW1lT3Zlck1vZGFsKCk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZW92ZXJNb2RhbC5jb250YWluZXIpO1xuXG4gIGNvbnN0IHBsYXllckdyaWQgPSBCb2FyZENvbXBvbmVudCgpO1xuICBjb25zdCBlbmVteUdyaWQgPSBCb2FyZENvbXBvbmVudCgpO1xuICBwbGF5ZXJGaWVsZC5hcHBlbmRDaGlsZChwbGF5ZXJHcmlkLmNvbnRhaW5lcik7XG4gIGVuZW15RmllbGQuYXBwZW5kQ2hpbGQoZW5lbXlHcmlkLmNvbnRhaW5lcik7XG5cbiAgLy8gY29uc3QgcGxheWVyU2hpcFN0YXR1cyA9IFNoaXBTdGF0dXNDb21wb25lbnQoKTtcbiAgLy8gY29uc3QgZW5lbXlTaGlwU3RhdHVzID0gU2hpcFN0YXR1c0NvbXBvbmVudCgpO1xuICAvLyBwbGF5ZXJGaWVsZC5hcHBlbmRDaGlsZChwbGF5ZXJTaGlwU3RhdHVzLmNvbnRhaW5lcik7XG4gIC8vIGVuZW15RmllbGQuYXBwZW5kQ2hpbGQoZW5lbXlTaGlwU3RhdHVzLmNvbnRhaW5lcik7XG5cbiAgZ2FtZW92ZXJNb2RhbC5wbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIHBsYXlBZ2FpbkhhbmRsZXIuYmluZChnYW1lb3Zlck1vZGFsKVxuICApO1xuXG4gIGZ1bmN0aW9uIHJlc2V0Tm9kZXMoKSB7XG4gICAgZnVuY3Rpb24gcmVzZXROb2RlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcbiAgICAgICAgbm9kZS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgd2hpbGUgKGUuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICBlLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlIChub2RlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNldE5vZGUocGxheWVyRmllbGQpO1xuICAgIHJlc2V0Tm9kZShlbmVteUZpZWxkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb2VzIG5vdCByZS1yZW5kZXIsIGp1c3QgYWRkcyBDU1MgY2xhc3Nlc1xuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIC8vIGZvciBnYW1lYm9hcmQgZ3JpZFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICAgIGlmIChtUGxheWVyLmJvYXJkW3ldW3hdKSB7XG4gICAgICAgICAgcGxheWVyR3JpZC5jZWxsc1t5XVt4XS5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZCcpO1xuXG4gICAgICAgICAgaWYgKG1QbGF5ZXIuYm9hcmRbeV1beF0gPT09IEdhbWVib2FyZC5ISVQpIHtcbiAgICAgICAgICAgIHBsYXllckdyaWQuY2VsbHNbeV1beF0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtUGxheWVyLmJvYXJkW3ldW3hdID09PSBHYW1lYm9hcmQuTUlTU0VEKSB7XG4gICAgICAgICAgICBwbGF5ZXJHcmlkLmNlbGxzW3ldW3hdLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmVteS5ib2FyZFt5XVt4XSA9PT0gR2FtZWJvYXJkLkhJVCkge1xuICAgICAgICAgIGVuZW15R3JpZC5jZWxsc1t5XVt4XS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbmVteS5ib2FyZFt5XVt4XSA9PT0gR2FtZWJvYXJkLk1JU1NFRCkge1xuICAgICAgICAgIGVuZW15R3JpZC5jZWxsc1t5XVt4XS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShtUGxheWVyLmJvYXJkW3ldW3hdLmhlYWQpID09PVxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFt5LCB4LCBHYW1lYm9hcmQuVkVSVElDQUxdKVxuICAgICAgICApIHtcbiAgICAgICAgICBwbGF5ZXJHcmlkLmNlbGxzW3ldW3hdLmNsYXNzTGlzdC5hZGQoJ3Ytc2hpcC1zdGFydCcpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG1QbGF5ZXIuYm9hcmRbeV1beF0udGFpbCkgPT09XG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW3ksIHgsIEdhbWVib2FyZC5WRVJUSUNBTF0pXG4gICAgICAgICkge1xuICAgICAgICAgIHBsYXllckdyaWQuY2VsbHNbeV1beF0uY2xhc3NMaXN0LmFkZCgndi1zaGlwLWVuZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG1QbGF5ZXIuYm9hcmRbeV1beF0uaGVhZCkgPT09XG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW3ksIHgsIEdhbWVib2FyZC5IT1JJWk9OVEFMXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGxheWVyR3JpZC5jZWxsc1t5XVt4XS5jbGFzc0xpc3QuYWRkKCdoLXNoaXAtc3RhcnQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShtUGxheWVyLmJvYXJkW3ldW3hdLnRhaWwpID09PVxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFt5LCB4LCBHYW1lYm9hcmQuSE9SSVpPTlRBTF0pXG4gICAgICAgICkge1xuICAgICAgICAgIHBsYXllckdyaWQuY2VsbHNbeV1beF0uY2xhc3NMaXN0LmFkZCgnaC1zaGlwLWVuZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZm9yIEJvYXQgc3RhdGVzIGJlbG93IGdyaWRcbiAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbVBsYXllci5zaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1QbGF5ZXIuc2hpcHNbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAvLyAgICAgICBpZiAobVBsYXllci5zaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgIC8vICAgICAgICAgcGxheWVyR3JpZC5jZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICAgaWYgKGVuZW15LnNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgLy8gICAgICAgICBbaV1bal0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5QWdhaW5IYW5kbGVyKCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICAgIHN0YXJ0R2FtZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIHBsYXllckdyaWQucmVzZXROb2RlKCk7XG4gICAgZW5lbXlHcmlkLnJlc2V0Tm9kZSgpO1xuICAgIGVuZW15ID0gUGxheWVyKEdhbWVib2FyZC5jcmVhdGUoKSwgdHJ1ZSk7XG4gICAgY29uc3QgcGxhY2VTaGlwTW9kYWwgPSBQbGFjZVNoaXBNb2RhbCgpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VTaGlwTW9kYWwuY29udGFpbmVyKTtcblxuICAgIHBsYWNlU2hpcE1vZGFsLm9uKCdjbG9zZScsIChwbGF5ZXIpID0+IHtcbiAgICAgIG1QbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAvLyBwbGF5ZXJTaGlwU3RhdHVzLmNyZWF0ZU5vZGVzKG1QbGF5ZXIpO1xuICAgICAgLy8gZW5lbXlTaGlwU3RhdHVzLmNyZWF0ZU5vZGVzKGVuZW15KTtcbiAgICAgIHBsYWNlU2hpcE1vZGFsLmhpZGUoKTtcbiAgICAgIHJlbmRlcigpO1xuICAgIH0pO1xuXG4gICAgcGxhY2VTaGlwTW9kYWwuc2hvdygpO1xuXG4gICAgZnVuY3Rpb24gZW5lbXlDZWxsTGlzdGVuZXIoeSwgeCkge1xuICAgICAgbVBsYXllci5hdHRhY2soeSwgeCwgZW5lbXkpO1xuICAgICAgLy8gZW5lbXlTaGlwU3RhdHVzLnJlbmRlcihlbmVteSk7XG4gICAgICAvLyBwbGF5ZXJTaGlwU3RhdHVzLnJlbmRlcihtUGxheWVyKTtcbiAgICAgIHJlbmRlcigpO1xuICAgICAgY2hlY2tHYW1lU3RhdGUoKTtcbiAgICAgIGFpTW92ZSgpO1xuICAgIH1cblxuICAgICgoKSA9PiB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5ICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICAgICAgZW5lbXlHcmlkLmNlbGxzW3ldW3hdLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgZW5lbXlDZWxsTGlzdGVuZXIuYmluZChlbmVteUdyaWQuY2VsbHNbeV1beF0sIHksIHgpLFxuICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrR2FtZVN0YXRlKCkge1xuICAgICAgaWYgKG1QbGF5ZXIuYWxsU2hpcHNTdW5rKCkgfHwgZW5lbXkuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgZ2FtZW92ZXJNb2RhbC5lTXNnLnRleHRDb250ZW50ID0gbVBsYXllci5hbGxTaGlwc1N1bmsoKVxuICAgICAgICAgID8gJ1lvdSBMb3N0ISdcbiAgICAgICAgICA6ICdZb3UgV29uISc7XG4gICAgICAgIGdhbWVvdmVyTW9kYWwuc2hvdygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFpTW92ZSgpIHtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICBpZiAoZW5lbXkuYXR0YWNrKHksIHgsIG1QbGF5ZXIpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlbmRlcigpO1xuICAgICAgY2hlY2tHYW1lU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzdGFydEdhbWUgfTtcbn07XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBTSVpFID0gMTA7XG4gIGNvbnN0IEVNUFRZID0gMDtcbiAgY29uc3QgTUlTU0VEID0gMTtcbiAgY29uc3QgSElUID0gMjtcbiAgY29uc3QgSE9SSVpPTlRBTCA9IDA7XG4gIGNvbnN0IFZFUlRJQ0FMID0gMTtcblxuICBjb25zdCBTSElQUyA9IFtcbiAgICB7IHR5cGU6ICdDYXJyaWVyJywgc2l6ZTogNSB9LFxuICAgIHsgdHlwZTogJ0JhdHRsZVNoaXAnLCBzaXplOiA0IH0sXG4gICAgeyB0eXBlOiAnRGVzdHJveWVyJywgc2l6ZTogMyB9LFxuICAgIHsgdHlwZTogJ1N1Ym1hcmluZScsIHNpemU6IDMgfSxcbiAgICB7IHR5cGU6ICdQYXRyb2wgQm9hdCcsIHNpemU6IDIgfSxcbiAgXTtcbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IHgtY29vcmRpbmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0geSB5LWNvb3JkaW5hdGVcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB3aXRoaW4gYm91bmRzIG9mIGdhbWVib2FyZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBjb25zdCBpc1dpdGhpbkJvdW5kcyA9ICh5LCB4KSA9PiB5IDwgU0laRSAmJiB4IDwgU0laRSAmJiB5ID4gLTEgJiYgeCA+IC0xO1xuXG4gIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICBsZXQgYm9hcmQ7XG4gICAgbGV0IHNoaXBzID0gW107XG5cbiAgICBjb25zdCBpc0F0dGFja2FibGVDZWxsID0gKHksIHgpID0+XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrXG4gICAgICBib2FyZFt5XVt4XSAhPT0gSElUICYmIGJvYXJkW3ldW3hdICE9PSBNSVNTRUQ7XG5cbiAgICBjb25zdCBpc1BsYWNlYWJsZSA9ICh5LCB4KSA9PiBib2FyZFt5XVt4XSA9PT0gRU1QVFk7XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgIGJvYXJkID0gW1xuICAgICAgICBBcnJheSgxMCkuZmlsbChFTVBUWSksXG4gICAgICAgIEFycmF5KDEwKS5maWxsKEVNUFRZKSxcbiAgICAgICAgQXJyYXkoMTApLmZpbGwoRU1QVFkpLFxuICAgICAgICBBcnJheSgxMCkuZmlsbChFTVBUWSksXG4gICAgICAgIEFycmF5KDEwKS5maWxsKEVNUFRZKSxcbiAgICAgICAgQXJyYXkoMTApLmZpbGwoRU1QVFkpLFxuICAgICAgICBBcnJheSgxMCkuZmlsbChFTVBUWSksXG4gICAgICAgIEFycmF5KDEwKS5maWxsKEVNUFRZKSxcbiAgICAgICAgQXJyYXkoMTApLmZpbGwoRU1QVFkpLFxuICAgICAgICBBcnJheSgxMCkuZmlsbChFTVBUWSksXG4gICAgICBdO1xuICAgIH07XG5cbiAgICByZXNldCgpO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgeS1jb29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggeC1jb29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgc2l6ZSBvZiBzaGlwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWVudGF0aW9uIDAgPSBob3Jpem9udGFsICwgMSA9IHZlcnRpY2FsXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBzaGlwIGlzIHN1Y2Nlc3NmdWxseSBwbGFjZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh5LCB4LCBzaXplLCBvcmllbnRhdGlvbiA9IEhPUklaT05UQUwpID0+IHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNpemUpO1xuICAgICAgbGV0IG1YO1xuICAgICAgbGV0IG1ZO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgICAgICBtWCA9IG9yaWVudGF0aW9uID09PSBIT1JJWk9OVEFMID8geCArIGkgOiB4O1xuICAgICAgICBtWSA9IG9yaWVudGF0aW9uID09PSBWRVJUSUNBTCA/IHkgKyBpIDogeTtcbiAgICAgICAgaWYgKCEoaXNXaXRoaW5Cb3VuZHMobVksIG1YKSAmJiBpc1BsYWNlYWJsZShtWSwgbVgpKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgICAgICBtWCA9IG9yaWVudGF0aW9uID09PSBIT1JJWk9OVEFMID8geCArIGkgOiB4O1xuICAgICAgICBtWSA9IG9yaWVudGF0aW9uID09PSBWRVJUSUNBTCA/IHkgKyBpIDogeTtcbiAgICAgICAgLy8gcHJvcGVydGllcyB0byBoZWxwIHdpdGggY29uc3RydWN0aW5nIHVpXG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgc2hpcC5oZWFkID0gW21ZLCBtWCwgb3JpZW50YXRpb25dO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNpemUgLSAxKSB7XG4gICAgICAgICAgc2hpcC50YWlsID0gW21ZLCBtWCwgb3JpZW50YXRpb25dO1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkW21ZXVttWF0gPSBzaGlwO1xuICAgICAgfVxuICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geSB5LWNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCB4LWNvb3JkaW5hdGVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB2YWxpZCBhdHRhY2sgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh5LCB4KSA9PiB7XG4gICAgICBpZiAoaXNXaXRoaW5Cb3VuZHMoeSwgeCkgJiYgaXNBdHRhY2thYmxlQ2VsbCh5LCB4KSkge1xuICAgICAgICBpZiAoYm9hcmRbeV1beF0uaGl0KSB7XG4gICAgICAgICAgYm9hcmRbeV1beF0uaGl0KCk7XG4gICAgICAgICAgYm9hcmRbeV1beF0gPSBISVQ7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVsc2UtcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9hcmRbeV1beF0gPSBNSVNTRUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtbe3g6bnVtYmVyLCB5Om51bWJlcn1dfSBBcnJheSBvZiBvYmplY3RzIGNvbnRhaW5pbmcgbWlzc2VkIGhpdHMgY29vcmRpbmF0ZXNcbiAgICAgKi9cbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGVtcCA9IFtdO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBTSVpFOyB5ICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBTSVpFOyB4ICs9IDEpIHtcbiAgICAgICAgICBpZiAoYm9hcmRbeV1beF0gPT09IE1JU1NFRCkge1xuICAgICAgICAgICAgdGVtcC5wdXNoKHsgeSwgeCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZW1wO1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IFNJWkU7IHkgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IFNJWkU7IHggKz0gMSkge1xuICAgICAgICAgIGlmIChib2FyZFt5XVt4XS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghYm9hcmRbeV1beF0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluc3RhbmNlXG4gICAgICovXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc2V0LFxuICAgICAgYWxsU2hpcHNTdW5rLFxuICAgICAgbWlzc2VkQXR0YWNrcyxcbiAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICBwbGFjZVNoaXAsXG4gICAgICBib2FyZCxcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBGYWN0b3J5IFN0YXRpY1xuICAgKi9cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGUsXG4gICAgU0laRSxcbiAgICBTSElQUyxcbiAgICBFTVBUWSxcbiAgICBNSVNTRUQsXG4gICAgSElULFxuICAgIEhPUklaT05UQUwsXG4gICAgVkVSVElDQUwsXG4gICAgaXNXaXRoaW5Cb3VuZHMsXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5leHBvcnQgZGVmYXVsdCAoZ2FtZWJvYXJkLCBib3QgPSBmYWxzZSkgPT4ge1xuICBpZiAoYm90KSB7XG4gICAgR2FtZWJvYXJkLlNISVBTLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICBpZiAoZ2FtZWJvYXJkLnBsYWNlU2hpcCh5LCB4LCBzaGlwLnNpemUpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGF0dGFjayA9ICh5LCB4LCBwbGF5ZXIpID0+IHBsYXllci5yZWNlaXZlQXR0YWNrKHksIHgpO1xuICByZXR1cm4geyBhdHRhY2ssIC4uLmdhbWVib2FyZCB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChsZW5ndGgpID0+IHtcbiAgbGV0IG1MaWZlID0gbGVuZ3RoO1xuICBjb25zdCBsaWZlID0gbUxpZmU7XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBpZiAobUxpZmUpIHtcbiAgICAgIG1MaWZlIC09IDE7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiAhbUxpZmU7XG5cbiAgcmV0dXJuIHsgbGlmZSwgbGVuZ3RoLCBoaXQsIGlzU3VuayB9O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL2Nzcy9zdHlsZXMuY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgU2hpcFN0YXR1c0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvc2hpcC1zdGF0dXMvc2hpcC1zdGF0dXMtY29tcG9uZW50JztcblxuKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIGNvbnN0IHBsYXllckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckZpZWxkJyk7XG4gIGNvbnN0IGVuZW15RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXlGaWVsZCcpO1xuXG4gIGNvbnN0IGdhbWUgPSBHYW1lKG1haW4sIHBsYXllckZpZWxkLCBlbmVteUZpZWxkKTtcbiAgZ2FtZS5zdGFydEdhbWUoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=