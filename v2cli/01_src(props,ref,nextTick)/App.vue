<template>
	<!-- 写一个父子组件的场景
  劫
  凯影
  师傅给徒弟传值,传递徒弟的名字,徒弟的标语
  子组件吧标语展示出来,写一个方法,提供一些服务,供父组件调用
  $nextTick: 异步调用回调方法,监听dom元素渲染完毕,渲染完毕执行方法
  需求:我希望我得子组件一进页面不加载,点击按钮的时候在加载
  -->
	<div id="app">
		<h2>艾欧尼亚: 影流之主</h2>
		<div ref="shifu">影流之主至理名言:{{ msg }}</div>
		<HelloWord
		
			:slogan="slogan"
			ref="childe"
		/>
		<button @click="handlerGetRef">获取实例</button>
	</div>
</template>

<script>
	import HelloWord from './components/HelloWorld';
	export default {
		name: 'App',
		components: {
			HelloWord,
		},
    created() {
      // 挂载前,获取不到dom元素
      console.log(this.$refs.shifu, 'this.shifu');
      this.$nextTick(() => {
          console.log(this.$refs.shifu);
      })
    },
		data() {
			return {
				msg: '无知者在劫难逃',
				prentice: '凯影',
				slogan: '你够资格嘛?也许不够',
				childeVisible: false,
			};
		},
		methods: {
			handlerGetRef() {
			//	this.childeVisible = true;
				console.log(this.$refs.shifu); // 获取到真实的DOM元素
				// this.$nextTick(() => {
				// 	console.log(this.$refs.childe); //  子组件的实力, VC
				// 	// 父组件调用子组件的方法
				// 	this.$refs.childe.handlerGetage();

				// 	// 父组件给子组件传值
				// 	this.$refs.childe.handlerGetage(this.msg);

				// 	//
				// 	console.log(this.$refs.childe._data, '子组件的data');
				// });
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
