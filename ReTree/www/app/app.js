(function() {
    'use strict';

    angular.module('app', ['ionic','ngCordova','ngMessages']);

    angular.module('app').run(['$ionicPlatform',Run]);

    function Run($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

    angular.module('app').config(['$stateProvider', '$urlRouterProvider', Config]);

    function Config($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'loginController',
                controllerAs:'login'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/signup/signup.html',
                controller: 'signupController',
                controllerAs:'signup'
            })
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'app/tabs/tabs.html'
            })
            .state('app.dash', {
                url: '/dashboard',
                views: {
                    'menuContent': {
                        templateUrl: 'app/dashboard/dashboard.html',
                        controller: 'dashboardController',
                        controllerAs:'dash'
                    }
                }
            })
            .state('app.profile', {
                url: '/profile',
                views: {
                    'menuContent': {
                        templateUrl: 'app/profile/profile.html',
                        controller: 'profileController',
                        controllerAs:'profile'
                    }
                }
            });
          /*.state('app.users', {
            url: '/users',
            views: {
              'menuContent': {
                templateUrl: 'app/users/userList.html',
                controller: 'userListController',
                controllerAs:'userList'
              }
            }
          })
          .state('app.user', {
            url: "/users/user/:id",
            views: {
              'menuContent': {
                templateUrl: 'app/users/user.html',
                controller: 'userController',
                controllerAs: 'user'
              }
            },
            data: {
              authorizedRoles: [USER_ROLES.admin]
            }
        });*/
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');
    }

})();
