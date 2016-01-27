angular.module("collectorApp").directive('login', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/login/login.view.ng.html',
        controllerAs: 'login',
        controller: function ($scope, $reactive, $state) {
            $reactive(this).attach($scope);
            $scope.credentials = {
                email: '',
                password: ''
            };

            $scope.errorForm = '';

            //$reactive(this).attach($scope);
            //var ctrl = this;

            $scope.login = function () {
                Meteor.loginWithPassword($scope.credentials.email, $scope.credentials.password, function (err) {
                    if (err) {
                        if (err.message === "User not found [403]") {
                            Accounts.createUser($scope.credentials, function (err) {
                                if (err) {
                                    $scope.errorForm = err;
                                }
                                else {
                                    $state.go('main');
                                    location.reload();
                                }
                            });
                        }
                        else {
                            $scope.errorForm = err;
                        }
                    }
                    else {
                        $state.go('main');
                        location.reload();
                    }
                });
                console.log($scope.errorForm);
            };

        }
    }
});