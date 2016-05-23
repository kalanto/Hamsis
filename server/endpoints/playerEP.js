var Player = require('../../server/schema/playerSchema.js')
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
Player.findOne(req.params.ID, function(e,r){
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
   Player.findOneAndUpdate(req.params.ID, function(e,r){
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
}
