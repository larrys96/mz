<template>
	<section>
		<header>
			<div class="rt" @click="back()"><img src="../assets/img/jt.png"/></div>
			<div class="inp"><input type="text" v-model="msg"/><span @click="change()">x</span></div>
			<div class="ss">搜索</div>
		</header>
		<div class="container">
			<p>大家都在搜</p>
			<div class="cons">
				<span>魅族 POP2</span>
			</div>
		</div>
		<div class="hist">
			<div class="ove">
				<p>历史纪录</p>
				<div class="his">
					<p>暂无历史纪录</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return {
				msg:''
			}
			
		},
		methods:{
			back(){
				this.$router.back();
			},
			change(){
				this.msg='';
			}
		},
		watch:{
			$route(to,from){
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	.hist{
		padding-top: 2vw;
		background: #f4f4f4;
	}
	.ove{
		background: #fff;
		padding:0 5vw 30vw;
	}
	.ove>p{ 
		padding: 4vw 0;
		border-bottom: 1px solid #f4f4f4;
		font-size: 4vw;
	}
	.his p{
		margin-top: 2vw;
		font-size: 3vw;
		color: #999;
		text-align: center;
	}
header{
	display: flex;
	justify-content:space-between;
	align-items: center;
	padding: 2vw 5vw;
	border-bottom: 1px solid #f4f4f4;
}
.inp{
	margin-top: .5vw;
	width: 75%;
	border-radius:10vw;
	overflow: hidden;
	position: relative;
}
.inp input{
	padding:0 3vw ;
	width: 100%;
	height: 7vw;
	border: none;
	background: #f4f4f4;
	outline: none;
}
.inp span{
	line-height: 2.5vw;
	color: #fff;
	position: absolute;
	text-align: center;
	width: 3vw;
	height: 3vw;
	right: 2vw;
	top: 2vw;
	background: #999;
	border-radius: 50%;
}
.rt{
	width: 5vw;
	position: relative;
	top: 0.7vw;
}
.rt img{
	width: 100%;
}
.ss{
	font-size: 3.7vw;
	color: #666;
}
.container{
	margin-top: 6vw;
}
.container p{
	padding-left: 5vw;
	margin-bottom: 5vw;
	
}
.cons{
	padding-left: 5vw;
	padding-bottom: 30vw;
}
.cons span{
	display: inline-block;
	border: 1px solid #666;
	border-radius: 5vw;
	padding: 1vw 2vw;
	color: #999;
	
}
</style>