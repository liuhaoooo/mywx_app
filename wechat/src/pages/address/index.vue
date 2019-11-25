<template>
<div>
  <scroll-view scroll-y>
    <div>
      
    </div>
  </scroll-view>
  <button class="button" type="primary" :plain="false" @click="addaddress">新增收货地址</button>
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
.button{
  left: 0;
  right: 0;
  margin: auto;
  position: fixed;
  top: 88vh;
  width: 90%;
}
</style>
