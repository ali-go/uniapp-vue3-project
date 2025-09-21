<template>
	<view class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text" :style="{ lineHeight: navigationBarHeight }">跨境E链</view>
			</template>
		</CustomNavbar>
		<ProductChoose></ProductChoose>
		<!-- 回头根据不同产品渲染不同的index -->
		<!-- <YtkIndex class="module-content"></YtkIndex> -->
		<view class="module-content">这是交易查询页面</view>
		<TabBar></TabBar>
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar'
// import YtkIndex from '../ytk/index'
import TabBar from '../../components/tab-bar'
import ProductChoose from '../../components/product-choose'
// import { navigateBack } from '@/utils/wx'

export default {
	components: {
		CustomNavbar,
		ProductChoose,
		// YtkIndex,
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
.navbar-text {
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 600;
	font-size: 34rpx;
	color: #000000;
}
.module-content {
	box-sizing: border-box;
	flex: 1;
	overflow-y: hidden;
	// background: linear-gradient(180deg, #f6f8fd 0%, #f8faff 100%);
	background: #f6f8fd;
}
</style>
