<template>
  <div>
    <scroll-view scroll-y enable-back-to-top="true">
      <div v-if="data.length>0">
        <div class="address" v-for="item in data" :key="item.id">
          <div class="content" @click="click(item)">
            <div class="name">{{item.name}}，{{item.phone}}</div>
            <div class="details">收货地址：{{item.region}}-{{item.details}}</div>
          </div>
        </div>
      </div>
    </scroll-view>
    <button class="button" type="primary" :plain="false" @click="addaddress">新增收货地址</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  onShow() {
    this.getdata();
  },
  computed: {
    openid() {
      return this.$store.getters.openid;
    }
  },
  //下拉刷新
  onPullDownRefresh() {
    this.getdata();
  },
  methods: {
    getdata() {
      wx.showLoading({
        title: ""
      });
      let data = {
        openid: this.openid
      };
      this.$https
        .request({
          url: this.$interfaces.getaddress,
          method: "post",
          data
        })
        .then(res => {
          this.data = res;
          wx.hideLoading();
          wx.stopPullDownRefresh();
        });
    },
    addaddress() {
      wx.navigateTo({
        url: "../addaddress/main"
      });
    },
    click(data) {
      this.$store.dispatch("setaddress", data);
      wx.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style scoped>
.button {
  left: 0;
  right: 0;
  margin: auto;
  position: fixed;
  top: 88vh;
  width: 90%;
  background: #1296db;
}
.address {
  margin-top: 10rpx;
  width: 100%;
  height: 100rpx;
  border-bottom: #ececec 1px solid;
}
.address > .content {
  position: relative;
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
.content > .name {
  color: #666;
  font-size: 30rpx;
  width: 90%;
}
.content > .details {
  width: 90%;
  color: #999;
  font-size: 24rpx;
  overflow: hidden;
  text-overflow: ellipsis; /*文字超出显示三点*/
  white-space: nowrap;
}
.content > i {
  color: #1296db;
  position: absolute;
  right: 10rpx;
  top: 20%;
}
</style>
