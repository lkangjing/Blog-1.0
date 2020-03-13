module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect("'mongodb://127.0.0.1:27017/node-ly", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log(__dirname + '/../models');
  // require('require-all')(__dirname + '/../models')
}