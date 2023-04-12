import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VIcoSvg from '@/components/base/VIcoSvg'

createApp(App).component('VIcoSvg', VIcoSvg).use(store).use(router).mount('#app')
