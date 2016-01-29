angular.module('collectorApp')
    .directive('pageMoney', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/components/pages/page_money.view.ng.html',
            replace: true,
            controller: function($scope, $http, $state, $reactive) {
                $scope.entries = {};

                $scope.toAddNewMoneyEntry = function(type) {
                    var fintype;
                    if (type === true) {
                        fintype = 1;
                    }
                    else {
                        fintype = 2;
                    }
                    $state.go('addMon', {type: fintype});
                    location.reload();
                };

                $scope.toEditMoneyEntry = function(entry) {
                    $state.go('editMon', {id: entry.id});
                    location.reload();
                };

                $scope.toRemoveMoneyEntry = function(entry) {

                };

                $scope.getFinalType = function(typeB) {
                    if (typeB === true) {
                        return 1;
                    }
                    else {
                        return 2;
                    }
                };

                $scope.showBorrowedMoney = function() {
                    $scope.showBMoney=true;
                    $scope.showBObject=false;
                    $scope.showLMoney=false;
                    $scope.showLObject=false;

                    $http({method: 'GET', url: 'http://msk.mini.pw.edu.pl/collector/api/GetEntriesMoneyForUser/'+ Session.get('uid') +'/AndType/'+$scope.getFinalType($scope.showBMoney)}).
                    then(function(response) {
                        $scope.entries = response.data;
                    }, function(response) {
                        $scope.entries = response.data || "Request failed";
                        console.log(response.status);
                    });
                };

                $scope.showLendMoney = function () {
                    $scope.showBMoney=false;
                    $scope.showBObject=false;
                    $scope.showLMoney=true;
                    $scope.showLObject=false;

                    $http({method: 'GET', url: 'http://msk.mini.pw.edu.pl/collector/api/GetEntriesMoneyForUser/'+ Session.get('uid') +'/AndType/'+$scope.getFinalType($scope.showBMoney)}).
                    then(function(response) {
                        $scope.entries = response.data;
                    }, function(response) {
                        $scope.entries = response.data || "Request failed";
                        console.log(response.status);
                    });
                };
            },
            controllerAs: "pageMoneyCtrl"
        };
});
