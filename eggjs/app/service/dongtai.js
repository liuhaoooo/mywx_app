'use strict';

const Service = require('egg').Service;

class DongtaiService extends Service {
  //添加动态
  async adddongtaitext(data) {
    const result = await this.app.mysql.insert('dongtai',data);
    return result.affectedRows === 1 ? true : false
  }
  async adddongtaiimg(data) {
    const result = await this.app.mysql.insert('dongtai_img',data);
    return result.affectedRows === 1 ? true : false
  }
  //获取动态
  async getdongtai(offset){
    const { mysql } = this.app;
    let sql= 'select dongtai.*,group_concat(dongtai_img.url) as url from dongtai,dongtai_img  where dongtai.dongtai_id = dongtai_img.dongtai_id group by dongtai.id,dongtai_img.dongtai_id ORDER BY `id` DESC LIMIT '+mysql.escape(offset)+', 10'
    let data = await mysql.query(sql);
    return data;
  }
}

module.exports = DongtaiService;
