import { createRouter, createWebHistory } from 'vue-router'
import TelaDeLogin from '../views/TelaDeLogin.vue'
import TelaDeCadastro from '../views/TelaDeCadastro'
import TelaInicial from'../views/Tela-inicial.vue'

const routes = [
  {
    path: '/login',
    name: 'TelaDeLogin',
    component: TelaDeLogin
  },
  {
    path: '/cadastro',
    name: 'TelaDeCadastro',
    component: TelaDeCadastro
  },
  {
    path: '/home',
    name: 'Home',
    component: TelaInicial
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
