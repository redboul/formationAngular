angular.module('formationAngularTPS',['ui.bootstrap']).controller('FormController', function($scope){

    $scope.person ={};
    $scope.person.name='julien';
    $scope.person.nameHistory=['julien'];
    $scope.person.age=10;
    $scope.showFormInputs = function(){
        alert($scope.person.name + ' ' + $scope.person.age);
    }
}).controller('SubmitController', function($scope, $filter){
    $scope.$watch('person.name', function(value){
        $scope.person.nameHistory.push(value);
        console.log($scope.person.nameHistory);
    });
    $scope.alerts =[];
    $scope.showFormInputs = function(){
        var filter = $filter('majeur');
        $scope.alerts.push({msg: $scope.person.name + ' ' + $scope.person.age + ' -> ' + filter($scope.person.age), type: 'success'});
    };
    $scope.closeAlert = function(index){
        $scope.alerts.splice(index, 1);
    };
}).filter("majeur", function(){
    return function(input){
        return input >=18 ? 'oui' : 'non';
    }
});
