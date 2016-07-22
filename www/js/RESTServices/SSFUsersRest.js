 angular.module("RESTServices", [])
  .service('SSFUsersRest', ['$http', '$window', function($http, $window) {
   var SSFUsersRest = this;


   SSFUsersRest.get = function(user){
    return $http({
     url: "https://travelapp-sirratav.c9users.io/api/SSFUsers/login",
     method: "POST",
     data: user
    });
   };


   SSFUsersRest.post = function(newUserData) {
    return $http({
     url: "https://travelapp-sirratav.c9users.io/api/SSFUsers",
     method: "POST",
     data: newUserData
    });
   };


   SSFUsersRest.logOut = function() {
    return $http({
     url: "https://travelapp-sirratav.c9users.io/api/SSFUsers/logout",
     method: 'POST',
     headers: {
      'Authorization': $window.localStorage.token
     }

    });

   };


  }]);