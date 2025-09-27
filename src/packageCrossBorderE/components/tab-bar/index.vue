<template>
	<view class="product-tab-bar">
		<view
			v-for="(item, index) in tabBarList"
			:key="index"
			:class="['tab-bar-item', currentTab === item.tab ? 'active' : '']"
			@click="changeTab(item)"
		>
			<image :src="item.src" mode="scaleToFill" />
			<text class="item-text">{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabBarList: [
				{
					name: '账户管理',
					src: '../../static/images/tabBar/account.png',
					tab: 'account'
				},
				{
					name: '交易查询管理',
					src: '../../static/images/tabBar/trans.png',
					tab: 'trans'
				},
				{
					name: '用户中心',
					src: '../../static/images/tabBar/user.png',
					tab: 'user'
				}
			],
			currentTab: 'trans'
		}
	},
	created() {},
	methods: {
		changeTab({ tab }) {
			console.log('tab', tab)
			if (tab === this.currentTabPath) return
			this.currentTab = tab
			this.$emit('update-tab', this.currentTab)
		}
	}
}
</script>

<style lang="scss" scoped>
.product-tab-bar {
	display: flex;
	align-items: center;

	.tab-bar-item {
		height: 100rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		image {
			width: 40rpx;
			height: 40rpx;
		}
		.item-text {
			font-size: 20rpx;
			color: #969799;
			height: 28rpx;
			line-height: 28rpx;
			margin-top: 6rpx;
		}
		&.active {
			.item-text {
				color: #5271ff;
			}
		}
	}
}
</style>
