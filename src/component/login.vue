<template>
	<section>
		<form action="">
			<component :is='msg'  v-cloak></component>
		<div class="section">
			<p @click="msg='bbb'">登陆</p>
			<p @click="msg='aaa'">注册</p>
		</div>
		</form>
	</section>
</template>

<script>
	import bbb from './bbb'
	import aaa from './aaa'
	export default{
		components:{
			'bbb':bbb,
			'aaa':aaa
		},
		data(){
			return{
				msg:'bbb'
			}
		}
	}
</script>

<style scoped="">
	section{
		width: 100%;
		overflow: hidden;
	}
	form{
		margin-top: 10vw;
	}
</style>