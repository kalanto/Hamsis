var Team = require('../../server/schema/teamSchema.js')
var Players = require('../../server/schema/playerSchema.js')
module.exports={

//create new team
teamCreate: function(req,res,next){
   console.log(req.body)
      var team = new Team(req.body)
         team.save(function(e,r){
            console.log(e)
            if(e){
               res.status(500).send(e)
            }
            else{
               res.send(r)
            }
         })
}
//get team request
,   team: function(req,res){
      Team.find(req.query, function(e, r){
         if(e){
            res.status(500).json(e)
         }
         else{
            res.json(r)
         }
      })
}
//get team by ID request
,  teamID: function(req,res){
   Team.findbyId(req.params.ID, function(e,r){
      if(e){
         res.status(500).json(e)
      }
      else{
         res.send(r)
      }
   })
}
//update team by ID request
,  teamUpdate: function(req,res){
      Team.findOneAndUpdate(req.params.ID, function(e,r){
         if(e){
            res.status(500).json(e)
         }
         else{
            res.send(r.data)
         }
      })
}
//delete team by ID request
,  teamDelete: function(req,res){
   Team.findOneAndRemove(req.params.ID, function(e,r){
      if(e){
         res.status(500).json(e)
      }
      else{
         return res.send(r)
      }
   })
}
//add player to team
,  addTeamPlayer: function(req,res){
   Team.findByIdAndUpdate(req.params.ID,{$push:{players:req.body.player._id}}).populate('Players').exec(function(e,player){
if(e)res.send(e)
})
}
}
