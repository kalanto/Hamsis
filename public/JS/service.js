angular.module('app').service('mainService', function(){

   this.totalScore = function(score){
     var playerScore = 0;
      for (var i = 0; i < score.length; i++) {
         playerScore = score[i] + playerScore;
      }
   return playerScore
   }
})
