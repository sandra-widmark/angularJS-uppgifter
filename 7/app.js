var app = angular.module('animalAnimals', []);

app.controller('myController', function($scope) {
    $scope.animals = ['hund', 'katt', 'gris', 'ko', 'gorilla', 'skata'];

    $scope.elephant = function(){
        $scope.animals.push('elefant');
    }
    $scope.pig = function(){
        $scope.animals.push('gris2');
    }
    $scope.dog = function(){
        $scope.animals.push('hund2');
    }
});