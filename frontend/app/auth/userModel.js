angular.module('myApp.user', ['ngRoute'])

// service is a function that returns an object. can contain variables, objects, etc.

.service('User', ['Restangular', '$q', function(Restangular, $q) {
    var user = {};
    user.info = {
        id: '',
        name: ''
    };

    user.login = function(credentials) {
        var deferred = $q.defer();

        Restangular.one(user.urls.login).customPOST(credentials).then(function(data) {
            user.info = data.user;

            deferred.resolve();
        }, function(error) {
            deferred.reject(error)
        });

        return deferred.promise
    };

    user.urls = {
        login: "/login",
        logout: "/logout",
        user: "/user"
    }

    return user;

}]);
    Restangular.one('login').customPOST($scope.credentials).then(function() {
        console.log("Sheppards is awesome!")

});
// Restangular is used to get the information from the backend.


