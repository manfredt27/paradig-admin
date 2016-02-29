(function() {
  'use strict';

  angular
    .module('paradigAdmin', [
      'ngSanitize',
      'ui.router',
      'toastr',
      'firebase',
      'paradigAdmin.firebase',
      'paradigAdmin.age',
      'paradigAdmin.answers',
      'paradigAdmin.gender'
    ]);
})();
