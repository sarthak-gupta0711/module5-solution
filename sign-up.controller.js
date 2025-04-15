(function () {
    'use strict';
  
    angular.module('public')
      .controller('SignUpController', SignUpController);
  
    SignUpController.$inject = ['UserService', '$http'];
  
    function SignUpController(UserService, $http) {
      var signUpCtrl = this;
      signUpCtrl.user = {};
      signUpCtrl.success = false;
      signUpCtrl.error = false;
  
      signUpCtrl.submit = function () {
        var short_name = signUpCtrl.user.favorite;
        if (!short_name) return;
  
        var category = short_name[0].toUpperCase();
        var number = parseInt(short_name.substring(1)) - 1;
        var url = `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${category}/menu_items/${number}.json`;
  
        $http.get(url).then(function (response) {
          if (response.data) {
            signUpCtrl.user.menuItem = response.data;
            UserService.saveUser(signUpCtrl.user);
            signUpCtrl.success = true;
            signUpCtrl.error = false;
          } else {
            signUpCtrl.success = false;
            signUpCtrl.error = true;
          }
        });
      };
    }
  })();
  