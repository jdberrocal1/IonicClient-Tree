
(function () {
    'use strict';
    var controllerId = 'landsController';
    angular
        .module('app')
            .controller(controllerId, ['$scope','$state','AddLandService','CommunicationService','$ionicLoading',Lands]);

    function Lands ($scope,$state,AddLandService,CommunicationService,$ionicLoading)
    {
      var vm = this;
      vm.lands=[];
      vm.loading=false;

      vm.getLands = function getLands(){
          vm.lands = AddLandService.getLandsByUserName(CommunicationService.getUsername());
          //$ionicLoading.hide();
      };

      vm.goAddLand = function goAddLand(){
          $state.go('tab.land-add');
      };

      //$ionicLoading.show();
      vm.getLands();
    }
})();
