import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex)

const state = {
    islogin:false,//是否登录
    user:null,//用户信息
    productid:null,//商品id
    openid:'',
    wxuser:null,//微信用户信息
    details:null//商品详情
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})