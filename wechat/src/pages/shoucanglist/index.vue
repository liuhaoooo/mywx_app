<template>
  <div class="list">
    <scroll-view scroll-y enable-back-to-top="true">
      <div v-if="!hasshoucang" class="content">
        <span>收藏竟然是空的~</span>
      </div>
      <div v-else class="slideview">
        <mp-slideview
          :buttons="slideButtons"
          @buttontap="slideButtonTap(item.id)"
          v-for="(item,index) in productInfo"
          :key="index"
        >
          <div class="info">
            <img :src="item.url" />
            <div class="text">{{item.text}}</div>
          </div>
        </mp-slideview>
      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productInfo: [],
      slideButtons: [
        {
          type: "warn",
          text: "取消收藏",
          extClass: "test",
          src: ""
        }
      ],
      hasshoucang: false
    };
  },
  computed: {
    openid() {
      return this.$store.getters.openid;
    }
  },
  onShow() {
    this.getstore();
  },
  //下拉刷新
  onPullDownRefresh() {
    this.getstore();
  },
  methods: {
    //获取用户收藏的商品
    getstore() {
      let data = {
        openid: this.openid
      };
      this.$https
        .request({
          url: this.$interfaces.getshoucang,
          method: "post",
          data
        })
        .then(res => {
          this.productInfo = res;
          this.hasshoucang = this.productInfo.length>0?true:false
          wx.stopPullDownRefresh();
        });
    },
    //左滑删除
    slideButtonTap(id) {
      let data = {
        openid: this.openid,
        commodityid: id
      };
      this.$https
        .request({
          url: this.$interfaces.cancelshoucang,
          method: "post",
          data
        })
        .then(res => {
          this.getstore();
          wx.showToast({
            title: res.msg,
            icon: "none",
            duration: 2000
          });
        });
    },
  }
};
</script>

<style scoped>
.content {
  position: fixed;
  top: 0;
  z-index: 20;
  text-align: center;
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
.content>span{
  position: absolute;
  top: 300rpx;
  left: 35%;
  color: #999;
}
.info {
  position: relative;
  width: 100%;
  height: 180rpx;
  background: #f7f7f7;
  color: #999;
  border-bottom: #e6e6e6 solid 1px;
}
.info img {
  height: 100%;
  width: 180rpx;
  position: absolute;
  left: 0;
}
.info > .text {
  width: 60%;
  position: absolute;
  right: 0;
  top: 20%;
}

</style>
