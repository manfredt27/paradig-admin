(function() {
  'use strict';

  angular
    .module('paradigAdmin.answers')
    .controller('AnswersController', AnswersController);

  AnswersController.$inject = ['dataManagerService'];

  function AnswersController(dataManagerService) {
    var vm = this;
    vm.AnswersController = AnswersController;
    vm.dataManagerService = dataManagerService;

    dataManagerService.getDataFor('app/assets/files/answers.json')
      .then(function(data) {
        vm.people= data.data.people;
      })
      .catch(function(){

      });
  }
})();
