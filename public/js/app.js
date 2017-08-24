const app = angular.module("routemapp", []);
app.controller('routeController', ['$http', '$scope', function($http, $scope){
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
  const controller = this;
  this.routes = [];
  this.loggedIn = false;
  // if no req.body aka no user logged or registered
  this.login = function(){
    this.loggedIn = true;
  }
  // !this.loggedIn
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
          controller.login();
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
          controller.login();
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
        details: controller.details
      }
    }).then(
      function(response){
        route.description = controller.description;
        route.details = controller.details;
        console.log(route);
        controller.login();
        controller.getRoutes();
      },
      function(error){
        console.log(error);
      }
    );
  }
this.getRoutes();
this.showRoute = function (route) {
  console.log('showRoute', route);
  console.log('showRoute', route.gpxFile);
  showMap(route.gpxFile);
};
  this.getRoutes();
// end of controller
}]);
app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
      template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});
