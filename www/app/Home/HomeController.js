'use strict';
angular.module('bankSearchApp')
    .controller('HomeController', function($scope, HomeFactory, ionicToast) {

        // declarations
        $scope.selected = {
            city: null
        };

        $scope.cities = [{
            Id: 1,
            Name: "BANGALORE"
        }, {
            Id: 2,
            Name: "MUMBAI"
        }, {
            Id: 3,
            Name: "CHENNAI"
        }];

        $scope.banks = [];

        // functions
        $scope.citySelected = function() {
            HomeFactory.getAllBanksForCity($scope.selected.city.Name)
                .then(function(success) {
                    if (success.status != 200) {
                        ionicToast.show('There are no banks in this city', 'bottom', false, 2500);
                    } else {
                        $scope.banks = success.data;
                    }
                }, function(error) {
                    ionicToast.show(error, 'bottom', false, 2500);
                });
        };
    });