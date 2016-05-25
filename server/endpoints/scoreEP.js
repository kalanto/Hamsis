var Score = require('../../server/schema/scoreSchema.js')
module.exports ={
//create new scoring
scoreCreate: function(req,res){
   console.log(req.body)
      var score = new Score(req.body)
         Score.save(function(e,r){
            console.log(e)
            if(e){
             res.status(500).send(e)
            }
            else{
             res.send(r)
            }
         })
}
//get score request
,   score: function(req,res){
   Score.find(req.query, function(e, r){
      if(e){
         res.status(500).json(e)
      }
      else{
         res.json(r)
      }
   })
}
//get score by ID request
,  scoreID: function(req,res){
Score.findOne(req.params.ID, function(e,r){
   if(e){
      res.status(500).json(e)
   }
   else{
      res.send(r)
   }
})
}
//update score by ID request
,  scoreUpdate: function(req,res){
   Score.findOneAndUpdate(req.params.ID, function(e,r){
      if(e){
         res.status(500).json(e)
      }
      else{
         res.send(r.data)
      }
   })
}
//delete score by ID request
,  scoreDelete: function(req,res){
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
