(function(){
  angular
    .module('dictator')
    .controller('DictatorController', DictatorController);

    function DictatorController($location, DictatorFactory){
      var vm = this;
      vm.dictators = [];
      getDictator();

      function getDictator(){
        DictatorFactory.getDictator()
          .success(function(data){
            vm.dictators = data;
            console.log(vm.dictators);
          });
      }
    }

})();

//so does the dictator controller run when the html page containing the reference to dictator controller loads?
//
//