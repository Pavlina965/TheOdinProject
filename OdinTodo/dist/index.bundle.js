/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body,
main {
  height: 100%;
  margin: 0;
}
.popUpForm {
  display: none;
  position: fixed;
  left: 50%;
  top: 20%;
  background-color: #707599;
  transform: translate(-50%, 5%);
  z-index: 9;
  height: 200px;
  width: 400px;

  box-shadow: 0px 0px 10px 1px #707599;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
}
.popUpForm #closePopUpButton{
    position: absolute;
    top: 5%;
    left: 95%
}
#closePopUpButton:hover{
    transform: scale(1.1);
    cursor: pointer;
}
.mainContainer {
  display: flex;
  height: 100%;
}
nav {
  background-color: #4a4e69;
  display: flex;
  align-items: center;
  padding: 10px;
}
.menu {
  width: 35%;
  background-color: #707599;
  padding: 0;
  cursor: pointer;
  /* display: flex;
    align-items: center;
    flex-direction: column; */
}
.editIcon:hover,.deleteIcon:hover{
  color: #dbdde6;
}
.menu p,
.menu div {
  width: 100%;
  padding: 10px;
  margin: 0;
  text-align: center;
}
.menu p:hover {
  
  background-color: #7d82a2;
  width: 100%;
}
/* .menu div{
    width: 100%;
    padding: 10px;
    margin: 0;
    text-align: center;
} */
.menu div:hover {
  transform: scale(1.1);
}
.hidden {
  display: none;
}
.blurr{
    opacity: 0.3;
}
.todo {
  padding: 10px;
  background-color: #dbdde6;
  width: 100%;
}

li {
  list-style: none;
}
.checked {
  text-decoration: line-through;
}
.listName {
  border-bottom: #4a4e69 1px solid;
}
#todoList li {
  display: flex;
  justify-content: space-between;
}
.markDiv {
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,YAAY;EACZ,SAAS;AACX;AACA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,QAAQ;EACR,yBAAyB;EACzB,8BAA8B;EAC9B,UAAU;EACV,aAAa;EACb,YAAY;;EAEZ,oCAAoC;EACpC,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;IACI,kBAAkB;IAClB,OAAO;IACP;AACJ;AACA;IACI,qBAAqB;IACrB,eAAe;AACnB;AACA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,UAAU;EACV,yBAAyB;EACzB,UAAU;EACV,eAAe;EACf;;6BAE2B;AAC7B;AACA;EACE,cAAc;AAChB;AACA;;EAEE,WAAW;EACX,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;AACA;;EAEE,yBAAyB;EACzB,WAAW;AACb;AACA;;;;;GAKG;AACH;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;AACA;IACI,YAAY;AAChB;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,eAAe;AACjB","sourcesContent":["html,\r\nbody,\r\nmain {\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n.popUpForm {\r\n  display: none;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 20%;\r\n  background-color: #707599;\r\n  transform: translate(-50%, 5%);\r\n  z-index: 9;\r\n  height: 200px;\r\n  width: 400px;\r\n\r\n  box-shadow: 0px 0px 10px 1px #707599;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 15px;\r\n}\r\n.popUpForm #closePopUpButton{\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 95%\r\n}\r\n#closePopUpButton:hover{\r\n    transform: scale(1.1);\r\n    cursor: pointer;\r\n}\r\n.mainContainer {\r\n  display: flex;\r\n  height: 100%;\r\n}\r\nnav {\r\n  background-color: #4a4e69;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n.menu {\r\n  width: 35%;\r\n  background-color: #707599;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  /* display: flex;\r\n    align-items: center;\r\n    flex-direction: column; */\r\n}\r\n.editIcon:hover,.deleteIcon:hover{\r\n  color: #dbdde6;\r\n}\r\n.menu p,\r\n.menu div {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n.menu p:hover {\r\n  \r\n  background-color: #7d82a2;\r\n  width: 100%;\r\n}\r\n/* .menu div{\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin: 0;\r\n    text-align: center;\r\n} */\r\n.menu div:hover {\r\n  transform: scale(1.1);\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n.blurr{\r\n    opacity: 0.3;\r\n}\r\n.todo {\r\n  padding: 10px;\r\n  background-color: #dbdde6;\r\n  width: 100%;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n.listName {\r\n  border-bottom: #4a4e69 1px solid;\r\n}\r\n#todoList li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.markDiv {\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projects = (() => {
  let projectArr = [];
  let projId = projectArr.length;
  let currId =0;
  
  projectArr = [
    {
      title: "Inbox",
      id: 0,
      tasks: [
        {
          title: "task1",
          dueDate: '2023-4-10',
          completed: false,
          project: "inbox",
        },
      ],
    },
    {
      title: "Groceries",
      id: 1,
      tasks: [
        {
          title: "apples",
          completed: false,
          project: "Groceries",
        },
        {
          title: "meat",
          completed: false,
          project: "Groceries",
        },
      ],
    },
  ];

  class Project {
    constructor(title) {
      this.title = title;
      currId = projId +1;
      console.log(currId);
      this.id = currId;
      this.tasks = [];
    }
  }

  function addProject(title) {
    const project = new Project(title);
    projectArr.push(project);
  }
  function editProject(index,title){
    projectArr[index].title = title;
  }

  function deleteProject(index){
    projectArr.splice(index, 1);

  }
  return {
    projectArr,
    addProject,
    editProject,
    deleteProject,
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const toDo = (() => {

class Task{

    constructor(title, completed, project){
        this.title = title;
        // this.dueDate = dueDate;
        this.completed = false;
        this.project = project;
    }
}
    
    function addTask(title, projectId){
        const task = new Task(title,projectId);

        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectId].tasks.push(task);
    }
    function deleteTask(projectId, taskId){
        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectId].tasks.splice(taskId,1);

    }
    function completeTask(projectID,taskId){
        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks[taskId].completed = true;
    }
    return{
        addTask,
        deleteTask,
        completeTask,
    };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




const addTodoButton = document.querySelector("#addTodoButton");
const todoList = document.querySelector("ul");
const todoInputTask = document.querySelector("#todoInput");
const menuBtn = document.querySelector("#menu");
const todoInputDate = document.getElementById("dateInput");
const projectName = document.querySelector("#projectName").firstChild;
const formPopUp = document.querySelector(".popUpForm");
const projectInput = document.querySelector("#projectInput");
const mainContainer = document.querySelector(".mainContainer");
const divMenu = document.querySelector("#projectMenu");
const popUpBtn = document.querySelector("#addProjectButton");
const closePopUpBtn = document.querySelector("#closePopUpButton");
const popUpName = document.querySelector("#popUpName");
// const today = new Date();
// todoInputDate.valueAsDate = today;
//load page
// console.log(projects.projectArr);
function loadPage() {
  loadProjects();
  formPopUp.style.display = "none";

  //add new project button
  const addNewProjectDiv = document.createElement("div");
  addNewProjectDiv.id = "addNewProject";
  addNewProjectDiv.innerHTML =
    "New Project " + '<i class="fa-solid fa-plus"></i>';
  divMenu.appendChild(addNewProjectDiv);
  const projectCollection = document.getElementsByClassName("projects");
  //new Project popUp click event
  const newProjectBtn = document.querySelector("#addNewProject");
  newProjectBtn.addEventListener("click", () => {
    projectInput.value = "";
    popUpName.textContent = "new Project";
    popUpBtn.textContent = "Add";
    popUpBtn.className = "addProject";
    showPopUp();
  });
  //load tasks for project
  for (let i = 0; i < projectCollection.length; i++) {
    projectCollection[i].addEventListener("click", () => {
      loadTasks(i);
    });
  }
  // load Index Project
  // const HomeProject = document.getElementById("0");
  // projectName.data = HomeProject.textContent;
  // const projectId = HomeProject.id;
  loadTasks(0);
  // closePopUp();
}
//load projects
function loadProjects() {
  for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr.length; i++) {
    //creating projects list
    const projectP = document.createElement("p");
    projectP.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].title;
    projectP.id = i;
    projectP.className = "projects";
    // edit project button
    const projectSpanEdit = document.createElement("span");
    projectSpanEdit.className = "editIcon";
    const projectIEdit = document.createElement("i");
    projectSpanEdit.appendChild(projectIEdit);
    projectIEdit.className = "fa-solid fa-pen-to-square";

    //delete project button
    const projectSpanDelete = document.createElement("span");
    projectSpanDelete.className = "deleteIcon";
    const projectIDelete = document.createElement("i");
    projectSpanDelete.appendChild(projectIDelete);
    projectIDelete.className = "fa-solid fa-trash";

    projectP.append(projectSpanEdit, projectSpanDelete);
    // projectP.appendChild(projectSpanEdit);

    divMenu.appendChild(projectP);
    projectSpanEdit.addEventListener("click", () => {
      projectInput.value = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].title;
      projectInput.id = i;
      popUpName.textContent = "edit Project";
      popUpBtn.textContent = "Edit";
      popUpBtn.className = "editProject";
      showPopUp(i);
    });
    projectSpanDelete.addEventListener("click", () => {
      deleteProject(i);
      // console.log(projects.projectArr[i]);
      document.getElementById("projectMenu").innerHTML = "";
      loadPage();
    });
  }
}
loadPage();

// document.addEventListener("DOMContentLoaded", loadProjects);

// const editProjectBtn = document.getElementById(i);
// editProjectBtn.addEventListener("click", () => {
//   addProjectBtn.textContent = "edit";
//   addProjectBtn.id = "editProjectButton";
//   editProject(i);
// });

function closePopUp() {
  // projectInput.value = "";
  formPopUp.style.display = "none";
  mainContainer.classList.remove("blurr");
  popUpBtn.textContent = "Add";
  popUpBtn.id = "addProjectButton";
  document.getElementById("projectMenu").innerHTML = "";
  // addProjectBtn.removeEventListener();

  loadPage();
}
function showPopUp() {
  mainContainer.classList.add("blurr");
  formPopUp.style.display = "flex";
  if (popUpBtn.className === "addProject") {
    popUpBtn.addEventListener(
      "click",
      () => {
        addProject();
      },
      { once: true }
    );
  } else if (popUpBtn.className === "editProject") {
    popUpBtn.addEventListener(
      "click",
      () => {
        event.preventDefault();

        // console.log();
        editProject(projectInput.id);
      },
      { once: true }
    );
  }
}
closePopUpBtn.addEventListener("click", closePopUp);

function editProject(index) {
  // const editProjectBtn = document.querySelector("#editProjectButton");
  // console.log(projects.projectArr);

  event.preventDefault();
  // console.log(projectInput.value);

  // const newProjectName = document.querySelector("#projectInput");
  // console.log(newProjectName.value);
  _projects__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(index, projectInput.value);
  document.getElementById("projectMenu").innerHTML = "";
  closePopUp();
}

// popUpBtn.addEventListener("click", () => {
//   addProject();
// });
//add new project showing form
function addProject() {
  event.preventDefault();
  if (projectInput.value.trim === "") {
    alert("not Valid name");
  } else {
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(projectInput.value);
    document.getElementById("projectMenu").innerHTML = "";
    mainContainer.classList.remove("blurr");
    // console.log(projectInput.value);
  }
  loadPage();
  //add eventlistener for adding project
  // console.log(newProjectBtn);
  // const closePopUpBtn = document.querySelector("#closePopUp");
}
function deleteProject(index) {
  _projects__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(index);
}

// console.log(projects.projectArr);

// console.log(projectInput.value);
//hide form

//load tasks
function loadTasks(index) {
  const activeProject = document.getElementById(index);
  // if (activeProject == null) {
  //   activeProject = 0;
  //   console.log(activeProject);
  // }
  const activeProjectName = activeProject.textContent;

  projectName.data = activeProjectName;
  projectName.id = activeProject.id;
  document.getElementById("todoList").innerHTML = "";

  //loading tasks from project array
  for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[index].tasks.length; i++) {
    const todoItem = document.createElement("li");
    const isChecked = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[index].tasks[i].completed;
    if (isChecked) {
      todoItem.className = "checked";
    }
    const todoItemtText = document.createTextNode(
      _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[index].tasks[i].title
    );
    todoItem.appendChild(todoItemtText);

    const todoList = document.querySelector("#todoList");
    todoList.appendChild(todoItem);
    const todoDiv = document.createElement("div");
    todoDiv.className = "markDiv";

    const check = document.createElement("span");
    check.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    check.className = "check";
    todoDiv.appendChild(check);

    const close = document.createElement("span");
    close.innerHTML = '<i class="fa-regular fa-rectangle-xmark"></i>';
    close.className = "close";
    todoDiv.appendChild(close);
    todoItem.appendChild(todoDiv);

    //completing task
    const checkListItems = document.getElementsByClassName("check");
    for (let i = 0; i < checkListItems.length; i++) {
      checkListItems[i].onclick = () => {
        completeListItem(i, activeProject.id);
        const checkedItem = todoList.childNodes[i];
        checkedItem.className = "checked";
      };
    }
    // deleting task
    const closeListItems = document.getElementsByClassName("close");
    for (let i = 0; i < closeListItems.length; i++) {
      closeListItems[i].onclick = () => {
        deleteListItem(i, activeProject.id);
      };
    }
  }
}

addTodoButton.addEventListener("click", addListItem);

//add task to project
function addListItem() {
  event.preventDefault();
  const todoInputText = todoInputTask.value;
  const todoInputDate = document.getElementById("dateInput").value;
  const todoProject = projectName.id;

  _todo__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(todoInputText, todoProject, todoInputDate.value);
  document.getElementById("todoInput").value = "";

  loadTasks(todoProject);
}

//delete task from project
function deleteListItem(taskIndex, projectId) {
  _todo__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(projectId, taskIndex);
  loadTasks(projectId);
}
function completeListItem(taskIndex, projectId) {
  _todo__WEBPACK_IMPORTED_MODULE_2__["default"].completeTask(projectId, taskIndex);
}

//hide side menu
menuBtn.addEventListener("click", function () {
  const menu = document.querySelector("#projectMenu");
  menu.classList.toggle("hidden");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakVVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2Q0FBSTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2Q0FBSTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkNBQUk7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW50b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW50b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW50b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW50b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW50b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGludG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGludG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGludG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGludG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW50b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGludG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcclxuYm9keSxcclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ucG9wVXBGb3JtIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiAyMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzU5OTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1JSk7XHJcbiAgei1pbmRleDogOTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuXHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjNzA3NTk5O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG4ucG9wVXBGb3JtICNjbG9zZVBvcFVwQnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDk1JVxyXG59XHJcbiNjbG9zZVBvcFVwQnV0dG9uOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tYWluQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5uYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRlNjk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLm1lbnUge1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzU5OTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXHJcbn1cclxuLmVkaXRJY29uOmhvdmVyLC5kZWxldGVJY29uOmhvdmVye1xyXG4gIGNvbG9yOiAjZGJkZGU2O1xyXG59XHJcbi5tZW51IHAsXHJcbi5tZW51IGRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tZW51IHA6aG92ZXIge1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDgyYTI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLyogLm1lbnUgZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59ICovXHJcbi5tZW51IGRpdjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmJsdXJye1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcbi50b2RvIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRkZTY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5jaGVja2VkIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4ubGlzdE5hbWUge1xyXG4gIGJvcmRlci1ib3R0b206ICM0YTRlNjkgMXB4IHNvbGlkO1xyXG59XHJcbiN0b2RvTGlzdCBsaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLm1hcmtEaXYge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTs7RUFFWixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1A7QUFDSjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZUFBZTtFQUNmOzs2QkFFMkI7QUFDN0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBQ0E7Ozs7O0dBS0c7QUFDSDtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXHJcXG5ib2R5LFxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4ucG9wVXBGb3JtIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDc1OTk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1JSk7XFxyXFxuICB6LWluZGV4OiA5O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG5cXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggIzcwNzU5OTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxufVxcclxcbi5wb3BVcEZvcm0gI2Nsb3NlUG9wVXBCdXR0b257XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1JTtcXHJcXG4gICAgbGVmdDogOTUlXFxyXFxufVxcclxcbiNjbG9zZVBvcFVwQnV0dG9uOmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLm1haW5Db250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRlNjk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3NTk5O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxyXFxufVxcclxcbi5lZGl0SWNvbjpob3ZlciwuZGVsZXRlSWNvbjpob3ZlcntcXHJcXG4gIGNvbG9yOiAjZGJkZGU2O1xcclxcbn1cXHJcXG4ubWVudSBwLFxcclxcbi5tZW51IGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tZW51IHA6aG92ZXIge1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q4MmEyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi8qIC5tZW51IGRpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn0gKi9cXHJcXG4ubWVudSBkaXY6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5ibHVycntcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbn1cXHJcXG4udG9kbyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGRlNjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLmxpc3ROYW1lIHtcXHJcXG4gIGJvcmRlci1ib3R0b206ICM0YTRlNjkgMXB4IHNvbGlkO1xcclxcbn1cXHJcXG4jdG9kb0xpc3QgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLm1hcmtEaXYge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xyXG4gIGxldCBwcm9qZWN0QXJyID0gW107XHJcbiAgbGV0IHByb2pJZCA9IHByb2plY3RBcnIubGVuZ3RoO1xyXG4gIGxldCBjdXJySWQgPTA7XHJcbiAgXHJcbiAgcHJvamVjdEFyciA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiSW5ib3hcIixcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwidGFzazFcIixcclxuICAgICAgICAgIGR1ZURhdGU6ICcyMDIzLTQtMTAnLFxyXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIHByb2plY3Q6IFwiaW5ib3hcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiR3JvY2VyaWVzXCIsXHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICB0YXNrczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiBcImFwcGxlc1wiLFxyXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIHByb2plY3Q6IFwiR3JvY2VyaWVzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJtZWF0XCIsXHJcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgcHJvamVjdDogXCJHcm9jZXJpZXNcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgY3VycklkID0gcHJvaklkICsxO1xyXG4gICAgICBjb25zb2xlLmxvZyhjdXJySWQpO1xyXG4gICAgICB0aGlzLmlkID0gY3VycklkO1xyXG4gICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gICAgcHJvamVjdEFyci5wdXNoKHByb2plY3QpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBlZGl0UHJvamVjdChpbmRleCx0aXRsZSl7XHJcbiAgICBwcm9qZWN0QXJyW2luZGV4XS50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpbmRleCl7XHJcbiAgICBwcm9qZWN0QXJyLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvamVjdEFycixcclxuICAgIGFkZFByb2plY3QsXHJcbiAgICBlZGl0UHJvamVjdCxcclxuICAgIGRlbGV0ZVByb2plY3QsXHJcbiAgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XHJcbiIsImltcG9ydCBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzJztcclxuXHJcbmNvbnN0IHRvRG8gPSAoKCkgPT4ge1xyXG5cclxuY2xhc3MgVGFza3tcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29tcGxldGVkLCBwcm9qZWN0KXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgLy8gdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICB9XHJcbn1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gYWRkVGFzayh0aXRsZSwgcHJvamVjdElkKXtcclxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUscHJvamVjdElkKTtcclxuXHJcbiAgICAgICAgcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SWRdLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3RJZCwgdGFza0lkKXtcclxuICAgICAgICBwcm9qZWN0cy5wcm9qZWN0QXJyW3Byb2plY3RJZF0udGFza3Muc3BsaWNlKHRhc2tJZCwxKTtcclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb21wbGV0ZVRhc2socHJvamVjdElELHRhc2tJZCl7XHJcbiAgICAgICAgcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRhc2tzW3Rhc2tJZF0uY29tcGxldGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybntcclxuICAgICAgICBhZGRUYXNrLFxyXG4gICAgICAgIGRlbGV0ZVRhc2ssXHJcbiAgICAgICAgY29tcGxldGVUYXNrLFxyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgdG9EbzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHRvRG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVG9kb0J1dHRvblwiKTtcclxuY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XHJcbmNvbnN0IHRvZG9JbnB1dFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9JbnB1dFwiKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcclxuY29uc3QgdG9kb0lucHV0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpO1xyXG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIikuZmlyc3RDaGlsZDtcclxuY29uc3QgZm9ybVBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcEZvcm1cIik7XHJcbmNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdElucHV0XCIpO1xyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGFpbmVyXCIpO1xyXG5jb25zdCBkaXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TWVudVwiKTtcclxuY29uc3QgcG9wVXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RCdXR0b25cIik7XHJcbmNvbnN0IGNsb3NlUG9wVXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlUG9wVXBCdXR0b25cIik7XHJcbmNvbnN0IHBvcFVwTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wVXBOYW1lXCIpO1xyXG4vLyBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbi8vIHRvZG9JbnB1dERhdGUudmFsdWVBc0RhdGUgPSB0b2RheTtcclxuLy9sb2FkIHBhZ2VcclxuLy8gY29uc29sZS5sb2cocHJvamVjdHMucHJvamVjdEFycik7XHJcbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG4gIGxvYWRQcm9qZWN0cygpO1xyXG4gIGZvcm1Qb3BVcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gIC8vYWRkIG5ldyBwcm9qZWN0IGJ1dHRvblxyXG4gIGNvbnN0IGFkZE5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFkZE5ld1Byb2plY3REaXYuaWQgPSBcImFkZE5ld1Byb2plY3RcIjtcclxuICBhZGROZXdQcm9qZWN0RGl2LmlubmVySFRNTCA9XHJcbiAgICBcIk5ldyBQcm9qZWN0IFwiICsgJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT4nO1xyXG4gIGRpdk1lbnUuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdERpdik7XHJcbiAgY29uc3QgcHJvamVjdENvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdHNcIik7XHJcbiAgLy9uZXcgUHJvamVjdCBwb3BVcCBjbGljayBldmVudFxyXG4gIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZE5ld1Byb2plY3RcIik7XHJcbiAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIHBvcFVwTmFtZS50ZXh0Q29udGVudCA9IFwibmV3IFByb2plY3RcIjtcclxuICAgIHBvcFVwQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcclxuICAgIHBvcFVwQnRuLmNsYXNzTmFtZSA9IFwiYWRkUHJvamVjdFwiO1xyXG4gICAgc2hvd1BvcFVwKCk7XHJcbiAgfSk7XHJcbiAgLy9sb2FkIHRhc2tzIGZvciBwcm9qZWN0XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Q29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgcHJvamVjdENvbGxlY3Rpb25baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbG9hZFRhc2tzKGkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIGxvYWQgSW5kZXggUHJvamVjdFxyXG4gIC8vIGNvbnN0IEhvbWVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIwXCIpO1xyXG4gIC8vIHByb2plY3ROYW1lLmRhdGEgPSBIb21lUHJvamVjdC50ZXh0Q29udGVudDtcclxuICAvLyBjb25zdCBwcm9qZWN0SWQgPSBIb21lUHJvamVjdC5pZDtcclxuICBsb2FkVGFza3MoMCk7XHJcbiAgLy8gY2xvc2VQb3BVcCgpO1xyXG59XHJcbi8vbG9hZCBwcm9qZWN0c1xyXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5wcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvL2NyZWF0aW5nIHByb2plY3RzIGxpc3RcclxuICAgIGNvbnN0IHByb2plY3RQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwcm9qZWN0UC50ZXh0Q29udGVudCA9IHByb2plY3RzLnByb2plY3RBcnJbaV0udGl0bGU7XHJcbiAgICBwcm9qZWN0UC5pZCA9IGk7XHJcbiAgICBwcm9qZWN0UC5jbGFzc05hbWUgPSBcInByb2plY3RzXCI7XHJcbiAgICAvLyBlZGl0IHByb2plY3QgYnV0dG9uXHJcbiAgICBjb25zdCBwcm9qZWN0U3BhbkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByb2plY3RTcGFuRWRpdC5jbGFzc05hbWUgPSBcImVkaXRJY29uXCI7XHJcbiAgICBjb25zdCBwcm9qZWN0SUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIHByb2plY3RTcGFuRWRpdC5hcHBlbmRDaGlsZChwcm9qZWN0SUVkaXQpO1xyXG4gICAgcHJvamVjdElFZGl0LmNsYXNzTmFtZSA9IFwiZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZVwiO1xyXG5cclxuICAgIC8vZGVsZXRlIHByb2plY3QgYnV0dG9uXHJcbiAgICBjb25zdCBwcm9qZWN0U3BhbkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcHJvamVjdFNwYW5EZWxldGUuY2xhc3NOYW1lID0gXCJkZWxldGVJY29uXCI7XHJcbiAgICBjb25zdCBwcm9qZWN0SURlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgcHJvamVjdFNwYW5EZWxldGUuYXBwZW5kQ2hpbGQocHJvamVjdElEZWxldGUpO1xyXG4gICAgcHJvamVjdElEZWxldGUuY2xhc3NOYW1lID0gXCJmYS1zb2xpZCBmYS10cmFzaFwiO1xyXG5cclxuICAgIHByb2plY3RQLmFwcGVuZChwcm9qZWN0U3BhbkVkaXQsIHByb2plY3RTcGFuRGVsZXRlKTtcclxuICAgIC8vIHByb2plY3RQLmFwcGVuZENoaWxkKHByb2plY3RTcGFuRWRpdCk7XHJcblxyXG4gICAgZGl2TWVudS5hcHBlbmRDaGlsZChwcm9qZWN0UCk7XHJcbiAgICBwcm9qZWN0U3BhbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgcHJvamVjdElucHV0LnZhbHVlID0gcHJvamVjdHMucHJvamVjdEFycltpXS50aXRsZTtcclxuICAgICAgcHJvamVjdElucHV0LmlkID0gaTtcclxuICAgICAgcG9wVXBOYW1lLnRleHRDb250ZW50ID0gXCJlZGl0IFByb2plY3RcIjtcclxuICAgICAgcG9wVXBCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcclxuICAgICAgcG9wVXBCdG4uY2xhc3NOYW1lID0gXCJlZGl0UHJvamVjdFwiO1xyXG4gICAgICBzaG93UG9wVXAoaSk7XHJcbiAgICB9KTtcclxuICAgIHByb2plY3RTcGFuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRlbGV0ZVByb2plY3QoaSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzLnByb2plY3RBcnJbaV0pO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RNZW51XCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIGxvYWRQYWdlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxubG9hZFBhZ2UoKTtcclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGxvYWRQcm9qZWN0cyk7XHJcblxyXG4vLyBjb25zdCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpO1xyXG4vLyBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcclxuLy8gICBhZGRQcm9qZWN0QnRuLmlkID0gXCJlZGl0UHJvamVjdEJ1dHRvblwiO1xyXG4vLyAgIGVkaXRQcm9qZWN0KGkpO1xyXG4vLyB9KTtcclxuXHJcbmZ1bmN0aW9uIGNsb3NlUG9wVXAoKSB7XHJcbiAgLy8gcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcclxuICBmb3JtUG9wVXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJyXCIpO1xyXG4gIHBvcFVwQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcclxuICBwb3BVcEJ0bi5pZCA9IFwiYWRkUHJvamVjdEJ1dHRvblwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE1lbnVcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAvLyBhZGRQcm9qZWN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuXHJcbiAgbG9hZFBhZ2UoKTtcclxufVxyXG5mdW5jdGlvbiBzaG93UG9wVXAoKSB7XHJcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYmx1cnJcIik7XHJcbiAgZm9ybVBvcFVwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICBpZiAocG9wVXBCdG4uY2xhc3NOYW1lID09PSBcImFkZFByb2plY3RcIikge1xyXG4gICAgcG9wVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdCgpO1xyXG4gICAgICB9LFxyXG4gICAgICB7IG9uY2U6IHRydWUgfVxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKHBvcFVwQnRuLmNsYXNzTmFtZSA9PT0gXCJlZGl0UHJvamVjdFwiKSB7XHJcbiAgICBwb3BVcEJ0bi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygpO1xyXG4gICAgICAgIGVkaXRQcm9qZWN0KHByb2plY3RJbnB1dC5pZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5jbG9zZVBvcFVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwKTtcclxuXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KGluZGV4KSB7XHJcbiAgLy8gY29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRQcm9qZWN0QnV0dG9uXCIpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RzLnByb2plY3RBcnIpO1xyXG5cclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RJbnB1dC52YWx1ZSk7XHJcblxyXG4gIC8vIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0SW5wdXRcIik7XHJcbiAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdE5hbWUudmFsdWUpO1xyXG4gIHByb2plY3RzLmVkaXRQcm9qZWN0KGluZGV4LCBwcm9qZWN0SW5wdXQudmFsdWUpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE1lbnVcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICBjbG9zZVBvcFVwKCk7XHJcbn1cclxuXHJcbi8vIHBvcFVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbi8vICAgYWRkUHJvamVjdCgpO1xyXG4vLyB9KTtcclxuLy9hZGQgbmV3IHByb2plY3Qgc2hvd2luZyBmb3JtXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAocHJvamVjdElucHV0LnZhbHVlLnRyaW0gPT09IFwiXCIpIHtcclxuICAgIGFsZXJ0KFwibm90IFZhbGlkIG5hbWVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE1lbnVcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJyXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdElucHV0LnZhbHVlKTtcclxuICB9XHJcbiAgbG9hZFBhZ2UoKTtcclxuICAvL2FkZCBldmVudGxpc3RlbmVyIGZvciBhZGRpbmcgcHJvamVjdFxyXG4gIC8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3RCdG4pO1xyXG4gIC8vIGNvbnN0IGNsb3NlUG9wVXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlUG9wVXBcIik7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpbmRleCkge1xyXG4gIHByb2plY3RzLmRlbGV0ZVByb2plY3QoaW5kZXgpO1xyXG59XHJcblxyXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0cy5wcm9qZWN0QXJyKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKHByb2plY3RJbnB1dC52YWx1ZSk7XHJcbi8vaGlkZSBmb3JtXHJcblxyXG4vL2xvYWQgdGFza3NcclxuZnVuY3Rpb24gbG9hZFRhc2tzKGluZGV4KSB7XHJcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGluZGV4KTtcclxuICAvLyBpZiAoYWN0aXZlUHJvamVjdCA9PSBudWxsKSB7XHJcbiAgLy8gICBhY3RpdmVQcm9qZWN0ID0gMDtcclxuICAvLyAgIGNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3QpO1xyXG4gIC8vIH1cclxuICBjb25zdCBhY3RpdmVQcm9qZWN0TmFtZSA9IGFjdGl2ZVByb2plY3QudGV4dENvbnRlbnQ7XHJcblxyXG4gIHByb2plY3ROYW1lLmRhdGEgPSBhY3RpdmVQcm9qZWN0TmFtZTtcclxuICBwcm9qZWN0TmFtZS5pZCA9IGFjdGl2ZVByb2plY3QuaWQ7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvTGlzdFwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAvL2xvYWRpbmcgdGFza3MgZnJvbSBwcm9qZWN0IGFycmF5XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5wcm9qZWN0QXJyW2luZGV4XS50YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBpc0NoZWNrZWQgPSBwcm9qZWN0cy5wcm9qZWN0QXJyW2luZGV4XS50YXNrc1tpXS5jb21wbGV0ZWQ7XHJcbiAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgIHRvZG9JdGVtLmNsYXNzTmFtZSA9IFwiY2hlY2tlZFwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9kb0l0ZW10VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxyXG4gICAgICBwcm9qZWN0cy5wcm9qZWN0QXJyW2luZGV4XS50YXNrc1tpXS50aXRsZVxyXG4gICAgKTtcclxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9JdGVtdFRleHQpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvTGlzdFwiKTtcclxuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcclxuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdG9kb0Rpdi5jbGFzc05hbWUgPSBcIm1hcmtEaXZcIjtcclxuXHJcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY2hlY2suaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zcXVhcmUtY2hlY2tcIj48L2k+JztcclxuICAgIGNoZWNrLmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcclxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoY2hlY2spO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjbG9zZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXJlY3RhbmdsZS14bWFya1wiPjwvaT4nO1xyXG4gICAgY2xvc2UuY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjbG9zZSk7XHJcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcclxuXHJcbiAgICAvL2NvbXBsZXRpbmcgdGFza1xyXG4gICAgY29uc3QgY2hlY2tMaXN0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hlY2tcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrTGlzdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNoZWNrTGlzdEl0ZW1zW2ldLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29tcGxldGVMaXN0SXRlbShpLCBhY3RpdmVQcm9qZWN0LmlkKTtcclxuICAgICAgICBjb25zdCBjaGVja2VkSXRlbSA9IHRvZG9MaXN0LmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgY2hlY2tlZEl0ZW0uY2xhc3NOYW1lID0gXCJjaGVja2VkXCI7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBkZWxldGluZyB0YXNrXHJcbiAgICBjb25zdCBjbG9zZUxpc3RJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xvc2VMaXN0SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2xvc2VMaXN0SXRlbXNbaV0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVMaXN0SXRlbShpLCBhY3RpdmVQcm9qZWN0LmlkKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZExpc3RJdGVtKTtcclxuXHJcbi8vYWRkIHRhc2sgdG8gcHJvamVjdFxyXG5mdW5jdGlvbiBhZGRMaXN0SXRlbSgpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRvZG9JbnB1dFRleHQgPSB0b2RvSW5wdXRUYXNrLnZhbHVlO1xyXG4gIGNvbnN0IHRvZG9JbnB1dERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZTtcclxuICBjb25zdCB0b2RvUHJvamVjdCA9IHByb2plY3ROYW1lLmlkO1xyXG5cclxuICB0b0RvLmFkZFRhc2sodG9kb0lucHV0VGV4dCwgdG9kb1Byb2plY3QsIHRvZG9JbnB1dERhdGUudmFsdWUpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0lucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgbG9hZFRhc2tzKHRvZG9Qcm9qZWN0KTtcclxufVxyXG5cclxuLy9kZWxldGUgdGFzayBmcm9tIHByb2plY3RcclxuZnVuY3Rpb24gZGVsZXRlTGlzdEl0ZW0odGFza0luZGV4LCBwcm9qZWN0SWQpIHtcclxuICB0b0RvLmRlbGV0ZVRhc2socHJvamVjdElkLCB0YXNrSW5kZXgpO1xyXG4gIGxvYWRUYXNrcyhwcm9qZWN0SWQpO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXBsZXRlTGlzdEl0ZW0odGFza0luZGV4LCBwcm9qZWN0SWQpIHtcclxuICB0b0RvLmNvbXBsZXRlVGFzayhwcm9qZWN0SWQsIHRhc2tJbmRleCk7XHJcbn1cclxuXHJcbi8vaGlkZSBzaWRlIG1lbnVcclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RNZW51XCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==