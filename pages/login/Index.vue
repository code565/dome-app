<template>
	<view>
	        <!-- #ifdef MP-WEIXIN -->
	        <view v-if="isCanUse">
	            <view>
	                <view class='header'>
	                    <image src='https://lib.rxjy.com/element-rx/static/images/rxLogo.png'></image>
	                </view>
	                <view class='content'>
	                    <view>申请获取以下权限</view>
	                    <text>获得你的公开信息(昵称，头像、地区等)</text>
	                </view>
	                <button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
	                    授权登录
	                </button>
	            </view>
	        </view>
	        <!-- #endif -->
	    </view>
</template>

<script>
	import { mapGetters, mapMutations  } from 'vuex'
	export default {
	    data() {
	        return {
				isCanUse: uni.getStorageSync('isCanUse')||true//默认为true
			}
	    },
		computed:{
			...mapGetters(['userInfo'])
		},
	    created() {
			uni.showToast({
			    title: '请您先授权登录',
			    duration: 1000,
				icon: 'none',
			});
	    },
		methods: {
			...mapMutations ({
				setUserInfo: 'SET_USER_INFO'
			}),
			wxGetUserInfo () {
				var self = this
				uni.getUserInfo({
				    provider: 'weixin',
				    success: function(infoRes) {
						let nickName = infoRes.userInfo.nickName; //昵称
						let avatarUrl = infoRes.userInfo.avatarUrl; //头像
						var data = {
							userName: infoRes.userInfo.nickName,
							phone: infoRes.userInfo.avatarUrl
						}
						try {
							self.setUserInfo(data)
							uni.setStorageSync('isCanUse', false);//记录是否第一次授权  false:表示不是第一次授权
							// uni.setStorageSync('userInfo', data);
							
							uni.showToast({
							    title: '授权成功',
							    duration: 2000
							});
							uni.reLaunch({
							    url: '/pages/index/index'
							});
						} catch (e) {}
				    },
				    fail(res) {}
				});
				
			}
		}
	}
</script>
	

<style scoped>
	.header {
	        margin: 90rpx 0 90rpx 50rpx;
	        border-bottom: 1px solid #ccc;
	        text-align: center;
	        width: 650rpx;
	        height: 300rpx;
	     line-height: 450rpx;
	}
	
	    .header image {
	        width: 200rpx;
	        height: 200rpx;
	    }
	
	    .content {
	        margin-left: 50rpx;
	        margin-bottom: 90rpx;
	    }
	
	    .content text {
	        display: block;
	        color: #9d9d9d;
	        margin-top: 40rpx;
	    }
	
	    .bottom {
	        border-radius: 80rpx;
	        margin: 70rpx 50rpx;
	        font-size: 35rpx;
	    }
</style>
