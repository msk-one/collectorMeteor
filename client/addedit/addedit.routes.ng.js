angular.module('collectorApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('add', {
                url: '/add',
                templateUrl: 'client/profile/addeditM.view.ng.html',
                controller: 'addCtrl'
            })
            .state('edit', {
                url: '/edit/:id',
                templateUrl: 'client/profile/addeditM.view.ng.html',
                controller: 'editCtrl'
            });
    });