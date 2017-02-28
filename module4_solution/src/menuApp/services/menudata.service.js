(function () {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBaseURL', 'https://davids-restaurant.herokuapp.com');

  MenuDataService.$inject = ['$http', 'ApiBaseURL'];
  function MenuDataService($http, ApiBaseURL) {

    var menuDataService = this;

    menuDataService.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: (ApiBaseURL + '/categories.json')
      });

      return response;
    };

    menuDataService.getItemsForCategory = function (categoryShortName) {
      var response = $http({
        method: "GET",
        url: (ApiBaseURL + '/menu_items.json?category=' + categoryShortName)
      });
      console.log("shortName :", categoryShortName);
      return response;
    };

  }

})();
