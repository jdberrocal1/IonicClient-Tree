(function () {
    'use strict';
    var serviceId = 'DBService';
    angular
        .module('app')
            .service(serviceId, ['$cordovaSQLite', DataBaseService]);

    function DataBaseService ($cordovaSQLite)
    {
        var db = null;
        this.createDB = function createDB(){
            db = $cordovaSQLite.openDB({ name: 'my.db',location: 'default' });
            return $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS user (id integer primary key, username text)");
        };

        this.logUser = function logUser(username) {
            var query = "INSERT INTO user (username) VALUES (?)";
            $cordovaSQLite.execute(db, query, [username]).then(function(res) {
                console.log("INSERT ID -> " + res.insertId);
            }, function (err) {
                console.error(err);
            });
        };

        this.checkLoggedUser = function checkLoggedUser() {
            var query = "SELECT * FROM user";
            return $cordovaSQLite.execute(db, query, []);
        };

        this.cleanDB= function cleanDB(){
            var query = "DELETE FROM user";
            $cordovaSQLite.execute(db, query, []).then(function(res) {
            }, function (err) {
                console.error(err);
            });
      };
    }
})();
