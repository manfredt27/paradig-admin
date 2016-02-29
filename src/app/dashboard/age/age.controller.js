(function() {
  'use strict';

  angular
    .module('paradigAdmin.age')
    .controller('AgeController', AgeController);

  /* @ngInject */
  function AgeController() {
    var vm = this;
    vm.AgeController = AgeController;

    vm.people = [
      { firstName: "name", lastName: "test" },
      { firstName: "name", lastName: "test" },
      { firstName: "name", lastName: "test" },
      { firstName: "name", lastName: "test" }
    ]
  }
})();
