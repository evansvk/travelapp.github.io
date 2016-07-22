 angular.module("RESTServices", [])
  .service('SSFUsersRest', ['$http', '$window', function($http, $window) {
   var SSFUsersRest = this;


   SSFUsersRest.get = function(user){
    console.log('Inside get api :',user);
    return $http({
     url: "https://travelapp-sirratav.c9users.io/api/SSFUsers/login",
     method: "POST",
     data: user
    });
   };
   
   SSFUsersRest.getUser = function(id){
    console.log('Inside get api :',id);
    var url  = "https://travelapp-sirratav.c9users.io/api/SSFUsers/" + id; 
    return $http({
     url: url,
     method: "GET"
     
    });
   };


   SSFUsersRest.post = function(newUserData) {
    console.log('Inside Post Api:',newUserData);
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