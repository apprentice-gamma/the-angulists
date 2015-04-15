(function(){
  angular
    .module('dictator')
    .controller('DictatorController', DictatorController);

    function DictatorController($location, DictatorFactory, dictatorService){
      var vm = this;
      vm.dictators = [];
      vm.dictatorsAndHairType = {};
      vm.dictatorsAtWarAndHairType = {};
      vm.hairCount = {};
      vm.winner = {};
      vm.message = '';
      vm.messages = {
        failedToGuess: 'You have exceeded your allowed guesses. Here is the answer:'
      };
      vm.guessCount = 0;
      vm.guessCounter = function(){
        vm.message = '';
        if(vm.guessCount < 2){
          vm.guessCount++;
        } else {
          vm.failedToGuess();
        }};
      vm.failedToGuess = function(){
        vm.guessCount = 0;
        vm.message = vm.messages.failedToGuess;
      };

      vm.winner;
      vm.winnerDictators = [];

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
          vm.dictatorsAndHairType[vm.dictators[i]["dictator_name"]] = vm.dictators[i]["facial_hair"];
          if (vm.dictators[i]["at_war"] === true) {
            vm.dictatorsAtWarAndHairType[vm.dictators[i]["dictator_name"]] = vm.dictators[i]["facial_hair"];
          }
        }
        for (var dictator_name in vm.dictatorsAtWarAndHairType) {
          if (vm.dictatorsAtWarAndHairType.hasOwnProperty(dictator_name) && !vm.hairCount.hasOwnProperty(vm.dictatorsAtWarAndHairType[dictator_name])) {
            vm.hairCount[vm.dictatorsAtWarAndHairType[dictator_name]] = 1;
          } else if (vm.dictatorsAtWarAndHairType.hasOwnProperty(dictator_name) && vm.hairCount.hasOwnProperty(vm.dictatorsAtWarAndHairType[dictator_name])) {
            vm.hairCount[vm.dictatorsAtWarAndHairType[dictator_name]] += 1;
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
        listDictatorsWithWinningHairType();
      }

      function listDictatorsWithWinningHairType() {
        for (var dictator in vm.dictatorsAndHairType) {
          if (vm.dictatorsAndHairType.hasOwnProperty(dictator) && vm.dictatorsAndHairType[dictator] === vm.winner) {
            vm.winnerDictators.push(dictator);
          }
        }
      }

    };


})();

//so does the dictator controller run when the html page containing the reference to dictator controller loads?
//is ng-view magic?
//
