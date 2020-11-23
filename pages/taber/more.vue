<template>
	<view class="contents">
		<img src="static/homeImg/moreEnd.png" class="contentsHeaImg" />
		<div class="more">
			<p class="more-title">瑞祥服务</p>
			<div class="more-toncent">
				<div class="more-toncent-dispeo">
					<img src="static/homeImg/more/event.png" />
					<span class="more-toncent-woders">我的评价</span>
				</div>
				<div class="more-toncent-dispeo">
					<img src="static/homeImg/more/event.png" />
					<span class="more-toncent-woders">我的评价</span>
				</div>
				<div class="more-toncent-dispeo">
					<img src="static/homeImg/more/event.png" />
					<span class="more-toncent-woders">我的评价</span>
				</div>
			</div>

		</div>
	
	</view>
</template>

<script>
</script>

<style scoped>
	.contents{
		height: 100%;
		position: absolute;
	}
	.contentsHeaImg{
		width: 100%;
	}
	.more-title{
		font-weight: 500;
		font-size: 44rpx;
		margin-left: 30rpx;
		margin-bottom: 20rpx;
		margin-top: 20rpx;
	}
	.more-toncent{
		border-top: 1px solid #e5e5e5;
		text-align: center;
	}
	.more-toncent .more-toncent-dispeo {
		float: left;
		width: 200rpx;
		height: 200rpx;
		text-align: center;
		float: left;
	}
	.more-toncent .more-toncent-dispeo img {
		width: 90rpx;
		height: 90rpx;
	}
</style>
