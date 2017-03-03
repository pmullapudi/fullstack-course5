(function () {
  "use strict";

  angular.module('public')
    .controller("UserInfoController", UserInfoController);

    UserInfoController.$inject = ['userObj'];
    function UserInfoController(userObj) {

      var userInfoCtrl = this;

      userInfoCtrl.userObj = userObj;

    }

})();
