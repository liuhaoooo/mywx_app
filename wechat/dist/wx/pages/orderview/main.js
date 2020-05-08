require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(184);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_75868a36_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(187);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(185)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-75868a36"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_75868a36_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\orderview\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75868a36", Component.options)
  } else {
    hotAPI.reload("data-v-75868a36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 186:
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
      productInfo: [],
      slideButtons: [{
        type: "warn",
        text: "删除订单",
        extClass: "test",
        src: ""
      }]
    };
  },

  computed: {
    openid: function openid() {
      return this.$store.getters.openid;
    }
  },
  onShow: function onShow() {
    this.getstore();
  },

  //下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    this.getstore();
  },

  methods: {
    //获取用户收藏的商品
    getstore: function getstore() {
      var _this = this;

      var data = {
        openid: this.openid
      };
      this.$https.request({
        url: this.$interfaces.getorder,
        method: "post",
        data: data
      }).then(function (res) {
        _this.productInfo = res;
        console.log(res);
        wx.stopPullDownRefresh();
      });
    },
    toDetails: function toDetails(id) {
      wx.navigateTo({ url: "../details/main" });
      this.$store.dispatch('setproductid', id);
    },

    //左滑删除
    slideButtonTap: function slideButtonTap(id) {
      var _this2 = this;

      var data = {
        openid: this.openid,
        id: id
      };
      this.$https.request({
        url: this.$interfaces.delorder,
        method: "post",
        data: data
      }).then(function (res) {
        _this2.getstore();
        wx.showToast({
          title: res.msg,
          icon: "none",
          duration: 2000
        });
      });
    }
  }
});

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list"
  }, [(_vm.productInfo.length == '0') ? _c('div', {
    staticClass: "content"
  }, [_c('span', [_vm._v("暂时没有订单")])]) : _c('scroll-view', {
    attrs: {
      "scroll-y": "",
      "enable-back-to-top": "true"
    }
  }, [_c('div', {
    staticClass: "slideview"
  }, _vm._l((_vm.productInfo), function(item, index) {
    return _c('mp-slideview', {
      key: index,
      attrs: {
        "buttons": _vm.slideButtons,
        "eventid": '2_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "buttontap": function($event) {
          _vm.slideButtonTap(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "info"
    }, [_c('img', {
      attrs: {
        "src": item.url,
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetails(item.storeid)
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "text",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetails(item.storeid)
        }
      }
    }, [_c('div', {
      staticStyle: {
        "font-size": "28rpx"
      }
    }, [_vm._v(_vm._s(item.text))]), _vm._v(" "), _c('div', {
      staticClass: "details"
    }, [_vm._v("123124214324132432432432543543543543543")])]), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_c('div', [_vm._v("￥" + _vm._s(item.price))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
      staticStyle: {
        "font-size": "22rpx"
      }
    }, [_vm._v("x" + _vm._s(item.count))])], 1), _vm._v(" "), _c('div', {
      staticClass: "total",
      staticStyle: {
        "color": "#666"
      }
    }, [_vm._v("共" + _vm._s(item.count) + "件商品合计:￥" + _vm._s(item.total))]), _vm._v(" "), _c('div', {
      staticClass: "botton"
    }, [(item.isok == '1') ? _c('button', [_vm._v("查看物流")]) : _c('button', [_vm._v("取消订单")]), _vm._v(" "), (item.isok == '1') ? _c('button', [_vm._v("确认收货")]) : _c('button', [_vm._v("去付款")])], 1)])])
  }))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-75868a36", esExports)
  }
}

/***/ })

},[183]);