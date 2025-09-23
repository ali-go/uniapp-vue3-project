<template>
	<view class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text-center" :style="{ lineHeight: navigationBarHeight }">跨境E链</view>
			</template>
		</CustomNavbar>
		<ProductChoose></ProductChoose>
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
		<!-- 回头根据不同产品渲染不同的index -->
		<YtkIndex class="module-content"></YtkIndex>
		<TabBar></TabBar>
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar'
import YtkIndex from '../ytk/index'
import TabBar from '../../components/tab-bar'
import ProductChoose from '../../components/product-choose'
// import { navigateBack } from '@/utils/wx'

export default {
	components: {
		CustomNavbar,
		ProductChoose,
		YtkIndex,
		TabBar
	},
	data() {
		return {}
	},
	onLoad() {},
	methods: {
		nBackPress() {
			// navigateBack()
			uni.switchTab({ url: '/pages/index/index' })
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
.module-content {
	box-sizing: border-box;
	flex: 1;
	overflow-y: hidden;
	// background: linear-gradient(180deg, #f6f8fd 0%, #f8faff 100%);
	background: #f6f8fd;
}
</style>
