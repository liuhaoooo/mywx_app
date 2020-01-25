'use strict';

const Service = require('egg').Service;

class AddressService extends Service {
    async addaddress(data) {
        const { app } = this;
        const result = await app.mysql.insert('address', data);
        return result.affectedRows === 1 ? true : false
    }
    async getaddress(openid) {
        let data = await this.app.mysql.select('address',openid);
        return data;
    }
}

module.exports = AddressService;
