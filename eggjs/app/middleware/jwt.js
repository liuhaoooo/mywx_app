const jwt = require("jsonwebtoken");
module.exports = (option, app) => {
    return async function jwttoken(ctx, next) {
        if (ctx.header.authorization) {
            let token = ctx.header.authorization
            try {
                let istoken = await jwt.verify(token, ctx.app.config.secret);
                    if(istoken){
                        await next()
                    }
            } catch (err) {
                //token过期
                ctx.status = 401;
                if (err.name === 'TokenExpiredError') {
                    ctx.body = {msg:'登录过期，请重新登录'};
                } else if (err.name === 'JsonWebTokenError') {
                    ctx.body = {msg:'登录无效，请重新登录'};
                }
                return
            }
        } else {
            ctx.status = 401
            ctx.body = { msg: '请先登录' }
        }

    }
}