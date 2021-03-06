
(function () {
    'use strict';
    var controllerId = 'signupController';
    angular
        .module('app')
            .controller(controllerId, ['$scope', '$state', 'ErrorService','SignupService',Signup]);

    function Signup ($scope, $state, ErrorService,SignupService)
    {
        var vm = this;
        vm.errorTemplate = ErrorService.errorTemplate;
        vm.user={
            img:'img/userDefault.png'
        };

        vm.cancel = function cancel() {
            $state.go('login');
        };

        vm.signup = function signup(user) {
            SignupService.signup(user);
            vm.user={};
            $state.go('login');
        };
    }
})();
