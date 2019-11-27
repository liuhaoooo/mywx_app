'use strict';

const Service = require('egg').Service;
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserService extends Service {
    async getopenid(url) {//获取openid
        const { ctx } = this;
        let result = await ctx.curl(url, { dataType: 'json' });
        if (result.status == 200) {
            return result.data;
        } else {
            ctx.status = 500;
            ctx.body = { msg: '获取openid出错' }
            return
        }
    }
    async zhuce(data) {//注册
        const { app } = this;
        let user = await app.mysql.get('user', { openid: data.openid })
        let phone = await app.mysql.get('user', { phone: data.phone })
        if (user) {
            return {
                msg: '该用户已注册',
                success: false
            }
        } else if (phone) {
            return {
                msg: '手机号已被注册',
                success: false
            }
        } else {
            await app.mysql.insert('user', data)
            return {
                msg: '注册成功',
                success: true
            }
        }
    }
    async getuserinfo(openid) {//获取用户信息
        let options = {
            where: { openid: openid },
            columns: ['phone']
        }
        let data = await this.app.mysql.select('user', options);
        return data;
    }
    async login(data) {//登录
        const { app } = this;
        let user = await app.mysql.get('user', { openid: data.openid })
        if (!user) {
            return {
                msg: '该用户未注册',
                success: false
            }
        } else {
            return new Promise((reslove, reject) => {
                bcrypt.compare(data.password, user.password).then(isMatch => {//匹配密码是否一致
                    if (isMatch) {
                        this.service.user.settoken(data.openid).then((token, err) => {
                            if (err) { reject(err) }
                            reslove({
                                msg: '登录成功',
                                success: true,
                                token
                            })
                        });
                        return
                    }
                    reslove({
                        msg: '密码错误',
                        success: false
                    })
                })

            })
        }
    }

    async getbcrypt(pwd) {//加密密码
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(pwd, salt);
        return hash;
    }

    async settoken(openid) {//生成token
        const { app } = this
        return new Promise((reslove, reject) => {
            const palyload = { openid: openid };//定义token规则
            jwt.sign(palyload, app.config.secret, { expiresIn: 3600 }, (err, token) => {//生成token          
                if (err) { reject(err) }
                else {
                    reslove(token)
                }
            });
        })
    }
}

module.exports = UserService;
