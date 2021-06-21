const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cateName: String,
    icon: String
})

module.exports = mongoose.model('Item', schema)