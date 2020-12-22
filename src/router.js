import Vue from 'vue'
import Router from 'vue-router'
import NumIntegrationPage from "@/tasks/num-integration/NumIntegrationPage";
import Home from "@/Home";
import ParticleScatteringPage from "@/tasks/particle-scattering/ParticleScatteringPage";
import PopulationDynamicsPage from "@/tasks/population-dynamics/PopulationDynamicsPage";
import SpringLoadPage from "@/tasks/spring-load/SpringLoadPage";

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
        },
        {
            path: '/population-dynamics',
            name: 'population-dynamics',
            component: PopulationDynamicsPage
        },
        {
            path: '/spring-load',
            name: 'spring-load',
            component: SpringLoadPage,
        }
    ]
})

export default router