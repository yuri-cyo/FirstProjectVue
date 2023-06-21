import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router'
import '@/styles/vars.scss'
import '@/styles/null.scss'
import '@/styles/style.scss'

createApp(App).use(router).mount('#app')
