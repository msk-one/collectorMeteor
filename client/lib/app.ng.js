angular.module('collectorApp', [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap',
  'angularUtils.directives.dirPagination',
  'accounts.ui'
]);

onReady = function() {
  angular.bootstrap(document, ['collectorApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}