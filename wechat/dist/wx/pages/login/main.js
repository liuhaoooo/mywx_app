require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(157);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_a268f14a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(164);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(158)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a268f14a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_a268f14a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a268f14a", Component.options)
  } else {
    hotAPI.reload("data-v-a268f14a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 158:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_inputs_index__ = __webpack_require__(160);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      disabled: true, //注册按钮是否能用
      disabled1: true, //登录按钮是否能用
      password: "",
      phone: "",
      type: "", //输入框右边的图标
      type1: "",
      type2: "",
      islogin: false, //切换注册登录
      code: "",
      count: "获取验证码", //倒计时
      timer: null //计时器
    };
  },

  computed: {
    openid: function openid() {
      return this.$store.getters.openid;
    }
  },
  components: {
    inputs: __WEBPACK_IMPORTED_MODULE_0__components_inputs_index__["a" /* default */]
  },
  onLoad: function onLoad() {
    this.password = "";
    this.phone = "";
  },

  methods: {
    //注册
    zhuce: function zhuce() {
      var _this = this;

      wx.showLoading({
        title: "注册中"
      });
      var data = {
        openid: this.openid,
        password: this.password,
        phone: this.phone,
        code: this.code
      };
      this.$https.request({
        url: this.$interfaces.zhuce,
        method: "post",
        data: data
      }).then(function (res) {
        if (res.success) {
          //注册成功
          wx.hideLoading();
          wx.showToast({
            title: res.msg,
            icon: "success",
            duration: 2000
          });
          _this.islogin = false; //注册成功跳转登录界面
          _this.login(); //注册成功自动登录
          // this.password = "";
          // this.phone = "";
        } else {
          //注册失败
          wx.hideLoading();
          wx.showToast({
            title: res.msg,
            icon: "none",
            duration: 2000
          });
        }
      });
    },

    //登录
    login: function login() {
      var _this2 = this;

      wx.showLoading({
        title: "登陆中"
      });
      var data = {
        openid: this.openid,
        password: this.password
      };
      this.$https.request({
        url: this.$interfaces.login,
        method: "post",
        data: data
      }).then(function (res) {
        if (res.success) {
          if (res.token) {
            wx.setStorage({ //将token保存到本地
              key: "usertoken",
              data: res.token
            });
          }
          wx.hideLoading();
          _this2.$store.dispatch("setislogin", true); //改变vuex里的登录状态
          wx.switchTab({ url: "../index/main" }); //跳转主页
          wx.showToast({
            title: res.msg,
            icon: "success",
            duration: 2000
          });
        } else {
          wx.hideLoading();
          wx.showToast({
            title: res.msg,
            icon: "none",
            duration: 2000
          });
        }
      });
    },

    //发送短信验证码
    sendsms: function sendsms() {
      var _this3 = this;

      if (this.type == "success" && this.type1 == "success") {
        //手机号密码已填写正确
        wx.showLoading({
          title: "发送短信中"
        });
        this.$https.request({
          url: this.$interfaces.sendsms,
          data: {
            phone: this.phone
          },
          method: "post"
        }).then(function (res) {
          _this3.code = "";
          _this3.countdown(60);
          wx.hideLoading();
          wx.showToast({
            title: res.msg,
            icon: "none",
            duration: 2000
          });
        });
      } else {
        //手机号密码未填写正确
        wx.showToast({
          title: "请正确输入",
          icon: "none",
          duration: 2000
        });
        this.password = "";
        this.password1 = "";
      }
    },

    //倒计时
    countdown: function countdown(sec) {
      var _this4 = this;

      this.timer = setInterval(function () {
        _this4.count = sec;
        sec--;
        if (sec == "00") {
          _this4.count = "获取验证码";
          clearInterval(_this4.timer);
          return;
        }
        if (sec < 10) {
          sec = "0" + sec;
        }
        _this4.count = sec;
      }, 1000);
    },

    //判断input右边图标是否为绿
    isinputok: function isinputok() {
      if (this.type == "success" && this.type1 == "success" && this.type2 == "success") {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    }
  },
  //监听本页面所有输入框
  watch: {
    password: function password() {
      //监听密码输入
      if (!this.password) {
        this.type = "";
        this.disabled1 = true;
      } else if (this.password.length < 6) {
        this.type = "warn";
        this.disabled1 = true;
      } else {
        this.type = "success";
        this.disabled1 = false;
      }
    },
    phone: function phone() {
      //监听手机号输入
      var tel = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      if (!this.phone) {
        this.type1 = "";
      } else if (tel.test(this.phone)) {
        this.type1 = "success";
      } else {
        this.type1 = "warn";
      }
    },
    code: function code() {
      //监听验证码输入
      if (!this.code) {
        this.type2 = "";
      } else if (this.code.length < 6) {
        this.type2 = "warn";
      } else {
        this.type2 = "success";
      }
    },

    //监听input右边图标是否为绿
    type: function type() {
      this.isinputok();
    },
    type1: function type1() {
      this.isinputok();
    },
    type2: function type2() {
      this.isinputok();
    }
  }
});

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_e60d9b02_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(163);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(161)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e60d9b02"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_e60d9b02_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\inputs\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e60d9b02", Component.options)
  } else {
    hotAPI.reload("data-v-e60d9b02", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    icon: String,
    placeholder: String,
    border: {
      type: String,
      default: "rgb(224, 224, 224) solid 1px;"
    },
    maxlength: {
      type: Number,
      default: -1
    },
    icontype: {
      type: String,
      default: ""
    },
    top: String,
    password: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  }
});

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "inputs",
    style: ('top:' + _vm.top + ';border:' + _vm.border)
  }, [(_vm.icon) ? _c('i', {
    class: 'iconfont ' + _vm.icon
  }) : _vm._e(), _vm._v(" "), _c('input', {
    attrs: {
      "maxlength": _vm.maxlength,
      "placeholder": _vm.placeholder,
      "password": _vm.password,
      "type": _vm.type,
      "value": _vm.value,
      "eventid": '0'
    },
    on: {
      "input": function($event) {
        _vm.$emit('input', $event.target.value)
      }
    }
  }), _vm._v(" "), _c('icon', {
    attrs: {
      "type": _vm.icontype,
      "size": "20"
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e60d9b02", esExports)
  }
}

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "login"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('open-data', {
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_c('open-data', {
    attrs: {
      "type": "userNickName",
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('inputs', {
    attrs: {
      "maxlength": "15",
      "icon": "icon-suo",
      "placeholder": "请输入密码,长度6~15",
      "icontype": _vm.type,
      "top": "38%",
      "password": "true",
      "eventid": '0',
      "mpcomid": '2'
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  }), _vm._v(" "), (_vm.islogin) ? _c('inputs', {
    attrs: {
      "maxlength": "11",
      "type": "number",
      "icon": "icon-shoujihao",
      "placeholder": "请输入手机号码",
      "icontype": _vm.type1,
      "top": "50%",
      "eventid": '1',
      "mpcomid": '3'
    },
    model: {
      value: (_vm.phone),
      callback: function($$v) {
        _vm.phone = $$v
      },
      expression: "phone"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "code"
  }, [(_vm.islogin) ? _c('inputs', {
    attrs: {
      "maxlength": "6",
      "type": "number",
      "icon": "icon-yanzhengma",
      "placeholder": "请输入验证码",
      "icontype": _vm.type2,
      "eventid": '2',
      "mpcomid": '4'
    },
    model: {
      value: (_vm.code),
      callback: function($$v) {
        _vm.code = $$v
      },
      expression: "code"
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.islogin) ? _c('button', {
    staticClass: "codebuttom",
    attrs: {
      "disabled": _vm.count != '获取验证码',
      "eventid": '3'
    },
    on: {
      "click": _vm.sendsms
    }
  }, [_vm._v(_vm._s(_vm.count))]) : _vm._e(), _vm._v(" "), (_vm.islogin) ? _c('button', {
    staticClass: "button zhuce",
    attrs: {
      "plain": "false",
      "disabled": _vm.disabled,
      "eventid": '5'
    },
    on: {
      "click": _vm.zhuce
    }
  }, [_vm._v("注册")]) : _c('button', {
    staticClass: "button denglu",
    attrs: {
      "plain": "false",
      "disabled": _vm.disabled1,
      "eventid": '4'
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录")]), _vm._v(" "), (_vm.islogin) ? _c('div', {
    staticClass: "tologin",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.islogin = !_vm.islogin;
        _vm.password = '';
        _vm.disabled1 = true
      }
    }
  }, [_vm._v("已注册？去登录")]) : _c('div', {
    staticClass: "tologin",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.islogin = !_vm.islogin;
        _vm.password = '';
        _vm.phone = '';
        _vm.code = ''
      }
    }
  }, [_vm._v("未注册？去注册")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a268f14a", esExports)
  }
}

/***/ })

},[156]);