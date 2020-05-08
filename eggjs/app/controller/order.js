'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
    async setorder() {
        const {
            ctx
        } = this;
        const {
            openid,
            storeid,
            payway,
            total,
            count,
            text,
            address_id,
            isok
        } = ctx.request.body;
        let data = {
            openid,
            storeid,
            payway,
            total,
            count,
            text,
            address_id,
            createtime: new Date,
            isok
        }
        let istrue = await this.service.order.setorder(data)
        ctx.status = 200;
        ctx.body = istrue ? {
            success: true
        } : {
            success: false,
            msg: '生成订单失败'
        }
    }
    async getorder() {
        const {
            ctx
        } = this;
        let data = await this.service.order.getorder(ctx.request.body.openid);
        ctx.status = 200;
        ctx.body = data
    }
    async delorder() {
        const {
            ctx
        } = this;
        let {
            openid,
            id
        } = ctx.request.body;
        let isok = await this.service.order.delorder(openid, id)
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

module.exports = OrderController;