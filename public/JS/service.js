angular.module('app').service('mainService', function($http){
//actual function called by controller to loop through the scores array and total playerScore
   this.totalScore = function(score){
     var playerScore = 0;
      for (var i = 0; i < score.length; i++) {
         playerScore = score[i] + playerScore;
      }
   return playerScore
   }
//submit score by player (later tie into ng-repeat) so this button will appear at the end of each player row(right hand side) and submit for that specific player
   this.submitScore = function(score){
      return $http({
         method:'POST'
      ,  url:'/score/create'
      ,  data: {
            score: score
      }
      })
   }
////////////////////////////////////////////////
///creat a new player profile in the database///
////////////////////////////////////////////////
   this.createPlayer = function(player){
      return $http({
         method:'POST'
      ,  url:'/player/create'
      ,  data:{
            name: {
               first:player.name.first
            ,  last:player.name.last
            }
         ,  sex:player.sex
         ,  tee:player.tee
         ,  email:player.email
         }
      })
      }
/////////////////////////////
///get all player profiles///
/////////////////////////////
   this.getAllPlayers = function(){
      return $http({
         method:'GET'
      ,  url:"/player/all"
   }).then(function(r){
      return r.data
   })
   }
///////////////////////
///create new course///
///////////////////////
   this.courseCreate = function(course){
      return $http({
         method:'POST'
      ,  url:'/course/create'
      ,  data:{
            teeYardage: [{
               proTee:[course.teeYardage.proTee[0]
                  ,  course.teeYardage.proTee[1]
                  ,  course.teeYardage.proTee[2]
                  ,  course.teeYardage.proTee[3]
                  ,  course.teeYardage.proTee[4]
                  ,  course.teeYardage.proTee[5]
                  ,  course.teeYardage.proTee[6]
                  ,  course.teeYardage.proTee[7]
                  ,  course.teeYardage.proTee[8]
                  ,  course.teeYardage.proTee[9]
                  ,  course.teeYardage.proTee[10]
                  ,  course.teeYardage.proTee[11]
                  ,  course.teeYardage.proTee[12]
                  ,  course.teeYardage.proTee[13]
                  ,  course.teeYardage.proTee[15]
                  ,  course.teeYardage.proTee[14]
                  ,  course.teeYardage.proTee[16]
                  ,  course.teeYardage.proTee[17]
                  ]
            ,  blueTee:[course.teeYardage.blueTee[0]
               ,  course.teeYardage.blueTee[1]
               ,  course.teeYardage.blueTee[2]
               ,  course.teeYardage.blueTee[3]
               ,  course.teeYardage.blueTee[4]
               ,  course.teeYardage.blueTee[5]
               ,  course.teeYardage.blueTee[6]
               ,  course.teeYardage.blueTee[7]
               ,  course.teeYardage.blueTee[8]
               ,  course.teeYardage.blueTee[9]
               ,  course.teeYardage.blueTee[10]
               ,  course.teeYardage.blueTee[11]
               ,  course.teeYardage.blueTee[12]
               ,  course.teeYardage.blueTee[13]
               ,  course.teeYardage.blueTee[15]
               ,  course.teeYardage.blueTee[14]
               ,  course.teeYardage.blueTee[16]
               ,  course.teeYardage.blueTee[17]
               ]
            ,  whiteTee:[course.teeYardage.whiteTee[0]
               ,  course.teeYardage.whiteTee[1]
               ,  course.teeYardage.whiteTee[2]
               ,  course.teeYardage.whiteTee[3]
               ,  course.teeYardage.whiteTee[4]
               ,  course.teeYardage.whiteTee[5]
               ,  course.teeYardage.whiteTee[6]
               ,  course.teeYardage.whiteTee[7]
               ,  course.teeYardage.whiteTee[8]
               ,  course.teeYardage.whiteTee[9]
               ,  course.teeYardage.whiteTee[10]
               ,  course.teeYardage.whiteTee[11]
               ,  course.teeYardage.whiteTee[12]
               ,  course.teeYardage.whiteTee[13]
               ,  course.teeYardage.whiteTee[15]
               ,  course.teeYardage.whiteTee[14]
               ,  course.teeYardage.whiteTee[16]
               ,  course.teeYardage.whiteTee[17]
               ]
               ,  yellowTee:[course.teeYardage.yellowTee[0]
                  ,  course.teeYardage.yellowTee[1]
                  ,  course.teeYardage.yellowTee[2]
                  ,  course.teeYardage.yellowTee[3]
                  ,  course.teeYardage.yellowTee[4]
                  ,  course.teeYardage.yellowTee[5]
                  ,  course.teeYardage.yellowTee[6]
                  ,  course.teeYardage.yellowTee[7]
                  ,  course.teeYardage.yellowTee[8]
                  ,  course.teeYardage.yellowTee[9]
                  ,  course.teeYardage.yellowTee[10]
                  ,  course.teeYardage.yellowTee[11]
                  ,  course.teeYardage.yellowTee[12]
                  ,  course.teeYardage.yellowTee[13]
                  ,  course.teeYardage.yellowTee[15]
                  ,  course.teeYardage.yellowTee[14]
                  ,  course.teeYardage.yellowTee[16]
                  ,  course.teeYardage.yellowTee[17]
                  ]
            ,  redTee:[course.teeYardage.redTee[0]
               ,  course.teeYardage.redTee[1]
               ,  course.teeYardage.redTee[2]
               ,  course.teeYardage.redTee[3]
               ,  course.teeYardage.redTee[4]
               ,  course.teeYardage.redTee[5]
               ,  course.teeYardage.redTee[6]
               ,  course.teeYardage.redTee[7]
               ,  course.teeYardage.redTee[8]
               ,  course.teeYardage.redTee[9]
               ,  course.teeYardage.redTee[10]
               ,  course.teeYardage.redTee[11]
               ,  course.teeYardage.redTee[12]
               ,  course.teeYardage.redTee[13]
               ,  course.teeYardage.redTee[15]
               ,  course.teeYardage.redTee[14]
               ,  course.teeYardage.redTee[16]
               ,  course.teeYardage.redTee[17]
               ]
         }]
         ,  par:[{
               menPar:[course.par.menPar[0]
                  ,  course.par.menPar[1]
                  ,  course.par.menPar[2]
                  ,  course.par.menPar[3]
                  ,  course.par.menPar[4]
                  ,  course.par.menPar[5]
                  ,  course.par.menPar[6]
                  ,  course.par.menPar[7]
                  ,  course.par.menPar[8]
                  ,  course.par.menPar[9]
                  ,  course.par.menPar[10]
                  ,  course.par.menPar[11]
                  ,  course.par.menPar[12]
                  ,  course.par.menPar[13]
                  ,  course.par.menPar[15]
                  ,  course.par.menPar[14]
                  ,  course.par.menPar[16]
                  ,  course.par.menPar[17]
                  ]
            ,  womenPar:[course.par.womenPar[0]
               ,  course.par.womenPar[1]
               ,  course.par.womenPar[2]
               ,  course.par.womenPar[3]
               ,  course.par.womenPar[4]
               ,  course.par.womenPar[5]
               ,  course.par.womenPar[6]
               ,  course.par.womenPar[7]
               ,  course.par.womenPar[8]
               ,  course.par.womenPar[9]
               ,  course.par.womenPar[10]
               ,  course.par.womenPar[11]
               ,  course.par.womenPar[12]
               ,  course.par.womenPar[13]
               ,  course.par.womenPar[15]
               ,  course.par.womenPar[14]
               ,  course.par.womenPar[16]
               ,  course.par.womenPar[17]
               ]
         }]
         ,  handicap:[{
               menHDCP:[course.handicap.menHDCP[0]
                  ,  course.handicap.menHDCP[1]
                  ,  course.handicap.menHDCP[2]
                  ,  course.handicap.menHDCP[3]
                  ,  course.handicap.menHDCP[4]
                  ,  course.handicap.menHDCP[5]
                  ,  course.handicap.menHDCP[6]
                  ,  course.handicap.menHDCP[7]
                  ,  course.handicap.menHDCP[8]
                  ,  course.handicap.menHDCP[9]
                  ,  course.handicap.menHDCP[10]
                  ,  course.handicap.menHDCP[11]
                  ,  course.handicap.menHDCP[12]
                  ,  course.handicap.menHDCP[13]
                  ,  course.handicap.menHDCP[15]
                  ,  course.handicap.menHDCP[14]
                  ,  course.handicap.menHDCP[16]
                  ,  course.handicap.menHDCP[17]
                  ]
            ,  womenHDCP:[course.handicap.womenHDCP[0]
               ,  course.handicap.womenHDCP[1]
               ,  course.handicap.womenHDCP[2]
               ,  course.handicap.womenHDCP[3]
               ,  course.handicap.womenHDCP[4]
               ,  course.handicap.womenHDCP[5]
               ,  course.handicap.womenHDCP[6]
               ,  course.handicap.womenHDCP[7]
               ,  course.handicap.womenHDCP[8]
               ,  course.handicap.womenHDCP[9]
               ,  course.handicap.womenHDCP[10]
               ,  course.handicap.womenHDCP[11]
               ,  course.handicap.womenHDCP[12]
               ,  course.handicap.womenHDCP[13]
               ,  course.handicap.womenHDCP[15]
               ,  course.handicap.womenHDCP[14]
               ,  course.handicap.womenHDCP[16]
               ,  course.handicap.womenHDCP[17]
               ]
         }]
      }
      })
   }
//////////////////////////////
///create new team profile////
//////////////////////////////
this.teamCreate = function(team){
   return $http({
      method: "POST"
   ,  url: "/team/create/"
   ,  data:{
         name: team.name
      }
})
}
////////////////////////
///add player to team///
////////////////////////
this.addTeamPlayer = function(team, player){
   return $http({
      method: "PUT"
   ,  url:"/team/update/:ID"
   ,  data:{
         name: team.name
      ,  player:{
            name:{
               first:player.first.name
            ,  last:player.last.name
            }
      }
   }
   })
}
})
