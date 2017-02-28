(function () {
  'use strict';

  angular.module('data')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['response'];
  function CategoriesController(response) {
    var categoriesList = this;
    categoriesList.items = response.data;
  }

})();
