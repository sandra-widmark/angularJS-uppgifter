var app = angular.module('myApp',[]);

app.controller('myController', function($scope){
});

app.directive('testingTesting', function(){
    return {
        restrict: 'A',
        templateUrl: 'directive.html'
    };
});
