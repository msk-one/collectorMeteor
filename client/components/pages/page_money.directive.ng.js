angular.module('collectorApp')
    .directive('pageMoney', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/components/pages/page_money.view.ng.html',
            replace: true,
            controller: function($scope, $http, $state, $reactive) {
                $scope.entries = {};

                $http({method: 'GET', url: 'http://msk.mini.pw.edu.pl/collector/api/GetEntriesForUser/70/AndType/1'}).
                then(function(response) {
                    $scope.entries = response.data;
                }, function(response) {
                    $scope.entries = response.data || "Request failed";
                    console.log(response.status);
                });

            },
            controllerAs: "pageMoneyCtrl"
        };
});
