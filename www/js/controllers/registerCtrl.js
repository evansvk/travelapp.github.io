angular.module('starter.controllers')
    .controller('registerCtrl', ['$scope', 'SSFUsersRest', '$state', '$window', function($scope, SSFUsersRest, $state, $window) {
      
       $scope.user = {};


        $scope.accessForm = function(form) {
            if (form.$invalid) {
                return alert("Please complete the form before proceeding.");
            }

            SSFUsersRest.post($scope.user) .then(function(response) {
                    if (response.status == 200) {
                       
                        $window.localStorage.token=response.data.token;
                        $window.localStorage.userID=response.data.id;
                        $scope.user={};
                         
                        alert("Welcome to Wandlerlust!");
                        $state.go('home');
                    }

                }, function(error) {

                    if (error.status == 422) {
                        alert("Email/Username already taken");
                    }
                    else if (error.status == 404) {
                        alert("User not found");
                    }
                    else if (error.status == 500) {
                        alert("Server not available");

                    }
                

                    return error;
                });
        };


    }]);
