// 服务端的入口文件
const express = require('express')
// 创建express实例
const app = express()

app.use(express.json())
// 引用并使用跨域模块
app.use(require('cors')())

// 数据库
require('./plugin/db')(app)
// 路由
require('./router/admin/index')(app)


// 启动3000端口，同时传一个回调函数表示启动之后做什么
app.listen(3000, () => {
    console.log('3000 端口启动了...');
})