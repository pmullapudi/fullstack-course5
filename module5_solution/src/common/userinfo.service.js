(function () {
  "use strict";

  angular.module('common')
    .service("UserInfoService", UserInfoService);

    UserInfoService.$inject = ['$http', 'ApiPath'];
    function UserInfoService($http, ApiPath) {

      var service = this;
      var userInfo = {};

      service.getUserInfo = function () {
        return userInfo;
      };

      service.setUserInfo = function (savedUser) {
        userInfo = {};
        userInfo = savedUser;
      };

    }

})();
