(function() {

    angular.module('dictator').factory('DictatorFactory', DictatorFactory);

    function DictatorFactory($http) {
        var url = './json/demo-data.json';
        var factory = {};
        factory.getDictator = function() {
            return $http.get(url);
        };
        factory.addDictator = function(dictator) {
            return $http.post(url, dictator);
        };
        factory.curIndex = 0;

        return factory;
    };

})();