(function() {
  'use strict';

  angular
    .module('paradigAdmin')
    .controller('HomeController', HomeController);
  
  HomeController.$inject = ['FirebaseRef', '$firebaseObject'];

  /** @ngInject */
  function HomeController(FirebaseRef, $firebaseObject) {
    var vm = this;
    vm.userId = '12345';
    vm.user = {};


    activate();

    ////////////////

    function activate() {
      vm.user = $firebaseObject(FirebaseRef.child('users/' + vm.userId));
      vm.message = 'Hello World';
    }
  }
})();
