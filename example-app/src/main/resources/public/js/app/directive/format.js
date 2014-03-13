define([], function() {
	return function ($filter) {
		 return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            element.change(function() {
                var formattedModel = $filter('currency')(scope.data);
                    element.val(formattedModel);
            });
           
        }
    };
	};
});
