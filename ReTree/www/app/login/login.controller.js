(function () {
    'use strict';
    var controllerId = 'loginController';
    angular
        .module('app')
            .controller(controllerId, ['$scope', '$state', '$ionicPopup','LoginService','DBService','CommunicationService',Login]);

    function Login ($scope, $state, $ionicPopup, LoginService,DBService,CommunicationService)
    {
      var vm = this;

      vm.signup = function signup() {
          vm.credentials={
              username:'',
              password:''
          };
          $state.go('signup');
      };

      vm.login = function login(credentials) {
          var isValidUser = LoginService.login(credentials);
          if(isValidUser){
              vm.credentials={};
              DBService.logUser(credentials.username);
              CommunicationService.setUsername(credentials.username);
              CommunicationService.setAuthenticated(true);
              $state.go('tab.lands');
          }else{
              $ionicPopup.alert({
                  title: 'Error',
                  template: 'Usuario o contraseña incorrectos'
              });
              vm.credentials.password='';
          }
      };

    }
})();
