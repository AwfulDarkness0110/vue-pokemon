import { DefaultApolloClient } from '@vue/apollo-composable';
import { createApp, h, provide } from 'vue';
import App from './App.vue';
import { apolloClient, pinia, router, vuetify } from './plugins';
import './style.scss';

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
})
  .use(vuetify)
  .use(pinia)
  .use(router)
  .mount('#app');
