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
        url: '/answers',
        templateUrl: 'app/dashboard/answers/answers.html',
        controller: 'AnswersController',
        controllerAs: 'vm'
      });
  }

})();




