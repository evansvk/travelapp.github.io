/*global angular*/
angular.module('starter.controllers')
    .controller('registerCtrl', ['$rootScope','$scope', '$state', '$window', 'SSFUsersRest', function($rootScope,$scope, $state, $window, SSFUsersRest) {

        $scope.user = {};


        $scope.signupForm = function(form) {
            if (form.$invalid) {
                return alert("Please complete required fields to register!");
            }

            SSFUsersRest.post($scope.user).then(function(response) {
                if (response.status == 200) {

                    $window.localStorage.token = response.data.token;
                    $window.localStorage.userID = response.data.id;
                    console.log('Check User Data :', response);
                    $rootScope.user=response.data;
                    // $scope.testUser = response.data;

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
