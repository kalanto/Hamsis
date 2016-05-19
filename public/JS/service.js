angular.module('app').service('mainService', function(){
var playerScore
   this.totalScore = function(score){
      for (var i = 0; i < score.length; i++) {
         playerScore = score[i] + playerScore
      }
   return playerScore
   }
})
