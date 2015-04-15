(function() {
    angular
        .module('dictator')
        .controller('DictatorController', DictatorController);

		function DictatorController($location, DictatorFactory){
			var vm = this;
			vm.dictators = [];
			getDictator();

			function getDictator(){
				// console.log('this is getDictator');
				DictatorFactory.getDictator()
					.success(function(data){
						vm.dictators = data;
						console.log("You've reached vm.dictators", vm.dictators);

					});
			}
		}

})();
