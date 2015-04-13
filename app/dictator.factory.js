(function() {

    angular.module('the-angulists').factory('DictatorFactory', DictatorFactory);

    function DictatorFactory($http) {
        var url = '[COME BACK]';
        var factory = {};
        factory.getDictators = function() {
            return $http.get(url);
        };
        factory.addDictator = function(dictator) {
            return $http.post(url, dictator);
        };
        factory.curIndex = 0;

        return factory;
    }

})();