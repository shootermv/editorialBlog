/**
 * Created by mvilner on 7/30/2015.
 */
(function() {
    'use strict';
    angular.module('blogApp')
        .controller('versionDetailCtrl', versionDetailController);
    versionDetailController.$inject = ['$state'];
    function versionDetailController($state) {
         var vm =this;
         vm.currentVersion = $state.params.id;
    }

})();