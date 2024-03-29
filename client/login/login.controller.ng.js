//angular.module("collectorApp").service('Session', function () {
//    this.create = function (sessionId, userId, userRole) {
//        this.id = sessionId;
//        this.userId = userId;
//        this.userRole = userRole;
//    };
//    this.destroy = function () {
//        this.id = null;
//        this.userId = null;
//        this.userRole = null;
//    };
//});

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
            };

            $scope.errorForm = '';

            $scope.login = function () {
                $scope.returnCredentials.login = $scope.credentials.username;
                $scope.returnCredentials.password = $scope.credentials.password;
                setTimeout(function () {
                    $http.post('http://msk.mini.pw.edu.pl/collector/api/LoginUser', $scope.returnCredentials, {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                    }).success(
                        function (returnRegisterUser, status, headers, config) {
                            //Login success
                            Meteor.loginWithPassword($scope.credentials.username, $scope.credentials.password, function (err) {
                                if (err) {
                                    $scope.errorForm = err;
                                }
                                else {
                                    //Session.create(returnRegisterUser.token, returnRegisterUser.uid, "regular");
                                    //$cookies.put('token', returnRegisterUser.token);
                                    //$cookies.put('uid', returnRegisterUser.uid);
                                    Session.setDefaultAuth('token', returnRegisterUser.token);
                                    Session.setDefaultAuth('uid', returnRegisterUser.uid);
                                    $state.go('main');
                                    location.reload();
                                }
                            });
                        }).error(function (returnRegisterUser, status, headers, config) {
                        $scope.errorForm = {reason: "Username and password do not match"};
                    });
                }, 500);
            };

            $scope.register = function () {
                $scope.returnCredentials.login = $scope.credentials.username;
                $scope.returnCredentials.password = $scope.credentials.password;
                setTimeout(function () {
                    $http.post('http://msk.mini.pw.edu.pl/collector/api/RegisterUser', $scope.returnCredentials, {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                    }).success(
                        function (returnRegisterUser, status, headers, config) {
                            //Create new account

                            var returnTestCredentials = {
                                "login": returnRegisterUser.login,
                                "password": $scope.credentials.password,
                                "uid": returnRegisterUser.uid
                            };


                            Accounts.createUser({
                                username: returnTestCredentials.login,
                                uid: returnTestCredentials.uid,
                                password: returnTestCredentials.password
                            }, function (err) {
                                if (err) {
                                    $scope.errorForm = err;
                                }
                                else {
                                    //Session.create(returnRegisterUser.token, returnRegisterUser.uid, "regular");
                                    //$cookies.put('token', returnRegisterUser.token);
                                    //$cookies.put('uid', returnRegisterUser.uid);
                                    Session.setDefaultAuth('token', returnRegisterUser.token);
                                    Session.setDefaultAuth('uid', returnRegisterUser.uid);
                                    $state.go('main');
                                    location.reload();
                                }
                            });

                            Accounts.createUser.username = returnTestCredentials.login;
                            Accounts.createUser.uid = returnTestCredentials.uid;
                            Accounts.createUser.password = returnTestCredentials.password;

                            Meteor.loginWithPassword(returnTestCredentials.login, returnTestCredentials.password, function (err) {
                                if (err) {
                                    $scope.errorForm = err;
                                }
                                else {
                                    //Session.create(returnRegisterUser.token, returnRegisterUser.uid, "regular");
                                   // $cookies.put('token', returnRegisterUser.token);
                                    //$cookies.put('uid', returnRegisterUser.uid);
                                    Session.setDefaultAuth('token', returnRegisterUser.token);
                                    Session.setDefaultAuth('uid', returnRegisterUser.uid);
                                    $state.go('main');
                                    location.reload();
                                }
                            });

                            //console.log(returnRegisterUser.token);

                        }).error(function (returnRegisterUser, status, headers, config) {
                        $scope.errorForm = {reason: "User already exists"};
                    });
                }, 500);
            };
        }
    }
});