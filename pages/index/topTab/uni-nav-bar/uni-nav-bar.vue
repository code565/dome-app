<template>
	<view class="uni-navbar">
		<view :class="{ 'uni-navbar--fixed': fixed, 'uni-navbar--shadow': shadow, 'uni-navbar--border': border }" :style="{ 'background-color': backgroundColor, 'padding-top': barHeight + 'px'}"
		 class="uni-navbar__content">
			<uni-status-bar v-if="statusBar" />
			<view :style="{ color: color,backgroundColor: backgroundColor }" class="uni-navbar__header uni-navbar__content_view">
				<div class="headerService">
					<img src="static/homeImg/sever.png" mode="" @click="makePhoneCall"></img>
				</div>
				<div class="headerButton">
					<div class="headerBorder"> 
						<button class="buttonPress " @click="activeIndex = 1" :class="activeIndex == 1 ? 'active' : '' " >施工</button>
						<button class="buttonPress" @click="activeIndex = 2"  :class="activeIndex == 2 ? 'active' : '' " >维修</button>
					</div>
				</div>
				<div class="headerImg">
					<img src="static/homeImg/scan.png" mode="" @click="scancode()"></img>
				</div>
			</view>
		</view>
		<view class="uni-navbar__placeholder" v-if="fixed">
			<uni-status-bar v-if="statusBar" />
			<view class="uni-navbar__placeholder-view" />
		</view>
	</view>
</template>

<script>
	import uniStatusBar from "../uni-status-bar/uni-status-bar.vue";
	import uniIcons from "../uni-icons/uni-icons.vue";

	export default {
		name: "UniNavBar",
		components: {
			uniStatusBar,
			uniIcons
		},
		data() {
			return {
				activeIndex: 1,
				barHeight : 25
			}
		},
		props: {
			title: {
				type: String,
				default: ""
			},
			leftText: {
				type: String,
				default: ""
			},
			rightText: {
				type: String,
				default: ""
			},
			leftIcon: {
				type: String,
				default: ""
			},
			rightIcon: {
				type: String,
				default: ""
			},
			fixed: {
				type: [Boolean, String],
				default: false
			},
			color: {
				type: String,
				default: "#000000"
			},
			backgroundColor: {
				type: String,
				default: "#f3AA36"
			},
			statusBar: {
				type: [Boolean, String],
				default: false
			},
			shadow: {
				type: [String, Boolean],
				default: false
			},
			border: {
				type: [String, Boolean],
				default: true
			}
		},
        mounted() {
          if(uni.report && this.title !== '') {
              uni.report('title', this.title)
          }
		  this.barHeight = uni.getSystemInfoSync().statusBarHeight
		  this.$emit('barHeightfn',this.barHeight)
        },
		onLoad:function(){
		    _self = this;
		    _self.getSystemStatusBarHeight();
		},
		methods: {
			onClickLeft() {
				this.$emit("clickLeft");
			},
			onClickRight() {
				this.$emit("clickRight");
			},
			getSystemStatusBarHeight:function(){
			    var height = plus.navigator.getStatusbarHeight();
			    _self.barHeight = height;
			   _self.barHeight = 0;
			},
			makePhoneCall () {
				uni.makePhoneCall({
				 	// 手机号
				    phoneNumber: '15035404266', 
					// 成功回调
					success: (res) => {
						console.log('调用成功!')	
					},
					// 失败回调
					fail: (res) => {
						console.log('调用失败!')
					}
				  });
			},
			// 二维码调用
			scancode () {
				var self = this
				uni.scanCode({
					success: function (res) {
					    console.log('条码类型：' + res.scanType);
					    console.log('条码内容：' + res.result);
						uni.showToast({
							title: '扫码成功',
							duration: 2000    //持续时间为 2秒
						})  
					}
					
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	$nav-height: 60px;
	.uni-nav-bar-text {
		/* #ifdef APP-PLUS */
		font-size: 34rpx;
		/* #endif */
		/* #ifndef APP-PLUS */
		font-size: $uni-font-size-lg;
		/* #endif */
	}
	.uni-nav-bar-right-text {
		font-size: $uni-font-size-base;
	}

	.uni-navbar {
		width: 750rpx;
	}

	.uni-navbar__content {
		position: relative;
		width: 750rpx;
		background-color: $uni-bg-color;
		overflow: hidden;
	}

	.uni-navbar__content_view {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		flex-direction: row;
		// background-color: #FFFFFF;
	}

	.uni-navbar__header {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		width: 750rpx;
		height: $nav-height;
		line-height: $nav-height;
		font-size: 16px;
		// background-color: #ffffff;
	}

	.uni-navbar__header-btns {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-wrap: nowrap;
		width: 120rpx;
		padding: 0 6px;
		justify-content: center;
		align-items: center;
	}

	.uni-navbar__header-btns-left {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		width: 150rpx;
		justify-content: flex-start;
	}

	.uni-navbar__header-btns-right {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		width: 150rpx;
		padding-right: 30rpx;
		justify-content: flex-end;
	}

	.uni-navbar__header-container {
		flex: 1;
	}

	.uni-navbar__header-container-inner {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		align-items: center;
		justify-content: center;
		font-size: $uni-font-size-base;
	}


	.uni-navbar__placeholder-view {
		height: $nav-height;
	}

	.uni-navbar--fixed {
		position: fixed;
		z-index: 998;
	}

	.uni-navbar--shadow {
		/* #ifndef APP-NVUE */
		box-shadow: 0 1px 6px #ccc;
		/* #endif */
	}

	.uni-navbar--border {
		border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: $uni-border-color;
	}
	.headerService img{
		width: 60rpx;
		height: 60rpx;
		float: left;
		margin-left: 14px
	}
	.headerImg img{
		width: 50rpx;
		height: 50rpx;
		float: right;
		margin-right: 14px
	}
	.headerButton{
		display: flex;
		text-align: center;
		width: 100%;
		justify-content: center;
	}
	.headerButton .buttonPress{
		    width: 200rpx;
		    height: 70rpx;
		    float: left;
		    line-height: 70rpx;
		    border-radius: 0px;
		    color: white;
		    background: #eb8c1b;
	}
	.headerButton .buttonPress.active{
		background: white;
		color: #eb8c1b;
	}
	.uni-button:after{
		border: none;
		border-radius: 0px
	}
	.headerButton .buttonPress.active:after{
		border: none;
	}
	.headerButton .headerBorder{
		border: 1px solid white;
	}
</style>
