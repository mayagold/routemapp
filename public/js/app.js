const app = angular.module("routemapp", []);
app.controller('routeController', ['$http', '$scope', function($http, $scope){
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
  const controller = this;
  this.routes = [];
  this.loggedIn = false;
  this.login = function(){
    this.loggedIn = true;
  }
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
          controller.login();
        },
        function(error){
        }
      );
  }
  this.checkAuth = function(){
    console.log('top of login');
      $http({
        method: 'POST',
        url: '/session/login',
        data: {
          username: this.loggedUsername,
          password: this.loggedPassword
        }
      }).then(
        function(response){
          controller.username = response.data
        },
        function(error){
          console.log(error);
        }
      );
  }
   this.getRoutes = function(){
      $http({
        method: 'GET',
        url: '/routes'
      }).then(
        function(response){
          controller.routes = response.data
        },
        function(error){
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
        }
      }).then(
        function(response){
          console.log('-------this is response.config.data-----', response.config.data);

        },
        function(error){
        }
      );
      controller.getRoutes();
  }
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
