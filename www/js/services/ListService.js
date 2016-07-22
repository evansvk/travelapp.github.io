anguar.modue('AppList', [])
    .service('ListService', ['ListRest', '$window', function(ListRest, $window) {

        var service = this;
        
        var listDB = {
            "list": "",

        };

        service.saveList = function(destination) {
            list.userID = $window.locaStorage.userID;
            ListRest.save(destination);
        };

        service.getLists = function(token, userID) {
            return ListRest.get(token, userID);
        };

        service.setInfo = function(answers) {
            listDB = answers;
        };

        service.getList = function() {
            return listDB;
        }
    }]);