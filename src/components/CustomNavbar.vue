<template>
	<view class="custom-navbar" :style="{ height: navigationBarHeight, paddingTop: statusBarHeight }">
		<view
			class="fixed-navigation-bar"
			:style="{ height: navigationBarHeight, top: statusBarHeight }"
		>
			<template v-if="isBack">
				<slot name="prefix">
					<view
						class="click-area"
						@click="handleBack"
						:style="{ width: navigationBarHeight, height: navigationBarHeight }"
					>
						<image class="back-icon" src="@static/images/public/back.png" mode="scaleToFill" />
					</view>
				</slot>
			</template>
			<slot :navigationBarHeight="navigationBarHeight"></slot>
			<slot name="suffix"></slot>
		</view>
	</view>
</template>

<script>
export default {
	name: 'CustomNavbar',
	props: {
		isBack: {
			default: true
		}
	},
	data() {
		return {
			statusBarHeight: `${getApp().globalData.statusBarHeight}px`, // 状态栏高度
			navigationBarHeight: `${getApp().globalData.navigationBarHeight}px` // 导航栏高度
		}
	},
	onLoad() {},
	methods: {
		/**
		 * @desc 点击返回按钮
		 */
		handleBack() {
			this.$emit('onBackPress')
		}
	}
}
</script>

<style scoped lang="scss">
.custom-navbar {
	box-sizing: content-box;

	.click-area {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		image {
			width: 18rpx;
			height: 34rpx;
		}
	}
}

.fixed-navigation-bar {
	width: 100%;
	text-align: center;
	box-sizing: content-box;
	position: fixed;
	left: 0;
	z-index: 999;
}
</style>
