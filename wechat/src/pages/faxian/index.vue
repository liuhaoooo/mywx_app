<template>
  <div>
    <scroll-view scroll-y>
      <dongtailist v-for="(data,index) in datas" :key="index" :data="data"></dongtailist>
    </scroll-view>
    <div class="tosend" @click="to">
      <i class="iconfont icon-jia"></i>
    </div>
    <backtotop></backtotop>
  </div>
</template>

<script>
import dongtailist from "../../components/dongtailist/index";
import backtotop from "../../components/backtotop/index";
export default {
  data() {
    return {
      offset: 0,
      datas: []
    };
  },
  components: {
    dongtailist,
    backtotop
  },
  onshow() {
    wx.showLoading({
        title: ""
      });
    this.getdongtai();
  },
  //下拉刷新
  onPullDownRefresh() {
    wx.showLoading({
        title: ""
      });
    this.datas = [];
    this.offset = 0;
    this.getdongtai();
  },
  //上拉加载
  onReachBottom() {
    this.offset += 10;
    this.getdongtai();
  },

  methods: {
    //获取动态内容
    getdongtai() {
      let data = {
        offset: this.offset
      };
      this.$https
        .request({
          url: this.$interfaces.getdongtai,
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
    },
    //跳转发送动态
    to() {
      wx.navigateTo({ url: "../upload/main" });
    }
  }
};
</script>

<style scoped>
.tosend {
  z-index: 100;
  width: 40px;
  height: 40px;
  background: rgba(61, 167, 238, 0.685);
  border-radius: 50%;
  position: fixed;
  bottom: 10px;
  left: 10px;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  color: rgb(255, 255, 255);
}
</style>