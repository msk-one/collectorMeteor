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
                    }
            });

            this.logout = function() {
                Accounts.logout();
            }
        }
    }
});