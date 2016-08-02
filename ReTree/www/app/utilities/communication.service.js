(function () {
    'use strict';
    var serviceId = 'CommunicationService';
    angular
        .module('app')
            .service(serviceId, ['$cordovaSQLite', CommunicationService]);

    function CommunicationService ($cordovaSQLite)
    {
        var username = '';

        this.getUsername = function getUsername(){
            return username;
        }

        this.setUsername = function setUsername(newUsername){
            username=newUsername;
        }

    }
})();
