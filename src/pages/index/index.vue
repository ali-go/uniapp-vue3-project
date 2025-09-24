<template>
	<view class="page-container" :style="{ backgroundImage: `url(${bg_url})` }">
		<CustomNavbar :isBack="false">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text-center" :style="{ lineHeight: navigationBarHeight }"
					>跨境E路通</view
				>
			</template>
		</CustomNavbar>
		<view class="top-box">
			<button>注册/登录</button>
			<view class="image-box">
				<!-- <image src="@static/images/index/zh-CN.png" mode="scaleToFill" /> -->
			</view>
		</view>
		<view class="business-wrapper">
			<view class="title"> <text>业务大厅</text> </view>
			<view class="business-items">
				<view
					v-for="(business, index) in businessItems"
					class="business-item"
					@click="handleBusinessClick(business)"
					:key="index"
				>
					<view :style="{ background: business.background }" class="icon-box">
						<image
							:src="`../../static/images/public/business${index === businessItems.length - 1 ? '-more' : index + 1}.png`"
							:style="{ width: business.imageWidth, height: business.imageHeight }"
							mode="scaleToFill"
						/>
					</view>
					<text>{{ business.title }}</text>
				</view>
			</view>
		</view>
		<view class="information-wrapper">
			<view class="title"> <text>资讯中心</text> </view>
			<view class="information-box">
				<view
					v-for="(info, index) in infoData"
					class="image-wrapper"
					:key="index"
					v-show="activeItem === index"
					@click="handleInfoClick(info)"
				>
					<image class="bg-image" :src="info.image" mode="scaleToFill"></image>
					<view class="box">
						<view class="title">{{ info.title }}</view>
						<view class="introduction"
							><text>{{ info.introduction }}</text
							><text :decode="true">>></text></view
						>
					</view>
				</view>
				<view class="indicator-box">
					<view class="indicator" :class="{ 'is-active': activeItem === 0 }" @click="activeItem = 0"
						>看汇率</view
					>
					<view class="indicator" :class="{ 'is-active': activeItem === 1 }" @click="activeItem = 1"
						>热门活动</view
					>
				</view>
			</view>
		</view>
		<view class="product-wrapper">
			<view class="title"> <text>产品中心</text> </view>
			<view class="product-box">
				<view class="left-box box">
					<view class="title">数字账户</view>
					<view class="description">智能跨境提款</view>
					<button @click="handleDigitalClick">查看详情</button>
					<image src="@static/images/index/digit-account.png" mode="scaleToFill" />
				</view>
				<view class="right-box box">
					<view class="top">
						<view class="title">小贸通</view>
						<view class="description">外汇B2B</view>
						<button>查看详情</button>
						<image src="@static/images/index/xmt-logo.png" mode="scaleToFill" />
					</view>
					<view class="bottom">
						<view class="title">稠非通</view>
						<view class="description">非洲收款</view>
						<button>查看详情</button>
						<image src="@static/images/index/cft-logo.png" mode="scaleToFill" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import bg_url from '@/static/images/index/bg.png'
import { BUSINESS_ITEMS } from '../../constants'

export default {
	components: {
		CustomNavbar
	},
	data() {
		return {
			bg_url,
			businessItems: [
				...BUSINESS_ITEMS,
				{
					background: `linear-gradient( 315deg, #FEEED7 0%, #FDF9F2 100%)`,
					title: '更多',
					imageWidth: '44rpx',
					imageHeight: '44rpx',
					path: '/packageHome/pages/more/index'
				}
			], // 业务大厅
			activeItem: 0, // 当前选中项
			infoData: [
				{
					image: '../../static/images/index/exchange.png',
					title: '全球汇率实时展示',
					introduction: '一站式快速预览',
					path: '/packageHome/pages/ex-rate/index'
				},
				{
					image: '../../static/images/index/event.png',
					title: '拓新赢好礼',
					introduction: '全市场甄选好产品'
				}
			] // 资讯中心
		}
	},
	onLoad() {},
	methods: {
		/**
		 * @desc 点击就业务大厅
		 * @param {Object} item
		 * @param {String} item.path 路径
		 */
		handleBusinessClick(item) {
			if (item.path) {
				uni.navigateTo({ url: item.path })
			}
		},
		/**
		 * @desc 点击数字账户详情
		 */
		handleDigitalClick() {
			uni.navigateTo({
				url: '/packageHome/pages/digital/index'
			})
		},
		/**
		 * @desc 点击资讯中心
		 * @param {Object} info
		 */
		handleInfoClick(info) {
			if (info.path) {
				uni.navigateTo({
					url: info.path
				})
			}
		}
	}
}
</script>

<style scoped lang="scss">
.page-container {
	position: relative;
	padding-bottom: 30rpx;
	background-size: 100% 100%;
	background-position: center center;
	background-repeat: no-repeat;

	:deep(.fixed-navigation-bar) {
		position: relative;
		top: 0 !important;
	}
}

.navbar-text-center {
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

	.image-box {
		width: 60rpx;
		height: 60rpx;
		// background: #cbc6ff;
		// display: flex;
		// align-items: center;
		// justify-content: center;
		// border-radius: 50%;

		// image {
		// 	width: 40rpx;
		// 	height: 38rpx;
		// }
	}
}

.business-wrapper,
.information-wrapper,
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

.business-wrapper {
	padding: 0 64rpx;
}

.information-wrapper {
	padding: 0 32rpx;
	margin-bottom: 32rpx;

	> .title {
		margin-left: 32rpx;
	}

	.information-box {
		margin: 0 auto;
		padding: 12rpx 16rpx 20rpx;
		width: 686rpx;
		background: linear-gradient(180deg, #ffffff 0%, #ffffff 45%, #d6eeff 100%);
		border-radius: 16rpx;
		border: 2rpx solid #ffffff;

		.image-wrapper {
			width: 652rpx;
			height: 220rpx;
			margin-bottom: 14rpx;
			border-radius: 16rpx;
			position: relative;
		}

		image {
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
		}

		.box {
			width: 100%;
			height: 100%;
			padding-top: 54rpx;
			padding-left: 18rpx;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 4;
		}

		.title {
			line-height: 56rpx;
			margin-bottom: 12rpx;
			font-family: AlibabaPuHuiTi_3_105_Heavy;
			font-size: 40rpx;
			color: #3167e7;
			line-height: 56rpx;
			font-weight: 600;
			z-index: 2;
		}

		.introduction {
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 400;
			font-size: 24rpx;
			color: #5b74b0;
			line-height: 34rpx;

			text + text {
				margin-left: 16rpx;
			}
		}
	}

	.indicator-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 420rpx;
		margin: 0 auto;

		.indicator {
			height: 34rpx;
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 400;
			font-size: 28rpx;
			color: #323233;
			line-height: 34rpx;

			&.is-active {
				color: #5271ff;
				position: relative;

				&::after {
					content: '';
					width: 84rpx;
					height: 2rpx;
					background: linear-gradient(
						90deg,
						rgba(82, 113, 255, 0) 0%,
						#5271ff 50%,
						rgba(82, 113, 255, 0) 100%
					);
					position: absolute;
					bottom: -8rpx;
					left: 0;
				}
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
		border-radius: 16rpx;
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
			border-radius: 16rpx;
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

<style lang="scss" scoped>
@import '@static/styles/business-items.scss';
</style>
