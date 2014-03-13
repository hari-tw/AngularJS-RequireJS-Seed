define(["underscore"], function(_) {
  return function ($scope, $location,tmhDynamicLocale) {

    $scope.data=0;
    $scope.someCurrency = 2000000;

    $scope.gotoRoute1 = function() {
      console.log("Going to route1");
      $location.path("/route1");
    };
    $scope.gotoRoute2 = function() {
      console.log("Going to route2");
      $location.path("/route2");
    };
  };
});
