'use strict';

const Service = require('egg').Service;

class OrderService extends Service {
    async setorder(data) {
        const { app } = this;
        const result = await app.mysql.insert('order', data);
        return result.affectedRows === 1 ? true : false
    }
}

module.exports = OrderService;
