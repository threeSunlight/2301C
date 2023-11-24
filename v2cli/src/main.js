import Vue from 'vue'
import App from './App.vue'
import Plugins from './plugins'
import router from './router'
Vue.config.productionTip = false
Vue.use(Plugins)
const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

console.log(vm);