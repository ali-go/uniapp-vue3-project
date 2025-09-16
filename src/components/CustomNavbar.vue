<template>
  <view class="custom-navbar" :style="styleObj">
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix"></slot>
    </view>
</template>

<script>
export default {
  name: 'CustomNavbar',
  props: {
  },
  data() {
    return {
      styleObj: {
        paddingTop: `${getApp().globalData.statusBarHeight}px`, // 状态栏高度
        height: `${getApp().globalData.navigationBarHeight}px`, // 导航栏高度
        lineHeight: `${getApp().globalData.navigationBarHeight}px`, // 导航栏高度
      }
    }
  },
  onLoad() {},
  methods: {},
}
</script>

<style scoped lang="scss">
.custom-navbar {
  text-align: center;
}
</style>
