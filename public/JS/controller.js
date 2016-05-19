angular.module('app').controller('mainController', function($scope, mainService){

$scope.score = []

$scope.updateScore = function(score){
  $scope.total = mainService.totalScore(score);
}
})
