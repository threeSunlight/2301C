
<template>
	<!-- header -->
	<div>
		<input
		class="header_search"
		v-model.trim="$store.state.headerValue.addValue"
		placeholder="请输入你得任务名称,按回车键确认"
		@keyup.enter="handlerAdd"
	/>
	</div>

</template>
<script>
	export default {
		name: 'TodoHeaderist',
        methods: {
             /***
			 * 添加事件
			 */
			handlerAdd() {
				const {headerValue: {addValue}} = this.$store.state
				this.$store.commit('HANDLERADDS',addValue)
			},
        },
	};
</script>
<style scoped>
   .header_search {
		height: 40px;
		width: 100%;
		padding-left: 15px;
		outline: none;
		border-radius: 5px;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}
	::placeholder {
		color: brown;
	}

</style>
