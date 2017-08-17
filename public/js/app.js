////////////////////////////////////////////////
//    ANGULAR SETUP
////////////////////////////////////////////////

const app = angular.module("routemapp", []);

app.controller('testController', ['$http', function($http){
  this.test = 'Motorcycle Route App: This is the index page and Angular is working'
}])
