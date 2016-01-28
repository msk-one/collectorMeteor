angular.module('collectorApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('addObj', {
                url: '/add/object/:type',
                templateUrl: 'client/addedit/addeditO.view.ng.html',
                controller: 'addObjCtrl'
            })
            .state('addMon', {
                url: '/add/money/:type',
                templateUrl: 'client/addedit/addeditM.view.ng.html',
                controller: 'addMonCtrl'
            })
            .state('editObj', {
                url: '/edit/object/:id',
                templateUrl: 'client/addedit/addeditO.view.ng.html',
                controller: 'editObjCtrl'
            })
            .state('editMon', {
                url: '/edit/money/:id',
                templateUrl: 'client/addedit/addeditM.view.ng.html',
                controller: 'editMonCtrl'
            });
    });