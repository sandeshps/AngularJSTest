var MyApp = angular.module("myApp",[]);

MyApp.factory("Data",function(){
    return {message: $("#txtInput").val()};
});


function DisplayController($scope,Data){
    $scope.data=Data;
}