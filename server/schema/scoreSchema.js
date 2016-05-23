var mongoose = require('mongoose')
var Schema = mongoose.Schema

var scoreSchema = new Schema ({
      score: {type:Array,required:true}
})
module.exports = mongoose.model('score',scoreSchema)
   
