require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getters__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutations__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(54);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var state = {
    islogin: false, //是否登录
    user: null, //用户信息
    productid: null, //商品id
    openid: '',
    wxuser: null, //微信用户信息
    details: null, //商品详情
    address: null //收货地址
};
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: state,
    getters: __WEBPACK_IMPORTED_MODULE_2__getters__,
    mutations: __WEBPACK_IMPORTED_MODULE_3__mutations__,
    actions: __WEBPACK_IMPORTED_MODULE_4__actions__
}));

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

var domain = 'http://liuhaooo.top:6001/';
// const domain = 'http://127.0.0.1:8000/'
var interfaces = {
    getopenid: domain + 'api/getopenid', //获取用户openid
    zhuce: domain + 'api/zhuce', //注册
    login: domain + 'api/login', //登录
    getuserinfo: domain + 'api/getuserinfo', //获取用户信息
    sendsms: domain + 'api/sendsms', //发送短信验证码
    getstore: domain + 'api/getstore', //获取商品
    addgouwuche: domain + 'api/addgouwuche', //加入购物车
    delgouwuche: domain + 'api/delgouwuche', //删除购物车
    adddongtai: domain + 'api/adddongtai', //发动态（文字+图片）
    getdongtai: domain + 'api/getdongtai', //获取动态
    adddongtaitext: domain + 'api/adddongtaitext', //发动态（文字）
    getsort: domain + 'api/getsort', //获取类别
    shoucang: domain + 'api/shoucang', //加入收藏
    cancelshoucang: domain + 'api/cancelshoucang', //取消收藏
    getshoucang: domain + 'api/getshoucang', //获取收藏
    addaddress: domain + 'api/addaddress', //添加地址
    getaddress: domain + 'api/getaddress', //获取地址
    deleaddress: domain + 'api/deleaddress', //删除地址
    setorder: domain + 'api/setorder', //生成订单
    getorder: domain + 'api/getorder', //获取订单
    delorder: domain + 'api/delorder' //删除订单
};
module.exports = interfaces;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);


var https = {
    request: function request() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = options.url,
            method = options.method,
            data = options.data,
            _options$header = options.header,
            header = _options$header === undefined ? {} : _options$header;

        try {
            var value = wx.getStorageSync("usertoken");
            if (value) {
                header.Authorization = value; //在请求头中携带token
            }
        } catch (e) {
            throw e;
        }
        return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
            wx.request({
                url: url,
                method: method,
                data: data,
                header: header,
                success: function success(res) {
                    if (res.statusCode == 404) {
                        reject();
                        return false;
                    } else if (res.statusCode == 401) {
                        wx.hideLoading();
                        wx.showModal({
                            title: "提示",
                            content: res.data.msg,
                            showCancel: false,
                            success: function success(res) {
                                if (res.confirm) {
                                    wx.reLaunch({ url: "../tologin/main" });
                                }
                            }
                        });
                        try {
                            wx.removeStorageSync('usertoken'); //如果token过期删除本地token
                        } catch (e) {}
                        return false;
                    } else if (res.statusCode != 200) {
                        wx.showToast({
                            title: '网络出错,稍后在试!',
                            icon: 'none'
                        });
                        return false;
                    }
                    resolve(res.data);
                },
                fail: function fail(err) {
                    reject(err);
                }
            });
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (https);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_interfaces__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_https__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_fn__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_my_icon_iconfont_css__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_my_icon_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_my_icon_iconfont_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_weui_miniprogram_weui_wxss_dist_style_weui_wxss__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_weui_miniprogram_weui_wxss_dist_style_weui_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_weui_miniprogram_weui_wxss_dist_style_weui_wxss__);









__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$interfaces = __WEBPACK_IMPORTED_MODULE_3__utils_interfaces___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$https = __WEBPACK_IMPORTED_MODULE_4__utils_https__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$fn = __WEBPACK_IMPORTED_MODULE_5__utils_fn__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(50);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(49)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6724880a", Component.options)
  } else {
    hotAPI.reload("data-v-6724880a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "islogin", function() { return islogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productid", function() { return productid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openid", function() { return openid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wxuser", function() { return wxuser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "details", function() { return details; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "address", function() { return address; });
var islogin = function islogin(state) {
  return state.islogin;
};
var productid = function productid(state) {
  return state.productid;
};
var openid = function openid(state) {
  return state.openid;
};
var user = function user(state) {
  return state.user;
};
var wxuser = function wxuser(state) {
  return state.wxuser;
};
var details = function details(state) {
  return state.details;
};
var address = function address(state) {
  return state.address;
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setislogin", function() { return setislogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setproductid", function() { return setproductid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setopenid", function() { return setopenid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setuser", function() { return setuser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setwxuser", function() { return setwxuser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setdetails", function() { return setdetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setaddress", function() { return setaddress; });
var setislogin = function setislogin(state, data) {
  state.islogin = data;
};
var setproductid = function setproductid(state, data) {
  state.productid = data;
};
var setopenid = function setopenid(state, data) {
  state.openid = data;
};
var setuser = function setuser(state, data) {
  state.user = data;
};
var setwxuser = function setwxuser(state, data) {
  state.wxuser = data;
};
var setdetails = function setdetails(state, data) {
  state.details = data;
};
var setaddress = function setaddress(state, data) {
  state.address = data;
};

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setislogin", function() { return setislogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setproductid", function() { return setproductid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setopenid", function() { return setopenid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setuser", function() { return setuser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setwxuser", function() { return setwxuser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setdetails", function() { return setdetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setaddress", function() { return setaddress; });
var setislogin = function setislogin(_ref, data) {
  var commit = _ref.commit;

  commit('setislogin', data);
};
var setproductid = function setproductid(_ref2, data) {
  var commit = _ref2.commit;

  commit('setproductid', data);
};
var setopenid = function setopenid(_ref3, data) {
  var commit = _ref3.commit;

  commit('setopenid', data);
};
var setuser = function setuser(_ref4, data) {
  var commit = _ref4.commit;

  commit('setuser', data);
};
var setwxuser = function setwxuser(_ref5, data) {
  var commit = _ref5.commit;

  commit('setwxuser', data);
};
var setdetails = function setdetails(_ref6, data) {
  var commit = _ref6.commit;

  commit('setdetails', data);
};
var setaddress = function setaddress(_ref7, data) {
  var commit = _ref7.commit;

  commit('setaddress', data);
};

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__https__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(26);
//vue中一些公共方法



var fn = {
  //获取openid
  getopenid: function getopenid() {
    var _this = this;

    wx.login({
      success: function success(res) {
        if (res.code) {
          var data = {
            appid: "wx555f1a207ea3e072",
            secret: "97a6c883303a59ffb45b8f28da571409",
            code: res.code
          };
          __WEBPACK_IMPORTED_MODULE_1__https__["a" /* default */].request({
            url: __WEBPACK_IMPORTED_MODULE_0__interfaces___default.a.getopenid,
            method: "post",
            data: data
          }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].dispatch('setopenid', res.openid);
            _this.getuserinfo(res.openid);
          });
        }
      },
      fail: function fail(err) {
        throw err;
      }
    });
  },

  //获取用户信息
  getuserinfo: function getuserinfo(openid) {

    var data = { openid: openid };
    __WEBPACK_IMPORTED_MODULE_1__https__["a" /* default */].request({
      url: __WEBPACK_IMPORTED_MODULE_0__interfaces___default.a.getuserinfo,
      method: "post",
      data: data
    }).then(function (res) {
      __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].dispatch('setuser', res[0]);
    });
  },

  //转换日期函数
  changedate: function changedate(val) {
    var date = new Date(val);
    var Y = date.getFullYear() + "年";
    var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "月";
    var D = date.getDate() > 9 ? date.getDate() + "日" : "0" + date.getDate() + "日";
    var h = date.getHours() > 9 ? date.getHours() + ":" : "0" + date.getHours() + ":";
    var m = date.getMinutes() > 9 ? date.getMinutes() + "" : "0" + date.getMinutes() + "";
    return Y + M + D + h + m;
  },

  //手机号码加密
  encryptionphone: function encryptionphone(phone) {
    if (phone) {
      phone = phone.substr(0, 3) + "****" + phone.substr(7, 10);
      return phone;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (fn);

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[47]);