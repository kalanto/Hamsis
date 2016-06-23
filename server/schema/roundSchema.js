var mongoose = require('mongoose')
var Schema = mongoose.Schema

var roundSchema = new Schema ({
      score: {type:Array,required:true}
   ,  course: {type:Schema.ObjectId,ref:'course'}
})
module.exports = roundSchema
