import {createRouter, createWebHistory} from 'vue-router'
import MyPortfolio from '../views/MyPortfolio.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'MyPortfolio',
            component: MyPortfolio
        },
        {
            path: '/build-resume',
            name: 'build-resume',
            component: () => import('../views/BuildResume.vue')
        },
    ],
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
})

export default router