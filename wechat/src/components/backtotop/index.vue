<template>
  <div class="backtop iconfont icon-fanhuidingbu" v-if="isbacktop" @click="backtop"></div>
</template>

<script>
export default {
  data() {
    return {
      isbacktop: false
    };
  },

  //往下划到一定距离显示返回顶部按钮
  onPageScroll(e) {
    this.isbacktop = e.scrollTop > 800 ? true : false;
  },
  methods: {
    //返回顶部
    backtop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
  }
};
</script>

<style scoped>
.backtop {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: rgba(87, 180, 241, 0.582);
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 199;
  font-size: 40px;
}
</style>