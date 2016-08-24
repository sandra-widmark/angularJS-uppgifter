var app = angular.module('myApp', []);

app.controller('myController', function($scope){
    $scope.helloWorld = function() {
        console.log('Hello world!');
    }
});
