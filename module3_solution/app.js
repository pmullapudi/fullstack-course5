(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBaseURL', 'https://davids-restaurant.herokuapp.com')
  .directive('foundItems', FoundItemsDirective);


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&',
        showNothingFound: '='
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'direcCtrl',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    var direcCtrl = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {

    var menu = this;
    menu.showNothingFound = false;
    menu.searchStr = "";
    menu.found = [];

    menu.onNarrowItDownCLick = function () {
      menu.showNothingFound = false;

      if(menu.searchStr!=undefined && menu.searchStr.length>0) {
        var loadAllMenuItemsPromise = MenuSearchService.getAllMenuItems();

        loadAllMenuItemsPromise.then(function (response) {
          menu.found = MenuSearchService.getMatchedMenuItems(response.data, menu.searchStr);

          menu.showNothingFound = !(menu.found.length>0);
        })
        .catch(function (error) {
          menu.showNothingFound = true;
          console.log("ERROR!! Not able to load MenuItems.");
        });
      }
      else {
        menu.showNothingFound = true;
        menu.found = [];
      }
    };

    menu.removeItem = function (itemIndex) {
      menu.found.splice(itemIndex, 1);
    };

  }

  MenuSearchService.$inject = ['$http', 'ApiBaseURL'];
  function MenuSearchService($http, ApiBaseURL) {
    var service = this;

    service.getAllMenuItems = function () {
      var response = $http({
        method: "GET",
        url: (ApiBaseURL + '/menu_items.json')
      });

      return response;
    };

    service.getMatchedMenuItems = function (reqData, searchStr) {
      var allMenuItem = reqData.menu_items;
      var matchedMenuItems = [];

      for(var i=0; i<allMenuItem.length; i++) {
        var tempDesc = allMenuItem[i].description;
        if(tempDesc.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1) {
          matchedMenuItems.push(allMenuItem[i]);
        }
      }

      return matchedMenuItems;
    };
  }

})();
