<template>
	<view class="content">
		<uni-nav-bar left-icon="back" left-text="返回" fixed="true" right-text="菜单" title="导航栏组件" @barHeightfn="barHeightfn"></uni-nav-bar>
		<div class="content-val" :style="{'margin-top': barHeightPress + 'px'}">
			<ul >
				<li class="order-press lh25" v-for="(item,index) in 20" :key="index">
					<div class="order-press-img col-md-3 mt10">
						<img src="https://proj01.oss-cn-beijing.aliyuncs.com/2018/wKgBtFoyLzeAH_SoAAMJedLhuek005.jpg" mode="" ></img>
					</div>
					<div class="order-press-content col-md-8">
						<p class="col-md-12">
							<span class="pr8">编号：</span>
							<span>R01-HZ0048-01</span>
						</p>
						<p class="col-md-4">
							<span class="pr8">工期：</span>
							<span>3</span>
						</p>
						<p class="col-md-6">
							<span class="pr8">金额：</span>
							<span>8000元</span>
						</p>
						<p class="col-md-12">
							<span class="pr8">地址：</span>
							<span>北京市海淀区瑞祥装饰永定河路388号</span>
						</p>
					</div>
					<!-- @click="showToast"	 -->
					<div>
						<span class="order-press-botton" > 
							施工
						</span>
					</div>
				</li>
			</ul>
		</div>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import uniNavBar from "./topTab/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
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

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
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
	.content-val { width: 100%; height: 100%;}
	
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
