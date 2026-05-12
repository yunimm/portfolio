import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home', component: HomeView },
		{
			path: '/projects/:slug',
			name: 'project-detail',
			component: ProjectDetailView,
			props: true,
		},
		{ path: '/:pathMatch(.*)*', redirect: '/' },
	],
	scrollBehavior(to, _from, savedPosition) {
		if (savedPosition) return savedPosition
		if (to.hash) return { el: to.hash, top: 72, behavior: 'smooth' }
		return { top: 0 }
	},
})

export default router
