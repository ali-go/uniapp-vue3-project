<template>
	<div class="page-container" :style="{ backgroundImage: `url(${bg_url})` }">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text-center" :style="{ lineHeight: navigationBarHeight }"
					>用户登录</view
				>
			</template>
		</CustomNavbar>
		<view class="icon-box">
			<image src="../../static/images/logo.png" mode="scaleToFill" />
		</view>
		<button class="btn btn-phone">手机号快捷登录</button>
		<button class="btn btn-other-phone" @click="handleOtherPhoneLogin">其他手机号登录</button>
		<button class="btn btn-register">我要注册</button>
	</div>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import bg_url from '@/static/images/index/bg.png'
import { navigateBack } from '@/utils/wx'

export default {
	components: {
		CustomNavbar
	},
	data() {
		return {
			bg_url
		}
	},
	methods: {
		/**
		 * @desc 监听返回
		 */
		onBackPress() {
			navigateBack()
		},
		/**
		 * @desc 点击其它手机号注册
		 */
		handleOtherPhoneLogin() {
			uni.navigateTo({
				url: '/packageLogin/pages/other-phone/index'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.page-container {
	background-size: 100% 100%;
	background-position: center center;
	background-repeat: no-repeat;
}

.icon-box {
	width: 328rpx;
	height: 328rpx;
	margin: 16rpx auto 20rpx;
	display: flex;
	align-items: center;
	justify-content: center;

	image {
		width: 328rpx;
		height: 328rpx;
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
	background: linear-gradient(135deg, #a18aff 0%, #73a4ff 100%);
	opacity: 0.63;
	color: #ffffff;
}
</style>
