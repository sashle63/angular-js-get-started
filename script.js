(function () {

    const app = angular.module("githubViewer", [])

    let MainController = function (
        $scope, github, $interval,
        $log, $anchorScroll, $location) {

        let onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos,onError);
        };

        let onRepos = function (data) {
            $scope.repos = data;
            $location.hash("userDetails");
            $anchorScroll();
        };

        let onError = function (reason) {
            $scope.error = "Could not fetch the data. Reason: " + reason.statusCode;
        };

        let decrementCountdown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown <1 ) {
                $scope.search($scope.username);
            }
        };

        let countdownInterval = null;
        let startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function(username) {
            $log.info("Searching for " + username);
            github.getUser(username).then(onUserComplete, onError);
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown=null;
            }
        };

        $scope.username = "angular";
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;
        startCountdown();


    };

    app.controller("MainController", MainController );

}());

