var app = angular.module('animalAnimals', []);

app.controller('myController', function($scope) {

    $scope.animals = [{name:'hund'}, {name:'katt'}, {name:'gris'}, {name:'ko'}];

});