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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n // eslint-disable-line \n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst card = document.createElement('div');\ncard.setAttribute('class', 'card bg-dark text-white text-center w-50 m-auto');\n\n\nconst API = {\n  API_ID: 'https://api.openweathermap.org/data/2.5/weather',\n  KEY: 'ced4960b4f29616c6327cdcc428f0897',\n  API_GRIPHY: 'https://api.giphy.com/v1/gifs/random?',\n  GIPHY_KEY: 'iO1ed13erOjW4NbbYZqqYs6mNYlvpggR',\n\n};\n\n\nconst get_weather = async (city) => { // eslint-disable-line \n  const awaitdata = await fetch(`${API.API_ID}?q=${city}&units=metric&appid=${API.KEY}`, { mode: 'cors' }) // eslint-disable-line \n    .then((response) => response.json())\n    .then((data) => process_weather_data(data)) // eslint-disable-line \n    .catch((error) => {\n      console.error('Error:', error); // eslint-disable-line \n    });\n};\n\nconst process_weather_data = (data) => { // eslint-disable-line \n  const obj_div = document.getElementById('weather-data') || document.createElement('div'); // eslint-disable-line \n  obj_div.id = 'weather-data';\n  const weatherContent = document.querySelector('.weather-form-content');\n  const { weather, wind } = data;\n  const {\n    pressure, humidity, feels_like: feelsLike, temp,\n  } = data.main;\n  const e = document.getElementById('customSwitch1');\n  let category = 0;\n  let feels = 0;\n\n  const url =`${API.GIPHY_KEY}&s=${weather}`\n  \n  \n  \n  e.addEventListener('change', () => {\n    const { checked } = e;\n    if (checked == false) { // eslint-disable-line \n      category = temp;\n      feels = feelsLike;\n    } else {\n      category = Math.round(temp * (9 / 5) + 32);\n      feels = Math.round(feelsLike * (9 / 5) + 32);\n    }\n\n    const objs = `city:${data.name},${data.sys.country}<br/>humidity:${humidity}%<br/>weather:${weather[0].description}\n    <br/>temperature:${category}</br>pressure:${pressure} hpa<br/>wind:${wind.speed}mps\n    <br/> feels like:${feels}<br/><span class=\"lg\">\n    <img src=\"http://openweathermap.org/img/w/${weather[0].icon}.png\"></span><br/>`; //eslint-disable-line\n    obj_div.innerHTML = ' ';\n    obj_div.innerHTML = objs; // eslint-disable-line \n    if (document.querySelector('#weather-data') !== 'null') {\n      card.appendChild(obj_div);\n      weatherContent.appendChild(card);\n    }\n  });\n  e.click();\n};\nget_weather('london');\nasync function getImg(url) {\n  let images;\n  const gang = document.getElementById('#weather-change');\n  const response = await fetch(url, { mode: 'cors' })\n    .then((res) => res.json())\n    //console.log(response)\n    .then((item) => {\n    //console.log(item )\n     console.log(item)\n     const{bitly_gif_url}=item.data.bitly_gif_url;\n    console.log(bitly_gif_url)})\n     \n    //let{images}=Object.values(item.images)\n    //console.log(images)\n    //gang.setAttribute('style', `background:url(${images[0].url})`);\n    \n    .catch((error) => {\n      console.error('Error:', error);\n    });\n}\n\n\n\nconst inputlocation = document.querySelector('#weather-form');\n\ninputlocation.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const { city } = inputlocation;\n  get_weather(city.value);\n  inputlocation.reset();\n  getImg(`https://api.giphy.com/v1/gifs/translate?api_key=iO1ed13erOjW4NbbYZqqYs6mNYlvpggR&s={weather}`)\n  \n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (process_weather_data); // eslint-disable-line \n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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