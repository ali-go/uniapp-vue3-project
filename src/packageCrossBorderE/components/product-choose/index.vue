<template>
	<view class="product-choose">
		<view
			@click="handleProductListShow()"
			:class="['top-choose', showProductListPopup ? 'active' : '']"
		>
			<text class="left-text">选择产品</text>
			<view class="right-box">
				<text class="right-text"> {{ currentProductName }} </text>
				<image src="" mode="scaleToFill" />
			</view>
		</view>
		<view
			class="popup-container"
			v-show="showProductListPopup"
			:style="getProductListPopupStyle"
			@click="handleProductListShow()"
		>
			<view class="product-list">
				<view
					v-for="(item, index) in productList"
					:key="index"
					:class="['list-item', item.productId === currentProductId ? 'active' : '']"
					@click="changeProduct(item)"
				>
					<view class="item-text">{{ item.productName }}</view>
					<image
						v-if="item.productId === currentProductId"
						src="../../static/images/index/check.png"
						mode="scaleToFill"
					/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getProductList } from '../../api/common'
import { setGlobalVarData, getGlobalVarData } from '../../utils/globalVars'
import { pxToRpx } from '@/utils/wx'

export default {
	data() {
		return {
			productList: [],
			productMaps: [],
			currentProductId: '',
			showProductListPopup: false
		}
	},
	computed: {
		currentProductName() {
			return this.productMaps[this.currentProductId]
		},
		getProductListPopupStyle() {
			const fixedBarHeight = `${
				getApp().globalData.statusBarHeight + getApp().globalData.navigationBarHeight
			}` // 固定栏的高度：px单位
			return {
				position: 'fixed',
				left: 0,
				right: 0,
				top: `${pxToRpx(fixedBarHeight) + 96 + 6}rpx`, // +6是因为popup出来时top加了阴影
				bottom: '100rpx',
				backgroundColor: 'rgba(0, 0, 0, 0.4)',
				zIndex: 99
			}
		}
	},
	created() {
		// 判断是否缓存中已经有产品列表及选择的产品
		const currentProductId = getGlobalVarData('currentProductId')
		const productList = getGlobalVarData('productList')
		const productMaps = getGlobalVarData('productMaps')
		console.log('currentProductId', currentProductId)
		console.log('productList', productList)
		if (productList.length > 0) {
			this.productList = productList
			this.productMaps = productMaps
			this.currentProductId = currentProductId ? currentProductId : productList[0].productId
			this.$emit('update-product-id', this.currentProductId)
			return
		}
		// 无数据时则请求
		this.getProductList()
	},
	methods: {
		// 获取产品列表
		getProductList() {
			getProductList().then(res => {
				console.log(res)
				this.productList = res.data || []
				this.productMaps = this.productList.reduce(
					(pre, cur) => ({ ...pre, [cur.productId]: cur.productName }),
					{}
				)
				this.currentProductId = res.data[0]?.productId
				this.$emit('update-product-id', this.currentProductId)
				setGlobalVarData('currentProductId', this.currentProductId)
				setGlobalVarData('productList', this.productList)
				setGlobalVarData('productMaps', this.productMaps)
				console.log('productMaps', this.productMaps, this.currentProductId)
			})
		},
		// 切换产品
		changeProduct({ productId }) {
			this.currentProductId = productId
			setGlobalVarData('currentProductId', productId)
			this.$emit('update-product-id', this.currentProductId)
		},
		// 处理弹框显示隐藏
		handleProductListShow() {
			this.showProductListPopup = !this.showProductListPopup
		}
	}
}
</script>

<style lang="scss" scoped>
.product-choose {
	border-top: 1rpx solid #ebedf0;
	.top-choose {
		height: 96rpx;
		padding: 0 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #ebedf0;
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
		&.active {
			box-shadow: 0rpx 4rpx 24rpx 0rpx rgba(100, 101, 102, 0.08);
			border-bottom: none;
			.right-text {
				color: #5271ff;
			}
		}
	}
	.product-list {
		width: 100%;
		padding: 0 40rpx;
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
			}
			&.active {
				.item-text {
					color: #5271ff;
				}
			}
		}
	}
}
</style>
