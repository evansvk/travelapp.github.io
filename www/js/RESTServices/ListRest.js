/* global angular */
angular.module('RESTServices')
    .service('ListRest', ['$http', '$window', function($http, $window) {
        var ListRest = this;
        
        var apiUrl = 'https://travelapp-sirratav.c9users.io/api/Lists';
        
        ListRest.save = function(list) {
            return $http({
                url: apiUrl,
                method: 'POST',
                data: list,
                headers: {
                    'Authorization': $window.localStorage.token
                }
            });
        };
        
        ListRest.get = function() {
            return $http({
                url: 'https://travelapp-sirratav.c9users.io/api/Lists/?filter[where][userID]=' + userID,
                method: 'GET'
            });
        };
    }]);
