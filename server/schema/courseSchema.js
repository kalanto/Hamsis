var mongoose = require('mongoose')
var Schema = mongoose.Schema

var courseSchema = new Schema ({
   teeYardage:[{   proTee: [{type: Number,required: true}]
   ,  blueTee: [{type:Number, required: true}]
   ,  whiteTee: [{type:Number, required: true}]
   , redTee: [{type:Number, required:true}]
   }]
,  par:[{
     menPar:[{type:Number,required:true}]
   , womenPar:[{type:Number, required: true}]
   }]
,  handicap:[{
      menHDCP:[{type:Number, required: true}]
   ,  womenHDCP:[{type:Number,required:true}]
   }]
})
module.exports = mongoose.model('course', courseSchema)
