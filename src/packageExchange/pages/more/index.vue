<template>
	<div class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text" :style="{ lineHeight: navigationBarHeight }">更多功能</view>
			</template>
		</CustomNavbar>
		<view class="page-content">
			<view class="content-wrapper">
				<view class="business-items">
					<view v-for="(business, index) in businessItems" class="business-item" :key="index">
						<view :style="{ background: business.background }" class="icon-box">
							<image
								:src="`../../../static/images/public/business${index + 1}.png`"
								:style="{ width: business.imageWidth, height: business.imageHeight }"
								mode="scaleToFill"
							/>
						</view>
						<text>{{ business.title }}</text>
					</view>
				</view>
			</view>
		</view>
	</div>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import { navigateBack } from '@/utils/wx'
import { BUSINESS_ITEMS } from '@/constants'

export default {
	components: {
		CustomNavbar
	},
	data() {
		return {
			businessItems: [
				...BUSINESS_ITEMS,
				{
					background: `linear-gradient( 321deg, #E0F0FF 0%, #F5FBFF 100%);`,
					title: '贷款产品',
					imageWidth: '46rpx',
					imageHeight: '46rpx'
				}
			] // 业务大厅
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
	background: linear-gradient(180deg, #f6f8fd 0%, #f8faff 100%);
	display: flex;
	flex-direction: column;

	:deep(.custom-navbar) {
		background-color: #fff;
	}
}

.navbar-text {
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 600;
	font-size: 34rpx;
	color: #000000;
}

.page-content {
	flex: 1;
	padding: 20rpx 32rpx;
	display: flex;
}

.content-wrapper {
	padding: 32rpx;
	background: #ffffff;
	border-radius: 16rpx;
}
</style>

<style lang="scss" scoped>
@import '@/styles/business-items.scss';
</style>
