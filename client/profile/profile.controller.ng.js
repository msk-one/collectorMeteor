angular.module('collectorApp')
    .controller('ProfileCtrl', function($scope) {
        $scope.usrdata = {
            username: collector.currentUser.username,
            password: '',
            password2: '',
            email: '',
        };

        $scope.changeUserData = function() {
          if ($scope.usrdata.password === '' && $scope.usrdata.password2 === '') {

          }
          else {

          }
        };
    });