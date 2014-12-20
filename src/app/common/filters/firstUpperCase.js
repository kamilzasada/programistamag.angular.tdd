'use strict';

angular.module('app.filters.firstUpperCase', [])

    .filter('firstUpperCase', function() {
        return function(string) {
            if (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        };
    });