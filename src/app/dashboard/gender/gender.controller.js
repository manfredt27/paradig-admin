(function() {
  'use strict';

  angular
    .module('paradigAdmin.gender')
    .controller('GenderController', GenderController);

  GenderController.$inject = ['dataManagerService'];

  function GenderController(dataManagerService) {
    var vm = this;
    vm.GenderController = GenderController;
    vm.dataManagerService = dataManagerService;

    dataManagerService.getDataFor('app/assets/files/gender.json')
      .then(function(data) {
        vm.people = data.data.people;
      })
      .catch(function(){
        //console.log(e);
      });
  }
})();
