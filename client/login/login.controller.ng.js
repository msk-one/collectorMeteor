angular.module("collectorApp").directive('login', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/login/login.view.ng.html',
        controllerAs: 'login',
        controller: function ($scope, $reactive, $state) {
            $reactive(this).attach($scope);
            var ctrl = this;

            this.credentials = {
                email: '',
                password: ''
            };

            this.error = '';

            this.login = function () {
                Meteor.loginWithPassword(this.credentials.email, this.credentials.password, function (err) {
                    if (err) {
                        if (err.error === 403) {
                            Accounts.createUser(ctrl.credentials, function (err) {
                                if (err) {
                                    ctrl.error = err;
                                }
                                else {
                                    $state.go('main');
                                }
                            });
                        }
                        else {
                            ctrl.error = err;
                        }
                    }
                    else {
                        $state.go('main');
                    }
                });
            };
        }
    }
});