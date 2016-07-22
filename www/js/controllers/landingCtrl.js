angular.module('starter.controllers')
    .controller('landingCtrl', ['$rootScope','$scope', 'SSFUsersRest', '$state', '$window', function ($rootScope,$scope, SSFUsersRest, $state, $window) {

        $scope.user = {};

        $scope.signIn = function(form) {
            console.log("Form data:",form);
            SSFUsersRest.get($scope.user).then(function(response) {
             
                if (response.status == 200) {
                    $window.localStorage.token = response.data.id;
                    $window.localStorage.userId = response.data.userId;
                    $rootScope.userData = response.data;
                    $scope.user = {};
                    console.log("Check sign in response :",response);

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
