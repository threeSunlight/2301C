<template>
	<div class="content">
		<ul>
			<TodoItem/>
		</ul>
	</div>
</template>
<script>
import TodoItem from './TodoItem.vue'
	export default {
		name: 'TodoContentLsit',
		components: {
			TodoItem,
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
