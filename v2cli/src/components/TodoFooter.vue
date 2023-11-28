
<template>
	<div class="footer">
		<div>
			<input type="checkbox" v-model="allchecked" @change="handlerAllchecked"/>
			<span>已完成 {{ finishLength }}/全部{{ todoListLength }}</span>
		</div>
		<button @click="clearFinishng">清除已完成任务</button>
	</div>
</template>
<script>
import {mapMutations,  mapGetters} from 'vuex'

	export default {
		name: 'TodoFooter',

		computed: {
			...mapGetters(['finishLength','todoListLength','todoList','allcheck','contentList']),
			allchecked:{
				get() {
					return this.allcheck
				},
				set(value) {
				
				}
			}
			
		},
		methods: {
			...mapMutations(['ALLCHECKEDUPDATE','UPDATECLEARFINSHING', 'CHECKEDLIST']),
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
			console.log(this.contentList)
		}
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
