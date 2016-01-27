angular.module('collectorApp')
    .directive('controlSidebar', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/components/sidebar/control.view.ng.html',
            replace: true,
            controller: function($scope, $http) {
                $scope.propCategories = [
                    {
                        "cid": 1,
                        "cname": "TestCat1"
                    },
                    {
                        "cid": 2,
                        "cname": "TestCat22"
                    },
                    {
                        "cid": 3,
                        "cname": "TestCat333"
                    }
                ];

                
            },
            controllerAs: "sidebarControlCtrl"
        };
    });
