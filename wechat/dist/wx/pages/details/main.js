require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(106);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_04103598_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(107)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-04103598"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_04103598_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\details\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04103598", Component.options)
  } else {
    hotAPI.reload("data-v-04103598", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_bottommodal_index__ = __webpack_require__(109);
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
      details: {},
      modal: false,
      modal1: false,
      animation: null
    };
  },

  components: {
    bottommodal: __WEBPACK_IMPORTED_MODULE_0__components_bottommodal_index__["a" /* default */]
  },
  computed: {
    id: function id() {
      return this.$store.getters.productid;
    },
    openid: function openid() {
      return this.$store.getters.openid;
    }
  },
  onLoad: function onLoad() {
    this.modal = false;
    this.getstore();
  },

  //下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    this.getstore();
  },

  methods: {
    //获取商品详情
    getstore: function getstore() {
      var _this = this;

      var data = {
        id: this.id,
        openid: this.openid
      };
      this.$https.request({
        url: this.$interfaces.getstore,
        method: "post",
        data: data
      }).then(function (res) {
        _this.details = res;
        wx.stopPullDownRefresh();
      });
    },
    showmodal: function showmodal() {
      this.modal = true;
    },
    showmodal1: function showmodal1() {
      this.modal1 = true;
    },

    //加入购物车
    addgouwuche: function addgouwuche(detail, count) {
      var _this2 = this;

      wx.showLoading({
        title: ""
      });
      var data = {
        openid: this.openid,
        commodityid: this.id,
        count: count
      };
      this.$https.request({
        url: this.$interfaces.addgouwuche,
        method: "post",
        data: data
      }).then(function (res) {
        if (res.success) {
          wx.hideLoading();
          _this2.modal = false;
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

    //立即购买
    buy: function buy(detail, count) {
      this.modal1 = false;
      detail.count = count;
      this.$store.dispatch("setdetails", detail);
      this.to("../order/main");
    },

    //收藏操作
    shoucang: function shoucang(url) {
      var _this3 = this;

      var data = {
        openid: this.openid,
        commodityid: this.id
      };
      this.$https.request({
        url: url,
        method: "post",
        data: data
      }).then(function (res) {
        if (res.success) {
          _this3.getstore();
          wx.showToast({
            title: res.msg,
            icon: "none",
            duration: 2000
          });
        } else {
          wx.showToast({
            title: res.msg,
            icon: "none",
            duration: 2000
          });
        }
      });
    },

    //添加收藏
    addshoucang: function addshoucang() {
      this.shoucang(this.$interfaces.shoucang);
    },

    //取消收藏
    cancelshoucang: function cancelshoucang() {
      this.shoucang(this.$interfaces.cancelshoucang);
    },

    //跳转
    totab: function totab(url) {
      wx.switchTab({ url: url });
    },
    to: function to(url) {
      wx.navigateTo({ url: url });
    },
    close: function close(val) {
      this.modal = val;
      this.modal1 = val;
    }
  }
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_76129c22_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(112);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(110)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-76129c22"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_76129c22_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\bottommodal\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76129c22", Component.options)
  } else {
    hotAPI.reload("data-v-76129c22", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 110:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 111:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      count: 1
    };
  },
  onLoad: function onLoad() {
    this.count = 1;
  },

  props: {
    details: {},
    modal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    //减少商品数量
    jian: function jian() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
    close: function close() {
      this.$emit("close", false);
    }
  }
});

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.modal) ? _c('div', {
    staticClass: "modal"
  }, [_c('div', {
    staticClass: "close",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.close
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "contentimg"
  }, [_c('img', {
    attrs: {
      "src": _vm.details.url,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "contentprice"
  }, [_vm._v("\n      售价\n      "), _c('span', [_vm._v("￥" + _vm._s(_vm.details.price))])]), _vm._v(" "), _c('div', {
    staticClass: "count"
  }, [_c('span', [_vm._v("数量：")]), _vm._v(" "), _c('div', {
    staticClass: "addcount"
  }, [_c('i', {
    staticClass: "iconfont icon-jian left",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.jian
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "con"
  }, [_vm._v(_vm._s(_vm.count))]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-jia1 right",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.count += 1
      }
    }
  })], 1)]), _vm._v(" "), _c('button', {
    staticClass: "addgouwuche",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.$emit('add', _vm.details, _vm.count)
      }
    }
  }, [_vm._v("确认")])], 1)]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-76129c22", esExports)
  }
}

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    attrs: {
      "scroll-y": "",
      "enable-back-to-top": "true"
    }
  }, [_c('div', {
    staticClass: "details"
  }, [_c('div', {
    staticClass: "swiper"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": "false",
      "autoplay": "true",
      "interval": "3000",
      "duration": "500",
      "display-multiple-items": "1",
      "easing-function": "default",
      "circular": "true"
    }
  }, [_c('block', [_c('swiper-item', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('image', {
    staticClass: "slide-image",
    attrs: {
      "src": _vm.details.url
    }
  })])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('div', {
    staticClass: "details"
  }, [_vm._v(_vm._s(_vm.details.text) + "   " + _vm._s(_vm.details.details))]), _vm._v(" "), _c('div', {
    staticClass: "text_price"
  }, [_vm._v("\n          售价￥\n          "), _c('span', [_vm._v(_vm._s(_vm.details.price))])]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-fenxiang"
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "iconfont icon-shouye",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.totab('../index/main')
      }
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-gouwuche",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.to('../lists/main')
      }
    }
  }), _vm._v(" "), (!_vm.details.isshoucang) ? _c('i', {
    staticClass: "iconfont icon-shoucang2",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.addshoucang
    }
  }) : _c('i', {
    staticClass: "iconfont icon-shoucang1",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.cancelshoucang
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "button right",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.showmodal1
    }
  }, [_vm._v("立即购买")]), _vm._v(" "), _c('div', {
    staticClass: "button left",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.showmodal
    }
  }, [_vm._v("加入购物车")])]), _vm._v(" "), _c('bottommodal', {
    attrs: {
      "modal": _vm.modal,
      "details": _vm.details,
      "eventid": '6',
      "mpcomid": '1'
    },
    on: {
      "close": _vm.close,
      "add": _vm.addgouwuche
    }
  }), _vm._v(" "), _c('bottommodal', {
    attrs: {
      "modal": _vm.modal1,
      "details": _vm.details,
      "eventid": '7',
      "mpcomid": '2'
    },
    on: {
      "close": _vm.close,
      "add": _vm.buy
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-04103598", esExports)
  }
}

/***/ })

},[105]);