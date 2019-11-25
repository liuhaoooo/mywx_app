<template>
  <div>
    <!-- 登录 -->
    <div class="login">
      <div class="avatar">
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <div class="name">
        <open-data type="userNickName"></open-data>
      </div>

      <inputs
        maxlength="15"
        icon="icon-suo"
        placeholder="请输入密码,长度6~15"
        :icontype="type"
        v-model="password"
        top="38%"
        password="true"
      ></inputs>

      <inputs
        maxlength="11"
        type="number"
        icon="icon-shoujihao"
        placeholder="请输入手机号码"
        :icontype="type1"
        v-model="phone"
        top="50%"
        v-if="islogin"
      ></inputs>

      <div class="code">
        <inputs
          maxlength="6"
          type="number"
          icon="icon-yanzhengma"
          placeholder="请输入验证码"
          :icontype="type2"
          v-model="code"
          v-if="islogin"
        ></inputs>
      </div>
      <button
        class="codebuttom"
        v-if="islogin"
        @click="sendsms"
        :disabled="count != '获取验证码'"
      >{{count}}</button>

      <button
        class="button zhuce"
        plain="false"
        v-if="islogin"
        @click="zhuce"
        :disabled="disabled"
      >注册</button>
      <button class="button denglu" plain="false" @click="login" v-else :disabled="disabled1">登录</button>

      <div
        class="tologin"
        v-if="islogin"
        @click="islogin=!islogin;password='';disabled1 = true"
      >已注册？去登录</div>
      <div class="tologin" v-else @click="islogin=!islogin;password='';phone='';code=''">未注册？去注册</div>
    </div>
  </div>
</template>

<script>
import inputs from "../../components/inputs/index";
export default {
  data() {
    return {
      disabled: true, //注册按钮是否能用
      disabled1: true, //登录按钮是否能用
      password: "",
      phone: "",
      type: "", //输入框右边的图标
      type1: "",
      type2: "",
      islogin: false, //切换注册登录
      code: "",
      count: "获取验证码", //倒计时
      timer: null //计时器
    };
  },
  computed: {
    openid() {
      return this.$store.getters.openid;
    }
  },
  components: {
    inputs
  },
  onLoad() {
    this.password = "";
    this.phone = "";
  },
  methods: {
    //注册
    zhuce() {
      wx.showLoading({
        title: "注册中"
      });
      let data = {
        openid: this.openid,
        password: this.password,
        phone: this.phone,
        code: this.code
      };
      this.$https
        .request({
          url: this.$interfaces.zhuce,
          method: "post",
          data
        })
        .then(res => {
          if (res.success) {
            //注册成功
            wx.hideLoading();
            wx.showToast({
              title: res.msg,
              icon: "success",
              duration: 2000
            });
            this.islogin = false; //注册成功跳转登录界面
            this.login();//注册成功自动登录
            // this.password = "";
            // this.phone = "";
          } else {
            //注册失败
            wx.hideLoading();
            wx.showToast({
              title: res.msg,
              icon: "none",
              duration: 2000
            });
          }
        });
    },
    //登录
    login() {
      wx.showLoading({
        title: "登陆中"
      });
      const data = {
        openid: this.openid,
        password: this.password
      };
      this.$https
        .request({
          url: this.$interfaces.login,
          method: "post",
          data
        })
        .then(res => {
          if (res.success) {
            if (res.token) {
              wx.setStorage({//将token保存到本地
                key: "usertoken",
                data: res.token
              });
            }
            wx.hideLoading();
            this.$store.dispatch("setislogin", true);//改变vuex里的登录状态
            wx.switchTab({ url: "../index/main" });//跳转主页
            wx.showToast({
              title: res.msg,
              icon: "success",
              duration: 2000
            });
          } else {
            wx.hideLoading();
            wx.showToast({
              title: res.msg,
              icon: "none",
              duration: 2000
            });
          }
        });
    },
    //发送短信验证码
    sendsms() {
      if (this.type == "success" && this.type1 == "success") {
        //手机号密码已填写正确
        wx.showLoading({
          title: "发送短信中"
        });
        this.$https
          .request({
            url: this.$interfaces.sendsms,
            data: {
              phone: this.phone
            },
            method: "post"
          })
          .then(res => {
            this.code = "";
            this.countdown(60);
            wx.hideLoading();
            wx.showToast({
              title: res.msg,
              icon: "none",
              duration: 2000
            });
          });
      } else {
        //手机号密码未填写正确
        wx.showToast({
          title: "请正确输入",
          icon: "none",
          duration: 2000
        });
        this.password = "";
        this.password1 = "";
      }
    },
    //倒计时
    countdown(sec) {
      this.timer = setInterval(() => {
        this.count = sec;
        sec--;
        if (sec == "00") {
          this.count = "获取验证码";
          clearInterval(this.timer);
          return;
        }
        if (sec < 10) {
          sec = "0" + sec;
        }
        this.count = sec;
      }, 1000);
    },
    //判断input右边图标是否为绿
    isinputok() {
      if (
        this.type == "success" &&
        this.type1 == "success" &&
        this.type2 == "success"
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    }
  },
  //监听本页面所有输入框
  watch: {
    password() {
      //监听密码输入
      if (!this.password) {
        this.type = "";
        this.disabled1 = true;
      } else if (this.password.length < 6) {
        this.type = "warn";
        this.disabled1 = true;
      } else {
        this.type = "success";
        this.disabled1 = false;
      }
    },
    phone() {
      //监听手机号输入
      let tel = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      if (!this.phone) {
        this.type1 = "";
      } else if (tel.test(this.phone)) {
        this.type1 = "success";
      } else {
        this.type1 = "warn";
      }
    },
    code() {
      //监听验证码输入
      if (!this.code) {
        this.type2 = "";
      } else if (this.code.length < 6) {
        this.type2 = "warn";
      } else {
        this.type2 = "success";
      }
    },
    //监听input右边图标是否为绿
    type() {
      this.isinputok();
    },
    type1() {
      this.isinputok();
    },
    type2() {
      this.isinputok();
    }
  }
};
</script>

<style scoped>
.login {
  width: 70%;
  position: relative;
  height: 500px;
  left: 15%;
}
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  left: 39%;
}
.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.name {
  width: 100%;
  height: 40px;
  color: #333;
  position: absolute;
  top: 120px;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
}
.pwd {
  position: absolute;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: rgb(224, 224, 224) solid 1px;
}
.pwdpos {
  top: 430rpx;
}
.pwdpos1 {
  top: 550rpx;
}
.login > .button {
  position: absolute;
  width: 100%;
  background: #1bb4f0;
  border: none;
  color: aliceblue;
}
.login > .zhuce {
  top: 75%;
}
.login > .denglu {
  top: 55%;
}
.pwd input {
  position: absolute;
  top: 0;
  width: 75%;
  margin-left: 13%;
  height: 100%;
}
.pwd icon {
  position: absolute;
  right: 5px;
  top: 10px;
}
.pwd i {
  position: absolute;
  color: rgb(27, 180, 240);
  left: 8px;
  top: 8px;
  font-size: 38rpx;
}
.tologin {
  position: fixed;
  bottom: 50px;
  width: 70%;
  text-align: center;
  color: #666;
}
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(48, 48, 48, 0.562);
  overflow: hidden;
  z-index: 200;
}
.modal > .mid {
  position: absolute;
  top: 30%;
  left: 20%;
  width: 60%;
  height: 20%;
  background: rgb(243, 243, 243);
  border-radius: 6px;
}
.mid > .title {
  position: absolute;
  top: 0;
  height: 20%;
  width: 100%;
  font-size: 20px;
  color: #666;
  text-align: center;
}

.mid > .bottom {
  position: absolute;
  border-top: rgb(211, 211, 211) solid 1px;
  text-align: center;
  line-height: 40px;
  bottom: 0;
  width: 50%;
  height: 30%;
  color: #666;
}
.mid > .right {
  right: 0;
}
.mid > .left {
  border-right: rgb(211, 211, 211) solid 1px;
  left: 0;
}
.code {
  width: 65%;
  position: absolute;
  left: 0;
  top: 62%;
}
.login > .codebuttom {
  margin: 0;
  padding: 0;
  width: 30%;
  height: 8%;
  position: absolute;
  background: rgb(27, 180, 240);
  border: none;
  right: 0;
  top: 62%;
  text-align: center;
  color: white;
  border-radius: 6px;
  font-size: 14px;
  line-height: 40px;
  outline: none;
}
.login button[disabled] {
  background-color: rgba(94, 197, 238, 0.7);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
