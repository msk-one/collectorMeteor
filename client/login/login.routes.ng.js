angular.module('collectorApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login></login>'
            });
    });
