app.controller("LoginController", function ($scope, $http) {

    $scope.Login = function () {
        $http({
            method: "POST",
            url: "http://localhost:5184/api/Login/Login",
            data: $scope.login
        }).then(function (response) {
            $scope.jtwtoken = response.data;
        })
    }
})