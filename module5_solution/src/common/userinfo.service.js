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


      service.getValidShortNames = function () {
        return $http.get(ApiPath + '/categories.json').then(function (response) {

          var data = response.data;
          var shortNameList = [];

          // for(int i=0; i< data.lenght; i++) {
          //   shortNameList.push(data[i].short_name);
          // }

          return shortNameList;
        });
      };


    }


})();
