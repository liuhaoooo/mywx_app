<template>
  <div class="list" @click="$emit('click')">
    <i v-if="icon" :class="'iconfont '+icon+' lefticon'"></i>
    <div class="title">{{title}}</div>
    <div v-if="text" class="text">{{text}}</div>
    <i class="iconfont icon-arrow-right righticon"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title:String,
    text:String,
    icon:String
  }
};
</script>

<style scoped>
.list{
    position: relative;
    width: 100%;
    height: 50px;
}
.title{
    position: absolute;
    height: 100%;
    left: 46px;
    line-height: 50px;
    font-size: 18px;
    color: #666
}
.text{
    position: absolute;
    text-align: right;
    height: 100%;
    right: 46px;
    line-height: 50px;
    font-size: 16px;
    color: #999;
}
.list i{
    color: rgb(182, 182, 182);
    font-size: 20px;
}
.list>.lefticon{
    position: absolute;
    left: 16px;
    top:19%;
}
.list>.righticon{
    position: absolute;
    right: 16px;
    top:19%;
}
</style>
