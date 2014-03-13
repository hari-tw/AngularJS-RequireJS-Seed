define(["directive1","format"], function (exampleDirective,formatDirective) {
  var init = function (app) {
    app.directive('phone', [exampleDirective]);
    app.directive('currencyField', ['$filter',formatDirective]);
    console.log('initialising directives');
  };
  return {init: init};
});