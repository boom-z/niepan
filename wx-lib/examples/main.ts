import { createApp } from 'vue';
import App from './App.vue';

import MyUI from '../packages/index';

const app = createApp(App);
app.use(MyUI);
app.mount('#app');
