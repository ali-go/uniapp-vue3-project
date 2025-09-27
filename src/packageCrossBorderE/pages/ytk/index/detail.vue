<template>
	<view class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text-center" :style="{ lineHeight: navigationBarHeight }">详情</view>
			</template>
		</CustomNavbar>
		<view class="page-content">
			<view class="content-box">
				<DetailCell
					v-for="({ label, prop, format, valueClassFn }, index) in detailColumns"
					:key="index"
					:label="label"
					:prop="prop"
					:format="format"
					:data="detailInfo"
					:valueClassFn="valueClassFn"
					class="detail-cell-wrap"
				></DetailCell>
			</view>
		</view>

		<!-- <view>详情</view>
		<view>{{ detailInfo }}</view> -->
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar'
import DetailCell from '../../../components/detail-cell/index'
import { navigateBack } from '@/utils/wx'

export default {
	components: {
		CustomNavbar,
		DetailCell
	},
	data() {
		return {
			detailInfo: {},
			detailColumns: [
				{ prop: 'createDate', label: '申请时间' },
				{ prop: 'acctNo', label: '虚拟收款账号' },
				{ prop: 'bankNo', label: '合作银行' },
				{ prop: 'terraceName', label: '平台名称' },
				{ prop: 'storeName', label: '店铺名称' },
				{ prop: 'acctStatus', label: '申请状态', valueClassFn: row => ['aaa'] }
			]
		}
	},
	onLoad(options) {
		const { data } = options
		this.detailInfo = JSON.parse(decodeURIComponent(data))
	},
	methods: {
		onBackPress() {
			navigateBack()
		}
	}
}
</script>

<style lang="scss" scoped>
.page-container {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100vh;
}
.page-content {
	flex: 1;
	background: linear-gradient(180deg, #f6f8fd 0%, #f8faff 100%);
	padding: 20rpx 32rpx;
	.content-box {
		background: #fff;
		border-radius: 16rpx;
		.detail-cell-wrap:first-child {
			::v-deep {
				.detail-cell {
					border-top: none;
				}
			}
		}
	}
}
</style>
