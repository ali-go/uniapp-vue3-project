<script>
import { checkForUpdate } from './utils/checkForUpdate'
import { getNavHeight } from './utils/getNavHeight'
import './styles/reset.css'

export default {
	onLaunch: function () {
		checkForUpdate() // 检测小程序是否更新
		getNavHeight() // 获取 navigationBarHeight 等
		console.log('App Launch')
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
	globalData: {
		statusBarHeight: 0, // 状态栏高度
		menuButtonHeight: 32, // 胶囊按钮高度
		navigationBarHeight: 0, // 导航栏高度
	}
}
</script>

<style>
/*每个页面公共css */
</style>
