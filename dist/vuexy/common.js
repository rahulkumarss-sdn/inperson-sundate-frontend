(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["common"],{

/***/ 57261:
/*!********************************************************************!*\
  !*** ./src/app/main/apps/adminmoderator/adminmoderator.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminmoderatorService": function() { return /* binding */ AdminmoderatorService; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 18260);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);






var AdminmoderatorService = /*#__PURE__*/function () {
  function AdminmoderatorService(_httpClient) {
    (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AdminmoderatorService);

    this._httpClient = _httpClient;
    this.admin = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
    this.changeAdmin = this.admin.asObservable();
  }

  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AdminmoderatorService, [{
    key: "updateAdmin",
    value: function updateAdmin(data) {
      this.admin.next(data);
    }
  }, {
    key: "deleteModerator",
    value: function deleteModerator(id) {
      return this._httpClient.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/deletemoderators/").concat(id));
    }
  }, {
    key: "addModerator",
    value: function addModerator(data) {
      return this._httpClient.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/"), data);
    }
  }, {
    key: "getAll",
    value: function getAll(page, limit, name, role) {
      return this._httpClient.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/getAllmoderators?page=").concat(page, "&limit=").concat(limit, "&username=").concat(name, "&role=").concat(role));
    }
  }, {
    key: "updateAdminData",
    value: function updateAdminData(id, data) {
      return this._httpClient.patch("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/edituser/").concat(id), data);
    }
  }]);

  return AdminmoderatorService;
}();

AdminmoderatorService.ɵfac = function AdminmoderatorService_Factory(t) {
  return new (t || AdminmoderatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};

AdminmoderatorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AdminmoderatorService,
  factory: AdminmoderatorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 98992:
/*!***************************************************************!*\
  !*** ./src/app/main/apps/user/user-edit/user-edit.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditService": function() { return /* binding */ UserEditService; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);





var UserEditService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  function UserEditService(_httpClient) {
    (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserEditService);

    this._httpClient = _httpClient; // Set the defaults

    this.onUserEditChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
  }
  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */


  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserEditService, [{
    key: "resolve",
    value: function resolve(route, state) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        Promise.all([_this.getApiData()]).then(function () {
          resolve();
        }, reject);
      });
    }
    /**
     * Get API Data
     */

  }, {
    key: "getApiData",
    value: function getApiData() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2._httpClient.get('api/users-data').subscribe(function (response) {
          _this2.apiData = response;

          _this2.onUserEditChanged.next(_this2.apiData);

          resolve(_this2.apiData);
        }, reject);
      });
    }
  }]);

  return UserEditService;
}();

UserEditService.ɵfac = function UserEditService_Factory(t) {
  return new (t || UserEditService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

UserEditService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UserEditService,
  factory: UserEditService.ɵfac
});

/***/ }),

/***/ 61115:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 72363:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 97718:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 61115);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 85655:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 16214:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 28629:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 71110:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 55966:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 13795:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 73842:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 72363);

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 71110);

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 81858);

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 55966);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 55997:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 97718);

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 28629);

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 81858);

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 13795);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 81858:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 61115);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ })

}]);
//# sourceMappingURL=common.js.map