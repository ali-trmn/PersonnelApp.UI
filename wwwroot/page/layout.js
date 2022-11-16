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



