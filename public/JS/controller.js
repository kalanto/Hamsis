angular.module('app').controller('mainController', function($scope, mainService){

//takes in live scores and loops through the adding them as the player enters them on the front end
$scope.score = []
$scope.updateScore = function(score){
  $scope.total = mainService.totalScore(score);
}
})
