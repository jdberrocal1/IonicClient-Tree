
(function () {
  var controllerId = 'landController';
  angular
    .module('app')
        .controller(controllerId, ['$scope','$state',Land]);

    function Land ($scope,$state)
    {
      var vm = this;

      vm.cancel = function cancel() {
          $state.go('tab.lands');
      };

    }
})();
