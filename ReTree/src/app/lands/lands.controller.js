
(function () {
    'use strict';
    var controllerId = 'landsController';
    angular
        .module('app')
            .controller(controllerId, ['$scope','$state',Lands]);

    function Lands ($scope,$state)
    {
      var vm = this;
      vm.lands=[
          {
              id:1,
              name:"La Ponderosa",
              address:{
                  province:'Alajuela',
                  canton: 'San Carlos',
                  district: 'Cutris',
                  direction: 'San Joaquin, 1Km Norte de la escuela'
              },
              points:[]
          },
          {
              id:2,
              name:"La Dolores",
              address:{
                  province:'Alajuela',
                  canton: 'Los Chiles',
                  district: 'Amparo',
                  direction: 'Las Nubes, 15Km Este del Pavón'
              },
              points:[]
          }
      ];
      
      vm.loading=false;

      vm.goAddLand = function goAddLand(){
          $state.go('tab.land-add');
      };

    }
})();
