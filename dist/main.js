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

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = function() {\n    const content = document.getElementById(\"content\");\n\n    const createFooterContent = () => {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"footer\");\n\n        const text = document.createElement(\"p\");\n        text.classList.add(\"footer-text\");\n        text.textContent = 'Created by Ramiz';\n\n        div.append(text);\n        return div;\n    }\n\n    function createFooter() {\n        const footerContent = createFooterContent();\n        content.append(footerContent);\n    }\n\n    createFooter();\n\n    return footer\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer); \n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = function() {\n    const content = document.getElementById(\"content\");\n\n    const headerDiv = () => {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"header-div\");\n        return div;\n    }\n\n    const headerText = () => {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"header-text\");\n\n        const text = document.createElement(\"p\");\n        text.classList.add(\"header-text-content\");\n        text.textContent = 'The Inn at the Crossroads';\n\n        div.append(text);\n        return div;\n    }\n\n    function headerList() {\n        const headDiv = headerDiv();\n        const headText = headerText();\n        const ul = document.createElement(\"ul\");\n\n        const liOne = document.createElement(\"li\");\n        liOne.classList.add(\"header-li\", 'home-li');\n        const liTwo = document.createElement(\"li\");\n        liTwo.classList.add(\"header-li\", \"menu-li\");\n        const liThree = document.createElement(\"li\");\n        liThree.classList.add(\"header-li\", \"staff-li\");\n\n        liOne.innerHTML = \"Home\";\n        liTwo.innerHTML = \"Menu\";\n        liThree.innerHTML = 'Staff';\n\n        headDiv.append(headText)\n        \n        ul.append(liOne, liTwo, liThree);\n        headDiv.append(ul)\n        content.append(headDiv)\n    }\n\n    headerList();\n\n    return header\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header); \n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n   const home = function() {\n    \n   const content = document.getElementById(\"content\");\n\n    function createImage() {\n        const image = document.createElement(\"img\");\n        image.classList.add(\"bg-img\");\n        image.src = \"assets/inn.jpg\";\n        content.appendChild(image);\n    }\n\n    const createCenterDiv = () => {\n        const div = document.createElement(\"div\");\n        div.classList.add('main-body');\n\n        return div\n    }\n\n    const createBodyPhotoDiv = () => {\n        const div = document.createElement(\"div\");\n        div.classList.add('img-container');\n        \n        \n        return div;\n    }\n\n    const createBodyPhoto = () => {\n        const image = document.createElement(\"img\");\n        image.classList.add(\"main-img\");\n        image.src = \"assets/hotpie.jpg\";\n        return image\n    }\n\n    const createText = () => {\n        const textDiv = document.createElement(\"div\");\n        const pOne = document.createElement(\"p\");\n        const pTwo = document.createElement(\"p\");\n\n        textDiv.classList.add(\"text\");\n\n        pOne.textContent = 'The Best Lemon Cakes in Westeros';\n        pTwo.textContent = 'Serving you every morrow since the reign of Jaehaerys I';\n\n        textDiv.append(pOne);\n        textDiv.append(pTwo);\n\n        return textDiv;\n    }\n\n    const createCallToAction = () => {\n        const div = document.createElement(\"div\");\n        const ctaText = document.createElement(\"p\");\n\n        div.classList.add(\"cta-div\");\n\n        ctaText.classList.add(\"cta-text\");\n        ctaText.textContent = 'Order by raven or visit us!';\n\n        div.append(ctaText);\n        return div;\n    }\n\n    function createHomeTab() {\n        createImage();\n        \n        const bodyCenterDiv = createCenterDiv();\n        const text = createText();\n        const photoDiv = createBodyPhotoDiv();\n        const createPhoto = createBodyPhoto();\n        const cta = createCallToAction();\n\n        content.append(bodyCenterDiv)\n        bodyCenterDiv.append(text);\n        photoDiv.append(createPhoto);\n        bodyCenterDiv.append(photoDiv);\n        bodyCenterDiv.append(cta);\n    }\n\n    createHomeTab();\n\n    return home;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n    \n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _staff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff.js */ \"./src/staff.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n\n\n\n\n\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_staff_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n\nconst ul = document.querySelector(\"ul\");\n\nfunction render(e) {\n    const homeDiv = document.querySelector(\".main-body\");\n    const menuDiv = document.querySelector(\".menu-div\");\n    const staffDiv = document.querySelector(\".staff-main\");\n    \n    const homeLi = document.querySelector(\".home-li\")\n    const menuLi = document.querySelector(\".menu-li\")\n    const staffLi = document.querySelector(\".staff-li\")\n    \n    const hide = (elemOne, elemTwo) => {\n        elemOne.classList.add(\"hidden\");\n        elemTwo.classList.add(\"hidden\");\n    }\n    \n    const show = (elem) => {\n        elem.classList.remove(\"hidden\");\n    }\n    \n    const addUnderline = (elem) => {\n        elem.classList.add(\"underline\");\n    }\n    \n    const removeUnderline = (elemOne, elemTwo) => {\n        elemOne.classList.remove(\"underline\");\n        elemTwo.classList.remove(\"underline\");\n    }\n\n    if (e.target.innerHTML == 'Menu') {\n        show(menuDiv);\n        hide(homeDiv, staffDiv);\n        addUnderline(menuLi);\n        removeUnderline(homeLi, staffLi);\n    } else if (e.target.innerHTML == 'Staff') {\n        show(staffDiv);\n        hide(homeDiv, menuDiv);\n        addUnderline(staffLi);\n        removeUnderline(homeLi, menuLi);\n    } else {\n        show(homeDiv);\n        hide(menuDiv, staffDiv);\n        addUnderline(homeLi);\n        removeUnderline(menuLi, staffLi);\n    }\n}\n\nul.addEventListener('click', render)\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = function() {\n    const content = document.getElementById(\"content\");\n\n    const menuDiv = () => {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"menu-div\", \"hidden\");\n        return div;\n    }\n\n    const item = (imgSrc, name) => {\n        const div = document.createElement(\"div\");\n        const textDiv = document.createElement(\"div\");\n        div.classList.add(\"item-card\");\n        div.classList.add(\"hvr-grow\");\n        textDiv.classList.add(\"card-text\");\n        textDiv.classList.add(\"hvr-bounce-to-top\");\n        \n        const image = document.createElement(\"img\");\n        image.classList.add(\"item-image\");\n        image.src = imgSrc;\n\n        const p = document.createElement(\"p\");\n        p.classList.add(\"item-name\");\n        p.textContent = name;\n\n        div.append(image);\n        textDiv.append(p);\n        div.append(textDiv);\n\n        return div;\n    }\n\n    function createMenu() {\n        const mainDiv = menuDiv();\n        const itemCardOne = item('assets/chicken.jpg', 'Honeyed Chicken');\n        const itemCardTwo = item('assets/stew.jpg', 'Beef & Barley Stew');\n        const itemCardThree = item('assets/wolfbread.jpg', 'Wolf Bread');\n        const itemCardFour = item('assets/lemoncake.jpg', 'Lemon Cakes');\n        const itemCardFive = item('assets/creamcake.jpg', 'Dornish Cream Cakes');\n        const itemCardSix = item('assets/plumwine.jpg', 'Sweet Plum Wine'); \n\n        content.append(mainDiv);\n        mainDiv.append(itemCardOne);\n        mainDiv.append(itemCardTwo);\n        mainDiv.append(itemCardThree);\n        mainDiv.append(itemCardFour);\n        mainDiv.append(itemCardFive);\n        mainDiv.append(itemCardSix);\n    }\n\n    createMenu();\n    \n    return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/staff.js":
/*!**********************!*\
  !*** ./src/staff.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst staff = function() {\n  const content = document.getElementById(\"content\");\n  \n  const staffDiv = () => {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"staff-main\", \"hidden\");\n    \n    return div\n  }\n\n  const mainTop = () => {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"staff-top\");\n\n    const topText = document.createElement(\"p\");\n    topText.textContent = 'Our Staff';\n    \n    div.append(topText)\n    return div\n  }\n\n  const ourStaffText = () => {\n    const p = document.createElement(\"div\");\n    p.classList.add(\"our-staff\");\n    p.textContent = 'Our Staff'\n\n\n\n    return p;\n  }\n\n  const person = (imgSrc, firstName, title) => {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"staff-card\");\n\n    const image = document.createElement(\"img\");\n    image.src = imgSrc;\n    image.classList.add(\"person-img\");\n\n    const textDiv = document.createElement(\"div\");\n    textDiv.classList.add(\"person-text\");\n\n    const name = document.createElement(\"p\");\n    name.classList.add(\"person-name\");\n    name.textContent = firstName;\n\n    const pos = document.createElement(\"p\");\n    pos.classList.add(\"position\");\n    pos.textContent = title;\n\n    textDiv.append(name);\n    textDiv.append(pos);\n    div.append(textDiv)\n    div.append(image);\n\n    return div;\n  }\n\n  function createStaff() {\n      const conDiv = staffDiv();\n      content.append(conDiv);\n\n      const ourStaff = mainTop();\n      const staffText = ourStaffText();\n\n      const owner = person(\"assets/owner.jpg\", 'Hot Pie', 'Owner')\n      const manager = person(\"assets/manager.jpg\", 'Arya Stark', 'Manager')\n      const waiter = person(\"assets/waiter.png\", 'Gendry ?', 'Waiter')\n  \n      conDiv.append(staffText);\n      conDiv.append(owner);\n      conDiv.append(manager);\n      conDiv.append(waiter);\n    }\n\n  createStaff();\n\n  return staff\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (staff);\n\n//# sourceURL=webpack://restaurant-page/./src/staff.js?");

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