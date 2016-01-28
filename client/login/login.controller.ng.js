angular.module("collectorApp").directive('login', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/login/login.view.ng.html',
        controllerAs: 'login',
        controller: function ($http,$scope, $reactive, $state) {
            $reactive(this).attach($scope);
            $scope.credentials = {
                username: '',
                password: ''
            };


            $scope.returnCredentials = {
                "login": $scope.credentials.username,
                "password": $scope.credentials.password
            };

            $scope.returnRegisterUser =
            {
                "login": "",
                "uid": -1 ,
                "token": ""
            }

            $scope.errorForm = '';


            $scope.login = function () {
                setTimeout(function () {


                    $scope.returnCredentials.login = $scope.credentials.username;
                    $scope.returnCredentials.password = $scope.credentials.password;


                    $http.post('http://msk.mini.pw.edu.pl/collector/api/LoginUser', $scope.returnCredentials,{
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}

                    }).
                    success(
                        function(returnRegisterUser, status, headers, config) {

                            //Login success
                            Meteor.loginWithPassword($scope.credentials.username, $scope.credentials.password);

                            console.log(returnRegisterUser.token);
                            $state.go('main');
                            location.reload();
                        }).error(function(returnRegisterUser, status, headers, config) {
                            if(status == 404)
                            {

                                $http.post('http://msk.mini.pw.edu.pl/collector/api/RegisterUser', $scope.returnCredentials,{
                                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}

                                }).
                                success(
                                    function(returnRegisterUser, status, headers, config) {
                                        //Create new account
                                        Accounts.createUser($scope.credentials);
                                        console.log(returnRegisterUser.token);
                                        $state.go('main');
                                        location.reload();
                                    }).error(function(returnRegisterUser, status, headers, config) {
                                    $scope.errorForm = "Something went wrong";
                                });
                            }
                        else
                            {
                                $scope.errorForm = "Invalid Password";
                            }
                    });





                    Meteor.loginWithPassword($scope.credentials.username, $scope.credentials.password, function (err) {
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
                }, 500);

                console.log($scope.errorForm);
            };

        }
    }
});