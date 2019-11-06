<template>
  <!-- 底部弹窗 -->
  <div class="modal" v-if="modal">
    <div class="close" @click="close"></div>
    <div class="content">
      <div class="contentimg">
        <img :src="details.url" alt />
      </div>
      <div class="contentprice">
        售价
        <span>￥{{details.price}}</span>
      </div>
      <div class="count">
        <span>数量：</span>
        <div class="addcount">
          <i class="iconfont icon-jian left" @click="jian"></i>
          <div class="con">{{count}}</div>
          <i class="iconfont icon-jia1 right" @click="count+=1"></i>
        </div>
      </div>
      <button class="addgouwuche" @click="$emit('add', details,count)">确认</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 1
    };
  },
  onLoad() {
    this.count = 1;
  },
  props: {
    details: {},
    modal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    //减少商品数量
    jian() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
    close() {
      this.$emit("close", false);
    }
  }
};
</script>

<style scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(133, 133, 133, 0.637);
  z-index: 100;
}
.content {
  width: 100%;
  height: 520rpx;
  position: absolute;
  bottom: 0;
  background: white;
  z-index: 101;
  animation: mymove 0.3s infinite;
  animation-iteration-count: 1;
}
@keyframes mymove {
  from {
    bottom: -520rpx;
  }
  to {
    bottom: 0px;
  }
}
.modal > .close {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.content > .contentimg {
  width: 200rpx;
  background: #ffffff;
  height: 200rpx;
  position: absolute;
  border-radius: 8px;
  box-shadow: 10rpx 10rpx 10rpx #888888;
  left: 20px;
  top: -20px;
}
.contentimg img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.contentprice {
  position: absolute;
  top: 30rpx;
  right: 20%;
  font-size: 16px;
  color: rgb(241, 85, 85);
}
.contentprice span {
  font-size: 20px;
}
.content > .count {
  position: absolute;
  bottom: 150rpx;
  box-sizing: border-box;
  width: 100%;
  height: 70rpx;
  font-size: 18px;
  padding-top: 10px;
  color: #999;
  border-top: rgb(236, 236, 236) solid 1px;
  background: #ffffffc0;
}
.addcount > .left {
  position: absolute;
  left: 3px;
  line-height: 30px;
  font-size: 20px;
  color: rgb(163, 163, 163);
}
.addcount > .right {
  position: absolute;
  right: 3px;
  top: 0;
  line-height: 30px;
  font-size: 20px;
  color: #1296db;
}
.addcount > .con {
  width: 100%;
  text-align: center;
}
.count span {
  position: absolute;
  left: 10px;
}
.addcount {
  width: 80px;
  position: absolute;
  right: 10px;
}
.addgouwuche {
  position: absolute;
  bottom: 20px;
  left: 5%;
  width: 90%;
  height: 36px;
  background: #1296db;
  border-radius: 16px;
  color: #ffffff;
  line-height: 36px;
  z-index: 101;
}
</style>
