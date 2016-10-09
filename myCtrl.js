app.controller("myCtrl", function($scope) {
    $scope.myCol = "lightblue";
    $scope.quantity = 2;
    $scope.cost = 5;
    $scope.person = {firstName:"John",lastName:"Doe"};
    $scope.changeCol = function() {
        $scope.myCol = "red";
    };
    $scope.points = [1,15,19,2,40];
    $scope.names = [{name:"Jani",country:"Norway"},{name:"Hege",country:"Sweden"},{name:"Kai",country:"Denmark"}];
});
