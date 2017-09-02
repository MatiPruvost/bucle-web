'use strict';

angular.module('bucleApp.texts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/texts', {
    templateUrl: 'texts/texts.html',
    controller: 'TextsCtrl'
  });
}])

.controller('TextsCtrl', [
  '$location',
  '$scope',
  '$window',
  'Poems',
  function($location, $scope, $window, Poems) {
    $window.scrollTo(0, 0);

    $scope.poems = Poems;

    $scope.goPoem = function (id) {
      $location.path('text/' + id);
    };
}]);
