(function(){
  var app = angular.module('CardsAgainstAssembly');
  app.component('navigation', {
    bindings: {
      madeWith: '@'
    },
    controller: function() {

    },
    template: `
    <nav class="tabs">
      <a href="#/">Home</a>
      <a href="#/new">Add a New Card</a>
      <a href="#/about">About</a>
    </nav>
    `
  });
})();
