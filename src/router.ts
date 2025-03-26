import { createRouter, createWebHistory } from 'vue-router'
import Calculator from './pages/Calculator.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: Calculator
    }
  ]
})

export default router