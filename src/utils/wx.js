/**
 * @desc 检测小程序是否更新
 */
export const checkForUpdate = () => {
	if (wx.canIUse('getUpdateManager')) {
		const updateManager = wx.getUpdateManager()
		updateManager.onCheckForUpdate(function (res) {
			console.log('hasUpdate', res.hasUpdate)
			if (res.hasUpdate) {
				updateManager.onUpdateReady(function () {
					wx.showModal({
						title: '更新提示',
						content: '新版本已经准备好，是否重启应用？',
						success: function (res) {
							if (res.confirm) {
								updateManager.applyUpdate()
							}
						}
					})
				})
				updateManager.onUpdateFailed(function () {
					wx.showModal({
						title: '已经有新版本了哟~',
						content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
					})
				})
			}
		})
	} else {
		wx.showModal({
			title: '提示',
			content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
		})
	}
}

/**
 * @desc 计算导航栏高度
 */
export const getNavigationBarHeight = () => {
	const { statusBarHeight, platform } = uni.getSystemInfoSync()
	const { top, height } = uni.getMenuButtonBoundingClientRect()

	// 第一次需要异步执行
	// https://developers.weixin.qq.com/community/develop/doc/000808b44fc1a038956c034db5b400
	setTimeout(() => {
		// 状态栏高度
		getApp().globalData.statusBarHeight = statusBarHeight
		// 胶囊按钮高度 一般是32
		getApp().globalData.menuButtonHeight = height || 32
		// 导航栏高度
		if (top && height) {
			getApp().globalData.navigationBarHeight = (top - statusBarHeight) * 2 + height
		} else {
			getApp().globalData.navigationBarHeight = platform === 'android' ? 48 : 40
		}
	})
}

/**
 * @desc 返回上一页
 * @param {Function} func 覆盖默认返回
 */
export const navigateBack = func => {
	const pages = getCurrentPages()
	if (pages.length === 1) {
		// 通过分享进来的 返回首页
		uni.switchTab({ url: '/pages/index/index' })
	} else {
		if (func && typeof func === 'function') {
			func()
		} else {
			uni.navigateBack({
				delta: 1
			})
		}
	}
}

/**
 * @desc 保存图片
 * @param {Function} func
 */
export const saveImage = url => {
	const save = image =>
		uni.saveImageToPhotosAlbum({
			filePath: image,
			success() {
				uni.showToast({
					title: '保存成功',
					icon: 'success'
				})
			},
			fail(err) {
				console.log('saveImageToPhotosAlbum', err)
				if (
					err.errMsg === 'saveImageToPhotosAlbum:fail:auth denied' ||
					err.errMsg === 'saveImageToPhotosAlbum:fail auth deny' ||
					err.errMsg === 'saveImageToPhotosAlbum:fail authorize no response'
				) {
					uni.showModal({
						title: '提示',
						content: '需要您授权保存相册',
						success: res => {
							if (res.confirm) {
								wx.openSetting({})
							}
						}
					})
					return
				}

				uni.showToast({
					title: '保存失败',
					icon: 'error'
				})
			}
		})

	if (url.indexOf('https') === 0) {
		wx.downloadFile({
			url,
			success: function (res) {
				if (res.statusCode === 200) {
					const image = res.tempFilePath
					save(image)
				}
			},
			fail: function (err) {
				console.error('err', err)
				uni.showToast({
					title: '保存失败',
					icon: 'error'
				})
			}
		})
	} else {
		uni.getImageInfo({
			src: url,
			success: ({ path }) => {
				save(path)
			},
			fail: err => {
				console.error('err', err)
				uni.showToast({
					title: '保存失败',
					icon: 'error'
				})
			}
		})
	}
}

/**
 *
 * @param {*} px px尺寸
 * @returns 对应的rpx尺寸
 */
export const pxToRpx = px => {
	const systemInfo = uni.getSystemInfoSync()
	return (750 / systemInfo.windowWidth) * px
}
