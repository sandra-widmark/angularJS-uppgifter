var app = angular.module('getData', []);

app.controller('myController', function($scope, $http) {

    $scope.words = ['Empty list'];

    $scope.dataLoader = function(){
        $http({
            method: 'GET',
            url:  'http://mardby.se/AJK15G/lorem_json_array.php'
        }).then(function successCallback(response){
            $scope.words = response.data;
        }, function errorCallback(response){
            $scope.words = response.data || "request failed";
        });
    }
});