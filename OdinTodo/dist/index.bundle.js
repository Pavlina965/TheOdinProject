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
/* .popUpHeader {
  /* padding: 5px; */
/* font-weight: bold; */
/* }

/* #popUp {
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
} */
.popUpForm, .todoForm {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #a6a9c0;
  border-radius: 5px;
  background-color: #dbdde6;

  /* /* display: none; */
  position: fixed;
  left: 50%;
  top: 20%;
  z-index: 9;
  transform: translate(-50%, 5%);
  /*
  background-color: #707599;
  height: 200px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px #707599;
  flex-direction: column;
  align-items: center;
  padding-top: 15px; */
}
 label {
  display: block;
  margin-bottom: 10px;
  color: #22223b;
}
input[type="text"], input[type="date"] {
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
  border: 1px solid #a6a9c0;
  border-radius: 3px;
  background-color: #dbdde6;
  color: #22223b;
  /* height: 100%; */
}
/* #popUpInput [type="text"] {
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
  border: 1px solid #7d82a2;
  border-radius: 3px;
  background-color: #dbdde6;
  color: #4a4e69; 
   background-color: #707599;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #4a4e69; 
} */

input:focus {
  outline: none;
  border: 1px solid #7d82a2;
  caret-color: #7d82a2;
  transition-duration: 1s;
}

input[type="submit"] {
  background-color: #4a4e69;
  color: #dbdde6;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 5px;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: end;
  width: 100%;
  padding: 10px;
  padding-bottom: 0;
  margin-bottom: 0;
  margin: 6px;
}
#closePopUpButton:hover {
  background-color: #a6a9c0;
}
#addProjectButton:hover {
  background-color: #fe664fc3;
}
#addProjectButton {
  background-color: #fe654f;
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
.editIcon:hover,
.deleteIcon:hover {
  color: #dbdde6;
}
.editIcon,
.deleteIcon {
  margin: 2px;
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
.blurr {
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
.todoList {
  padding: 5px;
}
#todoList {
  margin: 0;
  padding: 0;
}
#todoList li {
  padding: 5px;
  border-bottom: #4a4e69 1px solid;
  display: flex;
  justify-content: space-between;
}
.markDiv {
  cursor: pointer;
}
#addTask {
  padding-top: 5px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,YAAY;EACZ,SAAS;AACX;AACA;oBACoB;AACpB,uBAAuB;AACvB;;;;;;;GAOG;AACH;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;;EAEzB,sBAAsB;EACtB,eAAe;EACf,SAAS;EACT,QAAQ;EACR,UAAU;EACV,8BAA8B;EAC9B;;;;;;;;sBAQoB;AACtB;CACC;EACC,cAAc;EACd,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;AACpB;AACA;;;;;;;;;;;;GAYG;;AAEH;EACE,aAAa;EACb,yBAAyB;EACzB,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,aAAa;AACf;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,UAAU;EACV,yBAAyB;EACzB,UAAU;EACV,eAAe;EACf;;6BAE2B;AAC7B;AACA;;EAEE,cAAc;AAChB;AACA;;EAEE,WAAW;AACb;AACA;;EAEE,WAAW;EACX,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,WAAW;AACb;AACA;;;;;GAKG;AACH;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,YAAY;AACd;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,YAAY;EACZ,gCAAgC;EAChC,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB","sourcesContent":["html,\r\nbody,\r\nmain {\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n/* .popUpHeader {\r\n  /* padding: 5px; */\r\n/* font-weight: bold; */\r\n/* }\r\n\r\n/* #popUp {\r\n  height: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n} */\r\n.popUpForm, .todoForm {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  border: 1px solid #a6a9c0;\r\n  border-radius: 5px;\r\n  background-color: #dbdde6;\r\n\r\n  /* /* display: none; */\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 20%;\r\n  z-index: 9;\r\n  transform: translate(-50%, 5%);\r\n  /*\r\n  background-color: #707599;\r\n  height: 200px;\r\n  width: 400px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 0px 10px 1px #707599;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 15px; */\r\n}\r\n label {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  color: #22223b;\r\n}\r\ninput[type=\"text\"], input[type=\"date\"] {\r\n  width: 100%;\r\n  padding: 5px;\r\n  margin-bottom: 15px;\r\n  border: 1px solid #a6a9c0;\r\n  border-radius: 3px;\r\n  background-color: #dbdde6;\r\n  color: #22223b;\r\n  /* height: 100%; */\r\n}\r\n/* #popUpInput [type=\"text\"] {\r\n  width: 100%;\r\n  padding: 5px;\r\n  margin-bottom: 15px;\r\n  border: 1px solid #7d82a2;\r\n  border-radius: 3px;\r\n  background-color: #dbdde6;\r\n  color: #4a4e69; \r\n   background-color: #707599;\r\n  padding: 8px 16px;\r\n  border-radius: 4px;\r\n  border: 1px solid #4a4e69; \r\n} */\r\n\r\ninput:focus {\r\n  outline: none;\r\n  border: 1px solid #7d82a2;\r\n  caret-color: #7d82a2;\r\n  transition-duration: 1s;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  background-color: #4a4e69;\r\n  color: #dbdde6;\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n  margin: 0 5px;\r\n}\r\n.buttons {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: end;\r\n  width: 100%;\r\n  padding: 10px;\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n  margin: 6px;\r\n}\r\n#closePopUpButton:hover {\r\n  background-color: #a6a9c0;\r\n}\r\n#addProjectButton:hover {\r\n  background-color: #fe664fc3;\r\n}\r\n#addProjectButton {\r\n  background-color: #fe654f;\r\n}\r\n\r\n.mainContainer {\r\n  display: flex;\r\n  height: 100%;\r\n}\r\nnav {\r\n  background-color: #4a4e69;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n.menu {\r\n  width: 35%;\r\n  background-color: #707599;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  /* display: flex;\r\n    align-items: center;\r\n    flex-direction: column; */\r\n}\r\n.editIcon:hover,\r\n.deleteIcon:hover {\r\n  color: #dbdde6;\r\n}\r\n.editIcon,\r\n.deleteIcon {\r\n  margin: 2px;\r\n}\r\n.menu p,\r\n.menu div {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n.menu p:hover {\r\n  background-color: #7d82a2;\r\n  width: 100%;\r\n}\r\n/* .menu div{\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin: 0;\r\n    text-align: center;\r\n} */\r\n.menu div:hover {\r\n  transform: scale(1.1);\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n.blurr {\r\n  opacity: 0.3;\r\n}\r\n\r\n.todo {\r\n  padding: 10px;\r\n  background-color: #dbdde6;\r\n  width: 100%;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n.todoList {\r\n  padding: 5px;\r\n}\r\n#todoList {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n#todoList li {\r\n  padding: 5px;\r\n  border-bottom: #4a4e69 1px solid;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.markDiv {\r\n  cursor: pointer;\r\n}\r\n#addTask {\r\n  padding-top: 5px;\r\n}\r\n"],"sourceRoot":""}]);
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
  
  if (localStorage.getItem("projects")===null){
  projectArr = [

    {
      title: "Inbox",
      id: 0,
      tasks: [
        {
          title: "task1",
          completed: false,
          projectID: 0,
          dueDate: new Date('2024-3-6'),
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
          projectID: 1,
        },
        {
          title: "meat",
          completed: false,
          projectID: 1,
        },
      ],
    },
  ];
}
else {
  const storredProjects = JSON.parse(localStorage.getItem("projects"));
  projectArr = storredProjects;
}
  
  class Project {
    constructor(title) {
      this.title = title;
      // console.log(currId);
      this.id = currId;
      currId = projId +1;
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


// let taskID = 0;
const toDo = (() => {
  class Task {
    constructor(title, completed, projectID, dueDate) {
    //   this.id = taskID;
    //   taskID ++;
      this.title = title;
      this.completed = false;
      this.projectID = projectID;
      this.dueDate = dueDate;
    }
  }

  function addTask(title, projectID, dueDate) {
    // const project = projects.projectArr[projectID].title;
    // console.log(project);
    const task = new Task(title, false, projectID, dueDate);
    

    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks.push(task);
  }
  function deleteTask(projectID, taskID) {
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks.splice(taskID, 1);
  }
  function completeTask(projectID, taskID) {
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks[taskID].completed = true;
  }
  function getTodayTask(projectID, taskID, title) {
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks[taskID].dueDate;
  }
  return {
    getTodayTask,
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
const todoList = document.querySelector("#todoList");
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
const closeToDoBtn = document.querySelector("#closeToDoButton");
const popUpName = document.querySelector("#popUpName");
const addTaskBtn = document.querySelector("#addTask");
const todoForm = document.querySelector(".todoForm");
const todayFullDate = new Date();
const todayDate = new Date(
  todayFullDate.getFullYear(),
  todayFullDate.getMonth(),
  todayFullDate.getDate()
);
// (new Date()).toDateString();
// console.log(today);
// todoInputDate.valueAsDate = todayDate;

//load page
// console.log(projects.projectArr);
addTaskBtn.onclick = () => {
  todoForm.style.display = "block";
  mainContainer.classList.add("blurr");
  formPopUp.style.display = "none";
};
function loadPage() {
  const createTodayP = document.createElement("p");
  createTodayP.textContent = "Today";
  createTodayP.id = "today";
  divMenu.appendChild(createTodayP);
  const today = document.querySelector("#today");

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
    popUpName.textContent = "New project";
    popUpBtn.Value = "Add Project";
    popUpBtn.className = "addProject";
    showPopUp();
  });
  //load tasks for project
  for (let i = 0; i < projectCollection.length; i++) {
    projectCollection[i].addEventListener("click", () => {
      loadTasks(i);
    });
  }

  loadTasks(0);

  today.onclick = () => {
    showTodayTaks();
    addTaskBtn.style.display = "none";
  };
}
function showTodayTaks() {
  projectName.data = "Today";
  document.querySelector(".todoForm").style.display = "none";
  todoList.innerHTML = "";
  // console.log()
  for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr.length; i++) {
    localStorage.setItem("projects", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr));
    // const currentProject = projects.projectArr[i];
    for (let j = 0; j < _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].tasks.length; j++) {
      if (
        Date.parse(_projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].tasks[j].dueDate) ===
        Date.parse(todayDate)
      ) {
        const todoItem = document.createElement("li");
        todoItem.classList.add(_projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].title + i);
        // todoItem.classList.add(i);
        todoItem.classList.add("TaskId" + j);
        const check = document.createElement("span");
        const isChecked = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].tasks[j].completed;
        if (isChecked) {
          todoItem.classList.add("checked");
          check.innerHTML = '<i class="fa-regular fa-square-check"></i>';
        } else {
          check.innerHTML = '<i class="fa-regular fa-square"></i>';
          todoItem.classList.add("check");
        }
        todoItem.classList.add("listItem");
        const todoItemtText = document.createTextNode(
          _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].tasks[j].title
        );
        todoItem.appendChild(check);
        todoItem.appendChild(todoItemtText);

        todoList.appendChild(todoItem);
        const todoDiv = document.createElement("div");
        todoDiv.className = "markDiv";

        const edit = document.createElement("span");
        edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
        edit.className = "edit";
        todoDiv.appendChild(edit);
        const close = document.createElement("span");
        close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        close.className = "close";
        todoDiv.appendChild(close);
        todoItem.appendChild(todoDiv);
        
        const toDoListItems = document.getElementsByClassName("listItem");
        for (let k = 0; k < toDoListItems.length; k++) {
          const toDo = todoList.childNodes[k];
          const todoClass = toDo.classList[1];
          const toDoId = getNumberFromClass(todoClass);
          const projectId = getNumberFromClass(toDo.classList[0]);
          // deleting task
          
          const closeListItems = document.getElementsByClassName("close");
          // for (let l = 0; l < closeListItems.length; l++) {
            closeListItems[k].onclick = () => {
              // console.log(toDoId, projectId);
              deleteListItem(toDoId, projectId);
              showTodayTaks();
            };
          //completing task
          toDoListItems[k].onclick = () => {
            if (toDo.classList.contains("checked")) {
              // console.log(currentProject.id)
              toDo.childNodes[0].innerHTML ='<i class="fa-regular fa-square"></i>';
              _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectId].tasks[toDoId].completed = false;
              // console.log(projects.projectArr[projectId].id);
              
              toDo.classList.add("check");
              toDo.classList.remove("checked");
            } else {
              
              completeListItem(toDoId, projectId);
              toDo.childNodes[0].innerHTML ='<i class="fa-regular fa-square-check"></i>';
              // check.innerHTML = '<i class="fa-regular fa-square"></i>';
              // console.log(projects.projectArr[projectId].id);
              
              toDo.classList.add("checked");
              toDo.classList.remove("check");
            }
            // showTodayTaks();
          };
          
        }
      }
    }
  }
}
function getNumberFromClass(className) {
  const numberRegex = /\d+/;
  const match = className.match(numberRegex);
  if (match) {
    return parseInt(match[0], 10);
  }
  return null;
}
//load projects
function loadProjects() {
  localStorage.setItem("projects", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr));
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
      popUpName.textContent = "Edit project";
      popUpBtn.value = "Edit Project";
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
  // console.log(JSON.parse(localStorage.getItem("projects")));
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
  formPopUp.style.display = "block";
  todoForm.style.display = "none";
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
closePopUpBtn.addEventListener("click", () => {
  event.preventDefault();
  closePopUp();
});
function closeTodoInput() {
  todoForm.style.display = "none";
  mainContainer.classList.remove("blurr");
  document.querySelector(".todoList").style.display = "block";
}
closeToDoBtn.onclick = () => {
  closeTodoInput();
};

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
  addTaskBtn.style.display = "block";

  localStorage.setItem("projects", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr));
  const activeProject = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[index];

  const activeProjectName = activeProject.title;
  projectName.data = activeProjectName;
  projectName.id = activeProject.id;
  todoList.innerHTML = "";

  //loading tasks from project array
  for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[index].tasks.length; i++) {
    const todoItem = document.createElement("li");
    todoItem.id = i;

    const isChecked = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[index].tasks[i].completed;
    const check = document.createElement("span");
    if (isChecked) {
      todoItem.className = "checked";
      check.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    } else {
      check.innerHTML = '<i class="fa-regular fa-square"></i>';
      todoItem.className = "check";
    }
    todoItem.classList.add("listItem");
    const todoItemtText = document.createTextNode(
      _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[index].tasks[i].title
    );
    todoItem.appendChild(check);
    todoItem.appendChild(todoItemtText);

    todoList.appendChild(todoItem);
    const todoDiv = document.createElement("div");
    todoDiv.className = "markDiv";

    const edit = document.createElement("span");
    edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
    edit.className = "edit";
    todoDiv.appendChild(edit);

    const close = document.createElement("span");
    close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    close.className = "close";
    todoDiv.appendChild(close);
    todoItem.appendChild(todoDiv);

    //completing task
    const checkListItems = document.getElementsByClassName("listItem");
    for (let i = 0; i < checkListItems.length; i++) {
      checkListItems[i].onclick = () => {
        const checkedItem = todoList.childNodes[i];
        if (checkedItem.classList.contains("checked")) {
          _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[activeProject.id].tasks[i].completed = false;
          checkedItem.className = "check";
          loadTasks(activeProject.id);
        } else {
          completeListItem(i, activeProject.id);
          // console.log(checkedItem);
          loadTasks(activeProject.id);
          checkedItem.className = "checked";
        }
      };
    }
    // deleting task
    const closeListItems = document.getElementsByClassName("close");
    for (let i = 0; i < closeListItems.length; i++) {
      closeListItems[i].onclick = () => {
        deleteListItem(i, activeProject.id);
        loadTasks(activeProject.id);
      };
    }
  }
}

addTodoButton.addEventListener("click", () => {
  addListItem();
  closeTodoInput();
  loadTasks(projectName.id);
});

//add task to project
function addListItem() {
  event.preventDefault();
  const todoInputText = todoInputTask.value;
  const todoInputDate = document.getElementById("dateInput").value;
  const todoDueFullDate = new Date(todoInputDate);
  const todoDueDate = new Date(
    todoDueFullDate.getFullYear(),
    todoDueFullDate.getMonth(),
    todoDueFullDate.getDate()
  );
  const todoProject = projectName.id;
  _todo__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(todoInputText, todoProject, todoDueDate);
  document.getElementById("todoInput").value = "";
  // console.log(todoInputDate);
  loadTasks(todoProject);
}

//delete task from project
function deleteListItem(taskIndex, projectId) {
  _todo__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(projectId, taskIndex);
  // loadTasks(projectId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLEtBQUssS0FBSyxPQUFPLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sZ0JBQWdCLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLFNBQVMsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0s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RSw2Q0FBSTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkNBQUk7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW50b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW50b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW50b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW50b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW50b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGludG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGludG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGludG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGludG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW50b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGludG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcclxuYm9keSxcclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4vKiAucG9wVXBIZWFkZXIge1xyXG4gIC8qIHBhZGRpbmc6IDVweDsgKi9cclxuLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbi8qIH1cclxuXHJcbi8qICNwb3BVcCB7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0gKi9cclxuLnBvcFVwRm9ybSwgLnRvZG9Gb3JtIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhOWMwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZGU2O1xyXG5cclxuICAvKiAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiAyMCU7XHJcbiAgei1pbmRleDogOTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1JSk7XHJcbiAgLypcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3NTk5O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjNzA3NTk5O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDsgKi9cclxufVxyXG4gbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6ICMyMjIyM2I7XHJcbn1cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJkYXRlXCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhOWMwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZGU2O1xyXG4gIGNvbG9yOiAjMjIyMjNiO1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxufVxyXG4vKiAjcG9wVXBJbnB1dCBbdHlwZT1cInRleHRcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZDgyYTI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRkZTY7XHJcbiAgY29sb3I6ICM0YTRlNjk7IFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3NTk5O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNGE0ZTY5OyBcclxufSAqL1xyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzdkODJhMjtcclxuICBjYXJldC1jb2xvcjogIzdkODJhMjtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGU2OTtcclxuICBjb2xvcjogI2RiZGRlNjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW46IDZweDtcclxufVxyXG4jY2xvc2VQb3BVcEJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTljMDtcclxufVxyXG4jYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjY0ZmMzO1xyXG59XHJcbiNhZGRQcm9qZWN0QnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU2NTRmO1xyXG59XHJcblxyXG4ubWFpbkNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxubmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0ZTY5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5tZW51IHtcclxuICB3aWR0aDogMzUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDc1OTk7XHJcbiAgcGFkZGluZzogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG59XHJcbi5lZGl0SWNvbjpob3ZlcixcclxuLmRlbGV0ZUljb246aG92ZXIge1xyXG4gIGNvbG9yOiAjZGJkZGU2O1xyXG59XHJcbi5lZGl0SWNvbixcclxuLmRlbGV0ZUljb24ge1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcbi5tZW51IHAsXHJcbi5tZW51IGRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tZW51IHA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDgyYTI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLyogLm1lbnUgZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59ICovXHJcbi5tZW51IGRpdjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmJsdXJyIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi50b2RvIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRkZTY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5jaGVja2VkIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4udG9kb0xpc3Qge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4jdG9kb0xpc3Qge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiN0b2RvTGlzdCBsaSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1ib3R0b206ICM0YTRlNjkgMXB4IHNvbGlkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5tYXJrRGl2IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2FkZFRhc2sge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7b0JBQ29CO0FBQ3BCLHVCQUF1QjtBQUN2Qjs7Ozs7OztHQU9HO0FBQ0g7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5Qjs7RUFFekIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDViw4QkFBOEI7RUFDOUI7Ozs7Ozs7O3NCQVFvQjtBQUN0QjtDQUNDO0VBQ0MsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7Ozs7Ozs7Ozs7OztHQVlHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixlQUFlO0VBQ2Y7OzZCQUUyQjtBQUM3QjtBQUNBOztFQUVFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFDQTs7Ozs7R0FLRztBQUNIO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXHJcXG5ib2R5LFxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4vKiAucG9wVXBIZWFkZXIge1xcclxcbiAgLyogcGFkZGluZzogNXB4OyAqL1xcclxcbi8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xcclxcbi8qIH1cXHJcXG5cXHJcXG4vKiAjcG9wVXAge1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufSAqL1xcclxcbi5wb3BVcEZvcm0sIC50b2RvRm9ybSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhOWMwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGRlNjtcXHJcXG5cXHJcXG4gIC8qIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIHotaW5kZXg6IDk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1JSk7XFxyXFxuICAvKlxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzU5OTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjNzA3NTk5O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMTVweDsgKi9cXHJcXG59XFxyXFxuIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGNvbG9yOiAjMjIyMjNiO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhOWMwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGRlNjtcXHJcXG4gIGNvbG9yOiAjMjIyMjNiO1xcclxcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcclxcbn1cXHJcXG4vKiAjcG9wVXBJbnB1dCBbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZDgyYTI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZGU2O1xcclxcbiAgY29sb3I6ICM0YTRlNjk7IFxcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICM3MDc1OTk7XFxyXFxuICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YTRlNjk7IFxcclxcbn0gKi9cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzdkODJhMjtcXHJcXG4gIGNhcmV0LWNvbG9yOiAjN2Q4MmEyO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRlNjk7XFxyXFxuICBjb2xvcjogI2RiZGRlNjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW46IDAgNXB4O1xcclxcbn1cXHJcXG4uYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBtYXJnaW46IDZweDtcXHJcXG59XFxyXFxuI2Nsb3NlUG9wVXBCdXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTljMDtcXHJcXG59XFxyXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjY0ZmMzO1xcclxcbn1cXHJcXG4jYWRkUHJvamVjdEJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU2NTRmO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5uYXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGU2OTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLm1lbnUge1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDc1OTk7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLyogZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXHJcXG59XFxyXFxuLmVkaXRJY29uOmhvdmVyLFxcclxcbi5kZWxldGVJY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZGJkZGU2O1xcclxcbn1cXHJcXG4uZWRpdEljb24sXFxyXFxuLmRlbGV0ZUljb24ge1xcclxcbiAgbWFyZ2luOiAycHg7XFxyXFxufVxcclxcbi5tZW51IHAsXFxyXFxuLm1lbnUgZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1lbnUgcDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q4MmEyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi8qIC5tZW51IGRpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn0gKi9cXHJcXG4ubWVudSBkaXY6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5ibHVyciB7XFxyXFxuICBvcGFjaXR5OiAwLjM7XFxyXFxufVxcclxcblxcclxcbi50b2RvIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZGU2O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbi5jaGVja2VkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG4udG9kb0xpc3Qge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4jdG9kb0xpc3Qge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuI3RvZG9MaXN0IGxpIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206ICM0YTRlNjkgMXB4IHNvbGlkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLm1hcmtEaXYge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jYWRkVGFzayB7XFxyXFxuICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xyXG4gIGxldCBwcm9qZWN0QXJyID0gW107XHJcbiAgbGV0IHByb2pJZCA9IHByb2plY3RBcnIubGVuZ3RoO1xyXG4gIGxldCBjdXJySWQgPTA7XHJcbiAgXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik9PT1udWxsKXtcclxuICBwcm9qZWN0QXJyID0gW1xyXG5cclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiSW5ib3hcIixcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwidGFzazFcIixcclxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBwcm9qZWN0SUQ6IDAsXHJcbiAgICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZSgnMjAyNC0zLTYnKSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiR3JvY2VyaWVzXCIsXHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICB0YXNrczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiBcImFwcGxlc1wiLFxyXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIHByb2plY3RJRDogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiBcIm1lYXRcIixcclxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBwcm9qZWN0SUQ6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5lbHNlIHtcclxuICBjb25zdCBzdG9ycmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG4gIHByb2plY3RBcnIgPSBzdG9ycmVkUHJvamVjdHM7XHJcbn1cclxuICBcclxuICBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgLy8gY29uc29sZS5sb2coY3VycklkKTtcclxuICAgICAgdGhpcy5pZCA9IGN1cnJJZDtcclxuICAgICAgY3VycklkID0gcHJvaklkICsxO1xyXG4gICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XHJcbiAgICBwcm9qZWN0QXJyLnB1c2gocHJvamVjdCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGluZGV4LHRpdGxlKXtcclxuICAgIHByb2plY3RBcnJbaW5kZXhdLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGluZGV4KXtcclxuICAgIHByb2plY3RBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9qZWN0QXJyLFxyXG4gICAgYWRkUHJvamVjdCxcclxuICAgIGVkaXRQcm9qZWN0LFxyXG4gICAgZGVsZXRlUHJvamVjdCxcclxuICB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcclxuIiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG4vLyBsZXQgdGFza0lEID0gMDtcclxuY29uc3QgdG9EbyA9ICgoKSA9PiB7XHJcbiAgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29tcGxldGVkLCBwcm9qZWN0SUQsIGR1ZURhdGUpIHtcclxuICAgIC8vICAgdGhpcy5pZCA9IHRhc2tJRDtcclxuICAgIC8vICAgdGFza0lEICsrO1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkVGFzayh0aXRsZSwgcHJvamVjdElELCBkdWVEYXRlKSB7XHJcbiAgICAvLyBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRpdGxlO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGZhbHNlLCBwcm9qZWN0SUQsIGR1ZURhdGUpO1xyXG4gICAgXHJcblxyXG4gICAgcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdElELCB0YXNrSUQpIHtcclxuICAgIHByb2plY3RzLnByb2plY3RBcnJbcHJvamVjdElEXS50YXNrcy5zcGxpY2UodGFza0lELCAxKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY29tcGxldGVUYXNrKHByb2plY3RJRCwgdGFza0lEKSB7XHJcbiAgICBwcm9qZWN0cy5wcm9qZWN0QXJyW3Byb2plY3RJRF0udGFza3NbdGFza0lEXS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRUb2RheVRhc2socHJvamVjdElELCB0YXNrSUQsIHRpdGxlKSB7XHJcbiAgICBwcm9qZWN0cy5wcm9qZWN0QXJyW3Byb2plY3RJRF0udGFza3NbdGFza0lEXS5kdWVEYXRlO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0VG9kYXlUYXNrLFxyXG4gICAgYWRkVGFzayxcclxuICAgIGRlbGV0ZVRhc2ssXHJcbiAgICBjb21wbGV0ZVRhc2ssXHJcbiAgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgdG9EbztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB0b0RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvZG9CdXR0b25cIik7XHJcbmNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvTGlzdFwiKTtcclxuY29uc3QgdG9kb0lucHV0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0lucHV0XCIpO1xyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG5jb25zdCB0b2RvSW5wdXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIik7XHJcbmNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKS5maXJzdENoaWxkO1xyXG5jb25zdCBmb3JtUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwRm9ybVwiKTtcclxuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0SW5wdXRcIik7XHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250YWluZXJcIik7XHJcbmNvbnN0IGRpdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RNZW51XCIpO1xyXG5jb25zdCBwb3BVcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdEJ1dHRvblwiKTtcclxuY29uc3QgY2xvc2VQb3BVcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VQb3BVcEJ1dHRvblwiKTtcclxuY29uc3QgY2xvc2VUb0RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZVRvRG9CdXR0b25cIik7XHJcbmNvbnN0IHBvcFVwTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wVXBOYW1lXCIpO1xyXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrXCIpO1xyXG5jb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Zvcm1cIik7XHJcbmNvbnN0IHRvZGF5RnVsbERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5jb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZShcclxuICB0b2RheUZ1bGxEYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgdG9kYXlGdWxsRGF0ZS5nZXRNb250aCgpLFxyXG4gIHRvZGF5RnVsbERhdGUuZ2V0RGF0ZSgpXHJcbik7XHJcbi8vIChuZXcgRGF0ZSgpKS50b0RhdGVTdHJpbmcoKTtcclxuLy8gY29uc29sZS5sb2codG9kYXkpO1xyXG4vLyB0b2RvSW5wdXREYXRlLnZhbHVlQXNEYXRlID0gdG9kYXlEYXRlO1xyXG5cclxuLy9sb2FkIHBhZ2VcclxuLy8gY29uc29sZS5sb2cocHJvamVjdHMucHJvamVjdEFycik7XHJcbmFkZFRhc2tCdG4ub25jbGljayA9ICgpID0+IHtcclxuICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJsdXJyXCIpO1xyXG4gIGZvcm1Qb3BVcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn07XHJcbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG4gIGNvbnN0IGNyZWF0ZVRvZGF5UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNyZWF0ZVRvZGF5UC50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcclxuICBjcmVhdGVUb2RheVAuaWQgPSBcInRvZGF5XCI7XHJcbiAgZGl2TWVudS5hcHBlbmRDaGlsZChjcmVhdGVUb2RheVApO1xyXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheVwiKTtcclxuXHJcbiAgbG9hZFByb2plY3RzKCk7XHJcbiAgZm9ybVBvcFVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAvL2FkZCBuZXcgcHJvamVjdCBidXR0b25cclxuICBjb25zdCBhZGROZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhZGROZXdQcm9qZWN0RGl2LmlkID0gXCJhZGROZXdQcm9qZWN0XCI7XHJcbiAgYWRkTmV3UHJvamVjdERpdi5pbm5lckhUTUwgPVxyXG4gICAgXCJOZXcgUHJvamVjdCBcIiArICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+JztcclxuICBkaXZNZW51LmFwcGVuZENoaWxkKGFkZE5ld1Byb2plY3REaXYpO1xyXG4gIGNvbnN0IHByb2plY3RDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RzXCIpO1xyXG4gIC8vbmV3IFByb2plY3QgcG9wVXAgY2xpY2sgZXZlbnRcclxuICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGROZXdQcm9qZWN0XCIpO1xyXG4gIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBwb3BVcE5hbWUudGV4dENvbnRlbnQgPSBcIk5ldyBwcm9qZWN0XCI7XHJcbiAgICBwb3BVcEJ0bi5WYWx1ZSA9IFwiQWRkIFByb2plY3RcIjtcclxuICAgIHBvcFVwQnRuLmNsYXNzTmFtZSA9IFwiYWRkUHJvamVjdFwiO1xyXG4gICAgc2hvd1BvcFVwKCk7XHJcbiAgfSk7XHJcbiAgLy9sb2FkIHRhc2tzIGZvciBwcm9qZWN0XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Q29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgcHJvamVjdENvbGxlY3Rpb25baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbG9hZFRhc2tzKGkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkVGFza3MoMCk7XHJcblxyXG4gIHRvZGF5Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzaG93VG9kYXlUYWtzKCk7XHJcbiAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9O1xyXG59XHJcbmZ1bmN0aW9uIHNob3dUb2RheVRha3MoKSB7XHJcbiAgcHJvamVjdE5hbWUuZGF0YSA9IFwiVG9kYXlcIjtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Gb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB0b2RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIC8vIGNvbnNvbGUubG9nKClcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLnByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMucHJvamVjdEFycikpO1xyXG4gICAgLy8gY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5wcm9qZWN0QXJyW2ldO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0cy5wcm9qZWN0QXJyW2ldLnRhc2tzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBEYXRlLnBhcnNlKHByb2plY3RzLnByb2plY3RBcnJbaV0udGFza3Nbal0uZHVlRGF0ZSkgPT09XHJcbiAgICAgICAgRGF0ZS5wYXJzZSh0b2RheURhdGUpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQocHJvamVjdHMucHJvamVjdEFycltpXS50aXRsZSArIGkpO1xyXG4gICAgICAgIC8vIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoaSk7XHJcbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcIlRhc2tJZFwiICsgaik7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSBwcm9qZWN0cy5wcm9qZWN0QXJyW2ldLnRhc2tzW2pdLmNvbXBsZXRlZDtcclxuICAgICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcclxuICAgICAgICAgIGNoZWNrLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtc3F1YXJlLWNoZWNrXCI+PC9pPic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNoZWNrLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtc3F1YXJlXCI+PC9pPic7XHJcbiAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwiY2hlY2tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJsaXN0SXRlbVwiKTtcclxuICAgICAgICBjb25zdCB0b2RvSXRlbXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXHJcbiAgICAgICAgICBwcm9qZWN0cy5wcm9qZWN0QXJyW2ldLnRhc2tzW2pdLnRpdGxlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChjaGVjayk7XHJcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0l0ZW10VGV4dCk7XHJcblxyXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcclxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0b2RvRGl2LmNsYXNzTmFtZSA9IFwibWFya0RpdlwiO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgZWRpdC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZW5cIj48L2k+JztcclxuICAgICAgICBlZGl0LmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZWRpdCk7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT4nO1xyXG4gICAgICAgIGNsb3NlLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcclxuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b0RvTGlzdEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpc3RJdGVtXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdG9Eb0xpc3RJdGVtcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgY29uc3QgdG9EbyA9IHRvZG9MaXN0LmNoaWxkTm9kZXNba107XHJcbiAgICAgICAgICBjb25zdCB0b2RvQ2xhc3MgPSB0b0RvLmNsYXNzTGlzdFsxXTtcclxuICAgICAgICAgIGNvbnN0IHRvRG9JZCA9IGdldE51bWJlckZyb21DbGFzcyh0b2RvQ2xhc3MpO1xyXG4gICAgICAgICAgY29uc3QgcHJvamVjdElkID0gZ2V0TnVtYmVyRnJvbUNsYXNzKHRvRG8uY2xhc3NMaXN0WzBdKTtcclxuICAgICAgICAgIC8vIGRlbGV0aW5nIHRhc2tcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgY2xvc2VMaXN0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIik7XHJcbiAgICAgICAgICAvLyBmb3IgKGxldCBsID0gMDsgbCA8IGNsb3NlTGlzdEl0ZW1zLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTGlzdEl0ZW1zW2tdLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9Eb0lkLCBwcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICAgIGRlbGV0ZUxpc3RJdGVtKHRvRG9JZCwgcHJvamVjdElkKTtcclxuICAgICAgICAgICAgICBzaG93VG9kYXlUYWtzKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAvL2NvbXBsZXRpbmcgdGFza1xyXG4gICAgICAgICAgdG9Eb0xpc3RJdGVtc1trXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodG9Eby5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja2VkXCIpKSB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QuaWQpXHJcbiAgICAgICAgICAgICAgdG9Eby5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9JzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zcXVhcmVcIj48L2k+JztcclxuICAgICAgICAgICAgICBwcm9qZWN0cy5wcm9qZWN0QXJyW3Byb2plY3RJZF0udGFza3NbdG9Eb0lkXS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cy5wcm9qZWN0QXJyW3Byb2plY3RJZF0uaWQpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRvRG8uY2xhc3NMaXN0LmFkZChcImNoZWNrXCIpO1xyXG4gICAgICAgICAgICAgIHRvRG8uY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgY29tcGxldGVMaXN0SXRlbSh0b0RvSWQsIHByb2plY3RJZCk7XHJcbiAgICAgICAgICAgICAgdG9Eby5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9JzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zcXVhcmUtY2hlY2tcIj48L2k+JztcclxuICAgICAgICAgICAgICAvLyBjaGVjay5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXNxdWFyZVwiPjwvaT4nO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzLnByb2plY3RBcnJbcHJvamVjdElkXS5pZCk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdG9Eby5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgICB0b0RvLmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzaG93VG9kYXlUYWtzKCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldE51bWJlckZyb21DbGFzcyhjbGFzc05hbWUpIHtcclxuICBjb25zdCBudW1iZXJSZWdleCA9IC9cXGQrLztcclxuICBjb25zdCBtYXRjaCA9IGNsYXNzTmFtZS5tYXRjaChudW1iZXJSZWdleCk7XHJcbiAgaWYgKG1hdGNoKSB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMF0sIDEwKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuLy9sb2FkIHByb2plY3RzXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzLnByb2plY3RBcnIpKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLnByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vY3JlYXRpbmcgcHJvamVjdHMgbGlzdFxyXG4gICAgY29uc3QgcHJvamVjdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHByb2plY3RQLnRleHRDb250ZW50ID0gcHJvamVjdHMucHJvamVjdEFycltpXS50aXRsZTtcclxuICAgIHByb2plY3RQLmlkID0gaTtcclxuICAgIHByb2plY3RQLmNsYXNzTmFtZSA9IFwicHJvamVjdHNcIjtcclxuICAgIC8vIGVkaXQgcHJvamVjdCBidXR0b25cclxuICAgIGNvbnN0IHByb2plY3RTcGFuRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcHJvamVjdFNwYW5FZGl0LmNsYXNzTmFtZSA9IFwiZWRpdEljb25cIjtcclxuICAgIGNvbnN0IHByb2plY3RJRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgcHJvamVjdFNwYW5FZGl0LmFwcGVuZENoaWxkKHByb2plY3RJRWRpdCk7XHJcbiAgICBwcm9qZWN0SUVkaXQuY2xhc3NOYW1lID0gXCJmYS1zb2xpZCBmYS1wZW4tdG8tc3F1YXJlXCI7XHJcblxyXG4gICAgLy9kZWxldGUgcHJvamVjdCBidXR0b25cclxuICAgIGNvbnN0IHByb2plY3RTcGFuRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcm9qZWN0U3BhbkRlbGV0ZS5jbGFzc05hbWUgPSBcImRlbGV0ZUljb25cIjtcclxuICAgIGNvbnN0IHByb2plY3RJRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBwcm9qZWN0U3BhbkRlbGV0ZS5hcHBlbmRDaGlsZChwcm9qZWN0SURlbGV0ZSk7XHJcbiAgICBwcm9qZWN0SURlbGV0ZS5jbGFzc05hbWUgPSBcImZhLXNvbGlkIGZhLXRyYXNoXCI7XHJcblxyXG4gICAgcHJvamVjdFAuYXBwZW5kKHByb2plY3RTcGFuRWRpdCwgcHJvamVjdFNwYW5EZWxldGUpO1xyXG4gICAgLy8gcHJvamVjdFAuYXBwZW5kQ2hpbGQocHJvamVjdFNwYW5FZGl0KTtcclxuXHJcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKHByb2plY3RQKTtcclxuICAgIHByb2plY3RTcGFuRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBwcm9qZWN0cy5wcm9qZWN0QXJyW2ldLnRpdGxlO1xyXG4gICAgICBwcm9qZWN0SW5wdXQuaWQgPSBpO1xyXG4gICAgICBwb3BVcE5hbWUudGV4dENvbnRlbnQgPSBcIkVkaXQgcHJvamVjdFwiO1xyXG4gICAgICBwb3BVcEJ0bi52YWx1ZSA9IFwiRWRpdCBQcm9qZWN0XCI7XHJcbiAgICAgIHBvcFVwQnRuLmNsYXNzTmFtZSA9IFwiZWRpdFByb2plY3RcIjtcclxuICAgICAgc2hvd1BvcFVwKGkpO1xyXG4gICAgfSk7XHJcbiAgICBwcm9qZWN0U3BhbkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkZWxldGVQcm9qZWN0KGkpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cy5wcm9qZWN0QXJyW2ldKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TWVudVwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBsb2FkUGFnZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkpO1xyXG59XHJcbmxvYWRQYWdlKCk7XHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBsb2FkUHJvamVjdHMpO1xyXG5cclxuLy8gY29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcclxuLy8gZWRpdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJlZGl0XCI7XHJcbi8vICAgYWRkUHJvamVjdEJ0bi5pZCA9IFwiZWRpdFByb2plY3RCdXR0b25cIjtcclxuLy8gICBlZGl0UHJvamVjdChpKTtcclxuLy8gfSk7XHJcblxyXG5mdW5jdGlvbiBjbG9zZVBvcFVwKCkge1xyXG4gIC8vIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgZm9ybVBvcFVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyclwiKTtcclxuICBwb3BVcEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XHJcbiAgcG9wVXBCdG4uaWQgPSBcImFkZFByb2plY3RCdXR0b25cIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RNZW51XCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgLy8gYWRkUHJvamVjdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcblxyXG4gIGxvYWRQYWdlKCk7XHJcbn1cclxuZnVuY3Rpb24gc2hvd1BvcFVwKCkge1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJsdXJyXCIpO1xyXG4gIGZvcm1Qb3BVcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBpZiAocG9wVXBCdG4uY2xhc3NOYW1lID09PSBcImFkZFByb2plY3RcIikge1xyXG4gICAgcG9wVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdCgpO1xyXG4gICAgICB9LFxyXG4gICAgICB7IG9uY2U6IHRydWUgfVxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKHBvcFVwQnRuLmNsYXNzTmFtZSA9PT0gXCJlZGl0UHJvamVjdFwiKSB7XHJcbiAgICBwb3BVcEJ0bi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygpO1xyXG4gICAgICAgIGVkaXRQcm9qZWN0KHByb2plY3RJbnB1dC5pZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5jbG9zZVBvcFVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjbG9zZVBvcFVwKCk7XHJcbn0pO1xyXG5mdW5jdGlvbiBjbG9zZVRvZG9JbnB1dCgpIHtcclxuICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1cnJcIik7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvTGlzdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59XHJcbmNsb3NlVG9Eb0J0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gIGNsb3NlVG9kb0lucHV0KCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvamVjdChpbmRleCkge1xyXG4gIC8vIGNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0UHJvamVjdEJ1dHRvblwiKTtcclxuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cy5wcm9qZWN0QXJyKTtcclxuXHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0SW5wdXQudmFsdWUpO1xyXG5cclxuICAvLyBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdElucHV0XCIpO1xyXG4gIC8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3ROYW1lLnZhbHVlKTtcclxuICBwcm9qZWN0cy5lZGl0UHJvamVjdChpbmRleCwgcHJvamVjdElucHV0LnZhbHVlKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RNZW51XCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY2xvc2VQb3BVcCgpO1xyXG59XHJcblxyXG4vLyBwb3BVcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgIGFkZFByb2plY3QoKTtcclxuLy8gfSk7XHJcbi8vYWRkIG5ldyBwcm9qZWN0IHNob3dpbmcgZm9ybVxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKHByb2plY3RJbnB1dC52YWx1ZS50cmltID09PSBcIlwiKSB7XHJcbiAgICBhbGVydChcIm5vdCBWYWxpZCBuYW1lXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RNZW51XCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyclwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RJbnB1dC52YWx1ZSk7XHJcbiAgfVxyXG4gIGxvYWRQYWdlKCk7XHJcbiAgLy9hZGQgZXZlbnRsaXN0ZW5lciBmb3IgYWRkaW5nIHByb2plY3RcclxuICAvLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0QnRuKTtcclxuICAvLyBjb25zdCBjbG9zZVBvcFVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZVBvcFVwXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaW5kZXgpIHtcclxuICBwcm9qZWN0cy5kZWxldGVQcm9qZWN0KGluZGV4KTtcclxufVxyXG5cclxuLy8gY29uc29sZS5sb2cocHJvamVjdHMucHJvamVjdEFycik7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0SW5wdXQudmFsdWUpO1xyXG4vL2hpZGUgZm9ybVxyXG5cclxuLy9sb2FkIHRhc2tzXHJcbmZ1bmN0aW9uIGxvYWRUYXNrcyhpbmRleCkge1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy5wcm9qZWN0QXJyKSk7XHJcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzLnByb2plY3RBcnJbaW5kZXhdO1xyXG5cclxuICBjb25zdCBhY3RpdmVQcm9qZWN0TmFtZSA9IGFjdGl2ZVByb2plY3QudGl0bGU7XHJcbiAgcHJvamVjdE5hbWUuZGF0YSA9IGFjdGl2ZVByb2plY3ROYW1lO1xyXG4gIHByb2plY3ROYW1lLmlkID0gYWN0aXZlUHJvamVjdC5pZDtcclxuICB0b2RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAvL2xvYWRpbmcgdGFza3MgZnJvbSBwcm9qZWN0IGFycmF5XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5wcm9qZWN0QXJyW2luZGV4XS50YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICB0b2RvSXRlbS5pZCA9IGk7XHJcblxyXG4gICAgY29uc3QgaXNDaGVja2VkID0gcHJvamVjdHMucHJvamVjdEFycltpbmRleF0udGFza3NbaV0uY29tcGxldGVkO1xyXG4gICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgdG9kb0l0ZW0uY2xhc3NOYW1lID0gXCJjaGVja2VkXCI7XHJcbiAgICAgIGNoZWNrLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtc3F1YXJlLWNoZWNrXCI+PC9pPic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGVjay5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXNxdWFyZVwiPjwvaT4nO1xyXG4gICAgICB0b2RvSXRlbS5jbGFzc05hbWUgPSBcImNoZWNrXCI7XHJcbiAgICB9XHJcbiAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdEl0ZW1cIik7XHJcbiAgICBjb25zdCB0b2RvSXRlbXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXHJcbiAgICAgIHByb2plY3RzLnByb2plY3RBcnJbaW5kZXhdLnRhc2tzW2ldLnRpdGxlXHJcbiAgICApO1xyXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoY2hlY2spO1xyXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0l0ZW10VGV4dCk7XHJcblxyXG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xyXG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RvRGl2LmNsYXNzTmFtZSA9IFwibWFya0RpdlwiO1xyXG5cclxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGVkaXQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuXCI+PC9pPic7XHJcbiAgICBlZGl0LmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChlZGl0KTtcclxuXHJcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY2xvc2UuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+JztcclxuICAgIGNsb3NlLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcclxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoY2xvc2UpO1xyXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0Rpdik7XHJcblxyXG4gICAgLy9jb21wbGV0aW5nIHRhc2tcclxuICAgIGNvbnN0IGNoZWNrTGlzdEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpc3RJdGVtXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja0xpc3RJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjaGVja0xpc3RJdGVtc1tpXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrZWRJdGVtID0gdG9kb0xpc3QuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICBpZiAoY2hlY2tlZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZFwiKSkge1xyXG4gICAgICAgICAgcHJvamVjdHMucHJvamVjdEFyclthY3RpdmVQcm9qZWN0LmlkXS50YXNrc1tpXS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGNoZWNrZWRJdGVtLmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcclxuICAgICAgICAgIGxvYWRUYXNrcyhhY3RpdmVQcm9qZWN0LmlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29tcGxldGVMaXN0SXRlbShpLCBhY3RpdmVQcm9qZWN0LmlkKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoZWNrZWRJdGVtKTtcclxuICAgICAgICAgIGxvYWRUYXNrcyhhY3RpdmVQcm9qZWN0LmlkKTtcclxuICAgICAgICAgIGNoZWNrZWRJdGVtLmNsYXNzTmFtZSA9IFwiY2hlY2tlZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGRlbGV0aW5nIHRhc2tcclxuICAgIGNvbnN0IGNsb3NlTGlzdEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbG9zZUxpc3RJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjbG9zZUxpc3RJdGVtc1tpXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUxpc3RJdGVtKGksIGFjdGl2ZVByb2plY3QuaWQpO1xyXG4gICAgICAgIGxvYWRUYXNrcyhhY3RpdmVQcm9qZWN0LmlkKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBhZGRMaXN0SXRlbSgpO1xyXG4gIGNsb3NlVG9kb0lucHV0KCk7XHJcbiAgbG9hZFRhc2tzKHByb2plY3ROYW1lLmlkKTtcclxufSk7XHJcblxyXG4vL2FkZCB0YXNrIHRvIHByb2plY3RcclxuZnVuY3Rpb24gYWRkTGlzdEl0ZW0oKSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB0b2RvSW5wdXRUZXh0ID0gdG9kb0lucHV0VGFzay52YWx1ZTtcclxuICBjb25zdCB0b2RvSW5wdXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIikudmFsdWU7XHJcbiAgY29uc3QgdG9kb0R1ZUZ1bGxEYXRlID0gbmV3IERhdGUodG9kb0lucHV0RGF0ZSk7XHJcbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBuZXcgRGF0ZShcclxuICAgIHRvZG9EdWVGdWxsRGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgdG9kb0R1ZUZ1bGxEYXRlLmdldE1vbnRoKCksXHJcbiAgICB0b2RvRHVlRnVsbERhdGUuZ2V0RGF0ZSgpXHJcbiAgKTtcclxuICBjb25zdCB0b2RvUHJvamVjdCA9IHByb2plY3ROYW1lLmlkO1xyXG4gIHRvRG8uYWRkVGFzayh0b2RvSW5wdXRUZXh0LCB0b2RvUHJvamVjdCwgdG9kb0R1ZURhdGUpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0lucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuICAvLyBjb25zb2xlLmxvZyh0b2RvSW5wdXREYXRlKTtcclxuICBsb2FkVGFza3ModG9kb1Byb2plY3QpO1xyXG59XHJcblxyXG4vL2RlbGV0ZSB0YXNrIGZyb20gcHJvamVjdFxyXG5mdW5jdGlvbiBkZWxldGVMaXN0SXRlbSh0YXNrSW5kZXgsIHByb2plY3RJZCkge1xyXG4gIHRvRG8uZGVsZXRlVGFzayhwcm9qZWN0SWQsIHRhc2tJbmRleCk7XHJcbiAgLy8gbG9hZFRhc2tzKHByb2plY3RJZCk7XHJcbn1cclxuZnVuY3Rpb24gY29tcGxldGVMaXN0SXRlbSh0YXNrSW5kZXgsIHByb2plY3RJZCkge1xyXG4gIHRvRG8uY29tcGxldGVUYXNrKHByb2plY3RJZCwgdGFza0luZGV4KTtcclxufVxyXG5cclxuLy9oaWRlIHNpZGUgbWVudVxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE1lbnVcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9