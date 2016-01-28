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
                    cname: ''
                };

                $scope.ReturnCat = {
                    cid: '',
                    cname: '',
                    "Objects": ''
                };

                $scope.addCategory = function() {

                    $http.post('http://msk.mini.pw.edu.pl/collector/api/Categories', $scope.nCat,{
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}

                    }).
                    success(
                        function(ReturnCat, status, headers, config) {

                            $scope.categories.push(ReturnCat);
                        }).error(function(ReturnCat, status, headers, config) {
                        console.log(ReturnCat.cid);
                    });

                    $scope.nCat = {};
                };







                $scope.removeCategory = function(ctr) {
                    var index = $scope.categories.indexOf(ctr);


                    $http.delete('http://msk.mini.pw.edu.pl/collector/api/Categories/' +  ctr.cid,"",{
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}

                    }).
                    success(
                        function(status, headers, config) {
                            $scope.categories.splice(index, 1);
                        }).error(function(ReturnCat, status, headers, config) {
                        console.log(ReturnCat.cid);
                    });



                };
            },
            controllerAs: "sidebarControlCtrl"
        };
    });
