<template>
  <div class="content" v-if="datas">
    <div class="option" v-for="(data,index) in datas" :key="index" @click="todetails(data.id)">
      <img :src="data.url" v-if="data.url" />
      <div class="text">{{data.text}}</div>
      <div class="detail">{{data.details}}</div>
      <span>￥{{data.price}}</span>
      <i class="iconfont icon-jia1"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    datas: Array
  },
  methods: {
    todetails(id) {
      wx.navigateTo({ url: "../details/main" });
      this.$store.dispatch('setproductid',id)
    }
  }
};
</script>

<style scoped>
.content {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  background: #f0f0f0;
}
.option {
  position: relative;
  margin-top: 8px;
  width: 48%;
  height: 260px;
  box-sizing: border-box;
  border-radius: 8px;
  background: white;
}
.option img {
  position: absolute;
  top: 0;
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 70%;
}
.option > .text {
  position: absolute;
  bottom: 110rpx;
  width: 100%;
  color: #666;
  font-size: 16px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.option >.detail{
  position: absolute;
  top: 404rpx;
  width: 95%;
  height: 20px;
  color: #999;
  font-size: 26rpx;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.option span {
  position: absolute;
  bottom: 0;
  width: 70%;
  color: rgb(253, 47, 47);
  font-size: 36rpx;
}
.option i {
  position: absolute;
  bottom: 0;
  right: 10px;
  color: rgb(253, 47, 47);
  font-size: 42rpx;
}
</style>
