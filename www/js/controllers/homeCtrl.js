angular.module('starter.controllers')
    .controller('homeCtrl',['$rootScope','$scope','SSFUsersRest', '$window', '$state', function($rootScope,$scope, SSFUsersRest, $window, $state) {
            console.log('Inside Home Ctrl');
            $scope.logOut = function() {
                SSFUsersRest.logOut()
                delete $window.localStorage.token;
                delete $window.localStorage.userID;
                $state.go('landing');
            };
            $scope.init = function(){
                console.log('Check User Data on login:',$rootScope.userData);
                $scope.user = $rootScope.userData;
                console.log('Root scope :',$rootScope.user,$scope.user,$window.localStorage.token);    
                SSFUsersRest.getUser($scope.user.userId).then(function(response) {
                    if (response.status == 200) {
    
                        console.log("home ctrl api res :",response);
                        $scope.dbuser=response.data;
                      
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
           
            }
            
            
    }]);