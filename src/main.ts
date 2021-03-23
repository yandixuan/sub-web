import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from '@/plugins/element-ui';
import SvgIcon from '@/plugins/svg-icon';
import Clipboard from '@/plugins/clipboard';

const app = createApp(App).use(router).use(ElementUI).use(SvgIcon).use(Clipboard);
router.isReady().then(() => app.mount('#app'));
