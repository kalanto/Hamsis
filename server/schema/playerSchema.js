var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Round = require('../schema/roundSchema')
var playerSchema = new Schema ({
   name: {
      first: {type:String,required:true}
   ,  last:{type:String,required:true}
}
,  sex:{type:String,required:true}
,  tee:{type:String,required:true}
,  email: {type:String,required:true}
,  rounds: [Round]
   })
module.exports = mongoose.model('player', playerSchema)
