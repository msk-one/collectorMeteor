angular.module('collectorApp')
    .directive('controlSidebar', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/components/sidebar/control.view.ng.html',
            replace: true,
            controller: function($scope, $http, $reactive, $state) {
                $reactive(this).attach($scope);

                $scope.redirectAbout = function () {
                    $state.go('about');
                    location.reload();
                };

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

                $scope.nCat = {
                    cid: '',
                    cname: ''
                };

                $scope.addCategory = function() {
                    $scope.propCategories.push($scope.nCat);
                    $scope.nCat = {};
                };

                $scope.removeCategory = function(ctr) {
                    var index = $scope.propCategories.indexOf(ctr);
                    $scope.propCategories.splice(index, 1);
                };
            },
            controllerAs: "sidebarControlCtrl"
        };
    });
