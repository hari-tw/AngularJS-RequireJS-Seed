define(["angular", "Q", "jquery",
  "app/services/services",
  "lib/libs",
  "app/directive/directives",
  "app/controller/controllers",
  "app/factory/factories",
  "angular-route",
  "angular-dynamic-locale"],
  function(angular, Q, $, services, libs, directives, controllers, factories) {
    var init = function() {
      var app = angular.module('ExampleApp', ["ngI18n", "ngRoute","tmh.dynamicLocale"]);
      services.init(app);
      libs.init(app);
      directives.init(app);
      controllers.init(app);
      factories.init(app);
      app.config(['$routeProvider','tmhDynamicLocaleProvider', function ($routeProvider,tmhDynamicLocaleProvider) {
        $routeProvider.
          when('/navigation', {templateUrl: './templates/navigation.html', controller: 'navigationController'}).
          when('/route1', {templateUrl: './templates/route1.html', controller: 'route1Controller'}).
          when('/route2', {templateUrl: './templates/route2.html', controller: 'route2Controller'}).
          otherwise({redirectTo: '/navigation'});
        tmhDynamicLocaleProvider.localeLocationPattern('js/bower_components/angular-i18n/angular-locale_{{locale}}-ca.js'); 
      }]);
      return app;
    };

    var bootstrap = function(app) {
      var deferred = Q.defer();
      var injector = angular.bootstrap($('#ExampleApp'), ['ExampleApp']);

      var tmhDynamicLocale = injector.get('tmhDynamicLocale');
      console.log(window.location.href.split('?')[1]);
      tmhDynamicLocale.set(window.location.href.split('?')[1]).then(function(){
         deferred.resolve([injector, app]);
      });

      return deferred.promise;

    }
    return  {init: init, bootstrap: bootstrap};
  });
