(function() {
  'use strict';

  angular
    .module('paradigAdmin.dashboard')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider'];

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('dashboard.answers', {
        url: '/dashboard/answers',
        templateUrl: 'app/dashboard/answers/answers.jade',
        controller: 'AnswersController',
        controllerAs: 'vm'
      });
  }

})();
