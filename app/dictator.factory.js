(function() {

    angular.module('dictator').factory('DictatorFactory', DictatorFactory);

    function DictatorFactory($http) {

        var factory = {};

        factory.dictators = [];
        factory.hairtypes = [];
        factory.dictatorsAndHairType = {};
        factory.dictatorsAtWarAndHairType = {};
        factory.hairCount = {};
        factory.winningHairType = "";
        factory.winnerDictators = [];

        var url = 'https://project2-backend.herokuapp.com/api/dictators';

        factory.getDictator = function() {
            $http.get(url).success(function(data) {
              factory.dictators = data;
              setupHairCount();
              determineWinner();
              listDictatorsWithWinningHairType();
            });
        };
        factory.addDictator = function(dictator) {
            console.log("yo");
            console.log(dictator);
            $http.post(url, dictator).success(function() {
              factory.dictators.push(dictator);
              console.log("Dictator Added!");
            });
        };
        factory.curIndex = 0;

        //--------------------------------------------------------//

        function setupHairCount() {
          for (var i=0; i<factory.dictators.length; i++) {
            factory.dictatorsAndHairType[factory.dictators[i]["dictator_name"]] = factory.dictators[i]["facial_hair"];
            if (factory.dictators[i]["at_war"] === true) {
              factory.dictatorsAtWarAndHairType[factory.dictators[i]["dictator_name"]] = factory.dictators[i]["facial_hair"];
            }
          }
          for (var dictatorName in factory.dictatorsAndHairType) {
            if (factory.dictatorsAndHairType.hasOwnProperty(dictatorName) && factory.hairtypes.indexOf(factory.dictatorsAndHairType[dictatorName]) === -1 && factory.dictatorsAndHairType[dictatorName] !== "^)") {
                factory.hairtypes.push(factory.dictatorsAndHairType[dictatorName]);        
            }
          }
          for (var dictator_name in factory.dictatorsAtWarAndHairType) {
            if (factory.dictatorsAtWarAndHairType.hasOwnProperty(dictator_name) && !factory.hairCount.hasOwnProperty(factory.dictatorsAtWarAndHairType[dictator_name])) {
              factory.hairCount[factory.dictatorsAtWarAndHairType[dictator_name]] = 1;
            } else if (factory.dictatorsAtWarAndHairType.hasOwnProperty(dictator_name) && factory.hairCount.hasOwnProperty(factory.dictatorsAtWarAndHairType[dictator_name])) {
              factory.hairCount[factory.dictatorsAtWarAndHairType[dictator_name]] += 1;
            }
          }
        }

        function determineWinner() {
          var highCount = 0;
          var winner;
          for (var hair_type in factory.hairCount) {
            if (factory.hairCount.hasOwnProperty(hair_type) && factory.hairCount[hair_type] > highCount) {
              highCount = factory.hairCount[hair_type];
              winner = hair_type;
            }
          }
          factory.winningHairType = winner;

        }

        function listDictatorsWithWinningHairType() {
          for (var dictator in factory.dictatorsAndHairType) {
            if (factory.dictatorsAndHairType.hasOwnProperty(dictator) && factory.dictatorsAndHairType[dictator] === factory.winningHairType) {
              factory.winnerDictators.push(dictator);
            }
          }
        }

        return factory;
    };

})();