<template>
	<!-- 写一个父子组件的场景
		师门成员: 阿卡丽,慎,凯南,劫
		师门: 均衡教派
		师门技能: 隐身,分身,电耗子
    -->
	<div id="app">
		<akali/>
		<jie />
	</div>
</template>

<script>
	import jie from './components/jie.vue'
	import akali from './components/akali.vue'
	export default {
		name: 'App',
		components: {
			jie,
			akali
		},
   
		data() {
			return {
				
			};
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
