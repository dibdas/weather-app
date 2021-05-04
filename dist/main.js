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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\n\n\n\nconst API ={\n    API_ID:'https://api.openweathermap.org/data/2.5/weather',\n    KEY:'ced4960b4f29616c6327cdcc428f0897'\n}\nconst get_weather=async(city)=>{\n    const awaitdata = await fetch(`${API.API_ID}?q=${city}&units=metric&appid=${API.KEY}`,{mode: 'cors'})\n    .then(function(response){\n        return response.json();\n    })\n    .catch((error) => {\n        console.error('Error:', error);\n      });\n}\n\nconst process_weather_data=(data)=>{\nconst obj_div = document.createElement('div')\n  \n  let obj_string =`humidity:${data.main.humidity}<br>`;\n  obj_div.innerHTML = obj_string;\n  weather-form-content.appendChild(obj_div);\n  \n  \n  obj.pressure = {\n    value: data.main.pressure,\n    unit: 'hPa',\n  };\n  obj.wind = data.wind;\n  [obj.weather] = data.weather;\n  \n\n  console.log(obj)\n  return obj;\n\n\n}\n\n\nconsole.log(get_weather('delhi'))\nget_weather('delhi')\nconsole.log(process_weather_data)\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;