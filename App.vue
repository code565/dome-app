<script>
	export default {
		onLaunch: function() {
			// true 或者 null
			if (!uni.getStorageSync('userInfo')) {
				uni.redirectTo({
					url:'/pages/login/Index'
				})
			}
		},
		onLoad: function() {
			console.log('App onLoad')
		},
		onShow: function() {
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style lang="scss">
	@import "uview-ui/index.scss";
	ul,ol li{
		list-style-type:none;
		padding: 0px
	}
</style>
 