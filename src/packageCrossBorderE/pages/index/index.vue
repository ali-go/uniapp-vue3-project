<template>
	<view class="page-container">
		<!-- 账户和交易共享导航和产品切换模块 -->
		<view v-show="currentTab !== 'user'">
			<CustomNavbar @onBackPress="onBackPress">
				<template v-slot="{ navigationBarHeight }">
					<view class="navbar-text-center" :style="{ lineHeight: navigationBarHeight }">
						跨境E链
					</view>
				</template>
			</CustomNavbar>
			<ProductChoose @update-product-id="updateProductId"></ProductChoose>
		</view>
		<view class="tab-page-content">
			<Account v-show="currentTab === 'account'" ref="accountRef"></Account>
			<Trans v-show="currentTab === 'trans'" ref="transRef"></Trans>
			<User v-show="currentTab === 'user'"></User>
		</view>
		<TabBar @update-tab="updateTab" class="tab-bar-wrap"></TabBar>
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar'
import ProductChoose from '../../components/product-choose'
import TabBar from '../../components/tab-bar'
import Account from '../account/index'
import Trans from '../trans/index'
import User from '../user/index'

export default {
	components: {
		CustomNavbar,
		ProductChoose,
		TabBar,
		Account,
		Trans,
		User
	},
	data() {
		return {
			currentTab: 'trans', // account trans user
			currentProductId: '' //当前选择的产品
		}
	},
	onLoad() {
		console.log('创建')
	},
	methods: {
		// 切换产品
		updateProductId(productId) {
			this.currentProductId = productId
			this.$refs.accountRef?.exportUpdateProductId(productId)
			this.$refs.transRef?.exportUpdateProductId(productId)
			console.log('productId', productId)
		},
		// 切换tab
		updateTab(tab) {
			this.currentTab = tab
		},
		// 返回：直接返回主包首页
		nBackPress() {
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
	.tab-page-content {
		flex: 1;
		height: 0;
	}
	.tab-bar-wrap {
		height: 100rpx;
	}
}
</style>
