import Vue from 'vue';
import VueRouter from 'vue-router';
import Akali from '../components/akali.vue';
// import Jie from '../components/jie.vue'
// 路由懒加载: 使用异步加载方式,当我们点击到当前路由的时候,才会进行页面加载,节约性能,提高效率,除了公共的路由,比如:登录,404等页面,其他基本使用路由懒加载
// 使用插件

// 路由守卫,全局,独享,组件,以及每个的特点,应用场景
Vue.use(VueRouter);

const routes = [
	{
		name: 'akali',
		path: '/akla',
		component: Akali,
		meta: { requiresAuth: true },
		redirect: '/jie',
		// beforeEnter: (to, from, next) => {
		// 	console.log(to, 'beforeEnter');
		// 	console.log(from, 'beforeEnter');
		// 	// 如果我是从劫这个路径到阿卡丽,那我要返回到初始化页面
		// 	if(to.requiresAuth === true) {
		// 		next()
		// 	} 
		// 	next()
		// 	// reject the navigation
		// 	//return true;
		// },
		//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
		// props:{a:11110000}
		//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
		// props:true
		//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
		props(route) {
			return {
				skill: route.query.skill,
				sex: route.query.sex,
			};
		},
	},
	{
		name: 'jie',
		path: '/jie',
		component: () => import('../components/jie.vue'),
	},
    {
		name: 'todoList',
		path: '/todoList',
		component: () => import('../components/TodoList.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

// 全局路由守卫,在初始化时执行、每次路由切换前执行
router.beforeEach((to, form, next) => {
	// console.log(to, 'beforeEach');
	// console.log(form, 'beforeEach');
	// console.log(next, 'beforeEach');
	next();
});

//全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to, form) => {
	// console.log(to, 'afterEach');
	// console.log(form, 'afterEach');
});

//创建并暴露一个路由器
export default router;
