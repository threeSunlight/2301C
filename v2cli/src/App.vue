<template>
	<!-- 写一个父子组件的场景
		师门成员: 阿卡丽,慎,凯南,劫
		师门: 均衡教派
		师门技能: 隐身,分身,电耗子
    -->
	<!-- 插槽:
	   在子组件挖坑,在父组件吧坑埋起来
	   匿名插槽
	   具名插槽
	   作用域插槽: 子组件向父组件传值,父组件使用子组件的数据,进行随意展示,怎么传值,怎么获取值
	   常用的地方: 弹框的按钮
	-->
	<div id="app">
		<akali>
			<div slot="title">
				<p style="color: blue">阿卡丽</p>	
			</div>
			<p style="color: skyblue" slot="sex">98</p>	
			<p style="color: red">断剑重铸之日,骑士归来之日</p>
			<p style="color: red">断剑重铸之日,骑士归来之日</p>
			<p style="color: red">断剑重铸之日,骑士归来之日</p>
			<div slot-scope="game" slot="gamess">
				{{ game}}
				<ol>
					<li v-for="(item,index) in game.game" :key="index">{{ item }}</li>
				</ol>
			</div>
		</akali>
	</div>
</template>

<script>
	import akali from './components/akali.vue'
	export default {
		name: 'App',
		components: {
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
