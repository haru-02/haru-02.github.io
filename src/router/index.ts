import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/HomePage.vue'
import Work from '@/pages/MyWork.vue'
import Career from '@/pages/MyCareer.vue'
import Contact from '@/pages/ContactMe.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/work', component: Work },
    { path: '/career', component: Career },
    { path: '/contact', component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
