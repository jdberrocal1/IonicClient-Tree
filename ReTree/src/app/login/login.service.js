(function () {
    'use strict';
    var serviceId = 'LoginService';
    angular
        .module('app')
            .service(serviceId, ['SignupService', LoginService]);

    function LoginService (SignupService)
    {
      var users = SignupService.getUsers();
     
      this.login = function signup(credentials){
          return users.some(function(user){
              if(user.username === credentials.username && user.password === credentials.password){
                  return true;
              }else{
                  return false;
              }
          });
      };

    }
})();
