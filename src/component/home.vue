<template>
	<section>
		<div class="xb"></div>
		 <article class="ones">
	     	<mt-swipe :auto="4000" class='lb'>
			  <mt-swipe-item v-for='(v,i) in imgss'><img :src="v.imgsrc" /></mt-swipe-item>
			</mt-swipe>
	     </article>
	     <div class="container">
	     	<div class="nav">
	     		<ul class="uls">
	     			<li v-for="(s,i) in uls"><img :src="s.imgsrc" alt="" />{{s.txt}}</li>
	     		</ul>
	     	</div>
	     	<div class="tite">
	     		<ul class="lis">
	     			<li v-for='(v,i) in lis'>
	     				<img :src="v.imgsrc"/>
	     				<p>{{v.txt}}</p>
	     			</li>
	     		</ul>
	     		
	     	</div>
	     	<div class="shops">
	     		<div class="lefts"><router-link :to="'/pages/'+shops[0].id"><img :src="shops[0].imgsrc"/></router-link></div>
	     		<div class="rights">
	     			<div class="right-top"><img :src="shops[1].imgsrc"/></div>
	     			<div class="right-but"><img :src="shops[2].imgsrc"/></div>
	     		</div>
	     	</div>
	     	<div class="smartphone">
	     		<div class="title">
	     			<h3 class="til">智能手机</h3>
	     		</div>
	     		<div class="banner">
					<img :src="show[0].imgsrc" alt="" />
	     		</div>
	     		<div class="show">
	     			<ul>
	     				<li v-for="(v,i) in show[1].list" :class="'one'+i"><router-link :to="'/details/'+v.id">
	     					<img :src="v.imgsrc" alt="" />
	     					<div class="texts">
	     						<p class="p1">{{v.txt}}</p>
	     						<p class="p2" :class='{current:v.logo}'><em :class='{currents:v.logo}'>{{v.logo}}</em><span>{{v.title}}</span></p>
	     						<p class="p3"><i>￥</i><span>{{v.price}}</span></p>
	     					</div>
	     				</router-link></li>
	     			</ul>
	     		</div>
	     		<div class="sell">
	     			<div class="sell" v-for="(v,i) in sell">
	     				<div class="titles">
	     				<h3 class="tils">{{v.mzsx[0].title}}</h3>
	     				</div>
	     				<div class="news">
	     					<div class="tops">
	     						<div><img :src="v.mzsx[0].tt[0].imgsrc"/></div>
	     						<div class="rig">
	     							<h4>{{v.mzsx[0].tt[0].title}}</h4>
		     						<p>{{v.mzsx[0].tt[0].txt}}</p>
		     						<p class="x1"><i>￥</i>{{v.mzsx[0].tt[0].price}}</p>
	     						</div>
	     					</div>
	     					<div class="buts">
	     						
	     						<div class="rig">
	     							<h4>{{v.mzsx[0].tt[1].title}}</h4>
		     						<p>{{v.mzsx[0].tt[1].txt}}</p>
		     						<p class="x1"><i>￥</i>{{v.mzsx[0].tt[1].price}}</p>
	     						</div>
	     						<div><img :src="v.mzsx[0].tt[1].imgsrc"/></div>
	     					</div>
	     				</div>	  
	     				<!--<div>{{v.mzsx[0].earphone}}</div>-->
	     				<div class="shows">
			     			<ul>
			     				<li v-for="(s,i) in v.mzsx[0].earphone" :class="'one'+i"><router-link :to="'/details/'+v.id">
			     					<img :src="s.imgsrc" alt="" />
			     					<div class="texts">
			     						<p class="p1">{{s.title}}</p>
			     						<p class="p2" :class='{current:s.logo}'><em :class='{currents:s.logo}'>{{s.logo}}</em><span>{{s.txt}}</span></p>
			     						<p class="p3"><i>￥</i><span>{{s.price}}</span></p>
			     					</div>
			     				</router-link></li>
			     			</ul>
			     		</div>
	     			</div>
	     			
	     		</div>
     		
	     		</div>
	     	<div class="community">
     			<div class="title">
     			<h3 class="til">社区热帖</h3>
     			</div>
     			<div class="listx">
     				<ul>
     					<li v-for="(v,i) in sq">
     						<div class="pt">
     							<img :src="v.imgsrc"/>
     						</div>
     						<div class="log">
     							<i>
     								<img :src="v.imgsrc1"/>
     							</i>
     							<span>{{v.name}}</span>
     						</div>
     						<p class="px">{{v.txt}}</p>
     						<p class="tip">{{v.title}}</p>
     					</li>
     				</ul>	     				
     			</div>
	    	 </div>
	    	 <div class="flyme">
	    	 	<div class="title">
     			<h3 class="til">Flyme</h3>
     			</div>
	    	 	<ul>
	    	 		<li v-for="(v,i) in fly">
	    	 			<div class="pt"><img :src="v.imgsrc"/></div>
	    	 			<p class="tic">{{v.txt}}</p>
	    	 		</li>
	    	 	</ul>
	    	 	
	    	 </div>
	     	 <div class="videos">
	     	 	<div class="title">
     			<h3 class="til">精彩视频</h3>
     			</div>
	     	 	<ul>
	     	 		<li v-for="(v,i) in videos">
	     	 			<div class="imgs">
	     	 				<img :src="v.imgsrc"/>
	     	 			</div>
	     	 			<p>{{v.txt}}</p>
	     	 		</li>
	     	 	</ul>
	     	 	
	     	 	
	     	 </div>
	     </div>
	     <div class="returns" @click="returns()">
	    		<span>返回顶部</span>
	    	</div>
	     
	</section>
</template>

<script>
	export default{
		data(){
			return{
				imgss:'',
				uls:'',
				lis:'',
				shops:'',
				show:'',
				sell:''
				}					
		},
		mounted(){
			this.$http.get('./data/jsons.json')
			  .then((response)=> {			  
			    this.imgss=response.data.imgs;
			    this.uls=response.data.uls;
			    this.lis=response.data.lis;
			    this.shops=response.data.shops;
			    this.show=response.data.show;
			    this.sell=response.data.sell;
			    this.sq=response.data.community;
			    this.fly=response.data.fly;
			    this.videos=response.data.videos

			    
			  })
			  .catch(function (error) {
			
			  })
			  .then(function () {

			  });  
//			   this.$nextTick(()=>{
//
//		     $(function(){
//		      var arr=new Array();//声明一个新的数组
//				 var list1=$(".show em").each(function (index,element) {
//				   arr.push($(this).html());
//				})
//				 console.log(arr);
//				 
//  		 })
//   
// 				})
			
	},
	methods:{			
		returns(){
			  $('html , body').animate({scrollTop: 0},'slow');
		}		
	}
	}
</script>
<style>
.ones .mint-swipe-indicators{
	left: 70%;
	
}
.ones .mint-swipe-indicator.is-active{
	background: #fff;
	opacity: 1;
}
.mint-swipe-indicator{
	width: 6px;
	height: 6px;
}
</style>
<style scoped>
	section{
		overflow: hidden;
	}

.xb{
	width:7.6vw;
	height: 0.5vw;
	background: #00B4FF;
	position: absolute;
	top:22.5vw;
	left: 1.9vw;
	z-index: 1000;
}
.videos ul{
	display: flex;
	justify-content: space-between;
	flex-wrap:wrap ;
}
.videos ul li{
	width: 49.2%;
	margin-bottom: 1vw;
	background: #fff;
}
.videos li img{
	height:31vw ;
	vertical-align: middle;
}
.videos p{
	background: #fff;
	font-size: 3.33vw;
	margin: 3vw 0;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-align: center;
}
.flyme ul{
	
	display: flex;
	justify-content: space-between;
	flex-wrap:wrap ;
}
.flyme ul li{
	width: 49.2%;
	margin-bottom: 1vw;
}
.flyme .tic{
	background: #fff;
	font-size: 3.33vw;
	padding: 4.22222vw 0;
   text-align: center;
    color: #333;
}
.listx{
	margin-bottom: 3vw;
	
}
.listx ul{
	display: flex;
	justify-content: space-between;
	flex-wrap:wrap ;
}
.listx ul li{
	width: 49.2%;
	background: #fff;
	margin-bottom: 1vw;
}
/*.pt{
	width: 100%;
}*/
.pt img{
	width: 100%;
	vertical-align: middle;
}
.log{
	margin-top: 2vw;
	padding: 0 3vw;
}
.log img{
	width: 5.5vw;
}
.log i{
	display: inline-block;
	width: 5.5vw;
	border-radius:50% ;
	overflow: hidden;
	vertical-align: middle;
}
.log span{
	font-size: 3.33333vw;
	color: #000;
	margin-left: 1vw;
}
.px{
	margin-top: 1vw;
	margin-bottom: 3vw;
	padding: 0 3vw;
	font-size: 3.333vw;
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.tip{
	padding: 0 3vw;
	margin-bottom: 10vw;
}
ul{
	list-style: none;
}
.lb{
	/*margin-top: 3vw;*/
	width: 100%;
    height: 51.85185vw;
    overflow: hidden;
}
.lb img{
	width: 100%;
	height: 100%;
}
.container{
	background: #f4f4f4;
}
.uls{
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	padding: 2.4vw 7.40741vw;
	font-size: 2.6vw;
	color: #999;

}
.uls li img{
	width: 3.51852vw;
    height: 3.51852vw;
    position: relative;
    left: -1vw;
    top: .5vw;
}
.tite{
	background: #fff;
	overflow: hidden;
}
.lis{
	margin-top: 5vw;
	display: flex;
	justify-content: space-around;
	text-align: center;
	
}
.lis img{
	width: 13.05556vw;
	height: 13.05556vw;
}
.lis p{
	color: #000;
    line-height: 3;
    font-size: 3.33333vw;
}
.shops{
	display: flex;
	margin-top: 3vw;
}
.shops .lefts{
	width: 50%;
}
.shops .rights{
	width: 50%;
}
.rights-but{
	
}
.shops img{
	width: 100%;
	display: block;
	
}
.title .til{
	font-size: 4.81481vw;
    font-weight: 700;
    padding: 10vw 0 7vw;
    text-align: center;
    position: relative;
}
.til::after{
	content: '';
	width: 6vw;
	height: .7vw;
	background: #0bbbef;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom:4vw
	
	
}
.banner{
	width: 100%;
}
.banner img{
	width: 100%;
}
.show{
	margin-top: 2vw;
}
.show ul{
	display: flex;
	flex-wrap: wrap;
	justify-content:space-between;
}
.show ul li{
	width: 49.2%;
	background: #fff;
	margin-bottom: 1vw;
	
	
}
.show li a{
	display: block;
}
.show img{
	width: 85%;
	display: block;
	margin:5vw auto 0;
}
.show li p{
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  	 
}

.show li .p1{
	text-align: center;
	font-size: 3.88889vw;
    color: #333;
    font-weight: 700;
    margin: 2vw 3vw;
}
.show li .p2{		
    margin: 0 2vw;
    font-size: 3.333vw;
}
.show li .p2 {
margin-top: 1.75926vw;
margin-bottom: 2.5vw;
}
.show em{
	padding: 0 1.3vw;
	font-style: normal;
	color: #fff;
	background: #c00;
	margin-right: 2vw;
}
.p3{
	text-align: center;
	color:red;
	font-size: 3.88889vw;
	margin-bottom: 3vw;
	
}
.p3 i{

	font-style: normal;
	margin-right: 1vw;
}
.titles .tils{
		font-size: 4.81481vw;
	    font-weight: 700;
	    padding: 10vw 0 7vw;
	    text-align: center;
	    position: relative;
}
.tils::after{
		content: '';
		width: 6vw;
		height: .7vw;
		background: #0bbbef;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom:4vw			
	}
.shows{
	margin-top: 2vw;
}
.shows ul{
	display: flex;
	flex-wrap: wrap;
	justify-content:space-between;
}
.shows ul li{
	width: 49.2%;
	background: #fff;
	margin-bottom: 1vw;
	
	
}
.shows li a{
	display: block;
}
.shows img{
	width: 85%;
	display: block;
	margin:5vw auto 0;
}
.shows li p{
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  	 
}

.shows li .p1{
	text-align: center;
	font-size: 3.88889vw;
    color: #333;
    font-weight: 700;
    margin: 2vw 3vw;
}
.shows li .p2{		
    margin: 0 2vw;
    font-size: 3.333vw;
}
.shows li .p2 {
	margin-top: 1.75926vw;
	margin-bottom: 2.5vw;
	text-align: center;
}
.shows em{

	font-style: normal;
	color: #fff;
	background: #c00;
	margin-right: 2vw;
}
.p3{
	text-align: center;
	color:red;
	font-size: 3.88889vw;
	margin-bottom: 3vw;
	
}
.p3 i{

	font-style: normal;
	margin-right: 1vw;
}
.tops{
	background: #7063C9;
	display: flex;
}
.sell .tops>div{	
	width: 50%;
}
.sell .buts>div{
	width: 50%;
}
.news img{
	width: 100%;
	vertical-align: middle;
}
.tops h4{
	font-size: 4.62963vw;
	width: 33.33333vw;
	display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #fff;
    margin-left: 4vw;
    margin-top: 4vw;
}
.tops p{
	font-size: 3.33333vw;
    color: hsla(0,0%,100%,.7);
    position: relative;
    padding: 1.2vw 0;
    margin-left: 5vw;
}
i{
	font-style: normal;
}
.tops .x1{
	font-size: 4.62963vw;
	margin-top: 5vw;
}
.buts{
	display: flex;
	background: #F55C5C;
	vertical-align: middle;
}
.buts h4{
	font-size: 4.62963vw;
	width: 33.33333vw;
	display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #fff;
    margin-left: 4vw;
    margin-top: 4vw;
}
.buts p{
	font-size: 3.33333vw;
    color: hsla(0,0%,100%,.7);
    position: relative;
    padding: 1.2vw 0;
    margin-left: 5vw;
}

.buts .x1{
	font-size: 4.62963vw;
	margin-top: 5vw;
}
.shows li .current{		
	text-align: left;
	border: 1px solid red;
	color: red;
}
.show li .current{		
	text-align: left;
	border: 1px solid red;
	color: red;
	}
.currents{
	padding: 0 1.3vw;		
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