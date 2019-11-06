<template>
  <div class="list">
    <div class="top">
      <img src="/static/images/avatar.png" alt />
      <span>{{data.phone}}</span>
    </div>
    <div class="text" v-if="data.text">{{data.text}}</div>
    <div class="mid" v-if="data.url">
      <div class="responsive" v-for="(img,index) in data.url" :key="index">
        <img :src="img" alt @click="seeimg(data.url,index)" />
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="msg">
      <span class="phone">{{data.model}}</span>
      <span class="date">{{data.time}}</span>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <i class="iconfont icon-zan"></i>
        </li>
        <li>
          <i class="iconfont icon-iconpinglun"></i>
        </li>
        <li>
          <i class="iconfont icon-zhuanfa-"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.data.phone = this.$fn.encryptionphone(this.data.phone); //加密手机号
    this.data.time = this.$fn.changedate(this.data.time); //转换日期
    if (this.data.url) {
      this.data.url = this.data.url.split(","); //把data.url转换为数组
    }
  },
  props: {
    data: Array
  },
  methods: {
    seeimg(url,index) {
      wx.previewImage({
        current: url[index], 
        urls: url
      });
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.list {
  margin-bottom: 10px;
  background: rgb(250, 250, 250);
  overflow: hidden;
}
.top {
  position: relative;
  top: 0;
  width: 100%;
  height: 85rpx;
}

.text {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  color: #333;
}
.top img {
  width: 40rpx;
  height: 40rpx;
  position: absolute;
  left: 20rpx;
  top: 14rpx;
}
.top span {
  position: absolute;
  top: 15%;
  left: 76rpx;
  color: #666;
}

.msg {
  width: 100%;
  height: 30px;
  text-align: right;
  color: rgb(173, 173, 173);
  margin-top: 10rpx;
  font-size: 14px;
}
.msg > .date {
  width: 60%;
  position: absolute;
  right: 6px;
  text-align: right;
}
.msg > .phone {
  position: absolute;
  left: 10px;
  text-align: left;
  width: 30%;
}
.bottom {
  width: 100%;
  height: 30px;
}
.bottom ul {
  position: absolute;
  right: -44rpx;
}
.bottom ul li {
  float: left;
  margin-right: 80rpx;
  color: #4fb9f1;
}
li i {
  font-size: 40rpx;
}

.mid {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
}
.responsive {
  width: 49.9%;
  overflow: hidden;
  height: 360rpx;
}

.responsive img {
  width: 100%;
}

@media only screen and (max-width: 400px) {
  .responsive {
    width: 49.9%;
    max-height: 360rpx;
  }
}

@media only screen and (max-width: 300px) {
  .responsive {
    width: 100%;
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
</style>
