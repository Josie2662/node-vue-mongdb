const mongoose = require('mongoose')

// 定义模型的字段有哪些 // 每一个schema是一个文档，每一个模型是一个集合？？？
const schema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Category', schema)