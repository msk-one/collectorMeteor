angular.module('collectorApp')
    .directive('pageObject', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/components/pages/page_object.view.ng.html',
            replace: true,
            controller: function($scope, $http, $state, $reactive) {
                $scope.entries = {};

                $scope.desiredCat = "14";

                $scope.showObjects = function (type) {
                    $http({
                        method: 'GET',
                        url: 'http://msk.mini.pw.edu.pl/collector/api/GetEntriesForUser/' + Session.get('uid') + '/AndType/'+$scope.getFinalType(type)+'/AndObjCategory/'+$scope.desiredCat
                    }).then(function (response) {
                        $scope.entries = response.data;
                    }, function (response) {
                        $scope.entries = response.data || "Request failed";
                        console.log(response.status);
                    });
                };

                $scope.toAddNewObjectEntry = function(type) {
                    var fintype;
                    if (type === true) {
                        fintype = 1;
                    }
                    else {
                        fintype = 2;
                    }
                    $state.go('addObj', {type: fintype});
                    location.reload();
                };

                //if($scope.showBMoney == true) {
                //    $http({
                //        method: 'GET',
                //        url: 'http://msk.mini.pw.edu.pl/collector/api/GetEntriesForUser/' + Session.get('uid') + '/AndType/1/AndObjCategory/29'
                //    }).then(function (response) {
                //        $scope.entries = response.data;
                //    }, function (response) {
                //        $scope.entries = response.data || "Request failed";
                //        console.log(response.status);
                //    });
                //} else {
                //    $http({
                //        method: 'GET',
                //        url: 'http://msk.mini.pw.edu.pl/collector/api/GetEntriesForUser/' + Session.get('uid') + '/AndType/2/AndObjCategory/29'
                //    }).then(function (response) {
                //        $scope.entries = response.data;
                //    }, function (response) {
                //        $scope.entries = response.data || "Request failed";
                //        console.log(response.status);
                //    });
                //}
            },
            controllerAs: "pageObjectCtrl"
        };
    });

