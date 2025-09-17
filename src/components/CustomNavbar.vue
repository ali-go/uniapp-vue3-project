<template>
	<view class="custom-navbar" :style="styleObj">
		<slot name="prefix"></slot>
		<slot :navigationBarHeight="styleObj.height"></slot>
		<slot name="suffix"></slot>
	</view>
</template>

<script>
export default {
	name: 'CustomNavbar',
	props: {},
	data() {
		return {
			styleObj: {
				marginTop: `${getApp().globalData.statusBarHeight}px`, // 状态栏高度
				height: `${getApp().globalData.navigationBarHeight}px` // 导航栏高度
			}
		}
	},
	onLoad() {},
	methods: {}
}
</script>

<style scoped lang="scss">
.custom-navbar {
	text-align: center;
}
</style>
