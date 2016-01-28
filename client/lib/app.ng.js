angular.module('collectorApp', [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap',
  'angularUtils.directives.dirPagination',
  'accounts.ui'
]);

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});




angular.module('collectorApp').config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  $httpProvider.defaults.transformRequest = function(data){
    if (data === undefined) {
      return data;
    }
    return $.param(data);
  }
}
]);

onReady = function() {
  angular.bootstrap(document, ['collectorApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}