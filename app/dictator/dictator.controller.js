(function(){
  angular
    .module('dictator')
    .controller('DictatorController', DictatorController);

    function DictatorController($location, DictatorFactory){
      var vm = this;

      vm.DictatorFactory = DictatorFactory; 
      // vm.hairtypes = DictatorFactory.hairtypes;
      // vm.dictatorsAndHairType = DictatorFactory.dictatorsAndHairType;
      // vm.dictatorsAtWarAndHairType = DictatorFactory.dictatorsAtWarAndHairType;
      // vm.hairCount = DictatorFactory.hairCount;
      // vm.winningHairType = DictatorFactory.winningHairType;
      // vm.winnerDictators = DictatorFactory.winnerDictators;

      //understand the above later

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


      getDictator();

      function getDictator() { DictatorFactory.getDictator() };

    };


})();

//so does the dictator controller run when the html page containing the reference to dictator controller loads?
//is ng-view magic?
//
