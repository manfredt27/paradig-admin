(function() {
  'use strict';

  angular
    .module('paradigAdmin.users')
    .factory('userService', userService);

  function userService () {
    return {
      authenticate: authenticate,
    }

    function authenticate(username, password) {
      return username === 'admin' && password === '12345678';
    }
  }
})();
