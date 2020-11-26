<template>
	<view class="contents">
		<img src="static/homeImg/moreEnd.png" class="contentsHeaImg" />
		<div class="more">
			<p class="more-title">瑞祥服务</p>
			<div class="more-toncent">
					<div class="more-toncent-dispeo">
						<navigator url="./more/Index" open-type="navigate">
						<img src="static/homeImg/more/event.png" />
						<span class="more-toncent-woders">我的评价</span>
						</navigator>
					</div>
				<div class="more-toncent-dispeo">
					<img src="static/homeImg/more/event.png" />
					<span class="more-toncent-woders">帮助中心</span>
				</div>
				<div class="more-toncent-dispeo">
					<img src="static/homeImg/more/event.png" />
					<span class="more-toncent-woders">推荐好友</span>
				</div>
			</div>
		</div>
		<div class="more">
			<p class="more-title">工人服务</p>
			<div class="more-toncent">
				<div class="more-toncent-dispeo">
					<img src="static/homeImg/more/event.png" />
					<span class="more-toncent-woders">店&nbsp;&nbsp;&nbsp;&nbsp;铺</span>
				</div>
				<div class="more-toncent-dispeo">
					<img src="static/homeImg/more/event.png" />
					<span class="more-toncent-woders">排&nbsp;&nbsp;&nbsp;&nbsp;名</span>
				</div>
				<div class="more-toncent-dispeo">
					<img src="static/homeImg/more/event.png" />
					<span class="more-toncent-woders">活&nbsp;&nbsp;&nbsp;&nbsp;动</span>
				</div>
			</div>
			<div class="more-toncent" style="display: block;">
				<div class="more-toncent-dispeo">
					<img src="static/homeImg/more/event.png" />
					<span class="more-toncent-woders">店&nbsp;&nbsp;&nbsp;&nbsp;铺</span>
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
		width: 100%;
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
		    display: flex;
		    border-top: 1px solid #e5e5e5;
		    text-align: center;
		    justify-content: center;
			padding-top: 26rpx;
	}
	.more-toncent .more-toncent-dispeo {
		float: left;
		width: 33.33%;
		height: 162rpx;
		text-align: center;
		position: relative;
	}
	.more-toncent .more-toncent-dispeo img {
		width: 90rpx;
		height: 90rpx;
	}
	.more-toncent-woders {
		float: left;
		margin-left: 62rpx;
		color: #757575;
		width: 56px;
	}
	.more-toncent-dispeo:nth-of-type(1):before, .more-toncent-dispeo:nth-of-type(2):before {
        content: "";
        position: absolute;
        right: 6px;
        top: 9px;
        width: 1%;
        height: 44px;
        background-color: #e5e5e5;
    }
</style>
