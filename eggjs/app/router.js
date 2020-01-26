'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jwt = app.middleware.jwt({}, app);
  //-------------个人信息部分-------------------------------------------
  router.post('/api/getopenid', controller.user.getopenid);//获取openid
  router.post('/api/getuserinfo', controller.user.getuserinfo);//获取用户信息
  router.post('/api/zhuce',controller.user.zhuce);//注册
  router.post('/api/login',controller.user.login);//登录
  router.post('/api/sendsms',controller.user.sendsms);//发送验证码注册
  //-------------商品部分-------------------------------------------
  router.post('/api/getstore',controller.store.getstore)//获取商品信息
  router.get('/api/getsort',controller.store.getsort)//获取商品类别
  router.post('/api/addgouwuche',jwt,controller.store.addgouwuche)//加入购物车
  router.post('/api/delgouwuche',jwt,controller.store.delgouwuche)//删除购物车
  router.post('/api/shoucang',jwt,controller.store.shoucang)//收藏商品
  router.post('/api/cancelshoucang',jwt,controller.store.cancelshoucang)//取消收藏
  router.post('/api/getshoucang',jwt,controller.store.getshoucang)//获取收藏列表
  //-------------动态部分-------------------------------------------------
  router.post('/api/adddongtai',jwt,controller.dongtai.adddongtai)//添加动态
  router.post('/api/adddongtaitext',jwt,controller.dongtai.adddongtaitext)
  router.post('/api/getdongtai',controller.dongtai.getdongtai)//获取动态
  //-------------收货地址部分-----------------------------------------------
  router.post('/api/addaddress',controller.address.addaddress);//添加收货地址
  router.post('/api/getaddress',controller.address.getaddress);//获取收货地址
  //-------------订单部分--------------------------------------------
  router.post('/api/setorder',controller.order.setorder);//生成订单
};
