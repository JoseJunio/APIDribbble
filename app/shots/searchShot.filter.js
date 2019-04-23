angular
    .module('app.shots.searchShot.filter', [])
    .filter('filterSearchShot', function() {
        return function(shots, search) {
            
            if (!search) { 
              return shots; 
            } else {
              var newShots = [];
              var search = search.toLowerCase();
              
              for (var shot of shots) {
                if (shot.title.toLowerCase().indexOf(search) > -1 || 
                    shot.html_url.toLowerCase().indexOf(search) > -1) { 
                        newShots.push(shot); 
                }
              }              
              return newShots;
            }
          };
  });