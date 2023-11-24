<template>
	<!-- 写一个父子组件的场景
		师门成员: 阿卡丽,慎,凯南,劫
		师门: 均衡教派
		师门技能: 隐身,分身,电耗子
  -->
	<div id="app">
		<h2>: 阿卡丽</h2>
		<div ref="shifu">阿卡丽至理名言:{{ msg }}</div>
		<button @click="handlerGetRef">获取实例</button>
	</div>
</template>

<script>

	export default {
		name: 'App',
		data() {
			return {
				msg: '断剑重铸之日,骑士归来之日',
			};
		},
		methods: {
			handlerGetRef() {
			
			},
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
