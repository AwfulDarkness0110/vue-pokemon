import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router, pinia, vuetify } from './plugins'

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .mount('#app')
