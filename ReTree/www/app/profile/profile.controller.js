/**
 * Created by jberrocal-as on 13/01/2016.
 */

(function () {
  var controllerId = 'profileController';
  angular
    .module('app')
        .controller(controllerId, ['$scope',Profile]);

    function Profile ($scope)
    {
      var vm = this;



    }
})();
