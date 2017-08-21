////////////////////////////////////////////////
//    ANGULAR SETUP
////////////////////////////////////////////////

const app = angular.module("routemapp", []);


app.controller('routeController', ['$http', function($http){
  const controller = this;
  this.test = 'Motorcycle Route App: This is the index page and Angular is working'
  this.routes = "";

this.getRoutes = function(){
    $http({
      method: 'GET',
      url: '/routes'
    }).then(
      function(response){
        console.log(controller);
        console.log('--------------', response.data, '--------------');
        controller.routes = response.data
      },
      function(error){

      }
    );
}
this.createRoute = function(){
    $http({
      method: 'POST',
      url: '/routes',
      data: {
        gpxFile: this.gpxFile,
        comments: this.comments,
        userData: this.userData
      }
    }).then(
      function(response){
        controller.getRoutes();
        //this is what will make it show on page w/o refresh
      },
      function(error){

      }
    );
}
this.editRoute = function(routes){
  $http({
    method: 'PUT',
    url: '/routes/' + routes._id,
    data: {
      gpxFile: this.gpxFile,
      comments: this.comments
      // userData: this.userData  //not sure about this .. if we use, add comma above
      // req.session.logged = true ...statement
    }
  }).then(
    function(response){
      controller.getRoutes();
    },
    function(error){

    }
  );
}
this.deleteRoute = function(routes){
  console.log(routes);
  $http({
    method: 'DELETE',
    url: '/routes/' + routes._id
  }).then(
    function(response){
      controller.getRoutes();
    },
    function(error){

    }
  );
}
this.getRoutes();





// end of controller
}]);
