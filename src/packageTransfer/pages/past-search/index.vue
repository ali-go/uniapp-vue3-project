<template>
	<view class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text-center" :style="{ lineHeight: navigationBarHeight }">历史汇款查询</view>
			</template>
		</CustomNavbar>
		<view class="filter-box">
			<view class="fixed-action-bar" :style="{ top: fixedBarHeight }">
				<text class="hint">查询内容有变动，请以官方为主</text>
				<view class="action-box" @click="handleSearchPopup">
					<text>筛选</text>
					<image src="../../static/images/filter.png" mode="scaleToFill" />
				</view>
			</view>
		</view>
		<view class="tab-wrapper">
			<view class="tab-items-wrapper">
				<image class="bg" :src="activeName === '1' ? tab_bg_left : tab_bg_right" mode="scaleToFill" />
				<view class="tab-items">
					<view class="tab-item" :class="{ 'tab-active': activeName === '1' }" @click="handleTabClick('1')">
						<view class="title"><text>汇入</text></view>
					</view>
					<view class="tab-item" :class="{ 'tab-active': activeName === '2' }" @click="handleTabClick('2')">
						<view class="title"><text>汇出</text></view>
					</view>
				</view>
			</view>
			<view class="transfer-record-items">
				<view v-for="(record, index) in records" class="transfer-record-item" :key="index">
					<uni-collapse ref="collapse" v-model="record.value" @change="() => handleCollapse(index)">
						<uni-collapse-item title-border="none" :border="false" :show-arrow="false">
							<template v-slot:title>
								<view class="top-header">
									<view class="date">{{ record.date }}</view>
									<view class="collapse">
										<text>{{ record.collapsed ? '展开' : '收起' }}</text>
										<image src="../../static/images/down.png" mode="scaleToFill"
											:style="{ transform: `rotate(${record.collapsed ? 0 : -180}deg)` }" />
									</view>
								</view>
							</template>
							<view class="collapsed-box" :class="record.collapsed ? 'collapsed' : 'expanded'">
								<view v-for="(row, rowIndex) in record.list" class="record-box" :key="rowIndex">
									<view class="left-box">
										<view class="info-box">
											<image src="../../static/images/money.png" mode="scaleToFill" />
											<text class="nickname">{{ row.nickname }}</text>
											<text class="tail-number">(尾号{{ row.tailNumber }})</text>
										</view>
										<view class="datetime">{{ row.datetime }}</view>
									</view>
									<view class="right-box">
										<view class="money"
											:class="record.type === '行内汇入' ? 'positive-amount' : 'negative-amount'">
											{{ row.amount }}</view>
										<view class="source">{{ record.type }}</view>
									</view>
								</view>
								<view class="certificate-box">
									<text class="text">电子凭证</text>
									<button class="btn-upload" @click="handleUploadPopup">待上传</button>
									<!-- <text class="process processing">审核中</text> -->
									<!-- <text class="process success">审核成功</text> -->
								</view>
							</view>
						</uni-collapse-item>
					</uni-collapse>
				</view>
			</view>
		</view>
		<!-- 文件上传 -->
		<!-- start -->
		<UploadFile v-model:popup="uploadPopup" />
		<!-- end -->
		<!-- 条件筛选 -->
		<!-- start -->
		<FilterPastTransfer ref="searchRef" />
		<!-- end -->
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import UploadFile from '../../components/UploadFile.vue'
import FilterPastTransfer from '../../components/FilterPastTransfer.vue'
import { navigateBack } from '@/utils/wx'
import tab_bg_left from '@/static/images/public/tab-bg-left.png'
import tab_bg_right from '@/static/images/public/tab-bg-right.png'

export default {
	components: {
		CustomNavbar,
		UploadFile,
		FilterPastTransfer
	},
	data() {
		return {
			fixedBarHeight: `${getApp().globalData.statusBarHeight + getApp().globalData.navigationBarHeight}px`, // 固定栏的高度
			activeName: '1', // tab 绑定值 1 汇入 2 汇出
			tab_bg_left,
			tab_bg_right,
			records: [
				{
					date: '2025/09/02',
					list: [
						{
							nickname: '益*达',
							tailNumber: '8377',
							datetime: '2025/03/02 14:02:35',
							amount: '+$162.00'
						}
					],
					type: '行内汇入',
					value: ['0']
				},
				{
					date: '2025/09/02',
					list: [
						{
							nickname: '益*达',
							tailNumber: '8377',
							datetime: '2025/03/02 14:02:35',
							amount: '+$162.00'
						},
						{
							nickname: '益*达',
							tailNumber: '8377',
							datetime: '2025/03/02 14:02:35',
							amount: '+$162.00'
						}
					],
					type: '行内汇入',
					value: ['0']
				},
				{
					date: '2025/09/02',
					list: [
						{
							nickname: '益*达',
							tailNumber: '8377',
							datetime: '2025/03/02 14:02:35',
							amount: '+$162.00'
						},
						{
							nickname: '益*达',
							tailNumber: '8377',
							datetime: '2025/03/02 14:02:35',
							amount: '+$162.00'
						}
					],
					type: '行内汇入',
					value: ['0']
				}
			],
			uploadPopup: false
		}
	},
	methods: {
		/**
		 * @desc 监听返回
		 */
		onBackPress() {
			navigateBack()
		},
		/**
		 * @desc 切换 tab
		 * @param {String} activeName
		 */
		handleTabClick(activeName) {
			if (activeName === this.activeName) {
				return
			}

			this.activeName = activeName
		},
		/**
		 * @desc 折叠
		 * @param {Boolean} value
		 * @param {Number} index
		 */
		handleCollapse(index) {
			const record = this.records[index]
			this.records.splice(index, 1, { ...record, collapsed: !record.collapsed })
		},
		/**
		 * @desc 打开上传弹窗
		 */
		handleUploadPopup() {
			this.uploadPopup = true
		},
		/**
		 * @desc 点击筛选
		 */
		handleSearchPopup() {
			this.$refs.searchRef.open()
		}
	}
}
</script>

<style lang="scss" scoped>
.page-container {
	background: linear-gradient(180deg, #f6f8fd 0%, #f8fafd 100%);

	:deep(.fixed-navigation-bar) {
		background-color: #fff;

		&::after {
			width: 100%;
			height: 1px;
			background: #ebedf0;
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			transform: scaleY(0.5);
		}
	}
}

.filter-box {
	height: 96rpx;
}

.fixed-action-bar {
	width: 100%;
	height: 96rpx;
	padding: 0 32rpx;
	background: #ffffff;
	box-shadow: 0rpx 4rpx 24rpx 0rpx rgba(100, 101, 102, 0.08);
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	left: 0;
	z-index: 100;

	.hint {
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #969799;
		line-height: 96rpx;
		text-shadow: 0px 4px 24px rgba(100, 101, 102, 0.08);
	}

	.action-box {
		display: flex;
		align-items: center;

		text {
			font-family:
				PingFangSC,
				PingFang SC;
			margin-right: 8rpx;
			font-weight: 400;
			font-size: 30rpx;
			color: #323233;
			line-height: 96rpx;
			text-shadow: 0px 4px 24px rgba(100, 101, 102, 0.08);
		}

		image {
			width: 16rpx;
			height: 8rpx;
		}
	}
}

.tab-wrapper {
	padding-top: 20rpx;
	background-image: linear-gradient(90deg, #d1dcf9 0%, #d7cbfb 100%);
	background-size: 100% 174rpx;
	background-repeat: no-repeat;
}

.transfer-record-item:first-child {
	margin-top: -36rpx;
	position: relative;
	z-index: 8;
}

.transfer-record-items {
	.transfer-record-item {
		background-color: #fff;
		border-radius: 16rpx;

		&+.transfer-record-item {
			margin-top: 20rpx;
		}
	}

	.collapsed-box {
		will-change: height;

		&.collapsed {
			display: none;
		}

		&.expended {
			display: initial;
		}
	}

	.top-header {
		height: 100rpx;
		border-radius: 16rpx 16rpx 0 0;
		padding: 0 32rpx;
		background: linear-gradient(180deg, #e9edff 0%, #ffffff 55%, #ffffff 100%);
		display: flex;
		align-items: center;
		justify-content: space-between;

		.date {
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			text-shadow: 0 0 0.15px #323233;
			line-height: 100rpx;
		}

		.collapse {
			display: flex;
			align-items: center;

			text {
				margin-right: 12rpx;
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 400;
				font-size: 24rpx;
				color: #969799;
				line-height: 100rpx;
			}

			image {
				width: 12rpx;
				height: 8rpx;
				transition: transform 0.3s ease-out;
			}
		}
	}

	.record-box {
		padding: 26rpx 32rpx 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.left-box {
			display: flex;
			flex-direction: column;

			.info-box {
				margin-bottom: 16rpx;
				display: flex;
				align-items: center;

				image {
					width: 32rpx;
					height: 32rpx;
					margin-right: 12rpx;
				}

				.nickname {
					margin-right: 12rpx;
					font-family:
						PingFangSC,
						PingFang SC;
					font-weight: 500;
					font-size: 32rpx;
					text-shadow: 0 0 0.15px #323233;
					line-height: 44rpx;
				}

				.tail-number {
					font-family:
						PingFangSC,
						PingFang SC;
					font-weight: 400;
					font-size: 24rpx;
					color: #969799;
					line-height: 32rpx;
				}
			}

			.datetime {
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 400;
				font-size: 24rpx;
				color: #969799;
				line-height: 32rpx;
			}
		}

		.right-box {
			.money {
				margin-bottom: 16rpx;
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 500;
				font-size: 32rpx;
				line-height: 44rpx;

				&.positive-amount {
					color: #ff4040;
				}

				&.negative-amount {
					color: #07c160;
				}
			}

			.source {
				font-family:
					PingFangSC,
					PingFang SC;
				font-weight: 400;
				font-size: 24rpx;
				color: #969799;
				text-align: right;
				line-height: 32rpx;
			}
		}
	}

	.certificate-box {
		display: flex;
		padding: 0 32rpx;
		height: 88rpx;
		align-items: center;
		justify-content: space-between;

		.text {
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 400;
			font-size: 28rpx;
			color: #969799;
			line-height: 88rpx;
		}

		.btn-upload {
			background-color: #fff;
			height: 48rpx;
			padding: 0 16rpx;
			border-radius: 32rpx;
			border: 2rpx solid #ff4040;
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 400;
			font-size: 24rpx;
			color: #ff4040;
			line-height: 44rpx;
		}

		.process {
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 400;
			font-size: 24rpx;
			line-height: 32rpx;

			&.process {
				color: #faab0c;
			}

			&.success {
				color: #07c160;
			}
		}
	}

	.record-box,
	.certificate-box {
		position: relative;

		&::before {
			width: 686rpx;
			height: 1px;
			background: #ebedf0;
			content: '';
			position: absolute;
			top: 0;
			left: 32rpx;
			transform: scaleY(0.5);
		}
	}
}
</style>

<style lang="scss" scoped>
@import '../../../static/styles/tab.scss';
</style>
