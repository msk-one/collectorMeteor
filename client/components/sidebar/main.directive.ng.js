angular.module('collectorApp')
    .directive('mainSidebar', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/components/sidebar/main.view.ng.html',
            replace: true,
            controller: function($scope) {

            },
            controllerAs: "sidebarMainCtrl"
        };
    });
