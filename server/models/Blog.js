const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  body: {
    type: String
  },
  labels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BlogLabel'
  }]
}, {
  timestamps: true
})
schema.virtual('commentList', {
  ref: 'Comments',
  localField: '_id',
  foreignField: 'blogId',
  justOne: false /* 查出的数据是不是一条，false表示不是一条 */
})

module.exports = mongoose.model('Blog', schema)