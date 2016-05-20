var Player = require('../sever/schema/playerSchema.js')
module.exports={
//create new player
      playerPost: function(req,res,next){
         console.log(req.body)
            var player = new Score(req.body)
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
   ,   player: function(req,res){
         Score.find(req.query, function(e, r){
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
      Score.findOneAndUpdate(req.params.ID, function(e,r){
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
         Score.findOneAndUpdate(req.params.ID, function(e,r){
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
