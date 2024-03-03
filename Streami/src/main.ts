import { createApp } from 'vue'
import router from './router'
import store from './store'
import '@fontsource/mitr'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import App from './App.vue'


createApp(App)
.use(router)
.use(store)
.mount('#app')
