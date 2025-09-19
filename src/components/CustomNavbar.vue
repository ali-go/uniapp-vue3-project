<template>
	<view class="custom-navbar" :style="styleObj">
		<template v-if="isBack">
			<slot name="prefix">
				<view
					class="click-area"
					@click="handleBack"
					:style="{ width: styleObj.height, height: styleObj.height }"
				>
					<image class="back-icon" src="" mode="scaleToFill" />
				</view>
			</slot>
		</template>
		<slot :navigationBarHeight="styleObj.height"></slot>
		<slot name="suffix"></slot>
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
			styleObj: {
				paddingTop: `${getApp().globalData.statusBarHeight}px`, // 状态栏高度
				height: `${getApp().globalData.navigationBarHeight}px` // 导航栏高度
			}
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
	text-align: center;
	position: relative;
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
</style>
