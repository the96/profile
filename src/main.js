import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './route.js'
import './style.css'
import App from './App.vue'
import './util/twitter.js'

const router = createRouter({ history: createWebHistory(), routes })
createApp(App).use(router).mount('#app')
