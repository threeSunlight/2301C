<template>
	<div>
		<!-- 写一个需求之前: 
    1. 分析那功能
        细化准备怎么写使用那些东西
    2. 页面构造
     -->
		<div class="container">
			<!-- header -->
			<input
				class="header_search"
				v-model="addValue"
				placeholder="请输入你得任务名称,按回车键确认"
				@keyup.enter="handlerAdd"
			/>
			<!-- content -->
			<div class="content">
				<ul>
					<li v-for="item in todolist" :key="item.id">
						<div>
							<input
								type="checkbox"
								v-model="item.checked"
								
							/>
							<span>{{ item.title }}</span>
						</div>
						<button @click="deleteItem(item)">删除</button>
					</li>
				</ul>
			</div>
			<!-- footer -->
			<div class="footer">
				<div>
					<input type="checkbox" v-model="allChecked" />
					<span>已完成{{ finishing }}/全部{{ todolist.length }}</span>
				</div>
				<button @click="clearFinishng">清楚已完成任务</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'TodoList',
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
				addValue: '',
				//allChecked: false,
			};
		},
		computed: {
			finishing() {
                const result = this.todolist.filter((item) => item.checked == true).length
                console.log(result, 'result');
				return result
			},
			allChecked: {
				get() {
                    const result =  this.todolist.filter((item) => item.checked == true).length == this.todolist.length
                   // console.log(result, 'result');
					return result

				},
				set(value) {
					this.todolist.forEach((item) => {
						item.checked = value
					});
					// this.todolist.filter((item) => item.checked == true).length == this.todolist.length;
				},
			},
		},
		methods: {
			/***
			 * 删除子项
			 */
			deleteItem({ id }) {
				const index = this.todolist.findIndex((item) => item.id == id);
				this.todolist.splice(index, 1);
			},
			/***
			 * 添加事件
			 */
			handlerAdd() {
				// 去除空""和null
				/***
             *他不能为空,并且不能有重复值出现
             find判断有重复返回true,没有重复返回false,取反没有重复值
             */
				if (
					this.addValue &&
					!this.todolist.find((itme) => itme.title == this.addValue) &&
					this.addValue != 'null'
				) {
					const addItem = {
						id: new Date().getTime(),
						title: this.addValue,
						checked: false,
					};
					this.todolist.push(addItem);
				} else {
					alert('不能为空,不能重复输入');
				}
			},
			/***
			 * 清空已完成任务
			 */
			clearFinishng() {
				this.todolist = this.todolist.filter((item) => item.checked == false);
			},
			/***
			 * 全选方法
			 */
			handlerAllChecked() {
				this.todolist.forEach((item) => {
					item.checked = this.allChecked;
				});
			},
			// /***
			//  * 单选方法
			//  */
			handlerOneChecked() {
				this.allChecked = this.todolist.every((item) => item.checked);
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
	.header_search {
		height: 40px;
		width: 100%;
		padding-left: 15px;
		outline: none;
		border-radius: 5px;
		border: 1px solid #ccc;
	}
	::placeholder {
		color: brown;
	}
	.content {
		width: 100%;
		/* padding: 20px; */
		border: 1px solid #ccc;
		margin-top: 20px;
		border-radius: 5px;
	}
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
