import Vue from 'vue'
import App from './App'
import store from './store/index'
import interfaces from './utils/interfaces'
import https from './utils/https'
import fn from './utils/fn'
import '../static/my_icon/iconfont.css';
import '../static/weui-miniprogram/weui-wxss/dist/style/weui.wxss';



Vue.prototype.$store = store;
Vue.prototype.$interfaces = interfaces;
Vue.prototype.$https = https;
Vue.prototype.$fn = fn;
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
