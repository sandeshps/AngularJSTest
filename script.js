var MyApp = angular.module("myApp",[]);

MyApp.factory("Data",function(){
    return {$scope.myInput.Text};
});


function TextController($scope) {
    $scope.myInput="Sandesh";
}

function DisplayController($scope,Data){
    $scope.myOutput=Data;    
}