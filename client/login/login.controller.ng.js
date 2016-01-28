angular.module("collectorApp").directive('login', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/login/login.view.ng.html',
        controllerAs: 'login',
        controller: function ($http, $scope, $reactive, $state) {
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
                "uid": -1,
                "token": ""
            }

            $scope.errorForm = '';





            $scope.login = function () {
                setTimeout(function () {


                    $scope.returnCredentials.login = $scope.credentials.username;
                    $scope.returnCredentials.password = $scope.credentials.password;


                    $http.post('http://msk.mini.pw.edu.pl/collector/api/LoginUser', $scope.returnCredentials, {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}

                    }).success(
                        function (returnRegisterUser, status, headers, config) {

                            //Login success
                            Meteor.loginWithPassword($scope.credentials.username, $scope.credentials.password,function(err)
                            {
                                console.log(err.message);


                                    location.reload();

                            });


                            console.log(returnRegisterUser.token);

                                $state.go('main');


                        }).error(function (returnRegisterUser, status, headers, config) {
                        $scope.errorForm = {reason: "Username and password do not match"};

                    });

                }, 500);
            };
            $scope.register = function () {
                setTimeout(function () {


                    $scope.returnCredentials.login = $scope.credentials.username;
                    $scope.returnCredentials.password = $scope.credentials.password;


                    $http.post('http://msk.mini.pw.edu.pl/collector/api/RegisterUser', $scope.returnCredentials, {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                    }).success(
                        function (returnRegisterUser, status, headers, config) {
                            //Create new account

                            returnTestCredentials = {
                                "login":  returnRegisterUser.login,
                                "password": $scope.credentials.password,
                                "uid":  returnRegisterUser.uid
                            };

                            Accounts.createUser({
                                username: returnTestCredentials.login,
                                uid:returnTestCredentials.uid,
                                password : returnTestCredentials.password

                            },function(err) {
                                console.log(err.message);
                                $state.go('main');

                            });


                            Accounts.createUser.username =  returnTestCredentials.login;
                            Accounts.createUser.uid = returnTestCredentials.uid;
                            Accounts.createUser.password =  returnTestCredentials.password;

                            console.log(returnRegisterUser.token);
                            $state.go('main');

                            setTimeout(function () {
                                location.reload();
                            },400);

                        }).error(function (returnRegisterUser, status, headers, config) {
                        $scope.errorForm = {reason: "User already exists"};
                    });


                }, 500);

            };
            console.log($scope.errorForm);


        }
    }
});