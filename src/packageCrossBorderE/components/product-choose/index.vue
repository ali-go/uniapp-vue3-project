<template>
	<view class="product-choose">
		<text class="left-text">选择产品</text>
		<view @click="handleProductListShow()" class="right-box">
			<text class="right-text">{{ currentProductName }}</text>
			<image src="" mode="scaleToFill" />
		</view>
		<view v-show="showProductList" class="product-list">
			<view v-for="(item, index) in productList" :key="index" class="list-item">
				<view class="item-text" @click="changeProduct(item)">{{ item.productName }}</view>
				<image src="" mode="scaleToFill" />
			</view>
		</view>
	</view>
</template>

<script>
import { getProductList } from '../../api/common'
import { setGlobalVarData, getGlobalVarData } from '../../utils/globalVars'

export default {
	data() {
		return {
			productList: [],
			productMaps: [],
			currentProductId: '',
			showProductList: false
		}
	},
	computed: {
		currentProductName() {
			return this.productMaps[this.currentProductId]
		}
	},
	created() {
		const currentProductId = getGlobalVarData('currentProductId')
		if (currentProductId) {
			this.currentProductId = currentProductId
		}
		this.getProductList()
	},
	methods: {
		// 获取产品枚举
		getProductList() {
			getProductList().then(res => {
				console.log(res)
				this.productList = res.data || []
				this.productMaps = this.productList.reduce(
					(pre, cur) => ({ ...pre, [cur.productId]: cur.productName }),
					{}
				)
				if (!this.currentProductId) {
					this.currentProductId = res.data[0]?.productId
					setGlobalVarData('currentProductId', this.currentProductId)
				}
				console.log('productMaps', this.productMaps, this.currentProductId)
			})
		},
		// 切换产品
		changeProduct({ productId }) {
			this.currentProductId = productId
			setGlobalVarData('currentProductId', productId)
			this.handleProductListShow()
		},
		// 处理弹框显示隐藏
		handleProductListShow() {
			this.showProductList = !this.showProductList
		}
	}
}
</script>

<style lang="scss" scoped>
.product-choose {
	height: 96rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40rpx;
	border-top: 1rpx solid #ebedf0;
	position: relative;
	.left-text,
	.right-text {
		font-size: 28rpx;
		color: #323233;
	}
	.right-text {
		font-weight: 600;
		margin-right: 16rpx;
	}
	.right-box {
		image {
			width: 16rpx;
			height: 16rpx;
			background: #ccc;
		}
	}
	.product-list {
		left: 0;
		right: 0;
		top: 96rpx;
		padding: 0 40rpx;
		position: absolute;
		z-index: 99;
		background: #fff;
		.list-item {
			height: 88rpx;
			line-height: 88rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			&:not(:first-child) {
				border-top: 1rpx solid #ebedf0;
			}
			.item-text {
				font-size: 28rpx;
				color: #323233;
			}
			image {
				width: 28rpx;
				height: 20rpx;
				background: #ccc;
			}
		}
	}
}
</style>
