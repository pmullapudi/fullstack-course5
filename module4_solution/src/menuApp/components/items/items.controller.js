(function () {
  'use strict';

  angular.module('data').controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {

    var itemsList = this;

    itemsList.items = items.data;

  }
})();
