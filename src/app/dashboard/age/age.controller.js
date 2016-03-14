(function() {
  'use strict';

  angular
    .module('paradigAdmin.age')
    .controller('AgeController', AgeController);

  AgeController.$inject = ['dataManagerService'];

  function AgeController(dataManagerService) {
    var vm = this;
    vm.AgeController = AgeController;
    vm.dataManagerService = dataManagerService;

    dataManagerService.getDataFor('app/assets/files/people.json')
      .success(function(data) {
        vm.people = data.people;
      })
      .catch(function(){
        //console.log(e);
      });
  }
})();


