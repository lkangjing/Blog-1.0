const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: {
    type: String
  },
  content: {
    type: String
  },
  email:{
    type:String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('LeaveMessage', schema)