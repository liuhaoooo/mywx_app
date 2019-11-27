'use strict';

const Service = require('egg').Service;

class AddressService extends Service {
    async addaddress(data) {
        const { app } = this;
        const result = await app.mysql.insert('address', data);
        return result.affectedRows === 1 ? true : false
    }
}

module.exports = AddressService;
