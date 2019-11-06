<template>
  <div class="name">
    <button class="button" open-type="getUserInfo" plain="false" @getuserinfo="getUserInfo">微信授权登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    //获取用户信息
    getUserInfo(e) {
      if (e.mp.detail.errMsg == "getUserInfo:ok") {
        wx.setStorage({//将微信用户信息保存到本地
                key: "wxuserinfo",
                data: e.mp.detail.userInfo
              });
        wx.reLaunch({ url: "../login/main" });
      } else {
        wx.showToast({
          title: "授权失败",
          icon: "none",
          duration: 1000
        });
      }
    }
  }
};
</script>

<style scoped>
.name {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}
.name > .button {
  border: none;
  width: 70%;
  top: 40%;
  margin: 200px auto;
  background: #07c160;
  color: white;
}
</style>
