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
$scope.submitScore = function(player,score,course){
   mainService.submitScore(player,score,course)
}
//////////////////////////////
///get courses for dropdown///
//////////////////////////////
$scope.getCourses = function(){
   mainService.getCourses().then(function(r){
      $scope.courses = r
   })
}
$scope.getCourses()
/////////////////////////////
///select course from menu///
/////////////////////////////
$scope.courseSelect=function(course){
   mainService.courseSelect(course).then(function(r){
      $scope.cCourse = r
   })
}
///////////////////////////////
///create new player profile///
///////////////////////////////
$scope.createPlayer = function(player){
   $scope.player=mainService.createPlayer(player)
}
/////////////////////////////
///get all player profiles///
/////////////////////////////
$scope.getAllPlayers = function(){
   mainService.getAllPlayers().then(function(r){
      $scope.players = r
   })
}
///////////////////
///update player///
///////////////////
$scope.updatePlayer = function(player){
   mainService.updatePlayer(player).then(function(r){
      $scope.updated = r
   })
}
///////////////////
///delete player///
///////////////////
$scope.deletePlayer = function(player){
   console.log(player)
   mainService.deletePlayer(player).then(function(r){
      $scope.deleted=r
   })
}
///////////////////////////
///get scores for player///
///////////////////////////
$scope.getScores=function(player){
   mainService.getScores(player).then(function(r){
      $scope.playerScores = r
   })
}
$scope.getAllPlayers()
$scope.getAllTeams = function(){
   mainService.getAllTeams().then(function(r){
      $scope.teams = r
   })
}
$scope.getAllTeams()
////////////////////////
///add player to team///
////////////////////////
$scope.addTeamPlayer = function(player,team){
   mainService.addTeamPlayer(player,team)
}
///////////////////////////////
///create new course profile///
///////////////////////////////
$scope.courseCreate = function(course){
   mainService.courseCreate(course)
}
/////////////////////////////
///create new team profile///
/////////////////////////////
$scope.teamCreate = function(team){
   mainService.teamCreate(team)
}
/////////////////////////
///add players to team///
/////////////////////////
$scope.addTeamPlayer = function(team, player){
   mainService.addTeamPlayer(team, player)
}
})
