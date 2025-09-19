<template>
	<div class="page-container">
		<CustomNavbar :isBack="false">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text" :style="{ lineHeight: navigationBarHeight }">客户中心</view>
			</template>
		</CustomNavbar>
		<view class="login-wrapper">
			<view class="top-right" :class="{ 'logout-box': isLogin }">
				<template v-if="isLogin">
					<view class="logout">
						<image :src="logout_url" mode="scaleToFill" />
						退出登录
					</view>
				</template>
				<template v-else> 未登录 </template>
			</view>
			<image class="logo" src="" mode="scaleToFill" />
			<view class="login-box">
				<view class="outer">
					<view class="inner">
						<image src="" mode="scaleToFill" />
					</view>
				</view>
				<view class="vertical-bar"></view>
				<template v-if="isLogin">
					<view class="info-box">
						<view class="nickname">{{ formattedNickname }}</view>
						<view class="last-update-time">上次登录{{ lastLoginTime }}</view>
					</view>
				</template>
				<template v-else>
					<button>立即登录</button>
				</template>
			</view>
		</view>
		<view class="items">
			<view v-for="(item, index) in items" :key="index" class="item">
				<image class="icon" src="" mode="scaleToFill" />
				<text class="title">{{ item.title }}</text>
				<view class="click-area">
					<image src="" mode="scaleToFill" />
				</view>
			</view>
		</view>
	</div>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import logout_url from '@/static/images/mine/logout.png'

export default {
	components: {
		CustomNavbar
	},
	computed: {
		formattedNickname() {
			return `*${this.nickname.slice(1)}`
		}
	},
	data() {
		return {
			isLogin: true, // 是否登录
			logout_url,
			items: [
				{
					title: '用户协议'
				},
				{
					title: '用户隐私政策'
				}
			],
			nickname: '冷雨薇冷雨薇冷雨薇冷雨薇冷雨薇冷雨薇', // 昵称
			lastLoginTime: '2025/08/21 08:16' // 上次登录时间
		}
	}
}
</script>

<style lang="scss" scoped>
.navbar-text {
	font-family: SFProDisplay, SFProDisplay;
	font-weight: 600;
	font-size: 34rpx;
	color: #000000;
}

.login-wrapper {
	width: 686rpx;
	margin: 0 auto;
	padding: 82rpx 0 82rpx 36rpx;
	background: linear-gradient(#64abec 0%, #7982ff 100%), #ffffff;
	border-radius: 32rpx;
	position: relative;
	margin-bottom: 20rpx;

	.top-right {
		height: 54rpx;
		padding-left: 54rpx;
		padding-right: 46rpx;
		background: rgb(85, 88, 226, 0.6);
		border-radius: 0rpx 27rpx;
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 500;
		font-size: 24rpx;
		color: #ffffff;
		line-height: 54rpx;
		text-align: center;
		text-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;

		.logout {
			display: flex;
			align-items: center;

			image {
				width: 36rpx;
				height: 36rpx;
				margin-right: 8rpx;
			}
		}

		&.logout-box {
			padding: 0 28rpx;
			text-shadow: none;
		}
	}

	.logo {
		width: 244rpx;
		height: 244rpx;
		background: #ffffff;
		opacity: 0.08;
		position: absolute;
		top: 12rpx;
		right: 28rpx;
		z-index: 8;
	}

	.login-box {
		display: flex;
		align-items: center;

		.outer,
		.inner {
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.outer {
			width: 104rpx;
			height: 104rpx;
			background: #ffffff;
			opacity: 0.78;
		}

		.inner {
			width: 88rpx;
			height: 88rpx;
			background: #c5dbfe;

			image {
				width: 46rpx;
				height: 52rpx;
			}
		}

		.info-box {
			view {
				font-family:
					PingFangSC,
					PingFang SC;
				color: #ffffff;
				text-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
			}
			.nickname {
				height: 44rpx;
				margin-bottom: 8rpx;
				font-weight: 500;
				font-size: 32rpx;
				line-height: 44rpx;
				max-width: 462rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.last-update-time {
				height: 34rpx;
				font-weight: 400;
				font-size: 24rpx;
				line-height: 34rpx;
			}
		}

		.vertical-bar {
			width: 8rpx;
			height: 74rpx;
			margin: 0 30rpx;
			background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
			box-shadow: 0rpx 8rpx 40rpx 0rpx rgba(0, 0, 0, 0.05);
		}

		button {
			height: 72rpx;
			padding: 0 34rpx;
			background: rgba(244, 247, 255, 0.9);
			border-radius: 36rpx;
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 400;
			font-size: 28rpx;
			color: #5271ff;
			line-height: 72rpx;
		}
	}
}

.items {
	width: 686rpx;
	margin: 0 auto;
	background: #ffffff;
	border-radius: 16rpx;

	.item {
		display: flex;
		align-items: center;
		padding: 34rpx 18rpx 34rpx 32rpx;
		position: relative;

		.icon {
			width: 41rpx;
			height: 36rpx;
			margin-right: 22rpx;
		}

		.title {
			height: 32rpx;
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 400;
			font-size: 28rpx;
			color: #646566;
			line-height: 32rpx;
		}

		.click-area {
			width: 42rpx;
			height: 42rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: auto;

			image {
				width: 14rpx;
				height: 24rpx;
			}
		}

		&:not(:last-child) {
			&::after {
				content: ' ';
				width: 638rpx;
				height: 1px;
				background: #ebedf0;
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%) scaleY(0.5);
			}
		}
	}
}
</style>
