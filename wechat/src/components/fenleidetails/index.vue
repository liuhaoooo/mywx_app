<template>
  <div>
    <div v-if="data.length==0" style="text-align: center;line-height: 300px;color: #999;">暂时没有该分类</div>
    <div class="concent" v-for="(item,index) in data" :key="index" @click="todetails(item.id)">
      <img :src="item.url" alt />
      <div class="text">{{item.text}}</div>
      <div class="detail">{{item.details}}</div>
      <i class="iconfont icon-gouwuche1"></i>
      <span>￥{{item.price}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Array
  },
  methods: {
    todetails(id) {
      wx.navigateTo({ url: "../details/main" });
      this.$store.dispatch("setproductid", id);
    }
  }
};
</script>

<style scoped>
.concent {
  position: relative;
  width: 100%;
  height: 90px;
  background: white;
  margin-bottom: 5px;
  margin-top: 5px;
}
.concent img {
  width: 90px;
  height: 90px;
  position: absolute;
  left: 10px;
}
.text {
  position: absolute;
  width: 60%;
  height: 25%;
  top: 0;
  font-size: 16px;
  left: 105px;
  color: #666;
  text-overflow: ellipsis;
}
.detail {
  position: absolute;
  width: 60%;
  height: 46%;
  top: 27%;
  left: 105px;
  font-size: 12px;
  color: #999;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.concent span {
  position: absolute;
  left: 105px;
  bottom: 0;
  font-size: 14px;
  color: rgb(248, 68, 83);
}
.concent i {
  position: absolute;
  right: 30rpx;
  bottom: 0;
  color: #3db1f0;
  font-size: 40rpx;
}
</style>
