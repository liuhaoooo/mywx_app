'use strict';

const Controller = require('egg').Controller;

class AddressController extends Controller {
  async addaddress() {//添加收货地址
    const { ctx } = this;
    const { openid, name, phone, region, details } = ctx.request.body;
    let data = { openid, name, phone, region, details }
    let isok = await this.service.address.addaddress(data)
    ctx.status = 200;
    ctx.body = isok ? { success: true, msg: '添加成功' } : { success: false, msg: '添加失败' }
  }
  async getaddress() {//获取
    const { ctx } = this;
    let data = await this.service.address.getaddress(ctx.request.body.openid);
    ctx.status = 200;
    ctx.body = data
  }
  async deleaddress() {//删除
    const { ctx } = this;
    let {openid,id} = ctx.request.body;
    let isok = await this.service.address.deleaddress(openid,id)
    ctx.status = 200;
    if (isok) {
      this.ctx.body = {
        success: true,
        msg: '删除成功'
      }
    } else {
      this.ctx.body = {
        success: false,
        msg: '删除失败'
      }
    }
  }
}

module.exports = AddressController;
