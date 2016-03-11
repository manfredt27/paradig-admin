(function() {
  'use strict';

  angular
    .module('paradigAdmin.dashboard')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider'];

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
      });
  }
})();
