<template>
	<view class="page-content">
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
		<YtkIndex v-if="currentProductId === '10008'" class="module-content"></YtkIndex>
		<XmtIndex v-else-if="currentProductId === '10026'" class="module-content"></XmtIndex>
		<view v-else class="module-content"></view>
	</view>
</template>

<script>
import YtkIndex from '../ytk/index'
import XmtIndex from '../xmt/index'

export default {
	components: {
		YtkIndex,
		XmtIndex
	},
	data() {
		return {
			currentProductId: '', //当前选择的产品
			// 不同产品对应组件映射
			productToCompMaps: {
				10008: 'YtkIndex',
				10026: 'XmtIndex'
			}
		}
	},
	onLoad() {
		console.log('创建')
	},
	methods: {
		// 更新产品
		exportUpdateProductId(productId) {
			this.currentProductId = productId
			console.log('productId', productId)
		}
	}
}
</script>

<style lang="scss" scoped>
.page-content {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100%;
}
.order-filter {
	height: 96rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40rpx;
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
	background: linear-gradient(180deg, #f6f8fd 0%, #f8faff 100%);
}
</style>
