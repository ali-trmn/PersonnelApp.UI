var app = angular.module("pmApp", []);


function GetUrlParameter(parmeterName) {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const result = urlParams.get(parmeterName);
    if (result == null) {
        return "";
    }
    else {
        return result;
    }
}
function GetHeader() {
    return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("wbtkn")
    };
}

function GetUser() {
    return userInfo = {
        token: localStorage.getItem("wbtkn"),
        username: localStorage.getItem("username"),
        role: localStorage.getItem("role")
    }
}
function Logout() {
    localStorage.removeItem("wbtkn");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    window.location.href = "/Login/Index";
}

app.controller("LayoutController", function ($scope) {
    $scope.User = GetUser();
    if ($scope.User.token == null) {
        Logout();
    }
})

