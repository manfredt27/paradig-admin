(function() {
  'use strict';

  angular
    .module('paradigAdmin.dashboard')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider'];

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('dashboard.gender', {
        url: '/dashboard/gender',
        templateUrl: 'app/dashboard/gender/gender.jade',
        controller: 'GenderController',
        controllerAs: 'vm'
      });
  }

})();
