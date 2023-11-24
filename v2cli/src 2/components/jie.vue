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
	<div id="app">
		<h2>{{ denominations }}: 影流之主</h2>
		<div ref="shifu">影流之主至理名言:{{ msg }}</div>
		<input v-fibnd:value="age"  v-model="age"    />
		{{ x }}
		{{ y }}
		<button @click="hello">获取实例</button>
	</div>
</template>

<script>
	import {denomination,mysss} from '../mixin/minix.js'

	export default {
		name: 'App',
		mixins: [mysss,denomination],
		data() {
			return {
				age: 18,
				msg: '无知者在劫难逃',
			};
		},
		beforeCreate() {
			console.log('beforeCreate')
		},
		created() {
			console.log('created');
		},
		beforeMount() {
			console.log('beforeMount')
		},
		mounted() {
			console.log('mounted')
		},
		methods: {
		
		},
		
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
