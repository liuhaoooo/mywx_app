'use strict';

const Service = require('egg').Service;

class OrderService extends Service {
    async setorder(data) {
        const {
            app
        } = this;
        const result = await app.mysql.insert('order', data);
        return result.affectedRows === 1 ? true : false
    }
    async getorder(openid) {
        const {
            mysql
        } = this.app;
        let sql = 'SELECT address.*,store.*,`order`.* FROM `order` left join address on address.id=`order`.address_id left join store ON `order`.storeid=store.id where `order`.openid=' + mysql.escape(openid);
        let data = await mysql.query(sql);
        return data;
    }
    async delorder(openid, id) {
        const {
            app
        } = this;
        const result = await app.mysql.delete('order', {
            openid: openid,
            id: id
        });
        return result.affectedRows === 1 ? true : false
    }
}

module.exports = OrderService;