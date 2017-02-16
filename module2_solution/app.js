(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.markBought = function (itemIndex) {
      ShoppingListCheckOffService.markBought(itemIndex);
    };

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {

    var service = this;

    var toBuyItems = [{ name: "Cookies", quantity: 10 },
          { name: "Ferrero Rochers", quantity: 20},
          { name: "MilkyWays", quantity: 15},
          { name: "Kisses", quantity: 30},
          { name: "Godiva", quantity: 5},
          { name: "M & M's", quantity: 50}];

    var boughtItems = [];

    service.markBought = function (itemIndex) {
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

  }

})();
