(function() {
  'use strict';

  angular
    .module('paradigAdmin')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
