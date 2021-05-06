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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst card = document.createElement('div');\ncard.setAttribute('class', 'card bg-dark text-white text-center w-50 m-auto');\n\n\n\n\nconst API ={\n  API_ID:'https://api.openweathermap.org/data/2.5/weather',\n  KEY:'ced4960b4f29616c6327cdcc428f0897'\n}\nconst get_weather=async(city)=>{\n  const awaitdata = await fetch(`${API.API_ID}?q=${city}&units=metric&appid=${API.KEY}`,{mode: 'cors'})\n  .then(function(response){\n      return response.json();\n  })\n  .then(data => process_weather_data(data))\n  .catch((error) => {\n      console.error('Error:', error);\n    });\n}\n\nconst process_weather_data=(da)=>{\nconst obj_div = document.getElementById('weather-data') || document.createElement('div');\nobj_div.id = 'weather-data'\nconst weatherContent = document.querySelector('.weather-form-content');\nconst { weather, wind } = da;\nconst { pressure,humidity } = da.main;\n\nconst e = document.getElementById(\"sel1\");\nvar category= 0;\ne.addEventListener('click',function(){  \nvar value = e.options[e.selectedIndex].value;\n if(value=='F'){\n   category=Math.round(da.main.temp* (9/5) + 32);\n }\n else{\n   category=da.main.temp\n }\n\nlet obj_string =`humidity:${humidity}%<br/>weather:${weather[0].description}\n<br/>temperature:${category}<br/>pressure:${pressure} hpa<br/>wind:${wind.speed}mps\n<br/> feels_like:${da.main.feels_like}`;\nobj_div.innerHTML=\" \";\nobj_div.innerHTML = obj_string;\nif (document.querySelector('#weather-data') !== 'null'){\n  card.appendChild(obj_div)\n  weatherContent.appendChild(card)\n}\n})\n\n}\n\nget_weather('london')\nconst inputlocation = document.querySelector('#weather-form')\ninputlocation.addEventListener('submit',e=>{\n  e.preventDefault();\n  const{city}=inputlocation;\n  get_weather(city.value);\n  inputlocation.reset()\n\n})\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (process_weather_data);\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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