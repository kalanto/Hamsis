var Player = require('../../server/schema/playerSchema.js')
var Round = require('../../server/schema/roundSchema.js')
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
   Player.findByIdAndUpdate(req.params.ID,req.body,{new:true},function(e,r){
      if(e){
         res.status(500).json(e)
      }
      else{
         res.send(r)
      }
   })
}
//delete player by ID request
,  playerDelete: function(req,res){
   console.log(req.body)
   Player.findByIdAndRemove(req.params.ID,function(e,r){
      if(e){
         res.status(500).json(e)
      }
      else{
         console.log('success')
         return res.send(r)
      }
   })
}
//submit players score after round is finished. Creating a new round and then saving it to the coresponding player
, playerScoreSubmit: function(req,res){
      Player.findByIdAndUpdate(req.params.ID,
            {$push:{rounds:req.body.round
         }
      })
         .populate('round')
         .exec(function(e,r){
            console.log(r)
         if(e)res.send(e)
      })
}
, getScores: function(req,res){
      Player
         .findById(req.params.ID)
         .populate({path:'rounds.course', model:'course'})
         .exec(function(e,player){
            if(e) return res.send(e)
            res.send(player)
         }
   )}
/////////////////////////////
/////end of module exports///
/////////////////////////////
}
