angular.module('starter.controllers')
    .controller('listCtrl', ['$scope', 'ListRest','$window', function($scope, ListRest, $window) {

        // $scope.list = [];
        $scope.user={};
        $scope.addDestination = function(form) {
            // $scope.list.push(destinations);
            ListRest.save($scope.user);
            $scope.user={};
             
        }

                
        
        $scope.removeDestination = function(x) {
            $scope.lists.splice(x, 1);
        };

    }]);
