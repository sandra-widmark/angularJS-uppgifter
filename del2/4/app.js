var app = angular.module('getData', []);

app.controller('myController', function($scope, $http) {

    $scope.words = ['Empty list'];

    $scope.dataLoader = function(){

        var number = $scope.number;

        $http({
            method: 'GET',
            url:  'http://mardby.se/AJK15G/lorem_json_array.php?numberOfWords='+ number
        }).then(function successCallback(response){
            $scope.words = response.data;
        }, function errorCallback(response){
            $scope.words = "request failed";
        });
    }
});