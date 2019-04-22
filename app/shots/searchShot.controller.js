angular
    .module('searchShot', [])
    .controller('SearchShotController',['$scope', '$http', function($scope, $http){
        var self = this;

        self.searchInput;
        self.searchUrl = "https://dribbble.com/search/?q="
        self.search = search;

        function search(){
            if(self.searchInput != null){
                $http({
                    method: "GET",
                    url: self.searchUrl + self.searchInput,
                    data: ''/*,
                    withCredentials: true,
                    headers:{
                        "Access-Control-Allow-Credentials": true,
                        "Access-Control-Allow-Origin":  "http://localhost:3000",
                        "Access-Control-Allow-Headers": "ETag, Link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset",
                        "Access-Control-Allow-Methods": "OPTIONS, GET",
                        "Access-Control-Max-Age": 86400
                    }*/
                    //responseType:'text/html',
                    /*headers: {
                        'Authorization': 'Bearer 156c9e530485d6a67a42275d749b0f09b5c1e3c13d1c7d05c19d2052bf6a7f68'
                    }*/

                })
                .then(function(response){
                        console.log(response.data);
                    }
                );

            }
        }

    }]);