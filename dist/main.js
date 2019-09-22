/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const restFooter = () => {
  const display = document.getElementById("footer-content");
  const t = document.getElementById("footer-temp");
  const footerClone = document.importNode(t.content, true);
  const logo = footerClone.getElementById("footer-logo");
  const footerImage = document.createElement("img");
  footerImage.src = "../assets/logo.jpg";
  footerImage.style.height = "50px";
  footerImage.style.width = "80px";
  logo.appendChild(footerImage);
  const footerText = footerClone.getElementById("rest-footer");
  footerText.innerHTML = "&copy; 2019, DogBite Web Design";
  display.appendChild(footerClone);
};

/* harmony default export */ __webpack_exports__["default"] = (restFooter);


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const restHeader = (title, description, logo) => {
  const headerContent = document.querySelector("#header-content");
  let t = document.querySelector("#header-temp");
  let clone = document.importNode(t.content, true);
  if (logo) {
    let logo = clone.getElementById("logo");
    let image = document.createElement("img");
    image.src = "../assets/logo.jpg";
    image.style.height = "100px";
    image.style.width = "220px";
    logo.appendChild(image);
  }
  let hone = clone.getElementById("rest-header");
  let htwo = clone.getElementById("rest-header-two");
  hone.innerHTML = title;
  htwo.innerHTML = description;
  headerContent.appendChild(clone);
};

/* harmony default export */ __webpack_exports__["default"] = (restHeader);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _menubar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menubar */ "./src/menubar.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ "./src/pages.js");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu */ "./src/menu/menu.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/footer.js");






Object(_header__WEBPACK_IMPORTED_MODULE_0__["default"])("Acme Omelette House", "Best omelettes in the brazos valley", true);
Object(_menubar__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_pages__WEBPACK_IMPORTED_MODULE_2__["default"])("home-text");

let dishes = [
  {
    title: "Acme Omelette Specials",
    items: [
      {
        imgpath: "../assets/img/om1.jpg",
        name: "Acme House Exotic Delight",
        price: "$120.99"
      },
      {
        imgpath: "../assets/img/om2.jpg",
        name: "Acme Deep Pan",
        price: "$150.99"
      },
      {
        imgpath: "../assets/img/om3.jpg",
        name: "Acme Matinee Special",
        price: "$10.99"
      }
    ]
  },
  {
    title: "Acme omelette house Side Orders",
    items: [
      {
        imgpath: "../assets/img/frenchfries.jpg",
        name: "Acme greasy fries",
        price: "$5.99"
      },
      {
        imgpath: "../assets/img/coleslaw.jpg",
        name: "Acme coleslaw",
        price: "$3.99"
      }
    ]
  }
];
Object(_menu_menu__WEBPACK_IMPORTED_MODULE_3__["default"])(dishes);
Object(_footer__WEBPACK_IMPORTED_MODULE_4__["default"])();


/***/ }),

/***/ "./src/menu/dishitem.js":
/*!******************************!*\
  !*** ./src/menu/dishitem.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getDishItem = (imgpath, description, price) => {
  const t = document.getElementById("dish-item");
  const dishClone = document.importNode(t.content, true);
  const dishImg = dishClone.getElementById("dish-image");
  dishImg.src = imgpath;
  const dishDescription = dishClone.getElementById("dish-description");
  dishDescription.innerHTML = description;
  const dishPrice = dishClone.getElementById("dish-price");
  dishPrice.innerHTML = price;
  return dishClone;
};

/* harmony default export */ __webpack_exports__["default"] = (getDishItem);


/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dishitem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishitem */ "./src/menu/dishitem.js");


const buildMenuListing = menuList => {
  const display = document.getElementById("menu-text");
  const shadow = display.attachShadow({ mode: "open" });
  for (let i = 0; i < menuList.length; i++) {
    let m = createMenu(menuList[i].title, menuList[i].items);
    shadow.appendChild(m);
  }
};
const createMenu = (mainTitle, dishesList) => {
  const t = document.getElementById("menu-temp");
  const menuClone = document.importNode(t.content, true);
  const dishTitle = menuClone.getElementById("dish-title");
  dishTitle.innerHTML = mainTitle;
  //
  // insert dish items here
  //
  const dishList = menuClone.getElementById("dish-item-list");
  for (let i = 0; i < dishesList.length; i++) {
    dishList.appendChild(
      Object(_dishitem__WEBPACK_IMPORTED_MODULE_0__["default"])(dishesList[i].imgpath, dishesList[i].name, dishesList[i].price)
    );
  }
  return menuClone;
};

/* harmony default export */ __webpack_exports__["default"] = (buildMenuListing);


/***/ }),

/***/ "./src/menubar.js":
/*!************************!*\
  !*** ./src/menubar.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./src/pages.js");


const menuBarFactory = () => {
  const mitems = [
    {
      name: "Acme Omelette House Home",
      listener: event => {
        Object(_pages__WEBPACK_IMPORTED_MODULE_0__["default"])("home-text");
      }
    },
    {
      name: "About Acme Omelette House",
      listener: event => {
        Object(_pages__WEBPACK_IMPORTED_MODULE_0__["default"])("about-text");
      }
    },
    {
      name: "Main Menu",
      listener: event => {
        Object(_pages__WEBPACK_IMPORTED_MODULE_0__["default"])("menu-text");
      }
    }
  ];
  const restMenuBar = () => {
    const menubarContent = document.getElementById("menubar-content");
    const t = document.querySelector("#menubar-temp");
    const menuclone = document.importNode(t.content, true);
    let ul = menuclone.getElementById("menubar-list");
    for (let i = 0; i < mitems.length; i++) {
      //
      // now clone li's and add them
      // to the ul
      //
      let newmenuItem = document.createElement("li");
      newmenuItem.classList.add("menu-item");
      newmenuItem.innerHTML = mitems[i].name;
      newmenuItem.addEventListener("click", mitems[i].listener);
      ul.appendChild(newmenuItem);
    }
    menubarContent.appendChild(menuclone);
  };
  return { restMenuBar };
};

const { restMenuBar } = menuBarFactory();
/* harmony default export */ __webpack_exports__["default"] = (restMenuBar);


/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const showPage = () => {
  const ifId = (attributeList, pageid) => {
    for (let j = 0; j < attributeList.length; j++) {
      if (attributeList[j].name === "id" && attributeList[j].value === pageid) {
        return true;
      }
    }
    return false;
  };
  const pages = document.getElementById("text-content").children;

  return pageid => {
    for (let i = 0; i < pages.length; i++) {
      let a = pages[i].attributes;
      if (ifId(a, pageid)) {
        pages[i].style.display = "block";
      } else {
        pages[i].style.display = "none";
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (showPage());


/***/ })

/******/ });
//# sourceMappingURL=main.js.map