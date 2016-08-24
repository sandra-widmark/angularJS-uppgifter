var app = angular.module('animalAnimals', []);

app.controller('myController', function($scope) {
    $scope.animals = ['hund', 'katt', 'gris', 'ko', 'gorilla', 'skata'];

    $scope.cat = function(){
        $scope.animals.push('elefant');
    }
});