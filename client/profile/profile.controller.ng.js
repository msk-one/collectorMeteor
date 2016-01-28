angular.module('collectorApp')
    .controller('ProfileCtrl', function ($scope) {
        $scope.usrdata = {
            username: Meteor.user().username,
            password: '',
            password2: '',
            email: Meteor.user().emails ? Meteor.user().emails[0] : '',
        };

        $scope.errors = '';

        $scope.changeUserData = function () {
            Meteor.users.update({_id: Meteor.userId()},{$set:{username: $scope.usrdata.username}});
            if ($scope.usrdata.email !== '') {
                Meteor.users.update({_id:Meteor.user()._id}, {$set:{"emails":[{address:$scope.usrdata.email}]}});
            }
            if ($scope.usrdata.password !== '' || $scope.usrdata.password2 !== '') {
                Accounts.changePassword($scope.usrdata.password, $scope.usrdata.password2, function(err) {
                    $scope.errors = err;
                });
            }
        };
    });