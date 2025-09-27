<template>
	<view class="comp-container">
		<view class="trans-tabs">
			<view
				v-for="(item, index) in tabColumns"
				:key="index"
				:class="['tab-item', currentTransTab === item.value ? 'active' : '']"
			>
				<view class="image-wrap" :style="{ background: item.background }">
					<image :src="item.src" mode="scaleToFill" />
				</view>
				<text class="item-label">{{ item.label }}</text>
			</view>
		</view>
		<view class="order-filter">
			<view class="order-tool">
				<image src="" mode="scaleToFill" />
				<image src="" mode="scaleToFill" />
				<text class="tool-text">时间排序</text>
			</view>
			<view class="filter-tool">
				<image src="" mode="scaleToFill" />
				<text class="tool-text">筛选条件</text>
			</view>
		</view>
		<LoadingScrollView
			@scroll-to-lower="loadMore"
			ref="loadingScrollViewRef"
			:showLoadMore="showLoadMore"
		>
			<view class="scroll-content">
				<!-- <view v-for="(accountData, index) in accountList" :key="index" class="module-item">
					<view class="item-top">
						<text class="top-text">收款账户{{ (index + 1 + '').padStart(2, 0) }}</text>
						<view class="top-info" @click="jumpDetail(accountData)">
							<text class="info-text">了解详情</text>
						</view>
					</view>
					<view class="item-content-wrap">
						<view v-for="(column, j) in accountContentColumns" :key="j" class="item-content">
							<text class="content-label">{{ column.label }}</text>
							<text :class="['content-value', column.classFn ? column.classFn(accountData) : '']">{{
								column.format ? column.format(accountData) : accountData[column.value]
							}}</text>
						</view>
					</view>
				</view> -->
			</view>
		</LoadingScrollView>
	</view>
</template>

<script>
import { getAccountList } from '../../../api/ytk'
import LoadingScrollView from '@/components/LoadingScrollView'
import { acctStatusMaps, acctStatusClassTextMaps } from '../../../utils/enums/ytk'

export default {
	components: {
		LoadingScrollView
	},
	data() {
		return {
			currentTransTab: 'entry',
			tabColumns: [
				{
					label: '入账',
					value: 'entry',
					src: '../../../static/images/trans/test1.png',
					background: 'rgba(255, 126, 91, .1)'
				},
				{
					label: '结汇',
					value: 'settle',
					src: '../../../static/images/trans/test1.png',
					background: 'rgba(45, 103, 255, .1)'
				},
				{
					label: '提现',
					value: 'withdraw',
					src: '../../../static/images/trans/test1.png',
					background: 'rgba(254, 195, 53, .1)'
				}
			],
			accountContentColumns: [
				{ label: '申请日期', value: 'createDate' },
				{ label: '虚拟收款账号', value: 'acctNo' },
				{
					label: '申请状态',
					value: 'acctStatus',
					format: row => acctStatusMaps[row.acctStatus] || row.acctStatus,
					classFn: row =>
						['status-text', acctStatusClassTextMaps[row.acctStatus] || 'safety-text'].join(' ')
				}
			],
			accountList: [],
			pageSize: 10,
			page: 1
		}
	},
	computed: {},
	created() {
		this.initLoadData()
	},
	methods: {
		initLoadData() {
			this.fetchData()
		},
		loadMore() {
			this.page++
			this.$refs.loadingScrollViewRef.exportUpdateLoadStatus('loading')
			this.fetchData()
		},
		// 获取列表数据
		fetchData() {
			console.log('page', this.page)
			getAccountList({ page: this.page, pageSize: this.pageSize })
				.then(res => {
					console.log('getAccountList-res', res)
					this.accountList = [...this.accountList, ...res.data]
					this.updateLoadStatus()
				})
				.catch(() => {
					this.updateLoadStatus()
				})
		},
		// 更新加载更多的状态
		updateLoadStatus() {
			let loadStatus
			if (this.accountList.length === 0 || this.accountList.length < this.pageSize) {
				loadStatus = 'noMore'
			} else {
				loadStatus = 'more'
			}
			this.$refs.loadingScrollViewRef.exportUpdateLoadStatus(loadStatus)
		},
		// 详情
		jumpDetail(data) {
			uni.navigateTo({
				url: `/packageCrossBorderE/pages/ytk/index/detail?data=${encodeURIComponent(
					JSON.stringify(data)
				)}`
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.comp-container {
	height: 100%;
}
.trans-tabs {
	display: flex;
	align-items: center;
	.tab-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.image-wrap {
			width: 96rpx;
			height: 96rpx;
			border-radius: 50%;
			text-align: center;
			line-height: 96rpx;
			image {
				width: 54rpx;
				height: 54rpx;
				vertical-align: middle;
			}
		}
		.item-label {
		}
	}
}
.order-filter {
	height: 96rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40rpx;
	.tool-text {
		font-size: 28rpx;
		color: #646566;
		margin-left: 10rpx;
	}
	image {
		width: 16rpx;
		height: 16rpx;
		background: #ccc;
		margin-left: 4rpx;
	}
	.order-tool {
	}
	.filter-tool {
	}
}
.scroll-content {
	padding: 20rpx 32rpx;
	.module-item {
		background: linear-gradient(180deg, #e9edff 0%, #ffffff 55%, #ffffff 100%);
		border-radius: 16rpx;
		margin-bottom: 20rpx;
		overflow: hidden;
		.item-top {
			height: 90rpx;
			padding: 18rpx 24rpx 0 24rpx;
			position: relative;
			.top-text {
				font-size: 28rpx;
				color: #323233;
				font-weight: 600;
			}
			.top-info {
				position: absolute;
				right: 0;
				top: 0;
				background: #9491ff;
				padding-right: 36rpx;
				padding-left: 40rpx;
				height: 62rpx;
				border-bottom-left-radius: 40rpx;
				.info-text {
					font-size: 24rpx;
					color: #fff;
					::after {
						content: '>';
						font-weight: bold;
						margin-left: 14rpx;
					}
				}
			}
		}
		.item-content-wrap {
			border-radius: 16rpx;
			background: #fff;
			.item-content {
				margin: 0 24rpx;
				height: 88rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				&:not(:first-child) {
					border-top: 1px solid #ebedf0;
				}
				.content-label {
					font-size: 28rpx;
					color: #646566;
				}
				.content-value {
					font-size: 28rpx;
					&:not(.status-text) {
						color: #646566;
					}
					&.safety-text {
						color: #646566;
					}
				}
			}
		}
	}
}
</style>
