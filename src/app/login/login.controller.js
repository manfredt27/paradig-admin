(function() {
  'use strict';

  angular
    .module('paradigAdmin.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['userService', '$state'];

  /* @ngInject */
  function LoginController(userService, $state) {
    var vm = this
    vm.authenticate = authenticate
  
    function authenticate(username, password) {
      if(userService.authenticate(username, password)) {
        $state.go('home');
      } else {
        $state.go('login'); 
      }
    }
  }
})();