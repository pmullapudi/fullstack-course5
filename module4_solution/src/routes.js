(function () {
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuApp/components/homeView/homeView.template.html'
    })
    .state('allCategories', {
      url: '/menuCategories',
      templateUrl: 'src/menuApp/components/categories/categories.template.html',
      controller: 'CategoriesController as categoriesList',
      resolve: {
        items: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    });

    // .state('itemsUnderCategory', {
    //   url: '/menu_items?category={param}',
    //   templateUrl: 'src/menuApp/components/items/items.template.html',
    //   controller: 'ItemsController as itemsList',
    //   resolve: {
    //     items: ['MenuDataService', function(MenuDataService) {
    //       return MenuDataService.getAllCategories();
    //     }]
    //   }
    // });

    //ItemsController as itemsList
    // /menu_items.json?category=VG

    // MenuDataService.getItemsForCategory(categoryShortName)

  }

})();
