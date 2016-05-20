angular.module('app').service('mainService', function(){
//actual function called by controller to loop through the scores array and total playerScore
   this.totalScore = function(score){
     var playerScore = 0;
      for (var i = 0; i < score.length; i++) {
         playerScore = score[i] + playerScore;
      }
   return playerScore
   }
})
