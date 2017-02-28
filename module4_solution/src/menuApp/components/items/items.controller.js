(function () {
  'use strict';

  angular.module('data').controller('ItemsController', ItemsController);

  ItemsController.$inject = ['response'];
  function ItemsController(response) {
    var itemsList = this;
    itemsList.items = response.data.menu_items;
    itemsList.category = response.data.category;
  }
})();
