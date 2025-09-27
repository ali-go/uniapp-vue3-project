<template>
	<view class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text-center" :style="{ lineHeight: navigationBarHeight }">查汇款</view>
			</template>
		</CustomNavbar>
		<view class="banner" :style="{ backgroundImage: `url(${bg_url})` }">
			<view class="action-items">
				<view
					v-for="action in actions"
					class="action-item"
					@click="handleClick(action.path)"
					:key="action.title"
				>
					<view class="shadow-wrapper">
						<view class="icon-wrapper">
							<image
								:src="action.image"
								:style="{ width: action.imageWidth, height: action.imageHeight }"
								mode="scaleToFill"
							/>
						</view>
					</view>
					<text>{{ action.title }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import { navigateBack } from '@/utils/wx'
import bg_url from '../../static/images/banner.png'

export default {
	components: {
		CustomNavbar
	},
	data() {
		return {
			bg_url,
			actions: [
				{
					image: '../../static/images/past-transfer.png',
					imageWidth: '56rpx',
					imageHeight: '58rpx',
					title: '历史汇款',
					path: '/packageTransfer/pages/past-search/index'
				},
				{
					image: '../../static/images/current-transfer.png',
					imageWidth: '60rpx',
					imageHeight: '60rpx',
					title: '在途汇款'
				}
			]
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
		 * @desc 点击跳转
		 * @param {String} url
		 */
		handleClick(url) {
			uni.navigateTo({
				url
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.page-container {
	background: linear-gradient(180deg, #f6f8fd 0%, #f8faff 100%);

	:deep(.fixed-navigation-bar) {
		background-color: #fff;
	}
}

.banner {
	height: 932rpx;
	background-size: 100% 100%;
	background-position: center center;
	background-repeat: no-repeat;
	position: relative;

	.action-items {
		width: 100%;
		display: flex;
		justify-content: center;
		position: absolute;
		left: 0;
		bottom: -92rpx;

		.action-item {
			width: 334rpx;
			height: 240rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: rgba(255, 255, 255, 0.6);
			border-radius: 40rpx;
			backdrop-filter: blur(15px);

			text {
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 400;
				font-size: 24rpx;
				color: #323233;
				line-height: 34rpx;
			}
		}

		.shadow-wrapper {
			margin-bottom: 12rpx;
		}

		.icon-wrapper {
			width: 120rpx;
			height: 106rpx;
			border-radius: 32rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1rpx solid;
			clip-path: inset(0 round 32rpx);
			border-image: linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.45)) 1 1;
		}

		.action-item:first-child {
			.shadow-wrapper {
				box-shadow: 0rpx 24rpx 32rpx -24rpx #6bbafa;
			}

			.icon-wrapper {
				background: linear-gradient(321deg, #e0f0ff 0%, #f5fbff 100%);
			}
		}

		.action-item:last-child {
			.shadow-wrapper {
				box-shadow: 0rpx 24rpx 24rpx -24rpx #ffa45f;
			}

			.icon-wrapper {
				background: linear-gradient(315deg, #feeed7 0%, #fdf9f2 100%);
			}
		}

		.action-item + .action-item {
			margin-left: 18rpx;
		}
	}
}
</style>
