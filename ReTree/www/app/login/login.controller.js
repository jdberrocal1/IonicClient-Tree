/**
 * Created by jberrocal-as on 13/01/2016.
 */

(function () {
  var controllerId = 'loginController';
  angular
    .module('app')
        .controller(controllerId, ['$scope', '$state', '$ionicPopup','LoginService',Login]);

    function Login ($scope, $state, $ionicPopup, LoginService)
    {
      var vm = this;

      vm.signup = function signup() {
          vm.credentials={};
          $state.go('signup');
      };

      vm.login = function login(credentials) {
          var isValidUser = LoginService.login(credentials);
          if(isValidUser){
              var alertPopup = $ionicPopup.alert({
                  title: 'Bienvenido',
                  template: 'Ha ingresado correctamente!'
              });
              vm.credentials={};
          }else{
              var alertPopup = $ionicPopup.alert({
                  title: 'Error',
                  template: 'Usuario o contraseña incorrectos'
              });
              vm.credentials.password='';
          }
      }

    }
})();
