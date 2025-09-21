<template>
	<div class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text" :style="{ lineHeight: navigationBarHeight }">用户注册</view>
			</template>
		</CustomNavbar>
		<view class="page-content">
			<view class="tab-wrapper">
				<view class="tab-items">
					<view class="tab-item-wrapper" :class="activeName === '1' ? 'tab-active' : 'tab-inactive'">
						<view class="tab-item">
							<view class="title"><text>企业用户注册</text></view>
						</view>
					</view>
					<view class="tab-item-wrapper" :class="activeName === '2' ? 'tab-active' : 'tab-inactive'">
						<view class="tab-item">
							<view class="title"><text>个人用户注册</text></view>
						</view>
					</view>
				</view>
				<view class="register-form-wrapper">
					<template v-if="activeName === '1'">
						<RegisterCompany ref="companyRef" />
					</template>
					<template v-else>
						<RegisterCustomer ref="customerRef" />
					</template>
				</view>
				<view class="protocol-box">
					<uni-data-checkbox v-model="checked" selectedColor="#3264ed" multiple
						:localdata="protocol"></uni-data-checkbox>
					<view>我已阅读并接受<navigator url="/pages/protocol/data" open-type="navigate"><text>《用户协议》</text>
						</navigator>
						<navigator url="/pages/protocol/privacy" open-type="navigate"><text>《用户隐私政策》</text></navigator>
					</view>
				</view>
				<button class="btn-submit" @click="handleSubmit">立即开通</button>
			</view>
		</view>
	</div>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import RegisterCompany from '@/packageLogin/components/RegisterCompany.vue'
import RegisterCustomer from '@/packageLogin/components/RegisterCustomer.vue'
import { navigateBack } from '@/utils/wx'

export default {
	components: {
		CustomNavbar,
		RegisterCompany,
		RegisterCustomer
	},
	data() {
		return {
			activeName: '1', // tab 绑定值 1 企业；2 个人
			checked: '', // 协议勾选
			protocol: [{ text: '', value: '1' }] // 协议勾选
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
		 * @desc 提交
		 */
		handleSubmit() {
			const ref = this.activeName === '1' ? this.$refs.companyRef : this.$refs.customerRef

			// 获取子组件表单的 ref
			ref.$refs.formRef
				.validate()
				.then(res => {
					ref
					console.log('res', res)
				})
				.catch(err => {
					const [item] = err
					console.log('err', err, item)
					uni.showToast({
						title: item.errorMessage,
						icon: 'none'
					})
				})
		}
	}
}
</script>

<style lang="scss" scoped>
.page-container {
	position: relative;

	&::after {
		content: '';
		width: 100%;
		height: 616rpx;
		border: 128rpx solid;
		opacity: 0.31;
		border-image: linear-gradient(90deg, rgba(18, 121, 255, 1), rgba(128, 43, 255, 1)) 128 128;
		filter: blur(75.5px);
		position: absolute;
		top: 0;
		left: 0;
	}
}

.navbar-text {
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 600;
	font-size: 34rpx;
	color: #000000;
	margin-bottom: 32rpx;
}

.page-content {
	position: relative;

	&::after {
		content: '';
		width: 100%;
		height: calc(100vh - 208rpx);
		background: #FFFFFF;
		border: 2rpx solid #FFFFFF;
		opacity: 0.6;
		backdrop-filter: blur(12px);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}
}

.tab-wrapper {
	border-radius: 16rpx 16rpx 0rpx 0rpx;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 4;

	.tab-items {
		display: flex;
		margin-bottom: 22rpx;

		.tab-item-wrapper {
			flex: 1;
			position: relative;
			display: flex;
			height: 120rpx;

			&.tab-active {
				.tab-item {
					.title {
						text {
							height: 40rpx;
							font-weight: 600;
							color: #323233;
							line-height: 40rpx;
							position: relative;
							z-index: 4;
						}

						&::after {
							content: '';
							display: inline-block;
							width: 76rpx;
							height: 28rpx;
							background: linear-gradient(90deg, rgba(255, 246, 246, 0) 0%, #b085ff 64%, #555cff 100%);
							border-radius: 0rpx 8rpx 16rpx 0rpx;
							opacity: 0.49;
							position: relative;
							top: 14rpx;
							left: -48rpx;
							z-index: 2;
						}
					}

					&::before,
					&::after {
						content: '';
						width: 44rpx;
						height: 88rpx;
						// background-color: ;
						position: absolute;
						bottom: 0;

					}
				}

				&::after {
					content: none;
				}
			}

			&::after {
				content: '';
				width: 100%;
				height: 100%;
				background: linear-gradient(180deg, #A18AFF 0%, #73A4FF 100%);
				position: absolute;
				top: 0;
				left: 0;
				z-index: 2;
			}
		}

		.tab-item {
			width: 100%;
			height: 88rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 4;

			.title {
				text {
					height: 44rpx;
					font-family:
						PingFangSC,
						PingFang SC;
					font-weight: 400;
					font-size: 30rpx;
					color: #ffffff;
					line-height: 44rpx;
				}
			}
		}
	}
}

.register-form-wrapper {
	background: #ffffff;
	border-radius: 16rpx 16rpx 0rpx 0rpx;
	margin-bottom: 28rpx;

	:deep(.uni-forms-item) {
		height: 110rpx;
		margin: 0 32rpx;
		display: flex;
		align-items: center;

		.uni-forms-item__error {
			display: none;
		}

		.uni-forms-item__label {
			width: 176rpx !important;
			padding-right: 0;
			margin-right: 36rpx;
			height: 40rpx;
			font-family:
				PingFangSC,
				PingFang SC;
			font-weight: 400;
			font-size: 30rpx;
			color: #646566;
			line-height: 40rpx;

			&::after {
				content: ' ';
				width: 686rpx;
				height: 1px;
				background: #ebedf0;
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%) scaleY(0.5);
			}
		}

		.is-required {
			display: none;
		}

		.is-required+text {
			display: flex;
			align-items: center;

			&::after {
				content: '*';
				display: block;
				width: 26rpx;
				text-align: right;
				color: #fb0303;
				font-size: 30rpx;
				line-height: 40rpx;
			}
		}
	}

	:deep(.uni-easyinput) {
		height: 106rpx;
		padding-left: 0;
		font-family:
			PingFangSC,
			PingFang SC;
		font-size: 30rpx;
		color: #c8c9cc;
		line-height: 106rpx;

		.is-input-border {
			border: none;
		}

		.uni-easyinput__content {
			height: 100%;
		}

		.uni-easyinput__content-input {
			height: 106rpx;
			padding-left: 0 !important;
			color: #323233 !important;
			font-family:
				PingFangSC,
				PingFang SC;
			font-size: 30rpx;

			.uni-easyinput__placeholder-class {
				font-family:
					PingFangSC,
					PingFang SC;
				font-size: 30rpx;
				color: #c8c9cc;
				line-height: 106rpx;
			}
		}
	}

	:deep(.picker-wrapper) {
		position: relative;

		.arrow-icon {
			width: 15rpx;
			height: 27rpx;
			position: absolute;
			right: 42rpx;
			top: 42rpx;
			pointer-events: none;
		}
	}

	:deep(.uni-data-tree) {
		.input-value {
			height: 106rpx;
			padding: 0;

			.text-color {
				font-size: 30rpx;
				color: #323233;
				line-height: 106rpx;
				font-family:
					PingFangSC,
					PingFang SC;
			}
		}

		.placeholder {
			font-family:
				PingFangSC,
				PingFang SC;
			font-size: 30rpx;
			color: #c8c9cc;
			line-height: 106rpx;
		}

		.input-value-border {
			border: none;
		}

		.arrow-area {
			display: none;
		}
	}

	:deep(.btn-code) {
		height: 76rpx;
		padding: 0 34rpx;
		background: linear-gradient(135deg, rgba(161, 138, 255, 0.6) 0%, rgba(115, 164, 255, 0.6) 100%);
		border-radius: 38rpx;
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #ffffff;
		line-height: 76rpx;
	}
}

.protocol-box {
	margin-left: 32rpx;
	margin-bottom: 68rpx;
	display: flex;
	align-items: center;
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 400;
	font-size: 24rpx;
	color: rgba(0, 0, 0, 0.5);
	line-height: 34rpx;

	:deep(.uni-data-checklist) {
		.checklist-box {
			margin: 0;
			margin-right: 12rpx;

			.checklist-content {
				display: none;
			}
		}
	}

	navigator {
		display: inline-flex;
		align-items: center;

		text {
			color: #3264ed;
		}
	}
}

.btn-submit {
	width: 686rpx;
	height: 88rpx;
	display: block;
	margin: 0 auto;
	background: linear-gradient(135deg, rgba(195, 156, 255, 0.6) 0%, rgba(115, 164, 255, 0.6) 100%);
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 400;
	font-size: 32rpx;
	color: #ffffff;
	line-height: 88rpx;
	border-radius: 44rpx;
}
</style>
