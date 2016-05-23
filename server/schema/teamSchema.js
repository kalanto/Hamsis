var mongoose=require('mongoose')
var Schema = mongoose.Schema
var teamSchema = new Schema({
   name:{type:String,required:true}
,  teamScore:{type:Number}
,   players:[{type:Schema.ObjectId,ref:'player'}]

})
module.exports = mongoose.model('team',teamSchema)
