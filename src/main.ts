import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router, pinia } from './plugins'

createApp(App).use(pinia).use(router).mount('#app')
