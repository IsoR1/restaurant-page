/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = function() {\n    const content = document.getElementById(\"content\");\n    const headerDiv = () => {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"header-div\");\n        return div;\n    }\n\n    function headerList() {\n        const headDiv = headerDiv();\n        const ul = document.createElement(\"ul\");\n\n        const liOne = document.createElement(\"li\")\n        liOne.classList.add(\"header-li\")\n        const liTwo = document.createElement(\"li\")\n        liTwo.classList.add(\"header-li\")\n        const liThree = document.createElement(\"li\")\n        liThree.classList.add(\"header-li\")\n\n        liOne.innerHTML = \"Home\";\n        liTwo.innerHTML = \"Menu\";\n        liThree.innerHTML = 'Contact';\n\n        ul.append(liOne, liTwo, liThree);\n        headDiv.append(ul)\n        content.append(headDiv)\n    }\n\n    headerList();\n\n    return header\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header); \n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n   const home = function() {\n    \n   const content = document.getElementById(\"content\");\n\n    function createImage() {\n        const image = document.createElement(\"img\");\n        image.classList.add(\"bg-img\");\n        image.src = \"../dist/assets/inn.jpg\";\n        content.appendChild(image);\n    }\n\n    const bodyDiv = () => {\n        // const bodyHomePageDiv = bodyDiv()\n        const div = document.createElement(\"div\");\n        div.classList.add('body-div');\n        \n        content.append(div);\n        return div;\n    }\n\n    const createCenterDiv = () => {\n        \n        const div = document.createElement(\"div\");\n        div.classList.add(\"body-center-div\");\n        // bodyHomePageDiv.append(div);\n\n        return div\n    }\n\n    const createBodyPhotoDiv = () => {\n        // const bodyCenterDiv = createCenterDiv();\n        const div = document.createElement(\"div\");\n        div.classList.add('photo-body-div');\n        \n        // bodyCenterDiv.append(div);\n        return div;\n    }\n\n    const createBodyPhoto = () => {\n        // const photoDiv = createBodyPhotoDiv();\n\n        const image = document.createElement(\"img\");\n        image.classList.add(\"body-home-image\");\n        image.src = \"../dist/assets/hotpie.jpg\";\n        // photoDiv.appendChild(image);\n        return image\n    }\n\n    const createText = () => {\n        const textDiv = document.createElement(\"div\");\n        const pOne = document.createElement(\"p\");\n        const pTwo = document.createElement(\"p\");\n\n        textDiv.classList.add(\"text\");\n\n        pOne.textContent = 'The Best Lemon Cakes in Westeros';\n        pTwo.textContent = 'Made with love since the reign of Jaehaerys I';\n\n        textDiv.append(pOne);\n        textDiv.append(pTwo);\n\n        return textDiv;\n    }\n\n    const createCallToAction = () => {\n        const div = document.createElement(\"div\");\n        const ctaText = document.createElement(\"p\");\n\n        div.classList.add(\"cta-div\");\n\n        ctaText.classList.add(\"cta-text\");\n        ctaText.textContent = 'Order by raven or visit us!';\n\n        div.append(ctaText);\n        return div;\n    }\n\n    function createHomeTab() {\n        createImage();\n        \n        const bodyHomePageDiv = bodyDiv()\n        const bodyCenterDiv = createCenterDiv();\n        const text = createText();\n        const photoDiv = createBodyPhotoDiv();\n        const createPhoto = createBodyPhoto();\n        const cta = createCallToAction();\n\n        bodyHomePageDiv.append(bodyCenterDiv);\n        bodyCenterDiv.append(text);\n        photoDiv.append(createPhoto);\n        bodyCenterDiv.append(photoDiv);\n        bodyCenterDiv.append(cta);\n        // bodyDiv().append(createCenterDiv());\n        // headerList();\n    }\n\n    createHomeTab();\n    \n    return home;\n}\n\n// export { createHomeTab }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n    \n\n    // const bodyHomePageDiv = bodyDiv()\n    // const bodyCenterDiv = createCenterDiv();\n    // const photoDiv = createBodyPhotoDiv();\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n// import { createHomeTab } from './home'\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst ul = document.querySelector(\"ul\");\nul.addEventListener('click', (e) => {\n    if (e.target.innerHTML !== 'Home') {\n        console.log(e.target)\n    }\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;