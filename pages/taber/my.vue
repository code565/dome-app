<template>
	<view class="list-wrapper">
		<u-notice-bar mode="horizontal" :list="list"></u-notice-bar>
		<view class="head">
			<view class="userinfo">
				<image bindtap="bindViewTap" class="userinfo-avatar" :src="userInfo.phone" mode="cover"></image>
				<text class="userinfo-nickname">{{userInfo.userName}}</text>
			</view>
		</view>
		<view >
			<u-grid :col="3">
				<u-grid-item  @click="gridClick('/pages/taber/my/orderDetails/Index')">
					<u-badge count="9" :offset="[20, 20]"></u-badge>
					<u-icon name="order" :size="46"></u-icon>
					<view class="grid-text">订单</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="order" :size="46"></u-icon>
					<view class="grid-text">订单</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="order" :size="46"></u-icon>
					<view class="grid-text">订单</view>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	import { mapGetters, mapMutations  } from 'vuex'
	export default {
	    data() {
	        return {
				list: ['尽快完善个人信息', '信息有疑问请联系客服：110']
			}
	    },
		computed:{
			...mapGetters(['userInfo'])
		},
	    created() {
	    },
		methods: {
			...mapMutations ({
				setUserInfo: 'SET_USER_INFO'
			}),
			gridClick (url) {
				uni.navigateTo({
				    url: url
				});
			}
		}
	}
</script>
	

<style scoped>
	.grid-text {
			font-size: 28rpx;
			margin-top: 4rpx;
			color: $u-type-info;
		}
	.head {
	  width: 100%;
	  height: 300rpx;
	}
	.userinfo {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  width: 100%;
	  position: fixed;
	  background-color: #1296db;
	  height: 300rpx;
	}
	
	.userinfo-avatar {
	  width: 150rpx;
	  height: 150rpx;
	  margin: 30rpx;
	  border-radius: 50%;
	}
	
	.userinfo-nickname {
	  color: #333333;
	  font-size: 42rpx;
	}
.list-wrapper {
  width: 100%;
}

/* 横着的分割View样式 */
/*分割线样式*/
.div-line{
  background: #E0E3DA;
  width: 100%;
  height: 3rpx;
}

.list-item {
  width: 100%;
  height: 120rpx;
}

.list-item_active {
  background-color: #E0E3DA;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 120rpx;
}
.item-text {
  position: fixed;
  left: 100rpx;
  font-size: 38rpx;
}
.item-array {
  position: fixed;
  right: 50rpx;
  font-size: 38rpx;
}

.item-image {
  position: fixed;
  left: 50rpx;
  width: 100rpx;
  height: 100rpx;
}
</style>
