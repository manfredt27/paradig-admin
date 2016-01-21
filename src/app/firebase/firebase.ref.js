(function() {
  'use strict';

  angular
    .module('paradigAdmin.firebase')
    .factory('FirebaseRef', FirebaseRef);

  FirebaseRef.$inject = ['Firebase', 'FBURL'];

  /* @ngInject */
  function FirebaseRef(Firebase, FBURL) {

    return new Firebase(FBURL);
  }
})();