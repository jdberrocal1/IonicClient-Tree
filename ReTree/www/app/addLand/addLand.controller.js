
(function () {
  var controllerId = 'addLandController';
  angular
    .module('app')
        .controller(controllerId, ['$scope','$state','ErrorService','PlacesService',AddLand]);

    function AddLand ($scope,$state,ErrorService,PlacesService)
    {
      var vm = this; 
      vm.errorTemplate = ErrorService.errorTemplate;

      vm.places = PlacesService.getPlaces();
      vm.cancel = function cancel() {
          $state.go('tab.lands');
      };
    }
})();
