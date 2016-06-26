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
   .state('addteamplayer',{
      url:'/addteamplayer'
   ,  templateUrl:'views/addteamplayer.html'
   })
   .state('playerscores',{
      url:'/playerscores'
   ,  templateUrl:'views/playerscore.html'
   })
   .state('scorecard',{
      url:'/scorecard'
   ,  templateUrl:'views/scorecard.html'
});

   $urlRouterProvider.otherwise('/')
})
