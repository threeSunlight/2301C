// 第一步引入
import Vue from 'vue'
import Vuex from 'vuex'
// import persistedState from 'vuex-persistedstate'
import headerValue from './modules/header'
import footerList from './modules/footer'
import contentList from './modules/content'
Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
      headerValue,
      footerList,
      contentList
    },
    // 默认使用localStorage
    // 
    // plugins: [persistedState()],
    //plugins: [persistedState({storage: window.sessionStorage})]
    // getters
    // strict: process.env.NODE_ENV !== 'production'
  })