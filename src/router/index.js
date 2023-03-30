import { createRouter, createWebHistory } from 'vue-router'
import TelaDeLogin from '../views/TelaDeLogin.vue'
import TelaDeCadastro from '../views/TelaDeCadastro'
import Home from '../views/Inicio.vue'
import Setores from '../views/Setores.vue'
import Funcionairos from'../views/Funcionarios.vue'
import Empresa from'../views/Empresa.vue'

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
    name: 'inicio',
    component: Home
  },
  {
    path: '/Setor',
    name: 'setores',
    component: Setores
  },
  {
    path: '/Funcionarios',
    name: 'funcionarios',
    component: Funcionairos
  },
  {
    path: '/Empresa',
    name: 'empresa',
    component: Empresa
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
