(function(){
  var app = angular.module('CardsAgainstAssembly');
  app.service('CardService', function($http){
    this.getCards = function(callback){
      $http({
        method:'GET',
        url: '/cards'
      }).then(function successCallback(response){
        console.log('response.data',response.data);
        callback(response.data);
      }, function errorCallback(error){
        console.log('Error: ', error);
      });
    }
    this.save = function(question, callback){
      $http({
        method:'POST',
        url: '/cards',
        data: {
          question: question
        }
      }).then(function successCallback(response){
        console.log('response.data',response.data);
        callback(response.data);
      }, function errorCallback(error){
        console.log('Error: ', error);
      });
    }
  });
})();
