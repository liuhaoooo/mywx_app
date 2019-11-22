<template>
  <div class="adddongtai">
    <scroll-view scroll-y>
      <textarea placeholder="输入内容" auto-focus v-model="textarea" />
      <div class="upload">
        <div class="img" v-for="(img,index) in files" :key="index">
          <img :src="img" />
        </div>
      </div>
      <div class="add" @click="chooseImage">
        <i class="iconfont icon-jia"></i>
      </div>
    </scroll-view>
    <button class="button" @click="upload">发送</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      textarea: ""
    };
  },
  onLoad() {
    this.files = [];
    this.textarea = "";
  },
  computed: {
    openid() {
      return this.$store.getters.openid;
    },
    phone() {
      return this.$store.getters.user.phone;
    }
  },
  methods: {
    //选择照片
    chooseImage() {
      let _this = this;
      wx.chooseImage({
        count: 4,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success(res) {
          for (let file of res.tempFilePaths) {
            _this.files.push(file);
          }
        }
      });
    },
    //上传
    upload() {
      if (this.files.length == 0 && !this.textarea) {
        wx.showToast({
          title: "内容不能为空",
          icon: "none",
          duration: 2000
        });
      } else if (this.files.length > 0) {
        this.uploadfile();
      } else {
        let dongtai_id = Math.random() * 100000;//每条动态生成一个唯一的id
        this.uploadtext(dongtai_id);
      }
    },
    //上传图片
    uploadfile() {
      let header = {}; //设置header
      let dongtai_id = Math.random() * 100000;//每条动态生成一个唯一的id
      try {
        let value = wx.getStorageSync("usertoken");
        if (value) {
          header.Authorization = value; //在请求头中携带token
        } else {
        }
      } catch (e) {
        throw e;
      }
      wx.showLoading({
        title: ""
      });
      let promise = Promise.all(
        this.files.map((file, index) => {
          return new Promise((resolve, reject) => {
            wx.uploadFile({
              url: this.$interfaces.adddongtai,
              filePath: file,
              name: "file",
              header,
              formData: { dongtai_id },
              success: res => {
                resolve(res.data);
              },
              fail: err => {
                reject(new Error("上传失败"));
              }
            });
          });
        })
      );
      promise
        .then(results => {
          //成功
          this.uploadtext(dongtai_id); //如果上传完图片执行上传文字方法
        })
        .catch(err => {
          //失败
          wx.hideLoading();
          wx.showToast({
            title: "发送失败",
            icon: "none",
            duration: 2000
          });
          console.log(err);
        });
    },
    //上传文本
    uploadtext(dongtai_id) {
      try {
        const res = wx.getSystemInfoSync();//获取手机型号
        let p = /\(.*?\)/g;
        let q = /\<.*?\>/g;
        res.model = res.model.replace(p, "").replace(q, "");
        this.$https
          .request({
            url: this.$interfaces.adddongtaitext,
            data: {
              openid: this.openid,
              text: this.textarea,
              phone: this.phone,
              model: res.model,
              dongtai_id
            },
            method: "post"
          })
          .then(res => {
            if (res.success) {
              wx.hideLoading();
              wx.switchTab({ url: "../faxian/main" });
              wx.showToast({
                title: "发送成功",
                icon: "success",
                duration: 2000
              });
            } else {
              wx.hideLoading();
              wx.showToast({
                title: "发送失败",
                icon: "none",
                duration: 2000
              });
            }
          });
      } catch (e) {}
    }
  }
};
</script>

<style scoped>
textarea {
  width: 90%;
  margin: 5%;
  height: 150rpx;
}
.upload {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
}
.upload > .img {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}
.img img {
  width: 100%;
  height: 100%;
}
.add {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgb(78, 180, 248);
  position: relative;
  bottom: 0;
  left: 42%;
  font-size: 50rpx;
  text-align: center;
  line-height: 60px;
  color: rgb(78, 180, 248);
}
.button {
  z-index: 100;
  position: fixed;
  background: rgb(43, 153, 226);
  bottom: 30px;
  color: aliceblue;
  left: 15%;
  width: 70%;
  height: 40px;
  line-height: 40px;
  border-radius: 8px;
}
</style>
