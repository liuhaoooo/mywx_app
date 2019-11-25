<template>
<div>
  <scroll-view scroll-y>
    <div>
      <div class="bottom" @click="addaddress">新增收货地址</div>
    </div>
  </scroll-view>
</div>
</template>

<script>
export default {
  methods:{
    addaddress(){
      wx.navigateTo({url:"../addaddress/main"})
    }
  }
};
</script>

<style scoped>
.bottom{
  width: 100%;
  height: 100rpx;
  background: rgb(97, 162, 247);
  text-align: center;
  position: fixed;
  top: 88vh;
  line-height: 100rpx;
  color: #666;
}
</style>
