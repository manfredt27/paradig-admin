(function() {
  'use strict';

  angular
    .module('paradigAdmin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
