<template>
	<view class="product-tab-bar">
		<view
			v-for="(item, index) in tabBarList"
			:key="index"
			class="tab-bar-item"
			@click="tabLinkTo(item)"
		>
			<image :src="item.src" mode="scaleToFill" />
			<text class="item-text">{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
import { setGlobalVarData } from '../../utils/globalVars'
export default {
	data() {
		return {
			tabBarList: [
				{
					name: '账户管理',
					src: '../../static/images/tabBar/account.png',
					url: '/packageCrossBorderE/pages/index/index'
				},
				{
					name: '交易查询管理',
					src: '../../static/images/tabBar/trans.png',
					url: '/packageCrossBorderE/pages/trans/index'
				},
				{
					name: '用户中心',
					src: '../../static/images/tabBar/user.png',
					url: '/packageCrossBorderE/pages/user/index'
				}
			],
			currentTabPath: ''
		}
	},
	created() {
		const routes = getCurrentPages()
		this.currentTabPath = '/' + routes[routes.length - 1].route // 初始化从路径取值，保证外面访问进来时默认就是访问那个
		setGlobalVarData('currentTabPath', this.currentTabPath)
	},
	methods: {
		tabLinkTo({ url }) {
			if (url === this.currentTabPath) return
			setGlobalVarData('currentTabPath', url)
			uni.navigateTo({ url })
		}
	}
}
</script>

<style lang="scss" scoped>
.product-tab-bar {
	display: flex;
	.tab-bar-item {
		height: 100rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		// justify-content: center;
		align-items: center;
		padding-top: 22rpx;
		image {
			width: 32rpx;
			height: 40rpx;
		}
		.item-text {
			font-size: 20rpx;
			// color: #5271ff;
			color: #969799;
			line-height: 28rpx;
			margin-block: 4rpx;
		}
	}
}
</style>
