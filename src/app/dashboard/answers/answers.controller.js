(function() {
  'use strict';

  angular
    .module('paradigAdmin.answers')
    .controller('AnswersController', AnswersController);

  /* @ngInject */
  function AnswersController() {
    var vm = this
    vm.AnswersController = AnswersController;

    vm.people = [
      { firstName: "name", lastName: "test" },
      { firstName: "name", lastName: "test" },
      { firstName: "name", lastName: "test" },
      { firstName: "name", lastName: "test" }
    ]
  }
})();










