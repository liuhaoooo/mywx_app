<template>
  <div class="concent">
    <!-- 左边 -->
    <scroll-view class="left" scroll-y="true" style="height:100vh">
      <div>
        <div
          class="leibie"
          v-for="(item,index) in fenlei"
          :key="index"
          @click="click(item,index)"
          :class="{ischeck:index==current}"
        >{{item}}</div>
      </div>
    </scroll-view>
    <!-- 右边 -->
    <scroll-view class="right" scroll-y="true" :style="'height:'+windowHeight+'px'">
      <div>
        <span class="span">{{span}}</span>
        <fenleidetails :data="data"></fenleidetails>
      </div>
    </scroll-view>
  </div>
</template>

<script>
import fenleidetails from "../../components/fenleidetails/index";
export default {
  data() {
    return {
      current: 0,
      fenlei: [],
      data: [],
      span:''
    };
  },
  components: {
    fenleidetails
  },
  onLoad() {
    this.getsort()
  },
  methods: {
    //点击分类列表
    click(name, index) {
      this.current = index;
      this.span = name
      this.getstore(name);
    },
    //获取商品
    getstore(name) {
      wx.showLoading({
        title: ""
      });
      let data = { name };
      this.$https
        .request({
          url: this.$interfaces.getstore,
          method: "post",
          data
        })
        .then(res => {
          this.data = res;
          wx.hideLoading();
        });
    },
    //获取类别
    getsort(){
      this.$https
        .request({
          url: this.$interfaces.getsort,
          method: "get"
        })
        .then(res => {
          this.fenlei = [];
          for(let data of res){
            this.fenlei.push(data.fenlei)
          }
          this.getstore(this.fenlei[0]);
          this.span = this.fenlei[0]
        });
    }
  }
};
</script>

<style scoped>
.concent {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
}
.left {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 20.99999999%;
  background: rgb(242, 242, 242);
}
.right {
  height: 100vh;
  position: absolute;
  background: white;
  right: 0;
  top: 0;
  width: 79%;
}
.leibie {
  text-align: center;
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  color: rgb(119, 119, 119);
  background: rgb(242, 242, 242);
  font-size: 30rpx;
}
.ischeck {
  background: white;
  color: rgb(110, 184, 245);
  box-sizing: border-box;
  /* border-left: 3px solid #2fa5e4 */
}
.span{
  color: rgb(189, 189, 189);
  font-size: 14px;
  margin-left: 28rpx;
}
</style>