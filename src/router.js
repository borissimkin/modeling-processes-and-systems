import Vue from 'vue'
import Router from 'vue-router'
import NumIntegrationPage from "@/components/num-integration/NumIntegrationPage";
import Home from "@/Home";
import ParticleScatteringPage from "@/components/particle-scattering/ParticleScatteringPage";

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
        },
        {
            path: '/particle-scattering',
            name: 'particle-scattering',
            component: ParticleScatteringPage
        }
    ]
})

export default router