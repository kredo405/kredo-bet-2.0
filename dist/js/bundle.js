/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/getLeague.js":
/*!*************************************!*\
  !*** ./src/js/modules/getLeague.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMatches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMatches */ "./src/js/modules/getMatches.js");


let getLeague = () => {
    // Получаем все лиги
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);

        let { response: arrLeagueAll } = response.data;
        // Фильтруем лиги и получаем массив с нужными лигами 
        let arrLeague = arrLeagueAll.filter((el) => {
            return(el.country.name != 'World' && el.league.type != 'Cup' &&
            el.seasons[el.seasons.length - 1].coverage.odds == true &&
            el.seasons[el.seasons.length - 1].coverage.predictions == true &&
            el.seasons[el.seasons.length - 1].coverage.standings == true);
        });
        (0,_getMatches__WEBPACK_IMPORTED_MODULE_0__["default"])(arrLeague);

    }).catch(function (error) {
        console.error(error);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLeague);

/***/ }),

/***/ "./src/js/modules/getMatches.js":
/*!**************************************!*\
  !*** ./src/js/modules/getMatches.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let getMatches = (arrLeague) => {
// получаем все матчи на сегодняшний день
const date = new Date(),
      year = date.getFullYear(),
      mounth = date.getMonth(),
      day = date.getDate();

let mounthNew = '0',
    dayNew = '0';

if(day < 10) {
    dayNew = dayNew + String(day)
} else {
    dayNew = day;
}    

if(mounth < 10) {
    mounthNew = mounthNew + String(mounth)
} else {
    mounthNew = mounth;
}

const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {date: `${year}-${mounthNew}-${dayNew}`},
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);

      let {response: allMatches} = response.data;

      

  }).catch(function (error) {
      console.error(error);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMatches);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_getLeague__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getLeague */ "./src/js/modules/getLeague.js");


(0,_modules_getLeague__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map