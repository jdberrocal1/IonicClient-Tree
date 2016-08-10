
(function () {
    'use strict';
    var controllerId = 'mapController';
    angular
        .module('app')
            .controller(controllerId, ['$scope','$cordovaGeolocation',Lands]);

    function Lands ($scope,$cordovaGeolocation)
    {
      var vm = this;

      var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

  }, function(error){
    console.log("Could not get location");
  });

    }
})();
