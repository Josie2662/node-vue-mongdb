module.exports = (app) => {
    const express = require('express')
    const router = express.Router()

    // 1.引用模型Category
    const Category = require('../../models/Category')
    
    router.post('/catrgories', async (req, res) => {
        // 2.创建数据Category.create(数据来源),req.body是客户端提交过来的数据
        const model = await Category.create(req.body)
        // 3.要想使用必须在index.js中使用app.use(express.json())中间件？？？

        // 把model发送给客户端，让客户端知道传入数据库的是什么
        res.send(model)
        
    })
    app.use('/admin/api',router)
}