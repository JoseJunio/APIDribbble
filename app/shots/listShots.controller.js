angular
    .module('listShots', [])
    .controller('ListShotsController',['$scope', '$http', function($scope, $http){
        var self = this;
        
        self.url = "https://api.dribbble.com/v2/user/shots"
        //self.accessToken = "156c9e530485d6a67a42275d749b0f09b5c1e3c13d1c7d05c19d2052bf6a7f68";
        self.accessToken = '93e550681e5a64b65c2e8a685981342919e354bf990da632302026db9feea8f6';
        self.shots = [];

        self.init = listShots;
        self.listShots = listShots;
        self.next = next;
        self.previous = previous;
        self.classLike = 'far fa-heart';
        
        self.listOptions = ['Small', 'Normal', 'Large'];
        self.position = 0;
        self.selectedLength = self.listOptions[1];

        self.likes = [];
        self.like = like;

        function listShots(){
            $http({
                method: "GET",
                url: self.url + "?access_token=" + self.accessToken,
            })
            .then(function(response){
                    self.shots = response.data;
                    if(self.likes.length == 0){
                        self.likes[self.shots.length];
                    }  
                    createImg(0);
                }
            );
        }

        function next(){
            if(self.position >= 0 && self.position < (self.shots.length-1)){
                self.position++;
                createImg(self.position);
            } else{
                console.log('acabou')
            }
        }
    
        function previous(){
            if(self.position > 0 && self.position <= (self.shots.length-1)){
                self.position--;
                createImg(self.position);
            } else{
                console.log('acabou')
            }
        }

        function createImg(index){
            var shot = angular.element(document.querySelector('#shots'));
            var val = self.shots[index];

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
            if (self.likes[self.position] == 1) {
                self.likes[self.position] = 0;
                self.classLike = "far fa-heart";
            } else {
                self.likes[self.position] = 1;
                self.classLike = "fas fa-heart";
            }
        }

        function doLike() {
            if (self.userVotes == 1) {
                delete self.userVotes;
                self.votes--;
            } else {
                self.userVotes = 1;
                self.votes++;
            }
        }

    }]);