<template>
	<div class="content">
		<ul>
			<TodoItem :todolist="todolist"/>
		</ul>
	</div>
</template>
<script>
import TodoItem from './TodoItem.vue'
	export default {
		name: 'TodoContentLsit',
		props: ['addValue','footerTodoList'],
		components: {
			TodoItem,
		},
		data() {
			return {
				todolist: [
					{
						id: 1,
						title: '抽烟',
						checked: false,
					},
					{
						id: 2,
						title: '喝酒',
						checked: false,
					},
					{
						id: 3,
						title: '烫头',
						checked: false,
					},
				],
			};
		},

		watch: {
			addValue: {
				handler(newValue, oldValue) {
					console.log(newValue,oldValue );
					this.addItem()
				}
			},
			footerTodoList: {
				deep: true,
				handler(newValue) {
					console.log(newValue );
					this.todolist = [...newValue]
				}
			}
		},
		created() {
			this.$emit('getTodoList', this.todolist)
		},
		methods: {
			/***
			 * 判断添加子项是否重复,能否添加成功
			 */
			addItem() {
				if (!this.todolist.find((itme) => itme.title == this.addValue)) {
					const addItem = {
						id: new Date().getTime(),
						title: this.addValue,
						checked: false,
					};
					this.todolist.push(addItem);
					this.$emit('getTodoList', this.todolist)
				} else {
					alert('不能重复输入');
				}
			},
		},
	};
</script>
<style scoped>
	.content {
		width: 100%;
		/* padding: 20px; */
		border: 1px solid #ccc;
		margin-top: 20px;
		border-radius: 5px;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
</style>
