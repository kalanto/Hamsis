angular.module('app').controller('mainController', function($scope, mainService){

$scope.score = []
$scope.total = playerScore
$scope.totalScore = function(score){
   mainService.totalScore(score)
}
})
