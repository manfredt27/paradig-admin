(function() {
  'use strict';

  angular
    .module('paradigAdmin', [
      'ngSanitize',
      'ui.router',
      'toastr',
      'firebase',
      'ui.bootstrap',
      'paradigAdmin.firebase',
      'paradigAdmin.users',
      'paradigAdmin.login'
      ]);

})();
