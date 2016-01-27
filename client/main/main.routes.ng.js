angular.module('collectorApp')
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'client/main/main.view.ng.html',
    controller: 'MainCtrl'
  });
  //.state('logout', {
  //  url: '/logout',
  //  templateUrl: 'client/main/main.view.ng.html',
  //  controller: 'MainCtrl'
  //});
});