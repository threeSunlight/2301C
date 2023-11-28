const getters = {
    header: state => state.header,
    contentList: (state,getters) => state.contentList,
    allcheck:state => state.contentList.todoList.every( item => item.checked == true),
    finishLength: state => state.contentList.todoList.filter( item => item.checked == true).length,
    todoListLength: state => state.contentList.todoList.length,
    footerList: state => state.footerList,
  }
  export default getters


  // getters只有两个参数,一个是state,一个是getters
  // getters只是类似计算属性,但是他不是真正的计算属性
  