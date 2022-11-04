"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["src_app_main_tables_tables_module_ts"],{

/***/ 35454:
/*!**************************************************************************!*\
  !*** ./node_modules/@ctrl/ngx-csv/__ivy_ngcc__/fesm2015/ctrl-ngx-csv.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsvDirective": function() { return /* binding */ CsvDirective; },
/* harmony export */   "CsvModule": function() { return /* binding */ CsvModule; },
/* harmony export */   "arrays2csv": function() { return /* binding */ arrays2csv; },
/* harmony export */   "blob": function() { return /* binding */ blob; },
/* harmony export */   "buildURI": function() { return /* binding */ buildURI; },
/* harmony export */   "elementOrEmpty": function() { return /* binding */ elementOrEmpty; },
/* harmony export */   "isArrays": function() { return /* binding */ isArrays; },
/* harmony export */   "isJsons": function() { return /* binding */ isJsons; },
/* harmony export */   "joiner": function() { return /* binding */ joiner; },
/* harmony export */   "jsons2arrays": function() { return /* binding */ jsons2arrays; },
/* harmony export */   "jsons2csv": function() { return /* binding */ jsons2csv; },
/* harmony export */   "jsonsHeaders": function() { return /* binding */ jsonsHeaders; },
/* harmony export */   "string2csv": function() { return /* binding */ string2csv; },
/* harmony export */   "toCSV": function() { return /* binding */ toCSV; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 68035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 86219);








var isJsons = function isJsons(array) {
  return Array.isArray(array) && array.every(function (row) {
    return typeof row === 'object' && !(row instanceof Array);
  });
};

var isArrays = function isArrays(array) {
  return Array.isArray(array) && array.every(function (row) {
    return Array.isArray(row);
  });
};

function jsonsHeaders(array) {
  return Array.from(new Set(array.map(function (item) {
    return Object.keys(item);
  }).reduce(function (a, b) {
    return [].concat((0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(a), (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(b));
  }, [])));
}

function jsons2arrays(jsons, headers) {
  headers = headers || jsonsHeaders(jsons); // allow headers to have custom labels, defaulting to having the header data key be the label

  var headerLabels = headers;
  var headerKeys = headers;

  if (isJsons(headers)) {
    headerLabels = headers.map(function (header) {
      return header.label;
    });
    headerKeys = headers.map(function (header) {
      return header.key;
    });
  }

  var data = jsons.map(function (object) {
    return headerKeys.map(function (header) {
      return header in object ? object[header] : '';
    });
  });
  return [headerLabels].concat((0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(data));
}

var elementOrEmpty = function elementOrEmpty(element) {
  return element || element === 0 ? element : '';
};

function joiner(data) {
  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  return data.map(function (row, index) {
    return row.map(function (element) {
      return '"' + elementOrEmpty(element) + '"';
    }).join(delimiter);
  }).join("\n");
}

function arrays2csv(data, headers, delimiter) {
  return joiner(headers ? [headers].concat((0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data, delimiter);
}

function jsons2csv(data, headers, delimiter) {
  return joiner(jsons2arrays(data, headers), delimiter);
}

function string2csv(data, headers, delimiter) {
  return headers ? "".concat(headers.join(delimiter), "\n").concat(data) : data;
}

function toCSV(data, headers, delimiter) {
  if (isJsons(data)) {
    return jsons2csv(data, headers, delimiter);
  }

  if (isArrays(data)) {
    return arrays2csv(data, headers, delimiter);
  }

  if (typeof data === 'string') {
    return string2csv(data, headers, delimiter);
  }

  throw new TypeError("Data should be a \"String\", \"Array of arrays\" OR \"Array of objects\" ");
}

function blob(data) {
  var uFEFF = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var headers = arguments.length > 2 ? arguments[2] : undefined;
  var delimiter = arguments.length > 3 ? arguments[3] : undefined;
  var csv = toCSV(data, headers, delimiter);
  return new Blob([uFEFF ? "\uFEFF" : '', csv], {
    type: 'text/csv'
  });
}

function buildURI(data) {
  var uFEFF = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var headers = arguments.length > 2 ? arguments[2] : undefined;
  var delimiter = arguments.length > 3 ? arguments[3] : undefined;
  return URL.createObjectURL(blob(data, uFEFF, headers, delimiter));
}

var CsvDirective = /*#__PURE__*/function () {
  function CsvDirective(sanitizer) {
    (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CsvDirective);

    this.sanitizer = sanitizer;
    /** the body of the csv */

    this.data = [];
    /** Set the seperator between values */

    this.delimiter = ',';
    /** adds a Byte order mark to setup the csv as UTF-8  */

    this.uFEFF = true;
    /** filename */

    this.download = 'data.csv';
    this.target = this.isIEBrowser() ? '' : '_blank';
  }
  /** Set the filename of the csv. Default is `data.csv` */


  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CsvDirective, [{
    key: "filename",
    set: function set(a) {
      this.download = a;
    }
  }, {
    key: "onClick",
    value: function onClick() {
      // IE handling
      if (this.isIEBrowser()) {
        var file = blob(this.data, this.uFEFF, this.headers, this.delimiter);
        window.navigator.msSaveBlob(file, this.download);
      }
    }
  }, {
    key: "isIEBrowser",
    value: function isIEBrowser() {
      return !!window.navigator.msSaveOrOpenBlob;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this.href = this.sanitizer.bypassSecurityTrustResourceUrl(buildURI(this.data, this.uFEFF, this.headers, this.delimiter));
    }
  }]);

  return CsvDirective;
}();

CsvDirective.ɵfac = function CsvDirective_Factory(t) {
  return new (t || CsvDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer));
};

CsvDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CsvDirective,
  selectors: [["", "csvLink", ""]],
  hostVars: 3,
  hostBindings: function CsvDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CsvDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("download", ctx.download)("target", ctx.target)("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrlOrResourceUrl"]);
    }
  },
  inputs: {
    data: "data",
    delimiter: "delimiter",
    uFEFF: "uFEFF",
    target: "target",
    filename: "filename",
    headers: "headers"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});

CsvDirective.ctorParameters = function () {
  return [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer
  }];
};

CsvDirective.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  headers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  delimiter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  filename: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  uFEFF: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  href: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding
  }],
  download: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding
  }],
  target: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['click']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CsvDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[csvLink]'
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    delimiter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    uFEFF: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    download: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding
    }],
    filename: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['click']
    }],
    href: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding
    }],
    headers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();

var CsvModule = /*#__PURE__*/(0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function CsvModule() {
  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CsvModule);
});

CsvModule.ɵfac = function CsvModule_Factory(t) {
  return new (t || CsvModule)();
};

CsvModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CsvModule
});
CsvModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CsvModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      declarations: [CsvDirective],
      exports: [CsvDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CsvModule, {
    declarations: [CsvDirective],
    exports: [CsvDirective]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 15433:
/*!****************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesComponent": function() { return /* binding */ DatatablesComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 68035);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 85582);
/* harmony import */ var app_main_tables_datatables_i18n_de__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/tables/datatables/i18n/de */ 3070);
/* harmony import */ var app_main_tables_datatables_i18n_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/tables/datatables/i18n/en */ 55910);
/* harmony import */ var app_main_tables_datatables_i18n_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/tables/datatables/i18n/fr */ 2998);
/* harmony import */ var app_main_tables_datatables_i18n_pt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/tables/datatables/i18n/pt */ 96699);
/* harmony import */ var app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/tables/datatables/datatables.snippetcode */ 14455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/tables/datatables/datatables.service */ 45721);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/translation.service */ 27330);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4665);
/* harmony import */ var _core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.component */ 457);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 13113);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ctrl/ngx-csv */ 35454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/pipes/initials.pipe */ 4932);


























var _c0 = ["tableRowDetails"];

function DatatablesComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_36_Template_input_change_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35);
      var allRowsSelected_r32 = restoredCtx.allRowsSelected;
      var selectFn_r33 = restoredCtx.selectFn;
      return selectFn_r33(!allRowsSelected_r32);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var allRowsSelected_r32 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("checked", allRowsSelected_r32);
  }
}

function DatatablesComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_37_Template_input_change_1_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r41);
      var onCheckboxChangeFn_r39 = restoredCtx.onCheckboxChangeFn;
      return onCheckboxChangeFn_r39($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var rowIndex_r36 = ctx.rowIndex;
    var isSelected_r38 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "rowChkbxRef", rowIndex_r36, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("checked", isSelected_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("for", "rowChkbxRef", rowIndex_r36, "");
  }
}

function DatatablesComponent_ng_template_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r42.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}

var _c1 = function _c1(a0, a1, a2, a3, a4) {
  return {
    "bg-light-primary": a0,
    "bg-light-success": a1,
    "bg-light-danger": a2,
    "bg-light-warning": a3,
    "bg-light-info": a4
  };
};

function DatatablesComponent_ng_template_39_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    var row_r42 = ctx_r48.row;
    var name_r43 = ctx_r48.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](4, _c1, row_r42.status == "1", row_r42.status == "2", row_r42.status == "3", row_r42.status == "4", row_r42.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 2, name_r43));
  }
}

function DatatablesComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DatatablesComponent_ng_template_39_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, DatatablesComponent_ng_template_39_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r42 = ctx.row;
    var name_r43 = ctx.value;

    var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", row_r42.avatar.length > 0)("ngIfElse", _r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", name_r43, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r42.post, "");
  }
}

var _c2 = function _c2(a0, a1, a2, a3, a4) {
  return {
    "badge-light-primary": a0,
    "badge-light-success": a1,
    "badge-light-danger": a2,
    "badge-light-warning": a3,
    "badge-light-info": a4
  };
};

function DatatablesComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var status_r49 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](2, _c2, status_r49 == "1", status_r49 == "2", status_r49 == "3", status_r49 == "4", status_r49 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", status_r49 == 1 ? "Current" : status_r49 == 2 ? "Professional" : status_r49 == 3 ? "Rejected" : status_r49 == 4 ? "Resigned" : status_r49 == 5 ? "Applied" : "Applied", " ");
  }
}

function DatatablesComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function DatatablesComponent_ng_template_53_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r52.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}

function DatatablesComponent_ng_template_53_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    var row_r52 = ctx_r59.row;
    var value_r51 = ctx_r59.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](4, _c1, row_r52.status == "1", row_r52.status == "2", row_r52.status == "3", row_r52.status == "4", row_r52.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 2, value_r51));
  }
}

function DatatablesComponent_ng_template_53_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_53_div_0_Template_div_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r61);
      var rowIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r60.editingName[rowIndex_r50 + "-full_name"] = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, DatatablesComponent_ng_template_53_div_0_div_2_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, DatatablesComponent_ng_template_53_div_0_ng_template_3_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](4);

    var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    var row_r52 = ctx_r63.row;
    var value_r51 = ctx_r63.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", row_r52.avatar.length > 0)("ngIfElse", _r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](value_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r52.post, "");
  }
}

function DatatablesComponent_ng_template_53_input_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_53_input_1_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r66);
      var rowIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r64.inlineEditingUpdateName($event, "full_name", rowIndex_r50);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var value_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", value_r51);
  }
}

function DatatablesComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, DatatablesComponent_ng_template_53_div_0_Template, 10, 4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DatatablesComponent_ng_template_53_input_1_Template, 1, 1, "input", 86);
  }

  if (rf & 2) {
    var rowIndex_r50 = ctx.rowIndex;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r5.editingName[rowIndex_r50 + "-full_name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.editingName[rowIndex_r50 + "-full_name"]);
  }
}

function DatatablesComponent_ng_template_55_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_55_div_0_Template_div_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r74);
      var rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r73.editingStatus[rowIndex_r68 + "-status"] = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var value_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](2, _c2, value_r70 == "1", value_r70 == "2", value_r70 == "3", value_r70 == "4", value_r70 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", value_r70 == 1 ? "Current" : value_r70 == 2 ? "Professional" : value_r70 == 3 ? "Rejected" : value_r70 == 4 ? "Resigned" : value_r70 == 5 ? "Applied" : "Applied", " ");
  }
}

function DatatablesComponent_ng_template_55_select_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_55_select_1_Template_select_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r78);
      var rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r77.editingStatus[rowIndex_r68 + "-status"] = false;
    })("change", function DatatablesComponent_ng_template_55_select_1_Template_select_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r78);
      var rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r80.inlineEditingUpdateStatus($event, "status", rowIndex_r68);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "Resigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Applied");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var value_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", value_r70);
  }
}

function DatatablesComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, DatatablesComponent_ng_template_55_div_0_Template, 3, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DatatablesComponent_ng_template_55_select_1_Template, 11, 1, "select", 90);
  }

  if (rf & 2) {
    var rowIndex_r68 = ctx.rowIndex;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r6.editingStatus[rowIndex_r68 + "-status"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r6.editingStatus[rowIndex_r68 + "-status"]);
  }
}

function DatatablesComponent_ng_template_57_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_57_div_0_Template_div_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r89);
      var rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r88.editingAge[rowIndex_r84 + "-age"] = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var value_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", value_r83, " ");
  }
}

function DatatablesComponent_ng_template_57_input_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_57_input_1_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r94);
      var rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r92.inlineEditingUpdateAge($event, "age", rowIndex_r84);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var value_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", value_r83);
  }
}

function DatatablesComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, DatatablesComponent_ng_template_57_div_0_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DatatablesComponent_ng_template_57_input_1_Template, 1, 1, "input", 97);
  }

  if (rf & 2) {
    var rowIndex_r84 = ctx.rowIndex;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r7.editingAge[rowIndex_r84 + "-age"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r7.editingAge[rowIndex_r84 + "-age"]);
  }
}

function DatatablesComponent_ng_template_59_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_59_div_0_Template_div_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r102);
      var rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r101.editingSalary[rowIndex_r97 + "-salary"] = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var value_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", value_r96, " ");
  }
}

function DatatablesComponent_ng_template_59_input_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_59_input_1_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r107);
      var rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r105.inlineEditingUpdateSalary($event, "salary", rowIndex_r97);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var value_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", value_r96);
  }
}

function DatatablesComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, DatatablesComponent_ng_template_59_div_0_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DatatablesComponent_ng_template_59_input_1_Template, 1, 1, "input", 86);
  }

  if (rf & 2) {
    var rowIndex_r97 = ctx.rowIndex;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r8.editingSalary[rowIndex_r97 + "-salary"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r8.editingSalary[rowIndex_r97 + "-salary"]);
  }
}

function DatatablesComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function DatatablesComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "City : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "Experience : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Start Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r109 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r109.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r109.experience, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r109.start_date, "");
  }
}

function DatatablesComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DatatablesComponent_ng_template_71_Template_a_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r114);
      var row_r111 = restoredCtx.row;
      var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r113.rowDetailsToggleExpand(row_r111);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var expanded_r112 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("datatable-icon-right", !expanded_r112)("datatable-icon-down", expanded_r112);
  }
}

function DatatablesComponent_ng_template_73_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r115.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}

function DatatablesComponent_ng_template_73_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    var row_r115 = ctx_r121.row;
    var name_r116 = ctx_r121.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](4, _c1, row_r115.status == "1", row_r115.status == "2", row_r115.status == "3", row_r115.status == "4", row_r115.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 2, name_r116));
  }
}

function DatatablesComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DatatablesComponent_ng_template_73_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, DatatablesComponent_ng_template_73_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r115 = ctx.row;
    var name_r116 = ctx.value;

    var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", row_r115.avatar.length > 0)("ngIfElse", _r118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](name_r116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r115.post, "");
  }
}

function DatatablesComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var status_r122 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](2, _c2, status_r122 == "1", status_r122 == "2", status_r122 == "3", status_r122 == "4", status_r122 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", status_r122 == 1 ? "Current" : status_r122 == 2 ? "Professional" : status_r122 == 3 ? "Rejected" : status_r122 == 4 ? "Resigned" : status_r122 == 5 ? "Applied" : "Applied", " ");
  }
}

function DatatablesComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function DatatablesComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_89_Template_input_change_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r127);
      var allRowsSelected_r124 = restoredCtx.allRowsSelected;
      var selectFn_r125 = restoredCtx.selectFn;
      return selectFn_r125(!allRowsSelected_r124);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var allRowsSelected_r124 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("checked", allRowsSelected_r124);
  }
}

function DatatablesComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_90_Template_input_change_1_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r133);
      var onCheckboxChangeFn_r131 = restoredCtx.onCheckboxChangeFn;
      return onCheckboxChangeFn_r131($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var rowIndex_r128 = ctx.rowIndex;
    var isSelected_r130 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "rowCustomChkbxRef", rowIndex_r128, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("checked", isSelected_r130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("for", "rowCustomChkbxRef", rowIndex_r128, "");
  }
}

function DatatablesComponent_ng_template_92_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r134.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}

function DatatablesComponent_ng_template_92_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    var row_r134 = ctx_r140.row;
    var name_r135 = ctx_r140.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](4, _c1, row_r134.status == "1", row_r134.status == "2", row_r134.status == "3", row_r134.status == "4", row_r134.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 2, name_r135));
  }
}

function DatatablesComponent_ng_template_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DatatablesComponent_ng_template_92_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, DatatablesComponent_ng_template_92_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r134 = ctx.row;
    var name_r135 = ctx.value;

    var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", row_r134.avatar.length > 0)("ngIfElse", _r137);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](name_r135);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r134.post, "");
  }
}

function DatatablesComponent_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var status_r141 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](2, _c2, status_r141 == "1", status_r141 == "2", status_r141 == "3", status_r141 == "4", status_r141 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", status_r141 == 1 ? "Current" : status_r141 == 2 ? "Professional" : status_r141 == 3 ? "Rejected" : status_r141 == 4 ? "Resigned" : status_r141 == 5 ? "Applied" : "Applied", " ");
  }
}

function DatatablesComponent_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function DatatablesComponent_li_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var sel_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", sel_r142.full_name, " ");
  }
}

function DatatablesComponent_li_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Selections");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function DatatablesComponent_ng_template_116_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r143.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}

function DatatablesComponent_ng_template_116_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    var row_r143 = ctx_r149.row;
    var name_r144 = ctx_r149.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](4, _c1, row_r143.status == "1", row_r143.status == "2", row_r143.status == "3", row_r143.status == "4", row_r143.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 2, name_r144));
  }
}

function DatatablesComponent_ng_template_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DatatablesComponent_ng_template_116_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, DatatablesComponent_ng_template_116_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r143 = ctx.row;
    var name_r144 = ctx.value;

    var _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", row_r143.avatar.length > 0)("ngIfElse", _r146);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](name_r144);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r143.post, "");
  }
}

function DatatablesComponent_ng_template_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var status_r150 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](2, _c2, status_r150 == "1", status_r150 == "2", status_r150 == "3", status_r150 == "4", status_r150 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", status_r150 == 1 ? "Current" : status_r150 == 2 ? "Professional" : status_r150 == 3 ? "Rejected" : status_r150 == 4 ? "Resigned" : status_r150 == 5 ? "Applied" : "Applied", " ");
  }
}

function DatatablesComponent_ng_template_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function DatatablesComponent_ng_template_134_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r151.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}

function DatatablesComponent_ng_template_134_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    var row_r151 = ctx_r157.row;
    var name_r152 = ctx_r157.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](4, _c1, row_r151.status == "1", row_r151.status == "2", row_r151.status == "3", row_r151.status == "4", row_r151.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 2, name_r152));
  }
}

function DatatablesComponent_ng_template_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DatatablesComponent_ng_template_134_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, DatatablesComponent_ng_template_134_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r151 = ctx.row;
    var name_r152 = ctx.value;

    var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", row_r151.avatar.length > 0)("ngIfElse", _r154);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](name_r152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r151.post, "");
  }
}

function DatatablesComponent_ng_template_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var status_r158 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](2, _c2, status_r158 == "1", status_r158 == "2", status_r158 == "3", status_r158 == "4", status_r158 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", status_r158 == 1 ? "Current" : status_r158 == 2 ? "Professional" : status_r158 == 3 ? "Rejected" : status_r158 == 4 ? "Resigned" : status_r158 == 5 ? "Applied" : "Applied", " ");
  }
}

function DatatablesComponent_ng_template_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

var DatatablesComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {DatatablesService} _datatablesService
   * @param {CoreTranslationService} _coreTranslationService
   */
  function DatatablesComponent(_datatablesService, _coreTranslationService) {
    (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DatatablesComponent);

    this._datatablesService = _datatablesService;
    this._coreTranslationService = _coreTranslationService;
    this.tempData = [];
    this.selected = [];
    this.basicSelectedOption = 10;
    this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.ColumnMode;
    this.expanded = {};
    this.editingName = {};
    this.editingStatus = {};
    this.editingAge = {};
    this.editingSalary = {};
    this.chkBoxSelected = [];
    this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.SelectionType; // snippet code variables

    this._snippetCodeKitchenSink = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_7__.snippetCodeKitchenSink;
    this._snippetCodeInlineEditing = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_7__.snippetCodeInlineEditing;
    this._snippetCodeRowDetails = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_7__.snippetCodeRowDetails;
    this._snippetCodeCustomCheckbox = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_7__.snippetCodeCustomCheckbox;
    this._snippetCodeResponsive = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_7__.snippetCodeResponsive;
    this._snippetCodeMultilangual = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_7__.snippetCodeMultilangual;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();

    this._coreTranslationService.translate(app_main_tables_datatables_i18n_en__WEBPACK_IMPORTED_MODULE_4__.locale, app_main_tables_datatables_i18n_fr__WEBPACK_IMPORTED_MODULE_5__.locale, app_main_tables_datatables_i18n_de__WEBPACK_IMPORTED_MODULE_3__.locale, app_main_tables_datatables_i18n_pt__WEBPACK_IMPORTED_MODULE_6__.locale);
  } // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Inline editing Name
   *
   * @param event
   * @param cell
   * @param rowIndex
   */


  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DatatablesComponent, [{
    key: "inlineEditingUpdateName",
    value: function inlineEditingUpdateName(event, cell, rowIndex) {
      this.editingName[rowIndex + '-' + cell] = false;
      this.rows[rowIndex][cell] = event.target.value;
      this.rows = (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.rows);
    }
    /**
     * Inline editing Age
     *
     * @param event
     * @param cell
     * @param rowIndex
     */

  }, {
    key: "inlineEditingUpdateAge",
    value: function inlineEditingUpdateAge(event, cell, rowIndex) {
      this.editingAge[rowIndex + '-' + cell] = false;
      this.rows[rowIndex][cell] = event.target.value;
      this.rows = (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.rows);
    }
    /**
     * Inline editing Salary
     *
     * @param event
     * @param cell
     * @param rowIndex
     */

  }, {
    key: "inlineEditingUpdateSalary",
    value: function inlineEditingUpdateSalary(event, cell, rowIndex) {
      this.editingSalary[rowIndex + '-' + cell] = false;
      this.rows[rowIndex][cell] = event.target.value;
      this.rows = (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.rows);
    }
    /**
     * Inline editing Status
     *
     * @param event
     * @param cell
     * @param rowIndex
     */

  }, {
    key: "inlineEditingUpdateStatus",
    value: function inlineEditingUpdateStatus(event, cell, rowIndex) {
      this.editingStatus[rowIndex + '-' + cell] = false;
      this.rows[rowIndex][cell] = event.target.value;
      this.rows = (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.rows);
    }
    /**
     * Search (filter)
     *
     * @param event
     */

  }, {
    key: "filterUpdate",
    value: function filterUpdate(event) {
      var val = event.target.value.toLowerCase(); // filter our data

      var temp = this.tempData.filter(function (d) {
        return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
      }); // update the rows

      this.kitchenSinkRows = temp; // Whenever the filter changes, always go back to the first page

      this.table.offset = 0;
    }
    /**
     * Row Details Toggle
     *
     * @param row
     */

  }, {
    key: "rowDetailsToggleExpand",
    value: function rowDetailsToggleExpand(row) {
      this.tableRowDetails.rowDetail.toggleExpandRow(row);
    }
    /**
     * For ref only, log selected values
     *
     * @param selected
     */

  }, {
    key: "onSelect",
    value: function onSelect(_ref) {
      var _this$selected;

      var selected = _ref.selected;
      console.log('Select Event', selected, this.selected);
      this.selected.splice(0, this.selected.length);

      (_this$selected = this.selected).push.apply(_this$selected, (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selected));
    }
    /**
     * For ref only, log activate events
     *
     * @param selected
     */

  }, {
    key: "onActivate",
    value: function onActivate(event) {// console.log('Activate Event', event);
    }
    /**
     * Custom Chkbox On Select
     *
     * @param { selected }
     */

  }, {
    key: "customChkboxOnSelect",
    value: function customChkboxOnSelect(_ref2) {
      var _this$chkBoxSelected;

      var selected = _ref2.selected;
      this.chkBoxSelected.splice(0, this.chkBoxSelected.length);

      (_this$chkBoxSelected = this.chkBoxSelected).push.apply(_this$chkBoxSelected, (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selected));
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this._datatablesService.onDatatablessChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this._unsubscribeAll)).subscribe(function (response) {
        _this.rows = response;
        _this.tempData = _this.rows;
        _this.kitchenSinkRows = _this.rows;
        _this.exportCSVData = _this.rows;
      }); // content header


      this.contentHeader = {
        headerTitle: 'Datatables',
        actionButton: true,
        breadcrumb: {
          type: '',
          links: [{
            name: 'Home',
            isLink: true,
            link: '/'
          }, {
            name: 'Forms & Tables',
            isLink: true,
            link: '/'
          }, {
            name: 'Datatables',
            isLink: false
          }]
        }
      };
    }
  }]);

  return DatatablesComponent;
}();

DatatablesComponent.ɵfac = function DatatablesComponent_Factory(t) {
  return new (t || DatatablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_8__.DatatablesService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__.CoreTranslationService));
};

DatatablesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: DatatablesComponent,
  selectors: [["app-datatables"]],
  viewQuery: function DatatablesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.DatatableComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.tableRowDetails = _t.first);
    }
  },
  decls: 145,
  vars: 129,
  consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "ngx-datatable-kitchen-sink"], [3, "snippetCode"], [1, "card-title"], [1, "row"], [1, "col-12", "mb-50"], ["rippleEffect", "", 1, "btn", "btn-primary", "ml-1"], ["data-feather", "plus", 1, "mr-0", "mr-sm-1"], [1, "d-none", "d-sm-inline-block"], ["csvLink", "", "rippleEffect", "", 1, "btn", "btn-outline-secondary", "float-right", "mr-1", 3, "data"], [1, "col-md-6", "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "m-1"], [1, "d-flex", "align-items-center"], [1, "form-control", "mx-25", 3, "ngModel", "ngModelChange"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], [1, "col-md-6", "col-12", "d-flex", "justify-content-md-end"], [1, "d-flex", "align-items-center", "justify-content-end", "pr-1", "pb-1", "pl-1", "pl-md-0", "pb-md-0"], ["type", "search", "placeholder", "Search", 1, "form-control", "ml-25", 3, "keyup", "search"], [1, "bootstrap", "core-bootstrap", 3, "rows", "rowHeight", "limit", "columnMode", "headerHeight", "footerHeight", "scrollbarH", "selectionType", "activate", "select"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Name", "prop", "full_name", 3, "width"], ["name", "Email", "prop", "email", 3, "width"], ["name", "Date", "prop", "start_date", 3, "width"], ["name", "Salary", "prop", "salary", 3, "width"], ["name", "Status", "prop", "status", 3, "width"], ["name", "Actions", 3, "width", "sortable"], ["id", "ngx-datatable-inline-editing"], [1, "bootstrap", "core-bootstrap", 3, "headerHeight", "rowHeight", "limit", "columnMode", "footerHeight", "rows", "scrollbarH"], ["name", "Age", "prop", "age", 3, "width"], ["id", "ngx-datatable-row-details"], [1, "bootstrap", "core-bootstrap", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows", "scrollbarH"], ["tableRowDetails", ""], [3, "rowHeight"], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["id", "ngx-datatable-custom-checkbox"], [1, "col-12"], [1, "bootstrap", "core-bootstrap", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "selected", "selectionType", "scrollbarH", "select", "activate"], [1, "selected-column", "col-12", "mt-1"], [1, "w-100"], [1, "mx-1"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "ngx-datatable-Responsive"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "columnMode", "headerHeight", "rowHeight", "footerHeight", "limit", "rows", "scrollbarH"], ["table", ""], ["name", "Action", 3, "width", "sortable"], ["id", "ngx-datatable-multi-purpose"], [1, "card-body"], [1, "card-text"], ["prop", "full_name", 3, "name", "width"], ["prop", "email", 3, "name", "width"], ["prop", "age", 3, "name", "width"], ["prop", "status", 3, "name", "width"], [3, "name", "width", "sortable"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "headerChkbxRef", 1, "custom-control-input", 3, "checked", "change"], ["for", "headerChkbxRef", 1, "custom-control-label"], ["type", "checkbox", 1, "custom-control-input", 3, "checked", "id", "change"], [1, "custom-control-label", 3, "for"], [4, "ngIf", "ngIfElse"], ["customAvatar", ""], [1, "cell-line-height"], [1, "font-medium-1", "font-weight-bold", "line-height-1", "mb-25"], [1, "text-muted", "font-small-2"], ["height", "32", "width", "32", "alt", "datatable-avatar", 1, "rounded-circle", "mr-1", 3, "src"], [1, "avatar", "mr-1", "ml-0", 3, "ngClass"], [1, "avatar-content"], [1, "badge", "badge-pill", 3, "ngClass"], ["ngbDropdown", "", "container", "body"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "dropdownBrowserState", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "hide-arrow"], ["data-feather", "more-vertical", 1, "text-primary", "cursor-pointer", "mr-50"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBrowserState", 1, "dropdown-menu-right"], ["href", "javascript:void(0)", "ngbDropdownItem", "", 1, "d-flex", "align-items-center"], ["data-feather", "file-text", 1, "mr-50"], ["data-feather", "archive", 1, "mr-50"], ["data-feather", "trash-2", 1, "mr-50"], ["data-feather", "edit", 1, "text-primary", "cursor-pointer"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "class", "form-control form-control-sm", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], [1, "font-medium-1", "line-height-1", "mb-0"], ["autofocus", "", "type", "text", 1, "form-control", "form-control-sm", 3, "value", "blur"], ["class", "form-control form-control-sm", 3, "value", "blur", "change", 4, "ngIf"], [1, "form-control", "form-control-sm", 3, "value", "blur", "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["autofocus", "", "class", "form-control form-control-sm", "type", "number", 3, "value", "blur", 4, "ngIf"], ["autofocus", "", "type", "number", 1, "form-control", "form-control-sm", 3, "value", "blur"], [1, "ml-75", "pl-5", "pt-75"], [1, "ml-1"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 1, "text-body", 3, "click"], [1, "custom-control", "custom-control-primary", "custom-checkbox"], ["type", "checkbox", "id", "headerCustomChkbxRef", 1, "custom-control-input", 3, "checked", "change"], ["for", "headerCustomChkbxRef", 1, "custom-control-label"]],
  template: function DatatablesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-content-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "core-card-snippet", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Kitchen Sink");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Add New Record");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Export CSV");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Show ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DatatablesComponent_Template_select_ngModelChange_19_listener($event) {
        return ctx.basicSelectedOption = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, " entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function DatatablesComponent_Template_input_keyup_33_listener($event) {
        return ctx.filterUpdate($event);
      })("search", function DatatablesComponent_Template_input_search_33_listener($event) {
        return ctx.filterUpdate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "ngx-datatable", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("activate", function DatatablesComponent_Template_ngx_datatable_activate_34_listener($event) {
        return ctx.onActivate($event);
      })("select", function DatatablesComponent_Template_ngx_datatable_select_34_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "ngx-datatable-column", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, DatatablesComponent_ng_template_36_Template, 3, 1, "ng-template", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, DatatablesComponent_ng_template_37_Template, 3, 3, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "ngx-datatable-column", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, DatatablesComponent_ng_template_39_Template, 9, 4, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](40, "ngx-datatable-column", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](41, "ngx-datatable-column", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](42, "ngx-datatable-column", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "ngx-datatable-column", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, DatatablesComponent_ng_template_44_Template, 2, 8, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "ngx-datatable-column", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](46, DatatablesComponent_ng_template_46_Template, 15, 0, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "section", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "core-card-snippet", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50, "Inline Editing");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "ngx-datatable", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "ngx-datatable-column", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](53, DatatablesComponent_ng_template_53_Template, 2, 2, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](54, "ngx-datatable-column", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](55, DatatablesComponent_ng_template_55_Template, 2, 2, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "ngx-datatable-column", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](57, DatatablesComponent_ng_template_57_Template, 2, 2, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "ngx-datatable-column", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](59, DatatablesComponent_ng_template_59_Template, 2, 2, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "ngx-datatable-column", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](61, DatatablesComponent_ng_template_61_Template, 15, 0, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "section", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "core-card-snippet", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](64, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](65, "Row Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](66, "ngx-datatable", 37, 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "ngx-datatable-row-detail", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](69, DatatablesComponent_ng_template_69_Template, 14, 3, "ng-template", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](70, "ngx-datatable-column", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](71, DatatablesComponent_ng_template_71_Template, 1, 4, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](72, "ngx-datatable-column", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](73, DatatablesComponent_ng_template_73_Template, 9, 4, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](74, "ngx-datatable-column", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](75, "ngx-datatable-column", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](76, "ngx-datatable-column", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "ngx-datatable-column", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](78, DatatablesComponent_ng_template_78_Template, 2, 8, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "ngx-datatable-column", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](80, DatatablesComponent_ng_template_80_Template, 15, 0, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](81, "section", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](82, "core-card-snippet", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](83, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](84, "Custom Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](85, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](87, "ngx-datatable", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("select", function DatatablesComponent_Template_ngx_datatable_select_87_listener($event) {
        return ctx.customChkboxOnSelect($event);
      })("activate", function DatatablesComponent_Template_ngx_datatable_activate_87_listener($event) {
        return ctx.onActivate($event);
      })("select", function DatatablesComponent_Template_ngx_datatable_select_87_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](88, "ngx-datatable-column", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](89, DatatablesComponent_ng_template_89_Template, 3, 1, "ng-template", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](90, DatatablesComponent_ng_template_90_Template, 3, 3, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](91, "ngx-datatable-column", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](92, DatatablesComponent_ng_template_92_Template, 9, 4, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](93, "ngx-datatable-column", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](94, "ngx-datatable-column", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](95, "ngx-datatable-column", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](96, "ngx-datatable-column", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](97, DatatablesComponent_ng_template_97_Template, 2, 8, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](98, "ngx-datatable-column", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](99, DatatablesComponent_ng_template_99_Template, 15, 0, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](100, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](101, "hr", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](102, "h5", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](103, " Selections ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](104, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](105);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](106, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](107, DatatablesComponent_li_107_Template, 2, 1, "li", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](108, DatatablesComponent_li_108_Template, 2, 0, "li", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](109, "section", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](110, "core-card-snippet", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](111, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](112, "Responsive");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](113, "ngx-datatable", 51, 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](115, "ngx-datatable-column", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](116, DatatablesComponent_ng_template_116_Template, 9, 4, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](117, "ngx-datatable-column", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](118, "ngx-datatable-column", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](119, "ngx-datatable-column", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](120, DatatablesComponent_ng_template_120_Template, 2, 8, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](121, "ngx-datatable-column", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](122, DatatablesComponent_ng_template_122_Template, 15, 0, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](123, "section", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](124, "core-card-snippet", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](125, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](126, "Multilangual");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](127, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](128, "p", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](129, "Select preffered language from navbar to change the table language.");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](130, "ngx-datatable", 51, 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](132, "ngx-datatable-column", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](133, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](134, DatatablesComponent_ng_template_134_Template, 9, 4, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](135, "ngx-datatable-column", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](136, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](137, "ngx-datatable-column", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](138, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](139, "ngx-datatable-column", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](140, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](141, DatatablesComponent_ng_template_141_Template, 2, 8, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](142, "ngx-datatable-column", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](143, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](144, DatatablesComponent_ng_template_144_Template, 15, 0, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("snippetCode", ctx._snippetCodeKitchenSink);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", ctx.exportCSVData);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.basicSelectedOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("rows", ctx.kitchenSinkRows)("rowHeight", 58)("limit", 10)("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("scrollbarH", true)("selectionType", ctx.SelectionType.checkbox)("limit", ctx.basicSelectedOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 280);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120)("sortable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("snippetCode", ctx._snippetCodeInlineEditing);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("headerHeight", 40)("rowHeight", 58)("limit", 10)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("rows", ctx.rows)("scrollbarH", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 280);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100)("width", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120)("sortable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("snippetCode", ctx._snippetCodeRowDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("rowHeight", 58)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("rowHeight", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 280);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120)("sortable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("snippetCode", ctx._snippetCodeCustomCheckbox);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("rowHeight", 58)("limit", 10)("selected", ctx.chkBoxSelected)("selectionType", ctx.SelectionType.checkbox)("scrollbarH", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 280);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120)("sortable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("(", ctx.chkBoxSelected == null ? null : ctx.chkBoxSelected.length, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.chkBoxSelected);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !(ctx.chkBoxSelected == null ? null : ctx.chkBoxSelected.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("snippetCode", ctx._snippetCodeResponsive);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("rowHeight", 58)("footerHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 280);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120)("sortable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("snippetCode", ctx._snippetCodeMultilangual);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("rowHeight", 58)("footerHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](133, 119, "HEADER.NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 280);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](136, 121, "HEADER.EMAIL"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](138, 123, "HEADER.AGE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](140, 125, "HEADER.STATUS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](143, 127, "HEADER.ACTIONS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 120)("sortable", false);
    }
  },
  directives: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_10__.ContentHeaderComponent, _core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_11__.CoreCardSnippetComponent, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_12__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_13__.FeatherIconDirective, _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_19__.CsvDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgSelectMultipleOption"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.DataTableColumnCellDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.DatatableRowDetailDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.DatatableRowDetailTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__.DefaultClassDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownItem],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe, _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_14__.InitialsPipe],
  styles: ["@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\nbootstrap table theme\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px;\n}.ngx-datatable.bootstrap .datatable-header {\n  height: unset !important;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05);\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-body .empty-row {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n}.ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px;\n}.ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}.bg-white {\n  background-color: #ffffff !important;\n}.bg-white .card-header,\n.bg-white .card-footer {\n  background-color: transparent;\n}.border-white {\n  border: 1px solid #ffffff !important;\n}.border-top-white {\n  border-top: 1px solid #ffffff;\n}.border-bottom-white {\n  border-bottom: 1px solid #ffffff;\n}.border-left-white {\n  border-left: 1px solid #ffffff;\n}.border-right-white {\n  border-right: 1px solid #ffffff;\n}.bg-white.badge-glow,\n.border-white.badge-glow,\n.badge-white.badge-glow {\n  box-shadow: 0px 0px 10px #ffffff;\n}.overlay-white {\n  background: #ffffff;\n  /* The Fallback */\n  background: rgba(255, 255, 255, 0.6);\n}input:focus ~ .bg-white {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ffffff !important;\n}.bg-black {\n  background-color: #000000 !important;\n}.bg-black .card-header,\n.bg-black .card-footer {\n  background-color: transparent;\n}.border-black {\n  border: 1px solid #000000 !important;\n}.border-top-black {\n  border-top: 1px solid #000000;\n}.border-bottom-black {\n  border-bottom: 1px solid #000000;\n}.border-left-black {\n  border-left: 1px solid #000000;\n}.border-right-black {\n  border-right: 1px solid #000000;\n}.bg-black.badge-glow,\n.border-black.badge-glow,\n.badge-black.badge-glow {\n  box-shadow: 0px 0px 10px #000000;\n}.overlay-black {\n  background: #000000;\n  /* The Fallback */\n  background: rgba(0, 0, 0, 0.6);\n}input:focus ~ .bg-black {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #000000 !important;\n}.bg-dark {\n  background-color: #4b4b4b !important;\n}.bg-dark .card-header,\n.bg-dark .card-footer {\n  background-color: transparent;\n}.alert-dark {\n  background: rgba(75, 75, 75, 0.12) !important;\n  color: #4b4b4b !important;\n}.alert-dark .alert-heading {\n  box-shadow: rgba(75, 75, 75, 0.4) 0px 6px 15px -7px;\n}.alert-dark .alert-link {\n  color: #3e3e3e !important;\n}.alert-dark .close {\n  color: #4b4b4b !important;\n}.border-dark {\n  border: 1px solid #4b4b4b !important;\n}.border-top-dark {\n  border-top: 1px solid #4b4b4b;\n}.border-bottom-dark {\n  border-bottom: 1px solid #4b4b4b;\n}.border-left-dark {\n  border-left: 1px solid #4b4b4b;\n}.border-right-dark {\n  border-right: 1px solid #4b4b4b;\n}.bg-dark.badge-glow,\n.border-dark.badge-glow,\n.badge-dark.badge-glow {\n  box-shadow: 0px 0px 10px #4b4b4b;\n}.badge.badge-light-dark {\n  background-color: rgba(75, 75, 75, 0.12);\n  color: #4b4b4b !important;\n}.overlay-dark {\n  background: #4b4b4b;\n  /* The Fallback */\n  background: rgba(75, 75, 75, 0.6);\n}.btn-dark {\n  border-color: #4b4b4b !important;\n  background-color: #4b4b4b !important;\n  color: #fff !important;\n}.btn-dark:focus, .btn-dark:active, .btn-dark.active {\n  color: #fff;\n  background-color: #343434 !important;\n}.btn-dark:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #4b4b4b;\n}.btn-dark:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-dark {\n  background-color: transparent;\n  color: #4b4b4b;\n}.btn-flat-dark:hover {\n  color: #4b4b4b;\n}.btn-flat-dark:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(75, 75, 75, 0.12);\n}.btn-flat-dark:active, .btn-flat-dark.active, .btn-flat-dark:focus {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-flat-dark.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-dark {\n  background-color: #4b4b4b;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-dark:hover:not(.disabled):not(:disabled) {\n  background-color: #626262;\n}.btn-relief-dark:active, .btn-relief-dark.active, .btn-relief-dark:focus {\n  background-color: #343434;\n}.btn-relief-dark:hover {\n  color: #fff;\n}.btn-relief-dark:active, .btn-relief-dark.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-dark {\n  border: 1px solid #4b4b4b !important;\n  background-color: transparent;\n  color: #4b4b4b;\n}.btn-outline-dark:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(75, 75, 75, 0.04);\n  color: #4b4b4b;\n}.btn-outline-dark:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .btn-outline-dark:not(:disabled):not(.disabled):focus {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-outline-dark.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-dark.dropdown-toggle {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-outline-dark.waves-effect .waves-ripple,\n.btn-flat-dark.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(75, 75, 75, 0.2) 0, rgba(75, 75, 75, 0.3) 40%, rgba(75, 75, 75, 0.4) 50%, rgba(75, 75, 75, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-dark {\n  background-color: #4b4b4b;\n}.modal.modal-dark .modal-header .modal-title {\n  color: #4b4b4b;\n}.modal.modal-dark .modal-header .close {\n  color: #4b4b4b !important;\n}.progress-bar-dark {\n  background-color: rgba(75, 75, 75, 0.12);\n}.progress-bar-dark .progress-bar {\n  background-color: #4b4b4b;\n}.timeline .timeline-point-dark {\n  border-color: #4b4b4b !important;\n}.timeline .timeline-point-dark i,\n.timeline .timeline-point-dark svg {\n  stroke: #4b4b4b !important;\n}.timeline .timeline-point-dark.timeline-point-indicator {\n  background-color: #4b4b4b !important;\n}.timeline .timeline-point-dark.timeline-point-indicator:before {\n  background: rgba(75, 75, 75, 0.12) !important;\n}.divider.divider-dark .divider-text:before, .divider.divider-dark .divider-text:after {\n  border-color: #4b4b4b !important;\n}input:focus ~ .bg-dark {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #4b4b4b !important;\n}.custom-control-dark .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #4b4b4b;\n  background-color: #4b4b4b;\n}.custom-control-dark.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-dark.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-dark.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-dark.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(75, 75, 75, 0.4) !important;\n}.custom-control-dark .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(75, 75, 75, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-dark .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #4b4b4b !important;\n}.custom-switch-dark .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #4b4b4b !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-dark .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #4b4b4b !important;\n  border-color: #4b4b4b !important;\n}.text-dark.text-darken-1 {\n  color: #343434 !important;\n}.bg-dark.bg-darken-1 {\n  background-color: #343434 !important;\n}.border-dark.border-darken-1 {\n  border: 1px solid #343434 !important;\n}.border-top-dark.border-top-darken-1 {\n  border-top: 1px solid #343434 !important;\n}.border-bottom-dark.border-bottom-darken-1 {\n  border-bottom: 1px solid #343434 !important;\n}.border-left-dark.border-left-darken-1 {\n  border-left: 1px solid #343434 !important;\n}.border-right-dark.border-right-darken-1 {\n  border-right: 1px solid #343434 !important;\n}.overlay-dark.overlay-darken-1 {\n  background: #343434;\n  /* The Fallback */\n  background: rgba(52, 52, 52, 0.6);\n}.text-dark.text-darken-2 {\n  color: #1e1e1e !important;\n}.bg-dark.bg-darken-2 {\n  background-color: #1e1e1e !important;\n}.border-dark.border-darken-2 {\n  border: 1px solid #1e1e1e !important;\n}.border-top-dark.border-top-darken-2 {\n  border-top: 1px solid #1e1e1e !important;\n}.border-bottom-dark.border-bottom-darken-2 {\n  border-bottom: 1px solid #1e1e1e !important;\n}.border-left-dark.border-left-darken-2 {\n  border-left: 1px solid #1e1e1e !important;\n}.border-right-dark.border-right-darken-2 {\n  border-right: 1px solid #1e1e1e !important;\n}.overlay-dark.overlay-darken-2 {\n  background: #1e1e1e;\n  /* The Fallback */\n  background: rgba(30, 30, 30, 0.6);\n}.text-dark.text-darken-3 {\n  color: #626262 !important;\n}.bg-dark.bg-darken-3 {\n  background-color: #626262 !important;\n}.border-dark.border-darken-3 {\n  border: 1px solid #626262 !important;\n}.border-top-dark.border-top-darken-3 {\n  border-top: 1px solid #626262 !important;\n}.border-bottom-dark.border-bottom-darken-3 {\n  border-bottom: 1px solid #626262 !important;\n}.border-left-dark.border-left-darken-3 {\n  border-left: 1px solid #626262 !important;\n}.border-right-dark.border-right-darken-3 {\n  border-right: 1px solid #626262 !important;\n}.overlay-dark.overlay-darken-3 {\n  background: #626262;\n  /* The Fallback */\n  background: rgba(98, 98, 98, 0.6);\n}.bg-light {\n  background-color: #f6f6f6 !important;\n}.bg-light .card-header,\n.bg-light .card-footer {\n  background-color: transparent;\n}.border-light {\n  border: 1px solid #f6f6f6 !important;\n}.border-top-light {\n  border-top: 1px solid #f6f6f6;\n}.border-bottom-light {\n  border-bottom: 1px solid #f6f6f6;\n}.border-left-light {\n  border-left: 1px solid #f6f6f6;\n}.border-right-light {\n  border-right: 1px solid #f6f6f6;\n}.bg-light.badge-glow,\n.border-light.badge-glow,\n.badge-light.badge-glow {\n  box-shadow: 0px 0px 10px #f6f6f6;\n}.overlay-light {\n  background: #f6f6f6;\n  /* The Fallback */\n  background: rgba(246, 246, 246, 0.6);\n}input:focus ~ .bg-light {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #f6f6f6 !important;\n}.text-primary.text-lighten-5 {\n  color: #dedbfb !important;\n}.bg-primary.bg-lighten-5 {\n  background-color: #dedbfb !important;\n}.border-primary.border-lighten-5 {\n  border: 1px solid #dedbfb !important;\n}.border-top-primary.border-top-lighten-5 {\n  border-top: 1px solid #dedbfb !important;\n}.border-bottom-primary.border-bottom-lighten-5 {\n  border-bottom: 1px solid #dedbfb !important;\n}.border-left-primary.border-left-lighten-5 {\n  border-left: 1px solid #dedbfb !important;\n}.border-right-primary.border-right-lighten-5 {\n  border-right: 1px solid #dedbfb !important;\n}.overlay-primary.overlay-lighten-5 {\n  background: #dedbfb;\n  /* The Fallback */\n  background: rgba(222, 219, 251, 0.6);\n}.text-primary.text-lighten-4 {\n  color: #c9c4f9 !important;\n}.bg-primary.bg-lighten-4 {\n  background-color: #c9c4f9 !important;\n}.border-primary.border-lighten-4 {\n  border: 1px solid #c9c4f9 !important;\n}.border-top-primary.border-top-lighten-4 {\n  border-top: 1px solid #c9c4f9 !important;\n}.border-bottom-primary.border-bottom-lighten-4 {\n  border-bottom: 1px solid #c9c4f9 !important;\n}.border-left-primary.border-left-lighten-4 {\n  border-left: 1px solid #c9c4f9 !important;\n}.border-right-primary.border-right-lighten-4 {\n  border-right: 1px solid #c9c4f9 !important;\n}.overlay-primary.overlay-lighten-4 {\n  background: #c9c4f9;\n  /* The Fallback */\n  background: rgba(201, 196, 249, 0.6);\n}.text-primary.text-lighten-3 {\n  color: #b3adf7 !important;\n}.bg-primary.bg-lighten-3 {\n  background-color: #b3adf7 !important;\n}.border-primary.border-lighten-3 {\n  border: 1px solid #b3adf7 !important;\n}.border-top-primary.border-top-lighten-3 {\n  border-top: 1px solid #b3adf7 !important;\n}.border-bottom-primary.border-bottom-lighten-3 {\n  border-bottom: 1px solid #b3adf7 !important;\n}.border-left-primary.border-left-lighten-3 {\n  border-left: 1px solid #b3adf7 !important;\n}.border-right-primary.border-right-lighten-3 {\n  border-right: 1px solid #b3adf7 !important;\n}.overlay-primary.overlay-lighten-3 {\n  background: #b3adf7;\n  /* The Fallback */\n  background: rgba(179, 173, 247, 0.6);\n}.text-primary.text-lighten-2 {\n  color: #9e95f5 !important;\n}.bg-primary.bg-lighten-2 {\n  background-color: #9e95f5 !important;\n}.border-primary.border-lighten-2 {\n  border: 1px solid #9e95f5 !important;\n}.border-top-primary.border-top-lighten-2 {\n  border-top: 1px solid #9e95f5 !important;\n}.border-bottom-primary.border-bottom-lighten-2 {\n  border-bottom: 1px solid #9e95f5 !important;\n}.border-left-primary.border-left-lighten-2 {\n  border-left: 1px solid #9e95f5 !important;\n}.border-right-primary.border-right-lighten-2 {\n  border-right: 1px solid #9e95f5 !important;\n}.overlay-primary.overlay-lighten-2 {\n  background: #9e95f5;\n  /* The Fallback */\n  background: rgba(158, 149, 245, 0.6);\n}.text-primary.text-lighten-1 {\n  color: #887ef2 !important;\n}.bg-primary.bg-lighten-1 {\n  background-color: #887ef2 !important;\n}.border-primary.border-lighten-1 {\n  border: 1px solid #887ef2 !important;\n}.border-top-primary.border-top-lighten-1 {\n  border-top: 1px solid #887ef2 !important;\n}.border-bottom-primary.border-bottom-lighten-1 {\n  border-bottom: 1px solid #887ef2 !important;\n}.border-left-primary.border-left-lighten-1 {\n  border-left: 1px solid #887ef2 !important;\n}.border-right-primary.border-right-lighten-1 {\n  border-right: 1px solid #887ef2 !important;\n}.overlay-primary.overlay-lighten-1 {\n  background: #887ef2;\n  /* The Fallback */\n  background: rgba(136, 126, 242, 0.6);\n}.bg-primary {\n  background-color: #7367f0 !important;\n}.bg-primary .card-header,\n.bg-primary .card-footer {\n  background-color: transparent;\n}.alert-primary {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367f0 !important;\n}.alert-primary .alert-heading {\n  box-shadow: rgba(115, 103, 240, 0.4) 0px 6px 15px -7px;\n}.alert-primary .alert-link {\n  color: #5e50ee !important;\n}.alert-primary .close {\n  color: #7367f0 !important;\n}.bg-light-primary {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367f0 !important;\n}.bg-light-primary.fc-h-event, .bg-light-primary.fc-v-event {\n  border-color: rgba(115, 103, 240, 0.1);\n}.bg-light-primary .fc-list-event-dot,\n.bg-light-primary .fc-daygrid-event-dot {\n  border-color: #7367f0 !important;\n}.bg-light-primary.fc-list-event:hover td {\n  background: rgba(115, 103, 240, 0.1) !important;\n}.bg-light-primary.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-primary {\n  color: #7367f0 !important;\n}.border-primary {\n  border: 1px solid #7367f0 !important;\n}.border-top-primary {\n  border-top: 1px solid #7367f0;\n}.border-bottom-primary {\n  border-bottom: 1px solid #7367f0;\n}.border-left-primary {\n  border-left: 1px solid #7367f0;\n}.border-right-primary {\n  border-right: 1px solid #7367f0;\n}.bg-primary.badge-glow,\n.border-primary.badge-glow,\n.badge-primary.badge-glow {\n  box-shadow: 0px 0px 10px #7367f0;\n}.badge.badge-light-primary {\n  background-color: rgba(115, 103, 240, 0.12);\n  color: #7367f0 !important;\n}.overlay-primary {\n  background: #7367f0;\n  /* The Fallback */\n  background: rgba(115, 103, 240, 0.6);\n}.btn-primary {\n  border-color: #7367f0 !important;\n  background-color: #7367f0 !important;\n  color: #fff !important;\n}.btn-primary:focus, .btn-primary:active, .btn-primary.active {\n  color: #fff;\n  background-color: #5e50ee !important;\n}.btn-primary:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #7367f0;\n}.btn-primary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-primary {\n  background-color: transparent;\n  color: #7367f0;\n}.btn-flat-primary:hover {\n  color: #7367f0;\n}.btn-flat-primary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(115, 103, 240, 0.12);\n}.btn-flat-primary:active, .btn-flat-primary.active, .btn-flat-primary:focus {\n  background-color: rgba(115, 103, 240, 0.2);\n  color: #7367f0;\n}.btn-flat-primary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-primary {\n  background-color: #7367f0;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-primary:hover:not(.disabled):not(:disabled) {\n  background-color: #887ef2;\n}.btn-relief-primary:active, .btn-relief-primary.active, .btn-relief-primary:focus {\n  background-color: #5e50ee;\n}.btn-relief-primary:hover {\n  color: #fff;\n}.btn-relief-primary:active, .btn-relief-primary.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-primary {\n  border: 1px solid #7367f0 !important;\n  background-color: transparent;\n  color: #7367f0;\n}.btn-outline-primary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(115, 103, 240, 0.04);\n  color: #7367f0;\n}.btn-outline-primary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .btn-outline-primary:not(:disabled):not(.disabled):focus {\n  background-color: rgba(115, 103, 240, 0.2);\n  color: #7367f0;\n}.btn-outline-primary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-primary.dropdown-toggle {\n  background-color: rgba(115, 103, 240, 0.2);\n  color: #7367f0;\n}.btn-outline-primary.waves-effect .waves-ripple,\n.btn-flat-primary.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(115, 103, 240, 0.2) 0, rgba(115, 103, 240, 0.3) 40%, rgba(115, 103, 240, 0.4) 50%, rgba(115, 103, 240, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-primary {\n  background-color: #7367f0;\n}.modal.modal-primary .modal-header .modal-title {\n  color: #7367f0;\n}.modal.modal-primary .modal-header .close {\n  color: #7367f0 !important;\n}.pagination-primary .page-item.active .page-link {\n  background: #7367f0 !important;\n  color: #fff;\n}.pagination-primary .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-primary .page-item .page-link:hover {\n  color: #7367f0;\n}.pagination-primary .page-item.prev-item .page-link:hover, .pagination-primary .page-item.next-item .page-link:hover {\n  background: #7367f0;\n  color: #fff;\n}.pagination-primary .page-item.next-item .page-link:active:after, .pagination-primary .page-item.next-item .page-link:hover:after, .pagination-primary .page-item.next .page-link:active:after, .pagination-primary .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-primary .page-item.prev-item .page-link:active:before, .pagination-primary .page-item.prev-item .page-link:hover:before, .pagination-primary .page-item.prev .page-link:active:before, .pagination-primary .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-primary .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #7367f0 !important;\n  border-color: #7367f0;\n  box-shadow: 0 4px 18px -4px rgba(115, 103, 240, 0.65);\n}.progress-bar-primary {\n  background-color: rgba(115, 103, 240, 0.12);\n}.progress-bar-primary .progress-bar {\n  background-color: #7367f0;\n}.timeline .timeline-point-primary {\n  border-color: #7367f0 !important;\n}.timeline .timeline-point-primary i,\n.timeline .timeline-point-primary svg {\n  stroke: #7367f0 !important;\n}.timeline .timeline-point-primary.timeline-point-indicator {\n  background-color: #7367f0 !important;\n}.timeline .timeline-point-primary.timeline-point-indicator:before {\n  background: rgba(115, 103, 240, 0.12) !important;\n}.divider.divider-primary .divider-text:before, .divider.divider-primary .divider-text:after {\n  border-color: #7367f0 !important;\n}input:focus ~ .bg-primary {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #7367f0 !important;\n}.custom-control-primary .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #7367f0;\n  background-color: #7367f0;\n}.custom-control-primary.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-primary.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-primary.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-primary.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4) !important;\n}.custom-control-primary .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(115, 103, 240, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-primary .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #7367f0 !important;\n}.custom-switch-primary .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #7367f0 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-primary .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #7367f0 !important;\n  border-color: #7367f0 !important;\n}.text-primary.text-darken-1 {\n  color: #5e50ee !important;\n}.bg-primary.bg-darken-1 {\n  background-color: #5e50ee !important;\n}.border-primary.border-darken-1 {\n  border: 1px solid #5e50ee !important;\n}.border-top-primary.border-top-darken-1 {\n  border-top: 1px solid #5e50ee !important;\n}.border-bottom-primary.border-bottom-darken-1 {\n  border-bottom: 1px solid #5e50ee !important;\n}.border-left-primary.border-left-darken-1 {\n  border-left: 1px solid #5e50ee !important;\n}.border-right-primary.border-right-darken-1 {\n  border-right: 1px solid #5e50ee !important;\n}.overlay-primary.overlay-darken-1 {\n  background: #5e50ee;\n  /* The Fallback */\n  background: rgba(94, 80, 238, 0.6);\n}.text-primary.text-darken-2 {\n  color: #4839eb !important;\n}.bg-primary.bg-darken-2 {\n  background-color: #4839eb !important;\n}.border-primary.border-darken-2 {\n  border: 1px solid #4839eb !important;\n}.border-top-primary.border-top-darken-2 {\n  border-top: 1px solid #4839eb !important;\n}.border-bottom-primary.border-bottom-darken-2 {\n  border-bottom: 1px solid #4839eb !important;\n}.border-left-primary.border-left-darken-2 {\n  border-left: 1px solid #4839eb !important;\n}.border-right-primary.border-right-darken-2 {\n  border-right: 1px solid #4839eb !important;\n}.overlay-primary.overlay-darken-2 {\n  background: #4839eb;\n  /* The Fallback */\n  background: rgba(72, 57, 235, 0.6);\n}.text-primary.text-darken-3 {\n  color: #3321e9 !important;\n}.bg-primary.bg-darken-3 {\n  background-color: #3321e9 !important;\n}.border-primary.border-darken-3 {\n  border: 1px solid #3321e9 !important;\n}.border-top-primary.border-top-darken-3 {\n  border-top: 1px solid #3321e9 !important;\n}.border-bottom-primary.border-bottom-darken-3 {\n  border-bottom: 1px solid #3321e9 !important;\n}.border-left-primary.border-left-darken-3 {\n  border-left: 1px solid #3321e9 !important;\n}.border-right-primary.border-right-darken-3 {\n  border-right: 1px solid #3321e9 !important;\n}.overlay-primary.overlay-darken-3 {\n  background: #3321e9;\n  /* The Fallback */\n  background: rgba(51, 33, 233, 0.6);\n}.text-primary.text-darken-4 {\n  color: #2716db !important;\n}.bg-primary.bg-darken-4 {\n  background-color: #2716db !important;\n}.border-primary.border-darken-4 {\n  border: 1px solid #2716db !important;\n}.border-top-primary.border-top-darken-4 {\n  border-top: 1px solid #2716db !important;\n}.border-bottom-primary.border-bottom-darken-4 {\n  border-bottom: 1px solid #2716db !important;\n}.border-left-primary.border-left-darken-4 {\n  border-left: 1px solid #2716db !important;\n}.border-right-primary.border-right-darken-4 {\n  border-right: 1px solid #2716db !important;\n}.overlay-primary.overlay-darken-4 {\n  background: #2716db;\n  /* The Fallback */\n  background: rgba(39, 22, 219, 0.6);\n}.text-primary.text-accent-1 {\n  color: #bdfdff !important;\n}.bg-primary.bg-accent-1 {\n  background-color: #bdfdff !important;\n}.border-primary.border-accent-1 {\n  border: 1px solid #bdfdff !important;\n}.border-top-primary.border-top-accent-1 {\n  border-top: 1px solid #bdfdff !important;\n}.border-bottom-primary.border-bottom-accent-1 {\n  border-bottom: 1px solid #bdfdff !important;\n}.border-left-primary.border-left-accent-1 {\n  border-left: 1px solid #bdfdff !important;\n}.border-right-primary.border-right-accent-1 {\n  border-right: 1px solid #bdfdff !important;\n}.overlay-primary.overlay-accent-1 {\n  background: #bdfdff;\n  /* The Fallback */\n  background: rgba(189, 253, 255, 0.6);\n}.text-primary.text-accent-2 {\n  color: #8afbff !important;\n}.bg-primary.bg-accent-2 {\n  background-color: #8afbff !important;\n}.border-primary.border-accent-2 {\n  border: 1px solid #8afbff !important;\n}.border-top-primary.border-top-accent-2 {\n  border-top: 1px solid #8afbff !important;\n}.border-bottom-primary.border-bottom-accent-2 {\n  border-bottom: 1px solid #8afbff !important;\n}.border-left-primary.border-left-accent-2 {\n  border-left: 1px solid #8afbff !important;\n}.border-right-primary.border-right-accent-2 {\n  border-right: 1px solid #8afbff !important;\n}.overlay-primary.overlay-accent-2 {\n  background: #8afbff;\n  /* The Fallback */\n  background: rgba(138, 251, 255, 0.6);\n}.text-primary.text-accent-3 {\n  color: #57faff !important;\n}.bg-primary.bg-accent-3 {\n  background-color: #57faff !important;\n}.border-primary.border-accent-3 {\n  border: 1px solid #57faff !important;\n}.border-top-primary.border-top-accent-3 {\n  border-top: 1px solid #57faff !important;\n}.border-bottom-primary.border-bottom-accent-3 {\n  border-bottom: 1px solid #57faff !important;\n}.border-left-primary.border-left-accent-3 {\n  border-left: 1px solid #57faff !important;\n}.border-right-primary.border-right-accent-3 {\n  border-right: 1px solid #57faff !important;\n}.overlay-primary.overlay-accent-3 {\n  background: #57faff;\n  /* The Fallback */\n  background: rgba(87, 250, 255, 0.6);\n}.text-primary.text-accent-4 {\n  color: #3df9ff !important;\n}.bg-primary.bg-accent-4 {\n  background-color: #3df9ff !important;\n}.border-primary.border-accent-4 {\n  border: 1px solid #3df9ff !important;\n}.border-top-primary.border-top-accent-4 {\n  border-top: 1px solid #3df9ff !important;\n}.border-bottom-primary.border-bottom-accent-4 {\n  border-bottom: 1px solid #3df9ff !important;\n}.border-left-primary.border-left-accent-4 {\n  border-left: 1px solid #3df9ff !important;\n}.border-right-primary.border-right-accent-4 {\n  border-right: 1px solid #3df9ff !important;\n}.overlay-primary.overlay-accent-4 {\n  background: #3df9ff;\n  /* The Fallback */\n  background: rgba(61, 249, 255, 0.6);\n}.text-secondary.text-lighten-5 {\n  color: #c4c6c8 !important;\n}.bg-secondary.bg-lighten-5 {\n  background-color: #c4c6c8 !important;\n}.border-secondary.border-lighten-5 {\n  border: 1px solid #c4c6c8 !important;\n}.border-top-secondary.border-top-lighten-5 {\n  border-top: 1px solid #c4c6c8 !important;\n}.border-bottom-secondary.border-bottom-lighten-5 {\n  border-bottom: 1px solid #c4c6c8 !important;\n}.border-left-secondary.border-left-lighten-5 {\n  border-left: 1px solid #c4c6c8 !important;\n}.border-right-secondary.border-right-lighten-5 {\n  border-right: 1px solid #c4c6c8 !important;\n}.overlay-secondary.overlay-lighten-5 {\n  background: #c4c6c8;\n  /* The Fallback */\n  background: rgba(196, 198, 200, 0.6);\n}.text-secondary.text-lighten-4 {\n  color: #b7b9bc !important;\n}.bg-secondary.bg-lighten-4 {\n  background-color: #b7b9bc !important;\n}.border-secondary.border-lighten-4 {\n  border: 1px solid #b7b9bc !important;\n}.border-top-secondary.border-top-lighten-4 {\n  border-top: 1px solid #b7b9bc !important;\n}.border-bottom-secondary.border-bottom-lighten-4 {\n  border-bottom: 1px solid #b7b9bc !important;\n}.border-left-secondary.border-left-lighten-4 {\n  border-left: 1px solid #b7b9bc !important;\n}.border-right-secondary.border-right-lighten-4 {\n  border-right: 1px solid #b7b9bc !important;\n}.overlay-secondary.overlay-lighten-4 {\n  background: #b7b9bc;\n  /* The Fallback */\n  background: rgba(183, 185, 188, 0.6);\n}.text-secondary.text-lighten-3 {\n  color: #aaacb0 !important;\n}.bg-secondary.bg-lighten-3 {\n  background-color: #aaacb0 !important;\n}.border-secondary.border-lighten-3 {\n  border: 1px solid #aaacb0 !important;\n}.border-top-secondary.border-top-lighten-3 {\n  border-top: 1px solid #aaacb0 !important;\n}.border-bottom-secondary.border-bottom-lighten-3 {\n  border-bottom: 1px solid #aaacb0 !important;\n}.border-left-secondary.border-left-lighten-3 {\n  border-left: 1px solid #aaacb0 !important;\n}.border-right-secondary.border-right-lighten-3 {\n  border-right: 1px solid #aaacb0 !important;\n}.overlay-secondary.overlay-lighten-3 {\n  background: #aaacb0;\n  /* The Fallback */\n  background: rgba(170, 172, 176, 0.6);\n}.text-secondary.text-lighten-2 {\n  color: #9ca0a4 !important;\n}.bg-secondary.bg-lighten-2 {\n  background-color: #9ca0a4 !important;\n}.border-secondary.border-lighten-2 {\n  border: 1px solid #9ca0a4 !important;\n}.border-top-secondary.border-top-lighten-2 {\n  border-top: 1px solid #9ca0a4 !important;\n}.border-bottom-secondary.border-bottom-lighten-2 {\n  border-bottom: 1px solid #9ca0a4 !important;\n}.border-left-secondary.border-left-lighten-2 {\n  border-left: 1px solid #9ca0a4 !important;\n}.border-right-secondary.border-right-lighten-2 {\n  border-right: 1px solid #9ca0a4 !important;\n}.overlay-secondary.overlay-lighten-2 {\n  background: #9ca0a4;\n  /* The Fallback */\n  background: rgba(156, 160, 164, 0.6);\n}.text-secondary.text-lighten-1 {\n  color: #8f9397 !important;\n}.bg-secondary.bg-lighten-1 {\n  background-color: #8f9397 !important;\n}.border-secondary.border-lighten-1 {\n  border: 1px solid #8f9397 !important;\n}.border-top-secondary.border-top-lighten-1 {\n  border-top: 1px solid #8f9397 !important;\n}.border-bottom-secondary.border-bottom-lighten-1 {\n  border-bottom: 1px solid #8f9397 !important;\n}.border-left-secondary.border-left-lighten-1 {\n  border-left: 1px solid #8f9397 !important;\n}.border-right-secondary.border-right-lighten-1 {\n  border-right: 1px solid #8f9397 !important;\n}.overlay-secondary.overlay-lighten-1 {\n  background: #8f9397;\n  /* The Fallback */\n  background: rgba(143, 147, 151, 0.6);\n}.bg-secondary {\n  background-color: #82868b !important;\n}.bg-secondary .card-header,\n.bg-secondary .card-footer {\n  background-color: transparent;\n}.alert-secondary {\n  background: rgba(130, 134, 139, 0.12) !important;\n  color: #82868b !important;\n}.alert-secondary .alert-heading {\n  box-shadow: rgba(130, 134, 139, 0.4) 0px 6px 15px -7px;\n}.alert-secondary .alert-link {\n  color: #75797e !important;\n}.alert-secondary .close {\n  color: #82868b !important;\n}.bg-light-secondary {\n  background: rgba(130, 134, 139, 0.12) !important;\n  color: #82868b !important;\n}.bg-light-secondary.fc-h-event, .bg-light-secondary.fc-v-event {\n  border-color: rgba(130, 134, 139, 0.1);\n}.bg-light-secondary .fc-list-event-dot,\n.bg-light-secondary .fc-daygrid-event-dot {\n  border-color: #82868b !important;\n}.bg-light-secondary.fc-list-event:hover td {\n  background: rgba(130, 134, 139, 0.1) !important;\n}.bg-light-secondary.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-secondary {\n  color: #82868b !important;\n}.border-secondary {\n  border: 1px solid #82868b !important;\n}.border-top-secondary {\n  border-top: 1px solid #82868b;\n}.border-bottom-secondary {\n  border-bottom: 1px solid #82868b;\n}.border-left-secondary {\n  border-left: 1px solid #82868b;\n}.border-right-secondary {\n  border-right: 1px solid #82868b;\n}.bg-secondary.badge-glow,\n.border-secondary.badge-glow,\n.badge-secondary.badge-glow {\n  box-shadow: 0px 0px 10px #82868b;\n}.badge.badge-light-secondary {\n  background-color: rgba(130, 134, 139, 0.12);\n  color: #82868b !important;\n}.overlay-secondary {\n  background: #82868b;\n  /* The Fallback */\n  background: rgba(130, 134, 139, 0.6);\n}.btn-secondary {\n  border-color: #82868b !important;\n  background-color: #82868b !important;\n  color: #fff !important;\n}.btn-secondary:focus, .btn-secondary:active, .btn-secondary.active {\n  color: #fff;\n  background-color: #75797e !important;\n}.btn-secondary:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #82868b;\n}.btn-secondary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-secondary {\n  background-color: transparent;\n  color: #82868b;\n}.btn-flat-secondary:hover {\n  color: #82868b;\n}.btn-flat-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(130, 134, 139, 0.12);\n}.btn-flat-secondary:active, .btn-flat-secondary.active, .btn-flat-secondary:focus {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-flat-secondary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-secondary {\n  background-color: #82868b;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: #8f9397;\n}.btn-relief-secondary:active, .btn-relief-secondary.active, .btn-relief-secondary:focus {\n  background-color: #75797e;\n}.btn-relief-secondary:hover {\n  color: #fff;\n}.btn-relief-secondary:active, .btn-relief-secondary.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-secondary {\n  border: 1px solid #82868b !important;\n  background-color: transparent;\n  color: #82868b;\n}.btn-outline-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(130, 134, 139, 0.04);\n  color: #82868b;\n}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .btn-outline-secondary:not(:disabled):not(.disabled):focus {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-outline-secondary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-secondary.dropdown-toggle {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-outline-secondary.waves-effect .waves-ripple,\n.btn-flat-secondary.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(130, 134, 139, 0.2) 0, rgba(130, 134, 139, 0.3) 40%, rgba(130, 134, 139, 0.4) 50%, rgba(130, 134, 139, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-secondary {\n  background-color: #82868b;\n}.modal.modal-secondary .modal-header .modal-title {\n  color: #82868b;\n}.modal.modal-secondary .modal-header .close {\n  color: #82868b !important;\n}.pagination-secondary .page-item.active .page-link {\n  background: #82868b !important;\n  color: #fff;\n}.pagination-secondary .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-secondary .page-item .page-link:hover {\n  color: #82868b;\n}.pagination-secondary .page-item.prev-item .page-link:hover, .pagination-secondary .page-item.next-item .page-link:hover {\n  background: #82868b;\n  color: #fff;\n}.pagination-secondary .page-item.next-item .page-link:active:after, .pagination-secondary .page-item.next-item .page-link:hover:after, .pagination-secondary .page-item.next .page-link:active:after, .pagination-secondary .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-secondary .page-item.prev-item .page-link:active:before, .pagination-secondary .page-item.prev-item .page-link:hover:before, .pagination-secondary .page-item.prev .page-link:active:before, .pagination-secondary .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-secondary .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #82868b !important;\n  border-color: #82868b;\n  box-shadow: 0 4px 18px -4px rgba(130, 134, 139, 0.65);\n}.progress-bar-secondary {\n  background-color: rgba(130, 134, 139, 0.12);\n}.progress-bar-secondary .progress-bar {\n  background-color: #82868b;\n}.timeline .timeline-point-secondary {\n  border-color: #82868b !important;\n}.timeline .timeline-point-secondary i,\n.timeline .timeline-point-secondary svg {\n  stroke: #82868b !important;\n}.timeline .timeline-point-secondary.timeline-point-indicator {\n  background-color: #82868b !important;\n}.timeline .timeline-point-secondary.timeline-point-indicator:before {\n  background: rgba(130, 134, 139, 0.12) !important;\n}.divider.divider-secondary .divider-text:before, .divider.divider-secondary .divider-text:after {\n  border-color: #82868b !important;\n}input:focus ~ .bg-secondary {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #82868b !important;\n}.custom-control-secondary .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #82868b;\n  background-color: #82868b;\n}.custom-control-secondary.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-secondary.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-secondary.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-secondary.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(130, 134, 139, 0.4) !important;\n}.custom-control-secondary .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(130, 134, 139, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-secondary .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #82868b !important;\n}.custom-switch-secondary .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #82868b !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-secondary .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #82868b !important;\n  border-color: #82868b !important;\n}.text-secondary.text-darken-1 {\n  color: #75797e !important;\n}.bg-secondary.bg-darken-1 {\n  background-color: #75797e !important;\n}.border-secondary.border-darken-1 {\n  border: 1px solid #75797e !important;\n}.border-top-secondary.border-top-darken-1 {\n  border-top: 1px solid #75797e !important;\n}.border-bottom-secondary.border-bottom-darken-1 {\n  border-bottom: 1px solid #75797e !important;\n}.border-left-secondary.border-left-darken-1 {\n  border-left: 1px solid #75797e !important;\n}.border-right-secondary.border-right-darken-1 {\n  border-right: 1px solid #75797e !important;\n}.overlay-secondary.overlay-darken-1 {\n  background: #75797e;\n  /* The Fallback */\n  background: rgba(117, 121, 126, 0.6);\n}.text-secondary.text-darken-2 {\n  color: #696d71 !important;\n}.bg-secondary.bg-darken-2 {\n  background-color: #696d71 !important;\n}.border-secondary.border-darken-2 {\n  border: 1px solid #696d71 !important;\n}.border-top-secondary.border-top-darken-2 {\n  border-top: 1px solid #696d71 !important;\n}.border-bottom-secondary.border-bottom-darken-2 {\n  border-bottom: 1px solid #696d71 !important;\n}.border-left-secondary.border-left-darken-2 {\n  border-left: 1px solid #696d71 !important;\n}.border-right-secondary.border-right-darken-2 {\n  border-right: 1px solid #696d71 !important;\n}.overlay-secondary.overlay-darken-2 {\n  background: #696d71;\n  /* The Fallback */\n  background: rgba(105, 109, 113, 0.6);\n}.text-secondary.text-darken-3 {\n  color: #5d6064 !important;\n}.bg-secondary.bg-darken-3 {\n  background-color: #5d6064 !important;\n}.border-secondary.border-darken-3 {\n  border: 1px solid #5d6064 !important;\n}.border-top-secondary.border-top-darken-3 {\n  border-top: 1px solid #5d6064 !important;\n}.border-bottom-secondary.border-bottom-darken-3 {\n  border-bottom: 1px solid #5d6064 !important;\n}.border-left-secondary.border-left-darken-3 {\n  border-left: 1px solid #5d6064 !important;\n}.border-right-secondary.border-right-darken-3 {\n  border-right: 1px solid #5d6064 !important;\n}.overlay-secondary.overlay-darken-3 {\n  background: #5d6064;\n  /* The Fallback */\n  background: rgba(93, 96, 100, 0.6);\n}.text-secondary.text-darken-4 {\n  color: #505357 !important;\n}.bg-secondary.bg-darken-4 {\n  background-color: #505357 !important;\n}.border-secondary.border-darken-4 {\n  border: 1px solid #505357 !important;\n}.border-top-secondary.border-top-darken-4 {\n  border-top: 1px solid #505357 !important;\n}.border-bottom-secondary.border-bottom-darken-4 {\n  border-bottom: 1px solid #505357 !important;\n}.border-left-secondary.border-left-darken-4 {\n  border-left: 1px solid #505357 !important;\n}.border-right-secondary.border-right-darken-4 {\n  border-right: 1px solid #505357 !important;\n}.overlay-secondary.overlay-darken-4 {\n  background: #505357;\n  /* The Fallback */\n  background: rgba(80, 83, 87, 0.6);\n}.text-success.text-lighten-5 {\n  color: #88e7b2 !important;\n}.bg-success.bg-lighten-5 {\n  background-color: #88e7b2 !important;\n}.border-success.border-lighten-5 {\n  border: 1px solid #88e7b2 !important;\n}.border-top-success.border-top-lighten-5 {\n  border-top: 1px solid #88e7b2 !important;\n}.border-bottom-success.border-bottom-lighten-5 {\n  border-bottom: 1px solid #88e7b2 !important;\n}.border-left-success.border-left-lighten-5 {\n  border-left: 1px solid #88e7b2 !important;\n}.border-right-success.border-right-lighten-5 {\n  border-right: 1px solid #88e7b2 !important;\n}.overlay-success.overlay-lighten-5 {\n  background: #88e7b2;\n  /* The Fallback */\n  background: rgba(136, 231, 178, 0.6);\n}.text-success.text-lighten-4 {\n  color: #72e3a4 !important;\n}.bg-success.bg-lighten-4 {\n  background-color: #72e3a4 !important;\n}.border-success.border-lighten-4 {\n  border: 1px solid #72e3a4 !important;\n}.border-top-success.border-top-lighten-4 {\n  border-top: 1px solid #72e3a4 !important;\n}.border-bottom-success.border-bottom-lighten-4 {\n  border-bottom: 1px solid #72e3a4 !important;\n}.border-left-success.border-left-lighten-4 {\n  border-left: 1px solid #72e3a4 !important;\n}.border-right-success.border-right-lighten-4 {\n  border-right: 1px solid #72e3a4 !important;\n}.overlay-success.overlay-lighten-4 {\n  background: #72e3a4;\n  /* The Fallback */\n  background: rgba(114, 227, 164, 0.6);\n}.text-success.text-lighten-3 {\n  color: #5dde97 !important;\n}.bg-success.bg-lighten-3 {\n  background-color: #5dde97 !important;\n}.border-success.border-lighten-3 {\n  border: 1px solid #5dde97 !important;\n}.border-top-success.border-top-lighten-3 {\n  border-top: 1px solid #5dde97 !important;\n}.border-bottom-success.border-bottom-lighten-3 {\n  border-bottom: 1px solid #5dde97 !important;\n}.border-left-success.border-left-lighten-3 {\n  border-left: 1px solid #5dde97 !important;\n}.border-right-success.border-right-lighten-3 {\n  border-right: 1px solid #5dde97 !important;\n}.overlay-success.overlay-lighten-3 {\n  background: #5dde97;\n  /* The Fallback */\n  background: rgba(93, 222, 151, 0.6);\n}.text-success.text-lighten-2 {\n  color: #48da89 !important;\n}.bg-success.bg-lighten-2 {\n  background-color: #48da89 !important;\n}.border-success.border-lighten-2 {\n  border: 1px solid #48da89 !important;\n}.border-top-success.border-top-lighten-2 {\n  border-top: 1px solid #48da89 !important;\n}.border-bottom-success.border-bottom-lighten-2 {\n  border-bottom: 1px solid #48da89 !important;\n}.border-left-success.border-left-lighten-2 {\n  border-left: 1px solid #48da89 !important;\n}.border-right-success.border-right-lighten-2 {\n  border-right: 1px solid #48da89 !important;\n}.overlay-success.overlay-lighten-2 {\n  background: #48da89;\n  /* The Fallback */\n  background: rgba(72, 218, 137, 0.6);\n}.text-success.text-lighten-1 {\n  color: #33d67c !important;\n}.bg-success.bg-lighten-1 {\n  background-color: #33d67c !important;\n}.border-success.border-lighten-1 {\n  border: 1px solid #33d67c !important;\n}.border-top-success.border-top-lighten-1 {\n  border-top: 1px solid #33d67c !important;\n}.border-bottom-success.border-bottom-lighten-1 {\n  border-bottom: 1px solid #33d67c !important;\n}.border-left-success.border-left-lighten-1 {\n  border-left: 1px solid #33d67c !important;\n}.border-right-success.border-right-lighten-1 {\n  border-right: 1px solid #33d67c !important;\n}.overlay-success.overlay-lighten-1 {\n  background: #33d67c;\n  /* The Fallback */\n  background: rgba(51, 214, 124, 0.6);\n}.bg-success {\n  background-color: #28c76f !important;\n}.bg-success .card-header,\n.bg-success .card-footer {\n  background-color: transparent;\n}.alert-success {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28c76f !important;\n}.alert-success .alert-heading {\n  box-shadow: rgba(40, 199, 111, 0.4) 0px 6px 15px -7px;\n}.alert-success .alert-link {\n  color: #24b263 !important;\n}.alert-success .close {\n  color: #28c76f !important;\n}.bg-light-success {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28c76f !important;\n}.bg-light-success.fc-h-event, .bg-light-success.fc-v-event {\n  border-color: rgba(40, 199, 111, 0.1);\n}.bg-light-success .fc-list-event-dot,\n.bg-light-success .fc-daygrid-event-dot {\n  border-color: #28c76f !important;\n}.bg-light-success.fc-list-event:hover td {\n  background: rgba(40, 199, 111, 0.1) !important;\n}.bg-light-success.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-success {\n  color: #28c76f !important;\n}.border-success {\n  border: 1px solid #28c76f !important;\n}.border-top-success {\n  border-top: 1px solid #28c76f;\n}.border-bottom-success {\n  border-bottom: 1px solid #28c76f;\n}.border-left-success {\n  border-left: 1px solid #28c76f;\n}.border-right-success {\n  border-right: 1px solid #28c76f;\n}.bg-success.badge-glow,\n.border-success.badge-glow,\n.badge-success.badge-glow {\n  box-shadow: 0px 0px 10px #28c76f;\n}.badge.badge-light-success {\n  background-color: rgba(40, 199, 111, 0.12);\n  color: #28c76f !important;\n}.overlay-success {\n  background: #28c76f;\n  /* The Fallback */\n  background: rgba(40, 199, 111, 0.6);\n}.btn-success {\n  border-color: #28c76f !important;\n  background-color: #28c76f !important;\n  color: #fff !important;\n}.btn-success:focus, .btn-success:active, .btn-success.active {\n  color: #fff;\n  background-color: #24b263 !important;\n}.btn-success:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #28c76f;\n}.btn-success:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-success {\n  background-color: transparent;\n  color: #28c76f;\n}.btn-flat-success:hover {\n  color: #28c76f;\n}.btn-flat-success:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(40, 199, 111, 0.12);\n}.btn-flat-success:active, .btn-flat-success.active, .btn-flat-success:focus {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-flat-success.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-success {\n  background-color: #28c76f;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-success:hover:not(.disabled):not(:disabled) {\n  background-color: #33d67c;\n}.btn-relief-success:active, .btn-relief-success.active, .btn-relief-success:focus {\n  background-color: #24b263;\n}.btn-relief-success:hover {\n  color: #fff;\n}.btn-relief-success:active, .btn-relief-success.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-success {\n  border: 1px solid #28c76f !important;\n  background-color: transparent;\n  color: #28c76f;\n}.btn-outline-success:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(40, 199, 111, 0.04);\n  color: #28c76f;\n}.btn-outline-success:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .btn-outline-success:not(:disabled):not(.disabled):focus {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-outline-success.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-success.dropdown-toggle {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-outline-success.waves-effect .waves-ripple,\n.btn-flat-success.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(40, 199, 111, 0.2) 0, rgba(40, 199, 111, 0.3) 40%, rgba(40, 199, 111, 0.4) 50%, rgba(40, 199, 111, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-success {\n  background-color: #28c76f;\n}.modal.modal-success .modal-header .modal-title {\n  color: #28c76f;\n}.modal.modal-success .modal-header .close {\n  color: #28c76f !important;\n}.pagination-success .page-item.active .page-link {\n  background: #28c76f !important;\n  color: #fff;\n}.pagination-success .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-success .page-item .page-link:hover {\n  color: #28c76f;\n}.pagination-success .page-item.prev-item .page-link:hover, .pagination-success .page-item.next-item .page-link:hover {\n  background: #28c76f;\n  color: #fff;\n}.pagination-success .page-item.next-item .page-link:active:after, .pagination-success .page-item.next-item .page-link:hover:after, .pagination-success .page-item.next .page-link:active:after, .pagination-success .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-success .page-item.prev-item .page-link:active:before, .pagination-success .page-item.prev-item .page-link:hover:before, .pagination-success .page-item.prev .page-link:active:before, .pagination-success .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-success .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #28c76f !important;\n  border-color: #28c76f;\n  box-shadow: 0 4px 18px -4px rgba(40, 199, 111, 0.65);\n}.progress-bar-success {\n  background-color: rgba(40, 199, 111, 0.12);\n}.progress-bar-success .progress-bar {\n  background-color: #28c76f;\n}.timeline .timeline-point-success {\n  border-color: #28c76f !important;\n}.timeline .timeline-point-success i,\n.timeline .timeline-point-success svg {\n  stroke: #28c76f !important;\n}.timeline .timeline-point-success.timeline-point-indicator {\n  background-color: #28c76f !important;\n}.timeline .timeline-point-success.timeline-point-indicator:before {\n  background: rgba(40, 199, 111, 0.12) !important;\n}.divider.divider-success .divider-text:before, .divider.divider-success .divider-text:after {\n  border-color: #28c76f !important;\n}input:focus ~ .bg-success {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #28c76f !important;\n}.custom-control-success .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #28c76f;\n  background-color: #28c76f;\n}.custom-control-success.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-success.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-success.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-success.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(40, 199, 111, 0.4) !important;\n}.custom-control-success .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(40, 199, 111, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-success .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #28c76f !important;\n}.custom-switch-success .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #28c76f !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-success .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #28c76f !important;\n  border-color: #28c76f !important;\n}.text-success.text-darken-1 {\n  color: #24b263 !important;\n}.bg-success.bg-darken-1 {\n  background-color: #24b263 !important;\n}.border-success.border-darken-1 {\n  border: 1px solid #24b263 !important;\n}.border-top-success.border-top-darken-1 {\n  border-top: 1px solid #24b263 !important;\n}.border-bottom-success.border-bottom-darken-1 {\n  border-bottom: 1px solid #24b263 !important;\n}.border-left-success.border-left-darken-1 {\n  border-left: 1px solid #24b263 !important;\n}.border-right-success.border-right-darken-1 {\n  border-right: 1px solid #24b263 !important;\n}.overlay-success.overlay-darken-1 {\n  background: #24b263;\n  /* The Fallback */\n  background: rgba(36, 178, 99, 0.6);\n}.text-success.text-darken-2 {\n  color: #1f9d57 !important;\n}.bg-success.bg-darken-2 {\n  background-color: #1f9d57 !important;\n}.border-success.border-darken-2 {\n  border: 1px solid #1f9d57 !important;\n}.border-top-success.border-top-darken-2 {\n  border-top: 1px solid #1f9d57 !important;\n}.border-bottom-success.border-bottom-darken-2 {\n  border-bottom: 1px solid #1f9d57 !important;\n}.border-left-success.border-left-darken-2 {\n  border-left: 1px solid #1f9d57 !important;\n}.border-right-success.border-right-darken-2 {\n  border-right: 1px solid #1f9d57 !important;\n}.overlay-success.overlay-darken-2 {\n  background: #1f9d57;\n  /* The Fallback */\n  background: rgba(31, 157, 87, 0.6);\n}.text-success.text-darken-3 {\n  color: #1b874b !important;\n}.bg-success.bg-darken-3 {\n  background-color: #1b874b !important;\n}.border-success.border-darken-3 {\n  border: 1px solid #1b874b !important;\n}.border-top-success.border-top-darken-3 {\n  border-top: 1px solid #1b874b !important;\n}.border-bottom-success.border-bottom-darken-3 {\n  border-bottom: 1px solid #1b874b !important;\n}.border-left-success.border-left-darken-3 {\n  border-left: 1px solid #1b874b !important;\n}.border-right-success.border-right-darken-3 {\n  border-right: 1px solid #1b874b !important;\n}.overlay-success.overlay-darken-3 {\n  background: #1b874b;\n  /* The Fallback */\n  background: rgba(27, 135, 75, 0.6);\n}.text-success.text-darken-4 {\n  color: #177240 !important;\n}.bg-success.bg-darken-4 {\n  background-color: #177240 !important;\n}.border-success.border-darken-4 {\n  border: 1px solid #177240 !important;\n}.border-top-success.border-top-darken-4 {\n  border-top: 1px solid #177240 !important;\n}.border-bottom-success.border-bottom-darken-4 {\n  border-bottom: 1px solid #177240 !important;\n}.border-left-success.border-left-darken-4 {\n  border-left: 1px solid #177240 !important;\n}.border-right-success.border-right-darken-4 {\n  border-right: 1px solid #177240 !important;\n}.overlay-success.overlay-darken-4 {\n  background: #177240;\n  /* The Fallback */\n  background: rgba(23, 114, 64, 0.6);\n}.text-success.text-accent-1 {\n  color: #e1fff1 !important;\n}.bg-success.bg-accent-1 {\n  background-color: #e1fff1 !important;\n}.border-success.border-accent-1 {\n  border: 1px solid #e1fff1 !important;\n}.border-top-success.border-top-accent-1 {\n  border-top: 1px solid #e1fff1 !important;\n}.border-bottom-success.border-bottom-accent-1 {\n  border-bottom: 1px solid #e1fff1 !important;\n}.border-left-success.border-left-accent-1 {\n  border-left: 1px solid #e1fff1 !important;\n}.border-right-success.border-right-accent-1 {\n  border-right: 1px solid #e1fff1 !important;\n}.overlay-success.overlay-accent-1 {\n  background: #e1fff1;\n  /* The Fallback */\n  background: rgba(225, 255, 241, 0.6);\n}.text-success.text-accent-2 {\n  color: #aeffd9 !important;\n}.bg-success.bg-accent-2 {\n  background-color: #aeffd9 !important;\n}.border-success.border-accent-2 {\n  border: 1px solid #aeffd9 !important;\n}.border-top-success.border-top-accent-2 {\n  border-top: 1px solid #aeffd9 !important;\n}.border-bottom-success.border-bottom-accent-2 {\n  border-bottom: 1px solid #aeffd9 !important;\n}.border-left-success.border-left-accent-2 {\n  border-left: 1px solid #aeffd9 !important;\n}.border-right-success.border-right-accent-2 {\n  border-right: 1px solid #aeffd9 !important;\n}.overlay-success.overlay-accent-2 {\n  background: #aeffd9;\n  /* The Fallback */\n  background: rgba(174, 255, 217, 0.6);\n}.text-success.text-accent-3 {\n  color: #7bffc1 !important;\n}.bg-success.bg-accent-3 {\n  background-color: #7bffc1 !important;\n}.border-success.border-accent-3 {\n  border: 1px solid #7bffc1 !important;\n}.border-top-success.border-top-accent-3 {\n  border-top: 1px solid #7bffc1 !important;\n}.border-bottom-success.border-bottom-accent-3 {\n  border-bottom: 1px solid #7bffc1 !important;\n}.border-left-success.border-left-accent-3 {\n  border-left: 1px solid #7bffc1 !important;\n}.border-right-success.border-right-accent-3 {\n  border-right: 1px solid #7bffc1 !important;\n}.overlay-success.overlay-accent-3 {\n  background: #7bffc1;\n  /* The Fallback */\n  background: rgba(123, 255, 193, 0.6);\n}.text-success.text-accent-4 {\n  color: #62ffb5 !important;\n}.bg-success.bg-accent-4 {\n  background-color: #62ffb5 !important;\n}.border-success.border-accent-4 {\n  border: 1px solid #62ffb5 !important;\n}.border-top-success.border-top-accent-4 {\n  border-top: 1px solid #62ffb5 !important;\n}.border-bottom-success.border-bottom-accent-4 {\n  border-bottom: 1px solid #62ffb5 !important;\n}.border-left-success.border-left-accent-4 {\n  border-left: 1px solid #62ffb5 !important;\n}.border-right-success.border-right-accent-4 {\n  border-right: 1px solid #62ffb5 !important;\n}.overlay-success.overlay-accent-4 {\n  background: #62ffb5;\n  /* The Fallback */\n  background: rgba(98, 255, 181, 0.6);\n}.text-info.text-lighten-5 {\n  color: #69efff !important;\n}.bg-info.bg-lighten-5 {\n  background-color: #69efff !important;\n}.border-info.border-lighten-5 {\n  border: 1px solid #69efff !important;\n}.border-top-info.border-top-lighten-5 {\n  border-top: 1px solid #69efff !important;\n}.border-bottom-info.border-bottom-lighten-5 {\n  border-bottom: 1px solid #69efff !important;\n}.border-left-info.border-left-lighten-5 {\n  border-left: 1px solid #69efff !important;\n}.border-right-info.border-right-lighten-5 {\n  border-right: 1px solid #69efff !important;\n}.overlay-info.overlay-lighten-5 {\n  background: #69efff;\n  /* The Fallback */\n  background: rgba(105, 239, 255, 0.6);\n}.text-info.text-lighten-4 {\n  color: #4fecff !important;\n}.bg-info.bg-lighten-4 {\n  background-color: #4fecff !important;\n}.border-info.border-lighten-4 {\n  border: 1px solid #4fecff !important;\n}.border-top-info.border-top-lighten-4 {\n  border-top: 1px solid #4fecff !important;\n}.border-bottom-info.border-bottom-lighten-4 {\n  border-bottom: 1px solid #4fecff !important;\n}.border-left-info.border-left-lighten-4 {\n  border-left: 1px solid #4fecff !important;\n}.border-right-info.border-right-lighten-4 {\n  border-right: 1px solid #4fecff !important;\n}.overlay-info.overlay-lighten-4 {\n  background: #4fecff;\n  /* The Fallback */\n  background: rgba(79, 236, 255, 0.6);\n}.text-info.text-lighten-3 {\n  color: #36e9ff !important;\n}.bg-info.bg-lighten-3 {\n  background-color: #36e9ff !important;\n}.border-info.border-lighten-3 {\n  border: 1px solid #36e9ff !important;\n}.border-top-info.border-top-lighten-3 {\n  border-top: 1px solid #36e9ff !important;\n}.border-bottom-info.border-bottom-lighten-3 {\n  border-bottom: 1px solid #36e9ff !important;\n}.border-left-info.border-left-lighten-3 {\n  border-left: 1px solid #36e9ff !important;\n}.border-right-info.border-right-lighten-3 {\n  border-right: 1px solid #36e9ff !important;\n}.overlay-info.overlay-lighten-3 {\n  background: #36e9ff;\n  /* The Fallback */\n  background: rgba(54, 233, 255, 0.6);\n}.text-info.text-lighten-2 {\n  color: #1ce7ff !important;\n}.bg-info.bg-lighten-2 {\n  background-color: #1ce7ff !important;\n}.border-info.border-lighten-2 {\n  border: 1px solid #1ce7ff !important;\n}.border-top-info.border-top-lighten-2 {\n  border-top: 1px solid #1ce7ff !important;\n}.border-bottom-info.border-bottom-lighten-2 {\n  border-bottom: 1px solid #1ce7ff !important;\n}.border-left-info.border-left-lighten-2 {\n  border-left: 1px solid #1ce7ff !important;\n}.border-right-info.border-right-lighten-2 {\n  border-right: 1px solid #1ce7ff !important;\n}.overlay-info.overlay-lighten-2 {\n  background: #1ce7ff;\n  /* The Fallback */\n  background: rgba(28, 231, 255, 0.6);\n}.text-info.text-lighten-1 {\n  color: #03e4ff !important;\n}.bg-info.bg-lighten-1 {\n  background-color: #03e4ff !important;\n}.border-info.border-lighten-1 {\n  border: 1px solid #03e4ff !important;\n}.border-top-info.border-top-lighten-1 {\n  border-top: 1px solid #03e4ff !important;\n}.border-bottom-info.border-bottom-lighten-1 {\n  border-bottom: 1px solid #03e4ff !important;\n}.border-left-info.border-left-lighten-1 {\n  border-left: 1px solid #03e4ff !important;\n}.border-right-info.border-right-lighten-1 {\n  border-right: 1px solid #03e4ff !important;\n}.overlay-info.overlay-lighten-1 {\n  background: #03e4ff;\n  /* The Fallback */\n  background: rgba(3, 228, 255, 0.6);\n}.bg-info {\n  background-color: #00cfe8 !important;\n}.bg-info .card-header,\n.bg-info .card-footer {\n  background-color: transparent;\n}.alert-info {\n  background: rgba(0, 207, 232, 0.12) !important;\n  color: #00cfe8 !important;\n}.alert-info .alert-heading {\n  box-shadow: rgba(0, 207, 232, 0.4) 0px 6px 15px -7px;\n}.alert-info .alert-link {\n  color: #00b8cf !important;\n}.alert-info .close {\n  color: #00cfe8 !important;\n}.bg-light-info {\n  background: rgba(0, 207, 232, 0.12) !important;\n  color: #00cfe8 !important;\n}.bg-light-info.fc-h-event, .bg-light-info.fc-v-event {\n  border-color: rgba(0, 207, 232, 0.1);\n}.bg-light-info .fc-list-event-dot,\n.bg-light-info .fc-daygrid-event-dot {\n  border-color: #00cfe8 !important;\n}.bg-light-info.fc-list-event:hover td {\n  background: rgba(0, 207, 232, 0.1) !important;\n}.bg-light-info.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-info {\n  color: #00cfe8 !important;\n}.border-info {\n  border: 1px solid #00cfe8 !important;\n}.border-top-info {\n  border-top: 1px solid #00cfe8;\n}.border-bottom-info {\n  border-bottom: 1px solid #00cfe8;\n}.border-left-info {\n  border-left: 1px solid #00cfe8;\n}.border-right-info {\n  border-right: 1px solid #00cfe8;\n}.bg-info.badge-glow,\n.border-info.badge-glow,\n.badge-info.badge-glow {\n  box-shadow: 0px 0px 10px #00cfe8;\n}.badge.badge-light-info {\n  background-color: rgba(0, 207, 232, 0.12);\n  color: #00cfe8 !important;\n}.overlay-info {\n  background: #00cfe8;\n  /* The Fallback */\n  background: rgba(0, 207, 232, 0.6);\n}.btn-info {\n  border-color: #00cfe8 !important;\n  background-color: #00cfe8 !important;\n  color: #fff !important;\n}.btn-info:focus, .btn-info:active, .btn-info.active {\n  color: #fff;\n  background-color: #00b8cf !important;\n}.btn-info:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #00cfe8;\n}.btn-info:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-info {\n  background-color: transparent;\n  color: #00cfe8;\n}.btn-flat-info:hover {\n  color: #00cfe8;\n}.btn-flat-info:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(0, 207, 232, 0.12);\n}.btn-flat-info:active, .btn-flat-info.active, .btn-flat-info:focus {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-flat-info.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-info {\n  background-color: #00cfe8;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-info:hover:not(.disabled):not(:disabled) {\n  background-color: #03e4ff;\n}.btn-relief-info:active, .btn-relief-info.active, .btn-relief-info:focus {\n  background-color: #00b8cf;\n}.btn-relief-info:hover {\n  color: #fff;\n}.btn-relief-info:active, .btn-relief-info.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-info {\n  border: 1px solid #00cfe8 !important;\n  background-color: transparent;\n  color: #00cfe8;\n}.btn-outline-info:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(0, 207, 232, 0.04);\n  color: #00cfe8;\n}.btn-outline-info:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .btn-outline-info:not(:disabled):not(.disabled):focus {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-outline-info.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-info.dropdown-toggle {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-outline-info.waves-effect .waves-ripple,\n.btn-flat-info.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(0, 207, 232, 0.2) 0, rgba(0, 207, 232, 0.3) 40%, rgba(0, 207, 232, 0.4) 50%, rgba(0, 207, 232, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-info {\n  background-color: #00cfe8;\n}.modal.modal-info .modal-header .modal-title {\n  color: #00cfe8;\n}.modal.modal-info .modal-header .close {\n  color: #00cfe8 !important;\n}.pagination-info .page-item.active .page-link {\n  background: #00cfe8 !important;\n  color: #fff;\n}.pagination-info .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-info .page-item .page-link:hover {\n  color: #00cfe8;\n}.pagination-info .page-item.prev-item .page-link:hover, .pagination-info .page-item.next-item .page-link:hover {\n  background: #00cfe8;\n  color: #fff;\n}.pagination-info .page-item.next-item .page-link:active:after, .pagination-info .page-item.next-item .page-link:hover:after, .pagination-info .page-item.next .page-link:active:after, .pagination-info .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-info .page-item.prev-item .page-link:active:before, .pagination-info .page-item.prev-item .page-link:hover:before, .pagination-info .page-item.prev .page-link:active:before, .pagination-info .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-info .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #00cfe8 !important;\n  border-color: #00cfe8;\n  box-shadow: 0 4px 18px -4px rgba(0, 207, 232, 0.65);\n}.progress-bar-info {\n  background-color: rgba(0, 207, 232, 0.12);\n}.progress-bar-info .progress-bar {\n  background-color: #00cfe8;\n}.timeline .timeline-point-info {\n  border-color: #00cfe8 !important;\n}.timeline .timeline-point-info i,\n.timeline .timeline-point-info svg {\n  stroke: #00cfe8 !important;\n}.timeline .timeline-point-info.timeline-point-indicator {\n  background-color: #00cfe8 !important;\n}.timeline .timeline-point-info.timeline-point-indicator:before {\n  background: rgba(0, 207, 232, 0.12) !important;\n}.divider.divider-info .divider-text:before, .divider.divider-info .divider-text:after {\n  border-color: #00cfe8 !important;\n}input:focus ~ .bg-info {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #00cfe8 !important;\n}.custom-control-info .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #00cfe8;\n  background-color: #00cfe8;\n}.custom-control-info.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-info.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-info.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-info.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(0, 207, 232, 0.4) !important;\n}.custom-control-info .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 207, 232, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-info .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #00cfe8 !important;\n}.custom-switch-info .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #00cfe8 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-info .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #00cfe8 !important;\n  border-color: #00cfe8 !important;\n}.text-info.text-darken-1 {\n  color: #00b8cf !important;\n}.bg-info.bg-darken-1 {\n  background-color: #00b8cf !important;\n}.border-info.border-darken-1 {\n  border: 1px solid #00b8cf !important;\n}.border-top-info.border-top-darken-1 {\n  border-top: 1px solid #00b8cf !important;\n}.border-bottom-info.border-bottom-darken-1 {\n  border-bottom: 1px solid #00b8cf !important;\n}.border-left-info.border-left-darken-1 {\n  border-left: 1px solid #00b8cf !important;\n}.border-right-info.border-right-darken-1 {\n  border-right: 1px solid #00b8cf !important;\n}.overlay-info.overlay-darken-1 {\n  background: #00b8cf;\n  /* The Fallback */\n  background: rgba(0, 184, 207, 0.6);\n}.text-info.text-darken-2 {\n  color: #00a1b5 !important;\n}.bg-info.bg-darken-2 {\n  background-color: #00a1b5 !important;\n}.border-info.border-darken-2 {\n  border: 1px solid #00a1b5 !important;\n}.border-top-info.border-top-darken-2 {\n  border-top: 1px solid #00a1b5 !important;\n}.border-bottom-info.border-bottom-darken-2 {\n  border-bottom: 1px solid #00a1b5 !important;\n}.border-left-info.border-left-darken-2 {\n  border-left: 1px solid #00a1b5 !important;\n}.border-right-info.border-right-darken-2 {\n  border-right: 1px solid #00a1b5 !important;\n}.overlay-info.overlay-darken-2 {\n  background: #00a1b5;\n  /* The Fallback */\n  background: rgba(0, 161, 181, 0.6);\n}.text-info.text-darken-3 {\n  color: #008b9c !important;\n}.bg-info.bg-darken-3 {\n  background-color: #008b9c !important;\n}.border-info.border-darken-3 {\n  border: 1px solid #008b9c !important;\n}.border-top-info.border-top-darken-3 {\n  border-top: 1px solid #008b9c !important;\n}.border-bottom-info.border-bottom-darken-3 {\n  border-bottom: 1px solid #008b9c !important;\n}.border-left-info.border-left-darken-3 {\n  border-left: 1px solid #008b9c !important;\n}.border-right-info.border-right-darken-3 {\n  border-right: 1px solid #008b9c !important;\n}.overlay-info.overlay-darken-3 {\n  background: #008b9c;\n  /* The Fallback */\n  background: rgba(0, 139, 156, 0.6);\n}.text-info.text-darken-4 {\n  color: #007482 !important;\n}.bg-info.bg-darken-4 {\n  background-color: #007482 !important;\n}.border-info.border-darken-4 {\n  border: 1px solid #007482 !important;\n}.border-top-info.border-top-darken-4 {\n  border-top: 1px solid #007482 !important;\n}.border-bottom-info.border-bottom-darken-4 {\n  border-bottom: 1px solid #007482 !important;\n}.border-left-info.border-left-darken-4 {\n  border-left: 1px solid #007482 !important;\n}.border-right-info.border-right-darken-4 {\n  border-right: 1px solid #007482 !important;\n}.overlay-info.overlay-darken-4 {\n  background: #007482;\n  /* The Fallback */\n  background: rgba(0, 116, 130, 0.6);\n}.text-info.text-accent-1 {\n  color: #feffff !important;\n}.bg-info.bg-accent-1 {\n  background-color: #feffff !important;\n}.border-info.border-accent-1 {\n  border: 1px solid #feffff !important;\n}.border-top-info.border-top-accent-1 {\n  border-top: 1px solid #feffff !important;\n}.border-bottom-info.border-bottom-accent-1 {\n  border-bottom: 1px solid #feffff !important;\n}.border-left-info.border-left-accent-1 {\n  border-left: 1px solid #feffff !important;\n}.border-right-info.border-right-accent-1 {\n  border-right: 1px solid #feffff !important;\n}.overlay-info.overlay-accent-1 {\n  background: #feffff;\n  /* The Fallback */\n  background: rgba(254, 255, 255, 0.6);\n}.text-info.text-accent-2 {\n  color: #cbf5ff !important;\n}.bg-info.bg-accent-2 {\n  background-color: #cbf5ff !important;\n}.border-info.border-accent-2 {\n  border: 1px solid #cbf5ff !important;\n}.border-top-info.border-top-accent-2 {\n  border-top: 1px solid #cbf5ff !important;\n}.border-bottom-info.border-bottom-accent-2 {\n  border-bottom: 1px solid #cbf5ff !important;\n}.border-left-info.border-left-accent-2 {\n  border-left: 1px solid #cbf5ff !important;\n}.border-right-info.border-right-accent-2 {\n  border-right: 1px solid #cbf5ff !important;\n}.overlay-info.overlay-accent-2 {\n  background: #cbf5ff;\n  /* The Fallback */\n  background: rgba(203, 245, 255, 0.6);\n}.text-info.text-accent-3 {\n  color: #98ecff !important;\n}.bg-info.bg-accent-3 {\n  background-color: #98ecff !important;\n}.border-info.border-accent-3 {\n  border: 1px solid #98ecff !important;\n}.border-top-info.border-top-accent-3 {\n  border-top: 1px solid #98ecff !important;\n}.border-bottom-info.border-bottom-accent-3 {\n  border-bottom: 1px solid #98ecff !important;\n}.border-left-info.border-left-accent-3 {\n  border-left: 1px solid #98ecff !important;\n}.border-right-info.border-right-accent-3 {\n  border-right: 1px solid #98ecff !important;\n}.overlay-info.overlay-accent-3 {\n  background: #98ecff;\n  /* The Fallback */\n  background: rgba(152, 236, 255, 0.6);\n}.text-info.text-accent-4 {\n  color: #7fe7ff !important;\n}.bg-info.bg-accent-4 {\n  background-color: #7fe7ff !important;\n}.border-info.border-accent-4 {\n  border: 1px solid #7fe7ff !important;\n}.border-top-info.border-top-accent-4 {\n  border-top: 1px solid #7fe7ff !important;\n}.border-bottom-info.border-bottom-accent-4 {\n  border-bottom: 1px solid #7fe7ff !important;\n}.border-left-info.border-left-accent-4 {\n  border-left: 1px solid #7fe7ff !important;\n}.border-right-info.border-right-accent-4 {\n  border-right: 1px solid #7fe7ff !important;\n}.overlay-info.overlay-accent-4 {\n  background: #7fe7ff;\n  /* The Fallback */\n  background: rgba(127, 231, 255, 0.6);\n}.text-warning.text-lighten-5 {\n  color: #ffe0c3 !important;\n}.bg-warning.bg-lighten-5 {\n  background-color: #ffe0c3 !important;\n}.border-warning.border-lighten-5 {\n  border: 1px solid #ffe0c3 !important;\n}.border-top-warning.border-top-lighten-5 {\n  border-top: 1px solid #ffe0c3 !important;\n}.border-bottom-warning.border-bottom-lighten-5 {\n  border-bottom: 1px solid #ffe0c3 !important;\n}.border-left-warning.border-left-lighten-5 {\n  border-left: 1px solid #ffe0c3 !important;\n}.border-right-warning.border-right-lighten-5 {\n  border-right: 1px solid #ffe0c3 !important;\n}.overlay-warning.overlay-lighten-5 {\n  background: #ffe0c3;\n  /* The Fallback */\n  background: rgba(255, 224, 195, 0.6);\n}.text-warning.text-lighten-4 {\n  color: #ffd3a9 !important;\n}.bg-warning.bg-lighten-4 {\n  background-color: #ffd3a9 !important;\n}.border-warning.border-lighten-4 {\n  border: 1px solid #ffd3a9 !important;\n}.border-top-warning.border-top-lighten-4 {\n  border-top: 1px solid #ffd3a9 !important;\n}.border-bottom-warning.border-bottom-lighten-4 {\n  border-bottom: 1px solid #ffd3a9 !important;\n}.border-left-warning.border-left-lighten-4 {\n  border-left: 1px solid #ffd3a9 !important;\n}.border-right-warning.border-right-lighten-4 {\n  border-right: 1px solid #ffd3a9 !important;\n}.overlay-warning.overlay-lighten-4 {\n  background: #ffd3a9;\n  /* The Fallback */\n  background: rgba(255, 211, 169, 0.6);\n}.text-warning.text-lighten-3 {\n  color: #ffc690 !important;\n}.bg-warning.bg-lighten-3 {\n  background-color: #ffc690 !important;\n}.border-warning.border-lighten-3 {\n  border: 1px solid #ffc690 !important;\n}.border-top-warning.border-top-lighten-3 {\n  border-top: 1px solid #ffc690 !important;\n}.border-bottom-warning.border-bottom-lighten-3 {\n  border-bottom: 1px solid #ffc690 !important;\n}.border-left-warning.border-left-lighten-3 {\n  border-left: 1px solid #ffc690 !important;\n}.border-right-warning.border-right-lighten-3 {\n  border-right: 1px solid #ffc690 !important;\n}.overlay-warning.overlay-lighten-3 {\n  background: #ffc690;\n  /* The Fallback */\n  background: rgba(255, 198, 144, 0.6);\n}.text-warning.text-lighten-2 {\n  color: #ffb976 !important;\n}.bg-warning.bg-lighten-2 {\n  background-color: #ffb976 !important;\n}.border-warning.border-lighten-2 {\n  border: 1px solid #ffb976 !important;\n}.border-top-warning.border-top-lighten-2 {\n  border-top: 1px solid #ffb976 !important;\n}.border-bottom-warning.border-bottom-lighten-2 {\n  border-bottom: 1px solid #ffb976 !important;\n}.border-left-warning.border-left-lighten-2 {\n  border-left: 1px solid #ffb976 !important;\n}.border-right-warning.border-right-lighten-2 {\n  border-right: 1px solid #ffb976 !important;\n}.overlay-warning.overlay-lighten-2 {\n  background: #ffb976;\n  /* The Fallback */\n  background: rgba(255, 185, 118, 0.6);\n}.text-warning.text-lighten-1 {\n  color: #ffac5d !important;\n}.bg-warning.bg-lighten-1 {\n  background-color: #ffac5d !important;\n}.border-warning.border-lighten-1 {\n  border: 1px solid #ffac5d !important;\n}.border-top-warning.border-top-lighten-1 {\n  border-top: 1px solid #ffac5d !important;\n}.border-bottom-warning.border-bottom-lighten-1 {\n  border-bottom: 1px solid #ffac5d !important;\n}.border-left-warning.border-left-lighten-1 {\n  border-left: 1px solid #ffac5d !important;\n}.border-right-warning.border-right-lighten-1 {\n  border-right: 1px solid #ffac5d !important;\n}.overlay-warning.overlay-lighten-1 {\n  background: #ffac5d;\n  /* The Fallback */\n  background: rgba(255, 172, 93, 0.6);\n}.bg-warning {\n  background-color: #ff9f43 !important;\n}.bg-warning .card-header,\n.bg-warning .card-footer {\n  background-color: transparent;\n}.alert-warning {\n  background: rgba(255, 159, 67, 0.12) !important;\n  color: #ff9f43 !important;\n}.alert-warning .alert-heading {\n  box-shadow: rgba(255, 159, 67, 0.4) 0px 6px 15px -7px;\n}.alert-warning .alert-link {\n  color: #ff922a !important;\n}.alert-warning .close {\n  color: #ff9f43 !important;\n}.bg-light-warning {\n  background: rgba(255, 159, 67, 0.12) !important;\n  color: #ff9f43 !important;\n}.bg-light-warning.fc-h-event, .bg-light-warning.fc-v-event {\n  border-color: rgba(255, 159, 67, 0.1);\n}.bg-light-warning .fc-list-event-dot,\n.bg-light-warning .fc-daygrid-event-dot {\n  border-color: #ff9f43 !important;\n}.bg-light-warning.fc-list-event:hover td {\n  background: rgba(255, 159, 67, 0.1) !important;\n}.bg-light-warning.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-warning {\n  color: #ff9f43 !important;\n}.border-warning {\n  border: 1px solid #ff9f43 !important;\n}.border-top-warning {\n  border-top: 1px solid #ff9f43;\n}.border-bottom-warning {\n  border-bottom: 1px solid #ff9f43;\n}.border-left-warning {\n  border-left: 1px solid #ff9f43;\n}.border-right-warning {\n  border-right: 1px solid #ff9f43;\n}.bg-warning.badge-glow,\n.border-warning.badge-glow,\n.badge-warning.badge-glow {\n  box-shadow: 0px 0px 10px #ff9f43;\n}.badge.badge-light-warning {\n  background-color: rgba(255, 159, 67, 0.12);\n  color: #ff9f43 !important;\n}.overlay-warning {\n  background: #ff9f43;\n  /* The Fallback */\n  background: rgba(255, 159, 67, 0.6);\n}.btn-warning {\n  border-color: #ff9f43 !important;\n  background-color: #ff9f43 !important;\n  color: #fff !important;\n}.btn-warning:focus, .btn-warning:active, .btn-warning.active {\n  color: #fff;\n  background-color: #ff922a !important;\n}.btn-warning:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #ff9f43;\n}.btn-warning:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-warning {\n  background-color: transparent;\n  color: #ff9f43;\n}.btn-flat-warning:hover {\n  color: #ff9f43;\n}.btn-flat-warning:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(255, 159, 67, 0.12);\n}.btn-flat-warning:active, .btn-flat-warning.active, .btn-flat-warning:focus {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-flat-warning.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-warning {\n  background-color: #ff9f43;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-warning:hover:not(.disabled):not(:disabled) {\n  background-color: #ffac5d;\n}.btn-relief-warning:active, .btn-relief-warning.active, .btn-relief-warning:focus {\n  background-color: #ff922a;\n}.btn-relief-warning:hover {\n  color: #fff;\n}.btn-relief-warning:active, .btn-relief-warning.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-warning {\n  border: 1px solid #ff9f43 !important;\n  background-color: transparent;\n  color: #ff9f43;\n}.btn-outline-warning:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(255, 159, 67, 0.04);\n  color: #ff9f43;\n}.btn-outline-warning:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .btn-outline-warning:not(:disabled):not(.disabled):focus {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-outline-warning.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-warning.dropdown-toggle {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-outline-warning.waves-effect .waves-ripple,\n.btn-flat-warning.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(255, 159, 67, 0.2) 0, rgba(255, 159, 67, 0.3) 40%, rgba(255, 159, 67, 0.4) 50%, rgba(255, 159, 67, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-warning {\n  background-color: #ff9f43;\n}.modal.modal-warning .modal-header .modal-title {\n  color: #ff9f43;\n}.modal.modal-warning .modal-header .close {\n  color: #ff9f43 !important;\n}.pagination-warning .page-item.active .page-link {\n  background: #ff9f43 !important;\n  color: #fff;\n}.pagination-warning .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-warning .page-item .page-link:hover {\n  color: #ff9f43;\n}.pagination-warning .page-item.prev-item .page-link:hover, .pagination-warning .page-item.next-item .page-link:hover {\n  background: #ff9f43;\n  color: #fff;\n}.pagination-warning .page-item.next-item .page-link:active:after, .pagination-warning .page-item.next-item .page-link:hover:after, .pagination-warning .page-item.next .page-link:active:after, .pagination-warning .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-warning .page-item.prev-item .page-link:active:before, .pagination-warning .page-item.prev-item .page-link:hover:before, .pagination-warning .page-item.prev .page-link:active:before, .pagination-warning .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-warning .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #ff9f43 !important;\n  border-color: #ff9f43;\n  box-shadow: 0 4px 18px -4px rgba(255, 159, 67, 0.65);\n}.progress-bar-warning {\n  background-color: rgba(255, 159, 67, 0.12);\n}.progress-bar-warning .progress-bar {\n  background-color: #ff9f43;\n}.timeline .timeline-point-warning {\n  border-color: #ff9f43 !important;\n}.timeline .timeline-point-warning i,\n.timeline .timeline-point-warning svg {\n  stroke: #ff9f43 !important;\n}.timeline .timeline-point-warning.timeline-point-indicator {\n  background-color: #ff9f43 !important;\n}.timeline .timeline-point-warning.timeline-point-indicator:before {\n  background: rgba(255, 159, 67, 0.12) !important;\n}.divider.divider-warning .divider-text:before, .divider.divider-warning .divider-text:after {\n  border-color: #ff9f43 !important;\n}input:focus ~ .bg-warning {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ff9f43 !important;\n}.custom-control-warning .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #ff9f43;\n  background-color: #ff9f43;\n}.custom-control-warning.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-warning.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-warning.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-warning.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(255, 159, 67, 0.4) !important;\n}.custom-control-warning .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(255, 159, 67, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-warning .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #ff9f43 !important;\n}.custom-switch-warning .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ff9f43 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-warning .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #ff9f43 !important;\n  border-color: #ff9f43 !important;\n}.text-warning.text-darken-1 {\n  color: #ff922a !important;\n}.bg-warning.bg-darken-1 {\n  background-color: #ff922a !important;\n}.border-warning.border-darken-1 {\n  border: 1px solid #ff922a !important;\n}.border-top-warning.border-top-darken-1 {\n  border-top: 1px solid #ff922a !important;\n}.border-bottom-warning.border-bottom-darken-1 {\n  border-bottom: 1px solid #ff922a !important;\n}.border-left-warning.border-left-darken-1 {\n  border-left: 1px solid #ff922a !important;\n}.border-right-warning.border-right-darken-1 {\n  border-right: 1px solid #ff922a !important;\n}.overlay-warning.overlay-darken-1 {\n  background: #ff922a;\n  /* The Fallback */\n  background: rgba(255, 146, 42, 0.6);\n}.text-warning.text-darken-2 {\n  color: #ff8510 !important;\n}.bg-warning.bg-darken-2 {\n  background-color: #ff8510 !important;\n}.border-warning.border-darken-2 {\n  border: 1px solid #ff8510 !important;\n}.border-top-warning.border-top-darken-2 {\n  border-top: 1px solid #ff8510 !important;\n}.border-bottom-warning.border-bottom-darken-2 {\n  border-bottom: 1px solid #ff8510 !important;\n}.border-left-warning.border-left-darken-2 {\n  border-left: 1px solid #ff8510 !important;\n}.border-right-warning.border-right-darken-2 {\n  border-right: 1px solid #ff8510 !important;\n}.overlay-warning.overlay-darken-2 {\n  background: #ff8510;\n  /* The Fallback */\n  background: rgba(255, 133, 16, 0.6);\n}.text-warning.text-darken-3 {\n  color: #f67800 !important;\n}.bg-warning.bg-darken-3 {\n  background-color: #f67800 !important;\n}.border-warning.border-darken-3 {\n  border: 1px solid #f67800 !important;\n}.border-top-warning.border-top-darken-3 {\n  border-top: 1px solid #f67800 !important;\n}.border-bottom-warning.border-bottom-darken-3 {\n  border-bottom: 1px solid #f67800 !important;\n}.border-left-warning.border-left-darken-3 {\n  border-left: 1px solid #f67800 !important;\n}.border-right-warning.border-right-darken-3 {\n  border-right: 1px solid #f67800 !important;\n}.overlay-warning.overlay-darken-3 {\n  background: #f67800;\n  /* The Fallback */\n  background: rgba(246, 120, 0, 0.6);\n}.text-warning.text-darken-4 {\n  color: #dc6c00 !important;\n}.bg-warning.bg-darken-4 {\n  background-color: #dc6c00 !important;\n}.border-warning.border-darken-4 {\n  border: 1px solid #dc6c00 !important;\n}.border-top-warning.border-top-darken-4 {\n  border-top: 1px solid #dc6c00 !important;\n}.border-bottom-warning.border-bottom-darken-4 {\n  border-bottom: 1px solid #dc6c00 !important;\n}.border-left-warning.border-left-darken-4 {\n  border-left: 1px solid #dc6c00 !important;\n}.border-right-warning.border-right-darken-4 {\n  border-right: 1px solid #dc6c00 !important;\n}.overlay-warning.overlay-darken-4 {\n  background: #dc6c00;\n  /* The Fallback */\n  background: rgba(220, 108, 0, 0.6);\n}.text-warning.text-accent-1 {\n  color: #fff5ef !important;\n}.bg-warning.bg-accent-1 {\n  background-color: #fff5ef !important;\n}.border-warning.border-accent-1 {\n  border: 1px solid #fff5ef !important;\n}.border-top-warning.border-top-accent-1 {\n  border-top: 1px solid #fff5ef !important;\n}.border-bottom-warning.border-bottom-accent-1 {\n  border-bottom: 1px solid #fff5ef !important;\n}.border-left-warning.border-left-accent-1 {\n  border-left: 1px solid #fff5ef !important;\n}.border-right-warning.border-right-accent-1 {\n  border-right: 1px solid #fff5ef !important;\n}.overlay-warning.overlay-accent-1 {\n  background: #fff5ef;\n  /* The Fallback */\n  background: rgba(255, 245, 239, 0.6);\n}.text-warning.text-accent-2 {\n  color: #ffe5d8 !important;\n}.bg-warning.bg-accent-2 {\n  background-color: #ffe5d8 !important;\n}.border-warning.border-accent-2 {\n  border: 1px solid #ffe5d8 !important;\n}.border-top-warning.border-top-accent-2 {\n  border-top: 1px solid #ffe5d8 !important;\n}.border-bottom-warning.border-bottom-accent-2 {\n  border-bottom: 1px solid #ffe5d8 !important;\n}.border-left-warning.border-left-accent-2 {\n  border-left: 1px solid #ffe5d8 !important;\n}.border-right-warning.border-right-accent-2 {\n  border-right: 1px solid #ffe5d8 !important;\n}.overlay-warning.overlay-accent-2 {\n  background: #ffe5d8;\n  /* The Fallback */\n  background: rgba(255, 229, 216, 0.6);\n}.text-warning.text-accent-3 {\n  color: #fff6f3 !important;\n}.bg-warning.bg-accent-3 {\n  background-color: #fff6f3 !important;\n}.border-warning.border-accent-3 {\n  border: 1px solid #fff6f3 !important;\n}.border-top-warning.border-top-accent-3 {\n  border-top: 1px solid #fff6f3 !important;\n}.border-bottom-warning.border-bottom-accent-3 {\n  border-bottom: 1px solid #fff6f3 !important;\n}.border-left-warning.border-left-accent-3 {\n  border-left: 1px solid #fff6f3 !important;\n}.border-right-warning.border-right-accent-3 {\n  border-right: 1px solid #fff6f3 !important;\n}.overlay-warning.overlay-accent-3 {\n  background: #fff6f3;\n  /* The Fallback */\n  background: rgba(255, 246, 243, 0.6);\n}.text-warning.text-accent-4 {\n  color: #ffe3da !important;\n}.bg-warning.bg-accent-4 {\n  background-color: #ffe3da !important;\n}.border-warning.border-accent-4 {\n  border: 1px solid #ffe3da !important;\n}.border-top-warning.border-top-accent-4 {\n  border-top: 1px solid #ffe3da !important;\n}.border-bottom-warning.border-bottom-accent-4 {\n  border-bottom: 1px solid #ffe3da !important;\n}.border-left-warning.border-left-accent-4 {\n  border-left: 1px solid #ffe3da !important;\n}.border-right-warning.border-right-accent-4 {\n  border-right: 1px solid #ffe3da !important;\n}.overlay-warning.overlay-accent-4 {\n  background: #ffe3da;\n  /* The Fallback */\n  background: rgba(255, 227, 218, 0.6);\n}.text-danger.text-lighten-5 {\n  color: #f8c6c6 !important;\n}.bg-danger.bg-lighten-5 {\n  background-color: #f8c6c6 !important;\n}.border-danger.border-lighten-5 {\n  border: 1px solid #f8c6c6 !important;\n}.border-top-danger.border-top-lighten-5 {\n  border-top: 1px solid #f8c6c6 !important;\n}.border-bottom-danger.border-bottom-lighten-5 {\n  border-bottom: 1px solid #f8c6c6 !important;\n}.border-left-danger.border-left-lighten-5 {\n  border-left: 1px solid #f8c6c6 !important;\n}.border-right-danger.border-right-lighten-5 {\n  border-right: 1px solid #f8c6c6 !important;\n}.overlay-danger.overlay-lighten-5 {\n  background: #f8c6c6;\n  /* The Fallback */\n  background: rgba(248, 198, 198, 0.6);\n}.text-danger.text-lighten-4 {\n  color: #f5afaf !important;\n}.bg-danger.bg-lighten-4 {\n  background-color: #f5afaf !important;\n}.border-danger.border-lighten-4 {\n  border: 1px solid #f5afaf !important;\n}.border-top-danger.border-top-lighten-4 {\n  border-top: 1px solid #f5afaf !important;\n}.border-bottom-danger.border-bottom-lighten-4 {\n  border-bottom: 1px solid #f5afaf !important;\n}.border-left-danger.border-left-lighten-4 {\n  border-left: 1px solid #f5afaf !important;\n}.border-right-danger.border-right-lighten-4 {\n  border-right: 1px solid #f5afaf !important;\n}.overlay-danger.overlay-lighten-4 {\n  background: #f5afaf;\n  /* The Fallback */\n  background: rgba(245, 175, 175, 0.6);\n}.text-danger.text-lighten-3 {\n  color: #f29899 !important;\n}.bg-danger.bg-lighten-3 {\n  background-color: #f29899 !important;\n}.border-danger.border-lighten-3 {\n  border: 1px solid #f29899 !important;\n}.border-top-danger.border-top-lighten-3 {\n  border-top: 1px solid #f29899 !important;\n}.border-bottom-danger.border-bottom-lighten-3 {\n  border-bottom: 1px solid #f29899 !important;\n}.border-left-danger.border-left-lighten-3 {\n  border-left: 1px solid #f29899 !important;\n}.border-right-danger.border-right-lighten-3 {\n  border-right: 1px solid #f29899 !important;\n}.overlay-danger.overlay-lighten-3 {\n  background: #f29899;\n  /* The Fallback */\n  background: rgba(242, 152, 153, 0.6);\n}.text-danger.text-lighten-2 {\n  color: #f08182 !important;\n}.bg-danger.bg-lighten-2 {\n  background-color: #f08182 !important;\n}.border-danger.border-lighten-2 {\n  border: 1px solid #f08182 !important;\n}.border-top-danger.border-top-lighten-2 {\n  border-top: 1px solid #f08182 !important;\n}.border-bottom-danger.border-bottom-lighten-2 {\n  border-bottom: 1px solid #f08182 !important;\n}.border-left-danger.border-left-lighten-2 {\n  border-left: 1px solid #f08182 !important;\n}.border-right-danger.border-right-lighten-2 {\n  border-right: 1px solid #f08182 !important;\n}.overlay-danger.overlay-lighten-2 {\n  background: #f08182;\n  /* The Fallback */\n  background: rgba(240, 129, 130, 0.6);\n}.text-danger.text-lighten-1 {\n  color: #ed6b6c !important;\n}.bg-danger.bg-lighten-1 {\n  background-color: #ed6b6c !important;\n}.border-danger.border-lighten-1 {\n  border: 1px solid #ed6b6c !important;\n}.border-top-danger.border-top-lighten-1 {\n  border-top: 1px solid #ed6b6c !important;\n}.border-bottom-danger.border-bottom-lighten-1 {\n  border-bottom: 1px solid #ed6b6c !important;\n}.border-left-danger.border-left-lighten-1 {\n  border-left: 1px solid #ed6b6c !important;\n}.border-right-danger.border-right-lighten-1 {\n  border-right: 1px solid #ed6b6c !important;\n}.overlay-danger.overlay-lighten-1 {\n  background: #ed6b6c;\n  /* The Fallback */\n  background: rgba(237, 107, 108, 0.6);\n}.bg-danger {\n  background-color: #ea5455 !important;\n}.bg-danger .card-header,\n.bg-danger .card-footer {\n  background-color: transparent;\n}.alert-danger {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #ea5455 !important;\n}.alert-danger .alert-heading {\n  box-shadow: rgba(234, 84, 85, 0.4) 0px 6px 15px -7px;\n}.alert-danger .alert-link {\n  color: #e73d3e !important;\n}.alert-danger .close {\n  color: #ea5455 !important;\n}.bg-light-danger {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #ea5455 !important;\n}.bg-light-danger.fc-h-event, .bg-light-danger.fc-v-event {\n  border-color: rgba(234, 84, 85, 0.1);\n}.bg-light-danger .fc-list-event-dot,\n.bg-light-danger .fc-daygrid-event-dot {\n  border-color: #ea5455 !important;\n}.bg-light-danger.fc-list-event:hover td {\n  background: rgba(234, 84, 85, 0.1) !important;\n}.bg-light-danger.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-danger {\n  color: #ea5455 !important;\n}.border-danger {\n  border: 1px solid #ea5455 !important;\n}.border-top-danger {\n  border-top: 1px solid #ea5455;\n}.border-bottom-danger {\n  border-bottom: 1px solid #ea5455;\n}.border-left-danger {\n  border-left: 1px solid #ea5455;\n}.border-right-danger {\n  border-right: 1px solid #ea5455;\n}.bg-danger.badge-glow,\n.border-danger.badge-glow,\n.badge-danger.badge-glow {\n  box-shadow: 0px 0px 10px #ea5455;\n}.badge.badge-light-danger {\n  background-color: rgba(234, 84, 85, 0.12);\n  color: #ea5455 !important;\n}.overlay-danger {\n  background: #ea5455;\n  /* The Fallback */\n  background: rgba(234, 84, 85, 0.6);\n}.btn-danger {\n  border-color: #ea5455 !important;\n  background-color: #ea5455 !important;\n  color: #fff !important;\n}.btn-danger:focus, .btn-danger:active, .btn-danger.active {\n  color: #fff;\n  background-color: #e73d3e !important;\n}.btn-danger:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #ea5455;\n}.btn-danger:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-danger {\n  background-color: transparent;\n  color: #ea5455;\n}.btn-flat-danger:hover {\n  color: #ea5455;\n}.btn-flat-danger:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(234, 84, 85, 0.12);\n}.btn-flat-danger:active, .btn-flat-danger.active, .btn-flat-danger:focus {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-flat-danger.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-danger {\n  background-color: #ea5455;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-danger:hover:not(.disabled):not(:disabled) {\n  background-color: #ed6b6c;\n}.btn-relief-danger:active, .btn-relief-danger.active, .btn-relief-danger:focus {\n  background-color: #e73d3e;\n}.btn-relief-danger:hover {\n  color: #fff;\n}.btn-relief-danger:active, .btn-relief-danger.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-danger {\n  border: 1px solid #ea5455 !important;\n  background-color: transparent;\n  color: #ea5455;\n}.btn-outline-danger:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(234, 84, 85, 0.04);\n  color: #ea5455;\n}.btn-outline-danger:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .btn-outline-danger:not(:disabled):not(.disabled):focus {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-outline-danger.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-danger.dropdown-toggle {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-outline-danger.waves-effect .waves-ripple,\n.btn-flat-danger.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(234, 84, 85, 0.2) 0, rgba(234, 84, 85, 0.3) 40%, rgba(234, 84, 85, 0.4) 50%, rgba(234, 84, 85, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-danger {\n  background-color: #ea5455;\n}.modal.modal-danger .modal-header .modal-title {\n  color: #ea5455;\n}.modal.modal-danger .modal-header .close {\n  color: #ea5455 !important;\n}.pagination-danger .page-item.active .page-link {\n  background: #ea5455 !important;\n  color: #fff;\n}.pagination-danger .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-danger .page-item .page-link:hover {\n  color: #ea5455;\n}.pagination-danger .page-item.prev-item .page-link:hover, .pagination-danger .page-item.next-item .page-link:hover {\n  background: #ea5455;\n  color: #fff;\n}.pagination-danger .page-item.next-item .page-link:active:after, .pagination-danger .page-item.next-item .page-link:hover:after, .pagination-danger .page-item.next .page-link:active:after, .pagination-danger .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-danger .page-item.prev-item .page-link:active:before, .pagination-danger .page-item.prev-item .page-link:hover:before, .pagination-danger .page-item.prev .page-link:active:before, .pagination-danger .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-danger .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #ea5455 !important;\n  border-color: #ea5455;\n  box-shadow: 0 4px 18px -4px rgba(234, 84, 85, 0.65);\n}.progress-bar-danger {\n  background-color: rgba(234, 84, 85, 0.12);\n}.progress-bar-danger .progress-bar {\n  background-color: #ea5455;\n}.timeline .timeline-point-danger {\n  border-color: #ea5455 !important;\n}.timeline .timeline-point-danger i,\n.timeline .timeline-point-danger svg {\n  stroke: #ea5455 !important;\n}.timeline .timeline-point-danger.timeline-point-indicator {\n  background-color: #ea5455 !important;\n}.timeline .timeline-point-danger.timeline-point-indicator:before {\n  background: rgba(234, 84, 85, 0.12) !important;\n}.divider.divider-danger .divider-text:before, .divider.divider-danger .divider-text:after {\n  border-color: #ea5455 !important;\n}input:focus ~ .bg-danger {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ea5455 !important;\n}.custom-control-danger .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #ea5455;\n  background-color: #ea5455;\n}.custom-control-danger.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-danger.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-danger.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-danger.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(234, 84, 85, 0.4) !important;\n}.custom-control-danger .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(234, 84, 85, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-danger .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #ea5455 !important;\n}.custom-switch-danger .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ea5455 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-danger .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #ea5455 !important;\n  border-color: #ea5455 !important;\n}.text-danger.text-darken-1 {\n  color: #e73d3e !important;\n}.bg-danger.bg-darken-1 {\n  background-color: #e73d3e !important;\n}.border-danger.border-darken-1 {\n  border: 1px solid #e73d3e !important;\n}.border-top-danger.border-top-darken-1 {\n  border-top: 1px solid #e73d3e !important;\n}.border-bottom-danger.border-bottom-darken-1 {\n  border-bottom: 1px solid #e73d3e !important;\n}.border-left-danger.border-left-darken-1 {\n  border-left: 1px solid #e73d3e !important;\n}.border-right-danger.border-right-darken-1 {\n  border-right: 1px solid #e73d3e !important;\n}.overlay-danger.overlay-darken-1 {\n  background: #e73d3e;\n  /* The Fallback */\n  background: rgba(231, 61, 62, 0.6);\n}.text-danger.text-darken-2 {\n  color: #e42728 !important;\n}.bg-danger.bg-darken-2 {\n  background-color: #e42728 !important;\n}.border-danger.border-darken-2 {\n  border: 1px solid #e42728 !important;\n}.border-top-danger.border-top-darken-2 {\n  border-top: 1px solid #e42728 !important;\n}.border-bottom-danger.border-bottom-darken-2 {\n  border-bottom: 1px solid #e42728 !important;\n}.border-left-danger.border-left-darken-2 {\n  border-left: 1px solid #e42728 !important;\n}.border-right-danger.border-right-darken-2 {\n  border-right: 1px solid #e42728 !important;\n}.overlay-danger.overlay-darken-2 {\n  background: #e42728;\n  /* The Fallback */\n  background: rgba(228, 39, 40, 0.6);\n}.text-danger.text-darken-3 {\n  color: #d71a1c !important;\n}.bg-danger.bg-darken-3 {\n  background-color: #d71a1c !important;\n}.border-danger.border-darken-3 {\n  border: 1px solid #d71a1c !important;\n}.border-top-danger.border-top-darken-3 {\n  border-top: 1px solid #d71a1c !important;\n}.border-bottom-danger.border-bottom-darken-3 {\n  border-bottom: 1px solid #d71a1c !important;\n}.border-left-danger.border-left-darken-3 {\n  border-left: 1px solid #d71a1c !important;\n}.border-right-danger.border-right-darken-3 {\n  border-right: 1px solid #d71a1c !important;\n}.overlay-danger.overlay-darken-3 {\n  background: #d71a1c;\n  /* The Fallback */\n  background: rgba(215, 26, 28, 0.6);\n}.text-danger.text-darken-4 {\n  color: #c01819 !important;\n}.bg-danger.bg-darken-4 {\n  background-color: #c01819 !important;\n}.border-danger.border-darken-4 {\n  border: 1px solid #c01819 !important;\n}.border-top-danger.border-top-darken-4 {\n  border-top: 1px solid #c01819 !important;\n}.border-bottom-danger.border-bottom-darken-4 {\n  border-bottom: 1px solid #c01819 !important;\n}.border-left-danger.border-left-darken-4 {\n  border-left: 1px solid #c01819 !important;\n}.border-right-danger.border-right-darken-4 {\n  border-right: 1px solid #c01819 !important;\n}.overlay-danger.overlay-darken-4 {\n  background: #c01819;\n  /* The Fallback */\n  background: rgba(192, 24, 25, 0.6);\n}.text-danger.text-accent-1 {\n  color: #ffeef1 !important;\n}.bg-danger.bg-accent-1 {\n  background-color: #ffeef1 !important;\n}.border-danger.border-accent-1 {\n  border: 1px solid #ffeef1 !important;\n}.border-top-danger.border-top-accent-1 {\n  border-top: 1px solid #ffeef1 !important;\n}.border-bottom-danger.border-bottom-accent-1 {\n  border-bottom: 1px solid #ffeef1 !important;\n}.border-left-danger.border-left-accent-1 {\n  border-left: 1px solid #ffeef1 !important;\n}.border-right-danger.border-right-accent-1 {\n  border-right: 1px solid #ffeef1 !important;\n}.overlay-danger.overlay-accent-1 {\n  background: #ffeef1;\n  /* The Fallback */\n  background: rgba(255, 238, 241, 0.6);\n}.text-danger.text-accent-2 {\n  color: #ffd6db !important;\n}.bg-danger.bg-accent-2 {\n  background-color: #ffd6db !important;\n}.border-danger.border-accent-2 {\n  border: 1px solid #ffd6db !important;\n}.border-top-danger.border-top-accent-2 {\n  border-top: 1px solid #ffd6db !important;\n}.border-bottom-danger.border-bottom-accent-2 {\n  border-bottom: 1px solid #ffd6db !important;\n}.border-left-danger.border-left-accent-2 {\n  border-left: 1px solid #ffd6db !important;\n}.border-right-danger.border-right-accent-2 {\n  border-right: 1px solid #ffd6db !important;\n}.overlay-danger.overlay-accent-2 {\n  background: #ffd6db;\n  /* The Fallback */\n  background: rgba(255, 214, 219, 0.6);\n}.text-danger.text-accent-3 {\n  color: #ffecee !important;\n}.bg-danger.bg-accent-3 {\n  background-color: #ffecee !important;\n}.border-danger.border-accent-3 {\n  border: 1px solid #ffecee !important;\n}.border-top-danger.border-top-accent-3 {\n  border-top: 1px solid #ffecee !important;\n}.border-bottom-danger.border-bottom-accent-3 {\n  border-bottom: 1px solid #ffecee !important;\n}.border-left-danger.border-left-accent-3 {\n  border-left: 1px solid #ffecee !important;\n}.border-right-danger.border-right-accent-3 {\n  border-right: 1px solid #ffecee !important;\n}.overlay-danger.overlay-accent-3 {\n  background: #ffecee;\n  /* The Fallback */\n  background: rgba(255, 236, 238, 0.6);\n}.text-danger.text-accent-4 {\n  color: #ffd3d7 !important;\n}.bg-danger.bg-accent-4 {\n  background-color: #ffd3d7 !important;\n}.border-danger.border-accent-4 {\n  border: 1px solid #ffd3d7 !important;\n}.border-top-danger.border-top-accent-4 {\n  border-top: 1px solid #ffd3d7 !important;\n}.border-bottom-danger.border-bottom-accent-4 {\n  border-bottom: 1px solid #ffd3d7 !important;\n}.border-left-danger.border-left-accent-4 {\n  border-left: 1px solid #ffd3d7 !important;\n}.border-right-danger.border-right-accent-4 {\n  border-right: 1px solid #ffd3d7 !important;\n}.overlay-danger.overlay-accent-4 {\n  background: #ffd3d7;\n  /* The Fallback */\n  background: rgba(255, 211, 215, 0.6);\n}.bg-gradient-dark,\n.btn-gradient-dark {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #4b4b4b, #1e1e1e);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.dark-layout .bg-gradient-dark,\n.dark-layout .btn-gradient-dark {\n  background-image: linear-gradient(47deg, #1e1e1e, #4b4b4b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-dark:hover, .bg-gradient-dark:active,\n.btn-gradient-dark:hover,\n.btn-gradient-dark:active {\n  color: #fff;\n}.bg-gradient-dark:hover:not(.disabled):not(:disabled),\n.btn-gradient-dark:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-dark:active,\n.btn-gradient-dark:active {\n  transform: translateY(0);\n}.bg-gradient-dark:active, .bg-gradient-dark:focus,\n.btn-gradient-dark:active,\n.btn-gradient-dark:focus {\n  background-image: linear-gradient(47deg, #1e1e1e, #4b4b4b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-primary,\n.btn-gradient-primary {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #7367f0, #9e95f5);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-primary:hover, .bg-gradient-primary:active,\n.btn-gradient-primary:hover,\n.btn-gradient-primary:active {\n  color: #fff;\n}.bg-gradient-primary:hover:not(.disabled):not(:disabled),\n.btn-gradient-primary:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-primary:active,\n.btn-gradient-primary:active {\n  transform: translateY(0);\n}.bg-gradient-primary:active, .bg-gradient-primary:focus,\n.btn-gradient-primary:active,\n.btn-gradient-primary:focus {\n  background-image: linear-gradient(47deg, #4839eb, #7367f0);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-secondary,\n.btn-gradient-secondary {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #82868b, #9ca0a4);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-secondary:hover, .bg-gradient-secondary:active,\n.btn-gradient-secondary:hover,\n.btn-gradient-secondary:active {\n  color: #fff;\n}.bg-gradient-secondary:hover:not(.disabled):not(:disabled),\n.btn-gradient-secondary:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-secondary:active,\n.btn-gradient-secondary:active {\n  transform: translateY(0);\n}.bg-gradient-secondary:active, .bg-gradient-secondary:focus,\n.btn-gradient-secondary:active,\n.btn-gradient-secondary:focus {\n  background-image: linear-gradient(47deg, #696d71, #82868b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-success,\n.btn-gradient-success {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #28c76f, #48da89);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-success:hover, .bg-gradient-success:active,\n.btn-gradient-success:hover,\n.btn-gradient-success:active {\n  color: #fff;\n}.bg-gradient-success:hover:not(.disabled):not(:disabled),\n.btn-gradient-success:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-success:active,\n.btn-gradient-success:active {\n  transform: translateY(0);\n}.bg-gradient-success:active, .bg-gradient-success:focus,\n.btn-gradient-success:active,\n.btn-gradient-success:focus {\n  background-image: linear-gradient(47deg, #1f9d57, #28c76f);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-info,\n.btn-gradient-info {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #00cfe8, #1ce7ff);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-info:hover, .bg-gradient-info:active,\n.btn-gradient-info:hover,\n.btn-gradient-info:active {\n  color: #fff;\n}.bg-gradient-info:hover:not(.disabled):not(:disabled),\n.btn-gradient-info:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-info:active,\n.btn-gradient-info:active {\n  transform: translateY(0);\n}.bg-gradient-info:active, .bg-gradient-info:focus,\n.btn-gradient-info:active,\n.btn-gradient-info:focus {\n  background-image: linear-gradient(47deg, #00a1b5, #00cfe8);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-warning,\n.btn-gradient-warning {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #ff9f43, #ffb976);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-warning:hover, .bg-gradient-warning:active,\n.btn-gradient-warning:hover,\n.btn-gradient-warning:active {\n  color: #fff;\n}.bg-gradient-warning:hover:not(.disabled):not(:disabled),\n.btn-gradient-warning:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-warning:active,\n.btn-gradient-warning:active {\n  transform: translateY(0);\n}.bg-gradient-warning:active, .bg-gradient-warning:focus,\n.btn-gradient-warning:active,\n.btn-gradient-warning:focus {\n  background-image: linear-gradient(47deg, #ff8510, #ff9f43);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-danger,\n.btn-gradient-danger {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #ea5455, #f08182);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-danger:hover, .bg-gradient-danger:active,\n.btn-gradient-danger:hover,\n.btn-gradient-danger:active {\n  color: #fff;\n}.bg-gradient-danger:hover:not(.disabled):not(:disabled),\n.btn-gradient-danger:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-danger:active,\n.btn-gradient-danger:active {\n  transform: translateY(0);\n}.bg-gradient-danger:active, .bg-gradient-danger:focus,\n.btn-gradient-danger:active,\n.btn-gradient-danger:focus {\n  background-image: linear-gradient(47deg, #e42728, #ea5455);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.ngx-datatable.bootstrap.core-bootstrap.height-70-vh {\n  height: 70vh !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header {\n  background-color: #f3f2f7;\n  text-transform: uppercase;\n  height: 40px !important;\n  border-top: 1px solid #ebe9f1;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell {\n  border-bottom: 0;\n  padding: 0.75rem 1rem;\n  font-weight: bold;\n  font-size: 0.8rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell-template-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  letter-spacing: 1px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .sort-btn:before {\n  font-size: 1.3rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row {\n  border-color: #ebe9f1;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.datatable-row-even {\n  background-color: initial;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active {\n  background-color: #f6f6f6;\n  color: #6e6b7b;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell-label .cell-line-height {\n  line-height: 1.25;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem 1rem;\n  display: flex;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: #fff;\n  color: #636363;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager a {\n  color: #636363;\n  line-height: 20px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active:hover {\n  vertical-align: sub;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active:hover a {\n  background-color: #7367f0 !important;\n  color: #fff !important;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  padding: 5px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: transparent !important;\n  color: #7367f0 !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 2px 0px 11px 0px !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #fff;\n  color: #636363;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li.disabled a {\n  color: #b9b9c3;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager {\n  background-color: #f3f2f7;\n  border-top-left-radius: 28px;\n  border-bottom-left-radius: 28px;\n  border-top-right-radius: 28px;\n  border-bottom-right-radius: 28px;\n  height: 36px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .page-count {\n  color: #b9b9c3;\n}.ngx-datatable.bootstrap.core-bootstrap.header-height-50 .datatable-header {\n  height: 50px !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-cell {\n  overflow: visible !important;\n}@media (max-width: 768px) {\n  .page-count {\n    display: none;\n  }\n\n  .datatable-pager {\n    text-align: center !important;\n    margin: 0 !important;\n  }\n}@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: initial;\n  }\n\n  .mobile-hidden {\n    display: none;\n  }\n}@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n\n  .mobile-hidden {\n    display: initial;\n  }\n}.dark-layout .datatable-header-inner,\n.dark-layout .datatable-header {\n  background-color: #343d55 !important;\n  border-top: 1px solid #3b4253 !important;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: #283046 !important;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li.disabled a {\n  color: #636363;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager a {\n  color: #b4b7bd;\n}.dark-layout .datatable-body-row {\n  border-color: #3b4253 !important;\n}.dark-layout .datatable-body-row.active {\n  background-color: #283046 !important;\n  color: inherit !important;\n}.dark-layout .datatable-body {\n  background-color: #283046 !important;\n}.dark-layout .pager {\n  background-color: #242b3d !important;\n}.datatable-scroll {\n  width: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAc3dpbWxhbmVcXG5neC1kYXRhdGFibGVcXHRoZW1lc1xcYm9vdHN0cmFwLnNjc3MiLCJkYXRhdGFibGVzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxjb2xvcnNcXF9wYWxldHRlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvcmVcXG1peGluc1xcaGV4MnJnYi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxjb2xvcnNcXHBhbGV0dGUtdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvcmVcXG1peGluc1xcYWxlcnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcYm9vdHN0cmFwLWV4dGVuZGVkXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvcmVcXGNvbG9yc1xccGFsZXR0ZS1ncmFkaWVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfZ3JhZGllbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGFuZ3VsYXJcXGxpYnNcXGRhdGF0YWJsZXMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvbXBvbmVudHNcXF92YXJpYWJsZXMtZGFyay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixDQ0FoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0I7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRSxFQUFFLENBQ0o7SUFDRSx3QkFBd0IsRUFBRSxDQUM1Qjs7O0lBS0Usc0JBQXNCLEVBQUUsQ0FDMUI7SUFDRSxnQkFBZ0IsRUFBRSxDQUNwQjtJQUNFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlDQUFpQyxFQUFFLENBQ3JDO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFFLENBQzdCO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDM0I7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQy9COzs7SUFPRSxhQUFhO0lBQ2IsbUJBQW1CO0lBSW5CLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsQ0FDbEI7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUUsQ0FDcEI7O01BRUUsYUFBYSxFQUFFLENBQ25COztJQUVFLFVBQVUsRUFBRSxDQUNkOzs7O0lBSUUsa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUUsQ0FDbEI7TUFDRSxvQkFBb0I7TUFDcEIsNEJBQTRCLEVBQUUsQ0FDaEM7TUFDRSxrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUUsQ0FDdkI7UUFDRSxlQUFlLEVBQUUsQ0FDbkI7UUFDRSxZQUFZLEVBQUUsQ0FDaEI7UUFDRSxpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixlQUFlLEVBQUUsQ0FDbkI7O1FBRUUscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsY0FBYztRQUNkLGtCQUFrQixFQUFFLENBQ3RCO1FBQ0UsaUJBQWlCLEVBQUUsQ0FDckI7UUFDRSxtQkFBbUIsRUFBRSxDQUN2QjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0Usa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTLEVBQUUsQ0FDWDtVQUNFLFFBQVEsRUFBRSxDQUNaO1VBQ0UsT0FBTyxFQUFFLENBQ2I7UUFDRSxlQUFlLEVBQUUsQ0FDdkI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWMsRUFBRSxDQUNoQjtNQUNFLHFCQUFxQixFQUFFLENBQ3pCO01BQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7TUFLRSxhQUFhO01BT2Isc0JBQXNCLEVBQUUsQ0FDMUI7TUFDRSxhQUFhLEVBQUUsQ0FDZjtRQUtFLGFBQWEsRUFBRSxDQUNyQjtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixXQUFXLEVBQUUsQ0FDZjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWE7TUFDYixpQkFBaUIsRUFBRSxDQUNuQjs7UUFFRSxVQUFVO1FBQ1YsU0FBUztRQUNULHFCQUFxQjtRQUNyQixnQkFBZ0IsRUFBRSxDQUNwQjs7UUFFRSxhQUFhLEVBQUUsQ0FDakI7UUFDRSxlQUFlO1FBQ2YscUJBQXFCLEVBQUUsQ0FDekI7UUFDRSxtQkFBbUIsRUFBRSxDQ3JNN0I7O0NBQUEsQ0ZFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBZ0M7RUFDaEM7NEZBQ3NHO0VBQ3RHLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIsQ0FFQTtFQUNFLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix3Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEMsQ0FFQTs7RUFFRSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix3Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEMsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2QsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0VwR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNFRixDRERFO0VBQ0Usd0JBQUE7QUNHSixDREZJO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDSU4sQ0RITTtFQUNFLGlCQUFBO0FDS1IsQ0RBSTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUNFTixDRERNO0VBQ0UscUNBQUE7QUNHUixDRERNO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDR1IsQ0RETTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dSLENEQUk7RUFHRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNBTixDREdFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNESixDREVJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBTixDREVJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDQU4sQ0RFUTtFQUNFLGdCQUFBO0FDQVYsQ0RJYztFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNGaEIsQ0RRTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTlIsQ0RRTTs7OztFQUlFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNOUixDRGFNO0VBQ0UsaUJBQUE7QUNYUixDQ3RDTTtFQUNFLG9DQUFBO0FEeUNSLENDdkNROztFQUVFLDZCQUFBO0FEeUNWLENDcUJNO0VBQ0Usb0NBQUE7QURsQlIsQ0NxQk07RUFDRSw2QkFBQTtBRGxCUixDQ3FCTTtFQUNFLGdDQUFBO0FEbEJSLENDcUJNO0VBQ0UsOEJBQUE7QURsQlIsQ0NxQk07RUFDRSwrQkFBQTtBRGxCUixDQ3lCUTs7O0VBQ0UsZ0NBQUE7QURwQlYsQ0NvQ007RUMxSkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGMkhGLENDZ1VNO0VBQ0UsaUVBQUE7QUQ3VFIsQ0NsRk07RUFDRSxvQ0FBQTtBRHFGUixDQ25GUTs7RUFFRSw2QkFBQTtBRHFGVixDQ3ZCTTtFQUNFLG9DQUFBO0FEMEJSLENDdkJNO0VBQ0UsNkJBQUE7QUQwQlIsQ0N2Qk07RUFDRSxnQ0FBQTtBRDBCUixDQ3ZCTTtFQUNFLDhCQUFBO0FEMEJSLENDdkJNO0VBQ0UsK0JBQUE7QUQwQlIsQ0NuQlE7OztFQUNFLGdDQUFBO0FEd0JWLENDUk07RUMxSkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLDhCQUFBO0FGdUtGLENDb1JNO0VBQ0UsaUVBQUE7QURqUlIsQ0M5SE07RUFDRSxvQ0FBQTtBRGlJUixDQy9IUTs7RUFFRSw2QkFBQTtBRGlJVixDQzNIUTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUQ4SFYsQ0M1SFU7RUczRFIsbURBQUE7QUowTEYsQ0MzSFU7RUFDRSx5QkFBQTtBRDZIWixDQ3pIVTtFQUNFLHlCQUFBO0FEMkhaLENDakZNO0VBQ0Usb0NBQUE7QURvRlIsQ0NqRk07RUFDRSw2QkFBQTtBRG9GUixDQ2pGTTtFQUNFLGdDQUFBO0FEb0ZSLENDakZNO0VBQ0UsOEJBQUE7QURvRlIsQ0NqRk07RUFDRSwrQkFBQTtBRG9GUixDQzdFUTs7O0VBQ0UsZ0NBQUE7QURrRlYsQ0MxRVU7RUFDRSx3Q0FBQTtFQUNBLHlCQUFBO0FENkVaLENDdkVNO0VDMUpKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixpQ0FBQTtBRnNPRixDQ3ZFUTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBRDBFVixDQ3hFVTtFQUdFLFdJOUpKO0VKK0pJLG9DQUFBO0FEd0VaLENDckVVO0VBQ0UsbUNBQUE7QUR1RVosQ0NwRVU7RUFDRSxnQkFBQTtBRHNFWixDQy9EUTtFQUNFLDZCQUFBO0VBQ0EsY0V6RUQ7QUgySVQsQ0NoRVU7RUFDRSxjRTVFSDtBSDhJVCxDQy9EVTtFQUNFLHdDQUFBO0FEaUVaLENDOURVO0VBR0UsdUNBQUE7RUFDQSxjRXZGSDtBSHFKVCxDQzNEVTtFQUNFLCtTQUFBO0FENkRaLENDdERRO0VBQ0UseUJFbkdEO0VGb0dDLGtEQUFBO0VBQ0EsV0k1TUY7RUo2TUUseUJBQUE7QUR5RFYsQ0N2RFk7RUFDRSx5QkFBQTtBRHlEZCxDQ2xEVTtFQUdFLHlCQUFBO0FEa0RaLENDL0NVO0VBQ0UsV0k5Tko7QUwrUVIsQ0MvQ1U7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRGdEWixDQ3pDUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRXZJRDtBSG1MVCxDQzFDVTtFQUNFLHdDQUFBO0VBQ0EsY0UzSUg7QUh1TFQsQ0MxQ1U7RUFDRSxnQkFBQTtBRDRDWixDQzFDVTtFQUdFLHVDQUFBO0VBQ0EsY0VwSkg7QUg4TFQsQ0N2Q1U7RUFDRSwrU0FBQTtBRHlDWixDQ3RDVTtFQUNFLHVDQUFBO0VBQ0EsY0U3Skg7QUhxTVQsQ0M5Qlk7O0VBQ0UsaUtBQUE7QURrQ2QsQ0NuQlU7RUFDRSx5QkV4TEg7QUg4TVQsQ0NaYztFQUNFLGNFbk1QO0FIa05ULENDYmM7RUFDRSx5QkFBQTtBRGVoQixDQ3dFUTtFQUNFLHdDQUFBO0FEckVWLENDdUVVO0VBQ0UseUJFalNIO0FINE5ULENDNkVVO0VBQ0UsZ0NBQUE7QUQxRVosQ0M0RVk7O0VBRUUsMEJBQUE7QUQxRWQsQ0M2RVk7RUFDRSxvQ0FBQTtBRDNFZCxDQzRFYztFQUNFLDZDQUFBO0FEMUVoQixDQ3FGWTtFQUVFLGdDQUFBO0FEbkZkLENDNkZNO0VBQ0UsaUVBQUE7QUQxRlIsQ0NnR1U7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSHdQVCxDQ2lHWTs7Ozs7RUFHRSx3REFBQTtBRDdGZCxDQ2dHVTtFQUNFLG1EQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FEOUZaLENDZ0dVO0VBQ0UsZ0NBQUE7QUQ5RlosQ0NzR1U7RUFDRSxvQ0FBQTtFQUNBLFdJdGRKO0VKdWRJLDZCQUFBO0FEbkdaLENDNkdjO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBRDFHaEIsQ0NpSE07RUFDRSx5QkFBQTtBRDlHUixDQ2lITTtFQUNFLG9DQUFBO0FEOUdSLENDaUhNO0VBQ0Usb0NBQUE7QUQ5R1IsQ0NpSE07RUFDRSx3Q0FBQTtBRDlHUixDQ2lITTtFQUNFLDJDQUFBO0FEOUdSLENDaUhNO0VBQ0UseUNBQUE7QUQ5R1IsQ0NpSE07RUFDRSwwQ0FBQTtBRDlHUixDQ2lITTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGlDQUFBO0FGb2FGLENDK0VNO0VBQ0UseUJBQUE7QUQ1RVIsQ0MrRU07RUFDRSxvQ0FBQTtBRDVFUixDQytFTTtFQUNFLG9DQUFBO0FENUVSLENDK0VNO0VBQ0Usd0NBQUE7QUQ1RVIsQ0MrRU07RUFDRSwyQ0FBQTtBRDVFUixDQytFTTtFQUNFLHlDQUFBO0FENUVSLENDK0VNO0VBQ0UsMENBQUE7QUQ1RVIsQ0MrRU07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixpQ0FBQTtBRnNjRixDQzZDTTtFQUNFLHlCQUFBO0FEMUNSLENDNkNNO0VBQ0Usb0NBQUE7QUQxQ1IsQ0M2Q007RUFDRSxvQ0FBQTtBRDFDUixDQzZDTTtFQUNFLHdDQUFBO0FEMUNSLENDNkNNO0VBQ0UsMkNBQUE7QUQxQ1IsQ0M2Q007RUFDRSx5Q0FBQTtBRDFDUixDQzZDTTtFQUNFLDBDQUFBO0FEMUNSLENDNkNNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsaUNBQUE7QUZ3ZUYsQ0MzYk07RUFDRSxvQ0FBQTtBRDhiUixDQzViUTs7RUFFRSw2QkFBQTtBRDhiVixDQ2hZTTtFQUNFLG9DQUFBO0FEbVlSLENDaFlNO0VBQ0UsNkJBQUE7QURtWVIsQ0NoWU07RUFDRSxnQ0FBQTtBRG1ZUixDQ2hZTTtFQUNFLDhCQUFBO0FEbVlSLENDaFlNO0VBQ0UsK0JBQUE7QURtWVIsQ0M1WFE7OztFQUNFLGdDQUFBO0FEaVlWLENDalhNO0VDMUpKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRmdoQkYsQ0NyRk07RUFDRSxpRUFBQTtBRHdGUixDQ2pDTTtFQUNFLHlCQUFBO0FEb0NSLENDakNNO0VBQ0Usb0NBQUE7QURvQ1IsQ0NqQ007RUFDRSxvQ0FBQTtBRG9DUixDQ2pDTTtFQUNFLHdDQUFBO0FEb0NSLENDakNNO0VBQ0UsMkNBQUE7QURvQ1IsQ0NqQ007RUFDRSx5Q0FBQTtBRG9DUixDQ2pDTTtFQUNFLDBDQUFBO0FEb0NSLENDakNNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZzakJGLENDbkVNO0VBQ0UseUJBQUE7QURzRVIsQ0NuRU07RUFDRSxvQ0FBQTtBRHNFUixDQ25FTTtFQUNFLG9DQUFBO0FEc0VSLENDbkVNO0VBQ0Usd0NBQUE7QURzRVIsQ0NuRU07RUFDRSwyQ0FBQTtBRHNFUixDQ25FTTtFQUNFLHlDQUFBO0FEc0VSLENDbkVNO0VBQ0UsMENBQUE7QURzRVIsQ0NuRU07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRndsQkYsQ0NyR007RUFDRSx5QkFBQTtBRHdHUixDQ3JHTTtFQUNFLG9DQUFBO0FEd0dSLENDckdNO0VBQ0Usb0NBQUE7QUR3R1IsQ0NyR007RUFDRSx3Q0FBQTtBRHdHUixDQ3JHTTtFQUNFLDJDQUFBO0FEd0dSLENDckdNO0VBQ0UseUNBQUE7QUR3R1IsQ0NyR007RUFDRSwwQ0FBQTtBRHdHUixDQ3JHTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGMG5CRixDQ3ZJTTtFQUNFLHlCQUFBO0FEMElSLENDdklNO0VBQ0Usb0NBQUE7QUQwSVIsQ0N2SU07RUFDRSxvQ0FBQTtBRDBJUixDQ3ZJTTtFQUNFLHdDQUFBO0FEMElSLENDdklNO0VBQ0UsMkNBQUE7QUQwSVIsQ0N2SU07RUFDRSx5Q0FBQTtBRDBJUixDQ3ZJTTtFQUNFLDBDQUFBO0FEMElSLENDdklNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUY0cEJGLENDektNO0VBQ0UseUJBQUE7QUQ0S1IsQ0N6S007RUFDRSxvQ0FBQTtBRDRLUixDQ3pLTTtFQUNFLG9DQUFBO0FENEtSLENDektNO0VBQ0Usd0NBQUE7QUQ0S1IsQ0N6S007RUFDRSwyQ0FBQTtBRDRLUixDQ3pLTTtFQUNFLHlDQUFBO0FENEtSLENDektNO0VBQ0UsMENBQUE7QUQ0S1IsQ0N6S007RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjhyQkYsQ0NqcEJNO0VBQ0Usb0NBQUE7QURvcEJSLENDbHBCUTs7RUFFRSw2QkFBQTtBRG9wQlYsQ0M5b0JRO0VBQ0UsZ0RBQUE7RUFDQSx5QkFBQTtBRGlwQlYsQ0Mvb0JVO0VHM0RSLHNEQUFBO0FKNnNCRixDQzlvQlU7RUFDRSx5QkFBQTtBRGdwQlosQ0M1b0JVO0VBQ0UseUJBQUE7QUQ4b0JaLENDdm9CUTtFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QUQwb0JWLENDdm9CVTtFQUVFLHNDQUFBO0FEd29CWixDQ3JvQlU7O0VBRUUsZ0NBQUE7QUR1b0JaLENDbm9CWTtFQUNFLCtDQUFBO0FEcW9CZCxDQ2xvQlk7RUFDRSxjSUVEO0FMa29CYixDQzVuQlE7RUFDRSx5QkFBQTtBRCtuQlYsQ0MxbkJNO0VBQ0Usb0NBQUE7QUQ2bkJSLENDMW5CTTtFQUNFLDZCQUFBO0FENm5CUixDQzFuQk07RUFDRSxnQ0FBQTtBRDZuQlIsQ0MxbkJNO0VBQ0UsOEJBQUE7QUQ2bkJSLENDMW5CTTtFQUNFLCtCQUFBO0FENm5CUixDQ3RuQlE7OztFQUNFLGdDQUFBO0FEMm5CVixDQ25uQlU7RUFDRSwyQ0FBQTtFQUNBLHlCQUFBO0FEc25CWixDQ2huQk07RUMxSkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGK3dCRixDQ2huQlE7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QURtbkJWLENDam5CVTtFQUdFLFdJOUpKO0VKK0pJLG9DQUFBO0FEaW5CWixDQzltQlU7RUFDRSxtQ0FBQTtBRGduQlosQ0M3bUJVO0VBQ0UsZ0JBQUE7QUQrbUJaLENDeG1CUTtFQUNFLDZCQUFBO0VBQ0EsY0V6RUQ7QUhvckJULENDem1CVTtFQUNFLGNFNUVIO0FIdXJCVCxDQ3htQlU7RUFDRSwyQ0FBQTtBRDBtQlosQ0N2bUJVO0VBR0UsMENBQUE7RUFDQSxjRXZGSDtBSDhyQlQsQ0NwbUJVO0VBQ0UsK1NBQUE7QURzbUJaLENDL2xCUTtFQUNFLHlCRW5HRDtFRm9HQyxrREFBQTtFQUNBLFdJNU1GO0VKNk1FLHlCQUFBO0FEa21CVixDQzVsQlk7RUFDRSx5QkFBQTtBRDhsQmQsQ0MzbEJVO0VBR0UseUJBQUE7QUQybEJaLENDeGxCVTtFQUNFLFdJOU5KO0FMd3pCUixDQ3hsQlU7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRHlsQlosQ0NsbEJRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FINHRCVCxDQ25sQlU7RUFDRSwyQ0FBQTtFQUNBLGNFM0lIO0FIZ3VCVCxDQ25sQlU7RUFDRSxnQkFBQTtBRHFsQlosQ0NubEJVO0VBR0UsMENBQUE7RUFDQSxjRXBKSDtBSHV1QlQsQ0NobEJVO0VBQ0UsK1NBQUE7QURrbEJaLENDL2tCVTtFQUNFLDBDQUFBO0VBQ0EsY0U3Skg7QUg4dUJULENDdmtCWTs7RUFDRSw2S0FBQTtBRDJrQmQsQ0M1akJVO0VBQ0UseUJFeExIO0FIdXZCVCxDQ3JqQmM7RUFDRSxjRW5NUDtBSDJ2QlQsQ0N0akJjO0VBQ0UseUJBQUE7QUR3akJoQixDQzVpQmM7RUFDRSw4QkFBQTtFQUNBLFdJM1RSO0FMMDJCUixDQzdpQmdCO0VBQ0UsV0k5VFY7QUw2MkJSLENDemlCYztFQUNFLGNFOU5QO0FIeXdCVCxDQ3JpQmM7RUFDRSxtQkVyT1A7RUZzT08sV0k3VVI7QUxvM0JSLENDL2hCa0I7RUFDRSwyVEFBQTtBRGlpQnBCLENDbmhCa0I7RUFDRSwyVEFBQTtBRHFoQnBCLENDbmdCYztFQUNFLFdJeFhSO0VKeVhRLG9DQUFBO0VBQ0EscUJFblJQO0VGb1JPLHFEQUFBO0FEc2dCaEIsQ0M3ZlE7RUFDRSwyQ0FBQTtBRGdnQlYsQ0M5ZlU7RUFDRSx5QkVqU0g7QUhpeUJULENDeGZVO0VBQ0UsZ0NBQUE7QUQyZlosQ0N6Zlk7O0VBRUUsMEJBQUE7QUQyZmQsQ0N4Zlk7RUFDRSxvQ0FBQTtBRDBmZCxDQ3pmYztFQUNFLGdEQUFBO0FEMmZoQixDQ2hmWTtFQUVFLGdDQUFBO0FEa2ZkLENDeGVNO0VBQ0UsaUVBQUE7QUQyZVIsQ0NyZVU7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSDZ6QlQsQ0NwZVk7Ozs7O0VBR0UsMkRBQUE7QUR3ZWQsQ0NyZVU7RUFDRSxzREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRHVlWixDQ3JlVTtFQUNFLGdDQUFBO0FEdWVaLENDL2RVO0VBQ0Usb0NBQUE7RUFDQSxXSXRkSjtFSnVkSSw2QkFBQTtBRGtlWixDQ3hkYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUQyZGhCLENDcGRNO0VBQ0UseUJBQUE7QUR1ZFIsQ0NwZE07RUFDRSxvQ0FBQTtBRHVkUixDQ3BkTTtFQUNFLG9DQUFBO0FEdWRSLENDcGRNO0VBQ0Usd0NBQUE7QUR1ZFIsQ0NwZE07RUFDRSwyQ0FBQTtBRHVkUixDQ3BkTTtFQUNFLHlDQUFBO0FEdWRSLENDcGRNO0VBQ0UsMENBQUE7QUR1ZFIsQ0NwZE07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRnkrQkYsQ0N0Zk07RUFDRSx5QkFBQTtBRHlmUixDQ3RmTTtFQUNFLG9DQUFBO0FEeWZSLENDdGZNO0VBQ0Usb0NBQUE7QUR5ZlIsQ0N0Zk07RUFDRSx3Q0FBQTtBRHlmUixDQ3RmTTtFQUNFLDJDQUFBO0FEeWZSLENDdGZNO0VBQ0UseUNBQUE7QUR5ZlIsQ0N0Zk07RUFDRSwwQ0FBQTtBRHlmUixDQ3RmTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGMmdDRixDQ3hoQk07RUFDRSx5QkFBQTtBRDJoQlIsQ0N4aEJNO0VBQ0Usb0NBQUE7QUQyaEJSLENDeGhCTTtFQUNFLG9DQUFBO0FEMmhCUixDQ3hoQk07RUFDRSx3Q0FBQTtBRDJoQlIsQ0N4aEJNO0VBQ0UsMkNBQUE7QUQyaEJSLENDeGhCTTtFQUNFLHlDQUFBO0FEMmhCUixDQ3hoQk07RUFDRSwwQ0FBQTtBRDJoQlIsQ0N4aEJNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUY2aUNGLENDMWpCTTtFQUNFLHlCQUFBO0FENmpCUixDQzFqQk07RUFDRSxvQ0FBQTtBRDZqQlIsQ0MxakJNO0VBQ0Usb0NBQUE7QUQ2akJSLENDMWpCTTtFQUNFLHdDQUFBO0FENmpCUixDQzFqQk07RUFDRSwyQ0FBQTtBRDZqQlIsQ0MxakJNO0VBQ0UseUNBQUE7QUQ2akJSLENDMWpCTTtFQUNFLDBDQUFBO0FENmpCUixDQzFqQk07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRitrQ0YsQ0M1bEJNO0VBQ0UseUJBQUE7QUQrbEJSLENDNWxCTTtFQUNFLG9DQUFBO0FEK2xCUixDQzVsQk07RUFDRSxvQ0FBQTtBRCtsQlIsQ0M1bEJNO0VBQ0Usd0NBQUE7QUQrbEJSLENDNWxCTTtFQUNFLDJDQUFBO0FEK2xCUixDQzVsQk07RUFDRSx5Q0FBQTtBRCtsQlIsQ0M1bEJNO0VBQ0UsMENBQUE7QUQrbEJSLENDNWxCTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGaW5DRixDQzluQk07RUFDRSx5QkFBQTtBRGlvQlIsQ0M5bkJNO0VBQ0Usb0NBQUE7QURpb0JSLENDOW5CTTtFQUNFLG9DQUFBO0FEaW9CUixDQzluQk07RUFDRSx3Q0FBQTtBRGlvQlIsQ0M5bkJNO0VBQ0UsMkNBQUE7QURpb0JSLENDOW5CTTtFQUNFLHlDQUFBO0FEaW9CUixDQzluQk07RUFDRSwwQ0FBQTtBRGlvQlIsQ0M5bkJNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZtcENGLENDaHFCTTtFQUNFLHlCQUFBO0FEbXFCUixDQ2hxQk07RUFDRSxvQ0FBQTtBRG1xQlIsQ0NocUJNO0VBQ0Usb0NBQUE7QURtcUJSLENDaHFCTTtFQUNFLHdDQUFBO0FEbXFCUixDQ2hxQk07RUFDRSwyQ0FBQTtBRG1xQlIsQ0NocUJNO0VBQ0UseUNBQUE7QURtcUJSLENDaHFCTTtFQUNFLDBDQUFBO0FEbXFCUixDQ2hxQk07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRnFyQ0YsQ0Nsc0JNO0VBQ0UseUJBQUE7QURxc0JSLENDbHNCTTtFQUNFLG9DQUFBO0FEcXNCUixDQ2xzQk07RUFDRSxvQ0FBQTtBRHFzQlIsQ0Nsc0JNO0VBQ0Usd0NBQUE7QURxc0JSLENDbHNCTTtFQUNFLDJDQUFBO0FEcXNCUixDQ2xzQk07RUFDRSx5Q0FBQTtBRHFzQlIsQ0Nsc0JNO0VBQ0UsMENBQUE7QURxc0JSLENDbHNCTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGdXRDRixDQ3B1Qk07RUFDRSx5QkFBQTtBRHV1QlIsQ0NwdUJNO0VBQ0Usb0NBQUE7QUR1dUJSLENDcHVCTTtFQUNFLG9DQUFBO0FEdXVCUixDQ3B1Qk07RUFDRSx3Q0FBQTtBRHV1QlIsQ0NwdUJNO0VBQ0UsMkNBQUE7QUR1dUJSLENDcHVCTTtFQUNFLHlDQUFBO0FEdXVCUixDQ3B1Qk07RUFDRSwwQ0FBQTtBRHV1QlIsQ0NwdUJNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZ5dkNGLENDdHdCTTtFQUNFLHlCQUFBO0FEeXdCUixDQ3R3Qk07RUFDRSxvQ0FBQTtBRHl3QlIsQ0N0d0JNO0VBQ0Usb0NBQUE7QUR5d0JSLENDdHdCTTtFQUNFLHdDQUFBO0FEeXdCUixDQ3R3Qk07RUFDRSwyQ0FBQTtBRHl3QlIsQ0N0d0JNO0VBQ0UseUNBQUE7QUR5d0JSLENDdHdCTTtFQUNFLDBDQUFBO0FEeXdCUixDQ3R3Qk07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjJ4Q0YsQ0N4eUJNO0VBQ0UseUJBQUE7QUQyeUJSLENDeHlCTTtFQUNFLG9DQUFBO0FEMnlCUixDQ3h5Qk07RUFDRSxvQ0FBQTtBRDJ5QlIsQ0N4eUJNO0VBQ0Usd0NBQUE7QUQyeUJSLENDeHlCTTtFQUNFLDJDQUFBO0FEMnlCUixDQ3h5Qk07RUFDRSx5Q0FBQTtBRDJ5QlIsQ0N4eUJNO0VBQ0UsMENBQUE7QUQyeUJSLENDeHlCTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGNnpDRixDQzEwQk07RUFDRSx5QkFBQTtBRDYwQlIsQ0MxMEJNO0VBQ0Usb0NBQUE7QUQ2MEJSLENDMTBCTTtFQUNFLG9DQUFBO0FENjBCUixDQzEwQk07RUFDRSx3Q0FBQTtBRDYwQlIsQ0MxMEJNO0VBQ0UsMkNBQUE7QUQ2MEJSLENDMTBCTTtFQUNFLHlDQUFBO0FENjBCUixDQzEwQk07RUFDRSwwQ0FBQTtBRDYwQlIsQ0MxMEJNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUYrMUNGLENDNTJCTTtFQUNFLHlCQUFBO0FEKzJCUixDQzUyQk07RUFDRSxvQ0FBQTtBRCsyQlIsQ0M1MkJNO0VBQ0Usb0NBQUE7QUQrMkJSLENDNTJCTTtFQUNFLHdDQUFBO0FEKzJCUixDQzUyQk07RUFDRSwyQ0FBQTtBRCsyQlIsQ0M1MkJNO0VBQ0UseUNBQUE7QUQrMkJSLENDNTJCTTtFQUNFLDBDQUFBO0FEKzJCUixDQzUyQk07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRmk0Q0YsQ0NwMUNNO0VBQ0Usb0NBQUE7QUR1MUNSLENDcjFDUTs7RUFFRSw2QkFBQTtBRHUxQ1YsQ0NqMUNRO0VBQ0UsZ0RBQUE7RUFDQSx5QkFBQTtBRG8xQ1YsQ0NsMUNVO0VHM0RSLHNEQUFBO0FKZzVDRixDQ2oxQ1U7RUFDRSx5QkFBQTtBRG0xQ1osQ0MvMENVO0VBQ0UseUJBQUE7QURpMUNaLENDMTBDUTtFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QUQ2MENWLENDMTBDVTtFQUVFLHNDQUFBO0FEMjBDWixDQ3gwQ1U7O0VBRUUsZ0NBQUE7QUQwMENaLENDdDBDWTtFQUNFLCtDQUFBO0FEdzBDZCxDQ3IwQ1k7RUFDRSxjSUVEO0FMcTBDYixDQy96Q1E7RUFDRSx5QkFBQTtBRGswQ1YsQ0M3ekNNO0VBQ0Usb0NBQUE7QURnMENSLENDN3pDTTtFQUNFLDZCQUFBO0FEZzBDUixDQzd6Q007RUFDRSxnQ0FBQTtBRGcwQ1IsQ0M3ekNNO0VBQ0UsOEJBQUE7QURnMENSLENDN3pDTTtFQUNFLCtCQUFBO0FEZzBDUixDQ3p6Q1E7OztFQUNFLGdDQUFBO0FEOHpDVixDQ3R6Q1U7RUFDRSwyQ0FBQTtFQUNBLHlCQUFBO0FEeXpDWixDQ256Q007RUMxSkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGazlDRixDQ256Q1E7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QURzekNWLENDcHpDVTtFQUdFLFdJOUpKO0VKK0pJLG9DQUFBO0FEb3pDWixDQ2p6Q1U7RUFDRSxtQ0FBQTtBRG16Q1osQ0NoekNVO0VBQ0UsZ0JBQUE7QURrekNaLENDM3lDUTtFQUNFLDZCQUFBO0VBQ0EsY0V6RUQ7QUh1M0NULENDNXlDVTtFQUNFLGNFNUVIO0FIMDNDVCxDQzN5Q1U7RUFDRSwyQ0FBQTtBRDZ5Q1osQ0MxeUNVO0VBR0UsMENBQUE7RUFDQSxjRXZGSDtBSGk0Q1QsQ0N2eUNVO0VBQ0UsK1NBQUE7QUR5eUNaLENDbHlDUTtFQUNFLHlCRW5HRDtFRm9HQyxrREFBQTtFQUNBLFdJNU1GO0VKNk1FLHlCQUFBO0FEcXlDVixDQy94Q1k7RUFDRSx5QkFBQTtBRGl5Q2QsQ0M5eENVO0VBR0UseUJBQUE7QUQ4eENaLENDM3hDVTtFQUNFLFdJOU5KO0FMMi9DUixDQzN4Q1U7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRDR4Q1osQ0NyeENRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FIKzVDVCxDQ3R4Q1U7RUFDRSwyQ0FBQTtFQUNBLGNFM0lIO0FIbTZDVCxDQ3R4Q1U7RUFDRSxnQkFBQTtBRHd4Q1osQ0N0eENVO0VBR0UsMENBQUE7RUFDQSxjRXBKSDtBSDA2Q1QsQ0NueENVO0VBQ0UsK1NBQUE7QURxeENaLENDbHhDVTtFQUNFLDBDQUFBO0VBQ0EsY0U3Skg7QUhpN0NULENDMXdDWTs7RUFDRSw2S0FBQTtBRDh3Q2QsQ0MvdkNVO0VBQ0UseUJFeExIO0FIMDdDVCxDQ3h2Q2M7RUFDRSxjRW5NUDtBSDg3Q1QsQ0N6dkNjO0VBQ0UseUJBQUE7QUQydkNoQixDQy91Q2M7RUFDRSw4QkFBQTtFQUNBLFdJM1RSO0FMNmlEUixDQ2h2Q2dCO0VBQ0UsV0k5VFY7QUxnakRSLENDNXVDYztFQUNFLGNFOU5QO0FINDhDVCxDQ3h1Q2M7RUFDRSxtQkVyT1A7RUZzT08sV0k3VVI7QUx1akRSLENDbHVDa0I7RUFDRSwyVEFBQTtBRG91Q3BCLENDdHRDa0I7RUFDRSwyVEFBQTtBRHd0Q3BCLENDdHNDYztFQUNFLFdJeFhSO0VKeVhRLG9DQUFBO0VBQ0EscUJFblJQO0VGb1JPLHFEQUFBO0FEeXNDaEIsQ0Noc0NRO0VBQ0UsMkNBQUE7QURtc0NWLENDanNDVTtFQUNFLHlCRWpTSDtBSG8rQ1QsQ0MzckNVO0VBQ0UsZ0NBQUE7QUQ4ckNaLENDNXJDWTs7RUFFRSwwQkFBQTtBRDhyQ2QsQ0MzckNZO0VBQ0Usb0NBQUE7QUQ2ckNkLENDNXJDYztFQUNFLGdEQUFBO0FEOHJDaEIsQ0NuckNZO0VBRUUsZ0NBQUE7QURxckNkLENDM3FDTTtFQUNFLGlFQUFBO0FEOHFDUixDQ3hxQ1U7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSGdnRFQsQ0N2cUNZOzs7OztFQUdFLDJEQUFBO0FEMnFDZCxDQ3hxQ1U7RUFDRSxzREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRDBxQ1osQ0N4cUNVO0VBQ0UsZ0NBQUE7QUQwcUNaLENDbHFDVTtFQUNFLG9DQUFBO0VBQ0EsV0l0ZEo7RUp1ZEksNkJBQUE7QURxcUNaLENDM3BDYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUQ4cENoQixDQ3ZwQ007RUFDRSx5QkFBQTtBRDBwQ1IsQ0N2cENNO0VBQ0Usb0NBQUE7QUQwcENSLENDdnBDTTtFQUNFLG9DQUFBO0FEMHBDUixDQ3ZwQ007RUFDRSx3Q0FBQTtBRDBwQ1IsQ0N2cENNO0VBQ0UsMkNBQUE7QUQwcENSLENDdnBDTTtFQUNFLHlDQUFBO0FEMHBDUixDQ3ZwQ007RUFDRSwwQ0FBQTtBRDBwQ1IsQ0N2cENNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUY0cURGLENDenJDTTtFQUNFLHlCQUFBO0FENHJDUixDQ3pyQ007RUFDRSxvQ0FBQTtBRDRyQ1IsQ0N6ckNNO0VBQ0Usb0NBQUE7QUQ0ckNSLENDenJDTTtFQUNFLHdDQUFBO0FENHJDUixDQ3pyQ007RUFDRSwyQ0FBQTtBRDRyQ1IsQ0N6ckNNO0VBQ0UseUNBQUE7QUQ0ckNSLENDenJDTTtFQUNFLDBDQUFBO0FENHJDUixDQ3pyQ007RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjhzREYsQ0MzdENNO0VBQ0UseUJBQUE7QUQ4dENSLENDM3RDTTtFQUNFLG9DQUFBO0FEOHRDUixDQzN0Q007RUFDRSxvQ0FBQTtBRDh0Q1IsQ0MzdENNO0VBQ0Usd0NBQUE7QUQ4dENSLENDM3RDTTtFQUNFLDJDQUFBO0FEOHRDUixDQzN0Q007RUFDRSx5Q0FBQTtBRDh0Q1IsQ0MzdENNO0VBQ0UsMENBQUE7QUQ4dENSLENDM3RDTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGZ3ZERixDQzd2Q007RUFDRSx5QkFBQTtBRGd3Q1IsQ0M3dkNNO0VBQ0Usb0NBQUE7QURnd0NSLENDN3ZDTTtFQUNFLG9DQUFBO0FEZ3dDUixDQzd2Q007RUFDRSx3Q0FBQTtBRGd3Q1IsQ0M3dkNNO0VBQ0UsMkNBQUE7QURnd0NSLENDN3ZDTTtFQUNFLHlDQUFBO0FEZ3dDUixDQzd2Q007RUFDRSwwQ0FBQTtBRGd3Q1IsQ0M3dkNNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsaUNBQUE7QUZreERGLENDL3hDTTtFQUNFLHlCQUFBO0FEa3lDUixDQy94Q007RUFDRSxvQ0FBQTtBRGt5Q1IsQ0MveENNO0VBQ0Usb0NBQUE7QURreUNSLENDL3hDTTtFQUNFLHdDQUFBO0FEa3lDUixDQy94Q007RUFDRSwyQ0FBQTtBRGt5Q1IsQ0MveENNO0VBQ0UseUNBQUE7QURreUNSLENDL3hDTTtFQUNFLDBDQUFBO0FEa3lDUixDQy94Q007RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm96REYsQ0NqMENNO0VBQ0UseUJBQUE7QURvMENSLENDajBDTTtFQUNFLG9DQUFBO0FEbzBDUixDQ2owQ007RUFDRSxvQ0FBQTtBRG8wQ1IsQ0NqMENNO0VBQ0Usd0NBQUE7QURvMENSLENDajBDTTtFQUNFLDJDQUFBO0FEbzBDUixDQ2owQ007RUFDRSx5Q0FBQTtBRG8wQ1IsQ0NqMENNO0VBQ0UsMENBQUE7QURvMENSLENDajBDTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGczFERixDQ24yQ007RUFDRSx5QkFBQTtBRHMyQ1IsQ0NuMkNNO0VBQ0Usb0NBQUE7QURzMkNSLENDbjJDTTtFQUNFLG9DQUFBO0FEczJDUixDQ24yQ007RUFDRSx3Q0FBQTtBRHMyQ1IsQ0NuMkNNO0VBQ0UsMkNBQUE7QURzMkNSLENDbjJDTTtFQUNFLHlDQUFBO0FEczJDUixDQ24yQ007RUFDRSwwQ0FBQTtBRHMyQ1IsQ0NuMkNNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZ3M0RGLENDcjRDTTtFQUNFLHlCQUFBO0FEdzRDUixDQ3I0Q007RUFDRSxvQ0FBQTtBRHc0Q1IsQ0NyNENNO0VBQ0Usb0NBQUE7QUR3NENSLENDcjRDTTtFQUNFLHdDQUFBO0FEdzRDUixDQ3I0Q007RUFDRSwyQ0FBQTtBRHc0Q1IsQ0NyNENNO0VBQ0UseUNBQUE7QUR3NENSLENDcjRDTTtFQUNFLDBDQUFBO0FEdzRDUixDQ3I0Q007RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRjA1REYsQ0N2NkNNO0VBQ0UseUJBQUE7QUQwNkNSLENDdjZDTTtFQUNFLG9DQUFBO0FEMDZDUixDQ3Y2Q007RUFDRSxvQ0FBQTtBRDA2Q1IsQ0N2NkNNO0VBQ0Usd0NBQUE7QUQwNkNSLENDdjZDTTtFQUNFLDJDQUFBO0FEMDZDUixDQ3Y2Q007RUFDRSx5Q0FBQTtBRDA2Q1IsQ0N2NkNNO0VBQ0UsMENBQUE7QUQwNkNSLENDdjZDTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGNDdERixDQy80RE07RUFDRSxvQ0FBQTtBRGs1RFIsQ0NoNURROztFQUVFLDZCQUFBO0FEazVEVixDQzU0RFE7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0FEKzREVixDQzc0RFU7RUczRFIscURBQUE7QUoyOERGLENDNTREVTtFQUNFLHlCQUFBO0FEODREWixDQzE0RFU7RUFDRSx5QkFBQTtBRDQ0RFosQ0NyNERRO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtBRHc0RFYsQ0NyNERVO0VBRUUscUNBQUE7QURzNERaLENDbjREVTs7RUFFRSxnQ0FBQTtBRHE0RFosQ0NqNERZO0VBQ0UsOENBQUE7QURtNERkLENDaDREWTtFQUNFLGNJRUQ7QUxnNERiLENDMTNEUTtFQUNFLHlCQUFBO0FENjNEVixDQ3gzRE07RUFDRSxvQ0FBQTtBRDIzRFIsQ0N4M0RNO0VBQ0UsNkJBQUE7QUQyM0RSLENDeDNETTtFQUNFLGdDQUFBO0FEMjNEUixDQ3gzRE07RUFDRSw4QkFBQTtBRDIzRFIsQ0N4M0RNO0VBQ0UsK0JBQUE7QUQyM0RSLENDcDNEUTs7O0VBQ0UsZ0NBQUE7QUR5M0RWLENDajNEVTtFQUNFLDBDQUFBO0VBQ0EseUJBQUE7QURvM0RaLENDOTJETTtFQzFKSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUY2Z0VGLENDOTJEUTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBRGkzRFYsQ0MvMkRVO0VBR0UsV0k5Sko7RUorSkksb0NBQUE7QUQrMkRaLENDNTJEVTtFQUNFLG1DQUFBO0FEODJEWixDQzMyRFU7RUFDRSxnQkFBQTtBRDYyRFosQ0N0MkRRO0VBQ0UsNkJBQUE7RUFDQSxjRXpFRDtBSGs3RFQsQ0N2MkRVO0VBQ0UsY0U1RUg7QUhxN0RULENDdDJEVTtFQUNFLDBDQUFBO0FEdzJEWixDQ3IyRFU7RUFHRSx5Q0FBQTtFQUNBLGNFdkZIO0FINDdEVCxDQ2wyRFU7RUFDRSwrU0FBQTtBRG8yRFosQ0M3MURRO0VBQ0UseUJFbkdEO0VGb0dDLGtEQUFBO0VBQ0EsV0k1TUY7RUo2TUUseUJBQUE7QURnMkRWLENDMTFEWTtFQUNFLHlCQUFBO0FENDFEZCxDQ3oxRFU7RUFHRSx5QkFBQTtBRHkxRFosQ0N0MURVO0VBQ0UsV0k5Tko7QUxzakVSLENDdDFEVTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FEdTFEWixDQ2gxRFE7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0V2SUQ7QUgwOURULENDajFEVTtFQUNFLDBDQUFBO0VBQ0EsY0UzSUg7QUg4OURULENDajFEVTtFQUNFLGdCQUFBO0FEbTFEWixDQ2oxRFU7RUFHRSx5Q0FBQTtFQUNBLGNFcEpIO0FIcStEVCxDQzkwRFU7RUFDRSwrU0FBQTtBRGcxRFosQ0M3MERVO0VBQ0UseUNBQUE7RUFDQSxjRTdKSDtBSDQrRFQsQ0NyMERZOztFQUNFLHlLQUFBO0FEeTBEZCxDQzF6RFU7RUFDRSx5QkV4TEg7QUhxL0RULENDbnpEYztFQUNFLGNFbk1QO0FIeS9EVCxDQ3B6RGM7RUFDRSx5QkFBQTtBRHN6RGhCLENDMXlEYztFQUNFLDhCQUFBO0VBQ0EsV0kzVFI7QUx3bUVSLENDM3lEZ0I7RUFDRSxXSTlUVjtBTDJtRVIsQ0N2eURjO0VBQ0UsY0U5TlA7QUh1Z0VULENDbnlEYztFQUNFLG1CRXJPUDtFRnNPTyxXSTdVUjtBTGtuRVIsQ0M3eERrQjtFQUNFLDJUQUFBO0FEK3hEcEIsQ0NqeERrQjtFQUNFLDJUQUFBO0FEbXhEcEIsQ0Nqd0RjO0VBQ0UsV0l4WFI7RUp5WFEsb0NBQUE7RUFDQSxxQkVuUlA7RUZvUk8sb0RBQUE7QURvd0RoQixDQzN2RFE7RUFDRSwwQ0FBQTtBRDh2RFYsQ0M1dkRVO0VBQ0UseUJFalNIO0FIK2hFVCxDQ3R2RFU7RUFDRSxnQ0FBQTtBRHl2RFosQ0N2dkRZOztFQUVFLDBCQUFBO0FEeXZEZCxDQ3R2RFk7RUFDRSxvQ0FBQTtBRHd2RGQsQ0N2dkRjO0VBQ0UsK0NBQUE7QUR5dkRoQixDQzl1RFk7RUFFRSxnQ0FBQTtBRGd2RGQsQ0N0dURNO0VBQ0UsaUVBQUE7QUR5dURSLENDbnVEVTs7RUFFRSxxQkVwVkg7RUZxVkcseUJFclZIO0FIMmpFVCxDQ2x1RFk7Ozs7O0VBR0UsMERBQUE7QURzdURkLENDbnVEVTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FEcXVEWixDQ251RFU7RUFDRSxnQ0FBQTtBRHF1RFosQ0M3dERVO0VBQ0Usb0NBQUE7RUFDQSxXSXRkSjtFSnVkSSw2QkFBQTtBRGd1RFosQ0N0dERjO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBRHl0RGhCLENDbHRETTtFQUNFLHlCQUFBO0FEcXREUixDQ2x0RE07RUFDRSxvQ0FBQTtBRHF0RFIsQ0NsdERNO0VBQ0Usb0NBQUE7QURxdERSLENDbHRETTtFQUNFLHdDQUFBO0FEcXREUixDQ2x0RE07RUFDRSwyQ0FBQTtBRHF0RFIsQ0NsdERNO0VBQ0UseUNBQUE7QURxdERSLENDbHRETTtFQUNFLDBDQUFBO0FEcXREUixDQ2x0RE07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRnV1RUYsQ0NwdkRNO0VBQ0UseUJBQUE7QUR1dkRSLENDcHZETTtFQUNFLG9DQUFBO0FEdXZEUixDQ3B2RE07RUFDRSxvQ0FBQTtBRHV2RFIsQ0NwdkRNO0VBQ0Usd0NBQUE7QUR1dkRSLENDcHZETTtFQUNFLDJDQUFBO0FEdXZEUixDQ3B2RE07RUFDRSx5Q0FBQTtBRHV2RFIsQ0NwdkRNO0VBQ0UsMENBQUE7QUR1dkRSLENDcHZETTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGeXdFRixDQ3R4RE07RUFDRSx5QkFBQTtBRHl4RFIsQ0N0eERNO0VBQ0Usb0NBQUE7QUR5eERSLENDdHhETTtFQUNFLG9DQUFBO0FEeXhEUixDQ3R4RE07RUFDRSx3Q0FBQTtBRHl4RFIsQ0N0eERNO0VBQ0UsMkNBQUE7QUR5eERSLENDdHhETTtFQUNFLHlDQUFBO0FEeXhEUixDQ3R4RE07RUFDRSwwQ0FBQTtBRHl4RFIsQ0N0eERNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUYyeUVGLENDeHpETTtFQUNFLHlCQUFBO0FEMnpEUixDQ3h6RE07RUFDRSxvQ0FBQTtBRDJ6RFIsQ0N4ekRNO0VBQ0Usb0NBQUE7QUQyekRSLENDeHpETTtFQUNFLHdDQUFBO0FEMnpEUixDQ3h6RE07RUFDRSwyQ0FBQTtBRDJ6RFIsQ0N4ekRNO0VBQ0UseUNBQUE7QUQyekRSLENDeHpETTtFQUNFLDBDQUFBO0FEMnpEUixDQ3h6RE07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjYwRUYsQ0MxMURNO0VBQ0UseUJBQUE7QUQ2MURSLENDMTFETTtFQUNFLG9DQUFBO0FENjFEUixDQzExRE07RUFDRSxvQ0FBQTtBRDYxRFIsQ0MxMURNO0VBQ0Usd0NBQUE7QUQ2MURSLENDMTFETTtFQUNFLDJDQUFBO0FENjFEUixDQzExRE07RUFDRSx5Q0FBQTtBRDYxRFIsQ0MxMURNO0VBQ0UsMENBQUE7QUQ2MURSLENDMTFETTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGKzJFRixDQzUzRE07RUFDRSx5QkFBQTtBRCszRFIsQ0M1M0RNO0VBQ0Usb0NBQUE7QUQrM0RSLENDNTNETTtFQUNFLG9DQUFBO0FEKzNEUixDQzUzRE07RUFDRSx3Q0FBQTtBRCszRFIsQ0M1M0RNO0VBQ0UsMkNBQUE7QUQrM0RSLENDNTNETTtFQUNFLHlDQUFBO0FEKzNEUixDQzUzRE07RUFDRSwwQ0FBQTtBRCszRFIsQ0M1M0RNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZpNUVGLENDOTVETTtFQUNFLHlCQUFBO0FEaTZEUixDQzk1RE07RUFDRSxvQ0FBQTtBRGk2RFIsQ0M5NURNO0VBQ0Usb0NBQUE7QURpNkRSLENDOTVETTtFQUNFLHdDQUFBO0FEaTZEUixDQzk1RE07RUFDRSwyQ0FBQTtBRGk2RFIsQ0M5NURNO0VBQ0UseUNBQUE7QURpNkRSLENDOTVETTtFQUNFLDBDQUFBO0FEaTZEUixDQzk1RE07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm03RUYsQ0NoOERNO0VBQ0UseUJBQUE7QURtOERSLENDaDhETTtFQUNFLG9DQUFBO0FEbThEUixDQ2g4RE07RUFDRSxvQ0FBQTtBRG04RFIsQ0NoOERNO0VBQ0Usd0NBQUE7QURtOERSLENDaDhETTtFQUNFLDJDQUFBO0FEbThEUixDQ2g4RE07RUFDRSx5Q0FBQTtBRG04RFIsQ0NoOERNO0VBQ0UsMENBQUE7QURtOERSLENDaDhETTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGcTlFRixDQ2wrRE07RUFDRSx5QkFBQTtBRHErRFIsQ0NsK0RNO0VBQ0Usb0NBQUE7QURxK0RSLENDbCtETTtFQUNFLG9DQUFBO0FEcStEUixDQ2wrRE07RUFDRSx3Q0FBQTtBRHErRFIsQ0NsK0RNO0VBQ0UsMkNBQUE7QURxK0RSLENDbCtETTtFQUNFLHlDQUFBO0FEcStEUixDQ2wrRE07RUFDRSwwQ0FBQTtBRHErRFIsQ0NsK0RNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZ1L0VGLENDcGdFTTtFQUNFLHlCQUFBO0FEdWdFUixDQ3BnRU07RUFDRSxvQ0FBQTtBRHVnRVIsQ0NwZ0VNO0VBQ0Usb0NBQUE7QUR1Z0VSLENDcGdFTTtFQUNFLHdDQUFBO0FEdWdFUixDQ3BnRU07RUFDRSwyQ0FBQTtBRHVnRVIsQ0NwZ0VNO0VBQ0UseUNBQUE7QUR1Z0VSLENDcGdFTTtFQUNFLDBDQUFBO0FEdWdFUixDQ3BnRU07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRnloRkYsQ0N0aUVNO0VBQ0UseUJBQUE7QUR5aUVSLENDdGlFTTtFQUNFLG9DQUFBO0FEeWlFUixDQ3RpRU07RUFDRSxvQ0FBQTtBRHlpRVIsQ0N0aUVNO0VBQ0Usd0NBQUE7QUR5aUVSLENDdGlFTTtFQUNFLDJDQUFBO0FEeWlFUixDQ3RpRU07RUFDRSx5Q0FBQTtBRHlpRVIsQ0N0aUVNO0VBQ0UsMENBQUE7QUR5aUVSLENDdGlFTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGMmpGRixDQ3hrRU07RUFDRSx5QkFBQTtBRDJrRVIsQ0N4a0VNO0VBQ0Usb0NBQUE7QUQya0VSLENDeGtFTTtFQUNFLG9DQUFBO0FEMmtFUixDQ3hrRU07RUFDRSx3Q0FBQTtBRDJrRVIsQ0N4a0VNO0VBQ0UsMkNBQUE7QUQya0VSLENDeGtFTTtFQUNFLHlDQUFBO0FEMmtFUixDQ3hrRU07RUFDRSwwQ0FBQTtBRDJrRVIsQ0N4a0VNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUY2bEZGLENDMW1FTTtFQUNFLHlCQUFBO0FENm1FUixDQzFtRU07RUFDRSxvQ0FBQTtBRDZtRVIsQ0MxbUVNO0VBQ0Usb0NBQUE7QUQ2bUVSLENDMW1FTTtFQUNFLHdDQUFBO0FENm1FUixDQzFtRU07RUFDRSwyQ0FBQTtBRDZtRVIsQ0MxbUVNO0VBQ0UseUNBQUE7QUQ2bUVSLENDMW1FTTtFQUNFLDBDQUFBO0FENm1FUixDQzFtRU07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRituRkYsQ0NsbEZNO0VBQ0Usb0NBQUE7QURxbEZSLENDbmxGUTs7RUFFRSw2QkFBQTtBRHFsRlYsQ0Mva0ZRO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBRGtsRlYsQ0NobEZVO0VHM0RSLG9EQUFBO0FKOG9GRixDQy9rRlU7RUFDRSx5QkFBQTtBRGlsRlosQ0M3a0ZVO0VBQ0UseUJBQUE7QUQra0ZaLENDeGtGUTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QUQya0ZWLENDeGtGVTtFQUVFLG9DQUFBO0FEeWtGWixDQ3RrRlU7O0VBRUUsZ0NBQUE7QUR3a0ZaLENDcGtGWTtFQUNFLDZDQUFBO0FEc2tGZCxDQ25rRlk7RUFDRSxjSUVEO0FMbWtGYixDQzdqRlE7RUFDRSx5QkFBQTtBRGdrRlYsQ0MzakZNO0VBQ0Usb0NBQUE7QUQ4akZSLENDM2pGTTtFQUNFLDZCQUFBO0FEOGpGUixDQzNqRk07RUFDRSxnQ0FBQTtBRDhqRlIsQ0MzakZNO0VBQ0UsOEJBQUE7QUQ4akZSLENDM2pGTTtFQUNFLCtCQUFBO0FEOGpGUixDQ3ZqRlE7OztFQUNFLGdDQUFBO0FENGpGVixDQ3BqRlU7RUFDRSx5Q0FBQTtFQUNBLHlCQUFBO0FEdWpGWixDQ2pqRk07RUMxSkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGZ3RGRixDQ2pqRlE7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QURvakZWLENDbGpGVTtFQUdFLFdJOUpKO0VKK0pJLG9DQUFBO0FEa2pGWixDQy9pRlU7RUFDRSxtQ0FBQTtBRGlqRlosQ0M5aUZVO0VBQ0UsZ0JBQUE7QURnakZaLENDemlGUTtFQUNFLDZCQUFBO0VBQ0EsY0V6RUQ7QUhxbkZULENDMWlGVTtFQUNFLGNFNUVIO0FId25GVCxDQ3ppRlU7RUFDRSx5Q0FBQTtBRDJpRlosQ0N4aUZVO0VBR0Usd0NBQUE7RUFDQSxjRXZGSDtBSCtuRlQsQ0NyaUZVO0VBQ0UsK1NBQUE7QUR1aUZaLENDaGlGUTtFQUNFLHlCRW5HRDtFRm9HQyxrREFBQTtFQUNBLFdJNU1GO0VKNk1FLHlCQUFBO0FEbWlGVixDQzdoRlk7RUFDRSx5QkFBQTtBRCtoRmQsQ0M1aEZVO0VBR0UseUJBQUE7QUQ0aEZaLENDemhGVTtFQUNFLFdJOU5KO0FMeXZGUixDQ3poRlU7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRDBoRlosQ0NuaEZRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FINnBGVCxDQ3BoRlU7RUFDRSx5Q0FBQTtFQUNBLGNFM0lIO0FIaXFGVCxDQ3BoRlU7RUFDRSxnQkFBQTtBRHNoRlosQ0NwaEZVO0VBR0Usd0NBQUE7RUFDQSxjRXBKSDtBSHdxRlQsQ0NqaEZVO0VBQ0UsK1NBQUE7QURtaEZaLENDaGhGVTtFQUNFLHdDQUFBO0VBQ0EsY0U3Skg7QUgrcUZULENDeGdGWTs7RUFDRSxxS0FBQTtBRDRnRmQsQ0M3L0VVO0VBQ0UseUJFeExIO0FId3JGVCxDQ3QvRWM7RUFDRSxjRW5NUDtBSDRyRlQsQ0N2L0VjO0VBQ0UseUJBQUE7QUR5L0VoQixDQzcrRWM7RUFDRSw4QkFBQTtFQUNBLFdJM1RSO0FMMnlGUixDQzkrRWdCO0VBQ0UsV0k5VFY7QUw4eUZSLENDMStFYztFQUNFLGNFOU5QO0FIMHNGVCxDQ3QrRWM7RUFDRSxtQkVyT1A7RUZzT08sV0k3VVI7QUxxekZSLENDaCtFa0I7RUFDRSwyVEFBQTtBRGsrRXBCLENDcDlFa0I7RUFDRSwyVEFBQTtBRHM5RXBCLENDcDhFYztFQUNFLFdJeFhSO0VKeVhRLG9DQUFBO0VBQ0EscUJFblJQO0VGb1JPLG1EQUFBO0FEdThFaEIsQ0M5N0VRO0VBQ0UseUNBQUE7QURpOEVWLENDLzdFVTtFQUNFLHlCRWpTSDtBSGt1RlQsQ0N6N0VVO0VBQ0UsZ0NBQUE7QUQ0N0VaLENDMTdFWTs7RUFFRSwwQkFBQTtBRDQ3RWQsQ0N6N0VZO0VBQ0Usb0NBQUE7QUQyN0VkLENDMTdFYztFQUNFLDhDQUFBO0FENDdFaEIsQ0NqN0VZO0VBRUUsZ0NBQUE7QURtN0VkLENDejZFTTtFQUNFLGlFQUFBO0FENDZFUixDQ3Q2RVU7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSDh2RlQsQ0NyNkVZOzs7OztFQUdFLHlEQUFBO0FEeTZFZCxDQ3Q2RVU7RUFDRSxvREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRHc2RVosQ0N0NkVVO0VBQ0UsZ0NBQUE7QUR3NkVaLENDaDZFVTtFQUNFLG9DQUFBO0VBQ0EsV0l0ZEo7RUp1ZEksNkJBQUE7QURtNkVaLENDejVFYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUQ0NUVoQixDQ3I1RU07RUFDRSx5QkFBQTtBRHc1RVIsQ0NyNUVNO0VBQ0Usb0NBQUE7QUR3NUVSLENDcjVFTTtFQUNFLG9DQUFBO0FEdzVFUixDQ3I1RU07RUFDRSx3Q0FBQTtBRHc1RVIsQ0NyNUVNO0VBQ0UsMkNBQUE7QUR3NUVSLENDcjVFTTtFQUNFLHlDQUFBO0FEdzVFUixDQ3I1RU07RUFDRSwwQ0FBQTtBRHc1RVIsQ0NyNUVNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUYwNkZGLENDdjdFTTtFQUNFLHlCQUFBO0FEMDdFUixDQ3Y3RU07RUFDRSxvQ0FBQTtBRDA3RVIsQ0N2N0VNO0VBQ0Usb0NBQUE7QUQwN0VSLENDdjdFTTtFQUNFLHdDQUFBO0FEMDdFUixDQ3Y3RU07RUFDRSwyQ0FBQTtBRDA3RVIsQ0N2N0VNO0VBQ0UseUNBQUE7QUQwN0VSLENDdjdFTTtFQUNFLDBDQUFBO0FEMDdFUixDQ3Y3RU07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjQ4RkYsQ0N6OUVNO0VBQ0UseUJBQUE7QUQ0OUVSLENDejlFTTtFQUNFLG9DQUFBO0FENDlFUixDQ3o5RU07RUFDRSxvQ0FBQTtBRDQ5RVIsQ0N6OUVNO0VBQ0Usd0NBQUE7QUQ0OUVSLENDejlFTTtFQUNFLDJDQUFBO0FENDlFUixDQ3o5RU07RUFDRSx5Q0FBQTtBRDQ5RVIsQ0N6OUVNO0VBQ0UsMENBQUE7QUQ0OUVSLENDejlFTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGOCtGRixDQzMvRU07RUFDRSx5QkFBQTtBRDgvRVIsQ0MzL0VNO0VBQ0Usb0NBQUE7QUQ4L0VSLENDMy9FTTtFQUNFLG9DQUFBO0FEOC9FUixDQzMvRU07RUFDRSx3Q0FBQTtBRDgvRVIsQ0MzL0VNO0VBQ0UsMkNBQUE7QUQ4L0VSLENDMy9FTTtFQUNFLHlDQUFBO0FEOC9FUixDQzMvRU07RUFDRSwwQ0FBQTtBRDgvRVIsQ0MzL0VNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZnaEdGLENDN2hGTTtFQUNFLHlCQUFBO0FEZ2lGUixDQzdoRk07RUFDRSxvQ0FBQTtBRGdpRlIsQ0M3aEZNO0VBQ0Usb0NBQUE7QURnaUZSLENDN2hGTTtFQUNFLHdDQUFBO0FEZ2lGUixDQzdoRk07RUFDRSwyQ0FBQTtBRGdpRlIsQ0M3aEZNO0VBQ0UseUNBQUE7QURnaUZSLENDN2hGTTtFQUNFLDBDQUFBO0FEZ2lGUixDQzdoRk07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRmtqR0YsQ0MvakZNO0VBQ0UseUJBQUE7QURra0ZSLENDL2pGTTtFQUNFLG9DQUFBO0FEa2tGUixDQy9qRk07RUFDRSxvQ0FBQTtBRGtrRlIsQ0MvakZNO0VBQ0Usd0NBQUE7QURra0ZSLENDL2pGTTtFQUNFLDJDQUFBO0FEa2tGUixDQy9qRk07RUFDRSx5Q0FBQTtBRGtrRlIsQ0MvakZNO0VBQ0UsMENBQUE7QURra0ZSLENDL2pGTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGb2xHRixDQ2ptRk07RUFDRSx5QkFBQTtBRG9tRlIsQ0NqbUZNO0VBQ0Usb0NBQUE7QURvbUZSLENDam1GTTtFQUNFLG9DQUFBO0FEb21GUixDQ2ptRk07RUFDRSx3Q0FBQTtBRG9tRlIsQ0NqbUZNO0VBQ0UsMkNBQUE7QURvbUZSLENDam1GTTtFQUNFLHlDQUFBO0FEb21GUixDQ2ptRk07RUFDRSwwQ0FBQTtBRG9tRlIsQ0NqbUZNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZzbkdGLENDbm9GTTtFQUNFLHlCQUFBO0FEc29GUixDQ25vRk07RUFDRSxvQ0FBQTtBRHNvRlIsQ0Nub0ZNO0VBQ0Usb0NBQUE7QURzb0ZSLENDbm9GTTtFQUNFLHdDQUFBO0FEc29GUixDQ25vRk07RUFDRSwyQ0FBQTtBRHNvRlIsQ0Nub0ZNO0VBQ0UseUNBQUE7QURzb0ZSLENDbm9GTTtFQUNFLDBDQUFBO0FEc29GUixDQ25vRk07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRndwR0YsQ0NycUZNO0VBQ0UseUJBQUE7QUR3cUZSLENDcnFGTTtFQUNFLG9DQUFBO0FEd3FGUixDQ3JxRk07RUFDRSxvQ0FBQTtBRHdxRlIsQ0NycUZNO0VBQ0Usd0NBQUE7QUR3cUZSLENDcnFGTTtFQUNFLDJDQUFBO0FEd3FGUixDQ3JxRk07RUFDRSx5Q0FBQTtBRHdxRlIsQ0NycUZNO0VBQ0UsMENBQUE7QUR3cUZSLENDcnFGTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGMHJHRixDQ3ZzRk07RUFDRSx5QkFBQTtBRDBzRlIsQ0N2c0ZNO0VBQ0Usb0NBQUE7QUQwc0ZSLENDdnNGTTtFQUNFLG9DQUFBO0FEMHNGUixDQ3ZzRk07RUFDRSx3Q0FBQTtBRDBzRlIsQ0N2c0ZNO0VBQ0UsMkNBQUE7QUQwc0ZSLENDdnNGTTtFQUNFLHlDQUFBO0FEMHNGUixDQ3ZzRk07RUFDRSwwQ0FBQTtBRDBzRlIsQ0N2c0ZNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUY0dEdGLENDenVGTTtFQUNFLHlCQUFBO0FENHVGUixDQ3p1Rk07RUFDRSxvQ0FBQTtBRDR1RlIsQ0N6dUZNO0VBQ0Usb0NBQUE7QUQ0dUZSLENDenVGTTtFQUNFLHdDQUFBO0FENHVGUixDQ3p1Rk07RUFDRSwyQ0FBQTtBRDR1RlIsQ0N6dUZNO0VBQ0UseUNBQUE7QUQ0dUZSLENDenVGTTtFQUNFLDBDQUFBO0FENHVGUixDQ3p1Rk07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjh2R0YsQ0Mzd0ZNO0VBQ0UseUJBQUE7QUQ4d0ZSLENDM3dGTTtFQUNFLG9DQUFBO0FEOHdGUixDQzN3Rk07RUFDRSxvQ0FBQTtBRDh3RlIsQ0Mzd0ZNO0VBQ0Usd0NBQUE7QUQ4d0ZSLENDM3dGTTtFQUNFLDJDQUFBO0FEOHdGUixDQzN3Rk07RUFDRSx5Q0FBQTtBRDh3RlIsQ0Mzd0ZNO0VBQ0UsMENBQUE7QUQ4d0ZSLENDM3dGTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGZ3lHRixDQzd5Rk07RUFDRSx5QkFBQTtBRGd6RlIsQ0M3eUZNO0VBQ0Usb0NBQUE7QURnekZSLENDN3lGTTtFQUNFLG9DQUFBO0FEZ3pGUixDQzd5Rk07RUFDRSx3Q0FBQTtBRGd6RlIsQ0M3eUZNO0VBQ0UsMkNBQUE7QURnekZSLENDN3lGTTtFQUNFLHlDQUFBO0FEZ3pGUixDQzd5Rk07RUFDRSwwQ0FBQTtBRGd6RlIsQ0M3eUZNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZrMEdGLENDcnhHTTtFQUNFLG9DQUFBO0FEd3hHUixDQ3R4R1E7O0VBRUUsNkJBQUE7QUR3eEdWLENDbHhHUTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7QURxeEdWLENDbnhHVTtFRzNEUixxREFBQTtBSmkxR0YsQ0NseEdVO0VBQ0UseUJBQUE7QURveEdaLENDaHhHVTtFQUNFLHlCQUFBO0FEa3hHWixDQzN3R1E7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0FEOHdHVixDQzN3R1U7RUFFRSxxQ0FBQTtBRDR3R1osQ0N6d0dVOztFQUVFLGdDQUFBO0FEMndHWixDQ3Z3R1k7RUFDRSw4Q0FBQTtBRHl3R2QsQ0N0d0dZO0VBQ0UsY0lFRDtBTHN3R2IsQ0Nod0dRO0VBQ0UseUJBQUE7QURtd0dWLENDOXZHTTtFQUNFLG9DQUFBO0FEaXdHUixDQzl2R007RUFDRSw2QkFBQTtBRGl3R1IsQ0M5dkdNO0VBQ0UsZ0NBQUE7QURpd0dSLENDOXZHTTtFQUNFLDhCQUFBO0FEaXdHUixDQzl2R007RUFDRSwrQkFBQTtBRGl3R1IsQ0MxdkdROzs7RUFDRSxnQ0FBQTtBRCt2R1YsQ0N2dkdVO0VBQ0UsMENBQUE7RUFDQSx5QkFBQTtBRDB2R1osQ0NwdkdNO0VDMUpKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRm01R0YsQ0NwdkdRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEdXZHVixDQ3J2R1U7RUFHRSxXSTlKSjtFSitKSSxvQ0FBQTtBRHF2R1osQ0NsdkdVO0VBQ0UsbUNBQUE7QURvdkdaLENDanZHVTtFQUNFLGdCQUFBO0FEbXZHWixDQzV1R1E7RUFDRSw2QkFBQTtFQUNBLGNFekVEO0FId3pHVCxDQzd1R1U7RUFDRSxjRTVFSDtBSDJ6R1QsQ0M1dUdVO0VBQ0UsMENBQUE7QUQ4dUdaLENDM3VHVTtFQUdFLHlDQUFBO0VBQ0EsY0V2Rkg7QUhrMEdULENDeHVHVTtFQUNFLCtTQUFBO0FEMHVHWixDQ251R1E7RUFDRSx5QkVuR0Q7RUZvR0Msa0RBQUE7RUFDQSxXSTVNRjtFSjZNRSx5QkFBQTtBRHN1R1YsQ0NodUdZO0VBQ0UseUJBQUE7QURrdUdkLENDL3RHVTtFQUdFLHlCQUFBO0FEK3RHWixDQzV0R1U7RUFDRSxXSTlOSjtBTDQ3R1IsQ0M1dEdVO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUQ2dEdaLENDdHRHUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRXZJRDtBSGcyR1QsQ0N2dEdVO0VBQ0UsMENBQUE7RUFDQSxjRTNJSDtBSG8yR1QsQ0N2dEdVO0VBQ0UsZ0JBQUE7QUR5dEdaLENDdnRHVTtFQUdFLHlDQUFBO0VBQ0EsY0VwSkg7QUgyMkdULENDcHRHVTtFQUNFLCtTQUFBO0FEc3RHWixDQ250R1U7RUFDRSx5Q0FBQTtFQUNBLGNFN0pIO0FIazNHVCxDQzNzR1k7O0VBQ0UseUtBQUE7QUQrc0dkLENDaHNHVTtFQUNFLHlCRXhMSDtBSDIzR1QsQ0N6ckdjO0VBQ0UsY0VuTVA7QUgrM0dULENDMXJHYztFQUNFLHlCQUFBO0FENHJHaEIsQ0NockdjO0VBQ0UsOEJBQUE7RUFDQSxXSTNUUjtBTDgrR1IsQ0NqckdnQjtFQUNFLFdJOVRWO0FMaS9HUixDQzdxR2M7RUFDRSxjRTlOUDtBSDY0R1QsQ0N6cUdjO0VBQ0UsbUJFck9QO0VGc09PLFdJN1VSO0FMdy9HUixDQ25xR2tCO0VBQ0UsMlRBQUE7QURxcUdwQixDQ3ZwR2tCO0VBQ0UsMlRBQUE7QUR5cEdwQixDQ3ZvR2M7RUFDRSxXSXhYUjtFSnlYUSxvQ0FBQTtFQUNBLHFCRW5SUDtFRm9STyxvREFBQTtBRDBvR2hCLENDam9HUTtFQUNFLDBDQUFBO0FEb29HVixDQ2xvR1U7RUFDRSx5QkVqU0g7QUhxNkdULENDNW5HVTtFQUNFLGdDQUFBO0FEK25HWixDQzduR1k7O0VBRUUsMEJBQUE7QUQrbkdkLENDNW5HWTtFQUNFLG9DQUFBO0FEOG5HZCxDQzduR2M7RUFDRSwrQ0FBQTtBRCtuR2hCLENDcG5HWTtFQUVFLGdDQUFBO0FEc25HZCxDQzVtR007RUFDRSxpRUFBQTtBRCttR1IsQ0N6bUdVOztFQUVFLHFCRXBWSDtFRnFWRyx5QkVyVkg7QUhpOEdULENDeG1HWTs7Ozs7RUFHRSwwREFBQTtBRDRtR2QsQ0N6bUdVO0VBQ0UscURBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUQybUdaLENDem1HVTtFQUNFLGdDQUFBO0FEMm1HWixDQ25tR1U7RUFDRSxvQ0FBQTtFQUNBLFdJdGRKO0VKdWRJLDZCQUFBO0FEc21HWixDQzVsR2M7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FEK2xHaEIsQ0N4bEdNO0VBQ0UseUJBQUE7QUQybEdSLENDeGxHTTtFQUNFLG9DQUFBO0FEMmxHUixDQ3hsR007RUFDRSxvQ0FBQTtBRDJsR1IsQ0N4bEdNO0VBQ0Usd0NBQUE7QUQybEdSLENDeGxHTTtFQUNFLDJDQUFBO0FEMmxHUixDQ3hsR007RUFDRSx5Q0FBQTtBRDJsR1IsQ0N4bEdNO0VBQ0UsMENBQUE7QUQybEdSLENDeGxHTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGNm1IRixDQzFuR007RUFDRSx5QkFBQTtBRDZuR1IsQ0MxbkdNO0VBQ0Usb0NBQUE7QUQ2bkdSLENDMW5HTTtFQUNFLG9DQUFBO0FENm5HUixDQzFuR007RUFDRSx3Q0FBQTtBRDZuR1IsQ0MxbkdNO0VBQ0UsMkNBQUE7QUQ2bkdSLENDMW5HTTtFQUNFLHlDQUFBO0FENm5HUixDQzFuR007RUFDRSwwQ0FBQTtBRDZuR1IsQ0MxbkdNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUYrb0hGLENDNXBHTTtFQUNFLHlCQUFBO0FEK3BHUixDQzVwR007RUFDRSxvQ0FBQTtBRCtwR1IsQ0M1cEdNO0VBQ0Usb0NBQUE7QUQrcEdSLENDNXBHTTtFQUNFLHdDQUFBO0FEK3BHUixDQzVwR007RUFDRSwyQ0FBQTtBRCtwR1IsQ0M1cEdNO0VBQ0UseUNBQUE7QUQrcEdSLENDNXBHTTtFQUNFLDBDQUFBO0FEK3BHUixDQzVwR007RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRmlySEYsQ0M5ckdNO0VBQ0UseUJBQUE7QURpc0dSLENDOXJHTTtFQUNFLG9DQUFBO0FEaXNHUixDQzlyR007RUFDRSxvQ0FBQTtBRGlzR1IsQ0M5ckdNO0VBQ0Usd0NBQUE7QURpc0dSLENDOXJHTTtFQUNFLDJDQUFBO0FEaXNHUixDQzlyR007RUFDRSx5Q0FBQTtBRGlzR1IsQ0M5ckdNO0VBQ0UsMENBQUE7QURpc0dSLENDOXJHTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGbXRIRixDQ2h1R007RUFDRSx5QkFBQTtBRG11R1IsQ0NodUdNO0VBQ0Usb0NBQUE7QURtdUdSLENDaHVHTTtFQUNFLG9DQUFBO0FEbXVHUixDQ2h1R007RUFDRSx3Q0FBQTtBRG11R1IsQ0NodUdNO0VBQ0UsMkNBQUE7QURtdUdSLENDaHVHTTtFQUNFLHlDQUFBO0FEbXVHUixDQ2h1R007RUFDRSwwQ0FBQTtBRG11R1IsQ0NodUdNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZxdkhGLENDbHdHTTtFQUNFLHlCQUFBO0FEcXdHUixDQ2x3R007RUFDRSxvQ0FBQTtBRHF3R1IsQ0Nsd0dNO0VBQ0Usb0NBQUE7QURxd0dSLENDbHdHTTtFQUNFLHdDQUFBO0FEcXdHUixDQ2x3R007RUFDRSwyQ0FBQTtBRHF3R1IsQ0Nsd0dNO0VBQ0UseUNBQUE7QURxd0dSLENDbHdHTTtFQUNFLDBDQUFBO0FEcXdHUixDQ2x3R007RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnV4SEYsQ0NweUdNO0VBQ0UseUJBQUE7QUR1eUdSLENDcHlHTTtFQUNFLG9DQUFBO0FEdXlHUixDQ3B5R007RUFDRSxvQ0FBQTtBRHV5R1IsQ0NweUdNO0VBQ0Usd0NBQUE7QUR1eUdSLENDcHlHTTtFQUNFLDJDQUFBO0FEdXlHUixDQ3B5R007RUFDRSx5Q0FBQTtBRHV5R1IsQ0NweUdNO0VBQ0UsMENBQUE7QUR1eUdSLENDcHlHTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGeXpIRixDQ3QwR007RUFDRSx5QkFBQTtBRHkwR1IsQ0N0MEdNO0VBQ0Usb0NBQUE7QUR5MEdSLENDdDBHTTtFQUNFLG9DQUFBO0FEeTBHUixDQ3QwR007RUFDRSx3Q0FBQTtBRHkwR1IsQ0N0MEdNO0VBQ0UsMkNBQUE7QUR5MEdSLENDdDBHTTtFQUNFLHlDQUFBO0FEeTBHUixDQ3QwR007RUFDRSwwQ0FBQTtBRHkwR1IsQ0N0MEdNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUYyMUhGLENDeDJHTTtFQUNFLHlCQUFBO0FEMjJHUixDQ3gyR007RUFDRSxvQ0FBQTtBRDIyR1IsQ0N4MkdNO0VBQ0Usb0NBQUE7QUQyMkdSLENDeDJHTTtFQUNFLHdDQUFBO0FEMjJHUixDQ3gyR007RUFDRSwyQ0FBQTtBRDIyR1IsQ0N4MkdNO0VBQ0UseUNBQUE7QUQyMkdSLENDeDJHTTtFQUNFLDBDQUFBO0FEMjJHUixDQ3gyR007RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjYzSEYsQ0MxNEdNO0VBQ0UseUJBQUE7QUQ2NEdSLENDMTRHTTtFQUNFLG9DQUFBO0FENjRHUixDQzE0R007RUFDRSxvQ0FBQTtBRDY0R1IsQ0MxNEdNO0VBQ0Usd0NBQUE7QUQ2NEdSLENDMTRHTTtFQUNFLDJDQUFBO0FENjRHUixDQzE0R007RUFDRSx5Q0FBQTtBRDY0R1IsQ0MxNEdNO0VBQ0UsMENBQUE7QUQ2NEdSLENDMTRHTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGKzVIRixDQzU2R007RUFDRSx5QkFBQTtBRCs2R1IsQ0M1NkdNO0VBQ0Usb0NBQUE7QUQrNkdSLENDNTZHTTtFQUNFLG9DQUFBO0FEKzZHUixDQzU2R007RUFDRSx3Q0FBQTtBRCs2R1IsQ0M1NkdNO0VBQ0UsMkNBQUE7QUQrNkdSLENDNTZHTTtFQUNFLHlDQUFBO0FEKzZHUixDQzU2R007RUFDRSwwQ0FBQTtBRCs2R1IsQ0M1NkdNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZpOEhGLENDOThHTTtFQUNFLHlCQUFBO0FEaTlHUixDQzk4R007RUFDRSxvQ0FBQTtBRGk5R1IsQ0M5OEdNO0VBQ0Usb0NBQUE7QURpOUdSLENDOThHTTtFQUNFLHdDQUFBO0FEaTlHUixDQzk4R007RUFDRSwyQ0FBQTtBRGk5R1IsQ0M5OEdNO0VBQ0UseUNBQUE7QURpOUdSLENDOThHTTtFQUNFLDBDQUFBO0FEaTlHUixDQzk4R007RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm0rSEYsQ0NoL0dNO0VBQ0UseUJBQUE7QURtL0dSLENDaC9HTTtFQUNFLG9DQUFBO0FEbS9HUixDQ2gvR007RUFDRSxvQ0FBQTtBRG0vR1IsQ0NoL0dNO0VBQ0Usd0NBQUE7QURtL0dSLENDaC9HTTtFQUNFLDJDQUFBO0FEbS9HUixDQ2gvR007RUFDRSx5Q0FBQTtBRG0vR1IsQ0NoL0dNO0VBQ0UsMENBQUE7QURtL0dSLENDaC9HTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGcWdJRixDQ3g5SE07RUFDRSxvQ0FBQTtBRDI5SFIsQ0N6OUhROztFQUVFLDZCQUFBO0FEMjlIVixDQ3I5SFE7RUFDRSw4Q0FBQTtFQUNBLHlCQUFBO0FEdzlIVixDQ3Q5SFU7RUczRFIsb0RBQUE7QUpvaElGLENDcjlIVTtFQUNFLHlCQUFBO0FEdTlIWixDQ245SFU7RUFDRSx5QkFBQTtBRHE5SFosQ0M5OEhRO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBRGk5SFYsQ0M5OEhVO0VBRUUsb0NBQUE7QUQrOEhaLENDNThIVTs7RUFFRSxnQ0FBQTtBRDg4SFosQ0MxOEhZO0VBQ0UsNkNBQUE7QUQ0OEhkLENDejhIWTtFQUNFLGNJRUQ7QUx5OEhiLENDbjhIUTtFQUNFLHlCQUFBO0FEczhIVixDQ2o4SE07RUFDRSxvQ0FBQTtBRG84SFIsQ0NqOEhNO0VBQ0UsNkJBQUE7QURvOEhSLENDajhITTtFQUNFLGdDQUFBO0FEbzhIUixDQ2o4SE07RUFDRSw4QkFBQTtBRG84SFIsQ0NqOEhNO0VBQ0UsK0JBQUE7QURvOEhSLENDNzdIUTs7O0VBQ0UsZ0NBQUE7QURrOEhWLENDMTdIVTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7QUQ2N0haLENDdjdITTtFQzFKSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZzbElGLENDdjdIUTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBRDA3SFYsQ0N4N0hVO0VBR0UsV0k5Sko7RUorSkksb0NBQUE7QUR3N0haLENDcjdIVTtFQUNFLG1DQUFBO0FEdTdIWixDQ3A3SFU7RUFDRSxnQkFBQTtBRHM3SFosQ0MvNkhRO0VBQ0UsNkJBQUE7RUFDQSxjRXpFRDtBSDIvSFQsQ0NoN0hVO0VBQ0UsY0U1RUg7QUg4L0hULENDLzZIVTtFQUNFLHlDQUFBO0FEaTdIWixDQzk2SFU7RUFHRSx3Q0FBQTtFQUNBLGNFdkZIO0FIcWdJVCxDQzM2SFU7RUFDRSwrU0FBQTtBRDY2SFosQ0N0NkhRO0VBQ0UseUJFbkdEO0VGb0dDLGtEQUFBO0VBQ0EsV0k1TUY7RUo2TUUseUJBQUE7QUR5NkhWLENDbjZIWTtFQUNFLHlCQUFBO0FEcTZIZCxDQ2w2SFU7RUFHRSx5QkFBQTtBRGs2SFosQ0MvNUhVO0VBQ0UsV0k5Tko7QUwrbklSLENDLzVIVTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FEZzZIWixDQ3o1SFE7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0V2SUQ7QUhtaUlULENDMTVIVTtFQUNFLHlDQUFBO0VBQ0EsY0UzSUg7QUh1aUlULENDMTVIVTtFQUNFLGdCQUFBO0FENDVIWixDQzE1SFU7RUFHRSx3Q0FBQTtFQUNBLGNFcEpIO0FIOGlJVCxDQ3Y1SFU7RUFDRSwrU0FBQTtBRHk1SFosQ0N0NUhVO0VBQ0Usd0NBQUE7RUFDQSxjRTdKSDtBSHFqSVQsQ0M5NEhZOztFQUNFLHFLQUFBO0FEazVIZCxDQ240SFU7RUFDRSx5QkV4TEg7QUg4aklULENDNTNIYztFQUNFLGNFbk1QO0FIa2tJVCxDQzczSGM7RUFDRSx5QkFBQTtBRCszSGhCLENDbjNIYztFQUNFLDhCQUFBO0VBQ0EsV0kzVFI7QUxpcklSLENDcDNIZ0I7RUFDRSxXSTlUVjtBTG9ySVIsQ0NoM0hjO0VBQ0UsY0U5TlA7QUhnbElULENDNTJIYztFQUNFLG1CRXJPUDtFRnNPTyxXSTdVUjtBTDJySVIsQ0N0MkhrQjtFQUNFLDJUQUFBO0FEdzJIcEIsQ0MxMUhrQjtFQUNFLDJUQUFBO0FENDFIcEIsQ0MxMEhjO0VBQ0UsV0l4WFI7RUp5WFEsb0NBQUE7RUFDQSxxQkVuUlA7RUZvUk8sbURBQUE7QUQ2MEhoQixDQ3AwSFE7RUFDRSx5Q0FBQTtBRHUwSFYsQ0NyMEhVO0VBQ0UseUJFalNIO0FId21JVCxDQy96SFU7RUFDRSxnQ0FBQTtBRGswSFosQ0NoMEhZOztFQUVFLDBCQUFBO0FEazBIZCxDQy96SFk7RUFDRSxvQ0FBQTtBRGkwSGQsQ0NoMEhjO0VBQ0UsOENBQUE7QURrMEhoQixDQ3Z6SFk7RUFFRSxnQ0FBQTtBRHl6SGQsQ0MveUhNO0VBQ0UsaUVBQUE7QURrekhSLENDNXlIVTs7RUFFRSxxQkVwVkg7RUZxVkcseUJFclZIO0FIb29JVCxDQzN5SFk7Ozs7O0VBR0UseURBQUE7QUQreUhkLENDNXlIVTtFQUNFLG9EQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FEOHlIWixDQzV5SFU7RUFDRSxnQ0FBQTtBRDh5SFosQ0N0eUhVO0VBQ0Usb0NBQUE7RUFDQSxXSXRkSjtFSnVkSSw2QkFBQTtBRHl5SFosQ0MveEhjO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBRGt5SGhCLENDM3hITTtFQUNFLHlCQUFBO0FEOHhIUixDQzN4SE07RUFDRSxvQ0FBQTtBRDh4SFIsQ0MzeEhNO0VBQ0Usb0NBQUE7QUQ4eEhSLENDM3hITTtFQUNFLHdDQUFBO0FEOHhIUixDQzN4SE07RUFDRSwyQ0FBQTtBRDh4SFIsQ0MzeEhNO0VBQ0UseUNBQUE7QUQ4eEhSLENDM3hITTtFQUNFLDBDQUFBO0FEOHhIUixDQzN4SE07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRmd6SUYsQ0M3ekhNO0VBQ0UseUJBQUE7QURnMEhSLENDN3pITTtFQUNFLG9DQUFBO0FEZzBIUixDQzd6SE07RUFDRSxvQ0FBQTtBRGcwSFIsQ0M3ekhNO0VBQ0Usd0NBQUE7QURnMEhSLENDN3pITTtFQUNFLDJDQUFBO0FEZzBIUixDQzd6SE07RUFDRSx5Q0FBQTtBRGcwSFIsQ0M3ekhNO0VBQ0UsMENBQUE7QURnMEhSLENDN3pITTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGazFJRixDQy8xSE07RUFDRSx5QkFBQTtBRGsySFIsQ0MvMUhNO0VBQ0Usb0NBQUE7QURrMkhSLENDLzFITTtFQUNFLG9DQUFBO0FEazJIUixDQy8xSE07RUFDRSx3Q0FBQTtBRGsySFIsQ0MvMUhNO0VBQ0UsMkNBQUE7QURrMkhSLENDLzFITTtFQUNFLHlDQUFBO0FEazJIUixDQy8xSE07RUFDRSwwQ0FBQTtBRGsySFIsQ0MvMUhNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZvM0lGLENDajRITTtFQUNFLHlCQUFBO0FEbzRIUixDQ2o0SE07RUFDRSxvQ0FBQTtBRG80SFIsQ0NqNEhNO0VBQ0Usb0NBQUE7QURvNEhSLENDajRITTtFQUNFLHdDQUFBO0FEbzRIUixDQ2o0SE07RUFDRSwyQ0FBQTtBRG80SFIsQ0NqNEhNO0VBQ0UseUNBQUE7QURvNEhSLENDajRITTtFQUNFLDBDQUFBO0FEbzRIUixDQ2o0SE07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRnM1SUYsQ0NuNkhNO0VBQ0UseUJBQUE7QURzNkhSLENDbjZITTtFQUNFLG9DQUFBO0FEczZIUixDQ242SE07RUFDRSxvQ0FBQTtBRHM2SFIsQ0NuNkhNO0VBQ0Usd0NBQUE7QURzNkhSLENDbjZITTtFQUNFLDJDQUFBO0FEczZIUixDQ242SE07RUFDRSx5Q0FBQTtBRHM2SFIsQ0NuNkhNO0VBQ0UsMENBQUE7QURzNkhSLENDbjZITTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGdzdJRixDQ3I4SE07RUFDRSx5QkFBQTtBRHc4SFIsQ0NyOEhNO0VBQ0Usb0NBQUE7QUR3OEhSLENDcjhITTtFQUNFLG9DQUFBO0FEdzhIUixDQ3I4SE07RUFDRSx3Q0FBQTtBRHc4SFIsQ0NyOEhNO0VBQ0UsMkNBQUE7QUR3OEhSLENDcjhITTtFQUNFLHlDQUFBO0FEdzhIUixDQ3I4SE07RUFDRSwwQ0FBQTtBRHc4SFIsQ0NyOEhNO0VDaGhCSixtQkNpSE87RURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUYwOUlGLENDditITTtFQUNFLHlCQUFBO0FEMCtIUixDQ3YrSE07RUFDRSxvQ0FBQTtBRDArSFIsQ0N2K0hNO0VBQ0Usb0NBQUE7QUQwK0hSLENDditITTtFQUNFLHdDQUFBO0FEMCtIUixDQ3YrSE07RUFDRSwyQ0FBQTtBRDArSFIsQ0N2K0hNO0VBQ0UseUNBQUE7QUQwK0hSLENDditITTtFQUNFLDBDQUFBO0FEMCtIUixDQ3YrSE07RUNoaEJKLG1CQ2lITztFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjQvSUYsQ0N6Z0lNO0VBQ0UseUJBQUE7QUQ0Z0lSLENDemdJTTtFQUNFLG9DQUFBO0FENGdJUixDQ3pnSU07RUFDRSxvQ0FBQTtBRDRnSVIsQ0N6Z0lNO0VBQ0Usd0NBQUE7QUQ0Z0lSLENDemdJTTtFQUNFLDJDQUFBO0FENGdJUixDQ3pnSU07RUFDRSx5Q0FBQTtBRDRnSVIsQ0N6Z0lNO0VBQ0UsMENBQUE7QUQ0Z0lSLENDemdJTTtFQ2hoQkosbUJDaUhPO0VEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGOGhKRixDTWxnSlE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEZVUseUJBQUE7QU44L0laLENNbGdKWTs7RUNaViwwREFBQTtFQUNBLDJCQUFBO0VEYVkseUJBQUE7QU5zZ0pkLENNNy9JVTs7O0VBRUUsV0R6Q0o7QUx5aUpSLENNOS9JVTs7RUFDRSwyQkFBQTtBTmlnSlosQ00vL0lVOztFQUNFLHdCQUFBO0FOa2dKWixDTWhnSlU7OztFQ2pDUiwwREFBQTtFQUNBLDJCQUFBO0VEcUNVLHlCQUFBO0FOa2dKWixDTXJpSlE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEb0JVLHlCQUFBO0FONGhKWixDTTFoSlU7OztFQUVFLFdEekNKO0FMc2tKUixDTTNoSlU7O0VBQ0UsMkJBQUE7QU44aEpaLENNNWhKVTs7RUFDRSx3QkFBQTtBTitoSlosQ003aEpVOzs7RUNqQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHFDVSx5QkFBQTtBTitoSlosQ01sa0pROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRG9CVSx5QkFBQTtBTnlqSlosQ012akpVOzs7RUFFRSxXRHpDSjtBTG1tSlIsQ014akpVOztFQUNFLDJCQUFBO0FOMmpKWixDTXpqSlU7O0VBQ0Usd0JBQUE7QU40akpaLENNMWpKVTs7O0VDakNSLDBEQUFBO0VBQ0EsMkJBQUE7RURxQ1UseUJBQUE7QU40akpaLENNL2xKUTs7RUFFRSxXRHJCRjtFQ3NCRSx5QkFBQTtFQ05SLDBEQUFBO0VBQ0EsMkJBQUE7RURvQlUseUJBQUE7QU5zbEpaLENNcGxKVTs7O0VBRUUsV0R6Q0o7QUxnb0pSLENNcmxKVTs7RUFDRSwyQkFBQTtBTndsSlosQ010bEpVOztFQUNFLHdCQUFBO0FOeWxKWixDTXZsSlU7OztFQ2pDUiwwREFBQTtFQUNBLDJCQUFBO0VEcUNVLHlCQUFBO0FOeWxKWixDTTVuSlE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEb0JVLHlCQUFBO0FObW5KWixDTWpuSlU7OztFQUVFLFdEekNKO0FMNnBKUixDTWxuSlU7O0VBQ0UsMkJBQUE7QU5xbkpaLENNbm5KVTs7RUFDRSx3QkFBQTtBTnNuSlosQ01wbkpVOzs7RUNqQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHFDVSx5QkFBQTtBTnNuSlosQ016cEpROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRG9CVSx5QkFBQTtBTmdwSlosQ005b0pVOzs7RUFFRSxXRHpDSjtBTDBySlIsQ00vb0pVOztFQUNFLDJCQUFBO0FOa3BKWixDTWhwSlU7O0VBQ0Usd0JBQUE7QU5tcEpaLENNanBKVTs7O0VDakNSLDBEQUFBO0VBQ0EsMkJBQUE7RURxQ1UseUJBQUE7QU5tcEpaLENNdHJKUTs7RUFFRSxXRHJCRjtFQ3NCRSx5QkFBQTtFQ05SLDBEQUFBO0VBQ0EsMkJBQUE7RURvQlUseUJBQUE7QU42cUpaLENNM3FKVTs7O0VBRUUsV0R6Q0o7QUx1dEpSLENNNXFKVTs7RUFDRSwyQkFBQTtBTitxSlosQ003cUpVOztFQUNFLHdCQUFBO0FOZ3JKWixDTTlxSlU7OztFQ2pDUiwwREFBQTtFQUNBLDJCQUFBO0VEcUNVLHlCQUFBO0FOZ3JKWixDUTV0Sk07RUFDRSx1QkFBQTtBUit0SlIsQ1E1dEpNO0VBQ0UseUJIZ0tRO0VHL0pSLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBUjh0SlIsQ1E1dEpRO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QVI4dEpWLENRM3RKUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QVI2dEpWLENRMXRKVTtFQUNFLGlCQUFBO0FSNHRKWixDUXZ0Sk07RUFDRSxxQkgwRU87QUwrb0pmLENRdnRKUTtFQUNFLHlCQUFBO0FSeXRKVixDUXR0SlE7RUFDRSx5QkgvQ0E7RUdnREEsY0gwQ0c7QUw4cUpiLENRcHRKVTtFQUNFLGlCQUFBO0FSc3RKWixDUWx0SlE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBUm90SlYsQ1FodEpNO0VBQ0Usc0JIbEVBO0VHbUVBLGNIOURHO0VHK0RILGdCQUFBO0VBQ0EsbUJBQUE7QVJrdEpSLENRL3NKVTtFQUNFLGNIcEVEO0VHcUVDLGlCQUFBO0FSaXRKWixDUTVzSmM7RUFFRSxtQkFBQTtBUjZzSmhCLENRNXNKZ0I7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QVI4c0psQixDUTFzSmdCO0VBQ0Usd0NBQUE7RUFDQSx5QkFBQTtBUjRzSmxCLENRdnNKWTtFQUNFLG1DQUFBO0FSeXNKZCxDUXZzSmdCO0VBQ0Usc0JIdkdWO0VHd0dVLGNIbkdQO0FMNHlKWCxDUXBzSmdCO0VBQ0UsY0htREw7QUxtcEpiLENRanNKVTtFQUNFLHlCSDhNSTtFRzdNSiw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QVJtc0paLENRaHNKUTtFQUNFLGNIb0NHO0FMOHBKYixDUTdySlE7RUFDRSx1QkFBQTtBUitySlYsQ1E1ckpNO0VBQ0UsNEJBQUE7QVI4ckpSLENRdnJKQTtFQUNFO0lBQ0UsYUFBQTtFUjBySkY7O0VRdnJKQTtJQUNFLDZCQUFBO0lBQ0Esb0JBQUE7RVIwckpGO0FBQ0YsQ1F2ckpBO0VBQ0U7SUFDRSxnQkFBQTtFUnlySkY7O0VRdHJKQTtJQUNFLGFBQUE7RVJ5ckpGO0FBQ0YsQ1F0ckpBO0VBQ0U7SUFDRSxhQUFBO0VSd3JKRjs7RVFyckpBO0lBQ0UsZ0JBQUE7RVJ3ckpGO0FBQ0YsQ1FuckpFOztFQUVFLG9DQUFBO0VBQ0Esd0NBQUE7QVJxckpKLENRanJKSTtFQUNFLG9DQUFBO0FSbXJKTixDUWxySk07RUFDRSxjSHBMRztBTHcySlgsQ1FsckpNO0VBQ0UsY0NyTGdCO0FUeTJKeEIsQ1EvcUpFO0VBQ0UsZ0NBQUE7QVJpckpKLENRaHJKSTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QVJrckpOLENROXFKRTtFQUNFLG9DQUFBO0FSZ3JKSixDUTdxSkU7RUFDRSxvQ0FBQTtBUitxSkosQ0F0NEpBO0VBQ0Usc0JBQUE7QUF5NEpGIiwiZmlsZSI6ImRhdGF0YWJsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuc3ZnI2RhdGEtdGFibGUnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbltkYXRhLWljb25dOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1pY29uKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj0nZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSxcbltjbGFzcyo9JyBkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZmlsdGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Mic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jb2xsYXBzZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZXhwYW5kOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jbG9zZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tdXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY1Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvd246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY2Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQtdW5zZXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjcnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjgnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZS1hbGw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY5Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNlYXJjaDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcGluOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Yic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1hZGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZkJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWxlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZmJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXJpZ2h0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1za2lwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3Mic7XG59XG4iLCIubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKipcbiAgICogVmVydGljYWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogSG9yaXpvbnRhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCBIZWFkZXIgSGVpZ2h0IEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgcm93IGhlaWdodCBhZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIFNoYXJlZCBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBIZWFkZXIgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogQm9keSBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLm5neC1kYXRhdGFibGUgKixcbiAgLm5neC1kYXRhdGFibGUgKjpiZWZvcmUsXG4gIC5uZ3gtZGF0YXRhYmxlICo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbC52aXJ0dWFsaXplZCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC1ob3J6IC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1yb3csXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAtbW96LWZsZXgtZmxvdzogcm93O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdztcbiAgICAtby1mbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdzsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuc29ydGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnNvcnQtYnRuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlOmhvdmVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpob3ZlciAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93ID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDQwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA2MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgODAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIiwiLypcbmJvb3RzdHJhcCB0YWJsZSB0aGVtZVxuKi9cblxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZDRkNztcbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtbGFiZWwge1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QxZDRkNztcbiAgICAgICYuZGF0YXRhYmxlLXJvdy1ldmVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgIH1cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0ODNmZjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB9XG4gICAgfVxuICAgIC5lbXB0eS1yb3cge1xuICAgICAgJGFsZXJ0LXBhZGRpbmcteTogMC43NXJlbSAhZGVmYXVsdDtcbiAgICAgICRhbGVydC1wYWRkaW5nLXg6IDEuMjVyZW0gIWRlZmF1bHQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiAkYWxlcnQtcGFkZGluZy15ICRhbGVydC1wYWRkaW5nLXg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuICAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogIzQyNDI0MjtcbiAgICBjb2xvcjogI2VkZWRlZDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIC5wYWdlLWNvdW50IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcGFkZGluZzogMCAxLjJyZW07XG4gICAgfVxuICAgIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAmOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICYuYWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWFyZ2luOiAwIDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgIGNvbG9yOiAjZWRlZGVkO1xuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tc2tpcCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgICAgcGFkZGluZzogMCAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIFN1bW1hcnkgcm93IHN0eWxlc1xuICAuZGF0YXRhYmxlLXN1bW1hcnktcm93IHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbi8qXG5ib290c3RyYXAgdGFibGUgdGhlbWVcbiovXG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkNGQ3O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC1sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMWQ0ZDc7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cuZGF0YXRhYmxlLXJvdy1ldmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4M2ZmO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1ib2R5IC5lbXB0eS1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICM0MjQyNDI7XG4gIGNvbG9yOiAjZWRlZGVkO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAxLjJyZW07XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGkge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEsIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpOmhvdmVyIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGEge1xuICBoZWlnaHQ6IDIycHg7XG4gIG1pbi13aWR0aDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAwIDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGNvbG9yOiAjZWRlZGVkO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgcGFkZGluZzogMCAzcHg7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbi5iZy13aGl0ZSAuY2FyZC1oZWFkZXIsXG4uYmctd2hpdGUgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5ib3JkZXItd2hpdGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdoaXRlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5ib3JkZXItYm90dG9tLXdoaXRlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5ib3JkZXItbGVmdC13aGl0ZSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZmZmZjtcbn1cblxuLmJvcmRlci1yaWdodC13aGl0ZSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5iZy13aGl0ZS5iYWRnZS1nbG93LFxuLmJvcmRlci13aGl0ZS5iYWRnZS1nbG93LFxuLmJhZGdlLXdoaXRlLmJhZGdlLWdsb3cge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2ZmZmZmZjtcbn1cblxuLm92ZXJsYXktd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy13aGl0ZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDc1cmVtICNmZmYsIDAgMCAwIDAuMjFyZW0gI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG4uYmctYmxhY2sgLmNhcmQtaGVhZGVyLFxuLmJnLWJsYWNrIC5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYm9yZGVyLWJsYWNrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1ibGFjayB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4uYm9yZGVyLWJvdHRvbS1ibGFjayB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4uYm9yZGVyLWxlZnQtYmxhY2sge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDAwMDA7XG59XG5cbi5ib3JkZXItcmlnaHQtYmxhY2sge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4uYmctYmxhY2suYmFkZ2UtZ2xvdyxcbi5ib3JkZXItYmxhY2suYmFkZ2UtZ2xvdyxcbi5iYWRnZS1ibGFjay5iYWRnZS1nbG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XG59XG5cbi5vdmVybGF5LWJsYWNrIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuaW5wdXQ6Zm9jdXMgfiAuYmctYmxhY2sge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA3NXJlbSAjZmZmLCAwIDAgMCAwLjIxcmVtICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG4uYmctZGFyayAuY2FyZC1oZWFkZXIsXG4uYmctZGFyayAuY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmFsZXJ0LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc1LCA3NSwgNzUsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtZGFyayAuYWxlcnQtaGVhZGluZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoNzUsIDc1LCA3NSwgMC40KSAwcHggNnB4IDE1cHggLTdweDtcbn1cbi5hbGVydC1kYXJrIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICMzZTNlM2UgIWltcG9ydGFudDtcbn1cbi5hbGVydC1kYXJrIC5jbG9zZSB7XG4gIGNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFyayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YjRiNGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFyayB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNGI0YjRiO1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYXJrIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjRiNGI7XG59XG5cbi5ib3JkZXItbGVmdC1kYXJrIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNGI0YjRiO1xufVxuXG4uYm9yZGVyLXJpZ2h0LWRhcmsge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNGI0YjRiO1xufVxuXG4uYmctZGFyay5iYWRnZS1nbG93LFxuLmJvcmRlci1kYXJrLmJhZGdlLWdsb3csXG4uYmFkZ2UtZGFyay5iYWRnZS1nbG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM0YjRiNGI7XG59XG5cbi5iYWRnZS5iYWRnZS1saWdodC1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAwLjEyKTtcbiAgY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFyayB7XG4gIGJhY2tncm91bmQ6ICM0YjRiNGI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc1LCA3NSwgNzUsIDAuNik7XG59XG5cbi5idG4tZGFyayB7XG4gIGJvcmRlci1jb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuLWRhcms6Zm9jdXMsIC5idG4tZGFyazphY3RpdmUsIC5idG4tZGFyay5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNCAhaW1wb3J0YW50O1xufVxuLmJ0bi1kYXJrOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCAtOHB4ICM0YjRiNGI7XG59XG4uYnRuLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1mbGF0LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM0YjRiNGI7XG59XG4uYnRuLWZsYXQtZGFyazpob3ZlciB7XG4gIGNvbG9yOiAjNGI0YjRiO1xufVxuLmJ0bi1mbGF0LWRhcms6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuMTIpO1xufVxuLmJ0bi1mbGF0LWRhcms6YWN0aXZlLCAuYnRuLWZsYXQtZGFyay5hY3RpdmUsIC5idG4tZmxhdC1kYXJrOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAwLjIpO1xuICBjb2xvcjogIzRiNGI0Yjtcbn1cbi5idG4tZmxhdC1kYXJrLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzRiNGI0Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLmJ0bi1yZWxpZWYtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAwIDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjIpO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbi5idG4tcmVsaWVmLWRhcms6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI2MjYyO1xufVxuLmJ0bi1yZWxpZWYtZGFyazphY3RpdmUsIC5idG4tcmVsaWVmLWRhcmsuYWN0aXZlLCAuYnRuLXJlbGllZi1kYXJrOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbn1cbi5idG4tcmVsaWVmLWRhcms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tcmVsaWVmLWRhcms6YWN0aXZlLCAuYnRuLXJlbGllZi1kYXJrLmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xufVxuXG4uYnRuLW91dGxpbmUtZGFyayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YjRiNGIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNGI0YjRiO1xufVxuLmJ0bi1vdXRsaW5lLWRhcms6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuMDQpO1xuICBjb2xvcjogIzRiNGI0Yjtcbn1cbi5idG4tb3V0bGluZS1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuLW91dGxpbmUtZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuMik7XG4gIGNvbG9yOiAjNGI0YjRiO1xufVxuLmJ0bi1vdXRsaW5lLWRhcmsuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNGI0YjRiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnNob3cgPiAuYnRuLW91dGxpbmUtZGFyay5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuMik7XG4gIGNvbG9yOiAjNGI0YjRiO1xufVxuXG4uYnRuLW91dGxpbmUtZGFyay53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSxcbi5idG4tZmxhdC1kYXJrLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoNzUsIDc1LCA3NSwgMC4yKSAwLCByZ2JhKDc1LCA3NSwgNzUsIDAuMykgNDAlLCByZ2JhKDc1LCA3NSwgNzUsIDAuNCkgNTAlLCByZ2JhKDc1LCA3NSwgNzUsIDAuNSkgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG59XG5cbi5idWxsZXQuYnVsbGV0LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xufVxuXG4ubW9kYWwubW9kYWwtZGFyayAubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjNGI0YjRiO1xufVxuLm1vZGFsLm1vZGFsLWRhcmsgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBjb2xvcjogIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuMTIpO1xufVxuLnByb2dyZXNzLWJhci1kYXJrIC5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhcmsge1xuICBib3JkZXItY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtZGFyayBpLFxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1kYXJrIHN2ZyB7XG4gIHN0cm9rZTogIzRiNGI0YiAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1kYXJrLnRpbWVsaW5lLXBvaW50LWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtZGFyay50aW1lbGluZS1wb2ludC1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSg3NSwgNzUsIDc1LCAwLjEyKSAhaW1wb3J0YW50O1xufVxuXG4uZGl2aWRlci5kaXZpZGVyLWRhcmsgLmRpdmlkZXItdGV4dDpiZWZvcmUsIC5kaXZpZGVyLmRpdmlkZXItZGFyayAuZGl2aWRlci10ZXh0OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzIH4gLmJnLWRhcmsge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA3NXJlbSAjZmZmLCAwIDAgMCAwLjIxcmVtICM0YjRiNGIgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWRhcmsgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1kYXJrIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzRiNGI0YjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0Yjtcbn1cbi5jdXN0b20tY29udHJvbC1kYXJrLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhcmsuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1kYXJrLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLWRhcmsuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtZGFyay5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhcmsuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSg3NSwgNzUsIDc1LCAwLjQpICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNvbnRyb2wtZGFyayAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAwLjY1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1kYXJrIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tc3dpdGNoLWRhcmsgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4uc2VsZWN0Mi1kYXJrIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgYmFja2dyb3VuZDogIzRiNGI0YiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICM0YjRiNGIgIWltcG9ydGFudDtcbn1cblxuLnRleHQtZGFyay50ZXh0LWRhcmtlbi0xIHtcbiAgY29sb3I6ICMzNDM0MzQgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhcmsuYmctZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFyay5ib3JkZXItZGFya2VuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQzNDM0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhcmsuYm9yZGVyLXRvcC1kYXJrZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzQzNDM0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhcmsuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzQzNDM0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYXJrLmJvcmRlci1sZWZ0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzQzNDM0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFyay5ib3JkZXItcmlnaHQtZGFya2VuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzQzNDM0ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhcmsub3ZlcmxheS1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQ6ICMzNDM0MzQ7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCA1MiwgNTIsIDAuNik7XG59XG5cbi50ZXh0LWRhcmsudGV4dC1kYXJrZW4tMiB7XG4gIGNvbG9yOiAjMWUxZTFlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYXJrLmJnLWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhcmsuYm9yZGVyLWRhcmtlbi0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFlMWUxZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYXJrLmJvcmRlci10b3AtZGFya2VuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzFlMWUxZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYXJrLmJvcmRlci1ib3R0b20tZGFya2VuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFlMWUxZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFyay5ib3JkZXItbGVmdC1kYXJrZW4tMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzFlMWUxZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWRhcmsuYm9yZGVyLXJpZ2h0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzFlMWUxZSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYXJrLm92ZXJsYXktZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjYpO1xufVxuXG4udGV4dC1kYXJrLnRleHQtZGFya2VuLTMge1xuICBjb2xvcjogIzYyNjI2MiAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFyay5iZy1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjYyNjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYXJrLmJvcmRlci1kYXJrZW4tMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjYyNjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFyay5ib3JkZXItdG9wLWRhcmtlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2MjYyNjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFyay5ib3JkZXItYm90dG9tLWRhcmtlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MjYyNjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhcmsuYm9yZGVyLWxlZnQtZGFya2VuLTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM2MjYyNjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYXJrLmJvcmRlci1yaWdodC1kYXJrZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2MjYyNjIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFyay5vdmVybGF5LWRhcmtlbi0zIHtcbiAgYmFja2dyb3VuZDogIzYyNjI2MjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoOTgsIDk4LCA5OCwgMC42KTtcbn1cblxuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNiAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0IC5jYXJkLWhlYWRlcixcbi5iZy1saWdodCAuY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJvcmRlci1saWdodCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtbGlnaHQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y2ZjZmNjtcbn1cblxuLmJvcmRlci1ib3R0b20tbGlnaHQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y2ZjZmNjtcbn1cblxuLmJvcmRlci1sZWZ0LWxpZ2h0IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjZmNmY2O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWxpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y2ZjZmNjtcbn1cblxuLmJnLWxpZ2h0LmJhZGdlLWdsb3csXG4uYm9yZGVyLWxpZ2h0LmJhZGdlLWdsb3csXG4uYmFkZ2UtbGlnaHQuYmFkZ2UtZ2xvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZjZmNmY2O1xufVxuXG4ub3ZlcmxheS1saWdodCB7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NiwgMjQ2LCAyNDYsIDAuNik7XG59XG5cbmlucHV0OmZvY3VzIH4gLmJnLWxpZ2h0IHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjZjZmNmY2ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1saWdodGVuLTUge1xuICBjb2xvcjogI2RlZGJmYiAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1saWdodGVuLTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkYmZiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItbGlnaHRlbi01IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGJmYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRiZmIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkYmZiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZGJmYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWRiZmIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQ6ICNkZWRiZmI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyMiwgMjE5LCAyNTEsIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1saWdodGVuLTQge1xuICBjb2xvcjogI2M5YzRmOSAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1saWdodGVuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljNGY5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItbGlnaHRlbi00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M5YzRmOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjOWM0ZjkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzljNGY5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2M5YzRmOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjOWM0ZjkgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQ6ICNjOWM0Zjk7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMSwgMTk2LCAyNDksIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1saWdodGVuLTMge1xuICBjb2xvcjogI2IzYWRmNyAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1saWdodGVuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNhZGY3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItbGlnaHRlbi0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYWRmNyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiM2FkZjcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjNhZGY3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2IzYWRmNyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiM2FkZjcgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQ6ICNiM2FkZjc7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE3OSwgMTczLCAyNDcsIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1saWdodGVuLTIge1xuICBjb2xvcjogIzllOTVmNSAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1saWdodGVuLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5NWY1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItbGlnaHRlbi0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzllOTVmNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5ZTk1ZjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWU5NWY1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzllOTVmNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5ZTk1ZjUgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWxpZ2h0ZW4tMiB7XG4gIGJhY2tncm91bmQ6ICM5ZTk1ZjU7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1OCwgMTQ5LCAyNDUsIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1saWdodGVuLTEge1xuICBjb2xvcjogIzg4N2VmMiAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1saWdodGVuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg3ZWYyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItbGlnaHRlbi0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4N2VmMiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4ODdlZjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg3ZWYyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzg4N2VmMiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODdlZjIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQ6ICM4ODdlZjI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzNiwgMTI2LCAyNDIsIDAuNik7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuLmJnLXByaW1hcnkgLmNhcmQtaGVhZGVyLFxuLmJnLXByaW1hcnkgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbGVydC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LXByaW1hcnkgLmFsZXJ0LWhlYWRpbmcge1xuICBib3gtc2hhZG93OiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuNCkgMHB4IDZweCAxNXB4IC03cHg7XG59XG4uYWxlcnQtcHJpbWFyeSAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjNWU1MGVlICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtcHJpbWFyeSAuY2xvc2Uge1xuICBjb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuXG4uYmctbGlnaHQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MzY3ZjAgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1wcmltYXJ5LmZjLWgtZXZlbnQsIC5iZy1saWdodC1wcmltYXJ5LmZjLXYtZXZlbnQge1xuICBib3JkZXItY29sb3I6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4xKTtcbn1cbi5iZy1saWdodC1wcmltYXJ5IC5mYy1saXN0LWV2ZW50LWRvdCxcbi5iZy1saWdodC1wcmltYXJ5IC5mYy1kYXlncmlkLWV2ZW50LWRvdCB7XG4gIGJvcmRlci1jb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LXByaW1hcnkuZmMtbGlzdC1ldmVudDpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4xKSAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LXByaW1hcnkuZmMtbGlzdC1ldmVudCAuZmMtbGlzdC1ldmVudC10aXRsZSB7XG4gIGNvbG9yOiAjNmU2YjdiO1xufVxuXG4uYXZhdGFyLmJnLWxpZ2h0LXByaW1hcnkge1xuICBjb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXByaW1hcnkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzczNjdmMDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzM2N2YwO1xufVxuXG4uYm9yZGVyLWxlZnQtcHJpbWFyeSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzczNjdmMDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzczNjdmMDtcbn1cblxuLmJnLXByaW1hcnkuYmFkZ2UtZ2xvdyxcbi5ib3JkZXItcHJpbWFyeS5iYWRnZS1nbG93LFxuLmJhZGdlLXByaW1hcnkuYmFkZ2UtZ2xvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNzM2N2YwO1xufVxuXG4uYmFkZ2UuYmFkZ2UtbGlnaHQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4xMik7XG4gIGNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjNzM2N2YwO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjYpO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBib3JkZXItY29sb3I6ICM3MzY3ZjAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlLCAuYnRuLXByaW1hcnkuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTUwZWUgIWltcG9ydGFudDtcbn1cbi5idG4tcHJpbWFyeTpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggLThweCAjNzM2N2YwO1xufVxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5idG4tZmxhdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNzM2N2YwO1xufVxuLmJ0bi1mbGF0LXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogIzczNjdmMDtcbn1cbi5idG4tZmxhdC1wcmltYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjEyKTtcbn1cbi5idG4tZmxhdC1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1mbGF0LXByaW1hcnkuYWN0aXZlLCAuYnRuLWZsYXQtcHJpbWFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4yKTtcbiAgY29sb3I6ICM3MzY3ZjA7XG59XG4uYnRuLWZsYXQtcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM3MzY3ZjAnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5idG4tcmVsaWVmLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwIHJnYmEoMzQsIDQxLCA0NywgMC4yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uYnRuLXJlbGllZi1wcmltYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4N2VmMjtcbn1cbi5idG4tcmVsaWVmLXByaW1hcnk6YWN0aXZlLCAuYnRuLXJlbGllZi1wcmltYXJ5LmFjdGl2ZSwgLmJ0bi1yZWxpZWYtcHJpbWFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTUwZWU7XG59XG4uYnRuLXJlbGllZi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXJlbGllZi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1yZWxpZWYtcHJpbWFyeS5hY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzM2N2YwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzczNjdmMDtcbn1cbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjA0KTtcbiAgY29sb3I6ICM3MzY3ZjA7XG59XG4uYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjIpO1xuICBjb2xvcjogIzczNjdmMDtcbn1cbi5idG4tb3V0bGluZS1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzczNjdmMCcgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjIpO1xuICBjb2xvcjogIzczNjdmMDtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnkud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUsXG4uYnRuLWZsYXQtcHJpbWFyeS53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDExNSwgMTAzLCAyNDAsIDAuMikgMCwgcmdiYSgxMTUsIDEwMywgMjQwLCAwLjMpIDQwJSwgcmdiYSgxMTUsIDEwMywgMjQwLCAwLjQpIDUwJSwgcmdiYSgxMTUsIDEwMywgMjQwLCAwLjUpIDYwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA3MCUpO1xufVxuXG4uYnVsbGV0LmJ1bGxldC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNjdmMDtcbn1cblxuLm1vZGFsLm1vZGFsLXByaW1hcnkgLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBjb2xvcjogIzczNjdmMDtcbn1cbi5tb2RhbC5tb2RhbC1wcmltYXJ5IC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgY29sb3I6ICM3MzY3ZjAgIWltcG9ydGFudDtcbn1cblxuLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZDogIzczNjdmMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBjb2xvcjogIzczNjdmMDtcbn1cbi5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazpob3ZlciwgLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzczNjdmMDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6YWN0aXZlOmFmdGVyLCAucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIsIC5wYWdpbmF0aW9uLXByaW1hcnkgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6YWN0aXZlOmFmdGVyLCAucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0ubmV4dCAucGFnZS1saW5rOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM3MzY3ZjAnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XG59XG4ucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6YWN0aXZlOmJlZm9yZSwgLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyOmJlZm9yZSwgLnBhZ2luYXRpb24tcHJpbWFyeSAucGFnZS1pdGVtLnByZXYgLnBhZ2UtbGluazphY3RpdmU6YmVmb3JlLCAucGFnaW5hdGlvbi1wcmltYXJ5IC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmhvdmVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNzM2N2YwJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxNSAxOCA5IDEyIDE1IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXBpbGwtcHJpbWFyeSAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzczNjdmMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMThweCAtNHB4IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC42NSk7XG59XG5cbi5wcm9ncmVzcy1iYXItcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4xMik7XG59XG4ucHJvZ3Jlc3MtYmFyLXByaW1hcnkgLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzY3ZjA7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtcHJpbWFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1wcmltYXJ5IGksXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXByaW1hcnkgc3ZnIHtcbiAgc3Ryb2tlOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXByaW1hcnkudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1wcmltYXJ5LnRpbWVsaW5lLXBvaW50LWluZGljYXRvcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuMTIpICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZpZGVyLmRpdmlkZXItcHJpbWFyeSAuZGl2aWRlci10ZXh0OmJlZm9yZSwgLmRpdmlkZXIuZGl2aWRlci1wcmltYXJ5IC5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICM3MzY3ZjAgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiAuYmctcHJpbWFyeSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDc1cmVtICNmZmYsIDAgMCAwIDAuMjFyZW0gIzczNjdmMCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtcHJpbWFyeSAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXByaW1hcnkgLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNzM2N2YwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwO1xufVxuLmN1c3RvbS1jb250cm9sLXByaW1hcnkuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtcHJpbWFyeS5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXByaW1hcnkuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtcHJpbWFyeS5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1wcmltYXJ5LmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtcHJpbWFyeS5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDExNSwgMTAzLCAyNDAsIDAuNCkgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1wcmltYXJ5IC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuNjUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLXByaW1hcnkgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICM3MzY3ZjAgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1zd2l0Y2gtcHJpbWFyeSAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5zZWxlY3QyLXByaW1hcnkgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2Uge1xuICBiYWNrZ3JvdW5kOiAjNzM2N2YwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtZGFya2VuLTEge1xuICBjb2xvcjogIzVlNTBlZSAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTUwZWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1kYXJrZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ZTUwZWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWRhcmtlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1ZTUwZWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWRhcmtlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZTUwZWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtZGFya2VuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM1ZTUwZWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1kYXJrZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM1ZTUwZWUgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZDogIzVlNTBlZTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoOTQsIDgwLCAyMzgsIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1kYXJrZW4tMiB7XG4gIGNvbG9yOiAjNDgzOWViICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4MzllYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXByaW1hcnkuYm9yZGVyLWRhcmtlbi0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ4MzllYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtZGFya2VuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ4MzllYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tZGFya2VuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ4MzllYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtcHJpbWFyeS5ib3JkZXItbGVmdC1kYXJrZW4tMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzQ4MzllYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQ4MzllYiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kOiAjNDgzOWViO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg3MiwgNTcsIDIzNSwgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWRhcmtlbi0zIHtcbiAgY29sb3I6ICMzMzIxZTkgIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkuYmctZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMyMWU5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItZGFya2VuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMyMWU5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1kYXJrZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMyMWU5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXByaW1hcnkuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMyMWU5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMyMWU5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtZGFya2VuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMyMWU5ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXByaW1hcnkub3ZlcmxheS1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQ6ICMzMzIxZTk7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUxLCAzMywgMjMzLCAwLjYpO1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtZGFya2VuLTQge1xuICBjb2xvcjogIzI3MTZkYiAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzE2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1kYXJrZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNzE2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWRhcmtlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyNzE2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWRhcmtlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNzE2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtZGFya2VuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMyNzE2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1kYXJrZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyNzE2ZGIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZDogIzI3MTZkYjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMzksIDIyLCAyMTksIDAuNik7XG59XG5cbi50ZXh0LXByaW1hcnkudGV4dC1hY2NlbnQtMSB7XG4gIGNvbG9yOiAjYmRmZGZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5LmJnLWFjY2VudC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkZmRmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXByaW1hcnkuYm9yZGVyLWFjY2VudC0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JkZmRmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1wcmltYXJ5LmJvcmRlci10b3AtYWNjZW50LTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2JkZmRmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1wcmltYXJ5LmJvcmRlci1ib3R0b20tYWNjZW50LTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JkZmRmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtcHJpbWFyeS5ib3JkZXItbGVmdC1hY2NlbnQtMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2JkZmRmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXByaW1hcnkuYm9yZGVyLXJpZ2h0LWFjY2VudC0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JkZmRmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1wcmltYXJ5Lm92ZXJsYXktYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kOiAjYmRmZGZmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxODksIDI1MywgMjU1LCAwLjYpO1xufVxuXG4udGV4dC1wcmltYXJ5LnRleHQtYWNjZW50LTIge1xuICBjb2xvcjogIzhhZmJmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctcHJpbWFyeS5iZy1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YWZiZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5LmJvcmRlci1hY2NlbnQtMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4YWZiZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtcHJpbWFyeS5ib3JkZXItdG9wLWFjY2VudC0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4YWZiZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tcHJpbWFyeS5ib3JkZXItYm90dG9tLWFjY2VudC0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4YWZiZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkuYm9yZGVyLWxlZnQtYWNjZW50LTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM4YWZiZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1wcmltYXJ5LmJvcmRlci1yaWdodC1hY2NlbnQtMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4YWZiZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktcHJpbWFyeS5vdmVybGF5LWFjY2VudC0yIHtcbiAgYmFja2dyb3VuZDogIzhhZmJmZjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTM4LCAyNTEsIDI1NSwgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWFjY2VudC0zIHtcbiAgY29sb3I6ICM1N2ZhZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkuYmctYWNjZW50LTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdmYWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItYWNjZW50LTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTdmYWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1hY2NlbnQtMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNTdmYWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXByaW1hcnkuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTdmYWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWFjY2VudC0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNTdmYWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtYWNjZW50LTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNTdmYWZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXByaW1hcnkub3ZlcmxheS1hY2NlbnQtMyB7XG4gIGJhY2tncm91bmQ6ICM1N2ZhZmY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDg3LCAyNTAsIDI1NSwgMC42KTtcbn1cblxuLnRleHQtcHJpbWFyeS50ZXh0LWFjY2VudC00IHtcbiAgY29sb3I6ICMzZGY5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkuYmctYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RmOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeS5ib3JkZXItYWNjZW50LTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2RmOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXByaW1hcnkuYm9yZGVyLXRvcC1hY2NlbnQtNCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2RmOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXByaW1hcnkuYm9yZGVyLWJvdHRvbS1hY2NlbnQtNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2RmOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1wcmltYXJ5LmJvcmRlci1sZWZ0LWFjY2VudC00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjM2RmOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtcHJpbWFyeS5ib3JkZXItcmlnaHQtYWNjZW50LTQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjM2RmOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXByaW1hcnkub3ZlcmxheS1hY2NlbnQtNCB7XG4gIGJhY2tncm91bmQ6ICMzZGY5ZmY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYxLCAyNDksIDI1NSwgMC42KTtcbn1cblxuLnRleHQtc2Vjb25kYXJ5LnRleHQtbGlnaHRlbi01IHtcbiAgY29sb3I6ICNjNGM2YzggIWltcG9ydGFudDtcbn1cblxuLmJnLXNlY29uZGFyeS5iZy1saWdodGVuLTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNmM4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5LmJvcmRlci1saWdodGVuLTUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNmM4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXNlY29uZGFyeS5ib3JkZXItdG9wLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzRjNmM4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXNlY29uZGFyeS5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNmM4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zZWNvbmRhcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYzRjNmM4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc2Vjb25kYXJ5LmJvcmRlci1yaWdodC1saWdodGVuLTUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzRjNmM4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXNlY29uZGFyeS5vdmVybGF5LWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQ6ICNjNGM2Yzg7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk4LCAyMDAsIDAuNik7XG59XG5cbi50ZXh0LXNlY29uZGFyeS50ZXh0LWxpZ2h0ZW4tNCB7XG4gIGNvbG9yOiAjYjdiOWJjICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zZWNvbmRhcnkuYmctbGlnaHRlbi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3YjliYyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeS5ib3JkZXItbGlnaHRlbi00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3YjliYyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zZWNvbmRhcnkuYm9yZGVyLXRvcC1saWdodGVuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2I3YjliYyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zZWNvbmRhcnkuYm9yZGVyLWJvdHRvbS1saWdodGVuLTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I3YjliYyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc2Vjb25kYXJ5LmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2I3YjliYyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXNlY29uZGFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I3YjliYyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zZWNvbmRhcnkub3ZlcmxheS1saWdodGVuLTQge1xuICBiYWNrZ3JvdW5kOiAjYjdiOWJjO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxODMsIDE4NSwgMTg4LCAwLjYpO1xufVxuXG4udGV4dC1zZWNvbmRhcnkudGV4dC1saWdodGVuLTMge1xuICBjb2xvcjogI2FhYWNiMCAhaW1wb3J0YW50O1xufVxuXG4uYmctc2Vjb25kYXJ5LmJnLWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWFjYjAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkuYm9yZGVyLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWFjYjAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc2Vjb25kYXJ5LmJvcmRlci10b3AtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWFjYjAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc2Vjb25kYXJ5LmJvcmRlci1ib3R0b20tbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWFjYjAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXNlY29uZGFyeS5ib3JkZXItbGVmdC1saWdodGVuLTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNhYWFjYjAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zZWNvbmRhcnkuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNhYWFjYjAgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc2Vjb25kYXJ5Lm92ZXJsYXktbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZDogI2FhYWNiMDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTcwLCAxNzIsIDE3NiwgMC42KTtcbn1cblxuLnRleHQtc2Vjb25kYXJ5LnRleHQtbGlnaHRlbi0yIHtcbiAgY29sb3I6ICM5Y2EwYTQgIWltcG9ydGFudDtcbn1cblxuLmJnLXNlY29uZGFyeS5iZy1saWdodGVuLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNhMGE0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5LmJvcmRlci1saWdodGVuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWNhMGE0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXNlY29uZGFyeS5ib3JkZXItdG9wLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOWNhMGE0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXNlY29uZGFyeS5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWNhMGE0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zZWNvbmRhcnkuYm9yZGVyLWxlZnQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOWNhMGE0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc2Vjb25kYXJ5LmJvcmRlci1yaWdodC1saWdodGVuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOWNhMGE0ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXNlY29uZGFyeS5vdmVybGF5LWxpZ2h0ZW4tMiB7XG4gIGJhY2tncm91bmQ6ICM5Y2EwYTQ7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1NiwgMTYwLCAxNjQsIDAuNik7XG59XG5cbi50ZXh0LXNlY29uZGFyeS50ZXh0LWxpZ2h0ZW4tMSB7XG4gIGNvbG9yOiAjOGY5Mzk3ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zZWNvbmRhcnkuYmctbGlnaHRlbi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmOTM5NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeS5ib3JkZXItbGlnaHRlbi0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhmOTM5NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zZWNvbmRhcnkuYm9yZGVyLXRvcC1saWdodGVuLTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzhmOTM5NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zZWNvbmRhcnkuYm9yZGVyLWJvdHRvbS1saWdodGVuLTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhmOTM5NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc2Vjb25kYXJ5LmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzhmOTM5NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXNlY29uZGFyeS5ib3JkZXItcmlnaHQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzhmOTM5NyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zZWNvbmRhcnkub3ZlcmxheS1saWdodGVuLTEge1xuICBiYWNrZ3JvdW5kOiAjOGY5Mzk3O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxNDMsIDE0NywgMTUxLCAwLjYpO1xufVxuXG4uYmctc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuLmJnLXNlY29uZGFyeSAuY2FyZC1oZWFkZXIsXG4uYmctc2Vjb25kYXJ5IC5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYWxlcnQtc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LXNlY29uZGFyeSAuYWxlcnQtaGVhZGluZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTMwLCAxMzQsIDEzOSwgMC40KSAwcHggNnB4IDE1cHggLTdweDtcbn1cbi5hbGVydC1zZWNvbmRhcnkgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzc1Nzk3ZSAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LXNlY29uZGFyeSAuY2xvc2Uge1xuICBjb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuXG4uYmctbGlnaHQtc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LXNlY29uZGFyeS5mYy1oLWV2ZW50LCAuYmctbGlnaHQtc2Vjb25kYXJ5LmZjLXYtZXZlbnQge1xuICBib3JkZXItY29sb3I6IHJnYmEoMTMwLCAxMzQsIDEzOSwgMC4xKTtcbn1cbi5iZy1saWdodC1zZWNvbmRhcnkgLmZjLWxpc3QtZXZlbnQtZG90LFxuLmJnLWxpZ2h0LXNlY29uZGFyeSAuZmMtZGF5Z3JpZC1ldmVudC1kb3Qge1xuICBib3JkZXItY29sb3I6ICM4Mjg2OGIgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1zZWNvbmRhcnkuZmMtbGlzdC1ldmVudDpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTMwLCAxMzQsIDEzOSwgMC4xKSAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LXNlY29uZGFyeS5mYy1saXN0LWV2ZW50IC5mYy1saXN0LWV2ZW50LXRpdGxlIHtcbiAgY29sb3I6ICM2ZTZiN2I7XG59XG5cbi5hdmF0YXIuYmctbGlnaHQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICM4Mjg2OGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXNlY29uZGFyeSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODI4NjhiO1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzgyODY4Yjtcbn1cblxuLmJvcmRlci1sZWZ0LXNlY29uZGFyeSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzgyODY4Yjtcbn1cblxuLmJvcmRlci1yaWdodC1zZWNvbmRhcnkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODI4NjhiO1xufVxuXG4uYmctc2Vjb25kYXJ5LmJhZGdlLWdsb3csXG4uYm9yZGVyLXNlY29uZGFyeS5iYWRnZS1nbG93LFxuLmJhZGdlLXNlY29uZGFyeS5iYWRnZS1nbG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM4Mjg2OGI7XG59XG5cbi5iYWRnZS5iYWRnZS1saWdodC1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMCwgMTM0LCAxMzksIDAuMTIpO1xuICBjb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjODI4NjhiO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjYpO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuLXNlY29uZGFyeTpmb2N1cywgLmJ0bi1zZWNvbmRhcnk6YWN0aXZlLCAuYnRuLXNlY29uZGFyeS5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1Nzk3ZSAhaW1wb3J0YW50O1xufVxuLmJ0bi1zZWNvbmRhcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IC04cHggIzgyODY4Yjtcbn1cbi5idG4tc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5idG4tZmxhdC1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM4Mjg2OGI7XG59XG4uYnRuLWZsYXQtc2Vjb25kYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICM4Mjg2OGI7XG59XG4uYnRuLWZsYXQtc2Vjb25kYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjEyKTtcbn1cbi5idG4tZmxhdC1zZWNvbmRhcnk6YWN0aXZlLCAuYnRuLWZsYXQtc2Vjb25kYXJ5LmFjdGl2ZSwgLmJ0bi1mbGF0LXNlY29uZGFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMwLCAxMzQsIDEzOSwgMC4yKTtcbiAgY29sb3I6ICM4Mjg2OGI7XG59XG4uYnRuLWZsYXQtc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzgyODY4Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLmJ0bi1yZWxpZWYtc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyODY4YjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDAgMCByZ2JhKDM0LCA0MSwgNDcsIDAuMik7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmJ0bi1yZWxpZWYtc2Vjb25kYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmOTM5Nztcbn1cbi5idG4tcmVsaWVmLXNlY29uZGFyeTphY3RpdmUsIC5idG4tcmVsaWVmLXNlY29uZGFyeS5hY3RpdmUsIC5idG4tcmVsaWVmLXNlY29uZGFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc5N2U7XG59XG4uYnRuLXJlbGllZi1zZWNvbmRhcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tcmVsaWVmLXNlY29uZGFyeTphY3RpdmUsIC5idG4tcmVsaWVmLXNlY29uZGFyeS5hY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4Mjg2OGIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjODI4NjhiO1xufVxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMwLCAxMzQsIDEzOSwgMC4wNCk7XG4gIGNvbG9yOiAjODI4NjhiO1xufVxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjIpO1xuICBjb2xvcjogIzgyODY4Yjtcbn1cbi5idG4tb3V0bGluZS1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzODI4NjhiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnNob3cgPiAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMwLCAxMzQsIDEzOSwgMC4yKTtcbiAgY29sb3I6ICM4Mjg2OGI7XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnkud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUsXG4uYnRuLWZsYXQtc2Vjb25kYXJ5LndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMTMwLCAxMzQsIDEzOSwgMC4yKSAwLCByZ2JhKDEzMCwgMTM0LCAxMzksIDAuMykgNDAlLCByZ2JhKDEzMCwgMTM0LCAxMzksIDAuNCkgNTAlLCByZ2JhKDEzMCwgMTM0LCAxMzksIDAuNSkgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG59XG5cbi5idWxsZXQuYnVsbGV0LXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Mjg2OGI7XG59XG5cbi5tb2RhbC5tb2RhbC1zZWNvbmRhcnkgLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBjb2xvcjogIzgyODY4Yjtcbn1cbi5tb2RhbC5tb2RhbC1zZWNvbmRhcnkgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBjb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuXG4ucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQ6ICM4Mjg2OGIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjODI4NjhiO1xufVxuLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXIsIC5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzgyODY4YjtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyOmFmdGVyLCAucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6YWN0aXZlOmFmdGVyLCAucGFnaW5hdGlvbi1zZWNvbmRhcnkgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzgyODY4Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cbi5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyOmJlZm9yZSwgLnBhZ2luYXRpb24tc2Vjb25kYXJ5IC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLXNlY29uZGFyeSAucGFnZS1pdGVtLnByZXYgLnBhZ2UtbGluazpob3ZlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzgyODY4Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTUgMTggOSAxMiAxNSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cblxuLm5hdi1waWxsLXNlY29uZGFyeSAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzgyODY4YjtcbiAgYm94LXNoYWRvdzogMCA0cHggMThweCAtNHB4IHJnYmEoMTMwLCAxMzQsIDEzOSwgMC42NSk7XG59XG5cbi5wcm9ncmVzcy1iYXItc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzAsIDEzNCwgMTM5LCAwLjEyKTtcbn1cbi5wcm9ncmVzcy1iYXItc2Vjb25kYXJ5IC5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4NjhiO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXNlY29uZGFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1zZWNvbmRhcnkgaSxcbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtc2Vjb25kYXJ5IHN2ZyB7XG4gIHN0cm9rZTogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1zZWNvbmRhcnkudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1zZWNvbmRhcnkudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTMwLCAxMzQsIDEzOSwgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmRpdmlkZXIuZGl2aWRlci1zZWNvbmRhcnkgLmRpdmlkZXItdGV4dDpiZWZvcmUsIC5kaXZpZGVyLmRpdmlkZXItc2Vjb25kYXJ5IC5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICM4Mjg2OGIgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiAuYmctc2Vjb25kYXJ5IHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1zZWNvbmRhcnkgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1zZWNvbmRhcnkgLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjODI4NjhiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4NjhiO1xufVxuLmN1c3RvbS1jb250cm9sLXNlY29uZGFyeS5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1zZWNvbmRhcnkuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1zZWNvbmRhcnkuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtc2Vjb25kYXJ5LmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXNlY29uZGFyeS5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXNlY29uZGFyeS5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDEzMCwgMTM0LCAxMzksIDAuNCkgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1zZWNvbmRhcnkgLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMwLCAxMzQsIDEzOSwgMC42NSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNvbnRyb2wtc2Vjb25kYXJ5IC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tc3dpdGNoLXNlY29uZGFyeSAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyODY4YiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5zZWxlY3QyLXNlY29uZGFyeSAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZSB7XG4gIGJhY2tncm91bmQ6ICM4Mjg2OGIgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjODI4NjhiICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXNlY29uZGFyeS50ZXh0LWRhcmtlbi0xIHtcbiAgY29sb3I6ICM3NTc5N2UgIWltcG9ydGFudDtcbn1cblxuLmJnLXNlY29uZGFyeS5iZy1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc5N2UgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkuYm9yZGVyLWRhcmtlbi0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc1Nzk3ZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zZWNvbmRhcnkuYm9yZGVyLXRvcC1kYXJrZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzU3OTdlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXNlY29uZGFyeS5ib3JkZXItYm90dG9tLWRhcmtlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NTc5N2UgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXNlY29uZGFyeS5ib3JkZXItbGVmdC1kYXJrZW4tMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzc1Nzk3ZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXNlY29uZGFyeS5ib3JkZXItcmlnaHQtZGFya2VuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzU3OTdlICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXNlY29uZGFyeS5vdmVybGF5LWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZDogIzc1Nzk3ZTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTE3LCAxMjEsIDEyNiwgMC42KTtcbn1cblxuLnRleHQtc2Vjb25kYXJ5LnRleHQtZGFya2VuLTIge1xuICBjb2xvcjogIzY5NmQ3MSAhaW1wb3J0YW50O1xufVxuXG4uYmctc2Vjb25kYXJ5LmJnLWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5NmQ3MSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeS5ib3JkZXItZGFya2VuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjk2ZDcxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXNlY29uZGFyeS5ib3JkZXItdG9wLWRhcmtlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2OTZkNzEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc2Vjb25kYXJ5LmJvcmRlci1ib3R0b20tZGFya2VuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY5NmQ3MSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc2Vjb25kYXJ5LmJvcmRlci1sZWZ0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjk2ZDcxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc2Vjb25kYXJ5LmJvcmRlci1yaWdodC1kYXJrZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2OTZkNzEgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc2Vjb25kYXJ5Lm92ZXJsYXktZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kOiAjNjk2ZDcxO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxMDUsIDEwOSwgMTEzLCAwLjYpO1xufVxuXG4udGV4dC1zZWNvbmRhcnkudGV4dC1kYXJrZW4tMyB7XG4gIGNvbG9yOiAjNWQ2MDY0ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zZWNvbmRhcnkuYmctZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ2MDY0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5LmJvcmRlci1kYXJrZW4tMyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ZDYwNjQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc2Vjb25kYXJ5LmJvcmRlci10b3AtZGFya2VuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzVkNjA2NCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zZWNvbmRhcnkuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWQ2MDY0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zZWNvbmRhcnkuYm9yZGVyLWxlZnQtZGFya2VuLTMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM1ZDYwNjQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zZWNvbmRhcnkuYm9yZGVyLXJpZ2h0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzVkNjA2NCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zZWNvbmRhcnkub3ZlcmxheS1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQ6ICM1ZDYwNjQ7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkzLCA5NiwgMTAwLCAwLjYpO1xufVxuXG4udGV4dC1zZWNvbmRhcnkudGV4dC1kYXJrZW4tNCB7XG4gIGNvbG9yOiAjNTA1MzU3ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zZWNvbmRhcnkuYmctZGFya2VuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MzU3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5LmJvcmRlci1kYXJrZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDUzNTcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc2Vjb25kYXJ5LmJvcmRlci10b3AtZGFya2VuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzUwNTM1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zZWNvbmRhcnkuYm9yZGVyLWJvdHRvbS1kYXJrZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTA1MzU3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zZWNvbmRhcnkuYm9yZGVyLWxlZnQtZGFya2VuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM1MDUzNTcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zZWNvbmRhcnkuYm9yZGVyLXJpZ2h0LWRhcmtlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzUwNTM1NyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zZWNvbmRhcnkub3ZlcmxheS1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQ6ICM1MDUzNTc7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDgwLCA4MywgODcsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1saWdodGVuLTUge1xuICBjb2xvcjogIzg4ZTdiMiAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1saWdodGVuLTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODhlN2IyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItbGlnaHRlbi01IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ZTdiMiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4OGU3YjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODhlN2IyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzg4ZTdiMiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4OGU3YjIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQ6ICM4OGU3YjI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzNiwgMjMxLCAxNzgsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1saWdodGVuLTQge1xuICBjb2xvcjogIzcyZTNhNCAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1saWdodGVuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJlM2E0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItbGlnaHRlbi00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcyZTNhNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3MmUzYTQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzJlM2E0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzcyZTNhNCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3MmUzYTQgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQ6ICM3MmUzYTQ7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNCwgMjI3LCAxNjQsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1saWdodGVuLTMge1xuICBjb2xvcjogIzVkZGU5NyAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1saWdodGVuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRkZTk3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItbGlnaHRlbi0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVkZGU5NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1ZGRlOTcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRkZTk3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzVkZGU5NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM1ZGRlOTcgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQ6ICM1ZGRlOTc7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkzLCAyMjIsIDE1MSwgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWxpZ2h0ZW4tMiB7XG4gIGNvbG9yOiAjNDhkYTg5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWxpZ2h0ZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGRhODkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1saWdodGVuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDhkYTg5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1saWdodGVuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ4ZGE4OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0OGRhODkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNDhkYTg5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQ4ZGE4OSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZDogIzQ4ZGE4OTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoNzIsIDIxOCwgMTM3LCAwLjYpO1xufVxuXG4udGV4dC1zdWNjZXNzLnRleHQtbGlnaHRlbi0xIHtcbiAgY29sb3I6ICMzM2Q2N2MgIWltcG9ydGFudDtcbn1cblxuLmJnLXN1Y2Nlc3MuYmctbGlnaHRlbi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzZDY3YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzM2Q2N2MgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc3VjY2Vzcy5ib3JkZXItdG9wLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzNkNjdjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3MuYm9yZGVyLWJvdHRvbS1saWdodGVuLTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzZDY3YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1saWdodGVuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzM2Q2N2MgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzLmJvcmRlci1yaWdodC1saWdodGVuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzNkNjdjICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mub3ZlcmxheS1saWdodGVuLTEge1xuICBiYWNrZ3JvdW5kOiAjMzNkNjdjO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg1MSwgMjE0LCAxMjQsIDAuNik7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuLmJnLXN1Y2Nlc3MgLmNhcmQtaGVhZGVyLFxuLmJnLXN1Y2Nlc3MgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbGVydC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTk5LCAxMTEsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtc3VjY2VzcyAuYWxlcnQtaGVhZGluZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjQpIDBweCA2cHggMTVweCAtN3B4O1xufVxuLmFsZXJ0LXN1Y2Nlc3MgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LXN1Y2Nlc3MgLmNsb3NlIHtcbiAgY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xMikgIWltcG9ydGFudDtcbiAgY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1zdWNjZXNzLmZjLWgtZXZlbnQsIC5iZy1saWdodC1zdWNjZXNzLmZjLXYtZXZlbnQge1xuICBib3JkZXItY29sb3I6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjEpO1xufVxuLmJnLWxpZ2h0LXN1Y2Nlc3MgLmZjLWxpc3QtZXZlbnQtZG90LFxuLmJnLWxpZ2h0LXN1Y2Nlc3MgLmZjLWRheWdyaWQtZXZlbnQtZG90IHtcbiAgYm9yZGVyLWNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtc3VjY2Vzcy5mYy1saXN0LWV2ZW50OmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTk5LCAxMTEsIDAuMSkgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1zdWNjZXNzLmZjLWxpc3QtZXZlbnQgLmZjLWxpc3QtZXZlbnQtdGl0bGUge1xuICBjb2xvcjogIzZlNmI3Yjtcbn1cblxuLmF2YXRhci5iZy1saWdodC1zdWNjZXNzIHtcbiAgY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyOGM3NmY7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3Mge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4Yzc2Zjtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3Mge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMyOGM3NmY7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2VzcyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyOGM3NmY7XG59XG5cbi5iZy1zdWNjZXNzLmJhZGdlLWdsb3csXG4uYm9yZGVyLXN1Y2Nlc3MuYmFkZ2UtZ2xvdyxcbi5iYWRnZS1zdWNjZXNzLmJhZGdlLWdsb3cge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzI4Yzc2Zjtcbn1cblxuLmJhZGdlLmJhZGdlLWxpZ2h0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xMik7XG4gIGNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjMjhjNzZmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTk5LCAxMTEsIDAuNik7XG59XG5cbi5idG4tc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuLXN1Y2Nlc3M6Zm9jdXMsIC5idG4tc3VjY2VzczphY3RpdmUsIC5idG4tc3VjY2Vzcy5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuLmJ0bi1zdWNjZXNzOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCAtOHB4ICMyOGM3NmY7XG59XG4uYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1mbGF0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMyOGM3NmY7XG59XG4uYnRuLWZsYXQtc3VjY2Vzczpob3ZlciB7XG4gIGNvbG9yOiAjMjhjNzZmO1xufVxuLmJ0bi1mbGF0LXN1Y2Nlc3M6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xMik7XG59XG4uYnRuLWZsYXQtc3VjY2VzczphY3RpdmUsIC5idG4tZmxhdC1zdWNjZXNzLmFjdGl2ZSwgLmJ0bi1mbGF0LXN1Y2Nlc3M6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC4yKTtcbiAgY29sb3I6ICMyOGM3NmY7XG59XG4uYnRuLWZsYXQtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMyOGM3NmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5idG4tcmVsaWVmLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNzZmO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwIHJnYmEoMzQsIDQxLCA0NywgMC4yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uYnRuLXJlbGllZi1zdWNjZXNzOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzZDY3Yztcbn1cbi5idG4tcmVsaWVmLXN1Y2Nlc3M6YWN0aXZlLCAuYnRuLXJlbGllZi1zdWNjZXNzLmFjdGl2ZSwgLmJ0bi1yZWxpZWYtc3VjY2Vzczpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNGIyNjM7XG59XG4uYnRuLXJlbGllZi1zdWNjZXNzOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXJlbGllZi1zdWNjZXNzOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtc3VjY2Vzcy5hY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjhjNzZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzI4Yzc2Zjtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgMTk5LCAxMTEsIDAuMDQpO1xuICBjb2xvcjogIzI4Yzc2Zjtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC4yKTtcbiAgY29sb3I6ICMyOGM3NmY7XG59XG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMyOGM3NmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG4uc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDE5OSwgMTExLCAwLjIpO1xuICBjb2xvcjogIzI4Yzc2Zjtcbn1cblxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUsXG4uYnRuLWZsYXQtc3VjY2Vzcy53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDQwLCAxOTksIDExMSwgMC4yKSAwLCByZ2JhKDQwLCAxOTksIDExMSwgMC4zKSA0MCUsIHJnYmEoNDAsIDE5OSwgMTExLCAwLjQpIDUwJSwgcmdiYSg0MCwgMTk5LCAxMTEsIDAuNSkgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG59XG5cbi5idWxsZXQuYnVsbGV0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNzZmO1xufVxuXG4ubW9kYWwubW9kYWwtc3VjY2VzcyAubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjMjhjNzZmO1xufVxuLm1vZGFsLm1vZGFsLXN1Y2Nlc3MgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBjb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuXG4ucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24tc3VjY2VzcyAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMjhjNzZmO1xufVxuLnBhZ2luYXRpb24tc3VjY2VzcyAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyLCAucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjhjNzZmO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazpob3ZlcjphZnRlciwgLnBhZ2luYXRpb24tc3VjY2VzcyAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzI4Yzc2Zicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cbi5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YmVmb3JlLCAucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlLCAucGFnaW5hdGlvbi1zdWNjZXNzIC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLXN1Y2Nlc3MgLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMyOGM3NmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtcGlsbC1zdWNjZXNzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMjhjNzZmO1xuICBib3gtc2hhZG93OiAwIDRweCAxOHB4IC00cHggcmdiYSg0MCwgMTk5LCAxMTEsIDAuNjUpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xMik7XG59XG4ucHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MgLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3NmY7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1zdWNjZXNzIGksXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXN1Y2Nlc3Mgc3ZnIHtcbiAgc3Ryb2tlOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXN1Y2Nlc3MudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1zdWNjZXNzLnRpbWVsaW5lLXBvaW50LWluZGljYXRvcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxOTksIDExMSwgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmRpdmlkZXIuZGl2aWRlci1zdWNjZXNzIC5kaXZpZGVyLXRleHQ6YmVmb3JlLCAuZGl2aWRlci5kaXZpZGVyLXN1Y2Nlc3MgLmRpdmlkZXItdGV4dDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy1zdWNjZXNzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjMjhjNzZmICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1zdWNjZXNzIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtc3VjY2VzcyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMyOGM3NmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3NmY7XG59XG4uY3VzdG9tLWNvbnRyb2wtc3VjY2Vzcy5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1zdWNjZXNzLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtc3VjY2Vzcy5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1zdWNjZXNzLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXN1Y2Nlc3MuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1zdWNjZXNzLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoNDAsIDE5OSwgMTExLCAwLjQpICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNvbnRyb2wtc3VjY2VzcyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgMTk5LCAxMTEsIDAuNjUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLXN1Y2Nlc3MgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMyOGM3NmYgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1zd2l0Y2gtc3VjY2VzcyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5zZWxlY3QyLXN1Y2Nlc3MgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2Uge1xuICBiYWNrZ3JvdW5kOiAjMjhjNzZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzI4Yzc2ZiAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1zdWNjZXNzLnRleHQtZGFya2VuLTEge1xuICBjb2xvcjogIzI0YjI2MyAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1kYXJrZW4tMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc3VjY2Vzcy5ib3JkZXItdG9wLWRhcmtlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWRhcmtlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtZGFya2VuLTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzLmJvcmRlci1yaWdodC1kYXJrZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyNGIyNjMgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZDogIzI0YjI2MztcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMzYsIDE3OCwgOTksIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1kYXJrZW4tMiB7XG4gIGNvbG9yOiAjMWY5ZDU3ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWRhcmtlbi0yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtZGFya2VuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tZGFya2VuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1kYXJrZW4tMiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzFmOWQ1NyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kOiAjMWY5ZDU3O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgzMSwgMTU3LCA4NywgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWRhcmtlbi0zIHtcbiAgY29sb3I6ICMxYjg3NGIgIWltcG9ydGFudDtcbn1cblxuLmJnLXN1Y2Nlc3MuYmctZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItZGFya2VuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1kYXJrZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3MuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtZGFya2VuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMWI4NzRiICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mub3ZlcmxheS1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQ6ICMxYjg3NGI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI3LCAxMzUsIDc1LCAwLjYpO1xufVxuXG4udGV4dC1zdWNjZXNzLnRleHQtZGFya2VuLTQge1xuICBjb2xvcjogIzE3NzI0MCAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1kYXJrZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc3VjY2Vzcy5ib3JkZXItdG9wLWRhcmtlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWRhcmtlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtZGFya2VuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzLmJvcmRlci1yaWdodC1kYXJrZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxNzcyNDAgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZDogIzE3NzI0MDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMsIDExNCwgNjQsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1hY2NlbnQtMSB7XG4gIGNvbG9yOiAjZTFmZmYxICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWFjY2VudC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWFjY2VudC0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtYWNjZW50LTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tYWNjZW50LTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1hY2NlbnQtMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWFjY2VudC0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UxZmZmMSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kOiAjZTFmZmYxO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDI1NSwgMjQxLCAwLjYpO1xufVxuXG4udGV4dC1zdWNjZXNzLnRleHQtYWNjZW50LTIge1xuICBjb2xvcjogI2FlZmZkOSAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy5iZy1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1zdWNjZXNzLmJvcmRlci1hY2NlbnQtMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atc3VjY2Vzcy5ib3JkZXItdG9wLWFjY2VudC0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tc3VjY2Vzcy5ib3JkZXItYm90dG9tLWFjY2VudC0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXN1Y2Nlc3MuYm9yZGVyLWxlZnQtYWNjZW50LTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1zdWNjZXNzLmJvcmRlci1yaWdodC1hY2NlbnQtMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNhZWZmZDkgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktc3VjY2Vzcy5vdmVybGF5LWFjY2VudC0yIHtcbiAgYmFja2dyb3VuZDogI2FlZmZkOTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTc0LCAyNTUsIDIxNywgMC42KTtcbn1cblxuLnRleHQtc3VjY2Vzcy50ZXh0LWFjY2VudC0zIHtcbiAgY29sb3I6ICM3YmZmYzEgIWltcG9ydGFudDtcbn1cblxuLmJnLXN1Y2Nlc3MuYmctYWNjZW50LTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2Vzcy5ib3JkZXItYWNjZW50LTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXN1Y2Nlc3MuYm9yZGVyLXRvcC1hY2NlbnQtMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXN1Y2Nlc3MuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1zdWNjZXNzLmJvcmRlci1sZWZ0LWFjY2VudC0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtc3VjY2Vzcy5ib3JkZXItcmlnaHQtYWNjZW50LTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjN2JmZmMxICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXN1Y2Nlc3Mub3ZlcmxheS1hY2NlbnQtMyB7XG4gIGJhY2tncm91bmQ6ICM3YmZmYzE7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyMywgMjU1LCAxOTMsIDAuNik7XG59XG5cbi50ZXh0LXN1Y2Nlc3MudGV4dC1hY2NlbnQtNCB7XG4gIGNvbG9yOiAjNjJmZmI1ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLmJnLWFjY2VudC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3MuYm9yZGVyLWFjY2VudC00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1zdWNjZXNzLmJvcmRlci10b3AtYWNjZW50LTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1zdWNjZXNzLmJvcmRlci1ib3R0b20tYWNjZW50LTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtc3VjY2Vzcy5ib3JkZXItbGVmdC1hY2NlbnQtNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXN1Y2Nlc3MuYm9yZGVyLXJpZ2h0LWFjY2VudC00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzYyZmZiNSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1zdWNjZXNzLm92ZXJsYXktYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kOiAjNjJmZmI1O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSg5OCwgMjU1LCAxODEsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1saWdodGVuLTUge1xuICBjb2xvcjogIzY5ZWZmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1saWdodGVuLTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjllZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItbGlnaHRlbi01IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY5ZWZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2OWVmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjllZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzY5ZWZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2OWVmZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQ6ICM2OWVmZmY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMjM5LCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1saWdodGVuLTQge1xuICBjb2xvcjogIzRmZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1saWdodGVuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItbGlnaHRlbi00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRmZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0ZmVjZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGZlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRmZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0ZmVjZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQ6ICM0ZmVjZmY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc5LCAyMzYsIDI1NSwgMC42KTtcbn1cblxuLnRleHQtaW5mby50ZXh0LWxpZ2h0ZW4tMyB7XG4gIGNvbG9yOiAjMzZlOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNmU5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1saWdodGVuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzZlOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1saWdodGVuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzM2ZTlmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzNmU5ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzZlOWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM2ZTlmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZDogIzM2ZTlmZjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoNTQsIDIzMywgMjU1LCAwLjYpO1xufVxuXG4udGV4dC1pbmZvLnRleHQtbGlnaHRlbi0yIHtcbiAgY29sb3I6ICMxY2U3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLWluZm8uYmctbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8uYm9yZGVyLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxY2U3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMWNlN2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWluZm8uYm9yZGVyLWJvdHRvbS1saWdodGVuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFjZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mby5ib3JkZXItbGVmdC1saWdodGVuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxY2U3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1saWdodGVuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMWNlN2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ub3ZlcmxheS1saWdodGVuLTIge1xuICBiYWNrZ3JvdW5kOiAjMWNlN2ZmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjMxLCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1saWdodGVuLTEge1xuICBjb2xvcjogIzAzZTRmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1saWdodGVuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNlNGZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItbGlnaHRlbi0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzZTRmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwM2U0ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDNlNGZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAzZTRmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwM2U0ZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQ6ICMwM2U0ZmY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDIyOCwgMjU1LCAwLjYpO1xufVxuXG4uYmctaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cbi5iZy1pbmZvIC5jYXJkLWhlYWRlcixcbi5iZy1pbmZvIC5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYWxlcnQtaW5mbyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtaW5mbyAuYWxlcnQtaGVhZGluZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMjA3LCAyMzIsIDAuNCkgMHB4IDZweCAxNXB4IC03cHg7XG59XG4uYWxlcnQtaW5mbyAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtaW5mbyAuY2xvc2Uge1xuICBjb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuXG4uYmctbGlnaHQtaW5mbyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtaW5mby5mYy1oLWV2ZW50LCAuYmctbGlnaHQtaW5mby5mYy12LWV2ZW50IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIwNywgMjMyLCAwLjEpO1xufVxuLmJnLWxpZ2h0LWluZm8gLmZjLWxpc3QtZXZlbnQtZG90LFxuLmJnLWxpZ2h0LWluZm8gLmZjLWRheWdyaWQtZXZlbnQtZG90IHtcbiAgYm9yZGVyLWNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtaW5mby5mYy1saXN0LWV2ZW50OmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMDcsIDIzMiwgMC4xKSAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LWluZm8uZmMtbGlzdC1ldmVudCAuZmMtbGlzdC1ldmVudC10aXRsZSB7XG4gIGNvbG9yOiAjNmU2YjdiO1xufVxuXG4uYXZhdGFyLmJnLWxpZ2h0LWluZm8ge1xuICBjb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwY2ZlODtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBjZmU4O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mbyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwY2ZlODtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwY2ZlODtcbn1cblxuLmJnLWluZm8uYmFkZ2UtZ2xvdyxcbi5ib3JkZXItaW5mby5iYWRnZS1nbG93LFxuLmJhZGdlLWluZm8uYmFkZ2UtZ2xvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDBjZmU4O1xufVxuXG4uYmFkZ2UuYmFkZ2UtbGlnaHQtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMTIpO1xuICBjb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvIHtcbiAgYmFja2dyb3VuZDogIzAwY2ZlODtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjA3LCAyMzIsIDAuNik7XG59XG5cbi5idG4taW5mbyB7XG4gIGJvcmRlci1jb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuLWluZm86Zm9jdXMsIC5idG4taW5mbzphY3RpdmUsIC5idG4taW5mby5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjhjZiAhaW1wb3J0YW50O1xufVxuLmJ0bi1pbmZvOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCAtOHB4ICMwMGNmZTg7XG59XG4uYnRuLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1mbGF0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMGNmZTg7XG59XG4uYnRuLWZsYXQtaW5mbzpob3ZlciB7XG4gIGNvbG9yOiAjMDBjZmU4O1xufVxuLmJ0bi1mbGF0LWluZm86aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwNywgMjMyLCAwLjEyKTtcbn1cbi5idG4tZmxhdC1pbmZvOmFjdGl2ZSwgLmJ0bi1mbGF0LWluZm8uYWN0aXZlLCAuYnRuLWZsYXQtaW5mbzpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMik7XG4gIGNvbG9yOiAjMDBjZmU4O1xufVxuLmJ0bi1mbGF0LWluZm8uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzMDBjZmU4JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uYnRuLXJlbGllZi1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2ZlODtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDAgMCByZ2JhKDM0LCA0MSwgNDcsIDAuMik7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmJ0bi1yZWxpZWYtaW5mbzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2U0ZmY7XG59XG4uYnRuLXJlbGllZi1pbmZvOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtaW5mby5hY3RpdmUsIC5idG4tcmVsaWVmLWluZm86Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiOGNmO1xufVxuLmJ0bi1yZWxpZWYtaW5mbzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1yZWxpZWYtaW5mbzphY3RpdmUsIC5idG4tcmVsaWVmLWluZm8uYWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG59XG5cbi5idG4tb3V0bGluZS1pbmZvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwY2ZlOCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMGNmZTg7XG59XG4uYnRuLW91dGxpbmUtaW5mbzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMDQpO1xuICBjb2xvcjogIzAwY2ZlODtcbn1cbi5idG4tb3V0bGluZS1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuLW91dGxpbmUtaW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwNywgMjMyLCAwLjIpO1xuICBjb2xvcjogIzAwY2ZlODtcbn1cbi5idG4tb3V0bGluZS1pbmZvLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzAwY2ZlOCcgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWluZm8uZHJvcGRvd24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDcsIDIzMiwgMC4yKTtcbiAgY29sb3I6ICMwMGNmZTg7XG59XG5cbi5idG4tb3V0bGluZS1pbmZvLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlLFxuLmJ0bi1mbGF0LWluZm8ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgwLCAyMDcsIDIzMiwgMC4yKSAwLCByZ2JhKDAsIDIwNywgMjMyLCAwLjMpIDQwJSwgcmdiYSgwLCAyMDcsIDIzMiwgMC40KSA1MCUsIHJnYmEoMCwgMjA3LCAyMzIsIDAuNSkgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG59XG5cbi5idWxsZXQuYnVsbGV0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZmU4O1xufVxuXG4ubW9kYWwubW9kYWwtaW5mbyAubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjMDBjZmU4O1xufVxuLm1vZGFsLm1vZGFsLWluZm8gLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBjb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuXG4ucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24taW5mbyAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDBjZmU4O1xufVxuLnBhZ2luYXRpb24taW5mbyAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyLCAucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDBjZmU4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazpob3ZlcjphZnRlciwgLnBhZ2luYXRpb24taW5mbyAucGFnZS1pdGVtLm5leHQgLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzAwY2ZlOCcgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cbi5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YmVmb3JlLCAucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlLCAucGFnaW5hdGlvbi1pbmZvIC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLWluZm8gLnBhZ2UtaXRlbS5wcmV2IC5wYWdlLWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMwMGNmZTgnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtcGlsbC1pbmZvIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBjZmU4O1xuICBib3gtc2hhZG93OiAwIDRweCAxOHB4IC00cHggcmdiYSgwLCAyMDcsIDIzMiwgMC42NSk7XG59XG5cbi5wcm9ncmVzcy1iYXItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA3LCAyMzIsIDAuMTIpO1xufVxuLnByb2dyZXNzLWJhci1pbmZvIC5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZmU4O1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWluZm8ge1xuICBib3JkZXItY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtaW5mbyBpLFxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1pbmZvIHN2ZyB7XG4gIHN0cm9rZTogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1pbmZvLnRpbWVsaW5lLXBvaW50LWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtaW5mby50aW1lbGluZS1wb2ludC1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMDcsIDIzMiwgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmRpdmlkZXIuZGl2aWRlci1pbmZvIC5kaXZpZGVyLXRleHQ6YmVmb3JlLCAuZGl2aWRlci5kaXZpZGVyLWluZm8gLmRpdmlkZXItdGV4dDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogIzAwY2ZlOCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iZy1pbmZvIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1pbmZvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtaW5mbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMwMGNmZTg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTg7XG59XG4uY3VzdG9tLWNvbnRyb2wtaW5mby5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1pbmZvLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtaW5mby5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1pbmZvLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWluZm8uY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1pbmZvLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMjA3LCAyMzIsIDAuNCkgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1pbmZvIC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwNywgMjMyLCAwLjY1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1pbmZvIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDBjZmU4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tc3dpdGNoLWluZm8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4uc2VsZWN0Mi1pbmZvIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgYmFja2dyb3VuZDogIzAwY2ZlOCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMGNmZTggIWltcG9ydGFudDtcbn1cblxuLnRleHQtaW5mby50ZXh0LWRhcmtlbi0xIHtcbiAgY29sb3I6ICMwMGI4Y2YgIWltcG9ydGFudDtcbn1cblxuLmJnLWluZm8uYmctZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItZGFya2VuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1kYXJrZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWluZm8uYm9yZGVyLWJvdHRvbS1kYXJrZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtZGFya2VuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDBiOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ub3ZlcmxheS1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQ6ICMwMGI4Y2Y7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE4NCwgMjA3LCAwLjYpO1xufVxuXG4udGV4dC1pbmZvLnRleHQtZGFya2VuLTIge1xuICBjb2xvcjogIzAwYTFiNSAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1kYXJrZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWRhcmtlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWRhcmtlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtZGFya2VuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1kYXJrZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMGExYjUgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZDogIzAwYTFiNTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTYxLCAxODEsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1kYXJrZW4tMyB7XG4gIGNvbG9yOiAjMDA4YjljICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWRhcmtlbi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8uYm9yZGVyLWRhcmtlbi0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtZGFya2VuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tZGFya2VuLTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mby5ib3JkZXItbGVmdC1kYXJrZW4tMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwOGI5YyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kOiAjMDA4YjljO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxMzksIDE1NiwgMC42KTtcbn1cblxuLnRleHQtaW5mby50ZXh0LWRhcmtlbi00IHtcbiAgY29sb3I6ICMwMDc0ODIgIWltcG9ydGFudDtcbn1cblxuLmJnLWluZm8uYmctZGFya2VuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItZGFya2VuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1kYXJrZW4tNCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWluZm8uYm9yZGVyLWJvdHRvbS1kYXJrZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWRhcmtlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtZGFya2VuLTQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDA3NDgyICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ub3ZlcmxheS1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQ6ICMwMDc0ODI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDExNiwgMTMwLCAwLjYpO1xufVxuXG4udGV4dC1pbmZvLnRleHQtYWNjZW50LTEge1xuICBjb2xvcjogI2ZlZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1hY2NlbnQtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1hY2NlbnQtMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWFjY2VudC0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWFjY2VudC0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtYWNjZW50LTEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1hY2NlbnQtMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZWZmZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWFjY2VudC0xIHtcbiAgYmFja2dyb3VuZDogI2ZlZmZmZjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU0LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLnRleHQtaW5mby50ZXh0LWFjY2VudC0yIHtcbiAgY29sb3I6ICNjYmY1ZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLWluZm8uYmctYWNjZW50LTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5mby5ib3JkZXItYWNjZW50LTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWluZm8uYm9yZGVyLXRvcC1hY2NlbnQtMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWluZm8uYm9yZGVyLWJvdHRvbS1hY2NlbnQtMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1pbmZvLmJvcmRlci1sZWZ0LWFjY2VudC0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtaW5mby5ib3JkZXItcmlnaHQtYWNjZW50LTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2JmNWZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWluZm8ub3ZlcmxheS1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQ6ICNjYmY1ZmY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMywgMjQ1LCAyNTUsIDAuNik7XG59XG5cbi50ZXh0LWluZm8udGV4dC1hY2NlbnQtMyB7XG4gIGNvbG9yOiAjOThlY2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLmJnLWFjY2VudC0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8uYm9yZGVyLWFjY2VudC0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1pbmZvLmJvcmRlci10b3AtYWNjZW50LTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1pbmZvLmJvcmRlci1ib3R0b20tYWNjZW50LTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtaW5mby5ib3JkZXItbGVmdC1hY2NlbnQtMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWluZm8uYm9yZGVyLXJpZ2h0LWFjY2VudC0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk4ZWNmZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1pbmZvLm92ZXJsYXktYWNjZW50LTMge1xuICBiYWNrZ3JvdW5kOiAjOThlY2ZmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxNTIsIDIzNiwgMjU1LCAwLjYpO1xufVxuXG4udGV4dC1pbmZvLnRleHQtYWNjZW50LTQge1xuICBjb2xvcjogIzdmZTdmZiAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mby5iZy1hY2NlbnQtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvLmJvcmRlci1hY2NlbnQtNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtaW5mby5ib3JkZXItdG9wLWFjY2VudC00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taW5mby5ib3JkZXItYm90dG9tLWFjY2VudC00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWluZm8uYm9yZGVyLWxlZnQtYWNjZW50LTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1pbmZvLmJvcmRlci1yaWdodC1hY2NlbnQtNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3ZmU3ZmYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktaW5mby5vdmVybGF5LWFjY2VudC00IHtcbiAgYmFja2dyb3VuZDogIzdmZTdmZjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMTI3LCAyMzEsIDI1NSwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWxpZ2h0ZW4tNSB7XG4gIGNvbG9yOiAjZmZlMGMzICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmUwYzMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1saWdodGVuLTUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZlMGMzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1saWdodGVuLTUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZTBjMyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tbGlnaHRlbi01IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmUwYzMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZlMGMzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZTBjMyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZDogI2ZmZTBjMztcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMjQsIDE5NSwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWxpZ2h0ZW4tNCB7XG4gIGNvbG9yOiAjZmZkM2E5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQzYTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1saWdodGVuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZkM2E5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1saWdodGVuLTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZDNhOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tbGlnaHRlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmQzYTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZkM2E5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZDNhOSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktbGlnaHRlbi00IHtcbiAgYmFja2dyb3VuZDogI2ZmZDNhOTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMTEsIDE2OSwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWxpZ2h0ZW4tMyB7XG4gIGNvbG9yOiAjZmZjNjkwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWxpZ2h0ZW4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM2OTAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1saWdodGVuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjNjkwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1saWdodGVuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmYzY5MCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmM2OTAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZjNjkwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmYzY5MCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZDogI2ZmYzY5MDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTgsIDE0NCwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWxpZ2h0ZW4tMiB7XG4gIGNvbG9yOiAjZmZiOTc2ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWxpZ2h0ZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI5NzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1saWdodGVuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZiOTc2ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1saWdodGVuLTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmYjk3NiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmI5NzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZiOTc2ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmYjk3NiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZDogI2ZmYjk3NjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxODUsIDExOCwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWxpZ2h0ZW4tMSB7XG4gIGNvbG9yOiAjZmZhYzVkICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFjNWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1saWdodGVuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZhYzVkICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1saWdodGVuLTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmYWM1ZCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmFjNWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZhYzVkICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmYWM1ZCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktbGlnaHRlbi0xIHtcbiAgYmFja2dyb3VuZDogI2ZmYWM1ZDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNzIsIDkzLCAwLjYpO1xufVxuXG4uYmctd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cbi5iZy13YXJuaW5nIC5jYXJkLWhlYWRlcixcbi5iZy13YXJuaW5nIC5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYWxlcnQtd2FybmluZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LXdhcm5pbmcgLmFsZXJ0LWhlYWRpbmcge1xuICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMTU5LCA2NywgMC40KSAwcHggNnB4IDE1cHggLTdweDtcbn1cbi5hbGVydC13YXJuaW5nIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICNmZjkyMmEgIWltcG9ydGFudDtcbn1cbi5hbGVydC13YXJuaW5nIC5jbG9zZSB7XG4gIGNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1saWdodC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtd2FybmluZy5mYy1oLWV2ZW50LCAuYmctbGlnaHQtd2FybmluZy5mYy12LWV2ZW50IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTU5LCA2NywgMC4xKTtcbn1cbi5iZy1saWdodC13YXJuaW5nIC5mYy1saXN0LWV2ZW50LWRvdCxcbi5iZy1saWdodC13YXJuaW5nIC5mYy1kYXlncmlkLWV2ZW50LWRvdCB7XG4gIGJvcmRlci1jb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuLmJnLWxpZ2h0LXdhcm5pbmcuZmMtbGlzdC1ldmVudDpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjEpICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtd2FybmluZy5mYy1saXN0LWV2ZW50IC5mYy1saXN0LWV2ZW50LXRpdGxlIHtcbiAgY29sb3I6ICM2ZTZiN2I7XG59XG5cbi5hdmF0YXIuYmctbGlnaHQtd2FybmluZyB7XG4gIGNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjlmNDMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmY5ZjQzO1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjlmNDM7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmY5ZjQzO1xufVxuXG4uYm9yZGVyLXJpZ2h0LXdhcm5pbmcge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmY5ZjQzO1xufVxuXG4uYmctd2FybmluZy5iYWRnZS1nbG93LFxuLmJvcmRlci13YXJuaW5nLmJhZGdlLWdsb3csXG4uYmFkZ2Utd2FybmluZy5iYWRnZS1nbG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNmZjlmNDM7XG59XG5cbi5iYWRnZS5iYWRnZS1saWdodC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMTIpO1xuICBjb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZmOWY0MztcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjYpO1xufVxuXG4uYnRuLXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWY0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmJ0bi13YXJuaW5nOmZvY3VzLCAuYnRuLXdhcm5pbmc6YWN0aXZlLCAuYnRuLXdhcm5pbmcuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkyMmEgIWltcG9ydGFudDtcbn1cbi5idG4td2FybmluZzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggLThweCAjZmY5ZjQzO1xufVxuLmJ0bi13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5idG4tZmxhdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmY5ZjQzO1xufVxuLmJ0bi1mbGF0LXdhcm5pbmc6aG92ZXIge1xuICBjb2xvcjogI2ZmOWY0Mztcbn1cbi5idG4tZmxhdC13YXJuaW5nOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMTIpO1xufVxuLmJ0bi1mbGF0LXdhcm5pbmc6YWN0aXZlLCAuYnRuLWZsYXQtd2FybmluZy5hY3RpdmUsIC5idG4tZmxhdC13YXJuaW5nOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMik7XG4gIGNvbG9yOiAjZmY5ZjQzO1xufVxuLmJ0bi1mbGF0LXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmY5ZjQzJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uYnRuLXJlbGllZi13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWY0MztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDAgMCByZ2JhKDM0LCA0MSwgNDcsIDAuMik7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmJ0bi1yZWxpZWYtd2FybmluZzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFjNWQ7XG59XG4uYnRuLXJlbGllZi13YXJuaW5nOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtd2FybmluZy5hY3RpdmUsIC5idG4tcmVsaWVmLXdhcm5pbmc6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MjJhO1xufVxuLmJ0bi1yZWxpZWYtd2FybmluZzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1yZWxpZWYtd2FybmluZzphY3RpdmUsIC5idG4tcmVsaWVmLXdhcm5pbmcuYWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG59XG5cbi5idG4tb3V0bGluZS13YXJuaW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmOWY0MyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZjlmNDM7XG59XG4uYnRuLW91dGxpbmUtd2FybmluZzpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjA0KTtcbiAgY29sb3I6ICNmZjlmNDM7XG59XG4uYnRuLW91dGxpbmUtd2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bi1vdXRsaW5lLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtd2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5idG4tb3V0bGluZS13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMik7XG4gIGNvbG9yOiAjZmY5ZjQzO1xufVxuLmJ0bi1vdXRsaW5lLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmY5ZjQzJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnNob3cgPiAuYnRuLW91dGxpbmUtd2FybmluZy5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTU5LCA2NywgMC4yKTtcbiAgY29sb3I6ICNmZjlmNDM7XG59XG5cbi5idG4tb3V0bGluZS13YXJuaW5nLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlLFxuLmJ0bi1mbGF0LXdhcm5pbmcud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsIDE1OSwgNjcsIDAuMikgMCwgcmdiYSgyNTUsIDE1OSwgNjcsIDAuMykgNDAlLCByZ2JhKDI1NSwgMTU5LCA2NywgMC40KSA1MCUsIHJnYmEoMjU1LCAxNTksIDY3LCAwLjUpIDYwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA3MCUpO1xufVxuXG4uYnVsbGV0LmJ1bGxldC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWY0Mztcbn1cblxuLm1vZGFsLm1vZGFsLXdhcm5pbmcgLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBjb2xvcjogI2ZmOWY0Mztcbn1cbi5tb2RhbC5tb2RhbC13YXJuaW5nIC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cblxuLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZDogI2ZmOWY0MyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdpbmF0aW9uLXdhcm5pbmcgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtIC5wYWdlLWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmOWY0Mztcbn1cbi5wYWdpbmF0aW9uLXdhcm5pbmcgLnBhZ2UtaXRlbS5wcmV2LWl0ZW0gLnBhZ2UtbGluazpob3ZlciwgLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOWY0MztcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6YWN0aXZlOmFmdGVyLCAucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ubmV4dC1pdGVtIC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIsIC5wYWdpbmF0aW9uLXdhcm5pbmcgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6YWN0aXZlOmFmdGVyLCAucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ubmV4dCAucGFnZS1saW5rOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZjlmNDMnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XG59XG4ucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6YWN0aXZlOmJlZm9yZSwgLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyOmJlZm9yZSwgLnBhZ2luYXRpb24td2FybmluZyAucGFnZS1pdGVtLnByZXYgLnBhZ2UtbGluazphY3RpdmU6YmVmb3JlLCAucGFnaW5hdGlvbi13YXJuaW5nIC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmhvdmVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmY5ZjQzJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxNSAxOCA5IDEyIDE1IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXBpbGwtd2FybmluZyAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmOWY0MztcbiAgYm94LXNoYWRvdzogMCA0cHggMThweCAtNHB4IHJnYmEoMjU1LCAxNTksIDY3LCAwLjY1KTtcbn1cblxuLnByb2dyZXNzLWJhci13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMTIpO1xufVxuLnByb2dyZXNzLWJhci13YXJuaW5nIC5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjQzO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtd2FybmluZyBpLFxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC13YXJuaW5nIHN2ZyB7XG4gIHN0cm9rZTogI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC13YXJuaW5nLnRpbWVsaW5lLXBvaW50LWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtd2FybmluZy50aW1lbGluZS1wb2ludC1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1OSwgNjcsIDAuMTIpICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZpZGVyLmRpdmlkZXItd2FybmluZyAuZGl2aWRlci10ZXh0OmJlZm9yZSwgLmRpdmlkZXIuZGl2aWRlci13YXJuaW5nIC5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiAuYmctd2FybmluZyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDc1cmVtICNmZmYsIDAgMCAwIDAuMjFyZW0gI2ZmOWY0MyAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtd2FybmluZyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXdhcm5pbmcgLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5ZjQzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjQzO1xufVxuLmN1c3RvbS1jb250cm9sLXdhcm5pbmcuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtd2FybmluZy5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLXdhcm5pbmcuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtd2FybmluZy5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC13YXJuaW5nLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWNvbnRyb2wtd2FybmluZy5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDI1NSwgMTU5LCA2NywgMC40KSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLXdhcm5pbmcgLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTksIDY3LCAwLjY1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC13YXJuaW5nIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5ZjQzICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tc3dpdGNoLXdhcm5pbmcgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4uc2VsZWN0Mi13YXJuaW5nIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgYmFja2dyb3VuZDogI2ZmOWY0MyAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZjlmNDMgIWltcG9ydGFudDtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWRhcmtlbi0xIHtcbiAgY29sb3I6ICNmZjkyMmEgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZy5ib3JkZXItZGFya2VuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1kYXJrZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nLmJvcmRlci1sZWZ0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtZGFya2VuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmY5MjJhICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1kYXJrZW4tMSB7XG4gIGJhY2tncm91bmQ6ICNmZjkyMmE7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQ2LCA0MiwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWRhcmtlbi0yIHtcbiAgY29sb3I6ICNmZjg1MTAgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZy5ib3JkZXItZGFya2VuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1kYXJrZW4tMiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nLmJvcmRlci1sZWZ0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtZGFya2VuLTIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmY4NTEwICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1kYXJrZW4tMiB7XG4gIGJhY2tncm91bmQ6ICNmZjg1MTA7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTMzLCAxNiwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWRhcmtlbi0zIHtcbiAgY29sb3I6ICNmNjc4MDAgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZy5ib3JkZXItZGFya2VuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1kYXJrZW4tMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1kYXJrZW4tMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nLmJvcmRlci1sZWZ0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtZGFya2VuLTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjY3ODAwICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1kYXJrZW4tMyB7XG4gIGJhY2tncm91bmQ6ICNmNjc4MDA7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NiwgMTIwLCAwLCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtZGFya2VuLTQge1xuICBjb2xvcjogI2RjNmMwMCAhaW1wb3J0YW50O1xufVxuXG4uYmctd2FybmluZy5iZy1kYXJrZW4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1kYXJrZW4tNCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWRhcmtlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20td2FybmluZy5ib3JkZXItYm90dG9tLWRhcmtlbi00IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtZGFya2VuLTQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1kYXJrZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkYzZjMDAgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktd2FybmluZy5vdmVybGF5LWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZDogI2RjNmMwMDtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjIwLCAxMDgsIDAsIDAuNik7XG59XG5cbi50ZXh0LXdhcm5pbmcudGV4dC1hY2NlbnQtMSB7XG4gIGNvbG9yOiAjZmZmNWVmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWFjY2VudC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdhcm5pbmcuYm9yZGVyLWFjY2VudC0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC13YXJuaW5nLmJvcmRlci10b3AtYWNjZW50LTEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tYWNjZW50LTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtd2FybmluZy5ib3JkZXItbGVmdC1hY2NlbnQtMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXdhcm5pbmcuYm9yZGVyLXJpZ2h0LWFjY2VudC0xIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjVlZiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kOiAjZmZmNWVmO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0NSwgMjM5LCAwLjYpO1xufVxuXG4udGV4dC13YXJuaW5nLnRleHQtYWNjZW50LTIge1xuICBjb2xvcjogI2ZmZTVkOCAhaW1wb3J0YW50O1xufVxuXG4uYmctd2FybmluZy5iZy1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nLmJvcmRlci1hY2NlbnQtMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Atd2FybmluZy5ib3JkZXItdG9wLWFjY2VudC0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20td2FybmluZy5ib3JkZXItYm90dG9tLWFjY2VudC0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LXdhcm5pbmcuYm9yZGVyLWxlZnQtYWNjZW50LTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC13YXJuaW5nLmJvcmRlci1yaWdodC1hY2NlbnQtMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmU1ZDggIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktd2FybmluZy5vdmVybGF5LWFjY2VudC0yIHtcbiAgYmFja2dyb3VuZDogI2ZmZTVkODtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMjksIDIxNiwgMC42KTtcbn1cblxuLnRleHQtd2FybmluZy50ZXh0LWFjY2VudC0zIHtcbiAgY29sb3I6ICNmZmY2ZjMgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcuYmctYWNjZW50LTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZy5ib3JkZXItYWNjZW50LTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLXdhcm5pbmcuYm9yZGVyLXRvcC1hY2NlbnQtMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXdhcm5pbmcuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC13YXJuaW5nLmJvcmRlci1sZWZ0LWFjY2VudC0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtd2FybmluZy5ib3JkZXItcmlnaHQtYWNjZW50LTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmNmYzICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LXdhcm5pbmcub3ZlcmxheS1hY2NlbnQtMyB7XG4gIGJhY2tncm91bmQ6ICNmZmY2ZjM7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ2LCAyNDMsIDAuNik7XG59XG5cbi50ZXh0LXdhcm5pbmcudGV4dC1hY2NlbnQtNCB7XG4gIGNvbG9yOiAjZmZlM2RhICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLmJnLWFjY2VudC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdhcm5pbmcuYm9yZGVyLWFjY2VudC00IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC13YXJuaW5nLmJvcmRlci10b3AtYWNjZW50LTQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS13YXJuaW5nLmJvcmRlci1ib3R0b20tYWNjZW50LTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtd2FybmluZy5ib3JkZXItbGVmdC1hY2NlbnQtNCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LXdhcm5pbmcuYm9yZGVyLXJpZ2h0LWFjY2VudC00IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZTNkYSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS13YXJuaW5nLm92ZXJsYXktYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kOiAjZmZlM2RhO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIyNywgMjE4LCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1saWdodGVuLTUge1xuICBjb2xvcjogI2Y4YzZjNiAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWxpZ2h0ZW4tNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYW5nZXIuYm9yZGVyLWxpZ2h0ZW4tNSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtbGlnaHRlbi01IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tbGlnaHRlbi01IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhbmdlci5ib3JkZXItbGVmdC1saWdodGVuLTUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tNSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmOGM2YzYgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktbGlnaHRlbi01IHtcbiAgYmFja2dyb3VuZDogI2Y4YzZjNjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAxOTgsIDE5OCwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtbGlnaHRlbi00IHtcbiAgY29sb3I6ICNmNWFmYWYgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhbmdlci5iZy1saWdodGVuLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1saWdodGVuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhbmdlci5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tNCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtbGlnaHRlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1saWdodGVuLTQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjVhZmFmICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhbmdlci5vdmVybGF5LWxpZ2h0ZW4tNCB7XG4gIGJhY2tncm91bmQ6ICNmNWFmYWY7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTc1LCAxNzUsIDAuNik7XG59XG5cbi50ZXh0LWRhbmdlci50ZXh0LWxpZ2h0ZW4tMyB7XG4gIGNvbG9yOiAjZjI5ODk5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctbGlnaHRlbi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItbGlnaHRlbi0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYW5nZXIuYm9yZGVyLXRvcC1saWdodGVuLTMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1saWdodGVuLTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWRhbmdlci5ib3JkZXItcmlnaHQtbGlnaHRlbi0zIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyOTg5OSAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1saWdodGVuLTMge1xuICBiYWNrZ3JvdW5kOiAjZjI5ODk5O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDE1MiwgMTUzLCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1saWdodGVuLTIge1xuICBjb2xvcjogI2YwODE4MiAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWxpZ2h0ZW4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYW5nZXIuYm9yZGVyLWxpZ2h0ZW4tMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtbGlnaHRlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tbGlnaHRlbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhbmdlci5ib3JkZXItbGVmdC1saWdodGVuLTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWxpZ2h0ZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMDgxODIgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktbGlnaHRlbi0yIHtcbiAgYmFja2dyb3VuZDogI2YwODE4MjtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAxMjksIDEzMCwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtbGlnaHRlbi0xIHtcbiAgY29sb3I6ICNlZDZiNmMgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhbmdlci5iZy1saWdodGVuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1saWdodGVuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhbmdlci5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtbGlnaHRlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1saWdodGVuLTEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWQ2YjZjICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhbmdlci5vdmVybGF5LWxpZ2h0ZW4tMSB7XG4gIGJhY2tncm91bmQ6ICNlZDZiNmM7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNywgMTA3LCAxMDgsIDAuNik7XG59XG5cbi5iZy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG4uYmctZGFuZ2VyIC5jYXJkLWhlYWRlcixcbi5iZy1kYW5nZXIgLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgODQsIDg1LCAwLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2VhNTQ1NSAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LWRhbmdlciAuYWxlcnQtaGVhZGluZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjM0LCA4NCwgODUsIDAuNCkgMHB4IDZweCAxNXB4IC03cHg7XG59XG4uYWxlcnQtZGFuZ2VyIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICNlNzNkM2UgIWltcG9ydGFudDtcbn1cbi5hbGVydC1kYW5nZXIgLmNsb3NlIHtcbiAgY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0LWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCA4NCwgODUsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG4uYmctbGlnaHQtZGFuZ2VyLmZjLWgtZXZlbnQsIC5iZy1saWdodC1kYW5nZXIuZmMtdi1ldmVudCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzQsIDg0LCA4NSwgMC4xKTtcbn1cbi5iZy1saWdodC1kYW5nZXIgLmZjLWxpc3QtZXZlbnQtZG90LFxuLmJnLWxpZ2h0LWRhbmdlciAuZmMtZGF5Z3JpZC1ldmVudC1kb3Qge1xuICBib3JkZXItY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1kYW5nZXIuZmMtbGlzdC1ldmVudDpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCA4NCwgODUsIDAuMSkgIWltcG9ydGFudDtcbn1cbi5iZy1saWdodC1kYW5nZXIuZmMtbGlzdC1ldmVudCAuZmMtbGlzdC1ldmVudC10aXRsZSB7XG4gIGNvbG9yOiAjNmU2YjdiO1xufVxuXG4uYXZhdGFyLmJnLWxpZ2h0LWRhbmdlciB7XG4gIGNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNTQ1NSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYW5nZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhNTQ1NTtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYTU0NTU7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlYTU0NTU7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VhNTQ1NTtcbn1cblxuLmJnLWRhbmdlci5iYWRnZS1nbG93LFxuLmJvcmRlci1kYW5nZXIuYmFkZ2UtZ2xvdyxcbi5iYWRnZS1kYW5nZXIuYmFkZ2UtZ2xvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZWE1NDU1O1xufVxuXG4uYmFkZ2UuYmFkZ2UtbGlnaHQtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDg0LCA4NSwgMC4xMik7XG4gIGNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNlYTU0NTU7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgODQsIDg1LCAwLjYpO1xufVxuXG4uYnRuLWRhbmdlciB7XG4gIGJvcmRlci1jb2xvcjogI2VhNTQ1NSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuLWRhbmdlcjpmb2N1cywgLmJ0bi1kYW5nZXI6YWN0aXZlLCAuYnRuLWRhbmdlci5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3M2QzZSAhaW1wb3J0YW50O1xufVxuLmJ0bi1kYW5nZXI6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IC04cHggI2VhNTQ1NTtcbn1cbi5idG4tZGFuZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5idG4tZmxhdC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG4uYnRuLWZsYXQtZGFuZ2VyOmhvdmVyIHtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG4uYnRuLWZsYXQtZGFuZ2VyOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDg0LCA4NSwgMC4xMik7XG59XG4uYnRuLWZsYXQtZGFuZ2VyOmFjdGl2ZSwgLmJ0bi1mbGF0LWRhbmdlci5hY3RpdmUsIC5idG4tZmxhdC1kYW5nZXI6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgODQsIDg1LCAwLjIpO1xuICBjb2xvcjogI2VhNTQ1NTtcbn1cbi5idG4tZmxhdC1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZWE1NDU1JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uYnRuLXJlbGllZi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1O1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwIHJnYmEoMzQsIDQxLCA0NywgMC4yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uYnRuLXJlbGllZi1kYW5nZXI6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2YjZjO1xufVxuLmJ0bi1yZWxpZWYtZGFuZ2VyOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtZGFuZ2VyLmFjdGl2ZSwgLmJ0bi1yZWxpZWYtZGFuZ2VyOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3M2QzZTtcbn1cbi5idG4tcmVsaWVmLWRhbmdlcjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1yZWxpZWYtZGFuZ2VyOmFjdGl2ZSwgLmJ0bi1yZWxpZWYtZGFuZ2VyLmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xufVxuXG4uYnRuLW91dGxpbmUtZGFuZ2VyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNTQ1NSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG4uYnRuLW91dGxpbmUtZGFuZ2VyOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDg0LCA4NSwgMC4wNCk7XG4gIGNvbG9yOiAjZWE1NDU1O1xufVxuLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLW91dGxpbmUtZGFuZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDg0LCA4NSwgMC4yKTtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG4uYnRuLW91dGxpbmUtZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2VhNTQ1NScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWRhbmdlci5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgODQsIDg1LCAwLjIpO1xuICBjb2xvcjogI2VhNTQ1NTtcbn1cblxuLmJ0bi1vdXRsaW5lLWRhbmdlci53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSxcbi5idG4tZmxhdC1kYW5nZXIud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyMzQsIDg0LCA4NSwgMC4yKSAwLCByZ2JhKDIzNCwgODQsIDg1LCAwLjMpIDQwJSwgcmdiYSgyMzQsIDg0LCA4NSwgMC40KSA1MCUsIHJnYmEoMjM0LCA4NCwgODUsIDAuNSkgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG59XG5cbi5idWxsZXQuYnVsbGV0LWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG59XG5cbi5tb2RhbC5tb2RhbC1kYW5nZXIgLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBjb2xvcjogI2VhNTQ1NTtcbn1cbi5tb2RhbC5tb2RhbC1kYW5nZXIgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBjb2xvcjogI2VhNTQ1NSAhaW1wb3J0YW50O1xufVxuXG4ucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQ6ICNlYTU0NTUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24tZGFuZ2VyIC5wYWdlLWl0ZW0gLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZWE1NDU1O1xufVxuLnBhZ2luYXRpb24tZGFuZ2VyIC5wYWdlLWl0ZW0ucHJldi1pdGVtIC5wYWdlLWxpbms6aG92ZXIsIC5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VhNTQ1NTtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5uZXh0LWl0ZW0gLnBhZ2UtbGluazphY3RpdmU6YWZ0ZXIsIC5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLm5leHQtaXRlbSAucGFnZS1saW5rOmhvdmVyOmFmdGVyLCAucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6YWN0aXZlOmFmdGVyLCAucGFnaW5hdGlvbi1kYW5nZXIgLnBhZ2UtaXRlbS5uZXh0IC5wYWdlLWxpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2VhNTQ1NScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cbi5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLnByZXYtaXRlbSAucGFnZS1saW5rOmhvdmVyOmJlZm9yZSwgLnBhZ2luYXRpb24tZGFuZ2VyIC5wYWdlLWl0ZW0ucHJldiAucGFnZS1saW5rOmFjdGl2ZTpiZWZvcmUsIC5wYWdpbmF0aW9uLWRhbmdlciAucGFnZS1pdGVtLnByZXYgLnBhZ2UtbGluazpob3ZlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2VhNTQ1NScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTUgMTggOSAxMiAxNSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cblxuLm5hdi1waWxsLWRhbmdlciAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2VhNTQ1NTtcbiAgYm94LXNoYWRvdzogMCA0cHggMThweCAtNHB4IHJnYmEoMjM0LCA4NCwgODUsIDAuNjUpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCA4NCwgODUsIDAuMTIpO1xufVxuLnByb2dyZXNzLWJhci1kYW5nZXIgLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtcG9pbnQtZGFuZ2VyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhbmdlciBpLFxuLnRpbWVsaW5lIC50aW1lbGluZS1wb2ludC1kYW5nZXIgc3ZnIHtcbiAgc3Ryb2tlOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhbmdlci50aW1lbGluZS1wb2ludC1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLXBvaW50LWRhbmdlci50aW1lbGluZS1wb2ludC1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDg0LCA4NSwgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmRpdmlkZXIuZGl2aWRlci1kYW5nZXIgLmRpdmlkZXItdGV4dDpiZWZvcmUsIC5kaXZpZGVyLmRpdmlkZXItZGFuZ2VyIC5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiAuYmctZGFuZ2VyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gI2ZmZiwgMCAwIDAgMC4yMXJlbSAjZWE1NDU1ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1kYW5nZXIgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1kYW5nZXIgLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWE1NDU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1O1xufVxuLmN1c3RvbS1jb250cm9sLWRhbmdlci5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1kYW5nZXIuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tY29udHJvbC1kYW5nZXIuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtZGFuZ2VyLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhbmdlci5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1jb250cm9sLWRhbmdlci5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDIzNCwgODQsIDg1LCAwLjQpICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNvbnRyb2wtZGFuZ2VyIC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgODQsIDg1LCAwLjY1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1kYW5nZXIgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1zd2l0Y2gtZGFuZ2VyIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cblxuLnNlbGVjdDItZGFuZ2VyIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgYmFja2dyb3VuZDogI2VhNTQ1NSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNlYTU0NTUgIWltcG9ydGFudDtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtZGFya2VuLTEge1xuICBjb2xvcjogI2U3M2QzZSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWRhcmtlbi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3M2QzZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItZGFya2VuLTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTczZDNlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWRhcmtlbi0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNzNkM2UgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tZGFya2VuLTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3M2QzZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWRhcmtlbi0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTczZDNlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1kYXJrZW4tMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNzNkM2UgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktZGFya2VuLTEge1xuICBiYWNrZ3JvdW5kOiAjZTczZDNlO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDYxLCA2MiwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtZGFya2VuLTIge1xuICBjb2xvcjogI2U0MjcyOCAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWRhcmtlbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MjcyOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItZGFya2VuLTIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTQyNzI4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWRhcmtlbi0yIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNDI3MjggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tZGFya2VuLTIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0MjcyOCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWRhcmtlbi0yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTQyNzI4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1kYXJrZW4tMiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNDI3MjggIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktZGFya2VuLTIge1xuICBiYWNrZ3JvdW5kOiAjZTQyNzI4O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMjgsIDM5LCA0MCwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtZGFya2VuLTMge1xuICBjb2xvcjogI2Q3MWExYyAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWRhcmtlbi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MWExYyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItZGFya2VuLTMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDcxYTFjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWRhcmtlbi0zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNzFhMWMgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tZGFya2VuLTMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3MWExYyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWRhcmtlbi0zIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDcxYTFjICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1kYXJrZW4tMyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNzFhMWMgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktZGFya2VuLTMge1xuICBiYWNrZ3JvdW5kOiAjZDcxYTFjO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMTUsIDI2LCAyOCwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtZGFya2VuLTQge1xuICBjb2xvcjogI2MwMTgxOSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWRhcmtlbi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMTgxOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItZGFya2VuLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzAxODE5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWRhcmtlbi00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjMDE4MTkgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tZGFya2VuLTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwMTgxOSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWRhcmtlbi00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYzAxODE5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1kYXJrZW4tNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjMDE4MTkgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktZGFya2VuLTQge1xuICBiYWNrZ3JvdW5kOiAjYzAxODE5O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgxOTIsIDI0LCAyNSwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtYWNjZW50LTEge1xuICBjb2xvcjogI2ZmZWVmMSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWFjY2VudC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWVmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItYWNjZW50LTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZlZWYxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWFjY2VudC0xIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmVlZjEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tYWNjZW50LTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZWVmMSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWFjY2VudC0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZlZWYxICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1hY2NlbnQtMSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmVlZjEgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktYWNjZW50LTEge1xuICBiYWNrZ3JvdW5kOiAjZmZlZWYxO1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzOCwgMjQxLCAwLjYpO1xufVxuXG4udGV4dC1kYW5nZXIudGV4dC1hY2NlbnQtMiB7XG4gIGNvbG9yOiAjZmZkNmRiICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIuYmctYWNjZW50LTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNmRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyLmJvcmRlci1hY2NlbnQtMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmQ2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtZGFuZ2VyLmJvcmRlci10b3AtYWNjZW50LTIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZDZkYiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1kYW5nZXIuYm9yZGVyLWJvdHRvbS1hY2NlbnQtMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZkNmRiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1kYW5nZXIuYm9yZGVyLWxlZnQtYWNjZW50LTIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmQ2ZGIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC1kYW5nZXIuYm9yZGVyLXJpZ2h0LWFjY2VudC0yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZDZkYiAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheS1kYW5nZXIub3ZlcmxheS1hY2NlbnQtMiB7XG4gIGJhY2tncm91bmQ6ICNmZmQ2ZGI7XG4gIC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjE0LCAyMTksIDAuNik7XG59XG5cbi50ZXh0LWRhbmdlci50ZXh0LWFjY2VudC0zIHtcbiAgY29sb3I6ICNmZmVjZWUgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhbmdlci5iZy1hY2NlbnQtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYW5nZXIuYm9yZGVyLWFjY2VudC0zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZWNlZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXRvcC1kYW5nZXIuYm9yZGVyLXRvcC1hY2NlbnQtMyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZlY2VlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhbmdlci5ib3JkZXItYm90dG9tLWFjY2VudC0zIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmVjZWUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1sZWZ0LWRhbmdlci5ib3JkZXItbGVmdC1hY2NlbnQtMyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZWNlZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LWRhbmdlci5ib3JkZXItcmlnaHQtYWNjZW50LTMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZlY2VlICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWRhbmdlci5vdmVybGF5LWFjY2VudC0zIHtcbiAgYmFja2dyb3VuZDogI2ZmZWNlZTtcbiAgLyogVGhlIEZhbGxiYWNrICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzYsIDIzOCwgMC42KTtcbn1cblxuLnRleHQtZGFuZ2VyLnRleHQtYWNjZW50LTQge1xuICBjb2xvcjogI2ZmZDNkNyAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLmJnLWFjY2VudC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDNkNyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlci5ib3JkZXItYWNjZW50LTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZkM2Q3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLWRhbmdlci5ib3JkZXItdG9wLWFjY2VudC00IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmQzZDcgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFuZ2VyLmJvcmRlci1ib3R0b20tYWNjZW50LTQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZDNkNyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtZGFuZ2VyLmJvcmRlci1sZWZ0LWFjY2VudC00IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZkM2Q3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtZGFuZ2VyLmJvcmRlci1yaWdodC1hY2NlbnQtNCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmQzZDcgIWltcG9ydGFudDtcbn1cblxuLm92ZXJsYXktZGFuZ2VyLm92ZXJsYXktYWNjZW50LTQge1xuICBiYWNrZ3JvdW5kOiAjZmZkM2Q3O1xuICAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIxMSwgMjE1LCAwLjYpO1xufVxuXG4uYmctZ3JhZGllbnQtZGFyayxcbi5idG4tZ3JhZGllbnQtZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICM0YjRiNGIsICMxZTFlMWUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uZGFyay1sYXlvdXQgLmJnLWdyYWRpZW50LWRhcmssXG4uZGFyay1sYXlvdXQgLmJ0bi1ncmFkaWVudC1kYXJrIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCAjMWUxZTFlLCAjNGI0YjRiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuLmJnLWdyYWRpZW50LWRhcms6aG92ZXIsIC5iZy1ncmFkaWVudC1kYXJrOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtZGFyazpob3Zlcixcbi5idG4tZ3JhZGllbnQtZGFyazphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5iZy1ncmFkaWVudC1kYXJrOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpLFxuLmJ0bi1ncmFkaWVudC1kYXJrOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuLmJnLWdyYWRpZW50LWRhcms6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1kYXJrOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5iZy1ncmFkaWVudC1kYXJrOmFjdGl2ZSwgLmJnLWdyYWRpZW50LWRhcms6Zm9jdXMsXG4uYnRuLWdyYWRpZW50LWRhcms6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1kYXJrOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCAjMWUxZTFlLCAjNGI0YjRiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuXG4uYmctZ3JhZGllbnQtcHJpbWFyeSxcbi5idG4tZ3JhZGllbnQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICM3MzY3ZjAsICM5ZTk1ZjUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uYmctZ3JhZGllbnQtcHJpbWFyeTpob3ZlciwgLmJnLWdyYWRpZW50LXByaW1hcnk6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1wcmltYXJ5OmhvdmVyLFxuLmJ0bi1ncmFkaWVudC1wcmltYXJ5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJnLWdyYWRpZW50LXByaW1hcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCksXG4uYnRuLWdyYWRpZW50LXByaW1hcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYmctZ3JhZGllbnQtcHJpbWFyeTphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXByaW1hcnk6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLmJnLWdyYWRpZW50LXByaW1hcnk6YWN0aXZlLCAuYmctZ3JhZGllbnQtcHJpbWFyeTpmb2N1cyxcbi5idG4tZ3JhZGllbnQtcHJpbWFyeTphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXByaW1hcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICM0ODM5ZWIsICM3MzY3ZjApO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5iZy1ncmFkaWVudC1zZWNvbmRhcnksXG4uYnRuLWdyYWRpZW50LXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICM4Mjg2OGIsICM5Y2EwYTQpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uYmctZ3JhZGllbnQtc2Vjb25kYXJ5OmhvdmVyLCAuYmctZ3JhZGllbnQtc2Vjb25kYXJ5OmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtc2Vjb25kYXJ5OmhvdmVyLFxuLmJ0bi1ncmFkaWVudC1zZWNvbmRhcnk6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmctZ3JhZGllbnQtc2Vjb25kYXJ5OmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpLFxuLmJ0bi1ncmFkaWVudC1zZWNvbmRhcnk6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYmctZ3JhZGllbnQtc2Vjb25kYXJ5OmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtc2Vjb25kYXJ5OmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5iZy1ncmFkaWVudC1zZWNvbmRhcnk6YWN0aXZlLCAuYmctZ3JhZGllbnQtc2Vjb25kYXJ5OmZvY3VzLFxuLmJ0bi1ncmFkaWVudC1zZWNvbmRhcnk6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1zZWNvbmRhcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICM2OTZkNzEsICM4Mjg2OGIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5iZy1ncmFkaWVudC1zdWNjZXNzLFxuLmJ0bi1ncmFkaWVudC1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgIzI4Yzc2ZiwgIzQ4ZGE4OSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cbi5iZy1ncmFkaWVudC1zdWNjZXNzOmhvdmVyLCAuYmctZ3JhZGllbnQtc3VjY2VzczphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXN1Y2Nlc3M6aG92ZXIsXG4uYnRuLWdyYWRpZW50LXN1Y2Nlc3M6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmctZ3JhZGllbnQtc3VjY2Vzczpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSxcbi5idG4tZ3JhZGllbnQtc3VjY2Vzczpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5iZy1ncmFkaWVudC1zdWNjZXNzOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtc3VjY2VzczphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG4uYmctZ3JhZGllbnQtc3VjY2VzczphY3RpdmUsIC5iZy1ncmFkaWVudC1zdWNjZXNzOmZvY3VzLFxuLmJ0bi1ncmFkaWVudC1zdWNjZXNzOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtc3VjY2Vzczpmb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgIzFmOWQ1NywgIzI4Yzc2Zik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cblxuLmJnLWdyYWRpZW50LWluZm8sXG4uYnRuLWdyYWRpZW50LWluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCAjMDBjZmU4LCAjMWNlN2ZmKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuLmJnLWdyYWRpZW50LWluZm86aG92ZXIsIC5iZy1ncmFkaWVudC1pbmZvOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtaW5mbzpob3Zlcixcbi5idG4tZ3JhZGllbnQtaW5mbzphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5iZy1ncmFkaWVudC1pbmZvOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpLFxuLmJ0bi1ncmFkaWVudC1pbmZvOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuLmJnLWdyYWRpZW50LWluZm86YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1pbmZvOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5iZy1ncmFkaWVudC1pbmZvOmFjdGl2ZSwgLmJnLWdyYWRpZW50LWluZm86Zm9jdXMsXG4uYnRuLWdyYWRpZW50LWluZm86YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1pbmZvOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCAjMDBhMWI1LCAjMDBjZmU4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuXG4uYmctZ3JhZGllbnQtd2FybmluZyxcbi5idG4tZ3JhZGllbnQtd2FybmluZyB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICNmZjlmNDMsICNmZmI5NzYpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uYmctZ3JhZGllbnQtd2FybmluZzpob3ZlciwgLmJnLWdyYWRpZW50LXdhcm5pbmc6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC13YXJuaW5nOmhvdmVyLFxuLmJ0bi1ncmFkaWVudC13YXJuaW5nOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJnLWdyYWRpZW50LXdhcm5pbmc6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCksXG4uYnRuLWdyYWRpZW50LXdhcm5pbmc6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYmctZ3JhZGllbnQtd2FybmluZzphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXdhcm5pbmc6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLmJnLWdyYWRpZW50LXdhcm5pbmc6YWN0aXZlLCAuYmctZ3JhZGllbnQtd2FybmluZzpmb2N1cyxcbi5idG4tZ3JhZGllbnQtd2FybmluZzphY3RpdmUsXG4uYnRuLWdyYWRpZW50LXdhcm5pbmc6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICNmZjg1MTAsICNmZjlmNDMpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5iZy1ncmFkaWVudC1kYW5nZXIsXG4uYnRuLWdyYWRpZW50LWRhbmdlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICNlYTU0NTUsICNmMDgxODIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG4uYmctZ3JhZGllbnQtZGFuZ2VyOmhvdmVyLCAuYmctZ3JhZGllbnQtZGFuZ2VyOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtZGFuZ2VyOmhvdmVyLFxuLmJ0bi1ncmFkaWVudC1kYW5nZXI6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmctZ3JhZGllbnQtZGFuZ2VyOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpLFxuLmJ0bi1ncmFkaWVudC1kYW5nZXI6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYmctZ3JhZGllbnQtZGFuZ2VyOmFjdGl2ZSxcbi5idG4tZ3JhZGllbnQtZGFuZ2VyOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5iZy1ncmFkaWVudC1kYW5nZXI6YWN0aXZlLCAuYmctZ3JhZGllbnQtZGFuZ2VyOmZvY3VzLFxuLmJ0bi1ncmFkaWVudC1kYW5nZXI6YWN0aXZlLFxuLmJ0bi1ncmFkaWVudC1kYW5nZXI6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDdkZWcsICNlNDI3MjgsICNlYTU0NTUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcC5oZWlnaHQtNzAtdmgge1xuICBoZWlnaHQ6IDcwdmggIWltcG9ydGFudDtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjc7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZTlmMTtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5zb3J0LWJ0bjpiZWZvcmUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgYm9yZGVyLWNvbG9yOiAjZWJlOWYxO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keS1yb3cuZGF0YXRhYmxlLXJvdy1ldmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGNvbG9yOiAjNmU2YjdiO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwtbGFiZWwgLmNlbGwtbGluZS1oZWlnaHQge1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKS5hY3RpdmU6aG92ZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEsIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpob3ZlciBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpOmhvdmVyIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzczNjdmMCAhaW1wb3J0YW50O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGkge1xuICBtYXJnaW46IDJweCAwcHggMTFweCAwcHggIWltcG9ydGFudDtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpOmhvdmVyIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzYzNjM2Mztcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpLmRpc2FibGVkIGEge1xuICBjb2xvcjogI2I5YjljMztcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjc7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjhweDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgY29sb3I6ICNiOWI5YzM7XG59XG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAuaGVhZGVyLWhlaWdodC01MCAuZGF0YXRhYmxlLWhlYWRlciB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlLWNvdW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgfVxuXG4gIC5tb2JpbGUtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAuZGVza3RvcC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgfVxufVxuLmRhcmstbGF5b3V0IC5kYXRhdGFibGUtaGVhZGVyLWlubmVyLFxuLmRhcmstbGF5b3V0IC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2Q1NSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzNiNDI1MyAhaW1wb3J0YW50O1xufVxuLmRhcmstbGF5b3V0IC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODMwNDYgIWltcG9ydGFudDtcbn1cbi5kYXJrLWxheW91dCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuY29yZS1ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaS5kaXNhYmxlZCBhIHtcbiAgY29sb3I6ICM2MzYzNjM7XG59XG4uZGFyay1sYXlvdXQgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgYSB7XG4gIGNvbG9yOiAjYjRiN2JkO1xufVxuLmRhcmstbGF5b3V0IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICBib3JkZXItY29sb3I6ICMzYjQyNTMgIWltcG9ydGFudDtcbn1cbi5kYXJrLWxheW91dCAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODMwNDYgIWltcG9ydGFudDtcbiAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cbi5kYXJrLWxheW91dCAuZGF0YXRhYmxlLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzMDQ2ICFpbXBvcnRhbnQ7XG59XG4uZGFyay1sYXlvdXQgLnBhZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MmIzZCAhaW1wb3J0YW50O1xufVxuXG4uZGF0YXRhYmxlLXNjcm9sbCB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgIEZpbGUgTmFtZTogcGFsbGV0dGUuc2Nzc1xuLy8gICBEZXNjcmlwdGlvbjogQ3VzdG9tIGNvbG9yIHN5c3RlbSBzdHlsZXMsIGluY2x1ZGVzIGJhY2tncm91bmQsIGJvcmRlciBhbmQgdGV4dCBjb2xvcnNcbi8vICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbi8vICAgQXV0aG9yOiBQSVhJTlZFTlRcbi8vICAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxuLy8gIFRISVMgRklMRSBXSUxMIEdFVCBPVkVSV1JJVFRFTiBXSVRIIEVBQ0ggVnVleHkgSFRNTCBURU1QTEFURSBSRUxFQVNFLlxuLy8gIFRJUDpcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvY29sb3JzL3BhbGV0dGUuc2NzcykgZmlsZSBmb3Igb3ZlcnJpZGluZyBjb2xvciB2YXJpYWJsZXMuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIHVzYWdlOiB0aGVtZS1jb2xvcihcIm5hbWVfb2ZfY29sb3JcIiwgXCJ0eXBlX29mX2NvbG9yXCIpXG4vLyB0byBhdm9pZCB0byByZXBlYXRpbmcgbWFwLWdldCgkY29sb3JzLCAuLi4pXG5cbkBmdW5jdGlvbiBjb2xvci1mdW5jdGlvbigkY29sb3IsICR0eXBlKSB7XG4gIEBpZiBtYXAtaGFzLWtleSgkY29sb3JzLCAkY29sb3IpIHtcbiAgICAkY3Vycl9jb2xvcjogbWFwLWdldCgkY29sb3JzLCAkY29sb3IpO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkY3Vycl9jb2xvciwgJHR5cGUpIHtcbiAgICAgIEByZXR1cm4gbWFwLWdldCgkY3Vycl9jb2xvciwgJHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEB3YXJuIFwiVW5rbm93biBgI3tuYW1lfWAgaW4gJGNvbG9ycy5cIjtcbiAgQHJldHVybiBudWxsO1xufVxuXG4vLyBDb2xvciBwYWxldHRlc1xuQGltcG9ydCAncGFsZXR0ZS12YXJpYWJsZXMnO1xuXG4vLyBDb2xvciBDbGFzc2VzXG4vLyAgIFRleHQgY29sb3I6IC5jb2xvciAubGlnaHRlbi0qIC8gLmRhcmtlbi0qIC8gLmFjY2VudC0qXG4vLyAgIEJhY2tncm91bmQ6IC5iZy1jb2xvciAuYmctbGlnaHRlbi0qIC8gLmJnLWRhcmtlbi0qIC8gLmJnLWFjY2VudC0qXG4vLyAgIGJvcmRlcjogLmJvcmRlci1jb2xvciAuYm9yZGVyLWxpZ2h0ZW4tKiAvIC5ib3JkZXItZGFya2VuLSogLyAuYm9yZGVyLWFjY2VudC0qXG4vLyAgIGJvcmRlci10b3A6IC5ib3JkZXItdG9wLWNvbG9yIC5ib3JkZXItdG9wLWxpZ2h0ZW4tKiAvIC5ib3JkZXItdG9wLWRhcmtlbi0qIC8gLmJvcmRlci10b3AtYWNjZW50LSpcbi8vICAgYm9yZGVyLWJvdHRvbTogLmJvcmRlci1ib3R0b20tY29sb3IgLmJvcmRlci1ib3R0b20tbGlnaHRlbi0qIC8gLmJvcmRlci1ib3R0b20tZGFya2VuLSogLyAuYm9yZGVyLWJvdHRvbS1hY2NlbnQtKlxuLy8gICBib3JkZXItbGVmdDogLmJvcmRlci1sZWZ0LWNvbG9yIC5ib3JkZXItbGVmdC1saWdodGVuLSogLyAuYm9yZGVyLWxlZnQtZGFya2VuLSogLyAuYm9yZGVyLWxlZnQtYWNjZW50LSpcbi8vICAgYm9yZGVyLXJpZ2h0OiAuYm9yZGVyLXJpZ2h0LWNvbG9yIC5ib3JkZXItcmlnaHQtbGlnaHRlbi0qIC8gLmJvcmRlci1yaWdodC1kYXJrZW4tKiAvIC5ib3JkZXItcmlnaHQtYWNjZW50LSpcblxuQGVhY2ggJGNvbG9yX25hbWUsICRjb2xvciBpbiAkY29sb3JzIHtcbiAgQGVhY2ggJGNvbG9yX3R5cGUsICRjb2xvcl92YWx1ZSBpbiAkY29sb3Ige1xuICAgIEBpZiAkY29sb3JfdHlwZT09ICdiYXNlJyB7XG4gICAgICAvLyBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICAuYmctI3skY29sb3JfbmFtZX0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcblxuICAgICAgICAuY2FyZC1oZWFkZXIsXG4gICAgICAgIC5jYXJkLWZvb3RlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWxlcnRcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAuYWxlcnQtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjEyKSAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcblxuICAgICAgICAgIC5hbGVydC1oZWFkaW5nIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFsZXJ0LWhlYWRpbmctYnMoJGNvbG9yX3ZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWxlcnQtbGluayB7XG4gICAgICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvcl92YWx1ZSwgNSUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2xvc2FibGUgYWxlcnRcbiAgICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBiZyBjb2xvciBsaWdodGVuIGZvciByZ2JhIC0gb3BhY2l0eSBzZXRcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJyBhbmQgJGNvbG9yX25hbWUgIT0gJ2RhcmsnKSB7XG4gICAgICAgIC5iZy1saWdodC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3JfdmFsdWUsIDAuMTIpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgLy8gQ2FsZW5kYXIgYmFja2dyb3VuZCwgY29sb3IgYW5kIGJvcmRlciBjb2xvclxuICAgICAgICAgICYuZmMtaC1ldmVudCxcbiAgICAgICAgICAmLmZjLXYtZXZlbnQge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvcl92YWx1ZSwgMC4xKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmMtbGlzdC1ldmVudC1kb3QsXG4gICAgICAgICAgLmZjLWRheWdyaWQtZXZlbnQtZG90IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5mYy1saXN0LWV2ZW50IHtcbiAgICAgICAgICAgICY6aG92ZXIgdGQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcl92YWx1ZSwgMC4xKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmMtbGlzdC1ldmVudC10aXRsZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gYXZhdGFyIHdpdGggbGlnaHQgYmdcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJyBhbmQgJGNvbG9yX25hbWUgIT0gJ2RhcmsnKSB7XG4gICAgICAgIC5hdmF0YXIuYmctbGlnaHQtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCb3JkZXIgY29sb3JzXG4gICAgICAuYm9yZGVyLSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5ib3JkZXItdG9wLSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRjb2xvcl92YWx1ZTtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci1ib3R0b20tI3skY29sb3JfbmFtZX0ge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlO1xuICAgICAgfVxuXG4gICAgICAuYm9yZGVyLWxlZnQtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRjb2xvcl92YWx1ZTtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci1yaWdodC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjb2xvcl92YWx1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gYmFkZ2UgZ2xvdyBjb2xvcnNcbiAgICAgIC5iZy0jeyRjb2xvcl9uYW1lfSxcbiAgICAgIC5ib3JkZXItI3skY29sb3JfbmFtZX0sXG4gICAgICAuYmFkZ2UtI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAmLmJhZGdlLWdsb3cge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkY29sb3JfdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQmFkZ2UgQmFja2dyb3VuZCBDb2xvclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5iYWRnZSB7XG4gICAgICAgICAgLy8gQmFkZ2UgTGlnaHQgQmFja2dyb3VuZFxuICAgICAgICAgICYuYmFkZ2UtbGlnaHQtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICRjb2xvcl92YWx1ZSwgJGFscGhhOiAwLjEyKTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3ZlcmxheSBjb2xvcnNcbiAgICAgIC5vdmVybGF5LSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgYmctb3BhY2l0eSgkY29sb3JfdmFsdWUsIDAuNik7XG4gICAgICB9XG5cbiAgICAgIC8vIEJhc2ljIGJ1dHRvbnNcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAuYnRuLSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcblxuICAgICAgICAgICY6Zm9jdXMsXG4gICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLWZ1bmN0aW9uKCRjb2xvcl9uYW1lLCAnZGFya2VuLTEnKSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjVweCAtOHB4IHJnYmEoJGNvbG9yLXZhbHVlLCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3IgQnRuIEZsYXRcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAuYnRuLWZsYXQtI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAkY29sb3ItdmFsdWU7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci12YWx1ZSwgMC4xMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJGNvbG9yX3ZhbHVlLCAkYWxwaGE6IDAuMik7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tZG93biwgJ2N1cnJlbnRDb2xvcicsICRjb2xvcl92YWx1ZSksICcjJywgJyUyMycpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRm9yIEJ0biBSZWxpZWZcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAuYnRuLXJlbGllZi0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXZhbHVlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAwIDAgcmdiYSgkYmxhY2ssIDAuMik7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgIEBpZiAkY29sb3JfbmFtZSA9PSAnZGFyaycge1xuICAgICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLWZ1bmN0aW9uKCRjb2xvcl9uYW1lLCAnZGFya2VuLTMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2xpZ2h0ZW4tMScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAmLmFjdGl2ZSxcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLWZ1bmN0aW9uKCRjb2xvcl9uYW1lLCAnZGFya2VuLTEnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE91dGxpbmUgYnV0dG9uc1xuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5idG4tb3V0bGluZS0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcblxuICAgICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICRjb2xvcl92YWx1ZSwgJGFscGhhOiAwLjA0KTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxuICAgICAgICAgICY6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuICAgICAgICAgICY6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICRjb2xvcl92YWx1ZSwgJGFscGhhOiAwLjIpO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKHN0ci1yZXBsYWNlKCRjaGV2cm9uLWRvd24sICdjdXJyZW50Q29sb3InLCAkY29sb3JfdmFsdWUpLCAnIycsICclMjMnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHNwbGl0IHRvZ2dsZSBoYXZlIHNob3cgY2xhc3NcbiAgICAgICAgICAuc2hvdyA+ICYuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkY29sb3JfdmFsdWUsICRhbHBoYTogMC4yKTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFdhdmUgZWZmZWN0XG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLmJ0bi1vdXRsaW5lLSN7JGNvbG9yX25hbWV9LFxuICAgICAgICAuYnRuLWZsYXQtI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAgICYud2F2ZXMtZWZmZWN0IHtcbiAgICAgICAgICAgIC53YXZlcy1yaXBwbGUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgcmdiYSgkY29sb3JfdmFsdWUsIDAuMikgMCxcbiAgICAgICAgICAgICAgICByZ2JhKCRjb2xvcl92YWx1ZSwgMC4zKSA0MCUsXG4gICAgICAgICAgICAgICAgcmdiYSgkY29sb3JfdmFsdWUsIDAuNCkgNTAlLFxuICAgICAgICAgICAgICAgIHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjUpIDYwJSxcbiAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgMCkgNzAlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1bGxldCBjb2xvcnMgZm9yIGVtYWlsIGFwcFxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5idWxsZXQge1xuICAgICAgICAgICYuYnVsbGV0LSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTW9kYWxcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAubW9kYWwge1xuICAgICAgICAgICYubW9kYWwtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICAgICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAgICAgICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3IgUGFnaW5hdGlvblxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnIGFuZCAkY29sb3JfbmFtZSAhPSAnZGFyaycpIHtcbiAgICAgICAgLnBhZ2luYXRpb24tI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAgIC5wYWdlLWl0ZW0ge1xuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAucGFnZS1saW5rIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGFnZS1saW5rIHtcbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnByZXYtaXRlbSxcbiAgICAgICAgICAgICYubmV4dC1pdGVtIHtcbiAgICAgICAgICAgICAgLnBhZ2UtbGluazpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYubmV4dC1pdGVtLFxuICAgICAgICAgICAgJi5uZXh0IHtcbiAgICAgICAgICAgICAgLnBhZ2UtbGluayB7XG4gICAgICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKCRjaGV2cm9uLXJpZ2h0LCAnY3VycmVudENvbG9yJywgJGNvbG9yX3ZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAnIycsXG4gICAgICAgICAgICAgICAgICAgICAgJyUyMydcbiAgICAgICAgICAgICAgICAgICAgKSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYucHJldi1pdGVtLFxuICAgICAgICAgICAgJi5wcmV2IHtcbiAgICAgICAgICAgICAgLnBhZ2UtbGluayB7XG4gICAgICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICBzdHItcmVwbGFjZSgkY2hldnJvbi1sZWZ0LCAnY3VycmVudENvbG9yJywgJGNvbG9yX3ZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAnIycsXG4gICAgICAgICAgICAgICAgICAgICAgJyUyMydcbiAgICAgICAgICAgICAgICAgICAgKSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRm9yIE5hdiBQaWxsc1xuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnIGFuZCAkY29sb3JfbmFtZSAhPSAnZGFyaycpIHtcbiAgICAgICAgLm5hdi1waWxsLSN7JGNvbG9yLW5hbWV9IHtcbiAgICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMThweCAtNHB4IHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjY1KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBQcm9ncmVzcyBCYXJzXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLnByb2dyZXNzLWJhci0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3JfdmFsdWUsIDAuMTIpO1xuXG4gICAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRpbWVsaW5lXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLnRpbWVsaW5lIHtcbiAgICAgICAgICAudGltZWxpbmUtcG9pbnQtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgIHN0cm9rZTogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogJGNvbG9yX3ZhbHVlLCAkYWxwaGE6IDAuMTIpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRGl2aWRlclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5kaXZpZGVyLmRpdmlkZXItI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAgIC5kaXZpZGVyLXRleHQge1xuICAgICAgICAgICAgJjpiZWZvcmUsXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRm9ybSBJbnB1dCBFbGVtZW50c1xuICAgICAgLy8gQ2hlY2tib3ggJiBSYWRpb1xuXG4gICAgICAvLyB0b2RvOiByZW1vdmUgaXQgb25jZSBjb25maXJtXG4gICAgICBpbnB1dDpmb2N1cyB+IC5iZy0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMDc1cmVtICR3aGl0ZSwgMCAwIDAgMC4yMXJlbSAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLy8gQ3VzdG9tIENoZWNrYm94ICYgUmFkaW9cbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAuY3VzdG9tLWNvbnRyb2wtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4gICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLmN1c3RvbS1jaGVja2JveCxcbiAgICAgICAgICAmLmN1c3RvbS1yYWRpbyB7XG4gICAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuICAgICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuICAgICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKCRjb2xvcl92YWx1ZSwgMC40KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjY1KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCb290c3RyYXAgQ3VzdG9tIFN3aXRjaGVzXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLmN1c3RvbS1zd2l0Y2gtI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbGVjdDJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAuc2VsZWN0Mi0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IHtcbiAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgLnRleHQtI3skY29sb3JfbmFtZX0udGV4dC0jeyRjb2xvcl90eXBlfSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJnLSN7JGNvbG9yX25hbWV9LmJnLSN7JGNvbG9yX3R5cGV9IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5ib3JkZXItI3skY29sb3JfbmFtZX0uYm9yZGVyLSN7JGNvbG9yX3R5cGV9IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5ib3JkZXItdG9wLSN7JGNvbG9yX25hbWV9LmJvcmRlci10b3AtI3skY29sb3JfdHlwZX0ge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5ib3JkZXItYm90dG9tLSN7JGNvbG9yX25hbWV9LmJvcmRlci1ib3R0b20tI3skY29sb3JfdHlwZX0ge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5ib3JkZXItbGVmdC0jeyRjb2xvcl9uYW1lfS5ib3JkZXItbGVmdC0jeyRjb2xvcl90eXBlfSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5ib3JkZXItcmlnaHQtI3skY29sb3JfbmFtZX0uYm9yZGVyLXJpZ2h0LSN7JGNvbG9yX3R5cGV9IHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5vdmVybGF5LSN7JGNvbG9yX25hbWV9Lm92ZXJsYXktI3skY29sb3JfdHlwZX0ge1xuICAgICAgICBAaW5jbHVkZSBiZy1vcGFjaXR5KCRjb2xvcl92YWx1ZSwgMC42KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBiZy1vcGFjaXR5KCRjb2xvciwgJG9wYWNpdHk6IDEpIHtcbiAgYmFja2dyb3VuZDogJGNvbG9yOyAvKiBUaGUgRmFsbGJhY2sgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cbiIsIi8vIE92ZXJyaWRlcyB1c2VyIF92YXJpYWJsZXMtY29tcG9uZW50c1xuQGltcG9ydCAnLi4vLi4vYm9vdHN0cmFwLWV4dGVuZGVkL2luY2x1ZGUnO1xuXG4vLyBHb29nbGUgQ29sb3IgUGFsZXR0ZSBkZWZpbmVkOiBodHRwOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvc3R5bGUvY29sb3IuaHRtbFxuXG4kd2hpdGUtY29sb3I6IChcbiAgJ2Jhc2UnOiAjZmZmZmZmXG4pO1xuJGJsYWNrLWNvbG9yOiAoXG4gICdiYXNlJzogIzAwMDAwMFxuKTtcbiRkYXJrLWNvbG9yOiAoXG4gICdiYXNlJzogdGhlbWUtY29sb3IoJ2RhcmsnKSxcbiAgJ2Rhcmtlbi0xJzogIzM0MzQzNCxcbiAgJ2Rhcmtlbi0yJzogIzFlMWUxZSxcbiAgJ2Rhcmtlbi0zJzogIzYyNjI2MlxuKTtcbiRsaWdodC1jb2xvcjogKFxuICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdsaWdodCcpXG4pO1xuXG4kcHJpbWFyeS1jb2xvcjogKFxuICAnbGlnaHRlbi01JzogbGlnaHRlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAyNSUpLFxuICAnbGlnaHRlbi00JzogbGlnaHRlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAyMCUpLFxuICAnbGlnaHRlbi0zJzogbGlnaHRlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAxNSUpLFxuICAnbGlnaHRlbi0yJzogbGlnaHRlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAxMCUpLFxuICAnbGlnaHRlbi0xJzogbGlnaHRlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCA1JSksXG4gICdiYXNlJzogdGhlbWUtY29sb3IoJ3ByaW1hcnknKSxcbiAgJ2Rhcmtlbi0xJzogZGFya2VuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDUlKSxcbiAgJ2Rhcmtlbi0yJzogZGFya2VuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDEwJSksXG4gICdkYXJrZW4tMyc6IGRhcmtlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAxNSUpLFxuICAnZGFya2VuLTQnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3ByaW1hcnknKSwgMjAlKSxcbiAgJ2FjY2VudC0xJzogI2JkZmRmZixcbiAgJ2FjY2VudC0yJzogIzhhZmJmZixcbiAgJ2FjY2VudC0zJzogIzU3ZmFmZixcbiAgJ2FjY2VudC00JzogIzNkZjlmZlxuKTtcbiRzZWNvbmRhcnktY29sb3I6IChcbiAgJ2xpZ2h0ZW4tNSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAyNSUpLFxuICAnbGlnaHRlbi00JzogbGlnaHRlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDIwJSksXG4gICdsaWdodGVuLTMnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgMTUlKSxcbiAgJ2xpZ2h0ZW4tMic6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAxMCUpLFxuICAnbGlnaHRlbi0xJzogbGlnaHRlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDUlKSxcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksXG4gICdkYXJrZW4tMSc6IGRhcmtlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDUlKSxcbiAgJ2Rhcmtlbi0yJzogZGFya2VuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgMTAlKSxcbiAgJ2Rhcmtlbi0zJzogZGFya2VuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgMTUlKSxcbiAgJ2Rhcmtlbi00JzogZGFya2VuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgMjAlKVxuKTtcbiRzdWNjZXNzLWNvbG9yOiAoXG4gICdsaWdodGVuLTUnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDI1JSksXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDIwJSksXG4gICdsaWdodGVuLTMnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDE1JSksXG4gICdsaWdodGVuLTInOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDEwJSksXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDUlKSxcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcignc3VjY2VzcycpLFxuICAnZGFya2VuLTEnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgNSUpLFxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMTAlKSxcbiAgJ2Rhcmtlbi0zJzogZGFya2VuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDE1JSksXG4gICdkYXJrZW4tNCc6IGRhcmtlbih0aGVtZS1jb2xvcignc3VjY2VzcycpLCAyMCUpLFxuICAnYWNjZW50LTEnOiAjZTFmZmYxLFxuICAnYWNjZW50LTInOiAjYWVmZmQ5LFxuICAnYWNjZW50LTMnOiAjN2JmZmMxLFxuICAnYWNjZW50LTQnOiAjNjJmZmI1XG4pO1xuJGluZm8tY29sb3I6IChcbiAgJ2xpZ2h0ZW4tNSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMjUlKSxcbiAgJ2xpZ2h0ZW4tNCc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMjAlKSxcbiAgJ2xpZ2h0ZW4tMyc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMTUlKSxcbiAgJ2xpZ2h0ZW4tMic6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMTAlKSxcbiAgJ2xpZ2h0ZW4tMSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgNSUpLFxuICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdpbmZvJyksXG4gICdkYXJrZW4tMSc6IGRhcmtlbih0aGVtZS1jb2xvcignaW5mbycpLCA1JSksXG4gICdkYXJrZW4tMic6IGRhcmtlbih0aGVtZS1jb2xvcignaW5mbycpLCAxMCUpLFxuICAnZGFya2VuLTMnOiBkYXJrZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMTUlKSxcbiAgJ2Rhcmtlbi00JzogZGFya2VuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDIwJSksXG4gICdhY2NlbnQtMSc6ICNmZWZmZmYsXG4gICdhY2NlbnQtMic6ICNjYmY1ZmYsXG4gICdhY2NlbnQtMyc6ICM5OGVjZmYsXG4gICdhY2NlbnQtNCc6ICM3ZmU3ZmZcbik7XG4kd2FybmluZy1jb2xvcjogKFxuICAnbGlnaHRlbi01JzogbGlnaHRlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAyNSUpLFxuICAnbGlnaHRlbi00JzogbGlnaHRlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAyMCUpLFxuICAnbGlnaHRlbi0zJzogbGlnaHRlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAxNSUpLFxuICAnbGlnaHRlbi0yJzogbGlnaHRlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAxMCUpLFxuICAnbGlnaHRlbi0xJzogbGlnaHRlbih0aGVtZS1jb2xvcignd2FybmluZycpLCA1JSksXG4gICdiYXNlJzogdGhlbWUtY29sb3IoJ3dhcm5pbmcnKSxcbiAgJ2Rhcmtlbi0xJzogZGFya2VuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDUlKSxcbiAgJ2Rhcmtlbi0yJzogZGFya2VuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDEwJSksXG4gICdkYXJrZW4tMyc6IGRhcmtlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAxNSUpLFxuICAnZGFya2VuLTQnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3dhcm5pbmcnKSwgMjAlKSxcbiAgJ2FjY2VudC0xJzogI2ZmZjVlZixcbiAgJ2FjY2VudC0yJzogI2ZmZTVkOCxcbiAgJ2FjY2VudC0zJzogI2ZmZjZmMyxcbiAgJ2FjY2VudC00JzogI2ZmZTNkYVxuKTtcbiRkYW5nZXItY29sb3I6IChcbiAgJ2xpZ2h0ZW4tNSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAyNSUpLFxuICAnbGlnaHRlbi00JzogbGlnaHRlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDIwJSksXG4gICdsaWdodGVuLTMnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgMTUlKSxcbiAgJ2xpZ2h0ZW4tMic6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAxMCUpLFxuICAnbGlnaHRlbi0xJzogbGlnaHRlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDUlKSxcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcignZGFuZ2VyJyksXG4gICdkYXJrZW4tMSc6IGRhcmtlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDUlKSxcbiAgJ2Rhcmtlbi0yJzogZGFya2VuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgMTAlKSxcbiAgJ2Rhcmtlbi0zJzogZGFya2VuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgMTUlKSxcbiAgJ2Rhcmtlbi00JzogZGFya2VuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgMjAlKSxcbiAgJ2FjY2VudC0xJzogI2ZmZWVmMSxcbiAgJ2FjY2VudC0yJzogI2ZmZDZkYixcbiAgJ2FjY2VudC0zJzogI2ZmZWNlZSxcbiAgJ2FjY2VudC00JzogI2ZmZDNkN1xuKTtcblxuJGNvbG9yczogKFxuICAnd2hpdGUnOiAkd2hpdGUtY29sb3IsXG4gICdibGFjayc6ICRibGFjay1jb2xvcixcbiAgJ2RhcmsnOiAkZGFyay1jb2xvcixcbiAgJ2xpZ2h0JzogJGxpZ2h0LWNvbG9yLFxuICAncHJpbWFyeSc6ICRwcmltYXJ5LWNvbG9yLFxuICAnc2Vjb25kYXJ5JzogJHNlY29uZGFyeS1jb2xvcixcbiAgJ3N1Y2Nlc3MnOiAkc3VjY2Vzcy1jb2xvcixcbiAgJ2luZm8nOiAkaW5mby1jb2xvcixcbiAgJ3dhcm5pbmcnOiAkd2FybmluZy1jb2xvcixcbiAgJ2Rhbmdlcic6ICRkYW5nZXItY29sb3Jcbik7XG4iLCIvLyBGb3IgYWxlcnQncyBoZWFkaW5nIGJveC1zaGFkb3dcblxuQG1peGluIGFsZXJ0LWhlYWRpbmctYnMoJGNvbG9yKSB7XG4gIGJveC1zaGFkb3c6IHJnYmEoJGNvbG9yLCAwLjQpIDBweCA2cHggMTVweCAtN3B4O1xufVxuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLnNjc3Ncbi8vICBEZXNjcmlwdGlvbjogQ3VzdG9tIG92ZXJyaWRlcyBvZiBCb290c3RyYXAgdmFyaWFibGVzXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuLy8gIEF1dGhvcjogUElYSU5WRU5UXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gQ29sb3Igc3lzdGVtXG5cbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTUwOiAjZjZmNmY2ICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjYmFiZmM3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVzdFxuJGdyYXktMjAwOiAjZWRlZGVkICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVyXG4kZ3JheS0zMDA6ICNkYWUxZTcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0XG4kZ3JheS00MDA6ICM2MzYzNjMgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICNiOGMyY2MgIWRlZmF1bHQ7IC8vICRncmF5XG4kZ3JheS03MDA6ICM0ZTUxNTQgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMxZTFlMWUgIWRlZmF1bHQ7IC8vICRncmF5LWRhcmtcbiRncmF5LTkwMDogIzJhMmUzMCAhZGVmYXVsdDtcbiRibGFjazogIzIyMjkyZiAhZGVmYXVsdDsgLy8gMjMxZjQ4IDIyMjkyZlxuXG4kcHVycGxlOiAjNzM2N2YwICFkZWZhdWx0OyAvLyRwcmltYXJ5XG4kZ3JlZW46ICMyOGM3NmYgIWRlZmF1bHQ7IC8vJHN1Y2Nlc3NcbiRibHVlOiAjMDBjZmU4ICFkZWZhdWx0OyAvLyRpbmZvXG4kb3JhbmdlOiAjZmY5ZjQzICFkZWZhdWx0OyAvLyR3YXJuaW5nXG4kcmVkOiAjZWE1NDU1ICFkZWZhdWx0OyAvLyRkYW5nZXJcblxuJHByaW1hcnk6ICRwdXJwbGUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjODI4NjhiICFkZWZhdWx0O1xuJGluZm86ICRibHVlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICRvcmFuZ2UgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTUwICFkZWZhdWx0O1xuJGRhcms6ICM0YjRiNGIgIWRlZmF1bHQ7XG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29udGFpbmVyLW1heC13aWR0aHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcbikgIWRlZmF1bHQ7XG5cbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweCxcbiAgeHhsOiAxNDQwcHggLy8gQ3VzdG9tIHh4bCBzaXplXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjb250YWluZXItbWF4LXdpZHRoc1xuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZVxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAoXG4gICAgMDogMCxcbiAgICAyNTogKFxuICAgICAgJHNwYWNlciAqIDAuMjVcbiAgICApLFxuICAgIDUwOiAoXG4gICAgICAkc3BhY2VyICogMC41XG4gICAgKSxcbiAgICA3NTogKFxuICAgICAgJHNwYWNlciAqIDAuNzVcbiAgICApLFxuICAgIDE6IChcbiAgICAgICRzcGFjZXJcbiAgICApLFxuICAgIDI6IChcbiAgICAgICRzcGFjZXIgKiAxLjVcbiAgICApLFxuICAgIDM6IChcbiAgICAgICRzcGFjZXIgKiAzXG4gICAgKSxcbiAgICA0OiAoXG4gICAgICAkc3BhY2VyICogMy41XG4gICAgKSxcbiAgICA1OiAoXG4gICAgICAkc3BhY2VyICogNFxuICAgIClcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG4kYm9keS1iZzogI2Y4ZjhmOCAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAjNmU2YjdiICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkbGluay1jb2xvciwgNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWd1dHRlci13aWR0aDogMnJlbSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGxpbmUtaGVpZ2h0LWxnOiAxLjI1ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXNtOiAxICFkZWZhdWx0O1xuXG4kYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLWNvbG9yOiAjZWJlOWYxICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXM6IDAuMzU3cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNnJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xuXG4vLyBzaGFkb3dcbiRib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG4vLyBUeXBvZ3JhcGh5XG5cbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ01vbnRzZXJyYXQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdNb250c2VycmF0JywgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWYgIWRlZmF1bHQ7XG5cbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1zaXplLWJhc2U6IDFyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxnOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogY2VpbCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDUwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6IDYwMCAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNDUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjcxNCAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjg2ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4wNyAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBpbmhlcml0ICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAjNWU1ODczICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRkaXNwbGF5My13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuXG4kbGVhZC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMTQgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAjYjliOWMzICFkZWZhdWx0O1xuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWNlbGwtcGFkZGluZzogMC43MnJlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWFjY2VudC1iZzogI2ZhZmFmYyAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogI2Y2ZjZmOSAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XG4kdGFibGUtaGVhZC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1iZzogJGRhcmsgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICM0MDQwNDAgIWRlZmF1bHQ7XG5cbiR0YWJsZS10aC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4kYnRuLXBhZGRpbmcteTogMC43ODZyZW0gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogMS41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMnJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuNDg2cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC45ICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogMC44cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6IDJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6IDEgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMC4zNThyZW0gIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwcywgYm9yZGVyIDBzICFkZWZhdWx0O1xuXG4vLyBGb3Jtc1xuJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjogI2Q4ZDZkZTtcbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAwLjI4NTdyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXk6IDAuNDM4cmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXNtOiAwLjE4OHJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206IDAuODU3cmVtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAxLjE0M3JlbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNlZmVmZWYgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0OiAyLjcxNHJlbSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtc206IDIuMTQycmVtICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogMy4yODU3cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6IHdoaXRlICFkZWZhdWx0O1xuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMHMsIGJvcmRlci1jb2xvciAwcyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6IDNweCAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6IHdoaXRlICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDkuNSA3LjUnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScwLjc1IDQuMzUgNC4xOCA2Ljc1IDguNzUgMC43NScgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6JTIzZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS41cHgnLyUzRSUzQy9zdmclM0VcIik7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1taW51cyclM0UlM0NsaW5lIHgxPSc1JyB5MT0nMTInIHgyPScxOScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiKTtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjY1KTtcblxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiBub25lO1xuXG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogMXJlbSAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogMTBweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4vLyAkY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWRpdmlkZXItYmc6IHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tc3BhY2VyOiAwICFkZWZhdWx0O1xuJHppbmRleC1kcm9wZG93bjogMTAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDVweCAyNXB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxLjI4cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bl9zcGFjaW5nOiAwLjVyZW07IC8vIGN1c3RvbVxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAwLjg1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjU1NzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDFyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206IDAuNDQzcmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAwLjc0NXJlbSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogI2YzZjJmNyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb250LXNpemUtbGc6IDEuMTRyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuJHBhZ2luYXRpb24tZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG5cbi8vIENhcmRzXG4kY2FyZC1zcGFjZXIteTogMS41cmVtICFkZWZhdWx0O1xuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6IDAuNDI4cmVtICFkZWZhdWx0O1xuXG4vL0FsZXJ0c1xuXG4kYWxlcnQtcGFkZGluZy15OiAwLjcxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiA3MDAgIWRlZmF1bHQ7XG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBOYXYgdGFic1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogMC4yNSAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4vLyBuYXZiYXJcblxuJGZsb2F0aW5nLW5hdi1tYXJnaW46IDEuM3JlbTtcblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtYmc6ICMzMjMyMzIgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6IDAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogMC43NzVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAxICFkZWZhdWx0O1xuJHRvb2x0aXAtbWF4LXdpZHRoOiAyMjBweCAhZGVmYXVsdDtcblxuLy8gUG9wb3ZlcnNcblxuJHBvcG92ZXItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogMS4yMXJlbSAhZGVmYXVsdDtcblxuLy8gVG9hc3RzXG5cbiR0b2FzdC1tYXgtd2lkdGg6IDM4MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogMS4xNHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXk6IDAuMTVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcbiR0b2FzdC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6IDAuMjg2cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKCRibGFjaywgMC4wOCkgIWRlZmF1bHQ7XG5cbiR0b2FzdC1oZWFkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIFByb2dyZXNzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6IDAuODU3cmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6IDVyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAwLjg1NyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogcmdiYSgkcHJpbWFyeSwgMC4xMikgIWRlZmF1bHQ7XG5cbi8vIEJyZWFkY3J1bWJzXG5cbiRicmVhZGNydW1iLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6IDAuNnJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogMCAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAwICFkZWZhdWx0O1xuXG4vLyBDYXJvdXNlbFxuXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnRcIj48cG9seWxpbmUgcG9pbnRzPVwiMTUgMTggOSAxMiAxNSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodFwiPjxwb2x5bGluZSBwb2ludHM9XCI5IDE4IDE1IDEyIDkgNlwiPjwvcG9seWxpbmU+PC9zdmc+JykgIWRlZmF1bHQ7XG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMCAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcblxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XG5cbi8vIE1vZGFsXG4kbW9kYWwtaW5uZXItcGFkZGluZzogMC44cmVtIDEuNHJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjA1KSAhZGVmYXVsdDtcblxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDAuOHJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAxLjRyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLXhsOiA5NCUgIWRlZmF1bHQ7XG4kbW9kYWwtc206IDQwMHB4ICFkZWZhdWx0O1xuXG4vLyAgICBTbGlkZSBJbiBNb2RhbFxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLXNtOiAyNXJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG4kbW9kYWwtc2xpZGUtaW4td2lkdGg6IDI4cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cbiRtb2RhbC1zbGlkZS1pbi13aWR0aC1sZzogMzByZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGNsb3NlLWZvbnQtd2VpZ2h0OiA0MDAgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6IDkwJSAhZGVmYXVsdDtcbiRrYmQtYmc6ICNlZWUgIWRlZmF1bHQ7XG5cbi8vIFN3aXRjaFxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6IDNyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAxcmVtICFkZWZhdWx0O1xuXG4vL3N2ZyBjb2xvclxuJHN2Zy1jb2xvci1saWdodDogIzYyNjI2MiAhZGVmYXVsdDtcblxuLy8gU1ZHIGljb25zXG4vLyBGb3IgQnJlYWRjcnVtYlxuJGRvdWJsZS1jaGV2cm9uLXJpZ2h0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9ucy1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzEzIDE3IDE4IDEyIDEzIDcnJTNFJTNDL3BvbHlsaW5lJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDE3IDExIDEyIDYgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4vLyBDaGV2cm9uIEljb25zXG4kY2hldnJvbi1sZWZ0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxNSAxOCA5IDEyIDE1IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xuJGNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hldnJvbi11cDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi11cCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE4IDE1IDEyIDkgNiAxNSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hldnJvbi1kb3duOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG5cbiRkb3dubG9hZDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItZG93bmxvYWQnJTNFJTNDcGF0aCBkPSdNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCclM0UlM0MvcGF0aCUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNyAxMCAxMiAxNSAxNyAxMCclM0UlM0MvcG9seWxpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE1JyB4Mj0nMTInIHkyPSczJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xuJHJlbW92ZTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXIteCclM0UlM0NsaW5lIHgxPScxOCcgeTE9JzYnIHgyPSc2JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSc2JyB5MT0nNicgeDI9JzE4JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hlY2s6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hlY2snJTNFJTNDcG9seWxpbmUgcG9pbnRzPScyMCA2IDkgMTcgNCAxMiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2lyY2xlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNpcmNsZSclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0Mvc3ZnJTNFXCI7XG4kaW5mb0ljb246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItaW5mbyclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE2JyB4Mj0nMTInIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOCcgeDI9JzEyLjAxJyB5Mj0nOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcbiR3YXJuaW5nSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1hbGVydC10cmlhbmdsZSclM0UlM0NwYXRoIGQ9J00xMC4yOSAzLjg2TDEuODIgMThhMiAyIDAgMCAwIDEuNzEgM2gxNi45NGEyIDIgMCAwIDAgMS43MS0zTDEzLjcxIDMuODZhMiAyIDAgMCAwLTMuNDIgMHonJTNFJTNDL3BhdGglM0UlM0NsaW5lIHgxPScxMicgeTE9JzknIHgyPScxMicgeTI9JzEzJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNycgeDI9JzEyLjAxJyB5Mj0nMTcnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kbWVudTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIGZpbGw9J25vbmUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2Nzcy1pNmR6cTEnJTNFJTNDbGluZSB4MT0nMycgeTE9JzEyJyB4Mj0nMjEnIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzMnIHkxPSc2JyB4Mj0nMjEnIHkyPSc2JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzE4JyB4Mj0nMjEnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcblxuJGNoYXQtYmctbGlnaHQ6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXpMakF1TVN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2STBVeFJUQkZPVHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XG4kY2hhdC1iZy1kYXJrOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREkxTGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBeU5qQWdNall3SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TmpBZ01qWXdPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0NqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrQ2drdWMzUXdlMlpwYkd3dGNuVnNaVHBsZG1WdWIyUmtPMk5zYVhBdGNuVnNaVHBsZG1WdWIyUmtPMlpwYkd3Nkl6RTNNVUV5TkR0OUNqd3ZjM1I1YkdVK0NqeG5QZ29KUEdjZ2FXUTlJbWt0YkdsclpTMW1iMjlrSWo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpRdU5Dd3hObU13TGpJc01DNDJMREF1TkN3eExqTXNNQzQxTERKb0xUTXVOMnd4TGpJc01pNHpiREF1TlN3d0xqbHNMVEF1TWl3d0xqRldNamhqTWk0eUxERXVOeXd5TGpjc05DNDRMREVzTndvSkNRbGpMVEF1T0N3eExURXVPU3d4TGpjdE15NHlMREV1T1ZZek4yTXRNQzQ1TERNdU5TMDBMakVzTmkwM0xqZ3NObWd0TWpCakxUTXVOaXd3TFRZdU9DMHlMalV0Tnk0M0xUWjJMVEF1TVdNdE1pNDNMVEF1TkMwMExqWXRNeTAwTGpJdE5TNDNZekF1TWkweExqTXNNQzQ1TFRJdU5Td3hMamt0TXk0eUNna0pDWFl0Tmk0NGJDMHdMamd0TVM0MmJDMHdMalF0TUM0NWJEQXVPUzB3TGpSTUxURTNMREU0YUMwelF5MHhOeTR5TERVdU5pMDBMamt0TWk0eUxEY3VOU3d3TGpaRE1UVXVOQ3d5TGpNc01qRXVPU3c0TGpJc01qUXVOQ3d4Tm5vZ1RTMHhNaTQwTERFNFl5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhDZ2tKQ1d3dE15NHhMREV1Tm13d0xqa3NNUzQ0YkRFdU15MHdMamRqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpGak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diREl1TWkweExqRmpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakVLQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4UXpjdU5Dd3lNaXczTGpjc01qSXNPQ3d5TVM0NWJESXVPUzB4TGpOak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3pMakV0TVM0MWJDMHdMamt0TVM0NGJDMHhMalFzTUM0M1l5MHdMamdzTUM0MExURXVOeXd3TGpRdE1pNDJMREF1TVd3dE1pNDRMVEV1TWtNeE1pNHpMREU0TERFeUxqSXNNVGdzTVRJdU1Td3hPR3d3TERBS0NRa0pZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNVXcwTERFNExqRkRNeTQ1TERFNExETXVOeXd4T0N3ekxqWXNNVGhzTUN3d1l5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhUREVzTVRrdU1nb0pDUWxqTFRBdU9Dd3dMalF0TVM0NExEQXVOQzB5TGpjc01Fd3ROQ3d4T0M0eFF5MDBMakVzTVRndE5DNHpMREU0TFRRdU5Dd3hPR3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRk1MVGNzTVRrdU1tTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4Q2drSkNVTXRNVEl1TVN3eE9DMHhNaTR6TERFNExURXlMalFzTVRoTUxURXlMalFzTVRoTUxURXlMalFzTVRoNklFMHRNVEl1TkN3eE5tZ3ROQzQ1UXkweE15NDFMRFV1TVMweExqVXRNQzQzTERrdU5Td3pMakpqTml3eUxqRXNNVEF1Tnl3MkxqZ3NNVEl1T0N3eE1pNDRhQzB5TGpGc0xUQXVNUzB3TGpFS0NRa0pUREU1TGprc01UWklMVEV5TGpSTUxURXlMalFzTVRaNklFMHhOeTQ1TERJekxqZHNNUzQwTFRBdU4yZ3hMak4yTW1ndE16WjJMVEV1TVd3d0xqTXRNQzR5YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZElMVE1LQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3dUREl1TXl3eU0yZ3lMalpzTVM0MExEQXVOMk13TGpjc01DNDBMREV1Tnl3d0xqUXNNaTQxTERCc01TNDNMVEF1TjJnekxqSnNNUzQzTERBdU4wTXhOaTR5TERJMExqRXNNVGN1TVN3eU5DNHhMREUzTGprc01qTXVOM29LQ1FrSklFMHRNVE11T0N3eU4yd3hOaTQwTERRdU9Vd3hPQzQ1TERJM1NDMHhNeTQ0ZWlCTkxURTBMalFzTWpsb01DNHpiREUyTGpjc05Xd3hOaTQzTFRWb01DNHpZekV1Tnl3d0xETXNNUzR6TERNc00zTXRNUzR6TERNdE15d3phQzB6TkdNdE1TNDNMREF0TXkweExqTXRNeTB6Q2drSkNVTXRNVGN1TkN3ek1DNHpMVEUyTGpFc01qa3RNVFF1TkN3eU9Yb2dUUzB4TXk0eExETTNZekF1T0N3eUxqUXNNeTR4TERRc05TNDNMRFJvTWpCak1pNDFMREFzTkM0NExURXVOaXcxTGpjdE5FTXhPQzR5TERNM0xURXpMakVzTXpjdE1UTXVNU3d6TjNvaUx6NEtDUWs4Y0dGMGFDQnBaRDBpY0dGMGFEWmZabWxzYkMxamIzQjVJaUJqYkdGemN6MGljM1F3SWlCa1BTSk5NamcwTGpRc01UWmpNQzR5TERBdU5pd3dMalFzTVM0ekxEQXVOU3d5YUMwekxqZHNNUzR5TERJdU0yd3dMalVzTUM0NWJDMHdMaklzTUM0eFZqSTRZekl1TWl3eExqY3NNaTQzTERRdU9Dd3hMRGNLQ1FrSll5MHdMamdzTVMweExqa3NNUzQzTFRNdU1pd3hMamxXTXpkakxUQXVPU3d6TGpVdE5DNHhMRFl0Tnk0NExEWm9MVEl3WXkwekxqWXNNQzAyTGpndE1pNDFMVGN1TnkwMmRpMHdMakZqTFRJdU55MHdMalF0TkM0MkxUTXROQzR5TFRVdU4yTXdMakl0TVM0ekxEQXVPUzB5TGpVc01TNDVMVE11TWdvSkNRbDJMVFl1T0d3dE1DNDRMVEV1Tm13dE1DNDBMVEF1T1d3d0xqa3RNQzQwVERJME15d3hPR2d0TTJNeUxqZ3RNVEl1TkN3eE5TNHhMVEl3TGpJc01qY3VOUzB4Tnk0MFF6STNOUzQwTERJdU15d3lPREV1T1N3NExqSXNNamcwTGpRc01UWjZJRTB5TkRjdU5Td3hPQW9KQ1FsakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVE11TVN3eExqWnNNQzQ1TERFdU9Hd3hMak10TUM0M1l6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4Q2drSkNXTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNHlMVEV1TVdNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0NUxURXVNd29KQ1Fsak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRNdU1TMHhMalZzTFRBdU9TMHhMamhzTFRFdU5Dd3dMamRqTFRBdU9Dd3dMalF0TVM0M0xEQXVOQzB5TGpZc01DNHhiQzB5TGpndE1TNHlDZ2tKQ1dNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5DMHdMakZzTUN3d1l5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1Xd3RNaTR6TFRFdU1XTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOUzB3TGpGc01Dd3dDZ2tKQ1dNdE1DNHlMREF0TUM0ekxEQXRNQzQwTERBdU1Xd3RNaTR5TERFdU1XTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4WXkwd0xqRXRNQzR4TFRBdU15MHdMakV0TUM0MExUQXVNV3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVEl1TWl3eExqRUtDUWtKWXkwd0xqZ3NNQzQwTFRFdU9Dd3dMalF0TWk0M0xEQnNMVEl1TWkweExqRkRNalEzTGprc01UZ3NNalEzTGpjc01UZ3NNalEzTGpVc01UaE1NalEzTGpVc01UaE1NalEzTGpVc01UaDZJRTB5TkRjdU5Td3hObWd0TkM0NVl6TXVPUzB4TUM0NUxERTFMamt0TVRZdU55d3lOaTQ0TFRFeUxqZ0tDUWtKWXpZc01pNHhMREV3TGpjc05pNDRMREV5TGpnc01USXVPR2d0TWk0eGJDMHdMakV0TUM0eGJDMHdMak1zTUM0eFNESTBOeTQxVERJME55NDFMREUyZWlCTk1qYzNMamtzTWpNdU4yd3hMalF0TUM0M2FERXVNM1l5YUMwek5uWXRNUzR4YkRBdU15MHdMakpzTVM0MExUQXVOMmd5TGpZS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpjc01DNDBMREl1Tml3d0xqRnNNUzQzTFRBdU53b0pDUWxvTXk0eWJERXVOeXd3TGpkRE1qYzJMaklzTWpRdU1Td3lOemN1TVN3eU5DNHhMREkzTnk0NUxESXpMamRNTWpjM0xqa3NNak11TjNvZ1RUSTBOaTR5TERJM2JERTJMalFzTkM0NVRESTNPU3d5TjBneU5EWXVNbm9nVFRJME5TNDFMREk1YURBdU0yd3hOaTQzTERWc01UWXVOeTAxYURBdU13b0pDUWxqTVM0M0xEQXNNeXd4TGpNc015d3pjeTB4TGpNc015MHpMRE5vTFRNMFl5MHhMamNzTUMwekxURXVNeTB6TFROVE1qUXpMamtzTWprc01qUTFMalVzTWpsNklFMHlORFl1T1N3ek4yTXdMamdzTWk0MExETXVNU3cwTERVdU5pdzBhREl3WXpJdU5Td3dMRFF1T0MweExqWXNOUzQzTFRRS0NRa0pTREkwTmk0NWVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhOVGt1TlN3eU1XTXRNUzR6TFRNdU5pMDBMamN0TmkwNExqVXRObWd0TkRKakxUTXVPQ3d3TFRjdU1pd3lMalF0T0M0MUxEWmpMVE11TXl3d0xqTXROUzQ0TERNdU1pMDFMalVzTmk0MVl6QXVNaXd5TGprc01pNDJMRFV1TWl3MUxqVXNOUzQxQ2drSkNXTXRNUzQzTERRdU55d3dMamdzT1M0NExEVXVOQ3d4TVM0MVl6RXNNQzR6TERJc01DNDFMRE1zTUM0MWFEUXlZelVzTUN3NUxUUXNPUzA1WXpBdE1TMHdMakl0TWk0eExUQXVOUzB6WXpNdU15MHdMak1zTlM0NExUTXVNaXcxTGpVdE5pNDFDZ2tKQ1VNeE5qUXVOeXd5TXk0MkxERTJNaTQwTERJeExqTXNNVFU1TGpVc01qRjZJRTB4TlRFc01UZG9MVFF5WXkweUxqY3NNQzAxTGpJc01TNDJMVFl1TXl3MGFEVTBMamRETVRVMkxqSXNNVGd1Tml3eE5UTXVOeXd4Tnl3eE5URXNNVGQ2SUUweE5ERXVOeXcwTXdvSkNRbGpNaTR4TFRFdU55d3pMak10TkM0ekxETXVNeTAzYUMweVl6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE5DNHpZekl1TVMweExqY3NNeTR6TFRRdU15d3pMak10TjJndE1tTXdMRE11T1MwekxqRXNOeTAzTERkb0xUUXVNMk15TGpFdE1TNDNMRE11TXkwMExqTXNNeTR6TFRkb0xUSUtDUWtKWXpBc015NDVMVE11TVN3M0xUY3NOMmd0TjJNdE15NDVMREF0TnkwekxqRXROeTAzY3pNdU1TMDNMRGN0TjJnME1tTXpMamtzTUN3M0xETXVNU3czTERkekxUTXVNU3czTFRjc04wZ3hOREV1TjNvZ1RURXdPU3d5TjJNdE15d3dMVFV1T0N3eExqVXROeTQxTERSSU1UQXhDZ2tKQ1dNdE1pNHlMREF0TkMweExqZ3ROQzAwY3pFdU9DMDBMRFF0TkdnMU9HTXlMaklzTUN3MExERXVPQ3cwTERSekxURXVPQ3cwTFRRc05HZ3RNQzQxWXkweExqY3RNaTQxTFRRdU5TMDBMVGN1TlMwMFNERXdPWG9pTHo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTXprc01URTFZelF1TkN3d0xEZ3RNeTQyTERndE9ITXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGhUTXpRdU5pd3hNVFVzTXprc01URTFlaUJOTkRVc01UQTNZekFzTXk0ekxUSXVOeXcyTFRZc05uTXROaTB5TGpjdE5pMDJDZ2tKQ1hNeUxqY3ROaXcyTFRaVE5EVXNNVEF6TGpjc05EVXNNVEEzZWlCTk5ESXNOemgyTFRKb09IWXROa2cwTUdNdE1pNHlMREF0TkN3eExqZ3ROQ3cwZGpFd1NESXliQzB4TGpNc05Fd3lNQ3c1TUdneUxqSnNNeTQ0TERRd2FESTJiRE11T0MwME1FZzFPR3d0TUM0M0xUSk1OVFlzT0RSSU5ESldOemg2Q2drSkNTQk5NemdzTnpSMk1UQm9NbFkzTkdnNGRpMHlhQzA0UXpNNExqa3NOeklzTXpnc056SXVPU3d6T0N3M05Ib2dUVFF3TERnMmFERTBMalpzTUM0M0xESklNakl1T0d3d0xqY3RNa2cwTUhvZ1RUVXpMamdzT1RCSU1qUXVNbXd6TGpZc016aG9Nakl1TkV3MU15NDRMRGt3ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE1qa3NPVEpvTFRaMk5HZ3ROblkwYUMwMmRqRTBhQzB6YkRBdU1pd3liRE11T0N3ek1tZ3pObXd6TGpndE16SnNNQzR5TFRKb0xUTjJMVEUwYUMwMmRpMDBhQzAyZGkwMFNERXlPWG9nVFRFME55d3hNVFIyTFRFeWFDMDBkalJvTTNZNFNERTBOd29KQ1FsNklFMHhORFFzTVRFMGRpMDJhQzAwZGpaSU1UUTBlaUJOTVRNNExERXlNSFl0TVRab0xUUjJNVGt1TWtNeE16VXVOaXd4TWpJdU5Td3hNemNzTVRJeExqUXNNVE00TERFeU1Ib2dUVEV6TWl3eE1qTXVPRll4TURCb0xUUjJNak11T0FvSkNRbERNVEk1TGpNc01USTBMakVzTVRNd0xqY3NNVEkwTGpFc01UTXlMREV5TXk0NGVpQk5NVEkyTERFeU15NHlWakV3TkdndE5IWXhOa014TWpNc01USXhMalFzTVRJMExqUXNNVEl5TGpVc01USTJMREV5TXk0eWVpQk5NVEl3TERFeE5IWXRObWd0TkhZMlNERXlNSG9nVFRFeE5Dd3hNVFIyTFRob013b0pDUWwyTFRSb0xUUjJNVEpJTVRFMGVpQk5NVFF4TERFd01uWXROR2d0TkhZMGFETjJOR2d4VmpFd01ub2dUVEV6TlN3eE1ESjJMVGhvTFRSMk5HZ3pkalJJTVRNMWVpQk5NVEk1TERrNGRpMDBhQzAwZGpob01YWXRORWd4TWpsNklFMHhNak1zTVRBeWRpMDBhQzAwZGpob01YWXRORWd4TWpONkNna0pDU0JOTVRNd0xERXlObU0xTGprc01Dd3hNQzQ1TFRRdU1pd3hNUzQ0TFRFd2FEY3VPV3d0TXk0MUxETXdhQzB6TWk0MGJDMHpMalV0TXpCb055NDVRekV4T1M0eExERXlNUzQ0TERFeU5DNHhMREV5Tml3eE16QXNNVEkyZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweU1USXNPRFoyTW1ndE5IWXRNa2d5TVRKNklFMHlNVFlzT0Rab0xUSjJNbWd5VmpnMmVpQk5NVGsyTERnMlRERTVOaXc0Tm1NdE1pNDNMREF1TnkwMExqVXNNeTR6TFRNdU9TdzJZekF1TkN3eExqZ3NNUzQyTERNdU1pd3pMak1zTXk0NENna0pDV3d3TGpFc01DNHliREV1TVN3MExqVmpNQzR5TERBdU9Td3hMREV1TlN3eExqa3NNUzQxYkRBc01HdzNMREkwTGpaak1DNHlMREF1T1N3eExERXVOQ3d4TGprc01TNDBhRFZqTUM0NUxEQXNNUzQzTFRBdU5pd3hMamt0TVM0MGJEY3RNalF1Tm1Nd0xqa3NNQ3d4TGpjdE1DNDJMREV1T1MweExqVUtDUWtKYkRFdU1TMDBMalZzTUM0eExUQXVNbU15TGpZdE1DNDVMRFF1TVMwekxqY3NNeTR5TFRZdU0yTXRNQzQyTFRFdU55MHlMVE10TXk0NExUTXVNMVk0Tm1Nd0xUY3VOeTAyTGpNdE1UUXRNVFF0TVRSVE1UazJMRGM0TGpNc01UazJMRGcyZWlCTk1qQXdMRGcyYURaMk1tZ3RPUW9KQ1FsakxURXVOeXd3TFRNc01TNHpMVE1zTTNNeExqTXNNeXd6TEROb01qWmpNUzQzTERBc015MHhMak1zTXkwemN5MHhMak10TXkwekxUTm9MVE4yTFRKb01tTXdMVFl1TmkwMUxqUXRNVEl0TVRJdE1USnpMVEV5TERVdU5DMHhNaXd4TWtneU1EQjZJRTB4T1RndU5pd3hNREJzTFRFdE5HZ3lOQzQ1Q2drSkNXd3RNU3cwU0RFNU9DNDJlaUJOTWpBM0xqVXNNVEkyYkMwMkxqa3RNalJvTVRndU4yd3ROaTQ1TERJMFNESXdOeTQxZWlCTk1UVXdMREkwTW1NeE1pNHlMREFzTWpJdE9TNDRMREl5TFRJeWN5MDVMamd0TWpJdE1qSXRNakp6TFRJeUxEa3VPQzB5TWl3eU1nb0pDUWxUTVRNM0xqZ3NNalF5TERFMU1Dd3lOREo2SUUweE56UXNNakl3WXpBc01UTXVNeTB4TUM0M0xESTBMVEkwTERJMGN5MHlOQzB4TUM0M0xUSTBMVEkwYkRBc01HTXdMVEV6TGpNc01UQXVOeTB5TkN3eU5DMHlORk14TnpRc01qQTJMamNzTVRjMExESXlNSG9nVFRFME5TNDJMREl6Tnk0M0Nna0pDV3d5TFRBdU9XTXhMalV0TUM0MkxETXVNaTB3TGpZc05DNDNMREJzTWl3d0xqbGpNQzQ1TERBdU5Dd3lMREFzTWk0MUxUQXVPR3d4TGpFdE1TNDVZekF1T0MweExqUXNNaTR5TFRJdU5Dd3pMamd0TWk0NGJESXVNUzB3TGpWak1TMHdMaklzTVM0MkxURXVNU3d4TGpVdE1pNHhiQzB3TGpJdE1pNHlDZ2tKQ1dNdE1DNHhMVEV1Tml3d0xqUXRNeTR5TERFdU5DMDBMalZzTVM0MExURXVOMk13TGpjdE1DNDRMREF1TnkweExqa3NNQzB5TGpac0xURXVOQzB4TGpkakxURXVNUzB4TGpJdE1TNDJMVEl1T0MweExqUXROQzQxYkRBdU1pMHlMakpqTUM0eExURXRNQzQyTFRFdU9TMHhMall0TWk0eENna0pDV3d0TWk0eExUQXVOV010TVM0MkxUQXVOQzB6TFRFdU5DMHpMamd0TWk0NGJDMHhMakV0TVM0NVl5MHdMalV0TUM0NUxURXVOaTB4TGpJdE1pNDFMVEF1T0d3dE1pd3dMamxqTFRFdU5Td3dMall0TXk0eUxEQXVOaTAwTGpjc01Hd3RNaTB3TGpsakxUQXVPUzB3TGpRdE1pd3dMVEl1TlN3d0xqZ0tDUWtKYkMweExESXVNV010TUM0NExERXVOQzB5TGpJc01pNDBMVE11T0N3eUxqaHNMVEl1TVN3d0xqVmpMVEVzTUM0eUxURXVOaXd4TGpFdE1TNDFMREl1TVd3d0xqSXNNaTR5WXpBdU1Td3hMall0TUM0MExETXVNaTB4TGpRc05DNDFiQzB4TGpRc01TNDNDZ2tKQ1dNdE1DNDNMREF1T0Mwd0xqY3NNUzQ1TERBc01pNDJiREV1TkN3eExqZGpNUzR4TERFdU1pd3hMallzTWk0NExERXVOQ3cwTGpWc0xUQXVNaXd5TGpKakxUQXVNU3d4TERBdU5pd3hMamtzTVM0MkxESXVNV3d5TGpFc01DNDFZekV1Tml3d0xqUXNNeXd4TGpRc015NDRMREl1T0d3eExqRXNNUzQ1Q2drSkNVTXhORE11Tml3eU16Y3VPQ3d4TkRRdU55d3lNemd1TVN3eE5EVXVOaXd5TXpjdU4wd3hORFV1Tml3eU16Y3VOM29nVFRFME9DNDBMREl6T0M0M1l6RXRNQzQwTERJdU1TMHdMalFzTXk0eExEQnNNaXd3TGpsak1TNDRMREF1T0N3MExEQXVNU3cxTFRFdU5td3hMakV0TVM0NUNna0pDV013TGpZdE1DNDVMREV1TlMweExqWXNNaTQxTFRFdU9Hd3lMakV0TUM0MVl6RXVPUzB3TGpRc015NHpMVEl1TXl3ekxqRXROQzR5YkMwd0xqSXRNaTR5WXkwd0xqRXRNUzR4TERBdU15MHlMaklzTVMwemJERXVOQzB4TGpkak1TNHpMVEV1TlN3eExqTXRNeTQzTERBdE5TNHliQzB4TGpRdE1TNDNDZ2tKQ1dNdE1DNDNMVEF1T0MweExqRXRNUzQ1TFRFdE0yd3dMakl0TWk0eVl6QXVNaTB5TFRFdU1TMHpMamd0TXk0eExUUXVNbXd0TWk0eExUQXVOV010TVM0eExUQXVNaTB5TFRBdU9TMHlMalV0TVM0NGJDMHhMakV0TVM0NVl5MHhMVEV1TnkwekxqSXRNaTQwTFRVdE1TNDJiQzB5TERBdU9Rb0pDUWxqTFRFc01DNDBMVEl1TVN3d0xqUXRNeTR4TERCc0xUSXRNQzQ1WXkweExqZ3RNQzQ0TFRRdE1DNHhMVFVzTVM0MmJDMHhMakVzTVM0NVl5MHdMallzTUM0NUxURXVOU3d4TGpZdE1pNDFMREV1T0d3dE1pNHhMREF1TldNdE1TNDVMREF1TkMwekxqTXNNaTR6TFRNdU1TdzBMakpzTUM0eUxESXVNZ29KQ1Fsak1DNHhMREV1TVMwd0xqTXNNaTR5TFRFc00yd3RNUzQwTERFdU4yTXRNUzR6TERFdU5TMHhMak1zTXk0M0xEQXNOUzR5YkRFdU5Dd3hMamRqTUM0M0xEQXVPQ3d4TGpFc01TNDVMREVzTTJ3dE1DNHlMREl1TW1NdE1DNHlMRElzTVM0eExETXVPQ3d6TGpFc05DNHliREl1TVN3d0xqVUtDUWtKWXpFdU1Td3dMaklzTWl3d0xqa3NNaTQxTERFdU9Hd3hMakVzTVM0NVl6RXNNUzQzTERNdU1pd3lMalFzTlN3eExqWk1NVFE0TGpRc01qTTRMamQ2SUUweE5USXNNakEzWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbFRNVFV5TERJd055NDJMREUxTWl3eU1EZDZJRTB4TlRnc01qQTVZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qQTVMallzTVRVNExESXdPWG9nVFRFME55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNUW9KQ1FsekxUQXVOQ3d4TFRFc01WTXhORGNzTWpFd0xqWXNNVFEzTERJeE1Ib2dUVEUwTVN3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTVN3eU1UQXVOaXd4TkRFc01qRXdlaUJOTVRRMExESXdOV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKY3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBOQ3d5TURVdU5pd3hORFFzTWpBMWVpQk5NVE0yTERJeE0yTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE0yTERJeE15NDJMREV6Tml3eU1UTjZJRTB4TXprc01qRTVDZ2tKQ1dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTVMREl4T1M0MkxERXpPU3d5TVRsNklFMHhNemtzTWpJMVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhNemtzTWpJMUxqWXNNVE01TERJeU5Yb0tDUWtKSUUweE5ETXNNak15WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5ETXNNak15TGpZc01UUXpMREl6TW5vZ1RURTBPQ3d5TXpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eENna0pDVk14TkRnc01qTXdMallzTVRRNExESXpNSG9nVFRFMU15d3lNelJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFMU15d3lNelF1Tml3eE5UTXNNak0wZWlCTk1UVTNMREl5T0dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Q2drSkNYTXRNQzQwTERFdE1Td3hVekUxTnl3eU1qZ3VOaXd4TlRjc01qSTRlaUJOTVRZekxESXlOR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRZekxESXlOQzQyTERFMk15d3lNalI2SUUweE5Ua3NNakl4WXpBdE1DNDJMREF1TkMweExERXRNUW9KQ1Fsek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFU1TERJeU1TNDJMREUxT1N3eU1qRjZJRTB4TmpNc01qRTRZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TmpNc01qRTRMallzTVRZekxESXhPSG9nVFRFMU9Dd3lNVFFLQ1FrSll6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpFMExqWXNNVFU0TERJeE5Ib2dUVEV6TkN3eU1qQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekV6TkN3eU1qQXVOaXd4TXpRc01qSXdlZ29KQ1FrZ1RURTFNQ3d5TWpWak1pNDRMREFzTlMweUxqSXNOUzAxY3kweUxqSXROUzAxTFRWekxUVXNNaTR5TFRVc05WTXhORGN1TWl3eU1qVXNNVFV3TERJeU5Yb2dUVEUxTnl3eU1qQmpNQ3d6TGprdE15NHhMRGN0Tnl3M2N5MDNMVE11TVMwM0xUZHpNeTR4TFRjc055MDNDZ2tKQ1ZNeE5UY3NNakUyTGpFc01UVTNMREl5TUhvZ1RUSTBNeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lORE42SUUweU5qSXNNakF3WXpBdE1DNDJMREF1TkMweExERXRNV2d5Q2drSkNXTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa015TmpJdU5Dd3lNREVzTWpZeUxESXdNQzQyTERJMk1pd3lNREI2SUUweU5EZ3NNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRFS0NRa0pTREkwT0hvZ1RUSXlNeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lNak42SUUweU1qZ3NNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURJS0NRa0pZekF1Tml3d0xERXRNQzQwTERFdE1YTXRNQzQwTFRFdE1TMHhTREl5T0hvZ1RUSXpOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNak0zTGpRc01qRXhMREl6Tnl3eU1UQXVOaXd5TXpjc01qRXdlZ29KQ1FrZ1RUSTFNaXd5TVRGak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNalV5TGpRc01qRXlMREkxTWl3eU1URXVOaXd5TlRJc01qRXhlaUJOTWpZMExESXdPV010TUM0MkxEQXRNU3d3TGpRdE1Td3hjekF1TkN3eExERXNNV2d5Q2drSkNXTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lOalI2SUUweU5UTXNNVGsxWXpBdE1DNDJMREF1TkMweExERXRNV2d5WXpBdU5pd3dMREVzTUM0MExERXNNWE10TUM0MExERXRNU3d4YUMweVF6STFNeTQwTERFNU5pd3lOVE1zTVRrMUxqWXNNalV6TERFNU5Yb0tDUWtKSUUweU16UXNNVGsxWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU1qTTBlaUJOTWpRd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1Fsb0xUSkRNalF3TGpRc01qQXhMREkwTUN3eU1EQXVOaXd5TkRBc01qQXdlaUJOTWpFMUxESXhOV013TFRBdU5Td3dMVEF1T1N3d0xURXVOR010TWk0MUxURXVNUzB6TGpjdE5DMHlMall0Tmk0Mll6QXVNaTB3TGpVc01DNDFMVEVzTUM0NUxURXVOR010TUM0NUxUSXNNQzAwTGpJc01TNDVMVFV1TWdvSkNRbGpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNR013TGpRdE1DNDFMREF1T1Mwd0xqa3NNUzQxTFRFdU1XTXdMalV0TWk0M0xETXVNUzAwTGpVc05TNDRMVFF1TVdNd0xqY3NNQzR4TERFdU5Dd3dMalFzTWl3d0xqaGpOUzR6TFRNdU9Dd3hNUzQyTFRVdU9Td3hPQzR5TFRVdU9Rb0pDUWxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqbGpNaTR6TFRFdU5pdzFMalF0TVN3M0xERXVNMk13TGpRc01DNDJMREF1Tnl3eExqTXNNQzQ0TERKak1DNDJMREF1TWl3eExqRXNNQzQyTERFdU5Td3hMakZqTWk0M0xEQXVPQ3cwTGpJc015NDFMRE11TkN3MkxqSnNNQ3d3Q2drSkNXTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMakpqTVM0NUxESXNNUzQ0TERVdU1pMHdMaklzTjJNdE1DNDBMREF1TkMwd0xqa3NNQzQzTFRFdU5Td3hZekFzTUM0MUxEQXNNQzQ1TERBc01TNDBkakZvTFRZeWRpMHhTREl4TlhvZ1RUSXhOUzQ0TERJd055NDRDZ2tKQ1dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMalpqTFRFdU15MHhMVEV1TmkweUxqa3RNQzQyTFRRdU1td3dMREJETWpFMUxESXdOeTQxTERJeE5TNDBMREl3Tnk0M0xESXhOUzQ0TERJd055NDRUREl4TlM0NExESXdOeTQ0ZWlCTk1qRTNMak1zTWpBekxqSUtDUWtKWXkwd0xqUXNNQzQ1TFRBdU55d3hMamd0TVN3eUxqZGpMVEV0TUM0MExURXVOaTB4TGpVdE1TNHpMVEl1TldNd0xqSXRNQzQxTERBdU5pMHdMamtzTVM0eExURXVNa015TVRZdU5Td3lNREl1Tml3eU1UWXVPU3d5TURJdU9Td3lNVGN1TXl3eU1ETXVNa3d5TVRjdU15d3lNRE11TW5vS0NRa0pJRTB5TVRrdU5pd3hPVGd1TjJNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETWpFNExqTXNNVGszTGpZc01qRTRMamtzTVRrNExqTXNNakU1TGpZc01UazRMamNLQ1FrSlRESXhPUzQyTERFNU9DNDNlaUJOTWpJd0xqZ3NNVGszWXpBdU5DMHdMalVzTUM0M0xURXNNUzR4TFRFdU5XTXRNQzR6TFRBdU5TMHdMamt0TUM0M0xURXVOQzB3TGpSekxUQXVOeXd3TGprdE1DNDBMREV1TkVNeU1qQXVNeXd4T1RZdU55d3lNakF1TlN3eE9UWXVPU3d5TWpBdU9Dd3hPVGNLQ1FrSlRESXlNQzQ0TERFNU4zb2dUVEl5Tmk0eExERTVNUzR5WXkweExEQXVPUzB5TERFdU9DMHlMamtzTWk0NFl5MHdMak10TUM0ekxUQXVOeTB3TGpZdE1TNHhMVEF1T0dNd0xqUXRNUzQyTERJdU1TMHlMalVzTXk0M0xUSXVNUW9KQ1FsRE1qSTFMamtzTVRreExqRXNNakkyTERFNU1TNHlMREl5Tmk0eExERTVNUzR5VERJeU5pNHhMREU1TVM0eWVpQk5Nalk0TGpnc01UazBZeTB3TGprdE1TMHhMamt0TVM0NUxUSXVPUzB5TGpoak1TNDFMVEF1Tml3ekxqTXNNQzR4TERNdU9Td3hMamNLQ1FrSll6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME15TmprdU5Td3hPVE11TkN3eU5qa3VNU3d4T1RNdU5pd3lOamd1T0N3eE9UUk1Nalk0TGpnc01UazBlaUJOTWpjd0xqRXNNVGsxTGpWak1DNDBMREF1TlN3d0xqZ3NNU3d4TGpFc01TNDBDZ2tKQ1dNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbk10TUM0M0xUQXVPUzB4TGpJdE1DNDRRekkzTUM0MUxERTVOUzR4TERJM01DNHpMREU1TlM0ekxESTNNQzR4TERFNU5TNDFlaUJOTWpjekxqa3NNakF4TGpSakxUQXVOUzB3TGprdE1TMHhMamd0TVM0MUxUSXVOd29KQ1Fsak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeU56UXVNaXd5TURFdU1Td3lOelFzTWpBeExqSXNNamN6TGprc01qQXhMalI2SUUweU56VXVOaXd5TURVdU9XTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzQ2drSkNXTXdMalF0TUM0ekxEQXVPQzB3TGpZc01TNHlMVEZqTVN3d0xqVXNNUzQwTERFdU55d3hMREl1TjBNeU56WXVOaXd5TURVdU15d3lOell1TWl3eU1EVXVOeXd5TnpVdU5pd3lNRFV1T1hvZ1RUSTNOaTQ0TERJeE1TNDBZeTB3TGpFdE1TNHlMVEF1TkMweUxqUXRNQzQyTFRNdU5nb0pDUWxqTUM0MUxUQXVNU3d3TGprdE1DNDBMREV1TWkwd0xqWkRNamM0TGpRc01qQTRMalVzTWpjNExqRXNNakV3TGpRc01qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSNklFMHlOelVzTWpFMFl5MHdMalV0TVRZdE1UTXVPUzB5T0M0MkxUSTVMamt0TWpndU1Rb0pDUWxqTFRFMUxqTXNNQzQxTFRJM0xqWXNNVEl1T0MweU9DNHhMREk0TGpGSU1qYzFUREkzTlN3eU1UUjZJRTAzTWk0ekxERTVPQzR4WXkwd0xqSXRNQzR6TFRBdU15MHdMamN0TUM0ekxURXVNWFl0TVRKb0xUSjJNVEpqTUN3eUxqSXNNUzQ0TERRc05DdzBDZ2tKQ1dNeExqSXNNQ3d5TGpNdE1DNDFMRE11TVMweExqUmpNQzQyTFRBdU55d3dMamt0TVM0MkxEQXVPUzB5TGpWMkxURXlhQzB5ZGpFeVl6QXNNUzR4TFRBdU9Td3lMVElzTW13d0xEQkROek11TXl3eE9Ua3NOekl1Tnl3eE9UZ3VOeXczTWk0ekxERTVPQzR4ZWlCTk56VXNNVGMyQ2drSkNXTXdMalFzTUN3d0xqY3NNQ3d4TGpFdE1DNHhZekF1TlN3eUxqSXNNaTQyTERNdU5TdzBMamdzTTJNd0xqVXRNQzR4TERFdE1DNHpMREV1TkMwd0xqWmpNUzR4TERJdU1Td3hMamNzTkM0MExERXVOeXcyTGpkMk1qUmpNQ3d6TGpNdE1pNDNMRFl0Tml3MmFDMHpkamtLQ1FrSll6QXNNaTQ0TFRJdU1pdzFMVFVzTlhNdE5TMHlMakl0TlMwMWRpMDVhQzB6WXkwekxqTXNNQzAyTFRJdU55MDJMVFoyTFRJMFl6QXROeTQzTERZdU15MHhOQ3d4TkMweE5FTTNNQ3d4TnpNdU9DdzNNaTR5TERFM05pdzNOU3d4TnpaNklFMDFPQ3d4T1RGMk1USUtDUWtKWXpBc01DNDRMREF1TlN3eExqVXNNUzR5TERFdU9HTXdMamtzTUM0MExERXVPU3d3TGpFc01pNDBMVEF1TjJNd0xqSXRNQzR6TERBdU15MHdMamNzTUM0ekxURXVNWFl0TVRKb01uWXhNbU13TERJdU1pMHhMamNzTkMwekxqa3NOR010TUM0MUxEQXRNUzB3TGpFdE1TNDBMVEF1TWdvSkNRbGpMVEF1TWkwd0xqRXRNQzQwTFRBdU1pMHdMamN0TUM0emRqSXVOV013TERJdU1pd3hMamdzTkN3MExEUm9NVFpqTWk0eUxEQXNOQzB4TGpnc05DMDBkaTB5TkdNd0xURXVOUzB3TGpJdE1pNDVMVEF1TnkwMExqSmpMVEF1TkN3d0xqRXRNQzQ1TERBdU1pMHhMak1zTUM0eUNna0pDV010TWk0eExEQXROQzR4TFRFdU1TMDFMakl0TTJNdE15MHdMakV0TlM0MkxUSXROaTQxTFRRdU9VTTJNaTQwTERFM05DdzFPQ3d4Tnprc05UZ3NNVGcxVmpFNU1Yb2dUVFkzTERJeE5YWTVZekFzTVM0M0xERXVNeXd6TERNc00zTXpMVEV1TXl3ekxUTjJMVGxJTmpkNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRTMHhOeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNVGQ2SUUweUxESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NZ29KQ1Fsak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGSU0wTXlMalFzTWpBeExESXNNakF3TGpZc01pd3lNREI2SUUwdE1USXNNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxURXllZ29KQ1FrZ1RTMHpOeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNemQ2SUUwdE16SXNNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Q2drSkNYTXRNQzQwTFRFdE1TMHhTQzB6TW5vZ1RTMHlNeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVEl5TGpZc01qRXhMVEl6TERJeE1DNDJMVEl6TERJeE1Ib2dUUzA0TERJeE1XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0phREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUY3VOaXd5TVRJdE9Dd3lNVEV1TmkwNExESXhNWG9nVFRRc01qQTVZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTkhvS0NRa0pJRTB0Tnl3eE9UVmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRZdU5pd3hPVFl0Tnl3eE9UVXVOaTAzTERFNU5Yb2dUUzB5Tml3eE9UVmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NZ29KQ1Fsak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxUSTJlaUJOTFRJd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNdE1Ua3VOaXd5TURFdE1qQXNNakF3TGpZdE1qQXNNakF3ZWlCTkxUUTFMREl4TlFvSkNRbGpNQzB3TGpVc01DMHdMamtzTUMweExqUmpMVEl1TlMweExqRXRNeTQzTFRRdE1pNDJMVFl1Tm1Nd0xqSXRNQzQxTERBdU5TMHhMREF1T1MweExqUmpMVEF1T1MweUxEQXROQzR5TERFdU9TMDFMakpqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUFvSkNRbGpNQzQwTFRBdU5Td3dMamt0TUM0NUxERXVOUzB4TGpGak1DNDFMVEl1Tnl3ekxqRXROQzQxTERVdU9DMDBMakZqTUM0M0xEQXVNU3d4TGpRc01DNDBMRElzTUM0NFl6VXVNeTB6TGpnc01URXVOaTAxTGprc01UZ3VNaTAxTGpsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamtLQ1FrSll6SXVNeTB4TGpZc05TNDBMVEVzTnl3eExqTmpNQzQwTERBdU5pd3dMamNzTVM0ekxEQXVPQ3d5WXpBdU5pd3dMaklzTVM0eExEQXVOaXd4TGpVc01TNHhZekl1Tnl3d0xqZ3NOQzR5TERNdU5Td3pMalFzTmk0eWJEQXNNR014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpJS0NRa0pZekV1T1N3eUxERXVPQ3cxTGpJdE1DNHlMRGRqTFRBdU5Dd3dMalF0TUM0NUxEQXVOeTB4TGpVc01XTXdMREF1TlN3d0xEQXVPU3d3TERFdU5IWXhhQzAyTW5ZdE1VZ3RORFY2SUUwdE5EUXVNaXd5TURjdU9HTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpZS0NRa0pZeTB4TGpNdE1TMHhMall0TWk0NUxUQXVOaTAwTGpKc01Dd3dReTAwTlN3eU1EY3VOUzAwTkM0MkxESXdOeTQzTFRRMExqSXNNakEzTGpoTUxUUTBMaklzTWpBM0xqaDZJRTB0TkRJdU55d3lNRE11TW1NdE1DNDBMREF1T1Mwd0xqY3NNUzQ0TFRFc01pNDNDZ2tKQ1dNdE1TMHdMalF0TVM0MkxURXVOUzB4TGpNdE1pNDFZekF1TWkwd0xqVXNNQzQyTFRBdU9Td3hMakV0TVM0eVF5MDBNeTQxTERJd01pNDJMVFF6TGpFc01qQXlMamt0TkRJdU55d3lNRE11TWt3dE5ESXVOeXd5TURNdU1ub2dUUzAwTUM0MExERTVPQzQzQ2drSkNXTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRExUUXhMamNzTVRrM0xqWXROREV1TVN3eE9UZ3VNeTAwTUM0MExERTVPQzQzZWlCTkxUTTVMaklzTVRrM0Nna0pDV013TGpNdE1DNDFMREF1TnkweExERXVNUzB4TGpWakxUQXVNeTB3TGpVdE1DNDVMVEF1TnkweExqUXRNQzQwY3kwd0xqY3NNQzQ1TFRBdU5Dd3hMalJETFRNNUxqY3NNVGsyTGpjdE16a3VOU3d4T1RZdU9TMHpPUzR5TERFNU4wd3RNemt1TWl3eE9UZDZJRTB0TXpNdU9Td3hPVEV1TWdvSkNRbGpMVEVzTUM0NUxUSXNNUzQ0TFRJdU9Td3lMamhqTFRBdU15MHdMak10TUM0M0xUQXVOaTB4TGpFdE1DNDRZekF1TkMweExqWXNNaTR4TFRJdU5Td3pMamN0TWk0eFF5MHpOQzR4TERFNU1TNHhMVE0wTERFNU1TNHlMVE16TGprc01Ua3hMakpNTFRNekxqa3NNVGt4TGpKNklFMDRMamdzTVRrMENna0pDV010TUM0NUxURXRNUzQ1TFRFdU9TMHlMamt0TWk0NFl6RXVOUzB3TGpZc015NHpMREF1TVN3ekxqa3NNUzQzWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTTVMalVzTVRrekxqUXNPUzR4TERFNU15NDJMRGd1T0N3eE9UUk1PQzQ0TERFNU5Ib2dUVEV3TGpFc01UazFMalVLQ1FrSll6QXVOQ3d3TGpVc01DNDRMREVzTVM0eExERXVOR013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1tTXRNQzR4TFRBdU5TMHdMamN0TUM0NUxURXVNaTB3TGpoRE1UQXVOU3d4T1RVdU1Td3hNQzR6TERFNU5TNHpMREV3TGpFc01UazFMalY2SUUweE15NDVMREl3TVM0MENna0pDV010TUM0MUxUQXVPUzB3TGprdE1TNDRMVEV1TlMweUxqZGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXhOQzR5TERJd01TNHhMREUwTERJd01TNHlMREV6TGprc01qQXhMalI2SUUweE5TNDNMREl3TlM0NUNna0pDV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M1l6QXVOQzB3TGpNc01DNDRMVEF1Tml3eExqSXRNV014TERBdU5Td3hMalFzTVM0M0xERXNNaTQzUXpFMkxqWXNNakExTGpNc01UWXVNaXd5TURVdU55d3hOUzQzTERJd05TNDVlaUJOTVRZdU9Dd3lNVEV1TkFvSkNRbGpMVEF1TVMweExqSXRNQzQwTFRJdU5DMHdMall0TXk0Mll6QXVOUzB3TGpFc01DNDVMVEF1TkN3eExqSXRNQzQyUXpFNExqUXNNakE0TGpVc01UZ3VNU3d5TVRBdU5Dd3hOaTQ0TERJeE1TNDBUREUyTGpnc01qRXhMalJNTVRZdU9Dd3lNVEV1TkhvZ1RURTFMREl4TkFvSkNRbGpMVEF1TlMweE5pMHhNeTQ1TFRJNExqWXRNamt1T1MweU9DNHhZeTB4TlM0ekxEQXVOUzB5Tnk0MkxERXlMamd0TWpndU1Td3lPQzR4U0RFMVRERTFMREl4TkhvaUx6NEtDVHd2Wno0S1BDOW5QZ284TDNOMlp6NEsnO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgIEZpbGUgTmFtZTogcGFsbGV0dGUtZ3JhZGllbnQuc2Nzc1xuLy8gICBEZXNjcmlwdGlvbjogZ3JhZGllbnQgY29sb3Igc3lzdGVtIHN0eWxlc1xuLy8gICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuLy8gICBBdXRob3I6IFBJWElOVkVOVFxuLy8gICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBmdW5jdGlvbiBjb2xvci1mdW5jdGlvbigkY29sb3IsICR0eXBlKSB7XG4gIEBpZiBtYXAtaGFzLWtleSgkY29sb3JzLCAkY29sb3IpIHtcbiAgICAkY3Vycl9jb2xvcjogbWFwLWdldCgkY29sb3JzLCAkY29sb3IpO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkY3Vycl9jb2xvciwgJHR5cGUpIHtcbiAgICAgIEByZXR1cm4gbWFwLWdldCgkY3Vycl9jb2xvciwgJHR5cGUpO1xuICAgIH1cbiAgfVxuICAvLyBAd2FybiBcIlVua25vd24gYCN7bmFtZX1gIGluICRjb2xvcnMuXCI7XG4gIEByZXR1cm4gbnVsbDtcbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXNcbkBpbXBvcnQgJ3BhbGV0dGUtdmFyaWFibGVzJztcblxuQGltcG9ydCAnYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmFkaWVudHMnO1xuQGltcG9ydCAnYm9vdHN0cmFwL3Njc3MvbWl4aW5zL2dyYWRpZW50cyc7XG5cbkBlYWNoICRjb2xvcl9uYW1lLCAkY29sb3IgaW4gJGNvbG9ycyB7XG4gIEBlYWNoICRjb2xvcl90eXBlLCAkY29sb3JfdmFsdWUgaW4gJGNvbG9yIHtcbiAgICBAaWYgJGNvbG9yX3R5cGUgPT0gJ2Jhc2UnIHtcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAuYmctZ3JhZGllbnQtI3skY29sb3JfbmFtZX0sXG4gICAgICAgIC5idG4tZ3JhZGllbnQtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICBAaWYgJGNvbG9yX25hbWUgPT0gJ2RhcmsnIHtcbiAgICAgICAgICAgIEBpZiAoY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdiYXNlJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1kaXJlY3Rpb25hbChtYXAtZ2V0KCgkY29sb3IpLCAnYmFzZScpLCBtYXAtZ2V0KCgkY29sb3IpLCAnZGFya2VuLTInKSwgNDdkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZm9yIGRhcmsgbGF5b3V0XG4gICAgICAgICAgICAuZGFyay1sYXlvdXQgJiB7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWRpcmVjdGlvbmFsKG1hcC1nZXQoKCRjb2xvciksICdkYXJrZW4tMicpLCBtYXAtZ2V0KCgkY29sb3IpLCAnYmFzZScpLCA0N2RlZyk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgQGlmIChjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2Jhc2UnKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWRpcmVjdGlvbmFsKG1hcC1nZXQoKCRjb2xvciksICdiYXNlJyksIG1hcC1nZXQoKCRjb2xvciksICdsaWdodGVuLTInKSwgNDdkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIEBpZiAoY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdkYXJrZW4tMicpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtZGlyZWN0aW9uYWwobWFwLWdldCgoJGNvbG9yKSwgJ2Rhcmtlbi0yJyksIG1hcC1nZXQoKCRjb2xvciksICdiYXNlJyksIDQ3ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBHcmFkaWVudHNcblxuQG1peGluIGdyYWRpZW50LWJnKCRjb2xvcikge1xuICBAaWYgJGVuYWJsZS1ncmFkaWVudHMge1xuICAgIGJhY2tncm91bmQ6ICRjb2xvciBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCBtaXgoJGJvZHktYmcsICRjb2xvciwgMTUlKSwgJGNvbG9yKSByZXBlYXQteDtcbiAgfSBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICB9XG59XG5cbi8vIEhvcml6b250YWwgZ3JhZGllbnQsIGZyb20gbGVmdCB0byByaWdodFxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG5AbWl4aW4gZ3JhZGllbnQteCgkc3RhcnQtY29sb3I6ICRncmF5LTcwMCwgJGVuZC1jb2xvcjogJGdyYXktODAwLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIFZlcnRpY2FsIGdyYWRpZW50LCBmcm9tIHRvcCB0byBib3R0b21cbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuQG1peGluIGdyYWRpZW50LXkoJHN0YXJ0LWNvbG9yOiAkZ3JheS03MDAsICRlbmQtY29sb3I6ICRncmF5LTgwMCwgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuQG1peGluIGdyYWRpZW50LWRpcmVjdGlvbmFsKCRzdGFydC1jb2xvcjogJGdyYXktNzAwLCAkZW5kLWNvbG9yOiAkZ3JheS04MDAsICRkZWc6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5AbWl4aW4gZ3JhZGllbnQteC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAkYmx1ZSwgJG1pZC1jb2xvcjogJHB1cnBsZSwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogJHJlZCkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5AbWl4aW4gZ3JhZGllbnQteS10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAkYmx1ZSwgJG1pZC1jb2xvcjogJHB1cnBsZSwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogJHJlZCkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1yYWRpYWwoJGlubmVyLWNvbG9yOiAkZ3JheS03MDAsICRvdXRlci1jb2xvcjogJGdyYXktODAwKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1zdHJpcGVkKCRjb2xvcjogcmdiYSgkd2hpdGUsIC4xNSksICRhbmdsZTogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xufVxuIiwiQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyc7XG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL2Jvb3RzdHJhcC5zY3NzJztcbkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcbkBpbXBvcnQgJ0Bjb3JlL3Njc3MvYmFzZS9jb2xvcnMnO1xuQGltcG9ydCAnQGNvcmUvc2Nzcy9iYXNlL2NvbXBvbmVudHMvaW5jbHVkZSc7IC8vIENvbXBvbmVudHMgaW5jbHVkZXNcblxuLy8gdmFyaWFibGUgZGVjbGFyYXRpb25cbiRkYXRhdGFibGVzLWJnLWhlYWRlci1jb2xvcjogJHRhYmxlLWhlYWQtYmc7XG4kZGF0YXRhYmxlcy10ZXh0LWNvbG9yOiAkZ3JheS00MDA7XG4kZGF0YXRhYmxlcy1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kZGF0YXRhYmxlcy1mb290ZXItdGV4dC1jb2xvcjogJHRleHQtbXV0ZWQ7XG4kZGF0YXRhYmxlcy1kYXJrLXRleHQtY29sb3I6ICR0aGVtZS1kYXJrLWJvZHktY29sb3I7XG4kZGF0YXRhYmxlcy1kYXJrLWZvb3Rlci1iZy1jb2xvcjogJHRoZW1lLWRhcmstY2FyZC1iZztcbiRkYXRhdGFibGVzLWRhcmstYm9yZGVyLWNvbG9yOiAkdGhlbWUtZGFyay1ib3JkZXItY29sb3I7XG4kZGF0YXRhYmxlcy1kYXJrLWhlYWRlci1iZy1jb2xvcjogJHRoZW1lLWRhcmstdGFibGUtaGVhZGVyLWJnO1xuJGRhdGF0YWJsZXMtZGFyay1ib2R5LWJnLWNvbG9yOiAkdGhlbWUtZGFyay10YWJsZS1iZztcbiRkYXRhdGFibGVzLWRhcmstYWN0aXZlLWJnLWNvbG9yOiAkdGhlbWUtZGFyay1jYXJkLWJnO1xuXG4ubmd4LWRhdGF0YWJsZSB7XG4gICYuYm9vdHN0cmFwIHtcbiAgICAmLmNvcmUtYm9vdHN0cmFwIHtcbiAgICAgICYuaGVpZ2h0LTcwLXZoIHtcbiAgICAgICAgaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZXMtYmctaGVhZGVyLWNvbG9yO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRkYXRhdGFibGVzLWJvcmRlci1jb2xvcjtcblxuICAgICAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzb3J0LWljb24gcG9zaXRpb25pbmdcbiAgICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNvcnQtYnRuIHtcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRhdGF0YWJsZXMtYm9yZGVyLWNvbG9yO1xuXG4gICAgICAgICYuZGF0YXRhYmxlLXJvdy1ldmVuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTUwO1xuICAgICAgICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsLWxhYmVsIHtcbiAgICAgICAgICAuY2VsbC1saW5lLWhlaWdodCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGVzLXRleHQtY29sb3I7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAgICAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJGRhdGF0YWJsZXMtdGV4dC1jb2xvcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAgICYuYWN0aXZlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBtYXJnaW46IDJweCAwcHggMTFweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgJjpub3QoLmRpc2FibGVkKTpob3ZlciB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGRhdGF0YWJsZXMtdGV4dC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dC1tdXRlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2VyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWJnO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjhweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI4cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjhweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucGFnZS1jb3VudCB7XG4gICAgICAgICAgY29sb3I6ICRkYXRhdGFibGVzLWZvb3Rlci10ZXh0LWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuaGVhZGVyLWhlaWdodC01MCB7XG4gICAgICAgIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBtZWRpYSBxdWVyeSBmb3IgU21hbGwgJiBNZWRpdW0gZGV2aWNlc1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlLWNvdW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICB9XG5cbiAgLm1vYmlsZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn1cblxuLy8gZGFyayBsYXlvdXQgc3R5bGVcbi5kYXJrLWxheW91dCB7XG4gIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyLFxuICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZXMtZGFyay1oZWFkZXItYmctY29sb3IgIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGRhdGF0YWJsZXMtZGFyay1ib3JkZXItY29sb3IgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCB7XG4gICAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZXMtZGFyay1mb290ZXItYmctY29sb3IgIWltcG9ydGFudDtcbiAgICAgIC5kYXRhdGFibGUtcGFnZXIgdWwgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlcy10ZXh0LWNvbG9yO1xuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGVzLWRhcmstdGV4dC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICBib3JkZXItY29sb3I6ICRkYXRhdGFibGVzLWRhcmstYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZXMtZGFyay1hY3RpdmUtYmctY29sb3IgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlcy1kYXJrLWJvZHktYmctY29sb3IgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYWdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmstcGFnaW5hdGlvbi1iZyAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMtZGFyay5zY3NzXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBkYXJrIHRoZW1lIHZhcmlhYmxlc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbi8vICBBdXRob3I6IFBJWElOVkVOVFxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBXQVJOSU5HOiBQTEVBU0UgRE8gTk9UIENIQU5HRSBUSElTIFZBUklBQkxFIEZJTEUuXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXG4vLyAgVElQOlxuLy8gIFdlIHN1Z2dlc3QgeW91IHRvIHVzZSB0aGlzIChhc3NldHMvc2Nzcy92YXJpYWJsZXMvX3ZhcmlhYmxlcy1jb21wb25lbnRzLnNjc3MpIGZpbGUgZm9yIG92ZXJyaWRpbmcgY29tcG9uZW50cyB2YXJpYWJsZXMuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vQm9keVxuJHRoZW1lLWRhcmstYm9keS1iZzogIzE2MWQzMSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJvZHktY29sb3I6ICNiNGI3YmQgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1ib3JkZXItY29sb3I6ICMzYjQyNTMgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1jdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICM0NDQwNWUgIWRlZmF1bHQ7XG5cbi8vVHlwb2dyYXBoeVxuJHRoZW1lLWRhcmstaGVhZGluZ3MtY29sb3I6ICNkMGQyZDYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1sYWJlbC1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLXRleHQtbXV0ZWQtY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XG5cbi8vQ2FyZFxuJHRoZW1lLWRhcmstY2FyZC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4yNCk7XG5cbi8vSW5wdXRcbiR0aGVtZS1kYXJrLWlucHV0LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1ib3JkZXItY29sb3I6ICM0MDQ2NTYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1kaXNhYmxlZC1iZzogIzI0MjMzYSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzQ0NGI2MCAhZGVmYXVsdDtcblxuLy8gU3dpdGNoXG4kdGhlbWUtZGFyay1zd2l0Y2gtYmc6ICM1NDVhNmE7XG4kdGhlbWUtZGFyay1zd2l0Y2gtYmctZGlzYWJsZWQ6ICMxYjIzMzc7XG5cbi8vVGFibGVcbiR0aGVtZS1kYXJrLXRhYmxlLWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtaGVhZGVyLWJnOiAjMzQzZDU1ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtcm93LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtaG92ZXItYmc6ICMyNDJiM2QgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay10YWJsZS1zdHJpcGVkLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xuXG4kdGhlbWUtZGFyay1tb2RhbC1oZWFkZXItYmc6ICMxNjFkMzEgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1wYWdpbmF0aW9uLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstY2hhcnQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay13aWRnZXQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 91342:
/*!*************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesModule": function() { return /* binding */ DatatablesModule; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ctrl/ngx-csv */ 35454);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 85582);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.module */ 62351);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 79079);
/* harmony import */ var app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/tables/datatables/datatables.component */ 15433);
/* harmony import */ var app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/tables/datatables/datatables.service */ 45721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);














var routes = [{
  path: 'datatables',
  component: app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_5__.DatatablesComponent,
  resolve: {
    datatables: app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_6__.DatatablesService
  },
  data: {
    animation: 'datatables'
  }
}];
var DatatablesModule = /*#__PURE__*/(0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function DatatablesModule() {
  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DatatablesModule);
});

DatatablesModule.ɵfac = function DatatablesModule_Factory(t) {
  return new (t || DatatablesModule)();
};

DatatablesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: DatatablesModule
});
DatatablesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_6__.DatatablesService],
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_3__.CardSnippetModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.NgxDatatableModule, _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_12__.CsvModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DatatablesModule, {
    declarations: [app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_5__.DatatablesComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_3__.CardSnippetModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.NgxDatatableModule, _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_12__.CsvModule]
  });
})();

/***/ }),

/***/ 45721:
/*!**************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesService": function() { return /* binding */ DatatablesService; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);





var DatatablesService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  function DatatablesService(_httpClient) {
    (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DatatablesService);

    this._httpClient = _httpClient; // Set the defaults

    this.onDatatablessChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
  }
  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */


  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DatatablesService, [{
    key: "resolve",
    value: function resolve(route, state) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        Promise.all([_this.getDataTableRows()]).then(function () {
          resolve();
        }, reject);
      });
    }
    /**
     * Get rows
     */

  }, {
    key: "getDataTableRows",
    value: function getDataTableRows() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2._httpClient.get('api/datatable-rows').subscribe(function (response) {
          _this2.rows = response;

          _this2.onDatatablessChanged.next(_this2.rows);

          resolve(_this2.rows);
        }, reject);
      });
    }
  }]);

  return DatatablesService;
}();

DatatablesService.ɵfac = function DatatablesService_Factory(t) {
  return new (t || DatatablesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

DatatablesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DatatablesService,
  factory: DatatablesService.ɵfac
});

/***/ }),

/***/ 14455:
/*!******************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.snippetcode.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "snippetCodeKitchenSink": function() { return /* binding */ snippetCodeKitchenSink; },
/* harmony export */   "snippetCodeInlineEditing": function() { return /* binding */ snippetCodeInlineEditing; },
/* harmony export */   "snippetCodeRowDetails": function() { return /* binding */ snippetCodeRowDetails; },
/* harmony export */   "snippetCodeCustomCheckbox": function() { return /* binding */ snippetCodeCustomCheckbox; },
/* harmony export */   "snippetCodeResponsive": function() { return /* binding */ snippetCodeResponsive; },
/* harmony export */   "snippetCodeMultilangual": function() { return /* binding */ snippetCodeMultilangual; }
/* harmony export */ });
var snippetCodeKitchenSink = {
  html: "\n<div class=\"row\">\n  <div class=\"col-12 mb-50\">\n    <button class=\"btn btn-primary ml-1\" rippleEffect>\n      <i data-feather=\"plus\" class=\"mr-0 mr-sm-1\"></i\n      ><span class=\"d-none d-sm-inline-block\">Add New Record</span>\n    </button>\n\n    <a csvLink [data]=\"exportCSVData\" class=\"btn btn-outline-secondary float-right mr-1\" rippleEffect\n      >Export CSV</a\n    >\n  </div>\n  <div class=\"col-md-6 col-12\">\n    <div class=\"d-flex justify-content-between align-items-center m-1\">\n      <label class=\"d-flex align-items-center\"\n        >Show\n        <select class=\"form-control mx-25\" [(ngModel)]=\"basicSelectedOption\">\n          <option value=\"10\">10</option>\n          <option value=\"25\">25</option>\n          <option value=\"50\">50</option>\n          <option value=\"100\">100</option>\n        </select>\n        entries</label\n      >\n    </div>\n  </div>\n  <div class=\"col-md-6 col-12 d-flex justify-content-md-end\">\n    <div class=\"d-flex align-items-center justify-content-end pr-1 pb-1 pl-1 pl-md-0 pb-md-0\">\n      <label class=\"d-flex align-items-center\"\n        >Search<input\n          type=\"search\"\n          placeholder=\"Search\"\n          class=\"form-control ml-25\"\n          (keyup)=\"filterUpdate($event)\"\n          (search)=\"filterUpdate($event)\"\n      /></label>\n    </div>\n  </div>\n</div>\n<ngx-datatable\n  [rows]=\"kitchenSinkRows\"\n  [rowHeight]=\"58\"\n  class=\"bootstrap core-bootstrap\"\n  [limit]=\"10\"\n  [columnMode]=\"ColumnMode.force\"\n  [headerHeight]=\"40\"\n  [footerHeight]=\"50\"\n  [scrollbarH]=\"true\"\n  [selectionType]=\"SelectionType.checkbox\"\n  [limit]=\"basicSelectedOption\"\n  (activate)=\"onActivate($event)\"\n  (select)=\"onSelect($event)\"\n>\n  <ngx-datatable-column\n    [width]=\"50\"\n    [sortable]=\"false\"\n    [canAutoResize]=\"false\"\n    [draggable]=\"false\"\n    [resizeable]=\"false\"\n  >\n    <ng-template\n      ngx-datatable-header-template\n      let-value=\"value\"\n      let-allRowsSelected=\"allRowsSelected\"\n      let-selectFn=\"selectFn\"\n    >\n      <div class=\"custom-control custom-checkbox\">\n        <input\n          type=\"checkbox\"\n          class=\"custom-control-input\"\n          [checked]=\"allRowsSelected\"\n          (change)=\"selectFn(!allRowsSelected)\"\n          id=\"headerChkbxRef\"\n        />\n        <label class=\"custom-control-label\" for=\"headerChkbxRef\"></label>\n      </div>\n    </ng-template>\n    <ng-template\n      ngx-datatable-cell-template\n      let-rowIndex=\"rowIndex\"\n      let-value=\"value\"\n      let-isSelected=\"isSelected\"\n      let-onCheckboxChangeFn=\"onCheckboxChangeFn\"\n    >\n      <div class=\"custom-control custom-checkbox\">\n        <input\n          type=\"checkbox\"\n          class=\"custom-control-input\"\n          [checked]=\"isSelected\"\n          (change)=\"onCheckboxChangeFn($event)\"\n          id=\"rowChkbxRef{{ rowIndex }}\"\n        />\n        <label class=\"custom-control-label\" for=\"rowChkbxRef{{ rowIndex }}\"></label>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Name\" prop=\"full_name\" [width]=\"280\">\n    <ng-template let-row=\"row\" let-name=\"value\" ngx-datatable-cell-template>\n      <div class=\"d-flex align-items-center\">\n        <div *ngIf=\"row.avatar.length > 0; else customAvatar\">\n          <img\n            class=\"rounded-circle mr-1\"\n            src=\"assets/images/portrait/small/{{ row.avatar }}\"\n            height=\"32\"\n            width=\"32\"\n            alt=\"datatable-avatar\"\n          />\n        </div>\n        <ng-template #customAvatar>\n          <div\n            class=\"avatar mr-1 ml-0\"\n            [ngClass]=\"{\n              'bg-light-primary': row.status == '1',\n              'bg-light-success': row.status == '2',\n              'bg-light-danger': row.status == '3',\n              'bg-light-warning': row.status == '4',\n              'bg-light-info': row.status == '5'\n            }\"\n          >\n            <div class=\"avatar-content\">{{ name | initials }}</div>\n          </div>\n        </ng-template>\n        <div class=\"cell-line-height\">\n          <p class=\"font-medium-1 font-weight-bold line-height-1 mb-25\">\n            {{ name }}\n          </p>\n          <span class=\"text-muted font-small-2\"> {{ row.post }}</span>\n        </div>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Email\" prop=\"email\" [width]=\"250\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Date\" prop=\"start_date\" [width]=\"120\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Salary\" prop=\"salary\" [width]=\"120\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Status\" prop=\"status\" [width]=\"120\">\n    <ng-template let-status=\"value\" ngx-datatable-cell-template>\n      <div\n        class=\"badge badge-pill\"\n        [ngClass]=\"{\n          'badge-light-primary': status == '1',\n          'badge-light-success': status == '2',\n          'badge-light-danger': status == '3',\n          'badge-light-warning': status == '4',\n          'badge-light-info': status == '5'\n        }\"\n      >\n        {{\n          status == 1\n            ? 'Current'\n            : status == 2\n            ? 'Professional'\n            : status == 3\n            ? 'Rejected'\n            : status == 4\n            ? 'Resigned'\n            : status == 5\n            ? 'Applied'\n            : 'Applied'\n        }}\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Actions\" [width]=\"120\" [sortable]=\"false\">\n    <ng-template ngx-datatable-cell-template>\n      <div class=\"d-flex align-items-center\">\n        <div ngbDropdown container=\"body\">\n          <a\n            ngbDropdownToggle\n            href=\"javascript:void(0);\"\n            class=\"hide-arrow\"\n            id=\"dropdownBrowserState\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            <i data-feather=\"more-vertical\" class=\"text-primary cursor-pointer mr-50\"></i>\n          </a>\n          <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBrowserState\">\n            <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n              ><i data-feather=\"file-text\" class=\"mr-50\"></i> Details</a\n            >\n            <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n              ><i data-feather=\"archive\" class=\"mr-50\"></i> Archive</a\n            >\n            <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n              ><i data-feather=\"trash-2\" class=\"mr-50\"></i> Delete</a\n            >\n          </div>\n        </div>\n\n        <i data-feather=\"edit\" class=\"text-primary cursor-pointer\"></i>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>\n  ",
  ts: "\n  public kitchenSinkRows: any;\n  public basicSelectedOption: number = 10;\n  public SelectionType = SelectionType;\n\n  /**\n   * Method Search (filter)\n   *\n   * @param event\n   */\n  filterUpdate(event) {\n    const val = event.target.value.toLowerCase();\n\n    // filter our data\n    const temp = this.tempData.filter(function (d) {\n      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;\n    });\n\n    // update the rows\n    this.kitchenSinkRows = temp;\n    // Whenever the filter changes, always go back to the first page\n    this.table.offset = 0;\n  }\n\n  /**\n   * On init\n   */\n  ngOnInit() {\n    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {\n      this.kitchenSinkRows = this.rows;\n      this.exportCSVData = this.rows;\n    });\n  }\n  "
};
var snippetCodeInlineEditing = {
  html: "\n<ngx-datatable\n  class=\"bootstrap core-bootstrap\"\n  [headerHeight]=\"40\"\n  [rowHeight]=\"58\"\n  [limit]=\"10\"\n  [columnMode]=\"ColumnMode.force\"\n  [footerHeight]=\"50\"\n  [rows]=\"rows\"\n  [scrollbarH]=\"true\"\n>\n  <ngx-datatable-column [width]=\"280\" name=\"Name\" prop=\"full_name\">\n    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n      <div\n        title=\"Double click to edit\"\n        (dblclick)=\"editingName[rowIndex + '-full_name'] = true\"\n        *ngIf=\"!editingName[rowIndex + '-full_name']\"\n      >\n        <div class=\"d-flex align-items-center\">\n          <div *ngIf=\"row.avatar.length > 0; else customAvatar\">\n            <img\n              class=\"rounded-circle mr-1\"\n              src=\"assets/images/portrait/small/{{ row.avatar }}\"\n              height=\"32\"\n              width=\"32\"\n              alt=\"datatable-avatar\"\n            />\n          </div>\n          <ng-template #customAvatar>\n            <div\n              class=\"avatar mr-1 ml-0\"\n              [ngClass]=\"{\n                'bg-light-primary': row.status == '1',\n                'bg-light-success': row.status == '2',\n                'bg-light-danger': row.status == '3',\n                'bg-light-warning': row.status == '4',\n                'bg-light-info': row.status == '5'\n              }\"\n            >\n              <div class=\"avatar-content\">{{ value | initials }}</div>\n            </div>\n          </ng-template>\n          <div class=\"cell-line-height\">\n            <p class=\"font-medium-1 line-height-1 mb-0\">{{ value }}</p>\n            <span class=\"text-muted font-small-2\"> {{ row.post }}</span>\n          </div>\n        </div>\n      </div>\n      <input\n        autofocus\n        class=\"form-control form-control-sm\"\n        (blur)=\"inlineEditingUpdateName($event, 'full_name', rowIndex)\"\n        *ngIf=\"editingName[rowIndex + '-full_name']\"\n        type=\"text\"\n        [value]=\"value\"\n      />\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column [width]=\"120\" name=\"Status\" prop=\"status\">\n    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n      <div\n        title=\"Double click to edit\"\n        (dblclick)=\"editingStatus[rowIndex + '-status'] = true\"\n        *ngIf=\"!editingStatus[rowIndex + '-status']\"\n      >\n        <div\n          class=\"badge badge-pill\"\n          [ngClass]=\"{\n            'badge-light-primary': value == '1',\n            'badge-light-success': value == '2',\n            'badge-light-danger': value == '3',\n            'badge-light-warning': value == '4',\n            'badge-light-info': value == '5'\n          }\"\n        >\n          {{\n            value == 1\n              ? 'Current'\n              : value == 2\n              ? 'Professional'\n              : value == 3\n              ? 'Rejected'\n              : value == 4\n              ? 'Resigned'\n              : value == 5\n              ? 'Applied'\n              : 'Applied'\n          }}\n        </div>\n      </div>\n      <select\n        *ngIf=\"editingStatus[rowIndex + '-status']\"\n        (blur)=\"editingStatus[rowIndex + '-status'] = false\"\n        (change)=\"inlineEditingUpdateStatus($event, 'status', rowIndex)\"\n        [value]=\"value\"\n        class=\"form-control form-control-sm\"\n      >\n        <option value=\"1\">Current</option>\n        <option value=\"2\">Professional</option>\n        <option value=\"3\">Rejected</option>\n        <option value=\"4\">Resigned</option>\n        <option value=\"5\">Applied</option>\n      </select>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column [width]=\"50\" name=\"Age\" prop=\"age\">\n    <ng-template ngx-datatable-cell-template let-value=\"value\" let-rowIndex=\"rowIndex\" let-row=\"row\">\n      <div\n        title=\"Double click to edit\"\n        (dblclick)=\"editingAge[rowIndex + '-age'] = true\"\n        *ngIf=\"!editingAge[rowIndex + '-age']\"\n      >\n        {{ value }}\n      </div>\n      <input\n        autofocus\n        class=\"form-control form-control-sm\"\n        (blur)=\"inlineEditingUpdateAge($event, 'age', rowIndex)\"\n        *ngIf=\"editingAge[rowIndex + '-age']\"\n        type=\"text\"\n        [value]=\"value\"\n      />\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column [width]=\"100\" name=\"Salary\" prop=\"salary\" [width]=\"120\">\n    <ng-template ngx-datatable-cell-template let-value=\"value\" let-rowIndex=\"rowIndex\" let-row=\"row\">\n      <div\n        title=\"Double click to edit\"\n        (dblclick)=\"editingSalary[rowIndex + '-salary'] = true\"\n        *ngIf=\"!editingSalary[rowIndex + '-salary']\"\n      >\n        {{ value }}\n      </div>\n      <input\n        autofocus\n        class=\"form-control form-control-sm\"\n        (blur)=\"inlineEditingUpdateSalary($event, 'salary', rowIndex)\"\n        *ngIf=\"editingSalary[rowIndex + '-salary']\"\n        type=\"text\"\n        [value]=\"value\"\n      />\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Actions\" [width]=\"120\" [sortable]=\"false\">\n    <ng-template ngx-datatable-cell-template>\n      <div class=\"d-flex align-items-center\">\n        <div ngbDropdown container=\"body\">\n          <a\n            ngbDropdownToggle\n            href=\"javascript:void(0);\"\n            class=\"hide-arrow\"\n            id=\"dropdownBrowserState\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            <i data-feather=\"more-vertical\" class=\"text-primary cursor-pointer mr-50\"></i>\n          </a>\n          <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBrowserState\">\n            <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n              ><i data-feather=\"file-text\" class=\"mr-50\"></i> Details</a\n            >\n            <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n              ><i data-feather=\"archive\" class=\"mr-50\"></i> Archive</a\n            >\n            <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n              ><i data-feather=\"trash-2\" class=\"mr-50\"></i> Delete</a\n            >\n          </div>\n        </div>\n\n        <i data-feather=\"edit\" class=\"text-primary cursor-pointer\"></i>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>\n  ",
  ts: "\n\n  public editingName = {};\n  public editingStatus = {};\n  public editingAge = {};\n  public editingSalary = {};\n\n  /**\n   * Inline editing Name\n   *\n   * @param event\n   * @param cell\n   * @param rowIndex\n   */\n  inlineEditingUpdateName(event, cell, rowIndex) {\n    this.editingName[rowIndex + '-' + cell] = false;\n    this.rows[rowIndex][cell] = event.target.value;\n    this.rows = [...this.rows];\n  }\n\n  /**\n   * Inline editing Age\n   *\n   * @param event\n   * @param cell\n   * @param rowIndex\n   */\n  inlineEditingUpdateAge(event, cell, rowIndex) {\n    this.editingAge[rowIndex + '-' + cell] = false;\n    this.rows[rowIndex][cell] = event.target.value;\n    this.rows = [...this.rows];\n  }\n\n  /**\n   * Inline editing Salary\n   *\n   * @param event\n   * @param cell\n   * @param rowIndex\n   */\n  inlineEditingUpdateSalary(event, cell, rowIndex) {\n    this.editingSalary[rowIndex + '-' + cell] = false;\n    this.rows[rowIndex][cell] = event.target.value;\n    this.rows = [...this.rows];\n  }\n\n  /**\n   * Inline editing Status\n   *\n   * @param event\n   * @param cell\n   * @param rowIndex\n   */\n  inlineEditingUpdateStatus(event, cell, rowIndex) {\n    this.editingStatus[rowIndex + '-' + cell] = false;\n    this.rows[rowIndex][cell] = event.target.value;\n    this.rows = [...this.rows];\n  }\n\n  /**\n   * On init\n   */\n  ngOnInit() {\n    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {\n      this.rows = response;\n      this.tempData = this.rows;\n    });\n  }\n  "
};
var snippetCodeRowDetails = {
  html: "\n  <!-- ngx-datatable-row-details -->\n  <ngx-datatable\n    #tableRowDetails\n    class=\"bootstrap core-bootstrap\"\n    [columnMode]=\"ColumnMode.force\"\n    [headerHeight]=\"40\"\n    [footerHeight]=\"50\"\n    [rowHeight]=\"58\"\n    [limit]=\"10\"\n    [rows]=\"rows\"\n    [scrollbarH]=\"true\"\n  >\n    <!-- Row Detail Template -->\n    <ngx-datatable-row-detail [rowHeight]=\"50\">\n      <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\n        <div class=\"ml-75 pl-5 pt-75\">\n          <div>\n            <span><strong>City : </strong> {{ row.city }}</span\n            ><span class=\"ml-1\"><strong>Experience : </strong> {{ row.experience }}</span\n            ><span class=\"ml-1\"><strong>Start Date : </strong> {{ row.start_date }}</span>\n          </div>\n        </div>\n      </ng-template>\n    </ngx-datatable-row-detail>\n    <ngx-datatable-column\n      [width]=\"50\"\n      [resizeable]=\"false\"\n      [sortable]=\"false\"\n      [draggable]=\"false\"\n      [canAutoResize]=\"false\"\n    >\n      <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\n        <a\n          href=\"javascript:void(0)\"\n          [class.datatable-icon-right]=\"!expanded\"\n          [class.datatable-icon-down]=\"expanded\"\n          title=\"Expand/Collapse Row\"\n          (click)=\"rowDetailsToggleExpand(row)\"\n        >\n        </a>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Name\" prop=\"full_name\" [width]=\"280\">\n      <ng-template let-row=\"row\" let-name=\"value\" ngx-datatable-cell-template>\n        <div class=\"d-flex align-items-center\">\n          <div *ngIf=\"row.avatar.length > 0; else customAvatar\">\n            <img\n              class=\"rounded-circle mr-1\"\n              src=\"assets/images/portrait/small/{{ row.avatar }}\"\n              height=\"32\"\n              width=\"32\"\n              alt=\"datatable-avatar\"\n            />\n          </div>\n          <ng-template #customAvatar>\n            <div\n              class=\"avatar mr-1 ml-0\"\n              [ngClass]=\"{\n                'bg-light-primary': row.status == '1',\n                'bg-light-success': row.status == '2',\n                'bg-light-danger': row.status == '3',\n                'bg-light-warning': row.status == '4',\n                'bg-light-info': row.status == '5'\n              }\"\n            >\n              <div class=\"avatar-content\">{{ name | initials }}</div>\n            </div>\n          </ng-template>\n          <div class=\"cell-line-height\">\n            <p class=\"font-medium-1 line-height-1 mb-0\">{{ name }}</p>\n            <span class=\"text-muted font-small-2\"> {{ row.post }}</span>\n          </div>\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Email\" prop=\"email\" [width]=\"250\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Age\" prop=\"age\" [width]=\"50\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Salary\" prop=\"salary\" [width]=\"120\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Status\" prop=\"status\" [width]=\"120\">\n      <ng-template let-status=\"value\" ngx-datatable-cell-template>\n        <div\n          class=\"badge badge-pill\"\n          [ngClass]=\"{\n            'badge-light-primary': status == '1',\n            'badge-light-success': status == '2',\n            'badge-light-danger': status == '3',\n            'badge-light-warning': status == '4',\n            'badge-light-info': status == '5'\n          }\"\n        >\n          {{\n            status == 1\n              ? 'Current'\n              : status == 2\n              ? 'Professional'\n              : status == 3\n              ? 'Rejected'\n              : status == 4\n              ? 'Resigned'\n              : status == 5\n              ? 'Applied'\n              : 'Applied'\n          }}\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Actions\" [width]=\"120\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template>\n        <div class=\"d-flex align-items-center\">\n          <div ngbDropdown container=\"body\">\n            <a\n              ngbDropdownToggle\n              href=\"javascript:void(0);\"\n              class=\"hide-arrow\"\n              id=\"dropdownBrowserState\"\n              data-toggle=\"dropdown\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n            >\n              <i data-feather=\"more-vertical\" class=\"text-primary cursor-pointer mr-50\"></i>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBrowserState\">\n              <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n                ><i data-feather=\"file-text\" class=\"mr-50\"></i> Details</a\n              >\n              <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n                ><i data-feather=\"archive\" class=\"mr-50\"></i> Archive</a\n              >\n              <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n                ><i data-feather=\"trash-2\" class=\"mr-50\"></i> Delete</a\n              >\n            </div>\n          </div>\n\n          <i data-feather=\"edit\" class=\"text-primary cursor-pointer\"></i>\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n  <!-- ngx-datatable-row-details -->\n  ",
  ts: "\n\n  @ViewChild('tableRowDetails') tableRowDetails: any;\n\n  public ColumnMode = ColumnMode;\n\n  /**\n   * rowDetailsToggleExpand\n   *\n   * @param row\n   */\n  rowDetailsToggleExpand(row) {\n    this.tableRowDetails.rowDetail.toggleExpandRow(row);\n  }\n\n  /**\n   * On init\n   */\n  ngOnInit() {\n    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {\n      this.rows = response;\n      this.tempData = this.rows;\n    });\n  }\n  "
};
var snippetCodeCustomCheckbox = {
  html: "\n<!-- ngx-datatable-custom-checkbox -->\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <ngx-datatable\n        class=\"bootstrap core-bootstrap\"\n        [rows]=\"rows\"\n        [columnMode]=\"ColumnMode.force\"\n        [headerHeight]=\"40\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"58\"\n        [limit]=\"10\"\n        [selected]=\"chkBoxSelected\"\n        [selectionType]=\"SelectionType.checkbox\"\n        (select)=\"customChkboxOnSelect($event)\"\n        [scrollbarH]=\"true\"\n        (activate)=\"onActivate($event)\"\n        (select)=\"onSelect($event)\"\n      >\n        <ngx-datatable-column\n          [width]=\"50\"\n          [sortable]=\"false\"\n          [canAutoResize]=\"false\"\n          [draggable]=\"false\"\n          [resizeable]=\"false\"\n        >\n          <ng-template\n            ngx-datatable-header-template\n            let-value=\"value\"\n            let-allRowsSelected=\"allRowsSelected\"\n            let-selectFn=\"selectFn\"\n          >\n            <div class=\"custom-control custom-control-primary custom-checkbox\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                [checked]=\"allRowsSelected\"\n                (change)=\"selectFn(!allRowsSelected)\"\n                id=\"headerCustomChkbxRef\"\n              />\n              <label class=\"custom-control-label\" for=\"headerCustomChkbxRef\"></label>\n            </div>\n          </ng-template>\n          <ng-template\n            ngx-datatable-cell-template\n            let-rowIndex=\"rowIndex\"\n            let-value=\"value\"\n            let-isSelected=\"isSelected\"\n            let-onCheckboxChangeFn=\"onCheckboxChangeFn\"\n          >\n            <div class=\"custom-control custom-control-primary custom-checkbox\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                [checked]=\"isSelected\"\n                (change)=\"onCheckboxChangeFn($event)\"\n                id=\"rowCustomChkbxRef{{ rowIndex }}\"\n              />\n              <label class=\"custom-control-label\" for=\"rowCustomChkbxRef{{ rowIndex }}\"></label>\n            </div>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Name\" prop=\"full_name\" [width]=\"280\">\n          <ng-template let-row=\"row\" let-name=\"value\" ngx-datatable-cell-template>\n            <div class=\"d-flex align-items-center\">\n              <div *ngIf=\"row.avatar.length > 0; else customAvatar\">\n                <img\n                  class=\"rounded-circle mr-1\"\n                  src=\"assets/images/portrait/small/{{ row.avatar }}\"\n                  height=\"32\"\n                  width=\"32\"\n                  alt=\"datatable-avatar\"\n                />\n              </div>\n              <ng-template #customAvatar>\n                <div\n                  class=\"avatar mr-1 ml-0\"\n                  [ngClass]=\"{\n                    'bg-light-primary': row.status == '1',\n                    'bg-light-success': row.status == '2',\n                    'bg-light-danger': row.status == '3',\n                    'bg-light-warning': row.status == '4',\n                    'bg-light-info': row.status == '5'\n                  }\"\n                >\n                  <div class=\"avatar-content\">{{ name | initials }}</div>\n                </div>\n              </ng-template>\n              <div class=\"cell-line-height\">\n                <p class=\"font-medium-1 line-height-1 mb-0\">{{ name }}</p>\n                <span class=\"text-muted font-small-2\"> {{ row.post }}</span>\n              </div>\n            </div>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Email\" prop=\"email\" [width]=\"250\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"Age\" prop=\"age\" [width]=\"50\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"Salary\" prop=\"salary\" [width]=\"120\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"Status\" prop=\"status\" [width]=\"120\">\n          <ng-template let-status=\"value\" ngx-datatable-cell-template>\n            <div\n              class=\"badge badge-pill\"\n              [ngClass]=\"{\n                'badge-light-primary': status == '1',\n                'badge-light-success': status == '2',\n                'badge-light-danger': status == '3',\n                'badge-light-warning': status == '4',\n                'badge-light-info': status == '5'\n              }\"\n            >\n              {{\n                status == 1\n                  ? 'Current'\n                  : status == 2\n                  ? 'Professional'\n                  : status == 3\n                  ? 'Rejected'\n                  : status == 4\n                  ? 'Resigned'\n                  : status == 5\n                  ? 'Applied'\n                  : 'Applied'\n              }}\n            </div>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Actions\" [width]=\"120\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template>\n            <div class=\"d-flex align-items-center\">\n              <div ngbDropdown container=\"body\">\n                <a\n                  ngbDropdownToggle\n                  href=\"javascript:void(0);\"\n                  class=\"hide-arrow\"\n                  id=\"dropdownBrowserState\"\n                  data-toggle=\"dropdown\"\n                  aria-haspopup=\"true\"\n                  aria-expanded=\"false\"\n                >\n                  <i data-feather=\"more-vertical\" class=\"text-primary cursor-pointer mr-50\"></i>\n                </a>\n                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBrowserState\">\n                  <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n                    ><i data-feather=\"file-text\" class=\"mr-50\"></i> Details</a\n                  >\n                  <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n                    ><i data-feather=\"archive\" class=\"mr-50\"></i> Archive</a\n                  >\n                  <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n                    ><i data-feather=\"trash-2\" class=\"mr-50\"></i> Delete</a\n                  >\n                </div>\n              </div>\n\n              <i data-feather=\"edit\" class=\"text-primary cursor-pointer\"></i>\n            </div>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </div>\n    <div class=\"selected-column col-12 mt-1\">\n      <hr class=\"w-100\" />\n      <h5 class=\"mx-1\">\n        Selections <small>({{ chkBoxSelected?.length }})</small>\n      </h5>\n      <ul>\n        <li *ngFor=\"let sel of chkBoxSelected\">\n          {{ sel.full_name }}\n        </li>\n        <li *ngIf=\"!chkBoxSelected?.length\">No Selections</li>\n      </ul>\n    </div>\n  </div>\n  <!--/ ngx-datatable-custom-checkbox -->\n  ",
  ts: "\n\n  @ViewChild('tableRowDetails') tableRowDetails: any;\n\n  public ColumnMode = ColumnMode;\n\n  public chkBoxSelected = [];\n\n  /**\n   * customChkboxOnSelect\n   *\n   * @param { selected }\n   */\n  customChkboxOnSelect({ selected }) {\n    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);\n    this.chkBoxSelected.push(...selected);\n  }\n\n  /**\n   * On init\n   */\n  ngOnInit() {\n    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {\n      this.rows = response;\n      this.tempData = this.rows;\n    });\n  }\n\n  "
};
var snippetCodeResponsive = {
  html: "\n  <!-- ngx-datatables responsive -->\n  <ngx-datatable\n    #table\n    class=\"bootstrap core-bootstrap\"\n    [columnMode]=\"ColumnMode.force\"\n    [headerHeight]=\"40\"\n    [rowHeight]=\"58\"\n    [footerHeight]=\"50\"\n    rowHeight=\"auto\"\n    [limit]=\"10\"\n    [rows]=\"rows\"\n    [scrollbarH]=\"true\"\n  >\n    <ngx-datatable-column name=\"Name\" prop=\"full_name\" [width]=\"280\">\n      <ng-template let-row=\"row\" let-name=\"value\" ngx-datatable-cell-template>\n        <div class=\"d-flex align-items-center\">\n          <div *ngIf=\"row.avatar.length > 0; else customAvatar\">\n            <img\n              class=\"rounded-circle mr-1\"\n              src=\"assets/images/portrait/small/{{ row.avatar }}\"\n              height=\"32\"\n              width=\"32\"\n              alt=\"datatable-avatar\"\n            />\n          </div>\n          <ng-template #customAvatar>\n            <div\n              class=\"avatar mr-1 ml-0\"\n              [ngClass]=\"{\n                'bg-light-primary': row.status == '1',\n                'bg-light-success': row.status == '2',\n                'bg-light-danger': row.status == '3',\n                'bg-light-warning': row.status == '4',\n                'bg-light-info': row.status == '5'\n              }\"\n            >\n              <div class=\"avatar-content\">{{ name | initials }}</div>\n            </div>\n          </ng-template>\n          <div class=\"cell-line-height\">\n            <p class=\"font-medium-1 line-height-1 mb-0\">{{ name }}</p>\n            <span class=\"text-muted font-small-2\"> {{ row.post }}</span>\n          </div>\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Email\" prop=\"email\" [width]=\"250\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Age\" prop=\"age\" [width]=\"50\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Status\" prop=\"status\" [width]=\"120\">\n      <ng-template let-status=\"value\" ngx-datatable-cell-template>\n        <div\n          class=\"badge badge-pill\"\n          [ngClass]=\"{\n            'badge-light-primary': status == '1',\n            'badge-light-success': status == '2',\n            'badge-light-danger': status == '3',\n            'badge-light-warning': status == '4',\n            'badge-light-info': status == '5'\n          }\"\n        >\n          {{\n            status == 1\n              ? 'Current'\n              : status == 2\n              ? 'Professional'\n              : status == 3\n              ? 'Rejected'\n              : status == 4\n              ? 'Resigned'\n              : status == 5\n              ? 'Applied'\n              : 'Applied'\n          }}\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [width]=\"120\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template>\n        <div class=\"d-flex align-items-center\">\n          <div ngbDropdown container=\"body\">\n            <a\n              ngbDropdownToggle\n              href=\"javascript:void(0);\"\n              class=\"hide-arrow\"\n              id=\"dropdownBrowserState\"\n              data-toggle=\"dropdown\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n            >\n              <i data-feather=\"more-vertical\" class=\"text-primary cursor-pointer mr-50\"></i>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBrowserState\">\n              <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n                ><i data-feather=\"file-text\" class=\"mr-50\"></i> Details</a\n              >\n              <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n                ><i data-feather=\"archive\" class=\"mr-50\"></i> Archive</a\n              >\n              <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n                ><i data-feather=\"trash-2\" class=\"mr-50\"></i> Delete</a\n              >\n            </div>\n          </div>\n\n          <i data-feather=\"edit\" class=\"text-primary cursor-pointer\"></i>\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n  <!--/ ngx-datatables responsive -->\n  ",
  ts: "\n  /**\n   * On init\n   */\n  ngOnInit() {\n    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {\n      this.rows = response;\n      this.tempData = this.rows;\n    });\n  }\n  "
};
var snippetCodeMultilangual = {
  html: "\n  <ngx-datatable\n  #table\n  class=\"bootstrap core-bootstrap\"\n  [columnMode]=\"ColumnMode.force\"\n  [headerHeight]=\"40\"\n  [rowHeight]=\"58\"\n  [footerHeight]=\"50\"\n  rowHeight=\"auto\"\n  [limit]=\"10\"\n  [rows]=\"rows\"\n  [scrollbarH]=\"true\"\n>\n  <ngx-datatable-column name=\"{{ 'HEADER.NAME' | translate }}\" prop=\"full_name\" [width]=\"280\">\n    <ng-template let-row=\"row\" let-name=\"value\" ngx-datatable-cell-template>\n      <div class=\"d-flex align-items-center\">\n        <div *ngIf=\"row.avatar.length > 0; else customAvatar\">\n          <img\n            class=\"rounded-circle mr-1\"\n            src=\"assets/images/portrait/small/{{ row.avatar }}\"\n            height=\"32\"\n            width=\"32\"\n            alt=\"datatable-avatar\"\n          />\n        </div>\n        <ng-template #customAvatar>\n          <div\n            class=\"avatar mr-1 ml-0\"\n            [ngClass]=\"{\n              'bg-light-primary': row.status == '1',\n              'bg-light-success': row.status == '2',\n              'bg-light-danger': row.status == '3',\n              'bg-light-warning': row.status == '4',\n              'bg-light-info': row.status == '5'\n            }\"\n          >\n            <div class=\"avatar-content\">{{ name | initials }}</div>\n          </div>\n        </ng-template>\n        <div class=\"cell-line-height\">\n          <p class=\"font-medium-1 line-height-1 mb-0\">{{ name }}</p>\n          <span class=\"text-muted font-small-2\"> {{ row.post }}</span>\n        </div>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column\n    name=\"{{ 'HEADER.EMAIL' | translate }}\"\n    prop=\"email\"\n    [width]=\"250\"\n  ></ngx-datatable-column>\n  <ngx-datatable-column name=\"{{ 'HEADER.AGE' | translate }}\" prop=\"age\" [width]=\"50\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"{{ 'HEADER.STATUS' | translate }}\" prop=\"status\" [width]=\"120\">\n    <ng-template let-status=\"value\" ngx-datatable-cell-template>\n      <div\n        class=\"badge badge-pill\"\n        [ngClass]=\"{\n          'badge-light-primary': status == '1',\n          'badge-light-success': status == '2',\n          'badge-light-danger': status == '3',\n          'badge-light-warning': status == '4',\n          'badge-light-info': status == '5'\n        }\"\n      >\n        {{\n          status == 1\n            ? 'Current'\n            : status == 2\n            ? 'Professional'\n            : status == 3\n            ? 'Rejected'\n            : status == 4\n            ? 'Resigned'\n            : status == 5\n            ? 'Applied'\n            : 'Applied'\n        }}\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"{{ 'HEADER.ACTIONS' | translate }}\" [width]=\"120\" [sortable]=\"false\">\n    <ng-template ngx-datatable-cell-template>\n      <div class=\"d-flex align-items-center\">\n        <div ngbDropdown container=\"body\">\n          <a\n            ngbDropdownToggle\n            href=\"javascript:void(0);\"\n            class=\"hide-arrow\"\n            id=\"dropdownBrowserState\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            <i data-feather=\"more-vertical\" class=\"text-primary cursor-pointer mr-50\"></i>\n          </a>\n          <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBrowserState\">\n            <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n              ><i data-feather=\"file-text\" class=\"mr-50\"></i> Details</a\n            >\n            <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n              ><i data-feather=\"archive\" class=\"mr-50\"></i> Archive</a\n            >\n            <a href=\"javascript:void(0)\" ngbDropdownItem class=\"d-flex align-items-center\"\n              ><i data-feather=\"trash-2\" class=\"mr-50\"></i> Delete</a\n            >\n          </div>\n        </div>\n\n        <i data-feather=\"edit\" class=\"text-primary cursor-pointer\"></i>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>\n  ",
  ts: "\n  constructor( private _coreTranslationService: CoreTranslationService) {\n    this._coreTranslationService.translate(english, french, german, portuguese);\n  }\n\n  /**\n   * On init\n   */\n  ngOnInit() {\n    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {\n      this.rows = response;\n      this.tempData = this.rows;\n    });\n  }\n  "
};

/***/ }),

/***/ 3070:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/de.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'de',
  data: {
    HEADER: {
      NAME: 'NAME',
      EMAIL: 'EMAIL',
      AGE: 'ALTER',
      STATUS: 'STATUS',
      ACTIONS: 'AKTIONEN'
    }
  }
};

/***/ }),

/***/ 55910:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/en.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'en',
  data: {
    HEADER: {
      NAME: 'NAME',
      EMAIL: 'EMAIL',
      AGE: 'AGE',
      STATUS: 'STATUS',
      ACTIONS: 'ACTIONS'
    }
  }
};

/***/ }),

/***/ 2998:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/fr.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'fr',
  data: {
    HEADER: {
      NAME: 'NOM',
      EMAIL: 'EMAIL',
      AGE: 'ÂGE',
      STATUS: 'STATUT',
      ACTIONS: 'ACTIONS'
    }
  }
};

/***/ }),

/***/ 96699:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/pt.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'pt',
  data: {
    HEADER: {
      NAME: 'NOME',
      EMAIL: 'O EMAIL',
      AGE: 'ERA',
      STATUS: 'STATUS',
      ACTIONS: 'AÇÕES'
    }
  }
};

/***/ }),

/***/ 52228:
/*!******************************************************!*\
  !*** ./src/app/main/tables/table/table.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": function() { return /* binding */ TableComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4665);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);






var TableComponent = /*#__PURE__*/function () {
  function TableComponent() {
    (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TableComponent);
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TableComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // content header
      this.contentHeader = {
        headerTitle: 'Bootstrap Tables',
        actionButton: true,
        breadcrumb: {
          type: '',
          links: [{
            name: 'Home',
            isLink: true,
            link: '/'
          }, {
            name: 'Table',
            isLink: true,
            link: '/'
          }, {
            name: 'Bootstrap Tables',
            isLink: false
          }]
        }
      };
    }
  }]);

  return TableComponent;
}();

TableComponent.ɵfac = function TableComponent_Factory(t) {
  return new (t || TableComponent)();
};

TableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TableComponent,
  selectors: [["app-table"]],
  decls: 2354,
  vars: 1,
  consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "basic-table", 1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "card-text"], [1, "table-responsive"], [1, "table"], ["src", "assets/images/icons/angular.svg", "height", "20", "width", "20", "alt", "Angular", 1, "mr-75"], [1, "font-weight-bold"], [1, "avatar-group"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "placement", "top", "container", "body", "title", "", "ngbTooltip", "Lilian Nenez", 1, "avatar", "pull-up", "my-0"], ["src", "assets/images/portrait/small/avatar-s-5.jpg", "alt", "Avatar", "height", "26", "width", "26"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "placement", "top", "container", "body", "title", "", "ngbTooltip", "Alberto Glotzbach", 1, "avatar", "pull-up", "my-0"], ["src", "assets/images/portrait/small/avatar-s-6.jpg", "alt", "Avatar", "height", "26", "width", "26"], ["src", "assets/images/portrait/small/avatar-s-7.jpg", "alt", "Avatar", "height", "26", "width", "26"], [1, "badge", "badge-pill", "badge-light-primary", "mr-1"], [1, "overflow-hidden"], ["ngbDropdown", "", "container", "body"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", 1, "btn", "btn-sm", "hide-arrow"], ["data-feather", "more-vertical"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", "href", "javascript:void(0);"], ["data-feather", "edit-2", 1, "mr-50"], ["data-feather", "trash", 1, "mr-50"], ["src", "assets/images/icons/react.svg", "height", "20", "width", "20", "alt", "React", 1, "mr-75"], [1, "badge", "badge-pill", "badge-light-success", "mr-1"], ["src", "assets/images/icons/vuejs.svg", "height", "20", "width", "20", "alt", "Vuejs", 1, "mr-75"], [1, "badge", "badge-pill", "badge-light-info", "mr-1"], ["src", "assets/images/icons/bootstrap.svg", "height", "20", "width", "20", "alt", "Bootstrap", 1, "mr-75"], [1, "badge", "badge-pill", "badge-light-warning", "mr-1"], ["id", "dark-table", 1, "row"], [1, "table", "table-dark"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", 1, "btn", "btn-sm", "text-white", "hide-arrow"], ["id", "table-head", 1, "row"], [1, "highlighter-rouge"], [1, "thead-dark"], [1, "card-body", "mt-2"], [1, "thead-light"], ["id", "table-striped", 1, "row"], [1, "table", "table-striped"], ["id", "table-striped-dark", 1, "row"], [1, "table", "table-striped", "table-dark"], ["id", "table-bordered", 1, "row"], [1, "table", "table-bordered"], ["id", "table-borderless", 1, "row"], [1, "table", "table-borderless"], ["id", "table-hover-row", 1, "row"], [1, "table", "table-hover"], ["id", "table-small", 1, "row"], [1, "table", "table-sm"], ["src", "assets/images/icons/angular.svg", "alt", "Angular", "width", "18", "height", "18", 1, "mr-75"], ["src", "assets/images/portrait/small/avatar-s-5.jpg", "alt", "Avatar", "height", "22", "width", "22"], ["src", "assets/images/portrait/small/avatar-s-6.jpg", "alt", "Avatar", "height", "22", "width", "22"], ["src", "assets/images/portrait/small/avatar-s-7.jpg", "alt", "Avatar", "height", "22", "width", "22"], ["src", "assets/images/icons/react.svg", "alt", "React", "width", "18", "height", "18", 1, "mr-75"], ["src", "assets/images/icons/vuejs.svg", "alt", "Vuejs", "width", "18", "height", "18", 1, "mr-75"], ["src", "assets/images/icons/bootstrap.svg", "alt", "Bootstrap", "width", "18", "height", "18", 1, "mr-75"], ["id", "table-contextual", 1, "row"], ["href", "https://getbootstrap.com/docs/4.3/content/tables/IDcontextual-classes", "target", "_blank"], [1, "table-default"], ["src", "assets/images/icons/figma.svg", "height", "20", "width", "20", "alt", "Figma", 1, "mr-75"], [1, "table-active"], [1, "table-primary"], [1, "table-secondary"], [1, "badge", "badge-pill", "badge-light-secondary", "mr-1"], [1, "table-success"], [1, "table-danger"], [1, "badge", "badge-pill", "badge-light-danger", "mr-1"], [1, "table-warning"], [1, "table-info"], [1, "table-light"], [1, "table-dark"], [1, "badge", "badge-pill", "badge-light-dark", "mr-1"], ["id", "table-without-card", 1, "row"], [1, "col-12", "my-2"], [1, "mb-1"], ["id", "table-responsive", 1, "row"], ["href", "https://getbootstrap.com/docs/4.3/content/tables/#responsive-tables", "target", "_blank"], [1, "alert", "alert-info"], [1, "alert-body"], [1, "text-warning"], [1, "table", "mb-0"], ["scope", "col", 1, "text-nowrap"], [1, "text-nowrap"], ["id", "table-hover-animation", 1, "row"], [1, "table", "table-hover-animation"]],
  template: function TableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-content-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Table Basic");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Using the most basic table Leanne Grahamup, here\u2019s how ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, ".table");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " -based tables look in Bootstrap. You can use any example of below table for your table and it can be use with any type of bootstrap tables. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "table", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](102, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](104, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](106, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](120, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](125, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](133, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](135, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](137, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](144, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](147, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](151, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "Dark Table");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, " You can also invert the colors\u2014with light text on dark backgrounds\u2014with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, ".table-dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, " class with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, ".table");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, " class. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "table", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](186, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](194, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](196, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](198, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](202, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](205, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](208, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](209, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](212, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](214, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](217, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](220, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](221, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](225, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](227, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](229, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](234, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](236, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](239, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](241, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](242, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](243, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](245, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](247, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](248, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](250, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](252, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](255, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](256, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](258, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](259, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](260, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](261, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](262, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](263, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](265, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](267, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](270, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](271, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](272, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](274, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](276, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](277, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](278, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](279, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](280, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](281, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](282, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](283, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](284, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](285, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](287, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](289, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](290, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](291, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](292, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](294, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](298, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](300, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](301, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](302, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](303, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](304, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](305, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](306, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](307, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](308, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](309, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](310, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](311, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](312, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](313, "Table head options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](314, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](316, " Similar to tables and dark tables, use the modifier classes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](317, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318, ".thead-dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](319, " to make ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](320, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](321, "<thead>");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](322, " s appear dark. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](323, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "table", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](325, "thead", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](326, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](327, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](328, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](330, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](331, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](332, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](333, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](334, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](335, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](336, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](337, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](338, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](339, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](340, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](341, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](342, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](343, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](344, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](345, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](346, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](347, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](348, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](349, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](350, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](351, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](352, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](353, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](354, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](355, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](356, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](357, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](358, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](359, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](360, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](361, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](362, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](363, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](364, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](365, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](366, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](367, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](368, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](369, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](370, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](371, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](372, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](373, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](374, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](375, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](376, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](377, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](378, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](379, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](380, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](381, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](382, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](383, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](384, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](385, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](386, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](387, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](388, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](389, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](390, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](391, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](392, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](393, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](394, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](395, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](396, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](397, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](398, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](399, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](401, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](402, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](403, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](404, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](405, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](406, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](407, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](408, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](409, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](410, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](411, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](412, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](413, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](414, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](415, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](416, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](417, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](418, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](419, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](420, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](421, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](422, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](423, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](424, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](425, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](426, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](427, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](428, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](429, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](430, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](431, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](432, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](433, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](434, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](435, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](436, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](437, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](438, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](439, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](440, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](441, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](442, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](443, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](444, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](445, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](446, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](447, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](448, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](449, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](450, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](451, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](452, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](453, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](454, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](455, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](456, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](457, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](458, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](459, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](460, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](461, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](462, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](463, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](464, " Use the modifier class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](465, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](466, ".thead-light");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](467, " to make ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](468, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](469, "<thead>");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](470, " s appear light. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](471, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](472, "table", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](473, "thead", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](474, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](475, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](476, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](477, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](478, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](479, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](480, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](481, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](482, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](483, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](484, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](485, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](486, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](487, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](488, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](489, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](490, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](491, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](492, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](493, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](494, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](495, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](496, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](497, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](498, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](499, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](500, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](501, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](502, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](503, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](504, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](505, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](506, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](507, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](508, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](509, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](510, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](511, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](512, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](513, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](514, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](515, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](516, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](517, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](518, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](519, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](520, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](521, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](522, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](523, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](524, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](525, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](526, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](527, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](528, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](529, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](530, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](531, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](532, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](533, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](534, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](535, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](536, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](537, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](538, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](539, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](540, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](541, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](542, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](543, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](544, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](545, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](546, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](547, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](548, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](549, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](550, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](551, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](552, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](553, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](554, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](555, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](556, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](557, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](558, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](559, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](560, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](561, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](562, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](563, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](564, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](565, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](566, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](567, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](568, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](569, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](570, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](571, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](572, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](573, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](574, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](575, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](576, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](577, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](578, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](579, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](580, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](581, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](582, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](583, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](584, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](585, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](586, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](587, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](588, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](589, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](590, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](591, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](592, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](593, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](594, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](595, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](596, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](597, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](598, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](599, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](600, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](601, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](602, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](603, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](604, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](605, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](606, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](607, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](608, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](609, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](610, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](611, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](612, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](613, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](614, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](615, "Striped rows");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](616, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](617, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](618, " Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](619, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](620, ".table-striped");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](621, " to add zebra-striping to any table row within the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](622, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](623, "<tbody>");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](624, " . This styling doesn't work in IE8 and below as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](625, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](626, ":nth-child");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](627, " CSS selector isn't supported. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](628, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](629, "table", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](630, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](631, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](632, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](633, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](634, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](635, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](636, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](637, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](638, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](639, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](640, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](641, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](642, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](643, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](644, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](645, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](646, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](647, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](648, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](649, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](650, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](651, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](652, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](653, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](654, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](655, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](656, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](657, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](658, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](659, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](660, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](661, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](662, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](663, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](664, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](665, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](666, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](667, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](668, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](669, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](670, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](671, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](672, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](673, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](674, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](675, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](676, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](677, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](678, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](679, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](680, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](681, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](682, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](683, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](684, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](685, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](686, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](687, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](688, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](689, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](690, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](691, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](692, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](693, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](694, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](695, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](696, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](697, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](698, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](699, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](700, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](701, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](702, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](703, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](704, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](705, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](706, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](707, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](708, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](709, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](710, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](711, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](712, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](713, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](714, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](715, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](716, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](717, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](718, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](719, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](720, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](721, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](722, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](723, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](724, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](725, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](726, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](727, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](728, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](729, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](730, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](731, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](732, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](733, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](734, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](735, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](736, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](737, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](738, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](739, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](740, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](741, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](742, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](743, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](744, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](745, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](746, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](747, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](748, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](749, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](750, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](751, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](752, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](753, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](754, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](755, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](756, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](757, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](758, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](759, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](760, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](761, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](762, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](763, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](764, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](765, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](766, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](767, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](768, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](769, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](770, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](771, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](772, "Striped rows with inverse dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](773, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](774, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](775, " Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](776, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](777, ".table-dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](778, " with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](779, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](780, ".table-striped");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](781, " to add zebra-striping to any inverse table row within the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](782, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](783, "<tbody>");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](784, " . This styling doesn't work in IE8 and below as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](785, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](786, ":nth-child");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](787, " CSS selector isn't supported. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](788, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](789, "table", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](790, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](791, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](792, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](793, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](794, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](795, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](796, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](797, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](798, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](799, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](800, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](801, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](802, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](803, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](804, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](805, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](806, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](807, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](808, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](809, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](810, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](811, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](812, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](813, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](814, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](815, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](816, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](817, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](818, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](819, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](820, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](821, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](822, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](823, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](824, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](825, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](826, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](827, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](828, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](829, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](830, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](831, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](832, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](833, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](834, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](835, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](836, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](837, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](838, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](839, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](840, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](841, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](842, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](843, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](844, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](845, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](846, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](847, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](848, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](849, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](850, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](851, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](852, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](853, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](854, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](855, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](856, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](857, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](858, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](859, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](860, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](861, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](862, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](863, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](864, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](865, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](866, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](867, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](868, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](869, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](870, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](871, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](872, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](873, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](874, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](875, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](876, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](877, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](878, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](879, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](880, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](881, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](882, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](883, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](884, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](885, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](886, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](887, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](888, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](889, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](890, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](891, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](892, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](893, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](894, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](895, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](896, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](897, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](898, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](899, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](900, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](901, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](902, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](903, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](904, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](905, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](906, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](907, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](908, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](909, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](910, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](911, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](912, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](913, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](914, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](915, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](916, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](917, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](918, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](919, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](920, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](921, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](922, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](923, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](924, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](925, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](926, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](927, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](928, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](929, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](930, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](931, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](932, "Bordered table");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](933, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](934, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](935, " Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](936, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](937, ".table-bordered");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](938, " for borders on all sides of the table and cells. For Inverse Dark Table, add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](939, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](940, ".table-dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](941, " along with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](942, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](943, " .table-bordered");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](944, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](945, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](946, "table", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](947, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](948, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](949, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](950, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](951, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](952, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](953, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](954, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](955, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](956, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](957, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](958, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](959, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](960, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](961, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](962, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](963, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](964, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](965, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](966, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](967, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](968, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](969, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](970, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](971, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](972, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](973, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](974, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](975, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](976, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](977, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](978, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](979, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](980, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](981, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](982, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](983, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](984, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](985, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](986, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](987, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](988, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](989, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](990, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](991, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](992, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](993, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](994, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](995, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](996, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](997, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](998, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](999, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1000, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1001, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1002, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1003, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1004, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1005, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1006, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1007, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1008, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1009, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1010, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1011, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1012, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1013, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1014, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1015, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1016, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1017, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1018, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1019, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1020, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1021, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1022, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1023, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1024, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1025, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1026, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1027, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1028, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1029, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1030, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1031, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1032, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1033, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1034, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1035, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1036, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1037, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1038, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1039, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1040, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1041, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1042, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1043, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1044, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1045, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1046, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1047, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1048, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1049, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1050, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1051, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1052, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1053, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1054, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1055, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1056, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1057, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1058, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1059, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1060, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1061, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1062, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1063, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1064, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1065, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1066, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1067, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1068, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1069, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1070, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1071, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1072, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1073, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1074, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1075, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1076, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1077, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1078, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1079, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1080, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1081, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1082, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1083, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1084, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1085, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1086, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1087, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1088, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1089, "Borderless Table");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1090, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1091, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1092, " Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1093, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1094, ".table-borderless");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1095, " for a table without borders. It can also be used on dark tables. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1096, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1097, "table", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1098, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1099, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1100, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1101, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1102, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1103, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1104, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1105, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1106, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1107, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1108, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1109, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1110, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1111, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1112, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1113, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1114, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1115, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1116, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1117, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1118, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1119, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1120, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1121, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1122, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1123, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1124, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1125, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1126, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1127, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1128, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1129, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1130, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1131, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1132, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1133, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1134, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1135, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1136, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1137, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1138, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1139, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1140, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1141, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1142, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1143, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1144, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1145, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1146, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1147, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1148, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1149, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1150, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1151, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1152, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1153, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1154, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1155, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1156, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1157, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1158, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1159, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1160, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1161, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1162, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1163, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1164, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1165, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1166, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1167, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1168, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1169, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1170, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1171, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1172, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1173, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1174, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1175, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1176, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1177, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1178, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1179, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1180, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1181, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1182, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1183, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1184, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1185, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1186, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1187, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1188, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1189, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1190, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1191, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1192, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1193, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1194, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1195, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1196, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1197, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1198, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1199, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1200, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1201, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1202, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1203, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1204, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1205, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1206, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1207, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1208, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1209, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1210, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1211, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1212, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1213, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1214, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1215, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1216, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1217, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1218, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1219, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1220, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1221, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1222, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1223, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1224, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1225, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1226, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1227, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1228, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1229, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1230, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1231, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1232, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1233, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1234, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1235, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1236, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1237, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1238, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1239, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1240, "Hoverable rows");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1241, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1242, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1243, " Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1244, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1245, ".table-hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1246, " to enable a hover state on table rows within a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1247, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1248, "<tbody>");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1249, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1250, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1251, "table", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1252, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1253, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1254, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1255, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1256, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1257, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1258, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1259, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1260, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1261, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1262, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1263, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1264, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1265, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1266, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1267, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1268, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1269, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1270, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1271, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1272, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1273, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1274, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1275, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1276, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1277, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1278, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1279, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1280, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1281, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1282, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1283, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1284, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1285, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1286, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1287, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1288, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1289, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1290, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1291, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1292, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1293, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1294, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1295, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1296, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1297, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1298, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1299, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1300, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1301, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1302, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1303, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1304, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1305, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1306, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1307, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1308, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1309, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1310, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1311, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1312, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1313, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1314, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1315, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1316, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1317, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1318, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1319, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1320, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1321, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1322, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1323, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1324, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1325, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1326, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1327, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1328, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1329, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1330, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1331, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1332, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1333, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1334, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1335, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1336, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1337, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1338, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1339, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1340, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1341, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1342, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1343, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1344, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1345, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1346, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1347, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1348, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1349, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1350, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1351, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1352, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1353, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1354, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1355, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1356, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1357, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1358, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1359, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1360, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1361, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1362, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1363, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1364, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1365, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1366, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1367, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1368, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1369, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1370, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1371, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1372, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1373, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1374, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1375, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1376, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1377, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1378, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1379, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1380, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1381, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1382, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1383, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1384, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1385, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1386, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1387, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1388, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1389, "div", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1390, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1391, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1392, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1393, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1394, "Small Table");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1395, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1396, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1397, " Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1398, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1399, ".table-sm");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1400, " class with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1401, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1402, ".table");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1403, " to display small size table. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1404, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1405, "table", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1406, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1407, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1408, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1409, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1410, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1411, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1412, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1413, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1414, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1415, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1416, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1417, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1418, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1419, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1420, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1421, "img", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1422, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1423, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1424, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1425, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1426, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1427, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1428, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1429, "img", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1430, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1431, "img", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1432, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1433, "img", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1434, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1435, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1436, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1437, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1438, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1439, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1440, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1441, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1442, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1443, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1444, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1445, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1446, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1447, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1448, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1449, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1450, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1451, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1452, "img", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1453, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1454, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1455, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1456, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1457, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1458, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1459, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1460, "img", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1461, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1462, "img", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1463, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1464, "img", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1465, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1466, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1467, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1468, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1469, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1470, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1471, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1472, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1473, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1474, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1475, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1476, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1477, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1478, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1479, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1480, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1481, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1482, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1483, "img", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1484, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1485, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1486, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1487, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1488, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1489, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1490, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1491, "img", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1492, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1493, "img", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1494, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1495, "img", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1496, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1497, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1498, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1499, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1500, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1501, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1502, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1503, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1504, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1505, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1506, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1507, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1508, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1509, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1510, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1511, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1512, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1513, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1514, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1515, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1516, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1517, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1518, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1519, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1520, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1521, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1522, "img", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1523, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1524, "img", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1525, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1526, "img", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1527, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1528, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1529, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1530, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1531, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1532, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1533, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1534, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1535, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1536, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1537, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1538, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1539, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1540, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1541, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1542, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1543, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1544, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1545, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1546, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1547, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1548, "Contextual classes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1549, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1550, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1551, " Use contextual classes to color table rows or individual cells. Read full documnetation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1552, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1553, "here.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1554, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1555, "table", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1556, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1557, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1558, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1559, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1560, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1561, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1562, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1563, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1564, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1565, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1566, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1567, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1568, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1569, "tr", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1570, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1571, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1572, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1573, "Figma Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1574, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1575, "Ronnie Shane");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1576, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1577, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1578, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1579, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1580, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1581, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1582, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1583, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1584, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1585, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1586, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1587, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1588, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1589, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1590, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1591, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1592, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1593, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1594, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1595, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1596, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1597, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1598, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1599, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1600, "tr", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1601, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1602, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1603, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1604, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1605, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1606, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1607, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1608, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1609, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1610, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1611, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1612, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1613, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1614, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1615, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1616, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1617, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1618, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1619, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1620, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1621, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1622, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1623, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1624, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1625, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1626, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1627, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1628, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1629, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1630, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1631, "tr", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1632, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1633, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1634, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1635, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1636, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1637, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1638, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1639, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1640, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1641, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1642, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1643, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1644, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1645, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1646, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1647, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1648, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1649, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1650, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1651, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1652, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1653, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1654, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1655, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1656, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1657, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1658, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1659, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1660, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1661, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1662, "tr", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1663, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1664, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1665, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1666, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1667, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1668, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1669, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1670, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1671, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1672, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1673, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1674, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1675, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1676, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1677, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1678, "span", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1679, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1680, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1681, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1682, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1683, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1684, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1685, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1686, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1687, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1688, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1689, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1690, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1691, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1692, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1693, "tr", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1694, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1695, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1696, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1697, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1698, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1699, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1700, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1701, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1702, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1703, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1704, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1705, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1706, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1707, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1708, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1709, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1710, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1711, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1712, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1713, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1714, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1715, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1716, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1717, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1718, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1719, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1720, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1721, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1722, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1723, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1724, "tr", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1725, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1726, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1727, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1728, "Figma Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1729, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1730, "Janne Ale");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1731, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1732, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1733, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1734, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1735, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1736, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1737, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1738, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1739, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1740, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1741, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1742, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1743, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1744, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1745, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1746, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1747, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1748, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1749, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1750, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1751, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1752, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1753, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1754, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1755, "tr", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1756, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1757, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1758, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1759, "React Custom");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1760, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1761, "Ted Richer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1762, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1763, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1764, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1765, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1766, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1767, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1768, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1769, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1770, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1771, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1772, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1773, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1774, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1775, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1776, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1777, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1778, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1779, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1780, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1781, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1782, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1783, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1784, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1785, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1786, "tr", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1787, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1788, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1789, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1790, "Latest Bootstrap");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1791, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1792, "Perry Parker");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1793, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1794, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1795, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1796, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1797, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1798, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1799, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1800, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1801, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1802, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1803, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1804, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1805, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1806, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1807, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1808, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1809, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1810, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1811, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1812, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1813, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1814, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1815, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1816, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1817, "tr", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1818, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1819, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1820, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1821, "Angular UI");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1822, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1823, "Ana Bell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1824, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1825, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1826, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1827, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1828, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1829, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1830, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1831, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1832, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1833, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1834, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1835, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1836, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1837, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1838, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1839, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1840, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1841, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1842, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1843, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1844, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1845, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1846, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1847, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1848, "tr", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1849, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1850, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1851, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1852, "Bootstrap UI");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1853, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1854, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1855, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1856, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1857, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1858, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1859, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1860, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1861, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1862, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1863, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1864, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1865, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1866, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1867, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1868, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1869, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1870, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1871, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1872, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1873, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1874, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1875, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1876, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1877, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1878, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1879, "div", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1880, "div", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1881, "h5", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1882, "Table without card");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1883, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1884, "table", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1885, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1886, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1887, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1888, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1889, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1890, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1891, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1892, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1893, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1894, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1895, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1896, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1897, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1898, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1899, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1900, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1901, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1902, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1903, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1904, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1905, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1906, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1907, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1908, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1909, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1910, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1911, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1912, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1913, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1914, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1915, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1916, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1917, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1918, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1919, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1920, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1921, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1922, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1923, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1924, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1925, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1926, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1927, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1928, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1929, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1930, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1931, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1932, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1933, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1934, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1935, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1936, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1937, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1938, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1939, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1940, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1941, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1942, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1943, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1944, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1945, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1946, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1947, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1948, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1949, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1950, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1951, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1952, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1953, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1954, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1955, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1956, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1957, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1958, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1959, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1960, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1961, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1962, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1963, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1964, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1965, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1966, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1967, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1968, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1969, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1970, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1971, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1972, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1973, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1974, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1975, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1976, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1977, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1978, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1979, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1980, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1981, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1982, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1983, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1984, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1985, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1986, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1987, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1988, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1989, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1990, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1991, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1992, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1993, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1994, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1995, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1996, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1997, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1998, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1999, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2000, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2001, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2002, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2003, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2004, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2005, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2006, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2007, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2008, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2009, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2010, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2011, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2012, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2013, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2014, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2015, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2016, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2017, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2018, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2019, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2020, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2021, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2022, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2023, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2024, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2025, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2026, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2027, "Responsive tables");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2028, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2029, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2030, " Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by adding ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2031, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2032, ".table-responsive");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2033, " class on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2034, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2035, ".table");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2036, " . Or, pick a maximum breakpoint with which to have a responsive table up to by adding ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2037, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2038, ".table-responsive{-sm|-md|-lg|-xl }");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2039, " . Read full documentation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2040, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2041, "here.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2042, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2043, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2044, "h4", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2045, "Vertical clipping/truncation");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2046, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2047, " Responsive tables make use of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2048, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2049, "overflow-y:hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2050, ", which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2051, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2052, "table", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2053, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2054, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2055, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2056, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2057, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2058, "Heading 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2059, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2060, "Heading 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2061, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2062, "Heading 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2063, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2064, "Heading 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2065, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2066, "Heading 5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2067, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2068, "Heading 6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2069, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2070, "Heading 7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2071, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2072, "Heading 8");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2073, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2074, "Heading 9");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2075, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2076, "Heading 10");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2077, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2078, "Heading 11");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2079, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2080, "Heading 12");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2081, "th", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2082, "Heading 13");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2083, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2084, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2085, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2086, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2087, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2088, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2089, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2090, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2091, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2092, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2093, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2094, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2095, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2096, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2097, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2098, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2099, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2100, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2101, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2102, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2103, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2104, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2105, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2106, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2107, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2108, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2109, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2110, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2111, "td", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2112, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2113, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2114, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2115, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2116, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2117, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2118, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2119, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2120, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2121, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2122, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2123, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2124, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2125, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2126, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2127, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2128, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2129, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2130, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2131, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2132, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2133, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2134, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2135, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2136, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2137, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2138, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2139, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2140, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2141, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2142, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2143, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2144, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2145, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2146, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2147, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2148, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2149, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2150, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2151, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2152, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2153, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2154, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2155, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2156, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2157, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2158, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2159, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2160, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2161, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2162, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2163, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2164, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2165, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2166, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2167, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2168, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2169, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2170, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2171, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2172, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2173, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2174, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2175, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2176, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2177, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2178, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2179, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2180, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2181, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2182, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2183, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2184, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2185, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2186, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2187, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2188, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2189, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2190, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2191, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2192, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2193, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2194, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2195, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2196, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2197, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2198, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2199, "Table cell");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2200, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2201, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2202, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2203, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2204, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2205, "Table Hover Animation");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2206, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2207, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2208, " Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2209, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2210, ".table-hover-animation");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2211, " to enable a hover stat with animation on table rows within a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2212, "code", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2213, "<tbody>");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2214, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2215, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2216, "table", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2217, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2218, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2219, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2220, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2221, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2222, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2223, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2224, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2225, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2226, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2227, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2228, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2229, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2230, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2231, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2232, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2233, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2234, "Angular Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2235, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2236, "Peter Charls");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2237, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2238, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2239, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2240, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2241, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2242, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2243, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2244, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2245, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2246, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2247, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2248, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2249, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2250, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2251, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2252, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2253, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2254, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2255, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2256, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2257, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2258, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2259, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2260, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2261, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2262, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2263, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2264, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2265, "React Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2266, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2267, "Ronald Frest");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2268, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2269, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2270, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2271, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2272, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2273, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2274, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2275, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2276, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2277, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2278, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2279, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2280, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2281, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2282, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2283, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2284, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2285, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2286, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2287, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2288, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2289, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2290, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2291, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2292, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2293, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2294, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2295, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2296, "Vuejs Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2297, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2298, "Jack Obes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2299, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2300, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2301, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2302, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2303, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2304, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2305, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2306, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2307, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2308, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2309, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2310, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2311, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2312, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2313, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2314, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2315, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2316, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2317, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2318, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2319, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2320, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2321, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2322, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2323, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2324, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2325, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2326, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2327, "Bootstrap Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2328, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2329, "Jerry Milton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2330, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2331, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2332, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2333, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2334, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2335, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2336, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2337, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2338, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2339, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2340, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2341, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2342, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2343, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2344, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2345, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2346, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2347, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2348, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2349, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2350, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2351, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2352, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2353, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
    }
  },
  directives: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownItem],
  encapsulation: 2
});

/***/ }),

/***/ 91770:
/*!***************************************************!*\
  !*** ./src/app/main/tables/table/table.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableModule": function() { return /* binding */ TableModule; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.module */ 62351);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 79079);
/* harmony import */ var app_main_tables_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/tables/table/table.component */ 52228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);










var routes = [{
  path: 'table',
  component: app_main_tables_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent,
  data: {
    animation: 'table'
  }
}];
var TableModule = /*#__PURE__*/(0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function TableModule() {
  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TableModule);
});

TableModule.ɵfac = function TableModule_Factory(t) {
  return new (t || TableModule)();
};

TableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: TableModule
});
TableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_3__.CardSnippetModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TableModule, {
    declarations: [app_main_tables_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_3__.CardSnippetModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]
  });
})();

/***/ }),

/***/ 51007:
/*!**********************************************!*\
  !*** ./src/app/main/tables/tables.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesModule": function() { return /* binding */ TablesModule; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var app_main_tables_table_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/tables/table/table.module */ 91770);
/* harmony import */ var app_main_tables_datatables_datatables_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/tables/datatables/datatables.module */ 91342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);





var TablesModule = /*#__PURE__*/(0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function TablesModule() {
  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TablesModule);
});

TablesModule.ɵfac = function TablesModule_Factory(t) {
  return new (t || TablesModule)();
};

TablesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: TablesModule
});
TablesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[app_main_tables_datatables_datatables_module__WEBPACK_IMPORTED_MODULE_3__.DatatablesModule, app_main_tables_table_table_module__WEBPACK_IMPORTED_MODULE_2__.TableModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TablesModule, {
    imports: [app_main_tables_datatables_datatables_module__WEBPACK_IMPORTED_MODULE_3__.DatatablesModule, app_main_tables_table_table_module__WEBPACK_IMPORTED_MODULE_2__.TableModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_main_tables_tables_module_ts.js.map