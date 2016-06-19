
(function () {
  var controllerId = 'dashboardController';
  angular
    .module('app')
        .controller(controllerId, ['$scope',Dashboard]);

    function Dashboard ($scope)
    {
      var vm = this;

    }
})();
