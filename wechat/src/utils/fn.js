//vue中一些公共方法
import interfaces from './interfaces'
import https from './https'
import store from '../store/index'
const fn = {
  //获取openid
  getopenid() {
    wx.login({  
      success: res => {
        if (res.code) {
          let data = {
            appid: "wx555f1a207ea3e072",
            secret: "97a6c883303a59ffb45b8f28da571409",
            code: res.code
          };
          https
            .request({
              url: interfaces.getopenid,
              method: "post",
              data
            })
            .then(res => {
              store.dispatch('setopenid', res.openid)
              this.getuserinfo(res.openid)
            });
        }
      },
      fail: err => {
        throw err;
      }
    });
  },
  //获取用户信息
  getuserinfo(openid) {
    
    let data = {openid}
    https
      .request({
        url: interfaces.getuserinfo,
        method: "post",
        data
      })
      .then(res => {
        store.dispatch('setuser', res[0])
      });
  },
  //转换日期函数
  changedate(val) {
    let date = new Date(val);
    let Y = date.getFullYear() + "年";
    let M =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "月";
    let D =
      date.getDate() > 9
        ? date.getDate() + "日"
        : "0" + date.getDate() + "日";
    let h =
      date.getHours() > 9
        ? date.getHours() + ":"
        : "0" + date.getHours() + ":";
    let m =
      date.getMinutes() > 9
        ? date.getMinutes() + ""
        : "0" + date.getMinutes() + "";
    return Y + M + D + h + m;
  },
  //手机号码加密
  encryptionphone(phone){
    if(phone){
      phone=phone.substr(0,3)+"****"+phone.substr(7,10);
    return phone
    }
  }
}

export default fn