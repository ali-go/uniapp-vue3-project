<template>
	<view v-show="popup" class="mask-container" :class="{ show: popup }">
		<image class="poster" src="../static/images/digital/poster.png" mode="scaleToFill" />
		<view class="wechat-action-bar">
			<view class="title">立即分享给好友</view>
			<view class="icon-wrapper">
				<view class="icon-item">
					<view class="icon">
						<image src="../static/images/digital/wechat-friends.png" mode="scaleToFill" />
						<text>微信好友</text>
						<button></button>
					</view>
				</view>
				<view class="icon-item">
					<view class="icon">
						<image src="../static/images/digital/wechat-moments.png" mode="scaleToFill" />
						<text> 朋友圈</text>
						<button></button>
					</view>
				</view>
				<view class="icon-item">
					<view class="icon">
						<image src="../static/images/digital/wechat-save.png" mode="scaleToFill" />
						<text>收藏</text>
						<button></button>
					</view>
				</view>
			</view>
			<button class="btn-cancel" @click="$emit('update:popup', false)">取消</button>
		</view>
	</view>
</template>

<script setup>
defineProps({
	popup: Boolean
})

defineEmits(['update:popup'])
</script>

<style lang="scss" scoped>
.mask-container {
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10002;

	.poster {
		width: 520rpx;
		height: 890rpx;
		position: absolute;
		left: 50%;
		bottom: calc(496rpx + constant(safe-area-inset-bottom));
		bottom: calc(496rpx + env(safe-area-inset-bottom));
		transform: translateX(-50%);
	}

	&.show {
		animation-name: show;
		animation-duration: 0.3s;
		animation-timing-function: ease-out;
	}
}

.wechat-action-bar {
	width: 100%;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	background-color: #fff;
	border-radius: 40rpx 40rpx 0rpx 0rpx;
	position: absolute;
	left: 0;
	bottom: 0rpx;
	will-change: height;
	animation-name: slide-up;
	animation-duration: 0.1s;
	animation-timing-function: ease-out;

	.title {
		text-align: center;
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #323233;
		line-height: 120rpx;
	}

	.icon-wrapper {
		display: flex;
		margin-bottom: 32rpx;

		.icon-item {
			flex: 1;
			padding: 0;
			background-color: transparent;

			.icon {
				width: fit-content;
				margin: 0 auto;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				position: relative;

				image {
					width: 96rpx;
					height: 96rpx;
					margin-bottom: 16rpx;
					pointer-events: none;
				}

				text {
					font-family:
						PingFangSC,
						PingFang SC;
					font-weight: 400;
					font-size: 24rpx;
					color: #646566;
					line-height: 32rpx;
					pointer-events: none;
				}

				button {
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					z-index: -1;
				}
			}
		}
	}

	.btn-cancel {
		display: block;
		height: 96rpx;
		background: #ffffff;
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 400;
		font-size: 32rpx;
		color: #646566;
		line-height: 96rpx;
	}
}

@keyframes show {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes slide-up {
	0% {
		height: 0;
	}

	100% {
		height: 392rpx;
	}
}
</style>
