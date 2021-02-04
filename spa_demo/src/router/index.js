import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import about from '@/components/about'
import access from '@/components/access'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/access',
            component: access
        }
    ]
})