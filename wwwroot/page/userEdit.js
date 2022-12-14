var file;
var fileName;

app.controller("addController", function ($scope, $http) {

    $scope.ActiveUser = GetUser();


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
            headers: GetHeader(),
            url: "http://localhost:5184/api/Personnel/Get?personnelId=" + GetUrlParameter("Id")
        }).then(function (response) {
            $scope.user = response.data.data;
        })
    }

    $scope.GetUser();

    $scope.UserEdit = function () {

        $scope.user.file = file;
        $scope.user.fileName = fileName;;

        $http({
            method: "PUT",
            headers: GetHeader(),
            url: "http://localhost:5184/api/Personnel/Update?personnelId=" + GetUrlParameter("Id"),
            data: $scope.user
        }).then(function (response) {
            alert("Kullanıcı başarıla güncellendi.")
        })
    }
})