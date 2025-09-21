<template>
	<view class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text" :style="{ lineHeight: navigationBarHeight }">跨境E链</view>
			</template>
		</CustomNavbar>
		<view class="product-choose">
			<text class="left-text">选择产品</text>
			<view class="right-box">
				<text class="right-text">{{ currentProductName }}</text>
				<image src="" mode="scaleToFill" />
			</view>
		</view>
		<view class="order-filter">
			<view class="order-tool">
				<image src="" mode="scaleToFill" />
				<image src="" mode="scaleToFill" />
				<text class="tool-text">时间排序</text>
			</view>
			<view class="filter-tool">
				<image src="" mode="scaleToFill" />
				<text class="tool-text">筛选条件</text>
			</view>
		</view>
		<YtkIndex class="product-content"></YtkIndex>
		<TabBar></TabBar>
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import { navigateBack } from '@/utils/wx'
import { getProductList } from '../../api/common'
import { setGlobalVarData, getGlobalVarData } from '../../utils/globalVars'
import YtkIndex from '../ytk/index'
import TabBar from '../../components/tab-bar'

export default {
	components: {
		CustomNavbar,
		YtkIndex,
		TabBar
	},
	data() {
		return {
			productList: [],
			productMaps: [],
			currentProductId: ''
		}
	},
	computed: {
		currentProductName() {
			return this.productMaps[this.currentProductId]
		}
	},
	onLoad() {
		const currentProductId = getGlobalVarData('currentProductId')
		if (currentProductId) {
			this.currentProductId = currentProductId
		}
		this.getProductList()
	},
	methods: {
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
		nBackPress() {
			navigateBack()
		}
	}
}
</script>

<style lang="scss" scoped>
.page-container {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100vh;
}
.navbar-text {
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 600;
	font-size: 34rpx;
	color: #000000;
}
.product-choose {
	height: 96rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40rpx;
	border-top: 1rpx solid #ebedf0;
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
}
.order-filter {
	height: 96rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40rpx;
	border-top: 1rpx solid #ebedf0;
	.tool-text {
		font-size: 28rpx;
		color: #646566;
		margin-left: 10rpx;
	}
	image {
		width: 16rpx;
		height: 16rpx;
		background: #ccc;
		margin-left: 4rpx;
	}
	.order-tool {
	}
	.filter-tool {
	}
}
.product-content {
	box-sizing: border-box;
	flex: 1;
	overflow-y: hidden;
	// background: linear-gradient(180deg, #f6f8fd 0%, #f8faff 100%);
	background: #f6f8fd;
}
</style>
