angular.module('collectorApp')
    .directive('pageObject', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/components/pages/page_object.view.ng.html',
            replace: true,
            controller: function($scope) {

            },
            controllerAs: "pageObjectCtrl"
        };
    });

