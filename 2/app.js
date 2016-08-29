var app = angular.module('myApp', []);

app.controller('myController', function($scope){
    $scope.helloWorld = function() {
        var words = ["hello", "world", "you", "are", "beautiful", "today", "I", "think"];
        var word = words[Math.floor(Math.random() * words.length)];
        console.log(word);
    }
});
