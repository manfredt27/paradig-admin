(function() {
  'use strict';

  angular
    .module('paradigAdmin.gender')
    .controller('GenderController', GenderController);

  /* @ngInject */
  function GenderController() {
    var vm = this
    vm.GenderController = GenderController;

    vm.people = [
      { firstName: "name", lastName: "test" },
      { firstName: "name", lastName: "test" },
      { firstName: "name", lastName: "test" },
      { firstName: "name", lastName: "test" }
    ]
  }
})();
