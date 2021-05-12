// 用来引入elementui插件，并导出供其他页面(main.js)使用
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Message, MessageBox } from 'element-ui'

export default{
    install: (Vue) => {
        Vue.use(ElementUI)
        Vue.prototype.$message = Message
        Vue.prototype.$confirm = MessageBox

    }
}