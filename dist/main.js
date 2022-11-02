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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = function() {\n    const content = document.getElementById(\"content\");\n    \n    const contactDiv = () => {\n      const div = document.createElement(\"div\");\n      div.classList.add(\"contact-main\");\n      \n      return div\n    }\n\n    const person = (imgSrc, firstName, title) => {\n      const div = document.createElement(\"div\");\n      div.classList.add(\"contact-card\");\n\n      const image = document.createElement(\"img\");\n      image.src = imgSrc;\n      image.classList.add(\"person-img\");\n\n      const textDiv = document.createElement(\"div\");\n      textDiv.classList.add(\"person-text\");\n\n      const name = document.createElement(\"p\");\n      name.classList.add(\"person-name\");\n      name.textContent = firstName;\n\n      const pos = document.createElement(\"p\");\n      pos.classList.add(\"position\");\n      pos.textContent = title;\n\n      textDiv.append(name);\n      textDiv.append(pos)\n      // div.append(name);\n      // div.append(pos)\n      div.append(textDiv)\n      div.append(image);\n\n      return div;\n    }\n\n    function createContact() {\n        const conDiv = contactDiv();\n        content.append(conDiv);\n\n        const owner = person(\"../dist/assets/owner.jpg\", 'Hot Pie', 'Owner')\n        const manager = person(\"../dist/assets/manager.jpg\", 'Arya', 'Manager')\n        const waiter = person(\"../dist/assets/waiter.png\", 'Gendry ?', 'Waiter')\n    \n        conDiv.append(owner)\n        conDiv.append(manager)\n        conDiv.append(waiter)\n      }\n\n    createContact();\n\n    return contact\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n   const home = function() {\n    \n   const content = document.getElementById(\"content\");\n\n    function createImage() {\n        const image = document.createElement(\"img\");\n        image.classList.add(\"bg-img\");\n        image.src = \"../dist/assets/inn.jpg\";\n        content.appendChild(image);\n    }\n\n    const bodyDiv = () => {\n        // const bodyHomePageDiv = bodyDiv()\n        const div = document.createElement(\"div\");\n        div.classList.add('body-div');\n        \n        content.append(div);\n        return div;\n    }\n\n    const createCenterDiv = () => {\n        \n        const div = document.createElement(\"div\");\n        div.classList.add(\"body-center-div\");\n        // bodyHomePageDiv.append(div);\n\n        return div\n    }\n\n    const createBodyPhotoDiv = () => {\n        // const bodyCenterDiv = createCenterDiv();\n        const div = document.createElement(\"div\");\n        div.classList.add('photo-body-div');\n        \n        // bodyCenterDiv.append(div);\n        return div;\n    }\n\n    const createBodyPhoto = () => {\n        // const photoDiv = createBodyPhotoDiv();\n\n        const image = document.createElement(\"img\");\n        image.classList.add(\"body-home-image\");\n        image.src = \"../dist/assets/hotpie.jpg\";\n        // photoDiv.appendChild(image);\n        return image\n    }\n\n    const createText = () => {\n        const textDiv = document.createElement(\"div\");\n        const pOne = document.createElement(\"p\");\n        const pTwo = document.createElement(\"p\");\n\n        textDiv.classList.add(\"text\");\n\n        pOne.textContent = 'The Best Lemon Cakes in Westeros';\n        pTwo.textContent = 'Made with love since the reign of Jaehaerys I';\n\n        textDiv.append(pOne);\n        textDiv.append(pTwo);\n\n        return textDiv;\n    }\n\n    const createCallToAction = () => {\n        const div = document.createElement(\"div\");\n        const ctaText = document.createElement(\"p\");\n\n        div.classList.add(\"cta-div\");\n\n        ctaText.classList.add(\"cta-text\");\n        ctaText.textContent = 'Order by raven or visit us!';\n\n        div.append(ctaText);\n        return div;\n    }\n\n    function createHomeTab() {\n        createImage();\n        \n        // const bodyHomePageDiv = bodyDiv()\n        const bodyCenterDiv = createCenterDiv();\n        const text = createText();\n        const photoDiv = createBodyPhotoDiv();\n        const createPhoto = createBodyPhoto();\n        const cta = createCallToAction();\n\n        content.append(bodyCenterDiv)\n        // bodyHomePageDiv.append(bodyCenterDiv);\n        bodyCenterDiv.append(text);\n        photoDiv.append(createPhoto);\n        bodyCenterDiv.append(photoDiv);\n        bodyCenterDiv.append(cta);\n    }\n\n    createHomeTab();\n\n    return home;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n    \n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst mainHomeDiv = document.querySelector(\".body-center-div\");\n\nconst ul = document.querySelector(\"ul\");\nul.addEventListener('click', (e) => {\n    if (e.target.innerHTML == 'Menu') {\n        mainHomeDiv.classList.add(\"hidden\");\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else if (e.target.innerHTML == 'Contact') {\n        mainHomeDiv.classList.add(\"hidden\");\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    }\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = function() {\n    const content = document.getElementById(\"content\");\n\n    const menuDiv = () => {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"menu-div\");\n        return div;\n    }\n\n    const item = (imgSrc, name) => {\n        const div = document.createElement(\"div\");\n        const textDiv = document.createElement(\"div\");\n        div.classList.add(\"item-card\");\n        div.classList.add(\"hvr-grow\");\n        textDiv.classList.add(\"card-text\");\n        textDiv.classList.add(\"hvr-bounce-to-top\");\n        \n        const image = document.createElement(\"img\");\n        image.classList.add(\"item-image\");\n        image.src = imgSrc;\n\n        const p = document.createElement(\"p\");\n        p.classList.add(\"item-name\");\n        p.textContent = name;\n\n        div.append(image);\n        textDiv.append(p);\n        div.append(textDiv);\n\n        return div;\n    }\n\n    function createMenu() {\n        const mainDiv = menuDiv();\n        const itemCardOne = item('../dist/assets/chicken.jpg', 'Honeyed Chicken');\n        const itemCardTwo = item('../dist/assets/stew.jpg', 'Beef & Barley Stew');\n        const itemCardThree = item('../dist/assets/wolfbread.jpg', 'Wolf Bread');\n        const itemCardFour = item('../dist/assets/lemoncake.jpg', 'Lemon Cakes');\n        const itemCardFive = item('../dist/assets/creamcake.jpg', 'Dornish Cream Cakes');\n        const itemCardSix = item('../dist/assets/plumwine.jpg', 'Sweet Plum Wine');\n\n        content.append(mainDiv);\n        mainDiv.append(itemCardOne);\n        mainDiv.append(itemCardTwo);\n        mainDiv.append(itemCardThree);\n        mainDiv.append(itemCardFour);\n        mainDiv.append(itemCardFive);\n        mainDiv.append(itemCardSix);\n    }\n\n    createMenu();\n    \n    return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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