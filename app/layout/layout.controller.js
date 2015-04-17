(function(){
	angular
		.module('dictator')
		.controller('LayoutController', LayoutController);

    function LayoutController($location, DictatorFactory) {
      var vm = this;
      vm.title = 'Layout Controller';
    }

})();