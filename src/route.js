import Home from './components/Home.vue'
import Index from './components/Index.vue'
import Content from './components/Content.vue'
import Credit from './components/Credit.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        name: 'index',
        components: {
          'main-content-view': Index,
        },
      },
      {
        path: 'content',
        name: 'content',
        components: {
          'main-content-view': Content,
        },
      },
      {
        path: 'credit',
        name: 'credit',
        components: {
          'main-content-view': Credit,
        },
      },
    ],
  },
]