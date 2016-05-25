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
      console.log(r)
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
$scope.addTeamPlayer = function(player,teamID){
   mainService.addTeamPlayer(player,teamID)
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
$scope.teamCreate = function(team){
   console.log(team)
   mainService.teamCreate(team)
}
/////////////////////////
///add players to team///
/////////////////////////
$scope.addTeamPlayer = function(player, team){
   console.log(team)
   mainService.addTeamPlayer(player, team)
}
})
