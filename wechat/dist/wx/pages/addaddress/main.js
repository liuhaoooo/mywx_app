require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(96);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_27519452_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(99);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-27519452"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_27519452_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\addaddress\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27519452", Component.options)
  } else {
    hotAPI.reload("data-v-27519452", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      address: {
        name: "",
        phone: "",
        region: [],
        details: ""
      }
    };
  },
  onShow: function onShow() {
    this.address.name = this.address.phone = this.address.details = "";
    this.address.region = [];
  },

  computed: {
    openid: function openid() {
      return this.$store.getters.openid;
    },
    disabled: function disabled() {
      //监听表单是否输入完整
      var _address = this.address,
          name = _address.name,
          phone = _address.phone,
          region = _address.region,
          details = _address.details;

      if (name && phone && region.length > 0 && details) {
        return false;
      }
      return true;
    }
  },
  methods: {
    //选择地区
    bindRegionChange: function bindRegionChange(e) {
      this.address.region = e.target.value;
    },

    //添加地址
    add: function add() {
      var _address2 = this.address,
          name = _address2.name,
          phone = _address2.phone,
          details = _address2.details;

      var region = this.address.region[0] + "-" + this.address.region[1] + "-" + this.address.region[2];
      var data = {
        openid: this.openid,
        name: name,
        phone: phone,
        details: details,
        region: region
      };
      this.$https.request({
        url: this.$interfaces.addaddress,
        method: "post",
        data: data
      }).then(function (res) {
        if (res.success) {
          wx.navigateBack({
            delta: 1
          });
          wx.showToast({
            title: res.msg,
            icon: "success",
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
    }
  }
});

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "input"
  }, [_vm._v("\n      姓名\n      "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address.name),
      expression: "address.name"
    }],
    staticClass: "weui-input",
    attrs: {
      "placeholder": "收货人姓名",
      "placeholder-style": "color:#b8b8b8;font-size: 30rpx;",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.address.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input"
  }, [_vm._v("\n      电话\n      "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address.phone),
      expression: "address.phone"
    }],
    staticClass: "weui-input",
    attrs: {
      "type": "number",
      "placeholder": "收货人手机号",
      "placeholder-style": "color:#b8b8b8;font-size: 30rpx;",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.address.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address.phone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input"
  }, [_vm._v("\n      地区\n      "), _c('picker', {
    attrs: {
      "mode": "region",
      "value": _vm.address.region,
      "custom-item": _vm.customItem,
      "eventid": '2'
    },
    on: {
      "change": _vm.bindRegionChange
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [(_vm.address.region.length == 0) ? _c('div', [_vm._v("请选择地区")]) : _c('div', [_vm._v(_vm._s(_vm.address.region[0]) + "-" + _vm._s(_vm.address.region[1]) + "-" + _vm._s(_vm.address.region[2]))])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "input"
  }, [_vm._v("\n      地址\n      "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address.details),
      expression: "address.details"
    }],
    staticClass: "weui-input",
    attrs: {
      "placeholder": "详细地址信息",
      "placeholder-style": "color:#b8b8b8;font-size: 30rpx;",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.address.details)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address.details = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "button",
    style: (_vm.disabled ? 'background: #80cdf7' : 'background: #2ba4e6'),
    attrs: {
      "type": "primary",
      "plain": false,
      "disabled": _vm.disabled,
      "eventid": '4'
    },
    on: {
      "click": _vm.add
    }
  }, [_vm._v("完成")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-27519452", esExports)
  }
}

/***/ })

},[95]);