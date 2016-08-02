/**
 * Created by jberrocal-as on 13/01/2016.
 */

(function () {
    'use strict';
    var controllerId = 'profileController';
    angular
        .module('app')
            .controller(controllerId, ['DBService','CommunicationService','$state',Profile]);

    function Profile (DBService,CommunicationService,$state)
    {
        var vm = this;
        vm.profile = {
            username : CommunicationService.getUsername()
        };

        vm.logOut = function logOut(){
            DBService.cleanDB();
            $state.go('login');
        };
    }
})();
