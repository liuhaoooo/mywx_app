<template>
  <div class="list">
    <div class="option" v-for="(item,index) in datas" :key="index" @click="to(item.tourl)">
      <i :class="'iconfont '+item.icon"></i>
      <div class="title">{{item.title}}</div>
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
    to(tourl){
      wx.navigateTo({ url: tourl });
    }
  },
};
</script>

<style scoped>
.list {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
}
.option {
  position: relative;
  width: 140rpx;
  height: 140rpx;
  box-sizing: border-box;
}
.option>i{
    position: absolute;
    left: 25%;
    font-size: 60rpx;
    color: #666
}
.title {
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 20px;
  text-align: center;
  color: #999;
  font-size: 14px
}
</style>
