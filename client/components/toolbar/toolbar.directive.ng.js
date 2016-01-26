angular.module('collectorApp')
.directive('toolbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
    replace: true
  };
});