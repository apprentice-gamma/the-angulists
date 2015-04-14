(function(){
	angular
		.module('dictator')
		.controller('LayoutController', Controller);

		function Controller($location, DictatorFactory){
			var vm = this;
			vm.dictators = [];
			getDictator();

			function getDictator(){
				
				DictatorFactory.getDictator()
					.success(function(data){
						vm.dictators = data;
					})
					.error(function(){
						vm.dictators = data;
				});
			}
		}

})();