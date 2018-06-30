(function () {
  'use strict';
  angular
    .module('app')
    .factory('boxtestService', boxtestService);

    boxtestService.$inject = ['$http'];

    function boxtestService($http) {
        
      return {
        micUp : function() {
            
        },
        micDown : function() {
            
        },
        mute : function() {
            
        },
        volumeUp : function() {
            
        },
        volumeDown : function() {
            
        }
      };

	}
})();