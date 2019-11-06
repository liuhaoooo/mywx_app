<template>
  <div>
    <scroll-view scroll-y enable-back-to-top="true">
      <!-- 地址 -->
      <!-- <div class="position">
        <i class="iconfont icon-weizhi lefticon"></i>
        <div class="positiontext">{{address}}</div>
      </div> -->
      <!-- 搜索 -->
      <mp-searchbar placeholder="请输入关键字搜索" @input="input"></mp-searchbar>
      <div class="mid">
        <!-- 轮播图 -->
        <swiper
          indicator-dots="false"
          autoplay="true"
          interval="3000"
          duration="500"
          display-multiple-items="1"
          easing-function="default"
          circular="true"
        >
          <block v-for="(item,index) in imgUrls" :key="index">
            <swiper-item>
              <image :src="item" class="slide-image" />
            </swiper-item>
          </block>
        </swiper>
        <!-- 列表 -->
        <div class="liebiao">
          <iconliebiao :datas="liebiao"></iconliebiao>
        </div>
        <div class="tittle">— 为您推荐 —</div>
        <div class="content">
          <msg :datas="datas"></msg>
        </div>
      </div>
      <div class="nomore">— 暂无更多 —</div>
    </scroll-view>
    <backtotop></backtotop>
  </div>
</template>

<script>
import backtotop from "../../components/backtotop/index.vue";
import msg from "../../components/msg/index.vue";
import iconliebiao from "../../components/iconliebiao/index.vue";
import QQMapWX from "../../../static/mapsdk/qqmap-wx-jssdk.js";
export default {
  components: {
    iconliebiao,
    msg,
    backtotop
  },
  data() {
    return {
      address: "",
      userinfo: {},
      inputtext: "",
      offset: 0,
      liebiao: [
        { title: "设置", imgurl: "1.png", tourl: "../fenlei/main" },
        { title: "设置", imgurl: "2.png", tourl: "../fenlei/main" },
        { title: "设置", imgurl: "3.png", tourl: "../fenlei/main" },
        { title: "分类", imgurl: "4.png", tourl: "../fenlei/main" },
        { title: "设置", imgurl: "1.png", tourl: "../fenlei/main" },
        { title: "设置", imgurl: "2.png", tourl: "../fenlei/main" },
        { title: "设置", imgurl: "3.png", tourl: "../fenlei/main" },
        { title: "分类", imgurl: "4.png", tourl: "../fenlei/main" }
      ],
      imgUrls: [
        "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
        "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640"
      ],
      datas: []
    };
  },
  onLoad() {
    this.$fn.getopenid(); //获取openid
    this.getposition(); //获取位置
    wx.showLoading({
        title: ""
      });
    this.getstore(); //获取商品展示
  },
  //下拉刷新
  onPullDownRefresh() {
    wx.showLoading({
        title: ""
      });
    this.datas = [];
    this.offset = 0;
    this.getstore();
  },
  //上拉加载
  onReachBottom() {
    this.offset += 8;
    this.getstore();
  },
  methods: {
    //获取用户位置
    getposition() {
      let _this = this;
      const map = new QQMapWX({
        key: "YTWBZ-TU7C5-NJ3IL-QBAX6-EIIPE-2OBOX"
      });
      wx.getLocation({
        type: "wgs84",
        success(res) {
          map.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: res => {
              _this.address = res.result.address;
              console.log(_this.address);
            },
            fail: res => {
              console.log(res);
            }
          });
        }
      });
    },
    //搜索
    input(e) {
      console.log(e.target.value);
    },
    //获取商品信息（懒加载）
    getstore() {
      let data = {
        offset: this.offset
      };
      this.$https
        .request({
          url: this.$interfaces.getstore,
          method: "post",
          data
        })
        .then(res => {
          if (res.length > 0) {
            for (let data of res) {
              this.datas.push(data);
            }
          }
          wx.hideLoading();
          wx.stopPullDownRefresh();
        });
    }
  }
};
</script>

<style scoped>
.position {
  position: relative;
  top: 0rpx;
  width: 100%;
  height: 42rpx;
  background: #ededed;
}
.position > .positiontext {
  position: absolute;
  text-align: right;
  line-height: 24px;
  top: 0;
  height: 100%;
  width: 80%;
  text-align: left;
  left: 8%;
  font-size: 14px;
  color: #15ade9;
}
.position > .lefticon {
  position: absolute;
  color: #15ade9;
  font-size: 28rpx;
  left: 10px;
  top: 1px;
}
.slide-image {
  width: 100%;
  height: 100%;
}
.mid > .liebiao {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.tittle{
  height: 90rpx;
  background: white;
  line-height: 90rpx;
  text-align: center;
  color: rgb(192, 192, 192);
}
.nomore {
  width: 100%;
  background: #f0f0f0;
  height: 40px;
  text-align: center;
  color: rgb(187, 187, 187);
  line-height: 40px;
}
</style>
