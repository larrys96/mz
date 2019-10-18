<template>
	<section>
		<div :class="{xb:true,one:msgs.id==1,two:msgs.id==2,three:msgs.id==3,four:msgs.id==4}"></div>
		<div class="banner">
	 	<img :src="msgs.htl[0].imgsrc" alt="" />
	 	</div>
	 	<div class="show">
 			<ul>
 				<li v-for="(v,i) in msgs.htl[1].arrs">
 					<img :src="v.imgsrc" alt="" />
 					<div class="texts">
 						<p class="p1">{{v.title}}</p>
 						<p class="p2" :class='{current:v.logo}'><em :class='{currents:v.logo}'>{{v.logo}}</em><span>{{v.txt}}</span></p>
 						<p class="p3"><i>￥</i><span>{{v.price}}</span></p>
 					</div>
 				</li>
 			</ul>
 		</div>
 		<div class="foo">
 			<img :src="msgs.htl[0].imgsrc"/>
 		</div>
 		<div class="tj">
 			<div class="titls">
 				<p>为您推荐</p>
 			</div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(v,i) in tj" class='imgs'>
        	<div><img :src="v.imgsrc"/></div>
        	<div class="bots">
        		<p class="pa1">{{v.title}}</p>
        		<p class="pa2"><span>￥</span>{{v.price}}</p>
        	</div>
        </swiper-slide>

      </swiper> 
 		</div>
 		<div class="foots">
 			<div><img src="../assets/img/g1.jpg"/></div>
 			<div><img src="../assets/img/g2.jpg"/></div>
 			<div><img src="../assets/img/g3.jpg"/></div>
 			<div><img src="../assets/img/g4.jpg"/></div>
 		</div>
	</section>
	 
</template>

<script>
//import '../../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		data(){
			return{
				msg:'',
				msgs:'',
				 swiperOption: {
		          slidesPerView: 2,
		          spaceBetween: 50,
		          // init: false,
		          pagination: {
		            el: '.swiper-pagination',
		            clickable: true
		          },
		          breakpoints: {
		            1024: {
		              slidesPerView: 4,
		              spaceBetween: 40
		            },
		            768: {
		              slidesPerView: 3,
		              spaceBetween: 30
		            },
		            640: {
		              slidesPerView: 2,
		              spaceBetween: 10
		            },
		            320: {
		              slidesPerView: 2,
		              spaceBetween: 10
		            }
		          }
		        }
			}
		},
			mounted(){
			this.$http.get('./data/jsons.json')
			  .then((response)=> {	
			  	this.tj=response.data.tj;
			  	this.msg=response.data.list;
			   if(this.$route.params.m==1){
						this.msgs=this.msg[0]
						console.log(this.msg)
					}else if(this.$route.params.m==2){
						this.msgs=this.msg[1]
					}else if(this.$route.params.m==3){
						this.msgs=this.msg[2]
					}else{
						this.msgs=this.msg[3]
					}

			    
			  })
			  .catch(function (error) {
			
			  })
			  .then(function () {

			  });  
		console.log(this.$route.params)
				 
			
		},
		watch:{
		  $route(to,from){
		    console.log(to.path);
		    this.$http.get('./data/jsons.json')
					  .then((response)=> {		
					  	this.msg=response.data.list;
					  	this.tj=response.data.tj;
					   if(this.$route.params.m==1){
								this.msgs=this.msg[0]
								console.log(this.msg)
							}else if(this.$route.params.m==2){
								this.msgs=this.msg[1]
							}else if(this.$route.params.m==3){
								this.msgs=this.msg[2]
							}	else{
								this.msgs=this.msg[3]
							}
		
					    
					  })
					  .catch(function (error) {
					
					  })
					  .then(function () {
		
					  });  
		  }
}

	}
</script>

<style scoped>
	.imgs{
		background: #fff;
	}
	.tj{
		
		margin-bottom: 2vw;
	}
	.bots{
		text-align: center;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	    
	}
	.pa1{
		color: #333;
		font-size: 3.88vw;
	}
	.pa2{
		color: red;
		margin-top: 1vw;
	}
	.pa2span{
		margin-right: 1vw;
	}
	.imgs img{
		width: 100%;
	}
section{
	background: #f4f4f4;
}

.titls{
	display: flex;
	justify-content: center;
	width: 100%;
	align-items: center;
	padding: 5vw 0;
	color: #999;
	background: #F4F4F4;
	margin-bottom: 1vw;
	margin-top: 1vw;
}
.foo img{
	width: 100%;
	vertical-align: middle;
}
ul{
	list-style: none;
}
.xb{
	width: 7.6vw;
	background: #00B4FF;
	height: 0.5vw;
	position: absolute;
	top: 22.5vw;
}
.one{
	left: 24.1vw;
}
.two{
	left: 46.2vw;
}
.three{
	left: 68.3vw;
}
.four{
	left:90.5vw;
}
.banner{
	margin-bottom: 1vw;
}
.banner img{
	width: 100%;
}
.show ul{
display: flex;
flex-wrap: wrap;
justify-content:space-between;
    background: #f4f4f4;
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
    margin-top: 1.75926vw;
	margin-bottom: 2.5vw;
	text-align: center;
}
.show em{
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

.show li .current{		
	text-align: left;
	border: 1px solid red;
	color: red;
	}
.currents{
	padding: 0 1.3vw;

	
}
.foots{
	display: flex;
	justify-content: space-around;
	background: #fff;
}
.foots div{
	width: 25%;
	padding: 0 2vw;
	
}
.foots img{
	width: 100%;
}
</style>