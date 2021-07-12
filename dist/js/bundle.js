/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function hamburgerNenu() {
    const hamburger = document.querySelector('.header__gamburger'),
          closeElem = document.querySelector('.menu__toggle'),
          menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
}); 
} 

/* harmony default export */ __webpack_exports__["default"] = (hamburgerNenu);
 

/***/ }),

/***/ "./src/js/modules/searchMatches.js":
/*!*****************************************!*\
  !*** ./src/js/modules/searchMatches.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function searchMatches() {
    let dateInput = document.querySelector('.search-matches__date'),
    btnView = document.querySelector('.search-matches__button'),
    coutnryList = document.querySelector('.search-matches__list-country'),
    leagueList = document.querySelector('.search-matches__list-league'),
    countryTogle = document.querySelector('.search-matches__btn-country'),
    leagueTogle = document.querySelector('.search-matches__btn-laegue'),
    leagueName,
    countryName;

// Получаем все страны
function getCountries() {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
        headers: {
            'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        response.data.response.forEach((el) => {
            let li = document.createElement('li');
            li.innerHTML =`<a class='dropdown-item' href='#'><p class = 'dropdown-name'>${el.name}</p>
            <img src = '${el.flag}' class ='country-flag'></a>`;
            coutnryList.append(li);
            li.addEventListener('click', () => {
                countryTogle.innerHTML = `${el.name}`;
                getLeagues(countryTogle.innerHTML);
            });

        });
    }).catch(function (error) {
        console.error(error);
    });
}
    function getLeagues(country) {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            params: { country: `${country}` },
            headers: {
                'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0',
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            let message = document.querySelector('.dropdown-menu__message');
            let listLeagueArr = leagueList.querySelectorAll('li');
            listLeagueArr.forEach(el => {
                el.remove();
            })
            response.data.response.forEach((el) => {
                let li = document.createElement('li');
                li.innerHTML = `<a class='dropdown-item' href='#'><p class = 'dropdown-name'>${el.league.name}</p>
                <img src = '${el.league.logo}' class ='league-logo'></a>`;
                leagueList.append(li);
                li.addEventListener('click', () => {
                    leagueTogle.innerHTML = `${el.league.name}`;
                });
            });
            if(message != null) {
                message.remove();
            }
        }).catch(function (error) {
            console.error(error);
        });
}
getCountries();
}

/* harmony default export */ __webpack_exports__["default"] = (searchMatches);



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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_searchMatches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/searchMatches */ "./src/js/modules/searchMatches.js");



(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_modules_searchMatches__WEBPACK_IMPORTED_MODULE_1__.default)();

}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map