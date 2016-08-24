var app = angular.module('myApp',[]);

app.controller('myController', function($scope){
    $scope.myVariable = 1;
    $scope.increaseValue = function(){
        $scope.myVariable++;
    }
});