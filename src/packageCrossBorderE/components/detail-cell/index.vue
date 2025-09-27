<template>
	<view class="detail-cell">
		<text class="cell-text">{{ label }}</text>
		<text :class="[valueClassFn(data), 'cell-value']">{{
			format ? format(data) : data[prop]
		}}</text>
	</view>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: ''
		},
		prop: {
			type: String,
			default: ''
		},
		format: {
			type: [Function, undefined]
		},
		data: {
			type: Object,
			default: () => ({})
		},
		valueClassFn: {
			type: Function,
			default: () => ''
		}
	}
}
</script>

<style lang="scss" scoped>
.detail-cell {
	padding: 36rpx 0;
	margin: 0 24rpx;
	border-top: 1rpx solid #ebedf0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.cell-text {
		font-size: 30rpx;
		color: #646566;
		margin-right: 15rpx;
		flex-shrink: 0;
	}
	.cell-value {
		font-size: 30rpx;
		&:not(.status-text) {
			color: #323233;
		}
	}
}
</style>
