'use strict';

angular.module('bankSearchApp').factory('HomeFactory', function($q, $http) {
    var factory = {};

    var URL = "https://vast-shore-74260.herokuapp.com";

    factory.getAllBanksForCity = function(city) {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: URL + '/banks?city=' + city
        }).then(function(success) {
            d.resolve(success);
        }, function(error) {
            d.reject(error);
        });
        return d.promise;
    };

    return factory;
});