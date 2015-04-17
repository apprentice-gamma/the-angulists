(function() {

    angular.module('dictator').factory('MessagesFactory', MessagesFactory);

    function MessagesFactory($http) {

        var messages = {};
        messages.greeting = 'Hello and welcome!';
        messages.badguess = 'Oops!';
       

})();