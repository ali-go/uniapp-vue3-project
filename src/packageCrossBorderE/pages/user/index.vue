<template>
	<view>
		<CustomNavbar @onBackPress="onBackPress">
			<template v-slot="{ navigationBarHeight }">
				<view class="navbar-text-center" :style="{ lineHeight: navigationBarHeight }">
					用户中心
				</view>
			</template>
		</CustomNavbar>
	</view>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar'
export default {
	components: {
		CustomNavbar
	}
}
</script>

<style></style>
