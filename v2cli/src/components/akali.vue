<template>
	<!-- 写一个父子组件的场景
		师门成员: 阿卡丽,慎,凯南,劫
		师门: 均衡教派
		师门技能: 隐身,分身,电耗子
		akali
		我希望在这个组件中,有两个路由,一个是他的孩子,一个是他的媳妇,
		点击孩子: 展示孩子的兴趣,爱好,名称
		点击媳妇: 展示媳妇的照片,工作
  -->
	<div id="app">
		<!-- <h2>阿卡丽</h2> -->
		<slot name="title"></slot>
		<slot name="sex"></slot>
		<slot></slot>
		<slot name="gamess" :game="game"></slot>
		<button @click="handlerGetRef">获取实例</button>
		<hr />
		<h1>路由接受信息</h1>
		
		<hr/>
		性别{{sex}}
		技能{{skill}}
	</div>
</template>

<script>
	export default {
		name: 'App',
		props:['skill', 'sex'],
		data() {
			return {
				msg: '断剑重铸之日,骑士归来之日',
				game: ['LOL', 'DNF', 'CF', 'CSGO', '源'],
				time: null // 存放定时器
			};
		},
		methods: {
			handlerGetRef() {
				this.time = setInterval(() => {
					console.log(Math.floor(Math.random()));
				},1000 );
			},
		},
		// 需求,我进入当前页面,开启定时器,每隔一秒,输出一个随机数,离开页面停止定时器 
		beforeRouteEnter (to, from, next) {
			// console.log(to, from, next);
			// this.handlerGetRef()
			next()
			// ...
		},
		beforeRouteLeave (to, from, next) {
			// console.log(to, from, next);
			// if(this.time) {
			// 	clearInterval(this.time)
			// }
			next()
			// ...
		},
		beforeRouteUpdate (to, from, next) {
			console.log(to, from, next);
			// ...
		},
		deactivated() {
			console.log('deactivated')
		},
		activated() {
			console.log('activated')
		},
		created() {
			console.log('created')
		},
		mounted() {
			console.log(this.$route)
		},
	};
</script>

<style>
	
</style>
