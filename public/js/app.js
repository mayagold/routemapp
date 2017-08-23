////////////////////////////////////////////////
//    ANGULAR SETUP
////////////////////////////////////////////////

const app = angular.module("routemapp", []);


app.controller('routeController', ['$http', function($http){
  const controller = this;
  this.test = 'Motorcycle Route App: This is the index page and Angular is working'
  this.routes = "";
  // this.loggedIn = false;
  // if no req.body aka no user logged or registered

  // this.login = function(){
  //   this.loggedIn = !this.loggedIn OR true;
  // }
  // this will be the function to hide stuff on page if not logged in -- if we go that route need ng-if in a section

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
        console.log('response ===========', response);
        console.log('!!!!!!!!!!!!!!!!!!!', response.config.data);
        // controller.login();
        // // this calls the logged in ng-if to show the data we want IF REGISTERED
        // controller.username = '',
        // controller.password = ''
        // // resets forms to blank
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
        username: this.loggedUsername,
        password: this.loggedPassword
      }
    }).then(
      function(response){
        // console.log('---------- this is the login route response', response, '----------');
        controller.username = response.data
        // controller.login();
        // this calls the logged in ng-if to show the data we want IF REGISTERED
        // controller.username = '',
        // controller.password = ''
        // resets forms to blank
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
        userData: this.loggedUsername
      }
    }).then(
      function(response){
        console.log('-------this is data-----', response);
        console.log(routes);
        controller.getRoutes();
        //this is what will make it show on page w/o refresh

      },
      function(error){

      }
    );
}
this.editRoute = function(routes){
  console.log('********* editRoute *******', this.updateRoute);
  console.log(routes);
  // console.log(req.session);
if (routes.userData[0].username === this.loggedUsername) {
  console.log('****** I am inside the If statement edit route ********');
  console.log(routes.userData[0].username);
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
      console.log('!!!!!!!!!!!!!!!!!!!', response.config.data);
      routes.comments = controller.updateRoute
      console.log(routes);
      controller.getRoutes();
    },
    function(error){

    }
  );
  } else {
    controller.editMessage = 'Sorry, you cannot edit this comment'
  }

}
this.deleteRoute = function(routes){
  console.log(routes);
  if (routes.userData[0].username === this.loggedUsername) {
    $http({
      method: 'DELETE',
      url: '/routes/' + routes._id,
      data: {
        gpxFile: this.gpxFile,
        comments: this.updateRoute,
        userData: this.userData
      }
    }).then(
      function(response){
        controller.getRoutes();
      },
      function(error){

      }
    );
  } else {
    controller.editMessage = 'Sorry, you cannot delete this comment'
  }
}
this.getRoutes();





// end of controller
}]);
