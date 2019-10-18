<template>
	<section>
		<div class="section">
			<div class="header">
				账号登陆
			</div>
			<div class="bx">
			<div class="phone"><input type="tel" value="" placeholder="手机号/Flyme账号"/></div>
			<div class="passwd"><input type="tel" value="" placeholder="密码"/></div>
			<div :class="{test:true,tx:num==1}" @click="yan()">
				<div class="os"><div class="oss"></div></div>
				<span>点击按钮进行验证</span>
				<div  :class="{btn:num==1,bs:true}"></div>
			</div>
			</div>
			</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				num:''
			}
		},
		methods:{
			yan(){
				this.num=1
			}
		}
	}
</script>

<style scoped="">
	section{
		width: 100%;
	}
	.header{
		text-align: center;
		font-size: 7vw;
		margin-bottom: 15vw;
	}
	.phone input{
		font-size: 5vw;
		display: block;
		width: 90%;
		height: 14vw;
		padding: 0 3vw;
		margin: auto;
		outline-color: #198DED;
		margin-bottom: 8vw;
		
	}
	.passwd input{
		font-size: 5vw;
		display: block;
		width: 90%;
		height: 14vw;
		padding: 0 3vw;
		margin: auto;
		outline-color: #198DED;
		margin-bottom: 8vw;

	}
	.test{
		width: 97%;
		height: 15vw;
		margin: auto;
		border: 1px solid gainsboro;
		position: relative;
	}
	.os{
		width: 8vw;
		height: 8vw;
		border-radius: 50%;
		border: 1px solid blue;
		position: absolute;
		left: 3vw;
		top: 50%;
		transform: translateY(-50%);
	}
	.oss{
		width: 4vw;
		height: 4vw;
		border-radius: 50%;
		background: blue;
		position: absolute;
		left: 26%;
		top: 24%;
	}
	.test span{
		margin-left: 20vw;
		font-size: 4.4vw;
		color: #666;
		line-height: 14vw;
	}
	.bs{
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		margin: auto;
		height: 100%;
		background: #EEFFF5;
		border:1px solid #26C267;
		
	}
	.btn{
		animation: yan .5s;
		animation-fill-mode:forwards
	}
	.tx{
		
	}
	.tx span{
		color: #18A452;
	}
	@keyframes yan{
		0%{
			width: 0%;
		
		}
		100%{
			width: 100%;
			

		}
	}
</style>