angular.module('collectorApp')
    .directive('pageObject', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/components/pages/page_object.view.ng.html',
            replace: true,
            controller: function($scope, $http, $state, $reactive) {
                $scope.entries = {};

                if($scope.showBMoney == true) {
                    $http({
                        method: 'GET',
                        url: 'http://msk.mini.pw.edu.pl/collector/api/GetEntriesForUser/70/AndType/1/AndObjCategory/29'
                    }).then(function (response) {
                        $scope.entries = response.data;
                    }, function (response) {
                        $scope.entries = response.data || "Request failed";
                        console.log(response.status);
                    });
                } else {
                    $http({
                        method: 'GET',
                        url: 'http://msk.mini.pw.edu.pl/collector/api/GetEntriesForUser/70/AndType/2/AndObjCategory/29'
                    }).then(function (response) {
                        $scope.entries = response.data;
                    }, function (response) {
                        $scope.entries = response.data || "Request failed";
                        console.log(response.status);
                    });
                }
            },
            controllerAs: "pageObjectCtrl"
        };
    });

