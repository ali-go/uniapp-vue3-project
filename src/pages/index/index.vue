<template>
	<view class="page-container">
		<CustomNavbar :isBack="false">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text" :style="{ lineHeight: navigationBarHeight }">跨境E路通</view>
			</template>
		</CustomNavbar>
		<view class="top-box">
			<button>注册/登录</button>
			<image src="" mode="scaleToFill" />
		</view>
		<view class="channels-wrapper">
			<view class="title"> <text>网上营业厅</text> </view>
			<view class="channel-items">
				<view v-for="(channel, index) in channelItems" class="channel-item" :key="index">
					<view :style="{ background: channel.background }" class="icon-box">
						<image src="" mode="scaleToFill" />
					</view>
					<text>{{ channel.title }}</text>
				</view>
			</view>
		</view>
		<view class="product-wrapper">
			<view class="title"> <text>产品中心</text> </view>
			<view class="product-box">
				<view class="left-box box">
					<view class="title">精选产品</view>
					<view class="description">多种选择 自选交易</view>
					<button>查看详情</button>
					<image src="" mode="scaleToFill" />
				</view>
				<view class="right-box box">
					<view class="top">
						<view class="title">精选推荐</view>
						<view class="description">精选投顾产品</view>
						<button>查看详情</button>
						<image src="" mode="scaleToFill" />
					</view>
					<view class="bottom">
						<view class="title">金融服务</view>
						<view class="description">专业顾问一对一</view>
						<button>查看详情</button>
						<image src="" mode="scaleToFill" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'

export default {
	components: {
		CustomNavbar
	},
	data() {
		return {
			channelItems: [
				// 网上营业厅
				{
					background: `linear-gradient( 321deg, #E0F0FF 0%, #F5FBFF 100%)`,
					title: '查汇款'
				},
				{
					background: `linear-gradient( 315deg, #FEEED7 0%, #FDF9F2 100%)`,
					title: '汇款路径'
				},
				{
					background: `linear-gradient( 318deg, #E8FEF7 0%, #F0FFFB 100%)`,
					title: '查电文'
				},
				{
					background: `linear-gradient( 322deg, #FEF9E5 0%, #FEFDFB 100%)`,
					title: '名录登记'
				},
				{
					background: `linear-gradient( 322deg, #FEF9E5 0%, #FEFDFB 100%)`,
					title: '跨境E链'
				}
			]
		}
	},
	onLoad() {},
	methods: {}
}
</script>

<style scoped lang="scss">
.navbar-text {
	padding-left: 36rpx;
	text-align: left;
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 600;
	font-size: 34rpx;
	color: #323233;
}

.top-box {
	margin: 14rpx 64rpx 26rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		padding: 0 32rpx;
		height: 44rpx;
		line-height: 44rpx;
		background: linear-gradient(135deg, #a18aff 0%, #73a4ff 100%);
		border-radius: 22rpx;
		border: none;
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #f9faff;
	}

	image {
		width: 72rpx;
		height: 72rpx;
		background: #cbc6ff;
	}
}

.channels-wrapper,
.product-wrapper {
	> .title {
		margin-bottom: 26rpx;

		&::after {
			content: '';
			display: inline-block;
			width: 76rpx;
			height: 28rpx;
			background: linear-gradient(90deg, rgba(255, 246, 246, 0) 0%, #b085ff 64%, #555cff 100%);
			border-radius: 0rpx 8rpx 16rpx 0rpx;
			opacity: 0.49;
			position: relative;
			top: 18rpx;
			left: -48rpx;
			z-index: 2;
		}
	}

	> .title text {
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 600;
		font-size: 32rpx;
		color: #323233;
		line-height: 44rpx;
		position: relative;
		z-index: 4;
	}
}

.channels-wrapper {
	padding: 0 64rpx;

	.channel-items {
		display: flex;
		flex-wrap: wrap;

		.channel-item {
			margin-right: 74rpx;
			margin-bottom: 40rpx;
			display: flex;
			flex-direction: column;
			align-items: center;

			&:nth-child(4n) {
				margin-right: 0;
			}

			.icon-box {
				width: 100rpx;
				height: 88rpx;
				margin-bottom: 16rpx;
				box-shadow: 0rpx 24rpx 24rpx -24rpx rgba(0, 0, 0, 0.2);
				border-radius: 32rpx;
				border: 1rpx solid;
				border-image: linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.45)) 1 1;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			image {
				width: 48rpx;
				height: 44rpx;
			}

			text {
				line-height: 34rpx;
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 400;
				font-size: 24rpx;
				color: #000000;
			}
		}
	}
}

.product-wrapper {
	padding: 0 32rpx;

	> .title {
		margin-left: 32rpx;
	}

	.product-box {
		display: flex;
		justify-content: space-between;

		.box {
			.title {
				height: 46rpx;
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 400;
				font-size: 32rpx;
				line-height: 46rpx;
			}

			.description {
				margin-bottom: 18rpx;
				font-family: AppleSystemUIFont;
				font-size: 24rpx;
				color: #666666;
				line-height: 34rpx;
			}

			button {
				padding: 0 20rpx;
				height: 40rpx;
				background: linear-gradient(90deg, #b9dcff 0%, #54a9f0 100%);
				border-radius: 20rpx;
				line-height: 40rpx;
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 400;
				font-size: 20rpx;
				color: #ffffff;
				text-align: left;
				font-style: normal;
			}
		}
	}

	.left-box {
		width: 334rpx;
		height: 352rpx;
		padding-top: 14rpx;
		padding-left: 32rpx;
		background: linear-gradient(138deg, #f4f8f9 0%, #dee9fc 100%);
		position: relative;

		.title {
			color: #5185da;
		}

		image {
			width: 263rpx;
			height: 148rpx;
			position: absolute;
			left: 22rpx;
			bottom: 16rpx;
		}
	}

	.right-box {
		width: 336rpx;

		.top,
		.bottom {
			height: 168rpx;
			padding-top: 14rpx;
			padding-left: 24rpx;
			position: relative;
		}

		.top {
			margin-bottom: 16rpx;

			background: linear-gradient(134deg, #ecf2fe 0%, #c3cbf9 100%);

			.title {
				color: #4f5ee3;
			}

			button {
				background: linear-gradient(90deg, #b9c2ff 0%, #546ef0 100%);
			}

			image {
				width: 107rpx;
				height: 124rpx;
				position: absolute;
				top: 26rpx;
				right: 22rpx;
			}
		}

		.bottom {
			background: linear-gradient(135deg, #fcf8f0 0%, #fdece4 100%);

			.title {
				color: #ed7935;
			}

			button {
				background: linear-gradient(90deg, #ffb992 0%, #ff8e36 100%);
			}

			image {
				width: 140rpx;
				height: 123rpx;
				position: absolute;
				top: 24rpx;
				right: 16rpx;
			}
		}
	}
}
</style>
