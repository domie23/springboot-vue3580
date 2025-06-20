import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import zuopinfenleiList from '../pages/zuopinfenlei/list'
import zuopinfenleiDetail from '../pages/zuopinfenlei/detail'
import zuopinfenleiAdd from '../pages/zuopinfenlei/add'
import zuopinxinxiList from '../pages/zuopinxinxi/list'
import zuopinxinxiDetail from '../pages/zuopinxinxi/detail'
import zuopinxinxiAdd from '../pages/zuopinxinxi/add'
import siliaoxinxiList from '../pages/siliaoxinxi/list'
import siliaoxinxiDetail from '../pages/siliaoxinxi/detail'
import siliaoxinxiAdd from '../pages/siliaoxinxi/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'zuopinfenlei',
					component: zuopinfenleiList
				},
				{
					path: 'zuopinfenleiDetail',
					component: zuopinfenleiDetail
				},
				{
					path: 'zuopinfenleiAdd',
					component: zuopinfenleiAdd
				},
				{
					path: 'zuopinxinxi',
					component: zuopinxinxiList
				},
				{
					path: 'zuopinxinxiDetail',
					component: zuopinxinxiDetail
				},
				{
					path: 'zuopinxinxiAdd',
					component: zuopinxinxiAdd
				},
				{
					path: 'siliaoxinxi',
					component: siliaoxinxiList
				},
				{
					path: 'siliaoxinxiDetail',
					component: siliaoxinxiDetail
				},
				{
					path: 'siliaoxinxiAdd',
					component: siliaoxinxiAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
