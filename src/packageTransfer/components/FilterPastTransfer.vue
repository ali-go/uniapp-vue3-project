<template>
	<uni-popup
		ref="popup"
		background-color="#fff"
		:mask-click="false"
		border-radius="40rpx 40rpx 0 0"
	>
		<view class="content-wrapper"> </view>
	</uni-popup>
</template>

<script>
export default {
	methods: {
		/**
		 * @desc 打开 popup
		 */
		open() {
			this.$refs.popup.open('bottom')
		},
		/**
		 * @desc 关闭 popup
		 */
		close() {
			this.$refs.popup.close()
		}
	}
}
</script>

<style lang="scss" scoped></style>
