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
        url: '/gender',
        templateUrl: 'app/dashboard/gender/gender.html',
        controller: 'GenderController',
        controllerAs: 'vm'
      });
  }
})();
