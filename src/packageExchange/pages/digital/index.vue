<template>
	<view class="page-container" :style="{ backgroundImage: `url(${bg_url})` }">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text" :style="{ lineHeight: navigationBarHeight }">数字账户</view>
			</template>
		</CustomNavbar>
		<view class="page-content"> </view>
		<view class="action-bar">
			<view class="fixed-action-bar"></view>
		</view>
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import bg_url from '../../static/images/digital/bg.png'
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
		}
	}
}
</script>

<style lang="scss" scoped>
.page-container {
	display: flex;
	flex-direction: column;
}

.page-content {
	flex: 1;
	background-size: 100% 1280rpx;
	background-position: center center;
	background-repeat: no-repeat;
}

.navbar-text {
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 600;
	font-size: 34rpx;
	color: #000000;
}
</style>
