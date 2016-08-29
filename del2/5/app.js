var app = angular.module('getData', []);

app.controller('myController', function($scope, $http) {

    $scope.posts = [];

    $scope.blogLoader = function(){

        $http({
            method: 'GET',
            url:  'http://mardby.se/AJK15G/blog_json.php'
        }).then(function successCallback(response){
            $scope.posts = response.data.blog_posts;
        }, function errorCallback(response){
            $scope.posts = 'request failed';
        });
    }
});