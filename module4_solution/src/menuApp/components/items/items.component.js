(function () {
  'use strict';

  angular.module('data')
    .component('itemsComp', {
      templateUrl: 'src/menuApp/components/items/items.component.html',
      bindings: {
        items: '<'
      }
    });

})();
