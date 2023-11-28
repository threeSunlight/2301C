
<template>
	<div class="footer">
		<div>
			<input type="checkbox" v-model="allChecked" @change="handlerAllchecked"/>
			<span>已完成 {{ todoList.filter((item) => item.checked == true).length }}/全部{{ todoList.length }}</span>
		</div>
		<button @click="clearFinishng">清除已完成任务</button>
	</div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'

	export default {
		name: 'TodoFooter',
		data() {
			return {
				//allChecked: false,
			}
		},

		computed: {
			...mapState({
				todoList: state => state.contentList.todoList,
				allChecked: state => state.contentList.allChecked
			}),
		},
		methods: {
			...mapMutations(['ALLCHECKEDUPDATE','UPDATECLEARFINSHING', 'CHECKEDLIST']),
			// ...mapActions(['clearFinish']),
			/***
			 * 清空已完成任务
			 */
			clearFinishng() {
				this.UPDATECLEARFINSHING()
			},
			handlerAllchecked({target: {checked}}) {
				this.ALLCHECKEDUPDATE(checked)
			}
		},
		mounted() {
			console.log(this.todoList)
			console.log(this.allChecked);
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
