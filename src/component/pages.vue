<template>
	<div class="details" @click.stop="noe()">
		<header>
			<div class="rt" @click="back()"><img src="../assets/img/jt.png"/></div>
			<div class="home" @click="homes()"><img src="../assets/img/home.png"/></div>
		</header>
		<mt-swipe :auto="4000" class='lb'>
			  <mt-swipe-item v-for='(v,i) in imgss' class="lbs"><img :src="v.imgsrc" /></mt-swipe-item>
		</mt-swipe>
			<div class="naa">
				<p>{{arr.title}}</p>
				<p class="p1">￥ {{arr.price}}</p>
				<p class="p2">{{arr.prices}}</p>
				<p class="p3">{{arr.txt}}</p>
			</div>
			<div>
				<ul class="uls" @click.stop="showw()">
					<li v-for="(v,i) in fq"><span><img src="../assets/img/dui.png"/></span>{{v}}</li>
					<span class="jts"><img src="../assets/img/jts.png" alt="" /></span>
				</ul>
			</div>
			<div class="det" v-show="showx==1">
				<div class="cont" @click.stop="showw()">
					<div class="navs">服务说明<span @click.stop="noe()">x</span></div>
					<div class="hb">
						<h5><span><img src="../assets/img/hb.png"/></span>花呗分期</h5>
						<p>
                                                花呗分期是由蚂蚁花呗联合魅族商城共同推出的“先购物后付款”的支付体验，支持预支蚂蚁花呗额度，
                                                免息期最长可达41天，可选择分3、6、12期还款。</p>
					</div>
					<div class="hb">
						<h5><span><img src="../assets/img/tm.png"/></span>顺丰发货</h5>
						<p>
                                                该商品顺丰发货，顺丰无法到达的地区会安排转寄其他快递。
                      </p>
					</div>
					<div class="hb">
						<h5><span><img src="../assets/img/7t.png"/></span>7天无理由退换货</h5>
						<p>自您的订单签收7个自然日之内（含），在商品完好（手机产品未激活）的情况下，可进行无理由退货。</p>
					</div>
					<div class="btn" @click.stop="noe()"><p>确定</p></div>
				</div>
			</div>
			<div class="lqs">
				<p class="lq">领券<span> {{lq.a}}</span></p>
				<span class="jts"><img src="../assets/img/jts.png" alt="" /></span>
			</div>
			<div class="pxs" @click.stop="showa()">
				<p class="px">已选<span>{{fn1}}</span></p>
				<span class="jts"><img src="../assets/img/jts.png" alt="" /></span>
			</div>
			<div class="det" v-show="shows==1">
				<div class="cont" @click.stop="showa()">
					<div class="navs navx">
						<div class="xs"><img src="../assets/img/xs.jpg"/></div>
						<div class="fd">
							<p class="fir">￥{{fn}}</p>
							<p class="sec">{{fn1}}</p>
						</div>						
						<span @click.stop="noe()">x</span>
					</div>
					<div class="xh">
						<p>型号</p>
						<span>魅族16s</span>
					</div>
					<div class="xh">
						<p>网络类型</p>
						<span>全网公开版</span>
					</div>
					<div class="colorx">
						<p>颜色分类</p>
						<ul>
							<li v-for="(v,i) in a" :class="{colorss:i==index}" @click="col(i)">{{v}}</li>
						</ul>
					</div>
					<div class="colorx">
						<p>内存容量</p>
						<ul>
							<li v-for="(v,i) in b" :class="{colorss:i==indexs}" @click="cols(i)">{{v}}</li>
						</ul>
					</div>
					<div class="buy">
						<div class="buy1">加入购物车</div>
						<div class="buy2">立即购买</div>
					</div>
				</div>
			</div>
			<div class="gx">
				<p class="pq">配送<span>广东省 惠州市</span></p>
				<p class="pw">本商品由魅族负责发货并提供售后服务</p>
				
			</div>
			<div class="ban">
				<ul>
					<li :class="{colors:cs==1}" @click="cs1()">图文详情</li>
					<li :class="{colors:cs==2}" @click="cs2()">规格参数</li>
					<li :class="{colors:cs==3}" @click="cs3()">常见问题</li>
				</ul>
				<div class="img1"><img :src="imgs"/></div>
			</div>
	</div>
	
</template>

<script>
export default{
		data(){
			return{
				imgss:'',
				arr:'',
				fq:'',
				lq:'',
				color:'',
				bb:'',
				nc:'',
				tc:'',
				xh:'',
				wl:'',
				a:'',
				b:'',
				c:'',
				imgs:'',
				cs:1,
				showx:0,
				shows:0,
				pri:'',
				index:'a',
				indexs:'a',
				price:'',
				a1:'',
				a2:'',
				a3:''
				

				}					
		},
		mounted(){
			this.$http.get('./data/page.json')
			  .then((response)=> {			  
			    this.imgss=response.data.id1[0].lb;
			    this.arr=response.data.id1[1].arr;
			    this.fq=response.data.id1[2].fq;
			    this.lq=response.data.id1[3].lq;
			    this.imgs=response.data.id1[4].imgsrc;
			    this.xh=response.data.id1[5].xh;
			    this.wl=response.data.id1[5].wl;
			    this.color=response.data.id1[5].color;
			    this.nc=response.data.id1[5].nc;
			    this.tc=response.data.id1[5].tc;
			    this.pri=response.data.id1[5].price;			    
			    this.a=this.color;
			    this.b=this.nc;
			    this.c=this.tc;
			    this.price= this.pri.price1;
			    this.a1=this.a.a
		      	this.a2=this.b.a
		        this.a3=this.c.a
			    


			    
			  })
			  .catch(function (error) {
			
			  })
			  .then(function () {

			  });
		},
		computed:{
					fn(){
						return this.price
					},
					fn1(){
						return this.wl+' '+this.a1+' '+this.a2+' '+this.a3
					}
					},
		methods:{
			cs1(){
				this.cs=1
			},
			cs2(){
				this.cs=2
			},
			cs3(){
				this.cs=3
			},
			showw(){
				this.showx=1
			},
			noe(){
				this.showx=0
				this.shows=0
//				console.log(0)
			},
			showa(){
				this.shows=1
			},
			col(i){
				this.index=i;
				if(i=='a'){
					 this.a1= this.a.a
					 

					 
				}
				if(i=='b'){
					 this.a1= this.a.b
					 
				}
				if(i=='c'){
					 this.a1= this.a.c
					 
				}
				
//				console.log(i)
			},
			cols(i){
				this.indexs=i
				if(i=='a'){
					 this.price= this.pri.price1
					 this.a2= this.b.a
				}
				if(i=='b'){
					 this.price= this.pri.price2
					  this.a2= this.b.b
				}
				if(i=='c'){
					 this.price= this.pri.price3
					  this.a2= this.b.c
					 console.log(1)
				}
//				console.log(i)
			},
			homes(){
				 this.$router.push({path:"/home"})
			},
			back(){
				this.$router.go(-1)
			}
			
			
		}
	}
</script>

<style scoped="">
	.buy{
		display: flex;
		font-size: 4.5vw;
		color: #fff;
		line-height: 13vw;
		position: absolute;
		bottom: 0;
		width: 100%;
		
	}
	.buy1{
		width: 50%;
		height: 13vw;
		background: #0BBBEF;
		text-align: center;
	}
	.buy2{
		width: 50%;
		height: 13vw;
		background: #f0415f;
		text-align: center;
	}
	.colorss{
		color: #0BBBEF;
	}
	.colorx{
		padding-left: 2vw;
		margin-bottom: 2vw;
		font-size: 3vw;
	}
	.colorx p{
		margin-bottom: 2vw;
		color: #999;
		font-size: 4vw;
	}
	.colorx ul{
		list-style: none;
		display: flex;
	}
	.colorx li{
		padding: 2vw 3vw 2vw;
		border: 1px solid #0BBBEF;
		margin-right: 2vw;
		border-radius: 2vw;
	}
	.xh{
		padding-left: 2vw;
		margin-bottom: 3vw;
	}
	.xh p{
		color: #999;
		font-size: 4vw;		
		margin-bottom: 2vw;
	}
	.xh span{
		display: inline-block;
		font-size: 4vw;
		color: #00B4FF;
		border: 1px solid #0BBBEF;
		padding: 2vw;
		border-radius: 1vw;
	}
	.navx{
		height: 20vw;
		border-bottom: 1px solid #f4f4f4;
	}
	.fd{
		margin-left: 35vw;
		text-align: left;
	}
	.fd .fir{
		margin-bottom: 2vw;
		color: red;
		font-size:4vw ;
	}
	.fd .sec{
		font-size: 3vw;
		color: #000;
	}
	.xs{
		position: absolute;
		top:-10vw;
		left: 3vw;
		width: 30vw;
		border-radius: 1vw;
		overflow: hidden;
		box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05), 0 0.5px 0 rgba(0, 0, 0, 0.09);
	}
	.xs img{
		width: 100%;
	}
	.btn{
		text-align: center;
		padding: 5vw 0;
		background: #0BBBEF;
		color: #fff;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	
	.det{
		position: fixed;
		background: rgba(0, 0, 0, 0.5);
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
	}
	.cont{
		position: absolute;
		top: 20%;
		background: #fff;
		height: 80%;
		width: 100%;
	}
	.navs{
		text-align: center;
		position: relative;
		color: #999;
		padding: 2vw 0;
		font-size: 5vw;
		
	}
	.hb{		
		border-bottom: 1px solid #f4f4f4;
		
	}
	.hb img{
		width: 6vw;
		vertical-align: bottom;
		margin-right: 1vw;
	}
	.hb h5{
		margin-top: 2vw;
		margin-bottom: 3vw;
	}
	.hb p{
		font-size: 3vw;
		padding-left:10vw ;
		color: #999;
		margin-bottom: 3vw;
	}
	.navs span{
		position: absolute;
		right: 2vw;
		top: 1vw;
		
	}
	.colors{
		color: #00B4FF;
	}
	.ban ul{
		background: #fff;
		display: flex;
		list-style: none;
		justify-content: space-around;
	}
	.ban li{
		padding: 3vw 0;
		font-size: 4vw;
	}
	.img1 img{
		width: 100%;
	}
	.gx{
		background: #fff;
		padding-left: 2vw;
		margin-bottom: 2vw;
	}
	.pq{
		font-size: 4vw;
		color: #999;
		padding: 4vw 0vw;
		border-bottom:1px solid #f4f4f4;
	}
	.pq span{
		color: #000;
		margin-left: 4vw;
	}
	.pw{
		text-align: center;
		padding: 4vw 0;
		font-size: 4vw;
		color: #999;
	}
	.px{
		color: #999;
		
		padding: 3vw 0;
		padding-left: 2vw;
		background: #fff;
		margin-bottom: 2vw;
	}
	.px span{
		margin-left: 4vw;
		color: #000;
		font-size: 4vw;
	}
	.details{
		background: #f4f4f4;
	}
	.lq{
		padding-left: 2vw;
		color: #999;
		padding-top: 5vw;
		padding-bottom: 5vw;
		background: #fff;
		margin-bottom: 2vw;
	}
	.lqs{
		position: relative;
	}
	.lq span{
		color: #fff;
		font-size: 2vw;
		margin-left: 6vw;
		background: url(../assets/img/price.png);
	}
	.lq .jts img{
		width: 2vw;
	}
	.uls{
		background: #fff;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		padding-left: 2vw;
		padding-bottom: 5vw;
		border-bottom: 1px solid #f4f4f4;
		position: relative;
	}
	 .jts{
		position: absolute;
		right: 1vw;
		top: 50%;
		transform: translateY(-50%);
	}
	.jts img{
		width: 3vw;
	}
	.uls li{
		margin-right: 6vw;
		margin-top: 2vw;
		font-size: 3vw;
		color: #999;
		
	}
	.uls img{
		width: 3vw;
		/*margin-right: 1vw;*/
		vertical-align: middle;
	}
	header{
	background: transparent;
	display: flex;
	width: 100%;
	justify-content:space-between;
	align-items: center;
	padding: 2vw 5vw;
	position: fixed;
	top: 0;
	z-index: 1000;
}
.pxs{
	position: relative;
}
.rt{
	width: 5vw;
	position: absolute;
	top: 2vw;
	left: 2vw;
}
.rt img{
	width: 100%;
	
	
}
.lb img{
	width: 58vw;
	/*height: 100%;*/
}



.lb{
	text-align: center;
	width: 100%;
	height: 68vw;
	border-bottom:1px solid #f4f4f4 ;
	background: #fff;
	padding-top: 5vw;
	
}
.home{
	position: absolute;
	right: 12vw;
	top: 1vw;
	
}
.home img{
	width: 7vw;
	
}
.naa{

	padding: 0 4vw;
	padding-bottom: 4vw;
		padding-top: 3vw;
	border-bottom: 1px solid #f4f4f4;
	background: #fff;
}
.naa .p1{
	color: red;
	margin-top: 1vw;
	font-weight: 700;
}
.naa .p2{
	color: red;
	margin-top: 1vw;
	font-size: 3.6vw;
}
.naa .p3{
	color: red;
	margin-top: 1vw;
	font-size: 3.6vw;
}
</style>