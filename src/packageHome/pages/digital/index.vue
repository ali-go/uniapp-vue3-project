<template>
	<view class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text" :style="{ lineHeight: navigationBarHeight }">数字账户</view>
			</template>
		</CustomNavbar>
		<view class="page-content">
			<view class="top-wrapper" :style="{ backgroundImage: `url(${bg_url})` }">
				<view class="title">
					<text class="text-digital">数字</text>
					<text class="text-account">账户</text>
				</view>
				<view class="introduction">智能跨境提款</view>
			</view>
			<view class="feature-wrapper">
				<image src="../../static/images/digital/increase.png" mode="scaleToFill" />
				<view class="feature-items">
					<view v-for="(feature, index) in features" class="feature-item" :key="index">
						<view class="short">{{ feature.title }}</view>
						<view v-for="item in feature.items" class="feature" :key="item">
							{{ item }}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="action-bar">
			<view class="fixed-action-bar">
				<view v-for="(action, index) in actions" class="action-item" :key="index">
					<view class="action">
						<image :src="action.image" mode="scaleToFill" />
						<text>{{ action.title }}</text>
					</view>
				</view>
			</view>
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
			bg_url,
			features: [
				{
					title: '适用客群',
					items: ['跨境电商、海外内容创作者、软件开发商等外贸主体']
				},
				{
					title: '产品优势',
					items: [
						'1、一站式整合，管理多个支付平台账户',
						'2、快速到账，提升资金周转效率',
						'3、原币种提款，避免汇率损失'
					]
				}
			],
			actions: [
				{
					title: '微信',
					image: '../../static/images/digital/wechat.png'
				},
				{
					title: '保存本地',
					image: '../../static/images/digital/save.png'
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
		}
	}
}
</script>

<style lang="scss" scoped>
.page-container {
	display: flex;
	flex-direction: column;

	:deep(.fixed-navigation-bar) {
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

	.top-wrapper {
		padding-top: 46rpx;
		height: 732rpx;
		background-size: 100% 100%;
		background-position: center top;
		background-repeat: no-repeat;

		.title {
			margin-bottom: 22rpx;
			font-family: AlibabaPuHuiTi_3_105_Heavy;
			font-size: 80rpx;
			line-height: 112rpx;
			text-shadow: 0px 4px 0px #ffffff;
			font-weight: 600;
			text-align: center;

			.text-digital {
				color: #ffd05c;
			}

			.text-account {
				color: #3f86fe;
			}
		}

		.introduction {
			width: fit-content;
			height: 60rpx;
			margin: 0 auto;
			padding: 0 44rpx;
			line-height: 60rpx;
			background: linear-gradient(180deg, #79abff 0%, #2166e1 100%);
			border-radius: 16rpx 0rpx 16rpx 0rpx;
			font-family:
				PingFangSC,
				PingFang SC;
			font-size: 36rpx;
			color: #ffffff;
			line-height: 60rpx;
		}
	}

	.feature-wrapper {
		padding: 42rpx 26rpx 90rpx;
		background: linear-gradient(180deg, #feffff 0%, #e1f2ff 100%);
		position: relative;

		.feature-item + .feature-item {
			margin-top: 70rpx;
		}

		.short {
			width: fit-content;
			height: 64rpx;
			margin-bottom: 16rpx;
			padding: 0 34rpx;
			background: linear-gradient(180deg, #b9d0ff 0%, #4a7fff 100%);
			border-radius: 32rpx;
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #ffffff;
			line-height: 64rpx;
		}

		.feature {
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 400;
			font-size: 28rpx;
			color: #3a4fb3;
			line-height: 52rpx;
		}

		image {
			width: 173rpx;
			height: 170rpx;
			position: absolute;
			right: 40rpx;
			bottom: 84rpx;
		}
	}
}

.action-bar {
	height: 136rpx;
	border-radius: 16rpx;

	.fixed-action-bar {
		width: 100%;
		height: 136rpx;
		background-color: #fff;
		box-sizing: content-box;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);

		.action-item {
			flex: 1;
			display: flex;
			justify-content: center;

			.action {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
			}

			image {
				width: 80rpx;
				height: 80rpx;
				margin-bottom: 12rpx;
			}

			text {
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 400;
				font-size: 20rpx;
				color: #323233;
				line-height: 28rpx;
			}
		}
	}
}
</style>
