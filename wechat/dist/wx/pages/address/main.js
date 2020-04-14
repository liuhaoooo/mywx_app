require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(101);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_083b9866_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(104);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-083b9866"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_083b9866_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\address\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-083b9866", Component.options)
  } else {
    hotAPI.reload("data-v-083b9866", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      data: [],
      slideButtons: [{
        type: "warn",
        text: "删除",
        extClass: "test",
        src: ""
      }]
    };
  },
  onShow: function onShow() {
    this.getdata();
  },

  computed: {
    openid: function openid() {
      return this.$store.getters.openid;
    },
    route: function route() {
      var pages = getCurrentPages();
      return pages[pages.length - 2].route == "pages/order/main";
    }
  },
  methods: {
    getdata: function getdata() {
      var _this2 = this;

      wx.showLoading({
        title: ""
      });
      var data = {
        openid: this.openid
      };
      this.$https.request({
        url: this.$interfaces.getaddress,
        method: "post",
        data: data
      }).then(function (res) {
        _this2.data = res;
        wx.hideLoading();
      });
    },
    addaddress: function addaddress() {
      wx.navigateTo({ url: "../addaddress/main" });
    },
    click: function click(data) {},

    //左滑删除
    slideButtonTap: function slideButtonTap(id) {
      var _this = this;
      wx.showModal({
        title: "提示",
        content: "是否删除该地址？",
        success: function success(res) {
          if (res.confirm) {
            _this.deleteAddr(id);
          }
        }
      });
    },
    deleteAddr: function deleteAddr(id) {
      var _this3 = this;

      var data = {
        openid: this.openid,
        id: id
      };
      this.$https.request({
        url: this.$interfaces.deleaddress,
        method: "post",
        data: data
      }).then(function (res) {
        _this3.getdata();
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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    attrs: {
      "scroll-y": "",
      "enable-back-to-top": "true"
    }
  }, [(_vm.data.length > 0) ? _c('div', {
    staticClass: "slideview"
  }, _vm._l((_vm.data), function(item, index) {
    return _c('mp-slideview', {
      key: item.id,
      staticClass: "address",
      attrs: {
        "buttons": _vm.slideButtons,
        "throttle": "60",
        "eventid": '1_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "buttontap": function($event) {
          _vm.slideButtonTap(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "content",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.click(item)
        }
      }
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name) + "，" + _vm._s(item.phone))]), _vm._v(" "), _c('div', {
      staticClass: "details"
    }, [_vm._v("收货地址：" + _vm._s(item.region) + "-" + _vm._s(item.details))]), _vm._v(" "), _c('i', {
      staticClass: "iconfont icon-bianji"
    })], 1)])
  })) : _vm._e()]), _vm._v(" "), _c('button', {
    staticClass: "button",
    attrs: {
      "type": "primary",
      "plain": false,
      "eventid": '2'
    },
    on: {
      "click": _vm.addaddress
    }
  }, [_vm._v("新增收货地址")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-083b9866", esExports)
  }
}

/***/ })

},[100]);