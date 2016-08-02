(function () {
    'use strict';
    var serviceId = 'SignupService';
    angular
        .module('app')
            .service(serviceId, [SignupService]);

    function SignupService ()
    {
        var users = [
            {
                fullname:'Daniel Berrocal',
                username:'jdberrocal1',
                email:'jdanielb1992@gmail.com',
                phone:'86899169',
                password:'qwerty'
            }
        ];

        this.getUsers = function getUsers (){
            return users;
        };

        this.signup = function signup(user){
            users.push(user);
        };

    }
})();
