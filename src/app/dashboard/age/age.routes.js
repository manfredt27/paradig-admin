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
        url: '/age',
        templateUrl: 'app/dashboard/age/age.html',
        controller: 'AgeController',
        controllerAs: 'vm'
      });
  }

})();





/* $stateProvider
  .state('report', {
    views: {
      'age': { ... templates and/or controllers ... },
      'gender': {},
      'answers': {},
    }
  })
*/

