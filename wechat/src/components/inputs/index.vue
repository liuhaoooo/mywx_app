<template>
  <div class="inputs" :style="'top:'+top+';border:'+border">
    <i :class="'iconfont '+icon" v-if="icon" />
    <input
      :maxlength="maxlength"
      :placeholder="placeholder"
      :password="password"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <icon :type="icontype" size="20" />
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    placeholder: String,
    border:{
      type:String,
      default:"rgb(224, 224, 224) solid 1px;"
    },
    maxlength:{
      type:Number,
      default:-1
    },
    icontype: {
      type: String,
      default: ""
    },
    top: String,
    password: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.inputs {
  position: absolute;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  /* border: rgb(224, 224, 224) solid 1px; */
}
.inputs input {
  position: absolute;
  top: 0;
  width: 75%;
  margin-left: 35px;
  height: 100%;
}
.inputs icon {
  position: absolute;
  right: 5px;
  top: 10px;
}
.inputs i {
  position: absolute;
  color: rgb(27, 180, 240);
  left: 8px;
  top: 8rpx;
  font-size: 38rpx;
}
</style>
