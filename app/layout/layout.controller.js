(function(){
	angular
		.module('dictator')
		.controller('LayoutController', Controller);

    function Controller($location, DictatorFactory) {
        var vm = this;
        vm.title = 'Layout Controller';
        vm.returnToHome = returnToHome;

        function returnToHome() {
            $location.url('/');
        }
    }

})();