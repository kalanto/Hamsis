var Course = require('../../server/schema/courseSchema.js')
module.exports={

//create new course
   coursePost: function(req,res,next){
      console.log(req.body)
         var course = new Score(req.body)
            course.save(function(e,r){
               console.log(e)
               if(e){
                  res.status(500).send(e)
               }
               else{
                  res.send(r)
               }
            })
   }
//get course request
,   course: function(req,res){
      Score.find(req.query, function(e, r){
         if(e){
            res.status(500).json(e)
         }
         else{
            res.json(r)
         }
      })
   }
//get course by ID request
,  courseID: function(req,res){
   Score.findOneAndUpdate(req.params.ID, function(e,r){
      if(e){
         res.status(500).json(e)
      }
      else{
         res.send(r)
      }
   })
}
//update course by ID request
,  courseUpdate: function(req,res){
      Score.findOneAndUpdate(req.params.ID, function(e,r){
         if(e){
            res.status(500).json(e)
         }
         else{
            res.send(r.data)
         }
      })
   }
//delete course by ID request
,  courseDelete: function(req,res){
   Score.findOneAndRemove(req.params.ID, function(e,r){
      if(e){
         res.status(500).json(e)
      }
      else{
         return res.send(r)
      }
   })
}
}
