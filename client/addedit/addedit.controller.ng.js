angular.module('collectorApp')
    .controller('addMonCtrl', function ($scope, $http, $state, $reactive) {
        $scope.currencies = {};

        $http({method: 'GET', url: 'http://msk.mini.pw.edu.pl/collector/api/Currencies'}).then(function (response) {
            $scope.currencies = response.data;
        }, function (response) {
            $scope.currencies = response.data || "Request failed";
            console.log(response.status);
        });

        $scope.newMEntry = {
            typeid: '1',
            title: '',
            date: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
            descr: '',
            who: '',
            amount: 0,
            priority: '0',
            deadline: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
            archived: 0,
            userid: Session.get('uid'),
            currencyid: '1'
        };

        $scope.addEditMoneyEntry = function (type) {
            var splitter = $scope.newMEntry.deadline.split(' - ');
            $scope.newMEntry.date = splitter[0];
            $scope.newMEntry.deadline = splitter[1];

            $http.post('http://msk.mini.pw.edu.pl/collector/api/Entries', $scope.newMEntry,{
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).
            success(
                function(ReturnCat, status, headers, config) {
                    console.log("added");
                }).error(function(ReturnCat, status, headers, config) {
                    console.log("Error!");
            });

            $scope.newMEntry = {
                typeid: '1',
                title: '',
                date: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
                descr: '',
                who: '',
                amount: 0,
                priority: '0',
                deadline: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
                archived: 0,
                userid: Session.get('uid'),
                currencyid: '2'
            };

            $state.go('main');
            location.reload();
        };
    });

angular.module('collectorApp')
    .controller('editMonCtrl', function ($scope, $http, $state, $reactive, $stateParams) {
        $scope.currencies = {};

        $http({method: 'GET', url: 'http://msk.mini.pw.edu.pl/collector/api/Currencies'}).then(function (response) {
            $scope.currencies = response.data;
        }, function (response) {
            $scope.currencies = response.data || "Request failed";
            console.log(response.status);
        });

        $scope.newMEntry = {};

        $http({method: 'GET', url: 'http://msk.mini.pw.edu.pl/collector/api/Entries/'+$stateParams.id}).then(function (response) {
            $scope.newMEntry = response.data;
            $scope.newMEntry.currencyid = $scope.newMEntry.currencyid.toString();
            $scope.newMEntry.typeid = $scope.newMEntry.typeid.toString();
            $scope.newMEntry.priority = $scope.newMEntry.priority.toString();
            $scope.newMEntry.deadline = $scope.newMEntry.date + ' - ' + $scope.newMEntry.deadline;
        }, function (response) {
            $scope.newMEntry = response.data || "Request failed";
            console.log(response.status);
        });

        $scope.addEditMoneyEntry = function (type) {
            var splitter = $scope.newMEntry.deadline.split(' - ');
            $scope.newMEntry.date = splitter[0];
            $scope.newMEntry.deadline = splitter[1];

            $http.put('http://msk.mini.pw.edu.pl/collector/api/Entries/'+$stateParams.id, $scope.newMEntry,{
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).
            success(
                function(ReturnCat, status, headers, config) {
                    console.log("added");
                }).error(function(ReturnCat, status, headers, config) {
                    console.log("Error!");
            });

            $scope.newMEntry = {
                typeid: '1',
                title: '',
                date: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
                descr: '',
                who: '',
                amount: 0,
                priority: '0',
                deadline: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
                archived: 0,
                userid: Session.get('uid'),
                currencyid: '2'
            };

            $state.go('main');
            location.reload();
        };
    });


angular.module('collectorApp')
    .controller('addObjCtrl', function ($scope, $http, $state, $reactive) {
        $scope.newObject = {
            name: '',
            catid: '14',
            quantity: 1
        };

        $scope.newOEntry = {
            typeid: '1',
            title: '',
            date: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
            descr: '',
            who: '',
            objectid: '38',
            priority: '0',
            deadline: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
            archived: 0,
            userid: Session.get('uid')
        };

        $scope.addEditObjectEntry = function (type) {
            var splitter = $scope.newOEntry.deadline.split(' - ');
            $scope.newOEntry.date = splitter[0];
            $scope.newOEntry.deadline = splitter[1];

            $http.post('http://msk.mini.pw.edu.pl/collector/api/Objects', $scope.newObject,{
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).
            success(
                function(ReturnCat, status, headers, config) {
                    console.log("obj added");
                }).error(function(ReturnCat, status, headers, config) {
                    console.log("Error!");
            });

            $http.post('http://msk.mini.pw.edu.pl/collector/api/Entries', $scope.newOEntry,{
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).
            success(
                function(ReturnCat, status, headers, config) {
                    console.log("added");
                }).error(function(ReturnCat, status, headers, config) {
                console.log("Error!");
            });

            $scope.newObject = {
                name: '',
                catid: '14',
                quantity: 1
            };

            $scope.newOEntry = {
                typeid: '1',
                title: '',
                date: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
                descr: '',
                who: '',
                objectid: '38',
                priority: '0',
                deadline: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
                archived: 0,
                userid: Session.get('uid')
            };

            $state.go('main');
            location.reload();
        };
    });

angular.module('collectorApp')
    .controller('editObjCtrl', function ($scope, $http, $state, $reactive, $stateParams) {
        $scope.newObject = {
            name: '',
            catid: '14',
            quantity: 1
        };

        $scope.newOEntry = {
            typeid: '1',
            title: '',
            date: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
            descr: '',
            who: '',
            objectid: '38',
            priority: '0',
            deadline: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
            archived: 0,
            userid: Session.get('uid')
        };

        $http({method: 'GET', url: 'http://msk.mini.pw.edu.pl/collector/api/Entries/'+$stateParams.id}).then(function (response) {
            $scope.newOEntry = response.data;
            $scope.newOEntry.objectid = $scope.newOEntry.objectid.toString();
            $scope.newOEntry.typeid = $scope.newOEntry.typeid.toString();
            $scope.newOEntry.priority = $scope.newOEntry.priority.toString();
            $scope.newOEntry.deadline = $scope.newOEntry.date + ' - ' + $scope.newOEntry.deadline;

            $http({method: 'GET', url: 'http://msk.mini.pw.edu.pl/collector/api/Objects/'+$scope.newOEntry.objectid}).then(function (response) {
                $scope.newObject = response.data;
            }, function (response) {
                $scope.newObject = response.data || "Request failed";
                console.log(response.status);
            });

        }, function (response) {
            $scope.newOEntry = response.data || "Request failed";
            console.log(response.status);
        });

        $scope.addEditObjectEntry = function (type) {
            var splitter = $scope.newOEntry.deadline.split(' - ');
            $scope.newOEntry.date = splitter[0];
            $scope.newOEntry.deadline = splitter[1];

            $http.put('http://msk.mini.pw.edu.pl/collector/api/Objects', $scope.newObject,{
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).
            success(
                function(ReturnCat, status, headers, config) {
                    console.log("obj added");
                }).error(function(ReturnCat, status, headers, config) {
                console.log("Error!");
            });

            $http.put('http://msk.mini.pw.edu.pl/collector/api/Entries', $scope.newOEntry,{
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).
            success(
                function(ReturnCat, status, headers, config) {
                    console.log("added");
                }).error(function(ReturnCat, status, headers, config) {
                console.log("Error!");
            });

            $scope.newObject = {
                name: '',
                catid: '14',
                quantity: 1
            };

            $scope.newOEntry = {
                typeid: '1',
                title: '',
                date: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
                descr: '',
                who: '',
                objectid: '38',
                priority: '0',
                deadline: '01/30/2016 12:00:00 - 01/31/2016 12:00:00',
                archived: 0,
                userid: Session.get('uid')
            };

            $state.go('main');
            location.reload();
        };
    });