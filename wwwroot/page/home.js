app.controller("HomeController", function ($scope, $http) {

    $scope.GetUserList = function () {
        $http({
            method: "GET",
            url: "http://localhost:5184/api/Personnel/GetAllNonDeleted"
        }).then(function (response) {
            $scope.userList = response.data;
        })
    }

    $scope.GetUserList();

    $scope.UserDelete = function (id) {
        $http({
            method: "GET",
            url: "http://localhost:5184/api/Personnel/Delete?personnelId="+id
        }).then(function (response) {
            alert("Kayıt Silindi.")
        })
    }

})