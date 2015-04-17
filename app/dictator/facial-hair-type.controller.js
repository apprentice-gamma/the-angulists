(function(){
	angular.module('dictator')
	.controller('FacialHairTypeController', FacialHairTypeController);

	function FacialHairTypeController(DictatorFactory){
		var vm = this;
		vm.testText = 'Hello! You have successfully created a controller!';
		vm.hairTypes = {};
		DictatorFactory.getDictator()
		.success(function(data){
			console.log('The call has been made');
			vm.hairTypes = data;
		})
		.error(function(status){
			console.log(status);
		});
	}
})();