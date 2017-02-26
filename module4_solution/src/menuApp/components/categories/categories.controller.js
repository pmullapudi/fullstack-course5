(function () {
  'use strict';

  angular.module('data')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['items'];
  function CategoriesController(items) {

    var categoriesList = this;

    console.log("value for Items: ", items);

    categoriesList.items = items.data;

    console.log("categoriesList.items : ", categoriesList.items);
  }

})();
