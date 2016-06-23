angular.module('app').directive('navMenu', function(){
   return{
      restrict:'AE'
   ,  templateUrl:'./views/nav.html'
   ,  controller: function($scope){

      $scope.menu = navMenu;
         function navMenu(){
       document.getElementById("myDropdown").classList.toggle("show");
         }
      }
   }
   // END OF CONTROLLER


      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
         }
         }
      }
})
