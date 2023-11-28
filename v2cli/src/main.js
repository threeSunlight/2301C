import Vue from 'vue'
import App from './App.vue'
import Plugins from './plugins'
import router from './router'
import Vuex from 'vuex'
import store from './store'
Vue.config.productionTip = false
Vue.use(Plugins)
Vue.use(Vuex)
const vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

console.log(vm);