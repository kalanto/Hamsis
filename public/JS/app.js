angular.module('app',['ui.router'])
.config(function($stateProvider,$urlRouterProvider,$httpProvider){
   $stateProvider
   .state('home',{
      url:'/'
   ,  templateUrl:'views/home.html'
   })
   .state('course',{
      url:'/course'
   ,  templateUrl:'views/course.html'
   })
   .state('player',{
      url:'/player'
   ,  templateUrl:'views/player.html'
   })
   .state('team',{
      url:'/team'
   ,  templateUrl:'views/team.html'
   })
   .state('addplayer',{
      url:'/addTeamPlayer'
   ,  templateUrl:"views/addteamplayer.html"
   })

   $urlRouterProvider.otherwise('/')
})
