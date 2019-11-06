'use strict';

const Controller = require('egg').Controller;

class StoreController extends Controller {
  async getstore() {//获取商品信息
    const { ctx } = this;
    let data;
    if (ctx.request.body.id && ctx.request.body.openid) {
      const {id,openid} = ctx.request.body
      data = await this.service.store.getdetails(id,openid)//获取某个商品详情
    } else if (ctx.request.body.openid) {
      data = await this.service.store.getgouwuche(ctx.request.body.openid)//获取用户购物车
    }else if (ctx.request.body.name) {
      data = await this.service.store.getfenlei(ctx.request.body.name)//获取分类商品
    }else {
      data = await this.service.store.getstore(ctx.request.body.offset)//获取所有商品
    }
    ctx.status = 200;
    ctx.body = data
  }
  
  async getsort() {//获取所以类别
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = await this.service.store.getsort();
  }
  
  async addgouwuche() {//添加到购物车
    const { ctx } = this;
    const { openid, commodityid, count } = ctx.request.body;
    let data = {
      openid,
      commodityid,
      count
    }
    let isok = await this.service.store.addgouwuche(data)
    ctx.status = 200;
    if (isok) {
      this.ctx.body = {
        success: true,
        msg: '添加成功'
      }
    } else {
      this.ctx.body = {
        success: false,
        msg: '添加失败'
      }
    }
  }

  async delgouwuche(){//删除购物车
    const { ctx } = this;
    let {openid,commodityid} = ctx.request.body;
    let isok = await this.service.store.delgouwuche(openid,commodityid)
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

  async shoucang(){//收藏商品
    const {ctx} = this;
    const { openid, commodityid } = ctx.request.body;
    let data = {
      openid,
      commodityid
    }
    let isok = await this.service.store.shoucang(data)
    ctx.status = 200;
    if (isok) {
      ctx.body = {
        success: true,
        msg: '收藏成功'
      }
    } else {
      ctx.body = {
        success: false,
        msg: '收藏失败'
      }
    }
  }
  async cancelshoucang(){//取消收藏
    const {ctx} = this;
    const { openid, commodityid } = ctx.request.body;
    let data = {
      openid,
      commodityid
    }
    let isok = await this.service.store.cancelshoucang(data)
    ctx.status = 200;
    if (isok) {
      ctx.body = {
        success: true,
        msg: '取消收藏成功'
      }
    } else {
      ctx.body = {
        success: false,
        msg: '取消收藏失败'
      }
    }
  }
  async getshoucang(){//获取收藏列表
    const {ctx} = this;
    let data = await this.service.store.getshoucang(ctx.request.body.openid);
    ctx.status = 200;
    ctx.body = data
  }
}

module.exports = StoreController;
