import VueRouter from 'vue-router'

import index from '../../component/index.vue'
import home  from '../../component/home.vue'
import details  from '../../component/details.vue'
import search  from '../../component/search.vue'
import pages from '../../component/pages.vue'
import login from '../../component/login.vue'
export default new VueRouter({
	routes:[
			{
				path:'/',component:index,
				children:[
								{
									path:'/home',component:home
								},
								{
									path:'/details/:m',component:details
								}
								
							],
							redirect:'/home',
							

				
			},
			{
				path:'/search',component:search
			},
			{
				path:'/pages/:v',component:pages
			},
			{
				path:'/login',component:login
			},
			{
				path:'/*',redirect:"/home"
			}
		
	]
})