angular.module('starter.controllers')
    .controller('landingCtrl', ['$scope', 'SSFUsersRest', '$state', '$window', function ($scope, SSFUsersRest, $state, $window) {

        $scope.user = {};

        $scope.signIn = function(form) {
            
            SSFUsersRest.get($scope.user).then(function(response) {
             
                if (response.status == 200) {
                    $window.localStorage.token = response.data.id;
                    $window.localStorage.userId = response.data.userId;
                    $scope.user = {};

                    $state.go('home');


                }
            }, function(err) {
                if (err.status == 404) {
                    alert("Server error");
                }
                else {
                    alert("Email and/or password invalid.");
                }




            });

        };

    }]);
