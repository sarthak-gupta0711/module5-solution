(function () {
    'use strict';
  
    angular.module('public')
      .controller('MyInfoController', ['UserService', function (UserService) {
        var myInfoCtrl = this;
        myInfoCtrl.user = UserService.getUser();
      }]);
  })();
  