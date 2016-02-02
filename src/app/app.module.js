(function() {
  'use strict';

  angular
    .module('paradigAdmin', [
      'ui.bootstrap',
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
