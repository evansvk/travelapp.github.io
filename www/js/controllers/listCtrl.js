angular.module('starter.controllers')
    .controller('listCtrl', ['$rootScope','$scope', 'ListRest','$window','$timeout', function($rootScope,$scope, ListRest, $window,$timeout) {

        $scope.lists=destinations;
        
        $scope.user={};
        
        $scope.addDestination = function(form) {
            console.log('Add destination form :',form);
            // $scope.list.push(destinations);
            console.log($scope.user,":user",$rootScope.userData);
            $scope.user.userId = $rootScope.userData.userId;
            ListRest.save($scope.user);
            $scope.user={};
            $timeout(function(){
                
            })
            $scope.init();
             
        }
        
        $scope.init = function(){
            console.log('Calling init : List');
            ListRest.get($rootScope.userData.userId).then(function(response){
                console.log("Response List:",response);
                $scope.lists = response.data;
            },function(err){
                if(err){
                    console.log(err);
                }
            })
            
        }
        
        $scope.removeDestination = function(x,list) {
            console.log(x,list);
            $scope.lists.splice(x, 1);
        };

    }]);
