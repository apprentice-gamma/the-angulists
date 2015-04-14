(function(){
  angular
    .module('dictator')
    .controller('DictatorController', DictatorController);

    function DictatorController($location, DictatorFactory, dictatorService){
      var vm = this;
      vm.dictators = [];
      console.log("YO");
      console.log(dictatorService.testV);

      getDictator();

      function getDictator(){
        DictatorFactory.getDictator()
          .success(function(data){
            vm.dictators = data;
            console.log(vm.dictators);
          });
      }
    };

})();

//so does the dictator controller run when the html page containing the reference to dictator controller loads?
//is ng-view magic?
//