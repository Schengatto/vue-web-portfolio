import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/skills',
            name: 'skills',
            component: () => import('../views/SkillsView.vue')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../views/ProjectsView.vue')
        },

        {
            path: '/contact-me',
            name: 'contact-me',
            component: () => import('../views/ContactMeView.vue')
        }
    ],
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
})

export default router
