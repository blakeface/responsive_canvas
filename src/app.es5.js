'use strict';

(function () {
  var dependencies = [];
  angular.module('RespCanv', dependencies).controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = [];
  function MainCtrl() {
    var vm = this;
    vm.inputs = 0;
    vm.drawInputs = function (c) {
      console.log(c);
    };
  }
})();
