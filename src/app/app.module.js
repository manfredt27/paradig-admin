(function() {
  'use strict';

  angular
    .module('paradigAdmin', [
      'ngSanitize',
      'ui.router',
      'toastr',
      'firebase',
      'paradigAdmin.dashboard',
      'paradigAdmin.firebase',
      'paradigAdmin.age',
      'paradigAdmin.answers',
      'paradigAdmin.gender',
      'common.dataManagerService'
    ]);
})();
