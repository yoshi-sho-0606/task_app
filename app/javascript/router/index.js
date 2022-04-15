import { createRouter, createWebHistory } from 'vue-router';
import Top from "../top.vue"
import Tasks from "../tasks.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/',
      component: Top,
      name: 'Top'
    },
    {
      path: '/tasks',
      component: Tasks,
      name: 'Tasks'
    }
]
})

export default router