import DefaultLayout from './components/DefaultLayout.vue'
import Index from './components/Index.vue'
import Content from './components/Content.vue'
import Credit from './components/Credit.vue'
import ColorScheme from './components/ColorScheme.vue'

export default [
  {
    path: '/',
    name: 'root',
    component: DefaultLayout,
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
      {
        path: 'color_scheme',
        name: 'colorScheme',
        components: {
          'main-content-view': ColorScheme,
        },
      },
    ],
  },
]
