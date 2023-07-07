import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Templates from '../views/Templates.vue'
import Renders from '../views/Renders.vue'
import Avatars from '../views/Avatars.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/templates', name: 'Templates', component: Templates },
    { path: '/renders', name: 'Renders', component: Renders },
    { path: '/avatars', name: 'Avatars', component: Avatars }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router