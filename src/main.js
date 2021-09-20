import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import App from './App.vue'

createApp(App)
      .use(ElementPlus)
      .use(router)
      .mount('#app')
