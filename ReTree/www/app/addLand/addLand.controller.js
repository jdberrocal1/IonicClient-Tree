
(function () {
  var controllerId = 'addLandController';
  angular
    .module('app')
        .controller(controllerId, ['$scope','$state',AddLand]);

    function AddLand ($scope,$state)
    {
      var vm = this;

      vm.cancel = function cancel() {
          $state.go('tab.lands');
      };
    }
})();
