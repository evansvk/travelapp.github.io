angular.module('starter.controllers')
    .controller('homeCtrl',['$scope','SSFUsersRest', '$window', '$state', function($scope, SSFUsersRest, $window, $state) {

$scope.logOut = function() {
                SSFUsersRest.logOut()
                delete $window.localStorage.token;
                delete $window.localStorage.userID;
                $state.go('landing');
            };
            
    }]);