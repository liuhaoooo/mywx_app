require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(199);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_61ce0aa5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(202);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(200)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61ce0aa5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_61ce0aa5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\upload\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61ce0aa5", Component.options)
  } else {
    hotAPI.reload("data-v-61ce0aa5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 200:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);


//
//
//
//
//
//
//
//
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
      files: [],
      textarea: ""
    };
  },
  onLoad: function onLoad() {
    this.files = [];
    this.textarea = "";
  },

  computed: {
    openid: function openid() {
      return this.$store.getters.openid;
    },
    phone: function phone() {
      return this.$store.getters.user.phone;
    }
  },
  methods: {
    //选择照片
    chooseImage: function chooseImage() {
      var _this = this;
      wx.chooseImage({
        count: 4,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: function success(res) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(res.tempFilePaths), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var file = _step.value;

              _this.files.push(file);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      });
    },

    //上传
    upload: function upload() {
      if (this.files.length == 0 && !this.textarea) {
        wx.showToast({
          title: "内容不能为空",
          icon: "none",
          duration: 2000
        });
      } else if (this.files.length > 0) {
        this.uploadfile();
      } else {
        var dongtai_id = Math.random() * 100000; //每条动态生成一个唯一的id
        this.uploadtext(dongtai_id);
      }
    },

    //上传图片
    uploadfile: function uploadfile() {
      var _this2 = this;

      var header = {}; //设置header
      var dongtai_id = Math.random() * 100000; //每条动态生成一个唯一的id
      try {
        var value = wx.getStorageSync("usertoken");
        if (value) {
          header.Authorization = value; //在请求头中携带token
        } else {}
      } catch (e) {
        throw e;
      }
      wx.showLoading({
        title: ""
      });
      var promise = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(this.files.map(function (file, index) {
        return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          wx.uploadFile({
            url: _this2.$interfaces.adddongtai,
            filePath: file,
            name: "file",
            header: header,
            formData: { dongtai_id: dongtai_id },
            success: function success(res) {
              resolve(res.data);
            },
            fail: function fail(err) {
              reject(new Error("上传失败"));
            }
          });
        });
      }));
      promise.then(function (results) {
        //成功
        _this2.uploadtext(dongtai_id); //如果上传完图片执行上传文字方法
      }).catch(function (err) {
        //失败
        wx.hideLoading();
        wx.showToast({
          title: "发送失败",
          icon: "none",
          duration: 2000
        });
        console.log(err);
      });
    },

    //上传文本
    uploadtext: function uploadtext(dongtai_id) {
      try {
        var res = wx.getSystemInfoSync(); //获取手机型号
        var p = /\(.*?\)/g;
        var q = /\<.*?\>/g;
        res.model = res.model.replace(p, "").replace(q, "");
        this.$https.request({
          url: this.$interfaces.adddongtaitext,
          data: {
            openid: this.openid,
            text: this.textarea,
            phone: this.phone,
            model: res.model,
            dongtai_id: dongtai_id
          },
          method: "post"
        }).then(function (res) {
          if (res.success) {
            wx.hideLoading();
            wx.switchTab({ url: "../faxian/main" });
            wx.showToast({
              title: "发送成功",
              icon: "success",
              duration: 2000
            });
          } else {
            wx.hideLoading();
            wx.showToast({
              title: "发送失败",
              icon: "none",
              duration: 2000
            });
          }
        });
      } catch (e) {}
    }
  }
});

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "adddongtai"
  }, [_c('scroll-view', {
    attrs: {
      "scroll-y": ""
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.textarea),
      expression: "textarea"
    }],
    attrs: {
      "placeholder": "输入内容",
      "auto-focus": "",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.textarea)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.textarea = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "upload"
  }, _vm._l((_vm.files), function(img, index) {
    return _c('div', {
      key: index,
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": img
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "add",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.chooseImage
    }
  }, [_c('i', {
    staticClass: "iconfont icon-jia"
  })], 1)]), _vm._v(" "), _c('button', {
    staticClass: "button",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.upload
    }
  }, [_vm._v("发送")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-61ce0aa5", esExports)
  }
}

/***/ })

},[198]);