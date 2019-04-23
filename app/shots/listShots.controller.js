angular
    .module('app.shots.listShots', [])
    .controller('ListShotsController',['$scope', '$http', function($scope, $http){
        var self = this;
        
        $scope.shots = [];
        $scope.listShots = listShots;
        $scope.position = 0;
        $scope.createImg = createImg;

        self.url = "https://api.dribbble.com/v2/user/shots"
        //self.accessToken = "156c9e530485d6a67a42275d749b0f09b5c1e3c13d1c7d05c19d2052bf6a7f68";
        //self.accessToken = '93e550681e5a64b65c2e8a685981342919e354bf990da632302026db9feea8f6';
        self.accessToken = '1530dc6d0512f9048e259dece21684aa9881b766213fdf62598b0cbabf66f7e9';

        self.init = listShots;
        self.next = next;
        self.previous = previous;
        
        
        self.likes = [];
        self.like = like;
        self.listOptions = ['Small', 'Normal', 'Large'];
        self.selectedLength = self.listOptions[1];
        self.classLike = 'far fa-heart';
        
        function listShots(){
            $http({
                method: "GET",
                url: self.url + "?access_token=" + self.accessToken,
            })
            .then(function(response){
                    $scope.shots = response.data;
                    $scope.originShots = response.data;
                    console.log($scope.shots);
                    if(self.likes.length == 0){
                        self.likes[$scope.shots.length];
                    }  
                    createImg(0);
                }
            );
        }

        function next(){
            if($scope.position >= 0 && $scope.position < ($scope.shots.length-1)){
                $scope.position++;
                createImg($scope.position);
            }
        }
    
        function previous(){
            if($scope.position > 0 && $scope.position <= ($scope.shots.length-1)){
                $scope.position--;
                createImg($scope.position);
            } 
        }

        function createImg(index, img){
            var shot = angular.element(document.querySelector('#shots'));
            var val = img ? img : $scope.shots[index];

            var imgDiv = angular.element(document.querySelector('.shot'));

            if(imgDiv){
                imgDiv.remove();
            }

            if(typeof self.likes[index] === "undefined"){
                self.likes[index] = 0;
            }
            
            console.log(val);
            
            var srcIm;

            if(self.selectedLength == 'Large'){
                srcImg = val.images.hidpi;
            } else if(self.selectedLength == 'Normal'){
                srcImg = val.images.normal;
            } else {
                srcImg = val.images.teaser;    
            }

            shot.prepend('<a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ srcImg +'"/></a>')
        
        }

        function like(){
            if (self.likes[$scope.position] == 1) {
                self.likes[$scope.position] = 0;
                self.classLike = "far fa-heart";
            } else {
                self.likes[$scope.position] = 1;
                self.classLike = "fas fa-heart";
            }
        }

    }]);