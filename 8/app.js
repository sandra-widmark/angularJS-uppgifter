var app = angular.module('animalAnimals', []);

app.controller('myController', function($scope) {
    $scope.animals = [
        {
            animal: 'Dog',
            name: 'Douglas',
            weight: '2 kg',
            color: 'brown'
        },
        {
            animal: 'Cat',
            name: 'Kitty',
            weight: '3 kg',
            color: 'orange'
        },
        {
            animal: 'Pig',
            name: 'Doris',
            weight: '20 kg',
            color: 'pink'
        },
        {
            animal: 'Cow',
            name: 'Matilda',
            weight: '60 kg',
            color: 'brown'
        },
        {
            animal: 'Gorilla',
            name: 'Chico',
            weight: '40 kg',
            color: 'black'
        },
        {
            animal: 'Bird',
            name: 'Skatis',
            weight: '1 kg',
            color: 'black'
        }
    ]
});