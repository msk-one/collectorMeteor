angular.module('collectorApp')
    .directive('mainSidebar', function () {
        return {
            restrict: 'E',
            templateUrl: 'client/components/sidebar/main.view.ng.html',
            replace: true,
            controller: function ($scope, $state) {
                $scope.showBMoney = false;
                $scope.showBObject = false;
                $scope.showLMoney = false;
                $scope.showLObject = false;

                $scope.showBorrowedObjects = function () {
                    $scope.showBMoney=false;
                    $scope.showBObject=true;
                    $scope.showLMoney=false;
                    $scope.showLObject=false;
                };

                $scope.showLendObjects = function () {
                    $scope.showBMoney=false;
                    $scope.showBObject=false;
                    $scope.showLMoney=false;
                    $scope.showLObject=true;
                };
            },
            controllerAs: "sidebarMainCtrl"
        };
    });
