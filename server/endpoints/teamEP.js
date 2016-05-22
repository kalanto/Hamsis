var team = require('../../server/schema/teamSchema.js')
module.exports={

//create new team
teamCreate: function(req,res,next){
   console.log(req.body)
      var team = new team(req.body)
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
      team.find(req.query, function(e, r){
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
   team.findOneAndUpdate(req.params.ID, function(e,r){
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
      team.findOneAndUpdate(req.params.ID, function(e,r){
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
   team.findOneAndRemove(req.params.ID, function(e,r){
      if(e){
         res.status(500).json(e)
      }
      else{
         return res.send(r)
      }
   })
}
}
