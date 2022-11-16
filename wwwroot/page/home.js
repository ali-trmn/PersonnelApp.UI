app.controller("HomeController", function ($scope, $http) {

    $scope.GetUserList = function () {
        $http({
            method: "GET",
            url: "https://localhost:7077/api/User/GetAllNonDelete"
        }).then(function (response) {
            $scope.userList = response.data;
        })
    }

    $scope.GetUserList();

    $scope.UserDelete = function (id) {
        $http({
            method: "GET",
            url: "https://localhost:7077/api/User/Delete?userId="+id
        }).then(function (response) {
            alert("Kayıt Silindi.")
        })
    }

})