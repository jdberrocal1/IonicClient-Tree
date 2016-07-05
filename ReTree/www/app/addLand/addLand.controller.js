
(function () {
  var controllerId = 'addLandController';
  angular
    .module('app')
        .controller(controllerId, ['$scope','$state','ErrorService','PlacesService','$ionicPopup',AddLand]);

    function AddLand ($scope,$state,ErrorService,PlacesService,$ionicPopup)
    {
      var vm = this;
      vm.errorTemplate = ErrorService.errorTemplate;

      vm.places = PlacesService.getPlaces();
      vm.cancel = function cancel() {
          $state.go('tab.lands');
      };

      vm.openMap=function openMap(){
          var alertPopup = $ionicPopup.alert({
              title: 'Alerta!',
              template: 'Esta función aun se encuentra en desarrollo.'
          });
      }
    }
})();
