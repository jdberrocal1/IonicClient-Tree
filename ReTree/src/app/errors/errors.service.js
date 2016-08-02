
(function () {
    'use strict';
    var serviceId = 'ErrorService';

    angular
        .module('app')
            .service(serviceId, [ErrorService]);

    function ErrorService ()
    {
        this.errorTemplate = 'app/errors/errors.html';
    }
})();
