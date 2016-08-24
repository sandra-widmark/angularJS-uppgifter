var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.staff = [
        {
            name: 'Gugge',
            age: '42',
        },
        {
            name: 'Kim',
            age: '29',
        },
        {
            name: 'Robin',
            age: '34',
        }
    ]

    $scope.addStaff = function(){
        var newStaff = { name: $scope.name, age: $scope.age };
        $scope.staff.push(newStaff);
        $scope.name = '';
        $scope.age ='';
    };
});