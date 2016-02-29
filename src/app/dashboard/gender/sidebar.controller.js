(function() {
  'use strict';

  angular
    .module('paradigAdmin.dashboard')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider'];

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('dashboard.sidebar', {
        url: '/dashboard/sidebar',
        templateUrl: 'app/dashboard/sidebar/sidebar.jade',
        controller: 'SidebarController',
        controllerAs: 'vm'
      });
  }

})();




