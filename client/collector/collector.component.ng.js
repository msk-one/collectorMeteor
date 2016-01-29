angular.module('collectorApp').directive('collector', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/collector/collector.html',
        controllerAs: 'collector',
        controller: function ($scope, $reactive) {
            $reactive(this).attach($scope);

            this.helpers({
                    isLoggedIn: function() {
                        return Meteor.userId() !== null;
                    },
                    currentUser: function() {
                        return Meteor.user();
                    },
                    currentUserId: function() {
                        return Session.get('uid');
                    },
                    currentUserLocalId: function() {
                        return Meteor.userId();
                    }
            });

            this.logout = function() {
                Session.clear();
                //$cookies.remove('token');
                //$cookies.remove('uid');
                Accounts.logout();
                location.reload();
            }
        }
    }
});