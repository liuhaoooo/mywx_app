<template>
  <div class="list">
    <div class="option" v-for="(item,index) in datas" :key="index" @click="to(item.tourl)">
      <img :src="'../../static/listicon/'+item.imgurl" alt v-if="item.imgurl" />
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
  width: 160rpx;
  height: 160rpx;
  box-sizing: border-box;
}
.option img {
  position: absolute;
  top: 0;
  left: 20%;
  border-radius: 50%;
  width: 60%;
  height: 60%;
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
