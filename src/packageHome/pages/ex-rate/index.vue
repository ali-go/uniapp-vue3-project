<template>
	<div class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text-center" :style="{ lineHeight: navigationBarHeight }">看汇率</view>
			</template>
		</CustomNavbar>
		<view class="currency-wrapper">
			<view class="bar">
				<view class="title">实时牌价</view>
			</view>
			<view class="column-wrapper">
				<view class="column">币种</view>
				<view class="column">中间价</view>
				<view class="column">银行买入价</view>
				<view class="column">银行卖出价</view>
			</view>
			<view
				v-for="(cell, index) in cellData"
				class="cell"
				@click="handleCellClick(cell)"
				:key="index"
			>
				<view class="cell-item currency-item">
					<image src="../../static/images/ex-rate/HKD.png" class="currency" mode="scaleToFill" />
					<text>{{ cell.currency }}</text>
					<text>{{ cell.currencyInChinese }}</text>
				</view>
				<view class="cell-item price-item">
					{{ cell.middlePrice }}
				</view>
				<view class="cell-item buy-item">
					<view>汇 {{ cell.exchangeInBuy }}</view>
					<view>钞 {{ cell.moneyInBuy }}</view>
				</view>
				<view class="cell-item sell-item">
					<view>汇 {{ cell.exchangeInBuy }}</view>
					<view>钞 {{ cell.moneyInBuy }}</view>
				</view>
			</view>
		</view>
	</div>
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
			cellData: [
				{
					currency: 'GBP',
					currencyInChinese: '英镑',
					middlePrice: 950.47,
					exchangeInBuy: 4.83,
					moneyInBuy: 4.6484,
					exchangeInSeller: 4.83,
					moneyInSeller: 4.6484
				},
				{
					currency: 'GBP',
					currencyInChinese: '英镑',
					middlePrice: 950.47,
					exchangeInBuy: 4.83,
					moneyInBuy: 4.6484,
					exchangeInSeller: 4.83,
					moneyInSeller: 4.6484
				},
				{
					currency: 'GBP',
					currencyInChinese: '英镑',
					middlePrice: 950.47,
					exchangeInBuy: 4.83,
					moneyInBuy: 4.6484,
					exchangeInSeller: 4.83,
					moneyInSeller: 4.6484
				},
				{
					currency: 'GBP',
					currencyInChinese: '英镑',
					middlePrice: 950.47,
					exchangeInBuy: 4.83,
					moneyInBuy: 4.6484,
					exchangeInSeller: 4.83,
					moneyInSeller: 4.6484
				},
				{
					currency: 'GBP',
					currencyInChinese: '英镑',
					middlePrice: 950.47,
					exchangeInBuy: 4.83,
					moneyInBuy: 4.6484,
					exchangeInSeller: 4.83,
					moneyInSeller: 4.6484
				},
				{
					currency: 'GBP',
					currencyInChinese: '英镑',
					middlePrice: 950.47,
					exchangeInBuy: 4.83,
					moneyInBuy: 4.6484,
					exchangeInSeller: 4.83,
					moneyInSeller: 4.6484
				},
				{
					currency: 'GBP',
					currencyInChinese: '英镑',
					middlePrice: 950.47,
					exchangeInBuy: 4.83,
					moneyInBuy: 4.6484,
					exchangeInSeller: 4.83,
					moneyInSeller: 4.6484
				},
				{
					currency: 'GBP',
					currencyInChinese: '英镑',
					middlePrice: 950.47,
					exchangeInBuy: 4.83,
					moneyInBuy: 4.6484,
					exchangeInSeller: 4.83,
					moneyInSeller: 4.6484
				},
				{
					currency: 'GBP',
					currencyInChinese: '英镑',
					middlePrice: 950.47,
					exchangeInBuy: 4.83,
					moneyInBuy: 4.6484,
					exchangeInSeller: 4.83,
					moneyInSeller: 4.6484
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
		 * @desc 点击行数据
		 * @param {Object} cell
		 */
		handleCellClick(cell) {
			console.log('cell', cell)
			uni.navigateTo({ url: '/packageHome/pages/ex-rate-detail/index' })
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
	background: #ffffff;
	border-radius: 16rpx 16rpx 0rpx 0rpx;

	.bar {
		height: 110rpx;
		padding-left: 58rpx;
		display: flex;
		align-items: center;

		view {
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 600;
			font-size: 32rpx;
			color: #323233;
			line-height: 44rpx;
			position: relative;

			&::after {
				content: '';
				width: 6rpx;
				height: 32rpx;
				background: #5271ff;
				border-radius: 3rpx;
				position: absolute;
				top: 6rpx;
				left: -20rpx;
			}
		}
	}

	.column-wrapper {
		display: flex;

		.column {
			flex: 1;
			height: 88rpx;
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 600;
			font-size: 28rpx;
			color: #323233;
			line-height: 88rpx;
			text-align: center;
		}
	}

	.cell {
		display: flex;
		position: relative;

		.cell-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 20rpx 0;

			&.currency-item {
				.currency {
					width: 60rpx;
					height: 60rpx;
					margin-bottom: 16rpx;
				}

				text {
					font-family:
						PingFangSC,
						PingFang SC;
					font-size: 24rpx;
					color: #969799;
					line-height: 32rpx;
				}
			}

			&.price-item {
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 400;
				font-size: 28rpx;
				color: #323233;
				line-height: 40rpx;
			}

			&.buy-item,
			&.sell-item {
				view {
					font-family:
						PingFangSC,
						PingFang SC;
					font-weight: 400;
					font-size: 28rpx;
					color: #323233;
					line-height: 40rpx;
				}
			}
		}

		&::before {
			content: '';
			position: absolute;
			width: 686rpx;
			height: 1rpx;
			background: #ebedf0;
			top: 0;
			left: 32rpx;
			transform: scaleY(0.5);
		}
	}
}
</style>
