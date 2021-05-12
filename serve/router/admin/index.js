module.exports = (app) => {
    const express = require('express')
    const router = express.Router({
        // 由于在app.use()中定义的参数，又需要在router里面用到这个参数，所以要合并url参数：
        mergeParams: true
    })

    // 1.引用模型Model
    // const Model = require('../../models/Model')
    
    router.post('/', async (req, res) => {
        // 2.创建数据Model.create(数据来源),req.body是客户端提交过来的数据
        const model = await req.Model.create(req.body)
        // 3.要想使用必须在index.js中使用app.use(express.json())中间件？？？

        // 把model发送给客户端，让客户端知道传入数据库的是什么
        res.send(model)
        
    })
    router.get('/', async (req, res) => {
        // 有的页面需要关联查询，有的不需要，做个判断 
        // .populate('parent')变为.setOptions({
        //                              populate('要查的关联数据')
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }

        // 查询数据Model.find(),limit(20)限制20条
        // populate('parent') 表示关联查询，把这个关联的id的所有数据都查出来
        const items = await req.Model.find().setOptions(queryOptions).limit(20)

        // 把数据发送给客户端
        res.send(items)
        
    })
    router.get('/:id', async (req, res) => {
        console.log(req.params);
        // 根据id查询数据Model.findById(查询参数)
        const model = await req.Model.findById(req.params.id)

        // 把数据发送给客户端
        res.send(model)
        
    })
    // 编辑分类提交接口
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        // 把model发送给客户端，让客户端知道传入数据库的是什么
        res.send(model)
        
    })
    // 删除分类接口
    router.delete('/:id', async (req, res) => {
        const model = await Category.findByIdAndDelete(req.params.id)
        // 把model发送给客户端，让客户端知道传入数据库的是什么
        res.send({
            success: true
        })
        
    })

    // rest标识是使用了CRUD模板接口，/:resource 是一个动态参数，表示后面跟的资源(也就是路由)
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
         // 取出url中的资源并转为模型的类形式
         const modelName = require('inflection').classify(req.params.resource)
         // 引用模型
         // req.Model表示给请求对象上挂载一个Model 属性，这样每个接口就可以通过req.Model访问到Model了
        req.Model = require(`../../models/Category`)
        next()
    } , router)
}