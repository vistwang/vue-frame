import Vue from 'vue'
import VueRouter from "vue-router";
// import Home from './views/home/Index.vue'
import List from './views/list/Index.vue'
// import Add from './views/add/Index.vue'
// import User from './views/user/Index.vue'
// import Login from './views/login/Index.vue'

Vue.use(VueRouter);
export default new VueRouter ({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/views/login/Index')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/Index'),
            children: [
                {
                    path: 'list',
                    name: 'list',
                    component: List
                }
            ]
        },
        {
            path: '/add',
            name: 'add',
            component: () => import('@/views/add/Index'),
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('@/views/user/Index'),
        }
    ]
})