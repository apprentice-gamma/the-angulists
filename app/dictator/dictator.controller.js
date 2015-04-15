(function(){
  angular
    .module('dictator')
    .controller('DictatorController', DictatorController);

    function DictatorController($location, DictatorFactory, dictatorService){
      var vm = this;
      vm.dictators = [];
      vm.hairDistribution = {};
      vm.hairCount = {};
      vm.winner;

      getDictator();

      function getDictator() {
        DictatorFactory.getDictator()
          .success(function(data){
            vm.dictators = data;
            setupHairCount();             //you couldn't call this on line 12 (right after getDictator() because it's asynchronous)
          });
      }

      function setupHairCount() {
        for (var i=0; i<vm.dictators.length; i++) {
          vm.hairDistribution[vm.dictators[i]["dictator_name"]] = vm.dictators[i]["facial_hair"];
        }
        for (var dictator_name in vm.hairDistribution) {
          if (vm.hairDistribution.hasOwnProperty(dictator_name) && !vm.hairCount.hasOwnProperty(vm.hairDistribution[dictator_name])) {
            vm.hairCount[vm.hairDistribution[dictator_name]] = 1;
          } else if (vm.hairDistribution.hasOwnProperty(dictator_name) && vm.hairCount.hasOwnProperty(vm.hairDistribution[dictator_name])) {
            vm.hairCount[vm.hairDistribution[dictator_name]] += 1;
          }
        }
        determineWinner();
      }

      function determineWinner() {
        var highCount = 0;
        var winner;
        for (var hair_type in vm.hairCount) {
          if (vm.hairCount.hasOwnProperty(hair_type) && vm.hairCount[hair_type] > highCount) {
            highCount = vm.hairCount[hair_type];
            winner = hair_type
          }
        }
        vm.winner = winner;
      }
    };

})();

//so does the dictator controller run when the html page containing the reference to dictator controller loads?
//is ng-view magic?
//
