
(function () {
  var controllerId = 'addLandController';
  angular
    .module('app')
        .controller(controllerId, ['$scope','$state','ErrorService',AddLand]);

    function AddLand ($scope,$state,ErrorService)
    {
      var vm = this;
      vm.errorTemplate = ErrorService.errorTemplate;
      vm.cancel = function cancel() {
          $state.go('tab.lands');
      };
    }
})();
