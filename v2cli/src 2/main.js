import Vue from 'vue'
import App from './App.vue'
import Plugins from './plugins'
Vue.config.productionTip = false
Vue.use(Plugins)
const vm = new Vue({
  render: h => h(App),
}).$mount('#app')

console.log(vm);