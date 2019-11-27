'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getopenid() {//获取openid
    const { ctx } = this;
    const { appid, secret, code } = ctx.request.body;
    if (!code) {
      ctx.status = 404
      ctx.body = { msg: 'code为空' }
      return
    }
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
    let result = await this.service.user.getopenid(url)
    ctx.status = 200;
    ctx.body = result
  }
  async getuserinfo() {//获取用户信息
    const { ctx } = this;
    let data = await this.service.user.getuserinfo(ctx.request.body.openid)
    ctx.status = 200;
    ctx.body = data
  }
  async zhuce() {//注册
    const { ctx, service } = this;
    let { phone, code, openid } = ctx.request.body
    let isok = await service.aliyunsms.checkcode(phone, 'SMS_174022746', code)
    if (isok) {
      let data = {
        openid,
        password: await this.service.user.getbcrypt(ctx.request.body.password),
        phone
      }
      let res = await this.service.user.zhuce(data)
      ctx.status = 200;
      ctx.body = res
    } else {
      ctx.body = {
        msg: '验证码错误',
        success: false
      }
    }

  }
  async login() {//登录
    const { ctx } = this;
    let data = {
      openid: ctx.request.body.openid,
      password: ctx.request.body.password
    }
    let res = await this.service.user.login(data)
    ctx.status = 200;
    ctx.body = res
  }
  async sendsms() {//发送验证码
    const { ctx } = this;
    let { phone } = ctx.request.body;
    await this.service.aliyunsms.sendsms(phone, 'SMS_174022746')
    ctx.status = 200
  }
}

module.exports = UserController;
