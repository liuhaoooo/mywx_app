<template>
  <scroll-view scroll-y>
    <div class="me">
      <div class="header">
        <img src="/static/images/background.jpg" alt />
        <div class="userinfo">
          <div class="avatar">
            <img v-if="wxuserinfo" :src="wxuserinfo.avatarUrl" alt="">
            <img v-else src="/static/images/touxiang.png" alt />
          </div>
          <div class="name">
            <span v-if="wxuserinfo">{{wxuserinfo.nickName}}</span>
            <span v-else @click="to('tologin')">点击登录</span>
            <br />
            <i v-if="wxuserinfo" :class="'iconfont icon-xingbie'+wxuserinfo.gender"></i>
          </div>
        </div>
      </div>
      <div class="mid">
        <!-- icon列表 -->
        <div class="i">
          <iconliebiao1 :datas="datas"></iconliebiao1>
        </div>
        <div class="liebiao">
          <liebiao title="手机号" :text="phone" icon="icon-shouji"></liebiao>
          <liebiao title="收货地址" :text="address" icon="icon-dizhi" @click="to('address')"></liebiao>
          <liebiao title="修改密码" icon="icon-suo1" @click="to('password')"></liebiao>
          <liebiao title="关于我们" icon="icon-guanyuwomen" @click="to('about')"></liebiao>
        </div>
      </div>
      <div class="abc"></div>
      <div class="unlogin" @click="unlogin">退出登录</div>
    </div>
  </scroll-view>
</template>

<script>
import iconliebiao1 from "../../components/iconliebiao1/index";
import liebiao from "../../components/liebiao/index";
export default {
  data() {
    return {
      datas: [
        { title: "我的订单", icon:"icon-copy", tourl: "../about/main" },
        { title: "我的收藏", icon:"icon-favor", tourl: "../shoucanglist/main" },
        { title: "购物车", icon:"icon-cart", tourl: "../lists/main" },
        { title: "我的评价", icon:"icon-edit", tourl: "../about/main" }
      ],
      phone:"",
      address: "",
      wxuserinfo:null
    };
  },
  components: {
    iconliebiao1,
    liebiao
  },
  computed: {
    islogin() {
      return this.$store.getters.islogin;
    },
    userinfo(){
      return this.$store.getters.user
    }
  },
  onShow(){
    this.getwxuser()
    this.$fn.getopenid();
    this.phone = this.$fn.encryptionphone(this.userinfo.phone)
  },
  methods: {
    //获取微信用户信息
    getwxuser(){
      try {
            let value = wx.getStorageSync("wxuserinfo");
            if (value) {
                this.wxuserinfo = value
                // console.log("============="+JSON.stringify(this.wxuserinfo))
            }
        } catch (e) {
            throw e;
        }
    },
    //退出登录
    unlogin() {
      wx.showModal({
        title: "提示",
        content: "是否要退出登录",
        success(res) {
          if (res.confirm) {
            wx.reLaunch({ url: "../login/main" });
            try {
              wx.removeStorageSync("usertoken"); //同时删除本地token
            } catch (e) {}
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    //跳转页面
    to(where){
      wx.navigateTo({ url: `../${where}/main` });
    },
  }
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 180px;
}
.header img {
  width: 100%;
  height: 180px;
}
.userinfo {
  position: absolute;
  background: white;
  width: 90%;
  height: 280rpx;
  top: 50%;
  left: 5%;
  border-radius: 10px;
  box-shadow: #666 0px 0px 15px;
  box-sizing: border-box;
}
.avatar {
  width: 70px;
  height: 70px;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
}
.avatar > .img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.name {
  position: absolute;
  top: 30rpx;
  left: 200rpx;
  font-size: 40rpx;
  line-height: 80rpx;
  color: #666;
}
.mid {
  background: white;
  width: 100%;
  box-sizing: border-box;
}
.mid > .i {
  width: 100%;
  margin-top: 20%;
}
.mid > .liebiao {
  width: 100%;
  margin-top: 20px;
}
.unlogin {
  width: 100%;
  height: 50px;
  color: rgb(250, 91, 91);
  text-align: center;
  line-height: 50px;
  font-size: 18px;
}
.abc {
  width: 100%;
  height: 20px;
  background: rgb(238, 238, 238);
}
.icon-xingbie1{
  color: rgb(58, 176, 245);
  font-size: 44rpx
}
.icon-xingbie0{
  color: rgb(243, 38, 133);
  font-size: 44rpx
}
</style>
