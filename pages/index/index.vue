<template>
	<view class="content">
		<!-- <uni-nav-bar left-icon="back" left-text="返回" fixed="true" right-text="菜单" title="导航栏组件" @barHeightfn="barHeightfn"></uni-nav-bar> -->
		<div class="content-val" :style="{'margin-top': barHeightPress + 'px'}">
			<image src="/static/homeImg/moreEnd.png" class="contentsHeaImg" /></image>
			<div class="moueHome">
				<ul class="moueHome-ul">
					<li>
						<div class="moueHome-ul-pred">
							<image src="/static/homeImg/scanAll.png" mode=""></image>
						</div>
						<sapn class="moueHome-ul-wordes">
							扫一扫
						</sapn>
					</li>
					<li>
						<div class="moueHome-ul-pred">
							<image src="/static/homeImg/find.png" mode=""></image>
						</div>
						<sapn class="moueHome-ul-wordes">
							扫一扫
						</sapn>
					</li>
					<li>
						<div class="moueHome-ul-pred">
							<image src="/static/homeImg/find.png" mode=""></image>
						</div>
						<sapn class="moueHome-ul-wordes">
							扫一扫
						</sapn>
					</li>
				</ul>
				
			</div>
		</div>
		<u-toast ref="uToast" />
	</view>
</template>


<script>
	export default {
		components: {},
		data() {
			return {
				title: '6666',
				count: 4,
				value: 2,
				barHeightPress: 0
			}
		},
		onLoad:function(){
			uni.startPullDownRefresh();
		},
		methods: {
			toOpportnity () {
				uni.navigateTo({      
					url:'/pages/home/details'
				})
			},
			barHeightfn (val) {
				this.barHeightPress = val
			},
			showToast() {
							this.$refs.uToast.show({
								title: '登录成功',
								type: 'success'
							})
						}
		},
		onPullDownRefresh() {
			var self = this
		    setTimeout(function () {
		        uni.stopPullDownRefresh();
				uni.showToast({
					title: '刷新成功',
					icon: 'success',    //将值设置为 success 或者 ''
					duration: 2000    //持续时间为 2秒
				})  
		    }, 1000);
		}
	}
</script>

<style scoped>
	.moueHome{
		background-color: #fff;
	}
	.moueHome-ul-pred {
		margin: 0 auto;
	}
	.contentsHeaImg{
		width: 100%;
		height: 350rpx;
	}
	.moueHome {
		width: 100%;
	}
	.moueHome-ul {
		display: flex;
		justify-content: space-evenly;
	}
	.moueHome-ul li {
		    text-align: center;
	}
	.moueHome-ul li image{
		width: 150rpx;
		height: 150rpx;
		
	}
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #e5e5e5;
		
	}
	.moueHome-ul-wordes{
		font-size: 16px;
		 font-weight: 600;
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.content-val { 
		width: 100%;}
	
	.order-press{
		height: 200rpx;
		padding: 10rpx;
		position: relative;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.order-press-img img{
		width: 160rpx;
		height: 160rpx;
		float: left;
	}
	.order-press-content {
		float: left;
	}
	.order-press-botton{
		width: 142rpx;
		height: 60rpx;
		right: 20rpx;
		position: absolute;
		color: white;
		background: #999;
		text-align: center;
		line-height: 56rpx;
		top: 50rpx;
	}
	
	
</style>
