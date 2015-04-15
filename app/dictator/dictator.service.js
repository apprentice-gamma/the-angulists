(function(){
  angular
    .module('dictator')
    .service('dictatorService', dictatorService);

    function dictatorService() {
      this.testV = "YOYOYO";

    }; 
})();

//what do i need this service to do?
// 1) Filter out the dictators we don't need based on mustaches
// 2) Calculate the winning dictator
// 3) 
//
//