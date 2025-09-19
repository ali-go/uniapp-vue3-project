<template>
	<uni-forms ref="formRef" :model="formData" :rules="rules">
		<uni-forms-item label="企业名称" name="companyName" required>
			<uni-easyinput v-model.trim="formData.companyName" type="text" placeholder="请输入" />
		</uni-forms-item>
		<view class="picker-wrapper">
			<uni-forms-item label="证件类型" name="certType" required>
				<uni-data-picker
					v-model="formData.certType"
					:localdata="certTypesRange"
					popup-title="证件类型"
				>
				</uni-data-picker>
			</uni-forms-item>
			<image v-if="!formData.certType" class="arrow-icon" src="" mode="scaleToFill" />
		</view>
		<uni-forms-item label="证件号码" name="certNo" required>
			<uni-easyinput
				v-model.trim="formData.certNo"
				type="idcard"
				:clearable="false"
				placeholder="请输入"
			/>
		</uni-forms-item>
		<view class="picker-wrapper">
			<uni-forms-item label="用户角色" name="roleType" required>
				<uni-data-picker
					v-model="formData.roleType"
					:localdata="roleTypesRange"
					popup-title="用户角色"
				>
				</uni-data-picker>
			</uni-forms-item>
			<image v-if="!formData.roleType" class="arrow-icon" src="" mode="scaleToFill" />
		</view>
		<uni-forms-item label="手机号码" name="phoneNumber" required>
			<uni-easyinput
				v-model.trim="formData.phoneNumber"
				type="number"
				:clearable="false"
				placeholder="请输入"
			/>
		</uni-forms-item>
		<uni-forms-item label="短信验证码" name="code" required>
			<uni-easyinput
				v-model.trim="formData.code"
				type="text"
				:clearable="false"
				placeholder="请输入"
			>
				<template #right>
					<button class="btn-code" @click="handleCodeSend">获取验证码</button>
				</template></uni-easyinput
			>
		</uni-forms-item>
	</uni-forms>
</template>

<script>
import { phoneNumberRegExp, IDNumberRegExp } from '../utils/regExp'

export default {
	computed: {
		rules() {
			return {
				companyName: {
					rules: [
						{
							required: true,
							errorMessage: '请输入企业名称'
						}
					]
				},
				certType: {
					rules: [
						{
							required: true,
							errorMessage: '请选择证件类型'
						}
					]
				},
				certNo: {
					rules: [
						{
							required: true,
							errorMessage: '请输入证件号码'
						},
						{
							validateFunction: (rule, value, data, callback) => {
								if (this.formData.certType === '1' && !IDNumberRegExp.test(value)) {
									callback('身份证号格式错误')
								}
							}
						}
					]
				},
				roleType: {
					rules: [
						{
							required: true,
							errorMessage: '请选择用户角色'
						}
					]
				},
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
	data() {
		return {
			formData: {
				companyName: '', // 企业名称
				certType: '', // 证件类型
				certNo: '', // 证件号码
				roleType: '', // 用户角色
				phoneNumber: '', // 手机号码
				code: '' // 短信验证码
			},
			certTypesRange: [
				{ text: '身份证', value: '1' },
				{ text: '护照', value: '2' }
			], // 证件类型列表
			roleTypesRange: [
				{ text: '学生', value: '1' },
				{ text: '老师', value: '2' }
			] // 用户角色列表
		}
	},
	methods: {
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

<style lang="scss" scoped></style>
