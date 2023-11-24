<template>
	<!-- 写一个父子组件的场景
		师门成员: 阿卡丽,慎,凯南,劫
		师门: 均衡教派
		师门技能: 隐身,分身,电耗子
		minixs: 会和组件中的data进行混合,
		如果mixins和组件有相同命名,组件优先\
		1 组件
		2 minis


		总结: 
		使用方法: 
		概念: 公用方法和数据的时候,抽出可以进行混入
		1. 当mixins中和组件有重复的命名和方法时,最终以组件为准
		2. mixins生命周期先执行,组件后执行
		3. 当两个mixins有重复值时候,mixins的引入顺序决定值的顺序
  -->

	<!-- 总结: 
			最高接受者: &route,
		1.路由传参有两种方式: query,params
		2. 还有一种是动态传参 /about/:id  id是参数名
		3. props:
		  1. 写死对象 props: {a: XXXX}
		  2. props:true, 只接受params传参
		  3. 函数形式  props: function() {
			return  {
				tile: route.query.title
			}
		  }
		  组件中生命props进行取值
		4. replace,forward前进,back后退,go()可前进可后退

		 5. query和params的相同点和不同点
		 6. 命名路由 name属性
		 7. 嵌套路由路由,children[]

  -->
	<div id="app">
		<button v-on:click="show = !show">Toggle</button>
		<transition name="slide-fade">
			<h2 v-if="show">{{ denominations }}: 影流之主</h2>
		</transition>
		<div ref="shifu">影流之主至理名言:{{ msg }}</div>
		<input v-fibnd:value="age" v-model="age" />
		{{ x }}
		{{ y }}
		<button @click="hello">获取实例</button>
		{{ $route.params.userId }}
	</div>
</template>

<script>
	import { denomination, mysss } from '../mixin/minix.js';

	export default {
		name: 'App',
		mixins: [mysss, denomination],
		data() {
			return {
				show: true,
				age: 18,
				msg: '无知者在劫难逃',
				time: null,
			};
		},
		methods: {

		},
		// 需求,我进入当前页面,开启定时器,每隔一秒,输出一个随机数,离开页面停止定时器 
		beforeRouteEnter (to, from, next) {
			//console.log(this);
			// this.time = setInterval(() => {
			// 		console.log(Math.floor(Math.random()));
			// },1000);
			next((vm) => {
				console.log(vm);
				vm.time = setInterval(() => {
					console.log(Math.floor(Math.random() * 10));
				},1000);
			})
			// ...
		},
		beforeRouteLeave (to, from, next) {
			console.log(this.time);
			if(this.time) {
				clearInterval(this.time)
			}
			next()
			// ...
		},
		beforeCreate() {
			console.log('beforeCreate');
		},
		created() {
			console.log('created');
		},
		beforeMount() {
			console.log('beforeMount');
		},
		mounted() {
			console.log('mounted');
			console.log(this);
		},
		
	};
</script>

<style scoped>
	.slide-fade-enter-active {
		transition: all 0.3s ease;
	}
	.slide-fade-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
</style>
