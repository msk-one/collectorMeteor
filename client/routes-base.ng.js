angular.module('collectorApp')
    .config(function ($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }).run(['$rootScope', '$location', '$state', function ($rootScope, $location, $state) {
    //$rootScope.$on("$routeChangeStart", function(event, next, current) {
    //    if ( Meteor.userId() === null ) {
    //        if ( next.templateUrl === "client/login/login.view.ng.html") {
    //        } else {
    //            $location.path("/login");
    //        }
    //    }
    //});

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        var isLogin = toState.name === "login";
        if (isLogin) {
            return;
        }

        if(Meteor.userId() === null) {
            e.preventDefault();
            $state.go('login');
        }
    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        switch (error) {
            case 'AUTH_REQUIRED':
                $state.go('login');
                break;
            case 'FORBIDDEN':
                $state.go('login');
                break;
            case 'UNAUTHORIZED':
                $state.go('login');
                break;
        }
    });
}]);