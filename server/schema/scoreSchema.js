var mongoose = require('mongoose')
var Schema = mongoose.Schema

var scoreSchema = new Schema ({
      score: [{type:Number}]
})
module.exports = mongoose.model('score', scoreSchema)
