<template>
  <div>
    <div class="pay">
      <div>
        实付：
        <span>￥{{total}}</span>
      </div>
      <div class="button" @click="pay">结算</div>
    </div>
    <scroll-view scroll-y>
      <div class="order">
        <div class="list">
          <!-- 收货地址 -->
          <div class="address">
            <div class="content">
              <i class="iconfont icon-dizhi4"></i>
              <div>&emsp;点击选择收货地址</div>
              <i class="iconfont icon-arrow-right righticon"></i>
            </div>
          </div>
          <!-- 商品清单 -->
          <div class="store">
            <div class="content">
              <div class="tittle">购物清单</div>
              <div class="info">
                <img :src="details.url" />
                <div class="text">{{details.text}}</div>
                <div class="price">￥{{details.price}}</div>
                <div class="count">x{{details.count}}</div>
                <div class="prices">
                  合计:
                  <span>￥{{details.prices}}</span>
                </div>
              </div>
              <div class="textarea">
                买家留言
                <input
                  v-model="text"
                  class="weui-input"
                  placeholder="给卖家留言:(30字以内)"
                  placeholder-style="color:#b8b8b8;font-size: 30rpx;"
                />
              </div>
            </div>
          </div>
          <!-- 支付方式 -->
          <div class="payway">
            <div class="content">
              <title>支付方式</title>
              <div
                class="lists"
                v-for="(item,index) in payway"
                :key="index"
                @click="clickpayway(item.tittle,index)"
              >
                <i :class="'iconfont '+item.icon"></i>
                <span>&emsp;{{item.tittle}}</span>
                <i
                  :class="index==current ? 'iconfont icon-gou-blue righticon':'iconfont icon-yuanquan righticon'"
                ></i>
              </div>
            </div>
          </div>
          <!-- 价格列表 -->
          <div class="pricelist">
            <div class="content">
              <div>
                商品金额
                <span>￥{{details.prices}}</span>
              </div>
              <div>
                优惠抵扣
                <span>-￥{{discount}}</span>
              </div>
              <div>
                运费
                <span>+￥{{freight}}</span>
              </div>
              <div>
                实际支付
                <span>￥{{total}}</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      details: {},
      way: "微信支付",
      payway: [
        { icon: "icon-weixinzhifu1", tittle: "微信支付" },
        { icon: "icon-yue", tittle: "余额支付" }
      ],
      text: "", //留言
      discount: 0, //优惠
      freight: 0, //运费
      total: 0
    };
  },
  onShow() {
    this.changedata();
  },
  computed: {
    openid() {
      return this.$store.getters.openid;
    }
  },
  methods: {
    //处理vuex拿来的数据并计算价格
    changedata() {
      this.details = this.$store.getters.details;
      let mun = this.details.price * this.details.count;
      this.details.prices = mun.toFixed(2);
      this.total = this.details.prices - this.discount + this.freight;
    },
    //选择支付方式
    clickpayway(way, index) {
      this.current = index;
      this.way = way;
    },
    //结算
    pay() {
      let data = {
        openid: this.openid,
        id: this.details.id,
        payway: this.way,
        total: this.total,
        count: this.details.count,
        text: this.text
      };
      console.log(data);
    }
  }
};
</script>

<style scoped>
.order {
  width: 100%;
  height: 100vh;
  background: rgb(236, 236, 236);
  padding-top: 1rpx;
}
.list {
  color: #999;
  width: 96%;
  position: relative;
  right: 0;
  left: 0;
  margin: auto;
}
.address {
  border-radius: 20rpx;
  background: white;
  margin-top: 12rpx;
  height: 90rpx;
  line-height: 90rpx;
}
.address i {
  font-size: 40rpx;
  color: #55bcf3;
}
.address > .content {
  display: flex;
}
.store {
  border-radius: 20rpx;
  background: white;
  margin-top: 12rpx;
}
.content {
  width: 90%;
  position: relative;
  right: 0;
  left: 0;
  margin: auto;
}
.content > .tittle {
  display: flex;
  height: 90rpx;
  width: 100%;
  line-height: 88rpx;
}
.content > .info {
  position: relative;
  width: 100%;
  height: 300rpx;
  color: #b8b8b8;
  border-bottom: #f0f0f0 solid 1px;
  border-top: #f0f0f0 solid 1px;
}
.info img {
  height: 250rpx;
  width: 250rpx;
  position: absolute;
  top: 25rpx;
}
.info > .text {
  width: 35%;
  position: absolute;
  left: 300rpx;
  top: 10%;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.info > .price {
  position: absolute;
  right: 0px;
  top: 10%;
  font-size: 30rpx;
  text-align: right;
}
.info > .count {
  position: absolute;
  right: 0rpx;
  top: 40%;
  text-align: right;
}
.info > .prices {
  position: absolute;
  right: 0rpx;
  top: 75%;
  font-size: 30rpx;
  text-align: right;
}
.prices span {
  font-size: 36rpx;
  color: rgb(248, 104, 104);
}
.textarea {
  position: relative;
  height: 100rpx;
  line-height: 100rpx;
  box-sizing: border-box;
}
.textarea input {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 10%;
  z-index: 99;
}
/* ----------- */
.payway {
  position: relative;
  width: 100%;
  margin-top: 15rpx;
  background: white;
  border-radius: 20rpx;
}
.payway .lists {
  height: 100rpx;
  line-height: 100rpx;
  display: flex;
}
.lists span {
  font-size: 28rpx;
}
.lists i {
  font-size: 42rpx;
  color: #55bcf3;
}
.pricelist {
  position: relative;
  width: 100%;
  margin-top: 15rpx;
  margin-bottom: 50rpx;
  background: white;
  border-radius: 20rpx;
}
.righticon {
  position: absolute;
  right: 0;
  font-size: 40rpx;
  color: rgb(73, 182, 245);
}
.pay {
  width: 100%;
  height: 150rpx;
  background: white;
  position: fixed;
  bottom: 0px;
  z-index: 999;
}
.pay > .button {
  position: absolute;
  text-align: center;
  top: 10rpx;
  width: 160rpx;
  height: 90rpx;
  font-size: 30rpx;
  line-height: 90rpx;
  right: 20rpx;
  background: #2ba4e6;
  color: rgb(248, 248, 248);
  border-radius: 30rpx;
}
.pay div:nth-of-type(1) {
  position: absolute;
  left: 50rpx;
  top: 30rpx;
  font-size: 30rpx;
  color: #666;
  text-align: left;
}
.pay span {
  color: rgb(241, 107, 107);
  font-size: 40rpx;
}
.pricelist span {
  position: absolute;
  right: 0;
}
.pricelist > .content > div {
  margin-top: 20rpx;
  font-size: 28rpx;
}
</style>
