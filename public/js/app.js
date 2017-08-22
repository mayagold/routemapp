////////////////////////////////////////////////
//    ANGULAR SETUP
////////////////////////////////////////////////

const app = angular.module("routemapp", []);


app.controller('routeController', ['$http', function($http){
  const controller = this;
  this.test = 'Motorcycle Route App: This is the index page and Angular is working'
  this.routes = "";

this.checkRegister = function(username, password){
    $http({
      method: 'POST',
      url: '/session/registration',
      data: {
        username: this.registeredUsername,
        password: this.registeredPassword
      }
    }).then(
      function(response){
        console.log(response);
        // controller.User.create();
      },
      function(error){

      }
    );

}
 // this.checkRegister('test', 'Samantha9');

this.checkAuth = function(username, password){
    $http({
      method: 'POST',
      url: '/session/login',
      data: {
        username: username,
        password: password
      }
    }).then(
      function(response){
        // console.log('---------- this is the login route response', response, '----------');
        controller.username = response.data
      },
      function(error){
        console.log(error);
      }
    );
}
 // this.checkAuth();

this.getRoutes = function(){
    $http({
      method: 'GET',
      url: '/routes'
    }).then(
      function(response){
        console.log(controller);
        // console.log('--------------', response.data, '--------------');
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
  console.log(this.updateRoute);
  console.log(req.session);
  $http({
    method: 'PUT',
    url: '/routes/' + routes._id,
    data: {
      gpxFile: this.gpxFile,
      comments: this.updateRoute,
      userData: this.userData  //not sure about this .. if we use, add comma above
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
