(function () {
  "use strict";

  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'UserInfoService'];
  function SignupController(MenuService, UserInfoService) {

    var signupCtrl = this;
    var savedUser = {};

    signupCtrl.firstName='';
    signupCtrl.lastName='';
    signupCtrl.email='';
    signupCtrl.phone='';
    signupCtrl.favoriteDishName='';
    signupCtrl.menuItem={};

    signupCtrl.completed = false;
    signupCtrl.invalidMenuItem = false;

    signupCtrl.submit = function () {

      signupCtrl.completed = false;
      signupCtrl.invalidMenuItem = false;


      var checkMenuItemPromise = MenuService.getMenuItem(signupCtrl.favoriteMenuId.toUpperCase());
      checkMenuItemPromise.then(function (response) {

        if(response!='Call Failed') {
          savedUser.firstName = signupCtrl.firstName.toUpperCase();
          savedUser.lastName = signupCtrl.lastName.toUpperCase();
          savedUser.email = signupCtrl.email.toLowerCase();
          savedUser.phone = signupCtrl.phone;
          savedUser.favoriteMenuId = signupCtrl.favoriteMenuId.toUpperCase();
          savedUser.menuItem=response;
          savedUser.completed=true;

          UserInfoService.setUserInfo(savedUser);

          signupCtrl.completed = true;
        }
        else {
          signupCtrl.invalidMenuItem = true;
          signupCtrl.completed = false;
        }
      });
    };

  }
})();
