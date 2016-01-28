angular.module('collectorApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('profile', {
                url: '/profile',
                templateUrl: 'client/profile/profile.view.ng.html',
                controller: 'ProfileCtrl'
            });
    });