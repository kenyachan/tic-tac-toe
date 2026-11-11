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

#opponent-choice {
	display: flex;
	gap: 1rem;
	border: none;
	padding: 0;
}

#opponent-choice legend {
	font-size: 1.5rem;
	padding: 0;
	margin-bottom: 0.5rem;
}

dialog button {
	margin-top: 1rem;
}

form p {
	font-size: 1.5rem;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,sBAAsB;CACtB,6CAA6C;AAC9C;;AAEA;CACC,gBAAgB;;CAEhB,kBAAkB;CAClB,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,cAAc;CACd,aAAa;CACb,sBAAsB;;CAEtB,mBAAmB;CACnB,uBAAuB;;CAEvB,SAAS;;CAET,4BAA4B;AAC7B;;AAEA;CACC,aAAa;;CAEb,SAAS;;CAET,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,sBAAsB;;CAEtB,mBAAmB;;CAEnB,SAAS;;CAET,YAAY;AACb;;AAEA;CACC,iBAAiB;CACjB,mBAAmB;CACnB,YAAY;CACZ,YAAY;CACZ,wBAAwB;CACxB,iBAAiB;AAClB;;AAEA;CACC,4BAA4B;CAC5B,YAAY;AACb;;AAEA;CACC,eAAe;CACf,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,mBAAmB;CACnB,iBAAiB;AAClB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,mBAAmB;CACnB,aAAa;CACb,kCAAkC;AACnC;;;AAGA;CACC,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,kCAAkC;CAClC,0CAA0C;CAC1C,aAAa;CACb,YAAY;;CAEZ,iBAAiB;AAClB;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,aAAa;CACb,SAAS;CACT,YAAY;CACZ,UAAU;AACX;;AAEA;CACC,iBAAiB;CACjB,UAAU;CACV,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;AAClB","sourcesContent":["* {\n\tmargin: 0;\n\tbox-sizing: border-box;\n\tfont-family: Helvetica, sans-serif, system-ui;\n}\n\nbody {\n\tline-height: 1.5;\n\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\nmain {\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\talign-items: center;\n\tjustify-content: center;\n\n\tgap: 2rem;\n\n\tbackground-color: whitesmoke;\n}\n\n#player-text {\n\tdisplay: flex;\n\n\tgap: 1rem;\n\n\tfont-size: 2rem;\n}\n\n#info-board {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\talign-items: center;\n\n\tgap: 1rem;\n\n\theight: 6rem;\n}\n\nbutton {\n\tpadding: 8px 32px;\n\tborder-radius: 24px;\n\tborder: none;\n\tcolor: white;\n\tbackground-color: orange;\n\tfont-size: 1.2rem;\n}\n\nbutton:hover {\n\tbackground-color: darkorange;\n\tcolor: white;\n}\n\nheader {\n\tfont-size: 3rem;\n\tdisplay:flex;\n\theight: 10rem;\n}\n\nheader>div {\n\tmargin: auto;\n}\n\nfooter {\n\tdisplay: flex;\n\theight: 5rem;\n}\n\nfooter>div {\n\tmargin-top: auto;\n\tmargin-bottom: auto;\n\tmargin-left: 3rem;\n}\n\nfooter a {\n\ttext-decoration: none;\n}\n\ndialog {\n\tmargin: auto;\n\tborder: none;\n\tborder-radius: 18px;\n\tpadding: 2rem;\n\tbox-shadow: 2px 4px 12px #00000014;\n}\n\n\ndialog::backdrop {\n\tbackdrop-filter: blur(2px);\n}\n\ndialog form{\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\talign-items: center;\n}\n\ndialog input[type=\"text\"] {\n\theight: 2rem;\n\tborder: none;\n\tborder-bottom: 2px solid lightgrey;\n\ttransition: border-bottom .25s ease-in-out;\n\toutline: none;\n\tpadding: 5px;\n\n\tfont-size: 1.1rem;\n}\n\ndialog input[type=\"text\"]:focus {\n\tborder-bottom: 2px solid orange;\n}\n\n#opponent-choice {\n\tdisplay: flex;\n\tgap: 1rem;\n\tborder: none;\n\tpadding: 0;\n}\n\n#opponent-choice legend {\n\tfont-size: 1.5rem;\n\tpadding: 0;\n\tmargin-bottom: 0.5rem;\n}\n\ndialog button {\n\tmargin-top: 1rem;\n}\n\nform p {\n\tfont-size: 1.5rem;\n}\n\n"],"sourceRoot":""}]);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Board: () => (/* binding */ Board)
/* harmony export */ });
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



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module) => {

const WINNING_COMBOS = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8],
	[0, 3, 6], [1, 4, 7], [2, 5, 8],
	[0, 4, 8], [2, 4, 6]
];

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

		const result = WINNING_COMBOS.some(combo => 
			combo.every(position => 
				board.getPosition(position) === player.symbol
			)
		);

		if (result)
			return WIN;

		if (board.getSquares().size === 9)
			return TIE;

		return CONTINUE;
	}

	// Takes a winning square if there is one, otherwise blocks the opponent's
	// winning square, otherwise picks an open square at random.
	chooseComputerMove() {
		const computer = this.activePlayer;
		const opponent = computer === this.player1 ? this.player2 : this.player1;

		const openPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter(position =>
			this.board.getPosition(position) === undefined
		);

		const completesLine = (symbol) => openPositions.find(position =>
			WINNING_COMBOS.some(combo =>
				combo.includes(position) &&
				combo.every(square =>
					square === position || this.board.getPosition(square) === symbol
				)
			)
		);

		return completesLine(computer.symbol) ??
			completesLine(opponent.symbol) ??
			openPositions[Math.floor(Math.random() * openPositions.length)];
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
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_game_js__WEBPACK_IMPORTED_MODULE_5__);








const player1 = new _player_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Player 1', 'x');
const player2 = new _player_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Player 2', 'o');
const board = new _board_js__WEBPACK_IMPORTED_MODULE_3__.Board();
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
	#moves = [];
	active = false;
	isComputer = false;

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




/***/ }),

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((module) => {

const COMPUTER_MOVE_DELAY_MS = 500;

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

		const opponentChoice = document.querySelector('#opponent-choice');
		opponentChoice.addEventListener('change', this.togglePlayer2Input);
	}

	isPlayingComputer() {
		return document.querySelector('input[name="opponent"]:checked').value === 'computer';
	}

	togglePlayer2Input = () => {
		document.querySelector('#player2Input').hidden = this.isPlayingComputer();
	}

	changePlayerNames = () => {
		const player1Input = document.querySelector('#player1Input');
		const player2Input = document.querySelector('#player2Input');

		if (player1Input.value)
			this.game.player1.name = player1Input.value;

		if (this.isPlayingComputer()) {
			this.game.player2.name = 'Computer';
			this.game.player2.isComputer = true;
		} else if (player2Input.value) {
			this.game.player2.name = player2Input.value;
		}

		this.setPlayerNames(this.game.player1, this.game.player2);
	}

	playRound = (squareDOM) => {
		const result = this.playMove(Number(squareDOM.target.id));

		if (result === 'continue' && this.game.activePlayer.isComputer)
			this.playComputerTurn();
	}

	playComputerTurn() {
		this.disableBoard();

		this.computerTimeout = setTimeout(() => {
			const result = this.playMove(this.game.chooseComputerMove());

			if (result === 'continue')
				this.enableBoard();
		}, COMPUTER_MOVE_DELAY_MS);
	}

	playMove(position) {
		const activePlayer = this.game.activePlayer;
		const square = this.squares[position];

		this.disableSquare(square);
		square.textContent = activePlayer.symbol;

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

		return result;
	}

	disableBoard() {
		this.squares.forEach(square => this.disableSquare(square));
	}

	enableBoard() {
		this.squares.forEach(square => {
			if (this.game.board.getPosition(Number(square.id)) === undefined)
				this.enableSquare(square);
		});
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
		clearTimeout(this.computerTimeout);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vc3JjL2JvYXJkLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10aWMtdGFjLXRvZS8uL3NyYy9ib2FyZC5jc3M/YmRhZiIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10aWMtdGFjLXRvZS8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10aWMtdGFjLXRvZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRpYy10YWMtdG9lLy4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNib2FyZCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDYwcHgpO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA2MHB4KTtcbn1cblxuLnNxdWFyZSB7XG5cdGhlaWdodDogNjBweDtcblx0d2lkdGg6IDYwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRmb250LXNpemU6IDRyZW07XG5cdGN1cnNvcjogcG9pbnRlcjtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNxdWFyZS5hY3RpdmU6aG92ZXIge1xuXHRib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxhQUFhO0NBQ2Isc0NBQXNDO0NBQ3RDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsMkJBQTJCOztDQUUzQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjs7Q0FFbkIsZUFBZTtDQUNmLGVBQWU7O0NBRWYsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNib2FyZCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA2MHB4KTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA2MHB4KTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcdHdpZHRoOiA2MHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Zm9udC1zaXplOiA0cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNxdWFyZS5hY3RpdmU6aG92ZXIge1xcblxcdGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcblx0bWFyZ2luOiAwO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBzeXN0ZW0tdWk7XG59XG5cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMS41O1xuXG5cdG1pbi1oZWlnaHQ6IDEwMHN2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxubWFpbiB7XG5cdGZsZXg6IDEgMSBhdXRvO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdGdhcDogMnJlbTtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4jcGxheWVyLXRleHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXG5cdGdhcDogMXJlbTtcblxuXHRmb250LXNpemU6IDJyZW07XG59XG5cbiNpbmZvLWJvYXJkIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGdhcDogMXJlbTtcblxuXHRoZWlnaHQ6IDZyZW07XG59XG5cbmJ1dHRvbiB7XG5cdHBhZGRpbmc6IDhweCAzMnB4O1xuXHRib3JkZXItcmFkaXVzOiAyNHB4O1xuXHRib3JkZXI6IG5vbmU7XG5cdGNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuXHRmb250LXNpemU6IDEuMnJlbTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG5oZWFkZXIge1xuXHRmb250LXNpemU6IDNyZW07XG5cdGRpc3BsYXk6ZmxleDtcblx0aGVpZ2h0OiAxMHJlbTtcbn1cblxuaGVhZGVyPmRpdiB7XG5cdG1hcmdpbjogYXV0bztcbn1cblxuZm9vdGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0aGVpZ2h0OiA1cmVtO1xufVxuXG5mb290ZXI+ZGl2IHtcblx0bWFyZ2luLXRvcDogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogYXV0bztcblx0bWFyZ2luLWxlZnQ6IDNyZW07XG59XG5cbmZvb3RlciBhIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5kaWFsb2cge1xuXHRtYXJnaW46IGF1dG87XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogMThweDtcblx0cGFkZGluZzogMnJlbTtcblx0Ym94LXNoYWRvdzogMnB4IDRweCAxMnB4ICMwMDAwMDAxNDtcbn1cblxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG59XG5cbmRpYWxvZyBmb3Jte1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFyZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpYWxvZyBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG5cdGhlaWdodDogMnJlbTtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xuXHR0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIC4yNXMgZWFzZS1pbi1vdXQ7XG5cdG91dGxpbmU6IG5vbmU7XG5cdHBhZGRpbmc6IDVweDtcblxuXHRmb250LXNpemU6IDEuMXJlbTtcbn1cblxuZGlhbG9nIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIG9yYW5nZTtcbn1cblxuI29wcG9uZW50LWNob2ljZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMXJlbTtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4jb3Bwb25lbnQtY2hvaWNlIGxlZ2VuZCB7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbmRpYWxvZyBidXR0b24ge1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5mb3JtIHAge1xuXHRmb250LXNpemU6IDEuNXJlbTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsU0FBUztDQUNULHNCQUFzQjtDQUN0Qiw2Q0FBNkM7QUFDOUM7O0FBRUE7Q0FDQyxnQkFBZ0I7O0NBRWhCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGFBQWE7Q0FDYixzQkFBc0I7O0NBRXRCLG1CQUFtQjtDQUNuQix1QkFBdUI7O0NBRXZCLFNBQVM7O0NBRVQsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsYUFBYTs7Q0FFYixTQUFTOztDQUVULGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCOztDQUV0QixtQkFBbUI7O0NBRW5CLFNBQVM7O0NBRVQsWUFBWTtBQUNiOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osWUFBWTtDQUNaLHdCQUF3QjtDQUN4QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0NBQWtDO0FBQ25DOzs7QUFHQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0NBQWtDO0NBQ2xDLDBDQUEwQztDQUMxQyxhQUFhO0NBQ2IsWUFBWTs7Q0FFWixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQywrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsU0FBUztDQUNULFlBQVk7Q0FDWixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBzeXN0ZW0tdWk7XFxufVxcblxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxuXFxuXFx0bWluLWhlaWdodDogMTAwc3ZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubWFpbiB7XFxuXFx0ZmxleDogMSAxIGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Z2FwOiAycmVtO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNwbGF5ZXItdGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHRnYXA6IDFyZW07XFxuXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jaW5mby1ib2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Z2FwOiAxcmVtO1xcblxcblxcdGhlaWdodDogNnJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRwYWRkaW5nOiA4cHggMzJweDtcXG5cXHRib3JkZXItcmFkaXVzOiAyNHB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0aGVpZ2h0OiAxMHJlbTtcXG59XFxuXFxuaGVhZGVyPmRpdiB7XFxuXFx0bWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5mb290ZXI+ZGl2IHtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IGF1dG87XFxuXFx0bWFyZ2luLWxlZnQ6IDNyZW07XFxufVxcblxcbmZvb3RlciBhIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmRpYWxvZyB7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxOHB4O1xcblxcdHBhZGRpbmc6IDJyZW07XFxuXFx0Ym94LXNoYWRvdzogMnB4IDRweCAxMnB4ICMwMDAwMDAxNDtcXG59XFxuXFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxufVxcblxcbmRpYWxvZyBmb3Jte1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGlhbG9nIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xcblxcdHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gLjI1cyBlYXNlLWluLW91dDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuZGlhbG9nIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIG9yYW5nZTtcXG59XFxuXFxuI29wcG9uZW50LWNob2ljZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbiNvcHBvbmVudC1jaG9pY2UgbGVnZW5kIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuZGlhbG9nIGJ1dHRvbiB7XFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuZm9ybSBwIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIEJvYXJkIHtcblx0I3NxdWFyZXM7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy4jc3F1YXJlcyA9IG5ldyBNYXAoKTtcblx0fVxuXG5cdHBsYXkoc3ltYm9sLCBwb3NpdGlvbikge1xuXHRcdGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPiA4KVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBQb3NpdGlvbnMgbm90IHZhbGlkICR7cG9zaXRpb259YCk7XG5cblx0XHRpZiAodGhpcy4jc3F1YXJlcy5nZXQocG9zaXRpb24pICE9PSB1bmRlZmluZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFBvc2l0aW9uIGFscmVhZHkgdGFrZW46ICR7dGhpcy4jc3F1YXJlcy5nZXQocG9zaXRpb24pfWApO1xuXG5cdFx0cmV0dXJuIHRoaXMuI3NxdWFyZXMuc2V0KHBvc2l0aW9uLCBzeW1ib2wpO1xuXHR9XG5cblx0Z2V0U3F1YXJlcygpIHtcblx0XHRyZXR1cm4gdGhpcy4jc3F1YXJlcztcblx0fVxuXG5cdGdldFBvc2l0aW9uKHBvc2l0aW9uKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3NxdWFyZXMuZ2V0KHBvc2l0aW9uKTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHJldHVybiB0aGlzLiNzcXVhcmVzLmNsZWFyKCk7XG5cdH1cbn1cblxuIiwiY29uc3QgV0lOTklOR19DT01CT1MgPSBbXG5cdFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sXG5cdFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sXG5cdFswLCA0LCA4XSwgWzIsIDQsIDZdXG5dO1xuXG5jbGFzcyBHYW1lIHtcblx0Ym9hcmQ7XG5cblx0Y29uc3RydWN0b3IoYm9hcmQsIHBsYXllcnMpIHtcblx0XHR0aGlzLmJvYXJkID0gYm9hcmQ7XG5cblx0XHRpZiAocGxheWVycyBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0dGhpcy5wbGF5ZXJzID0gcGxheWVycztcblx0XHRlbHNlXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7cGxheWVyc30gaXMgbm90IGFuIEFycmF5YCk7XG5cblx0XHRwbGF5ZXJzWzBdLmFjdGl2ZSA9IHRydWU7XG5cdH1cblx0XG5cdGdldCBhY3RpdmVQbGF5ZXIoKSB7XG5cdFx0aWYgKHRoaXMucGxheWVyc1sxXS5hY3RpdmUpXG5cdFx0XHRyZXR1cm4gdGhpcy5wbGF5ZXJzWzFdO1xuXG5cdFx0cmV0dXJuIHRoaXMucGxheWVyc1swXTtcblx0fTtcblxuXHRnZXQgYm9hcmQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYm9hcmQ7XG5cdH1cblxuXHRjaGVja1dpbihib2FyZCwgcGxheWVyKSB7XG5cdFx0Y29uc3QgV0lOID0gJ3dpbic7XG5cdFx0Y29uc3QgVElFID0gJ3RpZSc7XG5cdFx0Y29uc3QgQ09OVElOVUUgPSAnY29udGludWUnO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gV0lOTklOR19DT01CT1Muc29tZShjb21ibyA9PiBcblx0XHRcdGNvbWJvLmV2ZXJ5KHBvc2l0aW9uID0+IFxuXHRcdFx0XHRib2FyZC5nZXRQb3NpdGlvbihwb3NpdGlvbikgPT09IHBsYXllci5zeW1ib2xcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0aWYgKHJlc3VsdClcblx0XHRcdHJldHVybiBXSU47XG5cblx0XHRpZiAoYm9hcmQuZ2V0U3F1YXJlcygpLnNpemUgPT09IDkpXG5cdFx0XHRyZXR1cm4gVElFO1xuXG5cdFx0cmV0dXJuIENPTlRJTlVFO1xuXHR9XG5cblx0Ly8gVGFrZXMgYSB3aW5uaW5nIHNxdWFyZSBpZiB0aGVyZSBpcyBvbmUsIG90aGVyd2lzZSBibG9ja3MgdGhlIG9wcG9uZW50J3Ncblx0Ly8gd2lubmluZyBzcXVhcmUsIG90aGVyd2lzZSBwaWNrcyBhbiBvcGVuIHNxdWFyZSBhdCByYW5kb20uXG5cdGNob29zZUNvbXB1dGVyTW92ZSgpIHtcblx0XHRjb25zdCBjb21wdXRlciA9IHRoaXMuYWN0aXZlUGxheWVyO1xuXHRcdGNvbnN0IG9wcG9uZW50ID0gY29tcHV0ZXIgPT09IHRoaXMucGxheWVyMSA/IHRoaXMucGxheWVyMiA6IHRoaXMucGxheWVyMTtcblxuXHRcdGNvbnN0IG9wZW5Qb3NpdGlvbnMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF0uZmlsdGVyKHBvc2l0aW9uID0+XG5cdFx0XHR0aGlzLmJvYXJkLmdldFBvc2l0aW9uKHBvc2l0aW9uKSA9PT0gdW5kZWZpbmVkXG5cdFx0KTtcblxuXHRcdGNvbnN0IGNvbXBsZXRlc0xpbmUgPSAoc3ltYm9sKSA9PiBvcGVuUG9zaXRpb25zLmZpbmQocG9zaXRpb24gPT5cblx0XHRcdFdJTk5JTkdfQ09NQk9TLnNvbWUoY29tYm8gPT5cblx0XHRcdFx0Y29tYm8uaW5jbHVkZXMocG9zaXRpb24pICYmXG5cdFx0XHRcdGNvbWJvLmV2ZXJ5KHNxdWFyZSA9PlxuXHRcdFx0XHRcdHNxdWFyZSA9PT0gcG9zaXRpb24gfHwgdGhpcy5ib2FyZC5nZXRQb3NpdGlvbihzcXVhcmUpID09PSBzeW1ib2xcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gY29tcGxldGVzTGluZShjb21wdXRlci5zeW1ib2wpID8/XG5cdFx0XHRjb21wbGV0ZXNMaW5lKG9wcG9uZW50LnN5bWJvbCkgPz9cblx0XHRcdG9wZW5Qb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3BlblBvc2l0aW9ucy5sZW5ndGgpXTtcblx0fVxuXG5cdG5leHRQbGF5ZXIoKSB7XG5cdFx0aWYgKHRoaXMucGxheWVyc1swXS5hY3RpdmUpIHtcblx0XHRcdHRoaXMucGxheWVyc1sxXS5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0dGhpcy5wbGF5ZXJzWzBdLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXllcnNbMV0uYWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0aGlzLnBsYXllcnNbMF0uYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRwbGF5Um91bmQocG9zaXRpb24pIHtcblx0XHR0aGlzLmJvYXJkLnBsYXkodGhpcy5hY3RpdmVQbGF5ZXIuc3ltYm9sLCBwb3NpdGlvbik7XG5cblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmNoZWNrV2luKHRoaXMuYm9hcmQsIHRoaXMuYWN0aXZlUGxheWVyLnN5bWJvbCk7XG5cblx0XHRpZiAocmVzdWx0KSByZXR1cm4gdGhpcy5hY3RpdmVQbGF5ZXI7XG5cblx0XHR0aGlzLmFjdGl2ZVBsYXllciA9IFxuXHRcdFx0dGhpcy5hY3RpdmVQbGF5ZXIgPT09IHRoaXMucGxheWVyc1swXSA/XG5cdFx0XHR0aGlzLnBsYXllcnNbMV0gOiBcblx0XHRcdHRoaXMucGxheWVyc1swXTtcblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0c2V0IGFjdGl2ZVBsYXllcihwbGF5ZXIpIHtcblx0XHR0aGlzLnBsYXllcnMuZm9yRWFjaChwID0+IHtcblx0XHRcdGlmIChwID09PSBwbGF5ZXIpXG5cdFx0XHRcdHAuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdGVsc2UgXG5cdFx0XHRcdHAuYWN0aXZlID0gZmFsc2U7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXQgcGxheWVyMSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXJzWzBdO1xuXHR9XG5cblx0Z2V0IHBsYXllcjIoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyc1sxXTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9ib2FyZC5jc3MnO1xuXG5pbXBvcnQgU2NyZWVuQ29udHJvbGxlciBmcm9tICcuL3NjcmVlbkNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL2JvYXJkLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lLmpzJztcblxuY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXIoJ1BsYXllciAxJywgJ3gnKTtcbmNvbnN0IHBsYXllcjIgPSBuZXcgUGxheWVyKCdQbGF5ZXIgMicsICdvJyk7XG5jb25zdCBib2FyZCA9IG5ldyBCb2FyZCgpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGJvYXJkLCBbcGxheWVyMSwgcGxheWVyMl0pO1xuXG5jb25zdCBzY3JlZW5Db250cm9sbGVyID0gbmV3IFNjcmVlbkNvbnRyb2xsZXIoZ2FtZSk7XG5cbi8qXG4gKiBDcmVhdGUgYWxsIHlvdXIgZ2FtZSBvYmplY3RzIGhlcmUsIGkuZS4gYm9hcmQsIHBsYXllcnMsIGdhbWUsIGV0Yy5cbiAqXG4gKiBQYXNzIHRoZXNlIG9iamVjdHMgdG8gdGhlIHNjcmVlbiBjb250cm9sbGVyLlxuICovXG4iLCJjbGFzcyBQbGF5ZXIge1xuXHQjbW92ZXMgPSBbXTtcblx0YWN0aXZlID0gZmFsc2U7XG5cdGlzQ29tcHV0ZXIgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lLCBzeW1ib2wpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuXHR9XG5cblx0YWRkTW92ZShtb3ZlKSB7XG5cdFx0cmV0dXJuIHRoaXMuI21vdmVzLnB1c2gobW92ZSk7XG5cdH1cblxuXHRnZXQgbW92ZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI21vdmVzO1xuXHR9XG59XG5cbmV4cG9ydCB7IFBsYXllciBhcyBkZWZhdWx0IH07XG4iLCJjb25zdCBDT01QVVRFUl9NT1ZFX0RFTEFZX01TID0gNTAwO1xuXG5jbGFzcyBTY3JlZW5Db250cm9sbGVyIHtcblx0Z2FtZTtcblxuXHRjb25zdHJ1Y3RvcihnYW1lKSB7XG5cdFx0dGhpcy5nYW1lID0gZ2FtZTtcblx0XHR0aGlzLnNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG5cblx0XHR0aGlzLnNldFBsYXllck5hbWVzKHRoaXMuZ2FtZS5wbGF5ZXIxLCB0aGlzLmdhbWUucGxheWVyMik7XG5cdFx0dGhpcy5lbmFibGVCb2FyZCgpO1xuXG5cdFx0Y29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQtYnV0dG9uJyk7XG5cdFx0cmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXlBZ2Fpbik7XG5cblx0XHRjb25zdCBuZXdHYW1lRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG5cblx0XHRuZXdHYW1lRGlhbG9nLnNob3dNb2RhbCgpO1xuXHRcdG5ld0dhbWVEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5jaGFuZ2VQbGF5ZXJOYW1lcyk7XG5cblx0XHRjb25zdCBvcHBvbmVudENob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcHBvbmVudC1jaG9pY2UnKTtcblx0XHRvcHBvbmVudENob2ljZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnRvZ2dsZVBsYXllcjJJbnB1dCk7XG5cdH1cblxuXHRpc1BsYXlpbmdDb21wdXRlcigpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm9wcG9uZW50XCJdOmNoZWNrZWQnKS52YWx1ZSA9PT0gJ2NvbXB1dGVyJztcblx0fVxuXG5cdHRvZ2dsZVBsYXllcjJJbnB1dCA9ICgpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMklucHV0JykuaGlkZGVuID0gdGhpcy5pc1BsYXlpbmdDb21wdXRlcigpO1xuXHR9XG5cblx0Y2hhbmdlUGxheWVyTmFtZXMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgcGxheWVyMUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjFJbnB1dCcpO1xuXHRcdGNvbnN0IHBsYXllcjJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIySW5wdXQnKTtcblxuXHRcdGlmIChwbGF5ZXIxSW5wdXQudmFsdWUpXG5cdFx0XHR0aGlzLmdhbWUucGxheWVyMS5uYW1lID0gcGxheWVyMUlucHV0LnZhbHVlO1xuXG5cdFx0aWYgKHRoaXMuaXNQbGF5aW5nQ29tcHV0ZXIoKSkge1xuXHRcdFx0dGhpcy5nYW1lLnBsYXllcjIubmFtZSA9ICdDb21wdXRlcic7XG5cdFx0XHR0aGlzLmdhbWUucGxheWVyMi5pc0NvbXB1dGVyID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKHBsYXllcjJJbnB1dC52YWx1ZSkge1xuXHRcdFx0dGhpcy5nYW1lLnBsYXllcjIubmFtZSA9IHBsYXllcjJJbnB1dC52YWx1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFBsYXllck5hbWVzKHRoaXMuZ2FtZS5wbGF5ZXIxLCB0aGlzLmdhbWUucGxheWVyMik7XG5cdH1cblxuXHRwbGF5Um91bmQgPSAoc3F1YXJlRE9NKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5wbGF5TW92ZShOdW1iZXIoc3F1YXJlRE9NLnRhcmdldC5pZCkpO1xuXG5cdFx0aWYgKHJlc3VsdCA9PT0gJ2NvbnRpbnVlJyAmJiB0aGlzLmdhbWUuYWN0aXZlUGxheWVyLmlzQ29tcHV0ZXIpXG5cdFx0XHR0aGlzLnBsYXlDb21wdXRlclR1cm4oKTtcblx0fVxuXG5cdHBsYXlDb21wdXRlclR1cm4oKSB7XG5cdFx0dGhpcy5kaXNhYmxlQm9hcmQoKTtcblxuXHRcdHRoaXMuY29tcHV0ZXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSB0aGlzLnBsYXlNb3ZlKHRoaXMuZ2FtZS5jaG9vc2VDb21wdXRlck1vdmUoKSk7XG5cblx0XHRcdGlmIChyZXN1bHQgPT09ICdjb250aW51ZScpXG5cdFx0XHRcdHRoaXMuZW5hYmxlQm9hcmQoKTtcblx0XHR9LCBDT01QVVRFUl9NT1ZFX0RFTEFZX01TKTtcblx0fVxuXG5cdHBsYXlNb3ZlKHBvc2l0aW9uKSB7XG5cdFx0Y29uc3QgYWN0aXZlUGxheWVyID0gdGhpcy5nYW1lLmFjdGl2ZVBsYXllcjtcblx0XHRjb25zdCBzcXVhcmUgPSB0aGlzLnNxdWFyZXNbcG9zaXRpb25dO1xuXG5cdFx0dGhpcy5kaXNhYmxlU3F1YXJlKHNxdWFyZSk7XG5cdFx0c3F1YXJlLnRleHRDb250ZW50ID0gYWN0aXZlUGxheWVyLnN5bWJvbDtcblxuXHRcdGFjdGl2ZVBsYXllci5hZGRNb3ZlKHBvc2l0aW9uKTtcblx0XHR0aGlzLmdhbWUuYm9hcmQucGxheShhY3RpdmVQbGF5ZXIuc3ltYm9sLCBwb3NpdGlvbik7XG5cdFxuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2FtZS5jaGVja1dpbih0aGlzLmdhbWUuYm9hcmQsIGFjdGl2ZVBsYXllcik7XG5cblx0XHRpZiAocmVzdWx0ID09PSAnd2luJykge1xuXHRcdFx0dGhpcy5kaXNhYmxlQm9hcmQoKTtcblx0XHRcdHRoaXMuYW5ub3VuY2VXaW5uZXIoYWN0aXZlUGxheWVyKTtcblx0XHR9XG5cblx0XHRpZiAocmVzdWx0ID09PSAndGllJylcblx0XHRcdHRoaXMuYW5ub3VuY2VXaW5uZXIoKTtcblxuXHRcdHRoaXMuZ2FtZS5uZXh0UGxheWVyKCk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZGlzYWJsZUJvYXJkKCkge1xuXHRcdHRoaXMuc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB0aGlzLmRpc2FibGVTcXVhcmUoc3F1YXJlKSk7XG5cdH1cblxuXHRlbmFibGVCb2FyZCgpIHtcblx0XHR0aGlzLnNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuXHRcdFx0aWYgKHRoaXMuZ2FtZS5ib2FyZC5nZXRQb3NpdGlvbihOdW1iZXIoc3F1YXJlLmlkKSkgPT09IHVuZGVmaW5lZClcblx0XHRcdFx0dGhpcy5lbmFibGVTcXVhcmUoc3F1YXJlKTtcblx0XHR9KTtcblx0fVxuXG5cdGVuYWJsZVNxdWFyZShzcXVhcmUpIHtcblx0XHRzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXlSb3VuZCk7XG5cdFx0c3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHR9XG5cblx0ZGlzYWJsZVNxdWFyZShzcXVhcmUpIHtcblx0XHRzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXlSb3VuZCk7XG5cdFx0c3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHR9XG5cblx0YW5ub3VuY2VXaW5uZXIocGxheWVyKSB7XG5cdFx0Y29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uZXItdGV4dCcpO1xuXG5cdFx0aWYgKHBsYXllcilcblx0XHRcdHdpbm5lclRleHQuaW5uZXJUZXh0ID0gYCR7cGxheWVyLm5hbWV9IHdpbnMhYDtcblx0XHRlbHNlIGlmIChwbGF5ZXIgPT09IG51bGwpXG5cdFx0XHR3aW5uZXJUZXh0LmlubmVyVGV4dCA9ICcnO1xuXHRcdGVsc2Vcblx0XHRcdHdpbm5lclRleHQuaW5uZXJUZXh0ID0gJ0dhbWUgaXMgYSB0aWUhJztcblx0fVxuXG5cdGNsZWFyQm9hcmQoc3F1YXJlcykge1xuXHRcdHRoaXMuZ2FtZS5ib2FyZC5jbGVhcigpO1xuXHRcdHRoaXMuc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiBzcXVhcmUuaW5uZXJUZXh0ID0gJycpO1xuXHR9XG5cblx0c2V0UGxheWVyTmFtZXMocGxheWVyMSwgIHBsYXllcjIpIHtcblx0XHRjb25zdCBwbGF5ZXIxTmFtZVBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjEtbmFtZScpO1xuXHRcdGNvbnN0IHBsYXllcjJOYW1lUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMi1uYW1lJyk7XG5cblx0XHRwbGF5ZXIxTmFtZVBsYWNlaG9sZGVyLmlubmVyVGV4dCA9IHBsYXllcjEubmFtZTtcblx0XHRwbGF5ZXIyTmFtZVBsYWNlaG9sZGVyLmlubmVyVGV4dCA9IHBsYXllcjIubmFtZTtcblx0fVxuXG5cdHBsYXlBZ2FpbiA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygncmVzZXQhJyk7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuY29tcHV0ZXJUaW1lb3V0KTtcblx0XHR0aGlzLmFubm91bmNlV2lubmVyKG51bGwpO1xuXHRcdHRoaXMuY2xlYXJCb2FyZCgpO1xuXHRcdHRoaXMuZW5hYmxlQm9hcmQoKTtcblx0XHR0aGlzLmdhbWUuYWN0aXZlUGxheWVyID0gdGhpcy5nYW1lLnBsYXllcjE7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY3JlZW5Db250cm9sbGVyO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=