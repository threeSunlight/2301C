const getters = {
    header: state => state.header,
    contentList: state => state.contentList,
    allcheck:state => state.contentList.todoList.every( item => item.checked == true),
    finishLength: state => state.contentList.todoList.filter( item => item.checked == true).length,
    todoListLength: state => state.contentList.todoList.length,
    footerList: state => state.footerList,
  }
  export default getters
  