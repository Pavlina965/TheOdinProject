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
  let projId;
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
      projId = projectArr.length;
      currId = projId;
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
  function editTask(projectID,taskID,title,dueDate,newprojectID, completed){
    let currProject
    let currTask 
    if(projectID===newprojectID){
      currTask = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks[taskID];
      currTask.title = title;
      currTask.dueDate = dueDate;
      currTask.completed = completed;
    }
    else{
      currProject = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[newprojectID];
      addTask(title,completed,newprojectID,dueDate);
    }
  }
  function deleteTask(projectID, taskID) {
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks.splice(taskID, 1);
  }
  function completeTask(projectID, taskID) {
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks[taskID].completed = true;
  }
  function getTodayTask(projectID, taskID) {
    return _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks[taskID].dueDate;
  }
  return {
    getTodayTask,
    addTask,
    deleteTask,
    completeTask,
    editTask
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
//set today date to input
// todoInputDate.valueAsDate = todayDate;

//blurr page
function blurrPage(formShow, formHide) {
  formShow.style.display = "block";
  mainContainer.classList.add("blurr");
  formHide.style.display = "none";
}
addTaskBtn.onclick = () => {
  blurrPage(todoForm, formPopUp);
};

//load page
function loadPage() {
  const todayP = document.createElement("p");
  todayP.textContent = "Today";
  todayP.id = "today";
  divMenu.appendChild(todayP);
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
    const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i];
    const currentProjectId = currentProject.id;
    for (let j = 0; j < _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].tasks.length; j++) {
      if (
        Date.parse(_todo__WEBPACK_IMPORTED_MODULE_2__["default"].getTodayTask(currentProjectId, j)) ===
        Date.parse(todayDate)
      ) {
        const todoItem = document.createElement("li");
        todoItem.classList.add(currentProject.title + i);
        todoItem.classList.add("TaskId" + j);
        const check = document.createElement("span");
        const isChecked = currentProject.tasks[j].completed;
        if (isChecked) {
          todoItem.classList.add("checked");
          check.innerHTML = '<i class="fa-regular fa-square-check"></i>';
        } else {
          check.innerHTML = '<i class="fa-regular fa-square"></i>';
          todoItem.classList.add("check");
        }
        todoItem.classList.add("listItem");
        const todoItemtText = document.createTextNode(
          currentProject.tasks[j].title
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
        const deleteListItemBtn = document.getElementsByClassName("close");

        for (let k = 0; k < toDoListItems.length; k++) {
          const toDo = todoList.childNodes[k];
          const todoClass = toDo.classList[1];
          const toDoId = getNumberFromClass(todoClass);
          const projectId = getNumberFromClass(toDo.classList[0]);

          // deleting task
          deleteListItemBtn[k].onclick = () => {
            deleteListItem(toDoId, projectId);
            showTodayTaks();
          };
          //completing task
          toDoListItems[k].onclick = () => {
            if (toDo.classList.contains("checked")) {
              toDo.childNodes[0].innerHTML =
                '<i class="fa-regular fa-square"></i>';
              _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectId].tasks[toDoId].completed = false;
              toDo.classList.add("check");
              toDo.classList.remove("checked");
            } else {
              completeListItem(toDoId, projectId);
              toDo.childNodes[0].innerHTML =
                '<i class="fa-regular fa-square-check"></i>';
              toDo.classList.add("checked");
              toDo.classList.remove("check");
            }
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
    divMenu.appendChild(projectP);

    //edit project
    projectSpanEdit.addEventListener("click", () => {
      projectInput.value = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].title;
      projectInput.id = i;
      popUpName.textContent = "Edit project";
      popUpBtn.value = "Edit Project";
      popUpBtn.className = "editProject";
      showPopUp(i);
    });

    //delete project
    projectSpanDelete.addEventListener("click", () => {
      deleteProject(i);
      document.getElementById("projectMenu").innerHTML = "";
      loadPage();
    });
  }
}
loadPage();

//close popup
function closePopUp() {
  formPopUp.style.display = "none";
  mainContainer.classList.remove("blurr");
  popUpBtn.textContent = "Add";
  popUpBtn.id = "addProjectButton";
  document.getElementById("projectMenu").innerHTML = "";
  loadPage();
}
function showPopUp() {
  blurrPage(formPopUp, todoForm);
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
        // event.preventDefault();
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

function removeBlurr(form) {
  form.style.display = "none";
  mainContainer.classList.remove("blurr");
  document.querySelector(".todoList").style.display = "block";
}
closeToDoBtn.onclick = () => {
  removeBlurr(todoForm);
};

function editProject(index) {
  event.preventDefault();
  _projects__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(index, projectInput.value);
  document.getElementById("projectMenu").innerHTML = "";
  closePopUp(formPopUp);
}

//add new project showing form
function addProject() {
  event.preventDefault();
  if (projectInput.value.trim === "") {
    alert("not Valid name");
  } else {
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(projectInput.value);
    document.getElementById("projectMenu").innerHTML = "";
    mainContainer.classList.remove("blurr");
  }
  loadPage();
}
function deleteProject(index) {
  _projects__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(index);
}

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
    //editing task
    // const editListItem = document.getElementsByClassName("edit");
    // for (let i = 0; i < editListItem.length; i++) {
    //   editListItem[i].onclick = () => {
        
    //   };
    // }
  }
}

addTodoButton.addEventListener("click", () => {
  addListItem();
  removeBlurr(todoForm);
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
//edit task
function editListItem(projectId, taskId,){

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLEtBQUssS0FBSyxPQUFPLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sZ0JBQWdCLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLFNBQVMsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0s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QTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW50b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW50b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL29kaW50b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW50b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGludG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXHJcbmJvZHksXHJcbm1haW4ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLyogLnBvcFVwSGVhZGVyIHtcclxuICAvKiBwYWRkaW5nOiA1cHg7ICovXHJcbi8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4vKiB9XHJcblxyXG4vKiAjcG9wVXAge1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59ICovXHJcbi5wb3BVcEZvcm0sIC50b2RvRm9ybSB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTljMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGRlNjtcclxuXHJcbiAgLyogLyogZGlzcGxheTogbm9uZTsgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMjAlO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xyXG4gIC8qXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzU5OTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggIzcwNzU5OTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7ICovXHJcbn1cclxuIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiAjMjIyMjNiO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTljMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGRlNjtcclxuICBjb2xvcjogIzIyMjIzYjtcclxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbn1cclxuLyogI3BvcFVwSW5wdXQgW3R5cGU9XCJ0ZXh0XCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjN2Q4MmEyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZGU2O1xyXG4gIGNvbG9yOiAjNGE0ZTY5OyBcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzU5OTtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhNGU2OTsgXHJcbn0gKi9cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZDgyYTI7XHJcbiAgY2FyZXQtY29sb3I6ICM3ZDgyYTI7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRlNjk7XHJcbiAgY29sb3I6ICNkYmRkZTY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcbi5idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGVuZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWFyZ2luOiA2cHg7XHJcbn1cclxuI2Nsb3NlUG9wVXBCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmE5YzA7XHJcbn1cclxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTY2NGZjMztcclxufVxyXG4jYWRkUHJvamVjdEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjU0ZjtcclxufVxyXG5cclxuLm1haW5Db250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbm5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGU2OTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubWVudSB7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3NTk5O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cclxufVxyXG4uZWRpdEljb246aG92ZXIsXHJcbi5kZWxldGVJY29uOmhvdmVyIHtcclxuICBjb2xvcjogI2RiZGRlNjtcclxufVxyXG4uZWRpdEljb24sXHJcbi5kZWxldGVJY29uIHtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG4ubWVudSBwLFxyXG4ubWVudSBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWVudSBwOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q4MmEyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi8qIC5tZW51IGRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAqL1xyXG4ubWVudSBkaXY6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5ibHVyciB7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4udG9kbyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZGU2O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uY2hlY2tlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuLnRvZG9MaXN0IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuI3RvZG9MaXN0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4jdG9kb0xpc3QgbGkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItYm90dG9tOiAjNGE0ZTY5IDFweCBzb2xpZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ubWFya0RpdiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNhZGRUYXNrIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUNBO29CQUNvQjtBQUNwQix1QkFBdUI7QUFDdkI7Ozs7Ozs7R0FPRztBQUNIO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7O0VBRXpCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCOzs7Ozs7OztzQkFRb0I7QUFDdEI7Q0FDQztFQUNDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSDtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZUFBZTtFQUNmOzs2QkFFMkI7QUFDN0I7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsV0FBVztBQUNiO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBQ0E7Ozs7O0dBS0c7QUFDSDtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxyXFxuYm9keSxcXHJcXG5tYWluIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLyogLnBvcFVwSGVhZGVyIHtcXHJcXG4gIC8qIHBhZGRpbmc6IDVweDsgKi9cXHJcXG4vKiBmb250LXdlaWdodDogYm9sZDsgKi9cXHJcXG4vKiB9XFxyXFxuXFxyXFxuLyogI3BvcFVwIHtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn0gKi9cXHJcXG4ucG9wVXBGb3JtLCAudG9kb0Zvcm0ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTljMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRkZTY7XFxyXFxuXFxyXFxuICAvKiAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiAyMCU7XFxyXFxuICB6LWluZGV4OiA5O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xcclxcbiAgLypcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDc1OTk7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggIzcwNzU5OTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7ICovXFxyXFxufVxcclxcbiBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBjb2xvcjogIzIyMjIzYjtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTljMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRkZTY7XFxyXFxuICBjb2xvcjogIzIyMjIzYjtcXHJcXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cXHJcXG59XFxyXFxuLyogI3BvcFVwSW5wdXQgW3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjN2Q4MmEyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGRlNjtcXHJcXG4gIGNvbG9yOiAjNGE0ZTY5OyBcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3NTk5O1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGE0ZTY5OyBcXHJcXG59ICovXFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZDgyYTI7XFxyXFxuICBjYXJldC1jb2xvcjogIzdkODJhMjtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0ZTY5O1xcclxcbiAgY29sb3I6ICNkYmRkZTY7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG59XFxyXFxuLmJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogZW5kO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luOiA2cHg7XFxyXFxufVxcclxcbiNjbG9zZVBvcFVwQnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmE5YzA7XFxyXFxufVxcclxcbiNhZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTY2NGZjMztcXHJcXG59XFxyXFxuI2FkZFByb2plY3RCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjU0ZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5Db250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRlNjk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3NTk5O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxyXFxufVxcclxcbi5lZGl0SWNvbjpob3ZlcixcXHJcXG4uZGVsZXRlSWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogI2RiZGRlNjtcXHJcXG59XFxyXFxuLmVkaXRJY29uLFxcclxcbi5kZWxldGVJY29uIHtcXHJcXG4gIG1hcmdpbjogMnB4O1xcclxcbn1cXHJcXG4ubWVudSBwLFxcclxcbi5tZW51IGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tZW51IHA6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkODJhMjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKiAubWVudSBkaXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59ICovXFxyXFxuLm1lbnUgZGl2OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uYmx1cnIge1xcclxcbiAgb3BhY2l0eTogMC4zO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGRlNjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLnRvZG9MaXN0IHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuI3RvZG9MaXN0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbiN0b2RvTGlzdCBsaSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAjNGE0ZTY5IDFweCBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tYXJrRGl2IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI2FkZFRhc2sge1xcclxcbiAgcGFkZGluZy10b3A6IDVweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcclxuICBsZXQgcHJvamVjdEFyciA9IFtdO1xyXG4gIGxldCBwcm9qSWQ7XHJcbiAgbGV0IGN1cnJJZCA9MDtcclxuICBcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKT09PW51bGwpe1xyXG4gIHByb2plY3RBcnIgPSBbXHJcblxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJJbmJveFwiLFxyXG4gICAgICBpZDogMCxcclxuICAgICAgdGFza3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJ0YXNrMVwiLFxyXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIHByb2plY3RJRDogMCxcclxuICAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKCcyMDI0LTMtNicpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHcm9jZXJpZXNcIixcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiYXBwbGVzXCIsXHJcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgcHJvamVjdElEOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwibWVhdFwiLFxyXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIHByb2plY3RJRDogMSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcbmVsc2Uge1xyXG4gIGNvbnN0IHN0b3JyZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbiAgcHJvamVjdEFyciA9IHN0b3JyZWRQcm9qZWN0cztcclxufVxyXG4gIFxyXG4gIGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICBwcm9qSWQgPSBwcm9qZWN0QXJyLmxlbmd0aDtcclxuICAgICAgY3VycklkID0gcHJvaklkO1xyXG4gICAgICB0aGlzLmlkID0gY3VycklkO1xyXG4gICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XHJcbiAgICBwcm9qZWN0QXJyLnB1c2gocHJvamVjdCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGluZGV4LHRpdGxlKXtcclxuICAgIHByb2plY3RBcnJbaW5kZXhdLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGluZGV4KXtcclxuICAgIHByb2plY3RBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9qZWN0QXJyLFxyXG4gICAgYWRkUHJvamVjdCxcclxuICAgIGVkaXRQcm9qZWN0LFxyXG4gICAgZGVsZXRlUHJvamVjdCxcclxuICB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcclxuIiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG4vLyBsZXQgdGFza0lEID0gMDtcclxuY29uc3QgdG9EbyA9ICgoKSA9PiB7XHJcbiAgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29tcGxldGVkLCBwcm9qZWN0SUQsIGR1ZURhdGUpIHtcclxuICAgIC8vICAgdGhpcy5pZCA9IHRhc2tJRDtcclxuICAgIC8vICAgdGFza0lEICsrO1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkVGFzayh0aXRsZSwgcHJvamVjdElELCBkdWVEYXRlKSB7XHJcbiAgICAvLyBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRpdGxlO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGZhbHNlLCBwcm9qZWN0SUQsIGR1ZURhdGUpO1xyXG4gICAgXHJcblxyXG4gICAgcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGVkaXRUYXNrKHByb2plY3RJRCx0YXNrSUQsdGl0bGUsZHVlRGF0ZSxuZXdwcm9qZWN0SUQsIGNvbXBsZXRlZCl7XHJcbiAgICBsZXQgY3VyclByb2plY3RcclxuICAgIGxldCBjdXJyVGFzayBcclxuICAgIGlmKHByb2plY3RJRD09PW5ld3Byb2plY3RJRCl7XHJcbiAgICAgIGN1cnJUYXNrID0gcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRhc2tzW3Rhc2tJRF07XHJcbiAgICAgIGN1cnJUYXNrLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIGN1cnJUYXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICBjdXJyVGFzay5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjdXJyUHJvamVjdCA9IHByb2plY3RzLnByb2plY3RBcnJbbmV3cHJvamVjdElEXTtcclxuICAgICAgYWRkVGFzayh0aXRsZSxjb21wbGV0ZWQsbmV3cHJvamVjdElELGR1ZURhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3RJRCwgdGFza0lEKSB7XHJcbiAgICBwcm9qZWN0cy5wcm9qZWN0QXJyW3Byb2plY3RJRF0udGFza3Muc3BsaWNlKHRhc2tJRCwgMSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNvbXBsZXRlVGFzayhwcm9qZWN0SUQsIHRhc2tJRCkge1xyXG4gICAgcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRhc2tzW3Rhc2tJRF0uY29tcGxldGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZ2V0VG9kYXlUYXNrKHByb2plY3RJRCwgdGFza0lEKSB7XHJcbiAgICByZXR1cm4gcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRhc2tzW3Rhc2tJRF0uZHVlRGF0ZTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGdldFRvZGF5VGFzayxcclxuICAgIGFkZFRhc2ssXHJcbiAgICBkZWxldGVUYXNrLFxyXG4gICAgY29tcGxldGVUYXNrLFxyXG4gICAgZWRpdFRhc2tcclxuICB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCB0b0RvO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHRvRG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVG9kb0J1dHRvblwiKTtcclxuY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9MaXN0XCIpO1xyXG5jb25zdCB0b2RvSW5wdXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvSW5wdXRcIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XHJcbmNvbnN0IHRvZG9JbnB1dERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKTtcclxuY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3ROYW1lXCIpLmZpcnN0Q2hpbGQ7XHJcbmNvbnN0IGZvcm1Qb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBGb3JtXCIpO1xyXG5jb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RJbnB1dFwiKTtcclxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRhaW5lclwiKTtcclxuY29uc3QgZGl2TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE1lbnVcIik7XHJcbmNvbnN0IHBvcFVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0QnV0dG9uXCIpO1xyXG5jb25zdCBjbG9zZVBvcFVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZVBvcFVwQnV0dG9uXCIpO1xyXG5jb25zdCBjbG9zZVRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlVG9Eb0J1dHRvblwiKTtcclxuY29uc3QgcG9wVXBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3BVcE5hbWVcIik7XHJcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRhc2tcIik7XHJcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvRm9ybVwiKTtcclxuY29uc3QgdG9kYXlGdWxsRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbmNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKFxyXG4gIHRvZGF5RnVsbERhdGUuZ2V0RnVsbFllYXIoKSxcclxuICB0b2RheUZ1bGxEYXRlLmdldE1vbnRoKCksXHJcbiAgdG9kYXlGdWxsRGF0ZS5nZXREYXRlKClcclxuKTtcclxuLy9zZXQgdG9kYXkgZGF0ZSB0byBpbnB1dFxyXG4vLyB0b2RvSW5wdXREYXRlLnZhbHVlQXNEYXRlID0gdG9kYXlEYXRlO1xyXG5cclxuLy9ibHVyciBwYWdlXHJcbmZ1bmN0aW9uIGJsdXJyUGFnZShmb3JtU2hvdywgZm9ybUhpZGUpIHtcclxuICBmb3JtU2hvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJsdXJyXCIpO1xyXG4gIGZvcm1IaWRlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5hZGRUYXNrQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgYmx1cnJQYWdlKHRvZG9Gb3JtLCBmb3JtUG9wVXApO1xyXG59O1xyXG5cclxuLy9sb2FkIHBhZ2VcclxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XHJcbiAgY29uc3QgdG9kYXlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdG9kYXlQLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gIHRvZGF5UC5pZCA9IFwidG9kYXlcIjtcclxuICBkaXZNZW51LmFwcGVuZENoaWxkKHRvZGF5UCk7XHJcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5XCIpO1xyXG5cclxuICBsb2FkUHJvamVjdHMoKTtcclxuICBmb3JtUG9wVXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIC8vYWRkIG5ldyBwcm9qZWN0IGJ1dHRvblxyXG4gIGNvbnN0IGFkZE5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFkZE5ld1Byb2plY3REaXYuaWQgPSBcImFkZE5ld1Byb2plY3RcIjtcclxuICBhZGROZXdQcm9qZWN0RGl2LmlubmVySFRNTCA9XHJcbiAgICBcIk5ldyBQcm9qZWN0IFwiICsgJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT4nO1xyXG4gIGRpdk1lbnUuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdERpdik7XHJcbiAgY29uc3QgcHJvamVjdENvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdHNcIik7XHJcbiAgLy9uZXcgUHJvamVjdCBwb3BVcCBjbGljayBldmVudFxyXG4gIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZE5ld1Byb2plY3RcIik7XHJcbiAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIHBvcFVwTmFtZS50ZXh0Q29udGVudCA9IFwiTmV3IHByb2plY3RcIjtcclxuICAgIHBvcFVwQnRuLlZhbHVlID0gXCJBZGQgUHJvamVjdFwiO1xyXG4gICAgcG9wVXBCdG4uY2xhc3NOYW1lID0gXCJhZGRQcm9qZWN0XCI7XHJcbiAgICBzaG93UG9wVXAoKTtcclxuICB9KTtcclxuICAvL2xvYWQgdGFza3MgZm9yIHByb2plY3RcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RDb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwcm9qZWN0Q29sbGVjdGlvbltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBsb2FkVGFza3MoaSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRUYXNrcygwKTtcclxuXHJcbiAgdG9kYXkub25jbGljayA9ICgpID0+IHtcclxuICAgIHNob3dUb2RheVRha3MoKTtcclxuICAgIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gc2hvd1RvZGF5VGFrcygpIHtcclxuICBwcm9qZWN0TmFtZS5kYXRhID0gXCJUb2RheVwiO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Zvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIHRvZG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgLy8gY29uc29sZS5sb2coKVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMucHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy5wcm9qZWN0QXJyKSk7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLnByb2plY3RBcnJbaV07XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWQ7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzLnByb2plY3RBcnJbaV0udGFza3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIERhdGUucGFyc2UodG9Eby5nZXRUb2RheVRhc2soY3VycmVudFByb2plY3RJZCwgaikpID09PVxyXG4gICAgICAgIERhdGUucGFyc2UodG9kYXlEYXRlKVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKGN1cnJlbnRQcm9qZWN0LnRpdGxlICsgaSk7XHJcbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcIlRhc2tJZFwiICsgaik7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSBjdXJyZW50UHJvamVjdC50YXNrc1tqXS5jb21wbGV0ZWQ7XHJcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XHJcbiAgICAgICAgICBjaGVjay5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXNxdWFyZS1jaGVja1wiPjwvaT4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaGVjay5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXNxdWFyZVwiPjwvaT4nO1xyXG4gICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcImNoZWNrXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdEl0ZW1cIik7XHJcbiAgICAgICAgY29uc3QgdG9kb0l0ZW10VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxyXG4gICAgICAgICAgY3VycmVudFByb2plY3QudGFza3Nbal0udGl0bGVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChjaGVjayk7XHJcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0l0ZW10VGV4dCk7XHJcblxyXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcclxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0b2RvRGl2LmNsYXNzTmFtZSA9IFwibWFya0RpdlwiO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgZWRpdC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZW5cIj48L2k+JztcclxuICAgICAgICBlZGl0LmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZWRpdCk7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT4nO1xyXG4gICAgICAgIGNsb3NlLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcclxuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9Eb0xpc3RJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0SXRlbVwiKTtcclxuICAgICAgICBjb25zdCBkZWxldGVMaXN0SXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0b0RvTGlzdEl0ZW1zLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICBjb25zdCB0b0RvID0gdG9kb0xpc3QuY2hpbGROb2Rlc1trXTtcclxuICAgICAgICAgIGNvbnN0IHRvZG9DbGFzcyA9IHRvRG8uY2xhc3NMaXN0WzFdO1xyXG4gICAgICAgICAgY29uc3QgdG9Eb0lkID0gZ2V0TnVtYmVyRnJvbUNsYXNzKHRvZG9DbGFzcyk7XHJcbiAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBnZXROdW1iZXJGcm9tQ2xhc3ModG9Eby5jbGFzc0xpc3RbMF0pO1xyXG5cclxuICAgICAgICAgIC8vIGRlbGV0aW5nIHRhc2tcclxuICAgICAgICAgIGRlbGV0ZUxpc3RJdGVtQnRuW2tdLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RJdGVtKHRvRG9JZCwgcHJvamVjdElkKTtcclxuICAgICAgICAgICAgc2hvd1RvZGF5VGFrcygpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIC8vY29tcGxldGluZyB0YXNrXHJcbiAgICAgICAgICB0b0RvTGlzdEl0ZW1zW2tdLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0b0RvLmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWRcIikpIHtcclxuICAgICAgICAgICAgICB0b0RvLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtc3F1YXJlXCI+PC9pPic7XHJcbiAgICAgICAgICAgICAgcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SWRdLnRhc2tzW3RvRG9JZF0uY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdG9Eby5jbGFzc0xpc3QuYWRkKFwiY2hlY2tcIik7XHJcbiAgICAgICAgICAgICAgdG9Eby5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb21wbGV0ZUxpc3RJdGVtKHRvRG9JZCwgcHJvamVjdElkKTtcclxuICAgICAgICAgICAgICB0b0RvLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtc3F1YXJlLWNoZWNrXCI+PC9pPic7XHJcbiAgICAgICAgICAgICAgdG9Eby5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgICB0b0RvLmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0TnVtYmVyRnJvbUNsYXNzKGNsYXNzTmFtZSkge1xyXG4gIGNvbnN0IG51bWJlclJlZ2V4ID0gL1xcZCsvO1xyXG4gIGNvbnN0IG1hdGNoID0gY2xhc3NOYW1lLm1hdGNoKG51bWJlclJlZ2V4KTtcclxuICBpZiAobWF0Y2gpIHtcclxuICAgIHJldHVybiBwYXJzZUludChtYXRjaFswXSwgMTApO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLy9sb2FkIHByb2plY3RzXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzLnByb2plY3RBcnIpKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLnByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vY3JlYXRpbmcgcHJvamVjdHMgbGlzdFxyXG4gICAgY29uc3QgcHJvamVjdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHByb2plY3RQLnRleHRDb250ZW50ID0gcHJvamVjdHMucHJvamVjdEFycltpXS50aXRsZTtcclxuICAgIHByb2plY3RQLmlkID0gaTtcclxuICAgIHByb2plY3RQLmNsYXNzTmFtZSA9IFwicHJvamVjdHNcIjtcclxuICAgIC8vIGVkaXQgcHJvamVjdCBidXR0b25cclxuICAgIGNvbnN0IHByb2plY3RTcGFuRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcHJvamVjdFNwYW5FZGl0LmNsYXNzTmFtZSA9IFwiZWRpdEljb25cIjtcclxuICAgIGNvbnN0IHByb2plY3RJRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgcHJvamVjdFNwYW5FZGl0LmFwcGVuZENoaWxkKHByb2plY3RJRWRpdCk7XHJcbiAgICBwcm9qZWN0SUVkaXQuY2xhc3NOYW1lID0gXCJmYS1zb2xpZCBmYS1wZW4tdG8tc3F1YXJlXCI7XHJcblxyXG4gICAgLy9kZWxldGUgcHJvamVjdCBidXR0b25cclxuICAgIGNvbnN0IHByb2plY3RTcGFuRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcm9qZWN0U3BhbkRlbGV0ZS5jbGFzc05hbWUgPSBcImRlbGV0ZUljb25cIjtcclxuICAgIGNvbnN0IHByb2plY3RJRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBwcm9qZWN0U3BhbkRlbGV0ZS5hcHBlbmRDaGlsZChwcm9qZWN0SURlbGV0ZSk7XHJcbiAgICBwcm9qZWN0SURlbGV0ZS5jbGFzc05hbWUgPSBcImZhLXNvbGlkIGZhLXRyYXNoXCI7XHJcblxyXG4gICAgcHJvamVjdFAuYXBwZW5kKHByb2plY3RTcGFuRWRpdCwgcHJvamVjdFNwYW5EZWxldGUpO1xyXG4gICAgZGl2TWVudS5hcHBlbmRDaGlsZChwcm9qZWN0UCk7XHJcblxyXG4gICAgLy9lZGl0IHByb2plY3RcclxuICAgIHByb2plY3RTcGFuRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBwcm9qZWN0cy5wcm9qZWN0QXJyW2ldLnRpdGxlO1xyXG4gICAgICBwcm9qZWN0SW5wdXQuaWQgPSBpO1xyXG4gICAgICBwb3BVcE5hbWUudGV4dENvbnRlbnQgPSBcIkVkaXQgcHJvamVjdFwiO1xyXG4gICAgICBwb3BVcEJ0bi52YWx1ZSA9IFwiRWRpdCBQcm9qZWN0XCI7XHJcbiAgICAgIHBvcFVwQnRuLmNsYXNzTmFtZSA9IFwiZWRpdFByb2plY3RcIjtcclxuICAgICAgc2hvd1BvcFVwKGkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9kZWxldGUgcHJvamVjdFxyXG4gICAgcHJvamVjdFNwYW5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGVsZXRlUHJvamVjdChpKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TWVudVwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBsb2FkUGFnZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmxvYWRQYWdlKCk7XHJcblxyXG4vL2Nsb3NlIHBvcHVwXHJcbmZ1bmN0aW9uIGNsb3NlUG9wVXAoKSB7XHJcbiAgZm9ybVBvcFVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyclwiKTtcclxuICBwb3BVcEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XHJcbiAgcG9wVXBCdG4uaWQgPSBcImFkZFByb2plY3RCdXR0b25cIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RNZW51XCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbG9hZFBhZ2UoKTtcclxufVxyXG5mdW5jdGlvbiBzaG93UG9wVXAoKSB7XHJcbiAgYmx1cnJQYWdlKGZvcm1Qb3BVcCwgdG9kb0Zvcm0pO1xyXG4gIGlmIChwb3BVcEJ0bi5jbGFzc05hbWUgPT09IFwiYWRkUHJvamVjdFwiKSB7XHJcbiAgICBwb3BVcEJ0bi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBhZGRQcm9qZWN0KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAocG9wVXBCdG4uY2xhc3NOYW1lID09PSBcImVkaXRQcm9qZWN0XCIpIHtcclxuICAgIHBvcFVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZWRpdFByb2plY3QocHJvamVjdElucHV0LmlkKTtcclxuICAgICAgfSxcclxuICAgICAgeyBvbmNlOiB0cnVlIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jbG9zZVBvcFVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjbG9zZVBvcFVwKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQmx1cnIoZm9ybSkge1xyXG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJyXCIpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0xpc3RcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufVxyXG5jbG9zZVRvRG9CdG4ub25jbGljayA9ICgpID0+IHtcclxuICByZW1vdmVCbHVycih0b2RvRm9ybSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvamVjdChpbmRleCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcHJvamVjdHMuZWRpdFByb2plY3QoaW5kZXgsIHByb2plY3RJbnB1dC52YWx1ZSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TWVudVwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNsb3NlUG9wVXAoZm9ybVBvcFVwKTtcclxufVxyXG5cclxuLy9hZGQgbmV3IHByb2plY3Qgc2hvd2luZyBmb3JtXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAocHJvamVjdElucHV0LnZhbHVlLnRyaW0gPT09IFwiXCIpIHtcclxuICAgIGFsZXJ0KFwibm90IFZhbGlkIG5hbWVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE1lbnVcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJyXCIpO1xyXG4gIH1cclxuICBsb2FkUGFnZSgpO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaW5kZXgpIHtcclxuICBwcm9qZWN0cy5kZWxldGVQcm9qZWN0KGluZGV4KTtcclxufVxyXG5cclxuLy9sb2FkIHRhc2tzXHJcbmZ1bmN0aW9uIGxvYWRUYXNrcyhpbmRleCkge1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy5wcm9qZWN0QXJyKSk7XHJcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzLnByb2plY3RBcnJbaW5kZXhdO1xyXG5cclxuICBjb25zdCBhY3RpdmVQcm9qZWN0TmFtZSA9IGFjdGl2ZVByb2plY3QudGl0bGU7XHJcbiAgcHJvamVjdE5hbWUuZGF0YSA9IGFjdGl2ZVByb2plY3ROYW1lO1xyXG4gIHByb2plY3ROYW1lLmlkID0gYWN0aXZlUHJvamVjdC5pZDtcclxuICB0b2RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIC8vbG9hZGluZyB0YXNrcyBmcm9tIHByb2plY3QgYXJyYXlcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLnByb2plY3RBcnJbaW5kZXhdLnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHRvZG9JdGVtLmlkID0gaTtcclxuXHJcbiAgICBjb25zdCBpc0NoZWNrZWQgPSBwcm9qZWN0cy5wcm9qZWN0QXJyW2luZGV4XS50YXNrc1tpXS5jb21wbGV0ZWQ7XHJcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICB0b2RvSXRlbS5jbGFzc05hbWUgPSBcImNoZWNrZWRcIjtcclxuICAgICAgY2hlY2suaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zcXVhcmUtY2hlY2tcIj48L2k+JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoZWNrLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtc3F1YXJlXCI+PC9pPic7XHJcbiAgICAgIHRvZG9JdGVtLmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcclxuICAgIH1cclxuICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJsaXN0SXRlbVwiKTtcclxuICAgIGNvbnN0IHRvZG9JdGVtdFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcclxuICAgICAgcHJvamVjdHMucHJvamVjdEFycltpbmRleF0udGFza3NbaV0udGl0bGVcclxuICAgICk7XHJcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChjaGVjayk7XHJcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvSXRlbXRUZXh0KTtcclxuXHJcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XHJcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvZG9EaXYuY2xhc3NOYW1lID0gXCJtYXJrRGl2XCI7XHJcblxyXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgZWRpdC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZW5cIj48L2k+JztcclxuICAgIGVkaXQuY2xhc3NOYW1lID0gXCJlZGl0XCI7XHJcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGVkaXQpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjbG9zZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT4nO1xyXG4gICAgY2xvc2UuY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjbG9zZSk7XHJcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcclxuXHJcbiAgICAvL2NvbXBsZXRpbmcgdGFza1xyXG4gICAgY29uc3QgY2hlY2tMaXN0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdEl0ZW1cIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrTGlzdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNoZWNrTGlzdEl0ZW1zW2ldLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tlZEl0ZW0gPSB0b2RvTGlzdC5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgIGlmIChjaGVja2VkSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja2VkXCIpKSB7XHJcbiAgICAgICAgICBwcm9qZWN0cy5wcm9qZWN0QXJyW2FjdGl2ZVByb2plY3QuaWRdLnRhc2tzW2ldLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgY2hlY2tlZEl0ZW0uY2xhc3NOYW1lID0gXCJjaGVja1wiO1xyXG4gICAgICAgICAgbG9hZFRhc2tzKGFjdGl2ZVByb2plY3QuaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb21wbGV0ZUxpc3RJdGVtKGksIGFjdGl2ZVByb2plY3QuaWQpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY2hlY2tlZEl0ZW0pO1xyXG4gICAgICAgICAgbG9hZFRhc2tzKGFjdGl2ZVByb2plY3QuaWQpO1xyXG4gICAgICAgICAgY2hlY2tlZEl0ZW0uY2xhc3NOYW1lID0gXCJjaGVja2VkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gZGVsZXRpbmcgdGFza1xyXG4gICAgY29uc3QgY2xvc2VMaXN0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsb3NlTGlzdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNsb3NlTGlzdEl0ZW1zW2ldLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlTGlzdEl0ZW0oaSwgYWN0aXZlUHJvamVjdC5pZCk7XHJcbiAgICAgICAgbG9hZFRhc2tzKGFjdGl2ZVByb2plY3QuaWQpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy9lZGl0aW5nIHRhc2tcclxuICAgIC8vIGNvbnN0IGVkaXRMaXN0SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlZGl0XCIpO1xyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0TGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgZWRpdExpc3RJdGVtW2ldLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgIH07XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcblxyXG5hZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgYWRkTGlzdEl0ZW0oKTtcclxuICByZW1vdmVCbHVycih0b2RvRm9ybSk7XHJcbiAgbG9hZFRhc2tzKHByb2plY3ROYW1lLmlkKTtcclxufSk7XHJcblxyXG4vL2FkZCB0YXNrIHRvIHByb2plY3RcclxuZnVuY3Rpb24gYWRkTGlzdEl0ZW0oKSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB0b2RvSW5wdXRUZXh0ID0gdG9kb0lucHV0VGFzay52YWx1ZTtcclxuICBjb25zdCB0b2RvSW5wdXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIikudmFsdWU7XHJcbiAgY29uc3QgdG9kb0R1ZUZ1bGxEYXRlID0gbmV3IERhdGUodG9kb0lucHV0RGF0ZSk7XHJcbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBuZXcgRGF0ZShcclxuICAgIHRvZG9EdWVGdWxsRGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgdG9kb0R1ZUZ1bGxEYXRlLmdldE1vbnRoKCksXHJcbiAgICB0b2RvRHVlRnVsbERhdGUuZ2V0RGF0ZSgpXHJcbiAgKTtcclxuICBjb25zdCB0b2RvUHJvamVjdCA9IHByb2plY3ROYW1lLmlkO1xyXG4gIHRvRG8uYWRkVGFzayh0b2RvSW5wdXRUZXh0LCB0b2RvUHJvamVjdCwgdG9kb0R1ZURhdGUpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0lucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuICAvLyBjb25zb2xlLmxvZyh0b2RvSW5wdXREYXRlKTtcclxuICBsb2FkVGFza3ModG9kb1Byb2plY3QpO1xyXG59XHJcbi8vZWRpdCB0YXNrXHJcbmZ1bmN0aW9uIGVkaXRMaXN0SXRlbShwcm9qZWN0SWQsIHRhc2tJZCwpe1xyXG5cclxufVxyXG4vL2RlbGV0ZSB0YXNrIGZyb20gcHJvamVjdFxyXG5mdW5jdGlvbiBkZWxldGVMaXN0SXRlbSh0YXNrSW5kZXgsIHByb2plY3RJZCkge1xyXG4gIHRvRG8uZGVsZXRlVGFzayhwcm9qZWN0SWQsIHRhc2tJbmRleCk7XHJcbiAgLy8gbG9hZFRhc2tzKHByb2plY3RJZCk7XHJcbn1cclxuZnVuY3Rpb24gY29tcGxldGVMaXN0SXRlbSh0YXNrSW5kZXgsIHByb2plY3RJZCkge1xyXG4gIHRvRG8uY29tcGxldGVUYXNrKHByb2plY3RJZCwgdGFza0luZGV4KTtcclxufVxyXG5cclxuLy9oaWRlIHNpZGUgbWVudVxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE1lbnVcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9