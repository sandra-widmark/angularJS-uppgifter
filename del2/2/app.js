var app = angular.module('animalAnimals', []);

app.controller('myController', function($scope) {

    $scope.animals = [
        {name:'hund', checked: false},
        {name:'katt', checked: false},
        {name:'gris', checked: false},
        {name:'ko', checked: false}
    ];

});