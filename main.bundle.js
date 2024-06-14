(self["webpackChunkproject_tic_tac_toe"] = self["webpackChunkproject_tic_tac_toe"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/board.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/board.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `#board {
	display: grid;
	grid-template-columns: repeat(3, 60px);
	grid-template-rows: repeat(3, 60px);
}

.square {
	height: 60px;
	width: 60px;
	border: 1px solid lightgrey;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 4rem;
	cursor: pointer;

	background-color: white;
}

.square.active:hover {
	border: 3px solid orange;
}
`, "",{"version":3,"sources":["webpack://./src/board.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,sCAAsC;CACtC,mCAAmC;AACpC;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,2BAA2B;;CAE3B,aAAa;CACb,uBAAuB;CACvB,mBAAmB;;CAEnB,eAAe;CACf,eAAe;;CAEf,uBAAuB;AACxB;;AAEA;CACC,wBAAwB;AACzB","sourcesContent":["#board {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 60px);\n\tgrid-template-rows: repeat(3, 60px);\n}\n\n.square {\n\theight: 60px;\n\twidth: 60px;\n\tborder: 1px solid lightgrey;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tfont-size: 4rem;\n\tcursor: pointer;\n\n\tbackground-color: white;\n}\n\n.square.active:hover {\n\tborder: 3px solid orange;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
	margin: 0;
	box-sizing: border-box;
	font-family: Helvetica, sans-serif, system-ui;
}

body {
	line-height: 1.5;

	min-height: 100svh;
	display: flex;
	flex-direction: column;
}

main {
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	gap: 2rem;

	background-color: whitesmoke;
}

#player-text {
	display: flex;

	gap: 1rem;

	font-size: 2rem;
}

#info-board {
	display: flex;
	flex-direction: column;

	align-items: center;

	gap: 1rem;

	height: 6rem;
}

button {
	padding: 8px 32px;
	border-radius: 24px;
	border: none;
	color: white;
	background-color: orange;
	font-size: 1.2rem;
}

button:hover {
	background-color: darkorange;
	color: white;
}

header {
	font-size: 3rem;
	display:flex;
	height: 10rem;
}

header>div {
	margin: auto;
}

footer {
	display: flex;
	height: 5rem;
}

footer>div {
	margin-top: auto;
	margin-bottom: auto;
	margin-left: 3rem;
}

footer a {
	text-decoration: none;
}

dialog {
	margin: auto;
	border: none;
	border-radius: 18px;
	padding: 2rem;
	box-shadow: 2px 4px 12px #00000014;
}


dialog::backdrop {
	backdrop-filter: blur(2px);
}

dialog form{
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
}

dialog input[type="text"] {
	height: 2rem;
	border: none;
	border-bottom: 2px solid lightgrey;
	transition: border-bottom .25s ease-in-out;
	outline: none;
	padding: 5px;

	font-size: 1.1rem;
}

dialog input[type="text"]:focus {
	border-bottom: 2px solid orange;
}

dialog button {
	margin-top: 1rem;
}

form p {
	font-size: 1.5rem;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,sBAAsB;CACtB,6CAA6C;AAC9C;;AAEA;CACC,gBAAgB;;CAEhB,kBAAkB;CAClB,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,cAAc;CACd,aAAa;CACb,sBAAsB;;CAEtB,mBAAmB;CACnB,uBAAuB;;CAEvB,SAAS;;CAET,4BAA4B;AAC7B;;AAEA;CACC,aAAa;;CAEb,SAAS;;CAET,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,sBAAsB;;CAEtB,mBAAmB;;CAEnB,SAAS;;CAET,YAAY;AACb;;AAEA;CACC,iBAAiB;CACjB,mBAAmB;CACnB,YAAY;CACZ,YAAY;CACZ,wBAAwB;CACxB,iBAAiB;AAClB;;AAEA;CACC,4BAA4B;CAC5B,YAAY;AACb;;AAEA;CACC,eAAe;CACf,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,mBAAmB;CACnB,iBAAiB;AAClB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,mBAAmB;CACnB,aAAa;CACb,kCAAkC;AACnC;;;AAGA;CACC,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,kCAAkC;CAClC,0CAA0C;CAC1C,aAAa;CACb,YAAY;;CAEZ,iBAAiB;AAClB;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;AAClB","sourcesContent":["* {\n\tmargin: 0;\n\tbox-sizing: border-box;\n\tfont-family: Helvetica, sans-serif, system-ui;\n}\n\nbody {\n\tline-height: 1.5;\n\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\nmain {\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\talign-items: center;\n\tjustify-content: center;\n\n\tgap: 2rem;\n\n\tbackground-color: whitesmoke;\n}\n\n#player-text {\n\tdisplay: flex;\n\n\tgap: 1rem;\n\n\tfont-size: 2rem;\n}\n\n#info-board {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\talign-items: center;\n\n\tgap: 1rem;\n\n\theight: 6rem;\n}\n\nbutton {\n\tpadding: 8px 32px;\n\tborder-radius: 24px;\n\tborder: none;\n\tcolor: white;\n\tbackground-color: orange;\n\tfont-size: 1.2rem;\n}\n\nbutton:hover {\n\tbackground-color: darkorange;\n\tcolor: white;\n}\n\nheader {\n\tfont-size: 3rem;\n\tdisplay:flex;\n\theight: 10rem;\n}\n\nheader>div {\n\tmargin: auto;\n}\n\nfooter {\n\tdisplay: flex;\n\theight: 5rem;\n}\n\nfooter>div {\n\tmargin-top: auto;\n\tmargin-bottom: auto;\n\tmargin-left: 3rem;\n}\n\nfooter a {\n\ttext-decoration: none;\n}\n\ndialog {\n\tmargin: auto;\n\tborder: none;\n\tborder-radius: 18px;\n\tpadding: 2rem;\n\tbox-shadow: 2px 4px 12px #00000014;\n}\n\n\ndialog::backdrop {\n\tbackdrop-filter: blur(2px);\n}\n\ndialog form{\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\talign-items: center;\n}\n\ndialog input[type=\"text\"] {\n\theight: 2rem;\n\tborder: none;\n\tborder-bottom: 2px solid lightgrey;\n\ttransition: border-bottom .25s ease-in-out;\n\toutline: none;\n\tpadding: 5px;\n\n\tfont-size: 1.1rem;\n}\n\ndialog input[type=\"text\"]:focus {\n\tborder-bottom: 2px solid orange;\n}\n\ndialog button {\n\tmargin-top: 1rem;\n}\n\nform p {\n\tfont-size: 1.5rem;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/board.css":
/*!***********************!*\
  !*** ./src/board.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./board.css */ "./node_modules/css-loader/dist/cjs.js!./src/board.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((module) => {

class Board {
	#squares;

	constructor() {
		this.#squares = new Map();
	}

	play(symbol, position) {
		if (position < 0 || position > 8)
			throw new Error(`Positions not valid ${position}`);

		if (this.#squares.get(position) !== undefined)
			throw new Error(`Position already taken: ${this.#squares.get(position)}`);

		return this.#squares.set(position, symbol);
	}

	getSquares() {
		return this.#squares;
	}

	getPosition(position) {
		return this.#squares.get(position);
	}

	clear() {
		return this.#squares.clear();
	}
}

module.exports = Board;



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module) => {

class Game {
	board;

	constructor(board, players) {
		this.board = board;

		if (players instanceof Array)
			this.players = players;
		else
			throw new Error(`${players} is not an Array`);

		players[0].active = true;
	}
	
	get activePlayer() {
		if (this.players[1].active)
			return this.players[1];

		return this.players[0];
	};

	get board() {
		return this.board;
	}

	checkWin(board, player) {
		const WIN = 'win';
		const TIE = 'tie';
		const CONTINUE = 'continue';
		const winningCombos = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8],
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			[0, 4, 8], [2, 4, 6]
		];

		const result = winningCombos.some(combo => 
			combo.every(position => 
				board.getPosition(position) === player.symbol
			)
		);

		if (board.getSquares().size === 9)
			return TIE;

		if (result)
			return WIN;

		return CONTINUE;
	}

	nextPlayer() {
		if (this.players[0].active) {
			this.players[1].active = true;
			this.players[0].active = false;
		} else {
			this.players[1].active = false;
			this.players[0].active = true;
		}
	}

	playRound(position) {
		this.board.play(this.activePlayer.symbol, position);

		const result = this.checkWin(this.board, this.activePlayer.symbol);

		if (result) return this.activePlayer;

		this.activePlayer = 
			this.activePlayer === this.players[0] ?
			this.players[1] : 
			this.players[0];

		return null;
	}

	set activePlayer(player) {
		this.players.forEach(p => {
			if (p === player)
				p.active = true;
			else 
				p.active = false;
		});
	}

	get player1() {
		return this.players[0];
	}

	get player2() {
		return this.players[1];
	}
}

module.exports = Game;



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _board_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.css */ "./src/board.css");
/* harmony import */ var _screenController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screenController.js */ "./src/screenController.js");
/* harmony import */ var _screenController_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_screenController_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board.js */ "./src/board.js");
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_board_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_player_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_game_js__WEBPACK_IMPORTED_MODULE_5__);








const player1 = new (_player_js__WEBPACK_IMPORTED_MODULE_4___default())('Player 1', 'x');
const player2 = new (_player_js__WEBPACK_IMPORTED_MODULE_4___default())('Player 2', 'o');
const board = new (_board_js__WEBPACK_IMPORTED_MODULE_3___default())();
const game = new (_game_js__WEBPACK_IMPORTED_MODULE_5___default())(board, [player1, player2]);

const screenController = new (_screenController_js__WEBPACK_IMPORTED_MODULE_2___default())(game);

/*
 * Create all your game objects here, i.e. board, players, game, etc.
 *
 * Pass these objects to the screen controller.
 */


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

class Player {
	#moves = [];
	active = false;

	constructor(name, symbol) {
		this.name = name;
		this.symbol = symbol;
	}

	addMove(move) {
		return this.#moves.push(move);
	}

	get moves() {
		return this.#moves;
	}
}

module.exports = Player;


/***/ }),

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((module) => {

class ScreenController {
	game;

	constructor(game) {
		this.game = game;
		this.squares = document.querySelectorAll('.square');

		this.setPlayerNames(this.game.player1, this.game.player2);
		this.enableBoard();

		const resetButton = document.querySelector('#reset-button');
		resetButton.addEventListener('click', this.playAgain);

		const newGameDialog = document.querySelector('dialog');

		newGameDialog.showModal();
		newGameDialog.addEventListener('submit', this.changePlayerNames);
	}

	changePlayerNames = () => {
		const player1Input = document.querySelector('#player1Input');
		const player2Input = document.querySelector('#player2Input');

		if (player1Input.value)
			this.game.player1.name = player1Input.value;

		if (player2Input.value)
			this.game.player2.name = player2Input.value;

		this.setPlayerNames(this.game.player1, this.game.player2);
	}

	playRound = (squareDOM) => {
		const activePlayer = this.game.activePlayer;
		const position = Number(squareDOM.target.id);

		this.disableSquare(squareDOM.target);
		squareDOM.target.textContent = activePlayer.symbol;

		activePlayer.addMove(position);
		this.game.board.play(activePlayer.symbol, position);
	
		const result = this.game.checkWin(this.game.board, activePlayer);

		if (result === 'win') {
			this.disableBoard();
			this.announceWinner(activePlayer);
		}

		if (result === 'tie')
			this.announceWinner();

		this.game.nextPlayer();
	}

	disableBoard() {
		this.squares.forEach(square => this.disableSquare(square));
	}

	enableBoard() {
		this.squares.forEach(square => this.enableSquare(square));
	}

	enableSquare(square) {
		square.addEventListener('click', this.playRound);
		square.classList.add('active');
	}

	disableSquare(square) {
		square.removeEventListener('click', this.playRound);
		square.classList.remove('active');
	}

	announceWinner(player) {
		const winnerText = document.querySelector('#winner-text');

		if (player)
			winnerText.innerText = `${player.name} wins!`;
		else if (player === null)
			winnerText.innerText = '';
		else
			winnerText.innerText = 'Game is a tie!';
	}

	clearBoard(squares) {
		this.game.board.clear();
		this.squares.forEach(square => square.innerText = '');
	}

	setPlayerNames(player1,  player2) {
		const player1NamePlaceholder = document.querySelector('#player1-name');
		const player2NamePlaceholder = document.querySelector('#player2-name');

		player1NamePlaceholder.innerText = player1.name;
		player2NamePlaceholder.innerText = player2.name;
	}

	playAgain = () => {
		console.log('reset!');
		this.announceWinner(null);
		this.clearBoard();
		this.enableBoard();
		this.game.activePlayer = this.game.player1;
	}
}

module.exports = ScreenController;



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGcUI7QUFDQTs7QUFFZ0M7QUFDdEI7QUFDRTtBQUNKOztBQUU3QixvQkFBb0IsbURBQU07QUFDMUIsb0JBQW9CLG1EQUFNO0FBQzFCLGtCQUFrQixrREFBSztBQUN2QixpQkFBaUIsaURBQUk7O0FBRXJCLDZCQUE2Qiw2REFBZ0I7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9zcmMvYm9hcmQuY3NzIiwid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vc3JjL2JvYXJkLmNzcz9iZGFmIiwid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9zcmMvc2NyZWVuQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2JvYXJkIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNjBweCk7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDYwcHgpO1xufVxuXG4uc3F1YXJlIHtcblx0aGVpZ2h0OiA2MHB4O1xuXHR3aWR0aDogNjBweDtcblx0Ym9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGZvbnQtc2l6ZTogNHJlbTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc3F1YXJlLmFjdGl2ZTpob3ZlciB7XG5cdGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2JvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGFBQWE7Q0FDYixzQ0FBc0M7Q0FDdEMsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCwyQkFBMkI7O0NBRTNCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1COztDQUVuQixlQUFlO0NBQ2YsZUFBZTs7Q0FFZix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2JvYXJkIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDYwcHgpO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDYwcHgpO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFx0d2lkdGg6IDYwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRmb250LXNpemU6IDRyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3F1YXJlLmFjdGl2ZTpob3ZlciB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuXHRtYXJnaW46IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIHN5c3RlbS11aTtcbn1cblxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxLjU7XG5cblx0bWluLWhlaWdodDogMTAwc3ZoO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5tYWluIHtcblx0ZmxleDogMSAxIGF1dG87XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblx0Z2FwOiAycmVtO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbiNwbGF5ZXItdGV4dCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cblx0Z2FwOiAxcmVtO1xuXG5cdGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuI2luZm8tYm9hcmQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0Z2FwOiAxcmVtO1xuXG5cdGhlaWdodDogNnJlbTtcbn1cblxuYnV0dG9uIHtcblx0cGFkZGluZzogOHB4IDMycHg7XG5cdGJvcmRlci1yYWRpdXM6IDI0cHg7XG5cdGJvcmRlcjogbm9uZTtcblx0Y29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbmhlYWRlciB7XG5cdGZvbnQtc2l6ZTogM3JlbTtcblx0ZGlzcGxheTpmbGV4O1xuXHRoZWlnaHQ6IDEwcmVtO1xufVxuXG5oZWFkZXI+ZGl2IHtcblx0bWFyZ2luOiBhdXRvO1xufVxuXG5mb290ZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRoZWlnaHQ6IDVyZW07XG59XG5cbmZvb3Rlcj5kaXYge1xuXHRtYXJnaW4tdG9wOiBhdXRvO1xuXHRtYXJnaW4tYm90dG9tOiBhdXRvO1xuXHRtYXJnaW4tbGVmdDogM3JlbTtcbn1cblxuZm9vdGVyIGEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmRpYWxvZyB7XG5cdG1hcmdpbjogYXV0bztcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiAxOHB4O1xuXHRwYWRkaW5nOiAycmVtO1xuXHRib3gtc2hhZG93OiAycHggNHB4IDEycHggIzAwMDAwMDE0O1xufVxuXG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbn1cblxuZGlhbG9nIGZvcm17XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMXJlbTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGlhbG9nIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcblx0aGVpZ2h0OiAycmVtO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XG5cdHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gLjI1cyBlYXNlLWluLW91dDtcblx0b3V0bGluZTogbm9uZTtcblx0cGFkZGluZzogNXB4O1xuXG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG5kaWFsb2cgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgb3JhbmdlO1xufVxuXG5kaWFsb2cgYnV0dG9uIHtcblx0bWFyZ2luLXRvcDogMXJlbTtcbn1cblxuZm9ybSBwIHtcblx0Zm9udC1zaXplOiAxLjVyZW07XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFNBQVM7Q0FDVCxzQkFBc0I7Q0FDdEIsNkNBQTZDO0FBQzlDOztBQUVBO0NBQ0MsZ0JBQWdCOztDQUVoQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxhQUFhO0NBQ2Isc0JBQXNCOztDQUV0QixtQkFBbUI7Q0FDbkIsdUJBQXVCOztDQUV2QixTQUFTOztDQUVULDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLGFBQWE7O0NBRWIsU0FBUzs7Q0FFVCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjs7Q0FFdEIsbUJBQW1COztDQUVuQixTQUFTOztDQUVULFlBQVk7QUFDYjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLFlBQVk7Q0FDWix3QkFBd0I7Q0FDeEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsNEJBQTRCO0NBQzVCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLGtDQUFrQztBQUNuQzs7O0FBR0E7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGtDQUFrQztDQUNsQywwQ0FBMEM7Q0FDMUMsYUFBYTtDQUNiLFlBQVk7O0NBRVosaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIHN5c3RlbS11aTtcXG59XFxuXFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG5cXG5cXHRtaW4taGVpZ2h0OiAxMDBzdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluIHtcXG5cXHRmbGV4OiAxIDEgYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRnYXA6IDJyZW07XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI3BsYXllci10ZXh0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGdhcDogMXJlbTtcXG5cXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNpbmZvLWJvYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRnYXA6IDFyZW07XFxuXFxuXFx0aGVpZ2h0OiA2cmVtO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdHBhZGRpbmc6IDhweCAzMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRoZWlnaHQ6IDEwcmVtO1xcbn1cXG5cXG5oZWFkZXI+ZGl2IHtcXG5cXHRtYXJnaW46IGF1dG87XFxufVxcblxcbmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDVyZW07XFxufVxcblxcbmZvb3Rlcj5kaXYge1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0bWFyZ2luLWJvdHRvbTogYXV0bztcXG5cXHRtYXJnaW4tbGVmdDogM3JlbTtcXG59XFxuXFxuZm9vdGVyIGEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZGlhbG9nIHtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuXFx0cGFkZGluZzogMnJlbTtcXG5cXHRib3gtc2hhZG93OiAycHggNHB4IDEycHggIzAwMDAwMDE0O1xcbn1cXG5cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG59XFxuXFxuZGlhbG9nIGZvcm17XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaWFsb2cgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuXFx0dHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAuMjVzIGVhc2UtaW4tb3V0O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5kaWFsb2cgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG5kaWFsb2cgYnV0dG9uIHtcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5mb3JtIHAge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBCb2FyZCB7XG5cdCNzcXVhcmVzO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuI3NxdWFyZXMgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHRwbGF5KHN5bWJvbCwgcG9zaXRpb24pIHtcblx0XHRpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID4gOClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgUG9zaXRpb25zIG5vdCB2YWxpZCAke3Bvc2l0aW9ufWApO1xuXG5cdFx0aWYgKHRoaXMuI3NxdWFyZXMuZ2V0KHBvc2l0aW9uKSAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBQb3NpdGlvbiBhbHJlYWR5IHRha2VuOiAke3RoaXMuI3NxdWFyZXMuZ2V0KHBvc2l0aW9uKX1gKTtcblxuXHRcdHJldHVybiB0aGlzLiNzcXVhcmVzLnNldChwb3NpdGlvbiwgc3ltYm9sKTtcblx0fVxuXG5cdGdldFNxdWFyZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3NxdWFyZXM7XG5cdH1cblxuXHRnZXRQb3NpdGlvbihwb3NpdGlvbikge1xuXHRcdHJldHVybiB0aGlzLiNzcXVhcmVzLmdldChwb3NpdGlvbik7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHRyZXR1cm4gdGhpcy4jc3F1YXJlcy5jbGVhcigpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7XG5cbiIsImNsYXNzIEdhbWUge1xuXHRib2FyZDtcblxuXHRjb25zdHJ1Y3Rvcihib2FyZCwgcGxheWVycykge1xuXHRcdHRoaXMuYm9hcmQgPSBib2FyZDtcblxuXHRcdGlmIChwbGF5ZXJzIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHR0aGlzLnBsYXllcnMgPSBwbGF5ZXJzO1xuXHRcdGVsc2Vcblx0XHRcdHRocm93IG5ldyBFcnJvcihgJHtwbGF5ZXJzfSBpcyBub3QgYW4gQXJyYXlgKTtcblxuXHRcdHBsYXllcnNbMF0uYWN0aXZlID0gdHJ1ZTtcblx0fVxuXHRcblx0Z2V0IGFjdGl2ZVBsYXllcigpIHtcblx0XHRpZiAodGhpcy5wbGF5ZXJzWzFdLmFjdGl2ZSlcblx0XHRcdHJldHVybiB0aGlzLnBsYXllcnNbMV07XG5cblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXJzWzBdO1xuXHR9O1xuXG5cdGdldCBib2FyZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5ib2FyZDtcblx0fVxuXG5cdGNoZWNrV2luKGJvYXJkLCBwbGF5ZXIpIHtcblx0XHRjb25zdCBXSU4gPSAnd2luJztcblx0XHRjb25zdCBUSUUgPSAndGllJztcblx0XHRjb25zdCBDT05USU5VRSA9ICdjb250aW51ZSc7XG5cdFx0Y29uc3Qgd2lubmluZ0NvbWJvcyA9IFtcblx0XHRcdFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sXG5cdFx0XHRbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLFxuXHRcdFx0WzAsIDQsIDhdLCBbMiwgNCwgNl1cblx0XHRdO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gd2lubmluZ0NvbWJvcy5zb21lKGNvbWJvID0+IFxuXHRcdFx0Y29tYm8uZXZlcnkocG9zaXRpb24gPT4gXG5cdFx0XHRcdGJvYXJkLmdldFBvc2l0aW9uKHBvc2l0aW9uKSA9PT0gcGxheWVyLnN5bWJvbFxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHRpZiAoYm9hcmQuZ2V0U3F1YXJlcygpLnNpemUgPT09IDkpXG5cdFx0XHRyZXR1cm4gVElFO1xuXG5cdFx0aWYgKHJlc3VsdClcblx0XHRcdHJldHVybiBXSU47XG5cblx0XHRyZXR1cm4gQ09OVElOVUU7XG5cdH1cblxuXHRuZXh0UGxheWVyKCkge1xuXHRcdGlmICh0aGlzLnBsYXllcnNbMF0uYWN0aXZlKSB7XG5cdFx0XHR0aGlzLnBsYXllcnNbMV0uYWN0aXZlID0gdHJ1ZTtcblx0XHRcdHRoaXMucGxheWVyc1swXS5hY3RpdmUgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbGF5ZXJzWzFdLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5wbGF5ZXJzWzBdLmFjdGl2ZSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cGxheVJvdW5kKHBvc2l0aW9uKSB7XG5cdFx0dGhpcy5ib2FyZC5wbGF5KHRoaXMuYWN0aXZlUGxheWVyLnN5bWJvbCwgcG9zaXRpb24pO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5jaGVja1dpbih0aGlzLmJvYXJkLCB0aGlzLmFjdGl2ZVBsYXllci5zeW1ib2wpO1xuXG5cdFx0aWYgKHJlc3VsdCkgcmV0dXJuIHRoaXMuYWN0aXZlUGxheWVyO1xuXG5cdFx0dGhpcy5hY3RpdmVQbGF5ZXIgPSBcblx0XHRcdHRoaXMuYWN0aXZlUGxheWVyID09PSB0aGlzLnBsYXllcnNbMF0gP1xuXHRcdFx0dGhpcy5wbGF5ZXJzWzFdIDogXG5cdFx0XHR0aGlzLnBsYXllcnNbMF07XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHNldCBhY3RpdmVQbGF5ZXIocGxheWVyKSB7XG5cdFx0dGhpcy5wbGF5ZXJzLmZvckVhY2gocCA9PiB7XG5cdFx0XHRpZiAocCA9PT0gcGxheWVyKVxuXHRcdFx0XHRwLmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRlbHNlIFxuXHRcdFx0XHRwLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0IHBsYXllcjEoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyc1swXTtcblx0fVxuXG5cdGdldCBwbGF5ZXIyKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllcnNbMV07XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9ib2FyZC5jc3MnO1xuXG5pbXBvcnQgU2NyZWVuQ29udHJvbGxlciBmcm9tICcuL3NjcmVlbkNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUuanMnO1xuXG5jb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcignUGxheWVyIDEnLCAneCcpO1xuY29uc3QgcGxheWVyMiA9IG5ldyBQbGF5ZXIoJ1BsYXllciAyJywgJ28nKTtcbmNvbnN0IGJvYXJkID0gbmV3IEJvYXJkKCk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoYm9hcmQsIFtwbGF5ZXIxLCBwbGF5ZXIyXSk7XG5cbmNvbnN0IHNjcmVlbkNvbnRyb2xsZXIgPSBuZXcgU2NyZWVuQ29udHJvbGxlcihnYW1lKTtcblxuLypcbiAqIENyZWF0ZSBhbGwgeW91ciBnYW1lIG9iamVjdHMgaGVyZSwgaS5lLiBib2FyZCwgcGxheWVycywgZ2FtZSwgZXRjLlxuICpcbiAqIFBhc3MgdGhlc2Ugb2JqZWN0cyB0byB0aGUgc2NyZWVuIGNvbnRyb2xsZXIuXG4gKi9cbiIsImNsYXNzIFBsYXllciB7XG5cdCNtb3ZlcyA9IFtdO1xuXHRhY3RpdmUgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lLCBzeW1ib2wpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuXHR9XG5cblx0YWRkTW92ZShtb3ZlKSB7XG5cdFx0cmV0dXJuIHRoaXMuI21vdmVzLnB1c2gobW92ZSk7XG5cdH1cblxuXHRnZXQgbW92ZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI21vdmVzO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiY2xhc3MgU2NyZWVuQ29udHJvbGxlciB7XG5cdGdhbWU7XG5cblx0Y29uc3RydWN0b3IoZ2FtZSkge1xuXHRcdHRoaXMuZ2FtZSA9IGdhbWU7XG5cdFx0dGhpcy5zcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xuXG5cdFx0dGhpcy5zZXRQbGF5ZXJOYW1lcyh0aGlzLmdhbWUucGxheWVyMSwgdGhpcy5nYW1lLnBsYXllcjIpO1xuXHRcdHRoaXMuZW5hYmxlQm9hcmQoKTtcblxuXHRcdGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0LWJ1dHRvbicpO1xuXHRcdHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wbGF5QWdhaW4pO1xuXG5cdFx0Y29uc3QgbmV3R2FtZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpO1xuXG5cdFx0bmV3R2FtZURpYWxvZy5zaG93TW9kYWwoKTtcblx0XHRuZXdHYW1lRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuY2hhbmdlUGxheWVyTmFtZXMpO1xuXHR9XG5cblx0Y2hhbmdlUGxheWVyTmFtZXMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgcGxheWVyMUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjFJbnB1dCcpO1xuXHRcdGNvbnN0IHBsYXllcjJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIySW5wdXQnKTtcblxuXHRcdGlmIChwbGF5ZXIxSW5wdXQudmFsdWUpXG5cdFx0XHR0aGlzLmdhbWUucGxheWVyMS5uYW1lID0gcGxheWVyMUlucHV0LnZhbHVlO1xuXG5cdFx0aWYgKHBsYXllcjJJbnB1dC52YWx1ZSlcblx0XHRcdHRoaXMuZ2FtZS5wbGF5ZXIyLm5hbWUgPSBwbGF5ZXIySW5wdXQudmFsdWU7XG5cblx0XHR0aGlzLnNldFBsYXllck5hbWVzKHRoaXMuZ2FtZS5wbGF5ZXIxLCB0aGlzLmdhbWUucGxheWVyMik7XG5cdH1cblxuXHRwbGF5Um91bmQgPSAoc3F1YXJlRE9NKSA9PiB7XG5cdFx0Y29uc3QgYWN0aXZlUGxheWVyID0gdGhpcy5nYW1lLmFjdGl2ZVBsYXllcjtcblx0XHRjb25zdCBwb3NpdGlvbiA9IE51bWJlcihzcXVhcmVET00udGFyZ2V0LmlkKTtcblxuXHRcdHRoaXMuZGlzYWJsZVNxdWFyZShzcXVhcmVET00udGFyZ2V0KTtcblx0XHRzcXVhcmVET00udGFyZ2V0LnRleHRDb250ZW50ID0gYWN0aXZlUGxheWVyLnN5bWJvbDtcblxuXHRcdGFjdGl2ZVBsYXllci5hZGRNb3ZlKHBvc2l0aW9uKTtcblx0XHR0aGlzLmdhbWUuYm9hcmQucGxheShhY3RpdmVQbGF5ZXIuc3ltYm9sLCBwb3NpdGlvbik7XG5cdFxuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2FtZS5jaGVja1dpbih0aGlzLmdhbWUuYm9hcmQsIGFjdGl2ZVBsYXllcik7XG5cblx0XHRpZiAocmVzdWx0ID09PSAnd2luJykge1xuXHRcdFx0dGhpcy5kaXNhYmxlQm9hcmQoKTtcblx0XHRcdHRoaXMuYW5ub3VuY2VXaW5uZXIoYWN0aXZlUGxheWVyKTtcblx0XHR9XG5cblx0XHRpZiAocmVzdWx0ID09PSAndGllJylcblx0XHRcdHRoaXMuYW5ub3VuY2VXaW5uZXIoKTtcblxuXHRcdHRoaXMuZ2FtZS5uZXh0UGxheWVyKCk7XG5cdH1cblxuXHRkaXNhYmxlQm9hcmQoKSB7XG5cdFx0dGhpcy5zcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHRoaXMuZGlzYWJsZVNxdWFyZShzcXVhcmUpKTtcblx0fVxuXG5cdGVuYWJsZUJvYXJkKCkge1xuXHRcdHRoaXMuc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB0aGlzLmVuYWJsZVNxdWFyZShzcXVhcmUpKTtcblx0fVxuXG5cdGVuYWJsZVNxdWFyZShzcXVhcmUpIHtcblx0XHRzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXlSb3VuZCk7XG5cdFx0c3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHR9XG5cblx0ZGlzYWJsZVNxdWFyZShzcXVhcmUpIHtcblx0XHRzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXlSb3VuZCk7XG5cdFx0c3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHR9XG5cblx0YW5ub3VuY2VXaW5uZXIocGxheWVyKSB7XG5cdFx0Y29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uZXItdGV4dCcpO1xuXG5cdFx0aWYgKHBsYXllcilcblx0XHRcdHdpbm5lclRleHQuaW5uZXJUZXh0ID0gYCR7cGxheWVyLm5hbWV9IHdpbnMhYDtcblx0XHRlbHNlIGlmIChwbGF5ZXIgPT09IG51bGwpXG5cdFx0XHR3aW5uZXJUZXh0LmlubmVyVGV4dCA9ICcnO1xuXHRcdGVsc2Vcblx0XHRcdHdpbm5lclRleHQuaW5uZXJUZXh0ID0gJ0dhbWUgaXMgYSB0aWUhJztcblx0fVxuXG5cdGNsZWFyQm9hcmQoc3F1YXJlcykge1xuXHRcdHRoaXMuZ2FtZS5ib2FyZC5jbGVhcigpO1xuXHRcdHRoaXMuc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiBzcXVhcmUuaW5uZXJUZXh0ID0gJycpO1xuXHR9XG5cblx0c2V0UGxheWVyTmFtZXMocGxheWVyMSwgIHBsYXllcjIpIHtcblx0XHRjb25zdCBwbGF5ZXIxTmFtZVBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjEtbmFtZScpO1xuXHRcdGNvbnN0IHBsYXllcjJOYW1lUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMi1uYW1lJyk7XG5cblx0XHRwbGF5ZXIxTmFtZVBsYWNlaG9sZGVyLmlubmVyVGV4dCA9IHBsYXllcjEubmFtZTtcblx0XHRwbGF5ZXIyTmFtZVBsYWNlaG9sZGVyLmlubmVyVGV4dCA9IHBsYXllcjIubmFtZTtcblx0fVxuXG5cdHBsYXlBZ2FpbiA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygncmVzZXQhJyk7XG5cdFx0dGhpcy5hbm5vdW5jZVdpbm5lcihudWxsKTtcblx0XHR0aGlzLmNsZWFyQm9hcmQoKTtcblx0XHR0aGlzLmVuYWJsZUJvYXJkKCk7XG5cdFx0dGhpcy5nYW1lLmFjdGl2ZVBsYXllciA9IHRoaXMuZ2FtZS5wbGF5ZXIxO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NyZWVuQ29udHJvbGxlcjtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9