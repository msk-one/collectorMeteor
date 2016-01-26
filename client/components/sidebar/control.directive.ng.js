angular.module('collectorApp')
    .directive('controlSidebar', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/components/sidebar/control.view.ng.html',
            replace: true,
            controller: function($scope) {

            },
            controllerAs: "sidebarControlCtrl"
        };
    });
