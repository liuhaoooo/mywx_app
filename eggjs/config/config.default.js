
'use strict';

module.exports = appInfo => {

  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1567564139878_2734';
  //token凭证
  config.secret = "liuhao"
  // 中间件
  config.middleware = [];
  //MySQL数据库
  config.mysql = {
    // client: {
    //   host: 'localhost',
    //   port: '3306',
    //   user: 'root',
    //   password: '123456',
    //   database: 'wechat',
    // },
    client: {
      host: '101.37.25.179',
      port: '3306',
      user: 'wechat',
      password: '321123aaa',
      database: 'wechat',
    },
    app: true,
    agent: false,
  };
  //redis
  config.redis = {
    client: {
      port: 6379,         
      host: '127.0.0.1',  
      password: '',
      db: 0,
    },
  }
  //关闭csrf
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [
      ""
    ]
  };
  //跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  //修改端口号
  config.cluster = {
    listen: {
      path: '',
      port: 8000,
      hostname: '127.0.0.1',
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
