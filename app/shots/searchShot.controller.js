angular
    .module('app.shots.searchShot', ['app.shots.searchShot.filter'])
    .controller('SearchShotController',['$scope', '$filter', '$http', function($scope, $filter, $http){
        var self = this;

        self.newShots = [];
        self.searchInput;
        self.search = search;
        
        function search(){
            $scope.shots = $scope.originShots;
            if(self.searchInput && self.searchInput.length > 0){
                $scope.shots = $filter('filterSearchShot')($scope.shots, self.searchInput);
                $scope.position = 0;
                $scope.createImg($scope.position, $scope.shots[$scope.position]);
            } else if($scope.shots.length == 0){
                $scope.listShots();
            }
        }
    }]);