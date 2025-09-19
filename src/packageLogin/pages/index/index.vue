<template>
	<div class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text" :style="{ lineHeight: navigationBarHeight }">用户登录</view>
			</template>
		</CustomNavbar>
		<view class="icon-box">
			<view class="outer">
				<view class="inner">
					<image src="" mode="scaleToFill" />
				</view>
			</view>
		</view>
		<button class="btn btn-phone">手机号快捷登录</button>
		<button class="btn btn-other-phone">其他手机号登录</button>
		<button class="btn btn-register">我要注册</button>
	</div>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import { navigateBack } from '@/utils/wx'

export default {
	components: {
		CustomNavbar
	},
	methods: {
		/**
		 * @desc 监听返回
		 */
		onBackPress() {
			navigateBack()
		}
	}
}
</script>

<style lang="scss" scoped>
.navbar-text {
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 600;
	font-size: 34rpx;
	color: #000000;
	margin-bottom: 16rpx;
}

.icon-box,
.icon-box view {
	display: flex;
	align-items: center;
	justify-content: center;
}

.icon-box {
	width: 328rpx;
	height: 328rpx;
	margin: 16rpx auto 20rpx;

	.outer {
		width: 152rpx;
		height: 152rpx;
		background: linear-gradient(
			135deg,
			rgb(161, 138, 255, 0.26) 0%,
			rgba(115, 164, 255, 0.26) 100%
		);
		border-radius: 50%;
	}

	.inner {
		width: 120rpx;
		height: 120rpx;
		background: linear-gradient(135deg, #a18aff 0%, #73a4ff 100%);
		border-radius: 50%;

		image {
			width: 76rpx;
			height: 76rpx;
		}
	}
}

.btn {
	width: 686rpx;
	height: 80rpx;
	margin: 0 auto;
	display: block;
	border-radius: 40rpx;
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 400;
	font-size: 30rpx;
	line-height: 80rpx;
	text-align: center;
}

.btn-phone {
	background: linear-gradient(135deg, #a18aff 0%, #73a4ff 100%);
	color: #ffffff;
}

.btn-other-phone {
	margin-top: 32rpx;
	margin-bottom: 32rpx;
	background: #ffffff;
	border: 2rpx solid #4454f5;
	color: #5271ff;
}

.btn-register {
	background: #ffffff;
	border: 2rpx solid rgba(0, 0, 0, 0.1);
	color: #000000;
}
</style>
