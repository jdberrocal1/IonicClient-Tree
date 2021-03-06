(function() {
    'use strict';

    angular.module('app', ['ionic','ngCordova','ngMessages']);

    angular.module('app').run(['$rootScope','$ionicPlatform','DBService','$state','CommunicationService',Run]);

    function Run($rootScope,$ionicPlatform,DBService,$state,CommunicationService) {
        $ionicPlatform.ready(function() {
            DBService.createDB()
              .then(function(result){
                  DBService.checkLoggedUser()
                    .then(function(result){
                        var user = result.rows.item(0);
                        if(!angular.isUndefined(user)){
                            CommunicationService.setUsername(user.username);
                            CommunicationService.setAuthenticated(true);
                            $state.go('tab.lands');
                        }
                    });
              });

          $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
              var isAuthenticated = CommunicationService.isAuthenticated();
              if(fromState.name !== 'tab.profile' && next.name === 'login' && isAuthenticated){
                  event.preventDefault();
              }
          });
            // if(window.cordova && window.cordova.plugins.Keyboard) {
            //     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            //     // for form inputs)
            //     cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            //
            //     // Don't remove this line unless you know what you are doing. It stops the viewport
            //     // from snapping when text inputs are focused. Ionic handles this internally for
            //     // a much nicer keyboard experience.
            //     cordova.plugins.Keyboard.disableScroll(true);
            // }
            // if(window.StatusBar) {
            //     StatusBar.styleDefault();
            // }



        });
    }

    angular.module('app').config(['$stateProvider', '$urlRouterProvider','$ionicConfigProvider', Config]);

    function Config($stateProvider, $urlRouterProvider,$ionicConfigProvider){
        $ionicConfigProvider.tabs.position('bottom');
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
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'app/tabs/tabs.html'
            })
            .state('tab.lands', {
                url: '/lands',
                views: {
                    'lands': {
                        templateUrl: 'app/lands/lands.html',
                        controller: 'landsController',
                        controllerAs:'lands'
                    }
                }
            })
            .state('tab.land-detail', {
                url: '/lands/land/:landId',
                views: {
                    'lands': {
                        templateUrl: 'app/land/land.html',
                        controller: 'landController',
                        controllerAs:'land'
                    }
                }
            })
            .state('tab.land-add', {
                url: '/lands/addLand',
                views: {
                    'lands': {
                        templateUrl: 'app/addLand/addLand.html',
                        controller: 'addLandController',
                        controllerAs:'addLand'
                    }
                }
            })
            .state('tab.profile', {
                url: '/profile',
                views: {
                    'tab-profile': {
                        templateUrl: 'app/profile/profile.html',
                        controller: 'profileController',
                        controllerAs:'profile'
                    }
                }
            })
            .state('tab.map', {
                url: '/map',
                views: {
                    'lands': {
                        templateUrl: 'app/map/map.html',
                        controller: 'mapController',
                        controllerAs:'map'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');
    }

})();
