(function () {
    "use strict";

    angular.module('jq.select2', [])

    .directive('jqSelect2', [function() {

        return {
            restrict: 'EA',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {

                scope.$watch(function() {
                    return $('option:selected', element).val();
                }, function(val) {
                    element.select2('val', val);
                });

                if(attrs.jqSelect2) {
                    element.select2(scope.$eval(attrs.jqSelect2));
                } else {
                    element.select2({
                        allowClear: true,
                        minimumResultsForSearch: 8
                    });
                }



            }
        };

    }]);

}());


