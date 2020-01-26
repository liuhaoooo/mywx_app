'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
    async setorder() {
        const { ctx } = this;
        const { openid, storeid, payway, total, count, text, address_id } = ctx.request.body;
        let data = { openid, storeid, payway, total, count, text, address_id }
        let isok = await this.service.order.setorder(data)
        ctx.status = 200;
        ctx.body = isok ? { success: true} : { success: false, msg: '生成订单失败' }
    }
}

module.exports = OrderController;
