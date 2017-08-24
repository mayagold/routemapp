////////////////////////////////////////////////
//    ANGULAR SETUP
////////////////////////////////////////////////

const app = angular.module("routemapp", []);


app.controller('routeController', ['$http','$scope', function($http, $scope){
  const controller = this;
  this.routes = [];
  // this.loggedIn = false;
  // if no req.body aka no user logged or registered

  // this.login = function(){
  //   this.loggedIn = !this.loggedIn OR true;
  // }
  // this will be the function to hide stuff on page if not logged in -- if we go that route need ng-if in a section



  // sessions check
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
  this.checkAuth = function(){
      $http({
        method: 'POST',
        url: '/session/login',
        data: {
          username: this.loggedUsername,
          password: this.loggedPassword
        }
      }).then(
        function(response){
          console.log('---------- this is the login route response', response, '----------');
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






   // CRUD
   //
   // works
   this.getRoutes = function(){
      $http({
        method: 'GET',
        url: '/routes'
      }).then(
        function(response){
          // console.log(response.data);
          controller.routes = response.data
        },
        function(error){
          console.log(error);
        }
      );
    }

  // WORKS
  this.createRoute = function(){
      $http({
        method: 'POST',
        url: '/routes',
        data: {
          gpxFile: this.gpxFile,
          description: this.description,
          userData: this.loggedUsername
        }
      }).then(
        function(response){
          console.log('-------this is response.config.data-----', response.config.data);
          // controller.routes.push(response.config.data);
        },
        function(error){
        }
      );
      controller.getRoutes();
  }


  // works but not user specific
  this.deleteRoute = function(routes) {
      $http({
        method: 'DELETE',
        url: '/routes/' + routes._id,
      }).then(
        function(response){
          controller.getRoutes();
        },
        function(error){
        }
      );
  }

  // WORKS but not user specific
  this.editRoute = function(route){
    console.log('working');
    $http({
      method: 'PUT',
      url: '/routes/' + route._id,
      data: {
        description: controller.description,
      }
    }).then(
      function(response){
        route.description = controller.description;
        console.log(route);
        controller.getRoutes();
      },
      function(error){
        console.log(error);
      }
    );
  }

this.getRoutes();

$scope.createUploadDir = function() {
  $http({
    method: 'POST',
    url: '/upload',
    data: {
      size: 100000,
      type: 'text/plain',
      path: '~/upload/',
      basename: "WoodsideLk2Rock&RollHallofFame.gpx"
    }
  }).then(
    function(response){
      // route.description = controller.description;
      console.log(response);
      // controller.getRoutes();
    },
    function(error){
      console.log(error);
    }
  );
}

$scope.uploadFile = function(file) {
  $http({
    method: 'PUT',
    url: '/upload',
    data: {
        size: 100000,
        type: 'text/plain',
        path: '~/upload/',
        basename: file
      }
  }).then(
    function(response){
      // route.description = controller.description;
      console.log(response);
      // controller.getRoutes();
    },
    function(error){
      console.log(error);
    }
  );
}

$scope.fileNameChanged = function (ele) {
  // const files = ele.files;
  // var l = files.length;
  // var namesArr = [];
  //
  // for (var i = 0; i < l; i++) {
  //   namesArr.push(files[i].name);
  // }
  console.log('filename', ele.files[0].name)
  $scope.createUploadDir();
  // $scope.uploadFile(files[0].name);
}

this.showRoute = function (route) {
  console.log('showRoute', route);
  console.log('showRoute', route.gpxFile);
  showMap(route.gpxFile);
};



  this.getRoutes();

// end of controller
}]);
