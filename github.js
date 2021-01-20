(function(){

    let github = function($http) {

        let getUser = function(username) {
           return  $http.get("https://api.github.com/users/" + username)
               .then (function(response){
                   return response.data;
               });
        };

        let getRepos = function(user) {
            return  $http.get(user.repos_url)
                .then(function(response){
                    return response.data;
                });
        };

        return {
            getUser: getUser,
            getRepos: getRepos
        };
        
    }

    const module = angular.module("githubViewer");
      module.factory("github", github);

    } ());