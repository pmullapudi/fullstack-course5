(function () {
  'use strict';

  angular.module('data')
    .component('categoriesComp', {
      templateUrl: 'src/menuApp/components/categories/categories.component.html',
      bindings: {
        items: '<'
      }
    });

})();
