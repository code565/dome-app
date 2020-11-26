<template>
	<view class="contents">
		<canvas style="width: 220px; height: 220px;background:pink;" canvas-id="myQrcode"></canvas>
	</view>
</template>

<script>
	let drawQrcode = require("../../../static/js/weapp.qrcode.js")
	export default {
		data() {
			return {
			}
		},
		created () {
		},
		mounted() {
			this.drawQrcodeFun()
		},
		methods: {
			drawQrcodeFun () {
				drawQrcode({
				  width: 200,
				  height: 200,
				  canvasId: 'myQrcode',
				  // ctx: wx.createCanvasContext('myQrcode'),
				  text: 'https://www.baidu.com',
				  // v1.0.0+版本支持在二维码上绘制图片
				  // ctx: wx.createCanvasContext('myQrcode'),
				  text: 'https://www.baidu.com',
				  // v1.0.0+版本支持在二维码上绘制图片
				  image: {
						imageResource: '../../../static/logo.png',
						dx: 70,
						dy: 70,
						dWidth: 60,
						dHeight: 60
				   }
				  })
			}
		}
	}
</script>

<style>
</style>
