'use strict';

angular.module('app.components.contact-card', [])

    .directive('contactCard', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/common/directives/contact-card.tmpl.html',
            scope: {
                contact: '='
            },
            link: function() {

            }
        };
    });