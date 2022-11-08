import Vue from 'vue'
import VueRouter from 'vue-router'

import Gastos from './componentes/Gastos.vue'
import Respuestas from './componentes/Respuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {path: '/gastos', component: Gastos},
        {path: '/respuestas', component: Respuestas}
    ]
})