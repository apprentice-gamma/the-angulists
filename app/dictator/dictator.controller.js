(function(){
  angular
    .module('dictator')
    .controller('DictatorController', DictatorController);

    function DictatorController($location, DictatorFactory) {
      var vm = this;
      vm.addDictator = addDictator;
      vm.checkUserChoice = checkUserChoice;
      vm.didTheyGetItRight; 

      vm.DictatorFactory = DictatorFactory; 
      // vm.hairtypes = DictatorFactory.hairtypes;
      // vm.dictatorsAndHairType = DictatorFactory.dictatorsAndHairType;
      // vm.dictatorsAtWarAndHairType = DictatorFactory.dictatorsAtWarAndHairType;
      // vm.hairCount = DictatorFactory.hairCount;
      // vm.winningHairType = DictatorFactory.winningHairType;
      // vm.winnerDictators = DictatorFactory.winnerDictators;

      //understand the above later
      
      vm.guessCount = 0;

      getDictator();

      function getDictator() { DictatorFactory.getDictator() };

      function addDictator(dictator) { 
        if (dictator.hasOwnProperty("at_war")) {
          DictatorFactory.addDictator(dictator);
          $location.path('/');
        } else {
          dictator.at_war = true;
          DictatorFactory.addDictator(dictator); 
          $location.path('/');
        }
      };

      function goToAddDictator() {
        $location.path('/add');
      }

      function checkUserChoice(choice) {
        if (choice === vm.DictatorFactory.winningHairType) {
          vm.didTheyGetItRight = "RIGHT!";
          $location.path('/result'); 
        } else {
          if (vm.guessCount < 2) {
            vm.guessCount++;
          } else {
            vm.guessCount = 0;
            vm.didTheyGetItRight = "WRONG!";
            $location.path('/result');
          }
        }
      }

    };


})();

//so does the dictator controller run when the html page containing the reference to dictator controller loads?
//is ng-view magic?
//
