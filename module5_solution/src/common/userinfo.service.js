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
        userInfo.firstName = savedUser.firstName;
        userInfo.lastName = savedUser.lastName;
        userInfo.email = savedUser.email;
        userInfo.phone = savedUser.phone;
        userInfo.favoriteMenuId = savedUser.favoriteMenuId;
        userInfo.menuItem=savedUser.menuItem;
        userInfo.completed=true;    
      };

    }

})();
