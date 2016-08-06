(function () {
    'use strict';
    var serviceId = 'CommunicationService';
    angular
        .module('app')
            .service(serviceId, ['$cordovaSQLite', CommunicationService]);

    function CommunicationService ($cordovaSQLite)
    {
        var username = '';
        var isAuthenticatedFlag = false;

        this.isAuthenticated = function isAuthenticated(){
            return isAuthenticatedFlag;
        };

        this.setAuthenticated = function setAuthenticated(value){
             isAuthenticatedFlag = value;
        };

        this.getUsername = function getUsername(){
            return username;
        };

        this.setUsername = function setUsername(newUsername){
            username=newUsername;
        };

    }
})();
