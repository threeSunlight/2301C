// 第一种写法,开启namespaced: true
// 需求分析,只需要放一个v-model绑定的值,input的value值
// state
const state = {
    /**  input的输入值 */
    addValue: ''
}


// mutations
 const mutations = {
    // 从header获取到新增值
   
 }


// actions

const actions = {

}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}