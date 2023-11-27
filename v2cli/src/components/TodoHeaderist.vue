<template>
	<!-- header -->
	<div>
		<input
		class="header_search"
		v-model.trim="addValue"
		placeholder="请输入你得任务名称,按回车键确认"
		@keyup.enter="handlerAdd"
	/>
	</div>

</template>
<script>
	export default {
		name: 'TodoHeaderist',
        data() {
            return {
                addValue: '',
            }
        },
        methods: {
             /***
			 * 添加事件
			 */
			handlerAdd() {
				// 去除空""和null
			/***
             *他不能为空,并且不能有重复值出现
             */
				if (
					this.addValue &&
					this.addValue != 'null'
				) {
					this.$emit('addList', this.addValue)
				} else {
					alert('不能为空,不能重复输入');
				}
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
