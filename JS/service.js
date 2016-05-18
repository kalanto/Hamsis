angular.module('app').service('mainService', function(){
   this.totalScore = function(score, total){
      for (var i = 0; i < score.length; i++) {
         total = total + score.i;
         return total;
      }
   }
})
