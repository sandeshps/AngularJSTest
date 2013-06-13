var MyApp = angular.module("myApp",[]);

MyApp.factory("Data",function(){
    var text=$("#txtInput").val();
    return {message: text};
});


function TextController($scope) {
    $scope.myInput="Sandesh";
}

function DisplayController($scope,Data){
    $scope.myOutput=Data;
}