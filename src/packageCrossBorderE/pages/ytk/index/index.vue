<template>
	<view class="comp-container">
		<LoadingScrollView
			@scroll-to-lower="loadMore"
			ref="loadingScrollViewRef"
			:showLoadMore="showLoadMore"
		>
			<view class="scroll-content">
				<view v-for="(accountData, index) in accountList" :key="index" class="module-item">
					<view class="item-top">
						<text class="top-text">收款账户{{ (index + 1 + '').padStart(2, 0) }}</text>
						<view class="top-info">
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
				</view>
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
			pageSize: 4,
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
		}
	}
}
</script>

<style lang="scss" scoped>
.comp-container {
	height: 100%;
}
.scroll-content {
	// background: green;
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
