(function(){
  angular
    .module('dictator')
    .controller('DictatorController', DictatorController);

    function DictatorController($location, DictatorFactory, dictatorService){
      var vm = this;
      vm.dictators = [];
      vm.hairtypes = [];

      getDictator();

      function getDictator() {
        DictatorFactory.getDictator()
          .success(function(data){
            vm.dictators = data;
            getHairTypes();             //you couldn't call this on line 12 (right after getDictator() because it's asynchronous)
          });
      }

      function getHairTypes() {
        console.log(vm.dictators.length);
        for (var i=0; i<=vm.dictators.length; i++) {
          vm.hairtypes.push(vm.dictators[i]["facial_hair"])
        }
      }



    };

})();

//so does the dictator controller run when the html page containing the reference to dictator controller loads?
//is ng-view magic?
//
