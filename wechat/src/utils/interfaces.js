const domain = 'http://liuhaooo.top:6001/'
// const domain = 'http://127.0.0.1:8000/'
const interfaces = {
    getopenid:`${domain}api/getopenid`,//获取用户openid
    zhuce:`${domain}api/zhuce`,//注册
    login:`${domain}api/login`,//登录
    getuserinfo:`${domain}api/getuserinfo`,//获取用户信息
    sendsms:`${domain}api/sendsms`,//发送短信验证码
    getstore:`${domain}api/getstore`,//获取商品
    addgouwuche:`${domain}api/addgouwuche`,//加入购物车
    delgouwuche:`${domain}api/delgouwuche`,//删除购物车
    adddongtai:`${domain}api/adddongtai`,//发动态（文字+图片）
    getdongtai:`${domain}api/getdongtai`,//获取动态
    adddongtaitext:`${domain}api/adddongtaitext`,//发动态（文字）
    getsort:`${domain}api/getsort`,//获取类别
    shoucang:`${domain}api/shoucang`,//加入收藏
    cancelshoucang:`${domain}api/cancelshoucang`,//取消收藏
    getshoucang:`${domain}api/getshoucang`,//获取收藏
    addaddress:`${domain}api/addaddress`,//添加地址
    getaddress:`${domain}api/getaddress`,//获取地址
    deleaddress:`${domain}api/deleaddress`,//删除地址
    setorder:`${domain}api/setorder`,//生成订单
    getorder:`${domain}api/getorder`,//获取订单
    delorder:`${domain}api/delorder`,//删除订单
    pay:`${domain}api/pay`,//下单订单
}
module.exports = interfaces