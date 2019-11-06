'use strict';

const Service = require('egg').Service;

class StoreService extends Service {
  async getstore(offset) {//获取所有商品
    let options = {
      // orders: [['id','desc']],
      limit: 6,
      offset: offset,
    };
    let data = await this.app.mysql.select('store', options);
    return data
  }
  async getdetails(id, openid) {//获取某个商品详情
    let data = await this.app.mysql.get('store', { id });
    let res = await this.app.mysql.get('collection', { commodityid:id,openid });
    let isshoucang = res ? true : false;
    data.isshoucang = isshoucang;
    return data;
  }
  async getfenlei(name) {//获取商品分类
    let options = {
      where: { fenlei: name }
    }
    let data = await this.app.mysql.select('store', options);
    return data;
  }
  async getsort() {//获取类别
    let sql = 'select distinct fenlei from store';
    const data = await this.app.mysql.query(sql);
    return data;
  }
  async addgouwuche(data) {//加入购物车
    const { mysql } = this.app;
    const options = {
      where: { commodityid: data.commodityid }
    }
    let isdata = await mysql.select("gouwuche", options)//判断是否已有商品
    if (isdata.length > 0) {//存在,更新count
      let sql = "UPDATE gouwuche SET count = count+" + mysql.escape(data.count) + " WHERE commodityid = " + mysql.escape(data.commodityid);
      let result = await mysql.query(sql);
      return result.affectedRows === 1 ? true : false
    } else {//不存在,添加商品
      const result = await mysql.insert('gouwuche', data)
      return result.affectedRows === 1 ? true : false
    }
  }
  async getgouwuche(openid) {//获取用户的购物车
    const { mysql } = this.app;
    let sql = 'SELECT store.*,gouwuche.count FROM store left join gouwuche on store.id=gouwuche.commodityid where openid=' + mysql.escape(openid);
    let data = await mysql.query(sql);
    return data;
  }
  async delgouwuche(openid, commodityid) {//删除购物车
    const { app } = this;
    const result = await app.mysql.delete('gouwuche', {
      openid: openid,
      commodityid: commodityid
    });
    return result.affectedRows === 1 ? true : false
  }
  async shoucang(data) {//收藏商品
    const res = await this.app.mysql.get('collection', data);//判断是否已收藏
    if (res) { return false }
    const result = await this.app.mysql.insert('collection', data);
    return result.affectedRows === 1 ? true : false
  }
  async cancelshoucang(data){//取消收藏
    const res = await this.app.mysql.get('collection', data);//判断是否已收藏
    if (!res) { return false }
    const result = await this.app.mysql.delete('collection', data);
    return result.affectedRows === 1 ? true : false
  }
  async getshoucang(openid) {//获取用户收藏的商品
    const { mysql } = this.app;
    let sql = 'SELECT store.* FROM store left join collection on store.id=collection.commodityid where openid=' + mysql.escape(openid);
    let data = await mysql.query(sql);
    return data;
  }
}

module.exports = StoreService;
