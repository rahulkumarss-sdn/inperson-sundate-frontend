"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["default-src_app_main_dashboard_dashboard_module_ts"],{

/***/ 90062:
/*!************************************************!*\
  !*** ./src/app/main/apps/user/user.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 18260);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);






var UserService = /*#__PURE__*/function () {
  function UserService(http) {
    (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserService);

    this.http = http;
    this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
    this.changeUser = this.user.asObservable();
  }

  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserService, [{
    key: "updateUser",
    value: function updateUser(data) {
      this.user.next(data);
    }
  }, {
    key: "getUserById",
    value: function getUserById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/getUserById/").concat(id));
    }
  }, {
    key: "getQuestionAnswerByUserId",
    value: function getQuestionAnswerByUserId(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/user/answer/").concat(id));
    }
  }, {
    key: "getUserImagesById",
    value: function getUserImagesById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/getUserImages/").concat(id));
    }
  }, {
    key: "getUserVideosById",
    value: function getUserVideosById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/getUserVideos/").concat(id));
    }
  }, {
    key: "deleteUserById",
    value: function deleteUserById(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/deleteUser/").concat(id));
    }
  }, {
    key: "updateUserData",
    value: function updateUserData(id, data) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/editUserDetails/").concat(id), data);
    }
  }, {
    key: "changeUserImageStatus",
    value: function changeUserImageStatus(id, data) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/blockUserImage/").concat(id), data);
    }
  }, {
    key: "getAll",
    value: function getAll(page, limit, name, status) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/getAllUserByPage?page=").concat(page, "&limit=").concat(limit, "&firstname=").concat(name, "&isBlocked=").concat(status));
    }
  }, {
    key: "getRegisteredToday",
    value: function getRegisteredToday(page, limit, name) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/registeredToday?page=").concat(page, "&limit=").concat(limit, "&firstname=").concat(name));
    }
  }, {
    key: "getBlockedUsers",
    value: function getBlockedUsers(page, limit, name) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/getallBlockedusers?page=").concat(page, "&limit=").concat(limit, "&firstname=").concat(name));
    }
  }, {
    key: "getOnlineUsers",
    value: function getOnlineUsers(page, limit, name) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/onlineUsers?page=").concat(page, "&limit=").concat(limit, "&firstname=").concat(name));
    }
  }, {
    key: "updateStatus",
    value: function updateStatus(id, data) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/updateBlockeduser/").concat(id), data);
    }
  }]);

  return UserService;
}();

UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};

UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 41946:
/*!*****************************************************************!*\
  !*** ./src/app/main/dashboard/analytics/analytics.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsComponent": function() { return /* binding */ AnalyticsComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 84452);
/* harmony import */ var app_colors_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/colors.const */ 57874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/auth/service */ 33650);
/* harmony import */ var app_main_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/dashboard/dashboard.service */ 66977);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 13113);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var app_main_apps_invoice_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/invoice/invoice-list/invoice-list.component */ 44295);














var _c0 = ["gainedChartRef"];
var _c1 = ["orderChartRef"];
var _c2 = ["avgSessionChartRef"];
var _c3 = ["supportChartRef"];
var _c4 = ["salesChartRef"];

function AnalyticsComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span", 133);
  }
}

function AnalyticsComponent_ng_container_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", user_r8.firstName, " ", user_r8.lastName, " (", user_r8.role, "), ");
  }
}

function AnalyticsComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AnalyticsComponent_ng_container_22_span_1_Template, 2, 3, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.users);
  }
}

var _c5 = function _c5() {
  return {
    show: false
  };
};

var _c6 = function _c6() {
  return {
    enabled: true
  };
};

var _c7 = function _c7(a1, a3, a4) {
  return {
    height: 100,
    width: a1,
    type: "area",
    toolbar: a3,
    sparkline: a4
  };
};

var _c8 = function _c8(a2, a3, a4) {
  return {
    type: "bar",
    height: 200,
    width: a2,
    sparkline: a3,
    toolbar: a4
  };
};

var _c9 = function _c9() {
  return {
    enabled: false
  };
};

var _c10 = function _c10(a1, a3) {
  return {
    height: 290,
    width: a1,
    type: "radialBar",
    sparkline: a3
  };
};

var _c11 = function _c11() {
  return {
    enabled: true,
    blur: 8,
    left: 1,
    top: 1,
    opacity: 0.2
  };
};

var _c12 = function _c12(a1, a3, a4) {
  return {
    height: 330,
    width: a1,
    type: "radar",
    dropShadow: a3,
    toolbar: a4
  };
};

var AnalyticsComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {UserService} _userService
   * @param {DashboardService} _dashboardService
   * @param {CoreConfigService} _coreConfigService
   *
   */
  function AnalyticsComponent(_userService, _dashboardService, _coreConfigService) {
    (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnalyticsComponent);

    this._userService = _userService;
    this._dashboardService = _dashboardService;
    this._coreConfigService = _coreConfigService;
    this.loading = false;
    this.users = [];
    this.isMenuToggled = true; // Private

    this.$primary = '#7367F0';
    this.$warning = '#FF9F43';
    this.$info = '#00cfe8';
    this.$info_light = '#1edec5';
    this.$strok_color = '#b9c3cd';
    this.$label_color = '#e7eef7';
    this.$white = '#fff';
    this.$textHeadingColor = '#5e5873'; // Subscribers Gained chart

    this.gainedChartoptions = {
      chart: {
        height: 100,
        type: 'area',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      colors: [this.$primary],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }; // Order Received Chart

    this.orderChartoptions = {
      chart: {
        height: 100,
        type: 'area',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      colors: [this.$warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      series: [{
        name: 'Orders',
        data: [10, 15, 8, 15, 7, 12, 8]
      }],
      tooltip: {
        x: {
          show: false
        }
      }
    }; // Average Session Chart

    this.avgsessionChartoptions = {
      chart: {
        type: 'bar',
        height: 200,
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false
        }
      },
      colors: [this.$label_color, this.$label_color, this.$primary, this.$label_color, this.$label_color, this.$label_color],
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
          endingShape: 'rounded'
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }; // Support Tracker Chart

    this.supportChartoptions = {
      chart: {
        height: 290,
        type: 'radialBar',
        sparkline: {
          enabled: false
        }
      },
      plotOptions: {
        radialBar: {
          offsetY: 20,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: this.$white,
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: -5,
              color: this.$textHeadingColor,
              fontSize: '1rem'
            },
            value: {
              offsetY: 15,
              color: this.$textHeadingColor,
              fontSize: '1.714rem'
            }
          }
        }
      },
      colors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.danger],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      labels: ['Completed Tickets']
    }; // Sales Chart

    this.salesChartoptions = {
      chart: {
        height: 330,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 0
      },
      colors: [this.$primary, this.$info],
      plotOptions: {
        radar: {
          polygons: {
            connectorColors: 'transparent'
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#9f8ed7', this.$info_light],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0
      },
      legend: {
        show: false
      },
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      dataLabels: {
        style: {
          colors: [this.$strok_color, this.$strok_color, this.$strok_color, this.$strok_color, this.$strok_color, this.$strok_color]
        }
      },
      yaxis: {
        show: false
      }
    };
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnalyticsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // get the currentUser details from localStorage
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      /**
       * Get the secure api service (based on user role) (Admin Only secure API)
       * For example purpose
       */

      this.loading = true;

      this._userService.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.first)()).subscribe(function (users) {
        _this.loading = false;
        _this.users = users;
      }); // Get the dashboard service data


      this._dashboardService.onApiDataChanged.subscribe(function (response) {
        _this.data = response;
      });
    }
    /**
     * After View Init
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      // Subscribe to core config changes
      this._coreConfigService.getConfig().subscribe(function (config) {
        // If Menu Collapsed Changes
        if (config.layout.menu.collapsed === true || config.layout.menu.collapsed === false) {
          setTimeout(function () {
            var _a, _b, _c, _d, _e; // Get Dynamic Width for Charts


            _this2.isMenuToggled = false;
            _this2.gainedChartoptions.chart.width = (_a = _this2.gainedChartRef) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetWidth;
            _this2.orderChartoptions.chart.width = (_b = _this2.orderChartRef) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetWidth;
            _this2.avgsessionChartoptions.chart.width = (_c = _this2.avgSessionChartRef) === null || _c === void 0 ? void 0 : _c.nativeElement.offsetWidth;
            _this2.supportChartoptions.chart.width = (_d = _this2.supportChartRef) === null || _d === void 0 ? void 0 : _d.nativeElement.offsetWidth;
            _this2.salesChartoptions.chart.width = (_e = _this2.salesChartRef) === null || _e === void 0 ? void 0 : _e.nativeElement.offsetWidth;
          }, 1000);
        }
      });
    }
  }]);

  return AnalyticsComponent;
}();

AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) {
  return new (t || AnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_auth_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_main_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_5__.CoreConfigService));
};

AnalyticsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: AnalyticsComponent,
  selectors: [["app-analytics"]],
  viewQuery: function AnalyticsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c4, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.gainedChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.orderChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.avgSessionChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.supportChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.salesChartRef = _t.first);
    }
  },
  decls: 297,
  vars: 90,
  consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [1, "row", "match-height"], [1, "col-lg-6", "col-md-12", "col-sm-12"], [1, "card", "card-congratulations"], [1, "card-body", "text-center"], ["src", "assets/images/elements/decore-left.png", "alt", "card-img-left", 1, "congratulations-img-left"], ["src", "assets/images/elements/decore-right.png", "alt", "card-img-right", 1, "congratulations-img-right"], [1, "avatar", "avatar-xl", "bg-primary", "shadow"], [1, "avatar-content"], ["data-feather", "award", 1, "font-large-1"], [1, "text-center"], [1, "mb-1", "text-white"], [1, "card-text", "m-auto", "w-75"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [4, "ngIf"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "card"], [1, "card-header", "d-flex", "flex-column", "align-items-start", "pb-0"], [1, "avatar", "bg-light-primary", "p-50", "m-0"], ["data-feather", "users", 1, "font-medium-5"], [1, "font-weight-bolder", "mt-1"], [1, "mb-0"], ["id", "gainedChartoptions"], ["gainedChartRef", ""], [3, "series", "chart", "stroke", "fill", "tooltip", "colors", "dataLabels"], [1, "avatar", "bg-light-warning", "p-50", "m-0"], ["data-feather", "package", 1, "font-medium-5"], ["id", "orderChartoptions"], ["orderChartRef", ""], [1, "col-lg-6", "col-12"], [1, "card-body"], [1, "row", "pb-50"], [1, "col-lg-6", "col-12", "d-flex", "justify-content-between", "flex-column", "order-lg-1", "order-2", "mt-1", "mt-lg-0"], [1, "mb-1", "mb-lg-0"], [1, "font-weight-bolder", "mb-25"], [1, "card-text", "font-weight-bold", "mb-2"], [1, "font-medium-2"], [1, "text-success", "mr-25"], ["type", "button", "rippleEffect", "", 1, "btn", "btn-primary"], [1, "col-lg-6", "col-12", "d-flex", "justify-content-between", "flex-column", "text-right", "order-lg-2", "order-1"], ["ngbDropdown", "", 1, "chart-dropdown"], ["rippleEffect", "", "ngbDropdownToggle", "", "type", "button", "id", "dropdownItem5", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-sm", "border-0", "p-50"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownItem5"], ["ngbDropdownItem", "", "href", "javascript:void(0);"], ["id", "avgsessionChartoptions"], ["avgSessionChartRef", ""], [3, "chart", "states", "colors", "series", "plotOptions", "tooltip"], [1, "row", "avg-sessions", "pt-50"], [1, "col-6", "mb-2"], [1, "mb-50"], ["type", "primary", 3, "height", "value"], ["type", "warning", 3, "height", "value"], [1, "col-6"], ["type", "danger", 3, "height", "value"], ["type", "success", 3, "height", "value"], [1, "card-header", "d-flex", "justify-content-between", "pb-0"], [1, "card-title"], ["rippleEffect", "", "ngbDropdownToggle", "", "type", "button", "id", "dropdownItem4", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-sm", "border-0", "p-50"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownItem4", 1, "dropdown-menu-right"], [1, "row"], [1, "col-sm-2", "col-12", "d-flex", "flex-column", "flex-wrap", "text-center"], [1, "font-large-2", "font-weight-bolder", "mt-2", "mb-0"], [1, "card-text"], [1, "col-sm-10", "col-12", "d-flex", "justify-content-center"], ["supportChartRef", ""], ["id", "supportChartoptions"], [3, "series", "chart", "plotOptions", "colors", "fill", "stroke", "labels"], [1, "d-flex", "justify-content-between", "mt-1"], [1, "card-text", "mb-50"], [1, "font-large-1", "font-weight-bold"], [1, "col-lg-4", "col-12"], [1, "card", "card-user-timeline"], [1, "card-header"], [1, "d-flex", "align-items-center"], ["data-feather", "list", 1, "user-timeline-title-icon"], ["data-feather", "more-vertical", 1, "font-medium-3", "cursor-pointer"], [1, "timeline", "ml-50", "mb-0"], [1, "timeline-item"], [1, "timeline-point", "timeline-point-indicator"], [1, "timeline-event"], [1, "d-flex", "justify-content-between", "flex-sm-row", "flex-column", "mb-sm-0", "mb-1"], [1, "timeline-event-time", "mr-1"], [1, "media", "align-items-center"], ["src", "assets/images/icons/json.png", "alt", "data.json", "height", "23", 1, "mr-1"], [1, "media-body", "mb-0"], [1, "timeline-point", "timeline-point-warning", "timeline-point-indicator"], [1, "avatar", "mr-50"], ["src", "assets/images/portrait/small/avatar-s-9.jpg", "alt", "Avatar", "width", "38", "height", "38"], [1, "media-body"], [1, "timeline-point", "timeline-point-info", "timeline-point-indicator"], [1, "avatar-group"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "data-placement", "bottom", "data-original-title", "Billy Hopkins", 1, "avatar", "pull-up"], ["src", "assets/images/portrait/small/avatar-s-9.jpg", "alt", "Avatar", "width", "33", "height", "33"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "data-placement", "bottom", "data-original-title", "Amy Carson", 1, "avatar", "pull-up"], ["src", "assets/images/portrait/small/avatar-s-6.jpg", "alt", "Avatar", "width", "33", "height", "33"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "data-placement", "bottom", "data-original-title", "Brandon Miles", 1, "avatar", "pull-up"], ["src", "assets/images/portrait/small/avatar-s-8.jpg", "alt", "Avatar", "width", "33", "height", "33"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "data-placement", "bottom", "data-original-title", "Daisy Weber", 1, "avatar", "pull-up"], ["src", "assets/images/portrait/small/avatar-s-7.jpg", "alt", "Avatar", "width", "33", "height", "33"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "data-placement", "bottom", "data-original-title", "Jenny Looper", 1, "avatar", "pull-up"], ["src", "assets/images/portrait/small/avatar-s-20.jpg", "alt", "Avatar", "width", "33", "height", "33"], [1, "timeline-point", "timeline-point-danger", "timeline-point-indicator"], [1, "col-lg-4", "col-md-6", "col-12"], [1, "card-header", "d-flex", "justify-content-between", "align-items-start", "pb-1"], [1, "card-title", "mb-25"], ["ngbDropdown", ""], ["rippleEffect", "", "ngbDropdownToggle", "", "type", "button", "id", "dropdownItem4", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-sm", "border-0", "p-0", "hide-arrow"], [1, "d-inline-block", "mr-1"], ["data-feather", "circle", 1, "font-small-3", "text-primary", "mr-50"], [1, "d-inline-block"], ["data-feather", "circle", 1, "font-small-3", "text-info", "mr-50"], ["id", "salesChartoptions"], ["salesChartRef", ""], [3, "chart", "series", "stroke", "colors", "plotOptions", "fill", "markers", "legend", "labels", "dataLabels", "yaxis"], [1, "card", "card-app-design"], [1, "badge", "badge-light-primary"], [1, "card-title", "mt-1", "mb-75", "pt-25"], [1, "card-text", "font-small-2", "mb-2"], [1, "design-group", "mb-2", "pt-50"], [1, "section-label"], [1, "badge", "badge-light-warning", "mr-1"], [1, "design-group", "pt-25"], [1, "avatar"], ["src", "assets/images/portrait/small/avatar-s-9.jpg", "width", "34", "height", "34", "alt", "Avatar"], [1, "avatar", "bg-light-danger"], ["src", "assets/images/portrait/small/avatar-s-14.jpg", "width", "34", "height", "34", "alt", "Avatar"], ["src", "assets/images/portrait/small/avatar-s-7.jpg", "width", "34", "height", "34", "alt", "Avatar"], [1, "avatar", "bg-light-secondary"], [1, "design-planning-wrapper", "mb-2", "py-75"], [1, "design-planning"], [1, "card-text", "mb-25"], ["type", "button", "rippleEffect", "", 1, "btn", "btn-primary", "btn-block"], [1, "spinner-border", "spinner-border-sm"], [4, "ngFor", "ngForOf"]],
  template: function AnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "h1", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "This page can be accessed ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "only by administrators");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, " All users from secure (admin only) api end point. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, AnalyticsComponent_span_21_Template, 1, 0, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, AnalyticsComponent_ng_container_22_Template, 2, 1, "ng-container", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Subscribers Gained");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "apx-chart", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Orders Received");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 28, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "apx-chart", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "h2", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "p", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Avg Sessions");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "vs last 7 days");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "View Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, " Last 7 Days ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "Last 28 Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "Last Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Last Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 45, 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](80, "apx-chart", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](81, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](86, "ngb-progressbar", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](90, "ngb-progressbar", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](94, "ngb-progressbar", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "div", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](98, "ngb-progressbar", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "h4", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](103, "Support Tracker");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "button", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106, " Last 7 Days ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109, "Last 28 Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](111, "Last Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113, "Last Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "h1", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](118);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "p", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120, "Tickets");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "div", 64, 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](124, "apx-chart", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](126, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "p", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](128, "New Tickets");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "span", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](132, "p", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](133, "Open Tickets");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "span", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](135);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "p", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](138, "Response Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "span", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](140);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](141, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](143, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](146, "i", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "h4", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148, "User Timeline");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](149, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "ul", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "li", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](153, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](154, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](157, "12 Invoices have been paid");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "span", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](159, "12 min ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](160, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](161, "Invoices have been paid to the company.");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](163, "img", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](164, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](165, "data.json");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "li", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](167, "span", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](169, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](171, "Client Meeting");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](172, "span", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](173, "45 min ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](175, "Project meeting with john @10:15am");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](176, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](177, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](178, "img", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "h6", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](181, "John Doe (Client)");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](182, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](183, "CEO of Infibeam");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](184, "li", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](185, "span", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](187, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](189, "Create a new project for client");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](190, "span", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](191, "2 day ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](193, "Add files to new design folder");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](194, "div", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "div", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](196, "img", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](197, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](198, "img", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](199, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](200, "img", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](201, "div", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](202, "img", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](203, "div", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](204, "img", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](205, "li", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](206, "span", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](208, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](209, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](210, "Create a new project for client");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](211, "span", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](212, "5 day ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](213, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](214, "Add files to new design folder");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](215, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](216, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](217, "div", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](218, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](219, "h4", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](220, "Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](221, "p", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](222, "Last 6 months");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](223, "div", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](224, "button", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](225, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](226, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](228, "Last 28 Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](229, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](230, "Last Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](231, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](232, "Last Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](233, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](234, "div", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](235, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](236, "i", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](237, "h6", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](238, "Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](239, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](240, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](241, "i", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](242, "h6", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](243, "Visits");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](244, "div", 112, 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](246, "apx-chart", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](247, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](248, "div", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](249, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](250, "div", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](251, "03 Sep, 20");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](252, "h4", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](253, "App design");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](254, "p", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](255, " You can Find Only Post and Quotes Related to IOS like ipad app design, iphone app design ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](256, "div", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](257, "h6", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](258, "Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](259, "div", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](260, "Figma");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](261, "div", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](262, "Wireframe");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](263, "div", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](264, "h6", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](265, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](266, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](267, "img", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](268, "div", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](269, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](270, "PI");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](271, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](272, "img", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](273, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](274, "img", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](275, "div", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](276, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](277, "AL");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](278, "div", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](279, "div", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](280, "p", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](281, "Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](282, "h6", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](283, "12 Apr, 21");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](284, "div", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](285, "p", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](286, "Budget");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](287, "h6", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](288, "$49251.91");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](289, "div", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](290, "p", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](291, "Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](292, "h6", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](293, "$840.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](294, "button", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](295, "Join Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](296, "app-invoice-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](34);

      var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](47);

      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](79);

      var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](122);

      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](245);

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Congratulations ", ctx.currentUser == null ? null : ctx.currentUser.firstName, ",");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.users);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.data.subscribers_gained.analyticsData.subscribers);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("series", ctx.data.subscribers_gained.series)("chart", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](64, _c7, ctx.isMenuToggled === true ? _r2.offsetWidth : ctx.gainedChartoptions.chart.width, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](62, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](63, _c6)))("stroke", ctx.gainedChartoptions.stroke)("fill", ctx.gainedChartoptions.fill)("tooltip", ctx.gainedChartoptions.tooltip)("colors", ctx.gainedChartoptions.colors)("dataLabels", ctx.gainedChartoptions.dataLabels);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.data.ordersRecevied.analyticsData.orders);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("series", ctx.data.ordersRecevied.series)("chart", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](70, _c7, ctx.isMenuToggled === true ? _r3.offsetWidth : ctx.orderChartoptions.chart.width, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](68, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](69, _c6)))("stroke", ctx.orderChartoptions.stroke)("fill", ctx.orderChartoptions.fill)("tooltip", ctx.orderChartoptions.tooltip)("colors", ctx.orderChartoptions.colors)("dataLabels", ctx.orderChartoptions.dataLabels);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.data.avgSessions.analyticsData.avgSessions);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.data.avgSessions.analyticsData.vsLastSevenDays);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chart", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](76, _c8, ctx.isMenuToggled === true ? _r4.offsetWidth : ctx.avgsessionChartoptions.chart.width, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](74, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](75, _c5)))("states", ctx.avgsessionChartoptions.states)("colors", ctx.avgsessionChartoptions.colors)("series", ctx.data.avgSessions.series)("plotOptions", ctx.avgsessionChartoptions.plotOptions)("tooltip", ctx.avgsessionChartoptions.tooltip);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Goal: ", ctx.data.avgSessions.analyticsData.goal, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("height", "6px")("value", ctx.data.avgSessions.analyticsData.goalProgressbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Users: ", ctx.data.avgSessions.analyticsData.users, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("height", "6px")("value", ctx.data.avgSessions.analyticsData.retentionProgressbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Retention: ", ctx.data.avgSessions.analyticsData.retention, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("height", "6px")("value", ctx.data.avgSessions.analyticsData.usersProgressbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Duration: ", ctx.data.avgSessions.analyticsData.duration, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("height", "6px")("value", ctx.data.avgSessions.analyticsData.durationProgressbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.data.supportTracker.analyticsData.tickets, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("series", ctx.data.supportTracker.series)("chart", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](81, _c10, ctx.isMenuToggled === true ? _r5.offsetWidth : ctx.supportChartoptions.chart.width, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](80, _c9)))("plotOptions", ctx.supportChartoptions.plotOptions)("colors", ctx.supportChartoptions.colors)("fill", ctx.supportChartoptions.fill)("stroke", ctx.supportChartoptions.stroke)("labels", ctx.supportChartoptions.labels);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.data.supportTracker.analyticsData.newTickets);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.data.supportTracker.analyticsData.openTickets);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.data.supportTracker.analyticsData.responseTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](106);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chart", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](86, _c12, ctx.isMenuToggled === true ? _r6.offsetWidth : ctx.salesChartoptions.chart.width, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](84, _c11), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](85, _c5)))("series", ctx.data.salesLastSixMonths.series)("stroke", ctx.salesChartoptions.stroke)("colors", ctx.salesChartoptions.colors)("plotOptions", ctx.salesChartoptions.plotOptions)("fill", ctx.salesChartoptions.fill)("markers", ctx.salesChartoptions.markers)("legend", ctx.salesChartoptions.legend)("labels", ctx.salesChartoptions.labels)("dataLabels", ctx.salesChartoptions.dataLabels)("dataLabels", ctx.salesChartoptions.dataLabels)("yaxis", ctx.salesChartoptions.yaxis);
    }
  },
  directives: [_core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_6__.FeatherIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.ChartComponent, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_7__.RippleEffectDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbProgressbar, app_main_apps_invoice_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_8__.InvoiceListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf],
  styles: ["/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n\n.apexcharts-canvas line[stroke=transparent] {\n  display: none;\n}\n\n.apexcharts-canvas .apexcharts-tooltip {\n  background: #fff;\n  border-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #fff !important;\n  border-color: #ebe9f1 !important;\n  font-weight: 600;\n}\n\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-label,\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n\n.apexcharts-canvas .apexcharts-xaxistooltip,\n.apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #f8f8f8;\n  border-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #f8f8f8;\n}\n\n.apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #f8f8f8;\n}\n\n.apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #f8f8f8;\n}\n\n.apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #f8f8f8;\n}\n\n.apexcharts-canvas .apexcharts-text,\n.apexcharts-canvas .apexcharts-tooltip-text,\n.apexcharts-canvas .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-datalabel {\n  font-family: \"Montserrat\", Helvetica, Arial, serif !important;\n  fill: #6e6b7b;\n  font-weight: 400;\n  filter: none;\n}\n\n.apexcharts-canvas .apexcharts-pie-label {\n  fill: white;\n  filter: none;\n}\n\n.apexcharts-canvas .apexcharts-pie .apexcharts-pie-series .apexcharts-pie-area {\n  stroke-width: 0;\n}\n\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value {\n  font-size: 1.5rem;\n}\n\n.apexcharts-canvas .apexcharts-marker {\n  box-shadow: none;\n}\n\n.apexcharts-canvas .apexcharts-legend-series + .apexcharts-legend-series {\n  margin-top: 0.625rem;\n}\n\n.apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-left: 0.5rem;\n  color: #6e6b7b !important;\n  font-size: 1rem !important;\n}\n\n.apexcharts-canvas .apexcharts-xcrosshairs,\n.apexcharts-canvas .apexcharts-ycrosshairs,\n.apexcharts-canvas .apexcharts-gridline {\n  stroke: #ebe9f1;\n}\n\n.apexcharts-legend.position-bottom {\n  bottom: 3rem;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-tick,\n.dark-layout .apexcharts-canvas line {\n  stroke: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-heatmap .apexcharts-heatmap-rect {\n  stroke: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-radialbar .apexcharts-radialbar-track .apexcharts-radialbar-area {\n  stroke: #161d31;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-radar-series polygon {\n  fill: #161d31;\n  stroke: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-datalabel-value {\n  fill: #fff;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-tooltip {\n  background: #283046;\n  border-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #283046 !important;\n  border-color: #3b4253 !important;\n  color: #fff;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #161d31;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #161d31;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #161d31;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #161d31;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #161d31;\n  border-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-yaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-yaxistooltip-text {\n  color: #fff;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text {\n  color: #fff;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-yaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-datalabel-label {\n  fill: #b4b7bd;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-marker {\n  stroke: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #b4b7bd !important;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xcrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-ycrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-gridline {\n  stroke: #3b4253;\n}\n\n#toast-container > div {\n  opacity: 1;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  filter: alpha(opacity=100);\n  max-width: none;\n  border-radius: 0.286rem;\n}\n\n#toast-container > div,\n#toast-container > div:hover {\n  box-shadow: 0 2px 20px 0 rgba(34, 41, 47, 0.08);\n}\n\n#toast-container > .toast {\n  background-image: none !important;\n}\n\n.toast {\n  background-color: #fff;\n  color: #6e6b7b !important;\n}\n\n.toast .toast-close-button {\n  color: #6e6b7b;\n  font-size: 1.75rem;\n  font-weight: 400;\n  top: 0;\n  right: 0;\n  text-shadow: none;\n}\n\n.toast .toast-close-button:focus {\n  outline: none;\n}\n\n.toast .toast-title {\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.75;\n}\n\n.toast .toast-progress {\n  opacity: 1;\n}\n\n.toast:before {\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  color: #fff;\n  position: absolute;\n  left: 1.25rem;\n  background-size: 1rem;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.toast-success .toast-title {\n  color: #28c76f;\n}\n\n.toast-success .toast-progress {\n  background-color: #28c76f;\n}\n\n.toast-success:before {\n  background-color: #28c76f;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n\n.toast-error .toast-title {\n  color: #ea5455;\n}\n\n.toast-error .toast-progress {\n  background-color: #ea5455;\n}\n\n.toast-error:before {\n  background-color: #ea5455;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E\");\n}\n\n.toast-info .toast-title {\n  color: #00cfe8;\n}\n\n.toast-info .toast-progress {\n  background-color: #00cfe8;\n}\n\n.toast-info:before {\n  background-color: #00cfe8;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-info'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='16' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='8' x2='12.01' y2='8'%3E%3C/line%3E%3C/svg%3E\");\n}\n\n.toast-warning .toast-title {\n  color: #ff9f43;\n}\n\n.toast-warning .toast-progress {\n  background-color: #ff9f43;\n}\n\n.toast-warning:before {\n  background-color: #ff9f43;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-alert-triangle'%3E%3Cpath d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'%3E%3C/path%3E%3Cline x1='12' y1='9' x2='12' y2='13'%3E%3C/line%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'%3E%3C/line%3E%3C/svg%3E\");\n}\n\n.toast-top-left {\n  top: 1.3rem;\n  left: 2rem;\n}\n\n.toast-top-right {\n  top: 1.3rem;\n  right: 2rem;\n}\n\n.toast-top-center,\n.toast-top-full-width {\n  top: 1.3rem;\n}\n\n.toast-bottom-left {\n  bottom: 1.3rem;\n  left: 2rem;\n}\n\n.toast-bottom-right {\n  bottom: 1.3rem;\n  right: 2rem;\n}\n\n.toast-bottom-center,\n.toast-bottom-full-width {\n  bottom: 1.3rem;\n}\n\n@media (max-width: 480px) and (min-width: 241px) {\n  #toast-container > .toast:after {\n    top: 0.95rem;\n  }\n  #toast-container > .toast .toast-close-button {\n    top: 0;\n    right: -1px;\n  }\n\n  #toast-container:not(.toast-top-full-width):not(.toast-bottom-full-width) > div {\n    width: 20rem;\n  }\n\n  .toast-top-left {\n    left: 0;\n  }\n\n  #toast-container.toast-top-center, #toast-container.toast-bottom-center {\n    right: 1rem;\n  }\n  #toast-container.toast-top-center > div, #toast-container.toast-bottom-center > div {\n    width: 20rem !important;\n  }\n\n  .toast-top-full-width,\n.toast-bottom-full-width {\n    right: 0;\n    left: 0;\n    width: 93%;\n  }\n  .toast-top-full-width > div,\n.toast-bottom-full-width > div {\n    width: 100%;\n  }\n\n  .toast-bottom-left {\n    left: 0.25rem;\n    bottom: 0.75rem;\n  }\n\n  .toast-bottom-right {\n    right: 2.25rem;\n    bottom: 0.75rem;\n  }\n\n  .toast-bottom-center,\n.toast-bottom-full-width {\n    bottom: 0.75rem;\n  }\n\n  [data-textdirection=rtl] #toast-container > div {\n    padding-right: 8px;\n  }\n}\n\n.dark-layout #toast-container > div,\n.dark-layout #toast-container > div:hover {\n  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.24);\n}\n\n.dark-layout #toast-container .toast {\n  background-color: #283046;\n  color: #b4b7bd !important;\n}\n\n.dark-layout #toast-container .toast .toast-close-button {\n  color: #b4b7bd;\n}\n\n@media (max-width: 575.98px) {\n  [data-textdirection=rtl] .toast .toast-close-button {\n    top: 0.55rem !important;\n    right: 0.5rem !important;\n  }\n}\n\n[data-textdirection=rtl] .toast-top-left {\n  left: 1rem;\n  right: auto;\n}\n\n[data-textdirection=rtl] .toast-top-right {\n  right: 3rem;\n  left: auto;\n}\n\n[data-textdirection=rtl] .toast-bottom-left {\n  left: 1em;\n  right: auto;\n}\n\n[data-textdirection=rtl] .toast-bottom-right {\n  right: 3rem;\n  left: auto;\n}\n\n[data-textdirection=rtl] .toast-top-full-width#toast-container > div,\n[data-textdirection=rtl] .toast-bottom-full-width#toast-container > div {\n  left: 0;\n  right: 0;\n}\n\n.toast-close-button {\n  line-height: 1;\n}\n\n@media (max-width: 480px) and (min-width: 241px) {\n  #toast-container > .toast:after {\n    top: 1.44rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZ3gtdG9hc3RyL3RvYXN0ci5jc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXHBsdWdpbnNcXGNoYXJ0c1xcY2hhcnQtYXBleC5zY3NzIiwiYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxib290c3RyYXAtZXh0ZW5kZWRcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcY29tcG9uZW50c1xcX3ZhcmlhYmxlcy1kYXJrLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXHBsdWdpbnNcXGV4dGVuc2lvbnNcXGV4dC1jb21wb25lbnQtdG9hc3RyLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvbXBvbmVudHNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGFuZ3VsYXJcXGxpYnNcXHRvYXN0ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrSkFBa0o7O0FBRWxKLGFBQWE7O0FBQ2I7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxNQUFNO0VBQ04sUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUNBOzt5REFFeUQ7O0FBQ3pEO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBQ0EsaUhBQWlIOztBQUNqSDtFQUNFLHFsQkFBcWxCO0FBQ3ZsQjs7QUFDQSxrSEFBa0g7O0FBQ2xIO0VBQ0UsNmpCQUE2akI7QUFDL2pCOztBQUNBLDJHQUEyRzs7QUFDM0c7RUFDRSx3ZEFBd2Q7QUFDMWQ7O0FBQ0EsMEhBQTBIOztBQUMxSDtFQUNFLHNvQkFBc29CO0FBQ3hvQjs7QUFDQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFDQSxzQkFBc0I7O0FBQ3RCO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLFdBQVc7RUFDYjtBQUNGOztBQzNMRTtFQUNFLGFBQUE7QUNGSjs7QURJRTtFQUNFLGdCRUdJO0VGRkoscUJFcUhXO0FEdkhmOztBREdJO0VBQ0UsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDRE47O0FESU07O0VBRUUsV0VQQTtBREtSOztBRE1FOztFQUVFLG1CRTZFTTtFRjVFTixxQkVxR1c7QUR6R2Y7O0FEV0k7RUFDRSw0QkU2RlM7QUR0R2Y7O0FEV0k7RUFDRSw0QkVpRUk7QUQxRVY7O0FEY0k7RUFDRSx5QkVvRlM7QURoR2Y7O0FEY0k7RUFDRSx5QkV3REk7QURwRVY7O0FEZ0JJO0VBQ0UsMEJFNEVTO0FEMUZmOztBRGdCSTtFQUNFLDBCRWdESTtBRDlEVjs7QURrQkk7RUFDRSwyQkVvRVM7QURwRmY7O0FEa0JJO0VBQ0UsMkJFd0NJO0FEeERWOztBRG9CRTs7OztFQUlFLDZEQUFBO0VBQ0EsYUVnQ1M7RUYvQlQsZ0JBQUE7RUFDQSxZQUFBO0FDbEJKOztBRHFCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDbkJKOztBRHVCSTtFQUNFLGVBQUE7QUNyQk47O0FEdUJJOztFQUVFLGlCQUFBO0FDckJOOztBRHlCRTtFQUNFLGdCQUFBO0FDdkJKOztBRDBCSTtFQUNFLG9CQUFBO0FDeEJOOztBRDBCSTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ3hCTjs7QUQyQkU7OztFQUdFLGVFb0JXO0FEN0NmOztBRDRCQTtFQUNFLFlBQUE7QUN6QkY7O0FEOEJJOztFQUVFLGVHbEdvQjtBRnVFMUI7O0FEOEJNO0VBQ0UsZUd0R2tCO0FGMEUxQjs7QURnQ007RUFDRSxlRzdHYTtBRitFckI7O0FEa0NNO0VBQ0UsYUdsSGE7RUhtSGIsZUdqSGtCO0FGaUYxQjs7QURvQ007RUFDRSxVRTlIQTtBRDRGUjs7QURxQ0k7RUFDRSxtQkdqSGU7RUhrSGYscUJHM0hvQjtBRndGMUI7O0FEb0NNO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdFdklBO0FEcUdSOztBRG9DTTs7RUFFRSxXRTNJQTtBRHlHUjs7QURzQ007RUFDRSw0Qkd4SWtCO0FGb0cxQjs7QURzQ007RUFDRSw0Qkc3SWE7QUZ5R3JCOztBRHdDTTtFQUNFLHlCR2hKa0I7QUYwRzFCOztBRHdDTTtFQUNFLHlCR3JKYTtBRitHckI7O0FEMENNO0VBQ0UsMEJHeEprQjtBRmdIMUI7O0FEMENNO0VBQ0UsMEJHN0phO0FGcUhyQjs7QUQ0Q007RUFDRSwyQkdoS2tCO0FGc0gxQjs7QUQ0Q007RUFDRSwyQkdyS2E7QUYySHJCOztBRDhDSTs7RUFFRSxtQkczS2U7RUg0S2YscUJHMUtvQjtBRjhIMUI7O0FEaURNOzs7O0VBRUUsV0V6TEE7QUQ0SVI7O0FEaURNO0VBQ0UsV0U5TEE7QUQrSVI7O0FEa0RJOzs7O0VBSUUsYUc5TGtCO0FGOEl4Qjs7QURrREk7RUFDRSxlR2hNb0I7QUZnSjFCOztBRG1ETTtFQUNFLHlCQUFBO0FDakRSOztBRG9ESTs7O0VBR0UsZUcxTW9CO0FGd0oxQjs7QUd2S0E7RUFDRSxVQUFBO0VBQ0EsZ0VBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkZzWm9CO0FENU90Qjs7QUd0S0E7O0VBRUUsK0NGaVppQjtBRHhPbkI7O0FHdEtBO0VBQ0UsaUNBQUE7QUh5S0Y7O0FHdEtBO0VBQ0Usc0JGWk07RUVhTix5QkFBQTtBSHlLRjs7QUd4S0U7RUFDRSxjRjRFUztFRTNFVCxrQkFBQTtFQUNBLGdCRnVIaUI7RUV0SGpCLE1BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUgwS0o7O0FHeEtJO0VBQ0UsYUFBQTtBSDBLTjs7QUd2S0U7RUFDRSxlRnlHYTtFRXhHYixnQkY4R2lCO0VFN0dqQixpQkFBQTtBSHlLSjs7QUd2S0U7RUFDRSxVQUFBO0FIeUtKOztBR3ZLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0Z2Q0k7RUV3Q0osa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJGMEZhO0VFekZiLDRCQUFBO0VBQ0EsMkJBQUE7QUh5S0o7O0FHbEtFO0VBQ0UsY0Z0Q0k7QUQyTVI7O0FHbktFO0VBQ0UseUJGekNJO0FEOE1SOztBR25LRTtFQUNFLHlCRjVDSTtFRTZDSiw0VEFBQTtBSHFLSjs7QUdqS0U7RUFDRSxjRi9DRTtBRG1OTjs7QUdsS0U7RUFDRSx5QkZsREU7QURzTk47O0FHbEtFO0VBQ0UseUJGckRFO0VFc0RGLGtWQUFBO0FIb0tKOztBR2hLRTtFQUNFLGNGN0RHO0FEZ09QOztBR2pLRTtFQUNFLHlCRmhFRztBRG1PUDs7QUdqS0U7RUFDRSx5QkZuRUc7RUVvRUgsaWFBQUE7QUhtS0o7O0FHL0pFO0VBQ0UsY0Z4RUs7QUQwT1Q7O0FHaEtFO0VBQ0UseUJGM0VLO0FENk9UOztBR2hLRTtFQUNFLHlCRjlFSztFRStFTCw4ZUFBQTtBSGtLSjs7QUc3SkE7RUFDRSxXQUFBO0VBQ0EsVUMvRmdCO0FKK1BsQjs7QUc5SkE7RUFDRSxXQUFBO0VBQ0EsV0NuR2dCO0FKb1FsQjs7QUcvSkE7O0VBRUUsV0FBQTtBSGtLRjs7QUdoS0E7RUFDRSxjQUFBO0VBQ0EsVUMzR2dCO0FKOFFsQjs7QUdqS0E7RUFDRSxjQUFBO0VBQ0EsV0MvR2dCO0FKbVJsQjs7QUdsS0E7O0VBRUUsY0FBQTtBSHFLRjs7QUdoS0E7RUFFSTtJQUNFLFlBQUE7RUhrS0o7RUdoS0U7SUFDRSxNQUFBO0lBQ0EsV0FBQTtFSGtLSjs7RUcvSkE7SUFDRSxZQUFBO0VIa0tGOztFR2hLQTtJQUNFLE9BQUE7RUhtS0Y7O0VHaEtFO0lBRUUsV0FBQTtFSGtLSjtFR2pLSTtJQUNFLHVCQUFBO0VIbUtOOztFRy9KQTs7SUFFRSxRQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7RUhrS0Y7RUdqS0U7O0lBQ0UsV0FBQTtFSG9LSjs7RUdqS0E7SUFDRSxhQUFBO0lBQ0EsZUFBQTtFSG9LRjs7RUdsS0E7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFSHFLRjs7RUduS0E7O0lBRUUsZUFBQTtFSHNLRjs7RUduS0U7SUFDRSxrQkFBQTtFSHNLSjtBQUNGOztBR2hLRTs7RUFFRSwrQ0R0S29CO0FGd1V4Qjs7QUcvSkk7RUFDRSx5QkQzS2U7RUM0S2YseUJBQUE7QUhpS047O0FHaEtNO0VBQ0UsY0R4TGdCO0FGMFZ4Qjs7QUtuU0k7RUZ3SUY7SUFFSSx1QkFBQTtJQUNBLHdCQUFBO0VIOEpKO0FBQ0Y7O0FHNUpFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUg4Sko7O0FHNUpFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUg4Sko7O0FHNUpFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUg4Sko7O0FHNUpFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUg4Sko7O0FHMUpJOztFQUNFLE9BQUE7RUFDQSxRQUFBO0FINkpOOztBTWxZQTtFQUNFLGNBQUE7QU5xWUY7O0FNbFlBO0VBRUk7SUFDRSxZQUFBO0VOb1lKO0FBQ0YiLCJmaWxlIjoiYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYmFzZWQgb24gYW5ndWxhci10b2FzdHIgY3NzIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3hhbmR4c3MvYW5ndWxhci10b2FzdHIvYmxvYi9jYjUwOGZlNjgwMWQ2YjI4OGQzYWZjNTI1YmI0MGZlZTFiMTAxNjUwL2Rpc3QvYW5ndWxhci10b2FzdHIuY3NzICovXG5cbi8qIHBvc2l0aW9uICovXG4udG9hc3QtY2VudGVyLWNlbnRlciB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnRvYXN0LXRvcC1jZW50ZXIge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC1ib3R0b20tY2VudGVyIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtdG9wLWZ1bGwtd2lkdGgge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvYXN0LXRvcC1sZWZ0IHtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuLnRvYXN0LXRvcC1yaWdodCB7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG59XG4udG9hc3QtYm90dG9tLXJpZ2h0IHtcbiAgcmlnaHQ6IDEycHg7XG4gIGJvdHRvbTogMTJweDtcbn1cbi50b2FzdC1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMTJweDtcbn1cblxuLyogdG9hc3Qgc3R5bGVzICovXG4udG9hc3QtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50b2FzdC1tZXNzYWdlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLnRvYXN0LW1lc3NhZ2UgYSxcbi50b2FzdC1tZXNzYWdlIGxhYmVsIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4udG9hc3QtbWVzc2FnZSBhOmhvdmVyIHtcbiAgY29sb3I6ICNDQ0NDQ0M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMC4zZW07XG4gIHRvcDogLTAuM2VtO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xuICAvKiBvcGFjaXR5OiAwLjg7ICovXG59XG4udG9hc3QtY2xvc2UtYnV0dG9uOmhvdmVyLFxuLnRvYXN0LWNsb3NlLWJ1dHRvbjpmb2N1cyB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC40O1xufVxuLypBZGRpdGlvbmFsIHByb3BlcnRpZXMgZm9yIGJ1dHRvbiB2ZXJzaW9uXG4gaU9TIHJlcXVpcmVzIHRoZSBidXR0b24gZWxlbWVudCBpbnN0ZWFkIG9mIGFuIGFuY2hvciB0YWcuXG4gSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuKi9cbmJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG4udG9hc3QtY29udGFpbmVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuLnRvYXN0LWNvbnRhaW5lciAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAwIDZweDtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHggY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4ICM5OTk5OTk7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0cjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2luZm8tY2lyY2xlLnN2ZyAqL1xuLnRvYXN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00yNTYgOEMxMTkuMDQzIDggOCAxMTkuMDgzIDggMjU2YzAgMTM2Ljk5NyAxMTEuMDQzIDI0OCAyNDggMjQ4czI0OC0xMTEuMDAzIDI0OC0yNDhDNTA0IDExOS4wODMgMzkyLjk1NyA4IDI1NiA4em0wIDExMGMyMy4xOTYgMCA0MiAxOC44MDQgNDIgNDJzLTE4LjgwNCA0Mi00MiA0Mi00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyem01NiAyNTRjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtODhjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoMTJ2LTY0aC0xMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg2NGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjEwMGgxMmM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjI0eicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL3RpbWVzLWNpcmNsZS5zdmcgKi9cbi50b2FzdC1lcnJvciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvY2hlY2suc3ZnICovXG4udG9hc3Qtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2V4Y2xhbWF0aW9uLXRyaWFuZ2xlLnN2ZyAqL1xuLnRvYXN0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHonLyUzRSUzQy9zdmclM0VcIik7XG59XG4udG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIgLm5neC10b2FzdHIsXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1jZW50ZXIgLm5neC10b2FzdHIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4udG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyLFxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tZnVsbC13aWR0aCAubmd4LXRvYXN0ciB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubmd4LXRvYXN0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzAzMDM7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnRvYXN0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBMzUxO1xufVxuLnRvYXN0LWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEMzYyRjtcbn1cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGOTZCNDtcbn1cbi50b2FzdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTQwNjtcbn1cbi50b2FzdC1wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMC40O1xufVxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgIHdpZHRoOiAxMWVtO1xuICB9XG4gIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcmlnaHQ6IC0wLjJlbTtcbiAgICB0b3A6IC0wLjJlbTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjQxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICB3aWR0aDogMThlbTtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgdG9wOiAtMC4yZW07XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gICAgd2lkdGg6IDI1ZW07XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uL2Jvb3RzdHJhcC1leHRlbmRlZC9pbmNsdWRlJzsgLy8gQm9vdHN0cmFwIGluY2x1ZGVzXG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXG5cbi5hcGV4Y2hhcnRzLWNhbnZhcyB7XG4gIGxpbmVbc3Ryb2tlPSd0cmFuc3BhcmVudCddIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hcGV4Y2hhcnRzLXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgLmFwZXhjaGFydHMtdG9vbHRpcC10aXRsZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgJi5hcGV4Y2hhcnRzLXRoZW1lLWRhcmsge1xuICAgICAgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LWxhYmVsLFxuICAgICAgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLFxuICAuYXBleGNoYXJ0cy15YXhpc3Rvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICAvLyAmOmFmdGVyLFxuICAgIC8vICY6YmVmb3JlIHtcbiAgICAvLyAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib2R5LWJnO1xuICAgIC8vIH1cbiAgfVxuICAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtYm90dG9tIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9keS1iZztcbiAgICB9XG4gIH1cblxuICAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtdG9wIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkYm9keS1iZztcbiAgICB9XG4gIH1cbiAgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLWxlZnQge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkYm9keS1iZztcbiAgICB9XG4gIH1cbiAgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLXJpZ2h0IHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkYm9keS1iZztcbiAgICB9XG4gIH1cblxuICAuYXBleGNoYXJ0cy10ZXh0LFxuICAuYXBleGNoYXJ0cy10b29sdGlwLXRleHQsXG4gIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC1sYWJlbCxcbiAgLmFwZXhjaGFydHMtZGF0YWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJhc2UgIWltcG9ydGFudDtcbiAgICBmaWxsOiAkYm9keS1jb2xvcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZpbHRlcjogbm9uZTtcbiAgfVxuXG4gIC5hcGV4Y2hhcnRzLXBpZS1sYWJlbCB7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG5cbiAgLmFwZXhjaGFydHMtcGllIHtcbiAgICAuYXBleGNoYXJ0cy1waWUtc2VyaWVzIC5hcGV4Y2hhcnRzLXBpZS1hcmVhIHtcbiAgICAgIHN0cm9rZS13aWR0aDogMDtcbiAgICB9XG4gICAgLmFwZXhjaGFydHMtZGF0YWxhYmVsLWxhYmVsLFxuICAgIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gIH1cblxuICAuYXBleGNoYXJ0cy1tYXJrZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLmFwZXhjaGFydHMtbGVnZW5kLXNlcmllcyB7XG4gICAgJiArIC5hcGV4Y2hhcnRzLWxlZ2VuZC1zZXJpZXMge1xuICAgICAgbWFyZ2luLXRvcDogMC42MjVyZW07XG4gICAgfVxuICAgIC5hcGV4Y2hhcnRzLWxlZ2VuZC10ZXh0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICBjb2xvcjogJGJvZHktY29sb3IgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAuYXBleGNoYXJ0cy14Y3Jvc3NoYWlycyxcbiAgLmFwZXhjaGFydHMteWNyb3NzaGFpcnMsXG4gIC5hcGV4Y2hhcnRzLWdyaWRsaW5lIHtcbiAgICBzdHJva2U6ICRib3JkZXItY29sb3I7XG4gIH1cbn1cbi5hcGV4Y2hhcnRzLWxlZ2VuZC5wb3NpdGlvbi1ib3R0b20ge1xuICBib3R0b206IDNyZW07XG59XG5cbi5kYXJrLWxheW91dCB7XG4gIC5hcGV4Y2hhcnRzLWNhbnZhcyB7XG4gICAgLmFwZXhjaGFydHMteGF4aXMtdGljayxcbiAgICBsaW5lIHtcbiAgICAgIHN0cm9rZTogJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgICAuYXBleGNoYXJ0cy1oZWF0bWFwIHtcbiAgICAgIC5hcGV4Y2hhcnRzLWhlYXRtYXAtcmVjdCB7XG4gICAgICAgIHN0cm9rZTogJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgICAuYXBleGNoYXJ0cy1yYWRpYWxiYXIge1xuICAgICAgLmFwZXhjaGFydHMtcmFkaWFsYmFyLXRyYWNrIC5hcGV4Y2hhcnRzLXJhZGlhbGJhci1hcmVhIHtcbiAgICAgICAgc3Ryb2tlOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xuICAgICAgfVxuICAgIH1cbiAgICAuYXBleGNoYXJ0cy1yYWRhci1zZXJpZXMge1xuICAgICAgcG9seWdvbiB7XG4gICAgICAgIGZpbGw6ICR0aGVtZS1kYXJrLWJvZHktYmc7XG4gICAgICAgIHN0cm9rZTogJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgICAuYXBleGNoYXJ0cy1kYXRhbGFiZWxzLWdyb3VwIHtcbiAgICAgIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC12YWx1ZSB7XG4gICAgICAgIGZpbGw6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMtdG9vbHRpcCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtZGFyay1jYXJkLWJnO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtZGFyay1ib3JkZXItY29sb3I7XG4gICAgICAuYXBleGNoYXJ0cy10b29sdGlwLXRpdGxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWRhcmstY2FyZC1iZyAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgICAgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LWxhYmVsLFxuICAgICAgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLWJvdHRvbSB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHRoZW1lLWRhcmstYm9keS1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLXRvcCB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHRoZW1lLWRhcmstYm9keS1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLWxlZnQge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xuICAgICAgfVxuICAgIH1cbiAgICAuYXBleGNoYXJ0cy15YXhpc3Rvb2x0aXAtcmlnaHQge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICR0aGVtZS1kYXJrLWJvZHktYmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLFxuICAgIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtZGFyay1ib3JkZXItY29sb3I7XG4gICAgICAvLyAmOmFmdGVyLFxuICAgICAgLy8gJjpiZWZvcmUge1xuICAgICAgLy8gICBib3JkZXItYm90dG9tLWNvbG9yOiAkdGhlbWUtZGFyay1ib3JkZXItY29sb3I7XG4gICAgICAvLyB9XG4gICAgICAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtdGV4dCxcbiAgICAgIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcC10ZXh0IHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwIHtcbiAgICAgIC5hcGV4Y2hhcnRzLXhheGlzdG9vbHRpcC10ZXh0IHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMteWF4aXMtbGFiZWwsXG4gICAgLmFwZXhjaGFydHMteGF4aXMtbGFiZWwsXG4gICAgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LFxuICAgIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC1sYWJlbCB7XG4gICAgICBmaWxsOiAkdGhlbWUtZGFyay1ib2R5LWNvbG9yO1xuICAgIH1cbiAgICAuYXBleGNoYXJ0cy1tYXJrZXIge1xuICAgICAgc3Ryb2tlOiAkdGhlbWUtZGFyay1ib3JkZXItY29sb3I7XG4gICAgfVxuICAgIC5hcGV4Y2hhcnRzLWxlZ2VuZC1zZXJpZXMge1xuICAgICAgLmFwZXhjaGFydHMtbGVnZW5kLXRleHQge1xuICAgICAgICBjb2xvcjogJHRoZW1lLWRhcmstYm9keS1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAuYXBleGNoYXJ0cy14Y3Jvc3NoYWlycyxcbiAgICAuYXBleGNoYXJ0cy15Y3Jvc3NoYWlycyxcbiAgICAuYXBleGNoYXJ0cy1ncmlkbGluZSB7XG4gICAgICBzdHJva2U6ICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ35uZ3gtdG9hc3RyL3RvYXN0ci5jc3MnO1xuLmFwZXhjaGFydHMtY2FudmFzIGxpbmVbc3Ryb2tlPXRyYW5zcGFyZW50XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtdG9vbHRpcCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ViZTlmMTtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy10b29sdGlwIC5hcGV4Y2hhcnRzLXRvb2x0aXAtdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ViZTlmMSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXRvb2x0aXAuYXBleGNoYXJ0cy10aGVtZS1kYXJrIC5hcGV4Y2hhcnRzLXRvb2x0aXAtdGV4dC1sYWJlbCxcbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy10b29sdGlwLmFwZXhjaGFydHMtdGhlbWUtZGFyayAuYXBleGNoYXJ0cy10b29sdGlwLXRleHQtdmFsdWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAsXG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgYm9yZGVyLWNvbG9yOiAjZWJlOWYxO1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhheGlzdG9vbHRpcC1ib3R0b206YmVmb3JlIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ViZTlmMTtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtYm90dG9tOjphZnRlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmOGY4Zjg7XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLXRvcDpiZWZvcmUge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZWJlOWYxO1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhheGlzdG9vbHRpcC10b3A6OmFmdGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Y4ZjhmODtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy15YXhpc3Rvb2x0aXAtbGVmdDpiZWZvcmUge1xuICBib3JkZXItbGVmdC1jb2xvcjogI2ViZTlmMTtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy15YXhpc3Rvb2x0aXAtbGVmdDphZnRlciB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjhmOGY4O1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcC1yaWdodDpiZWZvcmUge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNlYmU5ZjE7XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLXJpZ2h0OmFmdGVyIHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZjhmOGY4O1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXRleHQsXG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LFxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC1sYWJlbCxcbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1kYXRhbGFiZWwge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFpbXBvcnRhbnQ7XG4gIGZpbGw6ICM2ZTZiN2I7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZpbHRlcjogbm9uZTtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1waWUtbGFiZWwge1xuICBmaWxsOiB3aGl0ZTtcbiAgZmlsdGVyOiBub25lO1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXBpZSAuYXBleGNoYXJ0cy1waWUtc2VyaWVzIC5hcGV4Y2hhcnRzLXBpZS1hcmVhIHtcbiAgc3Ryb2tlLXdpZHRoOiAwO1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXBpZSAuYXBleGNoYXJ0cy1kYXRhbGFiZWwtbGFiZWwsXG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtcGllIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLW1hcmtlciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtbGVnZW5kLXNlcmllcyArIC5hcGV4Y2hhcnRzLWxlZ2VuZC1zZXJpZXMge1xuICBtYXJnaW4tdG9wOiAwLjYyNXJlbTtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1sZWdlbmQtc2VyaWVzIC5hcGV4Y2hhcnRzLWxlZ2VuZC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgY29sb3I6ICM2ZTZiN2IgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGNyb3NzaGFpcnMsXG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteWNyb3NzaGFpcnMsXG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtZ3JpZGxpbmUge1xuICBzdHJva2U6ICNlYmU5ZjE7XG59XG5cbi5hcGV4Y2hhcnRzLWxlZ2VuZC5wb3NpdGlvbi1ib3R0b20ge1xuICBib3R0b206IDNyZW07XG59XG5cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGF4aXMtdGljayxcbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgbGluZSB7XG4gIHN0cm9rZTogIzNiNDI1Mztcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtaGVhdG1hcCAuYXBleGNoYXJ0cy1oZWF0bWFwLXJlY3Qge1xuICBzdHJva2U6ICMzYjQyNTM7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXJhZGlhbGJhciAuYXBleGNoYXJ0cy1yYWRpYWxiYXItdHJhY2sgLmFwZXhjaGFydHMtcmFkaWFsYmFyLWFyZWEge1xuICBzdHJva2U6ICMxNjFkMzE7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXJhZGFyLXNlcmllcyBwb2x5Z29uIHtcbiAgZmlsbDogIzE2MWQzMTtcbiAgc3Ryb2tlOiAjM2I0MjUzO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1kYXRhbGFiZWxzLWdyb3VwIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC12YWx1ZSB7XG4gIGZpbGw6ICNmZmY7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXRvb2x0aXAge1xuICBiYWNrZ3JvdW5kOiAjMjgzMDQ2O1xuICBib3JkZXItY29sb3I6ICMzYjQyNTM7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXRvb2x0aXAgLmFwZXhjaGFydHMtdG9vbHRpcC10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICMyODMwNDYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjM2I0MjUzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy10b29sdGlwIC5hcGV4Y2hhcnRzLXRvb2x0aXAtdGV4dC1sYWJlbCxcbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtdG9vbHRpcCAuYXBleGNoYXJ0cy10b29sdGlwLXRleHQtdmFsdWUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLWJvdHRvbTpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjM2I0MjUzO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtYm90dG9tOjphZnRlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMxNjFkMzE7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhheGlzdG9vbHRpcC10b3A6YmVmb3JlIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzNiNDI1Mztcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLXRvcDo6YWZ0ZXIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMTYxZDMxO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy15YXhpc3Rvb2x0aXAtbGVmdDpiZWZvcmUge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzNiNDI1Mztcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLWxlZnQ6YWZ0ZXIge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzE2MWQzMTtcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLXJpZ2h0OmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzNiNDI1Mztcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLXJpZ2h0OmFmdGVyIHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMTYxZDMxO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAsXG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcCB7XG4gIGJhY2tncm91bmQ6ICMxNjFkMzE7XG4gIGJvcmRlci1jb2xvcjogIzNiNDI1Mztcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwIC5hcGV4Y2hhcnRzLXhheGlzdG9vbHRpcC10ZXh0LFxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLXRleHQsXG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcCAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtdGV4dCxcbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcC10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhheGlzdG9vbHRpcCAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy15YXhpcy1sYWJlbCxcbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGF4aXMtbGFiZWwsXG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXRvb2x0aXAtdGV4dCxcbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtZGF0YWxhYmVsLWxhYmVsIHtcbiAgZmlsbDogI2I0YjdiZDtcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtbWFya2VyIHtcbiAgc3Ryb2tlOiAjM2I0MjUzO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1sZWdlbmQtc2VyaWVzIC5hcGV4Y2hhcnRzLWxlZ2VuZC10ZXh0IHtcbiAgY29sb3I6ICNiNGI3YmQgIWltcG9ydGFudDtcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGNyb3NzaGFpcnMsXG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXljcm9zc2hhaXJzLFxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1ncmlkbGluZSB7XG4gIHN0cm9rZTogIzNiNDI1Mztcbn1cblxuI3RvYXN0LWNvbnRhaW5lciA+IGRpdiB7XG4gIG9wYWNpdHk6IDE7XG4gIC1tcy1maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg2cmVtO1xufVxuXG4jdG9hc3QtY29udGFpbmVyID4gZGl2LFxuI3RvYXN0LWNvbnRhaW5lciA+IGRpdjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKDM0LCA0MSwgNDcsIDAuMDgpO1xufVxuXG4jdG9hc3QtY29udGFpbmVyID4gLnRvYXN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udG9hc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzZlNmI3YiAhaW1wb3J0YW50O1xufVxuLnRvYXN0IC50b2FzdC1jbG9zZS1idXR0b24ge1xuICBjb2xvcjogIzZlNmI3YjtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cbi50b2FzdCAudG9hc3QtY2xvc2UtYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi50b2FzdCAudG9hc3QtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xufVxuLnRvYXN0IC50b2FzdC1wcm9ncmVzcyB7XG4gIG9wYWNpdHk6IDE7XG59XG4udG9hc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kLXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnRvYXN0LXN1Y2Nlc3MgLnRvYXN0LXRpdGxlIHtcbiAgY29sb3I6ICMyOGM3NmY7XG59XG4udG9hc3Qtc3VjY2VzcyAudG9hc3QtcHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNzZmO1xufVxuLnRvYXN0LXN1Y2Nlc3M6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzc2ZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hlY2snJTNFJTNDcG9seWxpbmUgcG9pbnRzPScyMCA2IDkgMTcgNCAxMiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4udG9hc3QtZXJyb3IgLnRvYXN0LXRpdGxlIHtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG4udG9hc3QtZXJyb3IgLnRvYXN0LXByb2dyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNTQ1NTtcbn1cbi50b2FzdC1lcnJvcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXIteCclM0UlM0NsaW5lIHgxPScxOCcgeTE9JzYnIHgyPSc2JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSc2JyB5MT0nNicgeDI9JzE4JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4udG9hc3QtaW5mbyAudG9hc3QtdGl0bGUge1xuICBjb2xvcjogIzAwY2ZlODtcbn1cbi50b2FzdC1pbmZvIC50b2FzdC1wcm9ncmVzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNmZTg7XG59XG4udG9hc3QtaW5mbzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZmU4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1pbmZvJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTYnIHgyPScxMicgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPSc4JyB4Mj0nMTIuMDEnIHkyPSc4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLnRvYXN0LXdhcm5pbmcgLnRvYXN0LXRpdGxlIHtcbiAgY29sb3I6ICNmZjlmNDM7XG59XG4udG9hc3Qtd2FybmluZyAudG9hc3QtcHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjQzO1xufVxuLnRvYXN0LXdhcm5pbmc6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWY0MztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItYWxlcnQtdHJpYW5nbGUnJTNFJTNDcGF0aCBkPSdNMTAuMjkgMy44NkwxLjgyIDE4YTIgMiAwIDAgMCAxLjcxIDNoMTYuOTRhMiAyIDAgMCAwIDEuNzEtM0wxMy43MSAzLjg2YTIgMiAwIDAgMC0zLjQyIDB6JyUzRSUzQy9wYXRoJTNFJTNDbGluZSB4MT0nMTInIHkxPSc5JyB4Mj0nMTInIHkyPScxMyclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTcnIHgyPScxMi4wMScgeTI9JzE3JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLnRvYXN0LXRvcC1sZWZ0IHtcbiAgdG9wOiAxLjNyZW07XG4gIGxlZnQ6IDJyZW07XG59XG5cbi50b2FzdC10b3AtcmlnaHQge1xuICB0b3A6IDEuM3JlbTtcbiAgcmlnaHQ6IDJyZW07XG59XG5cbi50b2FzdC10b3AtY2VudGVyLFxuLnRvYXN0LXRvcC1mdWxsLXdpZHRoIHtcbiAgdG9wOiAxLjNyZW07XG59XG5cbi50b2FzdC1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMS4zcmVtO1xuICBsZWZ0OiAycmVtO1xufVxuXG4udG9hc3QtYm90dG9tLXJpZ2h0IHtcbiAgYm90dG9tOiAxLjNyZW07XG4gIHJpZ2h0OiAycmVtO1xufVxuXG4udG9hc3QtYm90dG9tLWNlbnRlcixcbi50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gIGJvdHRvbTogMS4zcmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIGFuZCAobWluLXdpZHRoOiAyNDFweCkge1xuICAjdG9hc3QtY29udGFpbmVyID4gLnRvYXN0OmFmdGVyIHtcbiAgICB0b3A6IDAuOTVyZW07XG4gIH1cbiAgI3RvYXN0LWNvbnRhaW5lciA+IC50b2FzdCAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IC0xcHg7XG4gIH1cblxuICAjdG9hc3QtY29udGFpbmVyOm5vdCgudG9hc3QtdG9wLWZ1bGwtd2lkdGgpOm5vdCgudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgpID4gZGl2IHtcbiAgICB3aWR0aDogMjByZW07XG4gIH1cblxuICAudG9hc3QtdG9wLWxlZnQge1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAjdG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIsICN0b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWNlbnRlciB7XG4gICAgcmlnaHQ6IDFyZW07XG4gIH1cbiAgI3RvYXN0LWNvbnRhaW5lci50b2FzdC10b3AtY2VudGVyID4gZGl2LCAjdG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1jZW50ZXIgPiBkaXYge1xuICAgIHdpZHRoOiAyMHJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRvYXN0LXRvcC1mdWxsLXdpZHRoLFxuLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA5MyU7XG4gIH1cbiAgLnRvYXN0LXRvcC1mdWxsLXdpZHRoID4gZGl2LFxuLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC50b2FzdC1ib3R0b20tbGVmdCB7XG4gICAgbGVmdDogMC4yNXJlbTtcbiAgICBib3R0b206IDAuNzVyZW07XG4gIH1cblxuICAudG9hc3QtYm90dG9tLXJpZ2h0IHtcbiAgICByaWdodDogMi4yNXJlbTtcbiAgICBib3R0b206IDAuNzVyZW07XG4gIH1cblxuICAudG9hc3QtYm90dG9tLWNlbnRlcixcbi50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gICAgYm90dG9tOiAwLjc1cmVtO1xuICB9XG5cbiAgW2RhdGEtdGV4dGRpcmVjdGlvbj1ydGxdICN0b2FzdC1jb250YWluZXIgPiBkaXYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxufVxuLmRhcmstbGF5b3V0ICN0b2FzdC1jb250YWluZXIgPiBkaXYsXG4uZGFyay1sYXlvdXQgI3RvYXN0LWNvbnRhaW5lciA+IGRpdjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKDM0LCA0MSwgNDcsIDAuMjQpO1xufVxuLmRhcmstbGF5b3V0ICN0b2FzdC1jb250YWluZXIgLnRvYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzA0NjtcbiAgY29sb3I6ICNiNGI3YmQgIWltcG9ydGFudDtcbn1cbi5kYXJrLWxheW91dCAjdG9hc3QtY29udGFpbmVyIC50b2FzdCAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgY29sb3I6ICNiNGI3YmQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICBbZGF0YS10ZXh0ZGlyZWN0aW9uPXJ0bF0gLnRvYXN0IC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIHRvcDogMC41NXJlbSAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuW2RhdGEtdGV4dGRpcmVjdGlvbj1ydGxdIC50b2FzdC10b3AtbGVmdCB7XG4gIGxlZnQ6IDFyZW07XG4gIHJpZ2h0OiBhdXRvO1xufVxuW2RhdGEtdGV4dGRpcmVjdGlvbj1ydGxdIC50b2FzdC10b3AtcmlnaHQge1xuICByaWdodDogM3JlbTtcbiAgbGVmdDogYXV0bztcbn1cbltkYXRhLXRleHRkaXJlY3Rpb249cnRsXSAudG9hc3QtYm90dG9tLWxlZnQge1xuICBsZWZ0OiAxZW07XG4gIHJpZ2h0OiBhdXRvO1xufVxuW2RhdGEtdGV4dGRpcmVjdGlvbj1ydGxdIC50b2FzdC1ib3R0b20tcmlnaHQge1xuICByaWdodDogM3JlbTtcbiAgbGVmdDogYXV0bztcbn1cbltkYXRhLXRleHRkaXJlY3Rpb249cnRsXSAudG9hc3QtdG9wLWZ1bGwtd2lkdGgjdG9hc3QtY29udGFpbmVyID4gZGl2LFxuW2RhdGEtdGV4dGRpcmVjdGlvbj1ydGxdIC50b2FzdC1ib3R0b20tZnVsbC13aWR0aCN0b2FzdC1jb250YWluZXIgPiBkaXYge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIGFuZCAobWluLXdpZHRoOiAyNDFweCkge1xuICAjdG9hc3QtY29udGFpbmVyID4gLnRvYXN0OmFmdGVyIHtcbiAgICB0b3A6IDEuNDRyZW07XG4gIH1cbn0iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMuc2Nzc1xuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gb3ZlcnJpZGVzIG9mIEJvb3RzdHJhcCB2YXJpYWJsZXNcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcbi8vICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBDb2xvciBzeXN0ZW1cblxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGdyYXktNTA6ICNmNmY2ZjYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNiYWJmYzcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXN0XG4kZ3JheS0yMDA6ICNlZGVkZWQgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXJcbiRncmF5LTMwMDogI2RhZTFlNyAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRcbiRncmF5LTQwMDogIzYzNjM2MyAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogI2I4YzJjYyAhZGVmYXVsdDsgLy8gJGdyYXlcbiRncmF5LTcwMDogIzRlNTE1NCAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzFlMWUxZSAhZGVmYXVsdDsgLy8gJGdyYXktZGFya1xuJGdyYXktOTAwOiAjMmEyZTMwICFkZWZhdWx0O1xuJGJsYWNrOiAjMjIyOTJmICFkZWZhdWx0OyAvLyAyMzFmNDggMjIyOTJmXG5cbiRwdXJwbGU6ICM3MzY3ZjAgIWRlZmF1bHQ7IC8vJHByaW1hcnlcbiRncmVlbjogIzI4Yzc2ZiAhZGVmYXVsdDsgLy8kc3VjY2Vzc1xuJGJsdWU6ICMwMGNmZTggIWRlZmF1bHQ7IC8vJGluZm9cbiRvcmFuZ2U6ICNmZjlmNDMgIWRlZmF1bHQ7IC8vJHdhcm5pbmdcbiRyZWQ6ICNlYTU0NTUgIWRlZmF1bHQ7IC8vJGRhbmdlclxuXG4kcHJpbWFyeTogJHB1cnBsZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICM4Mjg2OGIgIWRlZmF1bHQ7XG4kaW5mbzogJGJsdWUgIWRlZmF1bHQ7XG4kd2FybmluZzogJG9yYW5nZSAhZGVmYXVsdDtcbiRsaWdodDogJGdyYXktNTAgIWRlZmF1bHQ7XG4kZGFyazogIzRiNGI0YiAhZGVmYXVsdDtcblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjb250YWluZXItbWF4LXdpZHRoc1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQ0MHB4IC8vIEN1c3RvbSB4eGwgc2l6ZVxuKSAhZGVmYXVsdDtcblxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbnRhaW5lci1tYXgtd2lkdGhzXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAwOiAwLFxuICAgIDI1OiAoXG4gICAgICAkc3BhY2VyICogMC4yNVxuICAgICksXG4gICAgNTA6IChcbiAgICAgICRzcGFjZXIgKiAwLjVcbiAgICApLFxuICAgIDc1OiAoXG4gICAgICAkc3BhY2VyICogMC43NVxuICAgICksXG4gICAgMTogKFxuICAgICAgJHNwYWNlclxuICAgICksXG4gICAgMjogKFxuICAgICAgJHNwYWNlciAqIDEuNVxuICAgICksXG4gICAgMzogKFxuICAgICAgJHNwYWNlciAqIDNcbiAgICApLFxuICAgIDQ6IChcbiAgICAgICRzcGFjZXIgKiAzLjVcbiAgICApLFxuICAgIDU6IChcbiAgICAgICRzcGFjZXIgKiA0XG4gICAgKVxuICApLFxuICAkc3BhY2Vyc1xuKTtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cbiRib2R5LWJnOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICM2ZTZiN2IgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRsaW5rLWNvbG9yLCA1JSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lICFkZWZhdWx0O1xuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAycmVtICFkZWZhdWx0O1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6IDEuMjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206IDEgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICNlYmU5ZjEgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1czogMC4zNTdyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogMC42cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XG5cbi8vIHNoYWRvd1xuJGJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcbi8vIFR5cG9ncmFwaHlcblxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogJ01vbnRzZXJyYXQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhZGVmYXVsdDtcblxuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LXNpemUtYmFzZTogMXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtbGc6IGNlaWwoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDAuODUpICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogNTAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGRlcjogNjAwICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQtYmFzZTogMS40NSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNzE0ICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4yODYgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjA3ICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IGluaGVyaXQgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICM1ZTU4NzMgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kZGlzcGxheTItd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRkaXNwbGF5NC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG5cbiRsZWFkLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4xNCAhZGVmYXVsdDtcbiRsZWFkLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICNiOWI5YzMgIWRlZmF1bHQ7XG4kaHItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAwLjcycmVtICFkZWZhdWx0O1xuXG4kdGFibGUtYWNjZW50LWJnOiAjZmFmYWZjICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAjZjZmNmY5ICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1iZzogI2YzZjJmNyAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1kYXJrLWJnOiAkZGFyayAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogIzQwNDA0MCAhZGVmYXVsdDtcblxuJHRhYmxlLXRoLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuXG4vLyBCdXR0b25zICsgRm9ybXNcbiRidG4tcGFkZGluZy15OiAwLjc4NnJlbSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAxLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAycmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogMC40ODZyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAwLjhyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodDogMSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAwLjM1OHJlbSAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDBzLCBib3JkZXIgMHMgIWRlZmF1bHQ7XG5cbi8vIEZvcm1zXG4kY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjZDhkNmRlO1xuJGxhYmVsLW1hcmdpbi1ib3R0b206IDAuMjg1N3JlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteTogMC40MzhyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206IDAuMTg4cmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogMC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogMS4xNDNyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1kaXNhYmxlZC1iZzogI2VmZWZlZiAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6IDIuNzE0cmVtICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogMi4xNDJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAzLjI4NTdyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogd2hpdGUgIWRlZmF1bHQ7XG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwcywgYm9yZGVyLWNvbG9yIDBzICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogM3B4ICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOS41IDcuNSclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzAuNzUgNC4zNSA0LjE4IDYuNzUgOC43NSAwLjc1JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTolMjNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxLjVweCcvJTNFJTNDL3N2ZyUzRVwiKTtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLW1pbnVzJyUzRSUzQ2xpbmUgeDE9JzUnIHkxPScxMicgeDI9JzE5JyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6IHJnYmEoJHByaW1hcnksIDAuNjUpO1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6IG5vbmU7XG5cbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAxMHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgNCA1Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuLy8gJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4wNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCA1cHggMjVweCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6IHJnYmEoJHByaW1hcnksIDAuMTIpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tZGl2aWRlci1iZzogcmdiYSgkYmxhY2ssIDAuMDgpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1zcGFjZXI6IDAgIWRlZmF1bHQ7XG4kemluZGV4LWRyb3Bkb3duOiAxMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuMjhyZW0gIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuJGRyb3Bkb3duX3NwYWNpbmc6IDAuNXJlbTsgLy8gY3VzdG9tXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuODVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6IDAuNTU3NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogMXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC40NDNyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNzQ1cmVtICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI2YzZjJmNyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvbnQtc2l6ZS1sZzogMS4xNHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG4kcGFnaW5hdGlvbi1mb250LXNpemUtc206IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cblxuLy8gQ2FyZHNcbiRjYXJkLXNwYWNlci15OiAxLjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogMS41cmVtICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMC40MjhyZW0gIWRlZmF1bHQ7XG5cbi8vQWxlcnRzXG5cbiRhbGVydC1wYWRkaW5nLXk6IDAuNzFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6IDcwMCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdiB0YWJzXG5cbiRuYXYtbGluay1wYWRkaW5nLXk6IDAuMzU4cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAwLjI1ICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbi8vIG5hdmJhclxuXG4kZmxvYXRpbmctbmF2LW1hcmdpbjogMS4zcmVtO1xuXG4vLyBUb29sdGlwc1xuXG4kdG9vbHRpcC1iZzogIzMyMzIzMiAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy14OiAwLjc3NXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6IDIyMHB4ICFkZWZhdWx0O1xuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxLjIxcmVtICFkZWZhdWx0O1xuXG4vLyBUb2FzdHNcblxuJHRvYXN0LW1heC13aWR0aDogMzgwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAxLjE0cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogMC4xNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogMC4yODZyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogMCAycHggMjBweCAwIHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3NcblxuJHByb2dyZXNzLWhlaWdodDogMC44NTdyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogNXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDAuODU3ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogMC42cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAwICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdFwiPjxwb2x5bGluZSBwb2ludHM9XCIxNSAxOCA5IDEyIDE1IDZcIj48L3BvbHlsaW5lPjwvc3ZnPicpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0XCI+PHBvbHlsaW5lIHBvaW50cz1cIjkgMTggMTUgMTIgOSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6IDg1JSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogNjAwICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcblxuLy8gTW9kYWxcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjhyZW0gMS40cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xuXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMC44cmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNHJlbSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwteGw6IDk0JSAhZGVmYXVsdDtcbiRtb2RhbC1zbTogNDAwcHggIWRlZmF1bHQ7XG5cbi8vICAgIFNsaWRlIEluIE1vZGFsXG4kbW9kYWwtc2xpZGUtaW4td2lkdGgtc206IDI1cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cbiRtb2RhbC1zbGlkZS1pbi13aWR0aDogMjhyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLWxnOiAzMHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG5cbi8vIENsb3NlXG5cbiRjbG9zZS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kY2xvc2UtZm9udC13ZWlnaHQ6IDQwMCAhZGVmYXVsdDtcbiRjbG9zZS1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xuJGtiZC1iZzogI2VlZSAhZGVmYXVsdDtcblxuLy8gU3dpdGNoXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogM3JlbSAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vc3ZnIGNvbG9yXG4kc3ZnLWNvbG9yLWxpZ2h0OiAjNjI2MjYyICFkZWZhdWx0O1xuXG4vLyBTVkcgaWNvbnNcbi8vIEZvciBCcmVhZGNydW1iXG4kZG91YmxlLWNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb25zLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTMgMTcgMTggMTIgMTMgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgMTcgMTEgMTIgNiA3JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbi8vIENoZXZyb24gSWNvbnNcbiRjaGV2cm9uLWxlZnQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hldnJvbi1yaWdodDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaGV2cm9uLXVwOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXVwJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTggMTUgMTIgOSA2IDE1JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaGV2cm9uLWRvd246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcblxuJGRvd25sb2FkOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1kb3dubG9hZCclM0UlM0NwYXRoIGQ9J00yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00JyUzRSUzQy9wYXRoJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc3IDEwIDEyIDE1IDE3IDEwJyUzRSUzQy9wb2x5bGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTUnIHgyPScxMicgeTI9JzMnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kcmVtb3ZlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci14JyUzRSUzQ2xpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaGVjazogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGVjayclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzIwIDYgOSAxNyA0IDEyJyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaXJjbGU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2lyY2xlJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQy9zdmclM0VcIjtcbiRpbmZvSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1pbmZvJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTYnIHgyPScxMicgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPSc4JyB4Mj0nMTIuMDEnIHkyPSc4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xuJHdhcm5pbmdJY29uOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWFsZXJ0LXRyaWFuZ2xlJyUzRSUzQ3BhdGggZD0nTTEwLjI5IDMuODZMMS44MiAxOGEyIDIgMCAwIDAgMS43MSAzaDE2Ljk0YTIgMiAwIDAgMCAxLjcxLTNMMTMuNzEgMy44NmEyIDIgMCAwIDAtMy40MiAweiclM0UlM0MvcGF0aCUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOScgeDI9JzEyJyB5Mj0nMTMnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE3JyB4Mj0nMTIuMDEnIHkyPScxNyclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcbiRtZW51OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nY3NzLWk2ZHpxMSclM0UlM0NsaW5lIHgxPSczJyB5MT0nMTInIHgyPScyMScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzYnIHgyPScyMScgeTI9JzYnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSczJyB5MT0nMTgnIHgyPScyMScgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xuXG4kY2hhdC1iZy1saWdodDogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJekxqQXVNU3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhacFpYZENiM2c5SWpBZ01DQXlOakFnTWpZd0lpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5qQWdNall3T3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStDanh6ZEhsc1pTQjBlWEJsUFNKMFpYaDBMMk56Y3lJK0Nna3VjM1F3ZTJacGJHd3RjblZzWlRwbGRtVnViMlJrTzJOc2FYQXRjblZzWlRwbGRtVnViMlJrTzJacGJHdzZJMFV4UlRCRk9UdDlDand2YzNSNWJHVStDanhuUGdvSlBHY2dhV1E5SW1rdGJHbHJaUzFtYjI5a0lqNEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qUXVOQ3d4Tm1Nd0xqSXNNQzQyTERBdU5Dd3hMak1zTUM0MUxESm9MVE11TjJ3eExqSXNNaTR6YkRBdU5Td3dMamxzTFRBdU1pd3dMakZXTWpoak1pNHlMREV1Tnl3eUxqY3NOQzQ0TERFc053b0pDUWxqTFRBdU9Dd3hMVEV1T1N3eExqY3RNeTR5TERFdU9WWXpOMk10TUM0NUxETXVOUzAwTGpFc05pMDNMamdzTm1ndE1qQmpMVE11Tml3d0xUWXVPQzB5TGpVdE55NDNMVFoyTFRBdU1XTXRNaTQzTFRBdU5DMDBMall0TXkwMExqSXROUzQzWXpBdU1pMHhMak1zTUM0NUxUSXVOU3d4TGprdE15NHlDZ2tKQ1hZdE5pNDRiQzB3TGpndE1TNDJiQzB3TGpRdE1DNDViREF1T1Mwd0xqUk1MVEUzTERFNGFDMHpReTB4Tnk0eUxEVXVOaTAwTGprdE1pNHlMRGN1TlN3d0xqWkRNVFV1TkN3eUxqTXNNakV1T1N3NExqSXNNalF1TkN3eE5ub2dUUzB4TWk0MExERTRZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4Q2drSkNXd3RNeTR4TERFdU5td3dMamtzTVM0NGJERXVNeTB3TGpkak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRJdU1pMHhMakZqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpFS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4WXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFF6Y3VOQ3d5TWl3M0xqY3NNaklzT0N3eU1TNDViREl1T1MweExqTmpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak1LQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d6TGpFdE1TNDFiQzB3TGprdE1TNDRiQzB4TGpRc01DNDNZeTB3TGpnc01DNDBMVEV1Tnl3d0xqUXRNaTQyTERBdU1Xd3RNaTQ0TFRFdU1rTXhNaTR6TERFNExERXlMaklzTVRnc01USXVNU3d4T0d3d0xEQUtDUWtKWXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVV3MExERTRMakZETXk0NUxERTRMRE11Tnl3eE9Dd3pMallzTVRoc01Dd3dZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4VERFc01Ua3VNZ29KQ1FsakxUQXVPQ3d3TGpRdE1TNDRMREF1TkMweUxqY3NNRXd0TkN3eE9DNHhReTAwTGpFc01UZ3ROQzR6TERFNExUUXVOQ3d4T0d3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZNTFRjc01Ua3VNbU10TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eENna0pDVU10TVRJdU1Td3hPQzB4TWk0ekxERTRMVEV5TGpRc01UaE1MVEV5TGpRc01UaE1MVEV5TGpRc01UaDZJRTB0TVRJdU5Dd3hObWd0TkM0NVF5MHhNeTQxTERVdU1TMHhMalV0TUM0M0xEa3VOU3d6TGpKak5pd3lMakVzTVRBdU55dzJMamdzTVRJdU9Dd3hNaTQ0YUMweUxqRnNMVEF1TVMwd0xqRUtDUWtKVERFNUxqa3NNVFpJTFRFeUxqUk1MVEV5TGpRc01UWjZJRTB4Tnk0NUxESXpMamRzTVM0MExUQXVOMmd4TGpOMk1tZ3RNeloyTFRFdU1Xd3dMak10TUM0eWJERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRJTFRNS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3VERJdU15d3lNMmd5TGpac01TNDBMREF1TjJNd0xqY3NNQzQwTERFdU55d3dMalFzTWk0MUxEQnNNUzQzTFRBdU4yZ3pMakpzTVM0M0xEQXVOME14Tmk0eUxESTBMakVzTVRjdU1Td3lOQzR4TERFM0xqa3NNak11TjNvS0NRa0pJRTB0TVRNdU9Dd3lOMnd4Tmk0MExEUXVPVXd4T0M0NUxESTNTQzB4TXk0NGVpQk5MVEUwTGpRc01qbG9NQzR6YkRFMkxqY3NOV3d4Tmk0M0xUVm9NQzR6WXpFdU55d3dMRE1zTVM0ekxETXNNM010TVM0ekxETXRNeXd6YUMwek5HTXRNUzQzTERBdE15MHhMak10TXkwekNna0pDVU10TVRjdU5Dd3pNQzR6TFRFMkxqRXNNamt0TVRRdU5Dd3lPWG9nVFMweE15NHhMRE0zWXpBdU9Dd3lMalFzTXk0eExEUXNOUzQzTERSb01qQmpNaTQxTERBc05DNDRMVEV1Tml3MUxqY3RORU14T0M0eUxETTNMVEV6TGpFc016Y3RNVE11TVN3ek4zb2lMejRLQ1FrOGNHRjBhQ0JwWkQwaWNHRjBhRFpmWm1sc2JDMWpiM0I1SWlCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpnMExqUXNNVFpqTUM0eUxEQXVOaXd3TGpRc01TNHpMREF1TlN3eWFDMHpMamRzTVM0eUxESXVNMnd3TGpVc01DNDViQzB3TGpJc01DNHhWakk0WXpJdU1pd3hMamNzTWk0M0xEUXVPQ3d4TERjS0NRa0pZeTB3TGpnc01TMHhMamtzTVM0M0xUTXVNaXd4TGpsV016ZGpMVEF1T1N3ekxqVXROQzR4TERZdE55NDRMRFpvTFRJd1l5MHpMallzTUMwMkxqZ3RNaTQxTFRjdU55MDJkaTB3TGpGakxUSXVOeTB3TGpRdE5DNDJMVE10TkM0eUxUVXVOMk13TGpJdE1TNHpMREF1T1MweUxqVXNNUzQ1TFRNdU1nb0pDUWwyTFRZdU9Hd3RNQzQ0TFRFdU5td3RNQzQwTFRBdU9Xd3dMamt0TUM0MFRESTBNeXd4T0dndE0yTXlMamd0TVRJdU5Dd3hOUzR4TFRJd0xqSXNNamN1TlMweE55NDBRekkzTlM0MExESXVNeXd5T0RFdU9TdzRMaklzTWpnMExqUXNNVFo2SUUweU5EY3VOU3d4T0FvSkNRbGpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRNdU1Td3hMalpzTUM0NUxERXVPR3d4TGpNdE1DNDNZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4WXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eENna0pDV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTR5TFRFdU1XTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNDVMVEV1TXdvSkNRbGpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak5qTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JETXVNUzB4TGpWc0xUQXVPUzB4TGpoc0xURXVOQ3d3TGpkakxUQXVPQ3d3TGpRdE1TNDNMREF1TkMweUxqWXNNQzR4YkMweUxqZ3RNUzR5Q2drSkNXTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOQzB3TGpGc01Dd3dZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNV3d0TWk0ekxURXVNV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TlMwd0xqRnNNQ3d3Q2drSkNXTXRNQzR5TERBdE1DNHpMREF0TUM0MExEQXVNV3d0TWk0eUxERXVNV010TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eFl5MHdMakV0TUM0eExUQXVNeTB3TGpFdE1DNDBMVEF1TVd3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRJdU1pd3hMakVLQ1FrSll5MHdMamdzTUM0MExURXVPQ3d3TGpRdE1pNDNMREJzTFRJdU1pMHhMakZETWpRM0xqa3NNVGdzTWpRM0xqY3NNVGdzTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGg2SUUweU5EY3VOU3d4Tm1ndE5DNDVZek11T1MweE1DNDVMREUxTGprdE1UWXVOeXd5Tmk0NExURXlMamdLQ1FrSll6WXNNaTR4TERFd0xqY3NOaTQ0TERFeUxqZ3NNVEl1T0dndE1pNHhiQzB3TGpFdE1DNHhiQzB3TGpNc01DNHhTREkwTnk0MVRESTBOeTQxTERFMmVpQk5NamMzTGprc01qTXVOMnd4TGpRdE1DNDNhREV1TTNZeWFDMHpObll0TVM0eGJEQXVNeTB3TGpKc01TNDBMVEF1TjJneUxqWUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqY3NNQzQwTERJdU5pd3dMakZzTVM0M0xUQXVOd29KQ1Fsb015NHliREV1Tnl3d0xqZERNamMyTGpJc01qUXVNU3d5TnpjdU1Td3lOQzR4TERJM055NDVMREl6TGpkTU1qYzNMamtzTWpNdU4zb2dUVEkwTmk0eUxESTNiREUyTGpRc05DNDVUREkzT1N3eU4wZ3lORFl1TW5vZ1RUSTBOUzQxTERJNWFEQXVNMnd4Tmk0M0xEVnNNVFl1TnkwMWFEQXVNd29KQ1Fsak1TNDNMREFzTXl3eExqTXNNeXd6Y3kweExqTXNNeTB6TEROb0xUTTBZeTB4TGpjc01DMHpMVEV1TXkwekxUTlRNalF6TGprc01qa3NNalExTGpVc01qbDZJRTB5TkRZdU9Td3pOMk13TGpnc01pNDBMRE11TVN3MExEVXVOaXcwYURJd1l6SXVOU3d3TERRdU9DMHhMallzTlM0M0xUUUtDUWtKU0RJME5pNDVlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TlRrdU5Td3lNV010TVM0ekxUTXVOaTAwTGpjdE5pMDRMalV0Tm1ndE5ESmpMVE11T0N3d0xUY3VNaXd5TGpRdE9DNDFMRFpqTFRNdU15d3dMak10TlM0NExETXVNaTAxTGpVc05pNDFZekF1TWl3eUxqa3NNaTQyTERVdU1pdzFMalVzTlM0MUNna0pDV010TVM0M0xEUXVOeXd3TGpnc09TNDRMRFV1TkN3eE1TNDFZekVzTUM0ekxESXNNQzQxTERNc01DNDFhRFF5WXpVc01DdzVMVFFzT1MwNVl6QXRNUzB3TGpJdE1pNHhMVEF1TlMwell6TXVNeTB3TGpNc05TNDRMVE11TWl3MUxqVXROaTQxQ2drSkNVTXhOalF1Tnl3eU15NDJMREUyTWk0MExESXhMak1zTVRVNUxqVXNNakY2SUUweE5URXNNVGRvTFRReVl5MHlMamNzTUMwMUxqSXNNUzQyTFRZdU15dzBhRFUwTGpkRE1UVTJMaklzTVRndU5pd3hOVE11Tnl3eE55d3hOVEVzTVRkNklFMHhOREV1Tnl3ME13b0pDUWxqTWk0eExURXVOeXd6TGpNdE5DNHpMRE11TXkwM2FDMHlZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROQzR6WXpJdU1TMHhMamNzTXk0ekxUUXVNeXd6TGpNdE4yZ3RNbU13TERNdU9TMHpMakVzTnkwM0xEZG9MVFF1TTJNeUxqRXRNUzQzTERNdU15MDBMak1zTXk0ekxUZG9MVElLQ1FrSll6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE4yTXRNeTQ1TERBdE55MHpMakV0TnkwM2N6TXVNUzAzTERjdE4yZzBNbU16TGprc01DdzNMRE11TVN3M0xEZHpMVE11TVN3M0xUY3NOMGd4TkRFdU4zb2dUVEV3T1N3eU4yTXRNeXd3TFRVdU9Dd3hMalV0Tnk0MUxEUklNVEF4Q2drSkNXTXRNaTR5TERBdE5DMHhMamd0TkMwMGN6RXVPQzAwTERRdE5HZzFPR015TGpJc01DdzBMREV1T0N3MExEUnpMVEV1T0N3MExUUXNOR2d0TUM0MVl5MHhMamN0TWk0MUxUUXVOUzAwTFRjdU5TMDBTREV3T1hvaUx6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk16a3NNVEUxWXpRdU5Dd3dMRGd0TXk0MkxEZ3RPSE10TXk0MkxUZ3RPQzA0Y3kwNExETXVOaTA0TERoVE16UXVOaXd4TVRVc016a3NNVEUxZWlCTk5EVXNNVEEzWXpBc015NHpMVEl1Tnl3MkxUWXNObk10TmkweUxqY3ROaTAyQ2drSkNYTXlMamN0Tml3MkxUWlRORFVzTVRBekxqY3NORFVzTVRBM2VpQk5ORElzTnpoMkxUSm9PSFl0TmtnME1HTXRNaTR5TERBdE5Dd3hMamd0TkN3MGRqRXdTREl5YkMweExqTXNORXd5TUN3NU1HZ3lMakpzTXk0NExEUXdhREkyYkRNdU9DMDBNRWcxT0d3dE1DNDNMVEpNTlRZc09EUklOREpXTnpoNkNna0pDU0JOTXpnc056UjJNVEJvTWxZM05HZzRkaTB5YUMwNFF6TTRMamtzTnpJc016Z3NOekl1T1N3ek9DdzNOSG9nVFRRd0xEZzJhREUwTGpac01DNDNMREpJTWpJdU9Hd3dMamN0TWtnME1Ib2dUVFV6TGpnc09UQklNalF1TW13ekxqWXNNemhvTWpJdU5FdzFNeTQ0TERrd2VpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhNamtzT1RKb0xUWjJOR2d0Tm5ZMGFDMDJkakUwYUMwemJEQXVNaXd5YkRNdU9Dd3pNbWd6Tm13ekxqZ3RNekpzTUM0eUxUSm9MVE4yTFRFMGFDMDJkaTAwYUMwMmRpMDBTREV5T1hvZ1RURTBOeXd4TVRSMkxURXlhQzAwZGpSb00zWTRTREUwTndvSkNRbDZJRTB4TkRRc01URTBkaTAyYUMwMGRqWklNVFEwZWlCTk1UTTRMREV5TUhZdE1UWm9MVFIyTVRrdU1rTXhNelV1Tml3eE1qSXVOU3d4TXpjc01USXhMalFzTVRNNExERXlNSG9nVFRFek1pd3hNak11T0ZZeE1EQm9MVFIyTWpNdU9Bb0pDUWxETVRJNUxqTXNNVEkwTGpFc01UTXdMamNzTVRJMExqRXNNVE15TERFeU15NDRlaUJOTVRJMkxERXlNeTR5VmpFd05HZ3ROSFl4TmtNeE1qTXNNVEl4TGpRc01USTBMalFzTVRJeUxqVXNNVEkyTERFeU15NHllaUJOTVRJd0xERXhOSFl0Tm1ndE5IWTJTREV5TUhvZ1RURXhOQ3d4TVRSMkxUaG9Nd29KQ1FsMkxUUm9MVFIyTVRKSU1URTBlaUJOTVRReExERXdNbll0TkdndE5IWTBhRE4yTkdneFZqRXdNbm9nVFRFek5Td3hNREoyTFRob0xUUjJOR2d6ZGpSSU1UTTFlaUJOTVRJNUxEazRkaTAwYUMwMGRqaG9NWFl0TkVneE1qbDZJRTB4TWpNc01UQXlkaTAwYUMwMGRqaG9NWFl0TkVneE1qTjZDZ2tKQ1NCTk1UTXdMREV5Tm1NMUxqa3NNQ3d4TUM0NUxUUXVNaXd4TVM0NExURXdhRGN1T1d3dE15NDFMRE13YUMwek1pNDBiQzB6TGpVdE16Qm9OeTQ1UXpFeE9TNHhMREV5TVM0NExERXlOQzR4TERFeU5pd3hNekFzTVRJMmVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHlNVElzT0RaMk1tZ3ROSFl0TWtneU1USjZJRTB5TVRZc09EWm9MVEoyTW1neVZqZzJlaUJOTVRrMkxEZzJUREU1Tml3NE5tTXRNaTQzTERBdU55MDBMalVzTXk0ekxUTXVPU3cyWXpBdU5Dd3hMamdzTVM0MkxETXVNaXd6TGpNc015NDRDZ2tKQ1d3d0xqRXNNQzR5YkRFdU1TdzBMalZqTUM0eUxEQXVPU3d4TERFdU5Td3hMamtzTVM0MWJEQXNNR3czTERJMExqWmpNQzR5TERBdU9Td3hMREV1TkN3eExqa3NNUzQwYURWak1DNDVMREFzTVM0M0xUQXVOaXd4TGprdE1TNDBiRGN0TWpRdU5tTXdMamtzTUN3eExqY3RNQzQyTERFdU9TMHhMalVLQ1FrSmJERXVNUzAwTGpWc01DNHhMVEF1TW1NeUxqWXRNQzQ1TERRdU1TMHpMamNzTXk0eUxUWXVNMk10TUM0MkxURXVOeTB5TFRNdE15NDRMVE11TTFZNE5tTXdMVGN1TnkwMkxqTXRNVFF0TVRRdE1UUlRNVGsyTERjNExqTXNNVGsyTERnMmVpQk5NakF3TERnMmFEWjJNbWd0T1FvSkNRbGpMVEV1Tnl3d0xUTXNNUzR6TFRNc00zTXhMak1zTXl3ekxETm9NalpqTVM0M0xEQXNNeTB4TGpNc015MHpjeTB4TGpNdE15MHpMVE5vTFROMkxUSm9NbU13TFRZdU5pMDFMalF0TVRJdE1USXRNVEp6TFRFeUxEVXVOQzB4TWl3eE1rZ3lNREI2SUUweE9UZ3VOaXd4TURCc0xURXROR2d5TkM0NUNna0pDV3d0TVN3MFNERTVPQzQyZWlCTk1qQTNMalVzTVRJMmJDMDJMamt0TWpSb01UZ3VOMnd0Tmk0NUxESTBTREl3Tnk0MWVpQk5NVFV3TERJME1tTXhNaTR5TERBc01qSXRPUzQ0TERJeUxUSXljeTA1TGpndE1qSXRNakl0TWpKekxUSXlMRGt1T0MweU1pd3lNZ29KQ1FsVE1UTTNMamdzTWpReUxERTFNQ3d5TkRKNklFMHhOelFzTWpJd1l6QXNNVE11TXkweE1DNDNMREkwTFRJMExESTBjeTB5TkMweE1DNDNMVEkwTFRJMGJEQXNNR013TFRFekxqTXNNVEF1TnkweU5Dd3lOQzB5TkZNeE56UXNNakEyTGpjc01UYzBMREl5TUhvZ1RURTBOUzQyTERJek55NDNDZ2tKQ1d3eUxUQXVPV014TGpVdE1DNDJMRE11TWkwd0xqWXNOQzQzTERCc01pd3dMamxqTUM0NUxEQXVOQ3d5TERBc01pNDFMVEF1T0d3eExqRXRNUzQ1WXpBdU9DMHhMalFzTWk0eUxUSXVOQ3d6TGpndE1pNDRiREl1TVMwd0xqVmpNUzB3TGpJc01TNDJMVEV1TVN3eExqVXRNaTR4YkMwd0xqSXRNaTR5Q2drSkNXTXRNQzR4TFRFdU5pd3dMalF0TXk0eUxERXVOQzAwTGpWc01TNDBMVEV1TjJNd0xqY3RNQzQ0TERBdU55MHhMamtzTUMweUxqWnNMVEV1TkMweExqZGpMVEV1TVMweExqSXRNUzQyTFRJdU9DMHhMalF0TkM0MWJEQXVNaTB5TGpKak1DNHhMVEV0TUM0MkxURXVPUzB4TGpZdE1pNHhDZ2tKQ1d3dE1pNHhMVEF1TldNdE1TNDJMVEF1TkMwekxURXVOQzB6TGpndE1pNDRiQzB4TGpFdE1TNDVZeTB3TGpVdE1DNDVMVEV1TmkweExqSXRNaTQxTFRBdU9Hd3RNaXd3TGpsakxURXVOU3d3TGpZdE15NHlMREF1TmkwMExqY3NNR3d0TWkwd0xqbGpMVEF1T1Mwd0xqUXRNaXd3TFRJdU5Td3dMamdLQ1FrSmJDMHhMREl1TVdNdE1DNDRMREV1TkMweUxqSXNNaTQwTFRNdU9Dd3lMamhzTFRJdU1Td3dMalZqTFRFc01DNHlMVEV1Tml3eExqRXRNUzQxTERJdU1Xd3dMaklzTWk0eVl6QXVNU3d4TGpZdE1DNDBMRE11TWkweExqUXNOQzQxYkMweExqUXNNUzQzQ2drSkNXTXRNQzQzTERBdU9DMHdMamNzTVM0NUxEQXNNaTQyYkRFdU5Dd3hMamRqTVM0eExERXVNaXd4TGpZc01pNDRMREV1TkN3MExqVnNMVEF1TWl3eUxqSmpMVEF1TVN3eExEQXVOaXd4TGprc01TNDJMREl1TVd3eUxqRXNNQzQxWXpFdU5pd3dMalFzTXl3eExqUXNNeTQ0TERJdU9Hd3hMakVzTVM0NUNna0pDVU14TkRNdU5pd3lNemN1T0N3eE5EUXVOeXd5TXpndU1Td3hORFV1Tml3eU16Y3VOMHd4TkRVdU5pd3lNemN1TjNvZ1RURTBPQzQwTERJek9DNDNZekV0TUM0MExESXVNUzB3TGpRc015NHhMREJzTWl3d0xqbGpNUzQ0TERBdU9DdzBMREF1TVN3MUxURXVObXd4TGpFdE1TNDVDZ2tKQ1dNd0xqWXRNQzQ1TERFdU5TMHhMallzTWk0MUxURXVPR3d5TGpFdE1DNDFZekV1T1Mwd0xqUXNNeTR6TFRJdU15d3pMakV0TkM0eWJDMHdMakl0TWk0eVl5MHdMakV0TVM0eExEQXVNeTB5TGpJc01TMHpiREV1TkMweExqZGpNUzR6TFRFdU5Td3hMak10TXk0M0xEQXROUzR5YkMweExqUXRNUzQzQ2drSkNXTXRNQzQzTFRBdU9DMHhMakV0TVM0NUxURXRNMnd3TGpJdE1pNHlZekF1TWkweUxURXVNUzB6TGpndE15NHhMVFF1TW13dE1pNHhMVEF1TldNdE1TNHhMVEF1TWkweUxUQXVPUzB5TGpVdE1TNDRiQzB4TGpFdE1TNDVZeTB4TFRFdU55MHpMakl0TWk0MExUVXRNUzQyYkMweUxEQXVPUW9KQ1FsakxURXNNQzQwTFRJdU1Td3dMalF0TXk0eExEQnNMVEl0TUM0NVl5MHhMamd0TUM0NExUUXRNQzR4TFRVc01TNDJiQzB4TGpFc01TNDVZeTB3TGpZc01DNDVMVEV1TlN3eExqWXRNaTQxTERFdU9Hd3RNaTR4TERBdU5XTXRNUzQ1TERBdU5DMHpMak1zTWk0ekxUTXVNU3cwTGpKc01DNHlMREl1TWdvSkNRbGpNQzR4TERFdU1TMHdMak1zTWk0eUxURXNNMnd0TVM0MExERXVOMk10TVM0ekxERXVOUzB4TGpNc015NDNMREFzTlM0eWJERXVOQ3d4TGpkak1DNDNMREF1T0N3eExqRXNNUzQ1TERFc00yd3RNQzR5TERJdU1tTXRNQzR5TERJc01TNHhMRE11T0N3ekxqRXNOQzR5YkRJdU1Td3dMalVLQ1FrSll6RXVNU3d3TGpJc01pd3dMamtzTWk0MUxERXVPR3d4TGpFc01TNDVZekVzTVM0M0xETXVNaXd5TGpRc05Td3hMalpNTVRRNExqUXNNak00TGpkNklFMHhOVElzTWpBM1l6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxUTVRVeUxESXdOeTQyTERFMU1pd3lNRGQ2SUUweE5UZ3NNakE1WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakE1TGpZc01UVTRMREl3T1hvZ1RURTBOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVFvSkNRbHpMVEF1TkN3eExURXNNVk14TkRjc01qRXdMallzTVRRM0xESXhNSG9nVFRFME1Td3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME1Td3lNVEF1Tml3eE5ERXNNakV3ZWlCTk1UUTBMREl3TldNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTkN3eU1EVXVOaXd4TkRRc01qQTFlaUJOTVRNMkxESXhNMk13TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNMkxESXhNeTQyTERFek5pd3lNVE42SUUweE16a3NNakU1Q2drSkNXTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE01TERJeE9TNDJMREV6T1N3eU1UbDZJRTB4TXprc01qSTFZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TXprc01qSTFMallzTVRNNUxESXlOWG9LQ1FrSklFMHhORE1zTWpNeVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhORE1zTWpNeUxqWXNNVFF6TERJek1ub2dUVEUwT0N3eU16QmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hDZ2tKQ1ZNeE5EZ3NNak13TGpZc01UUTRMREl6TUhvZ1RURTFNeXd5TXpSak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTFNeXd5TXpRdU5pd3hOVE1zTWpNMGVpQk5NVFUzTERJeU9HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eENna0pDWE10TUM0MExERXRNU3d4VXpFMU55d3lNamd1Tml3eE5UY3NNakk0ZWlCTk1UWXpMREl5TkdNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UWXpMREl5TkM0MkxERTJNeXd5TWpSNklFMHhOVGtzTWpJeFl6QXRNQzQyTERBdU5DMHhMREV0TVFvSkNRbHpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRVNUxESXlNUzQyTERFMU9Td3lNakY2SUUweE5qTXNNakU0WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5qTXNNakU0TGpZc01UWXpMREl4T0hvZ1RURTFPQ3d5TVRRS0NRa0pZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qRTBMallzTVRVNExESXhOSG9nVFRFek5Dd3lNakJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFek5Dd3lNakF1Tml3eE16UXNNakl3ZWdvSkNRa2dUVEUxTUN3eU1qVmpNaTQ0TERBc05TMHlMaklzTlMwMWN5MHlMakl0TlMwMUxUVnpMVFVzTWk0eUxUVXNOVk14TkRjdU1pd3lNalVzTVRVd0xESXlOWG9nVFRFMU55d3lNakJqTUN3ekxqa3RNeTR4TERjdE55dzNjeTAzTFRNdU1TMDNMVGR6TXk0eExUY3NOeTAzQ2drSkNWTXhOVGNzTWpFMkxqRXNNVFUzTERJeU1Ib2dUVEkwTXl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TkRONklFMHlOaklzTWpBd1l6QXRNQzQyTERBdU5DMHhMREV0TVdneUNna0pDV013TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNeU5qSXVOQ3d5TURFc01qWXlMREl3TUM0MkxESTJNaXd5TURCNklFMHlORGdzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURUtDUWtKU0RJME9Ib2dUVEl5TXl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TWpONklFMHlNamdzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESUtDUWtKWXpBdU5pd3dMREV0TUM0MExERXRNWE10TUM0MExURXRNUzB4U0RJeU9Ib2dUVEl6Tnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpNM0xqUXNNakV4TERJek55d3lNVEF1Tml3eU16Y3NNakV3ZWdvSkNRa2dUVEkxTWl3eU1URmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpVeUxqUXNNakV5TERJMU1pd3lNVEV1Tml3eU5USXNNakV4ZWlCTk1qWTBMREl3T1dNdE1DNDJMREF0TVN3d0xqUXRNU3d4Y3pBdU5Dd3hMREVzTVdneUNna0pDV013TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TmpSNklFMHlOVE1zTVRrMVl6QXRNQzQyTERBdU5DMHhMREV0TVdneVl6QXVOaXd3TERFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eGFDMHlRekkxTXk0MExERTVOaXd5TlRNc01UazFMallzTWpVekxERTVOWG9LQ1FrSklFMHlNelFzTVRrMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklNak0wZWlCTk1qUXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbG9MVEpETWpRd0xqUXNNakF4TERJME1Dd3lNREF1Tml3eU5EQXNNakF3ZWlCTk1qRTFMREl4TldNd0xUQXVOU3d3TFRBdU9Td3dMVEV1TkdNdE1pNDFMVEV1TVMwekxqY3ROQzB5TGpZdE5pNDJZekF1TWkwd0xqVXNNQzQxTFRFc01DNDVMVEV1TkdNdE1DNDVMVElzTUMwMExqSXNNUzQ1TFRVdU1nb0pDUWxqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUdNd0xqUXRNQzQxTERBdU9TMHdMamtzTVM0MUxURXVNV013TGpVdE1pNDNMRE11TVMwMExqVXNOUzQ0TFRRdU1XTXdMamNzTUM0eExERXVOQ3d3TGpRc01pd3dMamhqTlM0ekxUTXVPQ3d4TVM0MkxUVXVPU3d4T0M0eUxUVXVPUW9KQ1Fsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamxqTWk0ekxURXVOaXcxTGpRdE1TdzNMREV1TTJNd0xqUXNNQzQyTERBdU55d3hMak1zTUM0NExESmpNQzQyTERBdU1pd3hMakVzTUM0MkxERXVOU3d4TGpGak1pNDNMREF1T0N3MExqSXNNeTQxTERNdU5DdzJMakpzTUN3d0Nna0pDV014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpKak1TNDVMRElzTVM0NExEVXVNaTB3TGpJc04yTXRNQzQwTERBdU5DMHdMamtzTUM0M0xURXVOU3d4WXpBc01DNDFMREFzTUM0NUxEQXNNUzQwZGpGb0xUWXlkaTB4U0RJeE5Yb2dUVEl4TlM0NExESXdOeTQ0Q2drSkNXTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpaakxURXVNeTB4TFRFdU5pMHlMamt0TUM0MkxUUXVNbXd3TERCRE1qRTFMREl3Tnk0MUxESXhOUzQwTERJd055NDNMREl4TlM0NExESXdOeTQ0VERJeE5TNDRMREl3Tnk0NGVpQk5NakUzTGpNc01qQXpMaklLQ1FrSll5MHdMalFzTUM0NUxUQXVOeXd4TGpndE1Td3lMamRqTFRFdE1DNDBMVEV1TmkweExqVXRNUzR6TFRJdU5XTXdMakl0TUM0MUxEQXVOaTB3TGprc01TNHhMVEV1TWtNeU1UWXVOU3d5TURJdU5pd3lNVFl1T1N3eU1ESXVPU3d5TVRjdU15d3lNRE11TWt3eU1UY3VNeXd5TURNdU1ub0tDUWtKSUUweU1Ua3VOaXd4T1RndU4yTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRE1qRTRMak1zTVRrM0xqWXNNakU0TGprc01UazRMak1zTWpFNUxqWXNNVGs0TGpjS0NRa0pUREl4T1M0MkxERTVPQzQzZWlCTk1qSXdMamdzTVRrM1l6QXVOQzB3TGpVc01DNDNMVEVzTVM0eExURXVOV010TUM0ekxUQXVOUzB3TGprdE1DNDNMVEV1TkMwd0xqUnpMVEF1Tnl3d0xqa3RNQzQwTERFdU5FTXlNakF1TXl3eE9UWXVOeXd5TWpBdU5Td3hPVFl1T1N3eU1qQXVPQ3d4T1RjS0NRa0pUREl5TUM0NExERTVOM29nVFRJeU5pNHhMREU1TVM0eVl5MHhMREF1T1MweUxERXVPQzB5TGprc01pNDRZeTB3TGpNdE1DNHpMVEF1Tnkwd0xqWXRNUzR4TFRBdU9HTXdMalF0TVM0MkxESXVNUzB5TGpVc015NDNMVEl1TVFvSkNRbERNakkxTGprc01Ua3hMakVzTWpJMkxERTVNUzR5TERJeU5pNHhMREU1TVM0eVRESXlOaTR4TERFNU1TNHllaUJOTWpZNExqZ3NNVGswWXkwd0xqa3RNUzB4TGprdE1TNDVMVEl1T1MweUxqaGpNUzQxTFRBdU5pd3pMak1zTUM0eExETXVPU3d4TGpjS0NRa0pZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNeU5qa3VOU3d4T1RNdU5Dd3lOamt1TVN3eE9UTXVOaXd5TmpndU9Dd3hPVFJNTWpZNExqZ3NNVGswZWlCTk1qY3dMakVzTVRrMUxqVmpNQzQwTERBdU5Td3dMamdzTVN3eExqRXNNUzQwQ2drSkNXTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW5NdE1DNDNMVEF1T1MweExqSXRNQzQ0UXpJM01DNDFMREU1TlM0eExESTNNQzR6TERFNU5TNHpMREkzTUM0eExERTVOUzQxZWlCTk1qY3pMamtzTWpBeExqUmpMVEF1TlMwd0xqa3RNUzB4TGpndE1TNDFMVEl1TndvSkNRbGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXlOelF1TWl3eU1ERXVNU3d5TnpRc01qQXhMaklzTWpjekxqa3NNakF4TGpSNklFMHlOelV1Tml3eU1EVXVPV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M0Nna0pDV013TGpRdE1DNHpMREF1T0Mwd0xqWXNNUzR5TFRGak1Td3dMalVzTVM0MExERXVOeXd4TERJdU4wTXlOell1Tml3eU1EVXVNeXd5TnpZdU1pd3lNRFV1Tnl3eU56VXVOaXd5TURVdU9Yb2dUVEkzTmk0NExESXhNUzQwWXkwd0xqRXRNUzR5TFRBdU5DMHlMalF0TUM0MkxUTXVOZ29KQ1Fsak1DNDFMVEF1TVN3d0xqa3RNQzQwTERFdU1pMHdMalpETWpjNExqUXNNakE0TGpVc01qYzRMakVzTWpFd0xqUXNNamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUjZJRTB5TnpVc01qRTBZeTB3TGpVdE1UWXRNVE11T1MweU9DNDJMVEk1TGprdE1qZ3VNUW9KQ1FsakxURTFMak1zTUM0MUxUSTNMallzTVRJdU9DMHlPQzR4TERJNExqRklNamMxVERJM05Td3lNVFI2SUUwM01pNHpMREU1T0M0eFl5MHdMakl0TUM0ekxUQXVNeTB3TGpjdE1DNHpMVEV1TVhZdE1USm9MVEoyTVRKak1Dd3lMaklzTVM0NExEUXNOQ3cwQ2drSkNXTXhMaklzTUN3eUxqTXRNQzQxTERNdU1TMHhMalJqTUM0MkxUQXVOeXd3TGprdE1TNDJMREF1T1MweUxqVjJMVEV5YUMweWRqRXlZekFzTVM0eExUQXVPU3d5TFRJc01td3dMREJETnpNdU15d3hPVGtzTnpJdU55d3hPVGd1Tnl3M01pNHpMREU1T0M0eGVpQk5OelVzTVRjMkNna0pDV013TGpRc01Dd3dMamNzTUN3eExqRXRNQzR4WXpBdU5Td3lMaklzTWk0MkxETXVOU3cwTGpnc00yTXdMalV0TUM0eExERXRNQzR6TERFdU5DMHdMalpqTVM0eExESXVNU3d4TGpjc05DNDBMREV1Tnl3MkxqZDJNalJqTUN3ekxqTXRNaTQzTERZdE5pdzJhQzB6ZGprS0NRa0pZekFzTWk0NExUSXVNaXcxTFRVc05YTXROUzB5TGpJdE5TMDFkaTA1YUMwell5MHpMak1zTUMwMkxUSXVOeTAyTFRaMkxUSTBZekF0Tnk0M0xEWXVNeTB4TkN3eE5DMHhORU0zTUN3eE56TXVPQ3czTWk0eUxERTNOaXczTlN3eE56WjZJRTAxT0N3eE9URjJNVElLQ1FrSll6QXNNQzQ0TERBdU5Td3hMalVzTVM0eUxERXVPR013TGprc01DNDBMREV1T1N3d0xqRXNNaTQwTFRBdU4yTXdMakl0TUM0ekxEQXVNeTB3TGpjc01DNHpMVEV1TVhZdE1USm9Nbll4TW1Nd0xESXVNaTB4TGpjc05DMHpMamtzTkdNdE1DNDFMREF0TVMwd0xqRXRNUzQwTFRBdU1nb0pDUWxqTFRBdU1pMHdMakV0TUM0MExUQXVNaTB3TGpjdE1DNHpkakl1TldNd0xESXVNaXd4TGpnc05DdzBMRFJvTVRaak1pNHlMREFzTkMweExqZ3NOQzAwZGkweU5HTXdMVEV1TlMwd0xqSXRNaTQ1TFRBdU55MDBMakpqTFRBdU5Dd3dMakV0TUM0NUxEQXVNaTB4TGpNc01DNHlDZ2tKQ1dNdE1pNHhMREF0TkM0eExURXVNUzAxTGpJdE0yTXRNeTB3TGpFdE5TNDJMVEl0Tmk0MUxUUXVPVU0yTWk0MExERTNOQ3cxT0N3eE56a3NOVGdzTVRnMVZqRTVNWG9nVFRZM0xESXhOWFk1WXpBc01TNDNMREV1TXl3ekxETXNNM016TFRFdU15d3pMVE4yTFRsSU5qZDZJaTgrQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUUzB4Tnl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TVRkNklFMHlMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTWdvSkNRbGpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERklNME15TGpRc01qQXhMRElzTWpBd0xqWXNNaXd5TURCNklFMHRNVElzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEV5ZWdvSkNRa2dUUzB6Tnl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TXpkNklFMHRNeklzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweENna0pDWE10TUM0MExURXRNUzB4U0Mwek1ub2dUUzB5TXl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRJeUxqWXNNakV4TFRJekxESXhNQzQyTFRJekxESXhNSG9nVFMwNExESXhNV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKYURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVGN1Tml3eU1USXRPQ3d5TVRFdU5pMDRMREl4TVhvZ1RUUXNNakE1WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU5Ib0tDUWtKSUUwdE55d3hPVFZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUWXVOaXd4T1RZdE55d3hPVFV1TmkwM0xERTVOWG9nVFMweU5pd3hPVFZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTWdvSkNRbGpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEkyZWlCTkxUSXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXRNVGt1Tml3eU1ERXRNakFzTWpBd0xqWXRNakFzTWpBd2VpQk5MVFExTERJeE5Rb0pDUWxqTUMwd0xqVXNNQzB3TGprc01DMHhMalJqTFRJdU5TMHhMakV0TXk0M0xUUXRNaTQyTFRZdU5tTXdMakl0TUM0MUxEQXVOUzB4TERBdU9TMHhMalJqTFRBdU9TMHlMREF0TkM0eUxERXVPUzAxTGpKakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01Bb0pDUWxqTUM0MExUQXVOU3d3TGprdE1DNDVMREV1TlMweExqRmpNQzQxTFRJdU55d3pMakV0TkM0MUxEVXVPQzAwTGpGak1DNDNMREF1TVN3eExqUXNNQzQwTERJc01DNDRZelV1TXkwekxqZ3NNVEV1TmkwMUxqa3NNVGd1TWkwMUxqbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGprS0NRa0pZekl1TXkweExqWXNOUzQwTFRFc055d3hMak5qTUM0MExEQXVOaXd3TGpjc01TNHpMREF1T0N3eVl6QXVOaXd3TGpJc01TNHhMREF1Tml3eExqVXNNUzR4WXpJdU55d3dMamdzTkM0eUxETXVOU3d6TGpRc05pNHliREFzTUdNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSUtDUWtKWXpFdU9Td3lMREV1T0N3MUxqSXRNQzR5TERkakxUQXVOQ3d3TGpRdE1DNDVMREF1TnkweExqVXNNV013TERBdU5Td3dMREF1T1N3d0xERXVOSFl4YUMwMk1uWXRNVWd0TkRWNklFMHRORFF1TWl3eU1EY3VPR010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWUtDUWtKWXkweExqTXRNUzB4TGpZdE1pNDVMVEF1TmkwMExqSnNNQ3d3UXkwME5Td3lNRGN1TlMwME5DNDJMREl3Tnk0M0xUUTBMaklzTWpBM0xqaE1MVFEwTGpJc01qQTNMamg2SUUwdE5ESXVOeXd5TURNdU1tTXRNQzQwTERBdU9TMHdMamNzTVM0NExURXNNaTQzQ2drSkNXTXRNUzB3TGpRdE1TNDJMVEV1TlMweExqTXRNaTQxWXpBdU1pMHdMalVzTUM0MkxUQXVPU3d4TGpFdE1TNHlReTAwTXk0MUxESXdNaTQyTFRRekxqRXNNakF5TGprdE5ESXVOeXd5TURNdU1rd3ROREl1Tnl3eU1ETXVNbm9nVFMwME1DNDBMREU1T0M0M0Nna0pDV010TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRMVFF4TGpjc01UazNMall0TkRFdU1Td3hPVGd1TXkwME1DNDBMREU1T0M0M2VpQk5MVE01TGpJc01UazNDZ2tKQ1dNd0xqTXRNQzQxTERBdU55MHhMREV1TVMweExqVmpMVEF1TXkwd0xqVXRNQzQ1TFRBdU55MHhMalF0TUM0MGN5MHdMamNzTUM0NUxUQXVOQ3d4TGpSRExUTTVMamNzTVRrMkxqY3RNemt1TlN3eE9UWXVPUzB6T1M0eUxERTVOMHd0TXprdU1pd3hPVGQ2SUUwdE16TXVPU3d4T1RFdU1nb0pDUWxqTFRFc01DNDVMVElzTVM0NExUSXVPU3d5TGpoakxUQXVNeTB3TGpNdE1DNDNMVEF1TmkweExqRXRNQzQ0WXpBdU5DMHhMallzTWk0eExUSXVOU3d6TGpjdE1pNHhReTB6TkM0eExERTVNUzR4TFRNMExERTVNUzR5TFRNekxqa3NNVGt4TGpKTUxUTXpMamtzTVRreExqSjZJRTA0TGpnc01UazBDZ2tKQ1dNdE1DNDVMVEV0TVM0NUxURXVPUzB5TGprdE1pNDRZekV1TlMwd0xqWXNNeTR6TERBdU1Td3pMamtzTVM0M1l6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME01TGpVc01Ua3pMalFzT1M0eExERTVNeTQyTERndU9Dd3hPVFJNT0M0NExERTVOSG9nVFRFd0xqRXNNVGsxTGpVS0NRa0pZekF1TkN3d0xqVXNNQzQ0TERFc01TNHhMREV1TkdNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbU10TUM0eExUQXVOUzB3TGpjdE1DNDVMVEV1TWkwd0xqaERNVEF1TlN3eE9UVXVNU3d4TUM0ekxERTVOUzR6TERFd0xqRXNNVGsxTGpWNklFMHhNeTQ1TERJd01TNDBDZ2tKQ1dNdE1DNDFMVEF1T1Mwd0xqa3RNUzQ0TFRFdU5TMHlMamRqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa014TkM0eUxESXdNUzR4TERFMExESXdNUzR5TERFekxqa3NNakF4TGpSNklFMHhOUzQzTERJd05TNDVDZ2tKQ1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNZekF1TkMwd0xqTXNNQzQ0TFRBdU5pd3hMakl0TVdNeExEQXVOU3d4TGpRc01TNDNMREVzTWk0M1F6RTJMallzTWpBMUxqTXNNVFl1TWl3eU1EVXVOeXd4TlM0M0xESXdOUzQ1ZWlCTk1UWXVPQ3d5TVRFdU5Bb0pDUWxqTFRBdU1TMHhMakl0TUM0MExUSXVOQzB3TGpZdE15NDJZekF1TlMwd0xqRXNNQzQ1TFRBdU5Dd3hMakl0TUM0MlF6RTRMalFzTWpBNExqVXNNVGd1TVN3eU1UQXVOQ3d4Tmk0NExESXhNUzQwVERFMkxqZ3NNakV4TGpSTU1UWXVPQ3d5TVRFdU5Ib2dUVEUxTERJeE5Bb0pDUWxqTFRBdU5TMHhOaTB4TXk0NUxUSTRMall0TWprdU9TMHlPQzR4WXkweE5TNHpMREF1TlMweU55NDJMREV5TGpndE1qZ3VNU3d5T0M0eFNERTFUREUxTERJeE5Ib2lMejRLQ1R3dlp6NEtQQzluUGdvOEwzTjJaejRLJztcbiRjaGF0LWJnLWRhcms6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2SXpFM01VRXlORHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMtZGFyay5zY3NzXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBkYXJrIHRoZW1lIHZhcmlhYmxlc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbi8vICBBdXRob3I6IFBJWElOVkVOVFxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBXQVJOSU5HOiBQTEVBU0UgRE8gTk9UIENIQU5HRSBUSElTIFZBUklBQkxFIEZJTEUuXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXG4vLyAgVElQOlxuLy8gIFdlIHN1Z2dlc3QgeW91IHRvIHVzZSB0aGlzIChhc3NldHMvc2Nzcy92YXJpYWJsZXMvX3ZhcmlhYmxlcy1jb21wb25lbnRzLnNjc3MpIGZpbGUgZm9yIG92ZXJyaWRpbmcgY29tcG9uZW50cyB2YXJpYWJsZXMuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vQm9keVxuJHRoZW1lLWRhcmstYm9keS1iZzogIzE2MWQzMSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJvZHktY29sb3I6ICNiNGI3YmQgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1ib3JkZXItY29sb3I6ICMzYjQyNTMgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1jdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICM0NDQwNWUgIWRlZmF1bHQ7XG5cbi8vVHlwb2dyYXBoeVxuJHRoZW1lLWRhcmstaGVhZGluZ3MtY29sb3I6ICNkMGQyZDYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1sYWJlbC1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLXRleHQtbXV0ZWQtY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XG5cbi8vQ2FyZFxuJHRoZW1lLWRhcmstY2FyZC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4yNCk7XG5cbi8vSW5wdXRcbiR0aGVtZS1kYXJrLWlucHV0LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1ib3JkZXItY29sb3I6ICM0MDQ2NTYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1kaXNhYmxlZC1iZzogIzI0MjMzYSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzQ0NGI2MCAhZGVmYXVsdDtcblxuLy8gU3dpdGNoXG4kdGhlbWUtZGFyay1zd2l0Y2gtYmc6ICM1NDVhNmE7XG4kdGhlbWUtZGFyay1zd2l0Y2gtYmctZGlzYWJsZWQ6ICMxYjIzMzc7XG5cbi8vVGFibGVcbiR0aGVtZS1kYXJrLXRhYmxlLWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtaGVhZGVyLWJnOiAjMzQzZDU1ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtcm93LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtaG92ZXItYmc6ICMyNDJiM2QgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay10YWJsZS1zdHJpcGVkLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xuXG4kdGhlbWUtZGFyay1tb2RhbC1oZWFkZXItYmc6ICMxNjFkMzEgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1wYWdpbmF0aW9uLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstY2hhcnQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay13aWRnZXQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0ICcuLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7IC8vIEJvb3RzdHJhcCBpbmNsdWRlc1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9pbmNsdWRlJzsgLy8gQ29tcG9uZW50cyBpbmNsdWRlc1xuXG4vLyBUb2FzdCBjb250YWluZXIgb3BhY2l0eVxuI3RvYXN0LWNvbnRhaW5lciA+IGRpdiB7XG4gIG9wYWNpdHk6IDE7XG4gIC1tcy1maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6ICR0b2FzdC1ib3JkZXItcmFkaXVzO1xufVxuXG4vLyBUb2FzdCBjb250YWluZXIgaG92ZXIgc2hhZG93XG4jdG9hc3QtY29udGFpbmVyID4gZGl2LFxuI3RvYXN0LWNvbnRhaW5lciA+IGRpdjpob3ZlciB7XG4gIGJveC1zaGFkb3c6ICR0b2FzdC1ib3gtc2hhZG93O1xufVxuXG4jdG9hc3QtY29udGFpbmVyID4gLnRvYXN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuLy8gVG9hc3QgY29sb3JzXG4udG9hc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIGNvbG9yOiAkYm9keS1jb2xvciAhaW1wb3J0YW50O1xuICAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICBjb2xvcjogJGJvZHktY29sb3I7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLnRvYXN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGRlcjtcbiAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgfVxuICAudG9hc3QtcHJvZ3Jlc3Mge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxufVxuXG4vLyB3ZSBhcmUgdXNpbmcgb25seSBmZXcgY29sb3JzIGluIHRvYXN0IHNvIG5vdCBhZGRpbmcgaW4gcGFsZXR0ZS5zY3NzXG4vLyBwbHVnaW4gY2xhc3MgbmFtZSAnZXJyb3InIGlzIGFsc28gZGlmZmVyIHRoZW4gb3VycyBzbyBub3QgdXNlZnVsIHRvIGFkZCBpbiBwYWxldHRlXG4udG9hc3Qtc3VjY2VzcyB7XG4gIC50b2FzdC10aXRsZSB7XG4gICAgY29sb3I6ICRzdWNjZXNzO1xuICB9XG4gIC50b2FzdC1wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gIH1cbiAgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkY2hlY2ssICdjdXJyZW50Q29sb3InLCAkd2hpdGUpLCAnIycsICclMjMnKSk7XG4gIH1cbn1cbi50b2FzdC1lcnJvciB7XG4gIC50b2FzdC10aXRsZSB7XG4gICAgY29sb3I6ICRkYW5nZXI7XG4gIH1cbiAgLnRvYXN0LXByb2dyZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFuZ2VyO1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFuZ2VyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkcmVtb3ZlLCAnY3VycmVudENvbG9yJywgJHdoaXRlKSwgJyMnLCAnJTIzJykpO1xuICB9XG59XG4udG9hc3QtaW5mbyB7XG4gIC50b2FzdC10aXRsZSB7XG4gICAgY29sb3I6ICRpbmZvO1xuICB9XG4gIC50b2FzdC1wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGluZm87XG4gIH1cbiAgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbmZvO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkaW5mb0ljb24sICdjdXJyZW50Q29sb3InLCAkd2hpdGUpLCAnIycsICclMjMnKSk7XG4gIH1cbn1cbi50b2FzdC13YXJuaW5nIHtcbiAgLnRvYXN0LXRpdGxlIHtcbiAgICBjb2xvcjogJHdhcm5pbmc7XG4gIH1cbiAgLnRvYXN0LXByb2dyZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2FybmluZztcbiAgfVxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdhcm5pbmc7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKHN0ci1yZXBsYWNlKCR3YXJuaW5nSWNvbiwgJ2N1cnJlbnRDb2xvcicsICR3aGl0ZSksICcjJywgJyUyMycpKTtcbiAgfVxufVxuXG4vLyBwb3NpdGlvbiBhbGlnbm1lbnRzXG4udG9hc3QtdG9wLWxlZnQge1xuICB0b3A6IDEuM3JlbTtcbiAgbGVmdDogJGNvbnRlbnQtcGFkZGluZztcbn1cbi50b2FzdC10b3AtcmlnaHQge1xuICB0b3A6IDEuM3JlbTtcbiAgcmlnaHQ6ICRjb250ZW50LXBhZGRpbmc7XG59XG4udG9hc3QtdG9wLWNlbnRlcixcbi50b2FzdC10b3AtZnVsbC13aWR0aCB7XG4gIHRvcDogMS4zcmVtO1xufVxuLnRvYXN0LWJvdHRvbS1sZWZ0IHtcbiAgYm90dG9tOiAxLjNyZW07XG4gIGxlZnQ6ICRjb250ZW50LXBhZGRpbmc7XG59XG4udG9hc3QtYm90dG9tLXJpZ2h0IHtcbiAgYm90dG9tOiAxLjNyZW07XG4gIHJpZ2h0OiAkY29udGVudC1wYWRkaW5nO1xufVxuLnRvYXN0LWJvdHRvbS1jZW50ZXIsXG4udG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICBib3R0b206IDEuM3JlbTtcbn1cblxuLy8gTWVkaWEgcXVlcnlcblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSBhbmQgKG1pbi13aWR0aDogMjQxcHgpIHtcbiAgI3RvYXN0LWNvbnRhaW5lciA+IC50b2FzdCB7XG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDAuOTVyZW07XG4gICAgfVxuICAgIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IC0xcHg7XG4gICAgfVxuICB9XG4gICN0b2FzdC1jb250YWluZXI6bm90KC50b2FzdC10b3AtZnVsbC13aWR0aCk6bm90KC50b2FzdC1ib3R0b20tZnVsbC13aWR0aCkgPiBkaXYge1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgfVxuICAudG9hc3QtdG9wLWxlZnQge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgI3RvYXN0LWNvbnRhaW5lciB7XG4gICAgJi50b2FzdC10b3AtY2VudGVyLFxuICAgICYudG9hc3QtYm90dG9tLWNlbnRlciB7XG4gICAgICByaWdodDogMXJlbTtcbiAgICAgID4gZGl2IHtcbiAgICAgICAgd2lkdGg6IDIwcmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC50b2FzdC10b3AtZnVsbC13aWR0aCxcbiAgLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA5MyU7XG4gICAgPiBkaXYge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIC50b2FzdC1ib3R0b20tbGVmdCB7XG4gICAgbGVmdDogMC4yNXJlbTtcbiAgICBib3R0b206IDAuNzVyZW07XG4gIH1cbiAgLnRvYXN0LWJvdHRvbS1yaWdodCB7XG4gICAgcmlnaHQ6IDIuMjVyZW07XG4gICAgYm90dG9tOiAwLjc1cmVtO1xuICB9XG4gIC50b2FzdC1ib3R0b20tY2VudGVyLFxuICAudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICAgIGJvdHRvbTogMC43NXJlbTtcbiAgfVxuICBbZGF0YS10ZXh0ZGlyZWN0aW9uPSdydGwnXSB7XG4gICAgI3RvYXN0LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgfVxuICB9XG59XG5cbi8vIFRvYXN0ciBEYXJrIExheW91dFxuLmRhcmstbGF5b3V0IHtcbiAgI3RvYXN0LWNvbnRhaW5lciA+IGRpdixcbiAgI3RvYXN0LWNvbnRhaW5lciA+IGRpdjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogJHRoZW1lLWRhcmstYm94LXNoYWRvdztcbiAgfVxuICAjdG9hc3QtY29udGFpbmVyIHtcbiAgICAudG9hc3Qge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmstY2FyZC1iZztcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrLWJvZHktY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbltkYXRhLXRleHRkaXJlY3Rpb249J3J0bCddIHtcbiAgLnRvYXN0IC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xuICAgICAgdG9wOiAwLjU1cmVtICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC50b2FzdC10b3AtbGVmdCB7XG4gICAgbGVmdDogMXJlbTtcbiAgICByaWdodDogYXV0bztcbiAgfVxuICAudG9hc3QtdG9wLXJpZ2h0IHtcbiAgICByaWdodDogM3JlbTtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG4gIC50b2FzdC1ib3R0b20tbGVmdCB7XG4gICAgbGVmdDogMWVtO1xuICAgIHJpZ2h0OiBhdXRvO1xuICB9XG4gIC50b2FzdC1ib3R0b20tcmlnaHQge1xuICAgIHJpZ2h0OiAzcmVtO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbiAgLnRvYXN0LXRvcC1mdWxsLXdpZHRoLFxuICAudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICAgICYjdG9hc3QtY29udGFpbmVyID4gZGl2IHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy5zY3NzXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBjb21wb25lbnQgdmFyaWFibGVcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcbi8vICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxuLy8gIFRISVMgRklMRSBXSUxMIEdFVCBPVkVSV1JJVFRFTiBXSVRIIEVBQ0ggVlVFWFkgSFRNTCBURU1QTEFURSBSRUxFQVNFLlxuLy8gIFRJUDpcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvdmFyaWFibGVzL192YXJpYWJsZXMtY29tcG9uZW50cy5zY3NzKSBmaWxlIGZvciBvdmVycmlkaW5nIGNvbXBvbmVudHMgdmFyaWFibGVzLlxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kYmFzZS1mb250LXNpemU6IDE0cHggIWRlZmF1bHQ7XG4kYm9keS1kaXJlY3Rpb246IGx0ciAhZGVmYXVsdDsgLy8gRGVmYXVsdCBsdHIsIGNoYW5nZSBpdCB0byBydGwgZm9yIFJpZ2h0IFRvIExlZnQgc3VwcG9ydC5cbiRjb250ZW50LXBhZGRpbmc6IDJyZW0gIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgIENvbG9yc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJG5hdi1jb21wb25lbnQtYm9yZGVyLWNvbG9yOiAjZGRkICFkZWZhdWx0O1xuXG4kc3dpcGVyLWJnOiAjZjJmNGY0ICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICBOYXZiYXJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRuYXZiYXItaGVpZ2h0OiA0LjQ1cmVtICFkZWZhdWx0O1xuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6IDQuNDVyZW0gIWRlZmF1bHQ7XG4kZm9vdGVyLWhlaWdodDogMy4zNXJlbSAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgTWFpbiBNZW51XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vbWFpbiBtZW51IGRhcmtcbiRtZW51LWRhcmstY29sb3I6ICNkY2RjZGMgIWRlZmF1bHQ7XG4kbWVudS1kYXJrLWJnLWNvbG9yOiAjMTAxNjNhICFkZWZhdWx0O1xuXG4kbWVudS1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4ICFkZWZhdWx0O1xuJG1lbnUtc2Vjb25kLWxldmVsLXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDIwcHggIWRlZmF1bHQ7XG4kbWVudS10aGlyZC1sZXZlbC1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCA1M3B4ICFkZWZhdWx0O1xuJG1lbnUtZm9ydGgtbGV2ZWwtcGFkZGluZzogMTBweCAxNXB4IDEwcHggNTNweCAhZGVmYXVsdDtcblxuLy8gdmVydGljYWwgbWVudVxuJG1lbnUtZXhwYW5kZWQtd2lkdGg6IDI2MHB4ICFkZWZhdWx0O1xuJG1lbnUtY29sbGFwc2VkLXdpZHRoOiA4MHB4ICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICBTaWRlYmFyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJHNpZGViYXItd2lkdGg6IDI2MHB4ICFkZWZhdWx0O1xuJGNoYXQtc2lkZWJhci13aWR0aDogMzYwcHggIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICBBdmF0YXJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiRhdmF0YXItc2l6ZTogMzJweCAhZGVmYXVsdDtcbiRhdmF0YXItc3RhdHVzLXNpemU6IDExcHggIWRlZmF1bHQ7XG4kYXZhdGFyLXN0YXR1cy1zaXplLWxnOiAxN3B4ICFkZWZhdWx0O1xuXG4kYXZhdGFyLXNpemUteGw6IDcwcHggIWRlZmF1bHQ7XG4kYXZhdGFyLXNpemUtbGc6IDUwcHggIWRlZmF1bHQ7XG4kYXZhdGFyLXNpemUtc206IDI0cHggIWRlZmF1bHQ7XG5cbiRhdmF0YXItYmc6ICNjM2MzYzM7XG4kYXZhdGFyLWdyb3VwLWJvcmRlcjogJHdoaXRlO1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIFByb2dyZXNzXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJHByb2dyZXNzLXNpemUteGw6IDEuMTRyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3Mtc2l6ZS1sZzogMC44NTdyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3Mtc2l6ZS1tZDogMC41N3JlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1zaXplLXNtOiAwLjE0M3JlbSAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBGb3JtXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAkaW5wdXQtaGVpZ2h0LCAkaW5wdXQtaGVpZ2h0LWxnLCAkaW5wdXQtaGVpZ2h0LXNtIGFyZSBpbiB2YXJpYWJsZXNcbiRmb250LXNpemUteHM6IDAuNzVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLXhsOiAoJGZvbnQtc2l6ZS1iYXNlICsgMC41KSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC14bDogMS43ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXhzOiAxLjUgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy15LXhsOiAwLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXhsOiAwLjVyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXkteHM6IDAuMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgteHM6IDAuMjc1cmVtICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy14bDogMC4zNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXhzOiAwLjEycmVtICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMteGw6ICRib3JkZXItcmFkaXVzLXhsICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMteHM6ICRib3JkZXItcmFkaXVzLXhzICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LXhsOiAoKCRmb250LXNpemUteGwgKiAkbGluZS1oZWlnaHQteGwpICsgKCRpbnB1dC1wYWRkaW5nLXkteGwgKiAyKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXhzOiAoKCRmb250LXNpemUteHMgKiAkbGluZS1oZWlnaHQteHMpICsgKCRpbnB1dC1wYWRkaW5nLXkteHMgKiAyKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAoKCRmb250LXNpemUtc20gKiAkbGluZS1oZWlnaHQtc20pICsgKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyKSkgIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgQmxhbmsgUGFnZSBCZyBDb2xvclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuJGJsYW5rLWJnLWNvbG9yOiAjZWZmMmY3ICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIERhdGEgVGFibGVzIEJnIENvbG9yXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4kZGF0YXRhYmxlLWJnLWNvbG9yOiAjZjhmOGY4ICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIFN3aXRjaFxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRzd2l0Y2gtYmctY29sb3I6ICNlMmUyZTIgIWRlZmF1bHQ7XG4kc3dpdGNoLWluZGljYXRvci1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIFRpbWVsaW5lXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJHRpbWVsaW5lLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRpbWVsaW5lLXBvaW50LXNpemU6IDEuNzVyZW0gIWRlZmF1bHQ7XG4kdGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yLXNpemU6IDEycHggIWRlZmF1bHQ7XG4kdGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiR0aW1lbGluZS1wb2ludC1pbmRpY2F0b3Itd3JhcHBlci1zaXplOiAyMHB4ICFkZWZhdWx0O1xuXG4kdGltZWxpbmUtaXRlbS1taW4taGVpZ2h0OiA0cmVtICFkZWZhdWx0O1xuJHRpbWVsaW5lLWl0ZW0taWNvbi1mb250LXNpemU6IDAuODVyZW0gIWRlZmF1bHQ7XG5cbiR0aW1lbGluZS1ldmVudC10aW1lLXNpemU6IDAuODVyZW0gIWRlZmF1bHQ7XG4kdGltZWxpbmUtZXZlbnQtdGltZS1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIG5neC10b2FzdHIgY3NzXG5AaW1wb3J0ICd+bmd4LXRvYXN0ci90b2FzdHIuY3NzJztcblxuLy8gZXh0ZW5kZWQgdG9hc3RyIHNjc3NcbkBpbXBvcnQgJ0Bjb3JlL3Njc3MvYmFzZS9wbHVnaW5zL2V4dGVuc2lvbnMvZXh0LWNvbXBvbmVudC10b2FzdHInO1xuXG4udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4vLyEgVG9hc3RyIGljb24gcG9zaXRpb24gaW4gc21hbGwgc2NyZWVuIGZpeFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSBhbmQgKG1pbi13aWR0aDogMjQxcHgpIHtcbiAgI3RvYXN0LWNvbnRhaW5lciA+IC50b2FzdCB7XG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDEuNDRyZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 19809:
/*!**********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard-list.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardListService": function() { return /* binding */ DashboardListService; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);





var DashboardListService = /*#__PURE__*/function () {
  function DashboardListService(http) {
    (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardListService);

    this.http = http;
  }

  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardListService, [{
    key: "getTodaysRegisteredUser",
    value: function getTodaysRegisteredUser() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/registeredToday/"));
    }
  }]);

  return DashboardListService;
}();

DashboardListService.ɵfac = function DashboardListService_Factory(t) {
  return new (t || DashboardListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

DashboardListService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DashboardListService,
  factory: DashboardListService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 32706:
/*!****************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": function() { return /* binding */ DashboardModule; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var app_auth_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/auth/helpers */ 21902);
/* harmony import */ var app_auth_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/auth/models */ 92968);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var app_main_apps_invoice_invoice_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/invoice/invoice.module */ 11536);
/* harmony import */ var app_main_apps_invoice_invoice_list_invoice_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/invoice/invoice-list/invoice-list.service */ 50502);
/* harmony import */ var app_main_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/dashboard/dashboard.service */ 66977);
/* harmony import */ var app_main_dashboard_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/dashboard/analytics/analytics.component */ 41946);
/* harmony import */ var app_main_dashboard_ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/dashboard/ecommerce/ecommerce.component */ 11715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);


















var routes = [{
  path: 'analytics',
  component: app_main_dashboard_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__.AnalyticsComponent,
  canActivate: [app_auth_helpers__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
  data: {
    roles: [app_auth_models__WEBPACK_IMPORTED_MODULE_3__.Role.Admin],
    animation: 'danalytics'
  },
  resolve: {
    css: app_main_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_7__.DashboardService,
    inv: app_main_apps_invoice_invoice_list_invoice_list_service__WEBPACK_IMPORTED_MODULE_6__.InvoiceListService
  }
}, {
  path: 'ecommerce',
  component: app_main_dashboard_ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_9__.EcommerceComponent,
  canActivate: [app_auth_helpers__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
  resolve: {
    css: app_main_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_7__.DashboardService
  },
  data: {
    animation: 'decommerce'
  }
}];
var DashboardModule = /*#__PURE__*/(0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function DashboardModule() {
  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardModule);
});

DashboardModule.ɵfac = function DashboardModule_Factory(t) {
  return new (t || DashboardModule)();
};

DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: DashboardModule
});
DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [app_main_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_7__.DashboardService, app_main_apps_invoice_invoice_list_invoice_list_service__WEBPACK_IMPORTED_MODULE_6__.InvoiceListService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarModule, _core_common_module__WEBPACK_IMPORTED_MODULE_4__.CoreCommonModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__.NgApexchartsModule, app_main_apps_invoice_invoice_module__WEBPACK_IMPORTED_MODULE_5__.InvoiceModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [app_main_dashboard_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__.AnalyticsComponent, app_main_dashboard_ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_9__.EcommerceComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarModule, _core_common_module__WEBPACK_IMPORTED_MODULE_4__.CoreCommonModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__.NgApexchartsModule, app_main_apps_invoice_invoice_module__WEBPACK_IMPORTED_MODULE_5__.InvoiceModule],
    exports: [app_main_dashboard_ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_9__.EcommerceComponent]
  });
})();

/***/ }),

/***/ 66977:
/*!*****************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": function() { return /* binding */ DashboardService; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 18260);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);






var DashboardService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  function DashboardService(_httpClient) {
    (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardService);

    this._httpClient = _httpClient; // Set the defaults

    this.onApiDataChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({});
  }
  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */


  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardService, [{
    key: "resolve",
    value: function resolve(route, state) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        Promise.all([_this.getTotalUsers()]).then(function () {
          resolve();
        }, reject);
      });
    }
    /**
     * Get Api Data
     */

  }, {
    key: "getTotalUsers",
    value: function getTotalUsers() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2._httpClient.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/admin/totalUsers")).subscribe(function (response) {
          _this2.apiData = response;

          _this2.onApiDataChanged.next(_this2.apiData);

          resolve(_this2.apiData);
        }, reject);
      });
    }
  }]);

  return DashboardService;
}();

DashboardService.ɵfac = function DashboardService_Factory(t) {
  return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};

DashboardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: DashboardService,
  factory: DashboardService.ɵfac
});

/***/ }),

/***/ 11715:
/*!*****************************************************************!*\
  !*** ./src/app/main/dashboard/ecommerce/ecommerce.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EcommerceComponent": function() { return /* binding */ EcommerceComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var app_colors_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/colors.const */ 57874);
/* harmony import */ var app_main_dashboard_i18n_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/dashboard/i18n/en */ 44154);
/* harmony import */ var app_main_dashboard_i18n_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/dashboard/i18n/fr */ 66873);
/* harmony import */ var app_main_dashboard_i18n_de__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/dashboard/i18n/de */ 16614);
/* harmony import */ var app_main_dashboard_i18n_pt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/dashboard/i18n/pt */ 30623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/auth/service */ 33650);
/* harmony import */ var app_main_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/dashboard/dashboard.service */ 66977);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/translation.service */ 27330);
/* harmony import */ var _dashboard_list_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dashboard-list.service */ 19809);
/* harmony import */ var app_main_apps_user_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/apps/user/user.service */ 90062);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 28267);
















var _c0 = ["statisticsBarChartRef"];
var _c1 = ["statisticsLineChartRef"];
var _c2 = ["earningChartRef"];
var _c3 = ["revenueReportChartRef"];
var _c4 = ["budgetChartRef"];
var _c5 = ["statePrimaryChartRef"];
var _c6 = ["stateWarningChartRef"];
var _c7 = ["stateSecondaryChartRef"];
var _c8 = ["stateInfoChartRef"];
var _c9 = ["stateDangerChartRef"];
var _c10 = ["goalChartRef"];

function EcommerceComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function EcommerceComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

var EcommerceComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param {AuthenticationService} _authenticationService
   * @param {DashboardService} _dashboardService
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreTranslationService} _coreTranslationService
   */
  function EcommerceComponent(_authenticationService, _dashboardService, _coreConfigService, _coreTranslationService, dashboardListService, userService) {
    var _this = this;

    (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EcommerceComponent);

    this._authenticationService = _authenticationService;
    this._dashboardService = _dashboardService;
    this._coreConfigService = _coreConfigService;
    this._coreTranslationService = _coreTranslationService;
    this.dashboardListService = dashboardListService;
    this.userService = userService; // Public

    this.data = {};
    this.isMenuToggled = false; // Private

    this.$barColor = '#f3f3f3';
    this.$trackBgColor = '#EBEBEB';
    this.$textMutedColor = '#b9b9c3';
    this.$budgetStrokeColor2 = '#dcdae3';
    this.$goalStrokeColor2 = '#51e5a8';
    this.$textHeadingColor = '#5e5873';
    this.$strokeColor = '#ebe9f1';
    this.$earningsStrokeColor2 = '#28c76f66';
    this.$earningsStrokeColor3 = '#28c76f33';

    this._authenticationService.currentUser.subscribe(function (x) {
      return _this.currentUser = x;
    });

    this.isAdmin = this._authenticationService.isAdmin;
    this.isClient = this._authenticationService.isClient;

    this._coreTranslationService.translate(app_main_dashboard_i18n_en__WEBPACK_IMPORTED_MODULE_3__.locale, app_main_dashboard_i18n_fr__WEBPACK_IMPORTED_MODULE_4__.locale, app_main_dashboard_i18n_de__WEBPACK_IMPORTED_MODULE_5__.locale, app_main_dashboard_i18n_pt__WEBPACK_IMPORTED_MODULE_6__.locale); // Statistics Bar Chart


    this.statisticsBar = {
      chart: {
        height: 70,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false
        }
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
          top: -15,
          bottom: -15
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          startingShape: 'rounded',
          colors: {
            backgroundBarColors: [this.$barColor, this.$barColor, this.$barColor, this.$barColor, this.$barColor],
            backgroundBarRadius: 5
          }
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.warning],
      series: [{
        name: '2020',
        data: [45, 85, 65, 45, 65]
      }],
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }; // Statistics Line Chart

    this.statisticsLine = {
      chart: {
        height: 70,
        type: 'line',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      grid: {
        // show: true,
        borderColor: this.$trackBgColor,
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          // left: 0,
          // right: 0,
          top: -30,
          bottom: -10
        }
      },
      stroke: {
        width: 3
      },
      colors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.info],
      series: [{
        data: [0, 20, 5, 30, 15, 45]
      }],
      markers: {
        size: 2,
        colors: app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.info,
        strokeColors: app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.info,
        strokeWidth: 2,
        strokeOpacity: 1,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [{
          seriesIndex: 0,
          dataPointIndex: 5,
          fillColor: '#ffffff',
          strokeColor: app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.info,
          size: 5
        }],
        shape: 'circle',
        radius: 2,
        hover: {
          size: 3
        }
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontSize: '0px'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }; // Revenue Report Chart

    this.revenueReportChartoptions = {
      chart: {
        height: 230,
        stacked: true,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '17%',
          endingShape: 'rounded'
        }
      },
      colors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.primary, app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.warning],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        padding: {
          top: -20,
          bottom: -10
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          style: {
            colors: this.$textMutedColor,
            fontSize: '0.86rem'
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: this.$textMutedColor,
            fontSize: '0.86rem'
          }
        }
      }
    }; // Budget Chart

    this.budgetChartoptions = {
      chart: {
        height: 80,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        type: 'line',
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'smooth',
        dashArray: [0, 5],
        width: [2]
      },
      colors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.primary, this.$budgetStrokeColor2],
      tooltip: {
        enabled: false
      }
    }; // Goal Overview  Chart

    this.goalChartoptions = {
      chart: {
        height: 245,
        type: 'radialBar',
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      },
      colors: [this.$goalStrokeColor2],
      plotOptions: {
        radialBar: {
          offsetY: -10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '77%'
          },
          track: {
            background: this.$strokeColor,
            strokeWidth: '50%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              color: this.$textHeadingColor,
              fontSize: '2.86rem',
              fontWeight: '600'
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.success],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          bottom: 30
        }
      }
    }; // Browser States Primary Chart

    this.statePrimaryChartoptions = {
      chart: {
        height: 30,
        width: 30,
        type: 'radialBar'
      },
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15
        }
      },
      colors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.primary],
      series: [54.4],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '22%'
          },
          track: {
            background: this.$trackBgColor
          },
          dataLabels: {
            showOn: 'always',
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      }
    }; // Browser States Warning Chart

    this.stateWarningChartoptions = {
      chart: {
        height: 30,
        width: 30,
        type: 'radialBar'
      },
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15
        }
      },
      colors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.warning],
      series: [6.1],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '22%'
          },
          track: {
            background: this.$trackBgColor
          },
          dataLabels: {
            showOn: 'always',
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      }
    }; // Browser States Secondary Chart

    this.stateSecondaryChartoptions = {
      chart: {
        height: 30,
        width: 30,
        type: 'radialBar'
      },
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15
        }
      },
      colors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.secondary],
      series: [14.6],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '22%'
          },
          track: {
            background: this.$trackBgColor
          },
          dataLabels: {
            showOn: 'always',
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      }
    }; // Browser States Info Chart

    this.stateInfoChartoptions = {
      chart: {
        height: 30,
        width: 30,
        type: 'radialBar'
      },
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15
        }
      },
      colors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.info],
      series: [4.2],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '22%'
          },
          track: {
            background: this.$trackBgColor
          },
          dataLabels: {
            showOn: 'always',
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      }
    }; // Browser States Danger Chart

    this.stateDangerChartoptions = {
      chart: {
        height: 30,
        width: 30,
        type: 'radialBar'
      },
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15
        }
      },
      colors: [app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.danger],
      series: [8.4],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '22%'
          },
          track: {
            background: this.$trackBgColor
          },
          dataLabels: {
            showOn: 'always',
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      }
    }; // Earnings Chart

    this.earningChartoptions = {
      chart: {
        type: 'donut',
        height: 120,
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [53, 16, 31],
      legend: {
        show: false
      },
      comparedResult: [2, -3, 8],
      labels: ['App', 'Service', 'Product'],
      stroke: {
        width: 0
      },
      colors: [this.$earningsStrokeColor2, this.$earningsStrokeColor3, app_colors_const__WEBPACK_IMPORTED_MODULE_2__.colors.solid.success],
      grid: {
        padding: {
          right: -20,
          bottom: -8,
          left: -20
        }
      },
      plotOptions: {
        pie: {
          startAngle: -10,
          donut: {
            labels: {
              show: true,
              name: {
                offsetY: 15
              },
              value: {
                offsetY: -15,
                formatter: function formatter(val) {
                  return parseInt(val) + '%';
                }
              },
              total: {
                show: true,
                offsetY: 15,
                label: 'App',
                formatter: function formatter(w) {
                  return '53%';
                }
              }
            }
          }
        }
      },
      responsive: [{
        breakpoint: 1325,
        options: {
          chart: {
            height: 100
          }
        }
      }, {
        breakpoint: 1200,
        options: {
          chart: {
            height: 120
          }
        }
      }, {
        breakpoint: 1065,
        options: {
          chart: {
            height: 100
          }
        }
      }, {
        breakpoint: 992,
        options: {
          chart: {
            height: 120
          }
        }
      }]
    };
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,C_Users_A2z_Downloads_latest_code_base_sundatewebsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EcommerceComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // get the currentUser details from localStorage
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.getTotalUsers();
      this.getTodaysRegisteredUser();
      this.getOnlineUsers();
    }
  }, {
    key: "getTotalUsers",
    value: function getTotalUsers() {
      var _this2 = this;

      this._dashboardService.onApiDataChanged.subscribe(function (response) {
        _this2.data.totalUser = response;
      });
    }
  }, {
    key: "getTodaysRegisteredUser",
    value: function getTodaysRegisteredUser() {
      var _this3 = this;

      this.userService.getRegisteredToday(1, 10, '').subscribe(function (res) {
        _this3.data.registeredUser = res.total;
        console.log('total registeredUser', _this3.data.registeredUser);
      });
    }
  }, {
    key: "getOnlineUsers",
    value: function getOnlineUsers() {
      var _this4 = this;

      this.userService.getOnlineUsers(1, 10, '').subscribe(function (res) {
        _this4.data.count = res.total;
        console.log('total Online', _this4.data.count);
      });
    }
    /**
     * After View Init
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this5 = this;

      // Subscribe to core config changes
      this._coreConfigService.getConfig().subscribe(function (config) {
        // If Menu Collapsed Changes
        if ((config.layout.menu.collapsed === true || config.layout.menu.collapsed === false) && localStorage.getItem('currentUser')) {
          setTimeout(function () {
            var _a, _b, _c, _d, _e, _f;

            if (_this5.currentUser.role == 'Admin') {
              // Get Dynamic Width for Charts
              _this5.isMenuToggled = true;
              _this5.statisticsBar.chart.width = (_a = _this5.statisticsBarChartRef) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetWidth;
              _this5.statisticsLine.chart.width = (_b = _this5.statisticsLineChartRef) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetWidth;
              _this5.earningChartoptions.chart.width = (_c = _this5.earningChartRef) === null || _c === void 0 ? void 0 : _c.nativeElement.offsetWidth;
              _this5.revenueReportChartoptions.chart.width = (_d = _this5.revenueReportChartRef) === null || _d === void 0 ? void 0 : _d.nativeElement.offsetWidth;
              _this5.budgetChartoptions.chart.width = (_e = _this5.budgetChartRef) === null || _e === void 0 ? void 0 : _e.nativeElement.offsetWidth;
              _this5.goalChartoptions.chart.width = (_f = _this5.goalChartRef) === null || _f === void 0 ? void 0 : _f.nativeElement.offsetWidth;
            }
          }, 500);
        }
      });
    }
  }]);

  return EcommerceComponent;
}();

EcommerceComponent.ɵfac = function EcommerceComponent_Factory(t) {
  return new (t || EcommerceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_main_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_8__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_9__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__.CoreTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_dashboard_list_service__WEBPACK_IMPORTED_MODULE_11__.DashboardListService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_main_apps_user_user_service__WEBPACK_IMPORTED_MODULE_12__.UserService));
};

EcommerceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: EcommerceComponent,
  selectors: [["app-ecommerce"]],
  viewQuery: function EcommerceComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c7, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c8, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c9, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c10, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.statisticsBarChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.statisticsLineChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.earningChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.revenueReportChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.budgetChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.statePrimaryChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.stateWarningChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.stateSecondaryChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.stateInfoChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.stateDangerChartRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.goalChartRef = _t.first);
    }
  },
  decls: 45,
  vars: 5,
  consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [1, "row", "match-height"], [1, "col-xl-12", "col-md-6", "col-12"], [1, "card", "card-statistics"], [1, "card-header"], [1, "card-title"], [1, "card-body", "statistics-body"], [1, "row"], [1, "col-sm-6", "col-xl-4", "mb-2", "mb-xl-0"], [1, "media"], ["href", "apps/user/user-online"], [1, "avatar", "bg-light-primary", "mr-2"], [1, "avatar-content"], ["data-feather", "trending-up", 1, "avatar-icon"], [1, "media-body", "my-auto"], [1, "font-weight-bolder", "mb-0"], [1, "card-text", "font-small-3", "mb-0"], ["href", "apps/user/user-list"], [1, "avatar", "bg-light-info", "mr-2"], ["data-feather", "user", 1, "avatar-icon"], [1, "col-sm-6", "col-xl-4", "mb-2", "mb-sm-0"], ["href", "/apps/user/user-registeredtoday"], [1, "avatar", "bg-light-danger", "mr-2"], ["data-feather", "box", 1, "avatar-icon"], ["class", "row match-height", 4, "ngIf"], [1, "col-lg-4", "col-12"], [1, "col-lg-8", "col-12"], [1, "col-lg-4", "col-md-6", "col-12"]],
  template: function EcommerceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Statistics");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "h4", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "Members Online");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "h4", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "Total Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "h4", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "Registered Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, EcommerceComponent_div_43_Template, 4, 0, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](44, EcommerceComponent_div_44_Template, 2, 0, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.data.count);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.data.totalUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.data.registeredUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isAdmin);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isAdmin);
    }
  },
  directives: [_core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_13__.FeatherIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf],
  styles: ["/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n\n.card-statistics .statistics-body {\n  padding: 2rem 2.4rem !important;\n}\n\n@media (max-width: 991.98px) {\n  .card-statistics .card-header,\n.card-statistics .statistics-body {\n    padding: 1.5rem !important;\n  }\n}\n\n.card-company-table thead th {\n  border: 0;\n}\n\n.card-company-table td {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.card-company-table td .avatar {\n  background-color: #f8f8f8;\n  margin-right: 2rem;\n}\n\n.card-company-table td .avatar img {\n  border-radius: 0;\n}\n\n.card-browser-states .browser-states:first-child {\n  margin-top: 0;\n}\n\n.card-browser-states .browser-states:not(:first-child) {\n  margin-top: 1.7rem;\n}\n\n.card-transaction .transaction-item:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.apexcharts-canvas line[stroke=transparent] {\n  display: none;\n}\n\n.apexcharts-canvas .apexcharts-tooltip {\n  background: #fff;\n  border-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #fff !important;\n  border-color: #ebe9f1 !important;\n  font-weight: 600;\n}\n\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-label,\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n\n.apexcharts-canvas .apexcharts-xaxistooltip,\n.apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #f8f8f8;\n  border-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #f8f8f8;\n}\n\n.apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #f8f8f8;\n}\n\n.apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #f8f8f8;\n}\n\n.apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #ebe9f1;\n}\n\n.apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #f8f8f8;\n}\n\n.apexcharts-canvas .apexcharts-text,\n.apexcharts-canvas .apexcharts-tooltip-text,\n.apexcharts-canvas .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-datalabel {\n  font-family: \"Montserrat\", Helvetica, Arial, serif !important;\n  fill: #6e6b7b;\n  font-weight: 400;\n  filter: none;\n}\n\n.apexcharts-canvas .apexcharts-pie-label {\n  fill: white;\n  filter: none;\n}\n\n.apexcharts-canvas .apexcharts-pie .apexcharts-pie-series .apexcharts-pie-area {\n  stroke-width: 0;\n}\n\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value {\n  font-size: 1.5rem;\n}\n\n.apexcharts-canvas .apexcharts-marker {\n  box-shadow: none;\n}\n\n.apexcharts-canvas .apexcharts-legend-series + .apexcharts-legend-series {\n  margin-top: 0.625rem;\n}\n\n.apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-left: 0.5rem;\n  color: #6e6b7b !important;\n  font-size: 1rem !important;\n}\n\n.apexcharts-canvas .apexcharts-xcrosshairs,\n.apexcharts-canvas .apexcharts-ycrosshairs,\n.apexcharts-canvas .apexcharts-gridline {\n  stroke: #ebe9f1;\n}\n\n.apexcharts-legend.position-bottom {\n  bottom: 3rem;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-tick,\n.dark-layout .apexcharts-canvas line {\n  stroke: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-heatmap .apexcharts-heatmap-rect {\n  stroke: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-radialbar .apexcharts-radialbar-track .apexcharts-radialbar-area {\n  stroke: #161d31;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-radar-series polygon {\n  fill: #161d31;\n  stroke: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-datalabel-value {\n  fill: #fff;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-tooltip {\n  background: #283046;\n  border-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #283046 !important;\n  border-color: #3b4253 !important;\n  color: #fff;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #161d31;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #161d31;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #161d31;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #161d31;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #161d31;\n  border-color: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-yaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-yaxistooltip-text {\n  color: #fff;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text {\n  color: #fff;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-yaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-datalabel-label {\n  fill: #b4b7bd;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-marker {\n  stroke: #3b4253;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #b4b7bd !important;\n}\n\n.dark-layout .apexcharts-canvas .apexcharts-xcrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-ycrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-gridline {\n  stroke: #3b4253;\n}\n\n#toast-container > div {\n  opacity: 1;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  filter: alpha(opacity=100);\n  max-width: none;\n  border-radius: 0.286rem;\n}\n\n#toast-container > div,\n#toast-container > div:hover {\n  box-shadow: 0 2px 20px 0 rgba(34, 41, 47, 0.08);\n}\n\n#toast-container > .toast {\n  background-image: none !important;\n}\n\n.toast {\n  background-color: #fff;\n  color: #6e6b7b !important;\n}\n\n.toast .toast-close-button {\n  color: #6e6b7b;\n  font-size: 1.75rem;\n  font-weight: 400;\n  top: 0;\n  right: 0;\n  text-shadow: none;\n}\n\n.toast .toast-close-button:focus {\n  outline: none;\n}\n\n.toast .toast-title {\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.75;\n}\n\n.toast .toast-progress {\n  opacity: 1;\n}\n\n.toast:before {\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  color: #fff;\n  position: absolute;\n  left: 1.25rem;\n  background-size: 1rem;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.toast-success .toast-title {\n  color: #28c76f;\n}\n\n.toast-success .toast-progress {\n  background-color: #28c76f;\n}\n\n.toast-success:before {\n  background-color: #28c76f;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n\n.toast-error .toast-title {\n  color: #ea5455;\n}\n\n.toast-error .toast-progress {\n  background-color: #ea5455;\n}\n\n.toast-error:before {\n  background-color: #ea5455;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E\");\n}\n\n.toast-info .toast-title {\n  color: #00cfe8;\n}\n\n.toast-info .toast-progress {\n  background-color: #00cfe8;\n}\n\n.toast-info:before {\n  background-color: #00cfe8;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-info'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='16' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='8' x2='12.01' y2='8'%3E%3C/line%3E%3C/svg%3E\");\n}\n\n.toast-warning .toast-title {\n  color: #ff9f43;\n}\n\n.toast-warning .toast-progress {\n  background-color: #ff9f43;\n}\n\n.toast-warning:before {\n  background-color: #ff9f43;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-alert-triangle'%3E%3Cpath d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'%3E%3C/path%3E%3Cline x1='12' y1='9' x2='12' y2='13'%3E%3C/line%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'%3E%3C/line%3E%3C/svg%3E\");\n}\n\n.toast-top-left {\n  top: 1.3rem;\n  left: 2rem;\n}\n\n.toast-top-right {\n  top: 1.3rem;\n  right: 2rem;\n}\n\n.toast-top-center,\n.toast-top-full-width {\n  top: 1.3rem;\n}\n\n.toast-bottom-left {\n  bottom: 1.3rem;\n  left: 2rem;\n}\n\n.toast-bottom-right {\n  bottom: 1.3rem;\n  right: 2rem;\n}\n\n.toast-bottom-center,\n.toast-bottom-full-width {\n  bottom: 1.3rem;\n}\n\n@media (max-width: 480px) and (min-width: 241px) {\n  #toast-container > .toast:after {\n    top: 0.95rem;\n  }\n  #toast-container > .toast .toast-close-button {\n    top: 0;\n    right: -1px;\n  }\n\n  #toast-container:not(.toast-top-full-width):not(.toast-bottom-full-width) > div {\n    width: 20rem;\n  }\n\n  .toast-top-left {\n    left: 0;\n  }\n\n  #toast-container.toast-top-center, #toast-container.toast-bottom-center {\n    right: 1rem;\n  }\n  #toast-container.toast-top-center > div, #toast-container.toast-bottom-center > div {\n    width: 20rem !important;\n  }\n\n  .toast-top-full-width,\n.toast-bottom-full-width {\n    right: 0;\n    left: 0;\n    width: 93%;\n  }\n  .toast-top-full-width > div,\n.toast-bottom-full-width > div {\n    width: 100%;\n  }\n\n  .toast-bottom-left {\n    left: 0.25rem;\n    bottom: 0.75rem;\n  }\n\n  .toast-bottom-right {\n    right: 2.25rem;\n    bottom: 0.75rem;\n  }\n\n  .toast-bottom-center,\n.toast-bottom-full-width {\n    bottom: 0.75rem;\n  }\n\n  [data-textdirection=rtl] #toast-container > div {\n    padding-right: 8px;\n  }\n}\n\n.dark-layout #toast-container > div,\n.dark-layout #toast-container > div:hover {\n  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.24);\n}\n\n.dark-layout #toast-container .toast {\n  background-color: #283046;\n  color: #b4b7bd !important;\n}\n\n.dark-layout #toast-container .toast .toast-close-button {\n  color: #b4b7bd;\n}\n\n@media (max-width: 575.98px) {\n  [data-textdirection=rtl] .toast .toast-close-button {\n    top: 0.55rem !important;\n    right: 0.5rem !important;\n  }\n}\n\n[data-textdirection=rtl] .toast-top-left {\n  left: 1rem;\n  right: auto;\n}\n\n[data-textdirection=rtl] .toast-top-right {\n  right: 3rem;\n  left: auto;\n}\n\n[data-textdirection=rtl] .toast-bottom-left {\n  left: 1em;\n  right: auto;\n}\n\n[data-textdirection=rtl] .toast-bottom-right {\n  right: 3rem;\n  left: auto;\n}\n\n[data-textdirection=rtl] .toast-top-full-width#toast-container > div,\n[data-textdirection=rtl] .toast-bottom-full-width#toast-container > div {\n  left: 0;\n  right: 0;\n}\n\n.toast-close-button {\n  line-height: 1;\n}\n\n@media (max-width: 480px) and (min-width: 241px) {\n  #toast-container > .toast:after {\n    top: 1.44rem;\n  }\n}\n\n#earnings-donut-chart .apexcharts-tooltip.apexcharts-theme-dark {\n  background: rgba(34, 41, 47, 0.8) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZ3gtdG9hc3RyL3RvYXN0ci5jc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXHBhZ2VzXFxkYXNoYm9hcmQtZWNvbW1lcmNlLnNjc3MiLCJlY29tbWVyY2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxib290c3RyYXAtZXh0ZW5kZWRcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxccGx1Z2luc1xcY2hhcnRzXFxjaGFydC1hcGV4LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvbXBvbmVudHNcXF92YXJpYWJsZXMtZGFyay5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxwbHVnaW5zXFxleHRlbnNpb25zXFxleHQtY29tcG9uZW50LXRvYXN0ci5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb21wb25lbnRzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGFuZ3VsYXJcXGxpYnNcXHRvYXN0ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrSkFBa0o7O0FBRWxKLGFBQWE7O0FBQ2I7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxNQUFNO0VBQ04sUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUNBOzt5REFFeUQ7O0FBQ3pEO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBQ0EsaUhBQWlIOztBQUNqSDtFQUNFLHFsQkFBcWxCO0FBQ3ZsQjs7QUFDQSxrSEFBa0g7O0FBQ2xIO0VBQ0UsNmpCQUE2akI7QUFDL2pCOztBQUNBLDJHQUEyRzs7QUFDM0c7RUFDRSx3ZEFBd2Q7QUFDMWQ7O0FBQ0EsMEhBQTBIOztBQUMxSDtFQUNFLHNvQkFBc29CO0FBQ3hvQjs7QUFDQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFDQSxzQkFBc0I7O0FBQ3RCO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLFdBQVc7RUFDYjtBQUNGOztBQ2pMRTtFQUNFLCtCQUFBO0FDWko7O0FDc0VJO0VGdERBOztJQUVFLDBCQUFBO0VDYko7QUFDRjs7QURtQkU7RUFDRSxTQUFBO0FDaEJKOztBRGtCRTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7QUNoQko7O0FEa0JJO0VBQ0UseUJHaUVJO0VIaEVKLGtCQUFBO0FDaEJOOztBRGtCTTtFQUNFLGdCQUFBO0FDaEJSOztBRHlCSTtFQUNFLGFBQUE7QUN0Qk47O0FEd0JJO0VBQ0Usa0JBQUE7QUN0Qk47O0FEOEJJO0VBQ0UscUJBQUE7QUMzQk47O0FHL0JFO0VBQ0UsYUFBQTtBSGtDSjs7QUdoQ0U7RUFDRSxnQkRHSTtFQ0ZKLHFCRHFIVztBRm5GZjs7QUdqQ0k7RUFDRSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUhtQ047O0FHaENNOztFQUVFLFdEUEE7QUZ5Q1I7O0FHOUJFOztFQUVFLG1CRDZFTTtFQzVFTixxQkRxR1c7QUZyRWY7O0FHekJJO0VBQ0UsNEJENkZTO0FGbEVmOztBR3pCSTtFQUNFLDRCRGlFSTtBRnRDVjs7QUd0Qkk7RUFDRSx5QkRvRlM7QUY1RGY7O0FHdEJJO0VBQ0UseUJEd0RJO0FGaENWOztBR3BCSTtFQUNFLDBCRDRFUztBRnREZjs7QUdwQkk7RUFDRSwwQkRnREk7QUYxQlY7O0FHbEJJO0VBQ0UsMkJEb0VTO0FGaERmOztBR2xCSTtFQUNFLDJCRHdDSTtBRnBCVjs7QUdoQkU7Ozs7RUFJRSw2REFBQTtFQUNBLGFEZ0NTO0VDL0JULGdCQUFBO0VBQ0EsWUFBQTtBSGtCSjs7QUdmRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FIaUJKOztBR2JJO0VBQ0UsZUFBQTtBSGVOOztBR2JJOztFQUVFLGlCQUFBO0FIZU47O0FHWEU7RUFDRSxnQkFBQTtBSGFKOztBR1ZJO0VBQ0Usb0JBQUE7QUhZTjs7QUdWSTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBSFlOOztBR1RFOzs7RUFHRSxlRG9CVztBRlRmOztBR1JBO0VBQ0UsWUFBQTtBSFdGOztBR05JOztFQUVFLGVDbEdvQjtBSjJHMUI7O0FHTk07RUFDRSxlQ3RHa0I7QUo4RzFCOztBR0pNO0VBQ0UsZUM3R2E7QUptSHJCOztBR0ZNO0VBQ0UsYUNsSGE7RURtSGIsZUNqSGtCO0FKcUgxQjs7QUdBTTtFQUNFLFVEOUhBO0FGZ0lSOztBR0NJO0VBQ0UsbUJDakhlO0VEa0hmLHFCQzNIb0I7QUo0SDFCOztBR0FNO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdEdklBO0FGeUlSOztBR0FNOztFQUVFLFdEM0lBO0FGNklSOztBR0VNO0VBQ0UsNEJDeElrQjtBSndJMUI7O0FHRU07RUFDRSw0QkM3SWE7QUo2SXJCOztBR0lNO0VBQ0UseUJDaEprQjtBSjhJMUI7O0FHSU07RUFDRSx5QkNySmE7QUptSnJCOztBR01NO0VBQ0UsMEJDeEprQjtBSm9KMUI7O0FHTU07RUFDRSwwQkM3SmE7QUp5SnJCOztBR1FNO0VBQ0UsMkJDaEtrQjtBSjBKMUI7O0FHUU07RUFDRSwyQkNyS2E7QUorSnJCOztBR1VJOztFQUVFLG1CQzNLZTtFRDRLZixxQkMxS29CO0FKa0sxQjs7QUdhTTs7OztFQUVFLFdEekxBO0FGZ0xSOztBR2FNO0VBQ0UsV0Q5TEE7QUZtTFI7O0FHY0k7Ozs7RUFJRSxhQzlMa0I7QUprTHhCOztBR2NJO0VBQ0UsZUNoTW9CO0FKb0wxQjs7QUdlTTtFQUNFLHlCQUFBO0FIYlI7O0FHZ0JJOzs7RUFHRSxlQzFNb0I7QUo0TDFCOztBSzNNQTtFQUNFLFVBQUE7RUFDQSxnRUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCSHNab0I7QUZ4TXRCOztBSzFNQTs7RUFFRSwrQ0hpWmlCO0FGcE1uQjs7QUsxTUE7RUFDRSxpQ0FBQTtBTDZNRjs7QUsxTUE7RUFDRSxzQkhaTTtFR2FOLHlCQUFBO0FMNk1GOztBSzVNRTtFQUNFLGNINEVTO0VHM0VULGtCQUFBO0VBQ0EsZ0JIdUhpQjtFR3RIakIsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBTDhNSjs7QUs1TUk7RUFDRSxhQUFBO0FMOE1OOztBSzNNRTtFQUNFLGVIeUdhO0VHeEdiLGdCSDhHaUI7RUc3R2pCLGlCQUFBO0FMNk1KOztBSzNNRTtFQUNFLFVBQUE7QUw2TUo7O0FLM01FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXSHZDSTtFR3dDSixrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkgwRmE7RUd6RmIsNEJBQUE7RUFDQSwyQkFBQTtBTDZNSjs7QUt0TUU7RUFDRSxjSHRDSTtBRitPUjs7QUt2TUU7RUFDRSx5Qkh6Q0k7QUZrUFI7O0FLdk1FO0VBQ0UseUJINUNJO0VHNkNKLDRUQUFBO0FMeU1KOztBS3JNRTtFQUNFLGNIL0NFO0FGdVBOOztBS3RNRTtFQUNFLHlCSGxERTtBRjBQTjs7QUt0TUU7RUFDRSx5QkhyREU7RUdzREYsa1ZBQUE7QUx3TUo7O0FLcE1FO0VBQ0UsY0g3REc7QUZvUVA7O0FLck1FO0VBQ0UseUJIaEVHO0FGdVFQOztBS3JNRTtFQUNFLHlCSG5FRztFR29FSCxpYUFBQTtBTHVNSjs7QUtuTUU7RUFDRSxjSHhFSztBRjhRVDs7QUtwTUU7RUFDRSx5QkgzRUs7QUZpUlQ7O0FLcE1FO0VBQ0UseUJIOUVLO0VHK0VMLDhlQUFBO0FMc01KOztBS2pNQTtFQUNFLFdBQUE7RUFDQSxVQy9GZ0I7QU5tU2xCOztBS2xNQTtFQUNFLFdBQUE7RUFDQSxXQ25HZ0I7QU53U2xCOztBS25NQTs7RUFFRSxXQUFBO0FMc01GOztBS3BNQTtFQUNFLGNBQUE7RUFDQSxVQzNHZ0I7QU5rVGxCOztBS3JNQTtFQUNFLGNBQUE7RUFDQSxXQy9HZ0I7QU51VGxCOztBS3RNQTs7RUFFRSxjQUFBO0FMeU1GOztBS3BNQTtFQUVJO0lBQ0UsWUFBQTtFTHNNSjtFS3BNRTtJQUNFLE1BQUE7SUFDQSxXQUFBO0VMc01KOztFS25NQTtJQUNFLFlBQUE7RUxzTUY7O0VLcE1BO0lBQ0UsT0FBQTtFTHVNRjs7RUtwTUU7SUFFRSxXQUFBO0VMc01KO0VLck1JO0lBQ0UsdUJBQUE7RUx1TU47O0VLbk1BOztJQUVFLFFBQUE7SUFDQSxPQUFBO0lBQ0EsVUFBQTtFTHNNRjtFS3JNRTs7SUFDRSxXQUFBO0VMd01KOztFS3JNQTtJQUNFLGFBQUE7SUFDQSxlQUFBO0VMd01GOztFS3RNQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VMeU1GOztFS3ZNQTs7SUFFRSxlQUFBO0VMME1GOztFS3ZNRTtJQUNFLGtCQUFBO0VMME1KO0FBQ0Y7O0FLcE1FOztFQUVFLCtDRHRLb0I7QUo0V3hCOztBS25NSTtFQUNFLHlCRDNLZTtFQzRLZix5QkFBQTtBTHFNTjs7QUtwTU07RUFDRSxjRHhMZ0I7QUo4WHhCOztBQ3ZVSTtFSXdJRjtJQUVJLHVCQUFBO0lBQ0Esd0JBQUE7RUxrTUo7QUFDRjs7QUtoTUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBTGtNSjs7QUtoTUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBTGtNSjs7QUtoTUU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBTGtNSjs7QUtoTUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBTGtNSjs7QUs5TEk7O0VBQ0UsT0FBQTtFQUNBLFFBQUE7QUxpTU47O0FPdGFBO0VBQ0UsY0FBQTtBUHlhRjs7QU90YUE7RUFFSTtJQUNFLFlBQUE7RVB3YUo7QUFDRjs7QUEvYUk7RUFDRSw0Q0FBQTtBQWliTiIsImZpbGUiOiJlY29tbWVyY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBiYXNlZCBvbiBhbmd1bGFyLXRvYXN0ciBjc3MgaHR0cHM6Ly9naXRodWIuY29tL0ZveGFuZHhzcy9hbmd1bGFyLXRvYXN0ci9ibG9iL2NiNTA4ZmU2ODAxZDZiMjg4ZDNhZmM1MjViYjQwZmVlMWIxMDE2NTAvZGlzdC9hbmd1bGFyLXRvYXN0ci5jc3MgKi9cblxuLyogcG9zaXRpb24gKi9cbi50b2FzdC1jZW50ZXItY2VudGVyIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4udG9hc3QtdG9wLWNlbnRlciB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvYXN0LWJvdHRvbS1jZW50ZXIge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC10b3AtZnVsbC13aWR0aCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtdG9wLWxlZnQge1xuICB0b3A6IDEycHg7XG4gIGxlZnQ6IDEycHg7XG59XG4udG9hc3QtdG9wLXJpZ2h0IHtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMTJweDtcbn1cbi50b2FzdC1ib3R0b20tcmlnaHQge1xuICByaWdodDogMTJweDtcbiAgYm90dG9tOiAxMnB4O1xufVxuLnRvYXN0LWJvdHRvbS1sZWZ0IHtcbiAgYm90dG9tOiAxMnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuXG4vKiB0b2FzdCBzdHlsZXMgKi9cbi50b2FzdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRvYXN0LW1lc3NhZ2Uge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4udG9hc3QtbWVzc2FnZSBhLFxuLnRvYXN0LW1lc3NhZ2UgbGFiZWwge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi50b2FzdC1tZXNzYWdlIGE6aG92ZXIge1xuICBjb2xvcjogI0NDQ0NDQztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IC0wLjNlbTtcbiAgdG9wOiAtMC4zZW07XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XG4gIC8qIG9wYWNpdHk6IDAuODsgKi9cbn1cbi50b2FzdC1jbG9zZS1idXR0b246aG92ZXIsXG4udG9hc3QtY2xvc2UtYnV0dG9uOmZvY3VzIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4vKkFkZGl0aW9uYWwgcHJvcGVydGllcyBmb3IgYnV0dG9uIHZlcnNpb25cbiBpT1MgcmVxdWlyZXMgdGhlIGJ1dHRvbiBlbGVtZW50IGluc3RlYWQgb2YgYW4gYW5jaG9yIHRhZy5cbiBJZiB5b3Ugd2FudCB0aGUgYW5jaG9yIHZlcnNpb24sIGl0IHJlcXVpcmVzIGBocmVmPVwiI1wiYC4qL1xuYnV0dG9uLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cbi50b2FzdC1jb250YWluZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk7XG59XG4udG9hc3QtY29udGFpbmVyICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIDAgNnB4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjRweDtcbiAgYm94LXNoYWRvdzogMCAwIDEycHggIzk5OTk5OTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4udG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDEycHggIzAwMDAwMDtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvaW5mby1jaXJjbGUuc3ZnICovXG4udG9hc3QtaW5mbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvdGltZXMtY2lyY2xlLnN2ZyAqL1xuLnRvYXN0LWVycm9yIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMTIxLjYgMzEzLjFjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMzOCAzNzcuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDI1NiAzMTJsLTY1LjEgNjUuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDEzNC40IDMzOGMtNC43LTQuNy00LjctMTIuMyAwLTE3bDY1LjYtNjUtNjUuNi02NS4xYy00LjctNC43LTQuNy0xMi4zIDAtMTdsMzkuNi0zOS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGw2NSA2NS43IDY1LjEtNjUuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsMzkuNiAzOS42YzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMTIgMjU2bDY1LjYgNjUuMXonLyUzRSUzQy9zdmclM0VcIik7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9jaGVjay5zdmcgKi9cbi50b2FzdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvZXhjbGFtYXRpb24tdHJpYW5nbGUuc3ZnICovXG4udG9hc3Qtd2FybmluZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInIHdpZHRoPSc1NzYnIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi50b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWNlbnRlciAubmd4LXRvYXN0cixcbi50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWNlbnRlciAubmd4LXRvYXN0ciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi50b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWZ1bGwtd2lkdGggLm5neC10b2FzdHIsXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5uZ3gtdG9hc3RyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMDMwMztcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4udG9hc3Qtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MUEzNTE7XG59XG4udG9hc3QtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQzNjJGO1xufVxuLnRvYXN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY5NkI0O1xufVxuLnRvYXN0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5NDA2O1xufVxuLnRvYXN0LXByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMjQwcHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XG4gICAgd2lkdGg6IDExZW07XG4gIH1cbiAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICByaWdodDogLTAuMmVtO1xuICAgIHRvcDogLTAuMmVtO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgIHdpZHRoOiAxOGVtO1xuICB9XG4gIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcmlnaHQ6IC0wLjJlbTtcbiAgICB0b3A6IC0wLjJlbTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgICB3aWR0aDogMjVlbTtcbiAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgIEZpbGUgTmFtZTogYWdncmlkLnNjc3Ncbi8vICAgRGVzY3JpcHRpb246IFNDQyBmaWxlIGZvciBBZ2dyaWQuXG4vLyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4vLyAgIEF1dGhvcjogUElYSU5WRU5UXG4vLyAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQGltcG9ydCAnLi4vYm9vdHN0cmFwLWV4dGVuZGVkL2luY2x1ZGUnOyAvLyBCb290c3RyYXAgaW5jbHVkZXNcbkBpbXBvcnQgJy4uL2NvbXBvbmVudHMvaW5jbHVkZSc7IC8vIENvbXBvbmVudHMgaW5jbHVkZXNcblxuLy8gU3RhdGlzdGljcyBDYXJkXG4uY2FyZC1zdGF0aXN0aWNzIHtcbiAgLnN0YXRpc3RpY3MtYm9keSB7XG4gICAgcGFkZGluZzogMnJlbSAyLjRyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xuICAgIC5jYXJkLWhlYWRlcixcbiAgICAuc3RhdGlzdGljcy1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBDb21wYW55IFRhYmxlIENhcmRcbi5jYXJkLWNvbXBhbnktdGFibGUge1xuICB0aGVhZCB0aCB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIHRkIHtcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcblxuICAgIC5hdmF0YXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmc7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEJyb3dzZXIgU3RhdGUgQ2FyZFxuLmNhcmQtYnJvd3Nlci1zdGF0ZXMge1xuICAuYnJvd3Nlci1zdGF0ZXMge1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tdG9wOiAxLjdyZW07XG4gICAgfVxuICB9XG59XG5cbi8vIFRyYW5zYWN0aW9uIENhcmRcbi5jYXJkLXRyYW5zYWN0aW9uIHtcbiAgLnRyYW5zYWN0aW9uLWl0ZW0ge1xuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd+bmd4LXRvYXN0ci90b2FzdHIuY3NzJztcbi5jYXJkLXN0YXRpc3RpY3MgLnN0YXRpc3RpY3MtYm9keSB7XG4gIHBhZGRpbmc6IDJyZW0gMi40cmVtICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmNhcmQtc3RhdGlzdGljcyAuY2FyZC1oZWFkZXIsXG4uY2FyZC1zdGF0aXN0aWNzIC5zdGF0aXN0aWNzLWJvZHkge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5jYXJkLWNvbXBhbnktdGFibGUgdGhlYWQgdGgge1xuICBib3JkZXI6IDA7XG59XG4uY2FyZC1jb21wYW55LXRhYmxlIHRkIHtcbiAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xufVxuLmNhcmQtY29tcGFueS10YWJsZSB0ZCAuYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuLmNhcmQtY29tcGFueS10YWJsZSB0ZCAuYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5jYXJkLWJyb3dzZXItc3RhdGVzIC5icm93c2VyLXN0YXRlczpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY2FyZC1icm93c2VyLXN0YXRlcyAuYnJvd3Nlci1zdGF0ZXM6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAxLjdyZW07XG59XG5cbi5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5hcGV4Y2hhcnRzLWNhbnZhcyBsaW5lW3N0cm9rZT10cmFuc3BhcmVudF0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXRvb2x0aXAge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNlYmU5ZjE7XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtdG9vbHRpcCAuYXBleGNoYXJ0cy10b29sdGlwLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNlYmU5ZjEgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy10b29sdGlwLmFwZXhjaGFydHMtdGhlbWUtZGFyayAuYXBleGNoYXJ0cy10b29sdGlwLXRleHQtbGFiZWwsXG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtdG9vbHRpcC5hcGV4Y2hhcnRzLXRoZW1lLWRhcmsgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LXZhbHVlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLFxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcCB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGJvcmRlci1jb2xvcjogI2ViZTlmMTtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtYm90dG9tOmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlYmU5ZjE7XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLWJvdHRvbTo6YWZ0ZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZjhmOGY4O1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhheGlzdG9vbHRpcC10b3A6YmVmb3JlIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ViZTlmMTtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtdG9wOjphZnRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmOGY4Zjg7XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLWxlZnQ6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNlYmU5ZjE7XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLWxlZnQ6YWZ0ZXIge1xuICBib3JkZXItbGVmdC1jb2xvcjogI2Y4ZjhmODtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy15YXhpc3Rvb2x0aXAtcmlnaHQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZWJlOWYxO1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcC1yaWdodDphZnRlciB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2Y4ZjhmODtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy10ZXh0LFxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXRvb2x0aXAtdGV4dCxcbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1kYXRhbGFiZWwtbGFiZWwsXG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtZGF0YWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhaW1wb3J0YW50O1xuICBmaWxsOiAjNmU2YjdiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmaWx0ZXI6IG5vbmU7XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtcGllLWxhYmVsIHtcbiAgZmlsbDogd2hpdGU7XG4gIGZpbHRlcjogbm9uZTtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1waWUgLmFwZXhjaGFydHMtcGllLXNlcmllcyAuYXBleGNoYXJ0cy1waWUtYXJlYSB7XG4gIHN0cm9rZS13aWR0aDogMDtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1waWUgLmFwZXhjaGFydHMtZGF0YWxhYmVsLWxhYmVsLFxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXBpZSAuYXBleGNoYXJ0cy1kYXRhbGFiZWwtdmFsdWUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1tYXJrZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLWxlZ2VuZC1zZXJpZXMgKyAuYXBleGNoYXJ0cy1sZWdlbmQtc2VyaWVzIHtcbiAgbWFyZ2luLXRvcDogMC42MjVyZW07XG59XG4uYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtbGVnZW5kLXNlcmllcyAuYXBleGNoYXJ0cy1sZWdlbmQtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGNvbG9yOiAjNmU2YjdiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhjcm9zc2hhaXJzLFxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXljcm9zc2hhaXJzLFxuLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLWdyaWRsaW5lIHtcbiAgc3Ryb2tlOiAjZWJlOWYxO1xufVxuXG4uYXBleGNoYXJ0cy1sZWdlbmQucG9zaXRpb24tYm90dG9tIHtcbiAgYm90dG9tOiAzcmVtO1xufVxuXG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhheGlzLXRpY2ssXG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIGxpbmUge1xuICBzdHJva2U6ICMzYjQyNTM7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLWhlYXRtYXAgLmFwZXhjaGFydHMtaGVhdG1hcC1yZWN0IHtcbiAgc3Ryb2tlOiAjM2I0MjUzO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1yYWRpYWxiYXIgLmFwZXhjaGFydHMtcmFkaWFsYmFyLXRyYWNrIC5hcGV4Y2hhcnRzLXJhZGlhbGJhci1hcmVhIHtcbiAgc3Ryb2tlOiAjMTYxZDMxO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy1yYWRhci1zZXJpZXMgcG9seWdvbiB7XG4gIGZpbGw6ICMxNjFkMzE7XG4gIHN0cm9rZTogIzNiNDI1Mztcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtZGF0YWxhYmVscy1ncm91cCAuYXBleGNoYXJ0cy1kYXRhbGFiZWwtdmFsdWUge1xuICBmaWxsOiAjZmZmO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy10b29sdGlwIHtcbiAgYmFja2dyb3VuZDogIzI4MzA0NjtcbiAgYm9yZGVyLWNvbG9yOiAjM2I0MjUzO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy10b29sdGlwIC5hcGV4Y2hhcnRzLXRvb2x0aXAtdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjMjgzMDQ2ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzNiNDI1MyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtdG9vbHRpcCAuYXBleGNoYXJ0cy10b29sdGlwLXRleHQtbGFiZWwsXG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXRvb2x0aXAgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LXZhbHVlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhheGlzdG9vbHRpcC1ib3R0b206YmVmb3JlIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzNiNDI1Mztcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLWJvdHRvbTo6YWZ0ZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMTYxZDMxO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtdG9wOmJlZm9yZSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzYjQyNTM7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhheGlzdG9vbHRpcC10b3A6OmFmdGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzE2MWQzMTtcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLWxlZnQ6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMzYjQyNTM7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcC1sZWZ0OmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxNjFkMzE7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcC1yaWdodDpiZWZvcmUge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMzYjQyNTM7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcC1yaWdodDphZnRlciB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzE2MWQzMTtcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLFxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy15YXhpc3Rvb2x0aXAge1xuICBiYWNrZ3JvdW5kOiAjMTYxZDMxO1xuICBib3JkZXItY29sb3I6ICMzYjQyNTM7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhheGlzdG9vbHRpcCAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtdGV4dCxcbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcC10ZXh0LFxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy15YXhpc3Rvb2x0aXAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLXRleHQsXG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcCAuYXBleGNoYXJ0cy15YXhpc3Rvb2x0aXAtdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLXRleHQge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMteWF4aXMtbGFiZWwsXG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhheGlzLWxhYmVsLFxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy10b29sdGlwLXRleHQsXG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC1sYWJlbCB7XG4gIGZpbGw6ICNiNGI3YmQ7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLW1hcmtlciB7XG4gIHN0cm9rZTogIzNiNDI1Mztcbn1cbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtbGVnZW5kLXNlcmllcyAuYXBleGNoYXJ0cy1sZWdlbmQtdGV4dCB7XG4gIGNvbG9yOiAjYjRiN2JkICFpbXBvcnRhbnQ7XG59XG4uZGFyay1sYXlvdXQgLmFwZXhjaGFydHMtY2FudmFzIC5hcGV4Y2hhcnRzLXhjcm9zc2hhaXJzLFxuLmRhcmstbGF5b3V0IC5hcGV4Y2hhcnRzLWNhbnZhcyAuYXBleGNoYXJ0cy15Y3Jvc3NoYWlycyxcbi5kYXJrLWxheW91dCAuYXBleGNoYXJ0cy1jYW52YXMgLmFwZXhjaGFydHMtZ3JpZGxpbmUge1xuICBzdHJva2U6ICMzYjQyNTM7XG59XG5cbiN0b2FzdC1jb250YWluZXIgPiBkaXYge1xuICBvcGFjaXR5OiAxO1xuICAtbXMtZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjI4NnJlbTtcbn1cblxuI3RvYXN0LWNvbnRhaW5lciA+IGRpdixcbiN0b2FzdC1jb250YWluZXIgPiBkaXY6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjA4KTtcbn1cblxuI3RvYXN0LWNvbnRhaW5lciA+IC50b2FzdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRvYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM2ZTZiN2IgIWltcG9ydGFudDtcbn1cbi50b2FzdCAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgY29sb3I6ICM2ZTZiN2I7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG4udG9hc3QgLnRvYXN0LWNsb3NlLWJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4udG9hc3QgLnRvYXN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS43NTtcbn1cbi50b2FzdCAudG9hc3QtcHJvZ3Jlc3Mge1xuICBvcGFjaXR5OiAxO1xufVxuLnRvYXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMS4yNXJlbTtcbiAgYmFja2dyb3VuZC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi50b2FzdC1zdWNjZXNzIC50b2FzdC10aXRsZSB7XG4gIGNvbG9yOiAjMjhjNzZmO1xufVxuLnRvYXN0LXN1Y2Nlc3MgLnRvYXN0LXByb2dyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzc2Zjtcbn1cbi50b2FzdC1zdWNjZXNzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3NmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZWNrJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMjAgNiA5IDE3IDQgMTInJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLnRvYXN0LWVycm9yIC50b2FzdC10aXRsZSB7XG4gIGNvbG9yOiAjZWE1NDU1O1xufVxuLnRvYXN0LWVycm9yIC50b2FzdC1wcm9ncmVzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG59XG4udG9hc3QtZXJyb3I6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNTQ1NTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLXgnJTNFJTNDbGluZSB4MT0nMTgnIHkxPSc2JyB4Mj0nNicgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nNicgeTE9JzYnIHgyPScxOCcgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLnRvYXN0LWluZm8gLnRvYXN0LXRpdGxlIHtcbiAgY29sb3I6ICMwMGNmZTg7XG59XG4udG9hc3QtaW5mbyAudG9hc3QtcHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZmU4O1xufVxuLnRvYXN0LWluZm86YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2ZlODtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItaW5mbyclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE2JyB4Mj0nMTInIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOCcgeDI9JzEyLjAxJyB5Mj0nOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIik7XG59XG5cbi50b2FzdC13YXJuaW5nIC50b2FzdC10aXRsZSB7XG4gIGNvbG9yOiAjZmY5ZjQzO1xufVxuLnRvYXN0LXdhcm5pbmcgLnRvYXN0LXByb2dyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWY0Mztcbn1cbi50b2FzdC13YXJuaW5nOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjlmNDM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWFsZXJ0LXRyaWFuZ2xlJyUzRSUzQ3BhdGggZD0nTTEwLjI5IDMuODZMMS44MiAxOGEyIDIgMCAwIDAgMS43MSAzaDE2Ljk0YTIgMiAwIDAgMCAxLjcxLTNMMTMuNzEgMy44NmEyIDIgMCAwIDAtMy40MiAweiclM0UlM0MvcGF0aCUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOScgeDI9JzEyJyB5Mj0nMTMnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE3JyB4Mj0nMTIuMDEnIHkyPScxNyclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIik7XG59XG5cbi50b2FzdC10b3AtbGVmdCB7XG4gIHRvcDogMS4zcmVtO1xuICBsZWZ0OiAycmVtO1xufVxuXG4udG9hc3QtdG9wLXJpZ2h0IHtcbiAgdG9wOiAxLjNyZW07XG4gIHJpZ2h0OiAycmVtO1xufVxuXG4udG9hc3QtdG9wLWNlbnRlcixcbi50b2FzdC10b3AtZnVsbC13aWR0aCB7XG4gIHRvcDogMS4zcmVtO1xufVxuXG4udG9hc3QtYm90dG9tLWxlZnQge1xuICBib3R0b206IDEuM3JlbTtcbiAgbGVmdDogMnJlbTtcbn1cblxuLnRvYXN0LWJvdHRvbS1yaWdodCB7XG4gIGJvdHRvbTogMS4zcmVtO1xuICByaWdodDogMnJlbTtcbn1cblxuLnRvYXN0LWJvdHRvbS1jZW50ZXIsXG4udG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICBib3R0b206IDEuM3JlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSBhbmQgKG1pbi13aWR0aDogMjQxcHgpIHtcbiAgI3RvYXN0LWNvbnRhaW5lciA+IC50b2FzdDphZnRlciB7XG4gICAgdG9wOiAwLjk1cmVtO1xuICB9XG4gICN0b2FzdC1jb250YWluZXIgPiAudG9hc3QgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAtMXB4O1xuICB9XG5cbiAgI3RvYXN0LWNvbnRhaW5lcjpub3QoLnRvYXN0LXRvcC1mdWxsLXdpZHRoKTpub3QoLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoKSA+IGRpdiB7XG4gICAgd2lkdGg6IDIwcmVtO1xuICB9XG5cbiAgLnRvYXN0LXRvcC1sZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICB9XG5cbiAgI3RvYXN0LWNvbnRhaW5lci50b2FzdC10b3AtY2VudGVyLCAjdG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1jZW50ZXIge1xuICAgIHJpZ2h0OiAxcmVtO1xuICB9XG4gICN0b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWNlbnRlciA+IGRpdiwgI3RvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tY2VudGVyID4gZGl2IHtcbiAgICB3aWR0aDogMjByZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC50b2FzdC10b3AtZnVsbC13aWR0aCxcbi50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogOTMlO1xuICB9XG4gIC50b2FzdC10b3AtZnVsbC13aWR0aCA+IGRpdixcbi50b2FzdC1ib3R0b20tZnVsbC13aWR0aCA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudG9hc3QtYm90dG9tLWxlZnQge1xuICAgIGxlZnQ6IDAuMjVyZW07XG4gICAgYm90dG9tOiAwLjc1cmVtO1xuICB9XG5cbiAgLnRvYXN0LWJvdHRvbS1yaWdodCB7XG4gICAgcmlnaHQ6IDIuMjVyZW07XG4gICAgYm90dG9tOiAwLjc1cmVtO1xuICB9XG5cbiAgLnRvYXN0LWJvdHRvbS1jZW50ZXIsXG4udG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICAgIGJvdHRvbTogMC43NXJlbTtcbiAgfVxuXG4gIFtkYXRhLXRleHRkaXJlY3Rpb249cnRsXSAjdG9hc3QtY29udGFpbmVyID4gZGl2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIH1cbn1cbi5kYXJrLWxheW91dCAjdG9hc3QtY29udGFpbmVyID4gZGl2LFxuLmRhcmstbGF5b3V0ICN0b2FzdC1jb250YWluZXIgPiBkaXY6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjI0KTtcbn1cbi5kYXJrLWxheW91dCAjdG9hc3QtY29udGFpbmVyIC50b2FzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODMwNDY7XG4gIGNvbG9yOiAjYjRiN2JkICFpbXBvcnRhbnQ7XG59XG4uZGFyay1sYXlvdXQgI3RvYXN0LWNvbnRhaW5lciAudG9hc3QgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gIGNvbG9yOiAjYjRiN2JkO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgW2RhdGEtdGV4dGRpcmVjdGlvbj1ydGxdIC50b2FzdCAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICB0b3A6IDAuNTVyZW0gIWltcG9ydGFudDtcbiAgICByaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbltkYXRhLXRleHRkaXJlY3Rpb249cnRsXSAudG9hc3QtdG9wLWxlZnQge1xuICBsZWZ0OiAxcmVtO1xuICByaWdodDogYXV0bztcbn1cbltkYXRhLXRleHRkaXJlY3Rpb249cnRsXSAudG9hc3QtdG9wLXJpZ2h0IHtcbiAgcmlnaHQ6IDNyZW07XG4gIGxlZnQ6IGF1dG87XG59XG5bZGF0YS10ZXh0ZGlyZWN0aW9uPXJ0bF0gLnRvYXN0LWJvdHRvbS1sZWZ0IHtcbiAgbGVmdDogMWVtO1xuICByaWdodDogYXV0bztcbn1cbltkYXRhLXRleHRkaXJlY3Rpb249cnRsXSAudG9hc3QtYm90dG9tLXJpZ2h0IHtcbiAgcmlnaHQ6IDNyZW07XG4gIGxlZnQ6IGF1dG87XG59XG5bZGF0YS10ZXh0ZGlyZWN0aW9uPXJ0bF0gLnRvYXN0LXRvcC1mdWxsLXdpZHRoI3RvYXN0LWNvbnRhaW5lciA+IGRpdixcbltkYXRhLXRleHRkaXJlY3Rpb249cnRsXSAudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgjdG9hc3QtY29udGFpbmVyID4gZGl2IHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSBhbmQgKG1pbi13aWR0aDogMjQxcHgpIHtcbiAgI3RvYXN0LWNvbnRhaW5lciA+IC50b2FzdDphZnRlciB7XG4gICAgdG9wOiAxLjQ0cmVtO1xuICB9XG59XG4jZWFybmluZ3MtZG9udXQtY2hhcnQgLmFwZXhjaGFydHMtdG9vbHRpcC5hcGV4Y2hhcnRzLXRoZW1lLWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCA0MSwgNDcsIDAuOCkgIWltcG9ydGFudDtcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy5zY3NzXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBvdmVycmlkZXMgb2YgQm9vdHN0cmFwIHZhcmlhYmxlc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbi8vICBBdXRob3I6IFBJWElOVkVOVFxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIENvbG9yIHN5c3RlbVxuXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS01MDogI2Y2ZjZmNiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2JhYmZjNyAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRlc3RcbiRncmF5LTIwMDogI2VkZWRlZCAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRlclxuJGdyYXktMzAwOiAjZGFlMWU3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodFxuJGdyYXktNDAwOiAjNjM2MzYzICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjYjhjMmNjICFkZWZhdWx0OyAvLyAkZ3JheVxuJGdyYXktNzAwOiAjNGU1MTU0ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMWUxZTFlICFkZWZhdWx0OyAvLyAkZ3JheS1kYXJrXG4kZ3JheS05MDA6ICMyYTJlMzAgIWRlZmF1bHQ7XG4kYmxhY2s6ICMyMjI5MmYgIWRlZmF1bHQ7IC8vIDIzMWY0OCAyMjI5MmZcblxuJHB1cnBsZTogIzczNjdmMCAhZGVmYXVsdDsgLy8kcHJpbWFyeVxuJGdyZWVuOiAjMjhjNzZmICFkZWZhdWx0OyAvLyRzdWNjZXNzXG4kYmx1ZTogIzAwY2ZlOCAhZGVmYXVsdDsgLy8kaW5mb1xuJG9yYW5nZTogI2ZmOWY0MyAhZGVmYXVsdDsgLy8kd2FybmluZ1xuJHJlZDogI2VhNTQ1NSAhZGVmYXVsdDsgLy8kZGFuZ2VyXG5cbiRwcmltYXJ5OiAkcHVycGxlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogIzgyODY4YiAhZGVmYXVsdDtcbiRpbmZvOiAkYmx1ZSAhZGVmYXVsdDtcbiR3YXJuaW5nOiAkb3JhbmdlICFkZWZhdWx0O1xuJGxpZ2h0OiAkZ3JheS01MCAhZGVmYXVsdDtcbiRkYXJrOiAjNGI0YjRiICFkZWZhdWx0O1xuXG4vLyBTcGFjaW5nXG4vL1xuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbnRhaW5lci1tYXgtd2lkdGhzXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweCxcbiAgeHhsOiAxNDQwcHggLy8gQ3VzdG9tIHh4bCBzaXplXG4pICFkZWZhdWx0O1xuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQ0MHB4IC8vIEN1c3RvbSB4eGwgc2l6ZVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29udGFpbmVyLW1heC13aWR0aHNcblxuLy8gc3R5bGVsaW50LWRpc2FibGVcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDA6IDAsXG4gICAgMjU6IChcbiAgICAgICRzcGFjZXIgKiAwLjI1XG4gICAgKSxcbiAgICA1MDogKFxuICAgICAgJHNwYWNlciAqIDAuNVxuICAgICksXG4gICAgNzU6IChcbiAgICAgICRzcGFjZXIgKiAwLjc1XG4gICAgKSxcbiAgICAxOiAoXG4gICAgICAkc3BhY2VyXG4gICAgKSxcbiAgICAyOiAoXG4gICAgICAkc3BhY2VyICogMS41XG4gICAgKSxcbiAgICAzOiAoXG4gICAgICAkc3BhY2VyICogM1xuICAgICksXG4gICAgNDogKFxuICAgICAgJHNwYWNlciAqIDMuNVxuICAgICksXG4gICAgNTogKFxuICAgICAgJHNwYWNlciAqIDRcbiAgICApXG4gICksXG4gICRzcGFjZXJzXG4pO1xuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuJGJvZHktYmc6ICNmOGY4ZjggIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogIzZlNmI3YiAhZGVmYXVsdDtcblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmUgIWRlZmF1bHQ7XG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDJyZW0gIWRlZmF1bHQ7XG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRsaW5lLWhlaWdodC1sZzogMS4yNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogMSAhZGVmYXVsdDtcblxuJGJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogI2ViZTlmMSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzOiAwLjM1N3JlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAwLjZyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcblxuLy8gc2hhZG93XG4kYm94LXNoYWRvdzogMCA0cHggMjRweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xuLy8gVHlwb2dyYXBoeVxuXG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdNb250c2VycmF0JywgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWYgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xuXG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sZzogY2VpbCgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206IGNlaWwoJGZvbnQtc2l6ZS1iYXNlICogMC44NSkgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiA1MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiA2MDAgIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1iYXNlOiAxLjQ1ICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS43MTQgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjI4NiAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMDcgIWRlZmF1bHQ7XG5cbiRoZWFkaW5ncy1mb250LWZhbWlseTogaW5oZXJpdCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogIzVlNTg3MyAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRkaXNwbGF5Mi13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kZGlzcGxheTMtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGRpc3BsYXk0LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcblxuJGxlYWQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjE0ICFkZWZhdWx0O1xuJGxlYWQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xuXG4kdGV4dC1tdXRlZDogI2I5YjljMyAhZGVmYXVsdDtcbiRoci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6IDAuNzJyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1hY2NlbnQtYmc6ICNmYWZhZmMgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICNmNmY2ZjkgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xuJHRhYmxlLWhlYWQtY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWRhcmstYmc6ICRkYXJrICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAjNDA0MDQwICFkZWZhdWx0O1xuXG4kdGFibGUtdGgtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuJGJ0bi1wYWRkaW5nLXk6IDAuNzg2cmVtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6IDEuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15OiAwLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6IDJyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjQ4NnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIDAuOSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6IDAuOHJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAycmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAxICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMC4zNThyZW0gIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDAuMzU4cmVtICFkZWZhdWx0O1xuXG4kYnRuLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMHMsIGJvcmRlciAwcyAhZGVmYXVsdDtcblxuLy8gRm9ybXNcbiRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICNkOGQ2ZGU7XG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMC4yODU3cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15OiAwLjQzOHJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1zbTogMC4xODhyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXNtOiAwLjg1N3JlbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206IDAuODU3cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LWxnOiAwLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogMS4xNDNyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLWxnOiAxLjE0M3JlbSAhZGVmYXVsdDtcblxuJGlucHV0LWRpc2FibGVkLWJnOiAjZWZlZmVmICFkZWZhdWx0O1xuXG4kaW5wdXQtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogMi43MTRyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAyLjE0MnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtbGc6IDMuMjg1N3JlbSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiB3aGl0ZSAhZGVmYXVsdDtcbiRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDBzLCBib3JkZXItY29sb3IgMHMgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yO1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAzcHggIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1jaGVja2VkLWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6IHdoaXRlICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5LjUgNy41JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMC43NSA0LjM1IDQuMTggNi43NSA4Ljc1IDAuNzUnIHN0eWxlPSdmaWxsOm5vbmU7c3Ryb2tlOiUyM2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjEuNXB4Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItbWludXMnJTNFJTNDbGluZSB4MT0nNScgeTE9JzEyJyB4Mj0nMTknIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIik7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogcmdiYSgkcHJpbWFyeSwgMC42NSk7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogbm9uZTtcblxuJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6IDEwcHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuLy8gJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogY2VudGVyIHJpZ2h0ICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XG4vLyAkY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjA1KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDVweCAyNXB4IHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogcmdiYSgkcHJpbWFyeSwgMC4xMikgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1kaXZpZGVyLWJnOiByZ2JhKCRibGFjaywgMC4wOCkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogMCAhZGVmYXVsdDtcbiR6aW5kZXgtZHJvcGRvd246IDEwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCA1cHggMjVweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC42NXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMS4yOHJlbSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuXG4kZHJvcGRvd25fc3BhY2luZzogMC41cmVtOyAvLyBjdXN0b21cblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogMC44NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogMC41NTc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAxcmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAwLjQ0M3JlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogMC43NDVyZW0gIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogI2YzZjJmNyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9udC1zaXplLWxnOiAxLjE0cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cbiRwYWdpbmF0aW9uLWZvbnQtc2l6ZS1zbTogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuXG4vLyBDYXJkc1xuJGNhcmQtc3BhY2VyLXk6IDEuNXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAxLjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAwLjQyOHJlbSAhZGVmYXVsdDtcblxuLy9BbGVydHNcblxuJGFsZXJ0LXBhZGRpbmcteTogMC43MXJlbSAhZGVmYXVsdDtcbiRhbGVydC1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogNzAwICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gTmF2IHRhYnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogMC4zNThyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6IDAuMjUgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuLy8gbmF2YmFyXG5cbiRmbG9hdGluZy1uYXYtbWFyZ2luOiAxLjNyZW07XG5cbi8vIFRvb2x0aXBzXG5cbiR0b29sdGlwLWJnOiAjMzIzMjMyICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXg6IDAuNzc1cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogMSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogMjIwcHggIWRlZmF1bHQ7XG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcblxuJHBvcG92ZXItaGVhZGVyLWJnOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogMC42NXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDEuMjFyZW0gIWRlZmF1bHQ7XG5cbi8vIFRvYXN0c1xuXG4kdG9hc3QtbWF4LXdpZHRoOiAzODBweCAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXg6IDEuMTRyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy15OiAwLjE1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAwLjI4NnJlbSAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93OiAwIDJweCAyMHB4IDAgcmdiYSgkYmxhY2ssIDAuMDgpICFkZWZhdWx0O1xuXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAwLjg1N3JlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiA1cmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMC44NTcgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmc6IHJnYmEoJHByaW1hcnksIDAuMTIpICFkZWZhdWx0O1xuXG4vLyBCcmVhZGNydW1ic1xuXG4kYnJlYWRjcnVtYi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLXBhZGRpbmcteTogMC4zcmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAwLjZyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206IDAgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogMCAhZGVmYXVsdDtcblxuLy8gQ2Fyb3VzZWxcblxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0XCI+PHBvbHlsaW5lIHBvaW50cz1cIjE1IDE4IDkgMTIgMTUgNlwiPjwvcG9seWxpbmU+PC9zdmc+JykgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHRcIj48cG9seWxpbmUgcG9pbnRzPVwiOSAxOCAxNSAxMiA5IDZcIj48L3BvbHlsaW5lPjwvc3ZnPicpICFkZWZhdWx0O1xuXG4vLyBCYWRnZXNcblxuJGJhZGdlLWZvbnQtc2l6ZTogODUlICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogMC4zcmVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiA2MDAgIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG5cbiRiYWRnZS1waWxsLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xuXG4vLyBNb2RhbFxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDAuOHJlbSAxLjRyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4wNSkgIWRlZmF1bHQ7XG5cbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwLjhyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogMS40cmVtICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC14bDogOTQlICFkZWZhdWx0O1xuJG1vZGFsLXNtOiA0MDBweCAhZGVmYXVsdDtcblxuLy8gICAgU2xpZGUgSW4gTW9kYWxcbiRtb2RhbC1zbGlkZS1pbi13aWR0aC1zbTogMjVyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuJG1vZGFsLXNsaWRlLWluLXdpZHRoOiAyOHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG4kbW9kYWwtc2xpZGUtaW4td2lkdGgtbGc6IDMwcmVtICFkZWZhdWx0OyAvLyBjdXN0b21cblxuLy8gQ2xvc2VcblxuJGNsb3NlLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRjbG9zZS1mb250LXdlaWdodDogNDAwICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XG4ka2JkLWJnOiAjZWVlICFkZWZhdWx0O1xuXG4vLyBTd2l0Y2hcbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAzcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6IDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogMXJlbSAhZGVmYXVsdDtcblxuLy9zdmcgY29sb3JcbiRzdmctY29sb3ItbGlnaHQ6ICM2MjYyNjIgIWRlZmF1bHQ7XG5cbi8vIFNWRyBpY29uc1xuLy8gRm9yIEJyZWFkY3J1bWJcbiRkb3VibGUtY2hldnJvbi1yaWdodDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbnMtcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxMyAxNyAxOCAxMiAxMyA3JyUzRSUzQy9wb2x5bGluZSUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiAxNyAxMSAxMiA2IDcnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xuLy8gQ2hldnJvbiBJY29uc1xuJGNoZXZyb24tbGVmdDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTUgMTggOSAxMiAxNSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaGV2cm9uLXJpZ2h0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xuJGNoZXZyb24tdXA6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxOCAxNSAxMiA5IDYgMTUnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xuJGNoZXZyb24tZG93bjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xuXG4kZG93bmxvYWQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWRvd25sb2FkJyUzRSUzQ3BhdGggZD0nTTIxIDE1djRhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ2LTQnJTNFJTNDL3BhdGglM0UlM0Nwb2x5bGluZSBwb2ludHM9JzcgMTAgMTIgMTUgMTcgMTAnJTNFJTNDL3BvbHlsaW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNScgeDI9JzEyJyB5Mj0nMyclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcbiRyZW1vdmU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLXgnJTNFJTNDbGluZSB4MT0nMTgnIHkxPSc2JyB4Mj0nNicgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nNicgeTE9JzYnIHgyPScxOCcgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xuJGNoZWNrOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZWNrJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMjAgNiA5IDE3IDQgMTInJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xuJGNpcmNsZTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaXJjbGUnJTNFJTNDY2lyY2xlIGN4PScxMicgY3k9JzEyJyByPScxMCclM0UlM0MvY2lyY2xlJTNFJTNDL3N2ZyUzRVwiO1xuJGluZm9JY29uOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWluZm8nJTNFJTNDY2lyY2xlIGN4PScxMicgY3k9JzEyJyByPScxMCclM0UlM0MvY2lyY2xlJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNicgeDI9JzEyJyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzgnIHgyPScxMi4wMScgeTI9JzgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kd2FybmluZ0ljb246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItYWxlcnQtdHJpYW5nbGUnJTNFJTNDcGF0aCBkPSdNMTAuMjkgMy44NkwxLjgyIDE4YTIgMiAwIDAgMCAxLjcxIDNoMTYuOTRhMiAyIDAgMCAwIDEuNzEtM0wxMy43MSAzLjg2YTIgMiAwIDAgMC0zLjQyIDB6JyUzRSUzQy9wYXRoJTNFJTNDbGluZSB4MT0nMTInIHkxPSc5JyB4Mj0nMTInIHkyPScxMyclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTcnIHgyPScxMi4wMScgeTI9JzE3JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xuJG1lbnU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBmaWxsPSdub25lJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdjc3MtaTZkenExJyUzRSUzQ2xpbmUgeDE9JzMnIHkxPScxMicgeDI9JzIxJyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSczJyB5MT0nNicgeDI9JzIxJyB5Mj0nNiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzMnIHkxPScxOCcgeDI9JzIxJyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XG5cbiRjaGF0LWJnLWxpZ2h0OiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREl6TGpBdU1Td2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBeU5qQWdNall3SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TmpBZ01qWXdPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0NqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrQ2drdWMzUXdlMlpwYkd3dGNuVnNaVHBsZG1WdWIyUmtPMk5zYVhBdGNuVnNaVHBsZG1WdWIyUmtPMlpwYkd3NkkwVXhSVEJGT1R0OUNqd3ZjM1I1YkdVK0NqeG5QZ29KUEdjZ2FXUTlJbWt0YkdsclpTMW1iMjlrSWo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpRdU5Dd3hObU13TGpJc01DNDJMREF1TkN3eExqTXNNQzQxTERKb0xUTXVOMnd4TGpJc01pNHpiREF1TlN3d0xqbHNMVEF1TWl3d0xqRldNamhqTWk0eUxERXVOeXd5TGpjc05DNDRMREVzTndvSkNRbGpMVEF1T0N3eExURXVPU3d4TGpjdE15NHlMREV1T1ZZek4yTXRNQzQ1TERNdU5TMDBMakVzTmkwM0xqZ3NObWd0TWpCakxUTXVOaXd3TFRZdU9DMHlMalV0Tnk0M0xUWjJMVEF1TVdNdE1pNDNMVEF1TkMwMExqWXRNeTAwTGpJdE5TNDNZekF1TWkweExqTXNNQzQ1TFRJdU5Td3hMamt0TXk0eUNna0pDWFl0Tmk0NGJDMHdMamd0TVM0MmJDMHdMalF0TUM0NWJEQXVPUzB3TGpSTUxURTNMREU0YUMwelF5MHhOeTR5TERVdU5pMDBMamt0TWk0eUxEY3VOU3d3TGpaRE1UVXVOQ3d5TGpNc01qRXVPU3c0TGpJc01qUXVOQ3d4Tm5vZ1RTMHhNaTQwTERFNFl5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhDZ2tKQ1d3dE15NHhMREV1Tm13d0xqa3NNUzQ0YkRFdU15MHdMamRqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpGak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diREl1TWkweExqRmpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakVLQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4UXpjdU5Dd3lNaXczTGpjc01qSXNPQ3d5TVM0NWJESXVPUzB4TGpOak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3pMakV0TVM0MWJDMHdMamt0TVM0NGJDMHhMalFzTUM0M1l5MHdMamdzTUM0MExURXVOeXd3TGpRdE1pNDJMREF1TVd3dE1pNDRMVEV1TWtNeE1pNHpMREU0TERFeUxqSXNNVGdzTVRJdU1Td3hPR3d3TERBS0NRa0pZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNVXcwTERFNExqRkRNeTQ1TERFNExETXVOeXd4T0N3ekxqWXNNVGhzTUN3d1l5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhUREVzTVRrdU1nb0pDUWxqTFRBdU9Dd3dMalF0TVM0NExEQXVOQzB5TGpjc01Fd3ROQ3d4T0M0eFF5MDBMakVzTVRndE5DNHpMREU0TFRRdU5Dd3hPR3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRk1MVGNzTVRrdU1tTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4Q2drSkNVTXRNVEl1TVN3eE9DMHhNaTR6TERFNExURXlMalFzTVRoTUxURXlMalFzTVRoTUxURXlMalFzTVRoNklFMHRNVEl1TkN3eE5tZ3ROQzQ1UXkweE15NDFMRFV1TVMweExqVXRNQzQzTERrdU5Td3pMakpqTml3eUxqRXNNVEF1Tnl3MkxqZ3NNVEl1T0N3eE1pNDRhQzB5TGpGc0xUQXVNUzB3TGpFS0NRa0pUREU1TGprc01UWklMVEV5TGpSTUxURXlMalFzTVRaNklFMHhOeTQ1TERJekxqZHNNUzQwTFRBdU4yZ3hMak4yTW1ndE16WjJMVEV1TVd3d0xqTXRNQzR5YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZElMVE1LQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3dUREl1TXl3eU0yZ3lMalpzTVM0MExEQXVOMk13TGpjc01DNDBMREV1Tnl3d0xqUXNNaTQxTERCc01TNDNMVEF1TjJnekxqSnNNUzQzTERBdU4wTXhOaTR5TERJMExqRXNNVGN1TVN3eU5DNHhMREUzTGprc01qTXVOM29LQ1FrSklFMHRNVE11T0N3eU4yd3hOaTQwTERRdU9Vd3hPQzQ1TERJM1NDMHhNeTQ0ZWlCTkxURTBMalFzTWpsb01DNHpiREUyTGpjc05Xd3hOaTQzTFRWb01DNHpZekV1Tnl3d0xETXNNUzR6TERNc00zTXRNUzR6TERNdE15d3phQzB6TkdNdE1TNDNMREF0TXkweExqTXRNeTB6Q2drSkNVTXRNVGN1TkN3ek1DNHpMVEUyTGpFc01qa3RNVFF1TkN3eU9Yb2dUUzB4TXk0eExETTNZekF1T0N3eUxqUXNNeTR4TERRc05TNDNMRFJvTWpCak1pNDFMREFzTkM0NExURXVOaXcxTGpjdE5FTXhPQzR5TERNM0xURXpMakVzTXpjdE1UTXVNU3d6TjNvaUx6NEtDUWs4Y0dGMGFDQnBaRDBpY0dGMGFEWmZabWxzYkMxamIzQjVJaUJqYkdGemN6MGljM1F3SWlCa1BTSk5NamcwTGpRc01UWmpNQzR5TERBdU5pd3dMalFzTVM0ekxEQXVOU3d5YUMwekxqZHNNUzR5TERJdU0yd3dMalVzTUM0NWJDMHdMaklzTUM0eFZqSTRZekl1TWl3eExqY3NNaTQzTERRdU9Dd3hMRGNLQ1FrSll5MHdMamdzTVMweExqa3NNUzQzTFRNdU1pd3hMamxXTXpkakxUQXVPU3d6TGpVdE5DNHhMRFl0Tnk0NExEWm9MVEl3WXkwekxqWXNNQzAyTGpndE1pNDFMVGN1TnkwMmRpMHdMakZqTFRJdU55MHdMalF0TkM0MkxUTXROQzR5TFRVdU4yTXdMakl0TVM0ekxEQXVPUzB5TGpVc01TNDVMVE11TWdvSkNRbDJMVFl1T0d3dE1DNDRMVEV1Tm13dE1DNDBMVEF1T1d3d0xqa3RNQzQwVERJME15d3hPR2d0TTJNeUxqZ3RNVEl1TkN3eE5TNHhMVEl3TGpJc01qY3VOUzB4Tnk0MFF6STNOUzQwTERJdU15d3lPREV1T1N3NExqSXNNamcwTGpRc01UWjZJRTB5TkRjdU5Td3hPQW9KQ1FsakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVE11TVN3eExqWnNNQzQ1TERFdU9Hd3hMak10TUM0M1l6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4Q2drSkNXTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNHlMVEV1TVdNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0NUxURXVNd29KQ1Fsak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRNdU1TMHhMalZzTFRBdU9TMHhMamhzTFRFdU5Dd3dMamRqTFRBdU9Dd3dMalF0TVM0M0xEQXVOQzB5TGpZc01DNHhiQzB5TGpndE1TNHlDZ2tKQ1dNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5DMHdMakZzTUN3d1l5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1Xd3RNaTR6TFRFdU1XTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOUzB3TGpGc01Dd3dDZ2tKQ1dNdE1DNHlMREF0TUM0ekxEQXRNQzQwTERBdU1Xd3RNaTR5TERFdU1XTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4WXkwd0xqRXRNQzR4TFRBdU15MHdMakV0TUM0MExUQXVNV3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVEl1TWl3eExqRUtDUWtKWXkwd0xqZ3NNQzQwTFRFdU9Dd3dMalF0TWk0M0xEQnNMVEl1TWkweExqRkRNalEzTGprc01UZ3NNalEzTGpjc01UZ3NNalEzTGpVc01UaE1NalEzTGpVc01UaE1NalEzTGpVc01UaDZJRTB5TkRjdU5Td3hObWd0TkM0NVl6TXVPUzB4TUM0NUxERTFMamt0TVRZdU55d3lOaTQ0TFRFeUxqZ0tDUWtKWXpZc01pNHhMREV3TGpjc05pNDRMREV5TGpnc01USXVPR2d0TWk0eGJDMHdMakV0TUM0eGJDMHdMak1zTUM0eFNESTBOeTQxVERJME55NDFMREUyZWlCTk1qYzNMamtzTWpNdU4yd3hMalF0TUM0M2FERXVNM1l5YUMwek5uWXRNUzR4YkRBdU15MHdMakpzTVM0MExUQXVOMmd5TGpZS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpjc01DNDBMREl1Tml3d0xqRnNNUzQzTFRBdU53b0pDUWxvTXk0eWJERXVOeXd3TGpkRE1qYzJMaklzTWpRdU1Td3lOemN1TVN3eU5DNHhMREkzTnk0NUxESXpMamRNTWpjM0xqa3NNak11TjNvZ1RUSTBOaTR5TERJM2JERTJMalFzTkM0NVRESTNPU3d5TjBneU5EWXVNbm9nVFRJME5TNDFMREk1YURBdU0yd3hOaTQzTERWc01UWXVOeTAxYURBdU13b0pDUWxqTVM0M0xEQXNNeXd4TGpNc015d3pjeTB4TGpNc015MHpMRE5vTFRNMFl5MHhMamNzTUMwekxURXVNeTB6TFROVE1qUXpMamtzTWprc01qUTFMalVzTWpsNklFMHlORFl1T1N3ek4yTXdMamdzTWk0MExETXVNU3cwTERVdU5pdzBhREl3WXpJdU5Td3dMRFF1T0MweExqWXNOUzQzTFRRS0NRa0pTREkwTmk0NWVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhOVGt1TlN3eU1XTXRNUzR6TFRNdU5pMDBMamN0TmkwNExqVXRObWd0TkRKakxUTXVPQ3d3TFRjdU1pd3lMalF0T0M0MUxEWmpMVE11TXl3d0xqTXROUzQ0TERNdU1pMDFMalVzTmk0MVl6QXVNaXd5TGprc01pNDJMRFV1TWl3MUxqVXNOUzQxQ2drSkNXTXRNUzQzTERRdU55d3dMamdzT1M0NExEVXVOQ3d4TVM0MVl6RXNNQzR6TERJc01DNDFMRE1zTUM0MWFEUXlZelVzTUN3NUxUUXNPUzA1WXpBdE1TMHdMakl0TWk0eExUQXVOUzB6WXpNdU15MHdMak1zTlM0NExUTXVNaXcxTGpVdE5pNDFDZ2tKQ1VNeE5qUXVOeXd5TXk0MkxERTJNaTQwTERJeExqTXNNVFU1TGpVc01qRjZJRTB4TlRFc01UZG9MVFF5WXkweUxqY3NNQzAxTGpJc01TNDJMVFl1TXl3MGFEVTBMamRETVRVMkxqSXNNVGd1Tml3eE5UTXVOeXd4Tnl3eE5URXNNVGQ2SUUweE5ERXVOeXcwTXdvSkNRbGpNaTR4TFRFdU55d3pMak10TkM0ekxETXVNeTAzYUMweVl6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE5DNHpZekl1TVMweExqY3NNeTR6TFRRdU15d3pMak10TjJndE1tTXdMRE11T1MwekxqRXNOeTAzTERkb0xUUXVNMk15TGpFdE1TNDNMRE11TXkwMExqTXNNeTR6TFRkb0xUSUtDUWtKWXpBc015NDVMVE11TVN3M0xUY3NOMmd0TjJNdE15NDVMREF0TnkwekxqRXROeTAzY3pNdU1TMDNMRGN0TjJnME1tTXpMamtzTUN3M0xETXVNU3czTERkekxUTXVNU3czTFRjc04wZ3hOREV1TjNvZ1RURXdPU3d5TjJNdE15d3dMVFV1T0N3eExqVXROeTQxTERSSU1UQXhDZ2tKQ1dNdE1pNHlMREF0TkMweExqZ3ROQzAwY3pFdU9DMDBMRFF0TkdnMU9HTXlMaklzTUN3MExERXVPQ3cwTERSekxURXVPQ3cwTFRRc05HZ3RNQzQxWXkweExqY3RNaTQxTFRRdU5TMDBMVGN1TlMwMFNERXdPWG9pTHo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTXprc01URTFZelF1TkN3d0xEZ3RNeTQyTERndE9ITXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGhUTXpRdU5pd3hNVFVzTXprc01URTFlaUJOTkRVc01UQTNZekFzTXk0ekxUSXVOeXcyTFRZc05uTXROaTB5TGpjdE5pMDJDZ2tKQ1hNeUxqY3ROaXcyTFRaVE5EVXNNVEF6TGpjc05EVXNNVEEzZWlCTk5ESXNOemgyTFRKb09IWXROa2cwTUdNdE1pNHlMREF0TkN3eExqZ3ROQ3cwZGpFd1NESXliQzB4TGpNc05Fd3lNQ3c1TUdneUxqSnNNeTQ0TERRd2FESTJiRE11T0MwME1FZzFPR3d0TUM0M0xUSk1OVFlzT0RSSU5ESldOemg2Q2drSkNTQk5NemdzTnpSMk1UQm9NbFkzTkdnNGRpMHlhQzA0UXpNNExqa3NOeklzTXpnc056SXVPU3d6T0N3M05Ib2dUVFF3TERnMmFERTBMalpzTUM0M0xESklNakl1T0d3d0xqY3RNa2cwTUhvZ1RUVXpMamdzT1RCSU1qUXVNbXd6TGpZc016aG9Nakl1TkV3MU15NDRMRGt3ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE1qa3NPVEpvTFRaMk5HZ3ROblkwYUMwMmRqRTBhQzB6YkRBdU1pd3liRE11T0N3ek1tZ3pObXd6TGpndE16SnNNQzR5TFRKb0xUTjJMVEUwYUMwMmRpMDBhQzAyZGkwMFNERXlPWG9nVFRFME55d3hNVFIyTFRFeWFDMDBkalJvTTNZNFNERTBOd29KQ1FsNklFMHhORFFzTVRFMGRpMDJhQzAwZGpaSU1UUTBlaUJOTVRNNExERXlNSFl0TVRab0xUUjJNVGt1TWtNeE16VXVOaXd4TWpJdU5Td3hNemNzTVRJeExqUXNNVE00TERFeU1Ib2dUVEV6TWl3eE1qTXVPRll4TURCb0xUUjJNak11T0FvSkNRbERNVEk1TGpNc01USTBMakVzTVRNd0xqY3NNVEkwTGpFc01UTXlMREV5TXk0NGVpQk5NVEkyTERFeU15NHlWakV3TkdndE5IWXhOa014TWpNc01USXhMalFzTVRJMExqUXNNVEl5TGpVc01USTJMREV5TXk0eWVpQk5NVEl3TERFeE5IWXRObWd0TkhZMlNERXlNSG9nVFRFeE5Dd3hNVFIyTFRob013b0pDUWwyTFRSb0xUUjJNVEpJTVRFMGVpQk5NVFF4TERFd01uWXROR2d0TkhZMGFETjJOR2d4VmpFd01ub2dUVEV6TlN3eE1ESjJMVGhvTFRSMk5HZ3pkalJJTVRNMWVpQk5NVEk1TERrNGRpMDBhQzAwZGpob01YWXRORWd4TWpsNklFMHhNak1zTVRBeWRpMDBhQzAwZGpob01YWXRORWd4TWpONkNna0pDU0JOTVRNd0xERXlObU0xTGprc01Dd3hNQzQ1TFRRdU1pd3hNUzQ0TFRFd2FEY3VPV3d0TXk0MUxETXdhQzB6TWk0MGJDMHpMalV0TXpCb055NDVRekV4T1M0eExERXlNUzQ0TERFeU5DNHhMREV5Tml3eE16QXNNVEkyZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweU1USXNPRFoyTW1ndE5IWXRNa2d5TVRKNklFMHlNVFlzT0Rab0xUSjJNbWd5VmpnMmVpQk5NVGsyTERnMlRERTVOaXc0Tm1NdE1pNDNMREF1TnkwMExqVXNNeTR6TFRNdU9TdzJZekF1TkN3eExqZ3NNUzQyTERNdU1pd3pMak1zTXk0NENna0pDV3d3TGpFc01DNHliREV1TVN3MExqVmpNQzR5TERBdU9Td3hMREV1TlN3eExqa3NNUzQxYkRBc01HdzNMREkwTGpaak1DNHlMREF1T1N3eExERXVOQ3d4TGprc01TNDBhRFZqTUM0NUxEQXNNUzQzTFRBdU5pd3hMamt0TVM0MGJEY3RNalF1Tm1Nd0xqa3NNQ3d4TGpjdE1DNDJMREV1T1MweExqVUtDUWtKYkRFdU1TMDBMalZzTUM0eExUQXVNbU15TGpZdE1DNDVMRFF1TVMwekxqY3NNeTR5TFRZdU0yTXRNQzQyTFRFdU55MHlMVE10TXk0NExUTXVNMVk0Tm1Nd0xUY3VOeTAyTGpNdE1UUXRNVFF0TVRSVE1UazJMRGM0TGpNc01UazJMRGcyZWlCTk1qQXdMRGcyYURaMk1tZ3RPUW9KQ1FsakxURXVOeXd3TFRNc01TNHpMVE1zTTNNeExqTXNNeXd6TEROb01qWmpNUzQzTERBc015MHhMak1zTXkwemN5MHhMak10TXkwekxUTm9MVE4yTFRKb01tTXdMVFl1TmkwMUxqUXRNVEl0TVRJdE1USnpMVEV5TERVdU5DMHhNaXd4TWtneU1EQjZJRTB4T1RndU5pd3hNREJzTFRFdE5HZ3lOQzQ1Q2drSkNXd3RNU3cwU0RFNU9DNDJlaUJOTWpBM0xqVXNNVEkyYkMwMkxqa3RNalJvTVRndU4yd3ROaTQ1TERJMFNESXdOeTQxZWlCTk1UVXdMREkwTW1NeE1pNHlMREFzTWpJdE9TNDRMREl5TFRJeWN5MDVMamd0TWpJdE1qSXRNakp6TFRJeUxEa3VPQzB5TWl3eU1nb0pDUWxUTVRNM0xqZ3NNalF5TERFMU1Dd3lOREo2SUUweE56UXNNakl3WXpBc01UTXVNeTB4TUM0M0xESTBMVEkwTERJMGN5MHlOQzB4TUM0M0xUSTBMVEkwYkRBc01HTXdMVEV6TGpNc01UQXVOeTB5TkN3eU5DMHlORk14TnpRc01qQTJMamNzTVRjMExESXlNSG9nVFRFME5TNDJMREl6Tnk0M0Nna0pDV3d5TFRBdU9XTXhMalV0TUM0MkxETXVNaTB3TGpZc05DNDNMREJzTWl3d0xqbGpNQzQ1TERBdU5Dd3lMREFzTWk0MUxUQXVPR3d4TGpFdE1TNDVZekF1T0MweExqUXNNaTR5TFRJdU5Dd3pMamd0TWk0NGJESXVNUzB3TGpWak1TMHdMaklzTVM0MkxURXVNU3d4TGpVdE1pNHhiQzB3TGpJdE1pNHlDZ2tKQ1dNdE1DNHhMVEV1Tml3d0xqUXRNeTR5TERFdU5DMDBMalZzTVM0MExURXVOMk13TGpjdE1DNDRMREF1TnkweExqa3NNQzB5TGpac0xURXVOQzB4TGpkakxURXVNUzB4TGpJdE1TNDJMVEl1T0MweExqUXROQzQxYkRBdU1pMHlMakpqTUM0eExURXRNQzQyTFRFdU9TMHhMall0TWk0eENna0pDV3d0TWk0eExUQXVOV010TVM0MkxUQXVOQzB6TFRFdU5DMHpMamd0TWk0NGJDMHhMakV0TVM0NVl5MHdMalV0TUM0NUxURXVOaTB4TGpJdE1pNDFMVEF1T0d3dE1pd3dMamxqTFRFdU5Td3dMall0TXk0eUxEQXVOaTAwTGpjc01Hd3RNaTB3TGpsakxUQXVPUzB3TGpRdE1pd3dMVEl1TlN3d0xqZ0tDUWtKYkMweExESXVNV010TUM0NExERXVOQzB5TGpJc01pNDBMVE11T0N3eUxqaHNMVEl1TVN3d0xqVmpMVEVzTUM0eUxURXVOaXd4TGpFdE1TNDFMREl1TVd3d0xqSXNNaTR5WXpBdU1Td3hMall0TUM0MExETXVNaTB4TGpRc05DNDFiQzB4TGpRc01TNDNDZ2tKQ1dNdE1DNDNMREF1T0Mwd0xqY3NNUzQ1TERBc01pNDJiREV1TkN3eExqZGpNUzR4TERFdU1pd3hMallzTWk0NExERXVOQ3cwTGpWc0xUQXVNaXd5TGpKakxUQXVNU3d4TERBdU5pd3hMamtzTVM0MkxESXVNV3d5TGpFc01DNDFZekV1Tml3d0xqUXNNeXd4TGpRc015NDRMREl1T0d3eExqRXNNUzQ1Q2drSkNVTXhORE11Tml3eU16Y3VPQ3d4TkRRdU55d3lNemd1TVN3eE5EVXVOaXd5TXpjdU4wd3hORFV1Tml3eU16Y3VOM29nVFRFME9DNDBMREl6T0M0M1l6RXRNQzQwTERJdU1TMHdMalFzTXk0eExEQnNNaXd3TGpsak1TNDRMREF1T0N3MExEQXVNU3cxTFRFdU5td3hMakV0TVM0NUNna0pDV013TGpZdE1DNDVMREV1TlMweExqWXNNaTQxTFRFdU9Hd3lMakV0TUM0MVl6RXVPUzB3TGpRc015NHpMVEl1TXl3ekxqRXROQzR5YkMwd0xqSXRNaTR5WXkwd0xqRXRNUzR4TERBdU15MHlMaklzTVMwemJERXVOQzB4TGpkak1TNHpMVEV1TlN3eExqTXRNeTQzTERBdE5TNHliQzB4TGpRdE1TNDNDZ2tKQ1dNdE1DNDNMVEF1T0MweExqRXRNUzQ1TFRFdE0yd3dMakl0TWk0eVl6QXVNaTB5TFRFdU1TMHpMamd0TXk0eExUUXVNbXd0TWk0eExUQXVOV010TVM0eExUQXVNaTB5TFRBdU9TMHlMalV0TVM0NGJDMHhMakV0TVM0NVl5MHhMVEV1TnkwekxqSXRNaTQwTFRVdE1TNDJiQzB5TERBdU9Rb0pDUWxqTFRFc01DNDBMVEl1TVN3d0xqUXRNeTR4TERCc0xUSXRNQzQ1WXkweExqZ3RNQzQ0TFRRdE1DNHhMVFVzTVM0MmJDMHhMakVzTVM0NVl5MHdMallzTUM0NUxURXVOU3d4TGpZdE1pNDFMREV1T0d3dE1pNHhMREF1TldNdE1TNDVMREF1TkMwekxqTXNNaTR6TFRNdU1TdzBMakpzTUM0eUxESXVNZ29KQ1Fsak1DNHhMREV1TVMwd0xqTXNNaTR5TFRFc00yd3RNUzQwTERFdU4yTXRNUzR6TERFdU5TMHhMak1zTXk0M0xEQXNOUzR5YkRFdU5Dd3hMamRqTUM0M0xEQXVPQ3d4TGpFc01TNDVMREVzTTJ3dE1DNHlMREl1TW1NdE1DNHlMRElzTVM0eExETXVPQ3d6TGpFc05DNHliREl1TVN3d0xqVUtDUWtKWXpFdU1Td3dMaklzTWl3d0xqa3NNaTQxTERFdU9Hd3hMakVzTVM0NVl6RXNNUzQzTERNdU1pd3lMalFzTlN3eExqWk1NVFE0TGpRc01qTTRMamQ2SUUweE5USXNNakEzWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbFRNVFV5TERJd055NDJMREUxTWl3eU1EZDZJRTB4TlRnc01qQTVZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qQTVMallzTVRVNExESXdPWG9nVFRFME55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNUW9KQ1FsekxUQXVOQ3d4TFRFc01WTXhORGNzTWpFd0xqWXNNVFEzTERJeE1Ib2dUVEUwTVN3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTVN3eU1UQXVOaXd4TkRFc01qRXdlaUJOTVRRMExESXdOV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKY3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBOQ3d5TURVdU5pd3hORFFzTWpBMWVpQk5NVE0yTERJeE0yTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE0yTERJeE15NDJMREV6Tml3eU1UTjZJRTB4TXprc01qRTVDZ2tKQ1dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTVMREl4T1M0MkxERXpPU3d5TVRsNklFMHhNemtzTWpJMVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhNemtzTWpJMUxqWXNNVE01TERJeU5Yb0tDUWtKSUUweE5ETXNNak15WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5ETXNNak15TGpZc01UUXpMREl6TW5vZ1RURTBPQ3d5TXpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eENna0pDVk14TkRnc01qTXdMallzTVRRNExESXpNSG9nVFRFMU15d3lNelJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFMU15d3lNelF1Tml3eE5UTXNNak0wZWlCTk1UVTNMREl5T0dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Q2drSkNYTXRNQzQwTERFdE1Td3hVekUxTnl3eU1qZ3VOaXd4TlRjc01qSTRlaUJOTVRZekxESXlOR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRZekxESXlOQzQyTERFMk15d3lNalI2SUUweE5Ua3NNakl4WXpBdE1DNDJMREF1TkMweExERXRNUW9KQ1Fsek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFU1TERJeU1TNDJMREUxT1N3eU1qRjZJRTB4TmpNc01qRTRZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TmpNc01qRTRMallzTVRZekxESXhPSG9nVFRFMU9Dd3lNVFFLQ1FrSll6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpFMExqWXNNVFU0TERJeE5Ib2dUVEV6TkN3eU1qQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekV6TkN3eU1qQXVOaXd4TXpRc01qSXdlZ29KQ1FrZ1RURTFNQ3d5TWpWak1pNDRMREFzTlMweUxqSXNOUzAxY3kweUxqSXROUzAxTFRWekxUVXNNaTR5TFRVc05WTXhORGN1TWl3eU1qVXNNVFV3TERJeU5Yb2dUVEUxTnl3eU1qQmpNQ3d6TGprdE15NHhMRGN0Tnl3M2N5MDNMVE11TVMwM0xUZHpNeTR4TFRjc055MDNDZ2tKQ1ZNeE5UY3NNakUyTGpFc01UVTNMREl5TUhvZ1RUSTBNeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lORE42SUUweU5qSXNNakF3WXpBdE1DNDJMREF1TkMweExERXRNV2d5Q2drSkNXTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa015TmpJdU5Dd3lNREVzTWpZeUxESXdNQzQyTERJMk1pd3lNREI2SUUweU5EZ3NNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRFS0NRa0pTREkwT0hvZ1RUSXlNeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lNak42SUUweU1qZ3NNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURJS0NRa0pZekF1Tml3d0xERXRNQzQwTERFdE1YTXRNQzQwTFRFdE1TMHhTREl5T0hvZ1RUSXpOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNak0zTGpRc01qRXhMREl6Tnl3eU1UQXVOaXd5TXpjc01qRXdlZ29KQ1FrZ1RUSTFNaXd5TVRGak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNalV5TGpRc01qRXlMREkxTWl3eU1URXVOaXd5TlRJc01qRXhlaUJOTWpZMExESXdPV010TUM0MkxEQXRNU3d3TGpRdE1Td3hjekF1TkN3eExERXNNV2d5Q2drSkNXTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lOalI2SUUweU5UTXNNVGsxWXpBdE1DNDJMREF1TkMweExERXRNV2d5WXpBdU5pd3dMREVzTUM0MExERXNNWE10TUM0MExERXRNU3d4YUMweVF6STFNeTQwTERFNU5pd3lOVE1zTVRrMUxqWXNNalV6TERFNU5Yb0tDUWtKSUUweU16UXNNVGsxWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU1qTTBlaUJOTWpRd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1Fsb0xUSkRNalF3TGpRc01qQXhMREkwTUN3eU1EQXVOaXd5TkRBc01qQXdlaUJOTWpFMUxESXhOV013TFRBdU5Td3dMVEF1T1N3d0xURXVOR010TWk0MUxURXVNUzB6TGpjdE5DMHlMall0Tmk0Mll6QXVNaTB3TGpVc01DNDFMVEVzTUM0NUxURXVOR010TUM0NUxUSXNNQzAwTGpJc01TNDVMVFV1TWdvSkNRbGpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNR013TGpRdE1DNDFMREF1T1Mwd0xqa3NNUzQxTFRFdU1XTXdMalV0TWk0M0xETXVNUzAwTGpVc05TNDRMVFF1TVdNd0xqY3NNQzR4TERFdU5Dd3dMalFzTWl3d0xqaGpOUzR6TFRNdU9Dd3hNUzQyTFRVdU9Td3hPQzR5TFRVdU9Rb0pDUWxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqbGpNaTR6TFRFdU5pdzFMalF0TVN3M0xERXVNMk13TGpRc01DNDJMREF1Tnl3eExqTXNNQzQ0TERKak1DNDJMREF1TWl3eExqRXNNQzQyTERFdU5Td3hMakZqTWk0M0xEQXVPQ3cwTGpJc015NDFMRE11TkN3MkxqSnNNQ3d3Q2drSkNXTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMakpqTVM0NUxESXNNUzQ0TERVdU1pMHdMaklzTjJNdE1DNDBMREF1TkMwd0xqa3NNQzQzTFRFdU5Td3hZekFzTUM0MUxEQXNNQzQ1TERBc01TNDBkakZvTFRZeWRpMHhTREl4TlhvZ1RUSXhOUzQ0TERJd055NDRDZ2tKQ1dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMalpqTFRFdU15MHhMVEV1TmkweUxqa3RNQzQyTFRRdU1td3dMREJETWpFMUxESXdOeTQxTERJeE5TNDBMREl3Tnk0M0xESXhOUzQ0TERJd055NDRUREl4TlM0NExESXdOeTQ0ZWlCTk1qRTNMak1zTWpBekxqSUtDUWtKWXkwd0xqUXNNQzQ1TFRBdU55d3hMamd0TVN3eUxqZGpMVEV0TUM0MExURXVOaTB4TGpVdE1TNHpMVEl1TldNd0xqSXRNQzQxTERBdU5pMHdMamtzTVM0eExURXVNa015TVRZdU5Td3lNREl1Tml3eU1UWXVPU3d5TURJdU9Td3lNVGN1TXl3eU1ETXVNa3d5TVRjdU15d3lNRE11TW5vS0NRa0pJRTB5TVRrdU5pd3hPVGd1TjJNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETWpFNExqTXNNVGszTGpZc01qRTRMamtzTVRrNExqTXNNakU1TGpZc01UazRMamNLQ1FrSlRESXhPUzQyTERFNU9DNDNlaUJOTWpJd0xqZ3NNVGszWXpBdU5DMHdMalVzTUM0M0xURXNNUzR4TFRFdU5XTXRNQzR6TFRBdU5TMHdMamt0TUM0M0xURXVOQzB3TGpSekxUQXVOeXd3TGprdE1DNDBMREV1TkVNeU1qQXVNeXd4T1RZdU55d3lNakF1TlN3eE9UWXVPU3d5TWpBdU9Dd3hPVGNLQ1FrSlRESXlNQzQ0TERFNU4zb2dUVEl5Tmk0eExERTVNUzR5WXkweExEQXVPUzB5TERFdU9DMHlMamtzTWk0NFl5MHdMak10TUM0ekxUQXVOeTB3TGpZdE1TNHhMVEF1T0dNd0xqUXRNUzQyTERJdU1TMHlMalVzTXk0M0xUSXVNUW9KQ1FsRE1qSTFMamtzTVRreExqRXNNakkyTERFNU1TNHlMREl5Tmk0eExERTVNUzR5VERJeU5pNHhMREU1TVM0eWVpQk5Nalk0TGpnc01UazBZeTB3TGprdE1TMHhMamt0TVM0NUxUSXVPUzB5TGpoak1TNDFMVEF1Tml3ekxqTXNNQzR4TERNdU9Td3hMamNLQ1FrSll6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME15TmprdU5Td3hPVE11TkN3eU5qa3VNU3d4T1RNdU5pd3lOamd1T0N3eE9UUk1Nalk0TGpnc01UazBlaUJOTWpjd0xqRXNNVGsxTGpWak1DNDBMREF1TlN3d0xqZ3NNU3d4TGpFc01TNDBDZ2tKQ1dNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbk10TUM0M0xUQXVPUzB4TGpJdE1DNDRRekkzTUM0MUxERTVOUzR4TERJM01DNHpMREU1TlM0ekxESTNNQzR4TERFNU5TNDFlaUJOTWpjekxqa3NNakF4TGpSakxUQXVOUzB3TGprdE1TMHhMamd0TVM0MUxUSXVOd29KQ1Fsak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeU56UXVNaXd5TURFdU1Td3lOelFzTWpBeExqSXNNamN6TGprc01qQXhMalI2SUUweU56VXVOaXd5TURVdU9XTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzQ2drSkNXTXdMalF0TUM0ekxEQXVPQzB3TGpZc01TNHlMVEZqTVN3d0xqVXNNUzQwTERFdU55d3hMREl1TjBNeU56WXVOaXd5TURVdU15d3lOell1TWl3eU1EVXVOeXd5TnpVdU5pd3lNRFV1T1hvZ1RUSTNOaTQ0TERJeE1TNDBZeTB3TGpFdE1TNHlMVEF1TkMweUxqUXRNQzQyTFRNdU5nb0pDUWxqTUM0MUxUQXVNU3d3TGprdE1DNDBMREV1TWkwd0xqWkRNamM0TGpRc01qQTRMalVzTWpjNExqRXNNakV3TGpRc01qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSNklFMHlOelVzTWpFMFl5MHdMalV0TVRZdE1UTXVPUzB5T0M0MkxUSTVMamt0TWpndU1Rb0pDUWxqTFRFMUxqTXNNQzQxTFRJM0xqWXNNVEl1T0MweU9DNHhMREk0TGpGSU1qYzFUREkzTlN3eU1UUjZJRTAzTWk0ekxERTVPQzR4WXkwd0xqSXRNQzR6TFRBdU15MHdMamN0TUM0ekxURXVNWFl0TVRKb0xUSjJNVEpqTUN3eUxqSXNNUzQ0TERRc05DdzBDZ2tKQ1dNeExqSXNNQ3d5TGpNdE1DNDFMRE11TVMweExqUmpNQzQyTFRBdU55d3dMamt0TVM0MkxEQXVPUzB5TGpWMkxURXlhQzB5ZGpFeVl6QXNNUzR4TFRBdU9Td3lMVElzTW13d0xEQkROek11TXl3eE9Ua3NOekl1Tnl3eE9UZ3VOeXczTWk0ekxERTVPQzR4ZWlCTk56VXNNVGMyQ2drSkNXTXdMalFzTUN3d0xqY3NNQ3d4TGpFdE1DNHhZekF1TlN3eUxqSXNNaTQyTERNdU5TdzBMamdzTTJNd0xqVXRNQzR4TERFdE1DNHpMREV1TkMwd0xqWmpNUzR4TERJdU1Td3hMamNzTkM0MExERXVOeXcyTGpkMk1qUmpNQ3d6TGpNdE1pNDNMRFl0Tml3MmFDMHpkamtLQ1FrSll6QXNNaTQ0TFRJdU1pdzFMVFVzTlhNdE5TMHlMakl0TlMwMWRpMDVhQzB6WXkwekxqTXNNQzAyTFRJdU55MDJMVFoyTFRJMFl6QXROeTQzTERZdU15MHhOQ3d4TkMweE5FTTNNQ3d4TnpNdU9DdzNNaTR5TERFM05pdzNOU3d4TnpaNklFMDFPQ3d4T1RGMk1USUtDUWtKWXpBc01DNDRMREF1TlN3eExqVXNNUzR5TERFdU9HTXdMamtzTUM0MExERXVPU3d3TGpFc01pNDBMVEF1TjJNd0xqSXRNQzR6TERBdU15MHdMamNzTUM0ekxURXVNWFl0TVRKb01uWXhNbU13TERJdU1pMHhMamNzTkMwekxqa3NOR010TUM0MUxEQXRNUzB3TGpFdE1TNDBMVEF1TWdvSkNRbGpMVEF1TWkwd0xqRXRNQzQwTFRBdU1pMHdMamN0TUM0emRqSXVOV013TERJdU1pd3hMamdzTkN3MExEUm9NVFpqTWk0eUxEQXNOQzB4TGpnc05DMDBkaTB5TkdNd0xURXVOUzB3TGpJdE1pNDVMVEF1TnkwMExqSmpMVEF1TkN3d0xqRXRNQzQ1TERBdU1pMHhMak1zTUM0eUNna0pDV010TWk0eExEQXROQzR4TFRFdU1TMDFMakl0TTJNdE15MHdMakV0TlM0MkxUSXROaTQxTFRRdU9VTTJNaTQwTERFM05DdzFPQ3d4Tnprc05UZ3NNVGcxVmpFNU1Yb2dUVFkzTERJeE5YWTVZekFzTVM0M0xERXVNeXd6TERNc00zTXpMVEV1TXl3ekxUTjJMVGxJTmpkNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRTMHhOeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNVGQ2SUUweUxESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NZ29KQ1Fsak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGSU0wTXlMalFzTWpBeExESXNNakF3TGpZc01pd3lNREI2SUUwdE1USXNNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxURXllZ29KQ1FrZ1RTMHpOeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNemQ2SUUwdE16SXNNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Q2drSkNYTXRNQzQwTFRFdE1TMHhTQzB6TW5vZ1RTMHlNeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVEl5TGpZc01qRXhMVEl6TERJeE1DNDJMVEl6TERJeE1Ib2dUUzA0TERJeE1XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0phREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUY3VOaXd5TVRJdE9Dd3lNVEV1TmkwNExESXhNWG9nVFRRc01qQTVZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTkhvS0NRa0pJRTB0Tnl3eE9UVmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRZdU5pd3hPVFl0Tnl3eE9UVXVOaTAzTERFNU5Yb2dUUzB5Tml3eE9UVmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NZ29KQ1Fsak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxUSTJlaUJOTFRJd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNdE1Ua3VOaXd5TURFdE1qQXNNakF3TGpZdE1qQXNNakF3ZWlCTkxUUTFMREl4TlFvSkNRbGpNQzB3TGpVc01DMHdMamtzTUMweExqUmpMVEl1TlMweExqRXRNeTQzTFRRdE1pNDJMVFl1Tm1Nd0xqSXRNQzQxTERBdU5TMHhMREF1T1MweExqUmpMVEF1T1MweUxEQXROQzR5TERFdU9TMDFMakpqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUFvSkNRbGpNQzQwTFRBdU5Td3dMamt0TUM0NUxERXVOUzB4TGpGak1DNDFMVEl1Tnl3ekxqRXROQzQxTERVdU9DMDBMakZqTUM0M0xEQXVNU3d4TGpRc01DNDBMRElzTUM0NFl6VXVNeTB6TGpnc01URXVOaTAxTGprc01UZ3VNaTAxTGpsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamtLQ1FrSll6SXVNeTB4TGpZc05TNDBMVEVzTnl3eExqTmpNQzQwTERBdU5pd3dMamNzTVM0ekxEQXVPQ3d5WXpBdU5pd3dMaklzTVM0eExEQXVOaXd4TGpVc01TNHhZekl1Tnl3d0xqZ3NOQzR5TERNdU5Td3pMalFzTmk0eWJEQXNNR014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpJS0NRa0pZekV1T1N3eUxERXVPQ3cxTGpJdE1DNHlMRGRqTFRBdU5Dd3dMalF0TUM0NUxEQXVOeTB4TGpVc01XTXdMREF1TlN3d0xEQXVPU3d3TERFdU5IWXhhQzAyTW5ZdE1VZ3RORFY2SUUwdE5EUXVNaXd5TURjdU9HTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpZS0NRa0pZeTB4TGpNdE1TMHhMall0TWk0NUxUQXVOaTAwTGpKc01Dd3dReTAwTlN3eU1EY3VOUzAwTkM0MkxESXdOeTQzTFRRMExqSXNNakEzTGpoTUxUUTBMaklzTWpBM0xqaDZJRTB0TkRJdU55d3lNRE11TW1NdE1DNDBMREF1T1Mwd0xqY3NNUzQ0TFRFc01pNDNDZ2tKQ1dNdE1TMHdMalF0TVM0MkxURXVOUzB4TGpNdE1pNDFZekF1TWkwd0xqVXNNQzQyTFRBdU9Td3hMakV0TVM0eVF5MDBNeTQxTERJd01pNDJMVFF6TGpFc01qQXlMamt0TkRJdU55d3lNRE11TWt3dE5ESXVOeXd5TURNdU1ub2dUUzAwTUM0MExERTVPQzQzQ2drSkNXTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRExUUXhMamNzTVRrM0xqWXROREV1TVN3eE9UZ3VNeTAwTUM0MExERTVPQzQzZWlCTkxUTTVMaklzTVRrM0Nna0pDV013TGpNdE1DNDFMREF1TnkweExERXVNUzB4TGpWakxUQXVNeTB3TGpVdE1DNDVMVEF1TnkweExqUXRNQzQwY3kwd0xqY3NNQzQ1TFRBdU5Dd3hMalJETFRNNUxqY3NNVGsyTGpjdE16a3VOU3d4T1RZdU9TMHpPUzR5TERFNU4wd3RNemt1TWl3eE9UZDZJRTB0TXpNdU9Td3hPVEV1TWdvSkNRbGpMVEVzTUM0NUxUSXNNUzQ0TFRJdU9Td3lMamhqTFRBdU15MHdMak10TUM0M0xUQXVOaTB4TGpFdE1DNDRZekF1TkMweExqWXNNaTR4TFRJdU5Td3pMamN0TWk0eFF5MHpOQzR4TERFNU1TNHhMVE0wTERFNU1TNHlMVE16TGprc01Ua3hMakpNTFRNekxqa3NNVGt4TGpKNklFMDRMamdzTVRrMENna0pDV010TUM0NUxURXRNUzQ1TFRFdU9TMHlMamt0TWk0NFl6RXVOUzB3TGpZc015NHpMREF1TVN3ekxqa3NNUzQzWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTTVMalVzTVRrekxqUXNPUzR4TERFNU15NDJMRGd1T0N3eE9UUk1PQzQ0TERFNU5Ib2dUVEV3TGpFc01UazFMalVLQ1FrSll6QXVOQ3d3TGpVc01DNDRMREVzTVM0eExERXVOR013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1tTXRNQzR4TFRBdU5TMHdMamN0TUM0NUxURXVNaTB3TGpoRE1UQXVOU3d4T1RVdU1Td3hNQzR6TERFNU5TNHpMREV3TGpFc01UazFMalY2SUUweE15NDVMREl3TVM0MENna0pDV010TUM0MUxUQXVPUzB3TGprdE1TNDRMVEV1TlMweUxqZGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXhOQzR5TERJd01TNHhMREUwTERJd01TNHlMREV6TGprc01qQXhMalI2SUUweE5TNDNMREl3TlM0NUNna0pDV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M1l6QXVOQzB3TGpNc01DNDRMVEF1Tml3eExqSXRNV014TERBdU5Td3hMalFzTVM0M0xERXNNaTQzUXpFMkxqWXNNakExTGpNc01UWXVNaXd5TURVdU55d3hOUzQzTERJd05TNDVlaUJOTVRZdU9Dd3lNVEV1TkFvSkNRbGpMVEF1TVMweExqSXRNQzQwTFRJdU5DMHdMall0TXk0Mll6QXVOUzB3TGpFc01DNDVMVEF1TkN3eExqSXRNQzQyUXpFNExqUXNNakE0TGpVc01UZ3VNU3d5TVRBdU5Dd3hOaTQ0TERJeE1TNDBUREUyTGpnc01qRXhMalJNTVRZdU9Dd3lNVEV1TkhvZ1RURTFMREl4TkFvSkNRbGpMVEF1TlMweE5pMHhNeTQ1TFRJNExqWXRNamt1T1MweU9DNHhZeTB4TlM0ekxEQXVOUzB5Tnk0MkxERXlMamd0TWpndU1Td3lPQzR4U0RFMVRERTFMREl4TkhvaUx6NEtDVHd2Wno0S1BDOW5QZ284TDNOMlp6NEsnO1xuJGNoYXQtYmctZGFyazogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJMUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhacFpYZENiM2c5SWpBZ01DQXlOakFnTWpZd0lpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5qQWdNall3T3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStDanh6ZEhsc1pTQjBlWEJsUFNKMFpYaDBMMk56Y3lJK0Nna3VjM1F3ZTJacGJHd3RjblZzWlRwbGRtVnViMlJrTzJOc2FYQXRjblZzWlRwbGRtVnViMlJrTzJacGJHdzZJekUzTVVFeU5EdDlDand2YzNSNWJHVStDanhuUGdvSlBHY2dhV1E5SW1rdGJHbHJaUzFtYjI5a0lqNEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qUXVOQ3d4Tm1Nd0xqSXNNQzQyTERBdU5Dd3hMak1zTUM0MUxESm9MVE11TjJ3eExqSXNNaTR6YkRBdU5Td3dMamxzTFRBdU1pd3dMakZXTWpoak1pNHlMREV1Tnl3eUxqY3NOQzQ0TERFc053b0pDUWxqTFRBdU9Dd3hMVEV1T1N3eExqY3RNeTR5TERFdU9WWXpOMk10TUM0NUxETXVOUzAwTGpFc05pMDNMamdzTm1ndE1qQmpMVE11Tml3d0xUWXVPQzB5TGpVdE55NDNMVFoyTFRBdU1XTXRNaTQzTFRBdU5DMDBMall0TXkwMExqSXROUzQzWXpBdU1pMHhMak1zTUM0NUxUSXVOU3d4TGprdE15NHlDZ2tKQ1hZdE5pNDRiQzB3TGpndE1TNDJiQzB3TGpRdE1DNDViREF1T1Mwd0xqUk1MVEUzTERFNGFDMHpReTB4Tnk0eUxEVXVOaTAwTGprdE1pNHlMRGN1TlN3d0xqWkRNVFV1TkN3eUxqTXNNakV1T1N3NExqSXNNalF1TkN3eE5ub2dUUzB4TWk0MExERTRZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4Q2drSkNXd3RNeTR4TERFdU5td3dMamtzTVM0NGJERXVNeTB3TGpkak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRJdU1pMHhMakZqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpFS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4WXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFF6Y3VOQ3d5TWl3M0xqY3NNaklzT0N3eU1TNDViREl1T1MweExqTmpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak1LQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d6TGpFdE1TNDFiQzB3TGprdE1TNDRiQzB4TGpRc01DNDNZeTB3TGpnc01DNDBMVEV1Tnl3d0xqUXRNaTQyTERBdU1Xd3RNaTQ0TFRFdU1rTXhNaTR6TERFNExERXlMaklzTVRnc01USXVNU3d4T0d3d0xEQUtDUWtKWXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVV3MExERTRMakZETXk0NUxERTRMRE11Tnl3eE9Dd3pMallzTVRoc01Dd3dZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4VERFc01Ua3VNZ29KQ1FsakxUQXVPQ3d3TGpRdE1TNDRMREF1TkMweUxqY3NNRXd0TkN3eE9DNHhReTAwTGpFc01UZ3ROQzR6TERFNExUUXVOQ3d4T0d3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZNTFRjc01Ua3VNbU10TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eENna0pDVU10TVRJdU1Td3hPQzB4TWk0ekxERTRMVEV5TGpRc01UaE1MVEV5TGpRc01UaE1MVEV5TGpRc01UaDZJRTB0TVRJdU5Dd3hObWd0TkM0NVF5MHhNeTQxTERVdU1TMHhMalV0TUM0M0xEa3VOU3d6TGpKak5pd3lMakVzTVRBdU55dzJMamdzTVRJdU9Dd3hNaTQ0YUMweUxqRnNMVEF1TVMwd0xqRUtDUWtKVERFNUxqa3NNVFpJTFRFeUxqUk1MVEV5TGpRc01UWjZJRTB4Tnk0NUxESXpMamRzTVM0MExUQXVOMmd4TGpOMk1tZ3RNeloyTFRFdU1Xd3dMak10TUM0eWJERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRJTFRNS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3VERJdU15d3lNMmd5TGpac01TNDBMREF1TjJNd0xqY3NNQzQwTERFdU55d3dMalFzTWk0MUxEQnNNUzQzTFRBdU4yZ3pMakpzTVM0M0xEQXVOME14Tmk0eUxESTBMakVzTVRjdU1Td3lOQzR4TERFM0xqa3NNak11TjNvS0NRa0pJRTB0TVRNdU9Dd3lOMnd4Tmk0MExEUXVPVXd4T0M0NUxESTNTQzB4TXk0NGVpQk5MVEUwTGpRc01qbG9NQzR6YkRFMkxqY3NOV3d4Tmk0M0xUVm9NQzR6WXpFdU55d3dMRE1zTVM0ekxETXNNM010TVM0ekxETXRNeXd6YUMwek5HTXRNUzQzTERBdE15MHhMak10TXkwekNna0pDVU10TVRjdU5Dd3pNQzR6TFRFMkxqRXNNamt0TVRRdU5Dd3lPWG9nVFMweE15NHhMRE0zWXpBdU9Dd3lMalFzTXk0eExEUXNOUzQzTERSb01qQmpNaTQxTERBc05DNDRMVEV1Tml3MUxqY3RORU14T0M0eUxETTNMVEV6TGpFc016Y3RNVE11TVN3ek4zb2lMejRLQ1FrOGNHRjBhQ0JwWkQwaWNHRjBhRFpmWm1sc2JDMWpiM0I1SWlCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpnMExqUXNNVFpqTUM0eUxEQXVOaXd3TGpRc01TNHpMREF1TlN3eWFDMHpMamRzTVM0eUxESXVNMnd3TGpVc01DNDViQzB3TGpJc01DNHhWakk0WXpJdU1pd3hMamNzTWk0M0xEUXVPQ3d4TERjS0NRa0pZeTB3TGpnc01TMHhMamtzTVM0M0xUTXVNaXd4TGpsV016ZGpMVEF1T1N3ekxqVXROQzR4TERZdE55NDRMRFpvTFRJd1l5MHpMallzTUMwMkxqZ3RNaTQxTFRjdU55MDJkaTB3TGpGakxUSXVOeTB3TGpRdE5DNDJMVE10TkM0eUxUVXVOMk13TGpJdE1TNHpMREF1T1MweUxqVXNNUzQ1TFRNdU1nb0pDUWwyTFRZdU9Hd3RNQzQ0TFRFdU5td3RNQzQwTFRBdU9Xd3dMamt0TUM0MFRESTBNeXd4T0dndE0yTXlMamd0TVRJdU5Dd3hOUzR4TFRJd0xqSXNNamN1TlMweE55NDBRekkzTlM0MExESXVNeXd5T0RFdU9TdzRMaklzTWpnMExqUXNNVFo2SUUweU5EY3VOU3d4T0FvSkNRbGpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRNdU1Td3hMalpzTUM0NUxERXVPR3d4TGpNdE1DNDNZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4WXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eENna0pDV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTR5TFRFdU1XTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNDVMVEV1TXdvSkNRbGpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak5qTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JETXVNUzB4TGpWc0xUQXVPUzB4TGpoc0xURXVOQ3d3TGpkakxUQXVPQ3d3TGpRdE1TNDNMREF1TkMweUxqWXNNQzR4YkMweUxqZ3RNUzR5Q2drSkNXTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOQzB3TGpGc01Dd3dZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNV3d0TWk0ekxURXVNV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TlMwd0xqRnNNQ3d3Q2drSkNXTXRNQzR5TERBdE1DNHpMREF0TUM0MExEQXVNV3d0TWk0eUxERXVNV010TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eFl5MHdMakV0TUM0eExUQXVNeTB3TGpFdE1DNDBMVEF1TVd3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRJdU1pd3hMakVLQ1FrSll5MHdMamdzTUM0MExURXVPQ3d3TGpRdE1pNDNMREJzTFRJdU1pMHhMakZETWpRM0xqa3NNVGdzTWpRM0xqY3NNVGdzTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGg2SUUweU5EY3VOU3d4Tm1ndE5DNDVZek11T1MweE1DNDVMREUxTGprdE1UWXVOeXd5Tmk0NExURXlMamdLQ1FrSll6WXNNaTR4TERFd0xqY3NOaTQ0TERFeUxqZ3NNVEl1T0dndE1pNHhiQzB3TGpFdE1DNHhiQzB3TGpNc01DNHhTREkwTnk0MVRESTBOeTQxTERFMmVpQk5NamMzTGprc01qTXVOMnd4TGpRdE1DNDNhREV1TTNZeWFDMHpObll0TVM0eGJEQXVNeTB3TGpKc01TNDBMVEF1TjJneUxqWUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqY3NNQzQwTERJdU5pd3dMakZzTVM0M0xUQXVOd29KQ1Fsb015NHliREV1Tnl3d0xqZERNamMyTGpJc01qUXVNU3d5TnpjdU1Td3lOQzR4TERJM055NDVMREl6TGpkTU1qYzNMamtzTWpNdU4zb2dUVEkwTmk0eUxESTNiREUyTGpRc05DNDVUREkzT1N3eU4wZ3lORFl1TW5vZ1RUSTBOUzQxTERJNWFEQXVNMnd4Tmk0M0xEVnNNVFl1TnkwMWFEQXVNd29KQ1Fsak1TNDNMREFzTXl3eExqTXNNeXd6Y3kweExqTXNNeTB6TEROb0xUTTBZeTB4TGpjc01DMHpMVEV1TXkwekxUTlRNalF6TGprc01qa3NNalExTGpVc01qbDZJRTB5TkRZdU9Td3pOMk13TGpnc01pNDBMRE11TVN3MExEVXVOaXcwYURJd1l6SXVOU3d3TERRdU9DMHhMallzTlM0M0xUUUtDUWtKU0RJME5pNDVlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TlRrdU5Td3lNV010TVM0ekxUTXVOaTAwTGpjdE5pMDRMalV0Tm1ndE5ESmpMVE11T0N3d0xUY3VNaXd5TGpRdE9DNDFMRFpqTFRNdU15d3dMak10TlM0NExETXVNaTAxTGpVc05pNDFZekF1TWl3eUxqa3NNaTQyTERVdU1pdzFMalVzTlM0MUNna0pDV010TVM0M0xEUXVOeXd3TGpnc09TNDRMRFV1TkN3eE1TNDFZekVzTUM0ekxESXNNQzQxTERNc01DNDFhRFF5WXpVc01DdzVMVFFzT1MwNVl6QXRNUzB3TGpJdE1pNHhMVEF1TlMwell6TXVNeTB3TGpNc05TNDRMVE11TWl3MUxqVXROaTQxQ2drSkNVTXhOalF1Tnl3eU15NDJMREUyTWk0MExESXhMak1zTVRVNUxqVXNNakY2SUUweE5URXNNVGRvTFRReVl5MHlMamNzTUMwMUxqSXNNUzQyTFRZdU15dzBhRFUwTGpkRE1UVTJMaklzTVRndU5pd3hOVE11Tnl3eE55d3hOVEVzTVRkNklFMHhOREV1Tnl3ME13b0pDUWxqTWk0eExURXVOeXd6TGpNdE5DNHpMRE11TXkwM2FDMHlZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROQzR6WXpJdU1TMHhMamNzTXk0ekxUUXVNeXd6TGpNdE4yZ3RNbU13TERNdU9TMHpMakVzTnkwM0xEZG9MVFF1TTJNeUxqRXRNUzQzTERNdU15MDBMak1zTXk0ekxUZG9MVElLQ1FrSll6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE4yTXRNeTQ1TERBdE55MHpMakV0TnkwM2N6TXVNUzAzTERjdE4yZzBNbU16TGprc01DdzNMRE11TVN3M0xEZHpMVE11TVN3M0xUY3NOMGd4TkRFdU4zb2dUVEV3T1N3eU4yTXRNeXd3TFRVdU9Dd3hMalV0Tnk0MUxEUklNVEF4Q2drSkNXTXRNaTR5TERBdE5DMHhMamd0TkMwMGN6RXVPQzAwTERRdE5HZzFPR015TGpJc01DdzBMREV1T0N3MExEUnpMVEV1T0N3MExUUXNOR2d0TUM0MVl5MHhMamN0TWk0MUxUUXVOUzAwTFRjdU5TMDBTREV3T1hvaUx6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk16a3NNVEUxWXpRdU5Dd3dMRGd0TXk0MkxEZ3RPSE10TXk0MkxUZ3RPQzA0Y3kwNExETXVOaTA0TERoVE16UXVOaXd4TVRVc016a3NNVEUxZWlCTk5EVXNNVEEzWXpBc015NHpMVEl1Tnl3MkxUWXNObk10TmkweUxqY3ROaTAyQ2drSkNYTXlMamN0Tml3MkxUWlRORFVzTVRBekxqY3NORFVzTVRBM2VpQk5ORElzTnpoMkxUSm9PSFl0TmtnME1HTXRNaTR5TERBdE5Dd3hMamd0TkN3MGRqRXdTREl5YkMweExqTXNORXd5TUN3NU1HZ3lMakpzTXk0NExEUXdhREkyYkRNdU9DMDBNRWcxT0d3dE1DNDNMVEpNTlRZc09EUklOREpXTnpoNkNna0pDU0JOTXpnc056UjJNVEJvTWxZM05HZzRkaTB5YUMwNFF6TTRMamtzTnpJc016Z3NOekl1T1N3ek9DdzNOSG9nVFRRd0xEZzJhREUwTGpac01DNDNMREpJTWpJdU9Hd3dMamN0TWtnME1Ib2dUVFV6TGpnc09UQklNalF1TW13ekxqWXNNemhvTWpJdU5FdzFNeTQ0TERrd2VpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhNamtzT1RKb0xUWjJOR2d0Tm5ZMGFDMDJkakUwYUMwemJEQXVNaXd5YkRNdU9Dd3pNbWd6Tm13ekxqZ3RNekpzTUM0eUxUSm9MVE4yTFRFMGFDMDJkaTAwYUMwMmRpMDBTREV5T1hvZ1RURTBOeXd4TVRSMkxURXlhQzAwZGpSb00zWTRTREUwTndvSkNRbDZJRTB4TkRRc01URTBkaTAyYUMwMGRqWklNVFEwZWlCTk1UTTRMREV5TUhZdE1UWm9MVFIyTVRrdU1rTXhNelV1Tml3eE1qSXVOU3d4TXpjc01USXhMalFzTVRNNExERXlNSG9nVFRFek1pd3hNak11T0ZZeE1EQm9MVFIyTWpNdU9Bb0pDUWxETVRJNUxqTXNNVEkwTGpFc01UTXdMamNzTVRJMExqRXNNVE15TERFeU15NDRlaUJOTVRJMkxERXlNeTR5VmpFd05HZ3ROSFl4TmtNeE1qTXNNVEl4TGpRc01USTBMalFzTVRJeUxqVXNNVEkyTERFeU15NHllaUJOTVRJd0xERXhOSFl0Tm1ndE5IWTJTREV5TUhvZ1RURXhOQ3d4TVRSMkxUaG9Nd29KQ1FsMkxUUm9MVFIyTVRKSU1URTBlaUJOTVRReExERXdNbll0TkdndE5IWTBhRE4yTkdneFZqRXdNbm9nVFRFek5Td3hNREoyTFRob0xUUjJOR2d6ZGpSSU1UTTFlaUJOTVRJNUxEazRkaTAwYUMwMGRqaG9NWFl0TkVneE1qbDZJRTB4TWpNc01UQXlkaTAwYUMwMGRqaG9NWFl0TkVneE1qTjZDZ2tKQ1NCTk1UTXdMREV5Tm1NMUxqa3NNQ3d4TUM0NUxUUXVNaXd4TVM0NExURXdhRGN1T1d3dE15NDFMRE13YUMwek1pNDBiQzB6TGpVdE16Qm9OeTQ1UXpFeE9TNHhMREV5TVM0NExERXlOQzR4TERFeU5pd3hNekFzTVRJMmVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHlNVElzT0RaMk1tZ3ROSFl0TWtneU1USjZJRTB5TVRZc09EWm9MVEoyTW1neVZqZzJlaUJOTVRrMkxEZzJUREU1Tml3NE5tTXRNaTQzTERBdU55MDBMalVzTXk0ekxUTXVPU3cyWXpBdU5Dd3hMamdzTVM0MkxETXVNaXd6TGpNc015NDRDZ2tKQ1d3d0xqRXNNQzR5YkRFdU1TdzBMalZqTUM0eUxEQXVPU3d4TERFdU5Td3hMamtzTVM0MWJEQXNNR3czTERJMExqWmpNQzR5TERBdU9Td3hMREV1TkN3eExqa3NNUzQwYURWak1DNDVMREFzTVM0M0xUQXVOaXd4TGprdE1TNDBiRGN0TWpRdU5tTXdMamtzTUN3eExqY3RNQzQyTERFdU9TMHhMalVLQ1FrSmJERXVNUzAwTGpWc01DNHhMVEF1TW1NeUxqWXRNQzQ1TERRdU1TMHpMamNzTXk0eUxUWXVNMk10TUM0MkxURXVOeTB5TFRNdE15NDRMVE11TTFZNE5tTXdMVGN1TnkwMkxqTXRNVFF0TVRRdE1UUlRNVGsyTERjNExqTXNNVGsyTERnMmVpQk5NakF3TERnMmFEWjJNbWd0T1FvSkNRbGpMVEV1Tnl3d0xUTXNNUzR6TFRNc00zTXhMak1zTXl3ekxETm9NalpqTVM0M0xEQXNNeTB4TGpNc015MHpjeTB4TGpNdE15MHpMVE5vTFROMkxUSm9NbU13TFRZdU5pMDFMalF0TVRJdE1USXRNVEp6TFRFeUxEVXVOQzB4TWl3eE1rZ3lNREI2SUUweE9UZ3VOaXd4TURCc0xURXROR2d5TkM0NUNna0pDV3d0TVN3MFNERTVPQzQyZWlCTk1qQTNMalVzTVRJMmJDMDJMamt0TWpSb01UZ3VOMnd0Tmk0NUxESTBTREl3Tnk0MWVpQk5NVFV3TERJME1tTXhNaTR5TERBc01qSXRPUzQ0TERJeUxUSXljeTA1TGpndE1qSXRNakl0TWpKekxUSXlMRGt1T0MweU1pd3lNZ29KQ1FsVE1UTTNMamdzTWpReUxERTFNQ3d5TkRKNklFMHhOelFzTWpJd1l6QXNNVE11TXkweE1DNDNMREkwTFRJMExESTBjeTB5TkMweE1DNDNMVEkwTFRJMGJEQXNNR013TFRFekxqTXNNVEF1TnkweU5Dd3lOQzB5TkZNeE56UXNNakEyTGpjc01UYzBMREl5TUhvZ1RURTBOUzQyTERJek55NDNDZ2tKQ1d3eUxUQXVPV014TGpVdE1DNDJMRE11TWkwd0xqWXNOQzQzTERCc01pd3dMamxqTUM0NUxEQXVOQ3d5TERBc01pNDFMVEF1T0d3eExqRXRNUzQ1WXpBdU9DMHhMalFzTWk0eUxUSXVOQ3d6TGpndE1pNDRiREl1TVMwd0xqVmpNUzB3TGpJc01TNDJMVEV1TVN3eExqVXRNaTR4YkMwd0xqSXRNaTR5Q2drSkNXTXRNQzR4TFRFdU5pd3dMalF0TXk0eUxERXVOQzAwTGpWc01TNDBMVEV1TjJNd0xqY3RNQzQ0TERBdU55MHhMamtzTUMweUxqWnNMVEV1TkMweExqZGpMVEV1TVMweExqSXRNUzQyTFRJdU9DMHhMalF0TkM0MWJEQXVNaTB5TGpKak1DNHhMVEV0TUM0MkxURXVPUzB4TGpZdE1pNHhDZ2tKQ1d3dE1pNHhMVEF1TldNdE1TNDJMVEF1TkMwekxURXVOQzB6TGpndE1pNDRiQzB4TGpFdE1TNDVZeTB3TGpVdE1DNDVMVEV1TmkweExqSXRNaTQxTFRBdU9Hd3RNaXd3TGpsakxURXVOU3d3TGpZdE15NHlMREF1TmkwMExqY3NNR3d0TWkwd0xqbGpMVEF1T1Mwd0xqUXRNaXd3TFRJdU5Td3dMamdLQ1FrSmJDMHhMREl1TVdNdE1DNDRMREV1TkMweUxqSXNNaTQwTFRNdU9Dd3lMamhzTFRJdU1Td3dMalZqTFRFc01DNHlMVEV1Tml3eExqRXRNUzQxTERJdU1Xd3dMaklzTWk0eVl6QXVNU3d4TGpZdE1DNDBMRE11TWkweExqUXNOQzQxYkMweExqUXNNUzQzQ2drSkNXTXRNQzQzTERBdU9DMHdMamNzTVM0NUxEQXNNaTQyYkRFdU5Dd3hMamRqTVM0eExERXVNaXd4TGpZc01pNDRMREV1TkN3MExqVnNMVEF1TWl3eUxqSmpMVEF1TVN3eExEQXVOaXd4TGprc01TNDJMREl1TVd3eUxqRXNNQzQxWXpFdU5pd3dMalFzTXl3eExqUXNNeTQ0TERJdU9Hd3hMakVzTVM0NUNna0pDVU14TkRNdU5pd3lNemN1T0N3eE5EUXVOeXd5TXpndU1Td3hORFV1Tml3eU16Y3VOMHd4TkRVdU5pd3lNemN1TjNvZ1RURTBPQzQwTERJek9DNDNZekV0TUM0MExESXVNUzB3TGpRc015NHhMREJzTWl3d0xqbGpNUzQ0TERBdU9DdzBMREF1TVN3MUxURXVObXd4TGpFdE1TNDVDZ2tKQ1dNd0xqWXRNQzQ1TERFdU5TMHhMallzTWk0MUxURXVPR3d5TGpFdE1DNDFZekV1T1Mwd0xqUXNNeTR6TFRJdU15d3pMakV0TkM0eWJDMHdMakl0TWk0eVl5MHdMakV0TVM0eExEQXVNeTB5TGpJc01TMHpiREV1TkMweExqZGpNUzR6TFRFdU5Td3hMak10TXk0M0xEQXROUzR5YkMweExqUXRNUzQzQ2drSkNXTXRNQzQzTFRBdU9DMHhMakV0TVM0NUxURXRNMnd3TGpJdE1pNHlZekF1TWkweUxURXVNUzB6TGpndE15NHhMVFF1TW13dE1pNHhMVEF1TldNdE1TNHhMVEF1TWkweUxUQXVPUzB5TGpVdE1TNDRiQzB4TGpFdE1TNDVZeTB4TFRFdU55MHpMakl0TWk0MExUVXRNUzQyYkMweUxEQXVPUW9KQ1FsakxURXNNQzQwTFRJdU1Td3dMalF0TXk0eExEQnNMVEl0TUM0NVl5MHhMamd0TUM0NExUUXRNQzR4TFRVc01TNDJiQzB4TGpFc01TNDVZeTB3TGpZc01DNDVMVEV1TlN3eExqWXRNaTQxTERFdU9Hd3RNaTR4TERBdU5XTXRNUzQ1TERBdU5DMHpMak1zTWk0ekxUTXVNU3cwTGpKc01DNHlMREl1TWdvSkNRbGpNQzR4TERFdU1TMHdMak1zTWk0eUxURXNNMnd0TVM0MExERXVOMk10TVM0ekxERXVOUzB4TGpNc015NDNMREFzTlM0eWJERXVOQ3d4TGpkak1DNDNMREF1T0N3eExqRXNNUzQ1TERFc00yd3RNQzR5TERJdU1tTXRNQzR5TERJc01TNHhMRE11T0N3ekxqRXNOQzR5YkRJdU1Td3dMalVLQ1FrSll6RXVNU3d3TGpJc01pd3dMamtzTWk0MUxERXVPR3d4TGpFc01TNDVZekVzTVM0M0xETXVNaXd5TGpRc05Td3hMalpNTVRRNExqUXNNak00TGpkNklFMHhOVElzTWpBM1l6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxUTVRVeUxESXdOeTQyTERFMU1pd3lNRGQ2SUUweE5UZ3NNakE1WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakE1TGpZc01UVTRMREl3T1hvZ1RURTBOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVFvSkNRbHpMVEF1TkN3eExURXNNVk14TkRjc01qRXdMallzTVRRM0xESXhNSG9nVFRFME1Td3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME1Td3lNVEF1Tml3eE5ERXNNakV3ZWlCTk1UUTBMREl3TldNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTkN3eU1EVXVOaXd4TkRRc01qQTFlaUJOTVRNMkxESXhNMk13TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNMkxESXhNeTQyTERFek5pd3lNVE42SUUweE16a3NNakU1Q2drSkNXTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE01TERJeE9TNDJMREV6T1N3eU1UbDZJRTB4TXprc01qSTFZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TXprc01qSTFMallzTVRNNUxESXlOWG9LQ1FrSklFMHhORE1zTWpNeVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhORE1zTWpNeUxqWXNNVFF6TERJek1ub2dUVEUwT0N3eU16QmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hDZ2tKQ1ZNeE5EZ3NNak13TGpZc01UUTRMREl6TUhvZ1RURTFNeXd5TXpSak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTFNeXd5TXpRdU5pd3hOVE1zTWpNMGVpQk5NVFUzTERJeU9HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eENna0pDWE10TUM0MExERXRNU3d4VXpFMU55d3lNamd1Tml3eE5UY3NNakk0ZWlCTk1UWXpMREl5TkdNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UWXpMREl5TkM0MkxERTJNeXd5TWpSNklFMHhOVGtzTWpJeFl6QXRNQzQyTERBdU5DMHhMREV0TVFvSkNRbHpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRVNUxESXlNUzQyTERFMU9Td3lNakY2SUUweE5qTXNNakU0WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5qTXNNakU0TGpZc01UWXpMREl4T0hvZ1RURTFPQ3d5TVRRS0NRa0pZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qRTBMallzTVRVNExESXhOSG9nVFRFek5Dd3lNakJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFek5Dd3lNakF1Tml3eE16UXNNakl3ZWdvSkNRa2dUVEUxTUN3eU1qVmpNaTQ0TERBc05TMHlMaklzTlMwMWN5MHlMakl0TlMwMUxUVnpMVFVzTWk0eUxUVXNOVk14TkRjdU1pd3lNalVzTVRVd0xESXlOWG9nVFRFMU55d3lNakJqTUN3ekxqa3RNeTR4TERjdE55dzNjeTAzTFRNdU1TMDNMVGR6TXk0eExUY3NOeTAzQ2drSkNWTXhOVGNzTWpFMkxqRXNNVFUzTERJeU1Ib2dUVEkwTXl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TkRONklFMHlOaklzTWpBd1l6QXRNQzQyTERBdU5DMHhMREV0TVdneUNna0pDV013TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNeU5qSXVOQ3d5TURFc01qWXlMREl3TUM0MkxESTJNaXd5TURCNklFMHlORGdzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURUtDUWtKU0RJME9Ib2dUVEl5TXl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TWpONklFMHlNamdzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESUtDUWtKWXpBdU5pd3dMREV0TUM0MExERXRNWE10TUM0MExURXRNUzB4U0RJeU9Ib2dUVEl6Tnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpNM0xqUXNNakV4TERJek55d3lNVEF1Tml3eU16Y3NNakV3ZWdvSkNRa2dUVEkxTWl3eU1URmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpVeUxqUXNNakV5TERJMU1pd3lNVEV1Tml3eU5USXNNakV4ZWlCTk1qWTBMREl3T1dNdE1DNDJMREF0TVN3d0xqUXRNU3d4Y3pBdU5Dd3hMREVzTVdneUNna0pDV013TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TmpSNklFMHlOVE1zTVRrMVl6QXRNQzQyTERBdU5DMHhMREV0TVdneVl6QXVOaXd3TERFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eGFDMHlRekkxTXk0MExERTVOaXd5TlRNc01UazFMallzTWpVekxERTVOWG9LQ1FrSklFMHlNelFzTVRrMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklNak0wZWlCTk1qUXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbG9MVEpETWpRd0xqUXNNakF4TERJME1Dd3lNREF1Tml3eU5EQXNNakF3ZWlCTk1qRTFMREl4TldNd0xUQXVOU3d3TFRBdU9Td3dMVEV1TkdNdE1pNDFMVEV1TVMwekxqY3ROQzB5TGpZdE5pNDJZekF1TWkwd0xqVXNNQzQxTFRFc01DNDVMVEV1TkdNdE1DNDVMVElzTUMwMExqSXNNUzQ1TFRVdU1nb0pDUWxqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUdNd0xqUXRNQzQxTERBdU9TMHdMamtzTVM0MUxURXVNV013TGpVdE1pNDNMRE11TVMwMExqVXNOUzQ0TFRRdU1XTXdMamNzTUM0eExERXVOQ3d3TGpRc01pd3dMamhqTlM0ekxUTXVPQ3d4TVM0MkxUVXVPU3d4T0M0eUxUVXVPUW9KQ1Fsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamxqTWk0ekxURXVOaXcxTGpRdE1TdzNMREV1TTJNd0xqUXNNQzQyTERBdU55d3hMak1zTUM0NExESmpNQzQyTERBdU1pd3hMakVzTUM0MkxERXVOU3d4TGpGak1pNDNMREF1T0N3MExqSXNNeTQxTERNdU5DdzJMakpzTUN3d0Nna0pDV014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpKak1TNDVMRElzTVM0NExEVXVNaTB3TGpJc04yTXRNQzQwTERBdU5DMHdMamtzTUM0M0xURXVOU3d4WXpBc01DNDFMREFzTUM0NUxEQXNNUzQwZGpGb0xUWXlkaTB4U0RJeE5Yb2dUVEl4TlM0NExESXdOeTQ0Q2drSkNXTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpaakxURXVNeTB4TFRFdU5pMHlMamt0TUM0MkxUUXVNbXd3TERCRE1qRTFMREl3Tnk0MUxESXhOUzQwTERJd055NDNMREl4TlM0NExESXdOeTQ0VERJeE5TNDRMREl3Tnk0NGVpQk5NakUzTGpNc01qQXpMaklLQ1FrSll5MHdMalFzTUM0NUxUQXVOeXd4TGpndE1Td3lMamRqTFRFdE1DNDBMVEV1TmkweExqVXRNUzR6TFRJdU5XTXdMakl0TUM0MUxEQXVOaTB3TGprc01TNHhMVEV1TWtNeU1UWXVOU3d5TURJdU5pd3lNVFl1T1N3eU1ESXVPU3d5TVRjdU15d3lNRE11TWt3eU1UY3VNeXd5TURNdU1ub0tDUWtKSUUweU1Ua3VOaXd4T1RndU4yTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRE1qRTRMak1zTVRrM0xqWXNNakU0TGprc01UazRMak1zTWpFNUxqWXNNVGs0TGpjS0NRa0pUREl4T1M0MkxERTVPQzQzZWlCTk1qSXdMamdzTVRrM1l6QXVOQzB3TGpVc01DNDNMVEVzTVM0eExURXVOV010TUM0ekxUQXVOUzB3TGprdE1DNDNMVEV1TkMwd0xqUnpMVEF1Tnl3d0xqa3RNQzQwTERFdU5FTXlNakF1TXl3eE9UWXVOeXd5TWpBdU5Td3hPVFl1T1N3eU1qQXVPQ3d4T1RjS0NRa0pUREl5TUM0NExERTVOM29nVFRJeU5pNHhMREU1TVM0eVl5MHhMREF1T1MweUxERXVPQzB5TGprc01pNDRZeTB3TGpNdE1DNHpMVEF1Tnkwd0xqWXRNUzR4TFRBdU9HTXdMalF0TVM0MkxESXVNUzB5TGpVc015NDNMVEl1TVFvSkNRbERNakkxTGprc01Ua3hMakVzTWpJMkxERTVNUzR5TERJeU5pNHhMREU1TVM0eVRESXlOaTR4TERFNU1TNHllaUJOTWpZNExqZ3NNVGswWXkwd0xqa3RNUzB4TGprdE1TNDVMVEl1T1MweUxqaGpNUzQxTFRBdU5pd3pMak1zTUM0eExETXVPU3d4TGpjS0NRa0pZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNeU5qa3VOU3d4T1RNdU5Dd3lOamt1TVN3eE9UTXVOaXd5TmpndU9Dd3hPVFJNTWpZNExqZ3NNVGswZWlCTk1qY3dMakVzTVRrMUxqVmpNQzQwTERBdU5Td3dMamdzTVN3eExqRXNNUzQwQ2drSkNXTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW5NdE1DNDNMVEF1T1MweExqSXRNQzQ0UXpJM01DNDFMREU1TlM0eExESTNNQzR6TERFNU5TNHpMREkzTUM0eExERTVOUzQxZWlCTk1qY3pMamtzTWpBeExqUmpMVEF1TlMwd0xqa3RNUzB4TGpndE1TNDFMVEl1TndvSkNRbGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXlOelF1TWl3eU1ERXVNU3d5TnpRc01qQXhMaklzTWpjekxqa3NNakF4TGpSNklFMHlOelV1Tml3eU1EVXVPV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M0Nna0pDV013TGpRdE1DNHpMREF1T0Mwd0xqWXNNUzR5TFRGak1Td3dMalVzTVM0MExERXVOeXd4TERJdU4wTXlOell1Tml3eU1EVXVNeXd5TnpZdU1pd3lNRFV1Tnl3eU56VXVOaXd5TURVdU9Yb2dUVEkzTmk0NExESXhNUzQwWXkwd0xqRXRNUzR5TFRBdU5DMHlMalF0TUM0MkxUTXVOZ29KQ1Fsak1DNDFMVEF1TVN3d0xqa3RNQzQwTERFdU1pMHdMalpETWpjNExqUXNNakE0TGpVc01qYzRMakVzTWpFd0xqUXNNamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUjZJRTB5TnpVc01qRTBZeTB3TGpVdE1UWXRNVE11T1MweU9DNDJMVEk1TGprdE1qZ3VNUW9KQ1FsakxURTFMak1zTUM0MUxUSTNMallzTVRJdU9DMHlPQzR4TERJNExqRklNamMxVERJM05Td3lNVFI2SUUwM01pNHpMREU1T0M0eFl5MHdMakl0TUM0ekxUQXVNeTB3TGpjdE1DNHpMVEV1TVhZdE1USm9MVEoyTVRKak1Dd3lMaklzTVM0NExEUXNOQ3cwQ2drSkNXTXhMaklzTUN3eUxqTXRNQzQxTERNdU1TMHhMalJqTUM0MkxUQXVOeXd3TGprdE1TNDJMREF1T1MweUxqVjJMVEV5YUMweWRqRXlZekFzTVM0eExUQXVPU3d5TFRJc01td3dMREJETnpNdU15d3hPVGtzTnpJdU55d3hPVGd1Tnl3M01pNHpMREU1T0M0eGVpQk5OelVzTVRjMkNna0pDV013TGpRc01Dd3dMamNzTUN3eExqRXRNQzR4WXpBdU5Td3lMaklzTWk0MkxETXVOU3cwTGpnc00yTXdMalV0TUM0eExERXRNQzR6TERFdU5DMHdMalpqTVM0eExESXVNU3d4TGpjc05DNDBMREV1Tnl3MkxqZDJNalJqTUN3ekxqTXRNaTQzTERZdE5pdzJhQzB6ZGprS0NRa0pZekFzTWk0NExUSXVNaXcxTFRVc05YTXROUzB5TGpJdE5TMDFkaTA1YUMwell5MHpMak1zTUMwMkxUSXVOeTAyTFRaMkxUSTBZekF0Tnk0M0xEWXVNeTB4TkN3eE5DMHhORU0zTUN3eE56TXVPQ3czTWk0eUxERTNOaXczTlN3eE56WjZJRTAxT0N3eE9URjJNVElLQ1FrSll6QXNNQzQ0TERBdU5Td3hMalVzTVM0eUxERXVPR013TGprc01DNDBMREV1T1N3d0xqRXNNaTQwTFRBdU4yTXdMakl0TUM0ekxEQXVNeTB3TGpjc01DNHpMVEV1TVhZdE1USm9Nbll4TW1Nd0xESXVNaTB4TGpjc05DMHpMamtzTkdNdE1DNDFMREF0TVMwd0xqRXRNUzQwTFRBdU1nb0pDUWxqTFRBdU1pMHdMakV0TUM0MExUQXVNaTB3TGpjdE1DNHpkakl1TldNd0xESXVNaXd4TGpnc05DdzBMRFJvTVRaak1pNHlMREFzTkMweExqZ3NOQzAwZGkweU5HTXdMVEV1TlMwd0xqSXRNaTQ1TFRBdU55MDBMakpqTFRBdU5Dd3dMakV0TUM0NUxEQXVNaTB4TGpNc01DNHlDZ2tKQ1dNdE1pNHhMREF0TkM0eExURXVNUzAxTGpJdE0yTXRNeTB3TGpFdE5TNDJMVEl0Tmk0MUxUUXVPVU0yTWk0MExERTNOQ3cxT0N3eE56a3NOVGdzTVRnMVZqRTVNWG9nVFRZM0xESXhOWFk1WXpBc01TNDNMREV1TXl3ekxETXNNM016TFRFdU15d3pMVE4yTFRsSU5qZDZJaTgrQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUUzB4Tnl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TVRkNklFMHlMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTWdvSkNRbGpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERklNME15TGpRc01qQXhMRElzTWpBd0xqWXNNaXd5TURCNklFMHRNVElzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEV5ZWdvSkNRa2dUUzB6Tnl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TXpkNklFMHRNeklzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweENna0pDWE10TUM0MExURXRNUzB4U0Mwek1ub2dUUzB5TXl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRJeUxqWXNNakV4TFRJekxESXhNQzQyTFRJekxESXhNSG9nVFMwNExESXhNV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKYURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVGN1Tml3eU1USXRPQ3d5TVRFdU5pMDRMREl4TVhvZ1RUUXNNakE1WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU5Ib0tDUWtKSUUwdE55d3hPVFZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUWXVOaXd4T1RZdE55d3hPVFV1TmkwM0xERTVOWG9nVFMweU5pd3hPVFZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTWdvSkNRbGpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEkyZWlCTkxUSXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXRNVGt1Tml3eU1ERXRNakFzTWpBd0xqWXRNakFzTWpBd2VpQk5MVFExTERJeE5Rb0pDUWxqTUMwd0xqVXNNQzB3TGprc01DMHhMalJqTFRJdU5TMHhMakV0TXk0M0xUUXRNaTQyTFRZdU5tTXdMakl0TUM0MUxEQXVOUzB4TERBdU9TMHhMalJqTFRBdU9TMHlMREF0TkM0eUxERXVPUzAxTGpKakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01Bb0pDUWxqTUM0MExUQXVOU3d3TGprdE1DNDVMREV1TlMweExqRmpNQzQxTFRJdU55d3pMakV0TkM0MUxEVXVPQzAwTGpGak1DNDNMREF1TVN3eExqUXNNQzQwTERJc01DNDRZelV1TXkwekxqZ3NNVEV1TmkwMUxqa3NNVGd1TWkwMUxqbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGprS0NRa0pZekl1TXkweExqWXNOUzQwTFRFc055d3hMak5qTUM0MExEQXVOaXd3TGpjc01TNHpMREF1T0N3eVl6QXVOaXd3TGpJc01TNHhMREF1Tml3eExqVXNNUzR4WXpJdU55d3dMamdzTkM0eUxETXVOU3d6TGpRc05pNHliREFzTUdNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSUtDUWtKWXpFdU9Td3lMREV1T0N3MUxqSXRNQzR5TERkakxUQXVOQ3d3TGpRdE1DNDVMREF1TnkweExqVXNNV013TERBdU5Td3dMREF1T1N3d0xERXVOSFl4YUMwMk1uWXRNVWd0TkRWNklFMHRORFF1TWl3eU1EY3VPR010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWUtDUWtKWXkweExqTXRNUzB4TGpZdE1pNDVMVEF1TmkwMExqSnNNQ3d3UXkwME5Td3lNRGN1TlMwME5DNDJMREl3Tnk0M0xUUTBMaklzTWpBM0xqaE1MVFEwTGpJc01qQTNMamg2SUUwdE5ESXVOeXd5TURNdU1tTXRNQzQwTERBdU9TMHdMamNzTVM0NExURXNNaTQzQ2drSkNXTXRNUzB3TGpRdE1TNDJMVEV1TlMweExqTXRNaTQxWXpBdU1pMHdMalVzTUM0MkxUQXVPU3d4TGpFdE1TNHlReTAwTXk0MUxESXdNaTQyTFRRekxqRXNNakF5TGprdE5ESXVOeXd5TURNdU1rd3ROREl1Tnl3eU1ETXVNbm9nVFMwME1DNDBMREU1T0M0M0Nna0pDV010TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRMVFF4TGpjc01UazNMall0TkRFdU1Td3hPVGd1TXkwME1DNDBMREU1T0M0M2VpQk5MVE01TGpJc01UazNDZ2tKQ1dNd0xqTXRNQzQxTERBdU55MHhMREV1TVMweExqVmpMVEF1TXkwd0xqVXRNQzQ1TFRBdU55MHhMalF0TUM0MGN5MHdMamNzTUM0NUxUQXVOQ3d4TGpSRExUTTVMamNzTVRrMkxqY3RNemt1TlN3eE9UWXVPUzB6T1M0eUxERTVOMHd0TXprdU1pd3hPVGQ2SUUwdE16TXVPU3d4T1RFdU1nb0pDUWxqTFRFc01DNDVMVElzTVM0NExUSXVPU3d5TGpoakxUQXVNeTB3TGpNdE1DNDNMVEF1TmkweExqRXRNQzQ0WXpBdU5DMHhMallzTWk0eExUSXVOU3d6TGpjdE1pNHhReTB6TkM0eExERTVNUzR4TFRNMExERTVNUzR5TFRNekxqa3NNVGt4TGpKTUxUTXpMamtzTVRreExqSjZJRTA0TGpnc01UazBDZ2tKQ1dNdE1DNDVMVEV0TVM0NUxURXVPUzB5TGprdE1pNDRZekV1TlMwd0xqWXNNeTR6TERBdU1Td3pMamtzTVM0M1l6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME01TGpVc01Ua3pMalFzT1M0eExERTVNeTQyTERndU9Dd3hPVFJNT0M0NExERTVOSG9nVFRFd0xqRXNNVGsxTGpVS0NRa0pZekF1TkN3d0xqVXNNQzQ0TERFc01TNHhMREV1TkdNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbU10TUM0eExUQXVOUzB3TGpjdE1DNDVMVEV1TWkwd0xqaERNVEF1TlN3eE9UVXVNU3d4TUM0ekxERTVOUzR6TERFd0xqRXNNVGsxTGpWNklFMHhNeTQ1TERJd01TNDBDZ2tKQ1dNdE1DNDFMVEF1T1Mwd0xqa3RNUzQ0TFRFdU5TMHlMamRqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa014TkM0eUxESXdNUzR4TERFMExESXdNUzR5TERFekxqa3NNakF4TGpSNklFMHhOUzQzTERJd05TNDVDZ2tKQ1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNZekF1TkMwd0xqTXNNQzQ0TFRBdU5pd3hMakl0TVdNeExEQXVOU3d4TGpRc01TNDNMREVzTWk0M1F6RTJMallzTWpBMUxqTXNNVFl1TWl3eU1EVXVOeXd4TlM0M0xESXdOUzQ1ZWlCTk1UWXVPQ3d5TVRFdU5Bb0pDUWxqTFRBdU1TMHhMakl0TUM0MExUSXVOQzB3TGpZdE15NDJZekF1TlMwd0xqRXNNQzQ1TFRBdU5Dd3hMakl0TUM0MlF6RTRMalFzTWpBNExqVXNNVGd1TVN3eU1UQXVOQ3d4Tmk0NExESXhNUzQwVERFMkxqZ3NNakV4TGpSTU1UWXVPQ3d5TVRFdU5Ib2dUVEUxTERJeE5Bb0pDUWxqTFRBdU5TMHhOaTB4TXk0NUxUSTRMall0TWprdU9TMHlPQzR4WXkweE5TNHpMREF1TlMweU55NDJMREV5TGpndE1qZ3VNU3d5T0M0eFNERTFUREUxTERJeE5Ib2lMejRLQ1R3dlp6NEtQQzluUGdvOEwzTjJaejRLJztcbiIsIkBpbXBvcnQgJy4uLy4uL2Jvb3RzdHJhcC1leHRlbmRlZC9pbmNsdWRlJzsgLy8gQm9vdHN0cmFwIGluY2x1ZGVzXG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXG5cbi5hcGV4Y2hhcnRzLWNhbnZhcyB7XG4gIGxpbmVbc3Ryb2tlPSd0cmFuc3BhcmVudCddIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hcGV4Y2hhcnRzLXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgLmFwZXhjaGFydHMtdG9vbHRpcC10aXRsZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgJi5hcGV4Y2hhcnRzLXRoZW1lLWRhcmsge1xuICAgICAgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LWxhYmVsLFxuICAgICAgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLFxuICAuYXBleGNoYXJ0cy15YXhpc3Rvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICAvLyAmOmFmdGVyLFxuICAgIC8vICY6YmVmb3JlIHtcbiAgICAvLyAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib2R5LWJnO1xuICAgIC8vIH1cbiAgfVxuICAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtYm90dG9tIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9keS1iZztcbiAgICB9XG4gIH1cblxuICAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtdG9wIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkYm9keS1iZztcbiAgICB9XG4gIH1cbiAgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLWxlZnQge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkYm9keS1iZztcbiAgICB9XG4gIH1cbiAgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLXJpZ2h0IHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkYm9keS1iZztcbiAgICB9XG4gIH1cblxuICAuYXBleGNoYXJ0cy10ZXh0LFxuICAuYXBleGNoYXJ0cy10b29sdGlwLXRleHQsXG4gIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC1sYWJlbCxcbiAgLmFwZXhjaGFydHMtZGF0YWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJhc2UgIWltcG9ydGFudDtcbiAgICBmaWxsOiAkYm9keS1jb2xvcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZpbHRlcjogbm9uZTtcbiAgfVxuXG4gIC5hcGV4Y2hhcnRzLXBpZS1sYWJlbCB7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG5cbiAgLmFwZXhjaGFydHMtcGllIHtcbiAgICAuYXBleGNoYXJ0cy1waWUtc2VyaWVzIC5hcGV4Y2hhcnRzLXBpZS1hcmVhIHtcbiAgICAgIHN0cm9rZS13aWR0aDogMDtcbiAgICB9XG4gICAgLmFwZXhjaGFydHMtZGF0YWxhYmVsLWxhYmVsLFxuICAgIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gIH1cblxuICAuYXBleGNoYXJ0cy1tYXJrZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLmFwZXhjaGFydHMtbGVnZW5kLXNlcmllcyB7XG4gICAgJiArIC5hcGV4Y2hhcnRzLWxlZ2VuZC1zZXJpZXMge1xuICAgICAgbWFyZ2luLXRvcDogMC42MjVyZW07XG4gICAgfVxuICAgIC5hcGV4Y2hhcnRzLWxlZ2VuZC10ZXh0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICBjb2xvcjogJGJvZHktY29sb3IgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAuYXBleGNoYXJ0cy14Y3Jvc3NoYWlycyxcbiAgLmFwZXhjaGFydHMteWNyb3NzaGFpcnMsXG4gIC5hcGV4Y2hhcnRzLWdyaWRsaW5lIHtcbiAgICBzdHJva2U6ICRib3JkZXItY29sb3I7XG4gIH1cbn1cbi5hcGV4Y2hhcnRzLWxlZ2VuZC5wb3NpdGlvbi1ib3R0b20ge1xuICBib3R0b206IDNyZW07XG59XG5cbi5kYXJrLWxheW91dCB7XG4gIC5hcGV4Y2hhcnRzLWNhbnZhcyB7XG4gICAgLmFwZXhjaGFydHMteGF4aXMtdGljayxcbiAgICBsaW5lIHtcbiAgICAgIHN0cm9rZTogJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgICAuYXBleGNoYXJ0cy1oZWF0bWFwIHtcbiAgICAgIC5hcGV4Y2hhcnRzLWhlYXRtYXAtcmVjdCB7XG4gICAgICAgIHN0cm9rZTogJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgICAuYXBleGNoYXJ0cy1yYWRpYWxiYXIge1xuICAgICAgLmFwZXhjaGFydHMtcmFkaWFsYmFyLXRyYWNrIC5hcGV4Y2hhcnRzLXJhZGlhbGJhci1hcmVhIHtcbiAgICAgICAgc3Ryb2tlOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xuICAgICAgfVxuICAgIH1cbiAgICAuYXBleGNoYXJ0cy1yYWRhci1zZXJpZXMge1xuICAgICAgcG9seWdvbiB7XG4gICAgICAgIGZpbGw6ICR0aGVtZS1kYXJrLWJvZHktYmc7XG4gICAgICAgIHN0cm9rZTogJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgICAuYXBleGNoYXJ0cy1kYXRhbGFiZWxzLWdyb3VwIHtcbiAgICAgIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC12YWx1ZSB7XG4gICAgICAgIGZpbGw6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMtdG9vbHRpcCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtZGFyay1jYXJkLWJnO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtZGFyay1ib3JkZXItY29sb3I7XG4gICAgICAuYXBleGNoYXJ0cy10b29sdGlwLXRpdGxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWRhcmstY2FyZC1iZyAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgICAgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LWxhYmVsLFxuICAgICAgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLWJvdHRvbSB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHRoZW1lLWRhcmstYm9keS1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLXRvcCB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHRoZW1lLWRhcmstYm9keS1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMteWF4aXN0b29sdGlwLWxlZnQge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xuICAgICAgfVxuICAgIH1cbiAgICAuYXBleGNoYXJ0cy15YXhpc3Rvb2x0aXAtcmlnaHQge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICR0aGVtZS1kYXJrLWJvZHktYmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwLFxuICAgIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtZGFyay1ib3JkZXItY29sb3I7XG4gICAgICAvLyAmOmFmdGVyLFxuICAgICAgLy8gJjpiZWZvcmUge1xuICAgICAgLy8gICBib3JkZXItYm90dG9tLWNvbG9yOiAkdGhlbWUtZGFyay1ib3JkZXItY29sb3I7XG4gICAgICAvLyB9XG4gICAgICAuYXBleGNoYXJ0cy14YXhpc3Rvb2x0aXAtdGV4dCxcbiAgICAgIC5hcGV4Y2hhcnRzLXlheGlzdG9vbHRpcC10ZXh0IHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMteGF4aXN0b29sdGlwIHtcbiAgICAgIC5hcGV4Y2hhcnRzLXhheGlzdG9vbHRpcC10ZXh0IHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwZXhjaGFydHMteWF4aXMtbGFiZWwsXG4gICAgLmFwZXhjaGFydHMteGF4aXMtbGFiZWwsXG4gICAgLmFwZXhjaGFydHMtdG9vbHRpcC10ZXh0LFxuICAgIC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC1sYWJlbCB7XG4gICAgICBmaWxsOiAkdGhlbWUtZGFyay1ib2R5LWNvbG9yO1xuICAgIH1cbiAgICAuYXBleGNoYXJ0cy1tYXJrZXIge1xuICAgICAgc3Ryb2tlOiAkdGhlbWUtZGFyay1ib3JkZXItY29sb3I7XG4gICAgfVxuICAgIC5hcGV4Y2hhcnRzLWxlZ2VuZC1zZXJpZXMge1xuICAgICAgLmFwZXhjaGFydHMtbGVnZW5kLXRleHQge1xuICAgICAgICBjb2xvcjogJHRoZW1lLWRhcmstYm9keS1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAuYXBleGNoYXJ0cy14Y3Jvc3NoYWlycyxcbiAgICAuYXBleGNoYXJ0cy15Y3Jvc3NoYWlycyxcbiAgICAuYXBleGNoYXJ0cy1ncmlkbGluZSB7XG4gICAgICBzdHJva2U6ICR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy1kYXJrLnNjc3Ncbi8vICBEZXNjcmlwdGlvbjogQ3VzdG9tIGRhcmsgdGhlbWUgdmFyaWFibGVzXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuLy8gIEF1dGhvcjogUElYSU5WRU5UXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIFdBUk5JTkc6IFBMRUFTRSBETyBOT1QgQ0hBTkdFIFRISVMgVkFSSUFCTEUgRklMRS5cbi8vICBUSElTIEZJTEUgV0lMTCBHRVQgT1ZFUldSSVRURU4gV0lUSCBFQUNIIFZVRVhZIEhUTUwgVEVNUExBVEUgUkVMRUFTRS5cbi8vICBUSVA6XG4vLyAgV2Ugc3VnZ2VzdCB5b3UgdG8gdXNlIHRoaXMgKGFzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fdmFyaWFibGVzLWNvbXBvbmVudHMuc2NzcykgZmlsZSBmb3Igb3ZlcnJpZGluZyBjb21wb25lbnRzIHZhcmlhYmxlcy5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9Cb2R5XG4kdGhlbWUtZGFyay1ib2R5LWJnOiAjMTYxZDMxICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstYm9keS1jb2xvcjogI2I0YjdiZCAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjogIzNiNDI1MyAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjogIzQ0NDA1ZSAhZGVmYXVsdDtcblxuLy9UeXBvZ3JhcGh5XG4kdGhlbWUtZGFyay1oZWFkaW5ncy1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWxhYmVsLWNvbG9yOiAjZDBkMmQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGV4dC1tdXRlZC1jb2xvcjogIzY3NmQ3ZCAhZGVmYXVsdDtcblxuLy9DYXJkXG4kdGhlbWUtZGFyay1jYXJkLWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstYm94LXNoYWRvdzogMCA0cHggMjRweCAwIHJnYmEoJGJsYWNrLCAwLjI0KTtcblxuLy9JbnB1dFxuJHRoZW1lLWRhcmstaW5wdXQtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogIzY3NmQ3ZCAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWlucHV0LWJvcmRlci1jb2xvcjogIzQwNDY1NiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJnOiAjMjQyMzNhICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstaW5wdXQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAjNDQ0YjYwICFkZWZhdWx0O1xuXG4vLyBTd2l0Y2hcbiR0aGVtZS1kYXJrLXN3aXRjaC1iZzogIzU0NWE2YTtcbiR0aGVtZS1kYXJrLXN3aXRjaC1iZy1kaXNhYmxlZDogIzFiMjMzNztcblxuLy9UYWJsZVxuJHRoZW1lLWRhcmstdGFibGUtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay10YWJsZS1oZWFkZXItYmc6ICMzNDNkNTUgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay10YWJsZS1yb3ctYmc6ICMyODMwNDYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay10YWJsZS1ob3Zlci1iZzogIzI0MmIzZCAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLXRhYmxlLXN0cmlwZWQtYmc6ICMyNDJiM2QgIWRlZmF1bHQ7XG5cbiR0aGVtZS1kYXJrLW1vZGFsLWhlYWRlci1iZzogIzE2MWQzMSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLXBhZ2luYXRpb24tYmc6ICMyNDJiM2QgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1jaGFydC1iZzogIzM4NDA1NiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLXdpZGdldC1iZzogIzM4NDA1NiAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgJy4uLy4uL2Jvb3RzdHJhcC1leHRlbmRlZC9pbmNsdWRlJzsgLy8gQm9vdHN0cmFwIGluY2x1ZGVzXG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXG5cbi8vIFRvYXN0IGNvbnRhaW5lciBvcGFjaXR5XG4jdG9hc3QtY29udGFpbmVyID4gZGl2IHtcbiAgb3BhY2l0eTogMTtcbiAgLW1zLWZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogJHRvYXN0LWJvcmRlci1yYWRpdXM7XG59XG5cbi8vIFRvYXN0IGNvbnRhaW5lciBob3ZlciBzaGFkb3dcbiN0b2FzdC1jb250YWluZXIgPiBkaXYsXG4jdG9hc3QtY29udGFpbmVyID4gZGl2OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogJHRvYXN0LWJveC1zaGFkb3c7XG59XG5cbiN0b2FzdC1jb250YWluZXIgPiAudG9hc3Qge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG4vLyBUb2FzdCBjb2xvcnNcbi50b2FzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgY29sb3I6ICRib2R5LWNvbG9yICFpbXBvcnRhbnQ7XG4gIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxuICAudG9hc3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICB9XG4gIC50b2FzdC1wcm9ncmVzcyB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG59XG5cbi8vIHdlIGFyZSB1c2luZyBvbmx5IGZldyBjb2xvcnMgaW4gdG9hc3Qgc28gbm90IGFkZGluZyBpbiBwYWxldHRlLnNjc3Ncbi8vIHBsdWdpbiBjbGFzcyBuYW1lICdlcnJvcicgaXMgYWxzbyBkaWZmZXIgdGhlbiBvdXJzIHNvIG5vdCB1c2VmdWwgdG8gYWRkIGluIHBhbGV0dGVcbi50b2FzdC1zdWNjZXNzIHtcbiAgLnRvYXN0LXRpdGxlIHtcbiAgICBjb2xvcjogJHN1Y2Nlc3M7XG4gIH1cbiAgLnRvYXN0LXByb2dyZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgfVxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKHN0ci1yZXBsYWNlKCRjaGVjaywgJ2N1cnJlbnRDb2xvcicsICR3aGl0ZSksICcjJywgJyUyMycpKTtcbiAgfVxufVxuLnRvYXN0LWVycm9yIHtcbiAgLnRvYXN0LXRpdGxlIHtcbiAgICBjb2xvcjogJGRhbmdlcjtcbiAgfVxuICAudG9hc3QtcHJvZ3Jlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYW5nZXI7XG4gIH1cbiAgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYW5nZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKHN0ci1yZXBsYWNlKCRyZW1vdmUsICdjdXJyZW50Q29sb3InLCAkd2hpdGUpLCAnIycsICclMjMnKSk7XG4gIH1cbn1cbi50b2FzdC1pbmZvIHtcbiAgLnRvYXN0LXRpdGxlIHtcbiAgICBjb2xvcjogJGluZm87XG4gIH1cbiAgLnRvYXN0LXByb2dyZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5mbztcbiAgfVxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGluZm87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKHN0ci1yZXBsYWNlKCRpbmZvSWNvbiwgJ2N1cnJlbnRDb2xvcicsICR3aGl0ZSksICcjJywgJyUyMycpKTtcbiAgfVxufVxuLnRvYXN0LXdhcm5pbmcge1xuICAudG9hc3QtdGl0bGUge1xuICAgIGNvbG9yOiAkd2FybmluZztcbiAgfVxuICAudG9hc3QtcHJvZ3Jlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3YXJuaW5nO1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2FybmluZztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJHdhcm5pbmdJY29uLCAnY3VycmVudENvbG9yJywgJHdoaXRlKSwgJyMnLCAnJTIzJykpO1xuICB9XG59XG5cbi8vIHBvc2l0aW9uIGFsaWdubWVudHNcbi50b2FzdC10b3AtbGVmdCB7XG4gIHRvcDogMS4zcmVtO1xuICBsZWZ0OiAkY29udGVudC1wYWRkaW5nO1xufVxuLnRvYXN0LXRvcC1yaWdodCB7XG4gIHRvcDogMS4zcmVtO1xuICByaWdodDogJGNvbnRlbnQtcGFkZGluZztcbn1cbi50b2FzdC10b3AtY2VudGVyLFxuLnRvYXN0LXRvcC1mdWxsLXdpZHRoIHtcbiAgdG9wOiAxLjNyZW07XG59XG4udG9hc3QtYm90dG9tLWxlZnQge1xuICBib3R0b206IDEuM3JlbTtcbiAgbGVmdDogJGNvbnRlbnQtcGFkZGluZztcbn1cbi50b2FzdC1ib3R0b20tcmlnaHQge1xuICBib3R0b206IDEuM3JlbTtcbiAgcmlnaHQ6ICRjb250ZW50LXBhZGRpbmc7XG59XG4udG9hc3QtYm90dG9tLWNlbnRlcixcbi50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gIGJvdHRvbTogMS4zcmVtO1xufVxuXG4vLyBNZWRpYSBxdWVyeVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIGFuZCAobWluLXdpZHRoOiAyNDFweCkge1xuICAjdG9hc3QtY29udGFpbmVyID4gLnRvYXN0IHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIHRvcDogMC45NXJlbTtcbiAgICB9XG4gICAgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogLTFweDtcbiAgICB9XG4gIH1cbiAgI3RvYXN0LWNvbnRhaW5lcjpub3QoLnRvYXN0LXRvcC1mdWxsLXdpZHRoKTpub3QoLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoKSA+IGRpdiB7XG4gICAgd2lkdGg6IDIwcmVtO1xuICB9XG4gIC50b2FzdC10b3AtbGVmdCB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAjdG9hc3QtY29udGFpbmVyIHtcbiAgICAmLnRvYXN0LXRvcC1jZW50ZXIsXG4gICAgJi50b2FzdC1ib3R0b20tY2VudGVyIHtcbiAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgPiBkaXYge1xuICAgICAgICB3aWR0aDogMjByZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnRvYXN0LXRvcC1mdWxsLXdpZHRoLFxuICAudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDkzJTtcbiAgICA+IGRpdiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgLnRvYXN0LWJvdHRvbS1sZWZ0IHtcbiAgICBsZWZ0OiAwLjI1cmVtO1xuICAgIGJvdHRvbTogMC43NXJlbTtcbiAgfVxuICAudG9hc3QtYm90dG9tLXJpZ2h0IHtcbiAgICByaWdodDogMi4yNXJlbTtcbiAgICBib3R0b206IDAuNzVyZW07XG4gIH1cbiAgLnRvYXN0LWJvdHRvbS1jZW50ZXIsXG4gIC50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gICAgYm90dG9tOiAwLjc1cmVtO1xuICB9XG4gIFtkYXRhLXRleHRkaXJlY3Rpb249J3J0bCddIHtcbiAgICAjdG9hc3QtY29udGFpbmVyID4gZGl2IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gVG9hc3RyIERhcmsgTGF5b3V0XG4uZGFyay1sYXlvdXQge1xuICAjdG9hc3QtY29udGFpbmVyID4gZGl2LFxuICAjdG9hc3QtY29udGFpbmVyID4gZGl2OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAkdGhlbWUtZGFyay1ib3gtc2hhZG93O1xuICB9XG4gICN0b2FzdC1jb250YWluZXIge1xuICAgIC50b2FzdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtZGFyay1jYXJkLWJnO1xuICAgICAgY29sb3I6ICR0aGVtZS1kYXJrLWJvZHktY29sb3IgIWltcG9ydGFudDtcbiAgICAgIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgICAgICBjb2xvcjogJHRoZW1lLWRhcmstYm9keS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuW2RhdGEtdGV4dGRpcmVjdGlvbj0ncnRsJ10ge1xuICAudG9hc3QgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XG4gICAgICB0b3A6IDAuNTVyZW0gIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLnRvYXN0LXRvcC1sZWZ0IHtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIHJpZ2h0OiBhdXRvO1xuICB9XG4gIC50b2FzdC10b3AtcmlnaHQge1xuICAgIHJpZ2h0OiAzcmVtO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbiAgLnRvYXN0LWJvdHRvbS1sZWZ0IHtcbiAgICBsZWZ0OiAxZW07XG4gICAgcmlnaHQ6IGF1dG87XG4gIH1cbiAgLnRvYXN0LWJvdHRvbS1yaWdodCB7XG4gICAgcmlnaHQ6IDNyZW07XG4gICAgbGVmdDogYXV0bztcbiAgfVxuICAudG9hc3QtdG9wLWZ1bGwtd2lkdGgsXG4gIC50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gICAgJiN0b2FzdC1jb250YWluZXIgPiBkaXYge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLnNjc3Ncbi8vICBEZXNjcmlwdGlvbjogQ3VzdG9tIGNvbXBvbmVudCB2YXJpYWJsZVxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbi8vICBBdXRob3I6IFBJWElOVkVOVFxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBXQVJOSU5HOiBQTEVBU0UgRE8gTk9UIENIQU5HRSBUSElTIFZBUklBQkxFIEZJTEUuXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXG4vLyAgVElQOlxuLy8gIFdlIHN1Z2dlc3QgeW91IHRvIHVzZSB0aGlzIChhc3NldHMvc2Nzcy92YXJpYWJsZXMvX3ZhcmlhYmxlcy1jb21wb25lbnRzLnNjc3MpIGZpbGUgZm9yIG92ZXJyaWRpbmcgY29tcG9uZW50cyB2YXJpYWJsZXMuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiRiYXNlLWZvbnQtc2l6ZTogMTRweCAhZGVmYXVsdDtcbiRib2R5LWRpcmVjdGlvbjogbHRyICFkZWZhdWx0OyAvLyBEZWZhdWx0IGx0ciwgY2hhbmdlIGl0IHRvIHJ0bCBmb3IgUmlnaHQgVG8gTGVmdCBzdXBwb3J0LlxuJGNvbnRlbnQtcGFkZGluZzogMnJlbSAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgQ29sb3JzXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kbmF2LWNvbXBvbmVudC1ib3JkZXItY29sb3I6ICNkZGQgIWRlZmF1bHQ7XG5cbiRzd2lwZXItYmc6ICNmMmY0ZjQgIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgIE5hdmJhclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJG5hdmJhci1oZWlnaHQ6IDQuNDVyZW0gIWRlZmF1bHQ7XG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogNC40NXJlbSAhZGVmYXVsdDtcbiRmb290ZXItaGVpZ2h0OiAzLjM1cmVtICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICBNYWluIE1lbnVcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy9tYWluIG1lbnUgZGFya1xuJG1lbnUtZGFyay1jb2xvcjogI2RjZGNkYyAhZGVmYXVsdDtcbiRtZW51LWRhcmstYmctY29sb3I6ICMxMDE2M2EgIWRlZmF1bHQ7XG5cbiRtZW51LXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHggIWRlZmF1bHQ7XG4kbWVudS1zZWNvbmQtbGV2ZWwtcGFkZGluZzogMTBweCAxNXB4IDEwcHggMjBweCAhZGVmYXVsdDtcbiRtZW51LXRoaXJkLWxldmVsLXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDUzcHggIWRlZmF1bHQ7XG4kbWVudS1mb3J0aC1sZXZlbC1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCA1M3B4ICFkZWZhdWx0O1xuXG4vLyB2ZXJ0aWNhbCBtZW51XG4kbWVudS1leHBhbmRlZC13aWR0aDogMjYwcHggIWRlZmF1bHQ7XG4kbWVudS1jb2xsYXBzZWQtd2lkdGg6IDgwcHggIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgIFNpZGViYXJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kc2lkZWJhci13aWR0aDogMjYwcHggIWRlZmF1bHQ7XG4kY2hhdC1zaWRlYmFyLXdpZHRoOiAzNjBweCAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgIEF2YXRhclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuJGF2YXRhci1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGF2YXRhci1zdGF0dXMtc2l6ZTogMTFweCAhZGVmYXVsdDtcbiRhdmF0YXItc3RhdHVzLXNpemUtbGc6IDE3cHggIWRlZmF1bHQ7XG5cbiRhdmF0YXItc2l6ZS14bDogNzBweCAhZGVmYXVsdDtcbiRhdmF0YXItc2l6ZS1sZzogNTBweCAhZGVmYXVsdDtcbiRhdmF0YXItc2l6ZS1zbTogMjRweCAhZGVmYXVsdDtcblxuJGF2YXRhci1iZzogI2MzYzNjMztcbiRhdmF0YXItZ3JvdXAtYm9yZGVyOiAkd2hpdGU7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgUHJvZ3Jlc3Ncbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kcHJvZ3Jlc3Mtc2l6ZS14bDogMS4xNHJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1zaXplLWxnOiAwLjg1N3JlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1zaXplLW1kOiAwLjU3cmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLXNpemUtc206IDAuMTQzcmVtICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIEZvcm1cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vICRpbnB1dC1oZWlnaHQsICRpbnB1dC1oZWlnaHQtbGcsICRpbnB1dC1oZWlnaHQtc20gYXJlIGluIHZhcmlhYmxlc1xuJGZvbnQtc2l6ZS14czogMC43NXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUteGw6ICgkZm9udC1zaXplLWJhc2UgKyAwLjUpICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXhsOiAxLjcgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQteHM6IDEuNSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXkteGw6IDAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgteGw6IDAuNXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS14czogMC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC14czogMC4yNzVyZW0gIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLXhsOiAwLjM1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMteHM6IDAuMTJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy14bDogJGJvcmRlci1yYWRpdXMteGwgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy14czogJGJvcmRlci1yYWRpdXMteHMgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQteGw6ICgoJGZvbnQtc2l6ZS14bCAqICRsaW5lLWhlaWdodC14bCkgKyAoJGlucHV0LXBhZGRpbmcteS14bCAqIDIpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQteHM6ICgoJGZvbnQtc2l6ZS14cyAqICRsaW5lLWhlaWdodC14cykgKyAoJGlucHV0LXBhZGRpbmcteS14cyAqIDIpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtc206ICgoJGZvbnQtc2l6ZS1zbSAqICRsaW5lLWhlaWdodC1zbSkgKyAoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIpKSAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBCbGFuayBQYWdlIEJnIENvbG9yXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4kYmxhbmstYmctY29sb3I6ICNlZmYyZjcgIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgRGF0YSBUYWJsZXMgQmcgQ29sb3Jcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiRkYXRhdGFibGUtYmctY29sb3I6ICNmOGY4ZjggIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgU3dpdGNoXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJHN3aXRjaC1iZy1jb2xvcjogI2UyZTJlMiAhZGVmYXVsdDtcbiRzd2l0Y2gtaW5kaWNhdG9yLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgVGltZWxpbmVcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kdGltZWxpbmUtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kdGltZWxpbmUtcG9pbnQtc2l6ZTogMS43NXJlbSAhZGVmYXVsdDtcbiR0aW1lbGluZS1wb2ludC1pbmRpY2F0b3Itc2l6ZTogMTJweCAhZGVmYXVsdDtcbiR0aW1lbGluZS1wb2ludC1pbmRpY2F0b3ItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJHRpbWVsaW5lLXBvaW50LWluZGljYXRvci13cmFwcGVyLXNpemU6IDIwcHggIWRlZmF1bHQ7XG5cbiR0aW1lbGluZS1pdGVtLW1pbi1oZWlnaHQ6IDRyZW0gIWRlZmF1bHQ7XG4kdGltZWxpbmUtaXRlbS1pY29uLWZvbnQtc2l6ZTogMC44NXJlbSAhZGVmYXVsdDtcblxuJHRpbWVsaW5lLWV2ZW50LXRpbWUtc2l6ZTogMC44NXJlbSAhZGVmYXVsdDtcbiR0aW1lbGluZS1ldmVudC10aW1lLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbiIsIi8vIG5neC10b2FzdHIgY3NzXG5AaW1wb3J0ICd+bmd4LXRvYXN0ci90b2FzdHIuY3NzJztcblxuLy8gZXh0ZW5kZWQgdG9hc3RyIHNjc3NcbkBpbXBvcnQgJ0Bjb3JlL3Njc3MvYmFzZS9wbHVnaW5zL2V4dGVuc2lvbnMvZXh0LWNvbXBvbmVudC10b2FzdHInO1xuXG4udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4vLyEgVG9hc3RyIGljb24gcG9zaXRpb24gaW4gc21hbGwgc2NyZWVuIGZpeFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSBhbmQgKG1pbi13aWR0aDogMjQxcHgpIHtcbiAgI3RvYXN0LWNvbnRhaW5lciA+IC50b2FzdCB7XG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDEuNDRyZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 16614:
/*!*******************************************!*\
  !*** ./src/app/main/dashboard/i18n/de.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'de',
  data: {
    SAMPLE: {
      CONGRATULATIONS: 'Herzliche Glückwünsche',
      BADGE: 'Sie haben die Goldmedaille gewonnen'
    }
  }
};

/***/ }),

/***/ 44154:
/*!*******************************************!*\
  !*** ./src/app/main/dashboard/i18n/en.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'en',
  data: {
    SAMPLE: {
      CONGRATULATIONS: 'Congratulations',
      BADGE: 'You have won gold medal'
    }
  }
};

/***/ }),

/***/ 66873:
/*!*******************************************!*\
  !*** ./src/app/main/dashboard/i18n/fr.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'fr',
  data: {
    SAMPLE: {
      CONGRATULATIONS: 'Toutes nos félicitations',
      BADGE: "Vous avez remporté la médaille d'or"
    }
  }
};

/***/ }),

/***/ 30623:
/*!*******************************************!*\
  !*** ./src/app/main/dashboard/i18n/pt.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'pt',
  data: {
    SAMPLE: {
      CONGRATULATIONS: 'Parabéns',
      BADGE: 'Você ganhou medalha de ouro'
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=default-src_app_main_dashboard_dashboard_module_ts.js.map