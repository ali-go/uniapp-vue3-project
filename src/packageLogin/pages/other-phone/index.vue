<template>
	<div class="page-container">
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text" :style="{ lineHeight: navigationBarHeight }">手机号登录</view>
			</template>
		</CustomNavbar>
		<view class="icon-box">
			<view class="outer">
				<view class="inner">
					<image src="" mode="scaleToFill" />
				</view>
			</view>
		</view>
		<view class="form-wrapper">
			<uni-forms ref="formRef" :model="formData" :rules="rules" validateTrigger="blur">
				<uni-forms-item name="phoneNumber">
					<uni-easyinput
						v-model.trim="formData.phoneNumber"
						type="number"
						:clearable="false"
						placeholder="请输入手机号码"
					/>
				</uni-forms-item>
				<uni-forms-item name="code">
					<uni-easyinput
						v-model.trim="formData.code"
						type="text"
						:clearable="false"
						placeholder="请输入验证码"
					>
						<template #right>
							<button class="btn-code" @click="handleCodeSend">获取验证码</button>
						</template></uni-easyinput
					>
				</uni-forms-item>
			</uni-forms>
			<button class="btn-submit" @click="handleSubmit">校验表单</button>
			<view class="navigation-text">
				<text class="text">没有账号，</text>
				<navigator url="/packageLogin/pages/register/index" open-type="navigate">
					<text>去注册</text>
					<image src="" mode="scaleToFill" />
				</navigator>
			</view>
		</view>
	</div>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import { navigateBack } from '@/utils/wx'
import { phoneNumberRegExp } from '@/packageLogin/utils/regExp'

export default {
	components: {
		CustomNavbar
	},
	data() {
		return {
			formData: {
				phoneNumber: '', // 手机号码
				code: '' // 验证码
			},
			rules: {
				phoneNumber: {
					rules: [
						{
							required: true,
							errorMessage: '请输入手机号码'
						},
						{
							validateFunction: (rule, value, data, callback) => {
								if (!phoneNumberRegExp.test(value)) {
									callback('手机号码格式错误')
								}
							}
						}
					]
				},
				code: {
					rules: [
						{
							required: true,
							errorMessage: '请输入验证码'
						}
					]
				}
			}
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
		 * @desc 发送验证码
		 */
		handleCodeSend() {
			this.$refs.formRef
				.validateField(['phoneNumber'])
				.then(res => {
					console.log('res', res)
				})
				.catch(err => {
					console.log('err', err)
				})
		},
		/**
		 * @desc 提交
		 */
		handleSubmit() {
			this.$refs.formRef
				.validate()
				.then(res => {
					console.log('res', res)
				})
				.catch(err => {
					console.log('err', err)
				})
		}
	}
}
</script>

<style lang="scss" scoped>
.navbar-text {
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 600;
	font-size: 34rpx;
	color: #000000;
	margin-bottom: 16rpx;
}

.icon-box,
.icon-box view {
	display: flex;
	align-items: center;
	justify-content: center;
}

.icon-box {
	width: 328rpx;
	height: 328rpx;
	margin: 16rpx auto 20rpx;

	.outer {
		width: 152rpx;
		height: 152rpx;
		background: linear-gradient(
			135deg,
			rgb(161, 138, 255, 0.26) 0%,
			rgba(115, 164, 255, 0.26) 100%
		);
		border-radius: 50%;
	}

	.inner {
		width: 120rpx;
		height: 120rpx;
		background: linear-gradient(135deg, #a18aff 0%, #73a4ff 100%);
		border-radius: 50%;

		image {
			width: 76rpx;
			height: 76rpx;
		}
	}
}

.btn {
	width: 686rpx;
	height: 80rpx;
	margin: 0 auto;
	display: block;
	border-radius: 40rpx;
	font-family:
		PingFangSC,
		PingFang SC;
	font-weight: 400;
	font-size: 30rpx;
	line-height: 80rpx;
	text-align: center;
}

.btn-phone {
	background: linear-gradient(135deg, #a18aff 0%, #73a4ff 100%);
	color: #ffffff;
}

.btn-other-phone {
	margin-top: 32rpx;
	margin-bottom: 32rpx;
	background: #ffffff;
	border: 2rpx solid #4454f5;
	color: #5271ff;
}

.btn-register {
	background: #ffffff;
	border: 2rpx solid rgba(0, 0, 0, 0.1);
	color: #000000;
}

.form-wrapper {
	:deep(.uni-forms-item) {
		width: 686rpx;
		margin-bottom: 48rpx;
		margin: 0 auto 48rpx;

		.uni-forms-item__error {
			padding-left: 48rpx;
		}
	}

	:deep(.uni-easyinput) {
		width: 686rpx;
		height: 96rpx;
		margin: 0 auto;

		.is-input-border {
			border: none;
			border-radius: 48rpx;
		}

		.uni-easyinput__content-input {
			height: 96rpx;
			padding-left: 48rpx !important;
			color: #000000 !important;
			font-family:
				PingFangSC,
				PingFang SC;
			font-size: 30rpx;

			.uni-easyinput__placeholder-class {
				font-family:
					PingFangSC,
					PingFang SC;
				font-size: 30rpx;
				color: rgba(0, 0, 0, 0.5);
			}
		}
	}

	:deep(.btn-code) {
		height: 76rpx;
		padding: 0 34rpx;
		margin-right: 10rpx;
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

	.btn-submit {
		width: 686rpx;
		height: 88rpx;
		margin: 68rpx auto 24rpx;
		display: block;
		background: linear-gradient(135deg, #c39cff 0%, #73a4ff 100%);
		text-align: center;
		border-radius: 44rpx;
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 400;
		font-size: 32rpx;
		color: #ffffff;
		line-height: 88rpx;
	}
}

.navigation-text {
	text-align: center;

	text {
		height: 40rpx;
		font-family:
			PingFangSC,
			PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		line-height: 40rpx;
	}

	.text {
		color: rgba(0, 0, 0, 0.5);
	}

	navigator {
		display: inline-flex;
		align-items: center;

		text {
			color: #3264ed;
			margin-right: 12rpx;
		}

		image {
			width: 24rpx;
			height: 20rpx;
		}
	}
}
</style>
