<template>
  <div>
    <div v-if="productInfo.length=='0'" class="content">
      <span>暂时没有订单</span>
    </div>
    <scroll-view v-else scroll-y enable-back-to-top="true">
      <div class="slideview">
        <mp-slideview
          :buttons="slideButtons"
          v-for="(item,index) in productInfo"
          :key="index"
          @buttontap="slideButtonTap(item.id)"
        >
          <div class="info">
            <img :src="item.url" @click="toDetails(item.storeid)" />
            <div class="text">
              <div style="font-size:28rpx">{{item.text}}</div>
              <div class="details">{{item.details}}</div>
            </div>
            <div class="price">
              <div>￥{{item.price}}</div>
              <br />
              <span style="font-size:22rpx">x{{item.count}}</span>
            </div>
            <div class="total" style="color:#666">共{{item.count}}件商品合计:￥{{item.total}}</div>
            <div class="botton">
              <div v-if="item.isok=='1'" @click="toLogistics">查看物流</div>
              <div v-else>取消订单</div>
              <div
                v-if="item.isok=='1'"
                style="border-color:rgb(58, 176, 245);color:rgb(58, 176, 245);"
              >确认收货</div>
              <div v-else>去付款</div>
            </div>
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
          text: "删除订单",
          extClass: "test",
          src: ""
        }
      ]
    };
  },
  computed: {
    openid() {
      return this.$store.getters.openid;
    }
  },
  onShow() {
    this.getorder();
  },
  //下拉刷新
  onPullDownRefresh() {
    this.getorder();
  },
  methods: {
    //获取用户收藏的商品
    getorder() {
      wx.showLoading({
        title: ""
      });
      let data = {
        openid: this.openid
      };
      this.$https
        .request({
          url: this.$interfaces.getorder,
          method: "post",
          data
        })
        .then(res => {
          this.productInfo = res;
          wx.hideLoading();
          wx.stopPullDownRefresh();
        });
    },
    toDetails(id) {
      wx.navigateTo({ url: "../details/main" });
      this.$store.dispatch("setproductid", id);
    },
    //左滑删除
    slideButtonTap(id) {
      let data = {
        openid: this.openid,
        id: id
      };
      this.$https
        .request({
          url: this.$interfaces.delorder,
          method: "post",
          data
        })
        .then(res => {
          this.getorder();
          wx.showToast({
            title: res.msg,
            icon: "none",
            duration: 2000
          });
        });
    },
    toLogistics() {
      wx.navigateTo({ url: "../logistics/main" });
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
  background: #f7f7f7;
}
.content > span {
  position: absolute;
  top: 300rpx;
  left: 35%;
  color: #999;
}
.info {
  position: relative;
  width: 100%;
  height: 280rpx;
  background: #f7f7f7;
  color: #999;
  border-bottom: #e6e6e6 solid 1px;
}
.info img {
  height: 130rpx;
  width: 130rpx;
  margin: 20rpx;
  border-radius: 10rpx;
  position: absolute;
  left: 0;
}
.info > .text {
  width: 50%;
  position: absolute;
  left: 160rpx;
  top: 10%;
  color: #666;
}
.text > .details {
  font-size: 24rpx;
  color: #999;
  width: 100%;
  max-height: 90rpx;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.info > .price {
  position: absolute;
  right: 20rpx;
}
.price > div {
  margin-top: 20rpx;
}
.info > .total {
  text-align: right;
  font-size: 26rpx;
  position: absolute;
  top: 150rpx;
  left: 0;
  width: 98%;
}
.info > .botton {
  display: flex;
  position: absolute;
  bottom: 0rpx;
  right: 0;
  width: 50%;
  height: 70rpx;
}
.botton > div {
  width: 160rpx;
  height: 46rpx;
  border-radius: 20rpx;
  font-size: 24rpx;
  border: rgb(212, 212, 212) solid 2rpx;
  color: #666;
  line-height: 46rpx;
  text-align: center;
  margin-right: 30rpx;
}
</style>
