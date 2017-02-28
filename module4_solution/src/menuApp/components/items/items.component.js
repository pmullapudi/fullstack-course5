(function () {
  'use strict';

  angular.module('data')
    .component('menuItemsComp', {
      templateUrl: 'src/menuApp/components/items/items.component.html',
      bindings: {
        items: '<'
      }
    });

})();
