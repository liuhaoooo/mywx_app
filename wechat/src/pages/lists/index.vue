<template>
  <div class="list">
    <div v-if="!hasgouwuche" class="content">
      <span>购物车竟然是空的~</span>
      <img src="/static/images/gouwuche.jpg" alt />
    </div>
    <scroll-view v-else scroll-y enable-back-to-top="true">
      <div class="slideview">
        <mp-slideview
          :buttons="slideButtons"
          @buttontap="slideButtonTap(item.id)"
          v-for="(item,index) in productInfo"
          :key="index"
          throttle="60"
        >
          <div class="info">
            <img :src="item.url" />
            <div class="text">{{item.text}}</div>
            <div class="price">总价:{{item.price}}</div>
            <div class="count">数量:{{item.count}}</div>
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
          text: "删除",
          extClass: "test",
          src: ""
        }
      ],
      hasgouwuche: false
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
    //获取用户购物车
    getstore() {
      let data = {
        openid: this.openid
      };
      this.$https
        .request({
          url: this.$interfaces.getstore,
          method: "post",
          data
        })
        .then(res => {
          for (data of res) {
            //价格和数量相乘
            let mun = data.price * data.count;
            data.price = mun.toFixed(2);
          }
          this.productInfo = res;
          this.hasgouwuche = this.productInfo.length > 0 ? true : false;
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
          url: this.$interfaces.delgouwuche,
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
    }
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
  background: rgb(243, 241, 242);
}
.content img {
  position: absolute;
  margin: 100rpx auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50%;
  z-index: 999;
}
.content > span {
  position: absolute;
  top: 300rpx;
  left: 35%;
  color: #999;
  z-index: 888;
}
.info {
  position: relative;
  width: 100%;
  height: 130px;
  background: #f7f7f7;
  color: #999;
  border-bottom: #e6e6e6 solid 1px;
}
.info img {
  height: 100%;
  width: 130px;
  position: absolute;
  left: 0;
}
.info > .text {
  width: 60%;
  position: absolute;
  right: 0;
  top: 20%;
}
.info > .price {
  width: 160px;
  position: absolute;
  right: 10px;
  bottom: 30px;
  text-align: right;
  color: rgb(245, 89, 89);
}
.info > .count {
  width: 60px;
  position: absolute;
  right: 10px;
  bottom: 0;
  text-align: right;
}
</style>
