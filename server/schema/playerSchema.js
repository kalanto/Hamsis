var mongoose = require('mongoose')
var Schema = mongoose.Schema

var playerSchema = new Schema ({
      name: {
         first: {type:String,required:true}
      ,  last:{type:String,required:true}
   ,  email: {type:Email,required:true}
   ,  score:{type:Schema.ObjectID, ref:'score'}
   ,  course:{tyep:Schema.ObjectID, ref:'course'}
      }
})
module.exports = mongoose.model('score', scoreSchema)
