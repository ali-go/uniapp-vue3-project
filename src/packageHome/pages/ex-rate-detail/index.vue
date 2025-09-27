<template>
	<view class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text-center" :style="{ lineHeight: navigationBarHeight }">详情</view>
			</template>
		</CustomNavbar>
		<view class="currency-wrapper">
			<view class="currency-box">
				<image src="../../static/images/ex-rate/HKD.png" mode="scaleToFill" />
				<view>
					<text class="currency">HKD</text>
					<text class="currency-in-chinese">港元</text>
				</view>
			</view>
			<view class="date">2025/08/11 08:53:55</view>
		</view>
		<view class="price-wrapper">
			<view class="title-box">
				<view class="title">银行买入价</view>
				<view class="title">银行卖出价</view>
			</view>
			<view class="price-items">
				<view class="price-item">
					<view> <text class="text">现汇</text><text class="price"> 947.86</text></view>
					<view> <text class="text">现钞</text><text class="price"> 947.86</text></view>
				</view>
				<view class="price-item">
					<view> <text class="text">现汇</text><text class="price"> 947.86</text></view>
					<view> <text class="text">现钞</text><text class="price"> 947.86</text></view>
				</view>
			</view>
		</view>
		<view class="btn-group">
			<button :class="{ 'btn-active': activeItem === 'buy' }" @click="handleClick('buy')">
				银行买入走势
			</button>
			<button :class="{ 'btn-active': activeItem === 'sell' }" @click="handleClick('sell')">
				银行卖出走势
			</button>
		</view>
		<view class="chart-wrapper"> </view>
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import { navigateBack } from '@/utils/wx'

export default {
	components: {
		CustomNavbar
	},
	data() {
		return {
			activeItem: 'buy'
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
		 * @desc 点击按钮
		 * @param {String} key
		 */
		handleClick(key) {
			if (this.activeItem === key) {
				return
			}

			this.activeItem = key
		}
	}
}
</script>

<style lang="scss" scoped>
.page-container {
	background: linear-gradient(180deg, #f6f8fd 0%, #f8fafd 100%);

	:deep(.fixed-navigation-bar) {
		background-color: #fff;
		border-bottom: 1px solid #e5e5e5;
	}
}

.currency-wrapper {
	margin-top: 20rpx;
	width: 100%;
	padding: 26rpx 32rpx 40rpx 38rpx;
	border-radius: 16rpx 16rpx 0rpx 0rpx;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.currency-box {
		display: flex;

		image {
			width: 72rpx;
			height: 72rpx;
			margin-right: 16rpx;
		}

		view {
			display: flex;
			flex-direction: column;

			.currency {
				margin-left: 4rpx;
				margin-bottom: 8rpx;
				font-family:
					PingFangSC,
					PingFang SC;
				text-shadow: 0 0 0.15px #323233;
				font-size: 28rpx;
				line-height: 40rpx;
			}

			.currency-in-chinese {
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 400;
				font-size: 28rpx;
				color: #969799;
				line-height: 32rpx;
			}
		}
	}

	.date {
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #323233;
		line-height: 40rpx;
	}
}

.price-wrapper {
	margin-bottom: 16rpx;

	.title-box {
		height: 88rpx;
		display: flex;
		background: linear-gradient(180deg, #fdebe5 0%, #ffffff 100%);

		.title {
			flex: 1;
			font-family:
				PingFangSC,
				PingFang SC;
			font-size: 28rpx;
			text-shadow: 0 0 0.15px #323233;
			line-height: 88rpx;
			text-align: center;
		}
	}

	.price-items {
		padding: 0 28rpx;
		background: #ffffff;
		display: flex;

		.price-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			> view {
				display: flex;
				align-items: center;
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 400;
				font-size: 28rpx;
				color: #969799;
				line-height: 60rpx;

				.price {
					margin-left: 20rpx;
					color: #ff4040;
				}
			}
		}
	}
}

.btn-group {
	display: flex;

	button {
		flex: 1;
		height: 88rpx;
		background: #f3f3ff;
		font-size: 28rpx;
		color: #323233;
		line-height: 88rpx;
		border-radius: 0;
		transition: all 0.1s ease-out;

		&.btn-active {
			font-weight: 600;
			color: #ffffff;
			background: linear-gradient(135deg, #a18aff 0%, #73a4ff 100%);
		}
	}
}

.chart-wrapper {
	height: 700rpx;
	background: #ffffff;
	border-radius: 0rpx 0rpx 16rpx 16rpx;
}
</style>
