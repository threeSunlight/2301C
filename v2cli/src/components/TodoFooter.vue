
<template>
	<div class="footer">
		<div>
			<input type="checkbox" v-model="allChecked" @change="handlerAllchecked"/>
			<span>已完成{{ finishing }}/全部{{ todoList.length }}</span>
		</div>
		<button @click="clearFinishng">清除已完成任务</button>
	</div>
</template>
<script>
	export default {
		name: 'TodoFooter',
		props:['todoList'],
		data() {
			return {
			
			}
		},
		computed: {
			finishing() {
				const result = this.todoList.filter(
					(item) => item.checked == true,
				).length;
				return result;
			},
			allChecked: {
				get(){
					return this.todoList.every(item =>  item.checked)
				},
				set(value) {
					this.todoList.forEach(element => {
						element.checked = value
					});	
				}
			}
		},
		methods: {
			/***
			 * 清空已完成任务
			 */
			clearFinishng() {
				let results = this.todoList.filter((item) => item.checked == false)
				this.$emit('getFooterTodoList', results)
			},
			handlerAllchecked() {
				this.$emit('getFooterCHeckedValue', this.allChecked)
			}
		},
		mounted() {
			console.log(this.$attrs, 'this.$attrs');
		},
	};
</script>
<style scoped>
	.footer {
		display: flex;
		padding: 0 10px;
		justify-content: space-between;
		margin-top: 20px;
	}
	.footer > div > span {
		margin-left: 20px;
	}
</style>
