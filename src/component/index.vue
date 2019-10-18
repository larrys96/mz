<template>
	<section>
		<more></more>
	     <header>
	     	<div class="header">	     		
	     		<router-link to='/search' class='search'></router-link>
	     		<router-link to='/login' class='mz'></router-link>
	     		<router-link to='/shops' class='shops'></router-link>
	     		<span class="mores" @click="mores()"></span>
	     		
	     	</div>
	     	<ul class="uls1">
	     		<li><router-link to='/home'>推荐</router-link></li>
	     		<li v-for="(v,i) in list">					
					<router-link :to="'/details/'+v.id">{{v.con}}</router-link>
				</li>

	     	</ul>
	     </header>
	     <router-view></router-view>
	    <footer>
	    	
	    	<div foot>
	    		<div class="top1">
	    			<span>400-788-3333</span>
	    			<span>在线客服</span>
	    		</div>
	    		<div class="buttoms">
	    			<div>
	    				<p>粤ICP备13003602号-2合字B2-20170010</p>
	    				<p>营业执照©2018 Meizu All rights reserved</p>
	    			</div>
	    			<span><img src="../assets/img/ch.png"/>简体中文</span>
	    		</div>
	    	</div>
	    	
	    </footer>
	</section>
</template>

<script>
	import more from'./more.vue'
	export default{
		data(){
			return{
				list:'',
				num:0,
				texts:'',
				msg:{
					a:false
				}
				
					}
					
					
		},
		methods:{
				changes(){
//					this.num=0
				},
				change(i){
					this.num=i+1
				},
				mores(){
					$('.cotainerss').addClass("moves")	
				}

			},
		mounted(){
			this.$http.get('./data/jsons.json')
			  .then((response)=> {
//			    console.log(response);
			    this.list=response.data.list;
//			    this.imgs=response.data.imgs;
			    console.log(this.imgs)
			    
			  })
			  .catch(function (error) {

			  })
			  .then(function () {

			  });  
//			  var that=this
//			  this.$nextTick(()=>{
//		     $(function(){
//				that.heights=$('header').height()
//				console.log(that.heights)
//		     		
//		    
//				})
//
//  		 })
	},
	components:{
		'more':more
	}
	}
</script>
	
<style scoped>
	.cotainerss.moves{
		 transform: translateY(0);
		 transition: all .8s;
	}
	ul{
		list-style: none;
	}
	section{
		width: 100%;
		overflow: hidden;
	}
	header{
		overflow: hidden;
		z-index: 2;
		width: 100%;
		background: #fff;
		margin-bottom: 3vw;
	}
	.header{
		width: 100%;
		display: flex;
		padding: 3vw 2vw 3vw 3.329vw;
		position: relative;
		align-items: center;
		
	}
	.search{
		display: block;
		width: 3.88889vw;
    	height: 3.88889vw;
		background: url(../assets/img/logo.svg) no-repeat;
		background-size: cover;
		position: absolute;
	}
	.mz{
		background: url(../assets/img/meizu.png) no-repeat;
	    display: inline-block;
	    background-size: 100% 50%;
	    background-position:center;
   	 	width: 18.51852vw;
    	height: 8.33333vw;
    	margin: auto;
    	
	}
	.shops{
		background: url(../assets/img/logo2.svg) no-repeat;
		display: block;
		width: 4.81481vw;
    	height: 4.81481vw;
		background-size: 100% 100%;
		position: absolute;
		right: 15.68519vw;
	}
	.mores{
		background: url(../assets/img/logo1.svg) no-repeat;
		display: block;
		width: 3.7037vw;
    	height: 3.7037vw;
		background-size: 100% 100%;
		position: absolute;
		right: 5.96296vw;;
		top: 5.3vw;
	}
	.uls1{
		display: flex;
		justify-content: space-between;
		padding:1.5vw 2vw;
	}

	.uls1 li a{
		color: #333;
		font-size: 3.7037vw;
		text-decoration: none;
	}
	.buttoms{
		padding-bottom: 5vw;
	}
	.buttoms>div{
		display: inline-block;
		width: 60%;
		margin-left: 4.5vw;
		color: #999;
		font-size: 2.26852vw;
		margin-top: 4vw;
	}
	.buttoms img{
		width: 2.5vw;
		vertical-align: middle;
		margin-right: 1vw;
	}
	.buttoms span{
		display: inline-block;
		font-size: 3.3vw;
		margin-left: 9vw;
		margin-top: 5vw;
	}
	.top1{
		margin-top:5vw;
		width: 100%;
		display: flex;
		justify-content:space-around;
	}
	.top1 span{
		display: inline-block;
		width: 45%;
		border-radius:5vw ;
		background: #00b4ff  no-repeat;
		height: 9.4vw;		
		color: #fff;
		font-size: 4.25vw;
		box-sizing: border-box;
		padding-top: 1.5vw;
	}
	.top1 span:first-child{
		padding-left: 10vw;
		background-image: url(../assets/img/phone.png);
		background-size: 4.25926vw;
    	background-position: 3.5vw;
	}
	.top1 span:last-child{
		padding-left: 16vw;
		background-image: url(../assets/img/wc.png);
		background-size: 5.25926vw;
    	background-position: 7.5vw;
		
	}
	.returns{
		width: 100%;
		height: 16.22222vw;
		display: inline-block;
	    color: #999;
	    font-size: 4.16667vw;
		display: flex;
    	align-items: center;
    	justify-content: center;
    	background: #f4f4f4;
	}
</style>