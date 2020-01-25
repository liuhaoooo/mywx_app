require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(179);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_698b7600_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(182);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(180)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-698b7600"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_698b7600_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\order\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-698b7600", Component.options)
  } else {
    hotAPI.reload("data-v-698b7600", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 181:
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
      current: 0,
      details: {},
      way: "微信支付",
      payway: [{ icon: "icon-weixinzhifu1", tittle: "微信支付" }, { icon: "icon-yue", tittle: "余额支付" }],
      text: "", //留言
      discount: 0, //优惠
      freight: 0, //运费
      total: 0
    };
  },
  onShow: function onShow() {
    this.changedata();
  },

  computed: {
    openid: function openid() {
      return this.$store.getters.openid;
    }
  },
  methods: {
    //跳转地址页面
    toaddress: function toaddress() {
      wx.navigateTo({ url: "../address/main" });
    },

    //处理vuex拿来的数据并计算价格
    changedata: function changedata() {
      this.details = this.$store.getters.details;
      var mun = this.details.price * this.details.count;
      this.details.prices = mun.toFixed(2);
      this.total = this.details.prices - this.discount + this.freight;
    },

    //选择支付方式
    clickpayway: function clickpayway(way, index) {
      this.current = index;
      this.way = way;
    },

    //结算
    pay: function pay() {
      var data = {
        openid: this.openid,
        id: this.details.id,
        payway: this.way,
        total: this.total,
        count: this.details.count,
        text: this.text
      };
      console.log(data);
    }
  }
});

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "pay"
  }, [_c('div', [_vm._v("\n      实付：\n      "), _c('span', [_vm._v("￥" + _vm._s(_vm.total))])]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.pay
    }
  }, [_vm._v("结算")])]), _vm._v(" "), _c('div', [_c('scroll-view', {
    attrs: {
      "scroll-y": ""
    }
  }, [_c('div', {
    staticClass: "order"
  }, [_c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "address",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toaddress
    }
  }, [_c('div', {
    staticClass: "content"
  }, [_c('i', {
    staticClass: "iconfont icon-dizhi4"
  }), _vm._v(" "), _c('div', [_vm._v(" 点击选择收货地址")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-arrow-right righticon"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "store"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "tittle"
  }, [_vm._v("购物清单")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('img', {
    attrs: {
      "src": _vm.details.url
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.details.text))]), _vm._v(" "), _c('div', {
    staticClass: "price"
  }, [_vm._v("￥" + _vm._s(_vm.details.price))]), _vm._v(" "), _c('div', {
    staticClass: "count"
  }, [_vm._v("x" + _vm._s(_vm.details.count))]), _vm._v(" "), _c('div', {
    staticClass: "prices"
  }, [_vm._v("\n                合计:\n                "), _c('span', [_vm._v("￥" + _vm._s(_vm.details.prices))])])]), _vm._v(" "), _c('div', {
    staticClass: "textarea"
  }, [_vm._v("\n              买家留言\n              "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.text),
      expression: "text"
    }],
    staticClass: "weui-input",
    attrs: {
      "placeholder": "给卖家留言:(30字以内)",
      "placeholder-style": "color:#b8b8b8;font-size: 30rpx;",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.text)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.text = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "payway"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('title', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_vm._v("支付方式")]), _vm._v(" "), _vm._l((_vm.payway), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "lists",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.clickpayway(item.tittle, index)
        }
      }
    }, [_c('i', {
      class: 'iconfont ' + item.icon
    }), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(item.tittle))]), _vm._v(" "), _c('i', {
      class: index == _vm.current ? 'iconfont icon-gou-blue righticon' : 'iconfont icon-yuanquan righticon'
    })], 1)
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "pricelist"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', [_vm._v("\n              商品金额\n              "), _c('span', [_vm._v("￥" + _vm._s(_vm.details.prices))])]), _vm._v(" "), _c('div', [_vm._v("\n              优惠抵扣\n              "), _c('span', [_vm._v("-￥" + _vm._s(_vm.discount))])]), _vm._v(" "), _c('div', [_vm._v("\n              运费\n              "), _c('span', [_vm._v("+￥" + _vm._s(_vm.freight))])]), _vm._v(" "), _c('div', [_vm._v("\n              实际支付\n              "), _c('span', [_vm._v("￥" + _vm._s(_vm.total))])])])]), _vm._v(" "), _c('div')])])])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-698b7600", esExports)
  }
}

/***/ })

},[178]);