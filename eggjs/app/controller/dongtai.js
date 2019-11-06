'use strict';

const Controller = require('egg').Controller,
    fs = require('fs'),
    path = require('path'),
    awaitWriteStream = require('await-stream-ready').write,
    sendToWormhole = require('stream-wormhole');

class DongtaiController extends Controller {
    async adddongtai() {//用户添加动态的图片
        const { ctx } = this;
        const parts = ctx.multipart({ autoFields: true });//多个文件流
        let stream;
        let url = ''
        while ((stream = await parts()) != null) {
            if (stream.length) {
            } else if (!stream.filename) {
                continue
            } else {
                let target = path.join(this.config.baseDir, `app/public/img/${stream.filename}`);//创建服务器存储路径
                //`/home/public/dongtaiimg/${stream.filename}`
                //`http://101.37.25.179/dongtaiimg/${stream.filename}`
                const file = fs.createWriteStream(target);//创建可写流
                try {
                    await awaitWriteStream(stream.pipe(file));//将文件流写入file
                } catch (err) {
                    await sendToWormhole(stream);//出错关闭管道
                    throw err
                }
                url = `http://127.0.0.1:8000/public/img/${stream.filename}`
            }
        }
        let data = {//需要存入数据库的数据
            dongtai_id: parts.field.dongtai_id,
            url
        }
        await this.service.dongtai.adddongtaiimg(data)
        ctx.status = 200;
    }
    //保存动态的文本
    async adddongtaitext() {
        const { ctx } = this
        const { text, openid,model, phone, dongtai_id } = ctx.request.body;
        let data = {
            text,
            openid,
            phone,
            model,
            time: new Date(),
            dongtai_id,
        }
        let isok = await this.service.dongtai.adddongtaitext(data)
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
    async getdongtai() {//获取动态
        const { ctx } = this;
        let data = await this.service.dongtai.getdongtai(ctx.request.body.offset)
        ctx.status = 200;
        ctx.body = data
    }
}

module.exports = DongtaiController;
