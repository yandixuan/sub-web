import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from '@/plugins/element-ui';
import SvgIcon from '@/plugins/svg-icon';

createApp(App)
  .use(router)
  .use(ElementUI)
  .use(SvgIcon)
  .mount('#app');
