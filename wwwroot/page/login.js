var app = angular.module("LoginApp", []);
app.controller("LoginController", function ($scope, $http) {

    $scope.Login = function () {
        $http({
            method: "POST",
            url: "http://localhost:5184/api/Login/Login",
            data: $scope.login
        }).then(function (d) {
            if (d.data.success) {
                localStorage.setItem("wbtkn", d.data.data.token);
                localStorage.setItem("username", d.data.data.username);
                localStorage.setItem("role", d.data.data.role);
                window.location.href = "/Home/Index";
            }
        });
    }
})