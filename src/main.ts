import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { router, pinia, vuetify } from './plugins'

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .mount('#app')
