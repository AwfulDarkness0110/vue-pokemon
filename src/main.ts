import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './style.scss'
import App from './App.vue'
import { router, pinia, vuetify, apolloClient } from './plugins'

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})
  .use(vuetify)
  .use(pinia)
  .use(router)
  .mount('#app')
