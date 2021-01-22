<template>
	<view class="content">
		我的{{userInfo.userName}}
	</view>
</template>

<script>
	import { mapGetters, mutations } from 'vuex'
	export default {
	    data() {
	        return {}
	    },
		computed:{
			...mapGetters(['userInfo'])
		},
	    created() {
			this.setpresMne()
	    },
		methods: {
			...mutations({
				setUserInfo: 'SET_USER_INFO'
			}),
			setpresMne () {
				debugger
				this.setUserInfo({
					mentOrder: 12333,
					userName: '6666'
				})
			}
		}
	}
</script>
	

<style>
</style>
