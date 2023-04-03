import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './route'
import './style.css'
import App from './App.vue'
import './util/twitter'

const router = createRouter({ history: createWebHistory(), routes })
createApp(App).use(router).mount('#app')
