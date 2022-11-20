var file;
var fileName;

app.controller("addController", function ($scope, $http) {

    $("#flpUpload").change(function () {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            file = new Uint8Array(event.target.result).toString();
        }
        fileReader.readAsArrayBuffer(event.target.files[0]);

        fileName = event.target.files[0].name;


        $('#userFilePreview').attr("src", URL.createObjectURL(event.target.files[0]));
    });

    $scope.GetUser = function () {
        $http({
            method: "GET",
            url: "http://localhost:5184/api/Personnel/Get?personnelId=" + GetUrlParameter("Id")
        }).then(function (response) {
            $scope.user = response.data;
        })
    }

    $scope.GetUser();

    $scope.UserEdit = function () {

        $scope.user.file = file;
        $scope.user.fileName = fileName;;

        $http({
            method: "PUT",
            url: "http://localhost:5184/api/Personnel/Update?personnelId=5" + GetUrlParameter("Id"),
            data: $scope.user
        }).then(function (response) {
            alert("Kullanıcı başarıla güncellendi.")
        })
    }
})