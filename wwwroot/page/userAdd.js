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

    $scope.UserAdd = function () {


        $scope.user.file = file;
        $scope.user.fileName = fileName;;
        $http({
            method: "POST",
            url: "https://localhost:7077/api/User/Add",
            data: $scope.user
        }).then(function (response) {
            alert("Kullanıcı Başarıyla Eklenmiştir.")
        })
    }

})