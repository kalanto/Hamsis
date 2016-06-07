var Player = require('../../server/schema/playerSchema.js')
var Score = require('../../server/schema/scoreSchema.js')
module.exports={
//create new player
playerCreate: function(req,res,next){
   console.log(req.body)
      var player = new Player(req.body)
         player.save(function(e,r){
            console.log(e)
               if(e){
                res.status(500).send(e)
               }
               else{
                res.send(r)
               }
            })
}
//get player request
,   players: function(req,res){
      Player.find(req.query, function(e, r){
         if(e){
            res.status(500).json(e)
         }
         else{
            res.json(r)
         }
         })
}
//get player by ID request
,  playerID: function(req,res){
Player.findById(req.params.ID, function(e,r){
   if(e){
      res.status(500).json(e)
   }
   else{
      res.send(r)
   }
})
}
//update player by ID request
,  playerUpdate: function(req,res){
   Player.findByIdandUpdate(req.params.ID, function(e,r){
      if(e){
         res.status(500).json(e)
      }
      else{
         res.send(r.data)
      }
   })
}
//delete player by ID request
,  playerDelete: function(req,res){
   Player.findOneAndRemove(req.params.ID, function(e,r){
      if(e){
         res.status(500).json(e)
      }
      else{
         return res.send(r)
      }
   })
}
//submit players score after round is finished. this creats a new scoreID and assigns it to the player as a reference with the course ID
, playerScoreSubmit: function(req, res){
   Score.create({score:req.body.score} , function(err,newScore){
      if(err) return res.send(err);
      console.log(newScore);
      Player.findByIdAndUpdate(req.params.ID,
         {$push:{
            score:newScore._id
         ,  course:req.body.course._id}})
         .populate('Score','Course')
         .exec(function(e,score,course){
         if(e)res.send(e)
      })
   })
}



}
