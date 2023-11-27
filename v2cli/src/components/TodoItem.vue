<template>
	<div>
		<li v-for="item in todolist" :key="item.id">
			<div>
				<input type="checkbox" v-model="item.checked" />
				<span>{{ item.title }}</span>
			</div>
			<button @click="deleteItem(item)">删除</button>
		</li>
	</div>
</template>
<script>
	export default {
		name: 'TodoItem',
		props: ['todolist'],
		data() {
			return {};
		},
        methods:{
            	/***
			 * 删除子项
			 */
			deleteItem({ id }) {
				const index = this.todolist.findIndex((item) => item.id == id);
				this.todolist.splice(index, 1);
			},
        }
	};
</script>
<style scoped>
li {
		border-bottom: 1px solid #ccc;
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		/* line-height: 50px; */
	}
	li > div {
		display: flex;
	}
	button {
		padding: 5px 10px;
		height: 36px;
		background-color: #ca594f;
		color: aliceblue;
		border: none;
		border-radius: 5px;
	}
	li > button {
		display: none;
	}
	li:hover {
		background-color: #ccc;
	}
	li:hover button {
		display: block;
	}
	li > div > span {
		margin-left: 20px;
	}
	li:last-child {
		border: none;
	}


</style>
