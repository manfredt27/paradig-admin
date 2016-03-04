(function() {
  'use strict';

  angular
    .module('common.dataManagerService')
    .factory('dataManagerService', dataManagerService);

  dataManagerService.$inject = ['$http'];

  function dataManagerService($http) {
    return {
      getDataFor: getDataFor
    }

    function getDataFor(url) {
      return $http.get(url);
    }

  }

})();
