(function () {
  "use strict";

  angular.module('common')
    .service("UserInfoService", UserInfoService);

    UserInfoService.$inject = [];
    function UserInfoService() {

      var service = this;
      var userInfo = {};

      service.getUserInfo = function () {
        return userInfo;
      };

      service.setUserInfo = function (savedUser) {
        userInfo = savedUser;
      };

    }

})();
