const mongoose = require('mongoose')

//api mongoose vai usar api promisse do node
mongoose.Promise =  global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')
