<template>
  <div>
    <div class="content">
      <span>暂无物流信息</span>
    </div>
  </div>
</template>

<style scoped>
.content {
  position: fixed;
  top: 0;
  z-index: 20;
  text-align: center;
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
.content > span {
  position: absolute;
  top: 300rpx;
  left: 35%;
  color: #999;
}
</style>
