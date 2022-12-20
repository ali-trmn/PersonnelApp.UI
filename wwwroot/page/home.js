app.controller("HomeController", function ($scope, $http) {

    $scope.ActiveUser = GetUser();



    $scope.GetUserList = function () {
        $http({
            method: "GET",
            headers: GetHeader(),
            url: "http://localhost:5184/api/Personnel/GetAllNonDeleted"
        }).then(function (response) {
            $scope.userList = response.data.data;
        })
    }

    $scope.GetUserList();

    $scope.UserDelete = function (id) {
        $http({
            method: "GET",
            headers: GetHeader(),
            url: "http://localhost:5184/api/Personnel/Delete?personnelId="+id
        }).then(function (response) {
            $scope.GetUserList();
            alert("Kayıt Silindi.")
        })
    }

})