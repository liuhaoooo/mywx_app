<template>
  <div>
    <div class="content">
      <div class="input">
        姓名
        <input
          v-model="address.name"
          class="weui-input"
          placeholder="收货人姓名"
          placeholder-style="color:#b8b8b8;font-size: 30rpx;"
        />
      </div>
      <div class="input">
        电话
        <input
          type="number"
          v-model="address.phone"
          class="weui-input"
          placeholder="收货人手机号"
          placeholder-style="color:#b8b8b8;font-size: 30rpx;"
        />
      </div>
      <div class="input">
        地区
        <picker
          mode="region"
          @change="bindRegionChange"
          :value="address.region"
          :custom-item="customItem"
        >
          <view class="picker">
            <div v-if="address.region.length==0">请选择地区</div>
            <div v-else>{{address.region[0]}}-{{address.region[1]}}-{{address.region[2]}}</div>
          </view>
        </picker>
      </div>
      <div class="input">
        地址
        <input
          v-model="address.details"
          class="weui-input"
          placeholder="详细地址信息"
          placeholder-style="color:#b8b8b8;font-size: 30rpx;"
        />
      </div>
    </div>
    <button class="button" type="primary" :plain="false" :disabled="disabled" @click="add">完成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: {
        name: "",
        phone: "",
        region: [],
        details: ""
      }
    };
  },
  computed: {
    disabled() {
      //监听表单是否输入完整
      const { name, phone, region, details } = this.address;
      if (name && phone && region.length > 0 && details) {
        return false;
      }
      return true;
    }
  },
  methods: {
    bindRegionChange(e) {
      this.address.region = e.target.value;
    },
    add() {
      console.log(this.address);
    }
  }
};
</script>

<style scoped>
.content {
  width: 90%;
  position: relative;
  right: 0;
  left: 0;
  margin: auto;
}
.input {
  position: relative;
  height: 100rpx;
  line-height: 100rpx;
  box-sizing: border-box;
  border-bottom: 1px rgb(233, 231, 231) solid;
  color: #666;
}
.input input,
.input > picker {
  width: 82%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  font-size: 26rpx;
}
.button {
  margin-top: 100rpx;
  width: 90%;
}
</style>
