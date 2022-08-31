import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

//import ElementPlus from 'element-plus'
//import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(Antd)
app.use(router)
//app.use(ElementPlus)


app.mount('#app')
