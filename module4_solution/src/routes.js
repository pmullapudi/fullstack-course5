(function () {
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/menuApp/views/homeView.template.html'
      })
      .state('allCategories', {
        url: '/menuCategories',
        templateUrl: 'src/menuApp/views/categories.template.html',
        controller: 'CategoriesController as categoriesList',
        resolve: {
          response: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('itemsUnderCategory', {
        url: '/menuItems4Category/{shortName}',
        templateUrl: 'src/menuApp/views/items.template.html',
        controller: 'ItemsController as itemsList',
        resolve: {
          response: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.shortName);
          }]
        }
      });

  }

})();
