angular.module('collectorApp')
    .directive('toolbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
            replace: true,
            controller: function ($scope, $state) {
                $scope.redirectMain = function () {
                    $state.go('main');
                    location.reload();
                };

                $scope.redirectProfile = function () {
                    $state.go('profile');
                    location.reload();
                };
            },
            controllerAs: "toolbarCtrl"
        };
    });