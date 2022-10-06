import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { tinymce } from 'tinymce';
import './mock/index.js'
 




//import ElementPlus from 'element-plus'
//import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(tinymce)

//app.use(ElementPlus)
import "../permission"
import 'nprogress/nprogress.css'

app.use(store)

app.mount('#app')

