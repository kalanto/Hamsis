var mongoose = require('mongoose')
var Schema = mongoose.Schema

var playerSchema = new Schema ({
   name: {
      first: {type:String,required:true}
   ,  last:{type:String,required:true}
}
,  email: {type:String,required:true}
,  score:{type:Schema.ObjectId, ref:'score'}
,  course:{type:Schema.ObjectId, ref:'course'}
   })
module.exports = mongoose.model('player', playerSchema)
