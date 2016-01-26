angular.module('collectorApp')
    .directive('page', function() {
        return {
            restrict: 'AE',
            templateUrl: 'client/components/pages/page.view.ng.html',
            replace: true,
            controller: function($scope) {

            },
            controllerAs: "pageCtrl"
        };
});
