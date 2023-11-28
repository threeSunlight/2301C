<template>
	<div>
		<!-- 写一个需求之前: 
    1. 分析那功能
        细化准备怎么写使用那些东西
    2. 页面构造
     -->
		<div class="container">
			<!-- header -->
			<Header/>
			<!-- content -->
		    <Content />
			<!-- footer -->
			<Footer  />
		</div>
	</div>
</template>
<script>
import Header from './TodoHeaderist.vue'
import Content from './TodoContentLsit.vue'
import Footer from './TodoFooter.vue'
	export default {
		name: 'TodoList',
		components: {
			Header,
			Content,
			Footer
		},
		data() {
			return {
				addValue: '',
				todoList: [],
				footerTodoList: []
				//allChecked: false,
			};
		},
	
		methods: {
			/***
			 * 获取子组件的todoList
			 */
			 getTodoList(todoList) {
				this.todoList = [...todoList]
			 },
			 getFooterTodoList(newTodoList) {
				this.footerTodoList = [...newTodoList]
			 },
			/***
			 * 接受子组件传递过来的值
			 */
			handlerAddList(addvalue) {
				this.addValue = addvalue
			},
			
		},
	};
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		box-sizing: border-box;
	}
	.container {
		margin: 50px auto;
		width: 700px;
		padding: 15px;
		border: 1px solid #ccc;
	}
</style>
