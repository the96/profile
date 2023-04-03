import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Index from './components/Index.vue'

const routes = [
  { path: '/', name: 'Home', component: Index },
]

const router = createRouter({ history: createWebHistory(), routes })
createApp(App).use(router).mount('#app')