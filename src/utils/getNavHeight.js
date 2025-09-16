/**
 * @desc 计算导航栏高度
*/
export const getNavHeight = () => {
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
