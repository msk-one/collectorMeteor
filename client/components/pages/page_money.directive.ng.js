angular.module('collectorApp')
    .directive('pageMoney', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/components/pages/page_money.view.ng.html',
            replace: true,
            controller: function($scope) {

            },
            controllerAs: "pageMoneyCtrl"
        };
});
