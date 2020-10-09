import Vue from 'vue'
import Router from 'vue-router'
import NumIntegrationPage from "@/components/num-integration/NumIntegrationPage";
import Home from "@/Home";

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/num-integration',
            name: 'num-integration',
            component: NumIntegrationPage
        }
    ]
})

export default router