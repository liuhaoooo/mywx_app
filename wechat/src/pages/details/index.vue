<template>
  <div>
    <scroll-view scroll-y enable-back-to-top="true">
      <div class="details">
        <!-- 轮播 -->
        <div class="swiper">
          <swiper
            indicator-dots="false"
            autoplay="true"
            interval="3000"
            duration="500"
            display-multiple-items="1"
            easing-function="default"
            circular="true"
          >
            <block>
              <swiper-item>
                <image :src="details.url" class="slide-image" />
              </swiper-item>
            </block>
          </swiper>
        </div>
        <!-- 中间部分 -->
        <div class="text">
          <div class="details">{{details.text}}&ensp;&ensp;&ensp;{{details.details}}</div>
          <div class="text_price">
            售价￥
            <span>{{details.price}}</span>
          </div>
          <i class="iconfont icon-fenxiang"></i>
        </div>
      </div>
    </scroll-view>
    <!-- 底部 -->
    <div class="bottom">
      <div class="icon">
        <i class="iconfont icon-shouye" @click="totab('../index/main')"></i>
        <i class="iconfont icon-gouwuche" @click="to('../lists/main')"></i>
        <i class="iconfont icon-shoucang2" @click="addshoucang" v-if="!details.isshoucang"></i>
        <i class="iconfont icon-shoucang1" @click="cancelshoucang" v-else></i>
      </div>
      <div class="button right" @click="showmodal1">立即购买</div>
      <div class="button left" @click="showmodal">加入购物车</div>
    </div>
    <!-- 弹窗 -->
    <bottommodal :modal="modal" :details="details" @close="close" @add="addgouwuche"></bottommodal>
    <bottommodal :modal="modal1" :details="details" @close="close" @add="buy"></bottommodal>
  </div>
</template>

<script>
import bottommodal from "@/components/bottommodal/index";
export default {
  data() {
    return {
      details: {},
      modal: false,
      modal1: false,
      animation: null
    };
  },
  components: {
    bottommodal
  },
  computed: {
    id() {
      return this.$store.getters.productid;
    },
    openid() {
      return this.$store.getters.openid;
    }
  },
  onLoad() {
    this.modal = false;
    this.getstore();
  },
  //下拉刷新
  onPullDownRefresh() {
    this.getstore();
  },
  methods: {
    //获取商品详情
    getstore() {
      let data = {
        id: this.id,
        openid: this.openid
      };
      this.$https
        .request({
          url: this.$interfaces.getstore,
          method: "post",
          data
        })
        .then(res => {
          this.details = res;
          wx.stopPullDownRefresh();
        });
    },
    showmodal() {
      this.modal = true;
    },
    showmodal1(){
      this.modal1 = true
    },
    //加入购物车
    addgouwuche(detail,count) {
      wx.showLoading({
        title: ""
      });
      let data = {
        openid: this.openid,
        commodityid: this.id,
        count
      };
      this.$https
        .request({
          url: this.$interfaces.addgouwuche,
          method: "post",
          data
        })
        .then(res => {
          if (res.success) {
            wx.hideLoading();
            this.modal = false;
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
    //立即购买
    buy(detail,count) {
      this.modal1 = false;
      detail.count = count;
      this.$store.dispatch("setdetails",detail)
      this.to("../order/main");
    },
    //收藏操作
    shoucang(url) {
      let data = {
        openid: this.openid,
        commodityid: this.id
      };
      this.$https
        .request({
          url,
          method: "post",
          data
        })
        .then(res => {
          if (res.success) {
            this.getstore();
            wx.showToast({
              title: res.msg,
              icon: "none",
              duration: 2000
            });
          } else {
            wx.showToast({
              title: res.msg,
              icon: "none",
              duration: 2000
            });
          }
        });
    },
    //添加收藏
    addshoucang() {
      this.shoucang(this.$interfaces.shoucang);
    },
    //取消收藏
    cancelshoucang() {
      this.shoucang(this.$interfaces.cancelshoucang);
    },
    //跳转
    totab(url) {
      wx.switchTab({ url });
    },
    to(url) {
      wx.navigateTo({ url });
    },
    close(val) {
      this.modal = val;
      this.modal1 = val;
    }
  }
};
</script>

<style scoped>
.swiper swiper {
  width: 100%;
  height: 350px;
}
.slide-image {
  width: 100%;
  height: 100%;
}
.text {
  position: relative;
  top: -5rpx;
  z-index: 99;
  width: 100%;
  height: 80px;
  border-bottom: #e4e4e4 solid 1px;
}
.text > .details {
  position: absolute;
  left: 3px;
  width: 80%;
  color: #666;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.text_price {
  position: absolute;
  bottom: 8rpx;
  left: 5px;
  color: rgb(247, 75, 75);
  font-size: 14px;
}
.text_price span {
  font-size: 20px;
}
.text i {
  position: absolute;
  right: 10px;
  top: 20%;
  font-size: 30px;
  color: #42b0eb;
}
.bottom {
  position: fixed;
  bottom: 0px;
  z-index: 100;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background: rgb(255, 255, 255);
}
.bottom > .button {
  position: absolute;
  text-align: center;
  top: 0;
  width: 30%;
  height: 60%;
  font-size: 30rpx;
  line-height: 70rpx;
  border: #1296db solid 1px;
}
.bottom > .left {
  right: 32%;
  background: #ffffff;
  color: #1296db;
  border-radius: 16px 0 0 16px;
}
.bottom > .right {
  right: 2%;
  background: #1296db;
  color: rgb(248, 248, 248);
  border-radius: 0 16px 16px 0;
}
.bottom > .icon {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 36%;
  height: 65%;
  justify-content: space-around;
}
.icon i {
  color: #1296db;
  font-size: 64rpx;
  line-height: 36px;
}
</style>
