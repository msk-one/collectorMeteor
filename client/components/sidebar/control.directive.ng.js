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

                $scope.categories = [];

                $http({method: 'GET', url: 'http://msk.mini.pw.edu.pl/collector/api/Categories'}).
                    then(function(response) {
                        $scope.categories = response.data;
                    }, function(response) {
                        $scope.categories = response.data || "Request failed";
                        console.log(response.status);
                });

                //$http.get('http://msk.mini.pw.edu.pl/collector/api/Categories').success(function(data) {
                //    $scope.categories = data;
                //});

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
                    //var data = $.param({
                    //    json: JSON.stringify({
                    //        cname: $scope.nCat.cname
                    //    })
                    //});
                    //$http.post("http://msk.mini.pw.edu.pl/collector/api/Categories", data).success(function(data, status) {
                    //    $scope.hello = data;
                    //})
                    $http({method: 'POST', url: 'http://msk.mini.pw.edu.pl/collector/api/Categories', data: $scope.nCat, headers: {
                        'Content-Type': 'application/json'
                    }}).
                    then(function(response) {
                        $scope.categories.push($scope.nCat);
                    }, function(response) {
                        console.log(response.status);
                    });

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
