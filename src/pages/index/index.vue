<template>
	<view class="page-container">
		<CustomNavbar>
			<view class="navbar-text">跨境E路通</view>
		</CustomNavbar>
		<view class="top-box">
			<button>注册/登录</button>
			<image src="" mode="scaleToFill" />
		</view>
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'

export default {
	components: {
		CustomNavbar
	},
	data() {
		return {}
	},
	onLoad() {},
	methods: {}
}
</script>

<style scoped lang="scss">
.navbar-text {
	padding-left: 36rpx;
	text-align: left;
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 500;
	font-size: 34rpx;
	color: #323233;
}

.top-box {
	margin-top: 14rpx;

	button {
	}

	image {
		width: 72rpx;
		height: 72rpx;
		background: #cbc6ff;
	}
}
</style>
