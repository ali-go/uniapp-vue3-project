<template>
	<scroll-view
		:style="{ height: scrollHeight }"
		:scroll-y="scrollY"
		@scrolltolower="handleScrolltolower"
	>
		<slot></slot>
		<uni-load-more v-if="showLoadMore" :status="loadStatus" />
	</scroll-view>
</template>

<script>
export default {
	props: {
		scrollY: {
			type: Boolean,
			default: true
		},
		scrollX: {
			type: Boolean,
			default: false
		},
		scrollHeight: {
			type: String,
			default: '100%'
		},
		showLoadMore: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			loadStatus: 'more' // more loading moMore
		}
	},
	computed: {},
	mounted() {},
	methods: {
		// 滚动触底：可以根据需要自行补充需要的钩子
		handleScrolltolower() {
			console.log('触底')
			// 无加载更多模块时
			if (!this.showLoadMore) return
			// 无数据或加载中
			if (this.loadStatus !== 'more') return
			// 加载更多数据
			this.$emit('scroll-to-lower')
		},
		exportUpdateLoadStatus(loadStatus) {
			this.loadStatus = loadStatus
		}
	}
}
</script>

<style lang="scss" scoped></style>
