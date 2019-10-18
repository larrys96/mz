<template>
	<div class="cotainerss">
		<div class="header">魅族官网<span @click="moress()"><img src="../assets/img/fal.png"/></span></div>
		<ul class="ul1">
			<li>
				<div>
					<img src="../assets/img/x1.jpg"/>
				</div>
				<p>个人中心</p>
				
			</li>
			<li>
				<div>
					<img src="../assets/img/x2.jpg"/>
				</div>
				<p>我的订单</p>
			</li>
			<li>
				<div>
					<img src="../assets/img/x3.jpg"/>
				</div>
				<p>我的红包</p>
			</li>
			<li>
				<div>
					<img src="../assets/img/x4.jpg"/>
				</div>
				<p>我的优惠卷</p>
			</li>
			<li>
				<div>
					<img src="../assets/img/x5.jpg"/>
				</div>
				<p>我的地址</p>
			</li>
			<li>
				<div>
					<img src="../assets/img/x6.jpg"/>
				</div>
				<p>我的收藏</p>
			</li>
		</ul>
		<ul class="ul2">
			<li>
				<div>
					<img src="../assets/img/xx1.jpg"/>
				</div>
				<p>产品</p>
			</li>
			<li>
				<div>
					<img src="../assets/img/xx2.jpg"/>
				</div>
				<p>Flyme</p>
			</li>
			<li>
				<div>
					<img src="../assets/img/xx3.jpg"/>
				</div>
				<p>云服务</p>
			</li>
			<li>
					<div>
						<img src="../assets/img/xx4.jpg"/>
					</div>
					<p>专卖店</p>
				</li>
			<li>
				<div>
					<img src="../assets/img/x5.jpg"/>
				</div>
				<p>服务支持</p>
			</li>
			<li>
				<div>
					<img src="../assets/img/xx6.jpg"/>
				</div>
				<p>社区</p>
			</li>
			<li>
				<div>
					<img src="../assets/img/xx7.jpg"/>
				</div>
				<p>app下载</p>
			</li>
		</ul>
		<ul class="ul3">
			<li>
				<div>
					<img src="../assets/img/xx8.jpg"/>
				</div>
				<p>个人中心</p>
				
			</li>
			<li>
				<div>
					<img src="../assets/img/xx9.jpg"/>
				</div>
				<p>我的订单</p>
			</li>
			<li>
				<div>
					<img src="../assets/img/xx10.jpg"/>
				</div>
				<p>我的红包</p>
			</li>
			<li>
				<div>
					<img src="../assets/img/xx11.jpg"/>
				</div>
				<p>我的优惠卷</p>
			</li>

		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		methods:{
			moress(){
				$('.cotainerss').removeClass("moves")			
			}
		}
	}
</script>

<style scoped="">
	.cotainerss{
		transform: translateY(-250vw);
		transition: all .8s;
		position: fixed;
		z-index: 10000;
		background: #fff;
		height: 100%;
		width: 100%;
	}
	.header{
		position:relative ;
		text-align: center;
		margin-top: 5vw;
		font-size: 4.5vw;
	}
	.header span{
		position: absolute;
		width: 5vw;
		right: 2vw;
		top:0vw;
	}
	.header span img{
		width: 100%;
	}
	.ul1{
		display: flex;
		/*width: 100%;*/
		flex-wrap:wrap ;
		list-style: none;
		margin-bottom: 5vw;
	}
	.ul1 li{
		width: 25%;
		box-sizing: border-box;
		font-size:3vw ;
		text-align: center;
	}
	.ul1 li>div{
		padding: 5vw;
		padding-bottom: 0;
	}
	.ul1 img{
		width: 100%;
	}
	.ul2{
		background: #f4f4f4;
		display: flex;
		/*width: 100%;*/
		flex-wrap:wrap ;
		list-style: none;
		margin-bottom: 2vw;
		padding-bottom: 8vw;
	}
	.ul2 li{
		width: 25%;
		box-sizing: border-box;
		font-size:3vw ;
		text-align: center;
	}
	.ul2 li>div{
		padding: 8vw;
		padding-bottom: 1vw;
	}
	.ul2 img{
		width: 100%;
	}
		.ul3{
		display: flex;
		/*width: 100%;*/
		flex-wrap:wrap ;
		list-style: none;
		margin-bottom: 5vw;
	}
	.ul3 li{
		width: 25%;
		box-sizing: border-box;
		font-size:3vw ;
		text-align: center;
	}
	.ul3 li>div{
		padding: 5vw;
		padding-bottom: 2vw;
	}
	.ul3 img{
		width: 100%;
	}
</style>