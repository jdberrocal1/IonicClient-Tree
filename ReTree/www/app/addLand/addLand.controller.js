(function () {
    'use strict';
    var controllerId = 'addLandController';

    angular
        .module('app')
            .controller(controllerId, ['$scope','$state','ErrorService','PlacesService','$ionicPopup','CommunicationService','AddLandService',AddLand]);

    function AddLand ($scope,$state,ErrorService,PlacesService,$ionicPopup,CommunicationService,AddLandService)
    {
      var vm = this;
      vm.land={
          name:'',
          address:{
              province:'',
              canton: '',
              district: '',
              direction: ''
          },
          points:[],
          owner:CommunicationService.getUsername()
      };
      vm.errorTemplate = ErrorService.errorTemplate;

      vm.places = PlacesService.getPlaces();

      vm.saveLand = function saveLand(){
          AddLandService.saveLand(vm.land);
          vm.land={
              owner:CommunicationService.getUsername()
          };
          //$state.go('tab.lands', {}, { reload: true });
          $state.transitionTo('tab.lands', null, {reload: true, notify:true});
      };

      vm.cancel = function cancel() {
          $state.go('tab.lands');
      };

      vm.openMap=function openMap(){
          $state.go('tab.map');
        //   $ionicPopup.alert({
        //       title: 'Alerta!',
        //       template: 'Esta función aun se encuentra en desarrollo.'
        //   });
      };
    }
})();
