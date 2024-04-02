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
.todoDiv {
  padding: 5px;
  border-bottom: #4a4e69 1px solid;
  display: flex;
  justify-content: space-between;
}
#todoList li{
  display: flex;
  width: 50%;
  justify-content: space-between;
}
.markDiv {
  cursor: pointer;
}
#addTask {
  padding-top: 5px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,YAAY;EACZ,SAAS;AACX;AACA;oBACoB;AACpB,uBAAuB;AACvB;;;;;;;GAOG;AACH;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;;EAEzB,sBAAsB;EACtB,eAAe;EACf,SAAS;EACT,QAAQ;EACR,UAAU;EACV,8BAA8B;EAC9B;;;;;;;;sBAQoB;AACtB;CACC;EACC,cAAc;EACd,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;AACpB;AACA;;;;;;;;;;;;GAYG;;AAEH;EACE,aAAa;EACb,yBAAyB;EACzB,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,aAAa;AACf;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,UAAU;EACV,yBAAyB;EACzB,UAAU;EACV,eAAe;EACf;;6BAE2B;AAC7B;AACA;;EAEE,cAAc;AAChB;AACA;;EAEE,WAAW;AACb;AACA;;EAEE,WAAW;EACX,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,WAAW;AACb;AACA;;;;;GAKG;AACH;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,YAAY;AACd;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,YAAY;EACZ,gCAAgC;EAChC,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB","sourcesContent":["html,\r\nbody,\r\nmain {\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n/* .popUpHeader {\r\n  /* padding: 5px; */\r\n/* font-weight: bold; */\r\n/* }\r\n\r\n/* #popUp {\r\n  height: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n} */\r\n.popUpForm, .todoForm {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  border: 1px solid #a6a9c0;\r\n  border-radius: 5px;\r\n  background-color: #dbdde6;\r\n\r\n  /* /* display: none; */\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 20%;\r\n  z-index: 9;\r\n  transform: translate(-50%, 5%);\r\n  /*\r\n  background-color: #707599;\r\n  height: 200px;\r\n  width: 400px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 0px 10px 1px #707599;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 15px; */\r\n}\r\n label {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  color: #22223b;\r\n}\r\ninput[type=\"text\"], input[type=\"date\"] {\r\n  width: 100%;\r\n  padding: 5px;\r\n  margin-bottom: 15px;\r\n  border: 1px solid #a6a9c0;\r\n  border-radius: 3px;\r\n  background-color: #dbdde6;\r\n  color: #22223b;\r\n  /* height: 100%; */\r\n}\r\n/* #popUpInput [type=\"text\"] {\r\n  width: 100%;\r\n  padding: 5px;\r\n  margin-bottom: 15px;\r\n  border: 1px solid #7d82a2;\r\n  border-radius: 3px;\r\n  background-color: #dbdde6;\r\n  color: #4a4e69; \r\n   background-color: #707599;\r\n  padding: 8px 16px;\r\n  border-radius: 4px;\r\n  border: 1px solid #4a4e69; \r\n} */\r\n\r\ninput:focus {\r\n  outline: none;\r\n  border: 1px solid #7d82a2;\r\n  caret-color: #7d82a2;\r\n  transition-duration: 1s;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  background-color: #4a4e69;\r\n  color: #dbdde6;\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n  margin: 0 5px;\r\n}\r\n.buttons {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: end;\r\n  width: 100%;\r\n  padding: 10px;\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n  margin: 6px;\r\n}\r\n#closePopUpButton:hover {\r\n  background-color: #a6a9c0;\r\n}\r\n#addProjectButton:hover {\r\n  background-color: #fe664fc3;\r\n}\r\n#addProjectButton {\r\n  background-color: #fe654f;\r\n}\r\n\r\n.mainContainer {\r\n  display: flex;\r\n  height: 100%;\r\n}\r\nnav {\r\n  background-color: #4a4e69;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n.menu {\r\n  width: 35%;\r\n  background-color: #707599;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  /* display: flex;\r\n    align-items: center;\r\n    flex-direction: column; */\r\n}\r\n.editIcon:hover,\r\n.deleteIcon:hover {\r\n  color: #dbdde6;\r\n}\r\n.editIcon,\r\n.deleteIcon {\r\n  margin: 2px;\r\n}\r\n.menu p,\r\n.menu div {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n.menu p:hover {\r\n  background-color: #7d82a2;\r\n  width: 100%;\r\n}\r\n/* .menu div{\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin: 0;\r\n    text-align: center;\r\n} */\r\n.menu div:hover {\r\n  transform: scale(1.1);\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n.blurr {\r\n  opacity: 0.3;\r\n}\r\n\r\n.todo {\r\n  padding: 10px;\r\n  background-color: #dbdde6;\r\n  width: 100%;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n.todoList {\r\n  padding: 5px;\r\n}\r\n#todoList {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.todoDiv {\r\n  padding: 5px;\r\n  border-bottom: #4a4e69 1px solid;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n#todoList li{\r\n  display: flex;\r\n  width: 50%;\r\n  justify-content: space-between;\r\n}\r\n.markDiv {\r\n  cursor: pointer;\r\n}\r\n#addTask {\r\n  padding-top: 5px;\r\n}\r\n"],"sourceRoot":""}]);
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
  function editTask(projectID,taskID,title,dueDate,newprojectID){
    let currProject
    let currTask 
    if(projectID==newprojectID){
      currTask = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks[taskID];
      currTask.title = title;
      currTask.dueDate = dueDate;
      localStorage.setItem("projects", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr))
    }
    else{
      currProject = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[newprojectID];
      deleteTask(projectID,taskID);
      addTask(title,newprojectID,dueDate);
    }
  }
  function deleteTask(projectID, taskID) {
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks.splice(taskID, 1);
  }
  function completeTask(projectID, taskID) {
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks[taskID].completed = true;
  }
  function getTaskDate(projectID, taskID) {
    return _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectID].tasks[taskID].dueDate;
  }
  return {
    getTaskDate,
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
const AddProjectBtn = document.querySelector("#addProjectButton");
const closePopUpBtn = document.querySelector("#closePopUpButton");
const closeToDoBtn = document.querySelector("#closeToDoButton");
const popUpName = document.querySelector("#popUpName");
const addTaskBtn = document.querySelector("#addTask");
const todoForm = document.querySelector(".todoForm");
const projectOption = document.getElementById("todoProject");
const todoFormName = document.querySelector("#todoFormName");
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
// console.log() 
  // if(addTodoButton.id==="editTask"){
  //   addTodoButton.id = "addTodoButton";
  // }
  todoInputTask.value = "";
  const resetAddTodo = document.querySelector("#editTask");
  if (resetAddTodo === null) {
    console.log(todoFormName.textContent);
  } else {
    resetAddTodo.id = "addTodoButton";
    resetAddTodo.value = "Add Task";
    todoFormName.textContent = "Add Task";
  }
  todoInputTask.value = "";
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
  newProjectBtn.addEventListener("click", function () {
    const btnFunction = this;
    handleClickProject(btnFunction);
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
  for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr.length; i++) {
    localStorage.setItem("projects", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr));
    const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i];
    const currentProjectId = currentProject.id;
    for (let j = 0; j < _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].tasks.length; j++) {
      if (
        Date.parse(_todo__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskDate(currentProjectId, j)) ===
        Date.parse(todayDate)
      ) {
        console.log("");
        const todoItem = document.createElement("li");
        const todoDiv = document.createElement("div");
        todoDiv.className = "todoDiv";
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
        todoDiv.appendChild(todoItem);
        todoList.appendChild(todoDiv);
        const actionDiv = document.createElement("div");
        actionDiv.className = "actionDiv";

        const edit = document.createElement("span");
        edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
        edit.className = "edit";
        actionDiv.appendChild(edit);
        const close = document.createElement("span");
        close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        close.className = "close";
        actionDiv.appendChild(close);
        todoDiv.appendChild(actionDiv);

        const toDoListItems = document.getElementsByClassName("listItem");
        const deleteListItemBtn = document.getElementsByClassName("close");
        for (let k = 0; k < toDoListItems.length; k++) {
          const toDo = toDoListItems[k];
          const todoClass = toDo.classList[1];
          const toDoId = getNumberFromClass(todoClass);
          const projectId = getNumberFromClass(toDo.classList[0]);
          // delete task
          deleteListItemBtn[k].onclick = () => {
            deleteTask(toDoId, projectId);
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
              completeTask(toDoId, projectId);
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
    projectSpanEdit.addEventListener("click", function () {
      const btnFunction = this;
      handleClickProject(btnFunction, i);
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
  AddProjectBtn.textContent = "Add";
  AddProjectBtn.id = "addProjectButton";
  document.getElementById("projectMenu").innerHTML = "";
  loadPage();
}
function handleClickProject(btnFunction, id) {
  console.log(btnFunction);
  blurrPage(formPopUp, todoForm);
  AddProjectBtn.value = "Add Project";
  if (btnFunction.id === "addNewProject") {
    console.log(btnFunction.id);
    projectInput.value = "";
    popUpName.textContent = "New project";
    AddProjectBtn.className = "addProject";
    AddProjectBtn.addEventListener(
      "click",
      () => {
        addProject();
      },
      { once: true }
    );
  } else if (btnFunction.className === "editIcon") {
    console.log(btnFunction.className);
    projectInput.value = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[id].title;
    projectInput.id = id;
    popUpName.textContent = "Edit project";
    AddProjectBtn.value = "Edit Project";
    AddProjectBtn.className = "editProject";
    AddProjectBtn.addEventListener(
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
  event.preventDefault();
  form.style.display = "none";
  mainContainer.classList.remove("blurr");
  document.querySelector(".todoList").style.display = "block";
}
closeToDoBtn.addEventListener("click", () => {
  event.preventDefault();
  removeBlurr(todoForm);
});

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
  // console.log(typeof activeProjectName);
  if (typeof activeProject != "undefined") {
    const activeProjectName = activeProject.title;

    projectName.data = activeProjectName;
    projectName.id = activeProject.id;
    todoList.innerHTML = "";

    // showing options for select in att task
    const numberOfProjects = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr.length;
    const numberOfOptions = document.getElementsByTagName("option");

    while (projectOption.firstChild) {
      projectOption.removeChild(projectOption.firstChild);
    }
    const activeProjectOption = document.createElement("option");
    activeProjectOption.value = activeProject.title;
    activeProjectOption.text = activeProject.title;
    activeProjectOption.id = activeProject.id;
    activeProjectOption.selected = true;
    projectOption.appendChild(activeProjectOption);

    for (let i = 0; i < numberOfProjects; i++) {
      const project = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i];
      if (project.id !== activeProject.id) {
        const option = document.createElement("option");
        option.value = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].title;
        option.text = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].title;
        option.id = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[i].id;
        option.disabled = true;
        projectOption.appendChild(option);
      }
    }

    //loading tasks from project array
    for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[index].tasks.length; i++) {
      const todoItem = document.createElement("li");
      const todoDiv = document.createElement("div");
      todoItem.id = i;
      todoDiv.className = "todoDiv";
      const isChecked = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[index].tasks[i].completed;
      const check = document.createElement("span");
      if (isChecked) {
        todoItem.className = "checked";
        check.innerHTML = '<i class="fa-regular fa-square-check"></i>';
      } else {
        check.innerHTML = '<i class="fa-regular fa-square"></i>';
        todoItem.className = "check";
      }
      // const todoDateData = projects.projectArr[index].tasks[i].dueDate;
      // const todoDateP = document.createElement("p");
      // todoDateP.append(todoDateData);
      // console.log(( todoDate))
      // todoItem.appendChild(todoDateP);
      todoItem.classList.add("listItem");
      const todoItemtText = document.createTextNode(
        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[index].tasks[i].title
      );
      todoItem.appendChild(check);
      todoItem.appendChild(todoItemtText);
      todoDiv.appendChild(todoItem);
      todoList.appendChild(todoDiv);
      // todoList.appendChild(todoItem);
      const actionDiv = document.createElement("div");
      actionDiv.className = "actionDiv";

      const edit = document.createElement("span");
      edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
      edit.className = "edit";
      actionDiv.appendChild(edit);

      const close = document.createElement("span");
      close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      close.className = "close";
      actionDiv.appendChild(close);
      // todoItem.appendChild(actionDiv);
      todoDiv.appendChild(actionDiv);

      //completing task
      const checkListItems = document.getElementsByClassName("listItem");
      for (let i = 0; i < checkListItems.length; i++) {
        checkListItems[i].onclick = () => {
          const checkedItem = checkListItems[i];

          if (checkedItem.classList.contains("checked")) {
            _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[activeProject.id].tasks[i].completed = false;
            checkedItem.className = "check";
            loadTasks(activeProject.id);
          } else {
            completeTask(i, activeProject.id);
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
          deleteTask(i, activeProject.id);
          loadTasks(activeProject.id);
        };
      }
      // editing task
      const editListItem = document.getElementsByClassName("edit");
      for (let i = 0; i < editListItem.length; i++) {
        editListItem[i].onclick = function () {
          // addTodoButton.removeEventListener("click", handleClickTodo )
          const btnFunction = this;
          addTodoButton.value = "Edit Task";
          addTodoButton.id = "editTask";
          todoFormName.innerHTML = "Edit Task";
          const taskDueDate = _todo__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskDate(activeProject.id,i)
          // console.log(taskDueDate)
          todoInputDate.value = taskDueDate;

          handleClickTodo(btnFunction, i, activeProject);
          // editTask(activeProject.id, i);
        };
      }
    }
  } else {
    showTodayTaks();
  }
}

addTodoButton.addEventListener("click", function () {
  const btnFunction = this;
  // todoFormName.textContent = "New Task";
  // addTodoButton.id = "addTodoButton";
  console.log(btnFunction);
  
  handleClickTodo(btnFunction);
});
function handleClickTodo(btnFunction, id, activeProject) {
  event.preventDefault();
  if (btnFunction.id === "addTodoButton") {
    // todoInputTask.value = "Add Task";
    if (todoInputTask.value === "") {
      console.log("dont");
    } else {
      addListItem();
      removeBlurr(todoForm);
      loadTasks(projectName.id);
    }
  } else if (btnFunction.className === "edit") {
    blurrPage(todoForm, formPopUp);
    for (let i = 0; i < projectOption.length; i++) {
      projectOption[i].disabled = false;
    }
    console.log("here")
    editTask(activeProject.id, id);
  }
  
}
// todoInputTask.value = "";

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
  // document.getElementById("todoInput").value = "";
  loadTasks(todoProject);
}
//edit task
function editTask(projectId, taskId) {
  event.preventDefault();
  blurrPage(todoForm, formPopUp);
  todoInputTask.value = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectArr[projectId].tasks[taskId].title;
  todoInputDate.value = _todo__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskDate(projectId, taskId);

  // console.log(todoFormName)
  const editTodoButton = document.querySelector("#editTask");
  editTodoButton.addEventListener(
    "click",
    () => {
      const newTodoTitle = todoInputTask.value;
      const newTodoFullDate = new Date(todoInputDate.value);
      const newTodoDate = new Date(
        newTodoFullDate.getFullYear(),
        newTodoFullDate.getMonth(),
        newTodoFullDate.getDate()
      );
      // console.log(newTodoDate);
      const selectedOption = projectOption.options[projectOption.selectedIndex];
      // console.log(selectedOption.id);
      _todo__WEBPACK_IMPORTED_MODULE_2__["default"].editTask(
        projectId,
        taskId,
        newTodoTitle,
        newTodoDate,
        selectedOption.id
      );
      loadTasks(selectedOption.id);
      removeBlurr(todoForm);
    },
    { once: true }
  );
}
//delete task from project
function deleteTask(taskIndex, projectId) {
  _todo__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(projectId, taskIndex);
  // loadTasks(projectId);
}
function completeTask(taskIndex, projectId) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0ZBQWtGLFVBQVUsVUFBVSxLQUFLLEtBQUssT0FBTyxhQUFhLFlBQVksS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLGdCQUFnQixNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxTQUFTLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVks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QUFDQSxFQUFFLDZDQUFJO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW50b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGludG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW50b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL29kaW50b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW50b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGludG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2RpbnRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXHJcbmJvZHksXHJcbm1haW4ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLyogLnBvcFVwSGVhZGVyIHtcclxuICAvKiBwYWRkaW5nOiA1cHg7ICovXHJcbi8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4vKiB9XHJcblxyXG4vKiAjcG9wVXAge1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59ICovXHJcbi5wb3BVcEZvcm0sIC50b2RvRm9ybSB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTljMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGRlNjtcclxuXHJcbiAgLyogLyogZGlzcGxheTogbm9uZTsgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMjAlO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xyXG4gIC8qXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzU5OTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggIzcwNzU5OTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7ICovXHJcbn1cclxuIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiAjMjIyMjNiO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTljMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGRlNjtcclxuICBjb2xvcjogIzIyMjIzYjtcclxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbn1cclxuLyogI3BvcFVwSW5wdXQgW3R5cGU9XCJ0ZXh0XCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjN2Q4MmEyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZGU2O1xyXG4gIGNvbG9yOiAjNGE0ZTY5OyBcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzU5OTtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhNGU2OTsgXHJcbn0gKi9cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZDgyYTI7XHJcbiAgY2FyZXQtY29sb3I6ICM3ZDgyYTI7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRlNjk7XHJcbiAgY29sb3I6ICNkYmRkZTY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcbi5idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGVuZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWFyZ2luOiA2cHg7XHJcbn1cclxuI2Nsb3NlUG9wVXBCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmE5YzA7XHJcbn1cclxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTY2NGZjMztcclxufVxyXG4jYWRkUHJvamVjdEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjU0ZjtcclxufVxyXG5cclxuLm1haW5Db250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbm5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGU2OTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubWVudSB7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3NTk5O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cclxufVxyXG4uZWRpdEljb246aG92ZXIsXHJcbi5kZWxldGVJY29uOmhvdmVyIHtcclxuICBjb2xvcjogI2RiZGRlNjtcclxufVxyXG4uZWRpdEljb24sXHJcbi5kZWxldGVJY29uIHtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG4ubWVudSBwLFxyXG4ubWVudSBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWVudSBwOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q4MmEyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi8qIC5tZW51IGRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAqL1xyXG4ubWVudSBkaXY6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5ibHVyciB7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4udG9kbyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZGU2O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uY2hlY2tlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuLnRvZG9MaXN0IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuI3RvZG9MaXN0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4udG9kb0RpdiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1ib3R0b206ICM0YTRlNjkgMXB4IHNvbGlkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiN0b2RvTGlzdCBsaXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5tYXJrRGl2IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2FkZFRhc2sge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7b0JBQ29CO0FBQ3BCLHVCQUF1QjtBQUN2Qjs7Ozs7OztHQU9HO0FBQ0g7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5Qjs7RUFFekIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDViw4QkFBOEI7RUFDOUI7Ozs7Ozs7O3NCQVFvQjtBQUN0QjtDQUNDO0VBQ0MsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7Ozs7Ozs7Ozs7OztHQVlHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixlQUFlO0VBQ2Y7OzZCQUUyQjtBQUM3QjtBQUNBOztFQUVFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFDQTs7Ozs7R0FLRztBQUNIO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxyXFxuYm9keSxcXHJcXG5tYWluIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLyogLnBvcFVwSGVhZGVyIHtcXHJcXG4gIC8qIHBhZGRpbmc6IDVweDsgKi9cXHJcXG4vKiBmb250LXdlaWdodDogYm9sZDsgKi9cXHJcXG4vKiB9XFxyXFxuXFxyXFxuLyogI3BvcFVwIHtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn0gKi9cXHJcXG4ucG9wVXBGb3JtLCAudG9kb0Zvcm0ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTljMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRkZTY7XFxyXFxuXFxyXFxuICAvKiAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiAyMCU7XFxyXFxuICB6LWluZGV4OiA5O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xcclxcbiAgLypcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDc1OTk7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggIzcwNzU5OTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7ICovXFxyXFxufVxcclxcbiBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBjb2xvcjogIzIyMjIzYjtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTljMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRkZTY7XFxyXFxuICBjb2xvcjogIzIyMjIzYjtcXHJcXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cXHJcXG59XFxyXFxuLyogI3BvcFVwSW5wdXQgW3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjN2Q4MmEyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGRlNjtcXHJcXG4gIGNvbG9yOiAjNGE0ZTY5OyBcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3NTk5O1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGE0ZTY5OyBcXHJcXG59ICovXFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZDgyYTI7XFxyXFxuICBjYXJldC1jb2xvcjogIzdkODJhMjtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0ZTY5O1xcclxcbiAgY29sb3I6ICNkYmRkZTY7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG59XFxyXFxuLmJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogZW5kO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luOiA2cHg7XFxyXFxufVxcclxcbiNjbG9zZVBvcFVwQnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmE5YzA7XFxyXFxufVxcclxcbiNhZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTY2NGZjMztcXHJcXG59XFxyXFxuI2FkZFByb2plY3RCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjU0ZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5Db250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRlNjk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3NTk5O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxyXFxufVxcclxcbi5lZGl0SWNvbjpob3ZlcixcXHJcXG4uZGVsZXRlSWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogI2RiZGRlNjtcXHJcXG59XFxyXFxuLmVkaXRJY29uLFxcclxcbi5kZWxldGVJY29uIHtcXHJcXG4gIG1hcmdpbjogMnB4O1xcclxcbn1cXHJcXG4ubWVudSBwLFxcclxcbi5tZW51IGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tZW51IHA6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkODJhMjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKiAubWVudSBkaXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59ICovXFxyXFxuLm1lbnUgZGl2OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uYmx1cnIge1xcclxcbiAgb3BhY2l0eTogMC4zO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGRlNjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLnRvZG9MaXN0IHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuI3RvZG9MaXN0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi50b2RvRGl2IHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206ICM0YTRlNjkgMXB4IHNvbGlkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuI3RvZG9MaXN0IGxpe1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tYXJrRGl2IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI2FkZFRhc2sge1xcclxcbiAgcGFkZGluZy10b3A6IDVweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcclxuICBsZXQgcHJvamVjdEFyciA9IFtdO1xyXG4gIGxldCBwcm9qSWQ7XHJcbiAgbGV0IGN1cnJJZCA9MDtcclxuICBcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKT09PW51bGwpe1xyXG4gIHByb2plY3RBcnIgPSBbXHJcblxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJJbmJveFwiLFxyXG4gICAgICBpZDogMCxcclxuICAgICAgdGFza3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJ0YXNrMVwiLFxyXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIHByb2plY3RJRDogMCxcclxuICAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKCcyMDI0LTMtNicpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHcm9jZXJpZXNcIixcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiYXBwbGVzXCIsXHJcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgcHJvamVjdElEOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwibWVhdFwiLFxyXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIHByb2plY3RJRDogMSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcbmVsc2Uge1xyXG4gIGNvbnN0IHN0b3JyZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbiAgcHJvamVjdEFyciA9IHN0b3JyZWRQcm9qZWN0cztcclxufVxyXG4gIFxyXG4gIGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICBwcm9qSWQgPSBwcm9qZWN0QXJyLmxlbmd0aDtcclxuICAgICAgY3VycklkID0gcHJvaklkO1xyXG4gICAgICB0aGlzLmlkID0gY3VycklkO1xyXG4gICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XHJcbiAgICBwcm9qZWN0QXJyLnB1c2gocHJvamVjdCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGluZGV4LHRpdGxlKXtcclxuICAgIHByb2plY3RBcnJbaW5kZXhdLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGluZGV4KXtcclxuICAgIHByb2plY3RBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9qZWN0QXJyLFxyXG4gICAgYWRkUHJvamVjdCxcclxuICAgIGVkaXRQcm9qZWN0LFxyXG4gICAgZGVsZXRlUHJvamVjdCxcclxuICB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcclxuIiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG4vLyBsZXQgdGFza0lEID0gMDtcclxuY29uc3QgdG9EbyA9ICgoKSA9PiB7XHJcbiAgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29tcGxldGVkLCBwcm9qZWN0SUQsIGR1ZURhdGUpIHtcclxuICAgIC8vICAgdGhpcy5pZCA9IHRhc2tJRDtcclxuICAgIC8vICAgdGFza0lEICsrO1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkVGFzayh0aXRsZSwgcHJvamVjdElELCBkdWVEYXRlKSB7XHJcbiAgICAvLyBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRpdGxlO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGZhbHNlLCBwcm9qZWN0SUQsIGR1ZURhdGUpO1xyXG4gICAgXHJcblxyXG4gICAgcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGVkaXRUYXNrKHByb2plY3RJRCx0YXNrSUQsdGl0bGUsZHVlRGF0ZSxuZXdwcm9qZWN0SUQpe1xyXG4gICAgbGV0IGN1cnJQcm9qZWN0XHJcbiAgICBsZXQgY3VyclRhc2sgXHJcbiAgICBpZihwcm9qZWN0SUQ9PW5ld3Byb2plY3RJRCl7XHJcbiAgICAgIGN1cnJUYXNrID0gcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRhc2tzW3Rhc2tJRF07XHJcbiAgICAgIGN1cnJUYXNrLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIGN1cnJUYXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzLnByb2plY3RBcnIpKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY3VyclByb2plY3QgPSBwcm9qZWN0cy5wcm9qZWN0QXJyW25ld3Byb2plY3RJRF07XHJcbiAgICAgIGRlbGV0ZVRhc2socHJvamVjdElELHRhc2tJRCk7XHJcbiAgICAgIGFkZFRhc2sodGl0bGUsbmV3cHJvamVjdElELGR1ZURhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3RJRCwgdGFza0lEKSB7XHJcbiAgICBwcm9qZWN0cy5wcm9qZWN0QXJyW3Byb2plY3RJRF0udGFza3Muc3BsaWNlKHRhc2tJRCwgMSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNvbXBsZXRlVGFzayhwcm9qZWN0SUQsIHRhc2tJRCkge1xyXG4gICAgcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SURdLnRhc2tzW3Rhc2tJRF0uY29tcGxldGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZ2V0VGFza0RhdGUocHJvamVjdElELCB0YXNrSUQpIHtcclxuICAgIHJldHVybiBwcm9qZWN0cy5wcm9qZWN0QXJyW3Byb2plY3RJRF0udGFza3NbdGFza0lEXS5kdWVEYXRlO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0VGFza0RhdGUsXHJcbiAgICBhZGRUYXNrLFxyXG4gICAgZGVsZXRlVGFzayxcclxuICAgIGNvbXBsZXRlVGFzayxcclxuICAgIGVkaXRUYXNrXHJcbiAgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgdG9EbztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB0b0RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvZG9CdXR0b25cIik7XHJcbmNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvTGlzdFwiKTtcclxuY29uc3QgdG9kb0lucHV0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0lucHV0XCIpO1xyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG5jb25zdCB0b2RvSW5wdXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIik7XHJcbmNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKS5maXJzdENoaWxkO1xyXG5jb25zdCBmb3JtUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwRm9ybVwiKTtcclxuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0SW5wdXRcIik7XHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250YWluZXJcIik7XHJcbmNvbnN0IGRpdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RNZW51XCIpO1xyXG5jb25zdCBBZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0QnV0dG9uXCIpO1xyXG5jb25zdCBjbG9zZVBvcFVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZVBvcFVwQnV0dG9uXCIpO1xyXG5jb25zdCBjbG9zZVRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlVG9Eb0J1dHRvblwiKTtcclxuY29uc3QgcG9wVXBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3BVcE5hbWVcIik7XHJcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRhc2tcIik7XHJcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvRm9ybVwiKTtcclxuY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb1Byb2plY3RcIik7XHJcbmNvbnN0IHRvZG9Gb3JtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0Zvcm1OYW1lXCIpO1xyXG5jb25zdCB0b2RheUZ1bGxEYXRlID0gbmV3IERhdGUoKTtcclxuY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoXHJcbiAgdG9kYXlGdWxsRGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gIHRvZGF5RnVsbERhdGUuZ2V0TW9udGgoKSxcclxuICB0b2RheUZ1bGxEYXRlLmdldERhdGUoKVxyXG4pO1xyXG4vL3NldCB0b2RheSBkYXRlIHRvIGlucHV0XHJcbi8vIHRvZG9JbnB1dERhdGUudmFsdWVBc0RhdGUgPSB0b2RheURhdGU7XHJcblxyXG4vL2JsdXJyIHBhZ2VcclxuZnVuY3Rpb24gYmx1cnJQYWdlKGZvcm1TaG93LCBmb3JtSGlkZSkge1xyXG4gIGZvcm1TaG93LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYmx1cnJcIik7XHJcbiAgZm9ybUhpZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcbmFkZFRhc2tCdG4ub25jbGljayA9ICgpID0+IHtcclxuICBibHVyclBhZ2UodG9kb0Zvcm0sIGZvcm1Qb3BVcCk7XHJcbi8vIGNvbnNvbGUubG9nKCkgXHJcbiAgLy8gaWYoYWRkVG9kb0J1dHRvbi5pZD09PVwiZWRpdFRhc2tcIil7XHJcbiAgLy8gICBhZGRUb2RvQnV0dG9uLmlkID0gXCJhZGRUb2RvQnV0dG9uXCI7XHJcbiAgLy8gfVxyXG4gIHRvZG9JbnB1dFRhc2sudmFsdWUgPSBcIlwiO1xyXG4gIGNvbnN0IHJlc2V0QWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdFRhc2tcIik7XHJcbiAgaWYgKHJlc2V0QWRkVG9kbyA9PT0gbnVsbCkge1xyXG4gICAgY29uc29sZS5sb2codG9kb0Zvcm1OYW1lLnRleHRDb250ZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzZXRBZGRUb2RvLmlkID0gXCJhZGRUb2RvQnV0dG9uXCI7XHJcbiAgICByZXNldEFkZFRvZG8udmFsdWUgPSBcIkFkZCBUYXNrXCI7XHJcbiAgICB0b2RvRm9ybU5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XHJcbiAgfVxyXG4gIHRvZG9JbnB1dFRhc2sudmFsdWUgPSBcIlwiO1xyXG59O1xyXG5cclxuLy9sb2FkIHBhZ2VcclxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XHJcbiAgY29uc3QgdG9kYXlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdG9kYXlQLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gIHRvZGF5UC5pZCA9IFwidG9kYXlcIjtcclxuICBkaXZNZW51LmFwcGVuZENoaWxkKHRvZGF5UCk7XHJcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5XCIpO1xyXG5cclxuICBsb2FkUHJvamVjdHMoKTtcclxuICBmb3JtUG9wVXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIC8vYWRkIG5ldyBwcm9qZWN0IGJ1dHRvblxyXG4gIGNvbnN0IGFkZE5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFkZE5ld1Byb2plY3REaXYuaWQgPSBcImFkZE5ld1Byb2plY3RcIjtcclxuICBhZGROZXdQcm9qZWN0RGl2LmlubmVySFRNTCA9XHJcbiAgICBcIk5ldyBQcm9qZWN0IFwiICsgJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT4nO1xyXG4gIGRpdk1lbnUuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdERpdik7XHJcbiAgY29uc3QgcHJvamVjdENvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdHNcIik7XHJcbiAgLy9uZXcgUHJvamVjdCBwb3BVcCBjbGljayBldmVudFxyXG4gIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZE5ld1Byb2plY3RcIik7XHJcbiAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYnRuRnVuY3Rpb24gPSB0aGlzO1xyXG4gICAgaGFuZGxlQ2xpY2tQcm9qZWN0KGJ0bkZ1bmN0aW9uKTtcclxuICB9KTtcclxuICAvL2xvYWQgdGFza3MgZm9yIHByb2plY3RcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RDb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwcm9qZWN0Q29sbGVjdGlvbltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBsb2FkVGFza3MoaSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRUYXNrcygwKTtcclxuXHJcbiAgdG9kYXkub25jbGljayA9ICgpID0+IHtcclxuICAgIHNob3dUb2RheVRha3MoKTtcclxuICAgIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gc2hvd1RvZGF5VGFrcygpIHtcclxuICBwcm9qZWN0TmFtZS5kYXRhID0gXCJUb2RheVwiO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Zvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIHRvZG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5wcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzLnByb2plY3RBcnIpKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMucHJvamVjdEFycltpXTtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZDtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHMucHJvamVjdEFycltpXS50YXNrcy5sZW5ndGg7IGorKykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgRGF0ZS5wYXJzZSh0b0RvLmdldFRhc2tEYXRlKGN1cnJlbnRQcm9qZWN0SWQsIGopKSA9PT1cclxuICAgICAgICBEYXRlLnBhcnNlKHRvZGF5RGF0ZSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJcIik7XHJcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdG9kb0Rpdi5jbGFzc05hbWUgPSBcInRvZG9EaXZcIjtcclxuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKGN1cnJlbnRQcm9qZWN0LnRpdGxlICsgaSk7XHJcbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcIlRhc2tJZFwiICsgaik7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSBjdXJyZW50UHJvamVjdC50YXNrc1tqXS5jb21wbGV0ZWQ7XHJcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XHJcbiAgICAgICAgICBjaGVjay5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXNxdWFyZS1jaGVja1wiPjwvaT4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaGVjay5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXNxdWFyZVwiPjwvaT4nO1xyXG4gICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcImNoZWNrXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdEl0ZW1cIik7XHJcbiAgICAgICAgY29uc3QgdG9kb0l0ZW10VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxyXG4gICAgICAgICAgY3VycmVudFByb2plY3QudGFza3Nbal0udGl0bGVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChjaGVjayk7XHJcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0l0ZW10VGV4dCk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XHJcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBhY3Rpb25EaXYuY2xhc3NOYW1lID0gXCJhY3Rpb25EaXZcIjtcclxuXHJcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGVkaXQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuXCI+PC9pPic7XHJcbiAgICAgICAgZWRpdC5jbGFzc05hbWUgPSBcImVkaXRcIjtcclxuICAgICAgICBhY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZWRpdCk7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT4nO1xyXG4gICAgICAgIGNsb3NlLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcclxuICAgICAgICBhY3Rpb25EaXYuYXBwZW5kQ2hpbGQoY2xvc2UpO1xyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoYWN0aW9uRGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9Eb0xpc3RJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0SXRlbVwiKTtcclxuICAgICAgICBjb25zdCBkZWxldGVMaXN0SXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKTtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRvRG9MaXN0SXRlbXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgIGNvbnN0IHRvRG8gPSB0b0RvTGlzdEl0ZW1zW2tdO1xyXG4gICAgICAgICAgY29uc3QgdG9kb0NsYXNzID0gdG9Eby5jbGFzc0xpc3RbMV07XHJcbiAgICAgICAgICBjb25zdCB0b0RvSWQgPSBnZXROdW1iZXJGcm9tQ2xhc3ModG9kb0NsYXNzKTtcclxuICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGdldE51bWJlckZyb21DbGFzcyh0b0RvLmNsYXNzTGlzdFswXSk7XHJcbiAgICAgICAgICAvLyBkZWxldGUgdGFza1xyXG4gICAgICAgICAgZGVsZXRlTGlzdEl0ZW1CdG5ba10ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlVGFzayh0b0RvSWQsIHByb2plY3RJZCk7XHJcbiAgICAgICAgICAgIHNob3dUb2RheVRha3MoKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICAvL2NvbXBsZXRpbmcgdGFza1xyXG4gICAgICAgICAgdG9Eb0xpc3RJdGVtc1trXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodG9Eby5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja2VkXCIpKSB7XHJcbiAgICAgICAgICAgICAgdG9Eby5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXNxdWFyZVwiPjwvaT4nO1xyXG4gICAgICAgICAgICAgIHByb2plY3RzLnByb2plY3RBcnJbcHJvamVjdElkXS50YXNrc1t0b0RvSWRdLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRvRG8uY2xhc3NMaXN0LmFkZChcImNoZWNrXCIpO1xyXG4gICAgICAgICAgICAgIHRvRG8uY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29tcGxldGVUYXNrKHRvRG9JZCwgcHJvamVjdElkKTtcclxuICAgICAgICAgICAgICB0b0RvLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtc3F1YXJlLWNoZWNrXCI+PC9pPic7XHJcbiAgICAgICAgICAgICAgdG9Eby5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgICB0b0RvLmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0TnVtYmVyRnJvbUNsYXNzKGNsYXNzTmFtZSkge1xyXG4gIGNvbnN0IG51bWJlclJlZ2V4ID0gL1xcZCsvO1xyXG4gIGNvbnN0IG1hdGNoID0gY2xhc3NOYW1lLm1hdGNoKG51bWJlclJlZ2V4KTtcclxuICBpZiAobWF0Y2gpIHtcclxuICAgIHJldHVybiBwYXJzZUludChtYXRjaFswXSwgMTApO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLy9sb2FkIHByb2plY3RzXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzLnByb2plY3RBcnIpKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLnByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vY3JlYXRpbmcgcHJvamVjdHMgbGlzdFxyXG4gICAgY29uc3QgcHJvamVjdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHByb2plY3RQLnRleHRDb250ZW50ID0gcHJvamVjdHMucHJvamVjdEFycltpXS50aXRsZTtcclxuICAgIHByb2plY3RQLmlkID0gaTtcclxuICAgIHByb2plY3RQLmNsYXNzTmFtZSA9IFwicHJvamVjdHNcIjtcclxuICAgIC8vIGVkaXQgcHJvamVjdCBidXR0b25cclxuICAgIGNvbnN0IHByb2plY3RTcGFuRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcHJvamVjdFNwYW5FZGl0LmNsYXNzTmFtZSA9IFwiZWRpdEljb25cIjtcclxuICAgIGNvbnN0IHByb2plY3RJRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgcHJvamVjdFNwYW5FZGl0LmFwcGVuZENoaWxkKHByb2plY3RJRWRpdCk7XHJcbiAgICBwcm9qZWN0SUVkaXQuY2xhc3NOYW1lID0gXCJmYS1zb2xpZCBmYS1wZW4tdG8tc3F1YXJlXCI7XHJcblxyXG4gICAgLy9kZWxldGUgcHJvamVjdCBidXR0b25cclxuICAgIGNvbnN0IHByb2plY3RTcGFuRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcm9qZWN0U3BhbkRlbGV0ZS5jbGFzc05hbWUgPSBcImRlbGV0ZUljb25cIjtcclxuICAgIGNvbnN0IHByb2plY3RJRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBwcm9qZWN0U3BhbkRlbGV0ZS5hcHBlbmRDaGlsZChwcm9qZWN0SURlbGV0ZSk7XHJcbiAgICBwcm9qZWN0SURlbGV0ZS5jbGFzc05hbWUgPSBcImZhLXNvbGlkIGZhLXRyYXNoXCI7XHJcblxyXG4gICAgcHJvamVjdFAuYXBwZW5kKHByb2plY3RTcGFuRWRpdCwgcHJvamVjdFNwYW5EZWxldGUpO1xyXG4gICAgZGl2TWVudS5hcHBlbmRDaGlsZChwcm9qZWN0UCk7XHJcblxyXG4gICAgLy9lZGl0IHByb2plY3RcclxuICAgIHByb2plY3RTcGFuRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBidG5GdW5jdGlvbiA9IHRoaXM7XHJcbiAgICAgIGhhbmRsZUNsaWNrUHJvamVjdChidG5GdW5jdGlvbiwgaSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2RlbGV0ZSBwcm9qZWN0XHJcbiAgICBwcm9qZWN0U3BhbkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkZWxldGVQcm9qZWN0KGkpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RNZW51XCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIGxvYWRQYWdlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxubG9hZFBhZ2UoKTtcclxuXHJcbi8vY2xvc2UgcG9wdXBcclxuZnVuY3Rpb24gY2xvc2VQb3BVcCgpIHtcclxuICBmb3JtUG9wVXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJyXCIpO1xyXG4gIEFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xyXG4gIEFkZFByb2plY3RCdG4uaWQgPSBcImFkZFByb2plY3RCdXR0b25cIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RNZW51XCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbG9hZFBhZ2UoKTtcclxufVxyXG5mdW5jdGlvbiBoYW5kbGVDbGlja1Byb2plY3QoYnRuRnVuY3Rpb24sIGlkKSB7XHJcbiAgY29uc29sZS5sb2coYnRuRnVuY3Rpb24pO1xyXG4gIGJsdXJyUGFnZShmb3JtUG9wVXAsIHRvZG9Gb3JtKTtcclxuICBBZGRQcm9qZWN0QnRuLnZhbHVlID0gXCJBZGQgUHJvamVjdFwiO1xyXG4gIGlmIChidG5GdW5jdGlvbi5pZCA9PT0gXCJhZGROZXdQcm9qZWN0XCIpIHtcclxuICAgIGNvbnNvbGUubG9nKGJ0bkZ1bmN0aW9uLmlkKTtcclxuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBwb3BVcE5hbWUudGV4dENvbnRlbnQgPSBcIk5ldyBwcm9qZWN0XCI7XHJcbiAgICBBZGRQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwiYWRkUHJvamVjdFwiO1xyXG4gICAgQWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBhZGRQcm9qZWN0KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoYnRuRnVuY3Rpb24uY2xhc3NOYW1lID09PSBcImVkaXRJY29uXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKGJ0bkZ1bmN0aW9uLmNsYXNzTmFtZSk7XHJcbiAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBwcm9qZWN0cy5wcm9qZWN0QXJyW2lkXS50aXRsZTtcclxuICAgIHByb2plY3RJbnB1dC5pZCA9IGlkO1xyXG4gICAgcG9wVXBOYW1lLnRleHRDb250ZW50ID0gXCJFZGl0IHByb2plY3RcIjtcclxuICAgIEFkZFByb2plY3RCdG4udmFsdWUgPSBcIkVkaXQgUHJvamVjdFwiO1xyXG4gICAgQWRkUHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcImVkaXRQcm9qZWN0XCI7XHJcbiAgICBBZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZWRpdFByb2plY3QocHJvamVjdElucHV0LmlkKTtcclxuICAgICAgfSxcclxuICAgICAgeyBvbmNlOiB0cnVlIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jbG9zZVBvcFVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY2xvc2VQb3BVcCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJsdXJyKGZvcm0pIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJyXCIpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0xpc3RcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufVxyXG5jbG9zZVRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHJlbW92ZUJsdXJyKHRvZG9Gb3JtKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvamVjdChpbmRleCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcHJvamVjdHMuZWRpdFByb2plY3QoaW5kZXgsIHByb2plY3RJbnB1dC52YWx1ZSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TWVudVwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNsb3NlUG9wVXAoZm9ybVBvcFVwKTtcclxufVxyXG5cclxuLy9hZGQgbmV3IHByb2plY3Qgc2hvd2luZyBmb3JtXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAocHJvamVjdElucHV0LnZhbHVlLnRyaW0gPT09IFwiXCIpIHtcclxuICAgIGFsZXJ0KFwibm90IFZhbGlkIG5hbWVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE1lbnVcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJyXCIpO1xyXG4gIH1cclxuICBsb2FkUGFnZSgpO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaW5kZXgpIHtcclxuICBwcm9qZWN0cy5kZWxldGVQcm9qZWN0KGluZGV4KTtcclxufVxyXG5cclxuLy9sb2FkIHRhc2tzXHJcbmZ1bmN0aW9uIGxvYWRUYXNrcyhpbmRleCkge1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy5wcm9qZWN0QXJyKSk7XHJcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzLnByb2plY3RBcnJbaW5kZXhdO1xyXG4gIC8vIGNvbnNvbGUubG9nKHR5cGVvZiBhY3RpdmVQcm9qZWN0TmFtZSk7XHJcbiAgaWYgKHR5cGVvZiBhY3RpdmVQcm9qZWN0ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNvbnN0IGFjdGl2ZVByb2plY3ROYW1lID0gYWN0aXZlUHJvamVjdC50aXRsZTtcclxuXHJcbiAgICBwcm9qZWN0TmFtZS5kYXRhID0gYWN0aXZlUHJvamVjdE5hbWU7XHJcbiAgICBwcm9qZWN0TmFtZS5pZCA9IGFjdGl2ZVByb2plY3QuaWQ7XHJcbiAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIC8vIHNob3dpbmcgb3B0aW9ucyBmb3Igc2VsZWN0IGluIGF0dCB0YXNrXHJcbiAgICBjb25zdCBudW1iZXJPZlByb2plY3RzID0gcHJvamVjdHMucHJvamVjdEFyci5sZW5ndGg7XHJcbiAgICBjb25zdCBudW1iZXJPZk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKTtcclxuXHJcbiAgICB3aGlsZSAocHJvamVjdE9wdGlvbi5maXJzdENoaWxkKSB7XHJcbiAgICAgIHByb2plY3RPcHRpb24ucmVtb3ZlQ2hpbGQocHJvamVjdE9wdGlvbi5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFjdGl2ZVByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgYWN0aXZlUHJvamVjdE9wdGlvbi52YWx1ZSA9IGFjdGl2ZVByb2plY3QudGl0bGU7XHJcbiAgICBhY3RpdmVQcm9qZWN0T3B0aW9uLnRleHQgPSBhY3RpdmVQcm9qZWN0LnRpdGxlO1xyXG4gICAgYWN0aXZlUHJvamVjdE9wdGlvbi5pZCA9IGFjdGl2ZVByb2plY3QuaWQ7XHJcbiAgICBhY3RpdmVQcm9qZWN0T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHByb2plY3RPcHRpb24uYXBwZW5kQ2hpbGQoYWN0aXZlUHJvamVjdE9wdGlvbik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlByb2plY3RzOyBpKyspIHtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLnByb2plY3RBcnJbaV07XHJcbiAgICAgIGlmIChwcm9qZWN0LmlkICE9PSBhY3RpdmVQcm9qZWN0LmlkKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0cy5wcm9qZWN0QXJyW2ldLnRpdGxlO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdHMucHJvamVjdEFycltpXS50aXRsZTtcclxuICAgICAgICBvcHRpb24uaWQgPSBwcm9qZWN0cy5wcm9qZWN0QXJyW2ldLmlkO1xyXG4gICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcHJvamVjdE9wdGlvbi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb2FkaW5nIHRhc2tzIGZyb20gcHJvamVjdCBhcnJheVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5wcm9qZWN0QXJyW2luZGV4XS50YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRvZG9JdGVtLmlkID0gaTtcclxuICAgICAgdG9kb0Rpdi5jbGFzc05hbWUgPSBcInRvZG9EaXZcIjtcclxuICAgICAgY29uc3QgaXNDaGVja2VkID0gcHJvamVjdHMucHJvamVjdEFycltpbmRleF0udGFza3NbaV0uY29tcGxldGVkO1xyXG4gICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NOYW1lID0gXCJjaGVja2VkXCI7XHJcbiAgICAgICAgY2hlY2suaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zcXVhcmUtY2hlY2tcIj48L2k+JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjaGVjay5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXNxdWFyZVwiPjwvaT4nO1xyXG4gICAgICAgIHRvZG9JdGVtLmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcclxuICAgICAgfVxyXG4gICAgICAvLyBjb25zdCB0b2RvRGF0ZURhdGEgPSBwcm9qZWN0cy5wcm9qZWN0QXJyW2luZGV4XS50YXNrc1tpXS5kdWVEYXRlO1xyXG4gICAgICAvLyBjb25zdCB0b2RvRGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgLy8gdG9kb0RhdGVQLmFwcGVuZCh0b2RvRGF0ZURhdGEpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygoIHRvZG9EYXRlKSlcclxuICAgICAgLy8gdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0RhdGVQKTtcclxuICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcImxpc3RJdGVtXCIpO1xyXG4gICAgICBjb25zdCB0b2RvSXRlbXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXHJcbiAgICAgICAgcHJvamVjdHMucHJvamVjdEFycltpbmRleF0udGFza3NbaV0udGl0bGVcclxuICAgICAgKTtcclxuICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoY2hlY2spO1xyXG4gICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvSXRlbXRUZXh0KTtcclxuICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XHJcbiAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xyXG4gICAgICAvLyB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XHJcbiAgICAgIGNvbnN0IGFjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGFjdGlvbkRpdi5jbGFzc05hbWUgPSBcImFjdGlvbkRpdlwiO1xyXG5cclxuICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBlZGl0LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlblwiPjwvaT4nO1xyXG4gICAgICBlZGl0LmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xyXG4gICAgICBhY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZWRpdCk7XHJcblxyXG4gICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBjbG9zZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT4nO1xyXG4gICAgICBjbG9zZS5jbGFzc05hbWUgPSBcImNsb3NlXCI7XHJcbiAgICAgIGFjdGlvbkRpdi5hcHBlbmRDaGlsZChjbG9zZSk7XHJcbiAgICAgIC8vIHRvZG9JdGVtLmFwcGVuZENoaWxkKGFjdGlvbkRpdik7XHJcbiAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoYWN0aW9uRGl2KTtcclxuXHJcbiAgICAgIC8vY29tcGxldGluZyB0YXNrXHJcbiAgICAgIGNvbnN0IGNoZWNrTGlzdEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpc3RJdGVtXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrTGlzdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY2hlY2tMaXN0SXRlbXNbaV0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNoZWNrZWRJdGVtID0gY2hlY2tMaXN0SXRlbXNbaV07XHJcblxyXG4gICAgICAgICAgaWYgKGNoZWNrZWRJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWRcIikpIHtcclxuICAgICAgICAgICAgcHJvamVjdHMucHJvamVjdEFyclthY3RpdmVQcm9qZWN0LmlkXS50YXNrc1tpXS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2hlY2tlZEl0ZW0uY2xhc3NOYW1lID0gXCJjaGVja1wiO1xyXG4gICAgICAgICAgICBsb2FkVGFza3MoYWN0aXZlUHJvamVjdC5pZCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb21wbGV0ZVRhc2soaSwgYWN0aXZlUHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoZWNrZWRJdGVtKTtcclxuICAgICAgICAgICAgbG9hZFRhc2tzKGFjdGl2ZVByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICBjaGVja2VkSXRlbS5jbGFzc05hbWUgPSBcImNoZWNrZWRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGRlbGV0aW5nIHRhc2tcclxuICAgICAgY29uc3QgY2xvc2VMaXN0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xvc2VMaXN0SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjbG9zZUxpc3RJdGVtc1tpXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgZGVsZXRlVGFzayhpLCBhY3RpdmVQcm9qZWN0LmlkKTtcclxuICAgICAgICAgIGxvYWRUYXNrcyhhY3RpdmVQcm9qZWN0LmlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGVkaXRpbmcgdGFza1xyXG4gICAgICBjb25zdCBlZGl0TGlzdEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdFwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0TGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBlZGl0TGlzdEl0ZW1baV0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIGFkZFRvZG9CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrVG9kbyApXHJcbiAgICAgICAgICBjb25zdCBidG5GdW5jdGlvbiA9IHRoaXM7XHJcbiAgICAgICAgICBhZGRUb2RvQnV0dG9uLnZhbHVlID0gXCJFZGl0IFRhc2tcIjtcclxuICAgICAgICAgIGFkZFRvZG9CdXR0b24uaWQgPSBcImVkaXRUYXNrXCI7XHJcbiAgICAgICAgICB0b2RvRm9ybU5hbWUuaW5uZXJIVE1MID0gXCJFZGl0IFRhc2tcIjtcclxuICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdG9Eby5nZXRUYXNrRGF0ZShhY3RpdmVQcm9qZWN0LmlkLGkpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrRHVlRGF0ZSlcclxuICAgICAgICAgIHRvZG9JbnB1dERhdGUudmFsdWUgPSB0YXNrRHVlRGF0ZTtcclxuXHJcbiAgICAgICAgICBoYW5kbGVDbGlja1RvZG8oYnRuRnVuY3Rpb24sIGksIGFjdGl2ZVByb2plY3QpO1xyXG4gICAgICAgICAgLy8gZWRpdFRhc2soYWN0aXZlUHJvamVjdC5pZCwgaSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzaG93VG9kYXlUYWtzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5hZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgYnRuRnVuY3Rpb24gPSB0aGlzO1xyXG4gIC8vIHRvZG9Gb3JtTmFtZS50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2tcIjtcclxuICAvLyBhZGRUb2RvQnV0dG9uLmlkID0gXCJhZGRUb2RvQnV0dG9uXCI7XHJcbiAgY29uc29sZS5sb2coYnRuRnVuY3Rpb24pO1xyXG4gIFxyXG4gIGhhbmRsZUNsaWNrVG9kbyhidG5GdW5jdGlvbik7XHJcbn0pO1xyXG5mdW5jdGlvbiBoYW5kbGVDbGlja1RvZG8oYnRuRnVuY3Rpb24sIGlkLCBhY3RpdmVQcm9qZWN0KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoYnRuRnVuY3Rpb24uaWQgPT09IFwiYWRkVG9kb0J1dHRvblwiKSB7XHJcbiAgICAvLyB0b2RvSW5wdXRUYXNrLnZhbHVlID0gXCJBZGQgVGFza1wiO1xyXG4gICAgaWYgKHRvZG9JbnB1dFRhc2sudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJkb250XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkTGlzdEl0ZW0oKTtcclxuICAgICAgcmVtb3ZlQmx1cnIodG9kb0Zvcm0pO1xyXG4gICAgICBsb2FkVGFza3MocHJvamVjdE5hbWUuaWQpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoYnRuRnVuY3Rpb24uY2xhc3NOYW1lID09PSBcImVkaXRcIikge1xyXG4gICAgYmx1cnJQYWdlKHRvZG9Gb3JtLCBmb3JtUG9wVXApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0T3B0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHByb2plY3RPcHRpb25baV0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKVxyXG4gICAgZWRpdFRhc2soYWN0aXZlUHJvamVjdC5pZCwgaWQpO1xyXG4gIH1cclxuICBcclxufVxyXG4vLyB0b2RvSW5wdXRUYXNrLnZhbHVlID0gXCJcIjtcclxuXHJcbi8vYWRkIHRhc2sgdG8gcHJvamVjdFxyXG5mdW5jdGlvbiBhZGRMaXN0SXRlbSgpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRvZG9JbnB1dFRleHQgPSB0b2RvSW5wdXRUYXNrLnZhbHVlO1xyXG4gIGNvbnN0IHRvZG9JbnB1dERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZTtcclxuICBjb25zdCB0b2RvRHVlRnVsbERhdGUgPSBuZXcgRGF0ZSh0b2RvSW5wdXREYXRlKTtcclxuICBjb25zdCB0b2RvRHVlRGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgdG9kb0R1ZUZ1bGxEYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICB0b2RvRHVlRnVsbERhdGUuZ2V0TW9udGgoKSxcclxuICAgIHRvZG9EdWVGdWxsRGF0ZS5nZXREYXRlKClcclxuICApO1xyXG4gIGNvbnN0IHRvZG9Qcm9qZWN0ID0gcHJvamVjdE5hbWUuaWQ7XHJcbiAgdG9Eby5hZGRUYXNrKHRvZG9JbnB1dFRleHQsIHRvZG9Qcm9qZWN0LCB0b2RvRHVlRGF0ZSk7XHJcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvSW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG4gIGxvYWRUYXNrcyh0b2RvUHJvamVjdCk7XHJcbn1cclxuLy9lZGl0IHRhc2tcclxuZnVuY3Rpb24gZWRpdFRhc2socHJvamVjdElkLCB0YXNrSWQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGJsdXJyUGFnZSh0b2RvRm9ybSwgZm9ybVBvcFVwKTtcclxuICB0b2RvSW5wdXRUYXNrLnZhbHVlID0gcHJvamVjdHMucHJvamVjdEFycltwcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0udGl0bGU7XHJcbiAgdG9kb0lucHV0RGF0ZS52YWx1ZSA9IHRvRG8uZ2V0VGFza0RhdGUocHJvamVjdElkLCB0YXNrSWQpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyh0b2RvRm9ybU5hbWUpXHJcbiAgY29uc3QgZWRpdFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRUYXNrXCIpO1xyXG4gIGVkaXRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImNsaWNrXCIsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1RvZG9UaXRsZSA9IHRvZG9JbnB1dFRhc2sudmFsdWU7XHJcbiAgICAgIGNvbnN0IG5ld1RvZG9GdWxsRGF0ZSA9IG5ldyBEYXRlKHRvZG9JbnB1dERhdGUudmFsdWUpO1xyXG4gICAgICBjb25zdCBuZXdUb2RvRGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgIG5ld1RvZG9GdWxsRGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgIG5ld1RvZG9GdWxsRGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgIG5ld1RvZG9GdWxsRGF0ZS5nZXREYXRlKClcclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cobmV3VG9kb0RhdGUpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHByb2plY3RPcHRpb24ub3B0aW9uc1twcm9qZWN0T3B0aW9uLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZE9wdGlvbi5pZCk7XHJcbiAgICAgIHRvRG8uZWRpdFRhc2soXHJcbiAgICAgICAgcHJvamVjdElkLFxyXG4gICAgICAgIHRhc2tJZCxcclxuICAgICAgICBuZXdUb2RvVGl0bGUsXHJcbiAgICAgICAgbmV3VG9kb0RhdGUsXHJcbiAgICAgICAgc2VsZWN0ZWRPcHRpb24uaWRcclxuICAgICAgKTtcclxuICAgICAgbG9hZFRhc2tzKHNlbGVjdGVkT3B0aW9uLmlkKTtcclxuICAgICAgcmVtb3ZlQmx1cnIodG9kb0Zvcm0pO1xyXG4gICAgfSxcclxuICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgKTtcclxufVxyXG4vL2RlbGV0ZSB0YXNrIGZyb20gcHJvamVjdFxyXG5mdW5jdGlvbiBkZWxldGVUYXNrKHRhc2tJbmRleCwgcHJvamVjdElkKSB7XHJcbiAgdG9Eby5kZWxldGVUYXNrKHByb2plY3RJZCwgdGFza0luZGV4KTtcclxuICAvLyBsb2FkVGFza3MocHJvamVjdElkKTtcclxufVxyXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2sodGFza0luZGV4LCBwcm9qZWN0SWQpIHtcclxuICB0b0RvLmNvbXBsZXRlVGFzayhwcm9qZWN0SWQsIHRhc2tJbmRleCk7XHJcbn1cclxuXHJcbi8vaGlkZSBzaWRlIG1lbnVcclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RNZW51XCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==