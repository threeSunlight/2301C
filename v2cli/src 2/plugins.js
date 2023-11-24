export default {
	install(Vue) {
		// 过滤器,
		Vue.filter('myfilters', function (value) {
			value.slice(0, 4);
		});
		// 自定义指令,
		Vue.directive('fibnd', {
			bind(element, binding) {
                console.log(binding, 'binding');
				element.value = binding.value * 10;
			},
			//指令所在元素被插入页面时
			inserted(element) {
				element.focus();
			},
			//指令所在的模板被重新解析时
			update(element, binding) {
				element.value = binding.value;
			},
		});
		// mixins
		Vue.mixin({
			data() {
				return {
					x: 100,
					y: 200,
				};
			},
		});
		// 原型添加方法
        
		//给Vue原型上添加一个方法（vm和vc就都能用了）
		Vue.prototype.hello = ()=>{alert('我是原型方法')}
	},
};
