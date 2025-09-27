<template>
	<view class="page-content">
		<!-- 回头根据不同产品渲染不同的index -->
		<!-- <YtkIndex class="module-content"></YtkIndex> -->
		<view class="module-content">这是交易查询页面</view>
	</view>
</template>

<script>
// import YtkIndex from '../ytk/index'

export default {
	components: {
		// YtkIndex,
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
	onLoad() {},
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
.module-content {
	box-sizing: border-box;
	flex: 1;
	overflow-y: hidden;
	background: linear-gradient(180deg, #f6f8fd 0%, #f8faff 100%);
}
</style>
