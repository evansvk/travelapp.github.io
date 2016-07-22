/* global angular */
angular.module('RESTServices')
    .service('ListRest', ['$http', '$window', function($http, $window) {
        var ListRest = this;
        
        var apiUrl = 'https://travelapp-sirratav.c9users.io/api/Lists';
        
        ListRest.save = function(destination) {
            return $http({
                url: apiUrl,
                method: 'POST',
                data: destination,
                headers: {
                    'Authorization': $window.localStorage.token
                }
            });
        };
    /* Added function to update exiting data   */
        ListRest.update = function(destination) {
            return $http({
                url: apiUrl,
                method: 'PUT',
                data: destination,
                headers: {
                    'Authorization': $window.localStorage.token
                }
            });
        };
        ListRest.get = function(userId) {
            return $http({
                url: 'https://travelapp-sirratav.c9users.io/api/Lists/?filter[where][userId]=' + userId,
                method: 'GET'
            });
        };
    }]);
