module.exports = (app) => {
    const express = require('express')
    const router = express.Router()

    // 1.引用模型Category
    const Category = require('../../models/Category')
    
    router.post('/catergories', async (req, res) => {
        // 2.创建数据Category.create(数据来源),req.body是客户端提交过来的数据
        const model = await Category.create(req.body)
        // 3.要想使用必须在index.js中使用app.use(express.json())中间件？？？

        // 把model发送给客户端，让客户端知道传入数据库的是什么
        res.send(model)
        
    })
    router.get('/catergories', async (req, res) => {
        // 查询数据Category.find(),limit(20)限制20条
        const items = await Category.find().limit(20)

        // 把数据发送给客户端
        res.send(items)
        
    })
    router.get('/catergories/:id', async (req, res) => {
        console.log(req.params);
        // 根据id查询数据Category.findById(查询参数)
        const model = await Category.findById(req.params.id)

        // 把数据发送给客户端
        res.send(model)
        
    })
    // 编辑分类提交接口
    router.put('/catergories/:id', async (req, res) => {
        const model = await Category.findByIdAndUpdate(req.params.id, req.body)
        // 把model发送给客户端，让客户端知道传入数据库的是什么
        res.send(model)
        
    })

    app.use('/admin/api',router)
}