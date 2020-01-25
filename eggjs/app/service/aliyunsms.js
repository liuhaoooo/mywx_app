'use strict';

const Service = require('egg').Service;
const SMSClient = require('@alicloud/pop-core')

class AliyunsmsService extends Service {

    async sendsms(PhoneNumbers, TemplateCode) {//发送短信验证码
        const { app, ctx } = this
        const endpoint = "http://sms1.94008.com:8080/sms/send"
        let smsClient = new SMSClient({//实例化
            accessKeyId: 'pVcuzmC1svF1pSGhXhcQCg==',
            secretAccessKey: 'h7dZODLw41Rve3nxECGVgw==',
            endpoint,
            apiVersion: "2019-09-14"
        })
        let code = ""
		for(let i=0;i<6;i++){
			let str = Math.floor(Math.random() * 8) + 1
			code+=str
		}//随机生成6位数
        
        let params = {//需要传的参数
            PhoneNumbers,//手机号
            SignName: '简单小程序',
            TemplateCode,//短信模板
            Action: 'SendSms',
            TemplateParam: `{"code":${code}}`
        }

        let isok = await this.service.aliyunsms.sms(smsClient, params);
        if (isok == "ok") {
            let key = await app.redis.exists(`code_${PhoneNumbers}_${TemplateCode}`)//查询是否有key
            if (key == 1) {
                await app.redis.del(`code_${PhoneNumbers}_${TemplateCode}`)//如果有，删除之前的key
            }
            await app.redis.set(`code_${PhoneNumbers}_${TemplateCode}`, code, 'EX', 60)//短信发送成功，将验证码存在redis
            ctx.body = {
                msg: '短信发送成功',
                success: true
            }
        } else {
            ctx.body = {
                msg: '发送失败,稍后再试',
                success: false
            }
        }
    }

    async sms(smsClient, params) {//发送短信验证码判断是否发送成功
        return new Promise((resolve, reject) => {
            smsClient.request('/', params, { method: 'GET' })
                .then(res => {
                    if (res.data == 'ok') {
                        resolve(res.data)
                    }
                }, err => {
                    console.log(err)
                    reject(err)
                })
        })

    }

    async checkcode(PhoneNumbers, TemplateCode, code) {//校验验证码
        const data = await this.app.redis.get(`code_${PhoneNumbers}_${TemplateCode}`);
        if (code == data) {
            return true
        } else {
            return false
        }
    }

}

module.exports = AliyunsmsService;
