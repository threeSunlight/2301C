// content第二种写法,写一个大的对象
// state存放是数据
// 新增方法

const contentlist = {
	state: {
		todoList: [
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
		allChecked: false
	},
	mutations: {
		// 从header获取到新增值
		HANDLERADDS(state, context) {
            const {todoList} = state
			// 将新增的value值添加到另一个数组中
			if (context && context != 'null') {
				if (!todoList.find((itme) => itme.title == context)) {
					const addItem = {
						id: new Date().getTime(),
						title: context,
						checked: false,
					};
					todoList.push(addItem);
				} else {
					alert('不能重复输入');
				}
			} else {
				alert('不能为空,不能重复输入');
			}
		},
        // 删除state中的数据
        DELETETODOLISTITEM(state, context) {
            const { todoList } = state
            const index = todoList.findIndex((item) => item.id == context);
            todoList.splice(index, 1);
        },
		// 全选和反选修改数据
		ALLCHECKEDUPDATE(state, context) {
			let {todoList,allChecked} = state
			allChecked = context
			todoList.forEach(element => {
			 	element.checked = context
			});	
		},
		// 清空已完成修改数据
		UPDATECLEARFINSHING(state,context) {
			 state.todoList = state.todoList.filter(item => item.checked == false)
		},
		// 反选
		CHECKEDLIST(state,context) {
			 state.allChecked = context
		}
	},
	actions: {
        deleteItem(state,context){
            state.commit('DELETETODOLISTITEM', context)
        },
		// 清空已完成任务
		clearFinish(state,context) {
			const {commit} = state
			commit('UPDATECLEARFINSHING')
		}
    },
};

export default contentlist;
