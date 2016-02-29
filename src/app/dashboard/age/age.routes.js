(function() {
  'use strict';

  angular
    .module('paradigAdmin.dashboard')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider'];

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('dashboard.age', {
        url: '/dashboard/age',
        templateUrl: 'app/dashboard/age/age.html',
        controller: 'AgeController',
        controllerAs: 'vm'
      });
  }

})();


