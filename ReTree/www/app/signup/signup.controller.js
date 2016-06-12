
(function () {
  var controllerId = 'signupController';
  angular
    .module('app')
        .controller(controllerId, ['$scope', '$state', '$ionicPopup',Signup]);

    function Signup ($scope, $state, $ionicPopup)
    {
      var vm = this;

      vm.signup = function signup(data) {

      };
    }
})();
