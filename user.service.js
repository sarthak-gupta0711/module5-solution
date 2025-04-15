(function () {
    'use strict';
  
    angular.module('public')
      .service('UserService', function () {
        var user = null;
  
        this.saveUser = function (info) {
          user = info;
        };
  
        this.getUser = function () {
          return user;
        };
      });
  })();
  