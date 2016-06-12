/**
 * Created by jberrocal-as on 13/01/2016.
 */

(function () {
  var controllerId = 'loginController';
  angular
    .module('app')
        .controller(controllerId, ['$scope', '$state', '$ionicPopup',Login]);

    function Login ($scope, $state, $ionicPopup)
    {
      var vm = this;

      vm.data = {};

      vm.signup = function signup(data) {
          $state.go('signup');
      };
    }
})();
