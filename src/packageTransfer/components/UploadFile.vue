<template>
	<view v-if="popup" class="mask-container">
		<view class="content-wrapper">
			<view class="top-header">
				<view class="box">
					<text class="title">电子凭证</text>
					<text>（{{ numberOfFiles }}/9）</text>
				</view>
				<view class="close-box" @click="$emit('update:popup', false)">
					<image src="@static/images/public/close.png" mode="scaleToFill" />
				</view>
			</view>
			<view class="hint"
				>为切实便利您的经常项目外汇收支，我行支持提交电子单证，请确保您所提交的电子单证真实且唯一，我行将尽快审核。</view
			>
			<view class="upload-image-wrapper">
				<view class="upload-image">
					<image src="../static/images/plus.png" mode="scaleToFill" />
				</view>
				<view class="upload-image">
					<image src="../static/images/plus.png" mode="scaleToFill" />
				</view>
				<view class="upload-image">
					<image src="../static/images/plus.png" mode="scaleToFill" />
				</view>
			</view>
			<button class="btn-upload">提交</button>
		</view>
	</view>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	popup: Boolean
})

console.log('props', props)

defineEmits(['update:popup'])

const files = []

const numberOfFiles = computed(() => {
	return files.length
})
</script>

<style lang="scss" scoped>
.mask-container {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	background: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10002;
}

.content-wrapper {
	width: 100%;
	background: #ffffff;
	border-radius: 40rpx;
	padding-left: 32rpx;
	padding-right: 32rpx;
	padding-bottom: 60rpx;

	.top-header {
		padding-top: 26rpx;
		padding-bottom: 26rpx;
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 500;
		margin-bottom: 20rpx;
		font-size: 32rpx;
		text-shadow: 0 0 0.15px #323233;
		line-height: 44rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;

		&::after {
			position: absolute;
			content: '';
			width: 638rpx;
			height: 1px;
			background: #ebedf0;
			left: 56rpx;
			bottom: 0;
			transform: scaleY(0.5);
		}
	}

	.title::after {
		content: '*';
		color: #ff4040;
	}

	.close-box {
		width: 44rpx;
		height: 44rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		image {
			width: 28rpx;
			height: 28rpx;
		}
	}

	.hint {
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #969799;
		line-height: 32rpx;
		margin-bottom: 20rpx;
	}

	.upload-image-wrapper {
		display: flex;
		margin-bottom: 26rpx;

		.upload-image {
			width: 200rpx;
			height: 200rpx;
			background: #f7f8fa;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 44rpx;
			margin-bottom: 32rpx;

			image {
				width: 44rpx;
				height: 44rpx;
			}

			&:nth-child(3n) {
				margin-right: 0;
			}
		}
	}

	.btn-upload {
		display: block;
		margin: 0 auto;
		height: 88rpx;
		border-radius: 44rpx;
		background: linear-gradient(135deg, #c39cff 0%, #73a4ff 100%);
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 400;
		font-size: 32rpx;
		color: #ffffff;
		line-height: 88rpx;
	}
}
</style>
