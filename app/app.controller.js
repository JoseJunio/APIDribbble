angular
    .module("dribbbleApp", ['shots'])
    .controller('appController', ['$scope', 'ListShotsController',  function($scope, ListShotsController){
        // Initialize variables
        $scope.name1 = '';
        this.name2 = '';
        $scope.init = init;

        function init(){
            //ListShotsController.teste();
        }

        $scope.greeting1 = `Hello ${$scope.name1}`;
        this.greeting2 = `Hi ${this.name2}`;

    }]);