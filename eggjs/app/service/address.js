'use strict';

const Service = require('egg').Service;

class AddressService extends Service {
    async addaddress(data) {
        const { app } = this;
        const result = await app.mysql.insert('address', data);
        return result.affectedRows === 1 ? true : false
    }
    async getaddress(openid) {
        let data = await this.app.mysql.select('address',{where:{openid}});
        return data;
    }
    async deleaddress(openid,id) {//删除地址
        const { app } = this;
        const result = await app.mysql.delete('address', {openid,id});
        return result.affectedRows === 1 ? true : false
      }
}

module.exports = AddressService;
