angular.module('app').controller('mainController', function($scope, mainService){
///////////////////////////////////////////////////////////////
//takes in live scores and loops through the adding them as the player enters them on the front end
//////////////////////////////////////////////////////////////
$scope.score = []
$scope.updateScore = function(score){
  $scope.total = mainService.totalScore(score);
}
/////////////////////////////////
//submit final score for round///
/////////////////////////////////
$scope.submitScore = function(score){
   $scope.total=mainService.submitScore(score)
}
///////////////////////////////
///create new player profile///
///////////////////////////////
$scope.createPlayer = function(player){
   $scope.player=mainService.createPlayer(player)
}
///////////////////////////////
///create new course profile///
///////////////////////////////
$scope.courseCreate = function(course){
   console.log(course);
   mainService.courseCreate(course)
}
/////////////////////////////
///create new team profile///
/////////////////////////////
$scope.teamCreate = function(team)
{
   console.log(team)
   mainService.teamCreate(team)
}
})
