app.controller("HomeController", function ($scope, $http) {

    $scope.GetUserList = function () {
        $http({
            method: "GET",
            url: "https://localhost:7077/api/User/GetAll"
        }).then(function (response) {
            $scope.userList = response.data;
        })
    }

    $scope.GetUserList();


})