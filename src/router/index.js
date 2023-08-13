import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/blog/:id', component: () => import('../views/Post.vue') },
    { path: '/about', name: 'about', component: () => import('../views/About.vue') },
    { path: '/templates', name: 'templates', component: () => import('../views/Templates.vue') },
    { path: '/renders', name: 'renders', component: () => import('../views/Renders.vue') },
    { path: '/avatars', name: 'avatars', component: () => import('../views/Avatars.vue') },
    { path: '/tutorials', name: 'tutorials', component: () => import('../views/Tutorials.vue') },
    { path: '/tutorials/:id', name: 'tutorials.post', component: () => import('../views/Post.vue') },
    { path: '/psd', name: 'psd', component: () => import('../views/Psd.vue') },
    { path: '/:pathMatch(.*)', component: NotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router