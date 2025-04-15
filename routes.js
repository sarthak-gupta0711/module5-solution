(function () {
    'use strict';
  
    angular.module('public')
      .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          .when('/sign-up', {
            templateUrl: 'sign-up.html',
            controller: 'SignUpController',
            controllerAs: 'signUpCtrl'
          })
          .when('/my-info', {
            templateUrl: 'my-info.html',
            controller: 'MyInfoController',
            controllerAs: 'myInfoCtrl'
          })
          .otherwise({ redirectTo: '/sign-up' });
      }]);
  })();
  